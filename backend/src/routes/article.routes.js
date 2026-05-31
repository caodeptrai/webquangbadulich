const { Router } = require('express');
const { body } = require('express-validator');

const articleController = require('../controllers/article.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/', articleController.listArticles);
router.get('/featured', articleController.getFeaturedArticles);
router.get('/recent', articleController.getRecentArticles);
router.get('/:id', articleController.getArticle);

router.post('/', authenticate, requireAdmin, [
  body('title').trim().isLength({ min: 2 }),
  body('content').notEmpty(),
  body('categoryId').notEmpty(),
], validate, articleController.createArticle);

router.put('/:id', authenticate, requireAdmin, articleController.updateArticle);
router.delete('/:id', authenticate, requireAdmin, articleController.deleteArticle);

module.exports = router;
