const prisma = require('../utils/prisma');
const { buildPagination, getPagination } = require('../utils/pagination');

const listInquiries = async (query) => {
  const { status, type } = query;
  const { page, limit, skip } = getPagination(query, { limit: 20 });
  const where = {};

  if (status) where.status = status;
  if (type) where.type = type;

  const [inquiries, total] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      include: {
        user: { select: { fullName: true, email: true } },
        tour: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.inquiry.count({ where }),
  ]);

  return {
    data: inquiries,
    pagination: buildPagination({ page, limit, total }),
  };
};

const listUserInquiries = (userId) => prisma.inquiry.findMany({
  where: { userId },
  include: { tour: { select: { name: true } } },
  orderBy: { createdAt: 'desc' },
});

const createInquiry = async ({ userId, data }) => {
  const { name, email, phone, type, subject, message, tourId } = data;
  const inquiry = await prisma.inquiry.create({
    data: {
      name,
      email,
      phone,
      type: type || 'contact',
      subject,
      message,
      tourId,
      userId,
    },
  });

  return { message: 'Your inquiry has been submitted', inquiry };
};

const updateInquiry = (id, data) => prisma.inquiry.update({
  where: { id },
  data: {
    status: data.status || undefined,
    reply: data.reply,
    repliedAt: data.reply ? new Date() : undefined,
  },
});

const deleteInquiry = async (id) => {
  await prisma.inquiry.delete({ where: { id } });
  return { message: 'Inquiry deleted' };
};

module.exports = {
  createInquiry,
  deleteInquiry,
  listInquiries,
  listUserInquiries,
  updateInquiry,
};
