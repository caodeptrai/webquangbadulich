import {
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
  CommonModule,
  DatePipe,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/inquiries/inquiries.component.ts
function AdminInquiriesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function AdminInquiriesComponent_table_17_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminInquiriesComponent_table_17_tr_18_Template_select_ngModelChange_14_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(i_r2.status, $event) || (i_r2.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AdminInquiriesComponent_table_17_tr_18_Template_select_change_14_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(i_r2));
    });
    \u0275\u0275elementStart(15, "option", 6);
    \u0275\u0275text(16, "Ch\u1EDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 7);
    \u0275\u0275text(18, "\u0110\xE3 tr\u1EA3 l\u1EDDi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 8);
    \u0275\u0275text(20, "\u0110\xE3 \u0111\xF3ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "button", 17);
    \u0275\u0275listener("click", function AdminInquiriesComponent_table_17_tr_18_Template_button_click_22_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(i_r2.id));
    });
    \u0275\u0275text(23, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, i_r2.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2.subject);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", i_r2.status);
  }
}
function AdminInquiriesComponent_table_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 13)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Ng\xE0y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "T\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Ti\xEAu \u0111\u1EC1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Lo\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, AdminInquiriesComponent_table_17_tr_18_Template, 24, 9, "tr", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.inquiries);
  }
}
var AdminInquiriesComponent = class _AdminInquiriesComponent {
  api;
  inquiries = [];
  loading = true;
  filterStatus = "";
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = {};
    if (this.filterStatus)
      params.status = this.filterStatus;
    this.api.getInquiries(params).subscribe((data) => {
      this.inquiries = data.data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  updateStatus(inq) {
    this.api.updateInquiry(inq.id, { status: inq.status }).subscribe();
  }
  delete(id) {
    if (confirm("X\xE1c nh\u1EADn x\xF3a?"))
      this.api.deleteInquiry(id).subscribe(() => this.load());
  }
  static \u0275fac = function AdminInquiriesComponent_Factory(t) {
    return new (t || _AdminInquiriesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminInquiriesComponent, selectors: [["app-admin-inquiries"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 3, consts: [[1, "page-header"], [1, "container"], [1, "section"], [2, "margin-bottom", "1rem"], [1, "form-control", 2, "max-width", "200px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "pending"], ["value", "replied"], ["value", "closed"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-primary"], [1, "form-control", 2, "font-size", "0.8125rem", "padding", "0.25rem 0.5rem", 3, "ngModelChange", "change", "ngModel"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function AdminInquiriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD Y\xEAu c\u1EA7u t\u01B0 v\u1EA5n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1)(6, "div", 3)(7, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminInquiriesComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminInquiriesComponent_Template_select_change_7_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(8, "option", 5);
      \u0275\u0275text(9, "T\u1EA5t c\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 6);
      \u0275\u0275text(11, "Ch\u1EDD x\u1EED l\xFD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "\u0110\xE3 tr\u1EA3 l\u1EDDi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "\u0110\xE3 \u0111\xF3ng");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, AdminInquiriesComponent_div_16_Template, 2, 0, "div", 9)(17, AdminInquiriesComponent_table_17_Template, 19, 1, "table", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminInquiriesComponent, { className: "AdminInquiriesComponent", filePath: "src\\app\\admin\\inquiries\\inquiries.component.ts", lineNumber: 47 });
})();
export {
  AdminInquiriesComponent
};
//# sourceMappingURL=chunk-KQ7PNSEA.js.map
