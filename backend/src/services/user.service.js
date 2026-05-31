const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');
const { createHttpError } = require('../utils/httpError');

const listUsers = async (query) => {
  const { search, role } = query;
  const { page, limit, skip } = getPagination(query, { limit: 20 });
  const where = {};

  if (search) {
    where.OR = [
      { fullName: { contains: search } },
      { email: { contains: search } },
    ];
  }

  if (role) {
    where.role = { name: role };
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: {
        id: true,
        email: true,
        fullName: true,
        phone: true,
        avatar: true,
        isActive: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data: users,
    pagination: buildPagination({ page, limit, total }),
  };
};

const toggleActive = async ({ id, currentUserId }) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  if (user.id === currentUserId) {
    throw createHttpError(400, 'Cannot deactivate yourself');
  }

  const updated = await prisma.user.update({
    where: { id },
    data: { isActive: !user.isActive },
  });

  return {
    message: 'User status updated',
    user: { id: updated.id, isActive: updated.isActive },
  };
};

const deleteUser = async ({ id, currentUserId }) => {
  if (id === currentUserId) {
    throw createHttpError(400, 'Cannot delete yourself');
  }

  await prisma.user.delete({ where: { id } });
  return { message: 'User deleted' };
};

module.exports = { deleteUser, listUsers, toggleActive };
