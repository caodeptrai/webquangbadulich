import{a as q,b as R,c as j,d as z,e as G,f as H,g as U,j as J,k as X,l as K,o as Q,p as Y}from"./chunk-QRSC5ICP.js";import{a as Z}from"./chunk-IYZO4SXW.js";import{d as B,f as k,g as L,j as N}from"./chunk-UGM6DPWQ.js";import{$ as D,$a as S,Ba as l,Ca as v,Ra as C,Rb as I,Sb as T,Ta as _,Va as P,Wa as n,Wb as A,Xa as i,Ya as x,a as M,ab as E,bb as y,f as b,gb as V,ha as d,hb as s,ia as p,ib as w,jb as W,lb as u,mb as c,nb as f,pb as O,xa as F}from"./chunk-ASC2LN3O.js";function $(m,h){if(m&1&&(n(0,"option",31),s(1),i()),m&2){let o=h.$implicit;_("value",o.id),l(),w(o.name)}}function ee(m,h){if(m&1&&(n(0,"option",31),s(1),i()),m&2){let o=h.$implicit;_("value",o.id),l(),w(o.name)}}function te(m,h){m&1&&(n(0,"span",42),s(1,"\u1EA2nh ch\xEDnh"),i())}function ne(m,h){if(m&1){let o=S();n(0,"div",34),x(1,"img",35),n(2,"div",36)(3,"button",37),E("click",function(){let e=d(o).index,a=y(2);return p(a.setPrimary(e))}),n(4,"span",22),s(5,"star"),i()(),n(6,"button",38),E("click",function(){let e=d(o).index,a=y(2);return p(a.removeImage(e))}),n(7,"span",22),s(8,"delete"),i()()(),C(9,te,2,0,"span",39),n(10,"div",40)(11,"input",41),f("ngModelChange",function(e){let a=d(o).$implicit;return c(a.caption,e)||(a.caption=e),p(e)}),i()()()}if(m&2){let o=h.$implicit,r=h.index;l(),_("src",o.preview||o.url,F),l(2),P("primary",r===0),l(6),_("ngIf",r===0),l(2),u("ngModel",o.caption),_("name","caption_"+r)}}function ie(m,h){if(m&1&&(n(0,"div",32),C(1,ne,12,6,"div",33),i()),m&2){let o=y();l(),_("ngForOf",o.images)}}function oe(m,h){m&1&&(n(0,"div",43)(1,"small",44),s(2,"Ch\u01B0a c\xF3 h\xECnh \u1EA3nh n\xE0o. Click b\xEAn tr\xEAn \u0111\u1EC3 t\u1EA3i l\xEAn."),i()())}function re(m,h){if(m&1&&(n(0,"div",45),s(1),i()),m&2){let o=y();l(),w(o.error)}}var ce=(()=>{class m{api;route;router;isEdit=!1;form={isFeatured:!1,isActive:!0};provinces=[];categories=[];loading=!1;uploading=!1;error="";images=[];constructor(o,r,e){this.api=o,this.route=r,this.router=e}ngOnInit(){this.api.getProvinces().subscribe(r=>{this.provinces=r}),this.api.getDestinationCategories().subscribe(r=>{this.categories=r});let o=this.route.snapshot.paramMap.get("id");o&&(this.isEdit=!0,this.api.getDestination(o).subscribe(r=>{this.form=M({},r),r.images&&r.images.length>0&&(this.images=r.images.map(e=>({url:e.url,caption:e.caption||""})))}))}onFileSelect(o){let r=o.target.files;if(r.length>0)for(let e=0;e<r.length;e++){let a=r[e];if(a.type.startsWith("image/")){let g=new FileReader;g.onload=t=>{this.images.push({url:"",caption:"",file:a,preview:t.target.result})},g.readAsDataURL(a)}}o.target.value=""}removeImage(o){this.images.splice(o,1)}setPrimary(o){let r=this.images.splice(o,1)[0];this.images.unshift(r)}uploadImages(){return b(this,null,function*(){let o=[];for(let r=0;r<this.images.length;r++){let e=this.images[r];if(e.file){this.uploading=!0;try{let a=yield this.api.uploadImage(e.file).toPromise();o.push({url:a.url,caption:e.caption})}catch(a){console.error("Upload failed:",a),e.preview&&o.push({url:e.preview,caption:e.caption})}this.uploading=!1}else o.push({url:e.url,caption:e.caption})}return o})}save(){return b(this,null,function*(){this.loading=!0,this.error="";try{let o=yield this.uploadImages(),r=M({},this.form);o.length>0&&(r.images=o),(this.isEdit?this.api.updateDestination(this.form.id,r):this.api.createDestination(r)).subscribe({next:()=>{this.router.navigate(["/admin/destinations"])},error:a=>{this.error=a.error?.error||"L\u01B0u th\u1EA5t b\u1EA1i",this.loading=!1}})}catch(o){console.error("Save failed:",o),this.error="L\u01B0u th\u1EA5t b\u1EA1i",this.loading=!1}})}static \u0275fac=function(r){return new(r||m)(v(Z),v(B),v(k))};static \u0275cmp=D({type:m,selectors:[["app-destination-form"]],standalone:!0,features:[O],decls:82,vars:19,consts:[["fileInput",""],[1,"section"],[1,"container","container-sm"],[1,"card"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["type","text","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","slug","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"grid","grid-2"],["name","provinceId","required","",1,"form-control",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","categoryId","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","address","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","shortDescription",1,"form-control",3,"ngModelChange","ngModel"],["name","description","rows","5","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","bestTime","placeholder","VD: Th\xE1ng 3-5",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","estimatedCost","placeholder","VD: 500.000 - 1.000.000\u0111",1,"form-control",3,"ngModelChange","ngModel"],[1,"upload-area",3,"click"],["type","file","multiple","","accept","image/*",2,"display","none",3,"change"],[1,"upload-placeholder"],[1,"material-icons"],["class","image-preview-grid",4,"ngIf"],["class","no-images",4,"ngIf"],["name","tips","rows","3",1,"form-control",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],["class","form-error",4,"ngIf"],[2,"display","flex","gap","0.75rem"],["type","submit",1,"btn","btn-primary",3,"disabled"],["routerLink","/admin/destinations",1,"btn","btn-outline"],[3,"value"],[1,"image-preview-grid"],["class","image-preview-item",4,"ngFor","ngForOf"],[1,"image-preview-item"],["alt","Preview",3,"src"],[1,"image-actions"],["type","button","title","\u0110\u1EB7t l\xE0m \u1EA3nh ch\xEDnh",1,"btn-icon",3,"click"],["type","button","title","X\xF3a",1,"btn-icon","delete",3,"click"],["class","primary-badge",4,"ngIf"],[1,"caption-input"],["type","text","placeholder","M\xF4 t\u1EA3 \u1EA3nh...",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","name"],[1,"primary-badge"],[1,"no-images"],[1,"text-muted"],[1,"form-error"]],template:function(r,e){if(r&1){let a=S();n(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"form",5),E("ngSubmit",function(){return d(a),p(e.save())}),n(5,"div",6)(6,"label"),s(7,"T\xEAn *"),i(),n(8,"input",7),f("ngModelChange",function(t){return d(a),c(e.form.name,t)||(e.form.name=t),p(t)}),i()(),n(9,"div",6)(10,"label"),s(11,"Slug *"),i(),n(12,"input",8),f("ngModelChange",function(t){return d(a),c(e.form.slug,t)||(e.form.slug=t),p(t)}),i()(),n(13,"div",9)(14,"div",6)(15,"label"),s(16,"T\u1EC9nh/Th\xE0nh *"),i(),n(17,"select",10),f("ngModelChange",function(t){return d(a),c(e.form.provinceId,t)||(e.form.provinceId=t),p(t)}),n(18,"option",11),s(19,"Ch\u1ECDn t\u1EC9nh/th\xE0nh"),i(),C(20,$,2,2,"option",12),i()(),n(21,"div",6)(22,"label"),s(23,"Danh m\u1EE5c *"),i(),n(24,"select",13),f("ngModelChange",function(t){return d(a),c(e.form.categoryId,t)||(e.form.categoryId=t),p(t)}),n(25,"option",11),s(26,"Ch\u1ECDn danh m\u1EE5c"),i(),C(27,ee,2,2,"option",12),i()()(),n(28,"div",6)(29,"label"),s(30,"\u0110\u1ECBa ch\u1EC9 *"),i(),n(31,"input",14),f("ngModelChange",function(t){return d(a),c(e.form.address,t)||(e.form.address=t),p(t)}),i()(),n(32,"div",6)(33,"label"),s(34,"M\xF4 t\u1EA3 ng\u1EAFn"),i(),n(35,"input",15),f("ngModelChange",function(t){return d(a),c(e.form.shortDescription,t)||(e.form.shortDescription=t),p(t)}),i()(),n(36,"div",6)(37,"label"),s(38,"M\xF4 t\u1EA3 chi ti\u1EBFt *"),i(),n(39,"textarea",16),f("ngModelChange",function(t){return d(a),c(e.form.description,t)||(e.form.description=t),p(t)}),i()(),n(40,"div",9)(41,"div",6)(42,"label"),s(43,"Th\u1EDDi gian \u0111\u1EB9p nh\u1EA5t"),i(),n(44,"input",17),f("ngModelChange",function(t){return d(a),c(e.form.bestTime,t)||(e.form.bestTime=t),p(t)}),i()(),n(45,"div",6)(46,"label"),s(47,"Chi ph\xED \u01B0\u1EDBc t\xEDnh"),i(),n(48,"input",18),f("ngModelChange",function(t){return d(a),c(e.form.estimatedCost,t)||(e.form.estimatedCost=t),p(t)}),i()()(),n(49,"div",6)(50,"label"),s(51,"H\xECnh \u1EA3nh \u0111i\u1EC3m \u0111\u1EBFn"),i(),n(52,"div",19),E("click",function(){d(a);let t=V(54);return p(t.click())}),n(53,"input",20,0),E("change",function(t){return d(a),p(e.onFileSelect(t))}),i(),n(55,"div",21)(56,"span",22),s(57,"cloud_upload"),i(),n(58,"p"),s(59,"Click \u0111\u1EC3 ch\u1ECDn nhi\u1EC1u h\xECnh \u1EA3nh"),i(),n(60,"small"),s(61,"H\u1ED7 tr\u1EE3: JPG, PNG, GIF, WebP (t\u1ED1i \u0111a 5MB m\u1ED7i \u1EA3nh)"),i()()(),C(62,ie,2,1,"div",23)(63,oe,3,0,"div",24),i(),n(64,"div",6)(65,"label"),s(66,"M\u1EB9o du l\u1ECBch"),i(),n(67,"textarea",25),f("ngModelChange",function(t){return d(a),c(e.form.tips,t)||(e.form.tips=t),p(t)}),i()(),n(68,"div",6)(69,"label")(70,"input",26),f("ngModelChange",function(t){return d(a),c(e.form.isFeatured,t)||(e.form.isFeatured=t),p(t)}),i(),s(71," \u0110\xE1nh d\u1EA5u n\u1ED5i b\u1EADt"),i()(),n(72,"div",6)(73,"label")(74,"input",26),f("ngModelChange",function(t){return d(a),c(e.form.isActive,t)||(e.form.isActive=t),p(t)}),i(),s(75," Ho\u1EA1t \u0111\u1ED9ng"),i()(),C(76,re,2,1,"div",27),n(77,"div",28)(78,"button",29),s(79),i(),n(80,"a",30),s(81,"H\u1EE7y"),i()()()()()()()}r&2&&(l(8),u("ngModel",e.form.name),l(4),u("ngModel",e.form.slug),l(5),u("ngModel",e.form.provinceId),l(3),_("ngForOf",e.provinces),l(4),u("ngModel",e.form.categoryId),l(3),_("ngForOf",e.categories),l(4),u("ngModel",e.form.address),l(4),u("ngModel",e.form.shortDescription),l(4),u("ngModel",e.form.description),l(5),u("ngModel",e.form.bestTime),l(4),u("ngModel",e.form.estimatedCost),l(14),_("ngIf",e.images.length>0),l(),_("ngIf",e.images.length===0),l(4),u("ngModel",e.form.tips),l(3),u("ngModel",e.form.isFeatured),l(4),u("ngModel",e.form.isActive),l(2),_("ngIf",e.error),l(2),_("disabled",e.loading||e.uploading),l(),W(" ",e.uploading?"\u0110ang t\u1EA3i \u1EA3nh...":e.loading?"\u0110ang l\u01B0u...":"L\u01B0u"," "))},dependencies:[A,I,T,N,L,Y,U,X,K,R,q,J,j,z,Q,H,G],styles:[`.upload-area[_ngcontent-%COMP%] {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #fafafa;
}
.upload-area[_ngcontent-%COMP%]:hover {
  border-color: var(--primary);
  background: #f0f7ff;
}
.upload-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 48px;
  color: #aaa;
}
.upload-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
  color: #666;
  font-weight: 500;
}
.upload-placeholder[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #999;
}

.image-preview-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.image-preview-item[_ngcontent-%COMP%] {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
  border: 2px solid transparent;
}
.image-preview-item[_ngcontent-%COMP%]:first-child {
  border-color: var(--primary);
}
.image-preview-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.image-actions[_ngcontent-%COMP%] {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}
.image-preview-item[_ngcontent-%COMP%]:hover   .image-actions[_ngcontent-%COMP%] {
  opacity: 1;
}
.btn-icon[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(0,0,0,0.6);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] { font-size: 16px; }
.btn-icon[_ngcontent-%COMP%]:hover { background: rgba(0,0,0,0.8); }
.btn-icon.primary[_ngcontent-%COMP%] { background: var(--primary); }
.btn-icon.delete[_ngcontent-%COMP%]:hover { background: #dc3545; }
.primary-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 4px;
  left: 4px;
  background: var(--primary);
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}
.caption-input[_ngcontent-%COMP%] { padding: 4px; }
.form-control-sm[_ngcontent-%COMP%] { padding: 4px 8px; font-size: 12px; }
.no-images[_ngcontent-%COMP%] { margin-top: 0.5rem; }
.text-muted[_ngcontent-%COMP%] { color: #6c757d; }`]})}return m})();export{ce as DestinationFormComponent};
