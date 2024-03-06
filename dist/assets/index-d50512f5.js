var p=Object.defineProperty;var u=(s,o,t)=>o in s?p(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t;var d=(s,o,t)=>(u(s,typeof o!="symbol"?o+"":o,t),t);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){setTimeout(()=>{this.render()})}render(){var r,e;const o=document.createElement("a");o.href=`#${this.getAttribute("target")||"tab-0"}`,o.innerHTML=this.innerHTML||"",o.classList.add("button",this.getAttribute("type")||"white");const t=document.createElement("style");t.textContent=`
      .button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #000;
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .button.white {
        background-color: #fff;
      }
      .button.black {
        background-color: #000;
        color: #fff;
      }
      .button.success {
        background-color: #28a745;
        color: #fff;
      }
    `,(r=this.shadowRoot)==null||r.appendChild(t),(e=this.shadowRoot)==null||e.appendChild(o)}}class b extends HTMLElement{constructor(){super();d(this,"showLightbox",()=>{var r,e;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".lightbox-overlay");(e=t==null?void 0:t.style)!=null&&e.display&&(t.style.display="block"),document.body.style.overflow="hidden"});d(this,"hideLightbox",()=>{var r,e;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".lightbox-overlay");(e=t==null?void 0:t.style)!=null&&e.display&&(t.style.display="none"),document.body.style.overflow=""});this.attachShadow({mode:"open"})}connectedCallback(){var t,r,e,i;setTimeout(()=>{this.render()}),(r=(t=this.shadowRoot)==null?void 0:t.querySelector(".lightbox-overlay"))==null||r.addEventListener("click",this.hideLightbox),(i=(e=this.shadowRoot)==null?void 0:e.querySelector(".lightbox-image"))==null||i.addEventListener("click",this.showLightbox)}disconnectedCallback(){var t,r,e,i;(r=(t=this.shadowRoot)==null?void 0:t.querySelector(".lightbox-overlay"))==null||r.removeEventListener("click",this.hideLightbox),(i=(e=this.shadowRoot)==null?void 0:e.querySelector(".lightbox-image"))==null||i.removeEventListener("click",this.showLightbox)}render(){var c,l,a;const t=this.getAttribute("src")||"",r=document.createElement("img");r.src=t;const e=document.createElement("a");e.classList.add("lightbox-image"),e.href=t,e.appendChild(r);const i=document.createElement("div");i.classList.add("lightbox-overlay"),e.addEventListener("click",h=>{h.preventDefault(),this.showLightbox()});const n=document.createElement("style");n.textContent=`
      .lightbox-image {
        cursor: zoom-in;
        transition: transform 0.3s ease;
        width: 100%;
        max-width: 100%;
        margin: 20px auto;
        display: block;
      }
      .lightbox-image img {
        width: 100%;
        max-width: 100%;
        display: block;
      }
      .lightbox-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10;
        cursor: pointer;
      }
      .lightbox-overlay img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        max-width: 80%;
        height: auto;
        max-height: 80%;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      }
    `,(c=this.shadowRoot)==null||c.appendChild(n),(l=this.shadowRoot)==null||l.appendChild(e),i.appendChild(r.cloneNode(!0)),(a=this.shadowRoot)==null||a.appendChild(i)}}class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){setTimeout(()=>{this.render()})}render(){var r,e;const o=document.createElement("div");o.classList.add("alert",this.getAttribute("type")||"info"),o.innerHTML=this.innerHTML||"";const t=document.createElement("style");t.textContent=`
      .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 5px;
      }
      .alert.info {
        color: #0056b3;
        background-color: --var(--alert-info-bg-color, #cce5ff);
        border-color: #b8daff;
      }
      .alert.warning {
        color: #856404;
        background-color: --var(--alert-warning-bg-color, #fff3cd);
        border-color: #ffeeba;
      }
      .alert.error {
        color: #721c24;
        background-color: --var(--alert-error-bg-color, #f8d7da);
        border-color: #f5c6cb;
      }
      .alert.success {
        color: #155724;
        background-color: --var(--alert-success-bg-color, #d4edda);
        border-color: #c3e6cb;
      }
    `,(r=this.shadowRoot)==null||r.appendChild(t),(e=this.shadowRoot)==null||e.appendChild(o)}}class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){setTimeout(()=>{this.render()})}render(){var i,n;const o=document.createElement("div");o.classList.add("section");const t=document.createElement("a");t.href="#",t.classList.add("section-title"),t.textContent=this.getAttribute("title")||"",t.addEventListener("click",c=>{c.preventDefault(),o.classList.toggle("collapsed")});const r=document.createElement("div");r.classList.add("section-content"),r.innerHTML=this.innerHTML||"",o.appendChild(t),o.appendChild(r);const e=document.createElement("style");e.textContent=`
      .section {
        margin-bottom: 20px;
        border: 1px solid #000;
        border-radius: 5px;
      }
      .section.collapsed .section-content {
        display: none;
      }
      .section-title {
        display: flex;
        cursor: pointer;
        padding: 20px;
        border-bottom: 1px solid #000;
      }
      .section.collapsed .section-title {
        border-bottom: none;
      }
      .section-content {
        padding: 20px;
      }
    `,(i=this.shadowRoot)==null||i.appendChild(e),(n=this.shadowRoot)==null||n.appendChild(o)}}class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){setTimeout(()=>{this.render()})}render(){var i,n;const o=document.createElement("div");o.classList.add("video-player");const r=`<iframe src="https://www.youtube.com/embed/${this.getAttribute("id")||""}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;o.innerHTML=r;const e=document.createElement("style");e.textContent=`
      .video-player {
        width: 100%;
        max-width: 100%;
      }
      .video-player iframe {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
    `,(i=this.shadowRoot)==null||i.appendChild(e),(n=this.shadowRoot)==null||n.appendChild(o)}}customElements.define("switch-tab",m);customElements.define("lightbox-image",b);customElements.define("alert-message",g);customElements.define("section-item",f);customElements.define("video-player",y);
