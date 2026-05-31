import{a as j,b as G,c as q,d as Q,e as U,f as X,g as J,h as K,k as Y,l as Z,o as $,p as ee}from"./chunk-QRSC5ICP.js";import{a as te}from"./chunk-IYZO4SXW.js";import{d as N,f as z,g as R,j as H}from"./chunk-UGM6DPWQ.js";import{$ as P,$a as x,Ba as s,Ca as E,Ra as v,Rb as I,Sa as T,Sb as B,Ta as h,Va as O,Wa as t,Wb as L,Xa as n,Ya as b,a as M,ab as p,bb as w,db as F,eb as V,f as y,fb as k,gb as A,ha as m,hb as l,ia as d,jb as W,lb as g,mb as _,nb as f,pb as D,xa as S}from"./chunk-ASC2LN3O.js";var ne=["editorContent"];function ie(c,C){c&1&&(t(0,"span",50),l(1,"\u1EA2nh ch\xEDnh"),n())}function oe(c,C){if(c&1){let r=x();t(0,"div",42),b(1,"img",43),t(2,"div",44)(3,"button",45),p("click",function(){let e=m(r).index,a=w(2);return d(a.setPrimary(e))}),t(4,"span",25),l(5,"star"),n()(),t(6,"button",46),p("click",function(){let e=m(r).index,a=w(2);return d(a.removeImage(e))}),t(7,"span",25),l(8,"delete"),n()()(),v(9,ie,2,0,"span",47),t(10,"div",48)(11,"input",49),f("ngModelChange",function(e){let a=m(r).$implicit;return _(a.caption,e)||(a.caption=e),d(e)}),n()()()}if(c&2){let r=C.$implicit,i=C.index;s(),h("src",r.preview||r.url,S),s(2),O("primary",i===0),s(6),h("ngIf",i===0),s(2),g("ngModel",r.caption),h("name","caption_"+i)}}function re(c,C){if(c&1&&(t(0,"div",40),v(1,oe,12,6,"div",41),n()),c&2){let r=w();s(),h("ngForOf",r.images)}}function ae(c,C){c&1&&(t(0,"div",51)(1,"small",52),l(2,"Ch\u01B0a c\xF3 h\xECnh \u1EA3nh n\xE0o. Click b\xEAn tr\xEAn \u0111\u1EC3 t\u1EA3i l\xEAn."),n()())}var _e=(()=>{class c{api;route;router;editorContent;isEdit=!1;form={isFeatured:!1,isActive:!0};loading=!1;uploading=!1;images=[];constructor(r,i,e){this.api=r,this.route=i,this.router=e}ngOnInit(){let r=this.route.snapshot.paramMap.get("id");r&&(this.isEdit=!0,this.api.getTour(r).subscribe(i=>{this.form=M({},i),i.images&&i.images.length>0&&(this.images=i.images.map(e=>({url:e.url,caption:e.caption||""}))),this.editorContent&&i.description&&(this.editorContent.nativeElement.innerHTML=i.description)}))}execCmd(r){document.execCommand(r,!1),this.editorContent.nativeElement.focus()}formatBlock(r){let i=r.target,e=i.value;e&&(document.execCommand("formatBlock",!1,e),i.value=""),this.editorContent.nativeElement.focus()}onContentChange(){this.form.description=this.editorContent.nativeElement.innerHTML}onFileSelect(r){let i=r.target.files;if(i.length>0)for(let e=0;e<i.length;e++){let a=i[e];if(a.type.startsWith("image/")){let u=new FileReader;u.onload=o=>{this.images.push({url:"",caption:"",file:a,preview:o.target.result})},u.readAsDataURL(a)}}r.target.value=""}removeImage(r){this.images.splice(r,1)}setPrimary(r){let i=this.images.splice(r,1)[0];this.images.unshift(i)}uploadImages(){return y(this,null,function*(){let r=[];for(let i=0;i<this.images.length;i++){let e=this.images[i];if(e.file){this.uploading=!0;try{let a=yield this.api.uploadImage(e.file).toPromise();r.push({url:a.url,caption:e.caption})}catch(a){console.error("Upload failed:",a),e.preview&&r.push({url:e.preview,caption:e.caption})}this.uploading=!1}else r.push({url:e.url,caption:e.caption})}return r})}save(){return y(this,null,function*(){this.loading=!0;try{this.editorContent&&(this.form.description=this.editorContent.nativeElement.innerHTML);let r=yield this.uploadImages(),i=M({},this.form);r.length>0&&(i.images=r),(this.isEdit?this.api.updateTour(this.form.id,i):this.api.createTour(i)).subscribe({next:()=>this.router.navigate(["/admin/tours"]),error:()=>{this.loading=!1}})}catch(r){console.error("Save failed:",r),this.loading=!1}})}static \u0275fac=function(i){return new(i||c)(E(te),E(N),E(z))};static \u0275cmp=P({type:c,selectors:[["app-tour-form"]],viewQuery:function(i,e){if(i&1&&F(ne,5),i&2){let a;V(a=k())&&(e.editorContent=a.first)}},standalone:!0,features:[D],decls:96,vars:13,consts:[["editorContent",""],["fileInput",""],[1,"section"],[1,"container","container-sm"],[1,"card"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["type","text","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","text","name","slug","placeholder","\u0110\u1EC3 tr\u1ED1ng \u0111\u1EC3 t\u1EF1 \u0111\u1ED9ng t\u1EA1o",1,"form-control",3,"ngModelChange","ngModel"],[1,"grid","grid-3"],["type","text","name","duration","placeholder","VD: 3 ng\xE0y 2 \u0111\xEAm",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","maxPeople",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","price","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","number","name","discountPrice",1,"form-control",3,"ngModelChange","ngModel"],[1,"html-editor"],[1,"editor-toolbar"],[1,"toolbar-group"],[1,"toolbar-select",3,"change"],["value",""],["value","h2"],["value","h3"],["value","p"],[1,"toolbar-divider"],["type","button","title","In \u0111\u1EADm",1,"toolbar-btn",3,"click"],[1,"material-icons"],["type","button","title","In nghi\xEAng",1,"toolbar-btn",3,"click"],["type","button","title","Danh s\xE1ch",1,"toolbar-btn",3,"click"],["type","button","title","Danh s\xE1ch c\xF3 th\u1EE9 t\u1EF1",1,"toolbar-btn",3,"click"],["type","button","title","X\xF3a \u0111\u1ECBnh d\u1EA1ng",1,"toolbar-btn",3,"click"],["contenteditable","true",1,"editor-content",3,"input"],[1,"upload-area",3,"click"],["type","file","multiple","","accept","image/*",2,"display","none",3,"change"],[1,"upload-placeholder"],["class","image-preview-grid",4,"ngIf"],["class","no-images",4,"ngIf"],["type","checkbox",3,"ngModelChange","ngModel"],[2,"display","flex","gap","0.75rem"],["type","submit",1,"btn","btn-primary",3,"disabled"],["routerLink","/admin/tours",1,"btn","btn-outline"],[1,"image-preview-grid"],["class","image-preview-item",4,"ngFor","ngForOf"],[1,"image-preview-item"],["alt","Preview",3,"src"],[1,"image-actions"],["type","button","title","\u0110\u1EB7t l\xE0m \u1EA3nh ch\xEDnh",1,"btn-icon",3,"click"],["type","button","title","X\xF3a",1,"btn-icon","delete",3,"click"],["class","primary-badge",4,"ngIf"],[1,"caption-input"],["type","text","placeholder","M\xF4 t\u1EA3 \u1EA3nh...",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","name"],[1,"primary-badge"],[1,"no-images"],[1,"text-muted"]],template:function(i,e){if(i&1){let a=x();t(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"form",6),p("ngSubmit",function(){return m(a),d(e.save())}),t(5,"div",7)(6,"label"),l(7,"T\xEAn *"),n(),t(8,"input",8),f("ngModelChange",function(o){return m(a),_(e.form.name,o)||(e.form.name=o),d(o)}),n()(),t(9,"div",7)(10,"label"),l(11,"Slug"),n(),t(12,"input",9),f("ngModelChange",function(o){return m(a),_(e.form.slug,o)||(e.form.slug=o),d(o)}),n()(),t(13,"div",10)(14,"div",7)(15,"label"),l(16,"Th\u1EDDi gian"),n(),t(17,"input",11),f("ngModelChange",function(o){return m(a),_(e.form.duration,o)||(e.form.duration=o),d(o)}),n()(),t(18,"div",7)(19,"label"),l(20,"S\u1ED1 ng\u01B0\u1EDDi t\u1ED1i \u0111a"),n(),t(21,"input",12),f("ngModelChange",function(o){return m(a),_(e.form.maxPeople,o)||(e.form.maxPeople=o),d(o)}),n()(),t(22,"div",7)(23,"label"),l(24,"Gi\xE1 *"),n(),t(25,"input",13),f("ngModelChange",function(o){return m(a),_(e.form.price,o)||(e.form.price=o),d(o)}),n()()(),t(26,"div",7)(27,"label"),l(28,"Gi\xE1 gi\u1EA3m"),n(),t(29,"input",14),f("ngModelChange",function(o){return m(a),_(e.form.discountPrice,o)||(e.form.discountPrice=o),d(o)}),n()(),t(30,"div",7)(31,"label"),l(32,"M\xF4 t\u1EA3 *"),n(),t(33,"div",15)(34,"div",16)(35,"div",17)(36,"select",18),p("change",function(o){return m(a),d(e.formatBlock(o))}),t(37,"option",19),l(38,"\u0110\u1ECBnh d\u1EA1ng"),n(),t(39,"option",20),l(40,"Ti\xEAu \u0111\u1EC1 2"),n(),t(41,"option",21),l(42,"Ti\xEAu \u0111\u1EC1 3"),n(),t(43,"option",22),l(44,"\u0110o\u1EA1n v\u0103n"),n()()(),b(45,"div",23),t(46,"div",17)(47,"button",24),p("click",function(){return m(a),d(e.execCmd("bold"))}),t(48,"span",25),l(49,"format_bold"),n()(),t(50,"button",26),p("click",function(){return m(a),d(e.execCmd("italic"))}),t(51,"span",25),l(52,"format_italic"),n()()(),b(53,"div",23),t(54,"div",17)(55,"button",27),p("click",function(){return m(a),d(e.execCmd("insertUnorderedList"))}),t(56,"span",25),l(57,"format_list_bulleted"),n()(),t(58,"button",28),p("click",function(){return m(a),d(e.execCmd("insertOrderedList"))}),t(59,"span",25),l(60,"format_list_numbered"),n()()(),b(61,"div",23),t(62,"div",17)(63,"button",29),p("click",function(){return m(a),d(e.execCmd("removeFormat"))}),t(64,"span",25),l(65,"format_clear"),n()()()(),t(66,"div",30,0),p("input",function(){return m(a),d(e.onContentChange())}),n()()(),t(68,"div",7)(69,"label"),l(70,"H\xECnh \u1EA3nh tour"),n(),t(71,"div",31),p("click",function(){m(a);let o=A(73);return d(o.click())}),t(72,"input",32,1),p("change",function(o){return m(a),d(e.onFileSelect(o))}),n(),t(74,"div",33)(75,"span",25),l(76,"cloud_upload"),n(),t(77,"p"),l(78,"Click \u0111\u1EC3 ch\u1ECDn nhi\u1EC1u h\xECnh \u1EA3nh"),n(),t(79,"small"),l(80,"H\u1ED7 tr\u1EE3: JPG, PNG, GIF, WebP (t\u1ED1i \u0111a 5MB m\u1ED7i \u1EA3nh)"),n()()(),v(81,re,2,1,"div",34)(82,ae,3,0,"div",35),n(),t(83,"div",7)(84,"label")(85,"input",36),f("ngModelChange",function(o){return m(a),_(e.form.isFeatured,o)||(e.form.isFeatured=o),d(o)}),n(),l(86," N\u1ED5i b\u1EADt"),n()(),t(87,"div",7)(88,"label")(89,"input",36),f("ngModelChange",function(o){return m(a),_(e.form.isActive,o)||(e.form.isActive=o),d(o)}),n(),l(90," Ho\u1EA1t \u0111\u1ED9ng"),n()(),t(91,"div",37)(92,"button",38),l(93),n(),t(94,"a",39),l(95,"H\u1EE7y"),n()()()()()()()}i&2&&(s(8),g("ngModel",e.form.name),s(4),g("ngModel",e.form.slug),s(5),g("ngModel",e.form.duration),s(4),g("ngModel",e.form.maxPeople),s(4),g("ngModel",e.form.price),s(4),g("ngModel",e.form.discountPrice),s(37),T("data-placeholder","Nh\u1EADp m\xF4 t\u1EA3 tour..."),s(15),h("ngIf",e.images.length>0),s(),h("ngIf",e.images.length===0),s(3),g("ngModel",e.form.isFeatured),s(4),g("ngModel",e.form.isActive),s(3),h("disabled",e.loading||e.uploading),s(),W(" ",e.uploading?"\u0110ang t\u1EA3i \u1EA3nh...":e.loading?"\u0110ang l\u01B0u...":"L\u01B0u"," "))},dependencies:[L,I,B,H,R,ee,J,Y,Z,G,K,j,q,Q,$,X,U],styles:[`.upload-area[_ngcontent-%COMP%] {
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
.text-muted[_ngcontent-%COMP%] { color: #6c757d; }

.html-editor[_ngcontent-%COMP%] {
  border: 2px solid #e2e8f0;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  background: white;
  transition: border-color 0.3s;
}
.html-editor[_ngcontent-%COMP%]:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
}
.editor-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  flex-wrap: wrap;
}
.toolbar-group[_ngcontent-%COMP%] { display: flex; gap: 2px; }
.toolbar-divider[_ngcontent-%COMP%] { width: 1px; height: 24px; background: #e2e8f0; margin: 0 0.25rem; }
.toolbar-btn[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
  transition: all 0.2s;
}
.toolbar-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] { font-size: 18px; }
.toolbar-btn[_ngcontent-%COMP%]:hover { background: #e2e8f0; color: var(--primary); }
.toolbar-select[_ngcontent-%COMP%] {
  height: 32px;
  padding: 0 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: white;
  font-size: 13px;
  cursor: pointer;
  color: #4b5563;
}
.toolbar-select[_ngcontent-%COMP%]:focus { outline: none; border-color: var(--primary); }
.editor-content[_ngcontent-%COMP%] {
  min-height: 200px;
  padding: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #374151;
  outline: none;
  overflow-y: auto;
  max-height: 400px;
}
.editor-content[_ngcontent-%COMP%]:empty:before {
  content: attr(data-placeholder);
  color: #9ca3af;
  pointer-events: none;
}
.editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 1.5rem; font-weight: 700; margin: 0.875rem 0 0.5rem; color: #1f2937; }
.editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 1.25rem; font-weight: 600; margin: 0.75rem 0 0.5rem; color: #1f2937; }
.editor-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0.5rem 0; }
.editor-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0.5rem 0; padding-left: 1.5rem; }
.editor-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin: 0.25rem 0; }`]})}return c})();export{_e as TourFormComponent};
