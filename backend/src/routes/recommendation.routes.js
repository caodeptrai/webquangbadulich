const { Router } = require('express');
const { body } = require('express-validator');

const recommendationController = require('../controllers/recommendation.controller');
const {
  isBudgetMatch,
  normalizeCategorySlugs,
  parseEstimatedCostRange,
} = require('../services/recommendation.service');
const { optionalAuth } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.post('/', optionalAuth, [
  body('preferences').optional().isObject(),
], validate, recommendationController.getRecommendations);

router.get('/popular', recommendationController.getPopularDestinations);

module.exports = router;
module.exports._test = {
  normalizeCategorySlugs,
  parseEstimatedCostRange,
  isBudgetMatch,
};
