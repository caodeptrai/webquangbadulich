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
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  __spreadValues,
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

// src/app/pages/destination/destination-list/destination-list.component.ts
var _c0 = (a0) => ["/destinations", a0];
function DestinationListComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
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
function DestinationListComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
}
function DestinationListComponent_div_37_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "N\u1ED5i b\u1EADt");
    \u0275\u0275elementEnd();
  }
}
function DestinationListComponent_div_37_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27)(1, "div", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275template(3, DestinationListComponent_div_37_a_1_span_3_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 33)(10, "span", 5);
    \u0275\u0275text(11, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 35)(16, "div", 36)(17, "span", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 38);
    \u0275\u0275text(20, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, d_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (d_r2.images[0] == null ? null : d_r2.images[0].url) || "https://picsum.photos/seed/" + d_r2.slug + "/400/300", \u0275\u0275sanitizeUrl)("alt", d_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r2.isFeatured);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.category == null ? null : d_r2.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r2.province == null ? null : d_r2.province.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r2.rating);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", d_r2.reviewCount, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.estimatedCost);
  }
}
function DestinationListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, DestinationListComponent_div_37_a_1_Template, 25, 13, "a", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.destinations);
  }
}
function DestinationListComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 5);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ECBa \u0111i\u1EC3m n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Th\u1EED thay \u0111\u1ED5i b\u1ED9 l\u1ECDc ho\u1EB7c t\u1EEB kh\xF3a t\xECm ki\u1EBFm");
    \u0275\u0275elementEnd()();
  }
}
function DestinationListComponent_div_39_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function DestinationListComponent_div_39_button_4_Template_button_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r6 === ctx_r2.pagination.page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6);
  }
}
function DestinationListComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function DestinationListComponent_div_39_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination.page - 1));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, DestinationListComponent_div_39_button_4_Template, 2, 3, "button", 45);
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function DestinationListComponent_div_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.pagination.page + 1));
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.pagination.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.pagination.page >= ctx_r2.pagination.totalPages);
  }
}
var DestinationListComponent = class _DestinationListComponent {
  api;
  route;
  destinations = [];
  categories = [];
  loading = true;
  filters = { search: "", category: "", region: "", sort: "createdAt" };
  pagination = { page: 1, limit: 12, total: 0, totalPages: 0 };
  pageNumbers = [];
  constructor(api, route) {
    this.api = api;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.filters.search = params["search"] || "";
      this.filters.category = params["category"] || "";
      this.loadCategories();
      this.loadDestinations();
    });
  }
  loadCategories() {
    this.api.getDestinationCategories().subscribe({
      next: (data) => {
        this.categories = data;
      }
    });
  }
  loadDestinations() {
    this.loading = true;
    const params = __spreadValues({ page: this.pagination.page, limit: 12 }, this.filters);
    Object.keys(params).forEach((k) => {
      if (!params[k])
        delete params[k];
    });
    this.api.getDestinations(params).subscribe({
      next: (res) => {
        this.destinations = res.data;
        this.pagination = res.pagination;
        this.pageNumbers = Array.from({ length: Math.min(5, res.pagination.totalPages) }, (_, i) => i + 1);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearchChange() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.loadDestinations(), 500);
  }
  goToPage(page) {
    this.pagination.page = page;
    this.loadDestinations();
    window.scrollTo({ top: 300, behavior: "smooth" });
  }
  static \u0275fac = function DestinationListComponent_Factory(t) {
    return new (t || _DestinationListComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationListComponent, selectors: [["app-destination-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 9, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "filters-bar"], [1, "filter-search"], [1, "material-icons"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm \u0111\u1ECBa \u0111i\u1EC3m...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "NORTH"], ["value", "CENTRAL"], ["value", "SOUTH"], ["value", "createdAt"], ["value", "rating"], ["value", "reviewCount"], ["value", "viewCount"], ["class", "loading-spinner", 4, "ngIf"], ["class", "grid grid-4", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "value"], [1, "loading-spinner"], [1, "spinner"], [1, "grid", "grid-4"], ["class", "card dest-card fade-in", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "dest-card", "fade-in", 3, "routerLink"], [1, "card-image"], [3, "src", "alt"], ["class", "badge badge-warning card-badge", 4, "ngIf"], [1, "card-body"], [1, "card-category"], [1, "location"], [1, "short-desc"], [1, "card-footer"], [1, "rating"], [1, "score"], [1, "stars"], [1, "count"], [1, "cost"], [1, "badge", "badge-warning", "card-badge"], [1, "empty-state"], [1, "pagination"], [3, "click", "disabled"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function DestinationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u0110i\u1EC3m \u0110\u1EBFn Du L\u1ECBch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m du l\u1ECBch \u0111\u1EB9p nh\u1EA5t Vi\u1EC7t Nam");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 2)(7, "div", 1)(8, "div", 3)(9, "div", 4)(10, "span", 5);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DestinationListComponent_Template_input_ngModelChange_12_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationListComponent_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.category, $event) || (ctx.filters.category = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DestinationListComponent_Template_select_change_14_listener() {
        return ctx.loadDestinations();
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "T\u1EA5t c\u1EA3 lo\u1EA1i h\xECnh");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DestinationListComponent_option_17_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.region, $event) || (ctx.filters.region = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DestinationListComponent_Template_select_change_18_listener() {
        return ctx.loadDestinations();
      });
      \u0275\u0275elementStart(19, "option", 9);
      \u0275\u0275text(20, "T\u1EA5t c\u1EA3 v\xF9ng mi\u1EC1n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 11);
      \u0275\u0275text(22, "Mi\u1EC1n B\u1EAFc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 12);
      \u0275\u0275text(24, "Mi\u1EC1n Trung");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 13);
      \u0275\u0275text(26, "Mi\u1EC1n Nam");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationListComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.sort, $event) || (ctx.filters.sort = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DestinationListComponent_Template_select_change_27_listener() {
        return ctx.loadDestinations();
      });
      \u0275\u0275elementStart(28, "option", 14);
      \u0275\u0275text(29, "M\u1EDBi nh\u1EA5t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "\u0110\xE1nh gi\xE1 cao");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 16);
      \u0275\u0275text(33, "Nhi\u1EC1u \u0111\xE1nh gi\xE1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 17);
      \u0275\u0275text(35, "Ph\u1ED5 bi\u1EBFn");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(36, DestinationListComponent_div_36_Template, 2, 0, "div", 18)(37, DestinationListComponent_div_37_Template, 2, 1, "div", 19)(38, DestinationListComponent_div_38_Template, 7, 0, "div", 20)(39, DestinationListComponent_div_39_Template, 8, 3, "div", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.category);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.region);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.sort);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.destinations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pagination.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.filter-search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  position: relative;\n}\n.filter-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray);\n}\n.filter-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.75rem;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.dest-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n}\n.dest-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.card-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--primary);\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 0.25rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.short-desc[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 0.75rem;\n}\n.cost[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray);\n}\n/*# sourceMappingURL=destination-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationListComponent, { className: "DestinationListComponent", filePath: "src\\app\\pages\\destination\\destination-list\\destination-list.component.ts", lineNumber: 164 });
})();
export {
  DestinationListComponent
};
//# sourceMappingURL=chunk-HWKFIEUU.js.map
