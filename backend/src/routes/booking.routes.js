const { Router } = require('express');
const { body, query } = require('express-validator');

const bookingController = require('../controllers/booking.controller');
const { BOOKING_STATUSES } = require('../services/booking.service');
const { authenticate, requireAdmin } = require('../middlewares/auth');
const { validate } = require('../middlewares/validate');

const router = Router();

router.post('/', authenticate, [
  body('tourId').isString().notEmpty().withMessage('Vui lòng chọn tour'),
  body('startDate').isISO8601().withMessage('Vui lòng chọn ngày khởi hành hợp lệ'),
  body('peopleCount').isInt({ min: 1 }).withMessage('Số người phải lớn hơn 0'),
  body('contactName').trim().isLength({ min: 2 }).withMessage('Vui lòng nhập họ tên liên hệ'),
  body('contactEmail').isEmail().withMessage('Email liên hệ không hợp lệ'),
  body('contactPhone').trim().isLength({ min: 8 }).withMessage('Vui lòng nhập số điện thoại liên hệ'),
  body('note').optional({ nullable: true, checkFalsy: true }).trim(),
], validate, bookingController.createBooking);

router.get('/my', authenticate, bookingController.listMyBookings);

router.get('/', authenticate, requireAdmin, [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn(BOOKING_STATUSES),
  query('tourId').optional().isString(),
], validate, bookingController.listBookings);

router.put('/:id/status', authenticate, requireAdmin, [
  body('status').isIn(BOOKING_STATUSES).withMessage('Trạng thái booking không hợp lệ'),
], validate, bookingController.updateBookingStatus);

router.put('/:id/cancel', authenticate, bookingController.cancelBooking);

module.exports = router;
