const asyncHandler = require('../utils/asyncHandler');
const settingsService = require('../services/settings.service');

const listSettings = asyncHandler(async (req, res) => {
  const result = await settingsService.listSettings({
    query: req.query,
    authHeader: req.headers.authorization,
  });
  res.json(result);
});

const getSettingsByGroup = asyncHandler(async (req, res) => {
  const result = await settingsService.getSettingsByGroup(req.params.group);
  res.json(result);
});

const getSettingByKey = asyncHandler(async (req, res) => {
  const setting = await settingsService.getSettingByKey(req.params.key);
  res.json(setting);
});

const upsertSetting = asyncHandler(async (req, res) => {
  const setting = await settingsService.upsertSetting(req.body);
  res.json(setting);
});

const bulkUpdateSettings = asyncHandler(async (req, res) => {
  const result = await settingsService.bulkUpdateSettings(req.body.settings);
  res.json(result);
});

const deleteSetting = asyncHandler(async (req, res) => {
  const result = await settingsService.deleteSetting(req.params.key);
  res.json(result);
});

module.exports = {
  bulkUpdateSettings,
  deleteSetting,
  getSettingByKey,
  getSettingsByGroup,
  listSettings,
  upsertSetting,
};
