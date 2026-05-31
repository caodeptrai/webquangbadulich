const { Router } = require('express');

const userController = require('../controllers/user.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth');

const router = Router();

router.get('/', authenticate, requireAdmin, userController.listUsers);
router.put('/:id/toggle-active', authenticate, requireAdmin, userController.toggleActive);
router.delete('/:id', authenticate, requireAdmin, userController.deleteUser);

module.exports = router;
