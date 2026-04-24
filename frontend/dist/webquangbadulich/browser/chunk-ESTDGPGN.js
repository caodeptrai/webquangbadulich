import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/admin/categories/categories.component.ts
function CategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_button_click_3_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete("destinations", c_r2.id));
    });
    \u0275\u0275text(4, "X\xF3a");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r2.name, " (", c_r2._count == null ? null : c_r2._count.destinations, ")");
  }
}
function CategoriesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_Template_button_click_3_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete("articles", c_r5.id));
    });
    \u0275\u0275text(4, "X\xF3a");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r5.name, " (", c_r5._count == null ? null : c_r5._count.articles, ")");
  }
}
var CategoriesComponent = class _CategoriesComponent {
  api;
  destCategories = [];
  artCategories = [];
  newDestCat = "";
  newArtCat = "";
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getDestinationCategories().subscribe((d) => {
      this.destCategories = d;
    });
    this.api.getArticleCategories().subscribe((d) => {
      this.artCategories = d;
    });
  }
  add(type) {
    const name = type === "destinations" ? this.newDestCat : this.newArtCat;
    if (!name.trim())
      return;
    const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");
    const action = type === "destinations" ? this.api.getDestinationCategories() : this.api.getArticleCategories();
    fetch("http://localhost:3000/api/categories/" + type, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("auth_token") },
      body: JSON.stringify({ name, slug })
    }).then(() => location.reload());
  }
  delete() {
  }
  static \u0275fac = function CategoriesComponent_Factory(t) {
    return new (t || _CategoriesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 4, consts: [[1, "page-header"], [1, "container"], [1, "section"], [1, "grid", "grid-2"], [1, "card"], [1, "card-body"], ["class", "cat-item", 4, "ngFor", "ngForOf"], [1, "add-form"], ["type", "text", "placeholder", "T\xEAn danh m\u1EE5c m\u1EDBi", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "cat-item"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Qu\u1EA3n l\xFD Danh m\u1EE5c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h3");
      \u0275\u0275text(10, "\u0110i\u1EC3m \u0111\u1EBFn");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CategoriesComponent_div_11_Template, 5, 2, "div", 6);
      \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newDestCat, $event) || (ctx.newDestCat = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_14_listener() {
        return ctx.add("destinations");
      });
      \u0275\u0275text(15, "Th\xEAm");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "h3");
      \u0275\u0275text(19, "B\xE0i vi\u1EBFt");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, CategoriesComponent_div_20_Template, 5, 2, "div", 6);
      \u0275\u0275elementStart(21, "div", 7)(22, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newArtCat, $event) || (ctx.newArtCat = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 9);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_23_listener() {
        return ctx.add("articles");
      });
      \u0275\u0275text(24, "Th\xEAm");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.destCategories);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newDestCat);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.artCategories);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newArtCat);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.cat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.add-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.add-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=categories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src\\app\\admin\\categories\\categories.component.ts", lineNumber: 37 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-ESTDGPGN.js.map
