!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){(function(n){var o,i,r,a;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(t){"use strict";function e(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e.call(window,t[n],n,t)}function o(t){this.$module=t}(function(t){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this)}).call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),function(t){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),function(t){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},r=function t(e,n){var o,r,a,s=e.childNodes||[],c=-1;if(1===e.nodeType&&e.constructor!==Element)for(o in e.constructor=Element,i)r=i[o],e[o]=r;for(;a=n&&s[++c];)t(a,n);return e},a=document.getElementsByTagName("*"),s=document.createElement,c=100;o.attachEvent("onpropertychange",function(t){for(var e,n=t.propertyName,r=!i.hasOwnProperty(n),s=o[n],c=i[n],u=-1;e=a[++u];)1===e.nodeType&&(r||e[n]===c)&&(e[n]=s);i[n]=s}),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),u()||(document.onreadystatechange=u,t=setInterval(u,25)),document.createElement=function(t){var e=s(String(t).toLowerCase());return r(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function u(){return c--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState)||(r(document,!0),t&&document.body.prototype&&clearTimeout(t),!document.body.prototype))}}()}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),function(t){var e,n,o;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(e=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,i,r){if(e&&(t===window||t===document||t===Element.prototype||t instanceof Element))return e(t,i,r);if(null===t||!(t instanceof Object||"object"===s(t)))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var a=String(i),c="value"in r||"writable"in r,u="get"in r&&s(r.get),l="set"in r&&s(r.set);if(u){if("function"!==u)throw new TypeError("Getter must be a function");if(!n)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(c)throw new TypeError(o);Object.__defineGetter__.call(t,a,r.get)}else t[a]=r.value;if(l){if("function"!==l)throw new TypeError("Setter must be a function");if(!n)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(c)throw new TypeError(o);Object.__defineSetter__.call(t,a,r.set)}return"value"in r&&(t[a]=r.value),t})}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),function(t){(function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}})(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===t)&&n.bubbles,r=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,i,r),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],i=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,i=t._events[e.type].list,r=i.slice(),a=-1,s=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++a<s&&!e.cancelImmediate;)a in r&&-1!==o(i,n=r[a])&&"function"==typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=arguments[0],n=arguments[1];this._events&&this._events[e]&&this._events[e].list&&-1!==(t=o(this._events[e].list,n))&&(this._events[e].list.splice(t,1),this._events[e].list.length||(this.detachEvent&&this.detachEvent("on"+e,this._events[e]),delete this._events[e]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{t.bubbles||(t.cancelBubble=!0,this.attachEvent("on"+n,function t(o){o.cancelBubble=!0,(e||window).detachEvent("on"+n,t)})),this.fireEvent("on"+n,t)}catch(o){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}function o(t,e){for(var n=-1,o=t.length;++n<o;)if(n in t&&t[n]===e)return n;return-1}}()}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),o.prototype.handleKeyDown=function(t){var e=t.target;"button"===e.getAttribute("role")&&32===t.keyCode&&(t.preventDefault(),e.click())},o.prototype.init=function(){this.$module.addEventListener("keydown",this.handleKeyDown)},function(t){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){var e,n=Array,o=Object,i=o.prototype,r=n.prototype,a=function(){},c=i.toString,u="function"==typeof Symbol&&"symbol"===s(Symbol.toStringTag),l=Function.prototype.toString;e=function(t){if("function"!=typeof t)return!1;if(u)return function(t){try{return l.call(t),!0}catch(t){return!1}}(t);var e=c.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e};var d=r.slice,h=r.concat,p=r.push,f=Math.max,b=this;if(!e(b))throw new TypeError("Function.prototype.bind called on incompatible "+b);for(var y,m=d.call(arguments,1),v=f(0,b.length-m.length),g=[],w=0;w<v;w++)p.call(g,"$"+w);return y=Function("binder","return function ("+g.join(",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof y){var e=b.apply(this,h.call(m,d.call(arguments)));return o(e)===e?e:this}return b.apply(t,h.call(m,d.call(arguments)))}),b.prototype&&(a.prototype=b.prototype,y.prototype=new a,a.prototype=null),y}})}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{});var i="boolean"==typeof document.createElement("details").open;function r(t){this.$module=t}function a(t){this.$module=t,this.$textarea=t.querySelector(".js-character-count")}function c(t){this.$module=t,this.$inputs=t.querySelectorAll('input[type="checkbox"]')}function u(t){this.$module=t}function l(t){this.$module=t}function d(t){this.$module=t,this.$inputs=t.querySelectorAll('input[type="radio"]')}function h(t){this.$module=t,this.$tabs=t.querySelectorAll(".govuk-tabs__tab"),this.keys={left:37,right:39,up:38,down:40},this.jsHiddenClass="govuk-tabs__panel--hidden"}r.prototype.handleInputs=function(t,e){t.addEventListener("keypress",function(t){var n=t.target;13!==t.keyCode&&32!==t.keyCode||"summary"===n.nodeName.toLowerCase()&&(t.preventDefault(),n.click?n.click():e(t))}),t.addEventListener("keyup",function(t){var e=t.target;32===t.keyCode&&"summary"===e.nodeName.toLowerCase()&&t.preventDefault()}),t.addEventListener("click",e)},r.prototype.init=function(){var t=this.$module;if(t){var e,n=this.$summary=t.getElementsByTagName("summary").item(0),o=this.$content=t.getElementsByTagName("div").item(0);n&&o&&(o.id||(o.id="details-content-"+(e=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))),t.setAttribute("role","group"),n.setAttribute("role","button"),n.setAttribute("aria-controls",o.id),i||(n.tabIndex=0),!0==(null!==t.getAttribute("open"))?(n.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false")):(n.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"),i||(o.style.display="none")),this.handleInputs(n,this.setAttributes.bind(this)))}},r.prototype.setAttributes=function(){var t=this.$module,e=this.$summary,n=this.$content,o="true"===e.getAttribute("aria-expanded"),r="true"===n.getAttribute("aria-hidden");return e.setAttribute("aria-expanded",o?"false":"true"),n.setAttribute("aria-hidden",r?"false":"true"),i||(n.style.display=o?"none":"",null!==t.getAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","open")),!0},r.prototype.destroy=function(t){t.removeEventListener("keypress"),t.removeEventListener("keyup"),t.removeEventListener("click")},function(t){var e,n;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||("DOMTokenList"in this&&this.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(this.DOMTokenList=function(){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}return function(e,o){var i=this,r=[],a={},c=0,u=0,l=function(t){n(i,t,function(){return h(),r[t]},!1)},d=function(){if(c>=u)for(;u<c;++u)l(u)},h=function(){var t,n,i=arguments,u=/\s+/;if(i.length)for(n=0;n<i.length;++n)if(u.test(i[n]))throw(t=new SyntaxError('String "'+i[n]+'" contains an invalid character')).code=5,t.name="InvalidCharacterError",t;for(""===(r="object"===s(e[o])?(""+e[o].baseVal).replace(/^\s+|\s+$/g,"").split(u):(""+e[o]).replace(/^\s+|\s+$/g,"").split(u))[0]&&(r=[]),a={},n=0;n<r.length;++n)a[r[n]]=!0;c=r.length,d()};return h(),n(i,"length",function(){return h(),c}),i.toLocaleString=i.toString=function(){return h(),r.join(" ")},i.item=function(t){return h(),r[t]},i.contains=function(t){return h(),!!a[t]},i.add=function(){h.apply(i,t=arguments);for(var t,n,u=0,l=t.length;u<l;++u)n=t[u],a[n]||(r.push(n),a[n]=!0);c!==r.length&&(c=r.length>>>0,"object"===s(e[o])?e[o].baseVal=r.join(" "):e[o]=r.join(" "),d())},i.remove=function(){h.apply(i,t=arguments);for(var t,n={},u=0,l=[];u<t.length;++u)n[t[u]]=!0,delete a[t[u]];for(u=0;u<r.length;++u)n[r[u]]||l.push(r[u]);r=l,c=l.length>>>0,"object"===s(e[o])?e[o].baseVal=r.join(" "):e[o]=r.join(" "),d()},i.toggle=function(e,n){return h.apply(i,[e]),t!==n?n?(i.add(e),!0):(i.remove(e),!1):a[e]?(i.remove(e),!1):(i.add(e),!0)},i}}()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function(e){var n=arguments[1];if(n===t){var o=!this.contains(e);return this[o?"add":"remove"](e),o}return this[(n=!!n)?"add":"remove"](e),n})),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var e=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var e=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}())}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),function(t){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(t){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}var o=function t(o,i,r){n(o.prototype,i,function(){var o,a="__defineGetter__DEFINE_PROPERTY"+i;if(this[a])return o;if(this[a]=!0,!1===e){for(var s,c=t.mirror||document.createElement("div"),u=c.childNodes,l=u.length,d=0;d<l;++d)if(u[d]._R===this){s=u[d];break}s||(s=c.appendChild(document.createElement("div"))),o=DOMTokenList.call(s,this,r)}else o=new DOMTokenList(this,r);return n(this,i,function(){return o}),delete this[a],o},!0)};o(t.Element,"classList","className"),o(t.HTMLElement,"classList","className"),o(t.HTMLLinkElement,"relList","rel"),o(t.HTMLAnchorElement,"relList","rel"),o(t.HTMLAreaElement,"relList","rel")}(this)}.call("object"===("undefined"==typeof window?"undefined":s(window))&&window||"object"===("undefined"==typeof self?"undefined":s(self))&&self||"object"===(void 0===n?"undefined":s(n))&&n||{}),a.prototype.defaults={characterCountAttribute:"data-maxlength",wordCountAttribute:"data-maxwords"},a.prototype.init=function(){var t=this.$module;if(this.$textarea){this.options=this.getDataset(t);var e=this.defaults.characterCountAttribute;if(this.options.maxwords&&(e=this.defaults.wordCountAttribute),this.maxLength=t.getAttribute(e),this.maxLength){var n=this.createCountMessage.bind(this);this.countMessage=n(),this.countMessage&&(t.removeAttribute("maxlength"),this.bindChangeEvents.bind(this)(),this.updateCountMessage.bind(this)())}}},a.prototype.getDataset=function(t){var e={},n=t.attributes;if(n)for(var o=0;o<n.length;o++){var i=n[o],r=i.name.match(/^data-(.+)/);r&&(e[r[1]]=i.value)}return e},a.prototype.count=function(t){return this.options.maxwords?(t.match(/\S+/g)||[]).length:t.length},a.prototype.createCountMessage=function(){var t=this.$textarea,e=t.id,n=document.getElementById(e+"-info");return e&&!n?(t.insertAdjacentHTML("afterend",'<span id="'+e+'-info" class="govuk-hint govuk-character-count__message" aria-live="polite"></span>'),this.describedBy=t.getAttribute("aria-describedby"),this.describedByInfo=this.describedBy+" "+e+"-info",t.setAttribute("aria-describedby",this.describedByInfo),n=document.getElementById(e+"-info")):t.insertAdjacentElement("afterend",n),n},a.prototype.bindChangeEvents=function(){var t=this.$textarea;t.addEventListener("keyup",this.checkIfValueChanged.bind(this)),t.addEventListener("focus",this.handleFocus.bind(this)),t.addEventListener("blur",this.handleBlur.bind(this))},a.prototype.checkIfValueChanged=function(){this.$textarea.oldValue||(this.$textarea.oldValue=""),this.$textarea.value!==this.$textarea.oldValue&&(this.$textarea.oldValue=this.$textarea.value,this.updateCountMessage.bind(this)())},a.prototype.updateCountMessage=function(){var t=this.$textarea,e=this.options,n=this.countMessage,o=this.count(t.value),i=this.maxLength,r=i-o;i*(e.threshold?e.threshold:0)/100>o?n.classList.add("govuk-character-count__message--disabled"):n.classList.remove("govuk-character-count__message--disabled"),r<0?(t.classList.add("govuk-textarea--error"),n.classList.remove("govuk-hint"),n.classList.add("govuk-error-message")):(t.classList.remove("govuk-textarea--error"),n.classList.remove("govuk-error-message"),n.classList.add("govuk-hint"));var a,s,c="character";e.maxwords&&(c="word"),c+=-1===r||1===r?"":"s",a=r<0?"too many":"remaining",s=Math.abs(r),n.innerHTML="You have "+s+" "+c+" "+a},a.prototype.handleFocus=function(){this.valueChecker=setInterval(this.checkIfValueChanged.bind(this),1e3)},a.prototype.handleBlur=function(){clearInterval(this.valueChecker)},c.prototype.init=function(){var t=this.$module;e(this.$inputs,function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},c.prototype.setAttributes=function(t){var e=t.checked;t.setAttribute("aria-expanded",e),document.querySelector("#"+t.getAttribute("aria-controls")).classList.toggle("govuk-checkboxes__conditional--hidden",!e)},c.prototype.handleClick=function(t){var e=t.target,n="checkbox"===e.getAttribute("type"),o=e.getAttribute("aria-controls");n&&o&&this.setAttributes(e)},u.prototype.init=function(){var t=this.$module;t&&window.addEventListener("load",function(){t.focus()})},l.prototype.init=function(){var t=this.$module;if(t){var e=t.querySelector(".js-header-toggle");e&&e.addEventListener("click",this.handleClick.bind(this))}},l.prototype.toggleClass=function(t,e){t.className.indexOf(e)>0?t.className=t.className.replace(" "+e,""):t.className+=" "+e},l.prototype.handleClick=function(t){var e=this.$module,n=t.target||t.srcElement,o=e.querySelector("#"+n.getAttribute("aria-controls"));n&&o&&(this.toggleClass(o,"govuk-header__navigation--open"),this.toggleClass(n,"govuk-header__menu-button--open"),n.setAttribute("aria-expanded","true"!==n.getAttribute("aria-expanded")),o.setAttribute("aria-hidden","false"===o.getAttribute("aria-hidden")))},d.prototype.init=function(){var t=this.$module;e(this.$inputs,function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},d.prototype.setAttributes=function(t){var e=t.checked;t.setAttribute("aria-expanded",e),document.querySelector("#"+t.getAttribute("aria-controls")).classList.toggle("govuk-radios__conditional--hidden",!e)},d.prototype.handleClick=function(t){e(this.$inputs,function(t){var e="radio"===t.getAttribute("type"),n=t.getAttribute("aria-controls");e&&n&&this.setAttributes(t)}.bind(this))},h.prototype.init=function(){"function"==typeof window.matchMedia?this.setupResponsiveChecks():this.setup()},h.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()},h.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()},h.prototype.setup=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");if(n&&o&&i){o.setAttribute("role","tablist"),e(i,function(t){t.setAttribute("role","presentation")}),e(n,function(t){this.setAttributes(t),t.boundTabClick=this.onTabClick.bind(this),t.boundTabKeydown=this.onTabKeydown.bind(this),t.addEventListener("click",t.boundTabClick,!0),t.addEventListener("keydown",t.boundTabKeydown,!0),this.hideTab(t)}.bind(this));var r=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(r),t.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",t.boundOnHashChange,!0)}},h.prototype.teardown=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");n&&o&&i&&(o.removeAttribute("role"),e(i,function(t){t.removeAttribute("role","presentation")}),e(n,function(t){t.removeEventListener("click",t.boundTabClick,!0),t.removeEventListener("keydown",t.boundTabKeydown,!0),this.unsetAttributes(t)}.bind(this)),window.removeEventListener("hashchange",t.boundOnHashChange,!0))},h.prototype.onHashChange=function(t){var e=window.location.hash,n=this.getTab(e);if(n)if(this.changingHash)this.changingHash=!1;else{var o=this.getCurrentTab();this.hideTab(o),this.showTab(n),n.focus()}},h.prototype.hideTab=function(t){this.unhighlightTab(t),this.hidePanel(t)},h.prototype.showTab=function(t){this.highlightTab(t),this.showPanel(t)},h.prototype.getTab=function(t){return this.$module.querySelector('.govuk-tabs__tab[href="'+t+'"]')},h.prototype.setAttributes=function(t){var e=this.getHref(t).slice(1);t.setAttribute("id","tab_"+e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",e),t.setAttribute("tabindex","-1");var n=this.getPanel(t);n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",t.id),n.classList.add(this.jsHiddenClass)},h.prototype.unsetAttributes=function(t){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeAttribute("tabindex");var e=this.getPanel(t);e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.classList.remove(this.jsHiddenClass)},h.prototype.onTabClick=function(t){t.preventDefault();var e=t.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(e),this.createHistoryEntry(e)},h.prototype.createHistoryEntry=function(t){var e=this.getPanel(t),n=e.id;e.id="",this.changingHash=!0,window.location.hash=this.getHref(t).slice(1),e.id=n},h.prototype.onTabKeydown=function(t){switch(t.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),t.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),t.preventDefault()}},h.prototype.activateNextTab=function(){var t=this.getCurrentTab(),e=t.parentNode.nextElementSibling;if(e)var n=e.firstElementChild;n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},h.prototype.activatePreviousTab=function(){var t=this.getCurrentTab(),e=t.parentNode.previousElementSibling;if(e)var n=e.firstElementChild;n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},h.prototype.getPanel=function(t){return this.$module.querySelector(this.getHref(t))},h.prototype.showPanel=function(t){this.getPanel(t).classList.remove(this.jsHiddenClass)},h.prototype.hidePanel=function(t){this.getPanel(t).classList.add(this.jsHiddenClass)},h.prototype.unhighlightTab=function(t){t.setAttribute("aria-selected","false"),t.classList.remove("govuk-tabs__tab--selected"),t.setAttribute("tabindex","-1")},h.prototype.highlightTab=function(t){t.setAttribute("aria-selected","true"),t.classList.add("govuk-tabs__tab--selected"),t.setAttribute("tabindex","0")},h.prototype.getCurrentTab=function(){return this.$module.querySelector(".govuk-tabs__tab--selected")},h.prototype.getHref=function(t){var e=t.getAttribute("href");return e.slice(e.indexOf("#"),e.length)},t.initAll=function(){new o(document).init(),e(document.querySelectorAll("details"),function(t){new r(t).init()}),e(document.querySelectorAll('[data-module="character-count"]'),function(t){new a(t).init()}),e(document.querySelectorAll('[data-module="checkboxes"]'),function(t){new c(t).init()}),new u(document.querySelector('[data-module="error-summary"]')).init(),new l(document.querySelector('[data-module="header"]')).init(),e(document.querySelectorAll('[data-module="radios"]'),function(t){new d(t).init()}),e(document.querySelectorAll('[data-module="tabs"]'),function(t){new h(t).init()})},t.Button=o,t.Details=r,t.CharacterCount=a,t.Checkboxes=c,t.ErrorSummary=u,t.Header=l,t.Radios=d,t.Tabs=h},"object"===s(e)&&void 0!==t?a(e):(i=[e],void 0===(r="function"==typeof(o=a)?o.apply(e,i):o)||(t.exports=r))}).call(this,n(3))},function(t,e,n){"use strict";e.a={init:function(){Function.prototype.bind&&(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}}},function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"a",function(){return a});var i=null,r=null,a=function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!i&&(i=this,r=this._init(),t.getInstance())}var e,n;return e=t,(n=[{key:"_init",value:function(){function t(){}function e(){var t={"&":"&amp;","<":"&lt;",">":"&gt;"};return this.replace(/[&<>]/g,function(e){return t[e]||e})}return t.prototype.defaults={charCountAttribute:"maxlength",wordCountAttribute:"data-maxwords"},t.prototype.wrapElement=function(t,e){var n=document.createElement("div");return n.className=e,t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),n.appendChild(t),n},t.prototype.getStyle=function(t,e){var n="";return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,"").getPropertyValue(e):t.currentStyle&&(e=e.replace(/-(\w)/g,function(t,e){return e.toUpperCase()}),n=t.currentStyle[e]),n},t.prototype.isIOS=function(){return!(!/iPad|iPhone|iPod/.test(navigator.userAgent)||window.MSStream)},t.prototype.fixIOSInput=function(e){var n=parseInt(t.prototype.getStyle(e,"padding-left")),o=parseInt(t.prototype.getStyle(e,"padding-right"));e.style.paddingLeft=n+3+"px",e.style.paddingRight=o+3+"px"},t.prototype.attach=function(e){var n=e&&e.wordCount?this.defaults.wordCountAttribute:this.defaults.charCountAttribute,o=document.querySelectorAll(e.selector);if(o)for(var i=0,r=o.length;i<r;i++){var a=o[i];if(e&&e.highlight){var s=t.prototype.wrapElement(a,"govuk-c-charcount__wrapper"),c=a.getAttribute("id"),u="text"===a.type?"govuk-c-charcount__highlight-input":"govuk-c-charcount__highlight";s.insertAdjacentHTML("afterbegin",'<div id="'+c+'-hl" class="form-control '+u+'" aria-hidden="true" role="presentation"></div>');var l=document.getElementById(c+"-hl");l.style.height=a.offsetHeight+"px",l.style.width=a.offsetWidth+"px",a.style.resize="none",t.prototype.isIOS()&&t.prototype.fixIOSInput(l)}var d=a.getAttribute(n),h=a.getAttribute("data-message-under-limit")||"You have [x] characters remaining",p=a.getAttribute("data-message-over-limit")||"You have [x] characters too many",f=t.prototype.createCountMessage(a);if(d&&f){var b={countElement:a,countMessage:f,maxLength:d,options:e,rawUnderLimitMessage:h,rawOverLimitMessage:p};e&&e.highlight&&(b.countHighlight=l),t.prototype.bindChangeEvents(b),t.prototype.updateCountMessage(b),a.setAttribute("maxlength",""),a.setAttribute("data-maxlength",d),a.classList.add("govuk-c-charcount")}else f||window.console.warn("Make sure you set an id for each of your field(s)"),d||window.console.warn("Make sure you set the "+n+" for each of your field(s)")}},t.prototype.count=function(t,e){return e&&e.wordCount?(t.match(/\S+/g)||[]).length:t.length},t.prototype.highlight=function(t,n){return[e((t=t.replace(/\n$/g,"\n\n")).slice(0,n)),"<mark>",e(t.slice(n)),"</mark>"].join("")},t.prototype.createCountMessage=function(t){var e=t.getAttribute("id"),n=document.getElementById(e+"-info");return e&&!n&&(t.insertAdjacentHTML("afterend",'<span id="'+e+'-info" class="form-hint char-count-info govuk-c-charcount__message" aria-live="polite"></span>'),t.setAttribute("aria-describedby",e+"-info"),n=document.getElementById(e+"-info")),n},t.prototype.bindChangeEvents=function(e){e.countElement.addEventListener?e.countElement.addEventListener("keyup",t.prototype.updateCountMessage.bind(this,e)):e.countElement.attachEvent("onkeyup",t.prototype.handleInput.bind(this,e)),!0===e.options.highlight&&(e.countElement.addEventListener("scroll",t.prototype.handleScroll.bind(this)),window.addEventListener("resize",t.prototype.handleResize.bind(this))),e.countElement.addEventListener("focus",t.prototype.handleFocus.bind(e)),e.countElement.addEventListener("blur",t.prototype.handleBlur.bind(e))},t.prototype.checkIfValueChanged=function(e){void 0!==e&&(e.countElement.oldValue||(e.countElement.oldValue=""),e.countElement.value!==e.countElement.oldValue&&(e.countElement.oldValue=e.countElement.value,t.prototype.updateCountMessage(e)))},t.prototype.updateCountMessage=function(e){var n=e.countElement;if(void 0!==n){var o=e.options,i=e.countMessage,r=e.countHighlight,a=t.prototype.count(n.value,o),s=e.maxLength,c=s-a,u=e.rawUnderLimitMessage,l=e.rawOverLimitMessage,d=0;o&&o.threshold&&(d=o.threshold),s*d/100>a?i.classList.add("govuk-c-charcount__message--disabled"):i.classList.remove("govuk-c-charcount__message--disabled"),o.defaultBorder||(c<0?(n.classList.add("form-control-error"),o&&o.validation&&n.parentNode.classList.add("govuk-c-charcount__wrapper-error"),i.classList.add("error-message")):(n.classList.remove("form-control-error"),o&&o.validation&&n.parentNode.classList.remove("govuk-c-charcount__wrapper-error"),i.classList.remove("error-message")));var h=Math.abs(c);if(i.innerHTML=c<0?l.replace("[x]",h):u.replace("[x]",h),r){var p=t.prototype.highlight(n.value,s);r.innerHTML=p}}},t.prototype.handleInput=function(e){t.prototype.checkIfValueChanged(this)},t.prototype.handleFocus=function(e){this.valueChecker=setInterval(t.prototype.checkIfValueChanged,100,this),void 0!==this.countHighlight&&(this.countHighlight.style.height=this.countElement.getBoundingClientRect().height+"px",this.countHighlight.style.width=this.countElement.getBoundingClientRect().width+"px")},t.prototype.handleBlur=function(t){clearInterval(this.valueChecker)},t.prototype.handleScroll=function(t){this.countHighlight.scrollTop=this.countElement.scrollTop,this.countHighlight.scrollLeft=this.countElement.scrollLeft},t.prototype.handleResize=function(t){this.countHighlight.style.height=this.countElement.getBoundingClientRect().height+"px",this.countHighlight.style.width=this.countElement.getBoundingClientRect().width+"px"},t.prototype.init=function(e){e&&e.selector?(t.prototype.attach(e),t.options=e):window.console.warn("Please specify the selector for the char/word count field")},new t}},{key:"init",value:function(){r.init({selector:".js-char-count"})}}])&&o(e.prototype,n),t}();a.getInstance=function(){return i}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o},,function(t,e,n){"use strict";n.r(e);var o=n(0),i=n(1),r=n(2);function a(){Object(o.initAll)(),i.a.init(),(new r.a).init()}"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?a():document.addEventListener("DOMContentLoaded",a())}]);