const { Router } = require('express');
const { body } = require('express-validator');

const reviewController = require('../controllers/review.controller');
const { authenticate } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/destination/:id', reviewController.listReviewsByDestination);
router.get('/tour/:id', reviewController.listReviewsByTour);
router.get('/', authenticate, reviewController.listReviews);

router.post('/', authenticate, [
  body('rating').isInt({ min: 1, max: 5 }),
  body('comment').trim().isLength({ min: 1 }),
], validate, reviewController.createReview);

router.delete('/:id', authenticate, reviewController.deleteReview);

module.exports = router;
