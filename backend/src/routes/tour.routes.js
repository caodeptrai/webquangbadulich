const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const prisma = require('../utils/prisma');
const { authenticate, requireAdmin } = require('../middlewares/auth');

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// GET all tours (public)
router.get('/', async (req, res, next) => {
  try {
    const {
      page = 1, limit = 12,
      search, destinationId, minPrice, maxPrice,
      sort = 'createdAt', order = 'desc',
      featured
    } = req.query;

    const where = { isActive: true };

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ];
    }
    if (destinationId) where.destinationId = destinationId;
    if (featured === 'true') where.isFeatured = true;
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const orderBy = {};
    if (sort === 'price') {
      orderBy.price = order;
    } else if (sort === 'rating') {
      orderBy = { reviews: { _count: order } };
    } else {
      orderBy.createdAt = order;
    }

    const [tours, total] = await Promise.all([
      prisma.tour.findMany({
        where,
        include: {
          destination: true,
          schedules: { orderBy: { day: 'asc', time: 'asc' } },
          reviews: { select: { rating: true } },
        },
        orderBy,
        skip,
        take: parseInt(limit),
      }),
      prisma.tour.count({ where }),
    ]);

    // Calculate average rating
    const toursWithRating = tours.map(tour => ({
      ...tour,
      avgRating: tour.reviews.length > 0
        ? tour.reviews.reduce((sum, r) => sum + r.rating, 0) / tour.reviews.length
        : 0,
      reviewCount: tour.reviews.length,
    }));

    res.json({
      data: toursWithRating,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET featured tours
router.get('/featured', async (req, res, next) => {
  try {
    const tours = await prisma.tour.findMany({
      where: { isActive: true, isFeatured: true },
      include: {
        destination: true,
        schedules: { take: 3 },
      },
      take: 6,
    });
    res.json(tours);
  } catch (error) {
    next(error);
  }
});

// GET single tour
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tour = await prisma.tour.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
        isActive: true,
      },
      include: {
        destination: true,
        images: { orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }] },
        schedules: { orderBy: [{ day: 'asc' }, { time: 'asc' }] },
        reviews: {
          include: { user: { select: { id: true, fullName: true, avatar: true } } },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    res.json(tour);
  } catch (error) {
    next(error);
  }
});

// POST create tour (admin)
router.post('/', authenticate, requireAdmin, [
  body('name').trim().isLength({ min: 2 }),
  body('slug').trim().isLength({ min: 2 }),
  body('price').isFloat({ min: 0 }),
  body('maxPeople').isInt({ min: 1 }),
], validate, async (req, res, next) => {
  try {
    const data = req.body;

    const tour = await prisma.tour.create({
      data: {
        ...data,
        schedules: data.schedules ? {
          create: data.schedules,
        } : undefined,
        images: data.images ? {
          create: data.images,
        } : undefined,
      },
      include: {
        schedules: true,
        images: true,
        destination: true,
      },
    });

    res.status(201).json(tour);
  } catch (error) {
    next(error);
  }
});

// PUT update tour (admin)
router.put('/:id', authenticate, requireAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Delete existing schedules and recreate
    if (data.schedules) {
      await prisma.tourSchedule.deleteMany({ where: { tourId: id } });
    }

    const tour = await prisma.tour.update({
      where: { id },
      data: {
        ...data,
        schedules: data.schedules ? {
          create: data.schedules,
        } : undefined,
      },
      include: {
        schedules: true,
        images: true,
        destination: true,
      },
    });

    res.json(tour);
  } catch (error) {
    next(error);
  }
});

// DELETE tour (admin)
router.delete('/:id', authenticate, requireAdmin, async (req, res, next) => {
  try {
    await prisma.tour.delete({ where: { id: req.params.id } });
    res.json({ message: 'Tour deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
