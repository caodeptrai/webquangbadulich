import {
  ApiService
} from "./chunk-WUISNAW5.js";
import {
  ActivatedRoute,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UYQXAGEB.js";

// src/app/pages/article/article-detail/article-detail.component.ts
function ArticleDetailComponent_div_0_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", t_r1, "");
  }
}
function ArticleDetailComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, ArticleDetailComponent_div_0_div_28_span_1_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getTags());
  }
}
function ArticleDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "span")(11, "span", 9);
    \u0275\u0275text(12, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "span", 9);
    \u0275\u0275text(16, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span")(20, "span", 9);
    \u0275\u0275text(21, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "section", 10)(24, "div", 6)(25, "div", 11)(26, "article", 12);
    \u0275\u0275element(27, "div", 13);
    \u0275\u0275template(28, ArticleDetailComponent_div_0_div_28_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.article.imageUrl || "https://picsum.photos/seed/" + ctx_r1.article.slug + "/1200/500", \u0275\u0275sanitizeUrl)("alt", ctx_r1.article.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.article.category == null ? null : ctx_r1.article.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.article.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.article.author == null ? null : ctx_r1.article.author.fullName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 9, ctx_r1.article.publishedAt, "dd/MM/yyyy"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.article.viewCount, " l\u01B0\u1EE3t xem");
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", ctx_r1.article.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.article.tags);
  }
}
function ArticleDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
var ArticleDetailComponent = class _ArticleDetailComponent {
  api;
  route;
  article = null;
  constructor(api, route) {
    this.api = api;
    this.route = route;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug") || "";
    this.api.getArticle(slug).subscribe((data) => {
      this.article = data;
    });
  }
  getTags() {
    return this.article?.tags?.split(",").map((t) => t.trim()) || [];
  }
  static \u0275fac = function ArticleDetailComponent_Factory(t) {
    return new (t || _ArticleDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleDetailComponent, selectors: [["app-article-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "fade-in", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "fade-in"], [1, "article-hero"], [3, "src", "alt"], [1, "hero-overlay"], [1, "container"], [1, "badge", "badge-primary"], [1, "article-meta"], [1, "material-icons"], [1, "section"], [1, "article-layout"], [1, "article-content"], [1, "content", 3, "innerHTML"], ["class", "article-tags", 4, "ngIf"], [1, "article-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "loading-spinner"], [1, "spinner"]], template: function ArticleDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ArticleDetailComponent_div_0_Template, 29, 12, "div", 0)(1, ArticleDetailComponent_div_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.article);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.article);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule], styles: ["\n\n.article-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  overflow: hidden;\n}\n.article-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2rem;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));\n  color: white;\n}\n.hero-overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0.5rem 0;\n}\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.article-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.article-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.article-layout[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.article-content[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  line-height: 1.8;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.article-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--dark);\n}\n.article-tags[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag[_ngcontent-%COMP%] {\n  background: var(--light);\n  color: var(--primary);\n  padding: 0.25rem 0.75rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=article-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleDetailComponent, { className: "ArticleDetailComponent", filePath: "src\\app\\pages\\article\\article-detail\\article-detail.component.ts", lineNumber: 53 });
})();
export {
  ArticleDetailComponent
};
//# sourceMappingURL=chunk-IKD5DL6F.js.map
