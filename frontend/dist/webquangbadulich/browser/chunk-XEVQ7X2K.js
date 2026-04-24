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
  ɵNgNoValidate
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  NgIf,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/user/profile/profile.component.ts
function ProfileComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function ProfileComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pwError);
  }
}
function ProfileComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pwSuccess);
  }
}
var ProfileComponent = class _ProfileComponent {
  api;
  auth;
  form = {};
  success = "";
  passwordForm = {};
  pwError = "";
  pwSuccess = "";
  loading = false;
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
  }
  ngOnInit() {
    this.form = __spreadValues({}, this.auth.user());
  }
  save() {
    this.loading = true;
    this.api.updateProfile(this.form).subscribe({
      next: (res) => {
        this.auth.updateUser(res.user);
        this.success = "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng!";
        this.loading = false;
        setTimeout(() => this.success = "", 3e3);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  changePassword() {
    if (!this.passwordForm.current || !this.passwordForm.newPass)
      return;
    this.loading = true;
    this.pwError = "";
    this.api.changePassword(this.passwordForm).subscribe({
      next: () => {
        this.pwSuccess = "\u0110\u1ED5i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng!";
        this.passwordForm = {};
        this.loading = false;
        setTimeout(() => this.pwSuccess = "", 3e3);
      },
      error: (err) => {
        this.pwError = err.error?.error || "\u0110\u1ED5i m\u1EADt kh\u1EA9u th\u1EA5t b\u1EA1i";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ProfileComponent_Factory(t) {
    return new (t || _ProfileComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 10, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "container", "container-sm"], [1, "profile-card", "card"], [1, "card-body"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "fullName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-success", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [2, "margin", "2rem 0"], ["type", "password", "name", "current", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "newPass", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "form-success"], [1, "form-error"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "H\u1ED3 S\u01A1 C\xE1 Nh\xE2n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_8_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label");
      \u0275\u0275text(11, "H\u1ECD t\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.fullName, $event) || (ctx.form.fullName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "label");
      \u0275\u0275text(15, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "label");
      \u0275\u0275text(19, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, ProfileComponent_div_21_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275text(23, "L\u01B0u thay \u0111\u1ED5i");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "hr", 13);
      \u0275\u0275elementStart(25, "h3");
      \u0275\u0275text(26, "\u0110\u1ED5i m\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 7)(28, "label");
      \u0275\u0275text(29, "M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.passwordForm.current, $event) || (ctx.passwordForm.current = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 7)(32, "label");
      \u0275\u0275text(33, "M\u1EADt kh\u1EA9u m\u1EDBi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.passwordForm.newPass, $event) || (ctx.passwordForm.newPass = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, ProfileComponent_div_35_Template, 2, 1, "div", 16)(36, ProfileComponent_div_36_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(37, "button", 17);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_37_listener() {
        return ctx.changePassword();
      });
      \u0275\u0275text(38, "\u0110\u1ED5i m\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.fullName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.passwordForm.current);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.passwordForm.newPass);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pwError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pwSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.form-success[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-weight: 600;\n  padding: 0.75rem;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\pages\\user\\profile\\profile.component.ts", lineNumber: 39 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-XEVQ7X2K.js.map
