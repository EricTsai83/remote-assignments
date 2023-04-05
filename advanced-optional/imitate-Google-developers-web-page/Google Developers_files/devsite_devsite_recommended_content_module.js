(function(_ds){var window=this;var A4=async function(a){a.Hf=!0;v4(a,!1);var b=await _ds.x(),c=window.location.pathname;const d=b.getTenantId()||0;a.Ua=[];b=a.query;var e=w4(a,a.query),f=null;if(a.h.has(b))f=a.h.get(b);else{c=_ds.NO(_ds.Kr(d,c),100);c=_ds.kc(c,7,2,0);c=_ds.kc(c,2,a.o?13:12,0);c=_ds.OO(c,b);for(var g of e)_ds.xf(c,3,_ds.Ir,g);try{f=await _ds.Lr(c)}catch(h){x4(`Error fetching recommendations: ${"devsite-recommended-content"} ${h.message}`)}f&&a.h.set(b,f)}if(a.o&&f){g=_ds.WO(f);if(4<g.length){if(e=g.shift())c=y4(e),
c=z4(a,c),a.dispatchEvent(new CustomEvent("devsite-recommended-hero",{detail:{data:e,image:c,imagePath:a.X},bubbles:!0,composed:!0}));_ds.Bc(f,1,g);a.h.set(b,f)}a.o=!1}if(a.query===b){if(f){b=_ds.WO(f);for(const h of b)b=a,f=h,g=_ds.sf(f,_ds.Nr,10),g={experiment:null==g?void 0:_ds.z(g,7),targetDescriptionWords:null==g?void 0:_ds.yf(g,6),targetIdenticalDescriptions:null==g?void 0:_ds.yf(g,4),targetPage:f.getUrl(),targetRank:null==g?void 0:_ds.yf(g,2),targetTitleWords:null==g?void 0:_ds.yf(g,5),targetType:null==
g?void 0:_ds.Ef(g,3)},f={category:"Site-Wide Custom Events",action:"devsite-recommended-content impression",label:f.getUrl(),nonInteraction:!0,additionalParams:{recommendations:g}},b.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:f,bubbles:!0})),a.Ua.push(y4(h))}a.Hf=!1}},B4=async function(a){a.o="dispatchfirst"===a.getAttribute("dispatch-first");a.Z="saveonprompt"===a.getAttribute("display-cta")},C4=async function(a){a.Gf=!0;a.isSignedIn=await (await _ds.x()).isSignedIn();
let b=[];a.j=(a.getAttribute("exclude")||"").split(",");if(a.isSignedIn){var c=new _ds.$y;let e=null;try{e=await c.eb()}catch(h){}let f,g;a.mb="ELIGIBILITY_ELIGIBLE"===(null==(f=e)?void 0:null==(g=f.createProfile)?void 0:g.status);if(a.mb){c=new _ds.nz;try{if(a.profile=await c.Y(),a.profile&&!a.query){var d;let h;b=(null==(d=await c.Jd({profileId:a.profile.profileId||""}))?void 0:null==(h=d.interests)?void 0:h.map(k=>{const [,l,...m]=k.nodeId.toLowerCase().split("-");return`${l}:${m}`}))||[]}}catch(h){x4(`Error fetching profile: ${"devsite-recommended-content"} ${h.message}`)}}}a.xa=
b.filter(e=>a.j.includes(e));d=new _ds.ez;a.filters=[];try{a.N=(await _ds.cz(d)).map(e=>{const [,f,...g]=e.id.toLowerCase().split("-");return{id:e.id,label:e.displayName,query:`${f}:${g}`}}),a.filters=a.N.filter(e=>!a.j.includes(e.query)).sort((e,f)=>b.includes(e.query)&&!b.includes(f.query)?-1:!b.includes(e.query)&&b.includes(f.query)?1:e.label.localeCompare(f.label))}catch(e){x4(`Error fetching filters: ${"devsite-recommended-content"} ${e.message}`)}a.query||(a.query=b.filter(e=>!a.j.includes(e)).join(","));
a.Ra.Ba();a.Gf=!1},D4=function(a){const b=new Map;_ds.To.forEach((c,d)=>{b.set(c,d)});_ds.cp.forEach((c,d)=>{(d=b.get(d))&&a.ob.set(c,d)})},E4=function(a,b,c){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:`${"devsite-recommended-content"} ${b}`,label:c},bubbles:!0,composed:!0}))},F4=function(a,b,c,d){d=new URL(d,document.location.origin);b&&(d.search=b);return(0,_ds.Q)`
        <a href="${d.href}"
           @click="${()=>void E4(a,"click",`Title: ${c}`)}">${c}
        </a>
      `},G4=function(a,b){try{return(new URL(b)).href}catch(c){return`${a}${b}`}},H4=function(a,b,c,d,e){let f;var g=b.getName();g?(b=e?e:void 0,f=(0,_ds.Q)`<span
        class="material-icons"
        aria-hidden="true"
        foreground="${null!=b?b:_ds.Ox}">${g}</span>`):b.getPath()&&(g=G4(d,b.getPath()),a.X||(a.X=g),a=(0,_ds.Q)`
        <img src="${g}" alt="">`,f=_ds.z(b,7)?(0,_ds.Q)`
          <picture>
            <source
              srcset="${G4(d,_ds.z(b,7))}"
              media="(prefers-color-scheme: dark)"
              class="devsite-dark-theme"
              alt="">
            ${a}
          </picture>`:a);return(0,_ds.Q)`<div class="devsite-recommended-content-item-icon"
                   aria-label="${c}"
                   data-title="${c}">${f}</div>`},z4=function(a,b){const c=b.ck,d=b.projectName,e=b.gs;var f=b.Xs;const g=b.Lh,h=b.Ys;b=b.url;let k;if((null==c?0:c.getName())||(null==c?0:c.getPath()))f=new URL(b),k=(0,_ds.Q)`${H4(a,c,d,`${f.protocol}//${f.hostname}`,e)}`;else if(null==f?0:f.getPath())k=(0,_ds.Q)`${H4(a,f,h,`${a.staticPath}/${g}`)}`;return k},I4=function(a){if(0===a.length)return(0,_ds.Q)``;const b=(0,_ds.Q)`
        <div class="devsite-recommended-content-item-product-tag">
          ${a[0]}
        </div>
      `;a=a.slice(1);let c=(0,_ds.Q)``;0<a.length&&(c=(0,_ds.Q)`
          <devsite-rich-tooltip allow-overflow material-icon="more_horiz">
            <ul slot="text">
              ${a.map(d=>(0,_ds.Q)`<li>${d}</li>`)}
            </ul>
          </devsite-rich-tooltip>
        `);return(0,_ds.Q)`
        ${b}
        ${c}
      `},x4=function(a=""){_ds.jk(a)},w4=function(a,b){b=new Set(b.toLowerCase().split(",").filter(d=>d));const c=[];for(const d of a.oa)if(0===b.size)c.push(_ds.Gr(_ds.Hr(new _ds.Ir,d.rd),d.Pe));else for(const e of d.xe)if(b.has(e.toLowerCase())){c.push(_ds.Gr(_ds.Hr(new _ds.Ir,d.rd),d.Pe));break}return c},v4=function(a,b){let c;null==(c=a.Ja)||c.classList.toggle("hidden",!b)},y4=function(a){let b,c,d;return{description:_ds.z(a,5),Ll:null==a?void 0:null==(b=_ds.sf(a,_ds.TO,18))?void 0:_ds.z(b,2),
lq:null==a?void 0:null==(c=_ds.sf(a,_ds.TO,18))?void 0:c.getId(),Wr:_ds.tf(a,_ds.RO,17).map(e=>e.getTitle()),lastModified:(null==a?void 0:null==(d=_ds.sf(a,_ds.iF,7))?void 0:d.getSeconds())||0,ck:_ds.sf(a,_ds.gF,14),projectName:_ds.z(a,3),gs:_ds.z(a,15),qs:_ds.z(a,8),Xs:_ds.sf(a,_ds.gF,13),Lh:_ds.z(a,4),Ys:_ds.z(a,12),title:a.getTitle()||_ds.z(a,3)||_ds.z(a,4),url:a.getUrl()}},J4=function(a){const b=a.query.split(",");return(0,_ds.Q)`
        <form class="devsite-recommended-content-filters"
              @change="${a.Zh}"
              role="list">
          ${a.filters.map(c=>{const d=c.label;c=c.query;const e=b.includes(c),f=c.replaceAll(/[:_]/g,"-");return(0,_ds.Q)`
            <div class="devsite-recommended-content-filters-item"
                 role="listitem">
              <input type="checkbox"
                     name="query"
                     value="${c}"
                     id="${f}"
                     @change="${g=>{let h;g=(null==(h=g.target)?0:h.checked)?"selected":"deselected";E4(a,`filter ${g}`,`Filter caption: ${d}`)}}"
                     .checked="${e}">
              <label for="${f}">${d}</label>
            </div>`})}
        </form>`},K4=function(a){v4(a,0===a.Ua.length);return 0===a.Ua.length?(0,_ds.Q)``:(0,_ds.Q)`
      <devsite-carousel data-items-per-slide="${a.carousel}" data-content-type="recommendations">
        <div class="devsite-recommended-content-list" role="list">
        ${a.Ua.map(b=>{const c=b.description,d=b.Ll,e=b.lq,f=b.Wr,g=b.qs,h=b.title,k=b.url;b=z4(a,b);return(0,_ds.Q)`
        <div class="devsite-recommended-content-item" role="listitem">
        <p class="devsite-recommended-content-item-doc-type
                  devsite-recommended-content-item-doc-type-${e}">
            ${d}
          </p>
          <h3 class="devsite-recommended-content-item-heading" tooltip>
            ${F4(a,g,h,k)}
          </h3>
          <p class="devsite-recommended-content-item-description">
            ${c}
          </p>
          <div class="devsite-recommended-content-item-products">
            ${b}
            ${I4(f)}
          </div>
        </div>
      `})}
        </div>
      </devsite-carousel>
      ${a.Bh()}
      `},L4=function(){const a=Array(4).fill(" ");return(0,_ds.Q)`
        <ul class="skeleton-list">
          ${a.map(()=>(0,_ds.Q)`
            <li class="skeleton-item">
              <div class="skeleton-item-heading">
                <div></div>
                <div></div>
              </div>
              <div class="skeleton-item-text">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="skeleton-item-icon"></div>
            </li>`)}
    </ul>
    `},M4=function(a){a=a.Xc.map(b=>({Qs:(0,_ds.YO)({width:`${b}px`})}));return(0,_ds.Q)`
        <div class="skeleton-filters-header">
        </div>
        <ul class="skeleton-filters">
          ${a.map(b=>(0,_ds.Q)`
            <li class="skeleton-item" style="${b.Qs}">
              <div class="skeleton-filter-item"></div>
            </li>`)}
        </ul>
    `},N4=function(a){if(a.Z&&a.mb&&!a.profile){const b=_ds.ck(_ds.Yj("/profile/u/me/new").href);return(0,_ds.Q)`<a href="${b}"
        @click="${()=>void E4(a,"click","Create Profile")}"
        class="button devsite-recommended-content-cta"
        aria-label="${"Get personalized content recommendations with a Google Developer profile"}"
        data-title="${"Get personalized content recommendations with a Google Developer profile"}">
          <span class="material-icons">account_circle</span>${"Create Profile"}
        </a>`}return(0,_ds.Q)``},O4=async function(a){E4(a,"click","Save Interest To Profile");a.Sg=!0;const b=a.query.split(","),c=a.N.filter(e=>b.includes(e.query)||a.xa.includes(e.query)).map(e=>e.id),d=new _ds.nz;try{let e;await d.Te({profileId:null==(e=a.profile)?void 0:e.profileId,nodeIds:c})}catch(e){}a.dispatchEvent(new CustomEvent("devsite-show-custom-snackbar-msg",{detail:{msg:"Interests saved to your profile.",linkText:"View settings",href:_ds.Yj("/profile/u/me/settings#account").href,
showClose:!1},bubbles:!0,composed:!0}));a.Sg=!1},P4=function(a){return a.zk&&a.profile&&a.Z?a.Sg?(0,_ds.Q)`<button disabled
          class="button devsite-recommended-content-cta">
        <devsite-spinner size="20"></devsite-spinner>${"Save Interests to Profile"}
      </button>`:(0,_ds.Q)`<button
        class="button devsite-recommended-content-cta" @click="${()=>void O4(a)}">
          <span class="material-icons">account_circle</span>${"Save Interests to Profile"}
        </button>`:(0,_ds.Q)``},Q4=class extends _ds.Cy{gb(){return this}constructor(a=100){super(["devsite-carousel","devsite-feature-tooltip","devsite-info-popout","devsite-rich-tooltip"]);this.wc=a;this.query=this.carousel="";this.profile=this.Ja=null;this.staticPath="";this.Z=this.o=this.mb=this.isSignedIn=!1;this.X="";this.h=new Map;this.j=[];this.xa=[];this.N=[];this.Xc=Array(28).fill(" ").map(()=>Math.floor(171*Math.random()+30));this.filters=[];this.Ua=[];this.Hf=this.Gf=!0;this.Sg=this.zk=
!1;this.oa=[];this.ob=new Map;this.Ra=new _ds.sl(()=>{A4(this)},this.wc)}connectedCallback(){super.connectedCallback();B4(this);if(this.hasAttribute("fallback")){var a=this.getAttribute("fallback");a&&(this.Ja=document.querySelector(a))}this.getStaticPath();C4(this);D4(this);a=new Date;var b=this.querySelector(".ctable");if(null!==b){b=b.getElementsByTagName("tr");for(const k of b){b=k.querySelector(".rc-expiry");let l;if(null==(l=b)?0:l.textContent){var c=b.textContent.split("-");b=Number(c[2]);
if(isNaN(b))continue;var d=Number(c[0]);if(isNaN(d))continue;c=Number(c[1]);if(isNaN(c))continue;if(new Date(Math.floor(b),Math.floor(d)-1,Math.floor(c))<a)continue}else continue;var e=void 0;b=k.querySelector(".rc-title");let m;if(null==(m=b)?0:m.textContent)e=b.textContent;else continue;var f=void 0;b=k.querySelector(".rc-description");let n;if(null==(n=b)?0:n.textContent)f=b.textContent;else continue;b=k.querySelector(".rc-url");let q;if(null==(q=b)?0:q.textContent)c=b.textContent;else continue;
var g=void 0;b=k.querySelector(".rc-entities");let r;if(null==(r=b)?0:r.textContent){g=b.textContent;b=this.oa;d=b.push;c.startsWith("https://")||c.startsWith("http://")||(c=`https://${c}`);var h=new URL(c);let w=this.ob.get(h.host);h=h.pathname;w||(h=c,w="0");d.call(b,{Pe:w,rd:h,title:e,description:f,xe:g.split(","),ez:!1})}}}}update(a){a.has("query")&&this.Od&&this.Ra.Ba();super.update(a)}fb(a){return a.has("loadingFilters")?a.get("loadingFilters")!==this.Gf:a.has("loadingRecommendations")?a.get("loadingRecommendations")!==
this.Hf:!0}async getStaticPath(){this.staticPath=(await _ds.x()).getStaticPath()}Zh(){this.query=(new FormData(this.Bq)).getAll("query").join(",");this.zk=!0}Bh(){if(0===this.Ua.length)return(0,_ds.Q)``;const a=this.getAttribute("hatsid"),b=this.getAttribute("listnrid");return a&&b?(0,_ds.Q)`
        <devsite-hats-survey class="nocontent"
                hats-id="${a}"
                listnr-id="${b}">
        </devsite-hats-survey>
      `:(0,_ds.Q)``}render(){return(0,_ds.Q)`
      ${_ds.qp(this.Gf,()=>M4(this),()=>0===this.filters.length?(0,_ds.Q)`
          <div class="devsite-recommended-content-filters-spacer"></div>
      `:(0,_ds.Q)`
      <div class="devsite-recommended-content-header">
        <h2 class="devsite-recommended-content-heading
                    devsite-recommended-content-filters-heading">
          ${(0,_ds.Q)`
        <span class="devsite-recommended-content-heading-label">
          ${this.profile?"Based on your Developer Profile interests":"Select interests to filter"}
        </span>`}
          <devsite-info-popout
              .bodyHtml="${this.profile?(0,_ds.Q)`${(0,_ds.wA)(_ds.yh.h('To remove interests from your profile visit <a href="/profile/u/me/settings#account">profile settings</a>.'))}`:(0,_ds.Q)`${"Refine recommendations shown by selecting filters."}`}"></devsite-info-popout>
        </h2>
        <div>
          ${N4(this)}
          ${P4(this)}
        </div>
      </div>
      <div class="devsite-recommended-content-filters-wrapper">
        ${(0,_ds.Q)`
      <devsite-feature-tooltip
        ack-key="AckDevCenterTooltipDismiss"
        localstorage-fallback
        analytics-category="Site-Wide Custom Events"
        analytics-action-show="Developer Center feature tooltip displayed"
        analytics-action-close="Developer Center feature tooltip dismissed"
        analytics-label="Developer Center feature tooltip"
        close-button-text="${"Got it"}">
        <span slot="popout-heading">
          ${"Get recommendations"}
        </span>
        <span slot="popout-contents">
          ${this.profile?(0,_ds.Q)`${'Select interests to get personalized recommendations. Click "Save Interests to Profile" to store your preferences.'}`:(0,_ds.Q)`${"Select interests to get personalized recommendations. Create a profile to save your interests."}`}
        </span>
      </devsite-feature-tooltip>`}
        <devsite-carousel data-items-per-slide="auto"
                          data-content-type="filters">
          ${J4(this)}
        </devsite-carousel>
      </div>`)}
      ${_ds.qp(this.Hf,()=>L4(),()=>K4(this))}
    `}};_ds.A([_ds.M({type:String,ea:"carousel"}),_ds.C(Object)],Q4.prototype,"carousel",void 0);_ds.A([_ds.M({type:String,ea:"query",Ea:!0}),_ds.C(Object)],Q4.prototype,"query",void 0);_ds.A([_ds.op("form"),_ds.C(HTMLFormElement)],Q4.prototype,"Bq",void 0);_ds.A([_ds.pp(),_ds.C(Array)],Q4.prototype,"filters",void 0);_ds.A([_ds.pp(),_ds.C(Array)],Q4.prototype,"Ua",void 0);_ds.A([_ds.pp(),_ds.C(Object)],Q4.prototype,"Gf",void 0);_ds.A([_ds.pp(),_ds.C(Object)],Q4.prototype,"Hf",void 0);
_ds.A([_ds.pp(),_ds.C(Object)],Q4.prototype,"zk",void 0);_ds.A([_ds.pp(),_ds.C(Object)],Q4.prototype,"Sg",void 0);try{window.customElements.define("devsite-recommended-content",Q4)}catch(a){console.warn("devsite.app.customElement.DevsiteRecommendedContent",a)};})(_ds_www);
