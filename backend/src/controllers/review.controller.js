const asyncHandler = require('../utils/asyncHandler');
const reviewService = require('../services/review.service');

const listReviewsByDestination = asyncHandler(async (req, res) => {
  const result = await reviewService.listReviewsByDestination(req.params.id, req.query);
  res.json(result);
});

const listReviewsByTour = asyncHandler(async (req, res) => {
  const result = await reviewService.listReviewsByTour(req.params.id, req.query);
  res.json(result);
});

const listReviews = asyncHandler(async (req, res) => {
  const result = await reviewService.listReviews(req.query);
  res.json(result);
});

const createReview = asyncHandler(async (req, res) => {
  const review = await reviewService.createReview({
    userId: req.user.id,
    data: req.body,
  });
  res.status(201).json(review);
});

const deleteReview = asyncHandler(async (req, res) => {
  const result = await reviewService.deleteReview({
    id: req.params.id,
    user: req.user,
  });
  res.json(result);
});

module.exports = {
  createReview,
  deleteReview,
  listReviews,
  listReviewsByDestination,
  listReviewsByTour,
};
