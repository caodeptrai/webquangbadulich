const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');

const updateDestinationRating = async (destinationId) => {
  const stats = await prisma.review.aggregate({
    where: { destinationId },
    _avg: { rating: true },
    _count: { rating: true },
  });

  await prisma.destination.update({
    where: { id: destinationId },
    data: {
      rating: stats._avg.rating || 0,
      reviewCount: stats._count.rating,
    },
  });
};

const listReviewsByDestination = async (destinationId, query) => {
  const { page, limit, skip } = getPagination(query);
  const where = { destinationId };

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      include: { user: { select: { id: true, fullName: true, avatar: true } } },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.review.count({ where }),
  ]);

  return {
    data: reviews,
    pagination: buildPagination({ page, limit, total }),
  };
};

const listReviewsByTour = async (tourId, query) => {
  const { page, limit, skip } = getPagination(query);
  const where = { tourId };

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      include: { user: { select: { id: true, fullName: true, avatar: true } } },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.review.count({ where }),
  ]);

  return {
    data: reviews,
    pagination: buildPagination({ page, limit, total }),
  };
};

const listReviews = async (query) => {
  const { page, limit, skip } = getPagination(query);

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      include: {
        user: { select: { id: true, fullName: true, avatar: true } },
        destination: { select: { id: true, name: true } },
        tour: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.review.count(),
  ]);

  return {
    data: reviews,
    pagination: buildPagination({ page, limit, total }),
  };
};

const createReview = async ({ userId, data }) => {
  const { destinationId, tourId, rating, comment } = data;

  if (!destinationId && !tourId) {
    throw createHttpError(400, 'Must provide destinationId or tourId');
  }

  const review = await prisma.review.create({
    data: { userId, destinationId, tourId, rating, comment },
    include: { user: { select: { id: true, fullName: true, avatar: true } } },
  });

  if (destinationId) {
    await updateDestinationRating(destinationId);
  }

  return review;
};

const deleteReview = async ({ id, user }) => {
  const review = await prisma.review.findUnique({ where: { id } });
  if (!review) {
    throw createHttpError(404, 'Review not found');
  }

  if (review.userId !== user.id && user.role.name !== 'admin') {
    throw createHttpError(403, 'Not authorized');
  }

  await prisma.review.delete({ where: { id } });

  if (review.destinationId) {
    await updateDestinationRating(review.destinationId);
  }

  return { message: 'Review deleted' };
};

module.exports = {
  createReview,
  deleteReview,
  listReviews,
  listReviewsByDestination,
  listReviewsByTour,
};
