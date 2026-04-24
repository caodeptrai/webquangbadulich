import {
  CheckboxControlValueAccessor,
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
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  __spreadValues,
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

// src/app/admin/destinations/destination-form/destination-form.component.ts
function DestinationFormComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.name);
  }
}
function DestinationFormComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function DestinationFormComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
var DestinationFormComponent = class _DestinationFormComponent {
  api;
  route;
  router;
  isEdit = false;
  form = { isFeatured: false, isActive: true };
  provinces = [];
  categories = [];
  primaryImageUrl = "";
  loading = false;
  error = "";
  constructor(api, route, router) {
    this.api = api;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.api.getProvinces().subscribe((d) => {
      this.provinces = d;
    });
    this.api.getDestinationCategories().subscribe((d) => {
      this.categories = d;
    });
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.api.getDestination(id).subscribe((d) => {
        this.form = __spreadValues({}, d);
        this.primaryImageUrl = d.images?.[0]?.url || "";
      });
    }
  }
  save() {
    this.loading = true;
    this.error = "";
    const data = __spreadValues({}, this.form);
    if (this.primaryImageUrl) {
      data.images = [{ url: this.primaryImageUrl, isPrimary: true, sortOrder: 0 }];
    }
    const action = this.isEdit ? this.api.updateDestination(this.form.id, data) : this.api.createDestination(data);
    action.subscribe({
      next: () => {
        this.router.navigate(["/admin/destinations"]);
      },
      error: (err) => {
        this.error = err.error?.error || "L\u01B0u th\u1EA5t b\u1EA1i";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function DestinationFormComponent_Factory(t) {
    return new (t || _DestinationFormComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationFormComponent, selectors: [["app-destination-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 19, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "container", "container-sm"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "slug", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-2"], ["name", "provinceId", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "categoryId", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "shortDescription", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "5", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "bestTime", "placeholder", "VD: Th\xE1ng 3-5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "estimatedCost", "placeholder", "VD: 500.000 - 1.000.000\u0111", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "imageUrl", "placeholder", "https://...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tips", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], [2, "display", "flex", "gap", "0.75rem"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/admin/destinations", 1, "btn", "btn-outline"], [3, "value"], [1, "form-error"]], template: function DestinationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function DestinationFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label");
      \u0275\u0275text(11, "T\xEAn *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "label");
      \u0275\u0275text(15, "Slug *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.slug, $event) || (ctx.form.slug = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 7)(19, "label");
      \u0275\u0275text(20, "T\u1EC9nh/Th\xE0nh *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.provinceId, $event) || (ctx.form.provinceId = $event);
        return $event;
      });
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Ch\u1ECDn t\u1EC9nh/th\xE0nh");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, DestinationFormComponent_option_24_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 7)(26, "label");
      \u0275\u0275text(27, "Danh m\u1EE5c *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.categoryId, $event) || (ctx.form.categoryId = $event);
        return $event;
      });
      \u0275\u0275elementStart(29, "option", 12);
      \u0275\u0275text(30, "Ch\u1ECDn danh m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, DestinationFormComponent_option_31_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 7)(33, "label");
      \u0275\u0275text(34, "\u0110\u1ECBa ch\u1EC9 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.address, $event) || (ctx.form.address = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 7)(37, "label");
      \u0275\u0275text(38, "M\xF4 t\u1EA3 ng\u1EAFn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.shortDescription, $event) || (ctx.form.shortDescription = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 7)(41, "label");
      \u0275\u0275text(42, "M\xF4 t\u1EA3 chi ti\u1EBFt *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_textarea_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.description, $event) || (ctx.form.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 10)(45, "div", 7)(46, "label");
      \u0275\u0275text(47, "Th\u1EDDi gian \u0111\u1EB9p nh\u1EA5t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.bestTime, $event) || (ctx.form.bestTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 7)(50, "label");
      \u0275\u0275text(51, "Chi ph\xED \u01B0\u1EDBc t\xEDnh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.estimatedCost, $event) || (ctx.form.estimatedCost = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 7)(54, "label");
      \u0275\u0275text(55, "URL h\xECnh \u1EA3nh ch\xEDnh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.primaryImageUrl, $event) || (ctx.primaryImageUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 7)(58, "label");
      \u0275\u0275text(59, "M\u1EB9o du l\u1ECBch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "textarea", 21);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_textarea_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.tips, $event) || (ctx.form.tips = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 7)(62, "label")(63, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isFeatured, $event) || (ctx.form.isFeatured = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " \u0110\xE1nh d\u1EA5u n\u1ED5i b\u1EADt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 7)(66, "label")(67, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function DestinationFormComponent_Template_input_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isActive, $event) || (ctx.form.isActive = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Ho\u1EA1t \u0111\u1ED9ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, DestinationFormComponent_div_69_Template, 2, 1, "div", 23);
      \u0275\u0275elementStart(70, "div", 24)(71, "button", 25);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 26);
      \u0275\u0275text(74, "H\u1EE7y");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEdit ? "S\u1EEDa" : "T\u1EA1o", " \u0111i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.slug);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.provinceId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.provinces);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.categoryId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.address);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.shortDescription);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.description);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.bestTime);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.estimatedCost);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.primaryImageUrl);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.tips);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isFeatured);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isActive);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "\u0110ang l\u01B0u..." : "L\u01B0u");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationFormComponent, { className: "DestinationFormComponent", filePath: "src\\app\\admin\\destinations\\destination-form\\destination-form.component.ts", lineNumber: 47 });
})();
export {
  DestinationFormComponent
};
//# sourceMappingURL=chunk-UPBCPLQZ.js.map
