const prisma = require('../utils/prisma');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// ============================================================
// TEMPLATE RESPONSES - Fast local responses, no API call needed
// ============================================================
const TEMPLATE_RESPONSES = {
  // Greetings
  greetings: {
    patterns: ['xin chào', 'chào', 'hi', 'hello', 'hey', 'chào bạn', 'good morning', 'good afternoon', 'good evening', 'chào buổi'],
    response: `Xin chào! Tôi là trợ lý du lịch AI của website Du Lịch Quảng Bá. 

Tôi có thể giúp bạn:

🗺️ **Khám phá địa điểm** - Tìm kiếm điểm đến theo vùng miền, danh mục
📍 **Gợi ý tour** - Tour gia đình, cặp đôi, nhóm bạn
💰 **Tư vấn chi phí** - Ước tính chi phí theo ngân sách
🏨 **Mẹo du lịch** - Thời điểm đẹp, kinh nghiệm tham quan

Bạn cần tôi hỗ trợ gì hôm nay?`
  },

  beach_destination: {
    patterns: ['biển', 'bãi biển', 'đảo', 'beach', 'island', 'hải sản', 'tắm biển', 'bơi lội'],
    response: `🌊 **Những bãi biển đẹp tại Việt Nam:**

**Miền Trung:**
• Đà Nẵng - Bãi Mỹ Khê, Bãi Non Nước
• Hội An - Bãi Cửa Đại
• Quy Nhơn - Bãi Trường, Kỳ Co
• Nha Trang - Bãi Dài, Hòn Tre

**Miền Nam:**
• Phú Quốc - Bãi Sao, Bãi Dài
• Mũi Né - Bãi Hòn Rơm
• Côn Đảo - Bãi Lò Bò, Bãi Đầm

Bạn muốn tìm hiểu chi tiết về bãi biển nào không?`
  },

  mountain_destination: {
    patterns: ['núi', 'rừng', 'leo núi', 'mountain', 'sapa', 'sa pa', 'bảo lộc', 'Đà Lạt', 'da lat', 'tây nguyên'],
    response: `🏔️ **Địa điểm du lịch núi & rừng nổi tiếng:**

• **Sa Pa** - Những thửa ruộng bậc thang, đỉnh Fansipan, văn hóa dân tộc H'Mông, Dao
• **Đà Lạt** - Thành phố ngàn hoa, hồ Xuân Hương, đồi chè Cầu Đất
• **Mộc Châu** - Đồi chè, thung lũng Mộc Châu, hang Dơi
• **Bà Nà Hills** - Đà Nẵng, cáp treo qua mây phủ

Bạn thích điểm nào? Tôi có thể tư vấn chi tiết hơn!`
  },

  family_tour: {
    patterns: ['gia đình', 'con cái', 'trẻ em', 'family', 'kid', 'children', 'bố mẹ', 'ông bà'],
    response: `👨‍👩‍👧 **Gợi ý tour gia đình:**

Các tour phù hợp cho gia đình có trẻ nhỏ:

• **Đà Nẵng - Hội An** - Bãi biển đẹp, Ancient Town, Bà Nà Hills (cáp treo, làng Pháp)
• **Phú Quốc** - Vinpearl Safari, Grand World, bãi biển an toàn
• **Nha Trang** - Vinpearl Land, Thủy cung, đảo Hòn Tre
• **Đà Lạt** - Thời tiết mát mẻ quanh năm, nhiều hoạt động ngoài trời

Bạn cần tôi tư vấn chi tiết tour nào?`
  },

  romantic_couple: {
    patterns: ['lãng mạn', 'honeymoon', 'cặp đôi', 'yêu', 'vợ chồng', 'anniversary', 'valentine', 'tặng'],
    response: `❤️ **Địa điểm lãng mạn cho cặp đôi:**

• **Phú Quốc** - Sunset Sanato, Bãi Sao hoàng hôn, nhà hàng biển
• **Đà Lạt** - Đồi Mộ Lương, thung lũng Tình Yêu, Sunrise ở Hồ Tuyền Trung
• **Hội An** - Đèn lồng lung linh, Cầu Nhật Bản, biển Cửa Đại
• **Sa Pa** - Sapa O'Chu, Cầu Kính Rồng Mây, ruộng bậc thang

Bạn muốn tôi gợi ý tour riêng cho 2 người không?`
  },

  budget_cheap: {
    patterns: ['rẻ', 'tiết kiệm', 'cheap', 'budget', 'ít tiền', 'bình dân', 'miễn phí', 'free'],
    response: `💰 **Mẹo du lịch tiết kiệm:**

• **Di chuyển:** Đi vào ngày thường, book vé sớm, sử dụng xe khách thay vì máy bay
• **Lưu trú:** Hostel, homestay thay vì khách sạn - vẫn thoải mái và có cơ hội gặp người bạn du lịch
• **Ăn uống:** Ăn như người địa phương, quán bình dân thường ngon và rẻ hơn nhiều
• **Tham quan:** Nhiều điểm miễn phí: công viên, bãi biển công cộng, chợ truyền thống
• **Thời gian:** Du lịch mùa thấp điểm (tháng 3-5, tháng 9-11) giá sẽ rẻ hơn đáng kể

Bạn có ngân sách cụ thể nào để tôi tư vấn chi tiết hơn?`
  },

  // Regions
  north_region: {
    patterns: ['miền bắc', 'mien bac', 'hà nội', 'hanoi', 'sa pa', 'sapa', 'hạ long', 'ha long', 'ninh bình', 'ninh binh', 'thái nguyên', 'hải phòng'],
    response: `📍 **Du lịch Miền Bắc Việt Nam:**

**Điểm đến nổi bật:**
• **Hà Nội** - Lăng Bác, Phố cổ, Hồ Hoàn Kiếm, ẩm thực phố phường
• **Sa Pa** - Ruộng bậc thang Mù Cang Chải, Fansipan, thác Tình Yêu
• **Hạ Long** - Vịnh Hạ Long UNESCO, đảo Tuần Châu, hang Sửng Sốt
• **Ninh Bình** - Tràng An, Tam Cốc, chùa Bái Đính, Hoa Lư

**Thời điểm đẹp nhất:** Tháng 9 - 11 (mùa thu) và tháng 3 - 4 (mùa xuân)

Bạn quan tâm đến điểm nào cụ thể?`
  },

  central_region: {
    patterns: ['miền trung', 'mien trung', 'đà nẵng', 'da nang', 'huế', 'hue', 'hội an', 'hoi an', 'quy nhơn', 'quy nhon', 'nha trang'],
    response: `📍 **Du lịch Miền Trung Việt Nam:**

**Điểm đến nổi bật:**
• **Đà Nẵng** - Bãi Mỹ Khê, Bà Nà Hills, Cầu Rồng, ẩm thực phong phú
• **Hội An** - Phố cổ UNESCO, đèn lồng, may đo, ẩm thực đường phố
• **Huế** - Đại Nội, lăng tẩm, chùa Thiên Mụ, ẩm thực cung đình
• **Nha Trang** - Bãi Dài, Vinpearl Land, đảo Hòn Tre, khuôn viên tắm bùn

**Thời điểm đẹp nhất:** Tháng 2 - 4 (tránh mùa mưa)

Bạn muốn tìm hiểu thêm về điểm nào?`
  },

  south_region: {
    patterns: ['miền nam', 'mien nam', 'tp hcm', 'hồ chí minh', 'phú quốc', 'phu quoc', 'cần thơ', 'can tho', 'vũng tàu', 'vung tau'],
    response: `📍 **Du lịch Miền Nam Việt Nam:**

**Điểm đến nổi bật:**
• **TP. Hồ Chí Minh** - Dinh Độc Lập, Phố đi bộ Nguyễn Huệ, chợ Bến Thành, ẩm thực
• **Phú Quốc** - Bãi Sao, Vinpearl Safari, Grand World, Sunset Sanato
• **Cần Thơ** - Chợ nổi Cái Răng, nhà cổ Bình Thuỷ, vườn cây ăn trái
• **Vũng Tàu** - Bãi Sau, tượng Chúa Kitô Vua, ẩm thực hải sản

**Thời điểm đẹp nhất:** Tháng 12 - 4 (mùa khô)

Bạn cần tư vấn chi tiết điểm nào?`
  },

  // Specific places
  sapa_detail: {
    patterns: ['sapa', 'sa pa', 'fansipan', 'phansipang', 'mù cang chải', 'mu cang chai'],
    response: `🏔️ **Sa Pa - Điểm đến không thể bỏ qua:**

**Thông tin cơ bản:**
• Vị trí: Lào Cai, cách Hà Nội khoảng 350km
• Thời điểm đẹp nhất: Tháng 9-11 (lúa chín vàng), Tháng 3-4 (hoa đào nở)
• Đặc sản: Thịt trâu, cá hồi, rượu táo mèo, thổ cẩm

**Hoạt động:**
• Leo núi Fansipan - "Nóc nhà Đông Dương" (3.143m)
• Khám phá bản làng dân tộc H'Mông, Dao, Tày
• Trekking ruộng bậc thang Mù Cang Chải
• Trải nghiệm homestay tại bản

**Chi phí tham khảo:**
• Tour 2N1D từ: 1.500.000 VNĐ/người
• Tour 3N2D từ: 2.500.000 VNĐ/người

Bạn muốn tôi tư vấn tour cụ thể không?`
  },

  halong_detail: {
    patterns: ['hạ long', 'ha long', 'vịnh', 'vinh', 'quảng ninh', 'quang ninh'],
    response: `⛵ **Vịnh Hạ Long - Kỳ quan thế giới UNESCO:**

**Thông tin cơ bản:**
• Vị trí: Quảng Ninh, cách Hà Nội khoảng 170km
• Diện tích: 1.553km² với 1.969 hòn đảo
• Đặc sản: Hải sản tươi sống (ngánh, sam, cua, ghẹ)

**Hoạt động:**
• Du thuyền ngắm cảnh vịnh
• Kayaking / Chèo thuyền kayak
• Thăm hang Sửng Sốt, Hang Luồn, Động Thiên Đường
• Island hopping - khám phá đảo nhỏ

**Loại tour phổ biến:**
• Du thuyền 1 ngày: từ 800.000 VNĐ
• Du thuyền 2N1D: từ 1.800.000 VNĐ
• Du thuyền 3N2D: từ 3.500.000 VNĐ

Bạn muốn đi theo tour hay tự túc?`
  },

  food_cuisine: {
    patterns: ['ăn', 'đặc sản', 'dac san', 'ẩm thực', 'am thuc', 'food', 'món ngon', 'mon ngon', 'nên ăn gì'],
    response: `🍜 **Ẩm thực Việt Nam - Đặc sản theo vùng:**

**Miền Bắc:**
• Phở Hà Nội, Bún chả, Bánh cuốn Thanh Trì
• Các món ốc ở Hải Phòng, Vịt quay Lạng Sơn

**Miền Trung:**
• Món Huế: Bún bò Huế, bánh bèo, bánh xèo Nha Trang
• Cao lầu Hội An, Mì Quảng Đà Nẵng

**Miền Nam:**
• Bún mắm, Hủ tiếu Nam Vang, Bánh xèo miền Tây
• Bánh canh Cà Mau, Lẩu mắm U Minh

**Món nổi tiếng toàn quốc:**
• Gỏi cuốn, Nem chua, Chả giò
• Cà phê trứng, Trà đá, Sinh tố

Bạn đang ở vùng nào để tôi gợi ý cụ thể hơn?`
  },

  best_time: {
    patterns: ['thời gian', 'thoi gian', 'khi nào', 'when', 'mùa nào', 'mua nao', 'tháng mấy', 'thang may', 'best time', 'nên đi'],
    response: `📅 **Thời điểm đẹp nhất để du lịch Việt Nam:**

**Miền Bắc (Hà Nội, Sa Pa, Hạ Long):**
• Tháng 9 - 11: Mùa thu, thời tiết dễ chịu, lúa chín vàng
• Tháng 3 - 4: Mùa xuân, hoa đào nở

**Miền Trung (Đà Nẵng, Hội An, Huế):**
• Tháng 2 - 4: Tránh mùa mưa, nắng đẹp
• ⚠️ Tránh: Tháng 10 - 12 (mùa bão)

**Miền Nam (TP.HCM, Phú Quốc, Cần Thơ)::**
• Tháng 12 - 4: Mùa khô, nắng nhiều
• ⚠️ Tránh: Tháng 5 - 11 (mùa mưa)

**Lời khuyên:** Tránh ngày lễ lớn (Tết Dương, Tết Nguyên đán) vì đông đúc và giá cao.

Bạn muốn đi đến vùng nào để tôi tư vấn chi tiết hơn?`
  },

  how_to_book: {
    patterns: ['đặt', 'dat tour', 'booking', 'đặt tour', 'dat', 'liên hệ', 'lien he', 'đăng ký', 'dang ky', 'reserve'],
    response: `📝 **Cách đặt tour trên website Du Lịch Quảng Bá:**

**Các bước đặt tour:**
1. Chọn tour phù hợp tại mục "Tours"
2. Xem chi tiết lịch trình, giá cả
3. Điền thông tin liên hệ
4. Nhấn "Đặt Tour" và xác nhận
5. Đội ngũ sẽ liên hệ lại trong 24h

**Hỗ trợ trực tiếp:**
• 📞 Hotline: Đang có sẵn trên website
• 💬 Chatbot: Trò chuyện ngay với tư vấn viên
• 📧 Email: Liên hệ qua trang Liên hệ

Bạn muốn tìm hiểu về tour nào?`
  },

  hotel_accommodation: {
    patterns: ['khách sạn', 'khach san', 'hotel', 'resort', 'homestay', 'hostel', 'ở đâu', 'o dau', 'nghỉ', 'nghi', 'lưu trú'],
    response: `🏨 **Gợi ý lưu trú theo từng loại:**

**Resort cao cấp:**
• Phú Quốc: Vinpearl Resort, InterContinental
• Nha Trang: Vinpearl Beachfront, Ana Mandara

**Khách sạn tầm trung:**
• Đà Nẵng: Mường Thanh, Furama (gần biển)
• Hội An: Ancient House Resort, Hoi An Central

**Homestay/Hostel bình dân:**
• Hà Nội: Old Town Social Hostel, Little Hanoi
• Đà Lạt: Osih Hotel, Dream Hostel

**Tiêu chí chọn lưu trú:**
✓ Vị trí trung tâm hoặc gần điểm tham quan
✓ Đánh giá từ 8.0 trở lên
✓ Bao gồm bữa sáng (nếu cần)

Bạn cần tôi tư vấn cụ thể cho điểm đến nào?`
  },

  transport_travel: {
    patterns: ['di chuyển', 'di chuyen', 'xe', 'máy bay', 'may bay', 'plane', 'tàu', 'tau', 'xe khách', 'xe khoa', 'transport', 'đi đâu', 'đến'],
    response: `🚗 **Phương tiện di chuyển tại Việt Nam:**

**Giữa các thành phố:**
• ✈️ **Máy bay:** Nhanh nhất, giá từ 500.000 - 2.000.000 VNĐ (tùy chặng)
• 🚆 **Tàu lửa:** Giá cả hợp lý, ngắm cảnh đẹp (tuyến Bắc - Nam)
• 🚌 **Xe khách:** Phổ biến nhất, giá rẻ từ 200.000 - 600.000 VNĐ
• 🚗 **Xe máy:** Phổ biến ở miền Trung & miền Nam, thuê từ 100.000 - 200.000 VNĐ/ngày

**Trong thành phố:**
• Grab/Be: Tiện lợi, có app, giá cố định
• Xe ôm: Giá thương lượng, nhanh hơn
• Thuê xe máy: Tự do di chuyển, phổ biến ở các thành phố nhỏ

**Mẹo tiết kiệm:**
✓ Book vé sớm 2-4 tuần để có giá tốt
✓ Di chuyển ban ngày thay vì ban đêm để tiết kiệm chi phí

Bạn cần tư vấn về tuyến nào cụ thể?`
  },

  packing_tips: {
    patterns: ['cần mang', 'can mang', 'vali', 'đồ', 'do', 'chuẩn bị', 'chuan bi', 'packing', 'baggage', 'trang phục', 'quần áo'],
    response: `🎒 **Danh sách đồ cần mang khi đi du lịch:**

**Quần áo:**
• Trang phục thoáng mát (mùa hè), ấm (mùa đông miền Bắc)
• Áo khoác nhẹ (phòng máy lạnh)
• Giày thoải mái để đi bộ nhiều
• Mũ, kính râm, ô/áo mưa

**Giấy tờ:**
• CCCD/CMND hoặc Hộ chiếu
• Vé máy bay, voucher khách sạn (in sẵn/điện tử)

**Đồ dùng cá nhân:**
• Thuốc thường dùng (đau bụng, cảm cúm)
• Kem chống nắng SPF 50+
• Thuốc xịt chống muỗi
• Sạc dự phòng (10.000mAh+)

**Tiền & Thanh toán:**
• Tiền mặt (VNĐ) cho vùng xa
• Thẻ ATM/Thẻ tín dụng
• Điện thoại với sim có data

Bạn đi đến đâu để tôi tư vấn chi tiết hơn?`
  },

  visa_customs: {
    patterns: ['visa', 'hộ chiếu', 'ho chieu', 'passport', 'thủ tục', 'thu tuc', 'xuất nhập cảnh', 'xuat nhap canh', 'quy định', 'quy dinh'],
    response: `📋 **Thông tin Visa & Thủ tục nhập cảnh:**

**Khách nội địa (người Việt Nam):**
• Cần CCCD hoặc Hộ chiếu còn hạn
• Không cần thủ tục đặc biệt khi đi giữa các tỉnh thành

**Khách quốc tế:**
• Hầu hết cần Hộ chiếu còn hạn tối thiểu 6 tháng
• Một số nước được miễn visa Việt Nam: Trung Quốc, Nhật Bản, Hàn Quốc, Đức, Pháp...
• Xin visa tại Đại sứ quán Việt Nam hoặc apply e-visa online

**E-visa Việt Nam:**
• Website: https://evisa.xuatnhapcanh.gov.vn
• Thời gian xử lý: 3-5 ngày làm việc
• Phí: 25 USD

**Lưu ý:**
✓ Check sạch sẽ trước khi nhập cảnh
✓ Khai báo hải quan trung thực

Bạn cần hỗ trợ thêm thông tin gì không?`
  },

  safety_tips: {
    patterns: ['an toàn', 'an toan', 'bảo mật', 'bao mat', 'cảnh báo', 'canh bao', 'cẩn thận', 'can than', 'safety', 'cứu', 'bệnh viện', 'hospital'],
    response: `⚠️ **Lưu ý an toàn khi du lịch:**

**An toàn cá nhân:**
• Cẩn thận túi xách, điện thoại ở nơi đông người
• Không mang quá nhiều tiền mặt
• Sử dụng két sắt khách sạn cho đồ giá trị

**An toàn giao thông:**
• Đội mũ bảo hiểm khi đi xe máy
• Quan sát kỹ trước khi qua đường ( xe máy đi ngược chiều rất nhiều)
• Không uống rượu bia khi lái xe

**Sức khỏe:**
• Mua bảo hiểm du lịch (nếu cần)
• Biết vị trí bệnh viện gần nhất
• Uống đủ nước, ăn uống hợp lý
• Phòng chống muỗi ở vùng nhiệt đới

**Liên hệ khẩn cấp:**
• 🚑 Cấp cứu: 115
• 🚔 Công an: 113
• 🚒 PCCC: 114

Chúc bạn có chuyến đi an toàn!`
  },

  thank_you: {
    patterns: ['cảm ơn', 'cam on', 'thank', 'thanks', 'cám ơn', 'thanks you', 'tks', 'tk'],
    response: `😊 Cảm ơn bạn đã trò chuyện cùng tôi! Nếu bạn cần thêm thông tin về du lịch Việt Nam, đừng ngần ngại hỏi lại nhé. Chúc bạn có những chuyến đi tuyệt vời! 🌴`
  },

  goodbye: {
    patterns: ['tạm biệt', 'tam biet', 'bye', 'goodbye', '再见', 'bai', 'hẹn gặp lại', 'hen gap lai'],
    response: `👋 Tạm biệt bạn! Rất vui được trò chuyện. Hẹn gặp lại bạn trong những chuyến đi sắp tới. Du lịch an toàn! 🌍✨`
  },

  not_travel_related: {
    patterns: [], // fallback - matches everything if no other pattern matched
    response: `🤔 Xin lỗi, câu hỏi của bạn có vẻ không liên quan đến du lịch. 

Tôi là trợ lý du lịch AI, chuyên hỗ trợ về:
• 🗺️ Địa điểm du lịch Việt Nam
• 📍 Gợi ý tour và lịch trình
• 💰 Chi phí và ngân sách du lịch
• 🏨 Lưu trú và vận chuyển
• 📅 Thời điểm và mẹo du lịch

Bạn có thể hỏi tôi về những chủ đề trên nhé!`
  }
};

// Find matching template
function findTemplateResponse(message) {
  const lowerMsg = message.toLowerCase();

  for (const [key, template] of Object.entries(TEMPLATE_RESPONSES)) {
    if (key === 'not_travel_related') continue; // skip fallback
    if (template.patterns.some(p => lowerMsg.includes(p))) {
      return template.response;
    }
  }

  return TEMPLATE_RESPONSES.not_travel_related.response;
}

// Free models via OpenRouter
const FREE_MODELS = [
  'openai/gpt-oss-120b:free',
  'openai/gpt-oss-20b:free'
];
let currentModelIndex = 0;

function getNextModel() {
  const model = FREE_MODELS[currentModelIndex];
  currentModelIndex = (currentModelIndex + 1) % FREE_MODELS.length;
  return model;
}

// Build context from database
async function buildDatabaseContext() {
  try {
    const [destinations, tours, articles, categories] = await Promise.all([
      prisma.destination.findMany({
        where: { isActive: true },
        select: {
          name: true,
          description: true,
          province: { select: { name: true, region: true } },
          category: { select: { name: true } },
          rating: true,
          estimatedCost: true,
        },
        take: 20,
      }),
      prisma.tour.findMany({
        where: { isActive: true },
        select: {
          name: true,
          duration: true,
          price: true,
          discountPrice: true,
          description: true,
        },
        take: 10,
      }),
      prisma.article.findMany({
        where: { isPublished: true },
        select: {
          title: true,
          excerpt: true,
          category: { select: { name: true } },
        },
        take: 5,
      }),
      prisma.destinationCategory.findMany({
        where: { isActive: true },
        select: { name: true, slug: true },
        take: 10,
      }),
    ]);

    let context = 'THÔNG TIN DATABASE WEBSITE DU LỊCH QUẢNG BÁ:\n\n';

    context += '=== DANH MỤC ĐỊA ĐIỂM ===\n';
    categories.forEach(c => context += `- ${c.name} (slug: ${c.slug})\n`);
    context += '\n';

    context += '=== ĐỊA ĐIỂM DU LỊCH ===\n';
    destinations.forEach(d => {
      context += `- ${d.name} (${d.province?.name || 'N/A'}, ${d.province?.region || 'N/A'})\n`;
      context += `  Danh mục: ${d.category?.name || 'Khác'}\n`;
      context += `  Mô tả: ${d.description?.substring(0, 200) || 'Không có'}\n`;
      context += `  Rating: ${d.rating}/5 - Chi phí ước tính: ${d.estimatedCost || 'Liên hệ'}\n`;
      context += '\n';
    });

    context += '=== TOURS ===\n';
    tours.forEach(t => {
      context += `- ${t.name}\n`;
      context += `  Thời gian: ${t.duration || 'Liên hệ'}\n`;
      context += `  Giá: ${t.discountPrice || t.price} VNĐ\n`;
      context += '\n';
    });

    context += '=== BÀI VIẾT ===\n';
    articles.forEach(a => {
      context += `- ${a.title} (${a.category?.name || 'Tin tức'})\n`;
      context += `  ${a.excerpt || ''}\n\n`;
    });

    return context;
  } catch (error) {
    console.error('Error building DB context:', error);
    return 'Database context không khả dụng.';
  }
}

// Cache database context for 10 minutes
let dbContextCache = { context: null, timestamp: 0 };
const DB_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

async function getCachedDbContext() {
  const now = Date.now();
  if (!dbContextCache.context || (now - dbContextCache.timestamp) > DB_CACHE_TTL) {
    dbContextCache.context = await buildDatabaseContext();
    dbContextCache.timestamp = now;
  }
  return dbContextCache.context;
}

// System prompt for the chatbot
function buildSystemPrompt(dbContext) {
  return `Bạn là trợ lý du lịch AI của website Du Lịch Quảng Bá, chuyên tư vấn về du lịch Việt Nam.

**QUY TẮC NGHIÊM NGẶT:**
1. Chỉ trả lời về du lịch, địa điểm, tour, chi phí du lịch Việt Nam
2. Nếu câu hỏi không liên quan, hãy lịch sự chuyển hướng về du lịch
3. Luôn sử dụng thông tin từ database nếu có
4. Trả lời bằng tiếng Việt, thân thiện và chuyên nghiệp
5. Nếu không có thông tin, nói "Tôi không có đủ thông tin để trả lời chính xác" và gợi ý câu hỏi khác
6. Không bịa đặt thông tin về giá cả, địa điểm không có trong database
7. Trả lời ngắn gọn, có cấu trúc, dễ đọc

**THÔNG TIN DATABASE:**
${dbContext}

Hãy trả lời dựa trên thông tin có sẵn và đưa ra gợi ý hữu ích cho người dùng.`;
}

// Chat with OpenRouter using native fetch (Node.js 18+)
async function chatWithOpenRouter(messages, model) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY not configured');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': process.env.SITE_URL || 'http://localhost:3000',
      'X-Title': 'Du Lich Quang Ba Chatbot',
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      max_tokens: 800,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời lúc này.';
}

const sendMessage = async ({ message, sessionId: providedSessionId, useTemplate, userId = null }) => {
  const sessionId = providedSessionId || uuidv4();

  await prisma.chatbotHistory.create({
    data: {
      userId,
      sessionId,
      role: 'user',
      message,
    },
  });

  if (useTemplate === true) {
    const templateReply = findTemplateResponse(message);

    await prisma.chatbotHistory.create({
      data: {
        userId,
        sessionId,
        role: 'assistant',
        message: templateReply,
        metadata: JSON.stringify({ source: 'template' }),
      },
    });

    return { reply: templateReply, sessionId, source: 'template' };
  }

  const templateReply = findTemplateResponse(message);
  const dbContext = await getCachedDbContext();
  const model = getNextModel();
  let reply = null;
  let errorMsg = null;
  let source = 'ai';

  try {
    const systemPrompt = buildSystemPrompt(dbContext);
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ];

    reply = await chatWithOpenRouter(messages, model);
  } catch (apiError) {
    console.error('OpenRouter API error:', apiError.message);
    errorMsg = apiError.message;
    source = 'template';
    reply = templateReply;
  }

  await prisma.chatbotHistory.create({
    data: {
      userId,
      sessionId,
      role: 'assistant',
      message: reply,
      metadata: JSON.stringify({ model, error: errorMsg, source }),
    },
  });

  return { reply, sessionId, source };
};

const getHistory = ({ userId, sessionId }) => {
  const where = { userId };
  if (sessionId) where.sessionId = sessionId;

  return prisma.chatbotHistory.findMany({
    where,
    orderBy: { createdAt: 'asc' },
    select: { id: true, role: true, message: true, createdAt: true },
  });
};

const getContextPreview = async () => {
  const context = await getCachedDbContext();
  return { context: context.substring(0, 500) + '...' };
};

module.exports = {
  getContextPreview,
  getHistory,
  sendMessage,
};
