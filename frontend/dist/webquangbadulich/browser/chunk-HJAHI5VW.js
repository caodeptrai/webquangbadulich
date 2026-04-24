import {
  FormsModule
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYQXAGEB.js";

// src/app/admin/users/users.component.ts
function UsersComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_table_7_tr_16_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function UsersComponent_table_7_tr_16_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const u_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(u_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.isActive ? "V\xF4 hi\u1EC7u" : "K\xEDch ho\u1EA1t");
  }
}
function UsersComponent_table_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, UsersComponent_table_7_tr_16_button_15_Template, 2, 1, "button", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-danger", u_r2.role.name === "admin")("badge-primary", u_r2.role.name === "user");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.role.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", u_r2.isActive)("badge-danger", !u_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 14, u_r2.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", u_r2.role.name !== "admin");
  }
}
function UsersComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 7)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "H\u1ECD t\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Vai tr\xF2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Ng\xE0y t\u1EA1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UsersComponent_table_7_tr_16_Template, 16, 17, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.users);
  }
}
var UsersComponent = class _UsersComponent {
  api;
  users = [];
  loading = true;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getUsers().subscribe((data) => {
      this.users = data.data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  toggle(id) {
    this.api.toggleUserActive(id).subscribe(() => this.ngOnInit());
  }
  static \u0275fac = function UsersComponent_Factory(t) {
    return new (t || _UsersComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header"], [1, "container"], [1, "section"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], ["class", "btn btn-sm btn-outline", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline", 3, "click"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD Ng\u01B0\u1EDDi d\xF9ng");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1);
      \u0275\u0275template(6, UsersComponent_div_6_Template, 2, 0, "div", 3)(7, UsersComponent_table_7_Template, 17, 1, "table", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\admin\\users\\users.component.ts", lineNumber: 32 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-HJAHI5VW.js.map
