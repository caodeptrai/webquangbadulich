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
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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

// src/app/pages/contact/contact.component.ts
function ContactComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ContactComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 s\u1EDBm.");
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  api;
  auth;
  form = { type: "contact" };
  error = "";
  success = false;
  loading = false;
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
    if (this.auth.isLoggedIn()) {
      this.form.name = this.auth.user()?.fullName;
      this.form.email = this.auth.user()?.email;
    }
  }
  submit() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error = "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c";
      return;
    }
    this.loading = true;
    this.error = "";
    this.api.createInquiry(this.form).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.form = { type: "contact" };
      },
      error: (err) => {
        this.error = err.error?.error || "G\u1EEDi th\u1EA5t b\u1EA1i";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ContactComponent_Factory(t) {
    return new (t || _ContactComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 10, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "contact-layout"], [1, "contact-info"], [1, "info-item"], [1, "material-icons"], [1, "contact-form-wrapper"], [3, "ngSubmit"], [1, "grid", "grid-2"], [1, "form-group"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "contact"], ["value", "tour"], ["value", "destination"], ["type", "text", "name", "subject", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "message", "rows", "5", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], ["class", "form-success", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], [1, "form-error"], [1, "form-success"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Li\xEAn H\u1EC7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Ch\xFAng t\xF4i lu\xF4n s\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3 b\u1EA1n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 2)(7, "div", 1)(8, "div", 3)(9, "div", 4)(10, "h2");
      \u0275\u0275text(11, "Th\xF4ng Tin Li\xEAn H\u1EC7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "span", 6);
      \u0275\u0275text(14, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "h4");
      \u0275\u0275text(17, "\u0110\u1ECBa ch\u1EC9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "H\xE0 N\u1ED9i, Vi\u1EC7t Nam");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 5)(21, "span", 6);
      \u0275\u0275text(22, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "h4");
      \u0275\u0275text(25, "\u0110i\u1EC7n tho\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "0901 234 567");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 5)(29, "span", 6);
      \u0275\u0275text(30, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "h4");
      \u0275\u0275text(33, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "info@dulichquangba.vn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 5)(37, "span", 6);
      \u0275\u0275text(38, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "h4");
      \u0275\u0275text(41, "Gi\u1EDD l\xE0m vi\u1EC7c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Th\u1EE9 2 - Th\u1EE9 6: 8:00 - 18:00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 7)(45, "h2");
      \u0275\u0275text(46, "G\u1EEDi Y\xEAu C\u1EA7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "form", 8);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_47_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(48, "div", 9)(49, "div", 10)(50, "label");
      \u0275\u0275text(51, "H\u1ECD t\xEAn *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 10)(54, "label");
      \u0275\u0275text(55, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 9)(58, "div", 10)(59, "label");
      \u0275\u0275text(60, "\u0110i\u1EC7n tho\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 10)(63, "label");
      \u0275\u0275text(64, "Lo\u1EA1i y\xEAu c\u1EA7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_select_ngModelChange_65_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.type, $event) || (ctx.form.type = $event);
        return $event;
      });
      \u0275\u0275elementStart(66, "option", 15);
      \u0275\u0275text(67, "Li\xEAn h\u1EC7 chung");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 16);
      \u0275\u0275text(69, "T\u01B0 v\u1EA5n tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "option", 17);
      \u0275\u0275text(71, "H\u1ECFi v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 10)(73, "label");
      \u0275\u0275text(74, "Ti\xEAu \u0111\u1EC1 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.subject, $event) || (ctx.form.subject = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 10)(77, "label");
      \u0275\u0275text(78, "N\u1ED9i dung *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "textarea", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_79_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(80, ContactComponent_div_80_Template, 2, 1, "div", 20)(81, ContactComponent_div_81_Template, 2, 0, "div", 21);
      \u0275\u0275elementStart(82, "button", 22)(83, "span", 6);
      \u0275\u0275text(84, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(52);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.type);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.subject);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u0110ang g\u1EEDi..." : "G\u1EEDi y\xEAu c\u1EA7u", " ");
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.contact-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 3rem;\n}\n@media (max-width: 768px) {\n  .contact-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.info-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.5rem;\n  margin-top: 0.25rem;\n}\n.info-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1rem;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--gray);\n}\n.contact-form-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-success[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-weight: 600;\n  padding: 0.75rem;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\pages\\contact\\contact.component.ts", lineNumber: 62 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-3VFVJ2FQ.js.map
