const asyncHandler = require('../utils/asyncHandler');
const favoriteService = require('../services/favorite.service');

const listFavorites = asyncHandler(async (req, res) => {
  const favorites = await favoriteService.listFavorites(req.user.id);
  res.json(favorites);
});

const addFavorite = asyncHandler(async (req, res) => {
  const favorite = await favoriteService.addFavorite({
    userId: req.user.id,
    destinationId: req.body.destinationId,
  });
  res.status(201).json(favorite);
});

const removeFavorite = asyncHandler(async (req, res) => {
  const result = await favoriteService.removeFavorite({
    userId: req.user.id,
    destinationId: req.params.destinationId,
  });
  res.json(result);
});

const checkFavorite = asyncHandler(async (req, res) => {
  const result = await favoriteService.checkFavorite({
    userId: req.user.id,
    destinationId: req.params.destinationId,
  });
  res.json(result);
});

module.exports = {
  addFavorite,
  checkFavorite,
  listFavorites,
  removeFavorite,
};
