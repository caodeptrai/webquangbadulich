const toPositiveInt = (value, defaultValue) => {
  const parsed = parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : defaultValue;
};

const getPagination = (query, defaults = {}) => {
  const page = toPositiveInt(query.page, defaults.page || 1);
  const limit = toPositiveInt(query.limit, defaults.limit || 10);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
};

const buildPagination = ({ page, limit, total }) => ({
  page,
  limit,
  total,
  totalPages: Math.ceil(total / limit),
});

module.exports = { buildPagination, getPagination, toPositiveInt };
