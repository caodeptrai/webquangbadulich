import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  ActivatedRoute,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UYQXAGEB.js";

// src/app/pages/tour/tour-detail/tour-detail.component.ts
function TourDetailComponent_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ctx_r0.tour.price, "1.0-0"), "\u0111");
  }
}
function TourDetailComponent_div_0_div_27_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 7);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2, "");
  }
}
function TourDetailComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2");
    \u0275\u0275text(2, "Bao g\u1ED3m");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 25);
    \u0275\u0275template(4, TourDetailComponent_div_0_div_27_li_4_Template, 4, 1, "li", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.getIncludes());
  }
}
function TourDetailComponent_div_0_div_28_div_4_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34)(1, "span", 7);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r3.location, "");
  }
}
function TourDetailComponent_div_0_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TourDetailComponent_div_0_div_28_div_4_p_10_Template, 4, 1, "p", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ng\xE0y ", s_r3.day, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r3.location);
  }
}
function TourDetailComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h2");
    \u0275\u0275text(2, "L\u1ECBch tr\xECnh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275template(4, TourDetailComponent_div_0_div_28_div_4_Template, 11, 5, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.tour.schedules);
  }
}
function TourDetailComponent_div_0_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ctx_r0.tour.price, "1.0-0"), "\u0111");
  }
}
function TourDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "span", 7);
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275template(12, TourDetailComponent_div_0_span_12_Template, 3, 4, "span", 9);
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "/ng\u01B0\u1EDDi");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "section", 12)(19, "div", 6)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "h2");
    \u0275\u0275text(24, "M\xF4 t\u1EA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, TourDetailComponent_div_0_div_27_Template, 5, 1, "div", 16)(28, TourDetailComponent_div_0_div_28_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20);
    \u0275\u0275template(33, TourDetailComponent_div_0_span_33_Template, 3, 4, "span", 9);
    \u0275\u0275elementStart(34, "span", 10);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 11);
    \u0275\u0275text(38, "/ng\u01B0\u1EDDi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 21)(40, "span", 7);
    \u0275\u0275text(41, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21)(44, "span", 7);
    \u0275\u0275text(45, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 22)(48, "span", 7);
    \u0275\u0275text(49, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Y\xEAu c\u1EA7u \u0111\u1EB7t tour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 23)(52, "span", 7);
    \u0275\u0275text(53, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " T\u01B0 v\u1EA5n th\xEAm ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (ctx_r0.tour.images == null ? null : ctx_r0.tour.images[0] == null ? null : ctx_r0.tour.images[0].url) || ctx_r0.tour.imageUrl || "https://picsum.photos/seed/" + ctx_r0.tour.slug + "/1200/600", \u0275\u0275sanitizeUrl)("alt", ctx_r0.tour.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.tour.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.tour.duration, " | ", ctx_r0.tour.maxPeople, " ng\u01B0\u1EDDi");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.tour.discountPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 14, ctx_r0.tour.discountPrice || ctx_r0.tour.price, "1.0-0"), "\u0111");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.tour.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tour.includes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tour.schedules == null ? null : ctx_r0.tour.schedules.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.tour.discountPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(36, 17, ctx_r0.tour.discountPrice || ctx_r0.tour.price, "1.0-0"), "\u0111");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tour.duration, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" T\u1ED1i \u0111a ", ctx_r0.tour.maxPeople, " ng\u01B0\u1EDDi");
  }
}
function TourDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementEnd();
  }
}
var TourDetailComponent = class _TourDetailComponent {
  api;
  route;
  tour = null;
  constructor(api, route) {
    this.api = api;
    this.route = route;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug") || this.route.snapshot.paramMap.get("id") || "";
    this.api.getTour(slug).subscribe((data) => {
      this.tour = data;
    });
  }
  getIncludes() {
    try {
      return JSON.parse(this.tour?.includes || "[]");
    } catch {
      return [];
    }
  }
  static \u0275fac = function TourDetailComponent_Factory(t) {
    return new (t || _TourDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourDetailComponent, selectors: [["app-tour-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "fade-in", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "fade-in"], [1, "detail-hero"], [3, "src", "alt"], [1, "detail-hero-overlay"], [1, "container"], [1, "material-icons"], [1, "pricing-hero"], ["class", "old", 4, "ngIf"], [1, "current"], [1, "per"], [1, "section"], [1, "detail-layout"], [1, "detail-main"], [1, "content-section"], ["class", "content-section", 4, "ngIf"], [1, "detail-sidebar"], [1, "booking-card", "card"], [1, "card-body"], [1, "price-display"], [1, "info-row"], ["routerLink", "/contact", 1, "btn", "btn-accent", "btn-lg", 2, "width", "100%"], ["routerLink", "/contact", 1, "btn", "btn-outline", 2, "width", "100%", "margin-top", "0.5rem"], [1, "old"], [1, "includes-list"], [4, "ngFor", "ngForOf"], [1, "schedule"], ["class", "schedule-item", 4, "ngFor", "ngForOf"], [1, "schedule-item"], [1, "schedule-header"], [1, "day"], [1, "time"], ["class", "location", 4, "ngIf"], [1, "location"], [1, "loading-spinner"], [1, "spinner"]], template: function TourDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TourDetailComponent_div_0_Template, 55, 20, "div", 0)(1, TourDetailComponent_div_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.tour);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.tour);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink], styles: ["\n\n.pricing-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.pricing-hero[_ngcontent-%COMP%]   .old[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 1.125rem;\n  opacity: 0.7;\n}\n.pricing-hero[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #f59e0b;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.content-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.content-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.includes-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-size: 1.125rem;\n}\n.schedule[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.schedule-item[_ngcontent-%COMP%] {\n  background: var(--light);\n  border-radius: var(--border-radius-sm);\n  padding: 1.25rem;\n}\n.schedule-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.schedule-header[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary);\n}\n.schedule-header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 0.875rem;\n}\n.schedule-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.schedule-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: var(--gray);\n  font-size: 0.875rem;\n}\n.schedule-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.booking-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 90px;\n}\n.price-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.price-display[_ngcontent-%COMP%]   .old[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--gray-light);\n}\n.price-display[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--danger);\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.info-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--gray);\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=tour-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourDetailComponent, { className: "TourDetailComponent", filePath: "src\\app\\pages\\tour\\tour-detail\\tour-detail.component.ts", lineNumber: 98 });
})();
export {
  TourDetailComponent
};
//# sourceMappingURL=chunk-IYHVYYYY.js.map
