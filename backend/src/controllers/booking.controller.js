const asyncHandler = require('../utils/asyncHandler');
const bookingService = require('../services/booking.service');

const createBooking = asyncHandler(async (req, res) => {
  const result = await bookingService.createBooking({
    userId: req.user.id,
    data: req.body,
  });
  res.status(201).json(result);
});

const listMyBookings = asyncHandler(async (req, res) => {
  const bookings = await bookingService.listMyBookings(req.user.id);
  res.json(bookings);
});

const listBookings = asyncHandler(async (req, res) => {
  const result = await bookingService.listBookings(req.query);
  res.json(result);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const result = await bookingService.updateBookingStatus(req.params.id, req.body.status);
  res.json(result);
});

const cancelBooking = asyncHandler(async (req, res) => {
  const result = await bookingService.cancelBooking({
    id: req.params.id,
    userId: req.user.id,
  });
  res.json(result);
});

module.exports = {
  cancelBooking,
  createBooking,
  listBookings,
  listMyBookings,
  updateBookingStatus,
};
