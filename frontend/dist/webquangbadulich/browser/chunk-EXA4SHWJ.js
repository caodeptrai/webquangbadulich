import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UYQXAGEB.js";

// src/app/pages/user/inquiries/inquiries.component.ts
function InquiriesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function InquiriesComponent_table_7_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 10, i_r1.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.subject);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-warning", i_r1.status === "pending")("badge-success", i_r1.status === "replied")("badge-danger", i_r1.status === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
  }
}
function InquiriesComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Ng\xE0y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Ti\xEAu \u0111\u1EC1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Lo\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, InquiriesComponent_table_7_tr_12_Template, 12, 13, "tr", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.inquiries);
  }
}
function InquiriesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Ch\u01B0a c\xF3 y\xEAu c\u1EA7u n\xE0o");
    \u0275\u0275elementEnd()();
  }
}
var InquiriesComponent = class _InquiriesComponent {
  api;
  inquiries = [];
  loading = true;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getMyInquiries().subscribe((data) => {
      this.inquiries = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  static \u0275fac = function InquiriesComponent_Factory(t) {
    return new (t || _InquiriesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InquiriesComponent, selectors: [["app-inquiries"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "container", "container-sm"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-primary"], [1, "badge"], [1, "empty-state"], [1, "material-icons"]], template: function InquiriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Y\xEAu C\u1EA7u C\u1EE7a T\xF4i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3);
      \u0275\u0275template(6, InquiriesComponent_div_6_Template, 2, 0, "div", 4)(7, InquiriesComponent_table_7_Template, 13, 1, "table", 5)(8, InquiriesComponent_div_8_Template, 5, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.inquiries.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.inquiries.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InquiriesComponent, { className: "InquiriesComponent", filePath: "src\\app\\pages\\user\\inquiries\\inquiries.component.ts", lineNumber: 34 });
})();
export {
  InquiriesComponent
};
//# sourceMappingURL=chunk-EXA4SHWJ.js.map
