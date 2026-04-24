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
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/pages/article/article-list/article-list.component.ts
var _c0 = (a0) => ["/articles", a0];
function ArticleListComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
function ArticleListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function ArticleListComponent_div_18_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24)(11, "span")(12, "span", 5);
    \u0275\u0275text(13, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span")(16, "span", 5);
    \u0275\u0275text(17, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, a_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", a_r2.imageUrl || "https://picsum.photos/seed/" + a_r2.slug + "/400/250", \u0275\u0275sanitizeUrl)("alt", a_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.category == null ? null : a_r2.category.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.excerpt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", a_r2.viewCount, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 8, a_r2.publishedAt, "dd/MM/yyyy"), "");
  }
}
function ArticleListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ArticleListComponent_div_18_a_1_Template, 20, 13, "a", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.articles);
  }
}
function ArticleListComponent_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ArticleListComponent_div_19_button_1_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r5 === ctx_r2.pagination.page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function ArticleListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, ArticleListComponent_div_19_button_1_Template, 2, 3, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
  }
}
var ArticleListComponent = class _ArticleListComponent {
  api;
  articles = [];
  categories = [];
  loading = true;
  search = "";
  category = "";
  pagination = { page: 1, limit: 9, total: 0, totalPages: 0 };
  pageNumbers = [];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadArticles();
  }
  loadCategories() {
    this.api.getArticleCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  loadArticles() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: 9, category: this.category };
    if (this.search)
      params.search = this.search;
    this.api.getArticles(params).subscribe((res) => {
      this.articles = res.data;
      this.pagination = res.pagination;
      this.pageNumbers = Array.from({ length: Math.min(5, res.pagination.totalPages) }, (_, i) => i + 1);
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  goToPage(p) {
    this.pagination.page = p;
    this.loadArticles();
  }
  static \u0275fac = function ArticleListComponent_Factory(t) {
    return new (t || _ArticleListComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleListComponent, selectors: [["app-article-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 6, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "filters-bar"], [1, "filter-search"], [1, "material-icons"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm b\xE0i vi\u1EBFt...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "grid grid-3", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "value"], [1, "loading-spinner"], [1, "spinner"], [1, "grid", "grid-3"], ["class", "card article-card fade-in", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "article-card", "fade-in", 3, "routerLink"], [1, "card-image"], [3, "src", "alt"], [1, "badge", "badge-primary", "card-cat"], [1, "card-body"], [1, "excerpt"], [1, "card-meta"], [1, "pagination"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ArticleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "C\u1EA9m Nang Du L\u1ECBch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Kinh nghi\u1EC7m, m\u1EB9o hay v\xE0 l\u1ECBch tr\xECnh t\u1EEB nh\u1EEFng ng\u01B0\u1EDDi \u0111\xE3 \u0111i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 2)(7, "div", 1)(8, "div", 3)(9, "div", 4)(10, "span", 5);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ArticleListComponent_Template_input_ngModelChange_12_listener() {
        return ctx.loadArticles();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleListComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.category, $event) || (ctx.category = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ArticleListComponent_Template_select_change_13_listener() {
        return ctx.loadArticles();
      });
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "T\u1EA5t c\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ArticleListComponent_option_16_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, ArticleListComponent_div_17_Template, 2, 0, "div", 10)(18, ArticleListComponent_div_18_Template, 2, 1, "div", 11)(19, ArticleListComponent_div_19_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.category);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pagination.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.article-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n}\n.article-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.excerpt[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  color: var(--gray);\n  font-size: 0.8125rem;\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.card-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.filter-search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  position: relative;\n}\n.filter-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray);\n}\n.filter-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.75rem;\n}\n/*# sourceMappingURL=article-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleListComponent, { className: "ArticleListComponent", filePath: "src\\app\\pages\\article\\article-list\\article-list.component.ts", lineNumber: 60 });
})();
export {
  ArticleListComponent
};
//# sourceMappingURL=chunk-RG4JQPT6.js.map
