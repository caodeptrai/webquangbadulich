const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');
const { generateSlug } = require('../utils/slug');

const buildTourOrderBy = (sort, order) => {
  const direction = order === 'asc' ? 'asc' : 'desc';

  if (sort === 'price') return { price: direction };
  if (sort === 'rating') return { reviews: { _count: direction } };
  return { createdAt: direction };
};

const listTours = async (query) => {
  const {
    search,
    destinationId,
    minPrice,
    maxPrice,
    sort = 'createdAt',
    order = 'desc',
    featured,
  } = query;
  const { page, limit, skip } = getPagination(query, { limit: 12 });
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

  const [tours, total] = await Promise.all([
    prisma.tour.findMany({
      where,
      include: {
        destination: true,
        schedules: { orderBy: [{ day: 'asc' }, { time: 'asc' }] },
        reviews: { select: { rating: true } },
      },
      orderBy: buildTourOrderBy(sort, order),
      skip,
      take: limit,
    }),
    prisma.tour.count({ where }),
  ]);

  const toursWithRating = tours.map((tour) => ({
    ...tour,
    avgRating: tour.reviews.length > 0
      ? tour.reviews.reduce((sum, review) => sum + review.rating, 0) / tour.reviews.length
      : 0,
    reviewCount: tour.reviews.length,
  }));

  return {
    data: toursWithRating,
    pagination: buildPagination({ page, limit, total }),
  };
};

const getFeaturedTours = () => prisma.tour.findMany({
  where: { isActive: true, isFeatured: true },
  include: {
    destination: true,
    schedules: { orderBy: [{ day: 'asc' }, { time: 'asc' }], take: 3 },
  },
  take: 6,
});

const getTour = async (id) => {
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
    throw createHttpError(404, 'Tour not found');
  }

  return tour;
};

const buildTourImageCreate = (images) => images.map((img, idx) => ({
  url: img.url,
  caption: img.caption || null,
  isPrimary: idx === 0,
  sortOrder: idx,
}));

const createTour = async (data) => {
  const { images, slug: inputSlug, schedules, ...tourData } = data;

  return prisma.tour.create({
    data: {
      ...tourData,
      slug: inputSlug || generateSlug(tourData.name || 'tour'),
      schedules: schedules ? { create: schedules } : undefined,
      images: images && images.length > 0 ? {
        create: buildTourImageCreate(images),
      } : undefined,
    },
    include: {
      schedules: true,
      images: { orderBy: { sortOrder: 'asc' } },
      destination: true,
    },
  });
};

const updateTour = async (id, data) => {
  const { images, slug: inputSlug, schedules, ...tourData } = data;

  if (schedules) {
    await prisma.tourSchedule.deleteMany({ where: { tourId: id } });
  }
  if (images) {
    await prisma.tourImage.deleteMany({ where: { tourId: id } });
  }

  const updateData = { ...tourData };
  if (inputSlug) updateData.slug = inputSlug;
  if (schedules) updateData.schedules = { create: schedules };
  if (images && images.length > 0) updateData.images = { create: buildTourImageCreate(images) };

  return prisma.tour.update({
    where: { id },
    data: updateData,
    include: {
      schedules: true,
      images: { orderBy: { sortOrder: 'asc' } },
      destination: true,
    },
  });
};

const deleteTour = async (id) => {
  await prisma.tour.delete({ where: { id } });
  return { message: 'Tour deleted' };
};

module.exports = {
  createTour,
  deleteTour,
  getFeaturedTours,
  getTour,
  listTours,
  updateTour,
};
