(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap);"]),a.push([t.id,'html {\n  background: url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80)\n    no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 100px;\n\n  font-family: "Raleway", "Courier New", Courier, monospace;\n}\n\n/*\n\n  STYLING FOR THE WEATHER DATA.\n\n*/\n.container-weather {\n  overflow: auto;\n}\n\n.container-texts {\n  color: white;\n  padding-bottom: 5px;\n  word-break: break-all;\n}\n\n.city-text {\n  margin: 0;\n  padding: 5px;\n  padding-bottom: 0;\n}\n\nh3.condition-text {\n  margin: 0;\n  padding: 5px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.container-numbers {\n  display: grid;\n  grid-template-columns: auto auto;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  font-weight: bolder;\n}\n\n#degrees {\n  display: flex;\n  margin-right: 20px;\n}\n\n#number-degrees {\n  margin: 0;\n\n  font-size: 5rem;\n}\n\n#unit-degrees {\n  font-size: 1rem;\n}\n\n#details-weather {\n  margin-left: 20px;\n}\n\n/*\n\n  STYLING FOR THE SEARCH BAR.\n\n*/\n#search-bar {\n  display: flex;\n  align-items: center;\n}\n\n#form-bar {\n  background-color: #ffffff15;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 100px;\n}\n\n#input-bar {\n  border: none;\n  border-radius: 10px;\n\n  background-color: #ffffff00;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  color: white;\n\n  display: block;\n\n  width: 25rem;\n  padding: 5px;\n  padding-right: 0;\n  margin: 0;\n}\n\ninput::placeholder {\n  color: white;\n}\n\ninput:focus {\n  outline: none;\n}\n\n#button-bar {\n  background-color: transparent;\n  \n  border: none;\n  border-radius: 10px;\n\n  padding: 5px;\n  margin:0;\n\n  color: white;\n\n  transition: ease-in-out 0.2s\n}\n\n#button-bar:hover {\n  transform: scale(1.1);\n}\n\n/*\n\n  MEDIA QUERIES\n\n*/\n\n@media only screen and (max-width: 600px) {\n  #input-bar {\n    width: 15rem;\n  }\n  @media (max-width: 300px) { \n    #input-bar {\n      width: 5rem;\n    }\n    .container-weather {\n      font-size: 75%;\n    }\n  }\n}\n\n@media only screen and (max-height: 600px) {\n  body {\n    gap: 50px;\n  }\n}',""]);const c=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=A(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=d(t,e,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",f="executing",h="completed",m={};function y(){}function v(){}function g(){}var b={};u(b,i,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==n&&r.call(w,i)&&(b=w);var E=g.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=d(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=g,u(E,"constructor",g),u(g,"constructor",v),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var p=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var d=n(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=u}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}var r,o,i,a,c,u,s,d,l,p,f,h,m,y=n(757),v=n.n(y),g=n(379),b=n.n(g),x=n(795),w=n.n(x),E=n(569),L=n.n(E),k=n(565),A=n.n(k),C=n(216),T=n.n(C),S=n(589),j=n.n(S),O=n(28),_={};function I(t){var e,n=document.querySelector(".city-text"),r=document.querySelector(".condition-text"),o=document.querySelector("#number-degrees"),i=document.querySelector("#unit-degrees"),a=document.querySelector("#feels-like"),c=document.querySelector("#wind"),u=document.querySelector("#humidity");t.location.includes(void 0)?(e=t.location.split(",")).pop():e=t.location,n.innerText=e,r.innerText=t.condition,o.innerText=t.currentTemp,i.innerText="°C",a.innerText="Feels like: ".concat(t.feelsLike," °C"),c.innerText="Wind: ".concat(t.wind),u.innerText="Humidity: ".concat(t.humidity)}function N(t){return{location:"".concat(t.name,", ").concat(t.sys.country),condition:t.weather[0].description,feelsLike:parseInt(t.main.feels_like,10),currentTemp:parseInt(t.main.temp,10),wind:"".concat(t.wind.speed," KPH"),humidity:"".concat(t.main.humidity,"%")}}function P(t){return q.apply(this,arguments)}function q(){return(q=e(v().mark((function t(e){var n,r,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=895c4d9498d80d80a266b2ec0fc6b67a&units=metric"),{mode:"cors"});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,o=N(r),t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",void 0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function R(t){return G.apply(this,arguments)}function G(){return(G=e(v().mark((function t(e){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:if(void 0!==(n=t.sent)){t.next=10;break}return t.next=6,P("London");case 6:I(n=t.sent),t.next=11;break;case 10:I(n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}_.styleTagTransform=j(),_.setAttributes=A(),_.insert=L().bind(null,"head"),_.domAPI=w(),_.insertStyleElement=T(),b()(O.Z,_),O.Z&&O.Z.locals&&O.Z.locals,function(){var t=document.querySelector("body"),e=document.createElement("div"),n=document.createElement("form"),r=document.createElement("button"),o=document.createElement("input");e.setAttribute("id","search-bar"),n.setAttribute("id","form-bar"),r.setAttribute("id","button-bar"),r.setAttribute("type","button"),e.setAttribute("id","search-bar"),o.setAttribute("id","input-bar"),o.setAttribute("autocomplete","off"),o.setAttribute("type","text"),o.setAttribute("minlength","2"),o.setAttribute("placeholder","Enter the city name"),r.textContent="SEARCH",t.appendChild(n),n.appendChild(e),e.appendChild(o),e.appendChild(r)}(),r=document.querySelector("body"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h1"),u=document.createElement("h3"),s=document.createElement("div"),d=document.createElement("p"),l=document.createElement("p"),p=document.createElement("div"),f=document.createElement("p"),h=document.createElement("p"),m=document.createElement("p"),o.classList.add("container-weather"),i.classList.add("container-texts"),a.classList.add("container-numbers"),c.classList.add("city-text"),u.classList.add("condition-text"),s.setAttribute("id","degrees"),d.setAttribute("id","number-degrees"),l.setAttribute("id","unit-degrees"),p.setAttribute("id","details-weather"),f.classList.add("detail"),f.setAttribute("id","feels-like"),h.classList.add("detail"),h.setAttribute("id","wind"),m.classList.add("detail"),m.setAttribute("id","humidity"),r.appendChild(o),o.appendChild(i),o.appendChild(a),i.appendChild(c),i.appendChild(u),a.appendChild(s),s.appendChild(d),s.appendChild(l),a.appendChild(p),p.appendChild(f),p.appendChild(h),p.appendChild(m),R("London");var H=document.querySelector("#button-bar"),M=document.querySelector("#input-bar");M.setAttribute("onkeydown","return (event.keyCode!=13);"),H.addEventListener("click",(function(){var t=M.value;t&&R(t)}))})()})();