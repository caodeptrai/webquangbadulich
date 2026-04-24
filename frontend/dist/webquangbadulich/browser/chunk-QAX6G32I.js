import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYQXAGEB.js";

// src/app/pages/user/favorites/favorites.component.ts
var _c0 = (a0) => ["/destinations", a0];
function FavoritesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function FavoritesComponent_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 11);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p")(7, "span", 14);
    \u0275\u0275text(8, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, f_r1.destination.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (f_r1.destination.images == null ? null : f_r1.destination.images[0] == null ? null : f_r1.destination.images[0].url) || "https://picsum.photos/seed/" + f_r1.destination.slug + "/400/300", \u0275\u0275sanitizeUrl)("alt", f_r1.destination.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r1.destination.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r1.destination.province == null ? null : f_r1.destination.province.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r1.destination.rating);
  }
}
function FavoritesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, FavoritesComponent_div_7_a_1_Template, 15, 8, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.favorites);
  }
}
function FavoritesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Ch\u01B0a c\xF3 \u0111\u1ECBa \u0111i\u1EC3m y\xEAu th\xEDch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 20);
    \u0275\u0275text(6, "Kh\xE1m ph\xE1 ngay");
    \u0275\u0275elementEnd()();
  }
}
var FavoritesComponent = class _FavoritesComponent {
  api;
  favorites = [];
  loading = true;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getFavorites().subscribe((data) => {
      this.favorites = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  static \u0275fac = function FavoritesComponent_Factory(t) {
    return new (t || _FavoritesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "page-header"], [1, "container"], [1, "section"], ["class", "loading-spinner", 4, "ngIf"], ["class", "grid grid-3", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "grid", "grid-3"], ["class", "card dest-card fade-in", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "dest-card", "fade-in", 3, "routerLink"], [1, "card-image"], [3, "src", "alt"], [1, "card-body"], [1, "material-icons", 2, "font-size", "1rem", "vertical-align", "middle"], [1, "rating"], [1, "score"], [1, "stars"], [1, "empty-state"], [1, "material-icons"], ["routerLink", "/destinations", 1, "btn", "btn-primary"]], template: function FavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u0110\u1ECBa \u0110i\u1EC3m Y\xEAu Th\xEDch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "section", 2)(5, "div", 1);
      \u0275\u0275template(6, FavoritesComponent_div_6_Template, 2, 0, "div", 3)(7, FavoritesComponent_div_7_Template, 2, 1, "div", 4)(8, FavoritesComponent_div_8_Template, 7, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.favorites.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.dest-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: block;\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\np[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.rating[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=favorites.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "src\\app\\pages\\user\\favorites\\favorites.component.ts", lineNumber: 43 });
})();
export {
  FavoritesComponent
};
//# sourceMappingURL=chunk-QAX6G32I.js.map
