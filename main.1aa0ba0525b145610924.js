(()=>{"use strict";var e={385:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},868:(e,t,n)=>{e.exports=n.p+"images/hero-image-91b4e704b4c261679a1e.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(385),t=n.n(e),r=new URL(n(868),n.b);t()(r);const i={mediaMinWidthSM:window.matchMedia("(min-width: 576px)"),mediaMinWidthMD:window.matchMedia("(min-width: 768px)"),mediaMinWidthLG:window.matchMedia("(min-width: 1120px)"),mediaMinWidthXL:window.matchMedia("(min-width: 1366px)")};console.log("🚥  breakPoints  🚥",i);const o=document.querySelector(".menu-main"),s=document.querySelector(".page__overlay"),a=document.querySelector(".circular-button--burger"),c=document.querySelector(".menu-main__circular-button--close");a.addEventListener("click",(function(){o.classList.add("menu-main--is-open"),s.classList.add("page__overlay--visible")})),c.addEventListener("click",(function(){o.classList.remove("menu-main--is-open"),s.classList.remove("page__overlay--visible")})),s.addEventListener("click",(function(){o.classList.remove("menu-main--is-open"),s.classList.remove("page__overlay--visible")}));for(const e in i)Object.hasOwnProperty.call(i,e)&&i[e].addEventListener("change",(()=>{o.classList.remove("menu-main--is-open"),s.classList.remove("page__overlay--visible")}));const l=document.querySelector(".hero__show-more-button"),d=document.querySelector(".hero__text");let u=d.clientHeight;l.addEventListener("click",(()=>{d.clientHeight<d.scrollHeight?(d.style.cssText=`\n      height: ${d.scrollHeight}px;\n    `,l.classList.add("hero__show-more-button--expanded")):(d.style.cssText=`\n    height: ${u}px;\n    `,l.classList.remove("hero__show-more-button--expanded"))}));for(const e in i)Object.hasOwnProperty.call(i,e)&&i[e].addEventListener("change",(()=>{d.style.cssText=`\n      height: ${u}px;\n      `,l.classList.remove("hero__show-more-button--expanded")}))})()})();
//# sourceMappingURL=main.1aa0ba0525b145610924.js.map