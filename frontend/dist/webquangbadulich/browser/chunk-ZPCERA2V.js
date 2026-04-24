import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYQXAGEB.js";

// src/app/admin/dashboard/dashboard.component.ts
function DashboardComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", i_r1.subject, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-warning", i_r1.status === "pending")("badge-success", i_r1.status === "replied");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
  }
}
function DashboardComponent_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r2.viewCount, " l\u01B0\u1EE3t xem");
  }
}
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2", 3);
    \u0275\u0275text(2, "Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "span", 7);
    \u0275\u0275text(7, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11, "\u0110i\u1EC3m \u0111\u1EBFn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 5)(13, "div", 10)(14, "span", 7);
    \u0275\u0275text(15, "tour");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9);
    \u0275\u0275text(19, "Tours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 5)(21, "div", 11)(22, "span", 7);
    \u0275\u0275text(23, "article");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 8);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 9);
    \u0275\u0275text(27, "B\xE0i vi\u1EBFt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 5)(29, "div", 12)(30, "span", 7);
    \u0275\u0275text(31, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 8);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9);
    \u0275\u0275text(35, "Ng\u01B0\u1EDDi d\xF9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 13)(37, "div", 5)(38, "div", 10)(39, "span", 7);
    \u0275\u0275text(40, "star");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 8);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 9);
    \u0275\u0275text(44, "\u0110\xE1nh gi\xE1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 5)(46, "div", 11)(47, "span", 7);
    \u0275\u0275text(48, "pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 8);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 9);
    \u0275\u0275text(52, "Y\xEAu c\u1EA7u ch\u1EDD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 5)(54, "div", 6)(55, "span", 7);
    \u0275\u0275text(56, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 8);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 9);
    \u0275\u0275text(60, "User ho\u1EA1t \u0111\u1ED9ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 14)(62, "div", 15)(63, "div", 16)(64, "h3");
    \u0275\u0275text(65, "Y\xEAu c\u1EA7u g\u1EA7n \u0111\xE2y");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, DashboardComponent_div_0_div_66_Template, 7, 7, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 15)(68, "div", 16)(69, "h3");
    \u0275\u0275text(70, "\u0110\u1ECBa \u0111i\u1EC3m xem nhi\u1EC1u nh\u1EA5t");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, DashboardComponent_div_0_div_71_Template, 6, 2, "div", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.stats.destinations);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.tours);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.articles);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.users);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.stats.reviews);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.pendingInquiries);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.activeUsers);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.recentInquiries);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.topDestinations);
  }
}
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  api;
  stats = null;
  recentInquiries = [];
  topDestinations = [];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getDashboard().subscribe((data) => {
      this.stats = data.stats;
      this.recentInquiries = data.recentInquiries;
      this.topDestinations = data.topDestinations;
    });
  }
  static \u0275fac = function DashboardComponent_Factory(t) {
    return new (t || _DashboardComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "fade-in", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "fade-in"], [2, "margin-bottom", "1.5rem"], [1, "grid", "grid-4", 2, "margin-bottom", "2rem"], [1, "stat-card"], [1, "stat-icon", "icon-primary"], [1, "material-icons"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "icon-success"], [1, "stat-icon", "icon-warning"], [1, "stat-icon", "icon-danger"], [1, "grid", "grid-3"], [1, "grid", "grid-2", 2, "margin-top", "2rem"], [1, "card"], [1, "card-body"], ["class", "mini-item", 4, "ngFor", "ngForOf"], [1, "mini-item"], [1, "badge"], [1, "loading-spinner"], [1, "spinner"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DashboardComponent_div_0_Template, 72, 9, "div", 0)(1, DashboardComponent_div_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.stats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.stats);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.mini-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 0.9375rem;\n}\n.mini-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\admin\\dashboard\\dashboard.component.ts", lineNumber: 68 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-ZPCERA2V.js.map
