(function(_ds){var window=this;var FY=class extends _ds.F{wb(a){const b=this.querySelector("nav");a&&_ds.Ih(this,b,a.querySelector("nav"));b&&(a?(b.hidden=!1,b.removeAttribute("aria-hidden")):(b.hidden=!0,b.setAttribute("aria-hidden","true")))}};FY.prototype.updateContent=FY.prototype.wb;try{window.customElements.define("devsite-footer-linkboxes",FY)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteFooterLinkboxes",a)};})(_ds_www);