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

// src/app/pages/auth/register/register.component.ts
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var RegisterComponent = class _RegisterComponent {
  api;
  auth;
  router;
  fullName = "";
  email = "";
  phone = "";
  password = "";
  confirmPassword = "";
  error = "";
  loading = false;
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
  }
  onSubmit() {
    if (!this.fullName || !this.email || !this.password)
      return;
    if (this.password !== this.confirmPassword) {
      this.error = "M\u1EADt kh\u1EA9u kh\xF4ng kh\u1EDBp";
      return;
    }
    if (this.password.length < 6) {
      this.error = "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 6 k\xFD t\u1EF1";
      return;
    }
    this.loading = true;
    this.error = "";
    this.api.register({ fullName: this.fullName, email: this.email, phone: this.phone, password: this.password }).subscribe({
      next: (res) => {
        this.auth.login(res.token, res.user);
        this.loading = false;
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.error = err.error?.error || "\u0110\u0103ng k\xFD th\u1EA5t b\u1EA1i";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(t) {
    return new (t || _RegisterComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 8, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "fullName", "required", "", "placeholder", "Nh\u1EADp h\u1ECD t\xEAn c\u1EE7a b\u1EA1n", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "Nh\u1EADp email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i (t\xF9y ch\u1ECDn)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "T\u1ED1i thi\u1EC3u 6 k\xFD t\u1EF1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "form-error"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "T\u1EA1o t\xE0i kho\u1EA3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\u0110\u0103ng k\xFD \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7 t\xEDnh n\u0103ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "label");
      \u0275\u0275text(10, "H\u1ECD t\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fullName, $event) || (ctx.fullName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4)(13, "label");
      \u0275\u0275text(14, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 4)(17, "label");
      \u0275\u0275text(18, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 4)(21, "label");
      \u0275\u0275text(22, "M\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 4)(25, "label");
      \u0275\u0275text(26, "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, RegisterComponent_div_28_Template, 2, 1, "div", 10);
      \u0275\u0275elementStart(29, "button", 11);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 12)(32, "p");
      \u0275\u0275text(33, "\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n? ");
      \u0275\u0275elementStart(34, "a", 13);
      \u0275\u0275text(35, "\u0110\u0103ng nh\u1EADp ngay");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.fullName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u0110ang \u0111\u0103ng k\xFD..." : "T\u1EA1o t\xE0i kho\u1EA3n", " ");
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--gray);\n  margin: 0;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\pages\\auth\\register\\register.component.ts", lineNumber: 58 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-NQH2WCQZ.js.map
