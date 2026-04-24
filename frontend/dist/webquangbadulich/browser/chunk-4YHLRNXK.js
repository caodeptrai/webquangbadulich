import {
  AuthService
} from "./chunk-PLBN7SNA.js";
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
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-JTKX4NR3.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UYQXAGEB.js";

// src/app/pages/destination/destination-detail/destination-detail.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/destinations", a0];
function DestinationDetailComponent_div_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "N\u1ED5i b\u1EADt");
    \u0275\u0275elementEnd();
  }
}
function DestinationDetailComponent_div_0_div_37_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    \u0275\u0275property("src", img_r2.url, \u0275\u0275sanitizeUrl)("alt", img_r2.caption);
  }
}
function DestinationDetailComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275template(2, DestinationDetailComponent_div_0_div_37_img_2_Template, 1, 2, "img", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.destination.images.slice(0, 4));
  }
}
function DestinationDetailComponent_div_0_div_64_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", h_r4, " ");
  }
}
function DestinationDetailComponent_div_0_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h2");
    \u0275\u0275text(2, "\u0110i\u1EC3m n\u1ED5i b\u1EADt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275template(4, DestinationDetailComponent_div_0_div_64_div_4_Template, 4, 1, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.getHighlights());
  }
}
function DestinationDetailComponent_div_0_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h2");
    \u0275\u0275text(2, "M\u1EB9o du l\u1ECBch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.destination.tips);
  }
}
function DestinationDetailComponent_div_0_div_69_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275listener("click", function DestinationDetailComponent_div_0_div_69_span_4_Template_span_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.newReview.rating = s_r7);
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("filled", s_r7 <= ctx_r2.newReview.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7 <= ctx_r2.newReview.rating ? "star" : "star_border");
  }
}
function DestinationDetailComponent_div_0_div_69_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "\u0110\xE1nh gi\xE1 \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi!");
    \u0275\u0275elementEnd();
  }
}
function DestinationDetailComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "h4");
    \u0275\u0275text(2, "Vi\u1EBFt \u0111\xE1nh gi\xE1 c\u1EE7a b\u1EA1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, DestinationDetailComponent_div_0_div_69_span_4_Template, 3, 3, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 47);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationDetailComponent_div_0_div_69_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newReview.comment, $event) || (ctx_r2.newReview.comment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 48);
    \u0275\u0275listener("click", function DestinationDetailComponent_div_0_div_69_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitReview());
    });
    \u0275\u0275text(7, " G\u1EEDi \u0111\xE1nh gi\xE1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DestinationDetailComponent_div_0_div_69_p_8_Template, 2, 0, "p", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newReview.comment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newReview.rating || !ctx_r2.newReview.comment.trim());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.reviewSuccess);
  }
}
function DestinationDetailComponent_div_0_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p");
    \u0275\u0275text(2, "H\xE3y ");
    \u0275\u0275elementStart(3, "a", 53);
    \u0275\u0275text(4, "\u0111\u0103ng nh\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0111\u1EC3 vi\u1EBFt \u0111\xE1nh gi\xE1.");
    \u0275\u0275elementEnd()();
  }
}
function DestinationDetailComponent_div_0_div_72_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", s_r8 <= r_r9.rating);
  }
}
function DestinationDetailComponent_div_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 10);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 56)(5, "div", 57)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275template(9, DestinationDetailComponent_div_0_div_72_span_9_Template, 2, 2, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(r_r9.user == null ? null : r_r9.user.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.comment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 4, r_r9.createdAt, "dd/MM/yyyy"));
  }
}
function DestinationDetailComponent_div_0_div_84_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementStart(2, "div")(3, "a", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (r_r10.images[0] == null ? null : r_r10.images[0].url) || "https://picsum.photos/seed/" + r_r10.slug + "/100/100", \u0275\u0275sanitizeUrl)("alt", r_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, r_r10.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.province == null ? null : r_r10.province.name);
  }
}
function DestinationDetailComponent_div_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "h3");
    \u0275\u0275text(2, "\u0110\u1ECBa \u0111i\u1EC3m li\xEAn quan");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DestinationDetailComponent_div_0_div_84_div_3_Template, 7, 7, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.relatedDestinations);
  }
}
function DestinationDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "a", 9);
    \u0275\u0275text(7, "Trang ch\u1EE7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 11);
    \u0275\u0275text(11, "\u0110i\u1EC3m \u0111\u1EBFn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h1");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "span", 10);
    \u0275\u0275text(20, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275template(23, DestinationDetailComponent_div_0_span_23_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(24, "span", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 15)(27, "span", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 17);
    \u0275\u0275text(30, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(33, "section", 18)(34, "div", 7)(35, "div", 19)(36, "div", 20);
    \u0275\u0275template(37, DestinationDetailComponent_div_0_div_37_Template, 3, 1, "div", 21);
    \u0275\u0275elementStart(38, "div", 22)(39, "h2");
    \u0275\u0275text(40, "Gi\u1EDBi thi\u1EC7u");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24)(43, "div", 25)(44, "span", 10);
    \u0275\u0275text(45, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h4");
    \u0275\u0275text(47, "Th\u1EDDi gian \u0111\u1EB9p nh\u1EA5t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 25)(51, "span", 10);
    \u0275\u0275text(52, "attach_money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h4");
    \u0275\u0275text(54, "Chi ph\xED \u01B0\u1EDBc t\xEDnh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 25)(58, "span", 10);
    \u0275\u0275text(59, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h4");
    \u0275\u0275text(61, "L\u01B0\u1EE3t xem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, DestinationDetailComponent_div_0_div_64_Template, 5, 1, "div", 26)(65, DestinationDetailComponent_div_0_div_65_Template, 5, 1, "div", 26);
    \u0275\u0275elementStart(66, "div", 22)(67, "h2");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, DestinationDetailComponent_div_0_div_69_Template, 9, 5, "div", 27)(70, DestinationDetailComponent_div_0_div_70_Template, 6, 0, "div", 28);
    \u0275\u0275elementStart(71, "div", 29);
    \u0275\u0275template(72, DestinationDetailComponent_div_0_div_72_Template, 15, 8, "div", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 31)(74, "div", 32)(75, "div", 33)(76, "button", 34);
    \u0275\u0275listener("click", function DestinationDetailComponent_div_0_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite());
    });
    \u0275\u0275elementStart(77, "span", 10);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 35)(81, "span", 10);
    \u0275\u0275text(82, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " Y\xEAu c\u1EA7u t\u01B0 v\u1EA5n ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(84, DestinationDetailComponent_div_0_div_84_Template, 4, 1, "div", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (ctx_r2.destination.images[0] == null ? null : ctx_r2.destination.images[0].url) || "https://picsum.photos/seed/" + ctx_r2.destination.slug + "/1200/600", \u0275\u0275sanitizeUrl)("alt", ctx_r2.destination.name);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.destination.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.destination.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.destination.address, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.destination.isFeatured);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.destination.category == null ? null : ctx_r2.destination.category.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.destination.rating);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r2.destination.reviewCount, " \u0111\xE1nh gi\xE1)");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.destination.images == null ? null : ctx_r2.destination.images.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r2.destination.description, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.destination.bestTime);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.destination.estimatedCost);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.destination.viewCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.destination.highlights);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.destination.tips);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0110\xE1nh gi\xE1 (", ctx_r2.destination.reviewCount, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.auth.isLoggedIn());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.auth.isLoggedIn());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.reviews);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.isFavorite ? "favorite" : "favorite_border");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isFavorite ? "\u0110\xE3 y\xEAu th\xEDch" : "Th\xEAm v\xE0o y\xEAu th\xEDch", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.relatedDestinations.length);
  }
}
function DestinationDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 66);
    \u0275\u0275elementEnd();
  }
}
function DestinationDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Kh\xF4ng t\xECm th\u1EA5y \u0111\u1ECBa \u0111i\u1EC3m");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 68);
    \u0275\u0275text(6, "Quay l\u1EA1i danh s\xE1ch");
    \u0275\u0275elementEnd()();
  }
}
var DestinationDetailComponent = class _DestinationDetailComponent {
  api;
  auth;
  route;
  destination = null;
  relatedDestinations = [];
  reviews = [];
  isFavorite = false;
  loadingError = false;
  newReview = { rating: 0, comment: "" };
  reviewSuccess = false;
  constructor(api, auth, route) {
    this.api = api;
    this.auth = auth;
    this.route = route;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug") || this.route.snapshot.paramMap.get("id");
    this.loadDestination(slug);
  }
  loadDestination(slug) {
    this.api.getDestination(slug).subscribe({
      next: (data) => {
        this.destination = data;
        this.relatedDestinations = data.relatedTo?.map((r) => r.from).filter(Boolean) || [];
        this.reviews = data.reviews || [];
        if (this.auth.isLoggedIn())
          this.checkFavorite();
      },
      error: () => {
        this.loadingError = true;
      }
    });
  }
  getHighlights() {
    if (!this.destination?.highlights)
      return [];
    try {
      return JSON.parse(this.destination.highlights);
    } catch {
      return [];
    }
  }
  toggleFavorite() {
    if (!this.auth.isLoggedIn())
      return;
    if (this.isFavorite) {
      this.api.removeFavorite(this.destination.id).subscribe(() => {
        this.isFavorite = false;
      });
    } else {
      this.api.addFavorite(this.destination.id).subscribe(() => {
        this.isFavorite = true;
      });
    }
  }
  checkFavorite() {
    this.api.checkFavorite(this.destination.id).subscribe((res) => {
      this.isFavorite = res.isFavorite;
    });
  }
  submitReview() {
    if (!this.newReview.rating || !this.newReview.comment.trim())
      return;
    this.api.createReview({
      destinationId: this.destination.id,
      rating: this.newReview.rating,
      comment: this.newReview.comment
    }).subscribe({
      next: (res) => {
        this.reviews.unshift(res);
        this.newReview = { rating: 0, comment: "" };
        this.reviewSuccess = true;
        setTimeout(() => this.reviewSuccess = false, 3e3);
      }
    });
  }
  static \u0275fac = function DestinationDetailComponent_Factory(t) {
    return new (t || _DestinationDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationDetailComponent, selectors: [["app-destination-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["class", "fade-in", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "fade-in"], [1, "detail-hero"], [3, "src", "alt"], [1, "detail-hero-overlay"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], [1, "material-icons"], ["routerLink", "/destinations"], [1, "detail-meta"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-primary"], [1, "rating"], [1, "score"], [1, "stars"], [1, "section"], [1, "detail-layout"], [1, "detail-main"], ["class", "gallery", 4, "ngIf"], [1, "content-section"], [1, "content", 3, "innerHTML"], [1, "info-cards", "grid", "grid-3"], [1, "info-card"], ["class", "content-section", 4, "ngIf"], ["class", "write-review", 4, "ngIf"], ["class", "login-prompt", 4, "ngIf"], [1, "reviews-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "detail-sidebar"], [1, "action-card", "card"], [1, "card-body"], [1, "btn", "btn-primary", "btn-lg", 2, "width", "100%", 3, "click"], ["routerLink", "/contact", 1, "btn", "btn-accent", "btn-lg", 2, "width", "100%", "margin-top", "0.75rem"], ["class", "related-section", 4, "ngIf"], [1, "badge", "badge-warning"], [1, "gallery"], [1, "gallery-grid"], [3, "src", "alt", 4, "ngFor", "ngForOf"], [1, "highlights-list"], ["class", "highlight-item", 4, "ngFor", "ngForOf"], [1, "highlight-item"], [1, "write-review"], [1, "rating-input"], ["class", "star", 3, "filled", "click", 4, "ngFor", "ngForOf"], ["placeholder", "Chia s\u1EBB tr\u1EA3i nghi\u1EC7m c\u1EE7a b\u1EA1n...", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "success-msg", 4, "ngIf"], [1, "star", 3, "click"], [1, "success-msg"], [1, "login-prompt"], ["routerLink", "/auth/login"], [1, "review-item"], [1, "review-avatar"], [1, "review-content"], [1, "review-header"], [1, "review-rating"], ["class", "material-icons", 3, "filled", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "related-section"], ["class", "related-item", 4, "ngFor", "ngForOf"], [1, "related-item"], [3, "routerLink"], [1, "loading-spinner"], [1, "spinner"], [1, "empty-state"], ["routerLink", "/destinations", 1, "btn", "btn-primary"]], template: function DestinationDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DestinationDetailComponent_div_0_Template, 85, 23, "div", 0)(1, DestinationDetailComponent_div_1_Template, 2, 0, "div", 1)(2, DestinationDetailComponent_div_2_Template, 7, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.destination);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.destination && !ctx.loadingError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingError);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.breadcrumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.gallery-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.content-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.content-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.content[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: var(--gray-dark);\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.info-cards[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: var(--light);\n  border-radius: var(--border-radius-sm);\n  padding: 1.25rem;\n  text-align: center;\n}\n.info-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary);\n  margin-bottom: 0.5rem;\n}\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray);\n  margin-bottom: 0.25rem;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0;\n}\n.highlights-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.highlight-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.highlight-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-size: 1.125rem;\n}\n.write-review[_ngcontent-%COMP%] {\n  background: var(--light);\n  border-radius: var(--border-radius);\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.rating-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  margin: 0.75rem 0;\n  cursor: pointer;\n}\n.star[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #ddd;\n  transition: color 0.2s;\n}\n.star.filled[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .star[_ngcontent-%COMP%]   .material-icons.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.rating-input[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #ddd;\n}\n.rating-input[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%] {\n  color: #f59e0b !important;\n}\n.success-msg[_ngcontent-%COMP%] {\n  color: var(--secondary);\n  font-weight: 600;\n  margin: 0.5rem 0 0;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  background: var(--light);\n  border-radius: var(--border-radius);\n  padding: 1.5rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.reviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.review-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--light);\n  border-radius: var(--border-radius-sm);\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.review-rating[_ngcontent-%COMP%] {\n  display: flex;\n}\n.review-rating[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f59e0b;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--gray);\n}\n.action-card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.related-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n}\n.related-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  align-items: center;\n}\n.related-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.related-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--dark);\n  display: block;\n}\n.related-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.related-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--gray);\n}\n/*# sourceMappingURL=destination-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationDetailComponent, { className: "DestinationDetailComponent", filePath: "src\\app\\pages\\destination\\destination-detail\\destination-detail.component.ts", lineNumber: 239 });
})();
export {
  DestinationDetailComponent
};
//# sourceMappingURL=chunk-4YHLRNXK.js.map
