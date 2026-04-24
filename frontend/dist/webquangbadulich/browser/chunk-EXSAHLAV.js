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
  DecimalPipe,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/tour/tour-list/tour-list.component.ts
var _c0 = (a0) => ["/tours", a0];
function TourListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function TourListComponent_div_20_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getDiscount(t_r1), "% OFF");
  }
}
function TourListComponent_div_20_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Hot");
    \u0275\u0275elementEnd();
  }
}
function TourListComponent_div_20_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, t_r1.price, "1.0-0"), "\u0111");
  }
}
function TourListComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275template(3, TourListComponent_div_20_div_1_span_3_Template, 2, 1, "span", 22)(4, TourListComponent_div_20_div_1_span_4_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 25)(9, "span", 5);
    \u0275\u0275text(10, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 27);
    \u0275\u0275template(15, TourListComponent_div_20_div_1_span_15_Template, 3, 4, "span", 28);
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 30);
    \u0275\u0275text(20, "/ng\u01B0\u1EDDi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "a", 32);
    \u0275\u0275text(23, "Chi ti\u1EBFt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 33);
    \u0275\u0275text(25, "T\u01B0 v\u1EA5n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", t_r1.imageUrl || "https://picsum.photos/seed/" + t_r1.slug + "/400/250", \u0275\u0275sanitizeUrl)("alt", t_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.discountPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.isFeatured);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", t_r1.duration, " | ", t_r1.maxPeople, " ng\u01B0\u1EDDi");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r1.discountPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 11, t_r1.discountPrice || t_r1.price, "1.0-0"), "\u0111");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, t_r1.slug));
  }
}
function TourListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, TourListComponent_div_20_div_1_Template, 26, 16, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tours);
  }
}
function TourListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 5);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Kh\xF4ng t\xECm th\u1EA5y tour n\xE0o");
    \u0275\u0275elementEnd()();
  }
}
function TourListComponent_div_22_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function TourListComponent_div_22_button_1_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r4 === ctx_r1.pagination.page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function TourListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, TourListComponent_div_22_button_1_Template, 2, 3, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
  }
}
var TourListComponent = class _TourListComponent {
  api;
  tours = [];
  loading = true;
  search = "";
  sort = "createdAt";
  pagination = { page: 1, limit: 12, total: 0, totalPages: 0 };
  pageNumbers = [];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadTours();
  }
  loadTours() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: 12, sort: this.sort };
    if (this.search)
      params.search = this.search;
    this.api.getTours(params).subscribe({
      next: (res) => {
        this.tours = res.data;
        this.pagination = res.pagination;
        this.pageNumbers = Array.from({ length: Math.min(5, res.pagination.totalPages) }, (_, i) => i + 1);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getDiscount(t) {
    if (!t.discountPrice)
      return 0;
    return Math.round((1 - t.discountPrice / t.price) * 100);
  }
  goToPage(page) {
    this.pagination.page = page;
    this.loadTours();
  }
  static \u0275fac = function TourListComponent_Factory(t) {
    return new (t || _TourListComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourListComponent, selectors: [["app-tour-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 6, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "filters-bar"], [1, "filter-search"], [1, "material-icons"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm tour...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "createdAt"], ["value", "price"], ["class", "loading-spinner", 4, "ngIf"], ["class", "grid grid-3", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "grid", "grid-3"], ["class", "card tour-card fade-in", 4, "ngFor", "ngForOf"], [1, "card", "tour-card", "fade-in"], [1, "card-image"], [3, "src", "alt"], ["class", "badge badge-primary card-badge", 4, "ngIf"], ["class", "badge badge-warning card-badge", 4, "ngIf"], [1, "card-body"], [1, "duration"], [1, "desc"], [1, "pricing"], ["class", "old", 4, "ngIf"], [1, "current"], [1, "per"], [1, "card-actions"], [1, "btn", "btn-primary", 3, "routerLink"], ["routerLink", "/contact", 1, "btn", "btn-outline"], [1, "badge", "badge-primary", "card-badge"], [1, "badge", "badge-warning", "card-badge"], [1, "old"], [1, "empty-state"], [1, "pagination"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TourListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Tour Du L\u1ECBch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Ch\u1ECDn tour ph\xF9 h\u1EE3p, l\xEAn k\u1EBF ho\u1EA1ch cho chuy\u1EBFn \u0111i ho\xE0n h\u1EA3o");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 2)(7, "div", 1)(8, "div", 3)(9, "div", 4)(10, "span", 5);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function TourListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TourListComponent_Template_input_ngModelChange_12_listener() {
        return ctx.loadTours();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function TourListComponent_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sort, $event) || (ctx.sort = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TourListComponent_Template_select_change_14_listener() {
        return ctx.loadTours();
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "M\u1EDBi nh\u1EA5t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Gi\xE1: Th\u1EA5p \u0111\u1EBFn cao");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(19, TourListComponent_div_19_Template, 2, 0, "div", 11)(20, TourListComponent_div_20_Template, 2, 1, "div", 12)(21, TourListComponent_div_21_Template, 5, 0, "div", 13)(22, TourListComponent_div_22_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sort);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.tours.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pagination.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.tour-card[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n}\n.tour-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n}\n.duration[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n.pricing[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.pricing[_ngcontent-%COMP%]   .old[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--gray-light);\n  font-size: 0.875rem;\n  margin-right: 0.5rem;\n}\n.pricing[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--danger);\n}\n.pricing[_ngcontent-%COMP%]   .per[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.filter-search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  position: relative;\n}\n.filter-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--gray);\n}\n.filter-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.75rem;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=tour-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourListComponent, { className: "TourListComponent", filePath: "src\\app\\pages\\tour\\tour-list\\tour-list.component.ts", lineNumber: 81 });
})();
export {
  TourListComponent
};
//# sourceMappingURL=chunk-EXSAHLAV.js.map
