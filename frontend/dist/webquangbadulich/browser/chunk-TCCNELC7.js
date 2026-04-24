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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/articles/article-form/article-form.component.ts
function ArticleFormComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
var ArticleFormComponent = class _ArticleFormComponent {
  api;
  route;
  router;
  isEdit = false;
  form = { isFeatured: false, isPublished: true };
  categories = [];
  loading = false;
  constructor(api, route, router) {
    this.api = api;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.api.getArticleCategories().subscribe((d) => {
      this.categories = d;
    });
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.api.getArticle(id).subscribe((d) => {
        this.form = __spreadValues({}, d);
      });
    }
  }
  save() {
    this.loading = true;
    const action = this.isEdit ? this.api.updateArticle(this.form.id, this.form) : this.api.createArticle(this.form);
    action.subscribe({ next: () => this.router.navigate(["/admin/articles"]), error: () => {
      this.loading = false;
    } });
  }
  static \u0275fac = function ArticleFormComponent_Factory(t) {
    return new (t || _ArticleFormComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleFormComponent, selectors: [["app-article-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 12, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "container", "container-sm"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "title", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "categoryId", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "excerpt", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "10", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "imageUrl", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "tags", "placeholder", "VD: sapa,m\xF9a l\xFAa ch\xEDn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "0.75rem"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/admin/articles", 1, "btn", "btn-outline"], [3, "value"]], template: function ArticleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label");
      \u0275\u0275text(11, "Ti\xEAu \u0111\u1EC1 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.title, $event) || (ctx.form.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "label");
      \u0275\u0275text(15, "Danh m\u1EE5c *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.categoryId, $event) || (ctx.form.categoryId = $event);
        return $event;
      });
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Ch\u1ECDn danh m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, ArticleFormComponent_option_19_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 7)(21, "label");
      \u0275\u0275text(22, "T\xF3m t\u1EAFt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "textarea", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_textarea_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.excerpt, $event) || (ctx.form.excerpt = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "label");
      \u0275\u0275text(26, "N\u1ED9i dung HTML *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "textarea", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_textarea_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.content, $event) || (ctx.form.content = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "label");
      \u0275\u0275text(30, "URL h\xECnh \u1EA3nh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.imageUrl, $event) || (ctx.form.imageUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7)(33, "label");
      \u0275\u0275text(34, "Tags (comma-separated)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.tags, $event) || (ctx.form.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 7)(37, "label")(38, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isFeatured, $event) || (ctx.form.isFeatured = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " N\u1ED5i b\u1EADt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 7)(41, "label")(42, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ArticleFormComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isPublished, $event) || (ctx.form.isPublished = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " Xu\u1EA5t b\u1EA3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 17)(45, "button", 18);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 19);
      \u0275\u0275text(48, "H\u1EE7y");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.isEdit ? "S\u1EEDa" : "T\u1EA1o", " b\xE0i vi\u1EBFt");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.title);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.categoryId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.excerpt);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.content);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.imageUrl);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.tags);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isFeatured);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isPublished);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "\u0110ang l\u01B0u..." : "L\u01B0u");
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleFormComponent, { className: "ArticleFormComponent", filePath: "src\\app\\admin\\articles\\article-form\\article-form.component.ts", lineNumber: 32 });
})();
export {
  ArticleFormComponent
};
//# sourceMappingURL=chunk-TCCNELC7.js.map
