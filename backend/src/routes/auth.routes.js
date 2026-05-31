const { Router } = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('fullName').trim().isLength({ min: 2 }),
  body('phone').optional().isMobilePhone('vi-VN'),
], validate, authController.register);

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
], validate, authController.login);

router.get('/profile', authenticate, authController.getProfile);

router.put('/profile', authenticate, [
  body('fullName').optional().trim().isLength({ min: 2 }),
  body('phone').optional().isMobilePhone('vi-VN'),
], validate, authController.updateProfile);

router.put('/change-password', authenticate, [
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 6 }),
], validate, authController.changePassword);

module.exports = router;
