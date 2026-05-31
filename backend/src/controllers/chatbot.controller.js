const asyncHandler = require('../utils/asyncHandler');
const chatbotService = require('../services/chatbot.service');

const sendMessage = asyncHandler(async (req, res) => {
  const result = await chatbotService.sendMessage({
    message: req.body.message,
    sessionId: req.body.sessionId,
    useTemplate: req.body.useTemplate,
    userId: req.user?.id || null,
  });
  res.json(result);
});

const getHistory = asyncHandler(async (req, res) => {
  const history = await chatbotService.getHistory({
    userId: req.user.id,
    sessionId: req.query.sessionId,
  });
  res.json(history);
});

const getContextPreview = asyncHandler(async (req, res) => {
  const context = await chatbotService.getContextPreview();
  res.json(context);
});

module.exports = { getContextPreview, getHistory, sendMessage };
