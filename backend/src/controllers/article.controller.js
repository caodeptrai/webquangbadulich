const asyncHandler = require('../utils/asyncHandler');
const articleService = require('../services/article.service');

const listArticles = asyncHandler(async (req, res) => {
  const result = await articleService.listArticles(req.query);
  res.json(result);
});

const getFeaturedArticles = asyncHandler(async (req, res) => {
  const articles = await articleService.getFeaturedArticles();
  res.json(articles);
});

const getRecentArticles = asyncHandler(async (req, res) => {
  const articles = await articleService.getRecentArticles();
  res.json(articles);
});

const getArticle = asyncHandler(async (req, res) => {
  const article = await articleService.getArticle(req.params.id);
  res.json(article);
});

const createArticle = asyncHandler(async (req, res) => {
  const article = await articleService.createArticle({
    authorId: req.user.id,
    data: req.body,
  });
  res.status(201).json(article);
});

const updateArticle = asyncHandler(async (req, res) => {
  const article = await articleService.updateArticle(req.params.id, req.body);
  res.json(article);
});

const deleteArticle = asyncHandler(async (req, res) => {
  const result = await articleService.deleteArticle(req.params.id);
  res.json(result);
});

module.exports = {
  createArticle,
  deleteArticle,
  getArticle,
  getFeaturedArticles,
  getRecentArticles,
  listArticles,
  updateArticle,
};
