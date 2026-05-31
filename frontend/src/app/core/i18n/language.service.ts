import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

export type LanguageCode = 'vi' | 'en';

type TranslationDictionary = Record<string, string>;

const STORAGE_KEY = 'webquangbadulich.language';

const EN_TRANSLATIONS: TranslationDictionary = {
  'Du Lịch Việt': 'Vietnam Travel',
  'Trang chủ': 'Home',
  'Điểm đến': 'Destinations',
  'Tour': 'Tours',
  'Cẩm nang': 'Travel Guide',
  'Gợi ý': 'Recommendations',
  'Gợi ý AI': 'AI Recommendations',
  'Liên hệ': 'Contact',
  'Đăng nhập': 'Login',
  'Đăng ký': 'Register',
  'Hồ sơ': 'Profile',
  'Yêu thích': 'Favorites',
  'Yêu cầu': 'Inquiries',
  'Quản trị': 'Admin',
  'Đăng xuất': 'Logout',
  'Xin chào,': 'Hello,',
  'Ngôn ngữ': 'Language',
  'Chọn ngôn ngữ': 'Choose language',

  'Khám Phá Việt Nam': 'Explore Vietnam',
  'Cùng Chúng Tôi': 'With Us',
  'Hệ thống gợi ý du lịch thông minh, tìm kiếm điểm đến hoàn hảo cho chuyến đi của bạn.': 'An intelligent travel recommendation system that helps you find the perfect destination for your trip.',
  'Khám phá ngay': 'Explore now',
  'Bắt đầu gợi ý': 'Start recommendations',
  'Cuộn xuống': 'Scroll down',
  'Điểm Đến Nổi Bật': 'Featured Destinations',
  'Khám phá những địa điểm du lịch đẹp nhất Việt Nam được yêu thích nhất': 'Discover Vietnam’s most beautiful and beloved travel destinations',
  'Khám phá': 'Explore',
  'Nổi bật': 'Featured',
  'Xem tất cả điểm đến': 'View all destinations',
  'Tour du lịch': 'Travel tours',
  'Bài viết': 'Articles',
  'Du khách': 'Travelers',
  'Tour Du Lịch Hot': 'Popular Tours',
  'Những tour được đặt nhiều nhất, lịch trình hấp dẫn, giá cả hợp lý': 'Most-booked tours with exciting itineraries and reasonable prices',
  'Xem chi tiết': 'View details',
  'Chi tiết': 'Details',
  'Tư vấn': 'Consultation',
  'Tối đa': 'Up to',
  'người': 'people',
  '/người': '/person',
  'Xem tất cả tour': 'View all tours',
  'Cẩm Nang Du Lịch': 'Travel Guide',
  'Kinh nghiệm, mẹo hay và lịch trình từ những người đã đi': 'Experiences, useful tips, and itineraries from travelers',
  'Đọc ngay': 'Read now',
  'Xem tất cả bài viết': 'View all articles',
  'Gợi ý Thông Minh Bằng AI': 'Smart AI Recommendations',
  'Trả lời vài câu hỏi đơn giản, chúng tôi sẽ gợi ý những điểm đến phù hợp nhất với bạn.': 'Answer a few simple questions and we will suggest the destinations that best fit you.',
  'Liên Hệ Ngay': 'Contact Us Now',
  'Bạn cần tư vấn về tour du lịch? Để lại thông tin, chúng tôi sẽ liên hệ lại ngay!': 'Need advice about a travel tour? Leave your information and we will contact you soon!',
  'Tư vấn 24/7': '24/7 support',
  'Miễn phí tư vấn': 'Free consultation',
  'Phản hồi nhanh': 'Fast response',

  'Loại hình': 'Travel type',
  'Tất cả': 'All',
  'Biển & Đảo': 'Beaches & Islands',
  'Núi & Rừng': 'Mountains & Forests',
  'Di tích & Lịch sử': 'Heritage & History',
  'Thiên nhiên': 'Nature',
  'Làng nghề': 'Craft villages',
  'Tìm kiếm': 'Search',
  'Tìm kiếm địa điểm...': 'Search destinations...',
  'Tìm kiếm bài viết...': 'Search articles...',
  'Tìm kiếm tour...': 'Search tours...',
  'Tất cả loại hình': 'All types',
  'Tất cả vùng miền': 'All regions',
  'Miền Bắc': 'Northern Vietnam',
  'Miền Trung': 'Central Vietnam',
  'Miền Nam': 'Southern Vietnam',
  'Mới nhất': 'Newest',
  'Đánh giá cao': 'Top rated',
  'Nhiều đánh giá': 'Most reviewed',
  'Phổ biến': 'Popular',
  'Không tìm thấy địa điểm nào': 'No destinations found',
  'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm': 'Try changing filters or search keywords',
  'Không tìm thấy tour nào': 'No tours found',

  'Điểm Đến Du Lịch': 'Travel Destinations',
  'Khám phá những địa điểm du lịch đẹp nhất Việt Nam': 'Discover the most beautiful travel destinations in Vietnam',
  'Giới thiệu': 'Overview',
  'Thời gian đẹp nhất': 'Best time to visit',
  'Chi phí ước tính': 'Estimated cost',
  'Lượt xem': 'Views',
  'Điểm nổi bật': 'Highlights',
  'Mẹo du lịch': 'Travel tips',
  'Đánh giá': 'Reviews',
  'đánh giá': 'reviews',
  'Đánh giá của bạn': 'Your review',
  'Đã đánh giá': 'Reviewed',
  'Sửa': 'Edit',
  'Xóa': 'Delete',
  'Chỉnh sửa đánh giá': 'Edit review',
  'Chia sẻ trải nghiệm của bạn...': 'Share your experience...',
  'Hủy': 'Cancel',
  'Lưu thay đổi': 'Save changes',
  'Viết đánh giá của bạn': 'Write your review',
  'Gửi đánh giá': 'Submit review',
  'Đánh giá đã được gửi!': 'Your review has been submitted!',
  'Hãy': 'Please',
  'đăng nhập': 'log in',
  'để viết đánh giá.': 'to write a review.',
  'Đã yêu thích': 'Favorited',
  'Thêm vào yêu thích': 'Add to favorites',
  'Yêu cầu tư vấn': 'Request consultation',
  'Địa điểm liên quan': 'Related destinations',
  'Không tìm thấy địa điểm': 'Destination not found',
  'Quay lại danh sách': 'Back to list',

  'Gợi Ý Thông Minh': 'Smart Recommendations',
  'Trả lời vài câu hỏi để nhận gợi ý địa điểm phù hợp với bạn': 'Answer a few questions to receive destination recommendations that suit you',
  'Trả lời câu hỏi': 'Answer questions',
  'Bạn muốn đi khu vực nào?': 'Which region would you like to visit?',
  'Loại hình du lịch?': 'What travel type do you prefer?',
  'Ngân sách của bạn?': 'What is your budget?',
  'Tiết kiệm': 'Budget',
  'Trung bình': 'Mid-range',
  'Cao cấp': 'Premium',
  'Đang gợi ý...': 'Finding recommendations...',
  'Gợi ý cho tôi': 'Recommend for me',
  'Chọn sở thích của bạn': 'Choose your preferences',
  'Chúng tôi sẽ gợi ý những địa điểm phù hợp nhất': 'We will suggest the most suitable destinations',
  'Kết quả gợi ý': 'Recommendation results',

  'Liên Hệ': 'Contact',
  'Chúng tôi luôn sẵn sàng hỗ trợ bạn': 'We are always ready to support you',
  'Thông Tin Liên Hệ': 'Contact Information',
  'Địa chỉ': 'Address',
  'Hà Nội, Việt Nam': 'Hanoi, Vietnam',
  'Điện thoại': 'Phone',
  'Giờ làm việc': 'Working hours',
  'Thứ 2 - Thứ 6: 8:00 - 18:00': 'Monday - Friday: 8:00 - 18:00',
  'Gửi Yêu Cầu': 'Send Inquiry',
  'Họ tên *': 'Full name *',
  'Loại yêu cầu': 'Inquiry type',
  'Liên hệ chung': 'General contact',
  'Tư vấn tour': 'Tour consultation',
  'Hỏi về địa điểm': 'Ask about a destination',
  'Tiêu đề *': 'Subject *',
  'Nội dung *': 'Message *',
  'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm.': 'Inquiry sent successfully! We will contact you soon.',
  'Đang gửi...': 'Sending...',
  'Gửi yêu cầu': 'Send inquiry',

  'Chào mừng bạn quay trở lại!': 'Welcome back!',
  'Nhập email của bạn': 'Enter your email',
  'Mật khẩu': 'Password',
  'Nhập mật khẩu': 'Enter password',
  'Đang đăng nhập...': 'Logging in...',
  'Chưa có tài khoản?': 'Don’t have an account?',
  'Đăng ký ngay': 'Register now',
  'Tạo tài khoản': 'Create account',
  'Đăng ký để trải nghiệm đầy đủ tính năng': 'Register to experience all features',
  'Họ tên': 'Full name',
  'Nhập họ tên của bạn': 'Enter your full name',
  'Nhập email': 'Enter email',
  'Số điện thoại': 'Phone number',
  'Nhập số điện thoại (tùy chọn)': 'Enter phone number (optional)',
  'Tối thiểu 6 ký tự': 'At least 6 characters',
  'Xác nhận mật khẩu': 'Confirm password',
  'Nhập lại mật khẩu': 'Re-enter password',
  'Đang đăng ký...': 'Registering...',
  'Đã có tài khoản?': 'Already have an account?',
  'Đăng nhập ngay': 'Login now',

  'Trợ lý Du Lịch': 'Travel Assistant',
  'Luôn sẵn sàng hỗ trợ': 'Always ready to help',
  'Xóa cuộc trò chuyện': 'Clear conversation',
  'Xin chào!': 'Hello!',
  'Tôi có thể giúp bạn tìm địa điểm, gợi ý tour, tư vấn chi phí... Hãy hỏi tôi nhé!': 'I can help you find destinations, recommend tours, estimate costs, and more. Ask me anything!',
  'Địa điểm biển': 'Beach destinations',
  'Tour gia đình': 'Family tours',
  'Chi phí du lịch': 'Travel costs',
  'Địa điểm lãng mạn': 'Romantic destinations',
  'Nhanh': 'Quick',
  'Nhắn tin hỏi về du lịch...': 'Ask about travel...',

  'Website giới thiệu và quảng bá du lịch Việt Nam. Khám phá vẻ đẹp đất nước hình chữ S cùng chúng tôi.': 'A website introducing and promoting Vietnam tourism. Discover the beauty of this S-shaped country with us.',
  'Hỗ trợ': 'Support',
  'Tour nổi bật': 'Featured tours',
  'Mạng xã hội': 'Social media',
  'Mọi quyền được bảo lưu.': 'All rights reserved.',

  'Yêu Cầu Của Tôi': 'My Inquiries',
  'Địa Điểm Yêu Thích': 'Favorite Destinations',
  'Hồ Sơ Cá Nhân': 'Personal Profile',
  'Mật khẩu hiện tại': 'Current password',
  'Mật khẩu mới': 'New password',
  'Đổi mật khẩu': 'Change password',
  'Chưa có địa điểm yêu thích': 'No favorite destinations yet',
  'Chưa có yêu cầu nào': 'No inquiries yet',
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly languages: Array<{ code: LanguageCode; label: string; shortLabel: string }> = [
    { code: 'vi', label: 'Tiếng Việt', shortLabel: 'VI' },
    { code: 'en', label: 'English', shortLabel: 'EN' },
  ];

  readonly currentLanguage = signal<LanguageCode>(this.getInitialLanguage());

  private readonly renderer: Renderer2;
  private readonly originals = new WeakMap<Text, string>();
  private observer?: MutationObserver;
  private translating = false;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyDocumentLanguage(this.currentLanguage());
  }

  setLanguage(language: LanguageCode): void {
    this.currentLanguage.set(language);
    localStorage.setItem(STORAGE_KEY, language);
    this.applyDocumentLanguage(language);
    this.translateDocument();
  }

  translate(value: string | null | undefined): string {
    if (!value || this.currentLanguage() === 'vi') {
      return value ?? '';
    }

    return this.translateText(value.trim());
  }

  startDomTranslation(root: ParentNode = this.document.body): void {
    if (this.observer) {
      return;
    }

    this.translateTree(root);
    this.observer = new MutationObserver((mutations) => {
      if (this.translating) {
        return;
      }

      for (const mutation of mutations) {
        if (mutation.type === 'characterData' && mutation.target.nodeType === Node.TEXT_NODE) {
          this.translateTextNode(mutation.target as Text, true);
        }

        mutation.addedNodes.forEach((node) => this.translateNode(node));
      }
    });

    this.observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  translateDocument(): void {
    this.translateTree(this.document.body);
  }

  private translateNode(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      this.translateTextNode(node as Text);
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      this.translateElement(node as HTMLElement);
    }
  }

  private translateTree(root: ParentNode): void {
    this.translating = true;
    try {
      const walker = this.document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => this.shouldTranslateTextNode(node as Text)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT,
      });

      const textNodes: Text[] = [];
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text);
      }
      textNodes.forEach((node) => this.translateTextNode(node));

      if (root instanceof HTMLElement) {
        this.translateElement(root);
      }
      root.querySelectorAll?.('[placeholder], [title], [aria-label]').forEach((element) => {
        this.translateElement(element as HTMLElement);
      });
    } finally {
      this.translating = false;
    }
  }

  private translateTextNode(node: Text, updateOriginal = false): void {
    if (!this.shouldTranslateTextNode(node)) {
      return;
    }

    const original = updateOriginal ? node.data : this.originals.get(node) ?? node.data;
    if (updateOriginal || !this.originals.has(node)) {
      this.originals.set(node, original);
    }

    const translated = this.translateWithWhitespace(original);
    if (node.data !== translated) {
      node.data = translated;
    }
  }

  private translateElement(element: HTMLElement): void {
    ['placeholder', 'title', 'aria-label'].forEach((attribute) => {
      const originalAttributeName = `data-i18n-original-${attribute}`;
      const current = element.getAttribute(attribute);
      const original = element.getAttribute(originalAttributeName) ?? current;

      if (!original) {
        return;
      }

      if (!element.hasAttribute(originalAttributeName)) {
        this.renderer.setAttribute(element, originalAttributeName, original);
      }

      this.renderer.setAttribute(element, attribute, this.translateWithWhitespace(original));
    });
  }

  private translateWithWhitespace(value: string): string {
    if (this.currentLanguage() === 'vi') {
      return value;
    }

    return value.replace(/\S(?:[\s\S]*\S)?/, (text) => this.translateText(text.trim()));
  }

  private translateText(text: string): string {
    const exactTranslation = EN_TRANSLATIONS[text];
    if (exactTranslation) {
      return exactTranslation;
    }

    return text
      .replace(/đánh giá/g, 'reviews')
      .replace(/lượt xem/g, 'views')
      .replace(/địa điểm/g, 'destinations')
      .replace(/người/g, 'people')
      .replace(/VNĐ/g, 'VND');
  }

  private shouldTranslateTextNode(node: Text): boolean {
    const parent = node.parentElement;
    if (!parent || !node.data.trim()) {
      return false;
    }

    return !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(parent.tagName);
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }

  private getInitialLanguage(): LanguageCode {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (savedLanguage === 'vi' || savedLanguage === 'en') {
      return savedLanguage;
    }

    return 'vi';
  }
}
