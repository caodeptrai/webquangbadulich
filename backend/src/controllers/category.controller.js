const asyncHandler = require('../utils/asyncHandler');
const categoryService = require('../services/category.service');

const listDestinationCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.listDestinationCategories();
  res.json(categories);
});

const listArticleCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.listArticleCategories();
  res.json(categories);
});

const listProvinces = asyncHandler(async (req, res) => {
  const provinces = await categoryService.listProvinces(req.query);
  res.json(provinces);
});

const listRegions = asyncHandler(async (req, res) => {
  const regions = await categoryService.listRegions();
  res.json(regions);
});

const listTags = asyncHandler(async (req, res) => {
  const tags = await categoryService.listTags();
  res.json(tags);
});

const createDestinationCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createDestinationCategory(req.body);
  res.status(201).json(category);
});

const updateDestinationCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateDestinationCategory(req.params.id, req.body);
  res.json(category);
});

const deleteDestinationCategory = asyncHandler(async (req, res) => {
  const result = await categoryService.deleteDestinationCategory(req.params.id);
  res.json(result);
});

const createArticleCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createArticleCategory(req.body);
  res.status(201).json(category);
});

const updateArticleCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateArticleCategory(req.params.id, req.body);
  res.json(category);
});

const deleteArticleCategory = asyncHandler(async (req, res) => {
  const result = await categoryService.deleteArticleCategory(req.params.id);
  res.json(result);
});

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
