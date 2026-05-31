const asyncHandler = require('../utils/asyncHandler');
const userService = require('../services/user.service');

const listUsers = asyncHandler(async (req, res) => {
  const result = await userService.listUsers(req.query);
  res.json(result);
});

const toggleActive = asyncHandler(async (req, res) => {
  const result = await userService.toggleActive({
    id: req.params.id,
    currentUserId: req.user.id,
  });
  res.json(result);
});

const deleteUser = asyncHandler(async (req, res) => {
  const result = await userService.deleteUser({
    id: req.params.id,
    currentUserId: req.user.id,
  });
  res.json(result);
});

module.exports = { deleteUser, listUsers, toggleActive };
