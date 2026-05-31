const { Router } = require('express');
const { body } = require('express-validator');

const tourController = require('../controllers/tour.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/', tourController.listTours);
router.get('/featured', tourController.getFeaturedTours);
router.get('/:id', tourController.getTour);

router.post('/', authenticate, requireAdmin, [
  body('name').trim().isLength({ min: 2 }),
  body('price').isFloat({ min: 0 }),
  body('maxPeople').isInt({ min: 1 }),
], validate, tourController.createTour);

router.put('/:id', authenticate, requireAdmin, tourController.updateTour);
router.delete('/:id', authenticate, requireAdmin, tourController.deleteTour);

module.exports = router;
