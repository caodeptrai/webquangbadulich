const asyncHandler = require('../utils/asyncHandler');
const dashboardService = require('../services/dashboard.service');

const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await dashboardService.getDashboardStats();
  res.json(stats);
});

module.exports = { getDashboardStats };
