const { Router } = require('express');

const favoriteController = require('../controllers/favorite.controller');
const { authenticate } = require('../middlewares/auth');

const router = Router();

router.get('/', authenticate, favoriteController.listFavorites);
router.post('/', authenticate, favoriteController.addFavorite);
router.delete('/:destinationId', authenticate, favoriteController.removeFavorite);
router.get('/check/:destinationId', authenticate, favoriteController.checkFavorite);

module.exports = router;
