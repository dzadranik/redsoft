!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1),document.addEventListener("DOMContentLoaded",(function(){var e=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.basketItems=[],this.btnInBasket='<span class="btn__icon-check">В корзине</span>',this.btnBuy="Купить",this.btnLoader='<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'}return r(e,[{key:"initBasket",value:function(){var e=this;null!==localStorage.getItem("basket")&&(this.basketItems=localStorage.getItem("basket").split(","),this.basketItems.map((function(t){var n=document.querySelector(".js-product[data-id='"+t+"']");n.classList.add("btn__in-basket"),n.innerHTML=e.btnInBasket})))}},{key:"setBasket",value:function(e,t){var n=this;t.innerHTML=this.btnLoader,fetch("https://reqres.in/api/produts/3",{method:"get"}).then((function(e){return e.json()})).then((function(r){console.log(r),t.classList.toggle("btn__in-basket");var i=n.basketItems.findIndex((function(t){return t===e}));-1===i?n.basketItems.push(e):n.basketItems.splice(i,1),localStorage.setItem("basket",n.basketItems.join())})).catch((function(e){console.log("Fetch Error :-S",e)})).finally((function(){t.classList.contains("btn__in-basket")?t.innerHTML=n.btnInBasket:t.innerHTML=n.btnBuy}))}}]),e}());e.initBasket(),document.querySelectorAll(".js-product").forEach((function(t){t.addEventListener("click",(function(t){var n=t.currentTarget.dataset.id;e.setBasket(n,t.currentTarget)}))})),document.getElementById("search").addEventListener("input",(function(e){var t=e.currentTarget;""===t.value||t.classList.contains("is-active")?""===t.value&&t.classList.remove("is-active"):t.classList.add("is-active")}))}))},function(e,t,n){var r=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:h(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function v(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,b=0;function h(e,t){var n,r,i;if(t.singleton){var o=b++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=v.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){}]);
//# sourceMappingURL=main.js.map