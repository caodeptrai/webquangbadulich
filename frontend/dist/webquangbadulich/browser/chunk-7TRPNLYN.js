import {
  AuthService
} from "./chunk-PLBN7SNA.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UYQXAGEB.js";

// src/app/admin/admin-layout/admin-layout.component.ts
var AdminLayoutComponent = class _AdminLayoutComponent {
  auth;
  constructor(auth) {
    this.auth = auth;
  }
  logout() {
    this.auth.logout();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(t) {
    return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 1, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-header"], [1, "material-icons"], [1, "sidebar-menu"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active"], ["routerLink", "/admin/destinations", "routerLinkActive", "active"], ["routerLink", "/admin/tours", "routerLinkActive", "active"], ["routerLink", "/admin/articles", "routerLinkActive", "active"], ["routerLink", "/admin/categories", "routerLinkActive", "active"], ["routerLink", "/admin/users", "routerLinkActive", "active"], ["routerLink", "/admin/reviews", "routerLinkActive", "active"], ["routerLink", "/admin/inquiries", "routerLinkActive", "active"], ["routerLink", "/", "routerLinkActive", "active"], [2, "cursor", "pointer", 3, "click"], [1, "admin-main"], [1, "admin-header"], [1, "header-actions"], [1, "admin-content"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "beach_access");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Admin Panel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4)(7, "li")(8, "a", 5)(9, "span", 3);
      \u0275\u0275text(10, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 6)(14, "span", 3);
      \u0275\u0275text(15, "place");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " \u0110i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 7)(19, "span", 3);
      \u0275\u0275text(20, "tour");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Tour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 8)(24, "span", 3);
      \u0275\u0275text(25, "article");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " B\xE0i vi\u1EBFt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 9)(29, "span", 3);
      \u0275\u0275text(30, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Danh m\u1EE5c");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 10)(34, "span", 3);
      \u0275\u0275text(35, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Ng\u01B0\u1EDDi d\xF9ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 11)(39, "span", 3);
      \u0275\u0275text(40, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " \u0110\xE1nh gi\xE1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 12)(44, "span", 3);
      \u0275\u0275text(45, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Y\xEAu c\u1EA7u t\u01B0 v\u1EA5n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 13)(49, "span", 3);
      \u0275\u0275text(50, "home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " V\u1EC1 website");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 14);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_53_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(54, "span", 3);
      \u0275\u0275text(55, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " \u0110\u0103ng xu\u1EA5t");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 15)(58, "header", 16)(59, "h2");
      \u0275\u0275text(60, "Qu\u1EA3n tr\u1ECB Du L\u1ECBch Qu\u1EA3ng B\xE1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 17)(62, "span");
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 18);
      \u0275\u0275element(65, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(63);
      \u0275\u0275textInterpolate1("Xin ch\xE0o, ", (tmp_0_0 = ctx.auth.user()) == null ? null : tmp_0_0.fullName, "");
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\admin\\admin-layout\\admin-layout.component.ts", lineNumber: 46 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-7TRPNLYN.js.map
