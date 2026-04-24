const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const prisma = require('../utils/prisma');
const { authenticate, optionalAuth } = require('../middlewares/auth');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Hybrid chatbot: knowledge base + rule-based + keyword matching
const KNOWLEDGE_BASE = {
  greetings: ['xin chào', 'chào', 'hi', 'hello', 'hey', 'chào bạn', 'xink chao', 'chao'],
  budget_keywords: ['chi phí', 'giá', 'tiền', 'bảo nhiêu', 'bao nhieu', 'tốn', 'ngân sách', 'budget', 'cost', 'giá rẻ', 'gia re'],
  time_keywords: ['thời gian', 'mấy ngày', 'bao lâu', 'bao lau', 'khi nào', 'mùa', 'thang'],
  family_keywords: ['gia đình', 'gia dinh', 'trẻ em', 'con nhỏ', 'fam', 'family', 'kids', 'children'],
  couple_keywords: ['cặp đôi', 'couple', 'lãng mạn', 'honeymoon', 'người yêu', 'bạn trai', 'bạn gái'],
  group_keywords: ['nhóm', 'bạn bè', 'group', 'friends', 'đoàn'],
  beach_keywords: ['biển', 'bien', 'beach', 'đảo', 'dao', 'island', 'bãi biển'],
  mountain_keywords: ['núi', 'nui', 'mountain', 'rừng', 'rung', 'forest', 'cao nguyên'],
  food_keywords: ['ăn', 'an', 'ẩm thực', 'am thuc', 'food', 'đặc sản', 'dac san', 'ngon'],
  history_keywords: ['lịch sử', 'lich su', 'history', 'di tích', 'di tich', 'cổ', 'co'],
  north_keywords: ['miền bắc', 'mien bac', 'hà nội', 'hanoi', 'sa pa', 'hạ long', 'ha long', 'phía bắc'],
  central_keywords: ['miền trung', 'mien trung', 'đà nẵng', 'da nang', 'huế', 'hue', 'hội an', 'hoi an', 'phú quốc'],
  south_keywords: ['miền nam', 'mien nam', 'tp hcm', 'hcm', 'cần thơ', 'can tho', 'phú quốc', 'phu quoc', 'vũng tàu', 'vung tau'],
  popular_keywords: ['nổi tiếng', 'noi tieng', 'nổi bật', 'noi bat', 'famous', 'popular', 'best'],
  recommend_keywords: ['gợi ý', 'goi y', 'recommend', 'suggest', 'nên đi', 'nen di', 'tôi nên', 'toi nen', 'đề xuất', 'dexuat'],
  safety_keywords: ['an toàn', 'an toan', 'safety', 'bảo mật', 'bao mat'],
};

const GREETING_RESPONSES = [
  'Xin chào! Tôi là trợ lý du lịch. Tôi có thể giúp bạn tìm địa điểm du lịch, gợi ý tour, hoặc trả lời các câu hỏi về du lịch Việt Nam. Bạn cần tôi hỗ trợ gì?',
  'Chào bạn! Rất vui được tư vấn du lịch cho bạn. Bạn muốn khám phá địa điểm nào?',
  'Hello! Tôi sẵn sàng giúp bạn lên kế hoạch du lịch. Hãy cho tôi biết sở thích của bạn nhé!',
];

const FALLBACK_RESPONSES = [
  'Cảm ơn câu hỏi của bạn! Hiện tại tôi có thể tư vấn về các điểm du lịch Việt Nam. Bạn có thể cho tôi biết thêm về sở thích, ngân sách và thời gian du lịch không?',
  'Tôi chưa có đủ thông tin để trả lời chính xác. Bạn có thể mô tả rõ hơn không? Ví dụ: bạn thích biển hay núi? Ngân sách bao nhiêu?',
  'Câu hỏi hay! Để tôi gợi ý tốt hơn, bạn có thể cho biết: bạn đi một mình, cùng gia đình hay nhóm bạn?',
];

function detectIntent(message) {
  const lowerMsg = message.toLowerCase();
  const intents = [];

  if (KNOWLEDGE_BASE.greetings.some(g => lowerMsg.includes(g))) intents.push('greeting');
  if (KNOWLEDGE_BASE.budget_keywords.some(k => lowerMsg.includes(k))) intents.push('budget');
  if (KNOWLEDGE_BASE.time_keywords.some(k => lowerMsg.includes(k))) intents.push('time');
  if (KNOWLEDGE_BASE.family_keywords.some(k => lowerMsg.includes(k))) intents.push('family');
  if (KNOWLEDGE_BASE.couple_keywords.some(k => lowerMsg.includes(k))) intents.push('couple');
  if (KNOWLEDGE_BASE.group_keywords.some(k => lowerMsg.includes(k))) intents.push('group');
  if (KNOWLEDGE_BASE.beach_keywords.some(k => lowerMsg.includes(k))) intents.push('beach');
  if (KNOWLEDGE_BASE.mountain_keywords.some(k => lowerMsg.includes(k))) intents.push('mountain');
  if (KNOWLEDGE_BASE.food_keywords.some(k => lowerMsg.includes(k))) intents.push('food');
  if (KNOWLEDGE_BASE.history_keywords.some(k => lowerMsg.includes(k))) intents.push('history');
  if (KNOWLEDGE_BASE.north_keywords.some(k => lowerMsg.includes(k))) intents.push('north');
  if (KNOWLEDGE_BASE.central_keywords.some(k => lowerMsg.includes(k))) intents.push('central');
  if (KNOWLEDGE_BASE.south_keywords.some(k => lowerMsg.includes(k))) intents.push('south');
  if (KNOWLEDGE_BASE.popular_keywords.some(k => lowerMsg.includes(k))) intents.push('popular');
  if (KNOWLEDGE_BASE.recommend_keywords.some(k => lowerMsg.includes(k))) intents.push('recommend');

  return intents;
}

async function generateResponse(intent, userId, sessionId) {
  if (intent.includes('greeting')) {
    return GREETING_RESPONSES[Math.floor(Math.random() * GREETING_RESPONSES.length)];
  }

  // Get relevant destinations from DB
  const categoryFilter = {};
  const regionFilter = {};

  if (intent.includes('beach')) categoryFilter.category = { slug: { contains: 'bien' } };
  if (intent.includes('mountain')) categoryFilter.category = { slug: { contains: 'nui' } };
  if (intent.includes('north')) regionFilter.province = { region: 'NORTH' };
  if (intent.includes('central')) regionFilter.province = { region: 'CENTRAL' };
  if (intent.includes('south')) regionFilter.province = { region: 'SOUTH' };

  const destinations = await prisma.destination.findMany({
    where: { isActive: true, ...categoryFilter, ...regionFilter },
    include: { images: { where: { isPrimary: true }, take: 1 }, province: true },
    take: 5,
    orderBy: { rating: 'desc' },
  });

  if (destinations.length > 0) {
    const lines = [];
    
    if (intent.includes('budget')) {
      lines.push('Dưới đây là các địa điểm du lịch phù hợp với ngân sách của bạn:');
    } else if (intent.includes('family')) {
      lines.push('Các địa điểm phù hợp cho gia đình có trẻ nhỏ:');
    } else if (intent.includes('couple')) {
      lines.push('Những địa điểm lãng mạn dành cho cặp đôi:');
    } else if (intent.includes('popular')) {
      lines.push('Những địa điểm du lịch nổi tiếng nhất hiện nay:');
    } else {
      lines.push('Tôi gợi ý cho bạn những địa điểm sau:');
    }

    destinations.forEach(d => {
      const img = d.images[0]?.url || '';
      lines.push(`- ${d.name} (${d.province.name}) - Rating: ${d.rating}/5 ⭐${d.estimatedCost ? ` - Chi phí: ${d.estimatedCost}` : ''}`);
    });

    lines.push('');
    lines.push('Bạn có thể xem chi tiết từng địa điểm hoặc hỏi thêm về lịch trình, tour nhé!');
    return lines.join('\n');
  }

  if (intent.includes('budget')) {
    return 'Về chi phí du lịch, tùy vào địa điểm và thời gian mà chi phí sẽ khác nhau. Bạn có thể cho tôi biết bạn muốn đi đâu hoặc ngân sách cụ thể để tôi tư vấn chính xác hơn?';
  }

  if (intent.includes('time')) {
    return 'Thời gian du lịch phụ thuộc vào địa điểm bạn chọn. Bạn quan tâm đến điểm đến nào? Tôi có thể tư vấn cụ thể hơn!';
  }

  if (intent.includes('food')) {
    return 'Việt Nam nổi tiếng với ẩm thực phong phú! Bạn thích ẩm thực vùng miền nào? Tôi có thể gợi ý những địa điểm có đặc sản nổi tiếng.';
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

// POST chatbot message
router.post('/', optionalAuth, [
  body('message').trim().isLength({ min: 1 }),
], validate, async (req, res, next) => {
  try {
    const { message, sessionId: providedSessionId } = req.body;
    const sessionId = providedSessionId || uuidv4();
    const userId = req.user?.id || null;

    // Save user message
    await prisma.chatbotHistory.create({
      data: {
        userId,
        sessionId,
        role: 'user',
        message,
      },
    });

    // Detect intent and generate response
    const intents = detectIntent(message);
    let response;

    if (intents.length > 0) {
      response = await generateResponse(intents, userId, sessionId);
    } else {
      response = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    }

    // Save assistant message
    await prisma.chatbotHistory.create({
      data: {
        userId,
        sessionId,
        role: 'assistant',
        message: response,
        metadata: JSON.stringify({ intents }),
      },
    });

    res.json({ reply: response, sessionId });
  } catch (error) {
    next(error);
  }
});

// GET chat history
router.get('/history', authenticate, async (req, res, next) => {
  try {
    const { sessionId } = req.query;
    const where = { userId: req.user.id };
    if (sessionId) where.sessionId = sessionId;

    const history = await prisma.chatbotHistory.findMany({
      where,
      orderBy: { createdAt: 'asc' },
      select: { id: true, role: true, message: true, createdAt: true },
    });

    // Group by session
    const sessions = {};
    history.forEach(h => {
      if (!sessions[h.createdAt.toISOString().split('T')[0]]) {
        sessions[h.createdAt.toISOString().split('T')[0]] = [];
      }
      sessions[h.createdAt.toISOString().split('T')[0]].push(h);
    });

    res.json(history);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
