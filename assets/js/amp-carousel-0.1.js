(self.AMP=self.AMP||[]).push({n:"amp-carousel",ev:"0.1",l:true,v:"2104302228000",m:0,f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}da(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;n=fa.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=m;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}var q;function r(){return q?q:q=Promise.resolve(void 0)}function ia(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ja(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)};function t(a){return a||{}};function ka(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];if(e instanceof Error&&!b){b=void 0;var f=Object.getOwnPropertyDescriptor(e,"message");if(f&&f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function la(a){var b=ka.apply(null,arguments);setTimeout(function(){self.__AMP_REPORT_ERROR&&self.__AMP_REPORT_ERROR(b);throw b;})};function ma(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var na=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var u=self.AMP_CONFIG||{},oa=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function pa(a){if(self.document&&self.document.head&&(!self.location||!oa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||pa("runtime-host");u.geoApiUrl||pa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function qa(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function w(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function ra(a){qa().assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function sa(a){return"number"===typeof a&&isFinite(a)};function x(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function z(a){return y(a,"timer")}function A(a){var b=B(a);b=C(b);return y(b,"owners")}function ta(a){a=B(a);a=C(a);return ua(a,"action")?y(a,"action"):null}function B(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function y(a,b){ua(a,b);a=D(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function va(a){var b=D(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;y(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function D(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ua(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function wa(){var a=new ia,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var xa={bubbles:!0,cancelable:!0};function ya(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function za(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):ya(a,function(b){var c=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return c?c.call(b,"[i-amphtml-scale-animation]"):!1})}
function Aa(a,b){var c=a.hasAttribute("i-amphtml-carousel-hide-buttons"),d=void 0!==b?b:!c;d!==c&&(d?a.setAttribute("i-amphtml-carousel-hide-buttons",""):a.removeAttribute("i-amphtml-carousel-hide-buttons"))};function Ba(a){var b=va(C(a));if(b)return b;var c=B(a);return c.whenExtensionsKnown().then(function(){var d=c.getExtensionVersion("amp-analytics");return d?x(c.win,"extensions").waitForExtension("amp-analytics",d):null}).then(function(d){if(d){var e=C(a);var f=va(e);f?e=f:(e=D(e),e["amp-analytics-instrumentation"]=wa(),e=e["amp-analytics-instrumentation"].promise)}else e=null;return e})};function E(a,b,c,d){var e=new Ca(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function Ca(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}g=Ca.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,f=0;8>f;f++){e=this.getPointX(b);var h=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(h))break;else e<a?c=b:d=b,b-=(e-a)/h}for(f=0;1E-6<Math.abs(e-a)&&8>f;f++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var Da=E(.25,.1,.25,1),Ea=E(.42,0,1,1),Fa=E(0,0,.58,1),Ga=E(.42,0,.58,1),Ha={linear:function(a){return a},ease:Da,"ease-in":Ea,"ease-out":Fa,"ease-in-out":Ga};function Ia(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return E(b[0],b[1],b[2],b[3])}return null}return Ha[a]}return a};function Ja(){}function F(a){this.O=a;this.H=x(self,"vsync");this.la=null;this.B=[]}function G(a,b,c,d){return(new F(a)).setCurve(d).add(0,b,1).start(c)}F.prototype.setCurve=function(a){a&&(this.la=Ia(a));return this};F.prototype.add=function(a,b,c,d){this.B.push({delay:a,func:b,duration:c,curve:Ia(d)});return this};F.prototype.start=function(a){return new H(this.H,this.O,this.B,this.la,a)};
function H(a,b,c,d,e){this.H=a;this.O=b;this.B=[];for(b=0;b<c.length;b++){var f=c[b];this.B.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.sa=e;this.wa=Date.now();this.ga=!0;this.qa={};c=new ia;this.pa=c.promise;this.va=c.resolve;this.ua=c.reject;this.ra=this.H.createAnimTask(this.O,{mutate:this.xa.bind(this)});this.H.canAnimate(this.O)?this.ra(this.qa):(w().warn("Animation","cannot animate"),I(this,!1,0))}
H.prototype.then=function(a,b){return a||b?this.pa.then(a,b):this.pa};H.prototype.thenAlways=function(a){a=a||Ja;return this.then(a,a)};H.prototype.halt=function(a){I(this,!1,a||0)};
function I(a,b,c){if(a.ga){a.ga=!1;if(0!=c){1<a.B.length&&a.B.sort(function(e,f){return e.delay+e.duration-(f.delay+f.duration)});try{if(0<c)for(c=0;c<a.B.length;c++)a.B[c].func(1,!0);else for(var d=a.B.length-1;0<=d;d--)a.B[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.va():a.ua()}}
H.prototype.xa=function(){if(this.ga){for(var a=Date.now(),b=Math.min((a-this.wa)/this.sa,1),c=0;c<this.B.length;c++){var d=this.B[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.B.length;c++)if(d=this.B[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){w().error("Animation","step curve failed: "+h,h);I(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){w().error("Animation",
"step mutate failed: "+h,h),I(this,!1,0)}}1==b?I(this,!0,0):this.H.canAnimate(this.O)?this.ra(this.qa):(w().warn("Animation","cancel animation"),I(this,!1,0))}};function Ka(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(c){return b.hasAttribute(c)})};var J=new WeakMap,K=new WeakMap;function L(a,b){var c=a.ownerDocument.defaultView,d=J.get(c);if(!d){var e=J.set;var f=La;var h=void 0===h?{}:h;var k=h.needsRootBounds;f=new c.IntersectionObserver(f,{threshold:h.threshold,root:c.parent&&c.parent!=c&&k?c.document:void 0});e.call(J,c,d=f)}K.set(a,b);d.observe(a)}function M(a){var b=J.get(a.ownerDocument.defaultView);b&&b.unobserve(a);K.delete(a)}function La(a){for(var b=0;b<a.length;b++){var c=a[b],d=c.isIntersecting;(c=K.get(c.target))&&c(d)}};function N(a){a=AMP.BaseElement.call(this,a)||this;a.L=null;a.K=null;a.T=!1;return a}p(N,AMP.BaseElement);N.prerenderAllowed=function(){return!0};g=N.prototype;
g.buildCallback=function(){var a=this,b=x(this.win,"input");if(Ka(this.element.ownerDocument)||this.element.hasAttribute("controls"))this.T=!0,this.element.classList.add("i-amphtml-carousel-has-controls");else b.onMouseDetected(function(c){c&&(a.T=!0,Aa(a.element,!a.T),a.element.classList.add("i-amphtml-carousel-has-controls"))},!0);this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};g.viewportCallbackTemp=function(a){a&&this.hintControls()};
g.buildButton=function(a,b){var c=this.element.ownerDocument.createElement("div");c.tabIndex=0;c.classList.add("amp-carousel-button");c.classList.add(a);c.setAttribute("role",this.buttonsAriaRole());c.onkeydown=function(d){"Enter"!=d.key&&" "!=d.key||d.defaultPrevented||(d.preventDefault(),b())};c.onclick=b;return c};g.buttonsAriaRole=function(){return"button"};
g.buildButtons=function(){var a=this;this.L=this.buildButton("amp-carousel-button-prev",function(){a.interactionPrev()});this.element.appendChild(this.L);this.K=this.buildButton("amp-carousel-button-next",function(){a.interactionNext()});this.updateButtonTitles();this.element.appendChild(this.K)};g.isRelayoutNeeded=function(){return!0};g.buildCarousel=function(){};g.setupGestures=function(){};g.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};g.goCallback=function(){};
g.setControlsState=function(){this.L.classList.toggle("amp-disabled",!this.hasPrev());this.L.setAttribute("aria-disabled",!this.hasPrev());this.K.classList.toggle("amp-disabled",!this.hasNext());this.K.setAttribute("aria-disabled",!this.hasNext());this.L.tabIndex=this.hasPrev()?0:-1;this.K.tabIndex=this.hasNext()?0:-1};
g.hintControls=function(){var a=this;this.T||this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");z(a.win).delay(function(){a.mutateElement(function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");Aa(a.element,!a.T)})},4E3)})};g.updateButtonTitles=function(){this.K.title=this.getNextButtonTitle();this.L.title=this.getPrevButtonTitle()};
g.getNextButtonTitle=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"};g.getPrevButtonTitle=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"};g.layoutCallback=function(){var a=this;L(this.element,function(b){return a.viewportCallbackTemp(b)});return r()};g.unlayoutCallback=function(){M(this.element);return!0};g.hasPrev=function(){};g.hasNext=function(){};
g.interactionNext=function(){this.K.classList.contains("amp-disabled")||this.go(1,!0,!1)};g.interactionPrev=function(){this.L.classList.contains("amp-disabled")||this.go(-1,!0,!1)};t({c:!0,v:!0,a:!0,ad:!0});var O,Ma="Webkit webkit Moz moz ms O o".split(" "),Na={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function Oa(a,b){if(b.startsWith("--"))return b;O||(O=Object.create(null));var c=O[b];if(!c){c=b;if(void 0===a[b]){var d=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var e=0;e<Ma.length;e++){var f=Ma[e]+d;if(void 0!==a[f]){d=f;break a}}d=""}var h=d;void 0!==a[h]&&(c=h)}O[b]=c}return c}
function Pa(a,b){var c=Oa(a.style,"order");c&&(c.startsWith("--")?a.style.setProperty(c,b):a.style[c]=b)}function Qa(a){var b=Oa(a.style,"scrollSnapType");if(b)return b.startsWith("--")?a.style.getPropertyValue(b):a.style[b]};var P;function Ra(a,b,c){var d={passive:!0},e=Sa(),f=!1;d&&(f=d.capture);a.addEventListener(b,function(h){try{return c(h)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}},e?d:f)}function Sa(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function Q(a,b,c){Ra(a,b,c)};function R(a,b){return function(c){return a+(b-a)*c}};function S(a){a=N.call(this,a)||this;a.A=0;a.fa=0;a.I=null;a.D=null;a.ia=null;return a}p(S,N);S.prerenderAllowed=N.prerenderAllowed;g=S.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
g.buildCarousel=function(){var a=this;this.I=this.getRealChildren();this.D=this.element.ownerDocument.createElement("div");this.D.classList.add("i-amphtml-scrollable-carousel-container");this.D.setAttribute("tabindex","-1");this.element.appendChild(this.D);this.I.forEach(function(b){A(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.D.appendChild(b)});this.$();this.D.addEventListener("scroll",this.ha.bind(this));this.D.addEventListener("keydown",
this.da.bind(this));this.registerAction("goToSlide",function(b){var c=b.args;c&&(c=parseInt(c.index,10),Ta(a,c))},1);ta(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])};g.buttonsAriaRole=function(){return"presentation"};g.layoutCallback=function(){var a=this;L(this.element,function(b){return a.viewportCallbackTemp(b)});Ua(this,this.A);Va(this,this.A,1);this.setControlsState();return r()};g.unlayoutCallback=function(){M(this.element);return N.prototype.unlayoutCallback.call(this)};
g.viewportCallbackTemp=function(a){N.prototype.viewportCallbackTemp.call(this,a);Wa(this,this.A,this.A)};g.goCallback=function(a,b){var c=this,d=Xa(this,this.A,a),e=this.A;if(d!=e)if(b){var f=R(e,d);G(this.element,function(h){c.D.scrollLeft=f(h)},200,"ease-in-out").thenAlways(function(){T(c,d)})}else T(this,d),this.D.scrollLeft=d};
function Ta(a,b){var c=a.I.length;if(!isFinite(b)||0>b||b>=c)a.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",b),r();else{var d=a.A,e=d;a.measureMutateElement(function(){e=a.I[b].offsetLeft-(a.element.offsetWidth-a.I[b].offsetWidth)/2},function(){if(e!=d){var f=R(d,e);G(a.element,function(h){a.D.scrollLeft=f(h)},200,"ease-in-out").thenAlways(function(){T(a,e)})}})}}g.ha=function(){var a=this.D.scrollLeft;this.A=a;null===this.ia&&Ya(this,a)};
g.da=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function Ya(a,b){a.ia=z(a.win).delay(function(){30>Math.abs(b-a.A)?(w().fine("amp-scrollable-carousel","slow scrolling: %s - %s",b,a.A),a.ia=null,T(a,a.A)):(w().fine("amp-scrollable-carousel","fast scrolling: %s - %s",b,a.A),Ya(a,a.A))},100)}function T(a,b){Wa(a,b,a.fa);Ua(a,b);Va(a,b,Math.sign(b-a.fa));a.fa=b;a.A=b;a.setControlsState()}
function Xa(a,b,c){var d=a.element.offsetWidth,e=a.D.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function U(a,b,c){for(var d=a.element.offsetWidth,e=0;e<a.I.length;e++){var f=a.I[e];f.offsetLeft+f.offsetWidth>=b&&f.offsetLeft<=b+d&&c(f)}}function Ua(a,b){U(a,b,function(c){A(a.element).scheduleLayout(a.element,c)})}function Va(a,b,c){var d=Xa(a,b,c);d!=b&&U(a,d,function(e){A(a.element).schedulePreload(a.element,e)})}
function Wa(a,b,c){var d=[];U(a,b,function(e){d.push(e)});c!=b&&U(a,c,function(e){d.includes(e)||A(a.element).schedulePause(a.element,e)})}g.hasPrev=function(){return 0!=this.A};g.hasNext=function(){return this.A!=Math.max(this.D.scrollWidth-this.element.offsetWidth,0)};g.$=function(){Q(this.element,"touchmove",function(a){return a.stopPropagation()})};function V(a){a=N.call(this,a)||this;a.U=null;a.R=!1;a.ea=!1;a.J=!1;a.ka=5E3;a.M=null;a.oa=0;a.shouldLoop=!1;a.G=!1;return a}p(V,N);V.prerenderAllowed=N.prerenderAllowed;g=V.prototype;
g.buildCarousel=function(){var a=this;this.R=this.element.hasAttribute("loop");this.J=this.element.hasAttribute("autoplay");var b=this.element.getAttribute("autoplay");b&&(this.M=parseInt(b,10),ra(sa(this.M)));this.buildSlides();this.shouldLoop=this.R&&this.isLoopingEligible();(this.G=this.J&&this.isLoopingEligible())&&0!=this.M&&Za(this);this.registerAction("toggleAutoplay",function(c){(c=c.args)&&void 0!==c.toggleOn?$a(a,c.toggleOn):$a(a,!a.J)},1)};g.buildSlides=function(){};
g.viewportCallbackTemp=function(a){N.prototype.viewportCallbackTemp.call(this,a);a?W(this):this.clearAutoplay()};g.goCallback=function(a,b,c){this.moveSlide(a,b,c?1:3);c?W(this):this.clearAutoplay()};g.moveSlide=function(){};g.isLoopingEligible=function(){return!1};function Za(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.ka=Math.max(1E3,b));a.R||(a.element.setAttribute("loop",""),a.ea=!0,a.R=!0,a.shouldLoop=!0)}
function W(a){a.G&&0!=a.M&&(a.clearAutoplay(),a.U=z(a.win).delay(a.go.bind(a,1,!0,!0),a.ka))}function $a(a,b){if(b!=a.G){var c=a.G;a.J=b;a.G=a.J&&a.isLoopingEligible();!c&&a.G&&Za(a);a.G?W(a):a.clearAutoplay()}}g.clearAutoplay=function(){null!==this.U&&(z(this.win).cancel(this.U),this.U=null)};g.removeAutoplay=function(){this.clearAutoplay();this.ea&&(this.element.removeAttribute("loop"),this.shouldLoop=this.R=this.ea=!1);this.G=this.J=!1};var ab=/vertical/,bb=new WeakMap,X=new WeakMap,cb=new WeakMap;function db(a,b){var c=a.ownerDocument.defaultView;if(c){var d=X.get(a);d||(d=[],X.set(a,d),eb(c).observe(a));if(!d.some(function(f){return f.callback===b&&0===f.type})){d.push({type:0,callback:b});var e=cb.get(a);e&&setTimeout(function(){return fb(0,b,e)})}}}
function gb(a,b){var c=X.get(a);c&&(ja(c,function(d){return d.callback===b&&0===d.type}),0==c.length&&(X.delete(a),cb.delete(a),(c=a.ownerDocument.defaultView)&&eb(c).unobserve(a)))}function eb(a){var b=bb.get(a);b||(b=new a.ResizeObserver(hb),bb.set(a,b));return b}function hb(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=X.get(e);if(f)for(cb.set(e,d),e=0;e<f.length;e++){var h=f[e];fb(h.type,h.callback,d)}}}}
function fb(a,b,c){if(0==a){a=c.contentRect;a={width:a.width,height:a.height};try{b(a)}catch(ba){la(ba)}}else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=ab.test((a.ownerDocument.defaultView.getComputedStyle(a)||Na)["writing-mode"]),h=a.offsetWidth,k=a.offsetHeight;if(f){var l=h;var ca=k}else ca=h,l=k;e={inlineSize:ca,blockSize:l}}try{b(e)}catch(ba){la(ba)}}};function ib(a,b,c){c=void 0===c?{}:c;var d=void 0===d?!0:d;var e=c;Ba(a).then(function(f){f&&f.triggerEventForTarget(a,b,e,d)})};function Y(a){a=V.call(this,a)||this;a.H=null;a.S=!1;a.C=[];a.o=0;a.j=null;a.N=[];a.Y=!1;a.X=null;a.ca=!1;a.P=0;a.h=null;a.na=0;a.F=0;a.W=0;a.aa=[];var b=x(a.win,"platform");a.ba=b.isIos();a.ta=b.isSafari();a.Z=null;if(x(a.win,"platform").getIosVersionString().startsWith("10.3"))var c=!0;else if(a.ba)c=!1;else{var d=a.win;if(d.__AMP__EXPERIMENT_TOGGLES)c=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var e in d.AMP_CONFIG){var f=
d.AMP_CONFIG[e];"number"===typeof f&&0<=f&&1>=f&&(c[e]=Math.random()<f)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(e=d.AMP_CONFIG["allow-doc-opt-in"],f=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=f.getAttribute("content").split(",");for(var h=0;h<f.length;h++)-1!=e.indexOf(f[h])&&(c[f[h]]=!0)}e=Object;f=e.assign;h="";try{"localStorage"in d&&(h=d.localStorage.getItem("amp-experiment-toggles"))}catch(ca){w().warn("EXPERIMENTS",
"Failed to retrieve experiments from localStorage.")}h=h?h.split(/\s*,\s*/g):[];for(var k=Object.create(null),l=0;l<h.length;l++)0!=h[l].length&&("-"==h[l][0]?k[h[l].substr(1)]=!1:k[h[l]]=!0);f.call(e,c,k);if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length){e=d.AMP_CONFIG["allow-url-opt-in"];f=d.location.originalHash||d.location.hash;d=Object.create(null);if(f)for(;k=na.exec(f);)h=ma(k[1],k[1]),k=k[2]?ma(k[2].replace(/\+/g," "),k[2]):"",d[h]=
k;for(f=0;f<e.length;f++)h=d["e-"+e[f]],"1"==h&&(c[e[f]]=!0),"0"==h&&(c[e[f]]=!1)}}c=!c["amp-carousel-chrome-scroll-snap"]}a.ja=c;a.ma=!1;a.V=a.V.bind(a);return a}p(Y,V);Y.prerenderAllowed=V.prerenderAllowed;g=Y.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildSlides=function(){var a=this;this.H=this.getVsync();this.Z=ta(this.element);this.Z.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"]);this.S=void 0!=Qa(this.element);this.ja&&(this.S=!1);this.element.classList.add("i-amphtml-slidescroll");this.C=this.getRealChildren();this.o=this.C.length;this.j=this.win.document.createElement("div");this.j.setAttribute("tabindex","-1");this.j.classList.add("i-amphtml-slides-container");this.j.setAttribute("aria-live","polite");this.ja&&this.j.classList.add("i-amphtml-slidescroll-no-snap");
if(this.S){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");this.j.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.j.appendChild(b)}this.element.appendChild(this.j);this.C.forEach(function(c,d){a.aa.push(c.getAttribute("data-slide-id")||d.toString());A(a.element).setOwner(c,a.element);c.classList.add("amp-carousel-slide");var e=a.win.document.createElement("div");e.classList.add("i-amphtml-slide-item");
a.j.appendChild(e);e.appendChild(c);a.N.push(e)});this.$();this.j.addEventListener("scroll",this.ha.bind(this));this.j.addEventListener("keydown",this.da.bind(this));Q(this.j,"touchmove",this.za.bind(this));Q(this.j,"touchend",this.ya.bind(this));this.registerAction("goToSlide",function(c){(c=c.args)&&a.goToSlide(c.index,3)},1)};g.attachedCallback=function(){db(this.element,this.V)};g.detachedCallback=function(){gb(this.element,this.V)};g.isLoopingEligible=function(){return 1<this.o};
g.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.goToSlide(b,3)};g.za=function(){this.clearAutoplay();this.ca=!0};function jb(a,b){a.X&&z(a.win).cancel(a.X);a.X=z(a.win).delay(function(){a.X=null;if(!a.Y&&!a.ca){var c=a.j.scrollLeft;a.S?kb(a,c,1):Z(a,c,void 0,1)}},b)}g.ya=function(){var a=this.ja?45:100;this.ca=!1;jb(this,a)};g.V=function(a){this.F=a.width;this.ma=!0};
g.layoutCallback=function(){var a=this;L(this.element,function(d){return a.viewportCallbackTemp(d)});if(za(this.element))return r();this.ma||(this.F=this.j.clientWidth);if(null===this.h)lb(this,this.na);else{var b=qa().assertNumber(this.h,"E#19457 this.slideIndex_"),c=mb(this,b);A(this.element).scheduleLayout(this.element,this.C[b]);this.W=this.j.scrollLeft=c}return r()};g.unlayoutCallback=function(){M(this.element);this.h=null;return V.prototype.unlayoutCallback.call(this)};
g.hasPrev=function(){return this.shouldLoop||0<this.h};g.hasNext=function(){return this.shouldLoop||this.h<this.C.length-1};g.moveSlide=function(a,b,c){if(null!==this.h){var d=this.hasNext(),e=this.hasPrev();if(1==a&&d||-1==a&&e){var f=this.h+a;-1==f?f=this.o-1:f>=this.o&&(f=0);b?Z(this,1!=a||e?this.F:0,a,c):nb(this,f,c)}}};g.ha=function(){var a=this.j.scrollLeft;this.ba||this.ta||ob(this,a);jb(this,this.S?200:this.ba?45:100);this.W=a};
g.da=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function ob(a,b){var c=a.j.scrollWidth;-1==a.P&&b>=a.W?Z(a,b).then(function(){a.P=0}):1==a.P&&b<=a.W?Z(a,b).then(function(){a.P=0}):a.P=0>b?-1:b+a.F>c?1:0}function Z(a,b,c,d){a.Y=!0;var e=pb(a,b)-a.h,f=a.hasPrev(),h=f?a.F:0;0!=e||1!=c&&-1!=c||(e=c);if(1==e||-1!=e&&e==-1*(a.o-1))h=f?2*a.F:a.F;else if(-1==e||e==a.o-1)h=0;return qb(a,b,h).then(function(){kb(a,h,d)})}
function pb(a,b){if(!b&&!a.F)return 0;var c=Math.round(b/a.F),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.h+d;return b=a.shouldLoop?0>b?a.o-1:b>=a.o?0:b:0>b?0:b>=a.o?a.o-1:b}function rb(a,b){var c=String(b+1),d=String(a.o);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}
g.getPrevButtonTitle=function(){var a=this.h;a=0<=a-1?a-1:this.shouldLoop?this.o-1:null;a=null==a?0:a;return V.prototype.getPrevButtonTitle.call(this)+rb(this,a)};g.getNextButtonTitle=function(){var a=this.h;a=a+1<this.o?a+1:this.shouldLoop?0:null;a=null==a?this.o-1:a;return V.prototype.getNextButtonTitle.call(this)+rb(this,a)};function kb(a,b,c){if(sa(b)&&null!==a.h){a.Y=!0;var d=pb(a,b);a.H.mutate(function(){nb(a,d,c);a.H.mutate(function(){a.Y=!1})})}}
g.goToSlide=function(a,b){var c=parseInt(a,10);!isFinite(c)||0>c||c>=this.o?this.user().error("AMP-CAROUSEL","Invalid [slide] value: ",a):null===this.h?this.na=c:nb(this,c,b)};
function lb(a,b){var c=a.o;if(0>b||b>=c||a.h==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?a.o-1:null,e=b+1<a.o?b+1:a.shouldLoop?0:null,f=[];null!=d&&f.push(d);f.push(b);null!=e&&e!==d&&f.push(e);if(void 0===a.C[b])return w().error("AMP-CAROUSEL","Attempting to access a non-existant slide %s / %s",b,c),!1;f.forEach(function(h,k){a.shouldLoop&&Pa(a.N[h],k+1);a.N[h].classList.add("i-amphtml-slide-item-show");var l=A(a.element);h==b?(l.scheduleLayout(a.element,a.C[h]),l.scheduleResume(a.element,a.C[h]),
a.C[h].setAttribute("aria-hidden","false")):(l.schedulePreload(a.element,a.C[h]),a.C[h].setAttribute("aria-hidden","true"))});a.j.scrollLeft=mb(a,b);sb(a,b);a.h=b;a.M&&a.h===a.o-1&&(a.oa++,a.oa==a.M&&a.removeAutoplay());tb(a,f);a.setControlsState();a.updateButtonTitles();return!0}
function nb(a,b,c){var d=void 0===c?1:c;if(lb(a,b)){var e=a.win;c=t({index:b});var f={detail:c};Object.assign(f,void 0);"function"==typeof e.CustomEvent?c=new e.CustomEvent("slidescroll.slideChange",f):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("slidescroll.slideChange",!!f.bubbles,!!f.cancelable,c),c=e);a.Z.trigger(a.element,"slideChange",c,d);a=a.element;b={index:b,actionTrust:d};c=a.ownerDocument.createEvent("Event");c.data=b;c.initEvent("slideChange",xa.bubbles,xa.cancelable);
a.dispatchEvent(c)}}function mb(a,b){var c=a.F;if(!a.shouldLoop&&0==b||1>=a.C.length)c=0;return c}function tb(a,b){for(var c=a.o,d=0;d<c;d++)a.N[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&Pa(a.N[d],""),a.N[d].classList.remove("i-amphtml-slide-item-show"),a.C[d].removeAttribute("aria-hidden")),a.h!=d&&A(a.element).schedulePause(a.element,a.C[d]))}
function qb(a,b,c){if(b==c)return r();var d=R(b,c);c=E(.8,0,.6,1);return G(a.j,function(e){a.j.scrollLeft=d(e)},80,c).thenAlways()}g.$=function(){Q(this.element,"touchmove",function(a){return a.stopPropagation()})};function sb(a,b){var c=b-a.h;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.h&&(c=1));var d=t({fromSlide:null===a.h?"null":a.aa[a.h],toSlide:a.aa[b]});ib(a.element,"amp-carousel-change",d);1==c?ib(a.element,"amp-carousel-next",d):ib(a.element,"amp-carousel-prev",d)}};function ub(){return AMP.BaseElement.apply(this,arguments)||this}p(ub,AMP.BaseElement);ub.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new Y(this.element):new S(this.element)};(function(a){a.registerElement("amp-carousel",ub,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-carousel-0.1.js.map
