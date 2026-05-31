const { v4: uuidv4 } = require('uuid');

const prisma = require('../utils/prisma');

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

  return [...new Set(normalizeArray(categories).map((slug) => aliases[slug] || slug))];
}

function parseEstimatedCostRange(estimatedCost = '') {
  const normalized = estimatedCost.toLowerCase();
  if (!normalized || normalized.includes('miá»…n') || normalized.includes('miễn')) {
    return { min: 0, max: 0 };
  }

  const values = normalized
    .match(/\d+(?:[.,]\d+)*/g)?.map((value) => Number(value.replace(/[.,]/g, '')))
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

const getRegionLabel = (region) => {
  if (region === 'NORTH') return 'Miá»n Báº¯c';
  if (region === 'CENTRAL') return 'Miá»n Trung';
  return 'Miá»n Nam';
};

const buildMatchReasons = ({ regions, categories, budget, dest }) => {
  const reasons = [];

  if (regions.includes(dest.province.region)) {
    reasons.push(`Thuá»™c khu vá»±c ${getRegionLabel(dest.province.region)}`);
  }
  if (categories.includes(dest.category.slug)) reasons.push(`Danh má»¥c ${dest.category.name}`);
  if (budget && isBudgetMatch(dest.estimatedCost, budget)) reasons.push('PhÃ¹ há»£p ngÃ¢n sÃ¡ch');
  if (dest.isFeatured) reasons.push('Äá»‹a Ä‘iá»ƒm ná»•i báº­t');
  if (dest.rating >= 4) reasons.push(`ÄÃ¡nh giÃ¡ cao (${dest.rating}/5)`);
  if (dest.reviewCount > 50) reasons.push('ÄÆ°á»£c nhiá»u du khÃ¡ch yÃªu thÃ­ch');

  return reasons;
};

const getRecommendations = async ({ preferences = {}, userId = null }) => {
  const sessionId = uuidv4();
  const {
    regions = [],
    categories = [],
    budget = null,
    tags = [],
    excludeIds = [],
  } = preferences;

  const normalizedRegions = normalizeArray(regions);
  const normalizedCategories = normalizeCategorySlugs(categories);
  const normalizedTags = normalizeArray(tags);
  const normalizedExcludeIds = normalizeArray(excludeIds);
  const normalizedBudget = normalizeBudget(budget);
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
    ? candidates.filter((dest) => isBudgetMatch(dest.estimatedCost, normalizedBudget))
    : candidates;

  const scored = filteredCandidates.map((dest) => {
    let score = 0;

    score += (dest.rating / 5) * 40;
    score += Math.min(dest.reviewCount / 10, 1) * 20;
    if (dest.isFeatured) score += 10;
    if (normalizedRegions.includes(dest.province.region)) score += 10;
    if (normalizedCategories.includes(dest.category.slug)) score += 10;
    if (normalizedBudget && isBudgetMatch(dest.estimatedCost, normalizedBudget)) score += 10;
    score += Math.min(dest.viewCount / 1000, 1) * 10;

    return { ...dest, recommendationScore: Math.min(100, Math.round(score * 100) / 100) };
  });

  const recommendations = scored
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 12)
    .map(({ recommendationScore, ...dest }) => ({
      ...dest,
      recommendationScore,
      matchReasons: buildMatchReasons({
        regions: normalizedRegions,
        categories: normalizedCategories,
        budget: normalizedBudget,
        dest,
      }),
    }));

  await prisma.recommendationLog.create({
    data: {
      userId,
      sessionId,
      preferences: JSON.stringify(preferences),
      results: JSON.stringify(recommendations.map((destination) => destination.id)),
      algorithm: 'rule-based-scoring',
    },
  });

  return {
    sessionId,
    recommendations,
    total: recommendations.length,
    filters: {
      regions: normalizedRegions,
      categories: normalizedCategories,
      budget: normalizedBudget,
    },
    algorithm: 'rule-based-scoring',
  };
};

const getPopularDestinations = () => prisma.destination.findMany({
  where: { isActive: true },
  include: {
    images: { where: { isPrimary: true }, take: 1 },
    category: true,
    province: true,
  },
  orderBy: { viewCount: 'desc' },
  take: 6,
});

module.exports = {
  getPopularDestinations,
  getRecommendations,
  isBudgetMatch,
  normalizeCategorySlugs,
  parseEstimatedCostRange,
};
