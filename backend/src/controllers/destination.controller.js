const asyncHandler = require('../utils/asyncHandler');
const destinationService = require('../services/destination.service');

const listDestinations = asyncHandler(async (req, res) => {
  const result = await destinationService.listDestinations(req.query);
  res.json(result);
});

const getFeaturedDestinations = asyncHandler(async (req, res) => {
  const destinations = await destinationService.getFeaturedDestinations();
  res.json(destinations);
});

const getDestination = asyncHandler(async (req, res) => {
  const destination = await destinationService.getDestination(req.params.id);
  res.json(destination);
});

const createDestination = asyncHandler(async (req, res) => {
  const destination = await destinationService.createDestination(req.body);
  res.status(201).json(destination);
});

const updateDestination = asyncHandler(async (req, res) => {
  const destination = await destinationService.updateDestination(req.params.id, req.body);
  res.json(destination);
});

const deleteDestination = asyncHandler(async (req, res) => {
  const result = await destinationService.deleteDestination(req.params.id);
  res.json(result);
});

module.exports = {
  createDestination,
  deleteDestination,
  getDestination,
  getFeaturedDestinations,
  listDestinations,
  updateDestination,
};
