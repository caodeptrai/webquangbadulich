import {
  AuthService
} from "./chunk-PLBN7SNA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/auth/login/login.component.ts
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  api;
  auth;
  router;
  email = "";
  password = "";
  error = "";
  loading = false;
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
  }
  onSubmit() {
    if (!this.email || !this.password)
      return;
    this.loading = true;
    this.error = "";
    this.api.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.auth.login(res.token, res.user);
        this.loading = false;
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.error = err.error?.error || "\u0110\u0103ng nh\u1EADp th\u1EA5t b\u1EA1i";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 5, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "Nh\u1EADp email c\u1EE7a b\u1EA1n", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "demo-accounts"], [1, "form-error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u0110\u0103ng nh\u1EADp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Ch\xE0o m\u1EEBng b\u1EA1n quay tr\u1EDF l\u1EA1i!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "label");
      \u0275\u0275text(10, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4)(13, "label");
      \u0275\u0275text(14, "M\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, LoginComponent_div_16_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 9)(20, "p");
      \u0275\u0275text(21, "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? ");
      \u0275\u0275elementStart(22, "a", 10);
      \u0275\u0275text(23, "\u0110\u0103ng k\xFD ngay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 11)(25, "p")(26, "strong");
      \u0275\u0275text(27, "Demo accounts:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Admin: admin@webquangbadulich.com / admin123");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "User: user@webquangbadulich.com / user123");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110\u0103ng nh\u1EADp", " ");
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  margin: 0;\n}\n.demo-accounts[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: var(--gray);\n}\n.demo-accounts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\auth\\login\\login.component.ts", lineNumber: 52 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-32CJW5JO.js.map
