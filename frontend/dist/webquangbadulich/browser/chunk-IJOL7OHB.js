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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/tours/tours.component.ts
var _c0 = (a0) => ["/admin/tours/edit", a0];
function AdminToursComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function AdminToursComponent_table_13_tr_14_Template(rf, ctx) {
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
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "a", 14);
    \u0275\u0275text(13, "S\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275listener("click", function AdminToursComponent_table_13_tr_14_Template_button_click_14_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(t_r2.id));
    });
    \u0275\u0275text(15, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 9, t_r2.discountPrice || t_r2.price, "1.0-0"), "\u0111");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", t_r2.isActive)("badge-danger", !t_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, t_r2.id));
  }
}
function AdminToursComponent_table_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 11)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "T\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Th\u1EDDi gian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Gi\xE1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminToursComponent_table_13_tr_14_Template, 16, 14, "tr", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.data);
  }
}
var AdminToursComponent = class _AdminToursComponent {
  api;
  data = [];
  loading = true;
  search = "";
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = {};
    if (this.search)
      params.search = this.search;
    this.api.getTours(params).subscribe((res) => {
      this.data = res.data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  delete(id) {
    if (confirm("X\xE1c nh\u1EADn x\xF3a?"))
      this.api.deleteTour(id).subscribe(() => this.load());
  }
  static \u0275fac = function AdminToursComponent_Factory(t) {
    return new (t || _AdminToursComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminToursComponent, selectors: [["app-admin-tours"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 3, consts: [[1, "page-header"], [1, "container"], [1, "section"], [2, "margin-bottom", "1.5rem", "display", "flex", "justify-content", "space-between", "align-items", "center"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm...", 1, "form-control", 2, "max-width", "300px", 3, "ngModelChange", "ngModel"], ["routerLink", "/admin/tours/create", 1, "btn", "btn-primary"], [1, "material-icons"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function AdminToursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD Tours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1)(6, "div", 3)(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminToursComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminToursComponent_Template_input_ngModelChange_7_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5)(9, "span", 6);
      \u0275\u0275text(10, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Th\xEAm m\u1EDBi");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, AdminToursComponent_div_12_Template, 2, 0, "div", 7)(13, AdminToursComponent_table_13_Template, 15, 1, "table", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminToursComponent, { className: "AdminToursComponent", filePath: "src\\app\\admin\\tours\\tours.component.ts", lineNumber: 36 });
})();
export {
  AdminToursComponent
};
//# sourceMappingURL=chunk-IJOL7OHB.js.map
