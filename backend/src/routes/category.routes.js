const { Router } = require('express');
const prisma = require('../utils/prisma');

const router = Router();

// Destination categories
router.get('/destinations', async (req, res, next) => {
  try {
    const categories = await prisma.destinationCategory.findMany({
      include: { _count: { select: { destinations: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

// Article categories
router.get('/articles', async (req, res, next) => {
  try {
    const categories = await prisma.articleCategory.findMany({
      include: { _count: { select: { articles: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

// Provinces
router.get('/provinces', async (req, res, next) => {
  try {
    const { region } = req.query;
    const where = region ? { region } : {};
    const provinces = await prisma.province.findMany({
      where,
      include: { _count: { select: { destinations: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(provinces);
  } catch (error) {
    next(error);
  }
});

// Regions
router.get('/regions', async (req, res, next) => {
  try {
    const provinces = await prisma.province.findMany({ select: { region: true } });
    const regions = [...new Set(provinces.map(p => p.region))];
    res.json(regions.map(r => ({ value: r, label: r === 'NORTH' ? 'Miền Bắc' : r === 'CENTRAL' ? 'Miền Trung' : 'Miền Nam' })));
  } catch (error) {
    next(error);
  }
});

// Tags
router.get('/tags', async (req, res, next) => {
  try {
    const tags = await prisma.tag.findMany({
      include: { _count: { select: { destinations: true } } },
      orderBy: { name: 'asc' },
    });
    res.json(tags);
  } catch (error) {
    next(error);
  }
});

// Admin: CRUD categories
router.post('/destinations', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.destinationCategory.create({ data: req.body });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

router.put('/destinations/:id', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.destinationCategory.update({ where: { id: req.params.id }, data: req.body });
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete('/destinations/:id', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.destinationCategory.findUnique({
      where: { id: req.params.id },
      include: { _count: { select: { destinations: true } } },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    if (category._count.destinations > 0) {
      return res.status(400).json({ error: 'Cannot delete a category that still has destinations' });
    }

    await prisma.destinationCategory.delete({ where: { id: req.params.id } });
    res.json({ message: 'Category deleted' });
  } catch (error) {
    next(error);
  }
});

router.post('/articles', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.articleCategory.create({ data: req.body });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

router.put('/articles/:id', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.articleCategory.update({ where: { id: req.params.id }, data: req.body });
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete('/articles/:id', require('../middlewares/auth').authenticate, require('../middlewares/auth').requireAdmin, async (req, res, next) => {
  try {
    const category = await prisma.articleCategory.findUnique({
      where: { id: req.params.id },
      include: { _count: { select: { articles: true } } },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    if (category._count.articles > 0) {
      return res.status(400).json({ error: 'Cannot delete a category that still has articles' });
    }

    await prisma.articleCategory.delete({ where: { id: req.params.id } });
    res.json({ message: 'Category deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
