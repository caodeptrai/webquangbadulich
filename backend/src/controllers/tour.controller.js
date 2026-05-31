const asyncHandler = require('../utils/asyncHandler');
const tourService = require('../services/tour.service');

const listTours = asyncHandler(async (req, res) => {
  const result = await tourService.listTours(req.query);
  res.json(result);
});

const getFeaturedTours = asyncHandler(async (req, res) => {
  const tours = await tourService.getFeaturedTours();
  res.json(tours);
});

const getTour = asyncHandler(async (req, res) => {
  const tour = await tourService.getTour(req.params.id);
  res.json(tour);
});

const createTour = asyncHandler(async (req, res) => {
  const tour = await tourService.createTour(req.body);
  res.status(201).json(tour);
});

const updateTour = asyncHandler(async (req, res) => {
  const tour = await tourService.updateTour(req.params.id, req.body);
  res.json(tour);
});

const deleteTour = asyncHandler(async (req, res) => {
  const result = await tourService.deleteTour(req.params.id);
  res.json(result);
});

module.exports = {
  createTour,
  deleteTour,
  getFeaturedTours,
  getTour,
  listTours,
  updateTour,
};
