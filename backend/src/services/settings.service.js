const jwt = require('jsonwebtoken');

const prisma = require('../utils/prisma');
const { createHttpError } = require('../utils/httpError');

const toSettingsObject = (settings) => settings.reduce((acc, setting) => {
  acc[setting.key] = setting.value;
  return acc;
}, {});

const resolveIsAdmin = async (authHeader) => {
  if (!authHeader) return false;

  try {
    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId || decoded.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { role: true },
    });

    return user?.role?.name === 'admin';
  } catch {
    return false;
  }
};

const listSettings = async ({ query, authHeader }) => {
  const where = query.group ? { group: query.group } : {};
  const isAdmin = await resolveIsAdmin(authHeader);
  const settings = await prisma.siteSetting.findMany({
    where: isAdmin ? where : { ...where, isPublic: true },
    orderBy: [{ group: 'asc' }, { key: 'asc' }],
  });

  return {
    settings: toSettingsObject(settings),
    settingsList: settings,
    isAdmin,
  };
};

const getSettingsByGroup = async (group) => {
  const settings = await prisma.siteSetting.findMany({
    where: { group },
    orderBy: { key: 'asc' },
  });

  return { ...toSettingsObject(settings), _list: settings };
};

const getSettingByKey = async (key) => {
  const setting = await prisma.siteSetting.findUnique({ where: { key } });

  if (!setting) {
    throw createHttpError(404, 'Setting not found');
  }

  return setting;
};

const upsertSetting = ({ key, value, group, label, type, isPublic }) => prisma.siteSetting.upsert({
  where: { key },
  update: {
    value,
    ...(group && { group }),
    ...(label && { label }),
    ...(type && { type }),
    ...(isPublic !== undefined && { isPublic }),
  },
  create: {
    key,
    value,
    group: group || 'general',
    label: label || key,
    type: type || 'text',
    isPublic: isPublic !== false,
  },
});

const bulkUpdateSettings = async (settings) => {
  if (!settings || typeof settings !== 'object') {
    throw createHttpError(400, 'Settings object is required');
  }

  const results = [];
  for (const [key, value] of Object.entries(settings)) {
    const setting = await prisma.siteSetting.upsert({
      where: { key },
      update: { value: String(value) },
      create: {
        key,
        value: String(value),
        group: 'general',
        label: key,
        type: 'text',
        isPublic: true,
      },
    });
    results.push(setting);
  }

  return { message: 'Settings updated', settings: results };
};

const deleteSetting = async (key) => {
  await prisma.siteSetting.delete({ where: { key } });
  return { message: 'Setting deleted' };
};

module.exports = {
  bulkUpdateSettings,
  deleteSetting,
  getSettingByKey,
  getSettingsByGroup,
  listSettings,
  upsertSetting,
};
