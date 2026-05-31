const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = require('../utils/prisma');
const { createHttpError } = require('../utils/httpError');

const buildToken = (user) => jwt.sign(
  { userId: user.id, role: user.role.name },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN }
);

const toAuthUser = (user) => ({
  id: user.id,
  email: user.email,
  fullName: user.fullName,
  phone: user.phone,
  avatar: user.avatar,
  role: user.role.name,
});

const register = async ({ email, password, fullName, phone }) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw createHttpError(409, 'Email already registered');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const userRole = await prisma.role.findUnique({ where: { name: 'user' } });
  if (!userRole) {
    throw createHttpError(500, 'Default user role not found');
  }

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      fullName,
      phone,
      roleId: userRole.id,
    },
    include: { role: true },
  });

  return {
    message: 'Registration successful',
    token: buildToken(user),
    user: toAuthUser(user),
  };
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true },
  });

  if (!user) {
    throw createHttpError(401, 'Invalid email or password');
  }

  if (!user.isActive) {
    throw createHttpError(403, 'Account is deactivated');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw createHttpError(401, 'Invalid email or password');
  }

  return {
    message: 'Login successful',
    token: buildToken(user),
    user: toAuthUser(user),
  };
};

const updateProfile = async (userId, data) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      fullName: data.fullName,
      phone: data.phone,
      avatar: data.avatar,
    },
    include: { role: true },
  });

  return { message: 'Profile updated', user: toAuthUser(user) };
};

const changePassword = async (userId, { currentPassword, newPassword }) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isValid = await bcrypt.compare(currentPassword, user.password);
  if (!isValid) {
    throw createHttpError(400, 'Current password is incorrect');
  }

  const hashed = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed },
  });

  return { message: 'Password changed successfully' };
};

module.exports = {
  changePassword,
  login,
  register,
  updateProfile,
};
