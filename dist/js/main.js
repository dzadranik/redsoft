!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){"use strict";var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();r(1);var o,i=r(4),s=((o=i)&&o.__esModule,r(5));r(8),(0,s.polyfill)(),document.addEventListener("DOMContentLoaded",(function(){var t=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.basketItems=[],this.btnInBasket='<span class="btn__icon-check">В корзине</span>',this.btnBuy="Купить",this.btnLoader='<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'}return n(t,[{key:"initBasket",value:function(){var t=this;""!==localStorage.getItem("basket")&&null!==localStorage.getItem("basket")&&(this.basketItems=localStorage.getItem("basket").split(","),this.basketItems.map((function(e){var r=document.querySelector(".js-product[data-id='"+e+"']");r.classList.add("btn__in-basket"),r.innerHTML=t.btnInBasket})))}},{key:"setBasket",value:function(t,e){var r=this;e.disabled=!0,e.innerHTML=this.btnLoader,window.fetch("https://reqres.in/api/produts/3",{method:"get"}).then((function(t){return t.json()})).then((function(n){console.log(n),e.classList.toggle("btn__in-basket");var o=r.basketItems.indexOf(t);-1===o?r.basketItems.push(t):r.basketItems.splice(o,1),localStorage.setItem("basket",r.basketItems.join(","))})).catch((function(t){console.log("Fetch Error :-S",t)})).finally((function(){e.disabled=!1,e.classList.contains("btn__in-basket")?e.innerHTML=r.btnInBasket:e.innerHTML=r.btnBuy}))}}]),t}());t.initBasket();var e=document.querySelectorAll(".js-product");e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(e){var r=e.currentTarget.dataset.id;t.setBasket(r,e.currentTarget)}))})),document.getElementById("search").addEventListener("input",(function(t){var e=t.currentTarget;""===e.value||e.classList.contains("is-active")?""===e.value&&e.classList.remove("is-active"):e.classList.add("is-active")}))}))},function(t,e,r){var n=r(2),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),s=[];function a(t){for(var e=-1,r=0;r<s.length;r++)if(s[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c=r[u]||0,f="".concat(u," ").concat(c);r[u]=c+1;var l=a(f),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(s[l].references++,s[l].updater(h)):s.push({identifier:f,updater:v(h,e),references:1}),n.push(f)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function h(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,y=0;function v(t,e){var r,n,o;if(e.singleton){var i=y++;r=p||(p=c(e)),n=h.bind(null,r,i,!1),o=h.bind(null,r,i,!0)}else r=c(e),n=d.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=a(r[n]);s[o].references--}for(var i=u(t,e),c=0;c<r.length;c++){var f=a(r[c]);0===s[f].references&&(s[f].updater(),s.splice(f,1))}r=i}}}},function(t,e,r){},function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return p})),r.d(e,"Request",(function(){return g})),r.d(e,"Response",(function(){return A})),r.d(e,"DOMException",(function(){return B})),r.d(e,"fetch",(function(){return j}));var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=v(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():u&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(b)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=v(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=l(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},p.prototype.delete=function(t){delete this.map[l(t)]},p.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},p.prototype.set=function(t,e){this.map[l(t)]=h(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},i&&(p.prototype[Symbol.iterator]=p.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),_.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},w.call(g.prototype),w.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var B=n.DOMException;try{new B}catch(t){(B=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),B.prototype.constructor=B}function j(t,e){return new Promise((function(r,o){var i=new g(t,e);if(i.signal&&i.signal.aborted)return o(new B("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){r(new A(o,n))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){o(new B("Aborted","AbortError"))}),0)},a.open(i.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":u&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof p?i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,h(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",c)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}j.polyfill=!0,n.fetch||(n.fetch=j,n.Headers=p,n.Request=g,n.Response=A)},function(t,e,r){(function(e,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,a=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(s?s(y):_())},u="undefined"!=typeof window?window:void 0,c=u||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(y,1)}}var p=new Array(1e3);function y(){for(var t=0;t<o;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;o=0}var v,b,m,w,_=void 0;function g(t,e){var r=this,n=new this.constructor(E);void 0===n[A]&&M(n);var o=r._state;if(o){var i=arguments[o-1];a((function(){return k(o,n,i,r._result)}))}else L(r,n,t,e);return n}function T(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return j(e,t),e}l?_=function(){return e.nextTick(y)}:f?(b=0,m=new f(y),w=document.createTextNode(""),m.observe(w,{characterData:!0}),_=function(){w.data=b=++b%2}):h?((v=new MessageChannel).port1.onmessage=y,_=function(){return v.port2.postMessage(0)}):_=void 0===u?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(y)}:d()}catch(t){return d()}}():d();var A=Math.random().toString(36).substring(2);function E(){}function B(e,r,n){r.constructor===e.constructor&&n===g&&r.constructor.resolve===T?function(t,e){1===e._state?O(t,e._result):2===e._state?S(t,e._result):L(e,void 0,(function(e){return j(t,e)}),(function(e){return S(t,e)}))}(e,r):void 0===n?O(e,r):t(n)?function(t,e,r){a((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?j(t,r):O(t,r))}),(function(e){n||(n=!0,S(t,e))}),t._label);!n&&o&&(n=!0,S(t,o))}),t)}(e,r,n):O(e,r)}function j(t,e){if(t===e)S(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)O(t,e);else{var r=void 0;try{r=e.then}catch(e){return void S(t,e)}B(t,e,r)}var n,o}function x(t){t._onerror&&t._onerror(t._result),P(t)}function O(t,e){void 0===t._state&&(t._result=e,t._state=1,0!==t._subscribers.length&&a(P,t))}function S(t,e){void 0===t._state&&(t._state=2,t._result=e,a(x,t))}function L(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&a(P,t)}function P(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?k(r,n,o,i):o(i);t._subscribers.length=0}}function k(e,r,n,o){var i=t(n),s=void 0,a=void 0,u=!0;if(i){try{s=n(o)}catch(t){u=!1,a=t}if(r===s)return void S(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;void 0!==r._state||(i&&u?j(r,s):!1===u?S(r,a):1===e?O(r,s):2===e&&S(r,s))}var I=0;function M(t){t[A]=I++,t._state=void 0,t._result=void 0,t._subscribers=[]}var C=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(E),this.promise[A]||M(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;void 0===this._state&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===T){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===g&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===U){var a=new r(E);s?S(a,i):B(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;void 0===n._state&&(this._remaining--,2===t?S(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;L(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},t}(),U=function(){function e(t){this[A]=I++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){j(t,e)}),(function(e){S(t,e)}))}catch(e){S(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return U.prototype.then=g,U.all=function(t){return new C(this,t).promise},U.race=function(t){var e=this;return n(t)?new e((function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},U.resolve=T,U.reject=function(t){var e=new this(E);return S(e,t),e},U._setScheduler=function(t){s=t},U._setAsap=function(t){a=t},U._asap=a,U.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=U},U.Promise=U,U},t.exports=n()}).call(this,r(6),r(7))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=a(h);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var r=0;r<this.length;r++)t.call(e,this[r],r,this)})}]);
//# sourceMappingURL=main.js.map