function hv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var im={exports:{}},yl={},rm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),mv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),vv=Symbol.for("react.strict_mode"),_v=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),Mv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),gf=Symbol.iterator;function Tv(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am=Object.assign,om={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=om,this.updater=n||sm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lm(){}lm.prototype=Rs.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=om,this.updater=n||sm}var sd=rd.prototype=new lm;sd.constructor=rd;am(sd,Rs.prototype);sd.isPureReactComponent=!0;var vf=Array.isArray,um=Object.prototype.hasOwnProperty,ad={current:null},cm={key:!0,ref:!0,__self:!0,__source:!0};function dm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)um.call(e,i)&&!cm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:La,type:t,key:s,ref:a,props:r,_owner:ad.current}}function Av(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _f=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bv(""+t.key):e.toString(36)}function Po(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case La:case mv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+jl(a,0):i,vf(r)?(n="",t!=null&&(n=t.replace(_f,"$&/")+"/"),Po(r,e,n,"",function(u){return u})):r!=null&&(od(r)&&(r=Av(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(_f,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+jl(s,o);a+=Po(s,e,n,l,r)}else if(l=Tv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+jl(s,o++),a+=Po(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Po(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Lo={transition:null},Rv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:ad};function fm(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Rs;Ge.Fragment=gv;Ge.Profiler=_v;Ge.PureComponent=rd;Ge.StrictMode=vv;Ge.Suspense=Mv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;Ge.act=fm;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=am({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ad.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)um.call(e,l)&&!cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:La,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xv,_context:t},t.Consumer=t};Ge.createElement=dm;Ge.createFactory=function(t){var e=dm.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Sv,render:t}};Ge.isValidElement=od;Ge.lazy=function(t){return{$$typeof:wv,_payload:{_status:-1,_result:t},_init:Cv}};Ge.memo=function(t,e){return{$$typeof:Ev,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Lo.transition;Lo.transition={};try{t()}finally{Lo.transition=e}};Ge.unstable_act=fm;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";rm.exports=Ge;var ee=rm.exports;const hm=pv(ee),Pv=hv({__proto__:null,default:hm},[ee]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=ee,Nv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Iv=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Uv.call(e,i)&&!Fv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Nv,type:t,key:s,ref:a,props:r,_owner:Iv.current}}yl.Fragment=Dv;yl.jsx=pm;yl.jsxs=pm;im.exports=yl;var y=im.exports,Qu={},mm={exports:{}},pn={},gm={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var V=P.length;P.push(F);e:for(;0<V;){var K=V-1>>>1,ae=P[K];if(0<r(ae,F))P[K]=F,P[V]=ae,V=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var F=P[0],V=P.pop();if(V!==F){P[0]=V;e:for(var K=0,ae=P.length,Ae=ae>>>1;K<Ae;){var H=2*(K+1)-1,Z=P[H],ce=H+1,Me=P[ce];if(0>r(Z,V))ce<ae&&0>r(Me,Z)?(P[K]=Me,P[ce]=V,K=ce):(P[K]=Z,P[H]=V,K=H);else if(ce<ae&&0>r(Me,V))P[K]=Me,P[ce]=V,K=ce;else break e}}return F}function r(P,F){var V=P.sortIndex-F.sortIndex;return V!==0?V:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=P)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function E(P){if(x=!1,g(P),!_)if(n(l)!==null)_=!0,j(R);else{var F=n(u);F!==null&&q(E,F.startTime-P)}}function R(P,F){_=!1,x&&(x=!1,c(D),D=-1),m=!0;var V=h;try{for(g(F),d=n(l);d!==null&&(!(d.expirationTime>F)||P&&!C());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var ae=K(d.expirationTime<=F);F=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),g(F)}else i(l);d=n(l)}if(d!==null)var Ae=!0;else{var H=n(u);H!==null&&q(E,H.startTime-F),Ae=!1}return Ae}finally{d=null,h=V,m=!1}}var b=!1,T=null,D=-1,Y=5,S=-1;function C(){return!(t.unstable_now()-S<Y)}function ie(){if(T!==null){var P=t.unstable_now();S=P;var F=!0;try{F=T(!0,P)}finally{F?J():(b=!1,T=null)}}else b=!1}var J;if(typeof v=="function")J=function(){v(ie)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=ie,J=function(){X.postMessage(null)}}else J=function(){p(ie,0)};function j(P){T=P,b||(b=!0,J())}function q(P,F){D=p(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,j(R))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var V=h;h=F;try{return P()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=h;h=P;try{return F()}finally{h=V}},t.unstable_scheduleCallback=function(P,F,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=V+ae,P={id:f++,callback:F,priorityLevel:P,startTime:V,expirationTime:ae,sortIndex:-1},V>K?(P.sortIndex=V,e(u,P),n(l)===null&&P===n(u)&&(x?(c(D),D=-1):x=!0,q(E,V-K))):(P.sortIndex=ae,e(l,P),_||m||(_=!0,j(R))),P},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(P){var F=h;return function(){var V=h;h=F;try{return P.apply(this,arguments)}finally{h=V}}}})(vm);gm.exports=vm;var kv=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=ee,hn=kv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,da={};function Lr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(da[t]=e,t=0;t<e.length;t++)_m.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},yf={};function Bv(t){return Ju.call(yf,t)?!0:Ju.call(xf,t)?!1:zv.test(t)?yf[t]=!0:(xf[t]=!0,!1)}function Hv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gv(t,e,n,i){if(e===null||typeof e>"u"||Hv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Dt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Dt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Dt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gv(e,n,r,i)&&(n=null),i||r===null?Bv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Xl;function Qs(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var $l=!1;function Yl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function Vv(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Kr:return"Portal";case ec:return"Profiler";case dd:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ym:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function Wv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jv(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=jv(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function sc(t,e){wm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ef(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Js(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Tm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){Xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $v=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(t,e){if(e){if($v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,ds=null,fs=null;function Af(t){if(t=Ua(t)){if(typeof fc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Tl(e),fc(t.stateNode,t.type,e))}}function Pm(t){ds?fs?fs.push(t):fs=[t]:ds=t}function Lm(){if(ds){var t=ds,e=fs;if(fs=ds=null,Af(t),e)for(t=0;t<e.length;t++)Af(e[t])}}function Nm(t,e){return t(e)}function Dm(){}var ql=!1;function Um(t,e,n){if(ql)return t(e,n);ql=!0;try{return Nm(t,e,n)}finally{ql=!1,(ds!==null||fs!==null)&&(Dm(),Lm())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Tl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var hc=!1;if(fi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){hc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{hc=!1}function Yv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ia=!1,Wo=null,jo=!1,pc=null,qv={onError:function(t){ia=!0,Wo=t}};function Kv(t,e,n,i,r,s,a,o,l){ia=!1,Wo=null,Yv.apply(qv,arguments)}function Zv(t,e,n,i,r,s,a,o,l){if(Kv.apply(this,arguments),ia){if(ia){var u=Wo;ia=!1,Wo=null}else throw Error(te(198));jo||(jo=!0,pc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bf(t){if(Nr(t)!==t)throw Error(te(188))}function Qv(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bf(r),t;if(s===i)return bf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Fm(t){return t=Qv(t),t!==null?km(t):null}function km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=km(t);if(e!==null)return e;t=t.sibling}return null}var Om=hn.unstable_scheduleCallback,Cf=hn.unstable_cancelCallback,Jv=hn.unstable_shouldYield,e_=hn.unstable_requestPaint,pt=hn.unstable_now,t_=hn.unstable_getCurrentPriorityLevel,md=hn.unstable_ImmediatePriority,zm=hn.unstable_UserBlockingPriority,Xo=hn.unstable_NormalPriority,n_=hn.unstable_LowPriority,Bm=hn.unstable_IdlePriority,Sl=null,Xn=null;function i_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:a_,r_=Math.log,s_=Math.LN2;function a_(t){return t>>>=0,t===0?32:31-(r_(t)/s_|0)|0}var $a=64,Ya=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $o(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ea(o):(s&=a,s!==0&&(i=ea(s)))}else a=n&~r,a!==0?i=ea(a):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function o_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-In(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=o_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function mc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hm(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function u_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vm,vd,Wm,jm,Xm,gc=!1,qa=[],Di=null,Ui=null,Ii=null,pa=new Map,ma=new Map,Ai=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function d_(t,e,n,i,r){switch(e){case"focusin":return Di=Bs(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Bs(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Bs(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Bs(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Bs(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function $m(t){var e=vr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Im(n),e!==null){t.blockedOn=e,Xm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dc=i,n.target.dispatchEvent(i),dc=null}else return e=Ua(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Pf(t,e,n){No(t)&&n.delete(e)}function f_(){gc=!1,Di!==null&&No(Di)&&(Di=null),Ui!==null&&No(Ui)&&(Ui=null),Ii!==null&&No(Ii)&&(Ii=null),pa.forEach(Pf),ma.forEach(Pf)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,gc||(gc=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,f_)))}function ga(t){function e(r){return Hs(r,t)}if(0<qa.length){Hs(qa[0],t);for(var n=1;n<qa.length;n++){var i=qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Hs(Di,t),Ui!==null&&Hs(Ui,t),Ii!==null&&Hs(Ii,t),pa.forEach(e),ma.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)$m(n),n.blockedOn===null&&Ai.shift()}var hs=gi.ReactCurrentBatchConfig,Yo=!0;function h_(t,e,n,i){var r=Ke,s=hs.transition;hs.transition=null;try{Ke=1,_d(t,e,n,i)}finally{Ke=r,hs.transition=s}}function p_(t,e,n,i){var r=Ke,s=hs.transition;hs.transition=null;try{Ke=4,_d(t,e,n,i)}finally{Ke=r,hs.transition=s}}function _d(t,e,n,i){if(Yo){var r=vc(t,e,n,i);if(r===null)au(t,e,i,qo,n),Rf(t,i);else if(d_(r,t,e,n,i))i.stopPropagation();else if(Rf(t,i),e&4&&-1<c_.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&Vm(s),s=vc(t,e,n,i),s===null&&au(t,e,i,qo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(t,e,i,null,n)}}var qo=null;function vc(t,e,n,i){if(qo=null,t=pd(i),t=vr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function Ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t_()){case md:return 1;case zm:return 4;case Xo:case n_:return 16;case Bm:return 536870912;default:return 16}default:return 16}}var Ri=null,xd=null,Do=null;function qm(){if(Do)return Do;var t,e=xd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Do=r.slice(t,1<i?1-i:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Lf(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Lf,this.isPropagationStopped=Lf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=mn(Ps),Da=ct({},Ps,{view:0,detail:0}),m_=mn(Da),Zl,Ql,Gs,Ml=ct({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Zl=t.screenX-Gs.screenX,Ql=t.screenY-Gs.screenY):Ql=Zl=0,Gs=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Nf=mn(Ml),g_=ct({},Ml,{dataTransfer:0}),v_=mn(g_),__=ct({},Da,{relatedTarget:0}),Jl=mn(__),x_=ct({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),y_=mn(x_),S_=ct({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M_=mn(S_),E_=ct({},Ps,{data:0}),Df=mn(E_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=A_[t])?!!e[t]:!1}function Sd(){return b_}var C_=ct({},Da,{key:function(t){if(t.key){var e=w_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=mn(C_),P_=ct({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=mn(P_),L_=ct({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),N_=mn(L_),D_=ct({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=mn(D_),I_=ct({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F_=mn(I_),k_=[9,13,27,32],Md=fi&&"CompositionEvent"in window,ra=null;fi&&"documentMode"in document&&(ra=document.documentMode);var O_=fi&&"TextEvent"in window&&!ra,Km=fi&&(!Md||ra&&8<ra&&11>=ra),If=" ",Ff=!1;function Zm(t,e){switch(t){case"keyup":return k_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function z_(t,e){switch(t){case"compositionend":return Qm(e);case"keypress":return e.which!==32?null:(Ff=!0,If);case"textInput":return t=e.data,t===If&&Ff?null:t;default:return null}}function B_(t,e){if(Qr)return t==="compositionend"||!Md&&Zm(t,e)?(t=qm(),Do=xd=Ri=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var H_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H_[t.type]:e==="textarea"}function Jm(t,e,n,i){Pm(i),e=Ko(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,va=null;function G_(t){cg(t,0)}function El(t){var e=ts(t);if(Em(e))return t}function V_(t,e){if(t==="change")return e}var eg=!1;if(fi){var eu;if(fi){var tu="oninput"in document;if(!tu){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),tu=typeof Of.oninput=="function"}eu=tu}else eu=!1;eg=eu&&(!document.documentMode||9<document.documentMode)}function zf(){sa&&(sa.detachEvent("onpropertychange",tg),va=sa=null)}function tg(t){if(t.propertyName==="value"&&El(va)){var e=[];Jm(e,va,t,pd(t)),Um(G_,e)}}function W_(t,e,n){t==="focusin"?(zf(),sa=e,va=n,sa.attachEvent("onpropertychange",tg)):t==="focusout"&&zf()}function j_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(va)}function X_(t,e){if(t==="click")return El(e)}function $_(t,e){if(t==="input"||t==="change")return El(e)}function Y_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:Y_;function _a(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=Bf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q_(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&Ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hf(n,s);var a=Hf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var K_=fi&&"documentMode"in document&&11>=document.documentMode,Jr=null,_c=null,aa=null,xc=!1;function Gf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Jr==null||Jr!==Vo(i)||(i=Jr,"selectionStart"in i&&Ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&_a(aa,i)||(aa=i,i=Ko(_c,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},nu={},rg={};fi&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function wl(t){if(nu[t])return nu[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return nu[t]=e[n];return t}var sg=wl("animationend"),ag=wl("animationiteration"),og=wl("animationstart"),lg=wl("transitionend"),ug=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){ug.set(t,e),Lr(e,[t])}for(var iu=0;iu<Vf.length;iu++){var ru=Vf[iu],Z_=ru.toLowerCase(),Q_=ru[0].toUpperCase()+ru.slice(1);qi(Z_,"on"+Q_)}qi(sg,"onAnimationEnd");qi(ag,"onAnimationIteration");qi(og,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(lg,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Wf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Zv(i,e,void 0,t),t.currentTarget=null}function cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wf(r,o,u),s=l}}}if(jo)throw t=pc,jo=!1,pc=null,t}function tt(t,e){var n=e[wc];n===void 0&&(n=e[wc]=new Set);var i=t+"__bubble";n.has(i)||(dg(e,t,2,!1),n.add(i))}function su(t,e,n){var i=0;e&&(i|=4),dg(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Qa]){t[Qa]=!0,_m.forEach(function(n){n!=="selectionchange"&&(J_.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,su("selectionchange",!1,e))}}function dg(t,e,n,i){switch(Ym(e)){case 1:var r=h_;break;case 4:r=p_;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=vr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Um(function(){var u=s,f=pd(n),d=[];e:{var h=ug.get(t);if(h!==void 0){var m=yd,_=t;switch(t){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":m=R_;break;case"focusin":_="focus",m=Jl;break;case"focusout":_="blur",m=Jl;break;case"beforeblur":case"afterblur":m=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=N_;break;case sg:case ag:case og:m=y_;break;case lg:m=U_;break;case"scroll":m=m_;break;case"wheel":m=F_;break;case"copy":case"cut":case"paste":m=M_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uf}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,c!==null&&(E=ha(v,c),E!=null&&x.push(ya(v,E,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==dc&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[hi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?vr(_):null,_!==null&&(p=Nr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=Nf,E="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Uf,E="onPointerLeave",c="onPointerEnter",v="pointer"),p=m==null?h:ts(m),g=_==null?h:ts(_),h=new x(E,v+"leave",m,n,f),h.target=p,h.relatedTarget=g,E=null,vr(f)===u&&(x=new x(c,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,E=x),p=E,m&&_)t:{for(x=m,c=_,v=0,g=x;g;g=Dr(g))v++;for(g=0,E=c;E;E=Dr(E))g++;for(;0<v-g;)x=Dr(x),v--;for(;0<g-v;)c=Dr(c),g--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=Dr(x),c=Dr(c)}x=null}else x=null;m!==null&&jf(d,h,m,x,!1),_!==null&&p!==null&&jf(d,p,_,x,!0)}}e:{if(h=u?ts(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=V_;else if(kf(h))if(eg)R=$_;else{R=j_;var b=W_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=X_);if(R&&(R=R(t,u))){Jm(d,R,n,f);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&ac(h,"number",h.value)}switch(b=u?ts(u):window,t){case"focusin":(kf(b)||b.contentEditable==="true")&&(Jr=b,_c=u,aa=null);break;case"focusout":aa=_c=Jr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Gf(d,n,f);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":Gf(d,n,f)}var T;if(Md)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Qr?Zm(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Km&&n.locale!=="ko"&&(Qr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Qr&&(T=qm()):(Ri=f,xd="value"in Ri?Ri.value:Ri.textContent,Qr=!0)),b=Ko(u,D),0<b.length&&(D=new Df(D,t,null,n,f),d.push({event:D,listeners:b}),T?D.data=T:(T=Qm(n),T!==null&&(D.data=T)))),(T=O_?z_(t,n):B_(t,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(f=new Df("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=T))}cg(d,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ko(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ha(n,s),l!=null&&a.unshift(ya(n,l,o))):r||(l=ha(n,s),l!=null&&a.push(ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ex=/\r\n?/g,tx=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(ex,`
`).replace(tx,"")}function Ja(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(te(425))}function Zo(){}var yc=null,Sc=null;function Mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(rx)}:Ec;function rx(t){setTimeout(function(){throw t})}function ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ls,Sa="__reactProps$"+Ls,hi="__reactContainer$"+Ls,wc="__reactEvents$"+Ls,sx="__reactListeners$"+Ls,ax="__reactHandles$"+Ls;function vr(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yf(t);t!==null;){if(n=t[Vn])return n;t=Yf(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[Vn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Tl(t){return t[Sa]||null}var Tc=[],ns=-1;function Ki(t){return{current:t}}function it(t){0>ns||(t.current=Tc[ns],Tc[ns]=null,ns--)}function et(t,e){ns++,Tc[ns]=t.current,t.current=e}var Xi={},Ht=Ki(Xi),en=Ki(!1),Tr=Xi;function xs(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Qo(){it(en),it(Ht)}function qf(t,e,n){if(Ht.current!==Xi)throw Error(te(168));et(Ht,e),et(en,n)}function fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Wv(t)||"Unknown",r));return ct({},n,i)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Tr=Ht.current,et(Ht,t),et(en,en.current),!0}function Kf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=fg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,it(en),it(Ht),et(Ht,t)):it(en),et(en,n)}var si=null,Al=!1,lu=!1;function hg(t){si===null?si=[t]:si.push(t)}function ox(t){Al=!0,hg(t)}function Zi(){if(!lu&&si!==null){lu=!0;var t=0,e=Ke;try{var n=si;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Al=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Om(md,Zi),r}finally{Ke=e,lu=!1}}return null}var is=[],rs=0,el=null,tl=0,xn=[],yn=0,Ar=null,li=1,ui="";function cr(t,e){is[rs++]=tl,is[rs++]=el,el=t,tl=e}function pg(t,e,n){xn[yn++]=li,xn[yn++]=ui,xn[yn++]=Ar,Ar=t;var i=li;t=ui;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-In(e)+r|n<<r|i,ui=s+t}else li=1<<s|n<<r|i,ui=t}function wd(t){t.return!==null&&(cr(t,1),pg(t,1,0))}function Td(t){for(;t===el;)el=is[--rs],is[rs]=null,tl=is[--rs],is[rs]=null;for(;t===Ar;)Ar=xn[--yn],xn[yn]=null,ui=xn[--yn],xn[yn]=null,li=xn[--yn],xn[yn]=null}var fn=null,dn=null,at=!1,Nn=null;function mg(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:li,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function Ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bc(t){if(at){var e=dn;if(e){var n=e;if(!Zf(t,e)){if(Ac(t))throw Error(te(418));e=Fi(n.nextSibling);var i=fn;e&&Zf(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,at=!1,fn=t)}}else{if(Ac(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,fn=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function eo(t){if(t!==fn)return!1;if(!at)return Qf(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mc(t.type,t.memoizedProps)),e&&(e=dn)){if(Ac(t))throw gg(),Error(te(418));for(;e;)mg(t,e),e=Fi(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?Fi(t.stateNode.nextSibling):null;return!0}function gg(){for(var t=dn;t;)t=Fi(t.nextSibling)}function ys(){dn=fn=null,at=!1}function Ad(t){Nn===null?Nn=[t]:Nn.push(t)}var lx=gi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jf(t){var e=t._init;return e(t._payload)}function vg(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Bi(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,v,g,E){return v===null||v.tag!==6?(v=mu(g,c.mode,E),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,E){var R=g.type;return R===Zr?f(c,v,g.props.children,E,g.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Jf(R)===v.type)?(E=r(v,g.props),E.ref=Vs(c,v,g),E.return=c,E):(E=Ho(g.type,g.key,g.props,null,c.mode,E),E.ref=Vs(c,v,g),E.return=c,E)}function u(c,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=gu(g,c.mode,E),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,E,R){return v===null||v.tag!==7?(v=Mr(g,c.mode,E,R),v.return=c,v):(v=r(v,g),v.return=c,v)}function d(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mu(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return g=Ho(v.type,v.key,v.props,null,c.mode,g),g.ref=Vs(c,null,v),g.return=c,g;case Kr:return v=gu(v,c.mode,g),v.return=c,v;case wi:var E=v._init;return d(c,E(v._payload),g)}if(Js(v)||Os(v))return v=Mr(v,c.mode,g,null),v.return=c,v;to(c,v)}return null}function h(c,v,g,E){var R=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(c,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:return g.key===R?l(c,v,g,E):null;case Kr:return g.key===R?u(c,v,g,E):null;case wi:return R=g._init,h(c,v,R(g._payload),E)}if(Js(g)||Os(g))return R!==null?null:f(c,v,g,E,null);to(c,g)}return null}function m(c,v,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(g)||null,o(v,c,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wa:return c=c.get(E.key===null?g:E.key)||null,l(v,c,E,R);case Kr:return c=c.get(E.key===null?g:E.key)||null,u(v,c,E,R);case wi:var b=E._init;return m(c,v,g,b(E._payload),R)}if(Js(E)||Os(E))return c=c.get(g)||null,f(v,c,E,R,null);to(v,E)}return null}function _(c,v,g,E){for(var R=null,b=null,T=v,D=v=0,Y=null;T!==null&&D<g.length;D++){T.index>D?(Y=T,T=null):Y=T.sibling;var S=h(c,T,g[D],E);if(S===null){T===null&&(T=Y);break}t&&T&&S.alternate===null&&e(c,T),v=s(S,v,D),b===null?R=S:b.sibling=S,b=S,T=Y}if(D===g.length)return n(c,T),at&&cr(c,D),R;if(T===null){for(;D<g.length;D++)T=d(c,g[D],E),T!==null&&(v=s(T,v,D),b===null?R=T:b.sibling=T,b=T);return at&&cr(c,D),R}for(T=i(c,T);D<g.length;D++)Y=m(T,c,D,g[D],E),Y!==null&&(t&&Y.alternate!==null&&T.delete(Y.key===null?D:Y.key),v=s(Y,v,D),b===null?R=Y:b.sibling=Y,b=Y);return t&&T.forEach(function(C){return e(c,C)}),at&&cr(c,D),R}function x(c,v,g,E){var R=Os(g);if(typeof R!="function")throw Error(te(150));if(g=R.call(g),g==null)throw Error(te(151));for(var b=R=null,T=v,D=v=0,Y=null,S=g.next();T!==null&&!S.done;D++,S=g.next()){T.index>D?(Y=T,T=null):Y=T.sibling;var C=h(c,T,S.value,E);if(C===null){T===null&&(T=Y);break}t&&T&&C.alternate===null&&e(c,T),v=s(C,v,D),b===null?R=C:b.sibling=C,b=C,T=Y}if(S.done)return n(c,T),at&&cr(c,D),R;if(T===null){for(;!S.done;D++,S=g.next())S=d(c,S.value,E),S!==null&&(v=s(S,v,D),b===null?R=S:b.sibling=S,b=S);return at&&cr(c,D),R}for(T=i(c,T);!S.done;D++,S=g.next())S=m(T,c,D,S.value,E),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?D:S.key),v=s(S,v,D),b===null?R=S:b.sibling=S,b=S);return t&&T.forEach(function(ie){return e(c,ie)}),at&&cr(c,D),R}function p(c,v,g,E){if(typeof g=="object"&&g!==null&&g.type===Zr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:e:{for(var R=g.key,b=v;b!==null;){if(b.key===R){if(R=g.type,R===Zr){if(b.tag===7){n(c,b.sibling),v=r(b,g.props.children),v.return=c,c=v;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Jf(R)===b.type){n(c,b.sibling),v=r(b,g.props),v.ref=Vs(c,b,g),v.return=c,c=v;break e}n(c,b);break}else e(c,b);b=b.sibling}g.type===Zr?(v=Mr(g.props.children,c.mode,E,g.key),v.return=c,c=v):(E=Ho(g.type,g.key,g.props,null,c.mode,E),E.ref=Vs(c,v,g),E.return=c,c=E)}return a(c);case Kr:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=gu(g,c.mode,E),v.return=c,c=v}return a(c);case wi:return b=g._init,p(c,v,b(g._payload),E)}if(Js(g))return _(c,v,g,E);if(Os(g))return x(c,v,g,E);to(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=mu(g,c.mode,E),v.return=c,c=v),a(c)):n(c,v)}return p}var Ss=vg(!0),_g=vg(!1),nl=Ki(null),il=null,ss=null,bd=null;function Cd(){bd=ss=il=null}function Rd(t){var e=nl.current;it(nl),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){il=t,bd=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(il===null)throw Error(te(308));ss=t,il.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var _r=null;function Pd(t){_r===null?_r=[t]:_r.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function eh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=u=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ct({},d,h);break e;case 2:Ti=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=d}}function th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ia={},$n=Ki(Ia),Ma=Ki(Ia),Ea=Ki(Ia);function xr(t){if(t===Ia)throw Error(te(174));return t}function Nd(t,e){switch(et(Ea,e),et(Ma,t),et($n,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lc(e,t)}it($n),et($n,e)}function Ms(){it($n),it(Ma),it(Ea)}function Sg(t){xr(Ea.current);var e=xr($n.current),n=lc(e,t.type);e!==n&&(et(Ma,t),et($n,n))}function Dd(t){Ma.current===t&&(it($n),it(Ma))}var lt=Ki(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uu=[];function Ud(){for(var t=0;t<uu.length;t++)uu[t]._workInProgressVersionPrimary=null;uu.length=0}var Fo=gi.ReactCurrentDispatcher,cu=gi.ReactCurrentBatchConfig,br=0,ut=null,yt=null,At=null,al=!1,oa=!1,wa=0,ux=0;function It(){throw Error(te(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(br=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fo.current=t===null||t.memoizedState===null?hx:px,t=n(i,r),oa){s=0;do{if(oa=!1,wa=0,25<=s)throw Error(te(301));s+=1,At=yt=null,e.updateQueue=null,Fo.current=mx,t=n(i,r)}while(oa)}if(Fo.current=ol,e=yt!==null&&yt.next!==null,br=0,At=yt=ut=null,al=!1,e)throw Error(te(300));return t}function kd(){var t=wa!==0;return wa=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ut.memoizedState=At=t:At=At.next=t,At}function Tn(){if(yt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=At===null?ut.memoizedState:At.next;if(e!==null)At=e,yt=t;else{if(t===null)throw Error(te(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},At===null?ut.memoizedState=At=t:At=At.next=t}return At}function Ta(t,e){return typeof e=="function"?e(t):e}function du(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,ut.lanes|=f,Cr|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,kn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);kn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=ut,i=Tn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Od(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Aa(9,Tg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(te(349));br&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,bg(e)&&Cg(t)}function Ag(t,e,n){return n(function(){bg(e)&&Cg(t)})}function bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Cg(t){var e=pi(t,1);e!==null&&Fn(e,t,1,-1)}function nh(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,ut,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return Tn().memoizedState}function ko(t,e,n,i){var r=Bn();ut.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var a=yt.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=Aa(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function ih(t,e){return ko(8390656,8,t,e)}function Od(t,e){return bl(2048,8,t,e)}function Pg(t,e){return bl(4,2,t,e)}function Lg(t,e){return bl(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Ng.bind(null,e,t),n)}function zd(){}function Ug(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ig(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fg(t,e,n){return br&21?(kn(n,e)||(n=Hm(),ut.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function cx(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=cu.transition;cu.transition={};try{t(!1),e()}finally{Ke=n,cu.transition=i}}function kg(){return Tn().memoizedState}function dx(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))zg(e,n);else if(n=xg(t,e,n,i),n!==null){var r=Xt();Fn(n,t,i,r),Bg(n,e,i)}}function fx(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=Xt(),Fn(n,t,i,r),Bg(n,e,i))}}function Og(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function zg(t,e){oa=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var ol={readContext:wn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},hx={readContext:wn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dx.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:nh,useDebugValue:zd,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=nh(!1),e=t[0];return t=cx.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Bn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ct===null)throw Error(te(349));br&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ih(Ag.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Ct.identifierPrefix;if(at){var n=ui,i=li;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ux++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},px={readContext:wn,useCallback:Ug,useContext:wn,useEffect:Od,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ig,useReducer:du,useRef:Rg,useState:function(){return du(Ta)},useDebugValue:zd,useDeferredValue:function(t){var e=Tn();return Fg(e,yt.memoizedState,t)},useTransition:function(){var t=du(Ta)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:kg,unstable_isNewReconciler:!1},mx={readContext:wn,useCallback:Ug,useContext:wn,useEffect:Od,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ig,useReducer:fu,useRef:Rg,useState:function(){return fu(Ta)},useDebugValue:zd,useDeferredValue:function(t){var e=Tn();return yt===null?e.memoizedState=t:Fg(e,yt.memoizedState,t)},useTransition:function(){var t=fu(Ta)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:kg,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Fn(e,t,r,i),Io(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Fn(e,t,r,i),Io(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Fn(e,t,i,n),Io(e,t,i))}};function rh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function Hg(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=tn(e)?Tr:Ht.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=tn(e)?Tr:Ht.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=Vv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gx=typeof WeakMap=="function"?WeakMap:Map;function Gg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ul||(ul=!0,Hc=i),Lc(t,e)},n}function Vg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lc(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Px.bind(null,t,e,n),e.then(t,t))}function oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var vx=gi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?_g(e,null,n,i):Ss(e,t.child,n,i)}function uh(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=Fd(t,e,n,i,s,r),n=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&n&&wd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function ch(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=Ho(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Nc(t,e,n,i,r)}function jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(os,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(os,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(os,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(os,cn),cn|=i;return Wt(t,e,r,n),e.child}function Xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nc(t,e,n,i,r){var s=tn(n)?Tr:Ht.current;return s=xs(e,s),ps(e,r),n=Fd(t,e,n,i,s,r),i=kd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(at&&i&&wd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function dh(t,e,n,i,r){if(tn(n)){var s=!0;Jo(e)}else s=!1;if(ps(e,r),e.stateNode===null)Oo(t,e),Hg(e,n,i),Pc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=tn(n)?Tr:Ht.current,u=xs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&sh(e,a,i,u),Ti=!1;var h=e.memoizedState;a.state=h,rl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||en.current||Ti?(typeof f=="function"&&(Rc(e,n,f,i),l=e.memoizedState),(o=Ti||rh(e,n,o,i,h,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Pn(e.type,o),a.props=u,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=tn(n)?Tr:Ht.current,l=xs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&sh(e,a,i,l),Ti=!1,h=e.memoizedState,a.state=h,rl(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||en.current||Ti?(typeof m=="function"&&(Rc(e,n,m,i),_=e.memoizedState),(u=Ti||rh(e,n,u,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Dc(t,e,n,i,s,r)}function Dc(t,e,n,i,r,s){Xg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kf(e,n,!1),mi(t,e,s);i=e.stateNode,vx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Kf(e,n,!0),e.child}function $g(t){var e=t.stateNode;e.pendingContext?qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qf(t,e.context,!1),Nd(t,e.containerInfo)}function fh(t,e,n,i,r){return ys(),Ad(r),e.flags|=256,Wt(t,e,n,i),e.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(lt,r&1),t===null)return bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ll(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ic(n),e.memoizedState=Uc,t):Bd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return _x(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ic(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Uc,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&Ad(i),Ss(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _x(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=hu(Error(te(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Ic(a),e.memoizedState=Uc,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=hu(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Fn(i,t,r,-1))}return Xd(),i=hu(Error(te(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Lx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Fi(r.nextSibling),fn=e,at=!0,Nn=null,t!==null&&(xn[yn++]=li,xn[yn++]=ui,xn[yn++]=Ar,li=t.id,ui=t.overflow,Ar=e),e=Bd(e,i.children),e.flags|=4096,e)}function hh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cc(t.return,e,n)}function pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hh(t,n,e);else if(t.tag===19)hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xx(t,e,n){switch(e.tag){case 3:$g(e),ys();break;case 5:Sg(e);break;case 1:tn(e.type)&&Jo(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(et(lt,lt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);et(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,jg(t,e,n)}return mi(t,e,n)}var Kg,Fc,Zg,Qg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr($n.current);var s=null;switch(n){case"input":r=rc(t,r),i=rc(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=oc(t,r),i=oc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zo)}uc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yx(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Qo(),Ft(e),null;case 3:return i=e.stateNode,Ms(),it(en),it(Ht),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Wc(Nn),Nn=null))),Fc(t,e),Ft(e),null;case 5:Dd(e);var r=xr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ft(e),null}if(t=xr($n.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Vn]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)tt(ta[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":Mf(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":wf(i,s),tt("invalid",i)}uc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&tt("scroll",i)}switch(n){case"input":ja(i),Ef(i,s,!0);break;case"textarea":ja(i),Tf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Vn]=e,t[Sa]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(a=cc(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)tt(ta[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":Mf(t,i),r=rc(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),tt("invalid",t);break;case"textarea":wf(t,i),r=oc(t,i),tt("invalid",t);break;default:r=i}uc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Rm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&cd(t,s,l,a))}switch(n){case"input":ja(t),Ef(t,i,!1);break;case"textarea":ja(t),Tf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Qg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=xr(Ea.current),xr($n.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Vn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vn]=e,e.stateNode=i}return Ft(e),null;case 13:if(it(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&dn!==null&&e.mode&1&&!(e.flags&128))gg(),ys(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Vn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Nn!==null&&(Wc(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?St===0&&(St=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ms(),Fc(t,e),t===null&&xa(e.stateNode.containerInfo),Ft(e),null;case 10:return Rd(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Qo(),Ft(e),null;case 19:if(it(lt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ws(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=sl(t),a!==null){for(e.flags|=128,Ws(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>ws&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return Ft(e),null}else 2*pt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=lt.current,et(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Sx(t,e){switch(Td(e),e.tag){case 1:return tn(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),it(en),it(Ht),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(it(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(lt),null;case 4:return Ms(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var io=!1,zt=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function kc(t,e,n){try{n()}catch(i){dt(t,e,i)}}var ph=!1;function Ex(t,e){if(yc=Yo,t=ig(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(l=a),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},Yo=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(E){dt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=ph,ph=!1,_}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kc(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[Sa],delete e[wc],delete e[sx],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(i!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}function Bc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var Lt=null,Ln=!1;function vi(t,e,n){for(n=n.child;n!==null;)t0(t,e,n),n=n.sibling}function t0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:zt||as(n,e);case 6:var i=Lt,r=Ln;Lt=null,vi(t,e,n),Lt=i,Ln=r,Lt!==null&&(Ln?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Ln?(t=Lt,n=n.stateNode,t.nodeType===8?ou(t.parentNode,n):t.nodeType===1&&ou(t,n),ga(t)):ou(Lt,n.stateNode));break;case 4:i=Lt,r=Ln,Lt=n.stateNode.containerInfo,Ln=!0,vi(t,e,n),Lt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&kc(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!zt&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){dt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,vi(t,e,n),zt=i):vi(t,e,n);break;default:vi(t,e,n)}}function gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mx),e.forEach(function(i){var r=Nx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Ln=!1;break e;case 3:Lt=o.stateNode.containerInfo,Ln=!0;break e;case 4:Lt=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(Lt===null)throw Error(te(160));t0(s,a,r),Lt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}function n0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),zn(t),i&4){try{la(3,t,t.return),Rl(3,t)}catch(x){dt(t,t.return,x)}try{la(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:An(e,t),zn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(An(e,t),zn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wm(r,s),cc(o,a);var u=cc(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Rm(r,d):f==="dangerouslySetInnerHTML"?bm(r,d):f==="children"?fa(r,d):cd(r,f,d,u)}switch(o){case"input":sc(r,s);break;case"textarea":Tm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?cs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(x){dt(t,t.return,x)}}break;case 6:if(An(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){dt(t,t.return,x)}}break;case 3:if(An(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:An(e,t),zn(t);break;case 13:An(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=pt())),i&4&&gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,An(e,t),zt=u):An(e,t),zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:la(4,h,h.return);break;case 1:as(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:as(h,h.return);break;case 22:if(h.memoizedState!==null){_h(d);continue}}m!==null?(m.return=h,pe=m):_h(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Cm("display",a))}catch(x){dt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){dt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:An(e,t),zn(t),i&4&&gh(t);break;case 21:break;default:An(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=mh(t);Bc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mh(t);zc(t,o,a);break;default:throw Error(te(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wx(t,e,n){pe=t,i0(t)}function i0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=io;var u=zt;if(io=a,(zt=l)&&!u)for(pe=r;pe!==null;)a=pe,l=a.child,a.tag===22&&a.memoizedState!==null?xh(r):l!==null?(l.return=a,pe=l):xh(r);for(;s!==null;)pe=s,i0(s),s=s.sibling;pe=r,io=o,zt=u}vh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):vh(t)}}function vh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&th(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}th(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}zt||e.flags&512&&Oc(e)}catch(h){dt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function _h(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function xh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{Oc(e)}catch(l){dt(e,s,l)}break;case 5:var a=e.return;try{Oc(e)}catch(l){dt(e,a,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var Tx=Math.ceil,ll=gi.ReactCurrentDispatcher,Hd=gi.ReactCurrentOwner,En=gi.ReactCurrentBatchConfig,$e=0,Ct=null,xt=null,Nt=0,cn=0,os=Ki(0),St=0,ba=null,Cr=0,Pl=0,Gd=0,ua=null,Zt=null,Vd=0,ws=1/0,ri=null,ul=!1,Hc=null,Oi=null,ro=!1,Pi=null,cl=0,ca=0,Gc=null,zo=-1,Bo=0;function Xt(){return $e&6?pt():zo!==-1?zo:zo=pt()}function zi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:lx.transition!==null?(Bo===0&&(Bo=Hm()),Bo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Ym(t.type)),t):1}function Fn(t,e,n,i){if(50<ca)throw ca=0,Gc=null,Error(te(185));Na(t,n,i),(!($e&2)||t!==Ct)&&(t===Ct&&(!($e&2)&&(Pl|=n),St===4&&bi(t,Nt)),nn(t,i),n===1&&$e===0&&!(e.mode&1)&&(ws=pt()+500,Al&&Zi()))}function nn(t,e){var n=t.callbackNode;l_(t,e);var i=$o(t,t===Ct?Nt:0);if(i===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?ox(yh.bind(null,t)):hg(yh.bind(null,t)),ix(function(){!($e&6)&&Zi()}),n=null;else{switch(Gm(i)){case 1:n=md;break;case 4:n=zm;break;case 16:n=Xo;break;case 536870912:n=Bm;break;default:n=Xo}n=d0(n,r0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r0(t,e){if(zo=-1,Bo=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=$o(t,t===Ct?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=$e;$e|=2;var s=a0();(Ct!==t||Nt!==e)&&(ri=null,ws=pt()+500,Sr(t,e));do try{Cx();break}catch(o){s0(t,o)}while(!0);Cd(),ll.current=s,$e=r,xt!==null?e=0:(Ct=null,Nt=0,e=St)}if(e!==0){if(e===2&&(r=mc(t),r!==0&&(i=r,e=Vc(t,r))),e===1)throw n=ba,Sr(t,0),bi(t,i),nn(t,pt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ax(r)&&(e=dl(t,i),e===2&&(s=mc(t),s!==0&&(i=s,e=Vc(t,s))),e===1))throw n=ba,Sr(t,0),bi(t,i),nn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:dr(t,Zt,ri);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=Vd+500-pt(),10<e)){if($o(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ec(dr.bind(null,t,Zt,ri),e);break}dr(t,Zt,ri);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-In(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Tx(i/1960))-i,10<i){t.timeoutHandle=Ec(dr.bind(null,t,Zt,ri),i);break}dr(t,Zt,ri);break;case 5:dr(t,Zt,ri);break;default:throw Error(te(329))}}}return nn(t,pt()),t.callbackNode===n?r0.bind(null,t):null}function Vc(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Wc(e)),t}function Wc(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~Gd,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function yh(t){if($e&6)throw Error(te(327));ms();var e=$o(t,0);if(!(e&1))return nn(t,pt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=mc(t);i!==0&&(e=i,n=Vc(t,i))}if(n===1)throw n=ba,Sr(t,0),bi(t,e),nn(t,pt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Zt,ri),nn(t,pt()),null}function Wd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(ws=pt()+500,Al&&Zi())}}function Rr(t){Pi!==null&&Pi.tag===0&&!($e&6)&&ms();var e=$e;$e|=1;var n=En.transition,i=Ke;try{if(En.transition=null,Ke=1,t)return t()}finally{Ke=i,En.transition=n,$e=e,!($e&6)&&Zi()}}function jd(){cn=os.current,it(os)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nx(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qo();break;case 3:Ms(),it(en),it(Ht),Ud();break;case 5:Dd(i);break;case 4:Ms();break;case 13:it(lt);break;case 19:it(lt);break;case 10:Rd(i.type._context);break;case 22:case 23:jd()}n=n.return}if(Ct=t,xt=t=Bi(t.current,null),Nt=cn=e,St=0,ba=null,Gd=Pl=Cr=0,Zt=ua=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}_r=null}return t}function s0(t,e){do{var n=xt;try{if(Cd(),Fo.current=ol,al){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}al=!1}if(br=0,At=yt=ut=null,oa=!1,wa=0,Hd.current=null,n===null||n.return===null){St=1,ba=e,xt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Nt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=oh(a);if(m!==null){m.flags&=-257,lh(m,a,o,s,e),m.mode&1&&ah(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){ah(s,u,e),Xd();break e}l=Error(te(426))}}else if(at&&o.mode&1){var p=oh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),lh(p,a,o,s,e),Ad(Es(l,o));break e}}s=l=Es(l,o),St!==4&&(St=2),ua===null?ua=[s]:ua.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Gg(s,l,e);eh(s,c);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Vg(s,o,e);eh(s,E);break e}}s=s.return}while(s!==null)}l0(n)}catch(R){e=R,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function a0(){var t=ll.current;return ll.current=ol,t===null?ol:t}function Xd(){(St===0||St===3||St===2)&&(St=4),Ct===null||!(Cr&268435455)&&!(Pl&268435455)||bi(Ct,Nt)}function dl(t,e){var n=$e;$e|=2;var i=a0();(Ct!==t||Nt!==e)&&(ri=null,Sr(t,e));do try{bx();break}catch(r){s0(t,r)}while(!0);if(Cd(),$e=n,ll.current=i,xt!==null)throw Error(te(261));return Ct=null,Nt=0,St}function bx(){for(;xt!==null;)o0(xt)}function Cx(){for(;xt!==null&&!Jv();)o0(xt)}function o0(t){var e=c0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?l0(t):xt=e,Hd.current=null}function l0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sx(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=yx(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function dr(t,e,n){var i=Ke,r=En.transition;try{En.transition=null,Ke=1,Rx(t,e,n,i)}finally{En.transition=r,Ke=i}return null}function Rx(t,e,n,i){do ms();while(Pi!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(u_(t,s),t===Ct&&(xt=Ct=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,d0(Xo,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=Ke;Ke=1;var o=$e;$e|=4,Hd.current=null,Ex(t,n),n0(n,t),q_(Sc),Yo=!!yc,Sc=yc=null,t.current=n,wx(n),e_(),$e=o,Ke=a,En.transition=s}else t.current=n;if(ro&&(ro=!1,Pi=t,cl=r),s=t.pendingLanes,s===0&&(Oi=null),i_(n.stateNode),nn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ul)throw ul=!1,t=Hc,Hc=null,t;return cl&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===Gc?ca++:(ca=0,Gc=t):ca=0,Zi(),null}function ms(){if(Pi!==null){var t=Gm(cl),e=En.transition,n=Ke;try{if(En.transition=null,Ke=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,cl=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,pe=t.current;pe!==null;){var s=pe,a=s.child;if(pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:la(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,m=f.return;if(Jg(f),f===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,pe=a;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,pe=c;break e}pe=s.return}}var v=t.current;for(pe=v;pe!==null;){a=pe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,pe=g;else e:for(a=v;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rl(9,o)}}catch(R){dt(o,o.return,R)}if(o===a){pe=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,pe=E;break e}pe=o.return}}if($e=r,Zi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{Ke=n,En.transition=e}}return!1}function Sh(t,e,n){e=Es(n,e),e=Gg(t,e,1),t=ki(t,e,1),e=Xt(),t!==null&&(Na(t,1,e),nn(t,e))}function dt(t,e,n){if(t.tag===3)Sh(t,t,n);else for(;e!==null;){if(e.tag===3){Sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=Es(n,t),t=Vg(e,t,1),e=ki(e,t,1),t=Xt(),e!==null&&(Na(e,1,t),nn(e,t));break}}e=e.return}}function Px(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Nt&n)===n&&(St===4||St===3&&(Nt&130023424)===Nt&&500>pt()-Vd?Sr(t,0):Gd|=n),nn(t,e)}function u0(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Na(t,e,n),nn(t,n))}function Lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u0(t,n)}function Nx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),u0(t,n)}var c0;c0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,xx(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,at&&e.flags&1048576&&pg(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oo(t,e),t=e.pendingProps;var r=xs(e,Ht.current);ps(e,n),r=Fd(null,e,i,t,r,n);var s=kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Jo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Pc(e,i,t,n),e=Dc(null,e,i,!0,s,n)):(e.tag=0,at&&s&&wd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ux(i),t=Pn(i,t),r){case 0:e=Nc(null,e,i,t,n);break e;case 1:e=dh(null,e,i,t,n);break e;case 11:e=uh(null,e,i,t,n);break e;case 14:e=ch(null,e,i,Pn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Nc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),dh(t,e,i,r,n);case 3:e:{if($g(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yg(t,e),rl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(te(423)),e),e=fh(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(te(424)),e),e=fh(t,e,i,n,r);break e}else for(dn=Fi(e.stateNode.containerInfo.firstChild),fn=e,at=!0,Nn=null,n=_g(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=mi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Sg(e),t===null&&bc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Mc(i,r)?a=null:s!==null&&Mc(i,s)&&(e.flags|=32),Xg(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&bc(e),null;case 13:return Yg(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),uh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,et(nl,i._currentValue),i._currentValue=a,s!==null)if(kn(s.value,a)){if(s.children===r.children&&!en.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Cc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),ch(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Oo(t,e),e.tag=1,tn(i)?(t=!0,Jo(e)):t=!1,ps(e,n),Hg(e,i,r),Pc(e,i,r,n),Dc(null,e,i,!0,t,n);case 19:return qg(t,e,n);case 22:return jg(t,e,n)}throw Error(te(156,e.tag))};function d0(t,e){return Om(t,e)}function Dx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Dx(t,e,n,i)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ux(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===hd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ho(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")$d(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Zr:return Mr(n.children,r,s,e);case dd:a=8,r|=8;break;case ec:return t=Mn(12,n,e,r|2),t.elementType=ec,t.lanes=s,t;case tc:return t=Mn(13,n,e,r),t.elementType=tc,t.lanes=s,t;case nc:return t=Mn(19,n,e,r),t.elementType=nc,t.lanes=s,t;case Sm:return Ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:a=10;break e;case ym:a=9;break e;case fd:a=11;break e;case hd:a=14;break e;case wi:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Mn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Ll(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ix(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,a,o,l){return t=new Ix(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function Fx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return Xi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(tn(n))return fg(t,n,e)}return e}function h0(t,e,n,i,r,s,a,o,l){return t=Yd(n,i,!0,t,r,s,a,o,l),t.context=f0(null),n=t.current,i=Xt(),r=zi(n),s=di(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Na(t,r,i),nn(t,i),t}function Nl(t,e,n,i){var r=e.current,s=Xt(),a=zi(r);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(Fn(t,r,a,s),Io(t,r,a)),a}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Mh(t,e),(t=t.alternate)&&Mh(t,e)}function kx(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}Dl.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Nl(t,e,null,null)};Dl.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Nl(null,t,null,null)}),e[hi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&$m(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function Ox(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fl(a);s.call(u)}}var a=h0(e,i,t,0,null,!1,!1,"",Eh);return t._reactRootContainer=a,t[hi]=a.current,xa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=fl(l);o.call(u)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Eh);return t._reactRootContainer=l,t[hi]=l.current,xa(t.nodeType===8?t.parentNode:t),Rr(function(){Nl(e,l,n,i)}),l}function Il(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=fl(a);o.call(l)}}Nl(e,a,t,r)}else a=Ox(n,e,t,r,i);return fl(a)}Vm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(gd(e,n|1),nn(e,pt()),!($e&6)&&(ws=pt()+500,Zi()))}break;case 13:Rr(function(){var i=pi(t,1);if(i!==null){var r=Xt();Fn(i,t,1,r)}}),qd(t,1)}};vd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();Fn(e,t,134217728,n)}qd(t,134217728)}};Wm=function(t){if(t.tag===13){var e=zi(t),n=pi(t,e);if(n!==null){var i=Xt();Fn(n,t,e,i)}qd(t,e)}};jm=function(){return Ke};Xm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};fc=function(t,e,n){switch(e){case"input":if(sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tl(i);if(!r)throw Error(te(90));Em(i),sc(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};Nm=Wd;Dm=Rr;var zx={usingClientEntryPoint:!1,Events:[Ua,ts,Tl,Pm,Lm,Wd]},js={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bx={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Sl=so.inject(Bx),Xn=so}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(te(200));return Fx(t,e,null,n)};pn.createRoot=function(t,e){if(!Zd(t))throw Error(te(299));var n=!1,i="",r=p0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,xa(t.nodeType===8?t.parentNode:t),new Kd(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Rr(t)};pn.hydrate=function(t,e,n){if(!Ul(e))throw Error(te(200));return Il(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=p0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=h0(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};pn.render=function(t,e,n){if(!Ul(e))throw Error(te(200));return Il(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(te(40));return t._reactRootContainer?(Rr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};pn.unstable_batchedUpdates=Wd;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ul(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Il(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(t){console.error(t)}}m0(),mm.exports=pn;var Hx=mm.exports,wh=Hx;Qu.createRoot=wh.createRoot,Qu.hydrateRoot=wh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ca.apply(this,arguments)}var Li;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Li||(Li={}));const Th="popstate";function Gx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return jc("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:hl(r)}return Wx(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function g0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vx(){return Math.random().toString(36).substr(2,8)}function Ah(t,e){return{usr:t.state,key:t.key,idx:e}}function jc(t,e,n,i){return n===void 0&&(n=null),Ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ns(e):e,{state:n,key:e&&e.key||i||Vx()})}function hl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Wx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Li.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Ca({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){o=Li.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:o,location:x.location,delta:c})}function h(p,c){o=Li.Push;let v=jc(x.location,p,c);u=f()+1;let g=Ah(v,u),E=x.createHref(v);try{a.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(E)}s&&l&&l({action:o,location:x.location,delta:1})}function m(p,c){o=Li.Replace;let v=jc(x.location,p,c);u=f();let g=Ah(v,u),E=x.createHref(v);a.replaceState(g,"",E),s&&l&&l({action:o,location:x.location,delta:0})}function _(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:hl(p);return v=v.replace(/ $/,"%20"),mt(c,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,c)}let x={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Th,d),l=p,()=>{r.removeEventListener(Th,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let c=_(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return a.go(p)}};return x}var bh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(bh||(bh={}));function jx(t,e,n){return n===void 0&&(n="/"),Xx(t,e,n)}function Xx(t,e,n,i){let r=typeof e=="string"?Ns(e):e,s=Qd(r.pathname||"/",n);if(s==null)return null;let a=v0(t);$x(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=sy(s);o=ny(a[l],u)}return o}function v0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Hi([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v0(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ey(u,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of _0(s.path))r(s,a,l)}),e}function _0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=_0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function $x(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ty(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Yx=/^:[\w-]+$/,qx=3,Kx=2,Zx=1,Qx=10,Jx=-2,Ch=t=>t==="*";function ey(t,e){let n=t.split("/"),i=n.length;return n.some(Ch)&&(i+=Jx),e&&(i+=Kx),n.filter(r=>!Ch(r)).reduce((r,s)=>r+(Yx.test(s)?qx:s===""?Zx:Qx),i)}function ty(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ny(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=iy({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:Hi([s,d.pathname]),pathnameBase:uy(Hi([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Hi([s,d.pathnameBase]))}return a}function iy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ry(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let x=o[d]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[d];return m&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function ry(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),g0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function sy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return g0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ay(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ns(t):t;return{pathname:n?n.startsWith("/")?n:oy(n,e):e,search:cy(i),hash:dy(r)}}function oy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function vu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ly(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jd(t,e){let n=ly(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ef(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ns(t):(r=Ca({},t),mt(!r.pathname||!r.pathname.includes("?"),vu("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),vu("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),vu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}o=d>=0?e[d]:"/"}let l=ay(r,o),u=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Hi=t=>t.join("/").replace(/\/\/+/g,"/"),uy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const x0=["post","put","patch","delete"];new Set(x0);const hy=["get",...x0];new Set(hy);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ra.apply(this,arguments)}const tf=ee.createContext(null),py=ee.createContext(null),Qi=ee.createContext(null),Fl=ee.createContext(null),Ji=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),y0=ee.createContext(null);function my(t,e){let{relative:n}=e===void 0?{}:e;Ds()||mt(!1);let{basename:i,navigator:r}=ee.useContext(Qi),{hash:s,pathname:a,search:o}=E0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Hi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ds(){return ee.useContext(Fl)!=null}function Us(){return Ds()||mt(!1),ee.useContext(Fl).location}function S0(t){ee.useContext(Qi).static||ee.useLayoutEffect(t)}function M0(){let{isDataRoute:t}=ee.useContext(Ji);return t?Cy():gy()}function gy(){Ds()||mt(!1);let t=ee.useContext(tf),{basename:e,future:n,navigator:i}=ee.useContext(Qi),{matches:r}=ee.useContext(Ji),{pathname:s}=Us(),a=JSON.stringify(Jd(r,n.v7_relativeSplatPath)),o=ee.useRef(!1);return S0(()=>{o.current=!0}),ee.useCallback(function(u,f){if(f===void 0&&(f={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let d=ef(u,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Hi([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,a,s,t])}function E0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ee.useContext(Qi),{matches:r}=ee.useContext(Ji),{pathname:s}=Us(),a=JSON.stringify(Jd(r,i.v7_relativeSplatPath));return ee.useMemo(()=>ef(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function vy(t,e){return _y(t,e)}function _y(t,e,n,i){Ds()||mt(!1);let{navigator:r,static:s}=ee.useContext(Qi),{matches:a}=ee.useContext(Ji),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let f=Us(),d;if(e){var h;let c=typeof e=="string"?Ns(e):e;u==="/"||(h=c.pathname)!=null&&h.startsWith(u)||mt(!1),d=c}else d=f;let m=d.pathname||"/",_=m;if(u!=="/"){let c=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(c.length).join("/")}let x=jx(t,{pathname:_}),p=Ey(x&&x.map(c=>Object.assign({},c,{params:Object.assign({},l,c.params),pathname:Hi([u,r.encodeLocation?r.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?u:Hi([u,r.encodeLocation?r.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),a,n,i);return e&&p?ee.createElement(Fl.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Li.Pop}},p):p}function xy(){let t=by(),e=fy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),n?ee.createElement("pre",{style:r},n):null,null)}const yy=ee.createElement(xy,null);class Sy extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ee.createElement(Ji.Provider,{value:this.props.routeContext},ee.createElement(y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function My(t){let{routeContext:e,match:n,children:i}=t,r=ee.useContext(tf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ee.createElement(Ji.Provider,{value:e},i)}function Ey(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);f>=0||mt(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:m}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,h)=>{let m,_=!1,x=null,p=null;n&&(m=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||yy,l&&(u<0&&h===0?(Ry("route-fallback"),_=!0,p=null):u===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(a.slice(0,h+1)),v=()=>{let g;return m?g=x:_?g=p:d.route.Component?g=ee.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,ee.createElement(My,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?ee.createElement(Sy,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:v(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):v()},null)}var w0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w0||{}),T0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(T0||{});function wy(t){let e=ee.useContext(tf);return e||mt(!1),e}function Ty(t){let e=ee.useContext(py);return e||mt(!1),e}function Ay(t){let e=ee.useContext(Ji);return e||mt(!1),e}function A0(t){let e=Ay(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function by(){var t;let e=ee.useContext(y0),n=Ty(),i=A0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Cy(){let{router:t}=wy(w0.UseNavigateStable),e=A0(T0.UseNavigateStable),n=ee.useRef(!1);return S0(()=>{n.current=!0}),ee.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ra({fromRouteId:e},s)))},[t,e])}const Rh={};function Ry(t,e,n){Rh[t]||(Rh[t]=!0)}function Py(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ly(t){let{to:e,replace:n,state:i,relative:r}=t;Ds()||mt(!1);let{future:s,static:a}=ee.useContext(Qi),{matches:o}=ee.useContext(Ji),{pathname:l}=Us(),u=M0(),f=ef(e,Jd(o,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return ee.useEffect(()=>u(JSON.parse(d),{replace:n,state:i,relative:r}),[u,d,r,n,i]),null}function fr(t){mt(!1)}function Ny(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Li.Pop,navigator:s,static:a=!1,future:o}=t;Ds()&&mt(!1);let l=e.replace(/^\/*/,"/"),u=ee.useMemo(()=>({basename:l,navigator:s,static:a,future:Ra({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Ns(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:_="default"}=i,x=ee.useMemo(()=>{let p=Qd(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:_},navigationType:r}},[l,f,d,h,m,_,r]);return x==null?null:ee.createElement(Qi.Provider,{value:u},ee.createElement(Fl.Provider,{children:n,value:x}))}function Dy(t){let{children:e,location:n}=t;return vy(Xc(e),n)}new Promise(()=>{});function Xc(t,e){e===void 0&&(e=[]);let n=[];return ee.Children.forEach(t,(i,r)=>{if(!ee.isValidElement(i))return;let s=[...e,r];if(i.type===ee.Fragment){n.push.apply(n,Xc(i.props.children,s));return}i.type!==fr&&mt(!1),!i.props.index||!i.props.children||mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Xc(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $c(){return $c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$c.apply(this,arguments)}function Uy(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Iy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Fy(t,e){return t.button===0&&(!e||e==="_self")&&!Iy(t)}const ky=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Oy="6";try{window.__reactRouterVersion=Oy}catch{}const zy="startTransition",Ph=Pv[zy];function By(t){let{basename:e,children:n,future:i,window:r}=t,s=ee.useRef();s.current==null&&(s.current=Gx({window:r,v5Compat:!0}));let a=s.current,[o,l]=ee.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},f=ee.useCallback(d=>{u&&Ph?Ph(()=>l(d)):l(d)},[l,u]);return ee.useLayoutEffect(()=>a.listen(f),[a,f]),ee.useEffect(()=>Py(i),[i]),ee.createElement(Ny,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const Hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,un=ee.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:f,viewTransition:d}=e,h=Uy(e,ky),{basename:m}=ee.useContext(Qi),_,x=!1;if(typeof u=="string"&&Gy.test(u)&&(_=u,Hy))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=Qd(E.pathname,m);E.origin===g.origin&&R!=null?u=R+E.search+E.hash:x=!0}catch{}let p=my(u,{relative:r}),c=Vy(u,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:d});function v(g){i&&i(g),g.defaultPrevented||c(g)}return ee.createElement("a",$c({},h,{href:_||p,onClick:x||s?i:v,ref:n,target:l}))});var Lh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lh||(Lh={}));var Nh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Nh||(Nh={}));function Vy(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=M0(),u=Us(),f=E0(t,{relative:a});return ee.useCallback(d=>{if(Fy(d,n)){d.preventDefault();let h=i!==void 0?i:hl(u)===hl(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,f,i,r,n,t,s,a,o])}const Wy=()=>y.jsxs("div",{className:"flex items-center",children:[y.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-indigo-600 dark:text-indigo-400",children:[y.jsx("path",{d:"M28 12L24 8L20 12L24 16L28 12Z",fill:"currentColor"}),y.jsx("path",{d:"M24 16L20 20L16 16L20 12L24 16Z",fill:"currentColor",fillOpacity:"0.8"}),y.jsx("path",{d:"M16 24L12 20L16 16L20 20L16 24Z",fill:"currentColor",fillOpacity:"0.6"}),y.jsx("rect",{x:"8",y:"20",width:"24",height:"16",rx:"2",fill:"currentColor",fillOpacity:"0.9"}),y.jsx("rect",{x:"16",y:"36",width:"8",height:"2",fill:"currentColor",fillOpacity:"0.7"}),y.jsx("path",{d:"M32 8C32 10.2091 30.2091 12 28 12C27.2316 12 26.5153 11.7849 25.9046 11.4142C25.4159 13.3948 23.6371 14.8571 21.5 14.8571C19.0147 14.8571 17 12.8424 17 10.3571C17 7.87183 19.0147 5.85714 21.5 5.85714C22.4021 5.85714 23.2462 6.11445 23.9659 6.56617C24.7191 4.47974 26.6866 3 29 3C31.7614 3 34 5.23858 34 8C34 8.06764 33.9987 8.13493 33.9961 8.20185C33.9987 8.13424 34 8.06695 34 8Z",fill:"currentColor",fillOpacity:"0.4"})]}),y.jsxs("div",{className:"ml-3 navbar-font text-xl font-bold tracking-tight",children:[y.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-['Poppins'] uppercase tracking-wider",children:"SKY"}),y.jsx("span",{className:"text-neutral-900 dark:text-white font-['Poppins'] uppercase tracking-wider",children:"FORGE"})]})]}),jy=()=>{const[t,e]=ee.useState(!0),[n,i]=ee.useState(!1),[r,s]=ee.useState(!1),a=Us(),o=()=>{e(!t),t?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.body.classList.remove("dark"),document.body.classList.add("light"),localStorage.setItem("theme","light")):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.body.classList.remove("light"),document.body.classList.add("dark"),localStorage.setItem("theme","dark"))};ee.useEffect(()=>{localStorage.getItem("theme")==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.body.classList.remove("dark"),document.body.classList.add("light"),e(!1)):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.body.classList.remove("light"),document.body.classList.add("dark"),e(!0))},[]),ee.useEffect(()=>{const u=()=>{window.scrollY>10?s(!0):s(!1)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[]);const l=u=>a.pathname===u;return y.jsxs("nav",{className:`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl ${r?"py-3 px-16 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm rounded-full":"py-3 px-16 bg-transparent"}`,children:[y.jsxs("div",{className:"flex justify-between items-center w-full",children:[y.jsx("div",{className:"flex items-center",children:y.jsx(un,{to:"/",className:"flex items-center",children:y.jsx(Wy,{})})}),y.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[y.jsx(un,{to:"/home",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${l("/home")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Home"}),y.jsx(un,{to:"/about",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${l("/about")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"About"}),y.jsx(un,{to:"/projects",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${l("/projects")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Projects"}),y.jsx(un,{to:"/contact",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${l("/contact")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Contact"}),y.jsx(un,{to:"/feedback",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${l("/feedback")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Feedback"}),y.jsx("button",{onClick:o,className:"ml-6 p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors","aria-label":"Toggle theme",children:t?y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]}),y.jsx("div",{className:"md:hidden flex items-center",children:y.jsx("button",{onClick:()=>i(!n),className:"p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors","aria-label":"Toggle menu",children:n?y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),y.jsx("div",{className:`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${n?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:y.jsx("div",{className:"px-8 py-4 bg-white dark:bg-neutral-900 shadow-md rounded-xl mt-2",children:y.jsxs("div",{className:"flex flex-col space-y-3",children:[y.jsx(un,{to:"/home",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${l("/home")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>i(!1),children:"Home"}),y.jsx(un,{to:"/about",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${l("/about")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>i(!1),children:"About"}),y.jsx(un,{to:"/projects",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${l("/projects")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>i(!1),children:"Projects"}),y.jsx(un,{to:"/contact",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${l("/contact")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>i(!1),children:"Contact"}),y.jsx(un,{to:"/feedback",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${l("/feedback")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>i(!1),children:"Feedback"}),y.jsxs("button",{onClick:o,className:"flex items-center justify-between px-5 py-2.5 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300",children:[y.jsx("span",{children:t?"Light Mode":"Dark Mode"}),y.jsx("div",{className:"p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800",children:t?y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]})})})]})},ao=({children:t,className:e=""})=>y.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200",children:[y.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"}),y.jsx("div",{className:"absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"})]}),y.jsx("div",{className:"absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"}),y.jsx("div",{className:`relative z-10 pt-20 ${e}`,children:t})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="162",Xy=0,Dh=1,$y=2,b0=1,Yy=2,ii=3,$i=0,rn=1,ai=2,Gi=0,gs=1,Uh=2,Ih=3,Fh=4,qy=5,mr=100,Ky=101,Zy=102,kh=103,Oh=104,Qy=200,Jy=201,eS=202,tS=203,Yc=204,qc=205,nS=206,iS=207,rS=208,sS=209,aS=210,oS=211,lS=212,uS=213,cS=214,dS=0,fS=1,hS=2,pl=3,pS=4,mS=5,gS=6,vS=7,C0=0,_S=1,xS=2,Vi=0,yS=1,SS=2,MS=3,ES=4,wS=5,TS=6,AS=7,R0=300,Ts=301,As=302,Kc=303,Zc=304,kl=306,Qc=1e3,Dn=1001,Jc=1002,jt=1003,zh=1004,Xs=1005,Kt=1006,_u=1007,yr=1008,Wi=1009,bS=1010,CS=1011,rf=1012,P0=1013,Ni=1014,oi=1015,Pa=1016,L0=1017,N0=1018,Er=1020,RS=1021,Un=1023,PS=1024,LS=1025,wr=1026,bs=1027,NS=1028,D0=1029,DS=1030,U0=1031,I0=1033,xu=33776,yu=33777,Su=33778,Mu=33779,Bh=35840,Hh=35841,Gh=35842,Vh=35843,F0=36196,Wh=37492,jh=37496,Xh=37808,$h=37809,Yh=37810,qh=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,Eu=36492,ap=36494,op=36495,US=36283,lp=36284,up=36285,cp=36286,IS=3200,FS=3201,k0=0,kS=1,Ci="",Hn="srgb",er="srgb-linear",sf="display-p3",Ol="display-p3-linear",ml="linear",nt="srgb",gl="rec709",vl="p3",Ur=7680,dp=519,OS=512,zS=513,BS=514,O0=515,HS=516,GS=517,VS=518,WS=519,fp=35044,hp="300 es",ed=1035,ci=2e3,_l=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,td=180/Math.PI;function Fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function jS(t,e){return(t%e+e)%e}function Tu(t,e,n){return(1-n)*t+n*e}function pp(t){return(t&t-1)===0&&t!==0}function nd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,a,o,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],c=r[6],v=r[1],g=r[4],E=r[7],R=r[2],b=r[5],T=r[8];return s[0]=a*x+o*v+l*R,s[3]=a*p+o*g+l*b,s[6]=a*c+o*E+l*T,s[1]=u*x+f*v+d*R,s[4]=u*p+f*g+d*b,s[7]=u*c+f*E+d*T,s[2]=h*x+m*v+_*R,s[5]=h*p+m*g+_*b,s[8]=h*c+m*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=f*a-o*u,h=o*l-f*s,m=u*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new Fe;function z0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XS(){const t=xl("canvas");return t.style.display="block",t}const mp={};function $S(t){t in mp||(mp[t]=!0,console.warn(t))}const gp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[er]:{transfer:ml,primaries:gl,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:nt,primaries:gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:ml,primaries:vl,toReference:t=>t.applyMatrix3(vp),fromReference:t=>t.applyMatrix3(gp)},[sf]:{transfer:nt,primaries:vl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(vp),fromReference:t=>t.applyMatrix3(gp).convertLinearToSRGB()}},YS=new Set([er,Ol]),Ze={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!YS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=oo[e].toReference,r=oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oo[t].primaries},getTransfer:function(t){return t===Ci?ml:oo[t].transfer}};function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class B0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=xl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class H0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cu(r[a].image)):s.push(Cu(r[a]))}else s=Cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?B0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;class sn extends Is{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Dn,r=Dn,s=Kt,a=yr,o=Un,l=Wi,u=sn.DEFAULT_ANISOTROPY,f=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Fa(),this.name="",this.source=new H0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=R0;sn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,E=(m+1)/2,R=(c+1)/2,b=(f+h)/4,T=(d+x)/4,D=(_+p)/4;return g>E&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=T/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZS extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new H0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends ZS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G0 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==_){let p=1-o;const c=l*h+u*m+f*_+d*x,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),b=Math.atan2(R,c*v);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R}const E=o*v;if(l=l*p+h*E,u=u*p+m*E,f=f*p+_*E,d=d*p+x*E,p===1-o){const R=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=R,u*=R,f*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*m-u*h,e[n+1]=l*_+f*h+u*d-o*m,e[n+2]=u*_+f*m+o*h-l*d,e[n+3]=f*_-o*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"YZX":this._x=h*f*d+u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d-h*m*_;break;case"XZY":this._x=h*f*d-u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*f,this.y=i+l*f+o*u-s*d,this.z=r+l*d+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new O,_p=new ka;class Oa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),uo.subVectors(this.max,Ys),Fr.subVectors(e.a,Ys),kr.subVectors(e.b,Ys),Or.subVectors(e.c,Ys),_i.subVectors(kr,Fr),xi.subVectors(Or,kr),rr.subVectors(Fr,Or);let n=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-rr.z,rr.y,_i.z,0,-_i.x,xi.z,0,-xi.x,rr.z,0,-rr.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-rr.y,rr.x,0];return!Pu(n,Fr,kr,Or,uo)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,Fr,kr,Or,uo))?!1:(co.crossVectors(_i,xi),n=[co.x,co.y,co.z],Pu(n,Fr,kr,Or,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],bn=new O,lo=new Oa,Fr=new O,kr=new O,Or=new O,_i=new O,xi=new O,rr=new O,Ys=new O,uo=new O,co=new O,sr=new O;function Pu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const JS=new Oa,qs=new O,Lu=new O;class af{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Lu)),this.expandByPoint(qs.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new O,Nu=new O,fo=new O,yi=new O,Du=new O,ho=new O,Uu=new O;class eM{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fo),o=yi.dot(this.direction),l=-yi.dot(fo),u=yi.lengthSq(),f=Math.abs(1-a*a);let d,h,m,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+u}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nu).addScaledVector(fo,h),m}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Du.subVectors(n,e),ho.subVectors(i,e),Uu.crossVectors(Du,ho);let a=this.direction.dot(Uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(ho.crossVectors(yi,ho));if(l<0)return null;const u=o*this.direction.dot(Du.cross(yi));if(u<0||l+u>a)return null;const f=-o*yi.dot(Uu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,a,o,l,u,f,d,h,m,_,x,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,d,h,m,_,x,p)}set(e,n,i,r,s,a,o,l,u,f,d,h,m,_,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=_,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-o*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=u*f,x=u*d;n[0]=h+x*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=u*f,x=u*d;n[0]=h-x*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=x-h*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,_=o*l,x=o*u;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,m=a*u,_=o*l,x=o*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=a*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Si.crossVectors(i,on),Si.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Si.crossVectors(i,on)),Si.normalize(),po.crossVectors(on,Si),r[0]=Si.x,r[4]=po.x,r[8]=on.x,r[1]=Si.y,r[5]=po.y,r[9]=on.y,r[2]=Si.z,r[6]=po.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],c=i[14],v=i[3],g=i[7],E=i[11],R=i[15],b=r[0],T=r[4],D=r[8],Y=r[12],S=r[1],C=r[5],ie=r[9],J=r[13],N=r[2],X=r[6],j=r[10],q=r[14],P=r[3],F=r[7],V=r[11],K=r[15];return s[0]=a*b+o*S+l*N+u*P,s[4]=a*T+o*C+l*X+u*F,s[8]=a*D+o*ie+l*j+u*V,s[12]=a*Y+o*J+l*q+u*K,s[1]=f*b+d*S+h*N+m*P,s[5]=f*T+d*C+h*X+m*F,s[9]=f*D+d*ie+h*j+m*V,s[13]=f*Y+d*J+h*q+m*K,s[2]=_*b+x*S+p*N+c*P,s[6]=_*T+x*C+p*X+c*F,s[10]=_*D+x*ie+p*j+c*V,s[14]=_*Y+x*J+p*q+c*K,s[3]=v*b+g*S+E*N+R*P,s[7]=v*T+g*C+E*X+R*F,s[11]=v*D+g*ie+E*j+R*V,s[15]=v*Y+g*J+E*q+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],c=e[15];return _*(+s*l*d-r*u*d-s*o*h+i*u*h+r*o*m-i*l*m)+x*(+n*l*m-n*u*h+s*a*h-r*a*m+r*u*f-s*l*f)+p*(+n*u*d-n*o*m-s*a*d+i*a*m+s*o*f-i*u*f)+c*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],c=e[15],v=d*p*u-x*h*u+x*l*m-o*p*m-d*l*c+o*h*c,g=_*h*u-f*p*u-_*l*m+a*p*m+f*l*c-a*h*c,E=f*x*u-_*d*u+_*o*m-a*x*m-f*o*c+a*d*c,R=_*d*l-f*x*l-_*o*h+a*x*h+f*o*p-a*d*p,b=n*v+i*g+r*E+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*c-i*h*c)*T,e[2]=(o*p*s-x*l*s+x*r*u-i*p*u-o*r*c+i*l*c)*T,e[3]=(d*l*s-o*h*s-d*r*u+i*h*u+o*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*c+n*h*c)*T,e[6]=(_*l*s-a*p*s-_*r*u+n*p*u+a*r*c-n*l*c)*T,e[7]=(a*h*s-f*l*s+f*r*u-n*h*u-a*r*m+n*l*m)*T,e[8]=E*T,e[9]=(_*d*s-f*x*s-_*i*m+n*x*m+f*i*c-n*d*c)*T,e[10]=(a*x*s-_*o*s+_*i*u-n*x*u-a*i*c+n*o*c)*T,e[11]=(f*o*s-a*d*s-f*i*u+n*d*u+a*i*m-n*o*m)*T,e[12]=R*T,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*T,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*T,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,d=o+o,h=s*u,m=s*f,_=s*d,x=a*f,p=a*d,c=o*d,v=l*u,g=l*f,E=l*d,R=i.x,b=i.y,T=i.z;return r[0]=(1-(x+c))*R,r[1]=(m+E)*R,r[2]=(_-g)*R,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(h+c))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(_+g)*T,r[9]=(p-v)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,f=1/a,d=1/o;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=f,Cn.elements[5]*=f,Cn.elements[6]*=f,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,n.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ci){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===ci)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===_l)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ci){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(a-s),h=(n+e)*u,m=(i+r)*f;let _,x;if(o===ci)_=(a+s)*d,x=-2*d;else if(o===_l)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new O,Cn=new gt,tM=new O(0,0,0),nM=new O(1,1,1),Si=new O,po=new O,on=new O,xp=new gt,yp=new ka;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class V0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const Sp=new O,Br=new ka,ei=new gt,mo=new O,Ks=new O,rM=new O,sM=new ka,Mp=new O(1,0,0),Ep=new O(0,1,0),wp=new O(0,0,1),aM={type:"added"},oM={type:"removed"},Iu={type:"childadded",child:null},Fu={type:"childremoved",child:null};class Bt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new O,n=new Kn,i=new ka,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,n){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ks,mo,this.up):ei.lookAt(mo,Ks,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ei),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aM),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oM),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new O(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new O,ti=new O,ku=new O,ni=new O,Hr=new O,Gr=new O,Tp=new O,Ou=new O,zu=new O,Bu=new O;class Wn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ti.subVectors(i,n),ku.subVectors(e,n);const a=Rn.dot(Rn),o=Rn.dot(ti),l=Rn.dot(ku),u=ti.dot(ti),f=ti.dot(ku),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ti.subVectors(e,n),Rn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Gr.subVectors(s,i),Ou.subVectors(e,i);const l=Hr.dot(Ou),u=Gr.dot(Ou);if(l<=0&&u<=0)return n.copy(i);zu.subVectors(e,r);const f=Hr.dot(zu),d=Gr.dot(zu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Hr,a);Bu.subVectors(e,s);const m=Hr.dot(Bu),_=Gr.dot(Bu);if(_>=0&&m<=_)return n.copy(s);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Gr,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return Tp.subVectors(s,r),o=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(Tp,o);const c=1/(p+x+h);return a=x*c,o=h*c,n.copy(i).addScaledVector(Hr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=jS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ze.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Qt(Ot.r*255,0,255))*65536+Math.round(Qt(Ot.g*255,0,255))*256+Math.round(Qt(Ot.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Hn){Ze.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(go);const i=Tu(Mi.h,go.h,n),r=Tu(Mi.s,go.s,n),s=Tu(Mi.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ye;Ye.NAMES=W0;let lM=0;class za extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=gs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=qc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class j0 extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,vo=new Xe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $S("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fp&&(e.usage=this.usage),e}}class X0 extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $0 extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uM=0;const _n=new gt,Gu=new Bt,Vr=new O,ln=new Oa,Zs=new Oa,Tt=new O;class tr extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?$0:X0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(ln.min,Zs.min),ln.expandByPoint(Tt),Tt.addVectors(ln.max,Zs.max),ln.expandByPoint(Tt)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Tt.fromBufferAttribute(o,u),l&&(Vr.fromBufferAttribute(e,u),Tt.add(Vr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new O,l[D]=new O;const u=new O,f=new O,d=new O,h=new Xe,m=new Xe,_=new Xe,x=new O,p=new O;function c(D,Y,S){u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,Y),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),m.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,S),f.sub(u),d.sub(u),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(C),o[D].add(x),o[Y].add(x),o[S].add(x),l[D].add(p),l[Y].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,Y=v.length;D<Y;++D){const S=v[D],C=S.start,ie=S.count;for(let J=C,N=C+ie;J<N;J+=3)c(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const g=new O,E=new O,R=new O,b=new O;function T(D){R.fromBufferAttribute(r,D),b.copy(R);const Y=o[D];g.copy(Y),g.sub(R.multiplyScalar(R.dot(Y))).normalize(),E.crossVectors(b,Y);const C=E.dot(l[D])<0?-1:1;a.setXYZW(D,g.x,g.y,g.z,C)}for(let D=0,Y=v.length;D<Y;++D){const S=v[D],C=S.start,ie=S.count;for(let J=C,N=C+ie;J<N;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,u=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),o.add(f),l.add(f),u.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,d=o.normalized,h=new u.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let c=0;c<f;c++)h[_++]=u[m++]}return new Yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ap=new gt,ar=new eM,_o=new af,bp=new O,Wr=new O,jr=new O,Xr=new O,Vu=new O,xo=new O,yo=new Xe,So=new Xe,Mo=new Xe,Cp=new O,Rp=new O,Pp=new O,Eo=new O,wo=new O;class jn extends Bt{constructor(e=new tr,n=new j0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],d=s[l];f!==0&&(Vu.fromBufferAttribute(d,e),a?xo.addScaledVector(Vu,f):xo.addScaledVector(Vu.sub(n),f))}n.add(xo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(_o.containsPoint(ar.origin)===!1&&(ar.intersectSphere(_o,bp)===null||ar.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Ap.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Ap),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,R=g;E<R;E+=3){const b=o.getX(E),T=o.getX(E+1),D=o.getX(E+2);r=To(this,c,e,i,u,f,d,b,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const v=o.getX(p),g=o.getX(p+1),E=o.getX(p+2);r=To(this,a,e,i,u,f,d,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,R=g;E<R;E+=3){const b=E,T=E+1,D=E+2;r=To(this,c,e,i,u,f,d,b,T,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const v=p,g=p+1,E=p+2;r=To(this,a,e,i,u,f,d,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cM(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===$i,o),l===null)return null;wo.copy(o),wo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(wo);return u<n.near||u>n.far?null:{distance:u,point:wo.clone(),object:t}}function To(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Wr),t.getVertexPosition(l,jr),t.getVertexPosition(u,Xr);const f=cM(t,e,n,i,Wr,jr,Xr,Eo);if(f){r&&(yo.fromBufferAttribute(r,o),So.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,u),f.uv=Wn.getInterpolation(Eo,Wr,jr,Xr,yo,So,Mo,new Xe)),s&&(yo.fromBufferAttribute(s,o),So.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,u),f.uv1=Wn.getInterpolation(Eo,Wr,jr,Xr,yo,So,Mo,new Xe)),a&&(Cp.fromBufferAttribute(a,o),Rp.fromBufferAttribute(a,l),Pp.fromBufferAttribute(a,u),f.normal=Wn.getInterpolation(Eo,Wr,jr,Xr,Cp,Rp,Pp,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new O,materialIndex:0};Wn.getNormal(Wr,jr,Xr,d.normal),f.face=d}return f}class Ba extends tr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(u,3)),this.setAttribute("normal",new qn(f,3)),this.setAttribute("uv",new qn(d,2));function _(x,p,c,v,g,E,R,b,T,D,Y){const S=E/T,C=R/D,ie=E/2,J=R/2,N=b/2,X=T+1,j=D+1;let q=0,P=0;const F=new O;for(let V=0;V<j;V++){const K=V*C-J;for(let ae=0;ae<X;ae++){const Ae=ae*S-ie;F[x]=Ae*v,F[p]=K*g,F[c]=N,u.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[c]=b>0?1:-1,f.push(F.x,F.y,F.z),d.push(ae/T),d.push(1-V/D),q+=1}}for(let V=0;V<D;V++)for(let K=0;K<T;K++){const ae=h+K+X*V,Ae=h+K+X*(V+1),H=h+(K+1)+X*(V+1),Z=h+(K+1)+X*V;l.push(ae,Ae,Z),l.push(Ae,H,Z),P+=6}o.addGroup(m,P,Y),m+=P,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function dM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y0(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const fM={clone:Cs,merge:Vt};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q0 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new O,Lp=new Xe,Np=new Xe;class Sn extends q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,Lp,Np),n.subVectors(Np,Lp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Yr=1;class mM extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn($r,Yr,e,n);r.layers=this.layers,this.add(r);const s=new Sn($r,Yr,e,n);s.layers=this.layers,this.add(s);const a=new Sn($r,Yr,e,n);a.layers=this.layers,this.add(a);const o=new Sn($r,Yr,e,n);o.layers=this.layers,this.add(o);const l=new Sn($r,Yr,e,n);l.layers=this.layers,this.add(l);const u=new Sn($r,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class K0 extends sn{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gM extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new K0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new jn(r,s),o=n.minFilter;return n.minFilter===yr&&(n.minFilter=Kt),new mM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Wu=new O,vM=new O,_M=new Fe;class hr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(vM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new af,Ao=new O;class of{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],c=r[12],v=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,p-m,E-c).normalize(),i[1].setComponents(l+s,h+u,p+m,E+c).normalize(),i[2].setComponents(l+a,h+f,p+_,E+v).normalize(),i[3].setComponents(l-a,h-f,p-_,E-v).normalize(),i[4].setComponents(l-o,h-d,p-x,E-g).normalize(),n===ci)i[5].setComponents(l+o,h+d,p+x,E+g).normalize();else if(n===_l)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const c=_[x];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:a,remove:o,update:l}}class zl extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,d=e/o,h=n/l,m=[],_=[],x=[],p=[];for(let c=0;c<f;c++){const v=c*h-a;for(let g=0;g<u;g++){const E=g*d-s;_.push(E,-v,0),x.push(0,0,1),p.push(g/o),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<o;v++){const g=v+u*c,E=v+u*(c+1),R=v+1+u*(c+1),b=v+1+u*c;m.push(g,E,b),m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,C1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:wM,alphatest_pars_fragment:TM,aomap_fragment:AM,aomap_pars_fragment:bM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:PM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:OM,color_fragment:zM,color_pars_fragment:BM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:jM,displacementmap_pars_vertex:XM,displacementmap_vertex:$M,emissivemap_fragment:YM,emissivemap_pars_fragment:qM,colorspace_fragment:KM,colorspace_pars_fragment:ZM,envmap_fragment:QM,envmap_common_pars_fragment:JM,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:sE,fog_pars_fragment:aE,gradientmap_pars_fragment:oE,lightmap_fragment:lE,lightmap_pars_fragment:uE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:dE,lights_pars_begin:fE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:_E,lights_physical_pars_fragment:xE,lights_fragment_begin:yE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:bE,map_pars_fragment:CE,map_particle_fragment:RE,map_particle_pars_fragment:PE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:NE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:IE,morphtarget_pars_vertex:FE,morphtarget_vertex:kE,normal_fragment_begin:OE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:$E,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:KE,project_vertex:ZE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:r1,shadowmask_pars_fragment:s1,skinbase_vertex:a1,skinning_pars_vertex:o1,skinning_vertex:l1,skinnormal_vertex:u1,specularmap_fragment:c1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:v1,uv_vertex:_1,worldpos_vertex:x1,background_vert:y1,background_frag:S1,backgroundCube_vert:M1,backgroundCube_frag:E1,cube_vert:w1,cube_frag:T1,depth_vert:A1,depth_frag:b1,distanceRGBA_vert:C1,distanceRGBA_frag:R1,equirect_vert:P1,equirect_frag:L1,linedashed_vert:N1,linedashed_frag:D1,meshbasic_vert:U1,meshbasic_frag:I1,meshlambert_vert:F1,meshlambert_frag:k1,meshmatcap_vert:O1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:H1,meshphong_vert:G1,meshphong_frag:V1,meshphysical_vert:W1,meshphysical_frag:j1,meshtoon_vert:X1,meshtoon_frag:$1,points_vert:Y1,points_frag:q1,shadow_vert:K1,shadow_frag:Z1,sprite_vert:Q1,sprite_frag:J1},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Gn={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gn.physical={uniforms:Vt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const bo={r:0,b:0,g:0},lr=new Kn,ew=new gt;function tw(t,e,n,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function _(p,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===kl)?(f===void 0&&(f=new jn(new Ba(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Cs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(c.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(lr)),f.material.toneMapped=Ze.getTransfer(g.colorSpace)!==nt,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new jn(new zl(2,2),new Yi({name:"BackgroundMaterial",uniforms:Cs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(bo,Y0(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,c,a)}return{getClearColor:function(){return o},setClearColor:function(p,c=1){o.set(p),l=c,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:_}}function nw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let u=l,f=!1;function d(N,X,j,q,P){let F=!1;if(a){const V=x(q,j,X);u!==V&&(u=V,m(u.object)),F=c(N,q,j,P),F&&v(N,q,j,P)}else{const V=X.wireframe===!0;(u.geometry!==q.id||u.program!==j.id||u.wireframe!==V)&&(u.geometry=q.id,u.program=j.id,u.wireframe=V,F=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,D(N,X,j,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,X,j){const q=j.wireframe===!0;let P=o[N.id];P===void 0&&(P={},o[N.id]=P);let F=P[X.id];F===void 0&&(F={},P[X.id]=F);let V=F[q];return V===void 0&&(V=p(h()),F[q]=V),V}function p(N){const X=[],j=[],q=[];for(let P=0;P<r;P++)X[P]=0,j[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:q,object:N,attributes:{},index:null}}function c(N,X,j,q){const P=u.attributes,F=X.attributes;let V=0;const K=j.getAttributes();for(const ae in K)if(K[ae].location>=0){const H=P[ae];let Z=F[ae];if(Z===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;V++}return u.attributesNum!==V||u.index!==q}function v(N,X,j,q){const P={},F=X.attributes;let V=0;const K=j.getAttributes();for(const ae in K)if(K[ae].location>=0){let H=F[ae];H===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),P[ae]=Z,V++}u.attributes=P,u.attributesNum=V,u.index=q}function g(){const N=u.newAttributes;for(let X=0,j=N.length;X<j;X++)N[X]=0}function E(N){R(N,0)}function R(N,X){const j=u.newAttributes,q=u.enabledAttributes,P=u.attributeDivisors;j[N]=1,q[N]===0&&(t.enableVertexAttribArray(N),q[N]=1),P[N]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),P[N]=X)}function b(){const N=u.newAttributes,X=u.enabledAttributes;for(let j=0,q=X.length;j<q;j++)X[j]!==N[j]&&(t.disableVertexAttribArray(j),X[j]=0)}function T(N,X,j,q,P,F,V){V===!0?t.vertexAttribIPointer(N,X,j,P,F):t.vertexAttribPointer(N,X,j,q,P,F)}function D(N,X,j,q){if(i.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const P=q.attributes,F=j.getAttributes(),V=X.defaultAttributeValues;for(const K in F){const ae=F[K];if(ae.location>=0){let Ae=P[K];if(Ae===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),Ae!==void 0){const H=Ae.normalized,Z=Ae.itemSize,ce=n.get(Ae);if(ce===void 0)continue;const Me=ce.buffer,xe=ce.type,me=ce.bytesPerElement,qe=i.isWebGL2===!0&&(xe===t.INT||xe===t.UNSIGNED_INT||Ae.gpuType===P0);if(Ae.isInterleavedBufferAttribute){const Ce=Ae.data,I=Ce.stride,Rt=Ae.offset;if(Ce.isInstancedInterleavedBuffer){for(let Se=0;Se<ae.locationSize;Se++)R(ae.location+Se,Ce.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Se=0;Se<ae.locationSize;Se++)E(ae.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Se=0;Se<ae.locationSize;Se++)T(ae.location+Se,Z/ae.locationSize,xe,H,I*me,(Rt+Z/ae.locationSize*Se)*me,qe)}else{if(Ae.isInstancedBufferAttribute){for(let Ce=0;Ce<ae.locationSize;Ce++)R(ae.location+Ce,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ce=0;Ce<ae.locationSize;Ce++)E(ae.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ce=0;Ce<ae.locationSize;Ce++)T(ae.location+Ce,Z/ae.locationSize,xe,H,Z*me,Z/ae.locationSize*Ce*me,qe)}}else if(V!==void 0){const H=V[K];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(ae.location,H);break;case 3:t.vertexAttrib3fv(ae.location,H);break;case 4:t.vertexAttrib4fv(ae.location,H);break;default:t.vertexAttrib1fv(ae.location,H)}}}}b()}function Y(){ie();for(const N in o){const X=o[N];for(const j in X){const q=X[j];for(const P in q)_(q[P].object),delete q[P];delete X[j]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const X=o[N.id];for(const j in X){const q=X[j];for(const P in q)_(q[P].object),delete q[P];delete X[j]}delete o[N.id]}function C(N){for(const X in o){const j=o[X];if(j[N.id]===void 0)continue;const q=j[N.id];for(const P in q)_(q[P].object),delete q[P];delete j[N.id]}}function ie(){J(),f=!0,u!==l&&(u=l,m(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:J,dispose:Y,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:E,disableUnusedAttributes:b}}function iw(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function rw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,E=a||e.has("OES_texture_float"),R=g&&E,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:b}}function sw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):u();else{const v=s?0:i,g=v*4;let E=c.clippingState||null;l.value=E,E=f(_,h,g,m);for(let R=0;R!==g;++R)E[R]=n[R];c.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const c=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,E=m;g!==x;++g,E+=4)a.copy(d[g]).applyMatrix4(v,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function aw(t){let e=new WeakMap;function n(a,o){return o===Kc?a.mapping=Ts:o===Zc&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kc||o===Zc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new gM(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Q0 extends q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Dp=[.125,.215,.35,.446,.526,.582],gr=20,ju=new Q0,Up=new Ye;let Xu=null,$u=0,Yu=0;const pr=(1+Math.sqrt(5))/2,qr=1/pr,Ip=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,pr,qr),new O(0,pr,-qr),new O(qr,0,pr),new O(-qr,0,pr),new O(pr,qr,0),new O(-pr,qr,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,$u,Yu),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Pa,format:Un,colorSpace:er,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(s)),this._blurMaterial=lw(s,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,ju)}_sceneToCubeUV(e,n,i,r){const o=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Up),f.toneMapping=Vi,f.autoClear=!1;const m=new j0({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new jn(new Ba,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Up),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(o.up.set(0,l[c],0),o.lookAt(u[c],0,0)):v===1?(o.up.set(0,0,l[c]),o.lookAt(0,u[c],0)):(o.up.set(0,l[c],0),o.lookAt(0,0,u[c]));const g=this._cubeSize;Co(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ju)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ip[(r-1)%Ip.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new jn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const c=[];let v=0;for(let T=0;T<gr;++T){const D=T/x,Y=Math.exp(-D*D/2);c.push(Y),T===0?v+=Y:T<p&&(v+=2*Y)}for(let T=0;T<c.length;T++)c[T]=c[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const E=this._sizeLods[r],R=3*E*(r>g-ls?r-g+ls:0),b=4*(this._cubeSize-E);Co(n,R,b,3*E,2*E),l.setRenderTarget(n),l.render(d,ju)}}function ow(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Dp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ls?l=Dp[a-t+ls-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,c=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),E=new Float32Array(c*_*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,D=b>2?0:-1,Y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(Y,x*_*b),g.set(h,p*_*b);const S=[b,b,b,b,b,b];E.set(S,c*_*b)}const R=new tr;R.setAttribute("position",new Yn(v,x)),R.setAttribute("uv",new Yn(g,p)),R.setAttribute("faceIndex",new Yn(E,c)),e.push(R),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lw(t,e,n){const i=new Float32Array(gr),r=new O(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Op(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function zp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Kc||l===Zc,f=l===Ts||l===As;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Fp(t)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Fp(t));const h=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function cw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dw(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,E=v.length;g<E;g+=3){const R=v[g+0],b=v[g+1],T=v[g+2];h.push(R,b,b,T,T,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const R=g+0,b=g+1,T=g+2;h.push(R,b,b,T,T,R)}}else return;const p=new(z0(h)?$0:X0)(h,1);p.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function fw(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function d(m,_,x){if(x===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,_,o,m*l,x),n.update(_,s,x)}function h(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<x;c++)this.render(m[c]/l,_[c]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,x);let c=0;for(let v=0;v<x;v++)c+=_[v];n.update(c,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function hw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pw(t,e){return t[0]-e[0]}function mw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function gw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let J=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const c=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let T=0;c===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let D=f.attributes.position.count*T,Y=1;D>e.maxTextureSize&&(Y=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*Y*4*x),C=new G0(S,D,Y,x);C.type=oi,C.needsUpdate=!0;const ie=T*4;for(let N=0;N<x;N++){const X=E[N],j=R[N],q=b[N],P=D*Y*4*N;for(let F=0;F<X.count;F++){const V=F*ie;c===!0&&(a.fromBufferAttribute(X,F),S[P+V+0]=a.x,S[P+V+1]=a.y,S[P+V+2]=a.z,S[P+V+3]=0),v===!0&&(a.fromBufferAttribute(j,F),S[P+V+4]=a.x,S[P+V+5]=a.y,S[P+V+6]=a.z,S[P+V+7]=0),g===!0&&(a.fromBufferAttribute(q,F),S[P+V+8]=a.x,S[P+V+9]=a.y,S[P+V+10]=a.z,S[P+V+11]=q.itemSize===4?a.w:1)}}p={count:x,texture:C,size:new Xe(D,Y)},s.set(f,p),f.addEventListener("dispose",J)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let c=0;for(let g=0;g<h.length;g++)c+=h[g];const v=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];i[f.id]=x}for(let E=0;E<_;E++){const R=x[E];R[0]=E,R[1]=h[E]}x.sort(mw);for(let E=0;E<8;E++)E<_&&x[E][1]?(o[E][0]=x[E][0],o[E][1]=x[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(pw);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const R=o[E],b=R[0],T=R[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&f.getAttribute("morphTarget"+E)!==p[b]&&f.setAttribute("morphTarget"+E,p[b]),c&&f.getAttribute("morphNormal"+E)!==c[b]&&f.setAttribute("morphNormal"+E,c[b]),r[E]=T,v+=T):(p&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),c&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function vw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class J0 extends sn{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:wr,f!==wr&&f!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===wr&&(i=Ni),i===void 0&&f===bs&&(i=Er),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ev=new sn,tv=new J0(1,1);tv.compareFunction=O0;const nv=new G0,iv=new QS,rv=new K0,Bp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bp[r];if(s===void 0&&(s=new Float32Array(r),Bp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Wp.set(i),t.uniformMatrix2fv(this.addr,!1,Wp),Et(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),Et(n,i)}}function ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Gp.set(i),t.uniformMatrix4fv(this.addr,!1,Gp),Et(n,i)}}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?tv:ev;n.setTexture2D(e||s,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iv,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rv,r)}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nv,r)}function kw(t){switch(t){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return bw;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Lw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Fw}}function Ow(t,e){t.uniform1fv(this.addr,e)}function zw(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function Bw(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function Hw(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function Gw(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vw(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ww(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jw(t,e){t.uniform1iv(this.addr,e)}function Xw(t,e){t.uniform2iv(this.addr,e)}function $w(t,e){t.uniform3iv(this.addr,e)}function Yw(t,e){t.uniform4iv(this.addr,e)}function qw(t,e){t.uniform1uiv(this.addr,e)}function Kw(t,e){t.uniform2uiv(this.addr,e)}function Zw(t,e){t.uniform3uiv(this.addr,e)}function Qw(t,e){t.uniform4uiv(this.addr,e)}function Jw(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||ev,s[a])}function eT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||iv,s[a])}function tT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||rv,s[a])}function nT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||nv,s[a])}function iT(t){switch(t){case 5126:return Ow;case 35664:return zw;case 35665:return Bw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return Ww;case 5124:case 35670:return jw;case 35667:case 35671:return Xw;case 35668:case 35672:return $w;case 35669:case 35673:return Yw;case 5125:return qw;case 36294:return Kw;case 36295:return Zw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kw(n.type)}}class sT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iT(n.type)}}class aT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function jp(t,e){t.seq.push(e),t.map[e.id]=e}function oT(t,e,n){const i=t.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),a=qu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){jp(n,u===void 0?new rT(o,t,e):new sT(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new aT(o),jp(n,d)),n=d}}}class Go{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);oT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Xp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lT=37297;let uT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function dT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===vl&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===vl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case Ol:return[i,"LinearTransferOETF"];case Hn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function $p(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cT(t.getShaderSource(e),a)}else return r}function fT(t,e){const n=dT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hT(t,e){let n;switch(e){case yS:n="Linear";break;case SS:n="Reinhard";break;case MS:n="OptimizedCineon";break;case ES:n="ACESFilmic";break;case TS:n="AgX";break;case AS:n="Neutral";break;case wS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function mT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function gT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function us(t){return t!==""}function Yp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(_T,yT)}const xT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yT(t,e){let n=Ie[e];if(n===void 0){const i=xT.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(t){return t.replace(ST,MT)}function MT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ET(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case C0:e="ENVMAP_BLENDING_MULTIPLY";break;case _S:e="ENVMAP_BLENDING_MIX";break;case xS:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ET(n),u=wT(n),f=TT(n),d=AT(n),h=bT(n),m=n.isWebGL2?"":pT(n),_=mT(n),x=gT(s),p=r.createProgram();let c,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(us).join(`
`),c.length>0&&(c+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(us).join(`
`),v.length>0&&(v+=`
`)):(c=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),v=[m,Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Vi?hT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,fT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(us).join(`
`)),a=id(a),a=Yp(a,n),a=qp(a,n),o=id(o),o=Yp(o,n),o=qp(o,n),a=Kp(a),o=Kp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=g+c+a,R=g+v+o,b=Xp(r,r.VERTEX_SHADER,E),T=Xp(r,r.FRAGMENT_SHADER,R);r.attachShader(p,b),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(ie){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(b).trim(),X=r.getShaderInfoLog(T).trim();let j=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,T);else{const P=$p(r,b,"vertex"),F=$p(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ie.name+`
Material Type: `+ie.type+`

Program Info Log: `+J+`
`+P+`
`+F)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(N===""||X==="")&&(q=!1);q&&(ie.diagnostics={runnable:j,programLog:J,vertexShader:{log:N,prefix:c},fragmentShader:{log:X,prefix:v}})}r.deleteShader(b),r.deleteShader(T),Y=new Go(r,p),S=vT(r,p)}let Y;this.getUniforms=function(){return Y===void 0&&D(this),Y};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,lT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let RT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LT(e),n.set(e,i)),i}}class LT{constructor(e){this.id=RT++,this.code=e,this.usedTimes=0}}function NT(t,e,n,i,r,s,a){const o=new V0,l=new PT,u=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return u.add(S),S===0?"uv":`uv${S}`}function c(S,C,ie,J,N){const X=J.fog,j=N.geometry,q=S.isMeshStandardMaterial?J.environment:null,P=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),F=P&&P.mapping===kl?P.image.height:null,V=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const K=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ae=K!==void 0?K.length:0;let Ae=0;j.morphAttributes.position!==void 0&&(Ae=1),j.morphAttributes.normal!==void 0&&(Ae=2),j.morphAttributes.color!==void 0&&(Ae=3);let H,Z,ce,Me;if(V){const Qe=Gn[V];H=Qe.vertexShader,Z=Qe.fragmentShader}else H=S.vertexShader,Z=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),me=N.isInstancedMesh===!0,qe=N.isBatchedMesh===!0,Ce=!!S.map,I=!!S.matcap,Rt=!!P,Se=!!S.aoMap,ze=!!S.lightMap,we=!!S.bumpMap,We=!!S.normalMap,ke=!!S.displacementMap,Be=!!S.emissiveMap,ft=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,W=S.clearcoat>0,$=S.iridescence>0,ne=S.sheen>0,Q=S.transmission>0,Ne=M&&!!S.anisotropyMap,Te=W&&!!S.clearcoatMap,le=W&&!!S.clearcoatNormalMap,de=W&&!!S.clearcoatRoughnessMap,De=$&&!!S.iridescenceMap,re=$&&!!S.iridescenceThicknessMap,vt=ne&&!!S.sheenColorMap,He=ne&&!!S.sheenRoughnessMap,ye=!!S.specularMap,ge=!!S.specularColorMap,ve=!!S.specularIntensityMap,je=Q&&!!S.transmissionMap,Pe=Q&&!!S.thicknessMap,rt=!!S.gradientMap,L=!!S.alphaMap,ue=S.alphaTest>0,z=!!S.alphaHash,se=!!S.extensions;let fe=Vi;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Ve={isWebGL2:d,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:Z,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:qe,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:er,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:I,envMap:Rt,envMapMode:Rt&&P.mapping,envMapCubeUVHeight:F,aoMap:Se,lightMap:ze,bumpMap:we,normalMap:We,displacementMap:m&&ke,emissiveMap:Be,normalMapObjectSpace:We&&S.normalMapType===kS,normalMapTangentSpace:We&&S.normalMapType===k0,metalnessMap:ft,roughnessMap:A,anisotropy:M,anisotropyMap:Ne,clearcoat:W,clearcoatMap:Te,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:$,iridescenceMap:De,iridescenceThicknessMap:re,sheen:ne,sheenColorMap:vt,sheenRoughnessMap:He,specularMap:ye,specularColorMap:ge,specularIntensityMap:ve,transmission:Q,transmissionMap:je,thicknessMap:Pe,gradientMap:rt,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:L,alphaTest:ue,alphaHash:z,combine:S.combine,mapUv:Ce&&p(S.map.channel),aoMapUv:Se&&p(S.aoMap.channel),lightMapUv:ze&&p(S.lightMap.channel),bumpMapUv:we&&p(S.bumpMap.channel),normalMapUv:We&&p(S.normalMap.channel),displacementMapUv:ke&&p(S.displacementMap.channel),emissiveMapUv:Be&&p(S.emissiveMap.channel),metalnessMapUv:ft&&p(S.metalnessMap.channel),roughnessMapUv:A&&p(S.roughnessMap.channel),anisotropyMapUv:Ne&&p(S.anisotropyMap.channel),clearcoatMapUv:Te&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(S.sheenRoughnessMap.channel),specularMapUv:ye&&p(S.specularMap.channel),specularColorMapUv:ge&&p(S.specularColorMap.channel),specularIntensityMapUv:ve&&p(S.specularIntensityMap.channel),transmissionMapUv:je&&p(S.transmissionMap.channel),thicknessMapUv:Pe&&p(S.thicknessMap.channel),alphaMapUv:L&&p(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(We||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(Ce||L),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&ie.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=u.has(1),Ve.vertexUv2s=u.has(2),Ve.vertexUv3s=u.has(3),u.clear(),Ve}function v(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ie in S.defines)C.push(ie),C.push(S.defines[ie]);return S.isRawShaderMaterial===!1&&(g(C,S),E(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function E(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),S.push(o.mask)}function R(S){const C=x[S.type];let ie;if(C){const J=Gn[C];ie=fM.clone(J.uniforms)}else ie=S.uniforms;return ie}function b(S,C){let ie;for(let J=0,N=f.length;J<N;J++){const X=f[J];if(X.cacheKey===C){ie=X,++ie.usedTimes;break}}return ie===void 0&&(ie=new CT(t,C,S,s),f.push(ie)),ie}function T(S){if(--S.usedTimes===0){const C=f.indexOf(S);f[C]=f[f.length-1],f.pop(),S.destroy()}}function D(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:c,getProgramCacheKey:v,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:D,programs:f,dispose:Y}}function DT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function UT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,_,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=_,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function o(d,h,m,_,x,p){const c=a(d,h,m,_,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,_,x,p){const c=a(d,h,m,_,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||UT),i.length>1&&i.sort(h||Qp),r.length>1&&r.sort(h||Qp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function IT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jp,t.set(i,[a])):r>=s.length?(a=new Jp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function FT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ye};break;case"SpotLight":n={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function kT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OT=0;function zT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BT(t,e){const n=new FT,i=kT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,a=new gt,o=new gt;function l(f,d){let h=0,m=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let x=0,p=0,c=0,v=0,g=0,E=0,R=0,b=0,T=0,D=0,Y=0;f.sort(zT);const S=d===!0?Math.PI:1;for(let ie=0,J=f.length;ie<J;ie++){const N=f[ie],X=N.color,j=N.intensity,q=N.distance,P=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=X.r*j*S,m+=X.g*j*S,_+=X.b*j*S;else if(N.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],j);Y++}else if(N.isDirectionalLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const V=N.shadow,K=i.get(N);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=N.shadow.matrix,E++}r.directional[x]=F,x++}else if(N.isSpotLight){const F=n.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(X).multiplyScalar(j*S),F.distance=q,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,r.spot[c]=F;const V=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,V.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[c]=V.matrix,N.castShadow){const K=i.get(N);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=P,b++}c++}else if(N.isRectAreaLight){const F=n.get(N);F.color.copy(X).multiplyScalar(j),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=F,v++}else if(N.isPointLight){const F=n.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),F.distance=N.distance,F.decay=N.decay,N.castShadow){const V=N.shadow,K=i.get(N);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=P,r.pointShadowMatrix[p]=N.shadow.matrix,R++}r.point[p]=F,p++}else if(N.isHemisphereLight){const F=n.get(N);F.skyColor.copy(N.color).multiplyScalar(j*S),F.groundColor.copy(N.groundColor).multiplyScalar(j*S),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==c||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==E||C.numPointShadows!==R||C.numSpotShadows!==b||C.numSpotMaps!==T||C.numLightProbes!==Y)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=Y,C.directionalLength=x,C.pointLength=p,C.spotLength=c,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=E,C.numPointShadows=R,C.numSpotShadows=b,C.numSpotMaps=T,C.numLightProbes=Y,r.version=OT++)}function u(f,d){let h=0,m=0,_=0,x=0,p=0;const c=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const E=f[v];if(E.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),h++}else if(E.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),_++}else if(E.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(c),o.identity(),a.copy(E.matrixWorld),a.premultiply(c),o.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(c),m++}else if(E.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function em(t,e){const n=new BT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function HT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new em(t,e),n.set(s,[l])):a>=o.length?(l=new em(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class GT extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VT extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XT(t,e,n){let i=new of;const r=new Xe,s=new Xe,a=new bt,o=new GT({depthPacking:FS}),l=new VT,u={},f=n.maxTextureSize,d={[$i]:rn,[rn]:$i,[ai]:ai},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:WT,fragmentShader:jT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new tr;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let c=this.type;this.render=function(b,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const Y=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(Gi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=c!==ii&&this.type===ii,N=c===ii&&this.type!==ii;for(let X=0,j=b.length;X<j;X++){const q=b[X],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const F=P.getFrameExtents();if(r.multiply(F),s.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,P.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null||J===!0||N===!0){const K=this.type!==ii?{minFilter:jt,magFilter:jt}:{};P.map!==null&&P.map.dispose(),P.map=new Pr(r.x,r.y,K),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const V=P.getViewportCount();for(let K=0;K<V;K++){const ae=P.getViewport(K);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),ie.viewport(a),P.updateMatrices(q,K),i=P.getFrustum(),E(T,D,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===ii&&v(P,D),P.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(Y,S,C)};function v(b,T){const D=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,D,h,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,D,m,x,null)}function g(b,T,D,Y){let S=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ie=S.uuid,J=T.uuid;let N=u[ie];N===void 0&&(N={},u[ie]=N);let X=N[J];X===void 0&&(X=S.clone(),N[J]=X,T.addEventListener("dispose",R)),S=X}if(S.visible=T.visible,S.wireframe=T.wireframe,Y===ii?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ie=t.properties.get(S);ie.light=D}return S}function E(b,T,D,Y,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ii)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const J=e.update(b),N=b.material;if(Array.isArray(N)){const X=J.groups;for(let j=0,q=X.length;j<q;j++){const P=X[j],F=N[P.materialIndex];if(F&&F.visible){const V=g(b,F,Y,S);b.onBeforeShadow(t,b,T,D,J,V,P),t.renderBufferDirect(D,null,J,V,b,P),b.onAfterShadow(t,b,T,D,J,V,P)}}}else if(N.visible){const X=g(b,N,Y,S);b.onBeforeShadow(t,b,T,D,J,X,null),t.renderBufferDirect(D,null,J,X,b,null),b.onAfterShadow(t,b,T,D,J,X,null)}}const ie=b.children;for(let J=0,N=ie.length;J<N;J++)E(ie[J],T,D,Y,S)}function R(b){b.target.removeEventListener("dispose",R);for(const D in u){const Y=u[D],S=b.target.uuid;S in Y&&(Y[S].dispose(),delete Y[S])}}}function $T(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ue=new bt;let z=null;const se=new bt(0,0,0,0);return{setMask:function(fe){z!==fe&&!L&&(t.colorMask(fe,fe,fe,fe),z=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Ve,Qe,Pt,gn){gn===!0&&(fe*=Pt,Ve*=Pt,Qe*=Pt),ue.set(fe,Ve,Qe,Pt),se.equals(ue)===!1&&(t.clearColor(fe,Ve,Qe,Pt),se.copy(ue))},reset:function(){L=!1,z=null,se.set(-1,0,0,0)}}}function s(){let L=!1,ue=null,z=null,se=null;return{setTest:function(fe){fe?me(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!L&&(t.depthMask(fe),ue=fe)},setFunc:function(fe){if(z!==fe){switch(fe){case dS:t.depthFunc(t.NEVER);break;case fS:t.depthFunc(t.ALWAYS);break;case hS:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case pS:t.depthFunc(t.EQUAL);break;case mS:t.depthFunc(t.GEQUAL);break;case gS:t.depthFunc(t.GREATER);break;case vS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=fe}},setLocked:function(fe){L=fe},setClear:function(fe){se!==fe&&(t.clearDepth(fe),se=fe)},reset:function(){L=!1,ue=null,z=null,se=null}}}function a(){let L=!1,ue=null,z=null,se=null,fe=null,Ve=null,Qe=null,Pt=null,gn=null;return{setTest:function(Je){L||(Je?me(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!L&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,Gt,On){(z!==Je||se!==Gt||fe!==On)&&(t.stencilFunc(Je,Gt,On),z=Je,se=Gt,fe=On)},setOp:function(Je,Gt,On){(Ve!==Je||Qe!==Gt||Pt!==On)&&(t.stencilOp(Je,Gt,On),Ve=Je,Qe=Gt,Pt=On)},setLocked:function(Je){L=Je},setClear:function(Je){gn!==Je&&(t.clearStencil(Je),gn=Je)},reset:function(){L=!1,ue=null,z=null,se=null,fe=null,Ve=null,Qe=null,Pt=null,gn=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,c=!1,v=null,g=null,E=null,R=null,b=null,T=null,D=null,Y=new Ye(0,0,0),S=0,C=!1,ie=null,J=null,N=null,X=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=F>=2);let K=null,ae={};const Ae=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),Z=new bt().fromArray(Ae),ce=new bt().fromArray(H);function Me(L,ue,z,se){const fe=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(L,Ve),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<z;Qe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ue+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Ve}const xe={};xe[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),me(t.DEPTH_TEST),l.setFunc(pl),ke(!1),Be(Dh),me(t.CULL_FACE),we(Gi);function me(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function qe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ce(L,ue){return m[L]!==ue?(t.bindFramebuffer(L,ue),m[L]=ue,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function I(L,ue){let z=x,se=!1;if(L){z=_.get(ue),z===void 0&&(z=[],_.set(ue,z));const fe=L.textures;if(z.length!==fe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Qe=fe.length;Ve<Qe;Ve++)z[Ve]=t.COLOR_ATTACHMENT0+Ve;z.length=fe.length,se=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,se=!0);if(se)if(n.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Rt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Se={[mr]:t.FUNC_ADD,[Ky]:t.FUNC_SUBTRACT,[Zy]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[kh]=t.MIN,Se[Oh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[kh]=L.MIN_EXT,Se[Oh]=L.MAX_EXT)}const ze={[Qy]:t.ZERO,[Jy]:t.ONE,[eS]:t.SRC_COLOR,[Yc]:t.SRC_ALPHA,[aS]:t.SRC_ALPHA_SATURATE,[rS]:t.DST_COLOR,[nS]:t.DST_ALPHA,[tS]:t.ONE_MINUS_SRC_COLOR,[qc]:t.ONE_MINUS_SRC_ALPHA,[sS]:t.ONE_MINUS_DST_COLOR,[iS]:t.ONE_MINUS_DST_ALPHA,[oS]:t.CONSTANT_COLOR,[lS]:t.ONE_MINUS_CONSTANT_COLOR,[uS]:t.CONSTANT_ALPHA,[cS]:t.ONE_MINUS_CONSTANT_ALPHA};function we(L,ue,z,se,fe,Ve,Qe,Pt,gn,Je){if(L===Gi){c===!0&&(qe(t.BLEND),c=!1);return}if(c===!1&&(me(t.BLEND),c=!0),L!==qy){if(L!==v||Je!==C){if((g!==mr||b!==mr)&&(t.blendEquation(t.FUNC_ADD),g=mr,b=mr),Je)switch(L){case gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uh:t.blendFunc(t.ONE,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,R=null,T=null,D=null,Y.set(0,0,0),S=0,v=L,C=Je}return}fe=fe||ue,Ve=Ve||z,Qe=Qe||se,(ue!==g||fe!==b)&&(t.blendEquationSeparate(Se[ue],Se[fe]),g=ue,b=fe),(z!==E||se!==R||Ve!==T||Qe!==D)&&(t.blendFuncSeparate(ze[z],ze[se],ze[Ve],ze[Qe]),E=z,R=se,T=Ve,D=Qe),(Pt.equals(Y)===!1||gn!==S)&&(t.blendColor(Pt.r,Pt.g,Pt.b,gn),Y.copy(Pt),S=gn),v=L,C=!1}function We(L,ue){L.side===ai?qe(t.CULL_FACE):me(t.CULL_FACE);let z=L.side===rn;ue&&(z=!z),ke(z),L.blending===gs&&L.transparent===!1?we(Gi):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;u.setTest(se),se&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),A(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){ie!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),ie=L)}function Be(L){L!==Xy?(me(t.CULL_FACE),L!==J&&(L===Dh?t.cullFace(t.BACK):L===$y?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),J=L}function ft(L){L!==N&&(P&&t.lineWidth(L),N=L)}function A(L,ue,z){L?(me(t.POLYGON_OFFSET_FILL),(X!==ue||j!==z)&&(t.polygonOffset(ue,z),X=ue,j=z)):qe(t.POLYGON_OFFSET_FILL)}function M(L){L?me(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function W(L){L===void 0&&(L=t.TEXTURE0+q-1),K!==L&&(t.activeTexture(L),K=L)}function $(L,ue,z){z===void 0&&(K===null?z=t.TEXTURE0+q-1:z=K);let se=ae[z];se===void 0&&(se={type:void 0,texture:void 0},ae[z]=se),(se.type!==L||se.texture!==ue)&&(K!==z&&(t.activeTexture(z),K=z),t.bindTexture(L,ue||xe[L]),se.type=L,se.texture=ue)}function ne(){const L=ae[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){Z.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ve(L){ce.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function je(L,ue){let z=d.get(ue);z===void 0&&(z=new WeakMap,d.set(ue,z));let se=z.get(L);se===void 0&&(se=t.getUniformBlockIndex(ue,L.name),z.set(L,se))}function Pe(L,ue){const se=d.get(ue).get(L);f.get(ue)!==se&&(t.uniformBlockBinding(ue,se,L.__bindingPointIndex),f.set(ue,se))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,ae={},m={},_=new WeakMap,x=[],p=null,c=!1,v=null,g=null,E=null,R=null,b=null,T=null,D=null,Y=new Ye(0,0,0),S=0,C=!1,ie=null,J=null,N=null,X=null,j=null,Z.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:me,disable:qe,bindFramebuffer:Ce,drawBuffers:I,useProgram:Rt,setBlending:we,setMaterial:We,setFlipSided:ke,setCullFace:Be,setLineWidth:ft,setPolygonOffset:A,setScissorTest:M,activeTexture:W,bindTexture:$,unbindTexture:ne,compressedTexImage2D:Q,compressedTexImage3D:Ne,texImage2D:He,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:vt,texSubImage2D:Te,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:De,scissor:ge,viewport:ve,reset:rt}}function YT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Xe,d=new WeakMap;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return _?new OffscreenCanvas(A,M):xl("canvas")}function p(A,M,W,$){let ne=1;const Q=ft(A);if((Q.width>$||Q.height>$)&&(ne=$/Math.max(Q.width,Q.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Ne=M?nd:Math.floor,Te=Ne(ne*Q.width),le=Ne(ne*Q.height);h===void 0&&(h=x(Te,le));const de=W?x(Te,le):h;return de.width=Te,de.height=le,de.getContext("2d").drawImage(A,0,0,Te,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Te+"x"+le+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function c(A){const M=ft(A);return pp(M.width)&&pp(M.height)}function v(A){return o?!1:A.wrapS!==Dn||A.wrapT!==Dn||A.minFilter!==jt&&A.minFilter!==Kt}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==jt&&A.minFilter!==Kt}function E(A){t.generateMipmap(A)}function R(A,M,W,$,ne=!1){if(o===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=M;if(M===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),M===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),M===t.RGBA){const Ne=ne?ml:Ze.getTransfer($);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=Ne===nt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(A,M,W){return g(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==Kt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){return A===jt||A===zh||A===Xs?t.NEAREST:t.LINEAR}function D(A){const M=A.target;M.removeEventListener("dispose",D),S(M),M.isVideoTexture&&d.delete(M)}function Y(A){const M=A.target;M.removeEventListener("dispose",Y),ie(M)}function S(A){const M=i.get(A);if(M.__webglInit===void 0)return;const W=A.source,$=m.get(W);if($){const ne=$[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(A),Object.keys($).length===0&&m.delete(W)}i.remove(A)}function C(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const W=A.source,$=m.get(W);delete $[M.__cacheKey],a.memory.textures--}function ie(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ne=0;ne<M.__webglFramebuffer[$].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[$][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=A.textures;for(let $=0,ne=W.length;$<ne;$++){const Q=i.get(W[$]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(W[$])}i.remove(A)}let J=0;function N(){J=0}function X(){const A=J;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),J+=1,A}function j(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const W=i.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(W,A,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function P(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ce(W,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function F(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ce(W,A,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function V(A,M){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Me(W,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const K={[Qc]:t.REPEAT,[Dn]:t.CLAMP_TO_EDGE,[Jc]:t.MIRRORED_REPEAT},ae={[jt]:t.NEAREST,[zh]:t.NEAREST_MIPMAP_NEAREST,[Xs]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[_u]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},Ae={[OS]:t.NEVER,[WS]:t.ALWAYS,[zS]:t.LESS,[O0]:t.LEQUAL,[BS]:t.EQUAL,[VS]:t.GEQUAL,[HS]:t.GREATER,[GS]:t.NOTEQUAL};function H(A,M,W){if(M.type===oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kt||M.magFilter===_u||M.magFilter===Xs||M.magFilter===yr||M.minFilter===Kt||M.minFilter===_u||M.minFilter===Xs||M.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ae[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ae[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Dn||M.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==jt&&M.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Xs&&M.minFilter!==yr||M.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D));const $=M.source;let ne=m.get($);ne===void 0&&(ne={},m.set($,ne));const Q=j(M);if(Q!==A.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[Q].usedTimes++;const Ne=ne[A.__cacheKey];Ne!==void 0&&(ne[A.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(M)),A.__cacheKey=Q,A.__webglTexture=ne[Q].texture}return W}function ce(A,M,W){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const ne=Z(A,M),Q=M.source;n.bindTexture($,A.__webglTexture,t.TEXTURE0+W);const Ne=i.get(Q);if(Q.version!==Ne.__version||ne===!0){n.activeTexture(t.TEXTURE0+W);const Te=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===Ci?null:Ze.getPrimaries(M.colorSpace),de=M.colorSpace===Ci||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const De=v(M)&&c(M.image)===!1;let re=p(M.image,De,!1,r.maxTextureSize);re=Be(M,re);const vt=c(re)||o,He=s.convert(M.format,M.colorSpace);let ye=s.convert(M.type),ge=R(M.internalFormat,He,ye,M.colorSpace,M.isVideoTexture);H($,M,vt);let ve;const je=M.mipmaps,Pe=o&&M.isVideoTexture!==!0&&ge!==F0,rt=Ne.__version===void 0||ne===!0,L=Q.dataReady,ue=b(M,re,vt);if(M.isDepthTexture)ge=t.DEPTH_COMPONENT,o?M.type===oi?ge=t.DEPTH_COMPONENT32F:M.type===Ni?ge=t.DEPTH_COMPONENT24:M.type===Er?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:M.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wr&&ge===t.DEPTH_COMPONENT&&M.type!==rf&&M.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ni,ye=s.convert(M.type)),M.format===bs&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Er,ye=s.convert(M.type))),rt&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ge,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,He,ye,null));else if(M.isDataTexture)if(je.length>0&&vt){Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,ge,je[0].width,je[0].height);for(let z=0,se=je.length;z<se;z++)ve=je[z],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,He,ye,ve.data):n.texImage2D(t.TEXTURE_2D,z,ge,ve.width,ve.height,0,He,ye,ve.data);M.generateMipmaps=!1}else Pe?(rt&&n.texStorage2D(t.TEXTURE_2D,ue,ge,re.width,re.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,He,ye,re.data)):n.texImage2D(t.TEXTURE_2D,0,ge,re.width,re.height,0,He,ye,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ge,je[0].width,je[0].height,re.depth);for(let z=0,se=je.length;z<se;z++)ve=je[z],M.format!==Un?He!==null?Pe?L&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,re.depth,He,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ge,ve.width,ve.height,re.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ve.width,ve.height,re.depth,He,ye,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ge,ve.width,ve.height,re.depth,0,He,ye,ve.data)}else{Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,ue,ge,je[0].width,je[0].height);for(let z=0,se=je.length;z<se;z++)ve=je[z],M.format!==Un?He!==null?Pe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,He,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ve.width,ve.height,He,ye,ve.data):n.texImage2D(t.TEXTURE_2D,z,ge,ve.width,ve.height,0,He,ye,ve.data)}else if(M.isDataArrayTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ge,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,He,ye,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,re.width,re.height,re.depth,0,He,ye,re.data);else if(M.isData3DTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_3D,ue,ge,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,He,ye,re.data)):n.texImage3D(t.TEXTURE_3D,0,ge,re.width,re.height,re.depth,0,He,ye,re.data);else if(M.isFramebufferTexture){if(rt)if(Pe)n.texStorage2D(t.TEXTURE_2D,ue,ge,re.width,re.height);else{let z=re.width,se=re.height;for(let fe=0;fe<ue;fe++)n.texImage2D(t.TEXTURE_2D,fe,ge,z,se,0,He,ye,null),z>>=1,se>>=1}}else if(je.length>0&&vt){if(Pe&&rt){const z=ft(je[0]);n.texStorage2D(t.TEXTURE_2D,ue,ge,z.width,z.height)}for(let z=0,se=je.length;z<se;z++)ve=je[z],Pe?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,He,ye,ve):n.texImage2D(t.TEXTURE_2D,z,ge,He,ye,ve);M.generateMipmaps=!1}else if(Pe){if(rt){const z=ft(re);n.texStorage2D(t.TEXTURE_2D,ue,ge,z.width,z.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,ye,re)}else n.texImage2D(t.TEXTURE_2D,0,ge,He,ye,re);g(M,vt)&&E($),Ne.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Me(A,M,W){if(M.image.length!==6)return;const $=Z(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const Q=i.get(ne);if(ne.version!==Q.__version||$===!0){n.activeTexture(t.TEXTURE0+W);const Ne=Ze.getPrimaries(Ze.workingColorSpace),Te=M.colorSpace===Ci?null:Ze.getPrimaries(M.colorSpace),le=M.colorSpace===Ci||Ne===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,re=[];for(let z=0;z<6;z++)!de&&!De?re[z]=p(M.image[z],!1,!0,r.maxCubemapSize):re[z]=De?M.image[z].image:M.image[z],re[z]=Be(M,re[z]);const vt=re[0],He=c(vt)||o,ye=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),ve=R(M.internalFormat,ye,ge,M.colorSpace),je=o&&M.isVideoTexture!==!0,Pe=Q.__version===void 0||$===!0,rt=ne.dataReady;let L=b(M,vt,He);H(t.TEXTURE_CUBE_MAP,M,He);let ue;if(de){je&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ve,vt.width,vt.height);for(let z=0;z<6;z++){ue=re[z].mipmaps;for(let se=0;se<ue.length;se++){const fe=ue[se];M.format!==Un?ye!==null?je?rt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,0,0,fe.width,fe.height,ye,ge,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se,ve,fe.width,fe.height,0,ye,ge,fe.data)}}}else{if(ue=M.mipmaps,je&&Pe){ue.length>0&&L++;const z=ft(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ve,z.width,z.height)}for(let z=0;z<6;z++)if(De){je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,re[z].width,re[z].height,ye,ge,re[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ve,re[z].width,re[z].height,0,ye,ge,re[z].data);for(let se=0;se<ue.length;se++){const Ve=ue[se].image[z].image;je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,0,0,Ve.width,Ve.height,ye,ge,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,ve,Ve.width,Ve.height,0,ye,ge,Ve.data)}}else{je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ye,ge,re[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ve,ye,ge,re[z]);for(let se=0;se<ue.length;se++){const fe=ue[se];je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,0,0,ye,ge,fe.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,se+1,ve,ye,ge,fe.image[z])}}}g(M,He)&&E(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xe(A,M,W,$,ne,Q){const Ne=s.convert(W.format,W.colorSpace),Te=s.convert(W.type),le=R(W.internalFormat,Ne,Te,W.colorSpace);if(!i.get(M).__hasExternalTextures){const De=Math.max(1,M.width>>Q),re=Math.max(1,M.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,le,De,re,M.depth,0,Ne,Te,null):n.texImage2D(ne,Q,le,De,re,0,Ne,Te,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ne,i.get(W).__webglTexture,0,we(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ne,i.get(W).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(A,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let $=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||We(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===oi?$=t.DEPTH_COMPONENT32F:ne.type===Ni&&($=t.DEPTH_COMPONENT24));const Q=we(M);We(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,$,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,$,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const $=we(M);W&&We(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):We(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const $=M.textures;for(let ne=0;ne<$.length;ne++){const Q=$[ne],Ne=s.convert(Q.format,Q.colorSpace),Te=s.convert(Q.type),le=R(Q.internalFormat,Ne,Te,Q.colorSpace),de=we(M);W&&We(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,le,M.width,M.height):We(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,ne=we(M);if(M.depthTexture.format===wr)We(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(M.depthTexture.format===bs)We(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const M=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");qe(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=t.createRenderbuffer(),me(M.__webglDepthbuffer[$],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),me(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,M,W){const $=i.get(A);M!==void 0&&xe($.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ce(A)}function Rt(A){const M=A.texture,W=i.get(A),$=i.get(M);A.addEventListener("dispose",Y);const ne=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ne=ne.length>1,Te=c(A)||o;if(Ne||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,a.memory.textures++),Q){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let de=0;de<M.mipmaps.length;de++)W.__webglFramebuffer[le][de]=t.createFramebuffer()}else W.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)W.__webglFramebuffer[le]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ne)if(r.drawBuffers)for(let le=0,de=ne.length;le<de;le++){const De=i.get(ne[le]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&We(A)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const de=ne[le];W.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const De=s.convert(de.format,de.colorSpace),re=s.convert(de.type),vt=R(de.internalFormat,De,re,de.colorSpace,A.isXRRenderTarget===!0),He=we(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,vt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,W.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),me(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),H(t.TEXTURE_CUBE_MAP,M,Te);for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)xe(W.__webglFramebuffer[le][de],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else xe(W.__webglFramebuffer[le],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(M,Te)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let le=0,de=ne.length;le<de;le++){const De=ne[le],re=i.get(De);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),H(t.TEXTURE_2D,De,Te),xe(W.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g(De,Te)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,$.__webglTexture),H(le,M,Te),o&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)xe(W.__webglFramebuffer[de],A,M,t.COLOR_ATTACHMENT0,le,de);else xe(W.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,le,0);g(M,Te)&&E(le),n.unbindTexture()}A.depthBuffer&&Ce(A)}function Se(A){const M=c(A)||o,W=A.textures;for(let $=0,ne=W.length;$<ne;$++){const Q=W[$];if(g(Q,M)){const Ne=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Q).__webglTexture;n.bindTexture(Ne,Te),E(Ne),n.unbindTexture()}}}function ze(A){if(o&&A.samples>0&&We(A)===!1){const M=A.textures,W=A.width,$=A.height;let ne=t.COLOR_BUFFER_BIT;const Q=[],Ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(A),le=M.length>1;if(le)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let de=0;de<M.length;de++){Q.push(t.COLOR_ATTACHMENT0+de),A.depthBuffer&&Q.push(Ne);const De=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ne])),le){const re=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,W,$,0,0,W,$,ne,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]);const De=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function we(A){return Math.min(r.maxSamples,A.samples)}function We(A){const M=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(A){const M=a.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function Be(A,M){const W=A.colorSpace,$=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ed||W!==er&&W!==Ci&&(Ze.getTransfer(W)===nt?o===!1?e.has("EXT_sRGB")===!0&&$===Un?(A.format=ed,A.minFilter=Kt,A.generateMipmaps=!1):M=B0.sRGBToLinear(M):($!==Un||ne!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=P,this.setTexture3D=F,this.setTextureCube=V,this.rebindTextures=I,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=We}function qT(t,e,n){const i=n.isWebGL2;function r(s,a=Ci){let o;const l=Ze.getTransfer(a);if(s===Wi)return t.UNSIGNED_BYTE;if(s===L0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===N0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===bS)return t.BYTE;if(s===CS)return t.SHORT;if(s===rf)return t.UNSIGNED_SHORT;if(s===P0)return t.INT;if(s===Ni)return t.UNSIGNED_INT;if(s===oi)return t.FLOAT;if(s===Pa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===RS)return t.ALPHA;if(s===Un)return t.RGBA;if(s===PS)return t.LUMINANCE;if(s===LS)return t.LUMINANCE_ALPHA;if(s===wr)return t.DEPTH_COMPONENT;if(s===bs)return t.DEPTH_STENCIL;if(s===ed)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===NS)return t.RED;if(s===D0)return t.RED_INTEGER;if(s===DS)return t.RG;if(s===U0)return t.RG_INTEGER;if(s===I0)return t.RGBA_INTEGER;if(s===xu||s===yu||s===Su||s===Mu)if(l===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Hh||s===Gh||s===Vh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===F0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wh)return l===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===jh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===$h||s===Yh||s===qh||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jh)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eu||s===ap||s===op)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Eu)return l===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ap)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===op)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===US||s===lp||s===up||s===cp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Eu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===up)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class KT extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ro extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Yi({extensions:{fragDepth:!0},vertexShader:QT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jn(new zl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class tA extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,_=null;const x=new eA,p=n.getContextAttributes();let c=null,v=null;const g=[],E=[],R=new Xe;let b=null;const T=new Sn;T.layers.enable(1),T.viewport=new bt;const D=new Sn;D.layers.enable(2),D.viewport=new bt;const Y=[T,D],S=new KT;S.layers.enable(1),S.layers.enable(2);let C=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=g[H];return Z===void 0&&(Z=new Ku,g[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=g[H];return Z===void 0&&(Z=new Ku,g[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=g[H];return Z===void 0&&(Z=new Ku,g[H]=Z),Z.getHandSpace()};function J(H){const Z=E.indexOf(H.inputSource);if(Z===-1)return;const ce=g[Z];ce!==void 0&&(ce.update(H.inputSource,H.frame,u||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let H=0;H<g.length;H++){const Z=E[H];Z!==null&&(E[H]=null,g[H].disconnect(Z))}C=null,ie=null,x.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Pr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ce=null,Me=null;p.depth&&(Me=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=p.stencil?bs:wr,ce=p.stencil?Er:Ni);const xe={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Pr(h.textureWidth,h.textureHeight,{format:Un,type:Wi,depthTexture:new J0(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const me=e.properties.get(v);me.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(H){for(let Z=0;Z<H.removed.length;Z++){const ce=H.removed[Z],Me=E.indexOf(ce);Me>=0&&(E[Me]=null,g[Me].disconnect(ce))}for(let Z=0;Z<H.added.length;Z++){const ce=H.added[Z];let Me=E.indexOf(ce);if(Me===-1){for(let me=0;me<g.length;me++)if(me>=E.length){E.push(ce),Me=me;break}else if(E[me]===null){E[me]=ce,Me=me;break}if(Me===-1)break}const xe=g[Me];xe&&xe.connect(ce)}}const j=new O,q=new O;function P(H,Z,ce){j.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const Me=j.distanceTo(q),xe=Z.projectionMatrix.elements,me=ce.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),Ce=xe[14]/(xe[10]+1),I=(xe[9]+1)/xe[5],Rt=(xe[9]-1)/xe[5],Se=(xe[8]-1)/xe[0],ze=(me[8]+1)/me[0],we=qe*Se,We=qe*ze,ke=Me/(-Se+ze),Be=ke*-Se;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ(ke),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const ft=qe+ke,A=Ce+ke,M=we-Be,W=We+(Me-Be),$=I*Ce/A*ft,ne=Rt*Ce/A*ft;H.projectionMatrix.makePerspective(M,W,$,ne,ft,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),S.near=D.near=T.near=H.near,S.far=D.far=T.far=H.far,(C!==S.near||ie!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,ie=S.far,T.near=C,T.far=ie,D.near=C,D.far=ie,T.updateProjectionMatrix(),D.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,ce=S.cameras;F(S,Z);for(let Me=0;Me<ce.length;Me++)F(ce[Me],Z);ce.length===2?P(S,T,D):S.projectionMatrix.copy(T.projectionMatrix),V(H,S,Z)};function V(H,Z,ce){ce===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=td*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null};let K=null;function ae(H,Z){if(f=Z.getViewerPose(u||a),_=Z,f!==null){const ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Me=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,Me=!0);for(let me=0;me<ce.length;me++){const qe=ce[me];let Ce=null;if(m!==null)Ce=m.getViewport(qe);else{const Rt=d.getViewSubImage(h,qe);Ce=Rt.viewport,me===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,h.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(v))}let I=Y[me];I===void 0&&(I=new Sn,I.layers.enable(me),I.viewport=new bt,Y[me]=I),I.matrix.fromArray(qe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(qe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Me===!0&&S.cameras.push(I)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const me=d.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&x.init(e,me,r.renderState)}}for(let ce=0;ce<g.length;ce++){const Me=E[ce],xe=g[ce];Me!==null&&xe!==void 0&&xe.update(Me,Z,u||a)}x.render(e,S),K&&K(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ae=new Z0;Ae.setAnimationLoop(ae),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}const ur=new Kn,nA=new gt;function iA(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,Y0(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,v,g,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,E)):c.isMeshMatcapMaterial?(s(p,c),_(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(a(p,c),c.isLineDashedMaterial&&o(p,c)):c.isPointsMaterial?l(p,c,v,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===rn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===rn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const v=e.get(c),g=v.envMap,E=v.envMapRotation;if(g&&(p.envMap.value=g,ur.copy(E),ur.x*=-1,ur.y*=-1,ur.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(nA.makeRotationFromEuler(ur)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*R,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function a(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function o(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,v,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*v,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,v){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===rn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const v=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function u(v,g){let E=r[v.id];E===void 0&&(_(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function f(v){const g=d();v.__bindingPointIndex=g;const E=t.createBuffer(),R=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],E=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,T=E.length;b<T;b++){const D=Array.isArray(E[b])?E[b]:[E[b]];for(let Y=0,S=D.length;Y<S;Y++){const C=D[Y];if(m(C,b,Y,R)===!0){const ie=C.__offset,J=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let X=0;X<J.length;X++){const j=J[X],q=x(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,ie+N,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ie,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,E,R){const b=v.value,T=g+"_"+E;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const D=R[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return R[T]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(v){const g=v.uniforms;let E=0;const R=16;for(let T=0,D=g.length;T<D;T++){const Y=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,C=Y.length;S<C;S++){const ie=Y[S],J=Array.isArray(ie.value)?ie.value:[ie.value];for(let N=0,X=J.length;N<X;N++){const j=J[N],q=x(j),P=E%R;P!==0&&R-P<q.boundary&&(E+=R-P),ie.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=q.storage}}}const b=E%R;return b>0&&(E+=R-b),v.__size=E,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}class sv{constructor(e={}){const{canvas:n=XS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;const g=this;let E=!1,R=0,b=0,T=null,D=-1,Y=null;const S=new bt,C=new bt;let ie=null;const J=new Ye(0);let N=0,X=n.width,j=n.height,q=1,P=null,F=null;const V=new bt(0,0,X,j),K=new bt(0,0,X,j);let ae=!1;const Ae=new of;let H=!1,Z=!1,ce=null;const Me=new gt,xe=new Xe,me=new O,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return T===null?q:1}let I=i;function Rt(w,U){for(let B=0;B<w.length;B++){const G=w[B],k=n.getContext(G,U);if(k!==null)return k}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ue,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),I=Rt(U,w),I===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,ze,we,We,ke,Be,ft,A,M,W,$,ne,Q,Ne,Te,le,de,De,re,vt,He,ye,ge,ve;function je(){Se=new cw(I),ze=new rw(I,Se,e),Se.init(ze),ye=new qT(I,Se,ze),we=new $T(I,Se,ze),We=new hw(I),ke=new DT,Be=new YT(I,Se,we,ke,ze,ye,We),ft=new aw(g),A=new uw(g),M=new xM(I,ze),ge=new nw(I,Se,M,ze),W=new dw(I,M,We,ge),$=new vw(I,W,M,We),re=new gw(I,ze,Be),le=new sw(ke),ne=new NT(g,ft,A,Se,ze,ge,le),Q=new iA(g,ke),Ne=new IT,Te=new HT(Se,ze),De=new tw(g,ft,A,we,$,h,l),de=new XT(g,$,ze),ve=new rA(I,We,ze,we),vt=new iw(I,Se,We,ze),He=new fw(I,Se,We,ze),We.programs=ne.programs,g.capabilities=ze,g.extensions=Se,g.properties=ke,g.renderLists=Ne,g.shadowMap=de,g.state=we,g.info=We}je();const Pe=new tA(g,I);this.xr=Pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(X,j,!1))},this.getSize=function(w){return w.set(X,j)},this.setSize=function(w,U,B=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,j=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),B===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*q,j*q).floor()},this.setDrawingBufferSize=function(w,U,B){X=w,j=U,q=B,n.width=Math.floor(w*B),n.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,U,B,G){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,U,B,G),we.viewport(S.copy(V).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,U,B,G){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,U,B,G),we.scissor(C.copy(K).multiplyScalar(q).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){we.setScissorTest(ae=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,U=!0,B=!0){let G=0;if(w){let k=!1;if(T!==null){const he=T.texture.format;k=he===I0||he===U0||he===D0}if(k){const he=T.texture.type,_e=he===Wi||he===Ni||he===rf||he===Er||he===L0||he===N0,Ee=De.getClearColor(),be=De.getClearAlpha(),Oe=Ee.r,Re=Ee.g,Le=Ee.b;_e?(m[0]=Oe,m[1]=Re,m[2]=Le,m[3]=be,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Oe,_[1]=Re,_[2]=Le,_[3]=be,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),B&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),Ne.dispose(),Te.dispose(),ke.dispose(),ft.dispose(),A.dispose(),$.dispose(),ge.dispose(),ve.dispose(),ne.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",gn),Pe.removeEventListener("sessionend",Je),ce&&(ce.dispose(),ce=null),Gt.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=We.autoReset,U=de.enabled,B=de.autoUpdate,G=de.needsUpdate,k=de.type;je(),We.autoReset=w,de.enabled=U,de.autoUpdate=B,de.needsUpdate=G,de.type=k}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function z(w){const U=w.target;U.removeEventListener("dispose",z),se(U)}function se(w){fe(w),ke.remove(w)}function fe(w){const U=ke.get(w).programs;U!==void 0&&(U.forEach(function(B){ne.releaseProgram(B)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,G,k,he){U===null&&(U=qe);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Ee=uv(w,U,B,G,k);we.setMaterial(G,_e);let be=B.index,Oe=1;if(G.wireframe===!0){if(be=W.getWireframeAttribute(B),be===void 0)return;Oe=2}const Re=B.drawRange,Le=B.attributes.position;let ht=Re.start*Oe,an=(Re.start+Re.count)*Oe;he!==null&&(ht=Math.max(ht,he.start*Oe),an=Math.min(an,(he.start+he.count)*Oe)),be!==null?(ht=Math.max(ht,0),an=Math.min(an,be.count)):Le!=null&&(ht=Math.max(ht,0),an=Math.min(an,Le.count));const wt=an-ht;if(wt<0||wt===1/0)return;ge.setup(k,G,Ee,B,be);let Zn,ot=vt;if(be!==null&&(Zn=M.get(be),ot=He,ot.setIndex(Zn)),k.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*Ce()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(k.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),we.setLineWidth(Ue*Ce()),k.isLineSegments?ot.setMode(I.LINES):k.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else k.isPoints?ot.setMode(I.POINTS):k.isSprite&&ot.setMode(I.TRIANGLES);if(k.isBatchedMesh)ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ot.renderInstances(ht,wt,k.count);else if(B.isInstancedBufferGeometry){const Ue=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Hl=Math.min(B.instanceCount,Ue);ot.renderInstances(ht,wt,Hl)}else ot.render(ht,wt)};function Ve(w,U,B){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Ga(w,U,B),w.side=$i,w.needsUpdate=!0,Ga(w,U,B),w.side=ai):Ga(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),p=Te.get(B),p.init(),v.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights);const G=new Set;return w.traverse(function(k){const he=k.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ee=he[_e];Ve(Ee,B,k),G.add(Ee)}else Ve(he,B,k),G.add(he)}),v.pop(),p=null,G},this.compileAsync=function(w,U,B=null){const G=this.compile(w,U,B);return new Promise(k=>{function he(){if(G.forEach(function(_e){ke.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){k(w);return}setTimeout(he,10)}Se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function Pt(w){Qe&&Qe(w)}function gn(){Gt.stop()}function Je(){Gt.start()}const Gt=new Z0;Gt.setAnimationLoop(Pt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(w){Qe=w,Pe.setAnimationLoop(w),w===null?Gt.stop():Gt.start()},Pe.addEventListener("sessionstart",gn),Pe.addEventListener("sessionend",Je),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(U),U=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,T),p=Te.get(w,v.length),p.init(),v.push(p),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ae.setFromProjectionMatrix(Me),Z=this.localClippingEnabled,H=le.init(this.clippingPlanes,Z),x=Ne.get(w,c.length),x.init(),c.push(x),On(w,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,F),this.info.render.frame++,H===!0&&le.beginShadows();const B=p.state.shadowsArray;if(de.render(B,w,U),H===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&De.render(x,w),p.setupLights(g._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let k=0,he=G.length;k<he;k++){const _e=G[k];cf(x,w,_e,_e.viewport)}}else cf(x,w,U);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,U),ge.resetDefaultState(),D=-1,Y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function On(w,U,B,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ae.intersectsSprite(w)){G&&me.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const _e=$.update(w),Ee=w.material;Ee.visible&&x.push(w,_e,Ee,B,me.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ae.intersectsObject(w))){const _e=$.update(w),Ee=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),me.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),me.copy(_e.boundingSphere.center)),me.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Ee)){const be=_e.groups;for(let Oe=0,Re=be.length;Oe<Re;Oe++){const Le=be[Oe],ht=Ee[Le.materialIndex];ht&&ht.visible&&x.push(w,_e,ht,B,me.z,Le)}}else Ee.visible&&x.push(w,_e,Ee,B,me.z,null)}}const he=w.children;for(let _e=0,Ee=he.length;_e<Ee;_e++)On(he[_e],U,B,G)}function cf(w,U,B,G){const k=w.opaque,he=w.transmissive,_e=w.transparent;p.setupLightsView(B),H===!0&&le.setGlobalState(g.clippingPlanes,B),he.length>0&&lv(k,he,U,B),G&&we.viewport(S.copy(G)),k.length>0&&Ha(k,U,B),he.length>0&&Ha(he,U,B),_e.length>0&&Ha(_e,U,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function lv(w,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const he=ze.isWebGL2;ce===null&&(ce=new Pr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Pa:Wi,minFilter:yr,samples:he?4:0})),g.getDrawingBufferSize(xe),he?ce.setSize(xe.x,xe.y):ce.setSize(nd(xe.x),nd(xe.y));const _e=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(J),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Ee=g.toneMapping;g.toneMapping=Vi,Ha(w,B,G),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce);let be=!1;for(let Oe=0,Re=U.length;Oe<Re;Oe++){const Le=U[Oe],ht=Le.object,an=Le.geometry,wt=Le.material,Zn=Le.group;if(wt.side===ai&&ht.layers.test(G.layers)){const ot=wt.side;wt.side=rn,wt.needsUpdate=!0,df(ht,B,G,an,wt,Zn),wt.side=ot,wt.needsUpdate=!0,be=!0}}be===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce)),g.setRenderTarget(_e),g.setClearColor(J,N),g.toneMapping=Ee}function Ha(w,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let k=0,he=w.length;k<he;k++){const _e=w[k],Ee=_e.object,be=_e.geometry,Oe=G===null?_e.material:G,Re=_e.group;Ee.layers.test(B.layers)&&df(Ee,U,B,be,Oe,Re)}}function df(w,U,B,G,k,he){w.onBeforeRender(g,U,B,G,k,he),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(g,U,B,G,w,he),k.transparent===!0&&k.side===ai&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,g.renderBufferDirect(B,U,G,k,w,he),k.side=$i,k.needsUpdate=!0,g.renderBufferDirect(B,U,G,k,w,he),k.side=ai):g.renderBufferDirect(B,U,G,k,w,he),w.onAfterRender(g,U,B,G,k,he)}function Ga(w,U,B){U.isScene!==!0&&(U=qe);const G=ke.get(w),k=p.state.lights,he=p.state.shadowsArray,_e=k.state.version,Ee=ne.getParameters(w,k.state,he,U,B),be=ne.getProgramCacheKey(Ee);let Oe=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?A:ft).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",z),Oe=new Map,G.programs=Oe);let Re=Oe.get(be);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===_e)return hf(w,Ee),Re}else Ee.uniforms=ne.getUniforms(w),w.onBuild(B,Ee,g),w.onBeforeCompile(Ee,g),Re=ne.acquireProgram(Ee,be),Oe.set(be,Re),G.uniforms=Ee.uniforms;const Le=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=le.uniform),hf(w,Ee),G.needsLights=dv(w),G.lightsStateVersion=_e,G.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function ff(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Go.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function hf(w,U){const B=ke.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function uv(w,U,B,G,k){U.isScene!==!0&&(U=qe),Be.resetTextureUnits();const he=U.fog,_e=G.isMeshStandardMaterial?U.environment:null,Ee=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:er,be=(G.isMeshStandardMaterial?A:ft).get(G.envMap||_e),Oe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!B.morphAttributes.position,ht=!!B.morphAttributes.normal,an=!!B.morphAttributes.color;let wt=Vi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=g.toneMapping);const Zn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=Zn!==void 0?Zn.length:0,Ue=ke.get(G),Hl=p.state.lights;if(H===!0&&(Z===!0||w!==Y)){const vn=w===Y&&G.id===D;le.setState(G,w,vn)}let st=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Hl.state.version||Ue.outputColorSpace!==Ee||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==be||G.fog===!0&&Ue.fog!==he||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Oe||Ue.vertexTangents!==Re||Ue.morphTargets!==Le||Ue.morphNormals!==ht||Ue.morphColors!==an||Ue.toneMapping!==wt||ze.isWebGL2===!0&&Ue.morphTargetsCount!==ot)&&(st=!0):(st=!0,Ue.__version=G.version);let nr=Ue.currentProgram;st===!0&&(nr=Ga(G,U,k));let pf=!1,ks=!1,Gl=!1;const Ut=nr.getUniforms(),ir=Ue.uniforms;if(we.useProgram(nr.program)&&(pf=!0,ks=!0,Gl=!0),G.id!==D&&(D=G.id,ks=!0),pf||Y!==w){Ut.setValue(I,"projectionMatrix",w.projectionMatrix),Ut.setValue(I,"viewMatrix",w.matrixWorldInverse);const vn=Ut.map.cameraPosition;vn!==void 0&&vn.setValue(I,me.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,ks=!0,Gl=!0)}if(k.isSkinnedMesh){Ut.setOptional(I,k,"bindMatrix"),Ut.setOptional(I,k,"bindMatrixInverse");const vn=k.skeleton;vn&&(ze.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ut.setValue(I,"boneTexture",vn.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ut.setOptional(I,k,"batchingTexture"),Ut.setValue(I,"batchingTexture",k._matricesTexture,Be));const Vl=B.morphAttributes;if((Vl.position!==void 0||Vl.normal!==void 0||Vl.color!==void 0&&ze.isWebGL2===!0)&&re.update(k,B,nr),(ks||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Ut.setValue(I,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ir.envMap.value=be,ir.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ks&&(Ut.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&cv(ir,Gl),he&&G.fog===!0&&Q.refreshFogUniforms(ir,he),Q.refreshMaterialUniforms(ir,G,q,j,ce),Go.upload(I,ff(Ue),ir,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Go.upload(I,ff(Ue),ir,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ut.setValue(I,"center",k.center),Ut.setValue(I,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(I,"normalMatrix",k.normalMatrix),Ut.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const vn=G.uniformsGroups;for(let Wl=0,fv=vn.length;Wl<fv;Wl++)if(ze.isWebGL2){const mf=vn[Wl];ve.update(mf,nr),ve.bind(mf,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function cv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function dv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,U,B){ke.get(w.texture).__webglTexture=U,ke.get(w.depthTexture).__webglTexture=B;const G=ke.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const B=ke.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){T=w,R=U,b=B;let G=!0,k=null,he=!1,_e=!1;if(w){const be=ke.get(w);be.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):be.__webglFramebuffer===void 0?Be.setupRenderTarget(w):be.__hasExternalTextures&&Be.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Re=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?k=Re[U][B]:k=Re[U],he=!0):ze.isWebGL2&&w.samples>0&&Be.useMultisampledRTT(w)===!1?k=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[B]:k=Re,S.copy(w.viewport),C.copy(w.scissor),ie=w.scissorTest}else S.copy(V).multiplyScalar(q).floor(),C.copy(K).multiplyScalar(q).floor(),ie=ae;if(we.bindFramebuffer(I.FRAMEBUFFER,k)&&ze.drawBuffers&&G&&we.drawBuffers(w,k),we.viewport(S),we.scissor(C),we.setScissorTest(ie),he){const be=ke.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,B)}else if(_e){const be=ke.get(w.texture),Oe=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Oe)}D=-1},this.readRenderTargetPixels=function(w,U,B,G,k,he,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){we.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const be=w.texture,Oe=be.format,Re=be.type;if(Oe!==Un&&ye.convert(Oe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Pa&&(Se.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==Wi&&ye.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===oi&&(ze.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&B>=0&&B<=w.height-k&&I.readPixels(U,B,G,k,ye.convert(Oe),ye.convert(Re),he)}finally{const be=T!==null?ke.get(T).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(w,U,B=0){const G=Math.pow(2,-B),k=Math.floor(U.image.width*G),he=Math.floor(U.image.height*G);Be.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,w.x,w.y,k,he),we.unbindTexture()},this.copyTextureToTexture=function(w,U,B,G=0){const k=U.image.width,he=U.image.height,_e=ye.convert(B.format),Ee=ye.convert(B.type);Be.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,w.x,w.y,k,he,_e,Ee,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,w.x,w.y,_e,Ee,U.image),G===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B,G,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(w.max.x-w.min.x),_e=Math.round(w.max.y-w.min.y),Ee=w.max.z-w.min.z+1,be=ye.convert(G.format),Oe=ye.convert(G.type);let Re;if(G.isData3DTexture)Be.setTexture3D(G,0),Re=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Be.setTexture2DArray(G,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),wt=I.getParameter(I.UNPACK_SKIP_ROWS),Zn=I.getParameter(I.UNPACK_SKIP_IMAGES),ot=B.isCompressedTexture?B.mipmaps[k]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Re,k,U.x,U.y,U.z,he,_e,Ee,be,Oe,ot.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,k,U.x,U.y,U.z,he,_e,Ee,be,ot.data):I.texSubImage3D(Re,k,U.x,U.y,U.z,he,_e,Ee,be,Oe,ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zn),k===0&&G.generateMipmaps&&I.generateMipmap(Re),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Ol?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sA extends sv{}sA.prototype.isWebGL1Renderer=!0;class aA extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class uf extends tr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],d=new O,h=new O,m=[],_=[],x=[],p=[];for(let c=0;c<=i;c++){const v=[],g=c/i;let E=0;c===0&&a===0?E=.5/n:c===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const b=R/n;d.x=-e*Math.cos(r+b*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(r+b*s)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(b+E,1-g),v.push(u++)}f.push(v)}for(let c=0;c<i;c++)for(let v=0;v<n;v++){const g=f[c][v+1],E=f[c][v],R=f[c+1][v],b=f[c+1][v+1];(c!==0||a>0)&&m.push(g,E,b),(c!==i-1||l<Math.PI)&&m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oA extends za{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class av extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Zu=new gt,tm=new O,nm=new O;class lA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(nm),n.updateMatrixWorld(),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uA extends lA{constructor(){super(new Q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cA extends av{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new uA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dA extends av{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);const ov=()=>{const t=ee.useRef(null),e=ee.useRef(0);return ee.useEffect(()=>{const n=new aA,i=new Sn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new sv({alpha:!0,antialias:!0,powerPreference:"high-performance"});t.current&&(t.current.appendChild(r.domElement),r.domElement.style.position="absolute",r.domElement.style.top="0",r.domElement.style.left="0",r.domElement.style.width="100%",r.domElement.style.height="100%");const s=Math.min(window.devicePixelRatio,2);r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(s),r.setClearColor(0,0);const a=new dA(16777215,.5);n.add(a);const o=new cA(6514417,.5);o.position.set(5,5,5),n.add(o);const l=[],u=5,f=new uf(.5,32,32),d=new oA({color:6514417,metalness:.7,roughness:.2,transparent:!0,opacity:.3});for(let x=0;x<u;x++){const p=new jn(f,d);p.position.set((Math.random()-.5)*10,Math.random()*5,(Math.random()-.5)*10),n.add(p),l.push({mesh:p,speed:Math.random()*.02+.01,amplitude:Math.random()*2+1})}i.position.z=10,i.position.y=5;let h=0;const m=()=>{e.current=requestAnimationFrame(m),h+=.01,l.forEach(x=>{x.mesh.position.y=Math.sin(h*x.speed)*x.amplitude,x.mesh.rotation.x+=.01,x.mesh.rotation.y+=.01}),r.render(n,i)};m();const _=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),()=>{e.current&&cancelAnimationFrame(e.current),t.current&&t.current.removeChild(r.domElement),window.removeEventListener("resize",_)}},[]),y.jsx("div",{ref:t,className:"fixed inset-0 -z-10 pointer-events-none",style:{opacity:.3,mixBlendMode:"plus-lighter"}})},fA=()=>{const[,t]=ee.useState({x:0,y:0}),e=ee.useRef(null),n=ee.useRef(null);return ee.useEffect(()=>{const i=r=>{if(t({x:r.clientX,y:r.clientY}),n.current&&(n.current.style.transform=`translate(${r.clientX}px, ${r.clientY}px)`),e.current){const s=(window.innerWidth/2-r.pageX)/50,a=(window.innerHeight/2-r.pageY)/50;e.current.style.transform=`translateX(${s}px) translateY(${a}px)`}};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),y.jsxs("div",{className:"relative min-h-screen w-full bg-white dark:bg-neutral-900",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"}),y.jsx(ov,{}),y.jsxs("div",{className:"relative z-10 w-full min-h-screen",children:[y.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl pt-32 md:pt-40",children:y.jsx("div",{className:"flex flex-col items-center text-center",children:y.jsxs("div",{className:"max-w-2xl",children:[y.jsx("div",{className:"mb-6 relative",children:y.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"})}),y.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 font-sans relative text-neutral-900 dark:text-white",children:[y.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-4 w-32 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"}),"Creating digital",y.jsx("br",{}),"experiences that ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"matter"})]}),y.jsxs("p",{className:"text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12 relative",children:[y.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-6 w-24 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"}),"I'm a developer focused on crafting clean, user-friendly websites and applications with modern technologies and intuitive interfaces."]}),y.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[y.jsxs(un,{to:"/projects",className:"px-8 py-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-lg transition-all text-base font-medium relative group",children:[y.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10"}),"View Projects"]}),y.jsxs(un,{to:"/contact",className:"px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-base font-medium relative group text-neutral-900 dark:text-white",children:[y.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"}),"Contact Me"]})]})]})})}),y.jsxs("div",{className:"container mx-auto px-6 md:px-8 max-w-6xl py-24",children:[y.jsxs("div",{className:"mb-16 text-center",children:[y.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block",children:"Expertise"}),y.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white",children:"Technologies"})]}),y.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"React",desc:"Frontend Library",icon:"⚛️"},{name:"TypeScript",desc:"Type Safety",icon:"📘"},{name:"Tailwind",desc:"CSS Framework",icon:"🎨"},{name:"Node.js",desc:"Backend Runtime",icon:"🟢"},{name:"Next.js",desc:"React Framework",icon:"⏭️"},{name:"Three.js",desc:"3D Graphics",icon:"🎮"},{name:"GraphQL",desc:"API Query Language",icon:"🔍"},{name:"MongoDB",desc:"NoSQL Database",icon:"🗄️"}].map(i=>y.jsxs("div",{className:"group p-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),y.jsx("div",{className:"absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"}),y.jsxs("div",{className:"relative z-10",children:[y.jsx("div",{className:"text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300",children:i.icon}),y.jsx("h3",{className:"text-xl font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-neutral-900 dark:text-white",children:i.name}),y.jsx("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:i.desc})]})]},i.name))})]})]})]})},hA="/Portfolio/assets/ChatGPT%20Image%20Apr%2019_%202025_%2002_51_34%20AM-DH5rensq.png",pA=()=>{const[t,e]=ee.useState("story"),[n,i]=ee.useState(!1),[r,s]=ee.useState(!1);return ee.useEffect(()=>{i(!0)},[]),y.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16",children:y.jsxs("div",{className:`space-y-16 transition-all duration-700 transform ${n?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[y.jsxs("header",{className:"mb-16",children:[y.jsx("div",{className:"mb-6",children:y.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"About Me"})}),y.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8",children:["Developer with a passion for ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"design"})]}),y.jsx("p",{className:"text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"Creating beautiful, functional, and user-centered digital experiences that combine technical expertise with creative vision."})]}),y.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-center md:items-start",children:[y.jsx("div",{className:"relative w-56 h-56 md:w-64 md:h-64",children:r?y.jsx("div",{className:"w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center",children:y.jsx("span",{className:"text-4xl text-white font-bold",children:"H"})}):y.jsx("img",{src:hA,alt:"Harry's profile",onError:()=>s(!0),className:"w-full h-full rounded-2xl object-cover shadow-lg ring-4 ring-gray-100 dark:ring-gray-800"})}),y.jsx("div",{className:"flex-1 text-center md:text-left",children:y.jsxs("div",{className:"bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8",children:[y.jsxs("div",{className:"flex border-b border-neutral-200 dark:border-neutral-800 mb-8",children:[y.jsx("button",{onClick:()=>e("story"),className:`px-5 py-3 font-medium ${t==="story"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"My Story"}),y.jsx("button",{onClick:()=>e("skills"),className:`px-5 py-3 font-medium ${t==="skills"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"Skills"}),y.jsx("button",{onClick:()=>e("experience"),className:`px-5 py-3 font-medium ${t==="experience"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"Experience"})]}),t==="story"&&y.jsxs("div",{className:"space-y-5 text-neutral-800 dark:text-neutral-200",children:[y.jsx("p",{children:"Hello! I'm Harry, a passionate web developer with a keen eye for design and a love for creating immersive digital experiences. My journey in web development began 5 years ago when I discovered the power of creating interactive websites."}),y.jsx("p",{children:"What drives me is the perfect blend of creative and technical aspects that web development offers. I enjoy tackling complex problems and turning ideas into elegant, functional websites that provide exceptional user experiences."}),y.jsx("p",{children:"When I'm not coding, you can find me exploring new design trends, experimenting with 3D animations, or learning about emerging technologies in the web development space."})]}),t==="skills"&&y.jsx("div",{children:y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-medium mb-6",children:"Frontend Development"}),y.jsxs("ul",{className:"space-y-5",children:[y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"React.js"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"95%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"Three.js"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"90%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"TypeScript"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"85%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"Tailwind"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"92%"}})})]})]})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-medium mb-6",children:"Backend Development"}),y.jsxs("ul",{className:"space-y-5",children:[y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"Node.js"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"88%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"Express"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"85%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"MongoDB"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"82%"}})})]}),y.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[y.jsx("span",{className:"sm:w-1/3 text-sm",children:"GraphQL"}),y.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:y.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"78%"}})})]})]})]})]})}),t==="experience"&&y.jsxs("div",{className:"space-y-12",children:[y.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[y.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),y.jsx("h3",{className:"text-lg font-medium",children:"Senior Frontend Developer"}),y.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"Tech Solutions Inc. • 2021 - Present"}),y.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Leading frontend development for enterprise clients. Specialized in creating interactive 3D web experiences and optimizing application performance."})]}),y.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[y.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),y.jsx("h3",{className:"text-lg font-medium",children:"Web Developer"}),y.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"Digital Agency • 2019 - 2021"}),y.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Developed responsive websites and e-commerce platforms for various clients. Improved user experience and site performance across multiple projects."})]}),y.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[y.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),y.jsx("h3",{className:"text-lg font-medium",children:"Junior Developer"}),y.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"StartUp Inc. • 2018 - 2019"}),y.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Started my professional journey building web applications and learning modern frontend frameworks."})]})]})]})})]}),y.jsxs("div",{className:"py-12",children:[y.jsxs("div",{className:"mb-16",children:[y.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block",children:"Interests"}),y.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-8",children:"When I'm Not Coding"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{title:"Exploring Design",icon:"🎨",text:"Always looking for new design inspirations and trends in UI/UX."},{title:"Learning",icon:"📚",text:"Constantly improving my skills and exploring new technologies."},{title:"3D Modeling",icon:"💻",text:"Creating 3D models and animations for web and personal projects."}].map((a,o)=>y.jsxs("div",{className:"p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all",children:[y.jsx("div",{className:"text-3xl mb-4",children:a.icon}),y.jsx("h3",{className:"text-lg font-medium mb-2",children:a.title}),y.jsx("p",{className:"text-neutral-600 dark:text-neutral-400 text-sm",children:a.text})]},o))})]})]})})},mA=[{id:1,title:"LuxMart - E-commerce",category:"E-commerce",description:"Premium e-commerce platform with React, Node.js, and MongoDB.",technologies:["React","Node.js","MongoDB"],image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop",link:"#",featured:!0},{id:2,title:"AI Chat Assistant",category:"AI Application",description:"AI-powered chat app with React, TypeScript, and OpenAI API.",technologies:["React","TypeScript","OpenAI"],image:"https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848",link:"#",featured:!0},{id:3,title:"Portfolio Website",category:"Personal",description:"3D animated portfolio with Three.js and React.",technologies:["React","Three.js","Tailwind"],image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1486&auto=format&fit=crop",link:"#",featured:!1}],gA=()=>{const[t,e]=ee.useState(null),n=i=>{e(i)};return y.jsxs("div",{className:"container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16",children:[y.jsxs("div",{className:"space-y-12",children:[y.jsxs("header",{className:"mb-12",children:[y.jsx("div",{className:"mb-4",children:y.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"Portfolio"})}),y.jsxs("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6",children:["Selected ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"Projects"})]}),y.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"A collection of my recent work, showcasing my skills in web development and design."})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:mA.map(i=>y.jsxs("div",{onClick:()=>n(i),className:"group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all cursor-pointer",children:[y.jsx("div",{className:"aspect-[3/2] overflow-hidden",children:y.jsx("img",{src:i.image,alt:i.title,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"})}),y.jsxs("div",{className:"p-3",children:[y.jsx("h3",{className:"text-sm font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:i.title}),y.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2",children:i.description}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-1",children:[i.technologies.slice(0,2).map(r=>y.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300",children:r},r)),i.technologies.length>2&&y.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300",children:["+",i.technologies.length-2]})]}),y.jsx("a",{href:i.link,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] px-2 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-md transition-all",children:"View"})]})]})]},i.id))})]}),t&&y.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center p-6",children:y.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",children:[y.jsxs("div",{className:"h-72 sm:h-96 overflow-hidden bg-gray-200 dark:bg-gray-700 relative",children:[y.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),y.jsx("button",{onClick:()=>e(null),className:"absolute top-6 right-6 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-colors",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),y.jsxs("div",{className:"p-10",children:[y.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-8",children:[y.jsx("h2",{className:"text-3xl font-bold",children:t.title}),y.jsx("span",{className:"px-4 py-2 bg-[#05d9e8]/20 border border-[#05d9e8]/30 text-base rounded-full",children:t.category})]}),y.jsx("p",{className:"text-lg leading-relaxed mb-10",children:t.description}),y.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Technologies Used"}),y.jsx("div",{className:"flex flex-wrap gap-3 mb-10",children:t.technologies.map((i,r)=>y.jsx("span",{className:"px-4 py-2 bg-[#05d9e8]/10 border border-[#05d9e8]/30 rounded-full",children:i},r))}),y.jsx("div",{className:"flex justify-end",children:y.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"btn text-[#ff2a6d] border-[#ff2a6d]",children:"Visit Project"})})]})]})})]})},vA=()=>{const[t,e]=ee.useState({name:"",email:"",subject:"",message:""}),[n,i]=ee.useState(!1),[r,s]=ee.useState(null),a=l=>{const{name:u,value:f}=l.target;e(d=>({...d,[u]:f}))},o=async l=>{l.preventDefault(),i(!0),s(null);try{await new Promise(u=>setTimeout(u,1500)),console.log("Form submitted:",t),s("success"),e({name:"",email:"",subject:"",message:""})}catch(u){console.error("Error submitting form:",u),s("error")}finally{i(!1)}};return y.jsx("div",{className:"min-h-screen pt-20 bg-white dark:bg-gray-900",children:y.jsxs("div",{className:"container mx-auto px-4 py-16",children:[y.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-2",children:"Get In Touch"}),y.jsx("p",{className:"text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-400",children:"Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!"}),y.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12",children:[y.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8",children:[y.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Send Me a Message"}),r==="success"&&y.jsx("div",{className:"mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg",children:"Your message has been sent successfully! I'll get back to you soon."}),r==="error"&&y.jsx("div",{className:"mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg",children:"There was an error sending your message. Please try again later."}),y.jsxs("form",{onSubmit:o,className:"space-y-6",children:[y.jsxs("div",{children:[y.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Your Name"}),y.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"John Doe"})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Your Email"}),y.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"john@example.com"})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Subject"}),y.jsxs("select",{id:"subject",name:"subject",value:t.subject,onChange:a,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",children:[y.jsx("option",{value:"",children:"Select a subject"}),y.jsx("option",{value:"Project Inquiry",children:"Project Inquiry"}),y.jsx("option",{value:"Job Opportunity",children:"Job Opportunity"}),y.jsx("option",{value:"Collaboration",children:"Collaboration"}),y.jsx("option",{value:"Other",children:"Other"})]})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Your Message"}),y.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:a,required:!0,rows:6,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"Hello, I'd like to discuss a potential project..."})]}),y.jsx("button",{type:"submit",disabled:n,className:`w-full py-3 px-6 rounded-lg text-white font-medium transition-all transform hover:scale-[1.02] ${n?"bg-indigo-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700"}`,children:n?"Sending...":"Send Message"})]})]}),y.jsxs("div",{className:"flex flex-col justify-between",children:[y.jsxs("div",{className:"mb-12",children:[y.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Information"}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-start space-x-4",children:[y.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold",children:"Email"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"dulgachharry@gmail.com"})]})]}),y.jsxs("div",{className:"flex items-start space-x-4",children:[y.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold",children:"Phone"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"+91 (9988300738)"})]})]}),y.jsxs("div",{className:"flex items-start space-x-4",children:[y.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold",children:"Location"}),y.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"INDIA,PUNJAB"})]})]})]})]}),y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Connect with Me"}),y.jsx("div",{className:"flex space-x-4",children:[{name:"GitHub",icon:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{name:"LinkedIn",icon:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},{name:"Twitter",icon:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}].map(l=>y.jsx("a",{href:"#",className:"bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors p-3 rounded-full","aria-label":l.name,children:y.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",className:"text-gray-600 dark:text-gray-400",children:y.jsx("path",{d:l.icon})})},l.name))})]})]})]})]})})},_A=[{id:1,name:"Sarah Johnson",company:"TechStart Inc.",position:"CEO",comment:"Harry completely transformed our company website. The 3D animations and responsive design have significantly increased our user engagement and conversion rates. Highly recommend!",rating:5,avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"January 15, 2023"},{id:2,name:"Michael Chen",company:"DigitalCraft",position:"CTO",comment:"Working with Harry was a pleasure. He delivered our e-commerce platform on time and with all the features we requested. The website is fast, secure, and looks fantastic.",rating:5,avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"March 22, 2023"},{id:3,name:"Emily Rodriguez",company:"CreativeMinds Agency",position:"Art Director",comment:"Harry has an amazing eye for design combined with superb technical skills. He brought our vision to life with stunning animations and intuitive UX. The project exceeded our expectations!",rating:5,avatar:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"June 10, 2023"},{id:4,name:"David Wilson",company:"Wilson Consulting",position:"Founder",comment:"The AI chat application Harry built for our consulting firm has revolutionized how we interact with clients. The interface is beautiful and the functionality is exactly what we needed.",rating:4,avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"September 5, 2023"}],xA=()=>{const[t,e]=ee.useState(0),[n,i]=ee.useState(""),[r,s]=ee.useState(""),[a,o]=ee.useState(""),[l,u]=ee.useState(!1),f=d=>{d.preventDefault(),u(!0),e(0),i(""),s(""),o("")};return y.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200",children:[y.jsx(ov,{}),y.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"}),y.jsx("div",{className:"absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"})]}),y.jsx("div",{className:"absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"}),y.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16 relative z-10",children:y.jsxs("div",{className:"space-y-12",children:[y.jsxs("header",{className:"mb-12",children:[y.jsx("div",{className:"mb-4",children:y.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"Testimonials"})}),y.jsxs("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6",children:["Client ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"Feedback"})]}),y.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"See what my clients have to say about working with me and share your own experience"})]}),y.jsxs("div",{className:"space-y-8",children:[y.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Client Testimonials"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:_A.map(d=>y.jsxs("div",{className:"group p-6 bg-white dark:bg-neutral-950 rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),y.jsx("div",{className:"absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"}),y.jsxs("div",{className:"relative z-10",children:[y.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[y.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30",children:y.jsx("img",{src:d.avatar,alt:d.name,className:"w-full h-full object-cover"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:d.name}),y.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[d.position," at ",d.company]})]})]}),y.jsx("div",{className:"flex mb-3",children:[...Array(5)].map((h,m)=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-4 w-4 ${m<d.rating?"text-indigo-600 dark:text-indigo-400":"text-neutral-300 dark:text-neutral-700"}`,viewBox:"0 0 20 20",fill:"currentColor",children:y.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},m))}),y.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 mb-2",children:d.comment}),y.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-500",children:d.date})]})]},d.id))})]}),y.jsx("div",{className:"max-w-2xl mx-auto",children:y.jsxs("div",{className:"bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8",children:[y.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Share Your Experience"}),l&&y.jsx("div",{className:"mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800",children:"Thank you for your feedback! Your testimonial has been submitted and will be reviewed soon."}),y.jsxs("form",{onSubmit:f,className:"space-y-6",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs("div",{children:[y.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Name"}),y.jsx("input",{type:"text",id:"name",value:r,onChange:d=>s(d.target.value),className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Email"}),y.jsx("input",{type:"email",id:"email",value:a,onChange:d=>o(d.target.value),className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Rating"}),y.jsx("div",{className:"flex space-x-1",children:[1,2,3,4,5].map(d=>y.jsx("button",{type:"button",onClick:()=>e(d),className:`p-2 rounded-lg transition-colors ${d<=t?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-400 dark:text-neutral-600 bg-neutral-50 dark:bg-neutral-800"}`,children:"★"},d))})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"comment",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Your Feedback"}),y.jsx("textarea",{id:"comment",value:n,onChange:d=>i(d.target.value),rows:4,className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]}),y.jsx("button",{type:"submit",className:"w-full px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium",children:"Submit Feedback"})]})]})})]})})]})};function yA(){const[t,e]=ee.useState(!1);ee.useEffect(()=>{const i=()=>{window.scrollY>500?e(!0):e(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return y.jsx(By,{children:y.jsxs("div",{className:"flex flex-col min-h-screen w-full",children:[y.jsx(jy,{}),y.jsx("div",{className:"flex-1 w-full",children:y.jsxs(Dy,{children:[y.jsx(fr,{path:"/",element:y.jsx(Ly,{to:"/home",replace:!0})}),y.jsx(fr,{path:"/home",element:y.jsx(fA,{})}),y.jsx(fr,{path:"/about",element:y.jsx(ao,{children:y.jsx(pA,{})})}),y.jsx(fr,{path:"/projects",element:y.jsx(ao,{children:y.jsx(gA,{})})}),y.jsx(fr,{path:"/contact",element:y.jsx(ao,{children:y.jsx(vA,{})})}),y.jsx(fr,{path:"/feedback",element:y.jsx(ao,{children:y.jsx(xA,{})})})]})}),t&&y.jsx("button",{onClick:n,className:"fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 z-50","aria-label":"Back to top",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})]})})}Qu.createRoot(document.getElementById("root")).render(y.jsx(hm.StrictMode,{children:y.jsx(yA,{})}));
