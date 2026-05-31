const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const prisma = require('../utils/prisma');
const { authenticate, optionalAuth } = require('../middlewares/auth');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// POST recommendation
router.post('/', optionalAuth, [
  body('preferences').optional().isObject(),
], validate, async (req, res, next) => {
  try {
    const { preferences = {} } = req.body;
    const userId = req.user?.id || null;
    const sessionId = uuidv4();

    const {
      regions = [],       // ['NORTH', 'CENTRAL', 'SOUTH']
      categories = [],    // category slugs
      budget = null,      // 'low', 'medium', 'high'
      duration = null,    // '1-2', '3-5', '5+'
      tags = [],          // tag slugs
      excludeIds = [],    // exclude already visited/liked
    } = preferences;

    const normalizedRegions = normalizeArray(regions);
    const normalizedCategories = normalizeCategorySlugs(categories);
    const normalizedTags = normalizeArray(tags);
    const normalizedExcludeIds = normalizeArray(excludeIds);
    const normalizedBudget = normalizeBudget(budget);

    // Build WHERE clause for rule-based scoring
    const whereConditions = [{ isActive: true }];

    if (normalizedRegions.length > 0) {
      whereConditions.push({ province: { region: { in: normalizedRegions } } });
    }

    if (normalizedCategories.length > 0) {
      whereConditions.push({ category: { slug: { in: normalizedCategories } } });
    }

    if (normalizedTags.length > 0) {
      whereConditions.push({ tags: { some: { tag: { slug: { in: normalizedTags } } } } });
    }

    if (normalizedExcludeIds.length > 0) {
      whereConditions.push({ id: { notIn: normalizedExcludeIds } });
    }

    // Fetch candidates
    const candidates = await prisma.destination.findMany({
      where: { AND: whereConditions },
      include: {
        images: { where: { isPrimary: true }, take: 1 },
        category: true,
        province: true,
        tags: { include: { tag: true } },
        reviews: { select: { rating: true } },
      },
      take: 50,
    });

    const filteredCandidates = normalizedBudget
      ? candidates.filter(dest => isBudgetMatch(dest.estimatedCost, normalizedBudget))
      : candidates;

    // Score and rank
    const scored = filteredCandidates.map(dest => {
      let score = 0;

      // Rating score (max 40 points)
      score += (dest.rating / 5) * 40;

      // Review count bonus (max 20 points)
      score += Math.min(dest.reviewCount / 10, 1) * 20;

      // Featured bonus (10 points)
      if (dest.isFeatured) score += 10;

      // Region match bonus (10 points)
      if (normalizedRegions.includes(dest.province.region)) score += 10;

      // Category match bonus (10 points)
      if (normalizedCategories.includes(dest.category.slug)) score += 10;

      // Budget matching
      if (normalizedBudget && isBudgetMatch(dest.estimatedCost, normalizedBudget)) score += 10;

      // Popularity boost
      score += Math.min(dest.viewCount / 1000, 1) * 10;

      return { ...dest, recommendationScore: Math.min(100, Math.round(score * 100) / 100) };
    });

    // Sort by score and take top results
    const recommendations = scored
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, 12)
      .map(({ recommendationScore, ...dest }) => ({
        ...dest,
        recommendationScore,
        matchReasons: buildMatchReasons({ regions: normalizedRegions, categories: normalizedCategories, budget: normalizedBudget, dest }),
      }));

    // Log recommendation
    await prisma.recommendationLog.create({
      data: {
        userId,
        sessionId,
        preferences: JSON.stringify(preferences),
        results: JSON.stringify(recommendations.map(d => d.id)),
        algorithm: 'rule-based-scoring',
      },
    });

    res.json({
      sessionId,
      recommendations,
      total: recommendations.length,
      filters: {
        regions: normalizedRegions,
        categories: normalizedCategories,
        budget: normalizedBudget,
      },
      algorithm: 'rule-based-scoring',
    });
  } catch (error) {
    next(error);
  }
});


function normalizeArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function normalizeBudget(value) {
  return ['low', 'medium', 'high'].includes(value) ? value : null;
}

function normalizeCategorySlugs(categories) {
  const aliases = {
    bien: 'bien-dao',
    beach: 'bien-dao',
    dao: 'bien-dao',
    historic: 'di-san',
    history: 'di-san',
    'di-tich': 'di-san',
    'lich-su': 'di-san',
    mountain: 'nui-rung',
    nature: 'thien-nhien',
  };

  return [...new Set(normalizeArray(categories).map(slug => aliases[slug] || slug))];
}

function parseEstimatedCostRange(estimatedCost = '') {
  const normalized = estimatedCost.toLowerCase();
  if (!normalized || normalized.includes('miễn')) return { min: 0, max: 0 };

  const values = normalized
    .match(/\d+(?:[.,]\d+)*/g)?.map(value => Number(value.replace(/[.,]/g, '')))
    .filter(Number.isFinite) || [];

  if (!values.length) return null;
  return { min: Math.min(...values), max: Math.max(...values) };
}

function isBudgetMatch(estimatedCost, budget) {
  const range = parseEstimatedCostRange(estimatedCost);
  if (!range) return false;

  if (budget === 'low') return range.min <= 1500000;
  if (budget === 'medium') return range.max >= 1500000 && range.min <= 4000000;
  if (budget === 'high') return range.max >= 4000000;
  return true;
}

// Helper to explain match reasons
function buildMatchReasons({ regions, categories, budget, dest }) {
  const reasons = [];
  if (regions.includes(dest.province.region)) reasons.push(`Thuộc khu vực ${dest.province.region === 'NORTH' ? 'Miền Bắc' : dest.province.region === 'CENTRAL' ? 'Miền Trung' : 'Miền Nam'}`);
  if (categories.includes(dest.category.slug)) reasons.push(`Danh mục ${dest.category.name}`);
  if (budget && isBudgetMatch(dest.estimatedCost, budget)) reasons.push('Phù hợp ngân sách');
  if (dest.isFeatured) reasons.push('Địa điểm nổi bật');
  if (dest.rating >= 4) reasons.push(`Đánh giá cao (${dest.rating}/5)`);
  if (dest.reviewCount > 50) reasons.push('Được nhiều du khách yêu thích');
  return reasons;
}

// GET popular destinations
router.get('/popular', async (req, res, next) => {
  try {
    const destinations = await prisma.destination.findMany({
      where: { isActive: true },
      include: {
        images: { where: { isPrimary: true }, take: 1 },
        category: true,
        province: true,
      },
      orderBy: { viewCount: 'desc' },
      take: 6,
    });
    res.json(destinations);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
module.exports._test = {
  normalizeCategorySlugs,
  parseEstimatedCostRange,
  isBudgetMatch,
};
