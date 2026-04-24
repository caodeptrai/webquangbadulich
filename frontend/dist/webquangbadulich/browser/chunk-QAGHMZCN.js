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
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYQXAGEB.js";

// src/app/admin/reviews/reviews.component.ts
function ReviewsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function ReviewsComponent_table_7_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 9);
    \u0275\u0275listener("click", function ReviewsComponent_table_7_tr_14_Template_button_click_12_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(r_r2.id));
    });
    \u0275\u0275text(13, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.user == null ? null : r_r2.user.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(5, 4, r_r2.comment, 0, 60), "...");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r2.rating, "/5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, r_r2.createdAt, "dd/MM/yyyy"));
  }
}
function ReviewsComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 7)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Ng\u01B0\u1EDDi d\xF9ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "N\u1ED9i dung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Ng\xE0y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ReviewsComponent_table_7_tr_14_Template, 14, 11, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.reviews);
  }
}
var ReviewsComponent = class _ReviewsComponent {
  api;
  reviews = [];
  loading = true;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getDestinations({ limit: 30 }).subscribe((res) => {
      const allReviews = [];
      res.data.forEach((d) => {
        if (d.reviews)
          allReviews.push(...d.reviews);
      });
      this.reviews = allReviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  delete(id) {
    if (confirm("X\xE1c nh\u1EADn x\xF3a \u0111\xE1nh gi\xE1?"))
      this.api.deleteReview(id).subscribe(() => this.ngOnInit());
  }
  static \u0275fac = function ReviewsComponent_Factory(t) {
    return new (t || _ReviewsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewsComponent, selectors: [["app-reviews"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header"], [1, "container"], [1, "section"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function ReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD \u0110\xE1nh gi\xE1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1);
      \u0275\u0275template(6, ReviewsComponent_div_6_Template, 2, 0, "div", 3)(7, ReviewsComponent_table_7_Template, 15, 1, "table", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewsComponent, { className: "ReviewsComponent", filePath: "src\\app\\admin\\reviews\\reviews.component.ts", lineNumber: 31 });
})();
export {
  ReviewsComponent
};
//# sourceMappingURL=chunk-QAGHMZCN.js.map
