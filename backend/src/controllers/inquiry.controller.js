const asyncHandler = require('../utils/asyncHandler');
const inquiryService = require('../services/inquiry.service');

const listInquiries = asyncHandler(async (req, res) => {
  const result = await inquiryService.listInquiries(req.query);
  res.json(result);
});

const listUserInquiries = asyncHandler(async (req, res) => {
  const inquiries = await inquiryService.listUserInquiries(req.user.id);
  res.json(inquiries);
});

const createInquiry = asyncHandler(async (req, res) => {
  const result = await inquiryService.createInquiry({
    userId: req.user?.id,
    data: req.body,
  });
  res.status(201).json(result);
});

const updateInquiry = asyncHandler(async (req, res) => {
  const inquiry = await inquiryService.updateInquiry(req.params.id, req.body);
  res.json(inquiry);
});

const deleteInquiry = asyncHandler(async (req, res) => {
  const result = await inquiryService.deleteInquiry(req.params.id);
  res.json(result);
});

module.exports = {
  createInquiry,
  deleteInquiry,
  listInquiries,
  listUserInquiries,
  updateInquiry,
};
