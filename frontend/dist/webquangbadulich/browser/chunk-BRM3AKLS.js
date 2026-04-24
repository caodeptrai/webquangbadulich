import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/home/home.component.ts
var _c0 = (a0) => ["/destinations", a0];
var _c1 = (a0) => ["/tours", a0];
var _c2 = (a0) => ["/articles", a0];
function HomeComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_53_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "N\u1ED5i b\u1EADt");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_53_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49)(1, "div", 50);
    \u0275\u0275element(2, "img", 51);
    \u0275\u0275template(3, HomeComponent_div_53_a_1_span_3_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "div", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 56)(10, "span", 20);
    \u0275\u0275text(11, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 57)(14, "div", 58)(15, "span", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 60);
    \u0275\u0275text(18, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, d_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (d_r1.images[0] == null ? null : d_r1.images[0].url) || "https://picsum.photos/seed/" + d_r1.slug + "/400/300", \u0275\u0275sanitizeUrl)("alt", d_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r1.isFeatured);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r1.category == null ? null : d_r1.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r1.province == null ? null : d_r1.province.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r1.rating);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", d_r1.reviewCount, " \u0111\xE1nh gi\xE1)");
  }
}
function HomeComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, HomeComponent_div_53_a_1_Template, 21, 11, "a", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.featuredDestinations);
  }
}
function HomeComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_100_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getDiscount(t_r4), "% OFF");
  }
}
function HomeComponent_div_100_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, t_r4.price, "1.0-0"), "\u0111");
  }
}
function HomeComponent_div_100_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 50);
    \u0275\u0275element(2, "img", 51);
    \u0275\u0275template(3, HomeComponent_div_100_div_1_span_3_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h3", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 67)(8, "span", 20);
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 68);
    \u0275\u0275template(12, HomeComponent_div_100_div_1_span_12_Template, 3, 4, "span", 69);
    \u0275\u0275elementStart(13, "span", 70);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 71);
    \u0275\u0275text(17, "/ng\u01B0\u1EDDi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 72)(19, "a", 73);
    \u0275\u0275text(20, "Chi ti\u1EBFt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 74);
    \u0275\u0275listener("click", function HomeComponent_div_100_div_1_Template_button_click_21_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestTour(t_r4));
    });
    \u0275\u0275text(22, "T\u01B0 v\u1EA5n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", t_r4.imageUrl || "https://picsum.photos/seed/" + t_r4.slug + "/400/300", \u0275\u0275sanitizeUrl)("alt", t_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r4.discountPrice);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4.duration, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r4.discountPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 8, t_r4.discountPrice || t_r4.price, "1.0-0"), "\u0111");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, t_r4.slug));
  }
}
function HomeComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, HomeComponent_div_100_div_1_Template, 23, 13, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.featuredTours);
  }
}
function HomeComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_112_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 78)(1, "div", 50);
    \u0275\u0275element(2, "img", 51);
    \u0275\u0275elementStart(3, "span", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 53)(6, "h3", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 81)(11, "span", 20);
    \u0275\u0275text(12, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c2, a_r5.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", a_r5.imageUrl || "https://picsum.photos/seed/" + a_r5.slug + "/400/250", \u0275\u0275sanitizeUrl)("alt", a_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.category == null ? null : a_r5.category.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.excerpt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", a_r5.viewCount, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 8, a_r5.publishedAt, "dd/MM/yyyy"), " ");
  }
}
function HomeComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, HomeComponent_div_112_a_1_Template, 18, 13, "a", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentArticles);
  }
}
function HomeComponent_p_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1, "G\u1EEDi th\xE0nh c\xF4ng! Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 s\u1EDBm.");
    \u0275\u0275elementEnd();
  }
}
var HomeComponent = class _HomeComponent {
  api;
  featuredDestinations = [];
  featuredTours = [];
  recentArticles = [];
  loadingDestinations = true;
  loadingTours = true;
  loadingArticles = true;
  searchKeyword = "";
  searchCategory = "";
  contactName = "";
  contactEmail = "";
  contactMessage = "";
  contactSuccess = false;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadFeaturedDestinations();
    this.loadFeaturedTours();
    this.loadRecentArticles();
  }
  loadFeaturedDestinations() {
    this.api.getFeaturedDestinations().subscribe({
      next: (data) => {
        this.featuredDestinations = data;
        this.loadingDestinations = false;
      },
      error: () => {
        this.loadingDestinations = false;
      }
    });
  }
  loadFeaturedTours() {
    this.api.getFeaturedTours().subscribe({
      next: (data) => {
        this.featuredTours = data;
        this.loadingTours = false;
      },
      error: () => {
        this.loadingTours = false;
      }
    });
  }
  loadRecentArticles() {
    this.api.getRecentArticles().subscribe({
      next: (data) => {
        this.recentArticles = data;
        this.loadingArticles = false;
      },
      error: () => {
        this.loadingArticles = false;
      }
    });
  }
  search() {
    const params = {};
    if (this.searchKeyword)
      params.search = this.searchKeyword;
    if (this.searchCategory)
      params.category = this.searchCategory;
    window.location.href = `/destinations?${Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&")}`;
  }
  getDiscount(tour) {
    if (!tour.discountPrice)
      return 0;
    return Math.round((1 - tour.discountPrice / tour.price) * 100);
  }
  requestTour(tour) {
    window.location.href = "/contact";
  }
  submitQuickContact() {
    if (!this.contactName || !this.contactEmail || !this.contactMessage)
      return;
    this.api.createInquiry({
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactMessage,
      subject: "Y\xEAu c\u1EA7u t\u01B0 v\u1EA5n nhanh t\u1EEB trang ch\u1EE7",
      type: "contact"
    }).subscribe({
      next: () => {
        this.contactSuccess = true;
        this.contactName = "";
        this.contactEmail = "";
        this.contactMessage = "";
        setTimeout(() => this.contactSuccess = false, 5e3);
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 147, vars: 12, consts: [[1, "hero"], [1, "hero-bg"], [1, "container"], [1, "hero-content"], [1, "hero-actions"], ["routerLink", "/destinations", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "/recommendations", 1, "btn", "btn-white", "btn-lg"], [1, "container", 2, "margin-top", "-3rem", "position", "relative", "z-index", "10"], [1, "search-box"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm \u0111\u1ECBa \u0111i\u1EC3m...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "bien"], ["value", "nui-rung"], ["value", "di-tich"], ["value", "thien-nhien"], ["value", "lang-nghe"], [1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "click"], [1, "material-icons"], [1, "section"], [1, "section-header"], ["class", "loading-spinner", 4, "ngIf"], ["class", "grid grid-4", 4, "ngIf"], [1, "text-center", "mt-4"], ["routerLink", "/destinations", 1, "btn", "btn-outline", "btn-lg"], [1, "stats-banner"], [1, "grid", "grid-4"], [1, "stat-item"], ["class", "grid grid-3", 4, "ngIf"], ["routerLink", "/tours", 1, "btn", "btn-outline", "btn-lg"], [1, "section", "bg-light"], ["routerLink", "/articles", 1, "btn", "btn-outline", "btn-lg"], [1, "ai-cta"], [1, "ai-cta-content"], ["routerLink", "/recommendations", 1, "btn", "btn-accent", "btn-lg"], [1, "quick-contact"], [1, "contact-info"], [1, "contact-form"], [1, "grid", "grid-2"], ["type", "text", "placeholder", "H\u1ECD t\xEAn c\u1EE7a b\u1EA1n", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Email c\u1EE7a b\u1EA1n", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "B\u1EA1n c\u1EA7n t\u01B0 v\u1EA5n v\u1EC1...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["class", "contact-success", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], ["class", "card destination-card fade-in", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "destination-card", "fade-in", 3, "routerLink"], [1, "card-image"], [3, "src", "alt"], ["class", "card-badge badge badge-warning", 4, "ngIf"], [1, "card-body"], [1, "card-category"], [1, "card-title"], [1, "card-location"], [1, "card-footer"], [1, "rating"], [1, "score"], [1, "stars"], [1, "count"], [1, "card-badge", "badge", "badge-warning"], [1, "grid", "grid-3"], ["class", "card tour-card fade-in", 4, "ngFor", "ngForOf"], [1, "card", "tour-card", "fade-in"], ["class", "card-badge badge badge-primary", 4, "ngIf"], [1, "card-duration"], [1, "tour-pricing"], ["class", "price-old", 4, "ngIf"], [1, "price"], [1, "per-person"], [1, "card-actions"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-outline", 3, "click"], [1, "card-badge", "badge", "badge-primary"], [1, "price-old"], ["class", "card article-card fade-in", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "article-card", "fade-in", 3, "routerLink"], [1, "badge", "badge-primary", "card-cat"], [1, "card-excerpt"], [1, "card-meta"], [1, "contact-success"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "Kh\xE1m Ph\xE1 Vi\u1EC7t Nam");
      \u0275\u0275element(6, "br");
      \u0275\u0275text(7, "C\xF9ng Ch\xFAng T\xF4i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "H\u1EC7 th\u1ED1ng g\u1EE3i \xFD du l\u1ECBch th\xF4ng minh, t\xECm ki\u1EBFm \u0111i\u1EC3m \u0111\u1EBFn ho\xE0n h\u1EA3o cho chuy\u1EBFn \u0111i c\u1EE7a b\u1EA1n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 4)(11, "a", 5);
      \u0275\u0275text(12, "Kh\xE1m ph\xE1 ngay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275text(14, "G\u1EE3i \xFD AI");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(15, "section", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "label");
      \u0275\u0275text(20, "\u0110i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchKeyword, $event) || (ctx.searchKeyword = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 10)(23, "label");
      \u0275\u0275text(24, "Lo\u1EA1i h\xECnh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchCategory, $event) || (ctx.searchCategory = $event);
        return $event;
      });
      \u0275\u0275elementStart(26, "option", 13);
      \u0275\u0275text(27, "T\u1EA5t c\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 14);
      \u0275\u0275text(29, "Bi\u1EC3n & \u0110\u1EA3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "N\xFAi & R\u1EEBng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 16);
      \u0275\u0275text(33, "Di t\xEDch & L\u1ECBch s\u1EED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 17);
      \u0275\u0275text(35, "Thi\xEAn nhi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 18);
      \u0275\u0275text(37, "L\xE0ng ngh\u1EC1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "label");
      \u0275\u0275text(40, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 19);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_41_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(42, "span", 20);
      \u0275\u0275text(43, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " T\xECm ki\u1EBFm ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "section", 21)(46, "div", 2)(47, "div", 22)(48, "h2");
      \u0275\u0275text(49, "\u0110i\u1EC3m \u0110\u1EBFn N\u1ED5i B\u1EADt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "Kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m du l\u1ECBch \u0111\u1EB9p nh\u1EA5t Vi\u1EC7t Nam \u0111\u01B0\u1EE3c y\xEAu th\xEDch nh\u1EA5t");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(52, HomeComponent_div_52_Template, 2, 0, "div", 23)(53, HomeComponent_div_53_Template, 2, 1, "div", 24);
      \u0275\u0275elementStart(54, "div", 25)(55, "a", 26);
      \u0275\u0275text(56, "Xem t\u1EA5t c\u1EA3 \u0111i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "section", 27)(58, "div", 2)(59, "div", 28)(60, "div", 29)(61, "span", 20);
      \u0275\u0275text(62, "place");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div")(64, "strong");
      \u0275\u0275text(65, "30+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "\u0110i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 29)(69, "span", 20);
      \u0275\u0275text(70, "tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div")(72, "strong");
      \u0275\u0275text(73, "15+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p");
      \u0275\u0275text(75, "Tour du l\u1ECBch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 29)(77, "span", 20);
      \u0275\u0275text(78, "article");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div")(80, "strong");
      \u0275\u0275text(81, "20+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "B\xE0i vi\u1EBFt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 29)(85, "span", 20);
      \u0275\u0275text(86, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div")(88, "strong");
      \u0275\u0275text(89, "5000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p");
      \u0275\u0275text(91, "Du kh\xE1ch");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(92, "section", 21)(93, "div", 2)(94, "div", 22)(95, "h2");
      \u0275\u0275text(96, "Tour Du L\u1ECBch Hot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Nh\u1EEFng tour \u0111\u01B0\u1EE3c \u0111\u1EB7t nhi\u1EC1u nh\u1EA5t, l\u1ECBch tr\xECnh h\u1EA5p d\u1EABn, gi\xE1 c\u1EA3 h\u1EE3p l\xFD");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(99, HomeComponent_div_99_Template, 2, 0, "div", 23)(100, HomeComponent_div_100_Template, 2, 1, "div", 30);
      \u0275\u0275elementStart(101, "div", 25)(102, "a", 31);
      \u0275\u0275text(103, "Xem t\u1EA5t c\u1EA3 tour");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(104, "section", 32)(105, "div", 2)(106, "div", 22)(107, "h2");
      \u0275\u0275text(108, "C\u1EA9m Nang Du L\u1ECBch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "Kinh nghi\u1EC7m, m\u1EB9o hay v\xE0 l\u1ECBch tr\xECnh t\u1EEB nh\u1EEFng ng\u01B0\u1EDDi \u0111\xE3 \u0111i");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(111, HomeComponent_div_111_Template, 2, 0, "div", 23)(112, HomeComponent_div_112_Template, 2, 1, "div", 30);
      \u0275\u0275elementStart(113, "div", 25)(114, "a", 33);
      \u0275\u0275text(115, "Xem t\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(116, "section", 34)(117, "div", 2)(118, "div", 35)(119, "span", 20);
      \u0275\u0275text(120, "psychology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "h2");
      \u0275\u0275text(122, "G\u1EE3i \xFD Th\xF4ng Minh B\u1EB1ng AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Tr\u1EA3 l\u1EDDi v\xE0i c\xE2u h\u1ECFi \u0111\u01A1n gi\u1EA3n, ch\xFAng t\xF4i s\u1EBD g\u1EE3i \xFD nh\u1EEFng \u0111i\u1EC3m \u0111\u1EBFn ph\xF9 h\u1EE3p nh\u1EA5t v\u1EDBi b\u1EA1n.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "a", 36)(126, "span", 20);
      \u0275\u0275text(127, "auto_awesome");
      \u0275\u0275elementEnd();
      \u0275\u0275text(128, " B\u1EAFt \u0111\u1EA7u g\u1EE3i \xFD ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "section", 21)(130, "div", 2)(131, "div", 37)(132, "div", 38)(133, "h2");
      \u0275\u0275text(134, "Li\xEAn H\u1EC7 Ngay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p");
      \u0275\u0275text(136, "B\u1EA1n c\u1EA7n t\u01B0 v\u1EA5n v\u1EC1 tour du l\u1ECBch? \u0110\u1EC3 l\u1EA1i th\xF4ng tin, ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 l\u1EA1i ngay!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 39)(138, "div", 40)(139, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_139_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contactName, $event) || (ctx.contactName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_140_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contactEmail, $event) || (ctx.contactEmail = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "textarea", 43);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_141_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contactMessage, $event) || (ctx.contactMessage = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "button", 44);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_142_listener() {
        return ctx.submitQuickContact();
      });
      \u0275\u0275elementStart(143, "span", 20);
      \u0275\u0275text(144, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(145, " G\u1EEDi y\xEAu c\u1EA7u ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(146, HomeComponent_p_146_Template, 2, 0, "p", 45);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCategory);
      \u0275\u0275advance(27);
      \u0275\u0275property("ngIf", ctx.loadingDestinations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingDestinations);
      \u0275\u0275advance(46);
      \u0275\u0275property("ngIf", ctx.loadingTours);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTours);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.loadingArticles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingArticles);
      \u0275\u0275advance(27);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactName);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.contactEmail);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.contactMessage);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.contactSuccess);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.destination-card[_ngcontent-%COMP%], .tour-card[_ngcontent-%COMP%], .article-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n}\n.card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.card-category[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--primary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.3;\n}\n.card-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 0.75rem;\n}\n.card-location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f5f9;\n  padding-top: 0.75rem;\n}\n.card-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 0.75rem;\n}\n.card-duration[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tour-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.tour-pricing[_ngcontent-%COMP%]   .price-old[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--gray-light);\n  font-size: 0.875rem;\n  margin-right: 0.5rem;\n}\n.tour-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--danger);\n}\n.tour-pricing[_ngcontent-%COMP%]   .per-person[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-excerpt[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.9375rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  color: var(--gray);\n  font-size: 0.8125rem;\n  align-items: center;\n}\n.card-meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.card-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n}\n.stats-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #5a67d8 100%);\n  padding: 3rem 0;\n  color: white;\n  margin: 2rem 0;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: center;\n}\n.stat-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.9;\n}\n.stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  display: block;\n}\n.stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.ai-cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 4rem 0;\n  text-align: center;\n  color: white;\n}\n.ai-cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.ai-cta-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.9;\n}\n.ai-cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 0.75rem;\n}\n.ai-cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  opacity: 0.9;\n  margin-bottom: 1.5rem;\n}\n.quick-contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 3rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .quick-contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n}\n.contact-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.contact-success[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 403 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-BRM3AKLS.js.map
