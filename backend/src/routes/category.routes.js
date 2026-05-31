const { Router } = require('express');

const categoryController = require('../controllers/category.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');

const router = Router();

router.get('/destinations', categoryController.listDestinationCategories);
router.get('/articles', categoryController.listArticleCategories);
router.get('/provinces', categoryController.listProvinces);
router.get('/regions', categoryController.listRegions);
router.get('/tags', categoryController.listTags);

router.post('/destinations', authenticate, requireAdmin, categoryController.createDestinationCategory);
router.put('/destinations/:id', authenticate, requireAdmin, categoryController.updateDestinationCategory);
router.delete('/destinations/:id', authenticate, requireAdmin, categoryController.deleteDestinationCategory);

router.post('/articles', authenticate, requireAdmin, categoryController.createArticleCategory);
router.put('/articles/:id', authenticate, requireAdmin, categoryController.updateArticleCategory);
router.delete('/articles/:id', authenticate, requireAdmin, categoryController.deleteArticleCategory);

module.exports = router;
