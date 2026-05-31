const { Router } = require('express');
const { body, query, validationResult } = require('express-validator');
const prisma = require('../utils/prisma');
const { authenticate, requireAdmin } = require('../middlewares/auth');

const router = Router();

const BOOKING_STATUSES = ['pending', 'confirmed', 'cancelled'];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const getBookingInclude = () => ({
  tour: {
    select: {
      id: true,
      name: true,
      slug: true,
      duration: true,
      price: true,
      discountPrice: true,
      imageUrl: true,
      maxPeople: true,
      destination: { select: { id: true, name: true, slug: true } },
    },
  },
  user: { select: { id: true, fullName: true, email: true, phone: true } },
});

const normalizeDate = (value) => {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
};

const isFutureOrToday = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

const buildBookingCode = () => `BK${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

const ensureAvailability = async (tour, startDate, peopleCount, excludeBookingId = null) => {
  const where = {
    tourId: tour.id,
    startDate,
    status: { not: 'cancelled' },
  };

  if (excludeBookingId) {
    where.id = { not: excludeBookingId };
  }

  const aggregate = await prisma.booking.aggregate({
    where,
    _sum: { peopleCount: true },
  });

  const bookedSeats = aggregate._sum.peopleCount || 0;
  const remainingSeats = tour.maxPeople - bookedSeats;

  return {
    bookedSeats,
    remainingSeats,
    available: peopleCount <= remainingSeats,
  };
};

// Create a booking for the current user
router.post('/', authenticate, [
  body('tourId').isString().notEmpty().withMessage('Vui lòng chọn tour'),
  body('startDate').isISO8601().withMessage('Vui lòng chọn ngày khởi hành hợp lệ'),
  body('peopleCount').isInt({ min: 1 }).withMessage('Số người phải lớn hơn 0'),
  body('contactName').trim().isLength({ min: 2 }).withMessage('Vui lòng nhập họ tên liên hệ'),
  body('contactEmail').isEmail().withMessage('Email liên hệ không hợp lệ'),
  body('contactPhone').trim().isLength({ min: 8 }).withMessage('Vui lòng nhập số điện thoại liên hệ'),
  body('note').optional({ nullable: true, checkFalsy: true }).trim(),
], validate, async (req, res, next) => {
  try {
    const { tourId, peopleCount, contactName, contactEmail, contactPhone, note } = req.body;
    const startDate = normalizeDate(req.body.startDate);

    if (!isFutureOrToday(startDate)) {
      return res.status(400).json({ error: 'Ngày khởi hành phải lớn hơn hoặc bằng ngày hiện tại' });
    }

    const tour = await prisma.tour.findFirst({ where: { id: tourId, isActive: true } });
    if (!tour) {
      return res.status(404).json({ error: 'Tour không tồn tại hoặc đã ngừng hoạt động' });
    }

    const seats = parseInt(peopleCount, 10);
    const availability = await ensureAvailability(tour, startDate, seats);
    if (!availability.available) {
      return res.status(400).json({
        error: 'Số chỗ không đủ, vui lòng chọn số lượng ít hơn',
        remainingSeats: Math.max(availability.remainingSeats, 0),
      });
    }

    const unitPrice = tour.discountPrice || tour.price;
    const booking = await prisma.booking.create({
      data: {
        bookingCode: buildBookingCode(),
        userId: req.user.id,
        tourId: tour.id,
        startDate,
        peopleCount: seats,
        totalAmount: unitPrice * seats,
        contactName,
        contactEmail,
        contactPhone,
        note: note || null,
      },
      include: getBookingInclude(),
    });

    res.status(201).json({ message: 'Đặt tour thành công', booking });
  } catch (error) {
    next(error);
  }
});

// Current user's bookings
router.get('/my', authenticate, async (req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: getBookingInclude(),
      orderBy: { createdAt: 'desc' },
    });
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

// Admin booking list
router.get('/', authenticate, requireAdmin, [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn(BOOKING_STATUSES),
  query('tourId').optional().isString(),
], validate, async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, tourId } = req.query;
    const where = {};
    if (status) where.status = status;
    if (tourId) where.tourId = tourId;

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const take = parseInt(limit, 10);

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: getBookingInclude(),
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.booking.count({ where }),
    ]);

    res.json({
      data: bookings,
      pagination: {
        page: parseInt(page, 10),
        limit: take,
        total,
        totalPages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    next(error);
  }
});

// Admin updates booking status
router.put('/:id/status', authenticate, requireAdmin, [
  body('status').isIn(BOOKING_STATUSES).withMessage('Trạng thái booking không hợp lệ'),
], validate, async (req, res, next) => {
  try {
    const booking = await prisma.booking.update({
      where: { id: req.params.id },
      data: { status: req.body.status },
      include: getBookingInclude(),
    });
    res.json({ message: 'Cập nhật trạng thái booking thành công', booking });
  } catch (error) {
    next(error);
  }
});

// Current user cancels own pending booking
router.put('/:id/cancel', authenticate, async (req, res, next) => {
  try {
    const existing = await prisma.booking.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!existing) {
      return res.status(404).json({ error: 'Không tìm thấy booking' });
    }

    if (existing.status !== 'pending') {
      return res.status(400).json({ error: 'Chỉ có thể hủy booking đang chờ xác nhận' });
    }

    const booking = await prisma.booking.update({
      where: { id: existing.id },
      data: { status: 'cancelled' },
      include: getBookingInclude(),
    });

    res.json({ message: 'Hủy booking thành công', booking });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
