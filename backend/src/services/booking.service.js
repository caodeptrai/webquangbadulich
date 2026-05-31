const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');
const mailService = require('./mail.service');

const BOOKING_STATUSES = ['pending', 'confirmed', 'cancelled'];

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

const buildBookingCode = () => (
  `BK${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`
);

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

const createBooking = async ({ userId, data }) => {
  const { tourId, peopleCount, contactName, contactEmail, contactPhone, note } = data;
  const startDate = normalizeDate(data.startDate);

  if (!isFutureOrToday(startDate)) {
    throw createHttpError(400, 'Ngày khởi hành phải lớn hơn hoặc bằng ngày hiện tại');
  }

  const tour = await prisma.tour.findFirst({ where: { id: tourId, isActive: true } });
  if (!tour) {
    throw createHttpError(404, 'Tour không tồn tại hoặc đã ngừng hoạt động');
  }

  const seats = parseInt(peopleCount, 10);
  const availability = await ensureAvailability(tour, startDate, seats);
  if (!availability.available) {
    const error = createHttpError(400, 'Số chỗ không đủ, vui lòng chọn số lượng ít hơn');
    error.remainingSeats = Math.max(availability.remainingSeats, 0);
    throw error;
  }

  const unitPrice = tour.discountPrice || tour.price;
  const booking = await prisma.booking.create({
    data: {
      bookingCode: buildBookingCode(),
      userId,
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

  await mailService.notifyBookingCreated(booking);

  return { message: 'Đặt tour thành công', booking };
};

const listMyBookings = (userId) => prisma.booking.findMany({
  where: { userId },
  include: getBookingInclude(),
  orderBy: { createdAt: 'desc' },
});

const listBookings = async (query) => {
  const { page, limit, skip } = getPagination(query);
  const { status, tourId } = query;
  const where = {};

  if (status) where.status = status;
  if (tourId) where.tourId = tourId;

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: getBookingInclude(),
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.booking.count({ where }),
  ]);

  return {
    data: bookings,
    pagination: buildPagination({ page, limit, total }),
  };
};

const updateBookingStatus = async (id, status) => {
  const existing = await prisma.booking.findUnique({
    where: { id },
    select: { status: true },
  });

  if (!existing) {
    throw createHttpError(404, 'Không tìm thấy booking');
  }

  const booking = await prisma.booking.update({
    where: { id },
    data: { status },
    include: getBookingInclude(),
  });

  if (status === 'confirmed' && existing.status !== 'confirmed') {
    await mailService.notifyBookingConfirmed(booking);
  }

  return { message: 'Cập nhật trạng thái booking thành công', booking };
};

const cancelBooking = async ({ id, userId }) => {
  const existing = await prisma.booking.findFirst({
    where: { id, userId },
  });

  if (!existing) {
    throw createHttpError(404, 'Không tìm thấy booking');
  }

  if (existing.status !== 'pending') {
    throw createHttpError(400, 'Chỉ có thể hủy booking đang chờ xác nhận');
  }

  const booking = await prisma.booking.update({
    where: { id: existing.id },
    data: { status: 'cancelled' },
    include: getBookingInclude(),
  });

  return { message: 'Hủy booking thành công', booking };
};

module.exports = {
  BOOKING_STATUSES,
  cancelBooking,
  createBooking,
  listBookings,
  listMyBookings,
  updateBookingStatus,
};
