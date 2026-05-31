const { Router } = require('express');
const { body } = require('express-validator');

const destinationController = require('../controllers/destination.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/', destinationController.listDestinations);
router.get('/featured', destinationController.getFeaturedDestinations);
router.get('/:id', destinationController.getDestination);

router.post('/', authenticate, requireAdmin, [
  body('name').trim().isLength({ min: 2 }),
  body('slug').trim().isLength({ min: 2 }),
  body('description').notEmpty(),
  body('address').notEmpty(),
  body('provinceId').notEmpty(),
  body('categoryId').notEmpty(),
], validate, destinationController.createDestination);

router.put('/:id', authenticate, requireAdmin, destinationController.updateDestination);
router.delete('/:id', authenticate, requireAdmin, destinationController.deleteDestination);

module.exports = router;
