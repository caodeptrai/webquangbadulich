const prisma = require('../utils/prisma');
const { createHttpError } = require('../utils/httpError');

const listFavorites = (userId) => prisma.favorite.findMany({
  where: { userId },
  include: {
    destination: {
      include: {
        images: { where: { isPrimary: true }, take: 1 },
        category: true,
        province: true,
      },
    },
  },
  orderBy: { createdAt: 'desc' },
});

const addFavorite = async ({ userId, destinationId }) => {
  const existing = await prisma.favorite.findUnique({
    where: { userId_destinationId: { userId, destinationId } },
  });

  if (existing) {
    throw createHttpError(409, 'Already in favorites');
  }

  return prisma.favorite.create({
    data: { userId, destinationId },
    include: {
      destination: {
        include: {
          images: { where: { isPrimary: true }, take: 1 },
          category: true,
        },
      },
    },
  });
};

const removeFavorite = async ({ userId, destinationId }) => {
  await prisma.favorite.deleteMany({ where: { userId, destinationId } });
  return { message: 'Removed from favorites' };
};

const checkFavorite = async ({ userId, destinationId }) => {
  const favorite = await prisma.favorite.findUnique({
    where: { userId_destinationId: { userId, destinationId } },
  });

  return { isFavorite: !!favorite };
};

module.exports = {
  addFavorite,
  checkFavorite,
  listFavorites,
  removeFavorite,
};
