import{b as W,c as j,f as U,j as R,k as X,l as Y,p as K}from"./chunk-QRSC5ICP.js";import{a as q}from"./chunk-IYZO4SXW.js";import{g as $,j as D}from"./chunk-UGM6DPWQ.js";import{$ as O,$a as C,Ba as a,Ca as A,Ra as d,Rb as V,Sb as z,Ta as s,Ua as S,Ub as B,Va as y,Wa as r,Wb as N,Xa as o,Ya as h,Za as b,_a as I,ab as _,bb as l,ha as f,hb as c,ia as x,ib as u,jb as M,lb as w,mb as E,nb as P,pb as k,rb as L,sb as T,ub as F,xa as v}from"./chunk-ASC2LN3O.js";var H=t=>["/articles",t];function J(t,g){if(t&1&&(r(0,"option",13),c(1),o()),t&2){let e=g.$implicit;s("value",e.slug),a(),u(e.name)}}function Q(t,g){t&1&&(r(0,"div",14),h(1,"div",15),o())}function Z(t,g){if(t&1&&h(0,"img",33),t&2){let e=g.$implicit,i=l(2).$implicit;s("src",e.url,v)("alt",i.title)}}function ee(t,g){if(t&1){let e=C();r(0,"span",34),_("click",function(n){let p=f(e).index,m=l(2).$implicit,G=l(2);return x(G.setArticleImageIndex(m,p,n))}),o()}if(t&2){let e=g.index,i=l(2).$implicit;y("active",e===(i.currentImageIndex||0))}}function te(t,g){if(t&1){let e=C();b(0),r(1,"div",26)(2,"div",27),d(3,Z,1,2,"img",28),o(),r(4,"div",29),d(5,ee,1,2,"span",30),o(),r(6,"button",31),_("click",function(n){f(e);let p=l().$implicit,m=l(2);return x(m.prevImage(p,n))}),r(7,"span",5),c(8,"chevron_left"),o()(),r(9,"button",32),_("click",function(n){f(e);let p=l().$implicit,m=l(2);return x(m.nextImage(p,n))}),r(10,"span",5),c(11,"chevron_right"),o()()(),I()}if(t&2){let e=l().$implicit;a(2),S("transform","translateX(-"+(e.currentImageIndex||0)*100+"%)"),a(),s("ngForOf",e.images),a(2),s("ngForOf",e.images)}}function ne(t,g){if(t&1&&(b(0),h(1,"img",33),I()),t&2){let e=l().$implicit,i=l(2);a(),s("src",i.getArticleImage(e),v)("alt",e.title)}}function ie(t,g){if(t&1&&(r(0,"a",18)(1,"div",19),d(2,te,12,4,"ng-container",20)(3,ne,2,2,"ng-container",21),r(4,"span",22),c(5),o()(),r(6,"div",23)(7,"h3"),c(8),o(),r(9,"p",24),c(10),o(),r(11,"div",25)(12,"span")(13,"span",5),c(14,"visibility"),o(),c(15),o(),r(16,"span")(17,"span",5),c(18,"calendar_today"),o(),c(19),T(20,"date"),o()()()()),t&2){let e=g.$implicit;s("routerLink",L(11,H,e.slug)),a(2),s("ngIf",e.images&&e.images.length>1),a(),s("ngIf]",!e.images||e.images.length<=1),a(2),u(e.category==null?null:e.category.name),a(3),u(e.title),a(2),u(e.excerpt),a(5),M(" ",e.viewCount,""),a(4),M(" ",F(20,8,e.publishedAt,"dd/MM/yyyy"),"")}}function re(t,g){if(t&1&&(r(0,"div",16),d(1,ie,21,13,"a",17),o()),t&2){let e=l();a(),s("ngForOf",e.articles)}}function oe(t,g){if(t&1){let e=C();r(0,"button",34),_("click",function(){let n=f(e).$implicit,p=l(2);return x(p.goToPage(n))}),c(1),o()}if(t&2){let e=g.$implicit,i=l(2);y("active",e===i.pagination.page),a(),u(e)}}function ae(t,g){if(t&1&&(r(0,"div",35),d(1,oe,2,3,"button",30),o()),t&2){let e=l();a(),s("ngForOf",e.pageNumbers)}}var ue=(()=>{class t{api;articles=[];categories=[];loading=!0;search="";category="";pagination={page:1,limit:9,total:0,totalPages:0};pageNumbers=[];constructor(e){this.api=e}ngOnInit(){this.loadCategories(),this.loadArticles()}loadCategories(){this.api.getArticleCategories().subscribe(e=>{this.categories=e})}loadArticles(){this.loading=!0;let e={page:this.pagination.page,limit:9,category:this.category};this.search&&(e.search=this.search),this.api.getArticles(e).subscribe(i=>{this.articles=i.data,this.articles.forEach(n=>{n.currentImageIndex||(n.currentImageIndex=0)}),this.pagination=i.pagination,this.pageNumbers=Array.from({length:Math.min(5,i.pagination.totalPages)},(n,p)=>p+1),this.loading=!1},()=>{this.loading=!1})}goToPage(e){this.pagination.page=e,this.loadArticles()}getArticleImage(e){return e.images&&e.images.length>0?e.images.find(n=>n.isPrimary)?.url||e.images[0]?.url:e.imageUrl||`https://picsum.photos/seed/${e.slug}/400/250`}setArticleImageIndex(e,i,n){n.stopPropagation(),e.currentImageIndex=i}prevImage(e,i){i.stopPropagation(),e.currentImageIndex||(e.currentImageIndex=0),e.currentImageIndex=(e.currentImageIndex-1+e.images.length)%e.images.length}nextImage(e,i){i.stopPropagation(),e.currentImageIndex||(e.currentImageIndex=0),e.currentImageIndex=(e.currentImageIndex+1)%e.images.length}static \u0275fac=function(i){return new(i||t)(A(q))};static \u0275cmp=O({type:t,selectors:[["app-article-list"]],standalone:!0,features:[k],decls:20,vars:6,consts:[[1,"page-header"],[1,"container"],[1,"section"],[1,"filters-bar"],[1,"filter-search"],[1,"material-icons"],["type","text","placeholder","T\xECm ki\u1EBFm b\xE0i vi\u1EBFt...",1,"search-input",3,"ngModelChange","ngModel"],[1,"form-control",3,"ngModelChange","change","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","loading-spinner",4,"ngIf"],["class","grid grid-3",4,"ngIf"],["class","pagination",4,"ngIf"],[3,"value"],[1,"loading-spinner"],[1,"spinner"],[1,"grid","grid-3"],["class","card article-card fade-in",3,"routerLink",4,"ngFor","ngForOf"],[1,"card","article-card","fade-in",3,"routerLink"],[1,"card-image"],[4,"ngIf"],[4,"ngIf]"],[1,"badge","badge-primary","card-cat"],[1,"card-body"],[1,"excerpt"],[1,"card-meta"],[1,"image-slider"],[1,"slider-container"],[3,"src","alt",4,"ngFor","ngForOf"],[1,"slider-dots"],[3,"active","click",4,"ngFor","ngForOf"],[1,"slider-arrow","prev",3,"click"],[1,"slider-arrow","next",3,"click"],[3,"src","alt"],[3,"click"],[1,"pagination"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),c(3,"C\u1EA9m Nang Du L\u1ECBch"),o(),r(4,"p"),c(5,"Kinh nghi\u1EC7m, m\u1EB9o hay v\xE0 l\u1ECBch tr\xECnh t\u1EEB nh\u1EEFng ng\u01B0\u1EDDi \u0111\xE3 \u0111i"),o()()(),r(6,"section",2)(7,"div",1)(8,"div",3)(9,"div",4)(10,"span",5),c(11,"search"),o(),r(12,"input",6),P("ngModelChange",function(m){return E(n.search,m)||(n.search=m),m}),_("ngModelChange",function(){return n.loadArticles()}),o()(),r(13,"select",7),P("ngModelChange",function(m){return E(n.category,m)||(n.category=m),m}),_("change",function(){return n.loadArticles()}),r(14,"option",8),c(15,"T\u1EA5t c\u1EA3"),o(),d(16,J,2,2,"option",9),o()(),d(17,Q,2,0,"div",10)(18,re,2,1,"div",11)(19,ae,2,1,"div",12),o()()),i&2&&(a(12),w("ngModel",n.search),a(),w("ngModel",n.category),a(3),s("ngForOf",n.categories),a(),s("ngIf",n.loading),a(),s("ngIf",!n.loading),a(),s("ngIf",!n.loading&&n.pagination.totalPages>1))},dependencies:[N,V,z,B,D,$,K,X,Y,W,R,j,U],styles:[".article-card[_ngcontent-%COMP%]{text-decoration:none;color:inherit;display:block}.card-image[_ngcontent-%COMP%]{position:relative;height:200px;overflow:hidden;img{width:100%;height:100%;object-fit:cover;transition:transform .4s}}.article-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.05)}.card-cat[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:12px}h3[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:.5rem}.excerpt[_ngcontent-%COMP%]{color:var(--gray);font-size:.875rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:.75rem}.card-meta[_ngcontent-%COMP%]{display:flex;gap:1rem;color:var(--gray);font-size:.8125rem;span{display:flex;align-items:center;gap:.25rem;.material-icons{font-size:1rem}}}.filters-bar[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:2rem;flex-wrap:wrap;align-items:center}.filter-search[_ngcontent-%COMP%]{flex:1;min-width:250px;position:relative;.material-icons{position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--gray);pointer-events:none}.search-input{width:100%;height:42px;padding:.5rem 1rem .5rem 2.75rem;border:1px solid #e2e8f0;border-radius:var(--border-radius);font-size:.9375rem;background:var(--light);transition:border-color .2s,box-shadow .2s;outline:none;box-sizing:border-box}.search-input:focus{border-color:var(--primary);box-shadow:0 0 0 3px #0d6efd1f;background:var(--white)}.search-input::placeholder{color:#94a3b8}}",`.image-slider[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.slider-container[_ngcontent-%COMP%] {
  display: flex;
  transition: transform 0.3s ease;
  height: 100%;
}
.slider-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}
.slider-dots[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  z-index: 2;
}
.slider-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: all 0.2s;
}
.slider-dots[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {
  background: white;
  transform: scale(1.2);
}
.slider-arrow[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(0,0,0,0.4);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.slider-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
.image-slider[_ngcontent-%COMP%]:hover   .slider-arrow[_ngcontent-%COMP%] {
  opacity: 1;
}
.slider-arrow[_ngcontent-%COMP%]:hover {
  background: rgba(0,0,0,0.7);
}
.slider-arrow.prev[_ngcontent-%COMP%] {
  left: 8px;
}
.slider-arrow.next[_ngcontent-%COMP%] {
  right: 8px;
}`]})}return t})();export{ue as ArticleListComponent};
