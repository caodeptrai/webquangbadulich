import{a as j}from"./chunk-IYZO4SXW.js";import{d as F,j as V}from"./chunk-UGM6DPWQ.js";import{$ as M,$a as u,Ba as a,Ca as C,Ra as m,Rb as z,Sb as A,Ta as o,Ua as P,Ub as D,Va as b,Wa as i,Wb as T,Xa as r,Ya as _,Za as y,_a as I,ab as f,bb as s,ha as g,hb as d,ia as p,ib as O,jb as h,pb as k,sb as E,ub as S,wa as w,xa as x}from"./chunk-ASC2LN3O.js";function H(t,l){if(t&1&&_(0,"img",23),t&2){let e=l.$implicit,n=s(3);o("src",e.url,x)("alt",n.article.title)}}function N(t,l){if(t&1){let e=u();i(0,"span",24),f("click",function(){let c=g(e).index,v=s(3);return p(v.setImageIndex(c))}),r()}if(t&2){let e=l.index,n=s(3);b("active",e===n.currentImageIndex)}}function U(t,l){if(t&1){let e=u();y(0),i(1,"div",16)(2,"div",17),m(3,H,1,2,"img",18),r(),i(4,"div",19),m(5,N,1,2,"span",20),r(),i(6,"button",21),f("click",function(){g(e);let c=s(2);return p(c.prevImage())}),i(7,"span",9),d(8,"chevron_left"),r()(),i(9,"button",22),f("click",function(){g(e);let c=s(2);return p(c.nextImage())}),i(10,"span",9),d(11,"chevron_right"),r()()(),I()}if(t&2){let e=s(2);a(2),P("transform","translateX(-"+e.currentImageIndex*100+"%)"),a(),o("ngForOf",e.article.images),a(2),o("ngForOf",e.article.images)}}function $(t,l){if(t&1&&(y(0),_(1,"img",23),I()),t&2){let e=s(2);a(),o("src",e.getHeroImage(),x)("alt",e.article.title)}}function B(t,l){if(t&1){let e=u();i(0,"img",28),f("click",function(){let c=g(e).index,v=s(3);return p(v.setImageIndex(c))}),r()}if(t&2){let e=l.$implicit,n=l.index,c=s(3);b("active",n===c.currentImageIndex),o("src",e.url,x)("alt",e.caption||c.article.title)}}function L(t,l){if(t&1&&(i(0,"div",25)(1,"div",6)(2,"div",26),m(3,B,1,4,"img",27),r()()()),t&2){let e=s(2);a(3),o("ngForOf",e.article.images)}}function R(t,l){if(t&1&&(i(0,"span",31),d(1),r()),t&2){let e=l.$implicit;a(),h("#",e,"")}}function X(t,l){if(t&1&&(i(0,"div",29),m(1,R,2,1,"span",30),r()),t&2){let e=s(2);a(),o("ngForOf",e.getTags())}}function q(t,l){if(t&1&&(i(0,"div",2)(1,"div",3),m(2,U,12,4,"ng-container",4)(3,$,2,2,"ng-container",4),i(4,"div",5)(5,"div",6)(6,"span",7),d(7),r(),i(8,"h1"),d(9),r(),i(10,"div",8)(11,"span")(12,"span",9),d(13,"person"),r(),d(14),r(),i(15,"span")(16,"span",9),d(17,"calendar_today"),r(),d(18),E(19,"date"),r(),i(20,"span")(21,"span",9),d(22,"visibility"),r(),d(23),r()()()()(),m(24,L,4,1,"div",10),i(25,"section",11)(26,"div",6)(27,"div",12)(28,"article",13),_(29,"div",14),m(30,X,2,1,"div",15),r()()()()()),t&2){let e=s();a(2),o("ngIf",e.article.images&&e.article.images.length>1),a(),o("ngIf",!e.article.images||e.article.images.length<=1),a(4),O(e.article.category==null?null:e.article.category.name),a(2),O(e.article.title),a(5),h(" ",e.article.author==null?null:e.article.author.fullName,""),a(4),h(" ",S(19,10,e.article.publishedAt,"dd/MM/yyyy"),""),a(5),h(" ",e.article.viewCount," l\u01B0\u1EE3t xem"),a(),o("ngIf",e.article.images&&e.article.images.length>1),a(5),o("innerHTML",e.article.content,w),a(),o("ngIf",e.article.tags)}}function Y(t,l){t&1&&(i(0,"div",32),_(1,"div",33),r())}var ee=(()=>{class t{api;route;article=null;currentImageIndex=0;constructor(e,n){this.api=e,this.route=n}ngOnInit(){let e=this.route.snapshot.paramMap.get("slug")||"";this.api.getArticle(e).subscribe(n=>{this.article=n,this.currentImageIndex=0})}getTags(){return this.article?.tags?.split(",").map(e=>e.trim())||[]}getHeroImage(){return this.article?.images&&this.article.images.length>0?this.article.images.find(n=>n.isPrimary)?.url||this.article.images[0]?.url:this.article?.imageUrl||`https://picsum.photos/seed/${this.article?.slug||"article"}/1200/500`}setImageIndex(e){this.currentImageIndex=e}prevImage(){this.article?.images&&(this.currentImageIndex=(this.currentImageIndex-1+this.article.images.length)%this.article.images.length)}nextImage(){this.article?.images&&(this.currentImageIndex=(this.currentImageIndex+1)%this.article.images.length)}static \u0275fac=function(n){return new(n||t)(C(j),C(F))};static \u0275cmp=M({type:t,selectors:[["app-article-detail"]],standalone:!0,features:[k],decls:2,vars:2,consts:[["class","fade-in",4,"ngIf"],["class","loading-spinner",4,"ngIf"],[1,"fade-in"],[1,"article-hero"],[4,"ngIf"],[1,"hero-overlay"],[1,"container"],[1,"badge","badge-primary"],[1,"article-meta"],[1,"material-icons"],["class","image-gallery",4,"ngIf"],[1,"section"],[1,"article-layout"],[1,"article-content"],[1,"content",3,"innerHTML"],["class","article-tags",4,"ngIf"],[1,"hero-slider"],[1,"slider-container"],[3,"src","alt",4,"ngFor","ngForOf"],[1,"slider-dots"],[3,"active","click",4,"ngFor","ngForOf"],[1,"slider-arrow","prev",3,"click"],[1,"slider-arrow","next",3,"click"],[3,"src","alt"],[3,"click"],[1,"image-gallery"],[1,"gallery-grid"],[3,"src","alt","active","click",4,"ngFor","ngForOf"],[3,"click","src","alt"],[1,"article-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"],[1,"loading-spinner"],[1,"spinner"]],template:function(n,c){n&1&&m(0,q,31,13,"div",0)(1,Y,2,0,"div",1),n&2&&(o("ngIf",c.article),a(),o("ngIf",!c.article))},dependencies:[T,z,A,D,V],styles:[".article-hero[_ngcontent-%COMP%]{position:relative;height:400px;overflow:hidden;img{width:100%;height:100%;object-fit:cover}}.hero-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:2rem;background:linear-gradient(transparent,#000000b3);color:#fff;h1{color:#fff;margin:.5rem 0}}.article-meta[_ngcontent-%COMP%]{display:flex;gap:1.5rem;font-size:.875rem;opacity:.9;span{display:flex;align-items:center;gap:.25rem;.material-icons{font-size:1rem}}}.article-layout[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.article-content[_ngcontent-%COMP%]{font-size:1.0625rem;line-height:1.8}.article-content[_ngcontent-%COMP%]{h1,h2,h3,h4,h5,h6{font-weight:700;color:var(--dark);margin:1.75rem 0 .875rem;line-height:1.3}h1{font-size:1.75rem}h2{font-size:1.5rem}h3{font-size:1.25rem}h4{font-size:1.125rem}h5{font-size:1rem}h6{font-size:.9375rem}p{margin:0 0 1.25rem;color:#374151;line-height:1.8}strong,b{font-weight:700;color:var(--dark)}em,i{font-style:italic}u{text-decoration:underline}s,strike{text-decoration:line-through}mark{background:#fef08a;padding:.125rem .25rem;border-radius:3px}code{background:#f1f5f9;color:#be123c;padding:.125rem .375rem;border-radius:4px;font-family:Courier New,Courier,monospace;font-size:.875em}pre{background:#1e293b;color:#e2e8f0;padding:1.25rem;border-radius:8px;overflow-x:auto;margin:1.25rem 0;font-family:Courier New,Courier,monospace;font-size:.875rem;line-height:1.6;code{background:none;color:inherit;padding:0;font-size:inherit}}ul,ol{margin:0 0 1.25rem 1.5rem;padding:0;color:#374151;li{margin-bottom:.5rem;line-height:1.7;padding-left:.25rem}}ul li{list-style-type:disc}ol li{list-style-type:decimal}ul ul,ol ol,ul ol,ol ul{margin-top:.5rem;margin-bottom:.5rem}blockquote{border-left:4px solid var(--primary);background:#f0f7ff;margin:1.5rem 0;padding:1rem 1.25rem;border-radius:0 8px 8px 0;color:#475569;font-style:italic;p:last-child{margin-bottom:0}strong,b{color:var(--primary)}}a{color:var(--primary);text-decoration:underline;text-underline-offset:2px;transition:color .2s;&:hover{color:var(--primary-dark)}}table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9375rem;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px #0000001a;th,td{padding:.75rem 1rem;text-align:left;border:1px solid #e2e8f0}th{background:var(--primary);color:#fff;font-weight:600}tr:nth-child(2n){background:#f8fafc}tr:hover{background:#f0f7ff}}img{max-width:100%;height:auto;border-radius:8px;margin:1rem 0;box-shadow:0 2px 8px #0000001a}hr{border:none;border-top:2px solid #e2e8f0;margin:2rem 0}>*:first-child{margin-top:0}>*:last-child{margin-bottom:0}}.article-tags[_ngcontent-%COMP%]{margin-top:2rem;padding-top:1.5rem;border-top:1px solid #e2e8f0;display:flex;flex-wrap:wrap;gap:.5rem}.tag[_ngcontent-%COMP%]{background:var(--light);color:var(--primary);padding:.25rem .75rem;border-radius:50px;font-size:.875rem;font-weight:500}",`

.hero-slider[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.hero-slider[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%] {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}
.hero-slider[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}
.hero-slider[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}
.hero-slider[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: all 0.2s;
}
.hero-slider[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {
  background: white;
  transform: scale(1.3);
}
.hero-slider[_ngcontent-%COMP%]   .slider-arrow[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  background: rgba(0,0,0,0.5);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.hero-slider[_ngcontent-%COMP%]   .slider-arrow[_ngcontent-%COMP%]:hover {
  opacity: 1;
  background: rgba(0,0,0,0.7);
}
.hero-slider[_ngcontent-%COMP%]   .slider-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 28px;
}
.hero-slider[_ngcontent-%COMP%]   .slider-arrow.prev[_ngcontent-%COMP%] {
  left: 20px;
}
.hero-slider[_ngcontent-%COMP%]   .slider-arrow.next[_ngcontent-%COMP%] {
  right: 20px;
}



.image-gallery[_ngcontent-%COMP%] {
  background: #f8f9fa;
  padding: 1rem 0;
}
.gallery-grid[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
}
.gallery-grid[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 6px;
}
.gallery-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
.gallery-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;
  border: 2px solid transparent;
  flex-shrink: 0;
}
.gallery-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
.gallery-grid[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {
  opacity: 1;
  border-color: var(--primary);
}`]})}return t})();export{ee as ArticleDetailComponent};
