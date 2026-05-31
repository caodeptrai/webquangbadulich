const prisma = require('../utils/prisma');
const { createHttpError } = require('../utils/httpError');

const listDestinationCategories = () => prisma.destinationCategory.findMany({
  include: { _count: { select: { destinations: true } } },
  orderBy: { name: 'asc' },
});

const listArticleCategories = () => prisma.articleCategory.findMany({
  include: { _count: { select: { articles: true } } },
  orderBy: { name: 'asc' },
});

const listProvinces = (query) => {
  const where = query.region ? { region: query.region } : {};

  return prisma.province.findMany({
    where,
    include: { _count: { select: { destinations: true } } },
    orderBy: { name: 'asc' },
  });
};

const getRegionLabel = (region) => {
  if (region === 'NORTH') return 'Miền Bắc';
  if (region === 'CENTRAL') return 'Miền Trung';
  return 'Miền Nam';
};

const listRegions = async () => {
  const provinces = await prisma.province.findMany({ select: { region: true } });
  const regions = [...new Set(provinces.map((province) => province.region))];

  return regions.map((region) => ({
    value: region,
    label: getRegionLabel(region),
  }));
};

const listTags = () => prisma.tag.findMany({
  include: { _count: { select: { destinations: true } } },
  orderBy: { name: 'asc' },
});

const createDestinationCategory = (data) => prisma.destinationCategory.create({ data });

const updateDestinationCategory = (id, data) => prisma.destinationCategory.update({
  where: { id },
  data,
});

const deleteDestinationCategory = async (id) => {
  const category = await prisma.destinationCategory.findUnique({
    where: { id },
    include: { _count: { select: { destinations: true } } },
  });

  if (!category) {
    throw createHttpError(404, 'Category not found');
  }

  if (category._count.destinations > 0) {
    throw createHttpError(400, 'Cannot delete a category that still has destinations');
  }

  await prisma.destinationCategory.delete({ where: { id } });
  return { message: 'Category deleted' };
};

const createArticleCategory = (data) => prisma.articleCategory.create({ data });

const updateArticleCategory = (id, data) => prisma.articleCategory.update({
  where: { id },
  data,
});

const deleteArticleCategory = async (id) => {
  const category = await prisma.articleCategory.findUnique({
    where: { id },
    include: { _count: { select: { articles: true } } },
  });

  if (!category) {
    throw createHttpError(404, 'Category not found');
  }

  if (category._count.articles > 0) {
    throw createHttpError(400, 'Cannot delete a category that still has articles');
  }

  await prisma.articleCategory.delete({ where: { id } });
  return { message: 'Category deleted' };
};

module.exports = {
  createArticleCategory,
  createDestinationCategory,
  deleteArticleCategory,
  deleteDestinationCategory,
  listArticleCategories,
  listDestinationCategories,
  listProvinces,
  listRegions,
  listTags,
  updateArticleCategory,
  updateDestinationCategory,
};
