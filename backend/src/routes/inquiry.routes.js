const { Router } = require('express');
const { body } = require('express-validator');

const inquiryController = require('../controllers/inquiry.controller');
const { authenticate, optionalAuth, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/', authenticate, requireAdmin, inquiryController.listInquiries);
router.get('/my', authenticate, inquiryController.listUserInquiries);

router.post('/', optionalAuth, [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail(),
  body('subject').trim().isLength({ min: 2 }),
  body('message').trim().isLength({ min: 10 }),
], validate, inquiryController.createInquiry);

router.put('/:id', authenticate, requireAdmin, inquiryController.updateInquiry);
router.delete('/:id', authenticate, requireAdmin, inquiryController.deleteInquiry);

module.exports = router;
