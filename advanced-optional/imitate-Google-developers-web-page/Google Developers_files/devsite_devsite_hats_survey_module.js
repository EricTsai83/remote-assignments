(function(_ds){var window=this;var QY=function(a,b,c){return a.h.then(function(d){const e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})},RY=class{constructor(a){this.h=a;a.then((0,_ds.ee)(function(){},this),()=>{},this)}},TY=function(a,b,c){const d=Array(arguments.length-2);for(var e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=SY(a,b).then(function(f){return f.apply(null,d)});return new RY(e)},UY={},SY=function(a,b){var c=UY[b];if(c)return c;c=(c=_ds.Xd(b))?_ds.al(c):(new _ds.Xk(function(d,e){const f=
(new _ds.si(document)).createElement("SCRIPT");f.async=!0;_ds.rd(f,_ds.Gd(_ds.Xc(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){const d=_ds.Xd(b);if(!d)throw Error("Failed to load "+b+" from "+a);return d});return UY[b]=c};var VY=class{constructor(a){this.h=a}v(a){_ds.el(QY(this.h,"requestSurvey",arguments),()=>{},this)}j(a){_ds.el(QY(this.h,"presentSurvey",arguments),()=>{},this)}o(a){_ds.el(QY(this.h,"dismissSurvey",arguments),()=>{},this)}},WY=_ds.Hg("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");_ds.el(SY(WY,"help.service.Lazy.create"),()=>{});var XY=function(){return"devsite-hats-survey"},aZ=function(){if(YY){let a;null==(a=ZY)||a.o({surveyMetadata:{sessionId:YY}});return $Y.promise}return Promise.resolve()},bZ=async function(a){var b=await _ds.x();const c=_ds.z(b.getConfig(),18);var d=a.getAttribute("listnr-id");d?(b={locale:b.getLocale()||"en",apiKey:c},d=TY(WY,"help.service.Lazy.create",d,{apiKey:b.apiKey||b.apiKey,environment:b.environment||b.environment,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||
"en".replace(/-/g,"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window}),ZY=new VY(d),a.h=ZY):console.warn('<devsite-hats-survey> missing attribute "listnr-id"')},eZ=function(a,b){let c;null==(c=a.h)||c.j({productData:{customData:{pageUrl:_ds.G().toString()}},surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:d=>{YY=d.sessionId||
null;$Y=new _ds.yl;cZ=$Y.h},surveyClosed:()=>{YY=dZ=null;cZ()}}})},hZ=class extends _ds.F{constructor(a){super();this.h=null;a&&(this.h=ZY=a)}async connectedCallback(){dZ=this;const a=this.getAttribute("hats-id");a&&a!==fZ&&(await aZ(),this.h||await bZ(this),fZ=a,await this.Bh(a))}disconnectedCallback(){dZ=null;_ds.wl(gZ,document.body,"devsite-page-changed",()=>{dZ||(aZ(),fZ=null)})}async Bh(a){await _ds.x();let b;null==(b=this.h)||b.v({triggerId:a,callback:c=>{c.surveyData&&eZ(this,c.surveyData)},
authuser:0,enableTestingMode:!1})}};hZ.prototype.renderSurvey=hZ.prototype.Bh;hZ.prototype.disconnectedCallback=hZ.prototype.disconnectedCallback;hZ.prototype.connectedCallback=hZ.prototype.connectedCallback;hZ.closeCurrentSurvey=aZ;hZ.getTagName=XY;var fZ=null,YY=null,dZ=null,$Y=new _ds.yl,cZ=$Y.h,gZ=new _ds.H,ZY=void 0;try{window.customElements.define(XY(),hZ)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);
