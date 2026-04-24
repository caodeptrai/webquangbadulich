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

// src/app/admin/articles/articles.component.ts
var _c0 = (a0) => ["/admin/articles/edit", a0];
function AdminArticlesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function AdminArticlesComponent_table_13_tr_14_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "a", 14);
    \u0275\u0275text(12, "S\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 15);
    \u0275\u0275listener("click", function AdminArticlesComponent_table_13_tr_14_Template_button_click_13_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(a_r2.id));
    });
    \u0275\u0275text(14, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.category == null ? null : a_r2.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.viewCount);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", a_r2.isPublished)("badge-danger", !a_r2.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.isPublished ? "Published" : "Draft");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, a_r2.id));
  }
}
function AdminArticlesComponent_table_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 11)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Ti\xEAu \u0111\u1EC1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Danh m\u1EE5c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "L\u01B0\u1EE3t xem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminArticlesComponent_table_13_tr_14_Template, 15, 11, "tr", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.data);
  }
}
var AdminArticlesComponent = class _AdminArticlesComponent {
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
    this.api.getArticles(params).subscribe((res) => {
      this.data = res.data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  delete(id) {
    if (confirm("X\xE1c nh\u1EADn x\xF3a?"))
      this.api.deleteArticle(id).subscribe(() => this.load());
  }
  static \u0275fac = function AdminArticlesComponent_Factory(t) {
    return new (t || _AdminArticlesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminArticlesComponent, selectors: [["app-admin-articles"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 3, consts: [[1, "page-header"], [1, "container"], [1, "section"], [2, "margin-bottom", "1.5rem", "display", "flex", "justify-content", "space-between", "align-items", "center"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm...", 1, "form-control", 2, "max-width", "300px", 3, "ngModelChange", "ngModel"], ["routerLink", "/admin/articles/create", 1, "btn", "btn-primary"], [1, "material-icons"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function AdminArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD B\xE0i vi\u1EBFt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1)(6, "div", 3)(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminArticlesComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminArticlesComponent_Template_input_ngModelChange_7_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5)(9, "span", 6);
      \u0275\u0275text(10, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Th\xEAm m\u1EDBi");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, AdminArticlesComponent_div_12_Template, 2, 0, "div", 7)(13, AdminArticlesComponent_table_13_Template, 15, 1, "table", 8);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminArticlesComponent, { className: "AdminArticlesComponent", filePath: "src\\app\\admin\\articles\\articles.component.ts", lineNumber: 36 });
})();
export {
  AdminArticlesComponent
};
//# sourceMappingURL=chunk-PMVNPM66.js.map
