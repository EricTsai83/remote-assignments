(function(_ds){var window=this;var FZ=_ds.iy(['.info-icon,.popout{text-transform:none;word-wrap:normal}:host{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.info-icon{font:16px/1 Material Icons;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color:var(--devsite-secondary-text-color);cursor:pointer}.popout{background:var(--devsite-card-background);border-radius:var(--devsite-card-border-radius);box-shadow:0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);color:var(--devsite-primary-text-color);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;padding-block:16px;padding-inline:14px;pointer-events:auto;white-space:normal;z-index:1}.popout .header{font:normal 500 14px/20px var(--devsite-primary-font-family);-webkit-margin-after:8px;margin-block-end:8px}.popout .body{font:normal 400 14px/20px var(--devsite-primary-font-family)}.popout .body :link,.popout .body :visited{color:var(--devsite-link-color);outline:0;-webkit-text-decoration:var(--devsite-link-text-decoration,none);-moz-text-decoration:var(--devsite-link-text-decoration,none);text-decoration:var(--devsite-link-text-decoration,none);word-break:break-word}']);var GZ=class extends _ds.Cy{},HZ=_ds.II(GZ),IZ=class extends HZ{constructor(){super(...arguments);this.body=this.header="";this.bodyHtml=_ds.Ox}static get styles(){return[_ds.JI,FZ]}render(){return(0,_ds.Q)`
        <div class="info-icon material-icons parent"
            @mouseover="${this.showPopout}"
            @mouseout="${this.hidePopout}"
            @click="${this.toggle}">
          info_outline
          <div class="popout"
              ?hidden="${!this.displayPopout}" ${(0,_ds.HI)(this.popout)}>
            ${_ds.qp(0<this.header.length,()=>(0,_ds.Q)`<div class="header">${this.header}</div>`)}
            ${_ds.qp(0<this.body.length,()=>(0,_ds.Q)`<div class="body">${this.body}</div>`)}
            ${_ds.qp(this.bodyHtml!==_ds.Ox,()=>(0,_ds.Q)`<div class="body">${this.bodyHtml}</div>`)}
          </div>
        </div>`}toggle(){super.togglePopout()}};_ds.A([_ds.M({type:String,ea:!0}),_ds.C(Object)],IZ.prototype,"header",void 0);_ds.A([_ds.M({type:String,ea:!0}),_ds.C(Object)],IZ.prototype,"body",void 0);_ds.A([_ds.M({type:_ds.Q,ea:!1}),_ds.C(Object)],IZ.prototype,"bodyHtml",void 0);try{window.customElements.define("devsite-info-popout",IZ)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteInfoPopout",a)};})(_ds_www);