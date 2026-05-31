const { Router } = require('express');
const { body } = require('express-validator');

const settingsController = require('../controllers/settings.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.get('/', settingsController.listSettings);
router.get('/group/:group', settingsController.getSettingsByGroup);
router.get('/key/:key', settingsController.getSettingByKey);

router.put('/', authenticate, requireAdmin, [
  body('key').trim().notEmpty().withMessage('Key is required'),
  body('value').notEmpty().withMessage('Value is required'),
], validate, settingsController.upsertSetting);

router.put('/bulk', authenticate, requireAdmin, settingsController.bulkUpdateSettings);
router.delete('/:key', authenticate, requireAdmin, settingsController.deleteSetting);

module.exports = router;
