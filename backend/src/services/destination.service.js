const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');

const buildDestinationOrderBy = (sort, order) => {
  const direction = order === 'asc' ? 'asc' : 'desc';

  if (sort === 'rating') return { rating: direction };
  if (sort === 'reviewCount') return { reviewCount: direction };
  if (sort === 'viewCount') return { viewCount: direction };
  return { createdAt: direction };
};

const normalizeDestinationData = (data) => {
  const { images, tagIds, highlights, ...destinationData } = data;

  if (highlights && typeof highlights === 'object') {
    destinationData.highlights = JSON.stringify(highlights);
  } else if (highlights !== undefined) {
    destinationData.highlights = highlights;
  }

  return { destinationData, images, tagIds };
};

const listDestinations = async (query) => {
  const {
    search,
    category,
    province,
    region,
    sort = 'createdAt',
    order = 'desc',
    featured,
    minRating,
  } = query;
  const { page, limit, skip } = getPagination(query, { limit: 12 });
  const where = { isActive: true };

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { description: { contains: search } },
    ];
  }
  if (category) where.categoryId = category;
  if (province) where.provinceId = province;
  if (featured === 'true') where.isFeatured = true;
  if (minRating) where.rating = { gte: parseFloat(minRating) };
  if (region) where.province = { region };

  const [destinations, total] = await Promise.all([
    prisma.destination.findMany({
      where,
      include: {
        images: { where: { isPrimary: true }, take: 1 },
        category: true,
        province: true,
      },
      orderBy: buildDestinationOrderBy(sort, order),
      skip,
      take: limit,
    }),
    prisma.destination.count({ where }),
  ]);

  return {
    data: destinations,
    pagination: buildPagination({ page, limit, total }),
  };
};

const getFeaturedDestinations = () => prisma.destination.findMany({
  where: { isActive: true, isFeatured: true },
  include: {
    images: { where: { isPrimary: true }, take: 1 },
    category: true,
    province: true,
  },
  orderBy: { rating: 'desc' },
  take: 8,
});

const getDestination = async (id) => {
  const destination = await prisma.destination.findFirst({
    where: {
      OR: [{ id }, { slug: id }],
      isActive: true,
    },
    include: {
      images: { orderBy: [{ isPrimary: 'desc' }, { sortOrder: 'asc' }] },
      category: true,
      province: true,
      tags: { include: { tag: true } },
      reviews: {
        include: { user: { select: { id: true, fullName: true, avatar: true } } },
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
      relatedTo: { include: { from: { include: { images: { where: { isPrimary: true }, take: 1 } } } } },
    },
  });

  if (!destination) {
    throw createHttpError(404, 'Destination not found');
  }

  await prisma.destination.update({
    where: { id: destination.id },
    data: { viewCount: { increment: 1 } },
  });

  return destination;
};

const createDestination = async (data) => {
  const { destinationData, images, tagIds } = normalizeDestinationData(data);

  return prisma.destination.create({
    data: {
      ...destinationData,
      images: images ? {
        create: images.map((img, idx) => ({ ...img, sortOrder: idx })),
      } : undefined,
      tags: tagIds ? {
        create: tagIds.map((tagId) => ({ tag: { connect: { id: tagId } } })),
      } : undefined,
    },
    include: {
      images: true,
      category: true,
      province: true,
      tags: { include: { tag: true } },
    },
  });
};

const updateDestination = async (id, data) => {
  const { destinationData, images, tagIds } = normalizeDestinationData(data);

  return prisma.destination.update({
    where: { id },
    data: {
      ...destinationData,
      images: images ? {
        deleteMany: {},
        create: images.map((img, idx) => ({ ...img, sortOrder: idx })),
      } : undefined,
      tags: tagIds ? {
        deleteMany: {},
        create: tagIds.map((tagId) => ({ tag: { connect: { id: tagId } } })),
      } : undefined,
    },
    include: {
      images: true,
      category: true,
      province: true,
      tags: { include: { tag: true } },
    },
  });
};

const deleteDestination = async (id) => {
  await prisma.destination.delete({ where: { id } });
  return { message: 'Destination deleted' };
};

module.exports = {
  createDestination,
  deleteDestination,
  getDestination,
  getFeaturedDestinations,
  listDestinations,
  updateDestination,
};
