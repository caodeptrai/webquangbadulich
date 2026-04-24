import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/destinations/destinations.component.ts
var _c0 = (a0) => ["/admin/destinations/edit", a0];
function AdminDestinationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminDestinationsComponent_table_13_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "a", 15);
    \u0275\u0275text(14, "S\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function AdminDestinationsComponent_table_13_tr_16_Template_button_click_15_listener() {
      const d_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(d_r2.id));
    });
    \u0275\u0275text(16, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.province == null ? null : d_r2.province.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.category == null ? null : d_r2.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.rating);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", d_r2.isActive)("badge-danger", !d_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, d_r2.id));
  }
}
function AdminDestinationsComponent_table_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "T\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "T\u1EC9nh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Danh m\u1EE5c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminDestinationsComponent_table_13_tr_16_Template, 17, 12, "tr", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.data);
  }
}
function AdminDestinationsComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AdminDestinationsComponent_div_14_button_1_Template_button_click_0_listener() {
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
function AdminDestinationsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AdminDestinationsComponent_div_14_button_1_Template, 2, 3, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
  }
}
var AdminDestinationsComponent = class _AdminDestinationsComponent {
  api;
  data = [];
  loading = true;
  search = "";
  pagination = { page: 1, limit: 20, total: 0, totalPages: 0 };
  pageNumbers = [];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: 20 };
    if (this.search)
      params.search = this.search;
    this.api.getDestinations(params).subscribe((res) => {
      this.data = res.data;
      this.pagination = res.pagination;
      this.pageNumbers = Array.from({ length: Math.min(5, res.pagination.totalPages) }, (_, i) => i + 1);
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  goToPage(p) {
    this.pagination.page = p;
    this.load();
  }
  delete(id) {
    if (confirm("X\xE1c nh\u1EADn x\xF3a?")) {
      this.api.deleteDestination(id).subscribe(() => this.load());
    }
  }
  static \u0275fac = function AdminDestinationsComponent_Factory(t) {
    return new (t || _AdminDestinationsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDestinationsComponent, selectors: [["app-admin-destinations"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "page-header"], [1, "container"], [1, "section"], [2, "margin-bottom", "1.5rem", "display", "flex", "justify-content", "space-between", "align-items", "center"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm...", 1, "form-control", 2, "max-width", "300px", 3, "ngModelChange", "ngModel"], ["routerLink", "/admin/destinations/create", 1, "btn", "btn-primary"], [1, "material-icons"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "pagination"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AdminDestinationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD \u0110i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1)(6, "div", 3)(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminDestinationsComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminDestinationsComponent_Template_input_ngModelChange_7_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5)(9, "span", 6);
      \u0275\u0275text(10, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Th\xEAm m\u1EDBi");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, AdminDestinationsComponent_div_12_Template, 2, 0, "div", 7)(13, AdminDestinationsComponent_table_13_Template, 17, 1, "table", 8)(14, AdminDestinationsComponent_div_14_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pagination.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDestinationsComponent, { className: "AdminDestinationsComponent", filePath: "src\\app\\admin\\destinations\\destinations.component.ts", lineNumber: 43 });
})();
export {
  AdminDestinationsComponent
};
//# sourceMappingURL=chunk-P3BRLUPK.js.map
