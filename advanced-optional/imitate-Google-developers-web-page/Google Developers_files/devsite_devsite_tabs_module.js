(function(_ds){var window=this;var z7=function(a){const b=a.Hk;let c='<div class="dropdown-tabbed-menu"><ul class="dropdown-tabbed-menu-list">';a=a.columns;const d=a.length;for(let e=0;e<d;e++){const f=a[e];c+='<li class="dropdown-tabbed-menu-list-item"><a href="#" column-id="'+_ds.Y(f.Wp)+'" tabindex="0" track-type="nav" track-name="'+_ds.Y(f.text)+'" track-metadata-eventdetail="#" track-metadata-position="nav - '+_ds.Y(b)+'" track-metadata-module="secondary nav">'+_ds.V(f.text)+"</a></li>"}return(0,_ds.T)(c+"</ul></div>")},A7=
function(a){const b=a.Hk,c=a.href;a=a.text;return(0,_ds.T)('<div class="dropdown-tabbed-menu-button"><a href="'+_ds.Y(_ds.Z(c))+'" track-type="nav" track-name="'+_ds.Y(a)+'" track-metadata-eventdetail="'+_ds.Y(c)+'" track-metadata-position="nav - '+_ds.Y(b)+'" track-metadata-module="secondary nav">'+_ds.V(a)+"</a></div>")};var B7=function(a){a.fc=Array.from(a.querySelectorAll("tab"));let b=a.querySelector(".devsite-tabs-wrapper");if(!b){b=a.ownerDocument.createElement("div");b.classList.add("devsite-tabs-wrapper");a.appendChild(b);var c;null==(c=a.fc)||c.forEach(e=>{let f;return null==(f=b)?void 0:f.appendChild(e)})}a.v=b;a.appendChild(b);if(!a.hasAttribute("no-overflow")){c=a.ownerDocument.createElement("tab");_ds.D(a,"overflow-tab","",c);var d=a.ownerDocument.createElement("a");_ds.Vh(d,"#");d.textContent="More";
d.classList.add("devsite-icon");d.classList.add("devsite-icon-arrow-drop-down");c.appendChild(d);a.h=c;d=a.ownerDocument.createElement("div");d.classList.add("devsite-tabs-overflow-menu");_ds.D(a,"scrollbars","",d);_ds.D(a,"hidden","",d);a.D=d;c.appendChild(d);b.appendChild(c)}},F7=function(a){let b;null==(b=a.fc)||b.forEach(async(c,d)=>{if(await C7(c)){var e=Array.from(c.querySelectorAll(".devsite-tabs-dropdown-column")),f=c.querySelector(".devsite-tabs-dropdown"),g=c.querySelector("a");e.forEach((h,
k)=>{_ds.D(a,"column-id",`tab-${d}-column-${k}`,h)});e=e.map(h=>{const k=h.querySelector(".devsite-nav-title")||h.querySelector(".devsite-nav-item-title");return{Wp:h.getAttribute("column-id"),text:null==k?void 0:k.textContent}});g&&(g=_ds.O(z7,{Hk:(g.textContent||"").toLowerCase().trim(),columns:e}),f&&(e=c.querySelector(".devsite-tabs-dropdown-content")))&&(f.insertBefore(g,e),f=c.querySelector(".dropdown-tabbed-menu a"),D7(c),a.eventHandler.listen(g,"click",h=>{h.preventDefault();const k=c.querySelector(".dropdown-tabbed-menu-button");
h=h.target;k&&h.tagName&&"a"===h.tagName.toLowerCase()&&!k.contains(h)&&E7(a,c,(null==h?void 0:h.getAttribute("column-id"))||"")}),f&&E7(a,c,f.getAttribute("column-id")||""))}})},G7=function(a,b){if(!b)return 0;const c=[];let d=b;for(;d.parentElement&&0===d.offsetWidth;)c.push(d),_ds.D(a,"render-hidden","",d),d=d.parentElement;a=_ds.Ol(b).width;for(const e of c)e.removeAttribute("render-hidden");return a},O7=function(a){a.eventHandler.listen(document.body,"devsite-sticky-resize",()=>a.G.Ba());a.eventHandler.listen(a,
"click",c=>{if(!(c.shiftKey||c.ctrlKey||c.metaKey||c.altKey)){var d=c.target,e=a.C(d);if(e)if(e===a.h)H7(a,c);else if(I7(a),d.classList.contains("devsite-tabs-dropdown-toggle"))c.preventDefault(),c.stopPropagation(),e.hasAttribute("dropdown--open")?J7(a):K7(a,e);else{var f;"A"===d.tagName?f=d:f=_ds.bj(d,"A");var g=e.querySelector(".devsite-tabs-dropdown");g&&g.contains(d)?f&&f.hasAttribute("href")||(c.preventDefault(),c.stopPropagation()):(a.K(e),f&&f&&"#"!==f.href||a.G.Ba())}}});if(a.querySelector("tab[dropdown]")||
a.querySelector("tab[overflow-tab]")){var b="onpointermove"in window?"pointerover":"mouseover";const c="onpointermove"in window?"pointerleave":"mouseleave",d=a.querySelectorAll("tab[clickable]");if(d.length){for(const e of d)a.eventHandler.listen(e,"click",f=>{const g=f.target,h=a.C(g),k=null==h?void 0:h.querySelector(".devsite-tabs-dropdown");if(k){let l;(null==(l=a.h)?0:l.contains(g))||k.contains(g)||(f.preventDefault(),f.stopPropagation(),(null==h?0:h.hasAttribute("dropdown--open"))?J7(a):L7(a,
f))}});a.eventHandler.listen(document.body,"click",e=>{a.v&&!a.v.contains(e.target)&&J7(a)})}else a.eventHandler.listen(a,b,e=>void M7(a,e)),a.eventHandler.listen(a,c,()=>void N7(a))}b=[...a.querySelectorAll(".devsite-tabs-close-button")];for(const c of b)a.eventHandler.listen(c,"click",()=>J7(a))},P7=function(a){_ds.D(a,"hidden","",a.h);if(!(a.fc&&3>a.fc.length)){var b=G7(a,a);if(0!==b){var c,d=(null==(c=a.fc)?void 0:c.slice())||[],e=0,f;d.forEach(k=>{k.parentNode!==a.v&&(f?f.parentNode&&f.parentNode.insertBefore(k,
f.nextSibling):_ds.Ki(a.v,k,0));f=k;e+=G7(a,k)});if(!(e<=b)){c=a.M;var g;null==(g=a.h)||g.removeAttribute("hidden");(g=a.querySelector("[active]"))&&(c+=G7(a,g));for(var h;null==(h=d)?0:h.length;){const k=d.shift();if(k===g)continue;const l=G7(a,k||null);if(c+l<=b)c+=l;else{let m;null==(m=a.D)||m.appendChild(k)}}}}}},M7=async function(a,b){(await _ds.x()).isTouchEnabled()||L7(a,b)},N7=async function(a){(await _ds.x()).isTouchEnabled()||J7(a,300)},J7=function(a,b=0){_ds.I(a.j);window.clearTimeout(a.F);
const c=a.querySelector("tab[dropdown--open]");if(c){const d=c.querySelector(".devsite-tabs-dropdown");_ds.D(a,"dropdown-transition","",d);_ds.wl(a.j,d,_ds.Sf,()=>{null==d||d.removeAttribute("dropdown-transition");a.removeAttribute("dropdown--open");_ds.D(a,"hidden","",d)});a.F=window.setTimeout(()=>{c.removeAttribute("dropdown--open");Q7(a,c)},b)}else a.removeAttribute("dropdown--open");I7(a)},L7=function(a,b){const c=b.target,d=a.C(c);if(d){let e;d===a.h||(null==(e=a.h)?0:e.contains(c))?H7(a,b):
K7(a,d)}},H7=async function(a,b){b.preventDefault();b.stopPropagation();document.body.dispatchEvent(new CustomEvent("devsite-close-overflow-tabs"));await _ds.fk();if(!a.hasAttribute("overflow-menu--open")){b=await _ds.x();await b.whenReady();if(b.isTouchEnabled()){const d=e=>{a.contains(e.target)||I7(a);_ds.xl(a.j,document.body,["devsite-close-overflow-tabs","click"],d)};a.j.listen(document.body,["devsite-close-overflow-tabs","click"],d)}var c;null==(c=a.D)||c.removeAttribute("hidden");_ds.D(a,"overflow-menu--open",
"")}},K7=async function(a,b){I7(a);if(b.hasAttribute("dropdown")){if(_ds.I(a.j),window.clearTimeout(a.F),!b.hasAttribute("dropdown--open")){(await _ds.x()).isTouchEnabled()&&_ds.wl(a.j,document.body,"click",g=>{a.contains(g.target)||J7(a)});var c=a.querySelector("tab[dropdown--open]"),d=b.querySelector(".devsite-tabs-dropdown");if(d){d.removeAttribute("hidden");_ds.Cl(d,"left","");var e=_ds.zi(window||window),f=Array.from(d.querySelectorAll(".devsite-tabs-dropdown-column"));if(!b.hasAttribute("dropdown-full")&&
1<f.length){const g=[];f.forEach(k=>{g.push(k.scrollWidth)});const h=Math.max.apply(null,g);h*f.length<e.width?f.forEach(k=>{_ds.Cl(k,"width",`${h}px`)}):_ds.D(a,"dropdown-full","",b)}f=d.getBoundingClientRect();b.hasAttribute("dropdown-full")?_ds.Cl(d,"left",`-${f.left}px`):(e=Math.min(f.left,f.left+f.width-e.width),0<e&&_ds.Cl(d,"left",`-${e}px`));c?(c.removeAttribute("dropdown--open"),Q7(a,c),c=c.querySelector(".devsite-tabs-dropdown"),null==c||c.removeAttribute("dropdown-transition"),_ds.D(a,
"hidden","",c)):(_ds.D(a,"dropdown-transition","",d),_ds.wl(a.j,d,_ds.Sf,()=>d.removeAttribute("dropdown-transition")));window.requestAnimationFrame(()=>{_ds.D(a,"dropdown--open","");_ds.D(a,"dropdown--open","",b);Q7(a,b)})}else c&&(c.removeAttribute("dropdown--open"),Q7(a,c))}}else J7(a)},Q7=function(a,b){_ds.D(a,"aria-expanded",`${b.hasAttribute("dropdown--open")}`,b.querySelector(".devsite-tabs-dropdown-toggle"))},I7=function(a){_ds.D(a,"hidden","",a.D);a.removeAttribute("overflow-menu--open")},
C7=async function(a){return(await _ds.x()).isTouchEnabled()||!a.hasAttribute("generated-tab-menu")?!1:!0},D7=function(a){var b=a.querySelector(".dropdown-tabbed-menu-button-target");if(!a.querySelector(".dropdown-tabbed-menu-button")&&b){var c=a.querySelector("a");c&&(c=c.textContent,b=b.querySelector(".devsite-nav-item a"),a=a.querySelector(".dropdown-tabbed-menu"),b&&(c=_ds.O(A7,{Hk:(c||"").toLowerCase().trim(),href:b.getAttribute("href")||"",text:b.textContent||""}),null==a||a.appendChild(c)))}},
E7=function(a,b,c){var d=Array.from(b.querySelectorAll(".devsite-tabs-dropdown-column"));b=Array.from(b.querySelectorAll(".dropdown-tabbed-menu a"));b.forEach(e=>e.removeAttribute("active"));d.forEach(e=>_ds.D(a,"hidden","",e));b=b.find(e=>e.getAttribute("column-id")===c);d=d.find(e=>e.getAttribute("column-id")===c);b&&d&&(_ds.D(a,"active","",b),d.removeAttribute("hidden"))},R7=class extends _ds.F{constructor(){super();this.eventHandler=new _ds.H;this.j=new _ds.H;this.G=new _ds.sl(()=>{P7(this)},
20);this.J=null;this.H=!1;this.F=0;this.D=this.h=null;this.M=0;this.fc=[];this.v=null;_ds.Fh(this,this.o`active`,this.o`aria-expanded`,this.o`aria-selected`,this.o`collapsed`,this.o`column-id`,this.o`connected`,this.o`dropdown`,this.o`dropdown-full`,this.o`dropdown--open`,this.o`dropdown-transition`,this.o`hidden`,this.o`no-overflow`,this.o`overflow-menu--open`,this.o`overflow-tab`,this.o`render-hidden`,this.o`scrollbars`)}disconnectedCallback(){_ds.I(this.eventHandler);_ds.I(this.j)}connectedCallback(){this.H||
(B7(this),this.H=!0);_ds.D(this,"connected","");if(!this.hasAttribute("no-overflow")){_ds.D(this,"collapsed","",this.h);this.M=G7(this,this.h);var a;null==(a=this.h)||a.removeAttribute("collapsed");O7(this);P7(this)}F7(this)}C(a){for(;a&&a!==this;){if("TAB"===a.tagName.toUpperCase())return a;a=a.parentElement}return null}K(a){const b=this.J||this.querySelector("[active]");b&&(b.removeAttribute("active"),_ds.D(this,"aria-selected","false",b));_ds.D(this,"active","",a);_ds.D(this,"aria-selected","true",
a);this.J=a}};R7.prototype.connectedCallback=R7.prototype.connectedCallback;R7.prototype.disconnectedCallback=R7.prototype.disconnectedCallback;try{window.customElements.define("devsite-tabs",R7)}catch(a){console.warn("devsite.app.customElement.DevsiteTabs",a)};})(_ds_www);
