const asyncHandler = require('../utils/asyncHandler');
const recommendationService = require('../services/recommendation.service');

const getRecommendations = asyncHandler(async (req, res) => {
  const result = await recommendationService.getRecommendations({
    preferences: req.body.preferences || {},
    userId: req.user?.id || null,
  });
  res.json(result);
});

const getPopularDestinations = asyncHandler(async (req, res) => {
  const destinations = await recommendationService.getPopularDestinations();
  res.json(destinations);
});

module.exports = { getPopularDestinations, getRecommendations };
