(function(_ds){var window=this;var ST=function(){return(0,_ds.T)('<input type="checkbox" class="bookmark-checkbox">')},TT=function(a){let b='<devsite-dropdown-list ellipsis checkboxes fetchingitems="true"';a.Jq&&(b=b+' writable addItemText="'+_ds.VF("New Collection"),b+='"');return(0,_ds.T)(b+'><span class="material-icons bookmark-icon" slot="toggle">bookmark_border</span></devsite-dropdown-list>')},UT=function(a){const b=a.isSignedIn;a=a.mb;let c='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-dialog"><div class="devsite-dialog-contents">';
a&&(c+='<h3 class="no-link">',c=(b?c+"Create a Google Developer Profile to bookmark":c+"Sign in to bookmark")+"</h3>");c+="<p>";c=(b?a?c+"Save your frequently visited pages with a Google Developer Profile.":c+'This account is not eligible for Developer Profiles. <a href="https://developers.google.com/profile/help#i%E2%80%99m_unable_to_create_a_profile_with_my_g_suite_account_why_is_that" target="_blank">Learn more</a>':c+"You need to be signed in to save your frequently visited pages with a Google Developer Profile.")+
"</p>";b&&a&&(c+="<p>Create your Google Developer Profile.",c+="</p>");c+='</div><div class="devsite-dialog-buttons">';c=(b?a?c+'<button class="button-primary create-profile">Create profile':c+'<button class="button-primary change-account">Change account':c+'<button class="button button-primary sign-in-button">Sign in')+'</button><button class="button devsite-dialog-close">Dismiss';return(0,_ds.T)(c+"</button></div></devsite-dialog>")},VT=function(a){var b=a.kb;a='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-create-profile-dialog"><div class="create-profile-spinner"><devsite-spinner size="48"></devsite-spinner></div><div class="devsite-dialog-contents"><h3 class="no-link">Would you like to receive emails regarding new features, events, badges, content, and research opportunities?</h3><input type="checkbox" id="devsite-bookmark-create-profile-email-opt-in"><label for="devsite-bookmark-create-profile-email-opt-in">Yes, sign me up for Google Developer emails.</label><p class="account-note">';
b='By creating a Developer Profile, you agree to the <a href="'+(_ds.Y(_ds.Z(b))+'">Content Policy</a>. Google\'s <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a> apply to your use of this service. The name on your Google Account and the interests you selected will be used in your Google Developer Profile. Your name may appear where you contribute and can be changed at any time.');a=a+b+'</p></div><div class="devsite-dialog-buttons"><button class="button-primary create-profile">Create Profile';
a+='</button><button class="button devsite-dialog-close">';a+="Dismiss";a+="</button></div></devsite-dialog>";return(0,_ds.T)(a)},WT=function(a){a='<devsite-dialog class="devsite-bookmark-dialog" id="devsite-bookmark-error-dialog"><div class="devsite-dialog-contents"><h3 class="no-link">Something went wrong</h3><p>'+(_ds.V(a.error)+'</p></div><div class="devsite-dialog-buttons"><button class="button devsite-dialog-close">');return(0,_ds.T)(a+"Dismiss</button></div></devsite-dialog>")};var XT=function(a){const b=document.body.querySelector(".devsite-page-title,.devsite-playlist-title,.devsite-quiz-title,[layout=docs] .devsite-article h1:first-of-type");let c;const d=null==(c=a.parentElement)?void 0:c.matches("devsite-feature-tooltip");if(!b){if(d){let e;null==(e=a.parentElement)||e.remove()}else a.remove();return!0}if(d){let e;if((null==(e=a.parentElement)?void 0:e.previousElementSibling)!==b){let f;null==(f=b.parentElement)||f.insertBefore(a.parentElement,b.nextSibling);return!0}}else if(a.previousElementSibling!==
b){let e;null==(e=b.parentElement)||e.insertBefore(a,b.nextSibling);return!0}return!1},$T=async function(a){a.H=document.body.querySelector(".devsite-article");var b;null==(b=a.H)||b.setAttribute("has-bookmark","");b=await ZT();a.classList.add("show");let c;(null==(c=a.parentElement)?0:c.matches("devsite-feature-tooltip"))&&a.parentElement.classList.add("inline-block");b?(_ds.N(a,TT,{Jq:a.path?!1:!0}),a.h=a.querySelector("devsite-dropdown-list"),a.h&&(a.h.addItemDisabledTooltipText=_ds.bK)):(a.classList.add("devsite-legacy-bookmark"),
_ds.N(a,ST),a.F=a.querySelector(".bookmark-checkbox"))},gU=async function(a){await ZT()?(a.eventHandler.listen(a,"DropdownToggled",b=>{let c;(null==(c=b.ma)?void 0:c.detail).open&&aU(a)}),a.eventHandler.listen(a,"DropdownAddItem",b=>{a.Rj(b)}),a.eventHandler.listen(a,"DropdownItemToggled",b=>{bU(a,b)}),a.eventHandler.listen(document.querySelector("devsite-collection-list")||document.body,["devsite-collection-created","devsite-collection-deleted"],b=>{b=b.ma;if("devsite-collection-created"===b.type){b=
b.detail;b=cU(a,{description:b.description,isEmailAlertsEnabled:b.isEmailAlertsEnabled,name:b.name,title:b.title});let c;null==(c=a.h)||c.listItems.splice(1,0,b);dU(a)}else a.h&&eU(a,b.detail)})):a.eventHandler.listen(a,"change",()=>{fU(a)})},jU=async function(a){var b=new URL(_ds.G().href);if(b.searchParams.get("bookmark")){var c=await ZT(),d=await _ds.GJ(_ds.HJ);d&&(c?await hU(a,`profiles/${d}/collections/default`,!0):await fU(a));b.searchParams.delete("bookmark");_ds.Rj(b.toString(),!0,!1)}if(await (await _ds.x()).isSignedIn()&&
(c=await a.Y(),null!=c&&c.profileId)){b=a.path||"";if(!b)try{b=await _ds.ip(_ds.G().href)}catch(e){}c=(null==c?void 0:c.profileId)||"";d=new _ds.Eq;try{const e=await d.getPath({path:b,profileId:c});if(null==e?0:e.collections)a.j=new Set([...e.collections,...a.j]);"SAVED"===(null==e?void 0:e.saveStatus)&&a.setAttribute("saved","")}catch(e){}await ZT()&&await iU(a)}},kU=async function(a){if(await ZT()){var b,c=null==(b=a.h)?void 0:b.querySelector(".bookmark-icon");c&&(0<a.j.size?(c.innerText="bookmark",
c.classList.add("toggled")):(c.innerText="bookmark_border",c.classList.remove("toggled")))}else a.F&&(b=(a.F.checked=a.v)?"Remove bookmark":"Add bookmark",a.setAttribute("data-title",b),null==(c=a.F)||c.setAttribute("aria-label",b))},ZT=async function(){return(await _ds.x()).hasMendelFlagAccess("Profiles","enable_profile_collections")},aU=async function(a){var b=await (await _ds.x()).isSignedIn();let c=!0;b&&(c=await a.mb());if(c){const e=await ZT(),f=await a.Y();if(f){e||await lU(a,f);return}}b&&
c&&mU(a,"Callout Profile intro");let d=document.body.querySelector("#devsite-bookmark-dialog");d||(d=_ds.O(UT,{isSignedIn:b,mb:c}),document.body.appendChild(d),(b=d.querySelector(".create-profile"))&&a.eventHandler.listen(b,"click",async()=>{let e;null==(e=d)||e.removeAttribute("open");a.C=await nU(a);a.C.setAttribute("open","")}),(b=d.querySelector(".sign-in-button"))&&a.eventHandler.listen(b,"click",async e=>{e.preventDefault();e.stopPropagation();e=new _ds.rj(_ds.G().href);e.h.add("bookmark",!0);
_ds.Rj(e.toString(),!0,!1);await (await _ds.x()).signIn()}),(b=d.querySelector(".change-account"))&&a.eventHandler.listen(b,"click",async e=>{e.preventDefault();e.stopPropagation();e=new _ds.rj(_ds.G().href);e.h.add("bookmark",!0);_ds.Rj(e.toString(),!0,!1);await (await _ds.x()).changeAccount()}),(b=d.querySelector(".devsite-dialog-close"))&&a.eventHandler.listen(b,"click",()=>{a.toggleAttribute("saved");mU(a,"Callout Profile dismissed")}));a.G=d;d.setAttribute("open","");a.h&&(a.h.displayPopout=
!1)},bU=async function(a,b){let c;b=null==(c=b.ma)?void 0:c.detail;await hU(a,(null==b?void 0:b.value)||"",b.checked)},eU=function(a,b){a.h&&(a.h.listItems=a.h.listItems.filter(c=>c.id!==b.name),a.j.delete(b.name),dU(a))},fU=async function(a){a.toggleAttribute("saved");if(a.v){const b=await _ds.bp("/saved-pages",void 0,void 0,!1,!0);oU(a,"Page saved.","View Saved Pages",b)}else oU(a,"Page unsaved.");a.path||await aU(a)},oU=function(a,b,c,d){a.dispatchEvent(new CustomEvent("devsite-show-custom-snackbar-msg",
{detail:{msg:b,linkText:c,href:null==d?void 0:d.href,showClose:!1},bubbles:!0,composed:!0}))},lU=async function(a,b){if(null==b||!b.profileId)return null;var c=await ZT();const d=c?0<a.j.size:a.v;let e;e=d?"SAVED":"UNSAVED";let f=a.path||"";if(!f)try{f=await _ds.ip(_ds.G().href)}catch(l){}const g=new _ds.Eq;let h=null;const k=[];c?k.push(...a.j):d&&k.push(`profiles/${null==b?void 0:b.profileId}/collections/default`);try{h=await g.Pf({path:f,status:e,profileId:b.profileId,collections:k})}catch(l){a.D=
pU(a,"There was an issue saving the page."),a.D.setAttribute("open",""),a.toggleAttribute("saved")}c||(qU(a),c=document.querySelector("devsite-user#devsite-user"),b=await _ds.bp("/saved-pages",null==b?void 0:b.profileId,null==b?void 0:b.vanityId,!1,!0),a.v&&!window.sessionStorage.getItem("devsite_bookmark_popout_shown")&&(await (null==c?void 0:c.showPopout("view-bookmarked-pages",b)),window.sessionStorage.setItem("devsite_bookmark_popout_shown","true")));return h},mU=function(a,b,c){b=Object.assign({},
{category:"Site-Wide Custom Events",action:b,label:"Saving Widget Callout"},c||{});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}))},nU=async function(a){mU(a,"Callout Profile displayed");var b=document.body.querySelector("#devsite-bookmark-create-profile-dialog");if(!b){b=(await _ds.$o()).href;b=_ds.O(VT,{kb:b});document.body.appendChild(b);var c=b.querySelector(".create-profile");c&&a.eventHandler.listen(c,"click",()=>{a.createProfile()});(c=b.querySelector(".devsite-dialog-close"))&&
a.eventHandler.listen(c,"click",()=>{a.toggleAttribute("saved");mU(a,"Callout Profile dismissed")})}return b},pU=function(a,b){mU(a,"Callout Profile error",{label:"Saving Widget Callout Error"});a=document.body.querySelector("#devsite-bookmark-error-dialog");a||(a=_ds.O(WT,{error:b}),document.body.appendChild(a));return a},qU=function(a){a.ra({category:"Site-Wide Custom Events",action:a.v?"Saving Page to Profile":"Removing Saved Page from Profile",label:"Saving Widget"})},hU=async function(a,b,c){var d=
await a.Y();if(d){c?a.j.add(b):a.j.delete(b);await kU(a);var e=await ZT(),f=a.v;a.v=e?0<a.j.size:!0;f!==a.v&&qU(a);await lU(a,d);a.ra({category:"Site-Wide Custom Events",action:c?"Saving Page to Collection":"Removing Saved Page from Collection",label:"Saving Widget"});var g;if(d=null==(g=a.h)?void 0:g.listItems.find(h=>h.id===b))d.checked=c;if(c){let h;await (null==(h=document.querySelector("#devsite-view-saved-pages"))?void 0:h.showPopout())}a.dispatchEvent(new CustomEvent(c?"devsite-bookmarked-path":
"devsite-unbookmarked-path",{bubbles:!0,composed:!0,detail:{collectionName:b}}))}},iU=async function(a){if(a.h){a.h.fetchingItems=!0;var b=await _ds.IJ();a.h.fetchingItems=!1;b&&(b=b.map(c=>cU(a,c)),b.sort((c,d)=>{let e;if(null==(e=c.id)?0:e.endsWith("default"))return-1;let f;return(null==(f=d.id)?0:f.endsWith("default"))?1:c.updatedDate>d.updatedDate?-1:1}),a.h.listItems=b,dU(a))}},cU=function(a,b){let c,d,e;return{id:null!=(c=b.name)?c:"",title:null!=(d=b.title)?d:"",updatedDate:null!=(e=b.updateTime)?
e:"",checked:!(!b.name||!a.j.has(b.name))}},dU=function(a){a.h&&(a.h.addItemDisabled=20<=a.h.listItems.length)},rU=class extends _ds.F{constructor(){super(["devsite-snackbar","devsite-dialog"]);this.eventHandler=new _ds.H;this.D=this.C=this.G=this.F=this.H=null;this.v=!1;this.h=null;this.j=new Set;this.path=null}static get observedAttributes(){return["saved"]}async connectedCallback(){if(this.getAttribute("path"))this.path=this.getAttribute("path");else if(XT(this))return;await $T(this);await gU(this);
await jU(this);await kU(this)}disconnectedCallback(){_ds.I(this.eventHandler);_ds.Li(this.G);_ds.Li(this.C);_ds.Li(this.D);this.F=null;let a;null==(a=this.H)||a.removeAttribute("has-bookmark")}attributeChangedCallback(a,b,c){"saved"===a&&(this.v=null!==c,kU(this))}async createProfile(){var a=await _ds.AH.getName();if(a){var b,c=null==(b=this.C)?void 0:b.querySelector("#devsite-bookmark-create-profile-email-opt-in");b=!(!c||!c.checked);var d;null==(d=this.C)||d.classList.add("loading");c=new _ds.nz;
d=null;try{await _ds.lz(c,a,b,!0);let f;null==(f=this.C)||f.removeAttribute("open");d=await this.Y();a=null;d&&(await ZT()||(a=await lU(this,d)));mU(this,"Callout Profile created",a&&"SAVED"===a.saveStatus?{yz:"1",Ll:a.type||"UNDEFINED_TYPE"}:void 0)}catch(f){let g;null==(g=this.C)||g.removeAttribute("open");this.D=pU(this,`${f}`);this.D.setAttribute("open","");this.toggleAttribute("saved")}var e;null==(e=this.C)||e.classList.remove("loading")}else null==(c=this.C)||c.removeAttribute("open"),this.D=
pU(this,"There was an issue getting your account information."),this.D.setAttribute("open",""),this.toggleAttribute("saved")}async mb(){if(!await (await _ds.x()).isSignedIn())return!1;const a=new _ds.$y;let b=null;try{b=await a.eb()}catch(e){}let c,d;return"ELIGIBILITY_ELIGIBLE"===(null==(c=b)?void 0:null==(d=c.createProfile)?void 0:d.status)}async Y(){if(!await this.mb())return null;const a=new _ds.nz;let b=null;try{b=await a.Y()}catch(c){}return b}async Rj(a){var b;a={title:(null==(b=a.ma)?void 0:
b.detail).title,isEmailAlertsEnabled:!1};this.h&&(this.h.fetchingItems=!0);try{var c=await _ds.KJ(a)}catch(f){}this.h&&(this.h.fetchingItems=!1);if(c){b=(new _ds.bA("Collection {COLLECTION_TITLE} created.")).format({COLLECTION_TITLE:c.title});oU(this,b);this.ra({ya:"profile: saved pages",action:"collection created",label:window.location.href});c=cU(this,c);var d;null==(d=this.h)||d.listItems.push(c);var e;null==(e=this.h)||_ds.sy(e);dU(this)}else oU(this,"Something went wrong. Collection was not created.")}};try{window.customElements.define("devsite-bookmark",rU)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookmark",a)};})(_ds_www);