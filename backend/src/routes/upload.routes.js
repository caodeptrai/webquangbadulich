const { Router } = require('express');

const uploadController = require('../controllers/upload.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { upload } = require('../services/upload.service');

const router = Router();

router.post('/image', authenticate, requireAdmin, upload.single('image'), uploadController.uploadImage);
router.post('/images', authenticate, requireAdmin, upload.array('images', 10), uploadController.uploadImages);

module.exports = router;
