import {
  AuthService
} from "./chunk-PLBN7SNA.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-EBMQE2LI.js";
import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/recommendation/recommendation.component.ts
var _c0 = (a0) => ["/destinations", a0];
function RecommendationComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 6);
    \u0275\u0275text(2, "travel_explore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Ch\u1ECDn s\u1EDF th\xEDch c\u1EE7a b\u1EA1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ch\xFAng t\xF4i s\u1EBD g\u1EE3i \xFD nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m ph\xF9 h\u1EE3p nh\u1EA5t");
    \u0275\u0275elementEnd()();
  }
}
function RecommendationComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function RecommendationComponent_div_65_div_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reason_r1);
  }
}
function RecommendationComponent_div_65_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementStart(2, "div", 29)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30)(6, "span", 6);
    \u0275\u0275text(7, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31);
    \u0275\u0275element(10, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 33);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34);
    \u0275\u0275template(15, RecommendationComponent_div_65_div_5_span_15_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 36);
    \u0275\u0275text(17, "Xem chi ti\u1EBFt");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (r_r2.images == null ? null : r_r2.images[0] == null ? null : r_r2.images[0].url) || "https://picsum.photos/seed/" + r_r2.slug + "/200/150", \u0275\u0275sanitizeUrl)("alt", r_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r2.province == null ? null : r_r2.province.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", r_r2.recommendationScore, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Match: ", \u0275\u0275pipeBind2(13, 9, r_r2.recommendationScore, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", r_r2.matchReasons.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, r_r2.slug));
  }
}
function RecommendationComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RecommendationComponent_div_65_div_5_Template, 18, 14, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("K\u1EBFt qu\u1EA3 g\u1EE3i \xFD (", ctx_r2.results.recommendations.length, " \u0111\u1ECBa \u0111i\u1EC3m)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Algorithm: ", ctx_r2.results.algorithm, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.results.recommendations);
  }
}
var RecommendationComponent = class _RecommendationComponent {
  api;
  auth;
  loading = false;
  results = null;
  preferences = {};
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
  }
  ngOnInit() {
  }
  getRecommendations() {
    this.loading = true;
    const prefs = {};
    const regions = [];
    const categories = [];
    if (this.preferences.north)
      regions.push("NORTH");
    if (this.preferences.central)
      regions.push("CENTRAL");
    if (this.preferences.south)
      regions.push("SOUTH");
    if (this.preferences.beach)
      categories.push("bien");
    if (this.preferences.mountain)
      categories.push("nui-rung");
    if (this.preferences.historic)
      categories.push("di-tich");
    if (this.preferences.nature)
      categories.push("thien-nhien");
    if (regions.length)
      prefs.regions = regions;
    if (categories.length)
      prefs.categories = categories;
    if (this.preferences.budget)
      prefs.budget = this.preferences.budget;
    this.api.getRecommendations(prefs).subscribe({
      next: (res) => {
        this.results = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function RecommendationComponent_Factory(t) {
    return new (t || _RecommendationComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommendationComponent, selectors: [["app-recommendation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 15, consts: [[1, "page-header", 2, "background", "linear-gradient(135deg,#667eea 0%,#764ba2 100%)"], [1, "container"], [1, "material-icons", 2, "font-size", "3rem", "margin-bottom", "0.5rem"], [1, "section"], [1, "rec-layout"], [1, "rec-form"], [1, "material-icons"], [1, "form-group"], [1, "checkbox-group"], [1, "checkbox-item"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "radio-group"], [1, "radio-item"], ["type", "radio", "value", "low", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "medium", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "high", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "click", "disabled"], [1, "rec-results"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "results-list", 4, "ngIf"], [1, "empty-state"], [1, "loading-spinner"], [1, "spinner"], [1, "results-list"], [1, "algo-note"], ["class", "result-card card", 4, "ngFor", "ngForOf"], [1, "result-card", "card"], [3, "src", "alt"], [1, "result-info"], [1, "location"], [1, "score-bar"], [1, "score-fill"], [1, "score-text"], [1, "reasons"], ["class", "badge badge-primary", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "badge", "badge-primary"]], template: function RecommendationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "psychology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "G\u1EE3i \xDD Th\xF4ng Minh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Tr\u1EA3 l\u1EDDi v\xE0i c\xE2u h\u1ECFi \u0111\u1EC3 nh\u1EADn g\u1EE3i \xFD \u0111\u1ECBa \u0111i\u1EC3m ph\xF9 h\u1EE3p v\u1EDBi b\u1EA1n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section", 3)(9, "div", 1)(10, "div", 4)(11, "div", 5)(12, "h3")(13, "span", 6);
      \u0275\u0275text(14, "quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "label");
      \u0275\u0275text(18, "B\u1EA1n mu\u1ED1n \u0111i khu v\u1EF1c n\xE0o?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 8)(20, "label", 9)(21, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.north, $event) || (ctx.preferences.north = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Mi\u1EC1n B\u1EAFc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "label", 9)(24, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.central, $event) || (ctx.preferences.central = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Mi\u1EC1n Trung");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "label", 9)(27, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.south, $event) || (ctx.preferences.south = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Mi\u1EC1n Nam");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 7)(30, "label");
      \u0275\u0275text(31, "Lo\u1EA1i h\xECnh du l\u1ECBch?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "label", 9)(34, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.beach, $event) || (ctx.preferences.beach = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Bi\u1EC3n & \u0110\u1EA3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "label", 9)(37, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.mountain, $event) || (ctx.preferences.mountain = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " N\xFAi & R\u1EEBng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "label", 9)(40, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.historic, $event) || (ctx.preferences.historic = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " Di t\xEDch & L\u1ECBch s\u1EED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "label", 9)(43, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.nature, $event) || (ctx.preferences.nature = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Thi\xEAn nhi\xEAn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 7)(46, "label");
      \u0275\u0275text(47, "Ng\xE2n s\xE1ch c\u1EE7a b\u1EA1n?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 11)(49, "label", 12)(50, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.budget, $event) || (ctx.preferences.budget = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " Ti\u1EBFt ki\u1EC7m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "label", 12)(53, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_53_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.budget, $event) || (ctx.preferences.budget = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Trung b\xECnh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "label", 12)(56, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function RecommendationComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.preferences.budget, $event) || (ctx.preferences.budget = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Cao c\u1EA5p");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "button", 16);
      \u0275\u0275listener("click", function RecommendationComponent_Template_button_click_58_listener() {
        return ctx.getRecommendations();
      });
      \u0275\u0275elementStart(59, "span", 6);
      \u0275\u0275text(60, "auto_awesome");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 17);
      \u0275\u0275template(63, RecommendationComponent_div_63_Template, 7, 0, "div", 18)(64, RecommendationComponent_div_64_Template, 2, 0, "div", 19)(65, RecommendationComponent_div_65_Template, 6, 3, "div", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.north);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.central);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.south);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.beach);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.mountain);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.historic);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.nature);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.budget);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.budget);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.preferences.budget);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "\u0110ang g\u1EE3i \xFD..." : "G\u1EE3i \xFD cho t\xF4i", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.results && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.results == null ? null : ctx.results.recommendations == null ? null : ctx.results.recommendations.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.rec-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .rec-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rec-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--border-radius);\n  padding: 2rem;\n  box-shadow: var(--shadow);\n  position: sticky;\n  top: 90px;\n}\n.rec-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.rec-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.checkbox-item[_ngcontent-%COMP%], .radio-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.checkbox-item[_ngcontent-%COMP%]:hover, .radio-item[_ngcontent-%COMP%]:hover {\n  background: var(--light);\n}\n.checkbox-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .radio-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.results-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.algo-note[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n}\n.result-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n.result-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.result-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.result-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-size: 1rem;\n}\n.location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.score-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  margin-bottom: 0.25rem;\n}\n.score-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      #667eea);\n  border-radius: 3px;\n}\n.score-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--primary);\n  margin-bottom: 0.25rem;\n}\n.reasons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=recommendation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommendationComponent, { className: "RecommendationComponent", filePath: "src\\app\\pages\\recommendation\\recommendation.component.ts", lineNumber: 111 });
})();
export {
  RecommendationComponent
};
//# sourceMappingURL=chunk-2ZFIL55O.js.map
