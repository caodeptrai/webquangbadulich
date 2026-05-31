const { Router } = require('express');
const { body } = require('express-validator');

const chatbotController = require('../controllers/chatbot.controller');
const { authenticate, optionalAuth } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.post('/', optionalAuth, [
  body('message').trim().isLength({ min: 1 }),
], validate, chatbotController.sendMessage);

router.get('/history', authenticate, chatbotController.getHistory);
router.get('/context', chatbotController.getContextPreview);

module.exports = router;
