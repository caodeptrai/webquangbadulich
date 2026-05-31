const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');
const { generateSlug } = require('../utils/slug');

const buildArticleOrderBy = (sort, order) => {
  const direction = order === 'asc' ? 'asc' : 'desc';
  return sort === 'viewCount' ? { viewCount: direction } : { createdAt: direction };
};

const listArticles = async (query) => {
  const {
    search,
    category,
    tag,
    sort = 'createdAt',
    order = 'desc',
    featured,
  } = query;
  const { page, limit, skip } = getPagination(query, { limit: 9 });
  const where = { isPublished: true };

  if (search) {
    where.OR = [
      { title: { contains: search } },
      { content: { contains: search } },
    ];
  }
  if (category) where.categoryId = category;
  if (tag) where.tags = { contains: tag };
  if (featured === 'true') where.isFeatured = true;

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      include: {
        category: true,
        author: { select: { id: true, fullName: true, avatar: true } },
        images: { orderBy: { sortOrder: 'asc' } },
      },
      orderBy: buildArticleOrderBy(sort, order),
      skip,
      take: limit,
    }),
    prisma.article.count({ where }),
  ]);

  return {
    data: articles,
    pagination: buildPagination({ page, limit, total }),
  };
};

const getFeaturedArticles = () => prisma.article.findMany({
  where: { isPublished: true, isFeatured: true },
  include: {
    category: true,
    author: { select: { fullName: true } },
    images: { orderBy: { sortOrder: 'asc' } },
  },
  orderBy: { viewCount: 'desc' },
  take: 6,
});

const getRecentArticles = () => prisma.article.findMany({
  where: { isPublished: true },
  include: {
    category: true,
    author: { select: { fullName: true } },
    images: { orderBy: { sortOrder: 'asc' } },
  },
  orderBy: { publishedAt: 'desc' },
  take: 6,
});

const getArticle = async (id) => {
  const article = await prisma.article.findFirst({
    where: {
      OR: [{ id }, { slug: id }],
      isPublished: true,
    },
    include: {
      category: true,
      author: { select: { id: true, fullName: true, avatar: true } },
      images: { orderBy: { sortOrder: 'asc' } },
    },
  });

  if (!article) {
    throw createHttpError(404, 'Article not found');
  }

  await prisma.article.update({
    where: { id: article.id },
    data: { viewCount: { increment: 1 } },
  });

  return article;
};

const buildArticleImageCreate = (images) => images.map((img, index) => ({
  url: img.url,
  caption: img.caption || null,
  isPrimary: index === 0,
  sortOrder: index,
}));

const createArticle = async ({ authorId, data }) => {
  const { images, slug: inputSlug, ...articleData } = data;

  return prisma.article.create({
    data: {
      ...articleData,
      slug: inputSlug || generateSlug(articleData.title || 'article'),
      authorId,
      publishedAt: data.isPublished ? new Date() : null,
      images: images && images.length > 0 ? {
        create: buildArticleImageCreate(images),
      } : undefined,
    },
    include: {
      category: true,
      author: { select: { fullName: true } },
      images: { orderBy: { sortOrder: 'asc' } },
    },
  });
};

const updateArticle = async (id, data) => {
  const { images, slug: inputSlug, ...articleData } = data;
  const updateData = {
    ...articleData,
    publishedAt: data.isPublished ? new Date() : undefined,
  };

  if (inputSlug) {
    updateData.slug = inputSlug;
  }

  if (images) {
    await prisma.articleImage.deleteMany({ where: { articleId: id } });
    if (images.length > 0) {
      updateData.images = { create: buildArticleImageCreate(images) };
    }
  }

  return prisma.article.update({
    where: { id },
    data: updateData,
    include: {
      category: true,
      author: { select: { fullName: true } },
      images: { orderBy: { sortOrder: 'asc' } },
    },
  });
};

const deleteArticle = async (id) => {
  await prisma.article.delete({ where: { id } });
  return { message: 'Article deleted' };
};

module.exports = {
  createArticle,
  deleteArticle,
  getArticle,
  getFeaturedArticles,
  getRecentArticles,
  listArticles,
  updateArticle,
};
