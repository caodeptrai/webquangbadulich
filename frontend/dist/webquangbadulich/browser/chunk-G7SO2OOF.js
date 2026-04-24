import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/tours/tour-form/tour-form.component.ts
var TourFormComponent = class _TourFormComponent {
  api;
  route;
  router;
  isEdit = false;
  form = { isFeatured: false, isActive: true };
  loading = false;
  constructor(api, route, router) {
    this.api = api;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.api.getTour(id).subscribe((d) => {
        this.form = __spreadValues({}, d);
      });
    }
  }
  save() {
    this.loading = true;
    const action = this.isEdit ? this.api.updateTour(this.form.id, this.form) : this.api.createTour(this.form);
    action.subscribe({ next: () => this.router.navigate(["/admin/tours"]), error: () => {
      this.loading = false;
    } });
  }
  static \u0275fac = function TourFormComponent_Factory(t) {
    return new (t || _TourFormComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourFormComponent, selectors: [["app-tour-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 13, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "container", "container-sm"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "slug", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-3"], ["type", "text", "name", "duration", "placeholder", "VD: 3 ng\xE0y 2 \u0111\xEAm", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "maxPeople", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "price", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "discountPrice", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "4", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "imageUrl", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "0.75rem"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/admin/tours", 1, "btn", "btn-outline"]], template: function TourFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function TourFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label");
      \u0275\u0275text(11, "T\xEAn *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "label");
      \u0275\u0275text(15, "Slug *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.slug, $event) || (ctx.form.slug = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 7)(19, "label");
      \u0275\u0275text(20, "Th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.duration, $event) || (ctx.form.duration = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "label");
      \u0275\u0275text(24, "S\u1ED1 ng\u01B0\u1EDDi t\u1ED1i \u0111a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.maxPeople, $event) || (ctx.form.maxPeople = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 7)(27, "label");
      \u0275\u0275text(28, "Gi\xE1 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.price, $event) || (ctx.form.price = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 7)(31, "label");
      \u0275\u0275text(32, "Gi\xE1 gi\u1EA3m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.discountPrice, $event) || (ctx.form.discountPrice = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 7)(35, "label");
      \u0275\u0275text(36, "M\xF4 t\u1EA3 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_textarea_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 7)(39, "label");
      \u0275\u0275text(40, "URL h\xECnh \u1EA3nh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.imageUrl, $event) || (ctx.form.imageUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 7)(43, "label")(44, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isFeatured, $event) || (ctx.form.isFeatured = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " N\u1ED5i b\u1EADt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "label")(48, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function TourFormComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isActive, $event) || (ctx.form.isActive = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " Ho\u1EA1t \u0111\u1ED9ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 18)(51, "button", 19);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 20);
      \u0275\u0275text(54, "H\u1EE7y");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEdit ? "S\u1EEDa" : "T\u1EA1o", " tour");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.slug);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.duration);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.maxPeople);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.price);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.discountPrice);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.description);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.imageUrl);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isFeatured);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isActive);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "\u0110ang l\u01B0u..." : "L\u01B0u");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourFormComponent, { className: "TourFormComponent", filePath: "src\\app\\admin\\tours\\tour-form\\tour-form.component.ts", lineNumber: 36 });
})();
export {
  TourFormComponent
};
//# sourceMappingURL=chunk-G7SO2OOF.js.map
