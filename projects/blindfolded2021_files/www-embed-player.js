(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={Aa:b,Ba:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.Aa;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ba?a.h=a.m||a.u:void 0!=b.A&&a.u<b.A?(a.h=b.A,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ba)throw b.Aa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
function Ba(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ba(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.u)}};
b.prototype.K=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.N(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.X(h,g):this.m(g)};
b.prototype.u=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.L();this.C()};
b.prototype.L=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.N=function(g){var h=this.l();g.fa(h.resolve,h.reject)};
b.prototype.X=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(E){try{l(r(E))}catch(I){n(I)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.fa(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(E){return function(I){r[E]=I;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).fa(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ba(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ba(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ba(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ba(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&Ba(h.i,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,H:p}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ba(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.qa=void 0;a.getInstance=function(){return a.qa?a.qa:a.qa=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=Ma:B=Na;return B.apply(null,arguments)}
function Oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Pa(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Qa(a){return a}
;function Ra(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ra);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.La=b)}
C(Ra,Error);Ra.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ua(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function $a(a,b){b=Va(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;function ob(){if(void 0===nb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(c){y.console&&y.console.error(c.message)}nb=a}else nb=a}return nb}
;function pb(a,b){this.h=b===qb?a:""}
m=pb.prototype;m.Z=!0;m.Y=function(){return this.h.toString()};
m.oa=!0;m.la=function(){return 1};
m.toString=function(){return this.h+""};
function rb(a){if(a instanceof pb&&a.constructor===pb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var qb={};var sb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function tb(a,b){if(b)a=a.replace(ub,"&amp;").replace(vb,"&lt;").replace(wb,"&gt;").replace(xb,"&quot;").replace(yb,"&#39;").replace(zb,"&#0;");else{if(!Ab.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;"))}return a}
var ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function Bb(a,b){this.h=b===Cb?a:""}
m=Bb.prototype;m.Z=!0;m.Y=function(){return this.h.toString()};
m.oa=!0;m.la=function(){return 1};
m.toString=function(){return this.h.toString()};
function Db(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ga(a);return"type_error:SafeUrl"}
var Eb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Fb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Hb(a){if(a instanceof Bb)return a;a="object"==typeof a&&a.Z?a.Y():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return new Bb(a,Cb)}
var Cb={},Ib=new Bb("about:invalid#zClosurez",Cb);var Jb;a:{var Kb=y.navigator;if(Kb){var Lb=Kb.userAgent;if(Lb){Jb=Lb;break a}}Jb=""}function G(a){return-1!=Jb.indexOf(a)}
;function Mb(a,b,c){this.h=c===Nb?a:"";this.i=b}
m=Mb.prototype;m.oa=!0;m.la=function(){return this.i};
m.Z=!0;m.Y=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Nb={};function Ob(a,b){var c=ob();a=c?c.createHTML(a):a;return new Mb(a,b,Nb)}
;function Pb(a,b){b=b instanceof Bb?b:Hb(b);a.href=Db(b)}
function Qb(a,b){a.rel="stylesheet";a.href=rb(b).toString();(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=y?b=Rb(b.document,"style"):(null===Sb&&(Sb=Rb(y.document,"style")),b=Sb);b&&a.setAttribute("nonce",b)}
function Tb(a,b){a.src=rb(b);(b=Ub(a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Ub(a){if(a&&a!=y)return Rb(a.document,"script");null===Vb&&(Vb=Rb(y.document,"script"));return Vb}
var Vb=null,Sb=null,Wb=/^[\w+/_-]+[=]{0,2}$/;function Rb(a,b){if(!a.querySelector)return"";var c=a.querySelector(b+"[nonce]");c||"style"!=b||(c=a.querySelector('link[rel="stylesheet"][nonce]'));return c&&(a=c.nonce||c.getAttribute("nonce"))&&Wb.test(a)?a:""}
;function Xb(a){return a=tb(a,void 0)}
function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
function dc(a,b){b=cc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var ec=/#|$/;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function fc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function gc(a){gc[" "](a);return a}
gc[" "]=Ea;var hc=G("Opera"),ic=G("Trident")||G("MSIE"),jc=G("Edge"),kc=G("Gecko")&&!(-1!=Jb.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),lc=-1!=Jb.toLowerCase().indexOf("webkit")&&!G("Edge");function mc(){var a=y.document;return a?a.documentMode:void 0}
var nc;a:{var oc="",pc=function(){var a=Jb;if(kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(jc)return/Edge\/([\d\.]+)/.exec(a);if(ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
pc&&(oc=pc?pc[1]:"");if(ic){var qc=mc();if(null!=qc&&qc>parseFloat(oc)){nc=String(qc);break a}}nc=oc}var rc=nc,sc;if(y.document&&ic){var tc=mc();sc=tc?tc:parseInt(rc,10)||void 0}else sc=void 0;var uc=sc;var vc=fc()||G("iPod"),wc=G("iPad"),xc=G("Safari")&&!((G("Chrome")||G("CriOS"))&&!G("Edge")||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(fc()||G("iPad")||G("iPod"));var yc={},zc=null;
function Ac(a){var b=3;Ha(a);void 0===b&&(b=0);if(!zc){zc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));yc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===zc[h]&&(zc[h]=g)}}}b=yc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var L=window;var Bc=!ic||9<=Number(uc);function Cc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Cc.prototype;m.clone=function(){return new Cc(this.x,this.y)};
m.equals=function(a){return a instanceof Cc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Dc(a,b){this.width=a;this.height=b}
m=Dc.prototype;m.clone=function(){return new Dc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ec(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Fc(a,b){cb(b,function(c,d){c&&"object"==typeof c&&c.Z&&(c=c.Y());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Gc.hasOwnProperty(d)?a.setAttribute(Gc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Gc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Hc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Xb(g.name),'"');if(g.type){f.push(' type="',Xb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ic(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Fc(f,g));2<d.length&&Jc(e,f,d);return f}
function Jc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?ab(f):f,d)}}}
function Ic(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Lc(a){var b=Mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Nc(){var a=[];Lc(function(b){a.push(b)});
return a}
var Mc={Cb:"allow-forms",Db:"allow-modals",Eb:"allow-orientation-lock",Fb:"allow-pointer-lock",Gb:"allow-popups",Hb:"allow-popups-to-escape-sandbox",Ib:"allow-presentation",Jb:"allow-same-origin",Kb:"allow-scripts",Lb:"allow-top-navigation",Mb:"allow-top-navigation-by-user-activation"},Oc=Ua(function(){return Nc()});
function Pc(){var a=Ic(document,"IFRAME"),b={};D(Oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Qc(a){Rc();var b=ob();a=b?b.createScriptURL(a):a;return new pb(a,qb)}
var Rc=Ea;function Sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Tc=(new Date).getTime();function Uc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Vc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var E=e[1],I=e[2],J=e[3],U=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var V=J^E&(I^J);var K=1518500249}else V=E^I^J,K=1859775393;else 60>q?(V=E&I|J&(E|I),K=2400959708):(V=E^I^J,K=3395469782);V=((p<<5|p>>>27)&4294967295)+V+U+K+r[q]&4294967295;U=J;J=I;I=(E<<30|E>>>2)&4294967295;E=p;p=V}e[0]=e[0]+p&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+U&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],E=0,I=p.length;E<I;++E)q.push(p.charCodeAt(E));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var E=24;0<=E;E-=8)p[r++]=e[q]>>E&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ma:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Wc(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Xc(Uc(d),a,c||null)].join(" "):null}
function Xc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Yc(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Yc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Yc(a){var b=Vc();b.update(a);return b.Ma().toLowerCase()}
;var Zc={};function $c(a){this.h=a||{cookie:""}}
m=$c.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ra:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ad=new $c("undefined"==typeof document?null:document);function bd(a){return!!Zc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function cd(a,b,c,d){(a=y[a])||(a=(new $c(document)).get(b));return a?Wc(a,c,d):null}
function dd(a){var b=void 0===b?!1:b;var c=Uc(String(y.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;bd(e)&&(f=f||y.__1PSAPISID);if(f)e=!0;else{var g=new $c(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");bd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,e||(e=new $c(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Wc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&bd(b)&&((b=cd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=cd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ed(){this.h=[];this.i=-1}
ed.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
ed.prototype.get=function(a){return!!this.h[a]};
function fd(a){-1==a.i&&(a.i=Ya(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function gd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
gd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function hd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var id;
function jd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Ic(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=B(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.xa;c.xa=null;e()}};
return function(e){d.next={xa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function kd(a){y.setTimeout(function(){throw a;},0)}
;function ld(){this.i=this.h=null}
ld.prototype.add=function(a,b){var c=md.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
ld.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var md=new gd(function(){return new nd},function(a){return a.reset()});
function nd(){this.next=this.scope=this.h=null}
nd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
nd.prototype.reset=function(){this.next=this.scope=this.h=null};function od(a,b){pd||qd();rd||(pd(),rd=!0);sd.add(a,b)}
var pd;function qd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);pd=function(){a.then(td)}}else pd=function(){var b=td;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(id||(id=jd()),id(b)):y.setImmediate(b)}}
var rd=!1,sd=new ld;function td(){for(var a;a=sd.remove();){try{a.h.call(a.scope)}catch(b){kd(b)}hd(md,a)}rd=!1}
;function ud(){this.i=-1}
;function vd(){this.i=64;this.h=[];this.m=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.u=this.j=0;this.reset()}
C(vd,ud);vd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.u=this.j=0};
function wd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
vd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)wd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){wd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){wd(this,e);f=0;break}}this.j=f;this.u+=b}};
vd.prototype.digest=function(){var a=[],b=8*this.u;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;wd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function xd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=yd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,zd[c])c=zd[c];else{c=String(c);if(!zd[c]){var f=/function\s+([^\(]+)/m.exec(c);zd[c]=f?f[1]:"[Anonymous]"}c=zd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function yd(a,b){b||(b={});b[Ad(a)]=!0;var c=a.stack||"";(a=a.La)&&!b[Ad(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=yd(a,b));return c}
function Ad(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var zd={};function Bd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Cd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Cd.apply(null,d):Bd(d)}}
;function M(){this.h=this.h;this.u=this.u}
M.prototype.h=!1;M.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Dd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
M.prototype.D=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Ed(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gd(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ed(a).match(/\S+/g)||[],b=0<=Va(a,b));return b}
function Hd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gd(a,"inverted-hdpi")&&Fd(a,Wa(a.classList?a.classList:Ed(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Id="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Jd(){}
Jd.prototype.next=function(){throw Id;};
Jd.prototype.O=function(){return this};
function Kd(a){if(a instanceof Jd)return a;if("function"==typeof a.O)return a.O(!1);if(Ha(a)){var b=0,c=new Jd;c.next=function(){for(;;){if(b>=a.length)throw Id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ld(a,b){if(Ha(a))try{D(a,b,void 0)}catch(c){if(c!==Id)throw c;}else{a=Kd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Id)throw c;}}}
function Md(a){if(Ha(a))return ab(a);a=Kd(a);var b=[];Ld(a,function(c){b.push(c)});
return b}
;function Nd(a,b){this.i={};this.h=[];this.T=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Nd)for(c=Od(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Od(a){Pd(a);return a.h.concat()}
m=Nd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;b=b||Qd;Pd(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Qd(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.T=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.T++,this.h.length>2*this.j&&Pd(this),!0):!1};
function Pd(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.T++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Od(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Nd(this)};
m.O=function(a){Pd(this);var b=0,c=this.T,d=this,e=new Jd;e.next=function(){if(c!=d.T)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Id;var f=d.h[b++];return a?f:d.i[f]};
return e};var Rd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function Sd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Sd.prototype.stopPropagation=function(){this.j=!0};
Sd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Td(a,b){Sd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(Td,Sd);var Ud={2:"touch",3:"pen",4:"mouse"};
Td.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(kc){a:{try{gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ud[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Td.M.preventDefault.call(this)};
Td.prototype.stopPropagation=function(){Td.M.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Td.prototype.preventDefault=function(){Td.M.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vd="closure_listenable_"+(1E6*Math.random()|0);var Wd=0;function Xd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ha=e;this.key=++Wd;this.ba=this.ea=!1}
function Yd(a){a.ba=!0;a.listener=null;a.h=null;a.src=null;a.ha=null}
;function Zd(a){this.src=a;this.listeners={};this.h=0}
Zd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=$d(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new Xd(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
Zd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$d(e,b,c,d);return-1<b?(Yd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ae(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(Yd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function $d(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ba&&f.listener==b&&f.capture==!!c&&f.ha==d)return e}return-1}
;var be="closure_lm_"+(1E6*Math.random()|0),ce={},de=0;function ee(a,b,c,d,e){if(d&&d.once)fe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ee(a,b[f],c,d,e);else c=ge(c),a&&a[Vd]?he(a,b,c,Ia(d)?!!d.capture:!!d,e):ie(a,b,c,!1,d,e)}
function ie(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=je(a);h||(a[be]=h=new Zd(a));c=h.add(b,c,d,g,f);if(!c.h){d=ke();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Rd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(le(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");de++}}
function ke(){function a(c){return b.call(a.src,a.listener,c)}
var b=me;return a}
function fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)fe(a,b[f],c,d,e);else c=ge(c),a&&a[Vd]?a.j.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):ie(a,b,c,!0,d,e)}
function ne(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ne(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=ge(c),a&&a[Vd])?a.j.remove(String(b),c,d,e):a&&(a=je(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=$d(b,c,d,e)),(c=-1<a?b[a]:null)&&oe(c))}
function oe(a){if("number"!==typeof a&&a&&!a.ba){var b=a.src;if(b&&b[Vd])ae(b.j,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(le(c),d):b.addListener&&b.removeListener&&b.removeListener(d);de--;(c=je(b))?(ae(c,a),0==c.h&&(c.src=null,b[be]=null)):Yd(a)}}}
function le(a){return a in ce?ce[a]:ce[a]="on"+a}
function me(a,b){if(a.ba)a=!0;else{b=new Td(b,this);var c=a.listener,d=a.ha||a.src;a.ea&&oe(a);a=c.call(d,b)}return a}
function je(a){a=a[be];return a instanceof Zd?a:null}
var pe="__closure_events_fn_"+(1E9*Math.random()>>>0);function ge(a){if("function"===typeof a)return a;a[pe]||(a[pe]=function(b){return a.handleEvent(b)});
return a[pe]}
;function qe(){M.call(this);this.j=new Zd(this);this.N=this;this.F=null}
C(qe,M);qe.prototype[Vd]=!0;qe.prototype.addEventListener=function(a,b,c,d){ee(this,a,b,c,d)};
qe.prototype.removeEventListener=function(a,b,c,d){ne(this,a,b,c,d)};
function re(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.N;c=b.type||b;"string"===typeof b?b=new Sd(b,a):b instanceof Sd?b.target=b.target||a:(e=b,b=new Sd(c,a),mb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=se(g,c,!0,b)&&e}b.j||(g=b.h=a,e=se(g,c,!0,b)&&e,b.j||(e=se(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=se(g,c,!1,b)&&e}
qe.prototype.D=function(){qe.M.D.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Yd(d[e]);delete a.listeners[c];a.h--}}this.F=null};
function he(a,b,c,d,e){a.j.add(String(b),c,!1,d,e)}
function se(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ba&&g.capture==c){var h=g.listener,k=g.ha||g.src;g.ea&&ae(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function te(a){var b=[];ue(new ve,a,b);return b.join("")}
function ve(){}
function ue(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ue(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),we(d,c),c.push(":"),ue(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":we(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ye=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function we(a,b){b.push('"',a.replace(ye,function(c){var d=xe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),xe[c]=d);return d}),'"')}
;function ze(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ae(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Be(b,2,c)},function(c){Be(b,3,c)})}catch(c){Be(this,3,c)}}
function Ce(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ce.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var De=new gd(function(){return new Ce},function(a){a.reset()});
function Ee(a,b,c){var d=De.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Fe(a){return new Ae(function(b,c){c(a)})}
Ae.prototype.then=function(a,b,c){return Ge(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ae.prototype.$goog_Thenable=!0;function He(a,b){return Ge(a,null,b,void 0)}
Ae.prototype.cancel=function(a){if(0==this.h){var b=new Ie(a);od(function(){Je(this,b)},this)}};
function Je(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Je(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ke(c),Le(c,e,3,b)))}a.j=null}else Be(a,3,b)}
function Me(a,b){a.i||2!=a.h&&3!=a.h||Ne(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ge(a,b,c,d){var e=Ee(null,null,null);e.h=new Ae(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ie?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Me(a,e);return e.h}
Ae.prototype.C=function(a){this.h=0;Be(this,2,a)};
Ae.prototype.F=function(a){this.h=0;Be(this,3,a)};
function Be(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Ae){Me(d,Ee(e||Ea,f||null,a));var g=!0}else if(ze(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){Oe(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Ne(a),3!=b||c instanceof Ie||Pe(a,c))}}
function Oe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ne(a){a.m||(a.m=!0,od(a.B,a))}
function Ke(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ae.prototype.B=function(){for(var a;a=Ke(this);)Le(this,a,this.h,this.o);this.m=!1};
function Le(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,Qe(b,c,d);else try{b.j?b.i.call(b.context):Qe(b,c,d)}catch(e){Re.call(null,e)}hd(De,b)}
function Qe(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pe(a,b){a.u=!0;od(function(){a.u&&Re.call(null,b)})}
var Re=kd;function Ie(a){Ra.call(this,a)}
C(Ie,Ra);Ie.prototype.name="cancel";function N(a){M.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
C(N,M);m=N.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Se(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=Za(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.aa(b)}}
m.aa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&$a(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.U=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Te(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.aa(c)}}return 0!=e}return!1};
function Te(a,b,c){od(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(D(b,this.aa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){N.M.D.call(this);this.clear();this.l.length=0};function Ue(a){this.h=a}
Ue.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,te(b))};
Ue.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ue.prototype.remove=function(a){this.h.remove(a)};function Ve(a){this.h=a}
C(Ve,Ue);function We(a){this.data=a}
function Xe(a){return void 0===a||a instanceof We?a:new We(a)}
Ve.prototype.set=function(a,b){Ve.M.set.call(this,a,Xe(b))};
Ve.prototype.i=function(a){a=Ve.M.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ve.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ye(a){this.h=a}
C(Ye,Ve);Ye.prototype.set=function(a,b,c){if(b=Xe(b)){if(c){if(c<Date.now()){Ye.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ye.M.set.call(this,a,b)};
Ye.prototype.i=function(a){var b=Ye.M.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ye.prototype.remove.call(this,a);else return b}};function Ze(){}
;function $e(){}
C($e,Ze);$e.prototype.clear=function(){var a=Md(this.O(!0)),b=this;D(a,function(c){b.remove(c)})};function af(a){this.h=a}
C(af,$e);m=af.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.O=function(a){var b=0,c=this.h,d=new Jd;d.next=function(){if(b>=c.length)throw Id;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function bf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(bf,af);function cf(a,b){this.i=a;this.h=null;if(ic&&!(9<=Number(uc))){df||(df=new Nd);this.h=df.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),df.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(cf,$e);var ef={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},df=null;function ff(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ef[b]})}
m=cf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(ff(a),b);gf(this)};
m.get=function(a){a=this.h.getAttribute(ff(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(ff(a));gf(this)};
m.O=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Jd;d.next=function(){if(b>=c.length)throw Id;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);gf(this)};
function gf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function hf(a,b){this.i=a;this.h=b+"::"}
C(hf,$e);hf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
hf.prototype.get=function(a){return this.i.get(this.h+a)};
hf.prototype.remove=function(a){this.i.remove(this.h+a)};
hf.prototype.O=function(a){var b=this.i.O(!0),c=this,d=new Jd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function jf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var kf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",kf,void 0);function O(a){jf(kf,arguments)}
function F(a,b){return a in kf?kf[a]:b}
;var lf=[];function mf(a){lf.forEach(function(b){return b(a)})}
function nf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){of(b)}}:a}
function of(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b));mf(a)}
function pf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;var qf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",qf,void 0);function rf(a){jf(qf,arguments)}
;function P(a){a=sf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function tf(a,b){a=sf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function sf(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var uf=0,vf=lc?"webkit":kc?"moz":ic?"ms":hc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++uf},void 0);var wf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function yf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",eb,void 0);var zf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",zf,void 0);
function Af(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bf=Ua(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Af(a,b,c,d);if(e)return e;e=++zf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xf(h);if(!Kc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xf(h);
h.currentTarget=a;return c.call(a,h)};
g=nf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function Df(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var Ef=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Ff(a,b){"function"===typeof a&&(a=nf(a));return window.setTimeout(a,b)}
function Gf(a){window.clearTimeout(a)}
;function Hf(a){this.C=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=Cf(window,"mousemove",B(this.K,this));a=B(this.F,this);"function"===typeof a&&(a=nf(a));this.L=window.setInterval(a,25)}
C(Hf,M);Hf.prototype.K=function(a){void 0===a.h&&yf(a);var b=a.h;void 0===a.i&&yf(a);this.i=new Cc(b,a.i)};
Hf.prototype.F=function(){if(this.i){var a=Ef();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Hf.prototype.D=function(){window.clearInterval(this.L);Df(this.J)};function If(){}
function Jf(a,b){return Kf(a,0,b)}
function Lf(a,b){return Kf(a,1,b)}
;function Mf(){If.apply(this,arguments)}
v(Mf,If);function Kf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ff(a,c||0)}
function Nf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Gf(a)}}
Mf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Mf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};Mf.h||(Mf.h=new Mf);var Of={};
function Pf(a){var b=void 0===a?{}:a;a=void 0===b.Qa?!0:b.Qa;b=void 0===b.eb?!1:b.eb;if(null==A("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Qf();Cf(document,"keydown",Qf);Cf(document,"keyup",Qf);Cf(document,"mousedown",Qf);Cf(document,"mouseup",Qf);a&&(b?Cf(window,"touchmove",function(){Rf("touchmove",200)},{passive:!0}):(Cf(window,"resize",function(){Rf("resize",200)}),Cf(window,"scroll",function(){Rf("scroll",200)})));
new Hf(function(){Rf("mouse",100)});
Cf(document,"touchstart",Qf,{passive:!0});Cf(document,"touchend",Qf,{passive:!0})}}
function Rf(a,b){Of[a]||(Of[a]=!0,Lf(function(){Qf();Of[a]=!1},b))}
function Qf(){null==A("_lact",window)&&Pf();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Sf(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Tf(){var a=Uf;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function Vf(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Wf=/^[\w.]*$/,Xf={q:!0,search_query:!0};function Yf(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Zf(f[0]||""),h=Zf(f[1]||"");g in c?Array.isArray(c[g])?bb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Yf);k.args=[{key:l,value:f[1],query:a,method:$f==n?"unchanged":n}];Xf.hasOwnProperty(l)||pf(k)}}return c}
var $f=String(Yf);function ag(a){var b=[];cb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function bg(a){"?"==a.charAt(0)&&(a=a.substr(1));return Yf(a,"&")}
function cg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),bg(1<a.length?a[1]:a[0])):{}}
function dg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=bg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return dc(a,e)+d}
function eg(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Zf(a){return a&&a.match(Wf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function fg(a){var b=gg;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Tc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Sa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(Sa){h=0}e.u_his=h;e.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,
e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Sa){}try{var n=h.outerWidth;var p=h.outerHeight}catch(Sa){}try{var r=h.innerWidth;var q=h.innerHeight}catch(Sa){}try{var E=h.screenLeft;var I=h.screenTop}catch(Sa){}try{r=h.innerWidth,q=h.innerHeight}catch(Sa){}try{var J=
h.screen.availWidth;var U=h.screen.availTop}catch(Sa){}k=[E,I,k,l,J,U,n,p,r,q];l=b.h.top;try{var V=(l||window).document,K="CSS1Compat"==V.compatMode?V.documentElement:V.body;var T=(new Dc(K.clientWidth,K.clientHeight)).round()}catch(Sa){T=new Dc(-12245933,-12245933)}V=T;T={};K=new ed;y.SVGElement&&y.document.createElementNS&&K.set(0);l=Pc();l["allow-top-navigation-by-user-activation"]&&K.set(1);l["allow-popups-to-escape-sandbox"]&&K.set(2);y.crypto&&y.crypto.subtle&&K.set(3);y.TextDecoder&&y.TextEncoder&&
K.set(4);K=fd(K);T.bc=K;T.bih=V.height;T.biw=V.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!L.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var gg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ag(fg(a))},void 0);var hg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function ig(){if(!hg)return null;var a=hg();return"open"in a?a:null}
function jg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var kg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
lg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),mg=!1;
function ng(a,b){b=void 0===b?{}:b;var c=eg(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in kg){var f=F(kg[e]);!f||!c&&ac(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!ac(a))b["X-YouTube-Ad-Signals"]=ag(fg(void 0));return b}
function og(a){var b=window.location.search,c=ac(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!eg(a)||(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=bg(b),f={};D(lg,function(g){e[g]&&(f[g]=e[g])});
return dg(a,f||{},!1)}
function pg(a,b){var c=b.format||"JSON";a=qg(a,b);var d=rg(a,b),e=!1,f=sg(a,function(k){if(!e){e=!0;h&&Gf(h);var l=jg(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=tg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ff(function(){e||(e=!0,f.abort(),Gf(h),g.call(b.context||y,f))},b.timeout)}return f}
function qg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=dg(a,b||{},!0);return a}
function rg(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=bg(e),mb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):cc(e));f=e||f&&!fb(f);!mg&&f&&
"POST"!=b.method&&(mg=!0,of(Error("AJAX request with postData should use POST")));return e}
function tg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ug(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=vg(g)})}d&&wg(e);
return e}
function wg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ob(a[b],null);a[c]=d}else wg(a[b])}}
function ug(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function sg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&nf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ig();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=og(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ng(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var xg=vc||wc;function yg(a){var b=Jb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var zg={},Ag=0;
function Bg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!yg("cobalt")){if(a){a instanceof Bb||(a="object"==typeof a&&a.Z?a.Y():String(a),Gb.test(a)?a=new Bb(a,Cb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Fb))&&Eb.test(b[1])?new Bb(a,Cb):null));a=Db(a||Ib);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Mb)){b="object"==typeof a;var f=null;b&&a.oa&&(f=a.la());a=Ob(tb(b&&a.Z?a.Y():String(a)),f)}a instanceof Mb&&a.constructor===Mb?a=a.h:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(te(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)sg(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)sg(a,b,"GET","",d);else{b:{try{var g=new Ta({url:a});if(g.j&&g.i||g.l){var h=$b(a.match(Zb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ec);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var E=a.indexOf("&",r);if(0>E||E>l)E=l;r+=3;q=decodeURIComponent(a.substr(r,E-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?Cg(a)?(b&&b(),f=!0):f=!1:f=!1;f||Dg(a,b)}}
function Eg(a,b,c){c=void 0===c?"":c;Cg(a,c)?b&&b():Bg(a,b,void 0,void 0,c)}
function Cg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Dg(a,b){var c=new Image,d=""+Ag++;zg[d]=c;c.onload=c.onerror=function(){b&&zg[d]&&b();delete zg[d]};
c.src=a}
;var Fg=y.ytPubsubPubsubInstance||new N,Gg=y.ytPubsubPubsubSubscribedKeys||{},Hg=y.ytPubsubPubsubTopicToKeys||{},Ig=y.ytPubsubPubsubIsSynchronous||{};function Jg(a,b){var c=Kg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Gg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ig[a]?f():Ff(f,0)}catch(g){of(g)}},void 0);
Gg[d]=!0;Hg[a]||(Hg[a]=[]);Hg[a].push(d);return d}return 0}
function Lg(a){var b=Kg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete Gg[c]}))}
function Mg(a,b){var c=Kg();c&&c.publish.apply(c,arguments)}
function Ng(a){var b=Kg();if(b)if(b.clear(a),a)Og(a);else for(var c in Hg)Og(c)}
function Kg(){return y.ytPubsubPubsubInstance}
function Og(a){Hg[a]&&(a=Hg[a],D(a,function(b){Gg[b]&&delete Gg[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.aa;N.prototype.publish=N.prototype.U;N.prototype.clear=N.prototype.clear;z("ytPubsubPubsubInstance",Fg,void 0);z("ytPubsubPubsubTopicToKeys",Hg,void 0);z("ytPubsubPubsubIsSynchronous",Ig,void 0);z("ytPubsubPubsubSubscribedKeys",Gg,void 0);var Pg=window,Q=Pg.ytcsi&&Pg.ytcsi.now?Pg.ytcsi.now:Pg.performance&&Pg.performance.timing&&Pg.performance.now&&Pg.performance.timing.navigationStart?function(){return Pg.performance.timing.navigationStart+Pg.performance.now()}:function(){return(new Date).getTime()};var Qg=tf("initial_gel_batch_timeout",1E3),Rg=Math.pow(2,16)-1,Sg=null,Tg=0,Ug=void 0,Vg=0,Wg=0,Xg=0,Yg=!0,Zg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Zg,void 0);var $g=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",$g,void 0);
function ah(a,b){if("log_event"===a.endpoint){var c="";a.ga?c="visitorOnlyApprovedKey":a.G&&($g[a.G.token]=bh(a.G),c=a.G.token);var d=Zg.get(c)||[];Zg.set(c,d);d.push(a.payload);b&&(Ug=new b);a=tf("tvhtml5_logging_max_batch")||tf("web_logging_max_batch")||100;b=Q();d.length>=a?ch({writeThenSend:!0}):10<=b-Xg&&(dh(),Xg=b)}}
function eh(a,b){if("log_event"===a.endpoint){var c="";a.ga?c="visitorOnlyApprovedKey":a.G&&($g[a.G.token]=bh(a.G),c=a.G.token);var d=new Map;d.set(c,[a.payload]);b&&(Ug=new b);return new Ae(function(e){Ug&&Ug.isReady()?fh(d,e,{bypassNetworkless:!0}):e()})}}
function ch(a){a=void 0===a?{}:a;new Ae(function(b){Gf(Vg);Gf(Wg);Wg=0;Ug&&Ug.isReady()?(fh(Zg,b,a),Zg.clear()):(dh(),b())})}
function dh(){P("web_gel_timeout_cap")&&!Wg&&(Wg=Ff(function(){ch({writeThenSend:!0})},6E4));
Gf(Vg);var a=F("LOGGING_BATCH_TIMEOUT",tf("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Yg&&(a=Qg);Vg=Ff(function(){ch({writeThenSend:!0})},a)}
function fh(a,b,c){var d=Ug;c=void 0===c?{}:c;var e=Math.round(Q()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:gh(d.h||hh())});h.events=k;(k=$g[g])&&ih(h,g,k);delete $g[g];g="visitorOnlyApprovedKey"===g;jh(h,e,g);P("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Eg("/generate_204");kh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Tg=Math.round(Q()-e)},
onError:function(){f--;f||b()},
Ea:c,ga:g});Yg=!1}}
function jh(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Rg/2)),c++,c>Rg&&(c=1),O("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,Sg&&Tg&&P("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Sg,roundtripMs:String(Tg)}),Sg=b,Tg=0)}
function ih(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function bh(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var lh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",lh,void 0);function mh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Sf();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,lh[b]=b in lh?lh[b]+1:0,a.sequence={index:lh[b],groupKey:b},d.Oa&&delete lh[d.S]);(d.Sk?eh:ah)({endpoint:"log_event",payload:e,G:d.G,ga:d.ga},c)}
;function nh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function oh(a,b,c,d,e){ad.set(""+a,b,{ra:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var ph=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",ph,void 0);function qh(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=ad.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ph[d]=c.toString())}}}
qh.prototype.get=function(a,b){rh(a);sh(a);a=void 0!==ph[a]?ph[a].toString():null;return null!=a?a:b?b:""};
qh.prototype.set=function(a,b){rh(a);sh(a);if(null==b)throw Error("ExpectedNotNull");ph[a]=b.toString()};
qh.prototype.remove=function(a){rh(a);sh(a);delete ph[a]};
qh.prototype.clear=function(){for(var a in ph)delete ph[a]};
function sh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function rh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function th(a){a=void 0!==ph[a]?ph[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(qh);var uh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},vh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function wh(){var a=y.navigator;return a?a.connection:void 0}
;function xh(){return"INNERTUBE_API_KEY"in kf&&"INNERTUBE_API_VERSION"in kf}
function hh(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Ra:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Sa:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ua:F("INNERTUBE_CONTEXT_HL",void 0),Ta:F("INNERTUBE_CONTEXT_GL",void 0),Va:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Xa:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wa:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function gh(a){var b={client:{hl:a.Ua,gl:a.Ta,clientName:a.Sa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ra}},c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!P("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=nh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!P("music_web_display_mode_killswitch")){var h;b.client.Da=null!=(h=b.client.Da)?h:{};b.client.Da.webDisplayMode=nh()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
F("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=wh()){a=uh[h.type||"unknown"]||"CONN_UNKNOWN";h=uh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);P("web_log_effective_connection_type")&&(a=wh(),a=null!==a&&void 0!==a&&a.effectiveType?vh.hasOwnProperty(a.effectiveType)?vh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(bg(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function yh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Jk||F("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Ik:b=dd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function zh(a){a=Object.assign({},a);delete a.Authorization;var b=dd();if(b){var c=new vd;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest())}return a}
;function Ah(a){var b=new bf;(b=b.isAvailable()?a?new hf(b,a):b:null)||(a=new cf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ye(a):null;this.i=document.domain||window.location.hostname}
Ah.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(te(b))}catch(f){return}else e=escape(b);oh(a,e,c,this.i)};
Ah.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ad.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ah.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ad.remove(""+a,"/",void 0===b?"youtube.com":b)};var Bh;function Ch(){Bh||(Bh=new Ah("yt.innertube"));return Bh}
function Dh(a,b,c,d){if(d)return null;d=Ch().get("nextId",!0)||1;var e=Ch().get("requests",!0)||{};e[d]={method:a,request:b,authState:zh(c),requestTime:Math.round(Q())};Ch().set("nextId",d+1,86400,!0);Ch().set("requests",e,86400,!0);return d}
function Eh(a){var b=Ch().get("requests",!0)||{};delete b[a];Ch().set("requests",b,86400,!0)}
function Fh(a){var b=Ch().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=zh(yh(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),kh(a,d.method,e,{}));delete b[c]}}Ch().set("requests",b,86400,!0)}}
;function Gh(a,b){this.version=a;this.args=b}
;function Hh(a,b){this.topic=a;this.h=b}
Hh.prototype.toString=function(){return this.topic};var Ih=A("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.aa;N.prototype.publish=N.prototype.U;N.prototype.clear=N.prototype.clear;z("ytPubsub2Pubsub2Instance",Ih,void 0);var Jh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Jh,void 0);var Kh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Kh,void 0);var Lh=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Lh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Mh(a,b){var c=Nh();c&&c.publish.call(c,a.toString(),a,b)}
function Oh(a){var b=Ph,c=Nh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Jh[d])try{if(f&&b instanceof Hh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.T){var l=new h;h.T=l.version}var n=h.T}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ab(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){of(p)}},Lh[b.toString()]?A("yt.scheduler.instance")?Lf(g):Ff(g,0):g())});
Jh[d]=!0;Kh[b.toString()]||(Kh[b.toString()]=[]);Kh[b.toString()].push(d);return d}
function Qh(){var a=Rh,b=Oh(function(c){a.apply(void 0,arguments);Sh(b)});
return b}
function Sh(a){var b=Nh();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete Jh[c]}))}
function Nh(){return A("ytPubsub2Pubsub2Instance")}
;function Th(){}
;var Uh=[],Vh=!1;function Wh(a){Vh||(Uh.push({type:"ERROR",payload:a}),10<Uh.length&&Uh.shift())}
function Xh(a,b){Vh||(Uh.push({type:"EVENT",eventType:a,payload:b}),10<Uh.length&&Uh.shift())}
;var Yh=function(){var a;return function(){a||(a=new Ah("ytidb"));return a}}();
function Zh(){var a;return null===(a=Yh())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function $h(a,b,c){this.h=void 0===a?!1:a;this.failureMessage=b;this.j=c;(a=Zh())||(a={createdTimestampMs:Q(),isSupported:this.h,resultCount:0,hasSucceededOnce:this.h});this.i=a;var d;if(ai()){var e;this.i.isSupported===this.h?e=Object.assign(Object.assign({},this.i),{resultCount:this.i.resultCount+1}):e={isSupported:this.h,resultCount:1,createdTimestampMs:Q(),hasSucceededOnce:this.i.hasSucceededOnce||this.h};null===(d=Yh())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",e,2592E3,!0)}}
function bi(a,b){return new $h(!1,a instanceof Error?a.message:"",void 0===b?!1:b)}
$h.prototype.isSupported=function(){return this.h};
$h.prototype.log=function(){ai()&&Xh("IS_SUPPORTED_COMPLETED",{isSupported:this.h,lastIsSupported:this.i.isSupported,failureMessage:this.failureMessage,sameResultCount:this.i.resultCount,sameResultDurationMs:Math.floor(Q()-this.i.createdTimestampMs),canDetectDataOnFailure:this.j})};
function ai(){var a;return!!(P("ytidb_analyze_is_supported")&&(null===(a=Yh())||void 0===a?0:a.h))}
;function ci(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(ci,Error);function di(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ei(a){return a.substr(0,a.indexOf(":"))||a}
;var fi={},gi=(fi.AUTH_INVALID="No user identifier specified.",fi.EXPLICIT_ABORT="Transaction was explicitly aborted.",fi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",fi.MISSING_OBJECT_STORE="Object store not created.",fi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",fi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",fi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",fi.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",fi),hi={},ii=(hi.AUTH_INVALID="ERROR",hi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",hi.EXPLICIT_ABORT="IGNORED",hi.IDB_NOT_SUPPORTED="ERROR",hi.MISSING_OBJECT_STORE="ERROR",hi.QUOTA_EXCEEDED="WARNING",hi.QUOTA_MAYBE_EXCEEDED="WARNING",hi.UNKNOWN_ABORT="WARNING",hi),ji={},ki=(ji.AUTH_INVALID=!1,ji.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ji.EXPLICIT_ABORT=!1,ji.IDB_NOT_SUPPORTED=!1,ji.MISSING_OBJECT_STORE=!1,ji.QUOTA_EXCEEDED=!1,ji.QUOTA_MAYBE_EXCEEDED=!0,
ji.UNKNOWN_ABORT=!0,ji);function R(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?gi[a]:c;d=void 0===d?ii[a]:d;e=void 0===e?ki[a]:e;ci.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,R.prototype)}
v(R,ci);function li(a){R.call(this,"MISSING_OBJECT_STORE",{Nk:a},gi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,li.prototype)}
v(li,R);var mi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ni(a,b,c){b=ei(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof R)return d;if("QuotaExceededError"===d.name)return new R("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(xc&&"UnknownError"===d.name)return new R("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&mi.some(function(e){return d.message.includes(e)}))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new R("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ok:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function oi(a){if(!a)throw Error();throw a;}
function pi(a){return a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={W:0};f.W<a.length;f={W:f.W},++f.W)qi(S.resolve(a[f.W]).then(function(g){return function(h){d[g.W]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
S.resolve=function(a){return new S(function(b,c){a instanceof S?a.then(b,c):b(a)})};
S.reject=function(a){return new S(function(b,c){c(a)})};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:pi,e=null!==b&&void 0!==b?b:oi;return new S(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ri(c,c,d,f,g)}),c.onRejected.push(function(){si(c,c,e,f,g)})):"FULFILLED"===c.state.status?ri(c,c,d,f,g):"REJECTED"===c.state.status&&si(c,c,e,f,g)})};
function qi(a,b){a.then(void 0,b)}
function ri(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function si(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ti(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?ti(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ui(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function vi(a){return new Promise(function(b,c){ui(a,b,c)})}
function wi(a){return new S(function(b,c){ui(a,b,c)})}
;function xi(a,b){return new S(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function yi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
m=yi.prototype;m.add=function(a,b,c){return zi(this,[a],{mode:"readwrite",I:!0},function(d){return Ai(d,a).add(b,c)})};
m.clear=function(a){return zi(this,[a],{mode:"readwrite",I:!0},function(b){return Ai(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return zi(this,[a],{mode:"readonly",I:!0},function(c){return Ai(c,a).count(b)})};
function Bi(a,b,c){a=a.h.createObjectStore(b,c);return new Ci(a)}
m.delete=function(a,b){return zi(this,[a],{mode:"readwrite",I:!0},function(c){return Ai(c,a).delete(b)})};
m.get=function(a,b){return zi(this,[a],{mode:"readonly",I:!0},function(c){return Ai(c,a).get(b)})};
function Di(a,b,c,d){return zi(a,[b],{mode:"readwrite",I:!0},function(e){e=Ai(e,b);return wi(e.h.put(c,d))})}
function zi(a,b,c,d){return H(a,function f(){var g=this,h,k,l,n,p,r,q,E,I,J,U,V;return x(f,function(K){switch(K.h){case 1:var T={mode:"readonly",I:!1};"string"===typeof c?T.mode=c:T=c;h=T;g.transactionCount++;k=h.I?tf("ytidb_transaction_try_count",1):1;l=0;case 2:if(n){K.A(3);break}l++;p=Math.round(Q());ra(K,4);r=g.h.transaction(b,h.mode);T=new Ei(r);T=Fi(T,d);return w(K,T,6);case 6:return q=K.i,E=Math.round(Q()),Gi(g,p,E,l,void 0,b.join(),h),K.return(q);case 4:I=sa(K);J=Math.round(Q());U=ni(I,g.h.name,
b.join());if((V=U instanceof R&&!U.h)||l>=k)Gi(g,p,J,l,U,b.join(),h),n=U;K.A(2);break;case 3:return K.return(Promise.reject(n))}})})}
function Gi(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Xh("QUOTA_EXCEEDED",{dbName:ei(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(Xh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),Hi(a,!1,d,f,b),Wh(e)):Hi(a,!0,d,f,b)}
function Hi(a,b,c,d,e){Xh("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c})}
function Ci(a){this.h=a}
m=Ci.prototype;m.add=function(a,b){return wi(this.h.add(a,b))};
m.clear=function(){return wi(this.h.clear()).then(function(){})};
m.count=function(a){return wi(this.h.count(a))};
function Ii(a,b){return Ji(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Ii(this,a):wi(this.h.delete(a))};
m.get=function(a){return wi(this.h.get(a))};
m.index=function(a){return new Ki(this.h.index(a))};
m.getName=function(){return this.h.name};
function Ji(a,b,c){a=a.h.openCursor(b.query,b.direction);return Li(a).then(function(d){return xi(d,c)})}
function Ei(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=R;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Fi(a,b){var c=new Promise(function(d,e){qi(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Ei.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new R("EXPLICIT_ABORT");};
Ei.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Ai(a,b){b=a.h.objectStore(b);var c=a.i.get(b);c||(c=new Ci(b),a.i.set(b,c));return c}
function Ki(a){this.h=a}
Ki.prototype.count=function(a){return wi(this.h.count(a))};
Ki.prototype.delete=function(a){return Mi(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
Ki.prototype.get=function(a){return wi(this.h.get(a))};
Ki.prototype.getKey=function(a){return wi(this.h.getKey(a))};
function Mi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Li(a).then(function(d){return xi(d,c)})}
function Ni(a,b){this.request=a;this.cursor=b}
function Li(a){return wi(a).then(function(b){return null===b?null:new Ni(a,b)})}
m=Ni.prototype;m.advance=function(a){this.cursor.advance(a);return Li(this.request)};
m.continue=function(a){this.cursor.continue(a);return Li(this.request)};
m.delete=function(){return wi(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return wi(this.cursor.update(a))};function Oi(a,b,c){return H(this,function e(){var f,g,h,k,l,n,p,r,q,E;return x(e,function(I){if(1==I.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.pb,n=g.upgrade,p=g.closed,q=function(){r||(r=new yi(f.result,{closed:p}));return r},f.addEventListener("upgradeneeded",function(J){if(null===J.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");J.dataLoss&&"none"!==J.dataLoss&&Xh("IDB_DATA_CORRUPTED",{reason:J.dataLossMessage||"unknown reason",dbName:ei(a)});var U=q(),V=new Ei(f.transaction);n&&n(U,J.oldVersion,J.newVersion,V)}),h&&f.addEventListener("blocked",function(){h()}),w(I,vi(f),2);
E=I.i;k&&E.addEventListener("versionchange",function(){k(q())});
E.addEventListener("close",function(){Xh("IDB_UNEXPECTEDLY_CLOSED",{dbName:ei(a),dbVersion:E.version});l&&l()});
return I.return(q())})})}
function Pi(a,b,c){c=void 0===c?{}:c;return Oi(a,b,c)}
function Qi(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,vi(e),0)})})}
;function Ri(a,b){this.name=a;this.options=b;this.j=!1}
Ri.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Pi(a,b,c)};
Ri.prototype.delete=function(a){a=void 0===a?{}:a;return Qi(this.name,a)};
Ri.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,pb:c,upgrade:this.options.upgrade},e=function(){return H(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=u(Object.keys(h.options.Fa));for(var q=r.next();!q.done;q=r.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){r=q;break a}r=void 0}l=r;if(void 0===l){p.A(5);break}if(h.j){p.A(6);break}h.j=!0;return w(p,h.delete(),7);case 7:return p.return(e());case 6:throw new li(l);case 5:return p.return(k);
case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var Si=new Ri("YtIdbMeta",{Fa:{databases:!0},upgrade:function(a,b){1>b&&Bi(a,"databases",{keyPath:"actualName"})}});
function Ti(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Si.open(),2);d=e.i;return e.return(zi(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=Ai(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return wi(g.h.put(a,void 0)).then(function(){})})}))})})}
function Ui(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Si.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function Vi(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Si.open(),2);if(3!=e.h)return c=e.i,w(e,c.count("databases"),3);d=e.i;return e.return(0<d)})})}
function Wi(a){return H(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,Si.open(),2)):3!=f.h?(e=f.i,w(f,zi(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return Ji(Ai(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function Xi(){return Wi(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var Yi;
function Zi(){return H(this,function b(){var c,d,e,f,g;return x(b,function(h){switch(h.h){case 1:if(P("ytidb_is_supported_cache_success_result")&&(c=Zh(),null===c||void 0===c?0:c.hasSucceededOnce))return h.return(new $h(!0));var k;if(k=xg)k=/WebKit\/([0-9]+)/.exec(Jb),k=!!(k&&600<=parseInt(k[1],10));k&&(k=/WebKit\/([0-9]+)/.exec(Jb),k=!(k&&602<=parseInt(k[1],10)));if(k)return h.return(bi(Error("YtIdb is not supported on iOS 8 or 9")));if(jc)return h.return(bi(Error("YtIdb is not supported on Edge")));try{if(d=
self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return h.return(bi(Error("Non-prefixed indexedDB APIs are missing")))}catch(l){return h.return(bi(l))}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return h.return(bi(Error("IDBTransaction.prototype.objectStoreNames is missing")));ra(h,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(h,Ti(e),4);case 4:return w(h,Ui("yt-idb-test-do-not-use"),5);
case 5:return h.return(new $h(!0));case 2:f=sa(h);if(!ai()){h.A(6);break}ra(h,7);return w(h,Vi(),9);case 9:return g=h.i,h.return(bi(f,g));case 7:return sa(h),h.return(bi(f));case 6:return h.return(bi(f))}})})}
function $i(){if(void 0!==Yi)return Yi;Vh=!0;return Yi=Zi().then(function(a){Vh=!1;a.log();return a.isSupported()})}
;function aj(){var a=new R("AUTH_INVALID");Wh(a);throw a;throw Error("Datasync ID not set");}
function bj(a,b,c,d){var e;return H(this,function g(){var h,k;return x(g,function(l){switch(l.h){case 1:return w(l,cj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return di(a),c?h={actualName:a,publicName:a,userIdentifier:void 0}:h=aj(),h.clearDataOnAuthChange=null!==(e=d.clearDataOnAuthChange)&&void 0!==e?e:!1,ra(l,3),w(l,Ti(h),5);case 5:return w(l,Pi(h.actualName,b,d),6);case 6:return l.return(l.i);case 3:return k=sa(l),ra(l,7),w(l,Ui(h.actualName),9);case 9:l.h=8;l.m=0;break;case 7:sa(l);
case 8:throw k;}})})}
function cj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,$i(),2);if(!e.i)throw d=new R("IDB_NOT_SUPPORTED",{context:a}),Wh(d),d;e.h=0})})}
function dj(a,b,c){c=void 0===c?{}:c;return bj(a,b,!1,c)}
function ej(a,b,c){c=void 0===c?{}:c;return bj(a,b,!0,c)}
function fj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,$i(),2);if(3!=f.h){if(!f.i)return f.return();di(a);e=aj();return w(f,Qi(e.actualName,b),3)}return w(f,Ui(e.actualName),0)})})}
function gj(a,b){var c=this;a=a.map(function(d){return H(c,function f(){return x(f,function(g){return 1==g.h?w(g,Qi(d.actualName,b),2):w(g,Ui(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function hj(){var a=void 0===a?{}:a;return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,$i(),2);if(3!=e.h){if(!e.i)return e.return();di("LogsDatabaseV2");return w(e,Xi(),3)}d=e.i;return w(e,gj(d,a),0)})})}
function ij(a,b){b=void 0===b?{}:b;return H(this,function d(){return x(d,function(e){if(1==e.h)return w(e,$i(),2);if(3!=e.h){if(!e.i)return e.return();di(a);return w(e,Qi(a,b),3)}return w(e,Ui(a),0)})})}
;function jj(a,b){Ri.call(this,a,b);this.options=b;di(a)}
v(jj,Ri);jj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ia?ej:dj)(a,b,Object.assign(Object.assign({},c),{clearDataOnAuthChange:this.options.clearDataOnAuthChange}))};
jj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ia?ij:fj)(this.name,a)};
function kj(a){var b;return function(){b||(b=new jj("LogsDatabaseV2",a));return b}}
;function lj(){S.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(lj,S);lj.reject=S.reject;lj.resolve=S.resolve;lj.all=S.all;var mj;function nj(){if(!mj){var a={};mj=kj({Fa:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Ia:!P("nwl_use_ytidb_partitioning"),upgrade:function(b,c){2>c&&(Bi(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),Bi(b,"sapisid"));3>c&&Bi(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:3})}return mj().open()}
function oj(a){return H(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,pj(),2);case 2:return e=k.i,w(k,nj(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:e,interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(k,Di(f,"LogsRequestsStore",g),4);case 4:return h=k.i,d.qb=Q(),qj(d),k.return(h)}})})}
function rj(a){return H(this,function c(){var d,e,f,g,h,k,l,n;return x(c,function(p){switch(p.h){case 1:return d={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(p,pj(),2);case 2:return e=p.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,e,f,0],h=[a,e,f,Q()],k=IDBKeyRange.bound(g,h),w(p,nj(),3);case 3:return l=p.i,n=void 0,w(p,zi(l,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(r){return Mi(Ai(r,"LogsRequestsStore").index("newRequest"),{query:k,direction:"prev"},function(q){q.getValue()&&
(n=q.getValue(),"NEW"===a&&(n.status="QUEUED",q.update(n)))})}),4);
case 4:return d.qb=Q(),qj(d),p.return(n)}})})}
function sj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj(),2);d=e.i;return e.return(zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Ai(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",wi(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function tj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj(),2);d=e.i;return e.return(zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=Ai(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,wi(g.h.put(h,void 0)).then(function(){return h})):lj.resolve(void 0)})}))})})}
function uj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function vj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,nj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function wj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,nj(),2);c=d.i;return d.return(c.clear("SWHealthLog"))})})}
function xj(){return H(this,function b(){var c,d;return x(b,function(e){return 1==e.h?w(e,nj(),2):3!=e.h?(c=e.i,d=Q()-2592E6,w(e,zi(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return Ji(Ai(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),3)):P("web_clean_sw_logs_store")?w(e,zi(c,["SWHealthLog"],{mode:"readwrite",
I:!0},function(f){return Ji(Ai(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0):e.A(0)})})}
function yj(){return H(this,function b(){return x(b,function(c){return 1==c.h?w(c,hj(),2):w(c,ij("LogsDatabaseV2"),0)})})}
function pj(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h){Th.h||(Th.h=new Th);var e={};var f=dd([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(F("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in kf||(e["X-Origin"]=window.location.origin),P("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in kf&&(e["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));e instanceof Ae||(f=new Ae(Ea),Be(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=zh(c);var g=
new vd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function zj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,nj(),2);d=e.i;return w(e,Di(d,"sapisid",a,"sapisid"),0)})})}
function Aj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,nj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function qj(a){var b=tf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&Mh("nwl_transaction_latency_payload",a)}
;var Bj=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function Cj(){for(var a=u(Bj),b=a.next();!b.done;b=a.next())if(b=ad.get(b.value))return b;return"LOGGED_OUT"}
function Dj(){qe.call(this);this.pollingInterval=3E3;this.i=[null,null,null];this.m=!1;Ej(this)}
v(Dj,qe);function Fj(){Dj.h||(Dj.h=new Dj);var a=Dj.h;a.m=!0;a.verifyUser();Gj(a)}
Dj.prototype.verifyUser=function(){var a=Ej(this),b=a.Za;if(!a.ob)return Gj(this),!0;re(this,"ytsessionchange");b&&re(this,"ytuserinvalid");Gj(this);return!1};
function Ej(a){var b=Bj.map(function(e){var f;return null!==(f=ad.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.i&&""!==a.i[f]&&""===e}),d=b.some(function(e,f){return a.i&&a.i[f]!==e});
a.i=b;return{Za:c,ob:d}}
function Gj(a){a.m&&(Hj(a),a.l=Jf(function(){a.verifyUser()},a.pollingInterval))}
function Hj(a){a.l&&(Nf(a.l),a.l=void 0)}
;var Ij;function Jj(){Ij||(Ij=new Ah("yt.offline"));return Ij}
function Kj(a){if(P("offline_error_handling")){var b=Jj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jj().set("errors",b,2592E3,!0)}}
function Lj(){if(P("offline_error_handling")){var a=Jj().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new ci(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;of(c)}Jj().set("errors",{},2592E3,!0)}}}
;var Mj=tf("network_polling_interval",3E4);function Nj(){qe.call(this);this.K=0;this.o=this.l=!1;this.B=0;this.m=this.J=!1;this.i=Oj();this.m=P("validate_network_status");Pj(this);Qj(this)}
v(Nj,qe);function Rj(a,b){a.l=!0;if(void 0===b?0:b)a.K||Sj(a)}
function Oj(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Qj(a){window.addEventListener("online",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,Tj(d),2):(d.i=!0,d.l&&re(d,"ytnetworkstatus-online"),e.A(2));Uj(d);d.J&&Lj();e.h=0})})})}
function Pj(a){window.addEventListener("offline",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.m?w(e,Tj(d),2):(d.i=!1,d.l&&re(d,"ytnetworkstatus-offline"),e.A(2));Uj(d);e.h=0})})})}
function Sj(a){a.K=Jf(function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(P("trigger_nsm_validation_checks_with_nwl")&&!d.i)return w(e,Tj(d),3);if(Oj()){if(!1!==d.i)return e.A(3);d.o=!0;d.B=Q();return d.l?d.m?w(e,Tj(d),11):(d.i=!0,re(d,"ytnetworkstatus-online"),e.A(11)):e.A(11)}if(!0!==d.i)return e.A(3);d.o=!0;d.B=Q();return d.l?d.m?w(e,Tj(d),3):(d.i=!1,re(d,"ytnetworkstatus-offline"),e.A(3)):e.A(3)}if(3!=e.h)return d.J&&Lj(),e.A(3);Sj(d);e.h=0})})},Mj)}
function Uj(a){a.o&&(pf(new ci("NetworkStatusManager state did not match poll",Q()-a.B)),a.o=!1)}
function Tj(a,b){return a.C?a.C:a.C=new Promise(function(c){return H(a,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=new AbortController,g=f.signal,h=!1,ra(l,2,3),k.L=Lf(function(){f.abort()},b||2E4),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.C=void 0;Nf(k.L);h!==k.i&&(k.i=h,k.i&&k.l?re(k,"ytnetworkstatus-online"):k.l&&re(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.A(3)}})})})}
;function Vj(a){a=void 0===a?{}:a;qe.call(this);var b=this;this.l=this.o=0;Nj.h||(Nj.h=new Nj);this.i=Nj.h;Rj(this.i,a.Na);a.Ya&&(this.i.J=!0);a.ia?(this.ia=a.ia,he(this.i,"ytnetworkstatus-online",function(){Wj(b,"publicytnetworkstatus-online")}),he(this.i,"ytnetworkstatus-offline",function(){Wj(b,"publicytnetworkstatus-offline")})):(he(this.i,"ytnetworkstatus-online",function(){re(b,"publicytnetworkstatus-online")}),he(this.i,"ytnetworkstatus-offline",function(){re(b,"publicytnetworkstatus-offline")}))}
v(Vj,qe);function Xj(){var a=Yj().i;a.m||a.i===Oj()||pf(new ci("NetworkStatusManager isOnline does not match window status"));return a.i}
function Zj(){var a=Yj();return H(a,function c(){var d=this;return x(c,function(e){return e.return(Tj(d.i,void 0))})})}
function Wj(a,b){a.ia?a.l?(Nf(a.o),a.o=Lf(function(){a.m!==b&&(re(a,b),a.m=b,a.l=Q())},a.ia-(Q()-a.l))):(re(a,b),a.m=b,a.l=Q()):re(a,b)}
;var ak=!1,bk=!1,ck=0,dk=0,ek;function fk(){H(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,$i(),2);case 2:(c=g.i)&&(bk=!0);d=P("networkless_logging");if(c&&d)return P("nwl_use_ytidb_partitioning")?w(g,ij("LogsDatabaseV2"),8):w(g,hj(),8);if(!c){g.A(0);break}return w(g,yj(),0);case 8:return Fj(),document.addEventListener("ytsessionchange",function(){gk()}),w(g,Aj(),11);
case 11:e=g.i;f=Cj();if(e===f){g.A(12);break}gk();return w(g,zj(f),12);case 12:if(!(P("enable_nwl_cleaning_logic")&&Math.random()<=tf("nwl_cleaning_rate",.1))){g.A(14);break}return w(g,xj(),14);case 14:ak=!0;hk();Xj()&&ik();he(Yj(),"publicytnetworkstatus-online",ik);he(Yj(),"publicytnetworkstatus-offline",jk);if(!P("networkless_immediately_drop_sw_health_store")){g.A(16);break}return w(g,kk(),16);case 16:if(P("networkless_immediately_drop_all_requests"))return w(g,yj(),0);g.A(0)}})})}
function lk(a,b){function c(d){var e=Xj();if(!ak||!d||e&&P("vss_networkless_bypass_write"))mk(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};oj(f).then(function(g){f.id=g;(Xj()||P("networkless_always_online"))&&nk(f)}).catch(function(g){nk(f);
Xj()?of(g):Kj(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?$i().then(function(d){c(d)}):c(bk)}
function ok(a,b){function c(d){if(ak&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?uj(e.id):f=!0;g(h,k)};
mk(e.url,e.options);oj(e).then(function(h){e.id=h;f&&uj(e.id)}).catch(function(h){Xj()?of(h):Kj(h)})}else mk(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?$i().then(function(d){c(d)}):c(bk)}
function ik(){var a=this;ck||(ck=Lf(function(){return H(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,rj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,nk(d),3):(jk(),e.return());ck=0;ik();e.h=0})})},100))}
function jk(){Nf(ck);ck=0}
function nk(a){return H(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.A(2);break}return w(e,sj(a.id),3);case 3:(d=e.i)?a=d:pf(Error("The request cannot be found in the database."));case 2:if(pk(a,2592E6)){e.A(4);break}pf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,uj(a.id),5);case 5:return e.return();case 4:var f=a=qk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());(a=f)&&mk(a.url,a.options);e.h=0}})})}
function qk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!(P("trigger_nsm_validation_checks_with_nwl")&&dk<=tf("potential_esf_error_limit",10))){k.A(2);break}return w(k,Zj(),3);case 3:if(Xj())dk++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.A(4);break}return 1>a.sendCount?w(k,tj(a.id),8):w(k,uj(a.id),4);case 8:Lf(function(){Xj()&&ik()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.A(2):w(k,uj(a.id),2);d(e,f);k.h=0})})};
return a}
function pk(a,b){a=a.timestamp;return Q()-a>=b?!1:!0}
function hk(){var a=this;rj("QUEUED").then(function(b){b&&!pk(b,12E4)&&Lf(function(){return H(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.A(2):w(e,tj(b.id),2);hk();e.h=0})})})})}
function gk(){vj().catch(function(a){of(a)})}
function kk(){return H(this,function b(){return x(b,function(c){return c.return(wj().catch(function(d){of(d)}))})})}
function Yj(){ek||(ek=new Vj({Ya:!0,Na:P("trigger_nsm_validation_checks_with_nwl")}));return ek}
function mk(a,b){if(P("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?pg(a,b):Eg(a,void 0,b.postBody)}else pg(a,b)}
;function rk(a){var b=this;this.h=null;a?this.h=a:xh()&&(this.h=hh());Jf(function(){Fh(b)},5E3)}
rk.prototype.isReady=function(){!this.h&&xh()&&(this.h=hh());return!!this.h};
function kh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=Dh(b,c,l,k)),q)){var E=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(J,U){Eh(q);E(J,U)};
c.onFetchSuccess=function(J,U){Eh(q);I(J,U)}}try{r&&d.retry&&!d.Ea.bypassNetworkless?(g.method="POST",!d.Ea.writeThenSend&&P("nwl_send_fast_on_unload")?ok(p,g):lk(p,g)):(g.method="POST",g.postParams||(g.postParams={}),pg(p,g))}catch(J){if("InvalidAccessError"==J.name)q&&(Eh(q),q=0),pf(Error("An extension is blocking network request."));
else throw J;}q&&Jf(function(){Fh(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pf(new ci("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new ci("innertube xhrclient not ready",b,c,d);of(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.h.Va)&&(h=f);var k=a.h.Xa||!1,l=yh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var n={alt:"json"};a.h.Wa&&g.headers.Authorization||(n.key=a.h.innertubeApiKey);var p=dg(""+h+f,n||{},!0);ak?$i().then(function(r){e(r)}):e(!1)}
;function sk(a,b,c){c=void 0===c?{}:c;var d=rk;F("ytLoggingEventsDefaultDisabled",!1)&&rk==rk&&(d=null);mh(a,b,d,c)}
;var tk=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
sa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];var vk={R:[],P:[{wa:uk,weight:500}]};function uk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function wk(){this.P=[];this.R=[]}
var xk;function yk(){if(!xk){var a=xk=new wk;a.R.length=0;a.P.length=0;vk.R&&a.R.push.apply(a.R,vk.R);vk.P&&a.P.push.apply(a.P,vk.P)}return xk}
;var zk=new N;function Ak(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Bk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Bk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Bk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Bk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ck(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Dk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ak(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Dk(f+".ve",g,h,k):0;d+=f;d+=Dk(e,a[e],b,c);if(500<d)break}}else c[b]=Ek(a),d+=c[b].length;else c[b]=Ek(a),d+=c[b].length;return d}
function Dk(a,b,c,d){c+="."+a;a=Ek(b);d[c]=a;return c.length+a.length}
function Ek(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Fk=new Set,Gk=0,Hk=0,Ik=0,Jk=[],Kk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Lk(a){Mk(a,"WARNING")}
function Mk(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),P("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Gk))){var g=xd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Ck(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=Ek(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=Ek(n)}if(Jk.length)for(l=0;l<Jk.length&&!(k=Ck(Jk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
yk();c=u(a.R);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Mk)){a=d.weight;break a}a=u(a.P);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.wa(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(tk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.sa[l.name])for(e=u(c.sa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ca(f);break}l.params||(l.params={});a=yk();l.params["params.errorServiceSignature"]="msg="+a.R.length+"&cb="+a.P.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Fk.has(l.message)){"ERROR"===b?(zk.U("handleError",l),P("record_app_crashed_web")&&0===Ik&&1===l.sampleWeight&&
(Ik++,sk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Hk++):"WARNING"===b&&zk.U("handleWarning",l);if(P("kevlar_gel_error_routing")){a=b;b:{c=u(Kk);for(d=c.next();!d.done;d=c.next())if(yg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(sk("clientError",c),("ERROR"===a||P("errors_flush_gel_always_killswitch"))&&ch())}if(!P("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}pg(F("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}Fk.add(l.message);Gk++}}}
function Nk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var Ok={Xb:29434,ac:3611,Qe:3854,kg:42993,Si:4724,Dj:96370,rb:27686,sb:85013,tb:23462,vb:42016,wb:62407,xb:26926,ub:43781,yb:51236,zb:79148,Ab:50160,Bb:77504,Nb:87907,Ob:18630,Pb:54445,Qb:80935,Rb:105675,Sb:37521,Tb:47786,Ub:98349,Vb:123695,Wb:6827,Yb:7282,Zb:124448,ec:32276,dc:76278,fc:93911,hc:106531,ic:27259,jc:27262,kc:27263,mc:21759,nc:27107,oc:62936,pc:49568,qc:38408,sc:80637,tc:68727,uc:68728,wc:80353,xc:80356,yc:74610,zc:45707,Ac:83962,Bc:83970,Cc:46713,Dc:89711,Ec:74612,Fc:93265,Gc:74611,
Ic:113533,Jc:93252,Kc:99357,Mc:94521,Nc:114252,Oc:113532,Pc:94522,Lc:94583,Qc:88E3,Rc:93253,Sc:93254,Tc:94387,Uc:94388,Vc:93255,Wc:97424,Hc:72502,Xc:110111,Yc:76019,bd:117092,cd:117093,Zc:89431,dd:110466,ed:77240,fd:60508,gd:105350,hd:73393,jd:113534,kd:92098,ld:84517,md:83759,nd:80357,od:86113,pd:72598,qd:72733,rd:107349,sd:124275,td:118203,ud:117431,vd:117429,wd:117430,xd:117432,yd:120080,zd:117259,Ad:121692,Bd:97615,Cd:31402,Dd:84774,Ed:95117,Fd:98930,Gd:98931,Hd:98932,Id:43347,Jd:45474,Kd:100352,
Ld:84758,Md:98443,Nd:117985,Od:74613,Pd:74614,Qd:64502,Rd:74615,Sd:74616,Td:122224,Ud:74617,Vd:77820,Wd:74618,Xd:93278,Yd:93274,Zd:93275,ae:93276,be:22110,ce:29433,ee:120541,he:82047,ie:113550,je:75836,ke:75837,le:42352,me:84512,ne:76065,oe:75989,pe:16623,qe:32594,re:27240,se:32633,te:74858,we:3945,ue:16989,xe:45520,ye:25488,ze:25492,Ae:25494,Be:55760,Ce:14057,De:18451,Ee:57204,Fe:57203,Ge:17897,He:57205,Ie:18198,Je:17898,Ke:17909,Le:43980,Me:46220,Ne:11721,Oe:49954,Pe:96369,Re:56251,Se:25624,Te:16906,
Ue:99999,Ve:68172,We:27068,Xe:47973,Ye:72773,Ze:26970,af:26971,bf:96805,cf:17752,df:73233,ef:109512,ff:22256,gf:14115,hf:22696,jf:89278,kf:89277,lf:109513,mf:43278,nf:43459,pf:43464,qf:89279,rf:43717,sf:55764,tf:22255,uf:89281,vf:40963,wf:43277,xf:43442,yf:91824,zf:120137,Af:96367,Bf:36850,Cf:72694,Df:37414,Ef:36851,Gf:124863,Ff:121343,Hf:73491,If:54473,Jf:43375,Kf:46674,Lf:32473,Mf:72901,Nf:72906,Of:50947,Pf:50612,Qf:50613,Rf:50942,Sf:84938,Tf:84943,Uf:84939,Vf:84941,Wf:84944,Xf:84940,Yf:84942,Zf:35585,
ag:51926,cg:79983,dg:63238,eg:18921,fg:63241,gg:57893,hg:41182,ig:33424,jg:22207,lg:36229,mg:22206,ng:22205,og:18993,pg:19001,qg:18990,rg:18991,sg:18997,tg:18725,ug:19003,vg:36874,wg:44763,xg:33427,yg:67793,zg:22182,Ag:37091,Bg:34650,Cg:50617,Dg:47261,Eg:22287,Fg:25144,Gg:97917,Hg:62397,Ig:36961,Jg:108035,Kg:27426,Lg:27857,Mg:27846,Ng:27854,Og:69692,Pg:61411,Qg:39299,Rg:38696,Sg:62520,Tg:36382,Ug:108701,Vg:50663,Wg:36387,Xg:14908,Yg:37533,Zg:105443,ah:61635,bh:62274,dh:65702,eh:65703,fh:65701,gh:76256,
hh:37671,ih:49953,kh:36216,lh:28237,mh:39553,nh:29222,oh:26107,ph:38050,qh:26108,sh:120745,rh:26109,th:26110,uh:66881,vh:28236,wh:14586,xh:57929,yh:74723,zh:44098,Ah:44099,Bh:23528,Ch:61699,Dh:59149,Eh:101951,Fh:97346,Gh:118051,Hh:95102,Ih:64882,Jh:119505,Kh:63595,Lh:63349,Mh:95101,Nh:75240,Oh:27039,Ph:68823,Qh:21537,Rh:83464,Sh:75707,Th:83113,Uh:101952,Vh:101953,Xh:79610,Yh:24402,Zh:24400,ai:32925,bi:57173,ci:122502,di:64423,fi:64424,gi:33986,hi:100828,ii:21409,ji:11070,ki:11074,li:17880,mi:14001,
oi:30709,ri:30707,si:30711,ti:30710,vi:30708,ni:26984,wi:63648,xi:63649,yi:51879,zi:111059,Ai:5754,Bi:20445,Ci:110386,Di:113746,Ei:66557,Fi:17310,Gi:28631,Hi:21589,Ii:68012,Ji:60480,Ki:31571,Li:76980,Mi:41577,Ni:45469,Oi:38669,Pi:13768,Qi:13777,Ri:62985,Ti:59369,Ui:43927,Vi:43928,Wi:12924,Xi:100355,aj:56219,bj:27669,cj:10337,Zi:47896,dj:122629,ej:121258,fj:107598,gj:96639,hj:107536,ij:96661,jj:96658,kj:116646,lj:121122,mj:96660,nj:104443,oj:96659,pj:106442,qj:63667,rj:63668,sj:63669,tj:78314,uj:55761,
vj:96368,wj:67374,xj:48992,yj:49956,zj:31961,Aj:26388,Bj:23811,Cj:5E4,Ej:47355,Fj:47356,Gj:37935,Hj:45521,Ij:21760,Jj:83769,Kj:49977,Lj:49974,Mj:93497,Nj:93498,Oj:34325,Pj:115803,Qj:123707,Rj:100081,Sj:35309,Tj:68314,Uj:25602,Vj:100339,Wj:59018,Xj:18248,Yj:50625,Zj:9729,ak:37168,bk:37169,ck:21667,dk:16749,ek:18635,fk:39305,gk:18046,hk:53969,ik:8213,jk:93926,kk:102852,lk:110099,mk:22678,nk:69076,qk:100856,rk:17736,sk:3832,tk:55759,uk:64031,vk:93044,wk:93045,xk:34388,yk:17657,zk:17655,Ak:39579,Bk:39578,
Ck:77448,Dk:8196,Ek:11357,Fk:69877,Gk:8197,Hk:82039};function Pk(a,b,c){M.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Va(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(Pk,M);Pk.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){pf(d)}}};
Pk.prototype.D=function(){window.removeEventListener("message",this.B);M.prototype.D.call(this)};function Qk(){this.l=[];this.isReady=!1;this.u={};var a=this.i=new Pk(!!F("WIDGET_ID_ENFORCE")),b=this.fb.bind(this);a.m=b;a.o=null;this.i.channel="widget";if(a=F("WIDGET_ID"))this.i.sessionId=a}
m=Qk.prototype;m.fb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.u[a]||"onReady"===a||(this.addEventListener(a,Rk(this,a)),this.u[a]=!0)):this.ta(a,b,c)};
m.ta=function(){};
function Rk(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Pa=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.na());this.sendMessage("onReady");D(this.l,this.Ha,this);this.l=[]};
m.na=function(){return null};
function Sk(a,b){a.sendMessage("infoDelivery",b)}
m.Ha=function(a){this.isReady?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ha({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.i=null};function Tk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Uk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Vk(a)}
function Vk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Wk(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xk(a){Qk.call(this);this.h=a;this.j=[];this.addEventListener("onReady",B(this.bb,this));this.addEventListener("onVideoProgress",B(this.lb,this));this.addEventListener("onVolumeChange",B(this.mb,this));this.addEventListener("onApiChange",B(this.gb,this));this.addEventListener("onPlaybackQualityChange",B(this.ib,this));this.addEventListener("onPlaybackRateChange",B(this.jb,this));this.addEventListener("onStateChange",B(this.kb,this));this.addEventListener("onWebglSettingsChanged",B(this.nb,
this))}
v(Xk,Qk);m=Xk.prototype;m.ta=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Tk(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Vk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Uk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Wk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Tk(a)&&Sk(this,this.na())}};
m.bb=function(){var a=this.Pa.bind(this);this.i.i=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.na=function(){if(!this.h)return null;var a=this.h.getApiInterface();$a(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.kb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Sk(this,a)};
m.ib=function(a){Sk(this,{playbackQuality:a})};
m.jb=function(a){Sk(this,{playbackRate:a})};
m.gb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.mb=function(){Sk(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.lb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Sk(this,a)};
m.nb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Sk(this,a)};
m.dispose=function(){Qk.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Yk(){var a=jb(Zk),b;return He(new Ae(function(c,d){a.onSuccess=function(e){jg(e)?c(new $k(e)):d(new al("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new al("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new al("Request timed out","net.timeout",e))};
b=pg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ie&&b.abort();
return Fe(c)})}
function al(a,b,c){Ra.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(al,Ra);function $k(a){this.xhr=a}
;function bl(){this.i=0;this.h=null}
bl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),ze(a)?a:cl(a)):2===this.i&&b?(a=b.call(c,this.h),ze(a)?a:dl(a)):this};
bl.prototype.getValue=function(){return this.h};
bl.prototype.$goog_Thenable=!0;function dl(a){var b=new bl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function cl(a){var b=new bl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function el(a){Ra.call(this,a.message||a.description||a.name);this.isMissing=a instanceof fl;this.isTimeout=a instanceof al&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ie}
v(el,Ra);el.prototype.name="BiscottiError";function fl(){Ra.call(this,"Biscotti ID is missing from server")}
v(fl,Ra);fl.prototype.name="BiscottiMissingError";var Zk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},gl=null;function Uf(){if(P("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!ad.get("CONSENT","").startsWith("YES+"))return Fe(Error("User has not consented - not fetching biscotti id."));if("1"==hb())return Fe(Error("Biscotti ID is not available in private embed mode"));gl||(gl=He(Yk().then(hl),function(a){return il(2,a)}));
return gl}
function hl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new fl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new fl;a=a.id;Vf(a);gl=cl(a);jl(18E5,2);return a}
function il(a,b){b=new el(b);Vf("");gl=dl(b);0<a&&jl(12E4,a-1);throw b;}
function jl(a,b){Ff(function(){He(Yk().then(hl,function(c){return il(b,c)}),Ea)},a)}
function kl(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Uf()}catch(b){return Fe(b)}}
;function ll(a){if("1"!=hb()){a&&Tf();try{kl().then(function(){},function(){}),Ff(ll,18E5)}catch(b){of(b)}}}
;var ml=Date.now().toString();
function nl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ml)for(a=1,b=0;b<ml.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ml.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ol,pl=y.ytLoggingDocDocumentNonce_;pl||(pl=nl(),Pa("ytLoggingDocDocumentNonce_",pl));ol=pl;var ql={de:0,cc:1,lc:2,jh:3,ge:4,pk:5,Wh:6,Yi:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function rl(a){this.h=a}
function sl(a){return new rl({trackingParams:a})}
rl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
rl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
rl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function tl(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function ul(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function vl(a){return F(ul(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",vl,void 0);function wl(a){return(a=vl(void 0===a?0:a))?new rl({veType:a,youtubeData:void 0}):null}
function xl(){var a=F("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function yl(a){a=void 0===a?0:a;var b=F(tl(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",yl,void 0);function zl(a,b,c){var d=xl();(c=yl(c))&&delete d[c];b&&(d[a]=b)}
function Al(a){return xl()[a]}
z("yt_logging_screen.getCttAuthInfo",Al,void 0);function Bl(a,b,c,d){c=void 0===c?0:c;if(a!==F(tl(c))||b!==F(ul(c)))zl(a,d,c),O(tl(c),a),O(ul(c),b),b=function(){setTimeout(function(){a&&mh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ol,clientScreenNonce:a},rk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Bl,void 0);function Cl(a){Gh.call(this,1,arguments);this.csn=a}
v(Cl,Gh);var Ph=new Hh("screen-created",Cl),Dl=[],Fl=El,Gl=0;function Hl(a,b,c,d){var e=d;P("web_dedupe_ve_grafting")&&(e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f}));
c={csn:b,parentVe:c.getAsJson(),childVes:Xa(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&Lk(Error("Child VE logged with no data"));d={G:Al(b),S:b};"UNDEFINED_CSN"==b?Il("visualElementAttached",c,d):a?mh("visualElementAttached",c,a,d):sk("visualElementAttached",c,d)}
function El(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ac(b)}
function Il(a,b,c){Dl.push({payloadName:a,payload:b,options:c});Gl||(Gl=Qh())}
function Rh(a){if(Dl){for(var b=u(Dl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,mh(c.payloadName,c.payload,null,c.options));Dl.length=0}Gl=0}
;function Jl(){this.i=new Set;this.h=new Set;this.j=new Map}
Jl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(Jl);function Kl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Ll(a)||c.some(function(e){return!Ll(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Ml(a,d.value);return a}
function Ml(a,b){for(var c in b)if(Ll(b[c])){if(c in a&&!Ll(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ml(a[c],b[c])}else if(Nl(b[c])){if(c in a&&!Nl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ol(a[c],b[c])}else a[c]=b[c];return a}
function Ol(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Ll(c)?a.push(Ml({},c)):Nl(c)?a.push(Ol([],c)):a.push(c);return a}
function Ll(a){return"object"===typeof a&&!Array.isArray(a)}
function Nl(a){return"object"===typeof a&&Array.isArray(a)}
;function Pl(a,b){Gh.call(this,1,arguments)}
v(Pl,Gh);function Ql(a,b){Gh.call(this,1,arguments)}
v(Ql,Gh);var Rl=new Hh("aft-recorded",Pl),Sl=new Hh("timing-sent",Ql);var Tl=window;function Ul(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Tl.performance||Tl.mozPerformance||Tl.msPerformance||Tl.webkitPerformance||new Ul;var Vl=!1,Wl={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};B(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ea,W);function Xl(a){var b=Yl(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Zl(){var a;if(P("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=$l(e.requestStart),e.responseEnd=$l(e.responseEnd),e.redirectStart=$l(e.redirectStart),e.redirectEnd=$l(e.redirectEnd),e.domainLookupEnd=$l(e.domainLookupEnd),e.connectStart=$l(e.connectStart),
e.connectEnd=$l(e.connectEnd),e.responseStart=$l(e.responseStart),e.secureConnectionStart=$l(e.secureConnectionStart),e.domainLookupStart=$l(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function am(){return P("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function $l(a){return Math.round(am()+a)}
function bm(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Pa("ytcsi."+(a||"")+"data_",b));return b}
function cm(a){a=bm(a);a.info||(a.info={});return a.info}
function Yl(a){a=bm(a);a.tick||(a.tick={});return a.tick}
function dm(a){var b=bm(a).nonce;b||(b=nl(),bm(a).nonce=b);return b}
function em(a){var b=Yl(a||""),c=Xl(a);c&&!Vl&&(Mh(Rl,new Pl(Math.round(c-b._start),a)),Vl=!0)}
;function fm(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=Za(a,function(b){return"first-paint"===b.name}))return $l(a.startTime)}a=W.timing;
return a.ab?Math.max(0,a.ab):0}
;function gm(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function hm(a){a=a||"";var b=A("ytcsi.reference");b||(gm(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=gm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var im=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",im,void 0);function jm(){this.h=0}
function km(){jm.h||(jm.h=new jm);return jm.h}
jm.prototype.tick=function(a,b,c){lm(this,"tick_"+a+"_"+b)||sk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
jm.prototype.info=function(a,b){var c=Object.keys(a).join("");lm(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sk("latencyActionInfo",a))};
jm.prototype.span=function(a,b){var c=Object.keys(a).join("");lm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,sk("latencyActionSpan",a))};
function lm(a,b){im[b]=im[b]||{count:0};var c=im[b];c.count++;c.time=Q();a.h||(a.h=Jf(function(){var d=Q(),e;for(e in im)im[e]&&6E4<d-im[e].time&&delete im[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ci("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Lk(c)),!0):!1}
;var X={},mm=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.home="LATENCY_ACTION_HOME",
X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",
X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",
X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
X),Y={},nm=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid=
"requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),om="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),pm={},qm=(pm.ccs="CANARY_STATE_",pm.mver="MEASUREMENT_VERSION_",
pm.pis="PLAYER_INITIALIZED_STATE_",pm.yt_pt="LATENCY_PLAYER_",pm.pa="LATENCY_ACTION_",pm.yt_vst="VIDEO_STREAM_TYPE_",pm),rm="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function sm(a){return!!F("FORCE_CSI_ON_GEL",!1)||P("csi_on_gel")||!!bm(a).useGel}
function tm(a,b,c){var d=um(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||Q();return sm(c)?(hm(c||"").tick[a]=b||Q(),d=dm(c),"_start"===a?(a=km(),lm(a,"baseline_"+d)||sk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):km().tick(a,d,b),em(c),!0):!1}
function vm(a,b,c){c=um(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in nm){c=nm[a];0<=Va(om,c)&&(b=!!b);a in qm&&"string"===typeof b&&(b=qm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Kl({},d)}0<=Va(rm,a)||Lk(new ci("Unknown label logged with GEL CSI",a))}
function um(a){a=bm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function wm(a){a=um(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function xm(a,b,c){null!==b&&(cm(c)[a]=b,sm(c)?(a=vm(a,b,c))&&sm(c)&&(b=hm(c||""),Kl(b.info,a),Kl(wm(c),a),c=dm(c),km().info(a,c)):hm(c||"").info[a]=b)}
function Z(a,b,c){var d=Yl(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||Q();d[a]=e;tm(a,b,c)||(ym(c),hm(c||"").tick[a]=b||Q());return d[a]}
function zm(a,b){if(sm(void 0)){var c=um(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};hm("").span[String(a.spanName)]=a;b=um(void 0);b.gelSpans||(b.gelSpans={});Kl(b.gelSpans,a);b=dm(void 0);km().span(a,b)}}
function Am(){var a=dm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===dm(void 0)&&Z("ol",void 0,void 0)},0)})}
function ym(a){if(!A("yt.timing."+(a||"")+"pingSent_")){var b=F((a||"")+"TIMING_ACTION",void 0),c=Yl(a);if(b=!!A("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in Yl(void 0);if(b&&Xl(a))if(em(a),a)Bm(a);else{b=!0;var d=F("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Bm(a)}}}
function Cm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=vf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Bm(a){if(!sm(a)){var b=Yl(a),c=cm(a),d=b._start,e=F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:F((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Xl(a);var h=Yl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&cm(a).yt_pvis&&"youtube"===e&&(xm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=Q();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||P("always_send_csi_204_with_beacon"))?Eg(f):Bg(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Mh(Sl,new Ql(n.aft+(Number(g)||0),a))}}
function Dm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Ub()&&a.setAttribute("nonce",Ub());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=am(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=cm(void 0),c=wm(void 0),"rc"in b||"rc"in c||xm("rc",""),0===a.transferSize))?!0:!1:!1}
function Em(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=Wa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ya(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",$l(b.startTime)),Z("wffe",$l(b.responseEnd)))}
var Fm=window;Fm.ytcsi&&(Fm.ytcsi.info=xm,Fm.ytcsi.tick=Z);function Gm(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function Hm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=yl(c),h=wl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Hl(a.client,g,h,[sl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Hl(a.client,g,h,[sl(d.playerResponse.trackingParams)]))})}
function Im(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=yl(d);c=c||wl(d);e&&c&&Hl(a.client,e,c,[b])}}
Gm.prototype.clickCommand=function(a,b,c){c=yl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:sl(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={G:Al(c),S:c};"UNDEFINED_CSN"==c?Il("visualElementGestured",a,b):d?mh("visualElementGestured",a,d,b):sk("visualElementGestured",a,b);return!0};
function Jm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Km(a,b,c);var f=wl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Im(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=yl(g);var l=k[0]||wl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={G:Al(h),S:h},"UNDEFINED_CSN"==h?Il("visualElementStateChanged",k,l):g?mh("visualElementStateChanged",k,g,l):sk("visualElementStateChanged",
k,l))}}};
yl(c.layer)||a.j();if(c.za)for(var d=u(c.za),e=d.next();!e.done;e=d.next())Hm(a,e.value,c.layer);else Mk(Error("Delayed screen needs a data promise."))}
function Km(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.cb?c.cb:c.layer;var e=yl(d);d=wl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.ya,l=c.G,n=Fl(),p={csn:n,pageVe:(new rl({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&Lk(new ci("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={G:l,S:n};g?mh("screenCreated",p,g,k):sk("screenCreated",p,k);Mh(Ph,new Cl(n));var r=n}catch(q){Nk(q,{Qk:b,rootVe:d,parentVisualElement:void 0,Lk:e,Pk:f,ya:c.ya});Mk(q);return}Bl(r,b,c.layer,c.G);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=P("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(ql));for(f=b.next();!f.done;f=b.next())if(yl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={G:Al(e),S:e,
Oa:f},"UNDEFINED_CSN"==e?Il("visualElementHidden",d,f):b?mh("visualElementHidden",d,b,f):sk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=r||"");xm("csn",r);Jl.getInstance().clear();d=wl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&(e=r,r=P("use_default_events_client")?void 0:rk,b={csn:e,ve:d.getAsJson(),eventType:1},f={G:Al(e),S:e},"UNDEFINED_CSN"==e?Il("visualElementShown",b,f):r?mh("visualElementShown",
b,r,f):sk("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(r=e.next();!r.done;r=e.next())r=u(r.value),b=r.next().value,r.next().value.has(c.layer)&&d&&Im(a,b,d,c.layer)}
;function Lm(a){a&&(a.dataset?a.dataset[Mm("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Nm(a,b){return a?a.dataset?a.dataset[Mm(b)]:a.getAttribute("data-"+b):null}
var Om={};function Mm(a){return Om[a]||(Om[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Pm=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qm=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Rm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Pm,""),c=c.replace(Qm,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Sm(a,b,c)}
function Sm(a,b,c){c=void 0===c?null:c;var d=Tm(a),e=document.getElementById(d),f=e&&Nm(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Jg(d,b),b=""+Ja(b),Um[b]=f),g||(e=Vm(a,d,function(){Nm(e,"loaded")||(Lm(e),Mg(d),Ff(Oa(Ng,d),0))},c)))}
function Vm(a,b,c,d){d=void 0===d?null:d;var e=Ic(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tb(e,Qc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Wm(a){a=Tm(a);var b=document.getElementById(a);b&&(Ng(a),b.parentNode.removeChild(b))}
function Xm(a,b){a&&b&&(a=""+Ja(b),(a=Um[a])&&Lg(a))}
function Tm(a){var b=document.createElement("a");Pb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var Um={};var Ym=[],Zm=!1;function $m(){if((!P("condition_ad_status_fetch_on_consent_cookie_html5_clients")||ad.get("CONSENT","").startsWith("YES+"))&&"1"!=hb()){var a=function(){Zm=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
try{Rm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Ym.push(Lf(function(){if(!(Zm||"google_ad_status"in window)){try{Xm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Zm=!0;O("DCLKSTAT",3)}},5E3))}}
function an(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function bn(){this.i=!1;this.h=null}
bn.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,Rm(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?cn(g,c,!!f,h,d):(Wm(b),Lk(new ci("Unable to load Botguard","from "+b)))},e)):a&&(e=Ic(document,"SCRIPT"),e.textContent=a,e.nonce=Ub(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?cn(this,c,!!f,a,d):Lk(Error("Unable to load Botguard from JS")))};
function cn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{dn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&Lk(h)}else{try{dn(a,new d(b))}catch(h){h instanceof Error&&Lk(h)}e&&e(b)}else Lk(Error("Failed to finish initializing VM"))}
bn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
bn.prototype.dispose=function(){this.h=null};
function dn(a,b){a.h=b}
;var en=new bn;function fn(){return!!en.h}
function gn(a){a=void 0===a?{}:a;return en.invoke(a)}
;function hn(a){M.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ga,this)}
v(hn,M);m=hn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.V("RECEIVING"))};
m.V=function(a,b){this.started&&!this.h&&this.connection.V(a,b)};
m.Ga=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=jn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=kn(a,c))&&this.V(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.hb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.hb=function(a,b){this.started&&!this.h&&this.connection.V(a,this.ma(a,b))};
m.ma=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||Se(a.i,"command",this.Ga,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);M.prototype.D.call(this)};function ln(a,b){hn.call(this,b);this.api=a;this.start()}
v(ln,hn);ln.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ln.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function jn(a,b){switch(a){case "loadVideoById":return a=Vk(b),[a];case "cueVideoById":return a=Vk(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Wk(b),[a];case "cuePlaylist":return a=Wk(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function kn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ln.prototype.ma=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return hn.prototype.ma.call(this,a,b)};
ln.prototype.D=function(){hn.prototype.D.call(this);delete this.api};function mn(a){a=void 0===a?!1:a;M.call(this);this.i=new N(a);Dd(this,Oa(Bd,this.i))}
C(mn,M);mn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
mn.prototype.l=function(a,b){this.h||this.i.U.apply(this.i,arguments)};function nn(a,b,c){mn.call(this);this.j=a;this.destination=b;this.id=c}
v(nn,mn);nn.prototype.V=function(a,b){this.h||this.j.V(this.destination,this.id,a,b)};
nn.prototype.D=function(){this.destination=this.j=null;mn.prototype.D.call(this)};function on(a,b,c){M.call(this);this.destination=a;this.origin=c;this.i=Cf(window,"message",this.j.bind(this));this.connection=new nn(this,a,b);Dd(this,Oa(Bd,this.connection))}
v(on,M);on.prototype.V=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(te(a),this.origin))};
on.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
on.prototype.D=function(){Df(this.i);this.destination=null;M.prototype.D.call(this)};function pn(){M.call(this);this.i=[]}
v(pn,M);pn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.wa)}M.prototype.D.call(this)};function qn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
qn.prototype.clone=function(){var a=new qn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=jb(c):a[b]=c}return a};var rn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function sn(a){a=a||"";if(window.spf){var b=a.match(rn);spf.style.load(a,b?b[1]:"",void 0)}else tn(a)}
function tn(a){var b=un(a),c=document.getElementById(b),d=c&&Nm(c,"loaded");d||c&&!d||(c=vn(a,b,function(){Nm(c,"loaded")||(Lm(c),Mg(b),Ff(Oa(Ng,b),0))}))}
function vn(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qc(a);Qb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function un(a){var b=Ic(document,"A");Pb(b,new Bb(a,Cb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function wn(a,b,c,d){M.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.ja=!1;this.api={};this.X=this.m=null;this.J=new N;this.i={};this.L=this.ca=this.elementId=this.ka=this.config=null;this.K=!1;this.l=this.B=null;this.da={};this.Ja=["onReady"];this.lastError=null;this.va=NaN;this.C={};this.Ka=new pn(this);this.N=0;this.j=this.o=a;Dd(this,Oa(Bd,this.J));xn(this);yn(this);Dd(this,Oa(Bd,this.Ka));c?this.N=Ff(function(){e.loadNewVideoConfig(c)},0):d&&(zn(this),An(this))}
v(wn,M);m=wn.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.N&&(Gf(this.N),this.N=0);var b=a||{};b instanceof qn||(b=new qn(b));this.config=b;this.setConfig(a);An(this);this.isReady()&&Bn(this)}};
function zn(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ka=a;this.config=Cn(a);zn(this);this.ca||(this.ca=Dn(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Sc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Sc(Number(a)||a))};
function Bn(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function En(a){var b=!0,c=Fn(a);c&&a.config&&(a=Gn(a),b=Nm(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function An(a){if(!a.h&&!a.K){var b=En(a);if(b&&"html5"===(Fn(a)?"html5":null))a.L="html5",a.isReady()||Hn(a);else if(In(a),a.L="html5",b&&a.l&&a.o)a.o.appendChild(a.l),Hn(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Jn(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Cn(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Hn(a)};
a.K=!0;b?a.B():(Rm(Gn(a),a.B),(b=Kn(a))&&sn(b),Ln(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Fn(a){var b=Ec(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Hn(a){var b;if(!a.h){var c=Fn(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!Jn(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Mn(a)):a.va=Ff(function(){Hn(a)},50)}}
function Mn(a){xn(a);a.ja=!0;var b=Fn(a);if(b){a.m=Nn(a,b,"addEventListener");a.X=Nn(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Nn(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Bn(a);a.ca&&a.ca(a.api);a.J.U("onReady",a.api)}
function Nn(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,Lk(h))}}}
function xn(a){a.ja=!1;if(a.X)for(var b in a.i)a.i.hasOwnProperty(b)&&a.X(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&Gf(Number(c));a.C={};a.m=null;a.X=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ka};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.ja};
function yn(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Mg("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Mg("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Mg("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Dn(this,b);d&&(0<=Va(this.Ja,a)||this.i[a]||(b=On(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&Ff(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Dn(this,b))&&Se(this.J,a,b)};
function Dn(a,b){var c=b;if("string"===typeof b){if(a.da[b])return a.da[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];(f=A(b))&&f.apply(y,e)};
a.da[b]=c}return c?c:null}
function On(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;y[c]=function(d){var e=Ff(function(){if(!a.h){a.J.U(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
gb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.L||(Fn(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function In(a){a.cancel();xn(a);a.L=null;a.config&&(a.config.loaded=!1);var b=Fn(a);b&&(En(a)||!Ln(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&Xm(Gn(this),this.B);Gf(this.va);this.K=!1};
m.D=function(){In(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Mk(b)}this.da=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ka=this.config=this.api=null;delete this.o;delete this.j;M.prototype.D.call(this)};
function Ln(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Gn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Kn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Jn(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Yf(d||"","&")[b]}
function Cn(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?jb(e):e}return b}
;var Pn={},Qn="player_uid_"+(1E9*Math.random()>>>0);function Rn(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Ec(d):d;var e=Qn+"_"+Ja(d),f=Pn[e];if(f&&c)return Sn(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new wn(d,e,a,b);Pn[e]=f;Mg("player-added",f.api);Dd(f,function(){delete Pn[f.getId()]});
return f.api}
function Sn(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Tn=null,Un=null,Vn=null;function Wn(){var a=Tn.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Xn(a,b,c){a="ST-"+Yb(a).toString(36);b=b?cc(b):"";c=c||5;var d=ad.get("CONSENT",void 0);d&&!d.startsWith("YES+")||oh(a,b,c)}
;function Yn(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ac(window.location.href);g&&f.push(g);g=ac(d);if(0<=Va(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),Pb(f,d),d=f.href),d){g=d.match(Zb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:yl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Xn(d,b,k)}else Xn(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=dc(a,l)+n;a=a instanceof Bb?a:Hb(a);c.href=Db(a)}return!0}
;z("yt.setConfig",O,void 0);z("yt.config.set",O,void 0);z("yt.setMsg",rf,void 0);z("yt.msgs.set",rf,void 0);z("yt.logging.errors.log",Mk,void 0);
z("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}ll(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);F("EXPERIMENT_FLAGS").embeds_js_api_set_1p_cookie&&(c=cg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));F("EXPERIMENT_FLAGS").embeds_web_force_csi_on_gel&&
O("FORCE_CSI_ON_GEL",!0);c=["ol"];hm("").info.actionType="embed";c&&O("TIMING_AFT_KEYS",c);O("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&xm(d,c[d]);xm("is_nav",1);(d=yl())&&xm("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!sm()&&xm("pa",d);d=cm();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&xm("p",c);e&&xm("t",e);xm("yt_vis",Cm());xm("yt_lt","cold");c=Zl();if(e=am())Z("srt",c.responseStart),1!==d.prerender&&(xm("yt_sts","n",void 0),Z("_start",e,void 0));
d=fm();0<d&&Z("fpt",d);if(!P("log_deltas_killswitch")){var f,g,h,k;W&&W.timing&&(W.timeOrigin&&W.timing.navigationStart&&zm("startTimeDelta",Math.floor(W.timeOrigin)-W.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=W.getEntriesByType)||void 0===f?void 0:f.call(W,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&W.timing.responseEnd&&zm("responseEndDelta",$l(d.responseEnd)-W.timing.responseEnd))}f=Zl();f.isPerformanceNavigationTiming&&
xm("pnt",1,void 0);Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=am()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",
f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));W&&W.getEntriesByType&&Em();f=[];if(document.querySelector&&W&&W.getEntriesByName)for(var l in Wl)Wl.hasOwnProperty(l)&&(g=Wl[l],Dm(l,g)&&f.push(g));f.length&&xm("rc",f.join(","));if(sm(void 0)){l={actionType:mm[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:mm[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=yl())l.clientScreenNonce=f;f=dm(void 0);km().info(l,f)}l=cm();g=Yl();if("cold"===l.yt_lt&&(f=
um(),h=f.gelTicks?f.gelTicks:f.gelTicks={},f=f.gelInfos?f.gelInfos:f.gelInfos={},sm())){for(var n in g)"tick_"+n in h||tm(n,g[n]);n=wm();g=dm();h={};for(var p in l)"info_"+p in f||!(k=vm(p,l[p]))||(Kl(n,k),Kl(h,k));km().info(h,g)}z("ytglobal.timingready_",!0,void 0);ym();(p=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in p?(p=p.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,p.serializedForcedExperimentIds||(n=cg(),n.forced_experiments&&(p.serializedForcedExperimentIds=
n.forced_experiments)),Tn=Rn(a,p,!1)):Tn=Rn(a);Tn.addEventListener("onVideoDataChange",Wn);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Vn=new Xk(Tn):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Un=new on(window.parent,a,b),Vn=new ln(Tn,Un.connection));$m();F("EXPERIMENT_FLAGS").networkless_logging_web_embedded&&fk()},void 0);
var Zn=nf(function(){Am();var a=qh.getInstance(),b=!!((th("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Gd(document.body,"exp-invert-logo"))if(c&&!Gd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gd(d,"inverted-hdpi")){var e=Ed(d);Fd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gd(document.body,"inverted-hdpi")&&Hd();if(b!=c){b="f"+(Math.floor(119/31)+1);d=th(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete ph[b]:(c=d.toString(16),ph[b]=c.toString());c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in ph)d.push(f+"="+encodeURIComponent(String(ph[f])));oh(b,d.join("&"),63072E3,a.i,c)}Gm.h||(Gm.h=new Gm);a=Gm.h;f=16623;var g=void 0===g?{}:g;Object.values(Ok).includes(f)||(Lk(new ci("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.u=[];g.za?Jm(a,f,g):Km(a,f,g)}),$n=nf(function(){Tn&&
Tn.sendAbandonmentPing&&Tn.sendAbandonmentPing();
F("PL_ATT")&&en.dispose();for(var a=0,b=Ym.length;a<b;a++)Nf(Ym[a]);Ym.length=0;Wm("//static.doubleclick.net/instream/ad_status.js");Zm=!1;O("DCLKSTAT",0);Cd(Vn,Un);Tn&&(Tn.removeEventListener("onVideoDataChange",Wn),Tn.destroy())});
window.addEventListener?(window.addEventListener("load",Zn),window.addEventListener("unload",$n)):window.attachEvent&&(window.attachEvent("onload",Zn),window.attachEvent("onunload",$n));Pa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||fn);Pa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||gn);Pa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||an);
Pa("yt.player.exports.navigate",A("yt.player.exports.navigate")||Yn);Pa("yt.util.activity.init",A("yt.util.activity.init")||Pf);Pa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Sf);Pa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Qf);}).call(this);
