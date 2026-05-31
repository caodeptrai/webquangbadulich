const asyncHandler = require('../utils/asyncHandler');
const { createHttpError } = require('../utils/httpError');
const uploadService = require('../services/upload.service');

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw createHttpError(400, 'No file uploaded');
  }

  res.json(uploadService.toUploadedFile(req.file));
});

const uploadImages = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    throw createHttpError(400, 'No files uploaded');
  }

  res.json(req.files.map(uploadService.toUploadedFile));
});

module.exports = { uploadImage, uploadImages };
