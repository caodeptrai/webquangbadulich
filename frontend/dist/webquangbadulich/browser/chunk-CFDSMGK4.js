import{a as G,b as q,c as Q,d as X,e as J,f as K,g as Y,j as Z,k as $,l as ee,o as te,p as ne}from"./chunk-QRSC5ICP.js";import{a as ie}from"./chunk-IYZO4SXW.js";import{d as R,f as j,g as H,j as U}from"./chunk-UGM6DPWQ.js";import{$ as P,$a as x,Ba as d,Ca as v,Ra as E,Rb as B,Sa as k,Sb as N,Ta as g,Va as F,Wa as t,Wb as z,Xa as n,Ya as b,a as y,ab as u,b as S,bb as w,db as O,eb as V,f as M,fb as T,gb as I,ha as c,hb as a,ia as m,ib as D,jb as L,lb as _,mb as f,nb as h,pb as W,xa as A}from"./chunk-ASC2LN3O.js";var oe=["editorContent"];function re(p,C){if(p&1&&(t(0,"option",45),a(1),n()),p&2){let i=C.$implicit;g("value",i.id),d(),D(i.name)}}function ae(p,C){p&1&&(t(0,"span",56),a(1,"\u1EA2nh ch\xEDnh"),n())}function le(p,C){if(p&1){let i=x();t(0,"div",48),b(1,"img",49),t(2,"div",50)(3,"button",51),u("click",function(){let e=c(i).index,r=w(2);return m(r.setPrimary(e))}),t(4,"span",23),a(5,"star"),n()(),t(6,"button",52),u("click",function(){let e=c(i).index,r=w(2);return m(r.removeImage(e))}),t(7,"span",23),a(8,"delete"),n()()(),E(9,ae,2,0,"span",53),t(10,"div",54)(11,"input",55),h("ngModelChange",function(e){let r=c(i).$implicit;return f(r.caption,e)||(r.caption=e),m(e)}),n()()()}if(p&2){let i=C.$implicit,o=C.index;d(),g("src",i.preview||i.url,A),d(2),F("primary",o===0),d(6),g("ngIf",o===0),d(2),_("ngModel",i.caption),g("name","caption_"+o)}}function ce(p,C){if(p&1&&(t(0,"div",46),E(1,le,12,6,"div",47),n()),p&2){let i=w();d(),g("ngForOf",i.images)}}function me(p,C){p&1&&(t(0,"div",57)(1,"small",58),a(2,"Ch\u01B0a c\xF3 h\xECnh \u1EA3nh n\xE0o. Click b\xEAn tr\xEAn \u0111\u1EC3 t\u1EA3i l\xEAn."),n()())}var Ce=(()=>{class p{api;route;router;editorContent;isEdit=!1;form={isFeatured:!1,isPublished:!0};categories=[];loading=!1;uploading=!1;images=[];constructor(i,o,e){this.api=i,this.route=o,this.router=e}ngOnInit(){this.api.getArticleCategories().subscribe(o=>{this.categories=o});let i=this.route.snapshot.paramMap.get("id");i&&(this.isEdit=!0,this.api.getArticle(i).subscribe(o=>{this.form=y({},o),o.images&&o.images.length>0&&(this.images=o.images.map(e=>({url:e.url,caption:e.caption||"",isPrimary:e.isPrimary}))),setTimeout(()=>{this.editorContent&&o.content&&(this.editorContent.nativeElement.innerHTML=o.content)},100)}))}execCmd(i){document.execCommand(i,!1),this.editorContent.nativeElement.focus()}formatBlock(i){let o=i.target,e=o.value;e&&(document.execCommand("formatBlock",!1,e),o.value=""),this.editorContent.nativeElement.focus()}insertLink(){let i=prompt("Nh\u1EADp URL:");i&&document.execCommand("createLink",!1,i),this.editorContent.nativeElement.focus()}insertImage(){let i=prompt("Nh\u1EADp URL h\xECnh \u1EA3nh:");i&&document.execCommand("insertImage",!1,i),this.editorContent.nativeElement.focus()}onContentChange(){this.form.content=this.editorContent.nativeElement.innerHTML}onFileSelect(i){let o=i.target.files;if(o.length>0)for(let e=0;e<o.length;e++){let r=o[e];if(r.type.startsWith("image/")){let s=new FileReader;s.onload=l=>{this.images.push({url:"",caption:"",file:r,preview:l.target.result})},s.readAsDataURL(r)}}i.target.value=""}removeImage(i){this.images.splice(i,1)}setPrimary(i){let o=this.images.splice(i,1)[0];this.images.unshift(o)}uploadImages(){return M(this,null,function*(){let i=[];for(let o=0;o<this.images.length;o++){let e=this.images[o];if(e.file){this.uploading=!0;try{let r=yield this.api.uploadImage(e.file).toPromise();i.push({url:r.url,caption:e.caption})}catch(r){console.error("Upload failed:",r),e.preview&&i.push({url:e.preview,caption:e.caption})}this.uploading=!1}else i.push({url:e.url,caption:e.caption})}return i})}save(){return M(this,null,function*(){this.loading=!0;try{this.form.content=this.editorContent.nativeElement.innerHTML;let i=yield this.uploadImages(),o=S(y({},this.form),{images:i});(this.isEdit?this.api.updateArticle(this.form.id,o):this.api.createArticle(o)).subscribe({next:()=>this.router.navigate(["/admin/articles"]),error:()=>{this.loading=!1}})}catch(i){console.error("Save failed:",i),this.loading=!1}})}static \u0275fac=function(o){return new(o||p)(v(ie),v(R),v(j))};static \u0275cmp=P({type:p,selectors:[["app-article-form"]],viewQuery:function(o,e){if(o&1&&O(oe,5),o&2){let r;V(r=T())&&(e.editorContent=r.first)}},standalone:!0,features:[W],decls:114,vars:12,consts:[["editorContent",""],["fileInput",""],[1,"section"],[1,"container","container-sm"],[1,"card"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["type","text","name","title","required","",1,"form-control",3,"ngModelChange","ngModel"],["name","categoryId","required","",1,"form-control",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","excerpt","rows","2",1,"form-control",3,"ngModelChange","ngModel"],[1,"html-editor"],[1,"editor-toolbar"],[1,"toolbar-group"],[1,"toolbar-select",3,"change"],["value","h1"],["value","h2"],["value","h3"],["value","p"],[1,"toolbar-divider"],["type","button","title","In \u0111\u1EADm",1,"toolbar-btn",3,"click"],[1,"material-icons"],["type","button","title","In nghi\xEAng",1,"toolbar-btn",3,"click"],["type","button","title","G\u1EA1ch ch\xE2n",1,"toolbar-btn",3,"click"],["type","button","title","Danh s\xE1ch kh\xF4ng th\u1EE9 t\u1EF1",1,"toolbar-btn",3,"click"],["type","button","title","Danh s\xE1ch c\xF3 th\u1EE9 t\u1EF1",1,"toolbar-btn",3,"click"],["type","button","title","C\u0103n tr\xE1i",1,"toolbar-btn",3,"click"],["type","button","title","C\u0103n gi\u1EEFa",1,"toolbar-btn",3,"click"],["type","button","title","C\u0103n ph\u1EA3i",1,"toolbar-btn",3,"click"],["type","button","title","Ch\xE8n li\xEAn k\u1EBFt",1,"toolbar-btn",3,"click"],["type","button","title","Ch\xE8n h\xECnh \u1EA3nh",1,"toolbar-btn",3,"click"],["type","button","title","X\xF3a \u0111\u1ECBnh d\u1EA1ng",1,"toolbar-btn",3,"click"],["contenteditable","true",1,"editor-content",3,"input"],[1,"upload-area",3,"click"],["type","file","multiple","","accept","image/*",2,"display","none",3,"change"],[1,"upload-placeholder"],["class","image-preview-grid",4,"ngIf"],["class","no-images",4,"ngIf"],["type","text","name","tags","placeholder","VD: sapa,m\xF9a l\xFAa ch\xEDn",1,"form-control",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[2,"display","flex","gap","0.75rem"],["type","submit",1,"btn","btn-primary",3,"disabled"],["routerLink","/admin/articles",1,"btn","btn-outline"],[3,"value"],[1,"image-preview-grid"],["class","image-preview-item",4,"ngFor","ngForOf"],[1,"image-preview-item"],["alt","Preview",3,"src"],[1,"image-actions"],["type","button","title","\u0110\u1EB7t l\xE0m \u1EA3nh ch\xEDnh",1,"btn-icon",3,"click"],["type","button","title","X\xF3a",1,"btn-icon","delete",3,"click"],["class","primary-badge",4,"ngIf"],[1,"caption-input"],["type","text","placeholder","M\xF4 t\u1EA3 \u1EA3nh...",1,"form-control","form-control-sm",3,"ngModelChange","ngModel","name"],[1,"primary-badge"],[1,"no-images"],[1,"text-muted"]],template:function(o,e){if(o&1){let r=x();t(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"form",6),u("ngSubmit",function(){return c(r),m(e.save())}),t(5,"div",7)(6,"label"),a(7,"Ti\xEAu \u0111\u1EC1 *"),n(),t(8,"input",8),h("ngModelChange",function(l){return c(r),f(e.form.title,l)||(e.form.title=l),m(l)}),n()(),t(9,"div",7)(10,"label"),a(11,"Danh m\u1EE5c *"),n(),t(12,"select",9),h("ngModelChange",function(l){return c(r),f(e.form.categoryId,l)||(e.form.categoryId=l),m(l)}),t(13,"option",10),a(14,"Ch\u1ECDn danh m\u1EE5c"),n(),E(15,re,2,2,"option",11),n()(),t(16,"div",7)(17,"label"),a(18,"T\xF3m t\u1EAFt"),n(),t(19,"textarea",12),h("ngModelChange",function(l){return c(r),f(e.form.excerpt,l)||(e.form.excerpt=l),m(l)}),n()(),t(20,"div",7)(21,"label"),a(22,"N\u1ED9i dung HTML *"),n(),t(23,"div",13)(24,"div",14)(25,"div",15)(26,"select",16),u("change",function(l){return c(r),m(e.formatBlock(l))}),t(27,"option",10),a(28,"\u0110\u1ECBnh d\u1EA1ng"),n(),t(29,"option",17),a(30,"Ti\xEAu \u0111\u1EC1 1"),n(),t(31,"option",18),a(32,"Ti\xEAu \u0111\u1EC1 2"),n(),t(33,"option",19),a(34,"Ti\xEAu \u0111\u1EC1 3"),n(),t(35,"option",20),a(36,"\u0110o\u1EA1n v\u0103n"),n()()(),b(37,"div",21),t(38,"div",15)(39,"button",22),u("click",function(){return c(r),m(e.execCmd("bold"))}),t(40,"span",23),a(41,"format_bold"),n()(),t(42,"button",24),u("click",function(){return c(r),m(e.execCmd("italic"))}),t(43,"span",23),a(44,"format_italic"),n()(),t(45,"button",25),u("click",function(){return c(r),m(e.execCmd("underline"))}),t(46,"span",23),a(47,"format_underlined"),n()()(),b(48,"div",21),t(49,"div",15)(50,"button",26),u("click",function(){return c(r),m(e.execCmd("insertUnorderedList"))}),t(51,"span",23),a(52,"format_list_bulleted"),n()(),t(53,"button",27),u("click",function(){return c(r),m(e.execCmd("insertOrderedList"))}),t(54,"span",23),a(55,"format_list_numbered"),n()()(),b(56,"div",21),t(57,"div",15)(58,"button",28),u("click",function(){return c(r),m(e.execCmd("justifyLeft"))}),t(59,"span",23),a(60,"format_align_left"),n()(),t(61,"button",29),u("click",function(){return c(r),m(e.execCmd("justifyCenter"))}),t(62,"span",23),a(63,"format_align_center"),n()(),t(64,"button",30),u("click",function(){return c(r),m(e.execCmd("justifyRight"))}),t(65,"span",23),a(66,"format_align_right"),n()()(),b(67,"div",21),t(68,"div",15)(69,"button",31),u("click",function(){return c(r),m(e.insertLink())}),t(70,"span",23),a(71,"link"),n()(),t(72,"button",32),u("click",function(){return c(r),m(e.insertImage())}),t(73,"span",23),a(74,"image"),n()()(),b(75,"div",21),t(76,"div",15)(77,"button",33),u("click",function(){return c(r),m(e.execCmd("removeFormat"))}),t(78,"span",23),a(79,"format_clear"),n()()()(),t(80,"div",34,0),u("input",function(){return c(r),m(e.onContentChange())}),n()()(),t(82,"div",7)(83,"label"),a(84,"H\xECnh \u1EA3nh b\xE0i vi\u1EBFt"),n(),t(85,"div",35),u("click",function(){c(r);let l=I(87);return m(l.click())}),t(86,"input",36,1),u("change",function(l){return c(r),m(e.onFileSelect(l))}),n(),t(88,"div",37)(89,"span",23),a(90,"cloud_upload"),n(),t(91,"p"),a(92,"Click \u0111\u1EC3 ch\u1ECDn nhi\u1EC1u h\xECnh \u1EA3nh"),n(),t(93,"small"),a(94,"H\u1ED7 tr\u1EE3: JPG, PNG, GIF, WebP (t\u1ED1i \u0111a 5MB m\u1ED7i \u1EA3nh)"),n()()(),E(95,ce,2,1,"div",38)(96,me,3,0,"div",39),n(),t(97,"div",7)(98,"label"),a(99,"Tags (comma-separated)"),n(),t(100,"input",40),h("ngModelChange",function(l){return c(r),f(e.form.tags,l)||(e.form.tags=l),m(l)}),n()(),t(101,"div",7)(102,"label")(103,"input",41),h("ngModelChange",function(l){return c(r),f(e.form.isFeatured,l)||(e.form.isFeatured=l),m(l)}),n(),a(104," N\u1ED5i b\u1EADt"),n()(),t(105,"div",7)(106,"label")(107,"input",41),h("ngModelChange",function(l){return c(r),f(e.form.isPublished,l)||(e.form.isPublished=l),m(l)}),n(),a(108," Xu\u1EA5t b\u1EA3n"),n()(),t(109,"div",42)(110,"button",43),a(111),n(),t(112,"a",44),a(113,"H\u1EE7y"),n()()()()()()()}o&2&&(d(8),_("ngModel",e.form.title),d(4),_("ngModel",e.form.categoryId),d(3),g("ngForOf",e.categories),d(4),_("ngModel",e.form.excerpt),d(61),k("data-placeholder","Nh\u1EADp n\u1ED9i dung b\xE0i vi\u1EBFt..."),d(15),g("ngIf",e.images.length>0),d(),g("ngIf",e.images.length===0),d(4),_("ngModel",e.form.tags),d(3),_("ngModel",e.form.isFeatured),d(4),_("ngModel",e.form.isPublished),d(3),g("disabled",e.loading||e.uploading),d(),L(" ",e.uploading?"\u0110ang t\u1EA3i \u1EA3nh...":e.loading?"\u0110ang l\u01B0u...":"L\u01B0u"," "))},dependencies:[z,B,N,U,H,ne,Y,$,ee,q,G,Z,Q,X,te,K,J],styles:[`

.upload-area[_ngcontent-%COMP%] {
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
.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.btn-icon[_ngcontent-%COMP%]:hover {
  background: rgba(0,0,0,0.8);
}
.btn-icon.primary[_ngcontent-%COMP%] {
  background: var(--primary);
}
.btn-icon.delete[_ngcontent-%COMP%]:hover {
  background: #dc3545;
}
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
.caption-input[_ngcontent-%COMP%] {
  padding: 4px;
}
.form-control-sm[_ngcontent-%COMP%] {
  padding: 4px 8px;
  font-size: 12px;
}
.no-images[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.text-muted[_ngcontent-%COMP%] {
  color: #6c757d;
}



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

.toolbar-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 2px;
}

.toolbar-divider[_ngcontent-%COMP%] {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
  margin: 0 0.25rem;
}

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
.toolbar-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.toolbar-btn[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
  color: var(--primary);
}
.toolbar-btn[_ngcontent-%COMP%]:active {
  background: #d1d5db;
}

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
.toolbar-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--primary);
}

.editor-content[_ngcontent-%COMP%] {
  min-height: 300px;
  padding: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #374151;
  outline: none;
  overflow-y: auto;
  max-height: 500px;
}

.editor-content[_ngcontent-%COMP%]:empty:before {
  content: attr(data-placeholder);
  color: #9ca3af;
  pointer-events: none;
}

.editor-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  color: #1f2937;
}
.editor-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.875rem 0 0.5rem;
  color: #1f2937;
}
.editor-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.75rem 0 0.5rem;
  color: #1f2937;
}
.editor-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
}
.editor-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .editor-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}
.editor-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin: 0.25rem 0;
}
.editor-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--primary);
  text-decoration: underline;
}
.editor-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0.5rem 0;
}`]})}return p})();export{Ce as ArticleFormComponent};
