(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function Ry(){if(p0)return Ao;p0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var m0;function wy(){return m0||(m0=1,Kf.exports=Ry()),Kf.exports}var T=wy(),Qf={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Cy(){if(g0)return at;g0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(O,ee,ye){this.props=O,this.context=ee,this.refs=R,this.updater=ye||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(O,ee,ye){this.props=O,this.context=ee,this.refs=R,this.updater=ye||S}var D=L.prototype=new v;D.constructor=L,E(D,y.prototype),D.isPureReactComponent=!0;var N=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function F(O,ee,ye,Me,J,me){return ye=me.ref,{$$typeof:s,type:O,key:ee,ref:ye!==void 0?ye:null,props:me}}function W(O,ee){return F(O.type,ee,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function C(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return ee[ye]})}var V=/\/+/g;function ue(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):ee.toString(36)}function oe(){}function _e(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(oe,oe):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function pe(O,ee,ye,Me,J){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(me){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case s:case e:Se=!0;break;case g:return Se=O._init,pe(Se(O._payload),ee,ye,Me,J)}}if(Se)return J=J(O),Se=Me===""?"."+ue(O,0):Me,N(J)?(ye="",Se!=null&&(ye=Se.replace(V,"$&/")+"/"),pe(J,ee,ye,"",function(st){return st})):J!=null&&(U(J)&&(J=W(J,ye+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var Re=Me===""?".":Me+":";if(N(O))for(var Pe=0;Pe<O.length;Pe++)Me=O[Pe],me=Re+ue(Me,Pe),Se+=pe(Me,ee,ye,me,J);else if(Pe=x(O),typeof Pe=="function")for(O=Pe.call(O),Pe=0;!(Me=O.next()).done;)Me=Me.value,me=Re+ue(Me,Pe++),Se+=pe(Me,ee,ye,me,J);else if(me==="object"){if(typeof O.then=="function")return pe(_e(O),ee,ye,Me,J);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function z(O,ee,ye){if(O==null)return O;var Me=[],J=0;return pe(O,Me,"","",function(me){return ee.call(ye,me,J++)}),Me}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Y=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function be(){}return at.Children={map:z,forEach:function(O,ee,ye){z(O,function(){ee.apply(this,arguments)},ye)},count:function(O){var ee=0;return z(O,function(){ee++}),ee},toArray:function(O){return z(O,function(ee){return ee})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},at.Component=y,at.Fragment=i,at.Profiler=l,at.PureComponent=L,at.StrictMode=r,at.Suspense=p,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,at.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},at.cache=function(O){return function(){return O.apply(null,arguments)}},at.cloneElement=function(O,ee,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=E({},O.props),J=O.key,me=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!k.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(Me[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)Me.children=ye;else if(1<Se){for(var Re=Array(Se),Pe=0;Pe<Se;Pe++)Re[Pe]=arguments[Pe+2];Me.children=Re}return F(O.type,J,void 0,void 0,me,Me)},at.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},at.createElement=function(O,ee,ye){var Me,J={},me=null;if(ee!=null)for(Me in ee.key!==void 0&&(me=""+ee.key),ee)k.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(J[Me]=ee[Me]);var Se=arguments.length-2;if(Se===1)J.children=ye;else if(1<Se){for(var Re=Array(Se),Pe=0;Pe<Se;Pe++)Re[Pe]=arguments[Pe+2];J.children=Re}if(O&&O.defaultProps)for(Me in Se=O.defaultProps,Se)J[Me]===void 0&&(J[Me]=Se[Me]);return F(O,me,void 0,void 0,null,J)},at.createRef=function(){return{current:null}},at.forwardRef=function(O){return{$$typeof:h,render:O}},at.isValidElement=U,at.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},at.memo=function(O,ee){return{$$typeof:m,type:O,compare:ee===void 0?null:ee}},at.startTransition=function(O){var ee=I.T,ye={};I.T=ye;try{var Me=O(),J=I.S;J!==null&&J(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(be,Y)}catch(me){Y(me)}finally{I.T=ee}},at.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},at.use=function(O){return I.H.use(O)},at.useActionState=function(O,ee,ye){return I.H.useActionState(O,ee,ye)},at.useCallback=function(O,ee){return I.H.useCallback(O,ee)},at.useContext=function(O){return I.H.useContext(O)},at.useDebugValue=function(){},at.useDeferredValue=function(O,ee){return I.H.useDeferredValue(O,ee)},at.useEffect=function(O,ee,ye){var Me=I.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(O,ee)},at.useId=function(){return I.H.useId()},at.useImperativeHandle=function(O,ee,ye){return I.H.useImperativeHandle(O,ee,ye)},at.useInsertionEffect=function(O,ee){return I.H.useInsertionEffect(O,ee)},at.useLayoutEffect=function(O,ee){return I.H.useLayoutEffect(O,ee)},at.useMemo=function(O,ee){return I.H.useMemo(O,ee)},at.useOptimistic=function(O,ee){return I.H.useOptimistic(O,ee)},at.useReducer=function(O,ee,ye){return I.H.useReducer(O,ee,ye)},at.useRef=function(O){return I.H.useRef(O)},at.useState=function(O){return I.H.useState(O)},at.useSyncExternalStore=function(O,ee,ye){return I.H.useSyncExternalStore(O,ee,ye)},at.useTransition=function(){return I.H.useTransition()},at.version="19.1.0",at}var v0;function bh(){return v0||(v0=1,Qf.exports=Cy()),Qf.exports}var le=bh();const Dy=wv(le);var Jf={exports:{}},Ro={},$f={exports:{}},ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Ny(){return _0||(_0=1,function(s){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var be=Y-1>>>1,O=z[be];if(0<l(O,K))z[be]=K,z[Y]=O,Y=be;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var be=0,O=z.length,ee=O>>>1;be<ee;){var ye=2*(be+1)-1,Me=z[ye],J=ye+1,me=z[J];if(0>l(Me,Y))J<O&&0>l(me,Me)?(z[be]=me,z[J]=Y,be=J):(z[be]=Me,z[ye]=Y,be=ye);else if(J<O&&0>l(me,Y))z[be]=me,z[J]=Y,be=J;else break e}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,_=null,x=3,S=!1,E=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=z)r(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function I(z){if(R=!1,N(z),!E)if(i(p)!==null)E=!0,k||(k=!0,ue());else{var K=i(m);K!==null&&pe(I,K.startTime-z)}}var k=!1,F=-1,W=5,U=-1;function C(){return y?!0:!(s.unstable_now()-U<W)}function V(){if(y=!1,k){var z=s.unstable_now();U=z;var K=!0;try{e:{E=!1,R&&(R=!1,L(F),F=-1),S=!0;var Y=x;try{t:{for(N(z),_=i(p);_!==null&&!(_.expirationTime>z&&C());){var be=_.callback;if(typeof be=="function"){_.callback=null,x=_.priorityLevel;var O=be(_.expirationTime<=z);if(z=s.unstable_now(),typeof O=="function"){_.callback=O,N(z),K=!0;break t}_===i(p)&&r(p),N(z)}else r(p);_=i(p)}if(_!==null)K=!0;else{var ee=i(m);ee!==null&&pe(I,ee.startTime-z),K=!1}}break e}finally{_=null,x=Y,S=!1}K=void 0}}finally{K?ue():k=!1}}}var ue;if(typeof D=="function")ue=function(){D(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,_e=oe.port2;oe.port1.onmessage=V,ue=function(){_e.postMessage(null)}}else ue=function(){v(V,0)};function pe(z,K){F=v(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return z()}finally{x=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(z,K,Y){var be=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?be+Y:be):Y=be,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:O,sortIndex:-1},Y>be?(z.sortIndex=Y,e(m,z),i(p)===null&&z===i(m)&&(R?(L(F),F=-1):R=!0,pe(I,Y-be))):(z.sortIndex=O,e(p,z),E||S||(E=!0,k||(k=!0,ue()))),z},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(z){var K=x;return function(){var Y=x;x=K;try{return z.apply(this,arguments)}finally{x=Y}}}}(ed)),ed}var x0;function Uy(){return x0||(x0=1,$f.exports=Ny()),$f.exports}var td={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function Ly(){if(y0)return Rn;y0=1;var s=bh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Rn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var S0;function Oy(){if(S0)return td.exports;S0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),td.exports=Ly(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function Py(){if(M0)return Ro;M0=1;var s=Uy(),e=bh(),i=Oy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),t;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,b=u.child;b;){if(b===a){M=!0,a=u,o=f;break}if(b===o){M=!0,o=u,a=f;break}b=b.sibling}if(!M){for(b=f.child;b;){if(b===a){M=!0,a=f,o=u;break}if(b===o){M=!0,o=f,a=u;break}b=b.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case D:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},be=[],O=-1;function ee(t){return{current:t}}function ye(t){0>O||(t.current=be[O],be[O]=null,O--)}function Me(t,n){O++,be[O]=t.current,t.current=n}var J=ee(null),me=ee(null),Se=ee(null),Re=ee(null);function Pe(t,n){switch(Me(Se,n),Me(me,t),Me(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gg(n),t=Vg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),Me(J,t)}function st(){ye(J),ye(me),ye(Se)}function Ke(t){t.memoizedState!==null&&Me(Re,t);var n=J.current,a=Vg(n,t.type);n!==a&&(Me(me,t),Me(J,a))}function Ht(t){me.current===t&&(ye(J),ye(me)),Re.current===t&&(ye(Re),So._currentValue=Y)}var zt=Object.prototype.hasOwnProperty,ut=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,On=s.unstable_shouldYield,mt=s.unstable_requestPaint,nt=s.unstable_now,Xe=s.unstable_getCurrentPriorityLevel,Nt=s.unstable_ImmediatePriority,Ge=s.unstable_UserBlockingPriority,P=s.unstable_NormalPriority,A=s.unstable_LowPriority,te=s.unstable_IdlePriority,xe=s.log,Ee=s.unstable_setDisableYieldValue,de=null,Ie=null;function we(t){if(typeof xe=="function"&&Ee(t),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(de,t)}catch{}}var Ce=Math.clz32?Math.clz32:He,gt=Math.log,Ae=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(gt(t)/Ae|0)|0}var Ye=256,Qe=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function lt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Be(o):(M&=b,M!==0?u=Be(M):a||(a=b&~t,a!==0&&(u=Be(a))))):(b=o&~f,b!==0?u=Be(b):M!==0?u=Be(M):a||(a=o&~t,a!==0&&(u=Be(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function tt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Le(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ge(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ze(t,n,a,o,u,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=M&~a;0<a;){var fe=31-Ce(a),ve=1<<fe;b[fe]=0,B[fe]=-1;var ne=$[fe];if(ne!==null)for($[fe]=null,fe=0;fe<ne.length;fe++){var ie=ne[fe];ie!==null&&(ie.lane&=-536870913)}a&=~ve}o!==0&&Oe(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function Oe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ce(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function it(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ce(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function kt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Vn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,xn="__reactProps$"+hn,Pn="__reactContainer$"+hn,Ka="__reactEvents$"+hn,Qo="__reactListeners$"+hn,Jo="__reactHandles$"+hn,Qa="__reactResources$"+hn,fa="__reactMarker$"+hn;function da(t){delete t[on],delete t[xn],delete t[Ka],delete t[Qo],delete t[Jo]}function Ui(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Pn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[on])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function Li(t){if(t=t[on]||t[Pn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ja(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ha(t){var n=t[Qa];return n||(n=t[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[fa]=!0}var $o=new Set,el={};function Oi(t,n){w(t,n),w(t+"Capture",n)}function w(t,n){for(el[t]=n,t=0;t<n.length;t++)$o.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return zt.call(re,t)?!0:zt.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function Te(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ne(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Fe,$e;function We(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+$e}var je=!1;function dt(t,n){if(!t||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ie){ne=ie}t.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],b=f[1];if(M&&b){var B=M.split(`
`),$=b.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var fe=`
`+B[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?We(a):""}function Et(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return We("Activity");default:return""}}function Xt(t){try{var n="";do n+=Et(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _t(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(t){var n=_t(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){t._valueTracker||(t._valueTracker=qe(t))}function St(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=_t(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function Gt(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,o,u,f,M,b){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,M,vt(n)):a!=null?Tn(t,M,vt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+vt(b):t.removeAttribute("name")}function It(t,n,a,o,u,f,M,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Tn(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Gh(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Gh(t,f,n[f])}function Yc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(t){return A_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Zc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,Dr=null;function jh(t){var n=Li(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(r(90));Pi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&St(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var Qc=!1;function Xh(t,n,a){if(Qc)return t(n,a);Qc=!0;try{var o=t(n);return o}finally{if(Qc=!1,(Cr!==null||Dr!==null)&&(Hl(),Cr&&(n=Cr,t=Dr,Dr=Cr=null,jh(n),t)))for(n=0;n<t.length;n++)jh(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(zi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Jc=!1}var ma=null,$c=null,nl=null;function Wh(){if(nl)return nl;var t,n=$c,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return nl=u.slice(t,1<o?1-o:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function qh(){return!1}function Bn(t){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:qh,this.isPropagationStopped=qh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Bn($a),Ps=g({},$a,{view:0,detail:0}),R_=Bn(Ps),eu,tu,Bs,sl=g({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(eu=t.screenX-Bs.screenX,tu=t.screenY-Bs.screenY):tu=eu=0,Bs=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Yh=Bn(sl),w_=g({},sl,{dataTransfer:0}),C_=Bn(w_),D_=g({},Ps,{relatedTarget:0}),nu=Bn(D_),N_=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=Bn(N_),L_=g({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=Bn(L_),P_=g({},$a,{data:0}),Zh=Bn(P_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=I_[t])?!!n[t]:!1}function iu(){return F_}var H_=g({},Ps,{key:function(t){if(t.key){var n=B_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k_=Bn(H_),G_=g({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Bn(G_),V_=g({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),j_=Bn(V_),X_=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=Bn(X_),q_=g({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=Bn(q_),Z_=g({},$a,{newState:0,oldState:0}),K_=Bn(Z_),Q_=[9,13,27,32],au=zi&&"CompositionEvent"in window,zs=null;zi&&"documentMode"in document&&(zs=document.documentMode);var J_=zi&&"TextEvent"in window&&!zs,Qh=zi&&(!au||zs&&8<zs&&11>=zs),Jh=" ",$h=!1;function ep(t,n){switch(t){case"keyup":return Q_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function $_(t,n){switch(t){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return t=n.data,t===Jh&&$h?null:t;default:return null}}function ex(t,n){if(Nr)return t==="compositionend"||!au&&ep(t,n)?(t=Wh(),nl=$c=ma=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tx[t.type]:n==="textarea"}function ip(t,n,a,o){Cr?Dr?Dr.push(o):Dr=[o]:Cr=o,n=Wl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Is=null,Fs=null;function nx(t){zg(t,0)}function ol(t){var n=Ja(t);if(St(n))return t}function ap(t,n){if(t==="change")return n}var rp=!1;if(zi){var ru;if(zi){var su="oninput"in document;if(!su){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),su=typeof sp.oninput=="function"}ru=su}else ru=!1;rp=ru&&(!document.documentMode||9<document.documentMode)}function op(){Is&&(Is.detachEvent("onpropertychange",lp),Fs=Is=null)}function lp(t){if(t.propertyName==="value"&&ol(Fs)){var n=[];ip(n,Fs,t,Kc(t)),Xh(nx,n)}}function ix(t,n,a){t==="focusin"?(op(),Is=n,Fs=a,Is.attachEvent("onpropertychange",lp)):t==="focusout"&&op()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Fs)}function rx(t,n){if(t==="click")return ol(n)}function sx(t,n){if(t==="input"||t==="change")return ol(n)}function ox(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:ox;function Hs(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!zt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,n){var a=cp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function fp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?fp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lx=zi&&"documentMode"in document&&11>=document.documentMode,Ur=null,lu=null,ks=null,cu=!1;function hp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Ur==null||Ur!==bn(o)||(o=Ur,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Hs(ks,o)||(ks=o,o=Wl(lu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ur)))}function er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},uu={},pp={};zi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(t){if(uu[t])return uu[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return uu[t]=n[a];return t}var mp=tr("animationend"),gp=tr("animationiteration"),vp=tr("animationstart"),cx=tr("transitionrun"),ux=tr("transitionstart"),fx=tr("transitioncancel"),_p=tr("transitionend"),xp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function ci(t,n){xp.set(t,n),Oi(n,[t])}var yp=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},yp.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var ei=[],Or=0,du=0;function ll(){for(var t=Or,n=du=Or=0;n<t;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Sp(a,u,f)}}function cl(t,n,a,o){ei[Or++]=t,ei[Or++]=n,ei[Or++]=a,ei[Or++]=o,du|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function hu(t,n,a,o){return cl(t,n,a,o),ul(t)}function Pr(t,n){return cl(t,null,null,n),ul(t)}function Sp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ce(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ul(t){if(50<ho)throw ho=0,yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Br={};function dx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new dx(t,n,a,o)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function fl(t,n,a,o,u,f){var M=0;if(o=t,typeof t=="function")pu(t)&&(M=1);else if(typeof t=="string")M=py(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Xn(31,a,n,u),t.elementType=U,t.lanes=f,t;case E:return nr(a.children,u,f,n);case R:M=8,u|=24;break;case y:return t=Xn(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case I:return t=Xn(13,a,n,u),t.elementType=I,t.lanes=f,t;case k:return t=Xn(19,a,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case D:M=10;break e;case L:M=9;break e;case N:M=11;break e;case F:M=14;break e;case W:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Xn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function nr(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function mu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function gu(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zr=[],Ir=0,dl=null,hl=0,ti=[],ni=0,ir=null,Fi=1,Hi="";function ar(t,n){zr[Ir++]=hl,zr[Ir++]=dl,dl=t,hl=n}function Ep(t,n,a){ti[ni++]=Fi,ti[ni++]=Hi,ti[ni++]=ir,ir=t;var o=Fi;t=Hi;var u=32-Ce(o)-1;o&=~(1<<u),a+=1;var f=32-Ce(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Fi=1<<32-Ce(n)+u|a<<u|o,Hi=f+t}else Fi=1<<f|a<<u|o,Hi=t}function vu(t){t.return!==null&&(ar(t,1),Ep(t,1,0))}function _u(t){for(;t===dl;)dl=zr[--Ir],zr[Ir]=null,hl=zr[--Ir],zr[Ir]=null;for(;t===ir;)ir=ti[--ni],ti[ni]=null,Hi=ti[--ni],ti[ni]=null,Fi=ti[--ni],ti[ni]=null}var Nn=null,Zt=null,At=!1,rr=null,yi=!1,xu=Error(r(519));function sr(t){var n=Error(r(418,""));throw js($n(n,t)),xu}function bp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)pt(mo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),It(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Yt(n);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),yn(n,o.value,o.defaultValue,o.children),Yt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||kg(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=ql),n=!0):n=!1,n||sr(t)}function Tp(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Nn=Nn.return}}function Gs(t){if(t!==Nn)return!1;if(!At)return Tp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Bf(t.type,t.memoizedProps)),a=!a),a&&Zt&&sr(t),Tp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=fi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,Na(t.type)?(t=Hf,Hf=null,Zt=t):Zt=n):Zt=Nn?fi(t.stateNode.nextSibling):null;return!0}function Vs(){Zt=Nn=null,At=!1}function Ap(){var t=rr;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),rr=null),t}function js(t){rr===null?rr=[t]:rr.push(t)}var yu=ee(null),or=null,ki=null;function ga(t,n,a){Me(yu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=yu.current,ye(yu)}function Su(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Mu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Su(f.return,a,t),o||(M=null);break e}f=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Su(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Xs(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var b=u.type;jn(u.pendingProps.value,M.value)||(t!==null?t.push(b):t=[b])}}else if(u===Re.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&Mu(n,t,a,o),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Rp(or,t)}function ml(t,n){return or===null&&lr(t),Rp(t,n)}function Rp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},px=s.unstable_scheduleCallback,mx=s.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new hx,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&px(mx,function(){t.controller.abort()})}var qs=null,bu=0,Fr=0,Hr=null;function gx(t,n){if(qs===null){var a=qs=[];bu=0,Fr=Rf(),Hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bu++,n.then(wp,wp),n}function wp(){if(--bu===0&&qs!==null){Hr!==null&&(Hr.status="fulfilled");var t=qs;qs=null,Fr=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Cp=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(t,n),Cp!==null&&Cp(t,n)};var cr=ee(null);function Tu(){var t=cr.current;return t!==null?t:Vt.pooledCache}function gl(t,n){n===null?Me(cr,cr.current):Me(cr,n.pool)}function Dp(){var t=Tu();return t===null?null:{parent:cn._currentValue,pool:t}}var Ys=Error(r(460)),Np=Error(r(474)),vl=Error(r(542)),Au={then:function(){}};function Up(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _l(){}function Lp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t;default:if(typeof n.status=="string")n.then(_l,_l);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t}throw Zs=n,Ys}}var Zs=null;function Op(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}function Pp(t){if(t===Ys||t===vl)throw Error(r(483))}var va=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ul(t),Sp(t,null,a),n}return cl(t,o,n,a),ul(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,it(t,a)}}function Cu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Du=!1;function Qs(){if(Du){var t=Hr;if(t!==null)throw t}}function Js(t,n,a,o){Du=!1;var u=t.updateQueue;va=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,$=B.next;B.next=null,M===null?f=$:M.next=$,M=B;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,b=fe.lastBaseUpdate,b!==M&&(b===null?fe.firstBaseUpdate=$:b.next=$,fe.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;M=0,fe=$=B=null,b=f;do{var ne=b.lane&-536870913,ie=ne!==b.lane;if(ie?(yt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Fr&&(Du=!0),fe!==null&&(fe=fe.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var et=t,Ze=b;ne=n;var Pt=a;switch(Ze.tag){case 1:if(et=Ze.payload,typeof et=="function"){ve=et.call(Pt,ve,ne);break e}ve=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Ze.payload,ne=typeof et=="function"?et.call(Pt,ve,ne):et,ne==null)break e;ve=g({},ve,ne);break e;case 2:va=!0}}ne=b.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=u.callbacks,ie===null?u.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},fe===null?($=fe=ie,B=ve):fe=fe.next=ie,M|=ne;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);fe===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=fe,f===null&&(u.shared.lanes=0),Ra|=M,t.lanes=M,t.memoizedState=ve}}function Bp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}var kr=ee(null),xl=ee(0);function Ip(t,n){t=Zi,Me(xl,t),Me(kr,n),Zi=t|n.baseLanes}function Nu(){Me(xl,Zi),Me(kr,kr.current)}function Uu(){Zi=xl.current,ye(kr),ye(xl)}var ya=0,ct=null,Lt=null,an=null,yl=!1,Gr=!1,ur=!1,Sl=0,$s=0,Vr=null,_x=0;function $t(){throw Error(r(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Ou(t,n,a,o,u,f){return ya=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Sm:Mm,ur=!1,f=a(o,u),ur=!1,Gr&&(f=Hp(n,a,o,u)),Fp(t),f}function Fp(t){z.H=Rl;var n=Lt!==null&&Lt.next!==null;if(ya=0,an=Lt=ct=null,yl=!1,$s=0,Vr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&pl(t)&&(mn=!0))}function Hp(t,n,a,o){ct=t;var u=0;do{if(Gr&&(Vr=null),$s=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,an=Lt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Tx,f=n(a,o)}while(Gr);return f}function xx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Pu(){var t=Sl!==0;return Sl=0,t}function Bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ya=0,an=Lt=ct=null,Gr=!1,$s=Sl=0,Vr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ct.memoizedState=an=t:an=an.next=t,an}function rn(){if(Lt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var n=an===null?ct.memoizedState:an.next;if(n!==null)an=n,Lt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},an===null?ct.memoizedState=an=t:an=an.next=t}return an}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=$s;return $s+=1,Vr===null&&(Vr=[]),t=Lp(Vr,t,n),n=ct,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Sm:Mm),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===D)return An(t)}throw Error(r(438,String(t)))}function Fu(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Iu(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function El(t){var n=rn();return Hu(n,Lt,t)}function Hu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=M=null,B=null,$=n,fe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(yt&ve)===ve:(ya&ve)===ve){var ne=$.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Fr&&(fe=!0);else if((ya&ne)===ne){$=$.next,ne===Fr&&(fe=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=ve,M=f):B=B.next=ve,ct.lanes|=ne,Ra|=ne;ve=$.action,ur&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ne={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=ne,M=f):B=B.next=ne,ct.lanes|=ve,Ra|=ve;$=$.next}while($!==null&&$!==n);if(B===null?M=f:B.next=b,!jn(f,t.memoizedState)&&(mn=!0,fe&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ku(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=t(f,M.action),M=M.next;while(M!==u);jn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function kp(t,n,a){var o=ct,u=rn(),f=At;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!jn((Lt||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var b=jp.bind(null,o,u,t);if(to(2048,8,b,[t]),u.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,jr(9,bl(),Vp.bind(null,o,u,a,n),null),Vt===null)throw Error(r(349));f||(ya&124)!==0||Gp(o,n,a)}return a}function Gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Iu(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vp(t,n,a,o){n.value=a,n.getSnapshot=o,Xp(n)&&Wp(t)}function jp(t,n,a){return a(function(){Xp(n)&&Wp(t)})}function Xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Wp(t){var n=Pr(t,2);n!==null&&Kn(n,t,2)}function Gu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ur){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function qp(t,n,a,o){return t.baseState=a,Hu(t,Lt,typeof o=="function"?o:Vi)}function yx(t,n,a,o,u){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,M={};z.T=M;try{var b=a(u,o),B=z.S;B!==null&&B(M,b),Zp(t,n,b)}catch($){Vu(t,n,$)}finally{z.T=f}}else try{f=a(u,o),Zp(t,n,f)}catch($){Vu(t,n,$)}}function Zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Kp(t,n,o)},function(o){return Vu(t,n,o)}):Kp(t,n,a)}function Kp(t,n,a){n.status="fulfilled",n.value=a,Qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Yp(t,a)))}function Vu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==o)}t.action=null}function Qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jp(t,n){return n}function $p(t,n){if(At){var a=Vt.formState;if(a!==null){e:{var o=ct;if(At){if(Zt){t:{for(var u=Zt,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=fi(u.nextSibling),o=u.data==="F!";break e}}sr(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=o,a=_m.bind(null,ct,o),o.dispatch=a,o=Gu(!1),f=Yu.bind(null,ct,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=yx.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function em(t){var n=rn();return tm(n,Lt,t)}function tm(t,n,a){if(n=Hu(t,n,Jp)[0],t=El(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(M){throw M===Ys?vl:M}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,jr(9,bl(),Sx.bind(null,u,a),null)),[o,f,t]}function Sx(t,n){t.action=n}function nm(t){var n=rn(),a=Lt;if(a!==null)return tm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function jr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Iu(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function bl(){return{destroy:void 0,resource:void 0}}function im(){return rn().memoizedState}function Tl(t,n,a,o){var u=zn();o=o===void 0?null:o,ct.flags|=t,u.memoizedState=jr(1|n,bl(),a,o)}function to(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Lt!==null&&o!==null&&Lu(o,Lt.memoizedState.deps)?u.memoizedState=jr(n,f,a,o):(ct.flags|=t,u.memoizedState=jr(1|n,f,a,o))}function am(t,n){Tl(8390656,8,t,n)}function rm(t,n){to(2048,8,t,n)}function sm(t,n){return to(4,2,t,n)}function om(t,n){return to(4,4,t,n)}function lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function cm(t,n,a){a=a!=null?a.concat([t]):null,to(4,4,lm.bind(null,n,t),a)}function ju(){}function um(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function fm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=t(),ur){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function Xu(t,n,a){return a===void 0||(ya&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=pg(),ct.lanes|=t,Ra|=t,a)}function dm(t,n,a,o){return jn(a,n)?a:kr.current!==null?(t=Xu(t,a,o),jn(t,n)||(mn=!0),t):(ya&42)===0?(mn=!0,t.memoizedState=a):(t=pg(),ct.lanes|=t,Ra|=t,n)}function hm(t,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var M=z.T,b={};z.T=b,Yu(t,!1,n,a);try{var B=u(),$=z.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=vx(B,o);no(t,n,fe,Zn(t))}else no(t,n,o,Zn(t))}catch(ve){no(t,n,{then:function(){},status:"rejected",reason:ve},Zn())}finally{K.p=f,z.T=M}}function Mx(){}function Wu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=pm(t).queue;hm(t,u,n,Y,a===null?Mx:function(){return mm(t),a(o)})}function pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function mm(t){var n=pm(t).next.queue;no(t,n,{},Zn())}function qu(){return An(So)}function gm(){return rn().memoizedState}function vm(){return rn().memoizedState}function Ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=_a(a);var o=xa(n,t,a);o!==null&&(Kn(o,n,a),Ks(o,n,a)),n={cache:Eu()},t.payload=n;return}n=n.return}}function bx(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?xm(n,a):(a=hu(t,n,a,o),a!==null&&(Kn(a,t,o),ym(a,n,o)))}function _m(t,n,a){var o=Zn();no(t,n,a,o)}function no(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))xm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,b=f(M,a);if(u.hasEagerState=!0,u.eagerState=b,jn(b,M))return cl(t,n,u,0),Vt===null&&ll(),!1}catch{}finally{}if(a=hu(t,n,u,o),a!==null)return Kn(a,t,o),ym(a,n,o),!0}return!1}function Yu(t,n,a,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=hu(t,a,o,2),n!==null&&Kn(n,t,2)}function Al(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function xm(t,n){Gr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ym(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,it(t,a)}}var Rl={readContext:An,use:Ml,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Sm={readContext:An,use:Ml,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tl(4194308,4,lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tl(4194308,4,t,n)},useInsertionEffect:function(t,n){Tl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ur){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ur){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=bx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=_m.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(t,n){var a=zn();return Xu(a,t,n)},useTransition:function(){var t=Gu(!1);return t=hm.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=zn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Vt===null)throw Error(r(349));(yt&124)!==0||Gp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,am(jp.bind(null,o,f,t),[t]),o.flags|=2048,jr(9,bl(),Vp.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=Vt.identifierPrefix;if(At){var a=Hi,o=Fi;a=(o&~(1<<32-Ce(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=_x++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:$p,useActionState:$p,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return zn().memoizedState=Ex.bind(null,ct)}},Mm={readContext:An,use:Ml,useCallback:um,useContext:An,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:El,useRef:im,useState:function(){return El(Vi)},useDebugValue:ju,useDeferredValue:function(t,n){var a=rn();return dm(a,Lt.memoizedState,t,n)},useTransition:function(){var t=El(Vi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:kp,useId:gm,useHostTransitionStatus:qu,useFormState:em,useActionState:em,useOptimistic:function(t,n){var a=rn();return qp(a,Lt,t,n)},useMemoCache:Fu,useCacheRefresh:vm},Tx={readContext:An,use:Ml,useCallback:um,useContext:An,useEffect:rm,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:ku,useRef:im,useState:function(){return ku(Vi)},useDebugValue:ju,useDeferredValue:function(t,n){var a=rn();return Lt===null?Xu(a,t,n):dm(a,Lt.memoizedState,t,n)},useTransition:function(){var t=ku(Vi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:kp,useId:gm,useHostTransitionStatus:qu,useFormState:nm,useActionState:nm,useOptimistic:function(t,n){var a=rn();return Lt!==null?qp(a,Lt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:vm},Xr=null,io=0;function wl(t){var n=io;return io+=1,Xr===null&&(Xr=[]),Lp(Xr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Em(t){var n=t._init;return n(t._payload)}function bm(t){function n(X,G){if(t){var Q=X.deletions;Q===null?(X.deletions=[G],X.flags|=16):Q.push(G)}}function a(X,G){if(!t)return null;for(;G!==null;)n(X,G),G=G.sibling;return null}function o(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function u(X,G){return X=Ii(X,G),X.index=0,X.sibling=null,X}function f(X,G,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<G?(X.flags|=67108866,G):Q):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function M(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function b(X,G,Q,he){return G===null||G.tag!==6?(G=mu(Q,X.mode,he),G.return=X,G):(G=u(G,Q),G.return=X,G)}function B(X,G,Q,he){var ke=Q.type;return ke===E?fe(X,G,Q.props.children,he,Q.key):G!==null&&(G.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===W&&Em(ke)===G.type)?(G=u(G,Q.props),ao(G,Q),G.return=X,G):(G=fl(Q.type,Q.key,Q.props,null,X.mode,he),ao(G,Q),G.return=X,G)}function $(X,G,Q,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=gu(Q,X.mode,he),G.return=X,G):(G=u(G,Q.children||[]),G.return=X,G)}function fe(X,G,Q,he,ke){return G===null||G.tag!==7?(G=nr(Q,X.mode,he,ke),G.return=X,G):(G=u(G,Q),G.return=X,G)}function ve(X,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mu(""+G,X.mode,Q),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return Q=fl(G.type,G.key,G.props,null,X.mode,Q),ao(Q,G),Q.return=X,Q;case S:return G=gu(G,X.mode,Q),G.return=X,G;case W:var he=G._init;return G=he(G._payload),ve(X,G,Q)}if(pe(G)||ue(G))return G=nr(G,X.mode,Q,null),G.return=X,G;if(typeof G.then=="function")return ve(X,wl(G),Q);if(G.$$typeof===D)return ve(X,ml(X,G),Q);Cl(X,G)}return null}function ne(X,G,Q,he){var ke=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ke!==null?null:b(X,G,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===ke?B(X,G,Q,he):null;case S:return Q.key===ke?$(X,G,Q,he):null;case W:return ke=Q._init,Q=ke(Q._payload),ne(X,G,Q,he)}if(pe(Q)||ue(Q))return ke!==null?null:fe(X,G,Q,he,null);if(typeof Q.then=="function")return ne(X,G,wl(Q),he);if(Q.$$typeof===D)return ne(X,G,ml(X,Q),he);Cl(X,Q)}return null}function ie(X,G,Q,he,ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return X=X.get(Q)||null,b(G,X,""+he,ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case x:return X=X.get(he.key===null?Q:he.key)||null,B(G,X,he,ke);case S:return X=X.get(he.key===null?Q:he.key)||null,$(G,X,he,ke);case W:var ft=he._init;return he=ft(he._payload),ie(X,G,Q,he,ke)}if(pe(he)||ue(he))return X=X.get(Q)||null,fe(G,X,he,ke,null);if(typeof he.then=="function")return ie(X,G,Q,wl(he),ke);if(he.$$typeof===D)return ie(X,G,Q,ml(G,he),ke);Cl(G,he)}return null}function et(X,G,Q,he){for(var ke=null,ft=null,Ve=G,Je=G=0,vn=null;Ve!==null&&Je<Q.length;Je++){Ve.index>Je?(vn=Ve,Ve=null):vn=Ve.sibling;var bt=ne(X,Ve,Q[Je],he);if(bt===null){Ve===null&&(Ve=vn);break}t&&Ve&&bt.alternate===null&&n(X,Ve),G=f(bt,G,Je),ft===null?ke=bt:ft.sibling=bt,ft=bt,Ve=vn}if(Je===Q.length)return a(X,Ve),At&&ar(X,Je),ke;if(Ve===null){for(;Je<Q.length;Je++)Ve=ve(X,Q[Je],he),Ve!==null&&(G=f(Ve,G,Je),ft===null?ke=Ve:ft.sibling=Ve,ft=Ve);return At&&ar(X,Je),ke}for(Ve=o(Ve);Je<Q.length;Je++)vn=ie(Ve,X,Je,Q[Je],he),vn!==null&&(t&&vn.alternate!==null&&Ve.delete(vn.key===null?Je:vn.key),G=f(vn,G,Je),ft===null?ke=vn:ft.sibling=vn,ft=vn);return t&&Ve.forEach(function(Ba){return n(X,Ba)}),At&&ar(X,Je),ke}function Ze(X,G,Q,he){if(Q==null)throw Error(r(151));for(var ke=null,ft=null,Ve=G,Je=G=0,vn=null,bt=Q.next();Ve!==null&&!bt.done;Je++,bt=Q.next()){Ve.index>Je?(vn=Ve,Ve=null):vn=Ve.sibling;var Ba=ne(X,Ve,bt.value,he);if(Ba===null){Ve===null&&(Ve=vn);break}t&&Ve&&Ba.alternate===null&&n(X,Ve),G=f(Ba,G,Je),ft===null?ke=Ba:ft.sibling=Ba,ft=Ba,Ve=vn}if(bt.done)return a(X,Ve),At&&ar(X,Je),ke;if(Ve===null){for(;!bt.done;Je++,bt=Q.next())bt=ve(X,bt.value,he),bt!==null&&(G=f(bt,G,Je),ft===null?ke=bt:ft.sibling=bt,ft=bt);return At&&ar(X,Je),ke}for(Ve=o(Ve);!bt.done;Je++,bt=Q.next())bt=ie(Ve,X,Je,bt.value,he),bt!==null&&(t&&bt.alternate!==null&&Ve.delete(bt.key===null?Je:bt.key),G=f(bt,G,Je),ft===null?ke=bt:ft.sibling=bt,ft=bt);return t&&Ve.forEach(function(Ay){return n(X,Ay)}),At&&ar(X,Je),ke}function Pt(X,G,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var ke=Q.key;G!==null;){if(G.key===ke){if(ke=Q.type,ke===E){if(G.tag===7){a(X,G.sibling),he=u(G,Q.props.children),he.return=X,X=he;break e}}else if(G.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===W&&Em(ke)===G.type){a(X,G.sibling),he=u(G,Q.props),ao(he,Q),he.return=X,X=he;break e}a(X,G);break}else n(X,G);G=G.sibling}Q.type===E?(he=nr(Q.props.children,X.mode,he,Q.key),he.return=X,X=he):(he=fl(Q.type,Q.key,Q.props,null,X.mode,he),ao(he,Q),he.return=X,X=he)}return M(X);case S:e:{for(ke=Q.key;G!==null;){if(G.key===ke)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(X,G.sibling),he=u(G,Q.children||[]),he.return=X,X=he;break e}else{a(X,G);break}else n(X,G);G=G.sibling}he=gu(Q,X.mode,he),he.return=X,X=he}return M(X);case W:return ke=Q._init,Q=ke(Q._payload),Pt(X,G,Q,he)}if(pe(Q))return et(X,G,Q,he);if(ue(Q)){if(ke=ue(Q),typeof ke!="function")throw Error(r(150));return Q=ke.call(Q),Ze(X,G,Q,he)}if(typeof Q.then=="function")return Pt(X,G,wl(Q),he);if(Q.$$typeof===D)return Pt(X,G,ml(X,Q),he);Cl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(X,G.sibling),he=u(G,Q),he.return=X,X=he):(a(X,G),he=mu(Q,X.mode,he),he.return=X,X=he),M(X)):a(X,G)}return function(X,G,Q,he){try{io=0;var ke=Pt(X,G,Q,he);return Xr=null,ke}catch(Ve){if(Ve===Ys||Ve===vl)throw Ve;var ft=Xn(29,Ve,null,X.mode);return ft.lanes=he,ft.return=X,ft}finally{}}}var Wr=bm(!0),Tm=bm(!1),ii=ee(null),Si=null;function Sa(t){var n=t.alternate;Me(un,un.current&1),Me(ii,t),Si===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Si=t)}function Am(t){if(t.tag===22){if(Me(un,un.current),Me(ii,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else Ma()}function Ma(){Me(un,un.current),Me(ii,ii.current)}function ji(t){ye(ii),Si===t&&(Si=null),ye(un)}var un=ee(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ff(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Zu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(t,u,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=xa(t,o,a),n!==null&&(Kn(n,t,a),Ks(n,t,a))}};function Rm(t,n,a,o,u,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(u,f):!0}function wm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cm(t){Nl(t)}function Dm(t){console.error(t)}function Nm(t){Nl(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Um(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Lm(t){return t=_a(t),t.tag=3,t}function Om(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Um(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Um(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ax(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Si===null?Mf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),bf(t,o,u)),!1;case 22:return a.flags|=65536,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),bf(t,o,u)),!1}throw Error(r(435,a.tag))}return bf(t,o,u),Mf(),!1}if(At)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xu&&(t=Error(r(422),{cause:o}),js($n(t,a)))):(o!==xu&&(n=Error(r(423),{cause:o}),js($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=$n(o,a),u=Qu(t.stateNode,o,u),Cu(t,u),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:o});if(f=$n(f,a),fo===null?fo=[f]:fo.push(f),Kt!==4&&(Kt=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Qu(a.stateNode,o,t),Cu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lm(u),Om(u,t,a,o),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var Pm=Error(r(461)),mn=!1;function Sn(t,n,a,o){n.child=t===null?Tm(n,null,a,o):Wr(n,t.child,a,o)}function Bm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return lr(n),o=Ou(t,n,a,M,f,u),b=Pu(),t!==null&&!mn?(Bu(t,n,u),Xi(t,n,u)):(At&&b&&vu(n),n.flags|=1,Sn(t,n,o,u),n.child)}function zm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(t,n,f,o,u)):(t=fl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!sf(t,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(M,o)&&t.ref===n.ref)return Xi(t,n,u)}return n.flags|=1,t=Ii(f,o),t.ref=n.ref,t.return=n,n.child=t}function Im(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Hs(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,sf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Xi(t,n,u)}return Ju(t,n,a,o,u)}function Fm(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Hm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Nu(),Am(n);else return n.lanes=n.childLanes=536870912,Hm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(gl(n,f.cachePool),Ip(n,f),Ma(),n.memoizedState=null):(t!==null&&gl(n,null),Nu(),Ma());return Sn(t,n,u,a),n.child}function Hm(t,n,a,o){var u=Tu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&gl(n,null),Nu(),Am(n),t!==null&&Xs(t,n,o,!0),null}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ju(t,n,a,o,u){return lr(n),a=Ou(t,n,a,o,void 0,u),o=Pu(),t!==null&&!mn?(Bu(t,n,u),Xi(t,n,u)):(At&&o&&vu(n),n.flags|=1,Sn(t,n,a,u),n.child)}function km(t,n,a,o,u,f){return lr(n),n.updateQueue=null,a=Hp(n,o,a,u),Fp(t),o=Pu(),t!==null&&!mn?(Bu(t,n,f),Xi(t,n,f)):(At&&o&&vu(n),n.flags|=1,Sn(t,n,a,f),n.child)}function Gm(t,n,a,o,u){if(lr(n),n.stateNode===null){var f=Br,M=a.contextType;typeof M=="object"&&M!==null&&(f=An(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ru(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?An(M):Br,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Zu(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Ku.enqueueReplaceState(f,f.state,null),Js(n,o,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=fr(a,b);f.props=B;var $=f.context,fe=a.contextType;M=Br,typeof fe=="object"&&fe!==null&&(M=An(fe));var ve=a.getDerivedStateFromProps;fe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==M)&&wm(n,f,o,M),va=!1;var ne=n.memoizedState;f.state=ne,Js(n,o,f,u),Qs(),$=n.memoizedState,b||ne!==$||va?(typeof ve=="function"&&(Zu(n,a,ve,o),$=n.memoizedState),(B=va||Rm(n,a,B,o,ne,$,M))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=M,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,wu(t,n),M=n.memoizedProps,fe=fr(a,M),f.props=fe,ve=n.pendingProps,ne=f.context,$=a.contextType,B=Br,typeof $=="object"&&$!==null&&(B=An($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==ve||ne!==B)&&wm(n,f,o,B),va=!1,ne=n.memoizedState,f.state=ne,Js(n,o,f,u),Qs();var ie=n.memoizedState;M!==ve||ne!==ie||va||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof b=="function"&&(Zu(n,a,b,o),ie=n.memoizedState),(fe=va||Rm(n,a,fe,o,ne,ie,B)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ie,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ie,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=B,o=fe):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ll(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Wr(n,t.child,null,u),n.child=Wr(n,null,a,u)):Sn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Xi(t,n,u),t}function Vm(t,n,a,o){return Vs(),n.flags|=256,Sn(t,n,a,o),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Dp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function jm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Sa(n):Ma(),At){var b=Zt,B;if(B=b){e:{for(B=b,b=yi;B.nodeType!==8;){if(!b){b=null;break e}if(B=fi(B.nextSibling),B===null){b=null;break e}}b=B}b!==null?(n.memoizedState={dehydrated:b,treeContext:ir!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},B=Xn(18,null,null,0),B.stateNode=b,B.return=n,n.child=B,Nn=n,Zt=null,B=!0):B=!1}B||sr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ff(b)?n.lanes=32:n.lanes=536870912,null;ji(n)}return b=o.children,o=o.fallback,u?(Ma(),u=n.mode,b=Ol({mode:"hidden",children:b},u),o=nr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=ef(a),u.childLanes=tf(t,M,a),n.memoizedState=$u,o):(Sa(n),nf(n,b))}if(B=t.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=af(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),u=o.fallback,b=n.mode,o=Ol({mode:"visible",children:o.children},b),u=nr(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Wr(n,t.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=tf(t,M,a),n.memoizedState=$u,n=u);else if(Sa(n),Ff(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(r(419)),o.stack="",o.digest=M,js({value:o,source:null,stack:null}),n=af(t,n,a)}else if(mn||Xs(t,n,a,!1),M=(a&t.childLanes)!==0,mn||M){if(M=Vt,M!==null&&(o=a&-a,o=(o&42)!==0?1:kt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Pr(t,o),Kn(M,t,o),Pm;b.data==="$?"||Mf(),n=af(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Zt=fi(b.nextSibling),Nn=n,At=!0,rr=null,yi=!1,t!==null&&(ti[ni++]=Fi,ti[ni++]=Hi,ti[ni++]=ir,Fi=t.id,Hi=t.overflow,ir=n),n=nf(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,b=n.mode,B=t.child,$=B.sibling,o=Ii(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?u=Ii($,u):(u=nr(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=t.child.memoizedState,b===null?b=ef(a):(B=b.cachePool,B!==null?($=cn._currentValue,B=B.parent!==$?{parent:$,pool:$}:B):B=Dp(),b={baseLanes:b.baseLanes|a,cachePool:B}),u.memoizedState=b,u.childLanes=tf(t,M,a),n.memoizedState=$u,o):(Sa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function nf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function af(t,n,a){return Wr(n,t.child,null,a),t=nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Xm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Su(t.return,n,a)}function rf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Wm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(t,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,a,n);else if(t.tag===19)Xm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}rf(n,!0,a,null,f);break;case"together":rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Rx(t,n,a){switch(n.tag){case 3:Pe(n,n.stateNode.containerInfo),ga(n,cn,t.memoizedState.cache),Vs();break;case 27:case 5:Ke(n);break;case 4:Pe(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jm(t,n,a):(Sa(n),t=Xi(t,n,a),t!==null?t.sibling:null);Sa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Wm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Fm(t,n,a);case 24:ga(n,cn,t.memoizedState.cache)}return Xi(t,n,a)}function qm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!sf(t,a)&&(n.flags&128)===0)return mn=!1,Rx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,At&&(n.flags&1048576)!==0&&Ep(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")pu(o)?(t=fr(o,t),n.tag=1,n=Gm(null,n,o,t,a)):(n.tag=0,n=Ju(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=Bm(null,n,o,t,a);break e}else if(u===F){n.tag=14,n=zm(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(r(306,n,""))}}return n;case 0:return Ju(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),Gm(t,n,o,u,a);case 3:e:{if(Pe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,wu(t,n),Js(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,cn,o),o!==f.cache&&Mu(n,[cn],a,!0),Qs(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(t,n,o,a);break e}else if(o!==u){u=$n(Error(r(424)),n),js(u),n=Vm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=fi(t.firstChild),Nn=n,At=!0,rr=null,yi=!0,a=Tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),o===u){n=Xi(t,n,a);break e}Sn(t,n,o,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=Yl(Se.current).createElement(a),o[on]=n,o[xn]=t,En(o,a,t),nn(o),n.stateNode=o):n.memoizedState=Qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&At&&(o=n.stateNode=Yg(n.type,n.pendingProps,Se.current),Nn=n,yi=!0,u=Zt,Na(n.type)?(Hf=u,Zt=fi(o.firstChild)):Zt=u),Sn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=Zt)&&(o=ty(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Nn=n,Zt=fi(o.firstChild),yi=!1,u=!0):u=!1),u||sr(n)),Ke(n),u=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,o=f.children,Bf(u,f)?o=null:M!==null&&Bf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(t,n,xx,null,null,a),So._currentValue=u),Ll(t,n),Sn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Zt)&&(a=ny(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Nn=n,Zt=null,t=!0):t=!1),t||sr(n)),null;case 13:return jm(t,n,a);case 4:return Pe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Wr(n,null,o,a):Sn(t,n,o,a),n.child;case 11:return Bm(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Sn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=An(u),o=o(u),n.flags|=1,Sn(t,n,o,a),n.child;case 14:return zm(t,n,n.type,n.pendingProps,a);case 15:return Im(t,n,n.type,n.pendingProps,a);case 19:return Wm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Ol(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(t,n,a);case 24:return lr(n),o=An(cn),t===null?(u=Tu(),u===null&&(u=Vt,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ru(n),ga(n,cn,u)):((t.lanes&a)!==0&&(wu(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,cn,o)):(o=f.cache,ga(n,cn,o),o!==u.cache&&Mu(n,[cn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function Ym(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n0(n)){if(n=ii.current,n!==null&&((yt&4194048)===yt?Si!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==Si))throw Zs=Au,Np;t.flags|=8192}}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Kr|=n)}function ro(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function wx(t,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(cn),st(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ap())),Wt(n),null;case 26:return a=n.memoizedState,t===null?(Wi(n),a!==null?(Wt(n),Ym(n,a)):(Wt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Wi(n),Wt(n),Ym(n,a)):(Wt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Wi(n),Wt(n),n.flags&=-16777217),null;case 27:Ht(n),a=Se.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=J.current,Gs(n)?bp(n):(t=Yg(u,o,a),n.stateNode=t,Wi(n))}return Wt(n),null;case 5:if(Ht(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(t=J.current,Gs(n))bp(n);else{switch(u=Yl(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[on]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Se.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||kg(t.nodeValue,a)),t||sr(n)}else t=Yl(t).createTextNode(o),t[on]=n,n.stateNode=t}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),u=!1}else u=Ap(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Wt(n),null;case 4:return st(),t===null&&Nf(n.stateNode.containerInfo),Wt(n),null;case 10:return Gi(n.type),Wt(n),null;case 19:if(ye(un),u=n.memoizedState,u===null)return Wt(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ro(u,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Dl(t),f!==null){for(n.flags|=128,ro(u,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Mp(a,t),a=a.sibling;return Me(un,un.current&1|2),n.child}t=t.sibling}u.tail!==null&&nt()>Il&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304)}else{if(!o)if(t=Dl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!At)return Wt(n),null}else 2*nt()-u.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=nt(),n.sibling=null,t=un.current,Me(un,o?t&1|2:t&1),n):(Wt(n),null);case 22:case 23:return ji(n),Uu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(cn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Cx(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(cn),st(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 13:if(ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(un),null;case 4:return st(),null;case 10:return Gi(n.type),null;case 22:case 23:return ji(n),Uu(),t!==null&&ye(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(cn),null;case 25:return null;default:return null}}function Zm(t,n){switch(_u(n),n.tag){case 3:Gi(cn),st();break;case 26:case 27:case 5:Ht(n);break;case 4:st();break;case 13:ji(n);break;case 19:ye(un);break;case 10:Gi(n.type);break;case 22:case 23:ji(n),Uu(),t!==null&&ye(cr);break;case 24:Gi(cn)}}function so(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(b){Ft(n,n.return,b)}}function Ea(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=n;var B=a,$=b;try{$()}catch(fe){Ft(u,B,fe)}}}o=o.next}while(o!==f)}}catch(fe){Ft(n,n.return,fe)}}function Km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zp(n,a)}catch(o){Ft(t,t.return,o)}}}function Qm(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function Mi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function Jm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function of(t,n,a){try{var o=t.stateNode;Kx(o,t.type,a,n),o[xn]=n}catch(u){Ft(t,t.return,u)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ql));else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,a),t=t.sibling;t!==null;)cf(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function eg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[on]=t,n[xn]=a}catch(f){Ft(t,t.return,f)}}var qi=!1,en=!1,uf=!1,tg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Dx(t,n){if(t=t.containerInfo,Of=ec,t=dp(t),ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var M=0,b=-1,B=-1,$=0,fe=0,ve=t,ne=null;t:for(;;){for(var ie;ve!==a||u!==0&&ve.nodeType!==3||(b=M+u),ve!==f||o!==0&&ve.nodeType!==3||(B=M+o),ve.nodeType===3&&(M+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===t)break t;if(ne===a&&++$===u&&(b=M),ne===f&&++fe===o&&(B=M),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},ec=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var et=fr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(et,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){Ft(a,a.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function ng(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&so(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Ft(a,a.return,M)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ft(a,a.return,M)}}o&64&&Km(a),o&512&&oo(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(t,n)}catch(M){Ft(a,a.return,M)}}break;case 27:n===null&&o&4&&eg(a);case 26:case 5:ba(t,a),n===null&&o&4&&Jm(a),o&512&&oo(a,a.return);break;case 12:ba(t,a);break;case 13:ba(t,a),o&4&&rg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fx.bind(null,a),iy(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||en,u=qi;var f=en;qi=o,(en=n)&&!f?Ta(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),qi=u,en=f}break;case 30:break;default:ba(t,a)}}function ig(t){var n=t.alternate;n!==null&&(t.alternate=null,ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&da(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,In=!1;function Yi(t,n,a){for(a=a.child;a!==null;)ag(t,n,a),a=a.sibling}function ag(t,n,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:en||Mi(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Mi(a,n);var o=jt,u=In;Na(a.type)&&(jt=a.stateNode,In=!1),Yi(t,n,a),vo(a.stateNode),jt=o,In=u;break;case 5:en||Mi(a,n);case 6:if(o=jt,u=In,jt=null,Yi(t,n,a),jt=o,In=u,jt!==null)if(In)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:jt!==null&&(In?(t=jt,Wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),To(t)):Wg(jt,a.stateNode));break;case 4:o=jt,u=In,jt=a.stateNode.containerInfo,In=!0,Yi(t,n,a),jt=o,In=u;break;case 0:case 11:case 14:case 15:en||Ea(2,a,n),en||Ea(4,a,n),Yi(t,n,a);break;case 1:en||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qm(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Yi(t,n,a),en=o;break;default:Yi(t,n,a)}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){Ft(n,n.return,a)}}function Nx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new tg),n;default:throw Error(r(435,t.tag))}}function ff(t,n){var a=Nx(t);n.forEach(function(o){var u=Hx.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,M=n,b=M;e:for(;b!==null;){switch(b.tag){case 27:if(Na(b.type)){jt=b.stateNode,In=!1;break e}break;case 5:jt=b.stateNode,In=!1;break e;case 3:case 4:jt=b.stateNode.containerInfo,In=!0;break e}b=b.return}if(jt===null)throw Error(r(160));ag(f,M,u),jt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)sg(n,t),n=n.sibling}var ui=null;function sg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ea(3,t,t.return),so(3,t),Ea(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(en||a===null||Mi(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ui;if(Wn(n,t),qn(t),o&512&&(en||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[on]=t,nn(f),o=f;break e;case"link":var M=e0("link","href",u).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(f=M[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break t}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(M=e0("meta","content",u).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(f=M[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break t}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,nn(f),o=f}t.stateNode=o}else t0(u,t.type,t.stateNode);else t.stateNode=$g(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?t0(u,t.type,t.stateNode):$g(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(en||a===null||Mi(a,a.return)),a!==null&&o&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(en||a===null||Mi(a,a.return)),t.flags&32){u=t.stateNode;try{xi(u,"")}catch(ie){Ft(t,t.return,ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(uf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Ft(t,t.return,ie)}}break;case 3:if(Ql=null,u=ui,ui=Zl(n.containerInfo),Wn(n,t),ui=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(ie){Ft(t,t.return,ie)}uf&&(uf=!1,og(t));break;case 4:o=ui,ui=Zl(t.stateNode.containerInfo),Wn(n,t),qn(t),ui=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vf=nt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ff(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=qi,fe=en;if(qi=$||u,en=fe||B,Wn(n,t),en=fe,qi=$,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||qi||en||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=B.stateNode;var ve=B.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;b.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Ft(B,B.return,ie)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ie){Ft(B,B.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ff(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ff(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=lf(t);Bl(t,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(xi(M,""),a.flags&=-33);var b=lf(t);Bl(t,b,M);break;case 3:case 4:var B=a.stateNode.containerInfo,$=lf(t);cf(t,$,B);break;default:throw Error(r(161))}}catch(fe){Ft(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),dr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),dr(n);break;case 27:vo(n.stateNode);case 26:case 5:Mi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(u,f,a),so(4,f);break;case 1:if(Ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ft(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Bp(B[u],b)}catch($){Ft(o,o.return,$)}}a&&M&64&&Km(f),oo(f,f.return);break;case 27:eg(f);case 26:case 5:Ta(u,f,a),a&&o===null&&M&4&&Jm(f),oo(f,f.return);break;case 12:Ta(u,f,a);break;case 13:Ta(u,f,a),a&&M&4&&rg(u,f);break;case 22:f.memoizedState===null&&Ta(u,f,a),oo(f,f.return);break;case 30:break;default:Ta(u,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lg(t,n,a,o),n=n.sibling}function lg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&so(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,b=f.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ft(n,n.return,B)}}else Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,o):lo(t,n):f._visibility&2?Ei(t,n,a,o):(f._visibility|=2,qr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&df(M,n);break;case 24:Ei(t,n,a,o),u&2048&&hf(n.alternate,n);break;default:Ei(t,n,a,o)}}function qr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,b=a,B=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:qr(f,M,b,B,u),so(8,M);break;case 23:break;case 22:var fe=M.stateNode;M.memoizedState!==null?fe._visibility&2?qr(f,M,b,B,u):lo(f,M):(fe._visibility|=2,qr(f,M,b,B,u)),u&&$&2048&&df(M.alternate,M);break;case 24:qr(f,M,b,B,u),u&&$&2048&&hf(M.alternate,M);break;default:qr(f,M,b,B,u)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:lo(a,o),u&2048&&df(o.alternate,o);break;case 24:lo(a,o),u&2048&&hf(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function Yr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)cg(t),t=t.sibling}function cg(t){switch(t.tag){case 26:Yr(t),t.flags&co&&t.memoizedState!==null&&gy(ui,t.memoizedState,t.memoizedProps);break;case 5:Yr(t);break;case 3:case 4:var n=ui;ui=Zl(t.stateNode.containerInfo),Yr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Yr(t),co=n):Yr(t));break;default:Yr(t)}}function ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,t)}ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fg(t),t=t.sibling}function fg(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):uo(t);break;default:uo(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,t)}ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function dg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(ig(o),o===a){gn=null;break e}if(u!==null){u.return=f,gn=u;break e}gn=f}}}var Ux={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Lx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Vt=null,ht=null,yt=0,Dt=0,Yn=null,Aa=!1,Zr=!1,pf=!1,Zi=0,Kt=0,Ra=0,hr=0,mf=0,ai=0,Kr=0,fo=null,Fn=null,gf=!1,vf=0,Il=1/0,Fl=null,wa=null,Mn=0,Ca=null,Qr=null,Jr=0,_f=0,xf=null,hg=null,ho=0,yf=null;function Zn(){if((Ct&2)!==0&&yt!==0)return yt&-yt;if(z.T!==null){var t=Fr;return t!==0?t:Rf()}return Mt()}function pg(){ai===0&&(ai=(yt&536870912)===0||At?j():536870912);var t=ii.current;return t!==null&&(t.flags|=32),ai}function Kn(t,n,a){(t===Vt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&($r(t,0),Da(t,yt,ai,!1)),ge(t,a),((Ct&2)===0||t!==Vt)&&(t===Vt&&((Ct&2)===0&&(hr|=a),Kt===4&&Da(t,yt,ai,!1)),bi(t))}function mg(t,n,a){if((Ct&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||tt(t,n),u=o?Bx(t,n):Ef(t,n,!0),f=o;do{if(u===0){Zr&&!o&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ox(a)){u=Ef(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var b=t;u=fo;var B=b.current.memoizedState.isDehydrated;if(B&&($r(b,M).flags|=256),M=Ef(b,M,!1),M!==2){if(pf&&!B){b.errorRecoveryDisabledLanes|=f,hr|=f,u=4;break e}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){$r(t,0),Da(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ai,!Aa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=vf+300-nt(),10<u)){if(Da(o,n,ai,!Aa),lt(o,0,!0)!==0)break e;o.timeoutHandle=jg(gg.bind(null,o,a,Fn,Fl,gf,n,ai,hr,Kr,Aa,f,2,-0,0),u);break e}gg(o,a,Fn,Fl,gf,n,ai,hr,Kr,Aa,f,0,-0,0)}}break}while(!0);bi(t)}function gg(t,n,a,o,u,f,M,b,B,$,fe,ve,ne,ie){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:my},cg(n),ve=vy(),ve!==null)){t.cancelPendingCommit=ve(Eg.bind(null,t,n,f,a,o,u,M,b,B,fe,1,ne,ie)),Da(t,f,M,!$);return}Eg(t,n,f,a,o,u,M,b,B)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,o){n&=~mf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ce(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&Oe(t,a,n)}function Hl(){return(Ct&6)===0?(po(0),!1):!0}function Sf(){if(ht!==null){if(Dt===0)var t=ht.return;else t=ht,ki=or=null,zu(t),Xr=null,io=0,t=ht;for(;t!==null;)Zm(t.alternate,t),t=t.return;ht=null}}function $r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Jx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Sf(),Vt=t,ht=a=Ii(t.current,null),yt=n,Dt=0,Yn=null,Aa=!1,Zr=tt(t,n),pf=!1,Kr=ai=mf=hr=Ra=Kt=0,Fn=fo=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ce(o),f=1<<u;n|=t[u],o&=~f}return Zi=n,ll(),a}function vg(t,n){ct=null,z.H=Rl,n===Ys||n===vl?(n=Op(),Dt=3):n===Np?(n=Op(),Dt=4):Dt=n===Pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ht===null&&(Kt=1,Ul(t,$n(n,t.current)))}function _g(){var t=z.H;return z.H=Rl,t===null?Rl:t}function xg(){var t=z.A;return z.A=Ux,t}function Mf(){Kt=4,Aa||(yt&4194048)!==yt&&ii.current!==null||(Zr=!0),(Ra&134217727)===0&&(hr&134217727)===0||Vt===null||Da(Vt,yt,ai,!1)}function Ef(t,n,a){var o=Ct;Ct|=2;var u=_g(),f=xg();(Vt!==t||yt!==n)&&(Fl=null,$r(t,n)),n=!1;var M=Kt;e:do try{if(Dt!==0&&ht!==null){var b=ht,B=Yn;switch(Dt){case 8:Sf(),M=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=Dt;if(Dt=0,Yn=null,es(t,b,B,$),a&&Zr){M=0;break e}break;default:$=Dt,Dt=0,Yn=null,es(t,b,B,$)}}Px(),M=Kt;break}catch(fe){vg(t,fe)}while(!0);return n&&t.shellSuspendCounter++,ki=or=null,Ct=o,z.H=u,z.A=f,ht===null&&(Vt=null,yt=0,ll()),M}function Px(){for(;ht!==null;)yg(ht)}function Bx(t,n){var a=Ct;Ct|=2;var o=_g(),u=xg();Vt!==t||yt!==n?(Fl=null,Il=nt()+500,$r(t,n)):Zr=tt(t,n);e:do try{if(Dt!==0&&ht!==null){n=ht;var f=Yn;t:switch(Dt){case 1:Dt=0,Yn=null,es(t,n,f,1);break;case 2:case 9:if(Up(f)){Dt=0,Yn=null,Sg(n);break}n=function(){Dt!==2&&Dt!==9||Vt!==t||(Dt=7),bi(t)},f.then(n,n);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:Up(f)?(Dt=0,Yn=null,Sg(n)):(Dt=0,Yn=null,es(t,n,f,7));break;case 5:var M=null;switch(ht.tag){case 26:M=ht.memoizedState;case 5:case 27:var b=ht;if(!M||n0(M)){Dt=0,Yn=null;var B=b.sibling;if(B!==null)ht=B;else{var $=b.return;$!==null?(ht=$,kl($)):ht=null}break t}}Dt=0,Yn=null,es(t,n,f,5);break;case 6:Dt=0,Yn=null,es(t,n,f,6);break;case 8:Sf(),Kt=6;break e;default:throw Error(r(462))}}zx();break}catch(fe){vg(t,fe)}while(!0);return ki=or=null,z.H=o,z.A=u,Ct=a,ht!==null?0:(Vt=null,yt=0,ll(),Kt)}function zx(){for(;ht!==null&&!On();)yg(ht)}function yg(t){var n=qm(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?kl(t):ht=n}function Sg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:zu(n);default:Zm(a,n),n=ht=Mp(n,Zi),n=qm(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?kl(t):ht=n}function es(t,n,a,o){ki=or=null,zu(n),Xr=null,io=0;var u=n.return;try{if(Ax(t,u,n,a,yt)){Kt=1,Ul(t,$n(a,t.current)),ht=null;return}}catch(f){if(u!==null)throw ht=u,f;Kt=1,Ul(t,$n(a,t.current)),ht=null;return}n.flags&32768?(At||o===1?t=!0:Zr||(yt&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Mg(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){Mg(n,Aa);return}t=n.return;var a=wx(n.alternate,n,Zi);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);Kt===0&&(Kt=5)}function Mg(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);Kt=6,ht=null}function Eg(t,n,a,o,u,f,M,b,B){t.cancelPendingCommit=null;do Gl();while(Mn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=du,ze(t,a,f,M,b,B),t===Vt&&(ht=Vt=null,yt=0),Qr=n,Ca=t,Jr=a,_f=f,xf=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,kx(P,function(){return wg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,M=Ct,Ct|=4;try{Dx(t,n,a)}finally{Ct=M,K.p=u,z.T=o}}Mn=1,bg(),Tg(),Ag()}}function bg(){if(Mn===1){Mn=0;var t=Ca,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{sg(n,t);var f=Pf,M=dp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(M!==b&&b&&b.ownerDocument&&fp(b.ownerDocument.documentElement,b)){if(B!==null&&ou(b)){var $=B.start,fe=B.end;if(fe===void 0&&(fe=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(fe,b.value.length);else{var ve=b.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),et=b.textContent.length,Ze=Math.min(B.start,et),Pt=B.end===void 0?Ze:Math.min(B.end,et);!ie.extend&&Ze>Pt&&(M=Pt,Pt=Ze,Ze=M);var X=up(b,Ze),G=up(b,Pt);if(X&&G&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Q=ve.createRange();Q.setStart(X.node,X.offset),ie.removeAllRanges(),Ze>Pt?(ie.addRange(Q),ie.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ie.addRange(Q))}}}}for(ve=[],ie=b;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ve.length;b++){var he=ve[b];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}ec=!!Of,Pf=Of=null}finally{Ct=u,K.p=o,z.T=a}}t.current=n,Mn=2}}function Tg(){if(Mn===2){Mn=0;var t=Ca,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Ct;Ct|=4;try{ng(t,n.alternate,n)}finally{Ct=u,K.p=o,z.T=a}}Mn=3}}function Ag(){if(Mn===4||Mn===3){Mn=0,mt();var t=Ca,n=Qr,a=Jr,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Qr=Ca=null,Rg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(wa=null),tn(a),n=n.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,M=0;M<o.length;M++){var b=o[M];f(b.value,{componentStack:b.stack})}}finally{z.T=n,K.p=u}}(Jr&3)!==0&&Gl(),bi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===yf?ho++:(ho=0,yf=t):ho=0,po(0)}}function Rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Gl(t){return bg(),Tg(),Ag(),wg()}function wg(){if(Mn!==5)return!1;var t=Ca,n=_f;_f=0;var a=tn(Jr),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=xf,xf=null;var f=Ca,M=Jr;if(Mn=0,Qr=Ca=null,Jr=0,(Ct&6)!==0)throw Error(r(331));var b=Ct;if(Ct|=4,fg(f.current),lg(f,f.current,M,a),Ct=b,po(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{K.p=u,z.T=o,Rg(t,n)}}function Cg(t,n,a){n=$n(a,n),n=Qu(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(ge(t,2),bi(t))}function Ft(t,n,a){if(t.tag===3)Cg(t,t,a);else for(;n!==null;){if(n.tag===3){Cg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=$n(a,t),a=Lm(2),o=xa(n,a,2),o!==null&&(Om(a,o,n,t),ge(o,2),bi(o));break}}n=n.return}}function bf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Lx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(pf=!0,u.add(a),t=Ix.bind(null,t,n,a),n.then(t,t))}function Ix(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Vt===t&&(yt&a)===a&&(Kt===4||Kt===3&&(yt&62914560)===yt&&300>nt()-vf?(Ct&2)===0&&$r(t,0):mf|=a,Kr===yt&&(Kr=0)),bi(t)}function Dg(t,n){n===0&&(n=Le()),t=Pr(t,n),t!==null&&(ge(t,n),bi(t))}function Fx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(t,a)}function Hx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Dg(t,a)}function kx(t,n){return ut(t,n)}var Vl=null,ts=null,Tf=!1,jl=!1,Af=!1,pr=0;function bi(t){t!==ts&&t.next===null&&(ts===null?Vl=ts=t:ts=ts.next=t),jl=!0,Tf||(Tf=!0,Vx())}function po(t,n){if(!Af&&jl){Af=!0;do for(var a=!1,o=Vl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ce(42|t)+1)-1,f&=u&~(M&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Og(o,f))}else f=yt,f=lt(o,o===Vt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||tt(o,f)||(a=!0,Og(o,f));o=o.next}while(a);Af=!1}}function Gx(){Ng()}function Ng(){jl=Tf=!1;var t=0;pr!==0&&(Qx()&&(t=pr),pr=0);for(var n=nt(),a=null,o=Vl;o!==null;){var u=o.next,f=Ug(o,n);f===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(ts=a)):(a=o,(t!==0||(f&3)!==0)&&(jl=!0)),o=u}po(t)}function Ug(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-Ce(f),b=1<<M,B=u[M];B===-1?((b&a)===0||(b&o)!==0)&&(u[M]=Ut(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Vt,a=yt,a=lt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||tt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&H(o),tn(a)){case 2:case 8:a=Ge;break;case 32:a=P;break;case 268435456:a=te;break;default:a=P}return o=Lg.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function Lg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var o=yt;return o=lt(t,t===Vt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(mg(t,o,n),Ug(t,nt()),t.callbackNode!=null&&t.callbackNode===a?Lg.bind(null,t):null)}function Og(t,n){if(Gl())return null;mg(t,n,!0)}function Vx(){$x(function(){(Ct&6)!==0?ut(Nt,Gx):Ng()})}function Rf(){return pr===0&&(pr=j()),pr}function Pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tl(""+t)}function Bg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Pg((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Pg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var b=new rl("action","action",null,o,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var B=M?Bg(u,M):new FormData(u);Wu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=M?Bg(u,M):new FormData(u),Wu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var wf=0;wf<fu.length;wf++){var Cf=fu[wf],Xx=Cf.toLowerCase(),Wx=Cf[0].toUpperCase()+Cf.slice(1);ci(Xx,"on"+Wx)}ci(mp,"onAnimationEnd"),ci(gp,"onAnimationIteration"),ci(vp,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(cx,"onTransitionRun"),ci(ux,"onTransitionStart"),ci(fx,"onTransitionCancel"),ci(_p,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function zg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(fe){Nl(fe)}u.currentTarget=null,f=B}else for(M=0;M<o.length;M++){if(b=o[M],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(fe){Nl(fe)}u.currentTarget=null,f=B}}}}function pt(t,n){var a=n[Ka];a===void 0&&(a=n[Ka]=new Set);var o=t+"__bubble";a.has(o)||(Ig(n,t,2,!1),a.add(o))}function Df(t,n,a){var o=0;n&&(o|=4),Ig(a,t,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[Xl]){t[Xl]=!0,$o.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Df(a,!1,t),Df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Df("selectionchange",!1,n))}}function Ig(t,n,a,o){switch(l0(n)){case 2:var u=yy;break;case 8:u=Sy;break;default:u=Xf}a=u.bind(null,n,a,t),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Uf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=Ui(b),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=f=M;continue e}b=b.parentNode}}o=o.return}Xh(function(){var $=f,fe=Kc(a),ve=[];e:{var ne=xp.get(t);if(ne!==void 0){var ie=rl,et=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ie=k_;break;case"focusin":et="focus",ie=nu;break;case"focusout":et="blur",ie=nu;break;case"beforeblur":case"afterblur":ie=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=C_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=j_;break;case mp:case gp:case vp:ie=U_;break;case _p:ie=W_;break;case"scroll":case"scrollend":ie=R_;break;case"wheel":ie=Y_;break;case"copy":case"cut":case"paste":ie=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Kh;break;case"toggle":case"beforetoggle":ie=K_}var Ze=(n&4)!==0,Pt=!Ze&&(t==="scroll"||t==="scrollend"),X=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var G=$,Q;G!==null;){var he=G;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||X===null||(he=Ls(G,X),he!=null&&Ze.push(go(G,he,Q))),Pt)break;G=G.return}0<Ze.length&&(ne=new ie(ne,et,null,a,fe),ve.push({event:ne,listeners:Ze}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==Zc&&(et=a.relatedTarget||a.fromElement)&&(Ui(et)||et[Pn]))break e;if((ie||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(et=a.relatedTarget||a.toElement,ie=$,et=et?Ui(et):null,et!==null&&(Pt=c(et),Ze=et.tag,et!==Pt||Ze!==5&&Ze!==27&&Ze!==6)&&(et=null)):(ie=null,et=$),ie!==et)){if(Ze=Yh,he="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Kh,he="onPointerLeave",X="onPointerEnter",G="pointer"),Pt=ie==null?ne:Ja(ie),Q=et==null?ne:Ja(et),ne=new Ze(he,G+"leave",ie,a,fe),ne.target=Pt,ne.relatedTarget=Q,he=null,Ui(fe)===$&&(Ze=new Ze(X,G+"enter",et,a,fe),Ze.target=Q,Ze.relatedTarget=Pt,he=Ze),Pt=he,ie&&et)t:{for(Ze=ie,X=et,G=0,Q=Ze;Q;Q=ns(Q))G++;for(Q=0,he=X;he;he=ns(he))Q++;for(;0<G-Q;)Ze=ns(Ze),G--;for(;0<Q-G;)X=ns(X),Q--;for(;G--;){if(Ze===X||X!==null&&Ze===X.alternate)break t;Ze=ns(Ze),X=ns(X)}Ze=null}else Ze=null;ie!==null&&Fg(ve,ne,ie,Ze,!1),et!==null&&Pt!==null&&Fg(ve,Pt,et,Ze,!0)}}e:{if(ne=$?Ja($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var ke=ap;else if(np(ne))if(rp)ke=sx;else{ke=ax;var ft=ix}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Yc($.elementType)&&(ke=ap):ke=rx;if(ke&&(ke=ke(t,$))){ip(ve,ke,a,fe);break e}ft&&ft(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Tn(ne,"number",ne.value)}switch(ft=$?Ja($):window,t){case"focusin":(np(ft)||ft.contentEditable==="true")&&(Ur=ft,lu=$,ks=null);break;case"focusout":ks=lu=Ur=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,hp(ve,a,fe);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":hp(ve,a,fe)}var Ve;if(au)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Nr?ep(t,a)&&(Je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(Qh&&a.locale!=="ko"&&(Nr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Nr&&(Ve=Wh()):(ma=fe,$c="value"in ma?ma.value:ma.textContent,Nr=!0)),ft=Wl($,Je),0<ft.length&&(Je=new Zh(Je,t,null,a,fe),ve.push({event:Je,listeners:ft}),Ve?Je.data=Ve:(Ve=tp(a),Ve!==null&&(Je.data=Ve)))),(Ve=J_?$_(t,a):ex(t,a))&&(Je=Wl($,"onBeforeInput"),0<Je.length&&(ft=new Zh("onBeforeInput","beforeinput",null,a,fe),ve.push({event:ft,listeners:Je}),ft.data=Ve)),jx(ve,t,$,a,fe)}zg(ve,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ls(t,a),u!=null&&o.unshift(go(t,u,f)),u=Ls(t,n),u!=null&&o.push(go(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fg(t,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||$===null||(B=$,u?($=Ls(a,f),$!=null&&M.unshift(go(a,$,B))):u||($=Ls(a,f),$!=null&&M.push(go(a,$,B)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var Yx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function Hg(t){return(typeof t=="string"?t:""+t).replace(Yx,`
`).replace(Zx,"")}function kg(t,n){return n=Hg(n),Hg(t)===n}function ql(){}function Ot(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(t,""+o);break;case"className":De(t,"class",o);break;case"tabIndex":De(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,o);break;case"style":Vh(t,o,f);break;case"data":if(n!=="object"){De(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ot(t,n,"name",u.name,u,null),Ot(t,n,"formEncType",u.formEncType,u,null),Ot(t,n,"formMethod",u.formMethod,u,null),Ot(t,n,"formTarget",u.formTarget,u,null)):(Ot(t,n,"encType",u.encType,u,null),Ot(t,n,"method",u.method,u,null),Ot(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ql);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=tl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":Ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ne(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ne(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ne(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ne(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=T_.get(a)||a,Te(t,a,o))}}function Lf(t,n,a,o,u,f){switch(a){case"style":Vh(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!el.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Te(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ot(t,n,f,M,a,null)}}u&&Ot(t,n,"srcSet",a.srcSet,a,null),o&&Ot(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var b=f=M=u=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":M=fe;break;case"checked":B=fe;break;case"defaultChecked":$=fe;break;case"value":f=fe;break;case"defaultValue":b=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Ot(t,n,o,fe,a,null)}}It(t,f,b,B,$,M,u,!1),Yt(t);return;case"select":pt("invalid",t),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Ot(t,n,u,b,a,null)}n=f,a=M,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":pt("invalid",t),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ot(t,n,M,b,a,null)}yn(t,o,u,f),Yt(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(t,n,B,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<mo.length;o++)pt(mo[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ot(t,n,$,o,a,null)}return;default:if(Yc(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Lf(t,n,fe,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ot(t,n,b,o,a,null))}function Kx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,b=null,B=null,$=null,fe=null;for(ie in a){var ve=a[ie];if(a.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(ie)||Ot(t,n,ie,null,o,ve)}}for(var ne in o){var ie=o[ne];if(ve=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":f=ie;break;case"name":u=ie;break;case"checked":$=ie;break;case"defaultChecked":fe=ie;break;case"value":M=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==ve&&Ot(t,n,ne,ie,o,ve)}}Pi(t,M,b,B,$,fe,f,u);return;case"select":ie=M=b=ne=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ie=B;default:o.hasOwnProperty(f)||Ot(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ne=f;break;case"defaultValue":b=f;break;case"multiple":M=f;default:f!==B&&Ot(t,n,u,f,o,B)}n=b,a=M,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ot(t,n,b,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":ne=u;break;case"defaultValue":ie=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ot(t,n,M,u,o,f)}pn(t,ne,ie);return;case"option":for(var et in a)if(ne=a[et],a.hasOwnProperty(et)&&ne!=null&&!o.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ot(t,n,et,null,o,ne)}for(B in o)if(ne=o[B],ie=a[B],o.hasOwnProperty(B)&&ne!==ie&&(ne!=null||ie!=null))switch(B){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ot(t,n,B,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in a)ne=a[Ze],a.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&Ot(t,n,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=a[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Ot(t,n,$,ne,o,ie)}return;default:if(Yc(n)){for(var Pt in a)ne=a[Pt],a.hasOwnProperty(Pt)&&ne!==void 0&&!o.hasOwnProperty(Pt)&&Lf(t,n,Pt,void 0,o,ne);for(fe in o)ne=o[fe],ie=a[fe],!o.hasOwnProperty(fe)||ne===ie||ne===void 0&&ie===void 0||Lf(t,n,fe,ne,o,ie);return}}for(var X in a)ne=a[X],a.hasOwnProperty(X)&&ne!=null&&!o.hasOwnProperty(X)&&Ot(t,n,X,null,o,ne);for(ve in o)ne=o[ve],ie=a[ve],!o.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Ot(t,n,ve,ne,o,ie)}var Of=null,Pf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Gg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Qx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(t){return Xg.resolve(null).then(t).catch(ey)}:jg;function ey(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Wg(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&vo(M.documentElement),a&2&&vo(M.body),a&4)for(a=M.head,vo(a),M=a.firstChild;M;){var b=M.nextSibling,B=M.nodeName;M[fa]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(u===0){t.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ty(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function ny(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function iy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Hf=null;function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);da(t)}var ri=new Map,Zg=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=K.d;K.d={f:ay,r:ry,D:sy,C:oy,L:ly,m:cy,X:fy,S:uy,M:dy};function ay(){var t=Ki.f(),n=Hl();return t||n}function ry(t){var n=Li(t);n!==null&&n.tag===5&&n.type==="form"?mm(n):Ki.r(t)}var is=typeof document>"u"?null:document;function Kg(t,n,a){var o=is;if(o&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zg.has(u)||(Zg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",t),nn(n),o.head.appendChild(n)))}}function sy(t){Ki.D(t),Kg("dns-prefetch",t,null)}function oy(t,n){Ki.C(t,n),Kg("preconnect",t,n)}function ly(t,n,a){Ki.L(t,n,a);var o=is;if(o&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var f=u;switch(n){case"style":f=as(t);break;case"script":f=rs(t)}ri.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(_o(f))||n==="script"&&o.querySelector(xo(f))||(n=o.createElement("link"),En(n,"link",t),nn(n),o.head.appendChild(n)))}}function cy(t,n){Ki.m(t,n);var a=is;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(t)}if(!ri.has(f)&&(t=g({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}o=a.createElement("link"),En(o,"link",t),nn(o),a.head.appendChild(o)}}}function uy(t,n,a){Ki.S(t,n,a);var o=is;if(o&&t){var u=ha(o).hoistableStyles,f=as(t);n=n||"default";var M=u.get(f);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(_o(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&kf(t,a);var B=M=o.createElement("link");nn(B),En(B,"link",t),B._p=new Promise(function($,fe){B.onload=$,B.onerror=fe}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Kl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(f,M)}}}function fy(t,n){Ki.X(t,n);var a=is;if(a&&t){var o=ha(a).hoistableScripts,u=rs(t),f=o.get(u);f||(f=a.querySelector(xo(u)),f||(t=g({src:t,async:!0},n),(n=ri.get(u))&&Gf(t,n),f=a.createElement("script"),nn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function dy(t,n){Ki.M(t,n);var a=is;if(a&&t){var o=ha(a).hoistableScripts,u=rs(t),f=o.get(u);f||(f=a.querySelector(xo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&Gf(t,n),f=a.createElement("script"),nn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Qg(t,n,a,o){var u=(u=Se.current)?Zl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=as(a.href);var f=ha(u).hoistableStyles,M=f.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=u.querySelector(_o(t)))&&!f._p&&(M.instance=f,M.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||hy(u,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function as(t){return'href="'+Gt(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Jg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function hy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),nn(n),t.head.appendChild(n))}function rs(t){return'[src="'+Gt(t)+'"]'}function xo(t){return"script[async]"+t}function $g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),En(o,"style",u),Kl(o,a.precedence,t),n.instance=o;case"stylesheet":u=as(a.href);var f=t.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=Jg(a),(u=ri.get(u))&&kf(o,u),f=(t.ownerDocument||t).createElement("link"),nn(f);var M=f;return M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),En(f,"link",o),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=rs(a.src),(u=t.querySelector(xo(f)))?(n.instance=u,nn(u),u):(o=a,(u=ri.get(f))&&(o=g({},a),Gf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),En(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Kl(o,a.precedence,t));return n.instance}function Kl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function e0(t,n,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[fa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var b=o.get(M);b?b.push(f):o.set(M,[f])}}return o}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function py(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var yo=null;function my(){}function gy(t,n,a){if(yo===null)throw Error(r(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=as(a.href),f=t.querySelector(_o(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Jl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=t.ownerDocument||t,a=Jg(a),(u=ri.get(u))&&kf(a,u),f=f.createElement("link"),nn(f);var M=f;M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Jl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function vy(){if(yo===null)throw Error(r(475));var t=yo;return t.stylesheets&&t.count===0&&Vf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Vf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function Vf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(_y,t),$l=null,Jl.call(t))}function _y(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var o=a.get(null);else{a=new Map,$l.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function xy(t,n,a,o,u,f,M,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ce(0),this.hiddenUpdates=ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function i0(t,n,a,o,u,f,M,b,B,$,fe,ve){return t=new xy(t,n,a,M,b,B,$,ve),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=Eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ru(f),t}function a0(t){return t?(t=Br,t):Br}function r0(t,n,a,o,u,f){u=a0(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(t,o,n),a!==null&&(Kn(a,t,n),Ks(a,t,n))}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function o0(t){if(t.tag===13){var n=Pr(t,67108864);n!==null&&Kn(n,t,67108864),jf(t,67108864)}}var ec=!0;function yy(t,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=2,Xf(t,n,a,o)}finally{K.p=f,z.T=u}}function Sy(t,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=8,Xf(t,n,a,o)}finally{K.p=f,z.T=u}}function Xf(t,n,a,o){if(ec){var u=Wf(o);if(u===null)Uf(t,n,o,tc,a),c0(t,o);else if(Ey(u,t,n,a,o))o.stopPropagation();else if(c0(t,o),n&4&&-1<My.indexOf(t)){for(;u!==null;){var f=Li(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Be(f.pendingLanes);if(M!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var B=1<<31-Ce(M);b.entanglements[1]|=B,M&=~B}bi(f),(Ct&6)===0&&(Il=nt()+500,po(0))}}break;case 13:b=Pr(f,2),b!==null&&Kn(b,f,2),Hl(),jf(f,2)}if(f=Wf(o),f===null&&Uf(t,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Uf(t,n,o,null,a)}}function Wf(t){return t=Kc(t),qf(t)}var tc=null;function qf(t){if(tc=null,t=Ui(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Nt:return 2;case Ge:return 8;case P:case A:return 32;case te:return 268435456;default:return 32}default:return 32}}var Yf=!1,Ua=null,La=null,Oa=null,Mo=new Map,Eo=new Map,Pa=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function bo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Li(n),n!==null&&o0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ey(t,n,a,o,u){switch(n){case"focusin":return Ua=bo(Ua,t,n,a,o,u),!0;case"dragenter":return La=bo(La,t,n,a,o,u),!0;case"mouseover":return Oa=bo(Oa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Mo.set(f,bo(Mo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Eo.set(f,bo(Eo.get(f)||null,t,n,a,o,u)),!0}return!1}function u0(t){var n=Ui(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vn(t.priority,function(){if(a.tag===13){var o=Zn();o=kt(o);var u=Pr(a,o);u!==null&&Kn(u,a,o),jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=Li(a),n!==null&&o0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){nc(t)&&a.delete(n)}function by(){Yf=!1,Ua!==null&&nc(Ua)&&(Ua=null),La!==null&&nc(La)&&(La=null),Oa!==null&&nc(Oa)&&(Oa=null),Mo.forEach(f0),Eo.forEach(f0)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,by)))}var ac=null;function d0(t){ac!==t&&(ac=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var f=Li(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function To(t){function n(B){return ic(B,t)}Ua!==null&&ic(Ua,t),La!==null&&ic(La,t),Oa!==null&&ic(Oa,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)u0(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[xn]||null;if(typeof f=="function")M||d0(a);else if(M){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[xn]||null)b=M.formAction;else if(qf(u)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),d0(a)}}}function Zf(t){this._internalRoot=t}rc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();r0(a,o,t,n,null,null)},rc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),Hl(),n[Pn]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&u0(t)}};var h0=e.version;if(h0!=="19.1.0")throw Error(r(527,h0,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Ty={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{de=sc.inject(Ty),Ie=sc}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Cm,f=Dm,M=Nm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=i0(t,1,!1,null,null,a,o,u,f,M,b,null),t[Pn]=n.current,Nf(t),new Zf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Cm,M=Dm,b=Nm,B=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=i0(t,1,!0,n,a??null,o,u,f,M,b,B,$),n.context=a0(null),a=n.current,o=Zn(),o=kt(o),u=_a(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,ge(n,a),bi(n),t[Pn]=n.current,Nf(t),new rc(n)},Ro.version="19.1.0",Ro}var E0;function By(){if(E0)return Jf.exports;E0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Jf.exports=Py(),Jf.exports}var zy=By();const Iy=wv(zy);var wo={},b0;function Fy(){if(b0)return wo;b0=1,Object.defineProperty(wo,"__esModule",{value:!0}),wo.parse=d,wo.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,S){const E=new c,R=x.length;if(R<2)return E;const y=(S==null?void 0:S.decode)||g;let v=0;do{const L=x.indexOf("=",v);if(L===-1)break;const D=x.indexOf(";",v),N=D===-1?R:D;if(L>N){v=x.lastIndexOf(";",L-1)+1;continue}const I=h(x,v,L),k=p(x,L,I),F=x.slice(I,k);if(E[F]===void 0){let W=h(x,L+1,N),U=p(x,N,W);const C=y(x.slice(W,U));E[F]=C}v=N+1}while(v<R);return E}function h(x,S,E){do{const R=x.charCodeAt(S);if(R!==32&&R!==9)return S}while(++S<E);return E}function p(x,S,E){for(;S>E;){const R=x.charCodeAt(--S);if(R!==32&&R!==9)return S+1}return E}function m(x,S,E){const R=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(x))throw new TypeError(`argument name is invalid: ${x}`);const y=R(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=x+"="+y;if(!E)return v;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);v+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);v+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);v+="; Path="+E.path}if(E.expires){if(!_(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);v+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(v+="; HttpOnly"),E.secure&&(v+="; Secure"),E.partitioned&&(v+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return v}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function _(x){return l.call(x)==="[object Date]"}return wo}Fy();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var T0="popstate";function Hy(s={}){function e(r,l){let{pathname:c,search:d,hash:h}=r.location;return Pd("",{pathname:c,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Bo(l)}return Gy(e,i,null,s)}function qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ci(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function A0(s,e){return{usr:s.state,key:s.key,idx:e}}function Pd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Cs(e):e,state:i,key:e&&e.key||r||ky()}}function Bo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Cs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Gy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,d=l.history,h="POP",p=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function _(){h="POP";let y=g(),v=y==null?null:y-m;m=y,p&&p({action:h,location:R.location,delta:v})}function x(y,v){h="PUSH";let L=Pd(R.location,y,v);m=g()+1;let D=A0(L,m),N=R.createHref(L);try{d.pushState(D,"",N)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(N)}c&&p&&p({action:h,location:R.location,delta:1})}function S(y,v){h="REPLACE";let L=Pd(R.location,y,v);m=g();let D=A0(L,m),N=R.createHref(L);d.replaceState(D,"",N),c&&p&&p({action:h,location:R.location,delta:0})}function E(y){let v=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof y=="string"?y:Bo(y);return L=L.replace(/ $/,"%20"),qt(v,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,v)}let R={get action(){return h},get location(){return s(l,d)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(T0,_),p=y,()=>{l.removeEventListener(T0,_),p=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let v=E(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return d.go(y)}};return R}function Cv(s,e,i="/"){return Vy(s,e,i,!1)}function Vy(s,e,i,r){let l=typeof e=="string"?Cs(e):e,c=la(l.pathname||"/",i);if(c==null)return null;let d=Dv(s);jy(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=tS(c);h=$y(d[p],m,r)}return h}function Dv(s,e=[],i=[],r=""){let l=(c,d,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};p.relativePath.startsWith("/")&&(qt(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=sa([r,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Dv(c.children,e,g,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:Qy(m,c.index),routesMeta:g})};return s.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,d);else for(let p of Nv(c.path))l(c,d,p)}),e}function Nv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let d=Nv(r.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...d),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function jy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Jy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Xy=/^:[\w-]+$/,Wy=3,qy=2,Yy=1,Zy=10,Ky=-2,R0=s=>s==="*";function Qy(s,e){let i=s.split("/"),r=i.length;return i.some(R0)&&(r+=Ky),e&&(r+=qy),i.filter(l=>!R0(l)).reduce((l,c)=>l+(Xy.test(c)?Wy:c===""?Yy:Zy),r)}function Jy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function $y(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",d=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=Hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&i&&!r[r.length-1].route.index&&(_=Hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),d.push({params:l,pathname:sa([c,_.pathname]),pathnameBase:rS(sa([c,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(c=sa([c,_.pathnameBase]))}return d}function Hc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=eS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let E=h[x]||"";d=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[x];return _&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:s}}function eS(s,e=!1,i=!0){Ci(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function tS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ci(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function la(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function nS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Cs(s):s;return{pathname:i?i.startsWith("/")?i:iS(i,e):e,search:sS(r),hash:oS(l)}}function iS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function nd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Uv(s){let e=aS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Lv(s,e,i,r=!1){let l;typeof s=="string"?l=Cs(s):(l={...s},qt(!l.pathname||!l.pathname.includes("?"),nd("?","pathname","search",l)),qt(!l.pathname||!l.pathname.includes("#"),nd("#","pathname","hash",l)),qt(!l.search||!l.search.includes("#"),nd("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,h;if(d==null)h=i;else{let _=e.length-1;if(!r&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}h=_>=0?e[_]:"/"}let p=nS(l,h),m=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var sa=s=>s.join("/").replace(/\/\/+/g,"/"),rS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),sS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,oS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function lS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Ov=["POST","PUT","PATCH","DELETE"];new Set(Ov);var cS=["GET",...Ov];new Set(cS);var Ds=le.createContext(null);Ds.displayName="DataRouter";var jc=le.createContext(null);jc.displayName="DataRouterState";var Pv=le.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var uS=le.createContext(new Map);uS.displayName="Fetchers";var fS=le.createContext(null);fS.displayName="Await";var Ni=le.createContext(null);Ni.displayName="Navigation";var ko=le.createContext(null);ko.displayName="Location";var ua=le.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Th=le.createContext(null);Th.displayName="RouteError";function dS(s,{relative:e}={}){qt(Go(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=le.useContext(Ni),{hash:l,pathname:c,search:d}=Vo(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:sa([i,c])),r.createHref({pathname:h,search:d,hash:l})}function Go(){return le.useContext(ko)!=null}function Ya(){return qt(Go(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(ko).location}var Bv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zv(s){le.useContext(Ni).static||le.useLayoutEffect(s)}function hS(){let{isDataRoute:s}=le.useContext(ua);return s?AS():pS()}function pS(){qt(Go(),"useNavigate() may be used only in the context of a <Router> component.");let s=le.useContext(Ds),{basename:e,navigator:i}=le.useContext(Ni),{matches:r}=le.useContext(ua),{pathname:l}=Ya(),c=JSON.stringify(Uv(r)),d=le.useRef(!1);return zv(()=>{d.current=!0}),le.useCallback((p,m={})=>{if(Ci(d.current,Bv),!d.current)return;if(typeof p=="number"){i.go(p);return}let g=Lv(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:sa([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,s])}le.createContext(null);function Vo(s,{relative:e}={}){let{matches:i}=le.useContext(ua),{pathname:r}=Ya(),l=JSON.stringify(Uv(i));return le.useMemo(()=>Lv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function mS(s,e){return Iv(s,e)}function Iv(s,e,i,r){var L;qt(Go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=le.useContext(Ni),{matches:d}=le.useContext(ua),h=d[d.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let D=_&&_.path||"";Fv(m,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Ya(),S;if(e){let D=typeof e=="string"?Cs(e):e;qt(g==="/"||((L=D.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=x;let E=S.pathname||"/",R=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");R="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:Cv(s,{pathname:R});Ci(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ci(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=yS(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:sa([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:sa([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,i,r);return e&&v?le.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function gS(){let s=TS(),e=lS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:c},"ErrorBoundary")," or"," ",le.createElement("code",{style:c},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),i?le.createElement("pre",{style:l},i):null,d)}var vS=le.createElement(gS,null),_S=class extends le.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?le.createElement(ua.Provider,{value:this.props.routeContext},le.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xS({routeContext:s,match:e,children:i}){let r=le.useContext(Ds);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(ua.Provider,{value:s},i)}function yS(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,h=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:_}=i,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||x){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let _,x=!1,S=null,E=null;i&&(_=c&&m.route.id?c[m.route.id]:void 0,S=m.route.errorElement||vS,d&&(h<0&&g===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):h===g&&(x=!0,E=m.route.hydrateFallbackElement||null)));let R=e.concat(l.slice(0,g+1)),y=()=>{let v;return _?v=S:x?v=E:m.route.Component?v=le.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=p,le.createElement(xS,{match:m,routeContext:{outlet:p,matches:R,isDataRoute:i!=null},children:v})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?le.createElement(_S,{location:i.location,revalidation:i.revalidation,component:S,error:_,children:y(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):y()},null)}function Ah(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SS(s){let e=le.useContext(Ds);return qt(e,Ah(s)),e}function MS(s){let e=le.useContext(jc);return qt(e,Ah(s)),e}function ES(s){let e=le.useContext(ua);return qt(e,Ah(s)),e}function Rh(s){let e=ES(s),i=e.matches[e.matches.length-1];return qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function bS(){return Rh("useRouteId")}function TS(){var r;let s=le.useContext(Th),e=MS("useRouteError"),i=Rh("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function AS(){let{router:s}=SS("useNavigate"),e=Rh("useNavigate"),i=le.useRef(!1);return zv(()=>{i.current=!0}),le.useCallback(async(l,c={})=>{Ci(i.current,Bv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var w0={};function Fv(s,e,i){!e&&!w0[s]&&(w0[s]=!0,Ci(!1,i))}le.memo(RS);function RS({routes:s,future:e,state:i}){return Iv(s,void 0,i,e)}function ys(s){qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wS({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){qt(!Go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=le.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=Cs(i));let{pathname:p="/",search:m="",hash:g="",state:_=null,key:x="default"}=i,S=le.useMemo(()=>{let E=la(p,d);return E==null?null:{location:{pathname:E,search:m,hash:g,state:_,key:x},navigationType:r}},[d,p,m,g,_,x,r]);return Ci(S!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:le.createElement(Ni.Provider,{value:h},le.createElement(ko.Provider,{children:e,value:S}))}function CS({children:s,location:e}){return mS(Bd(s),e)}function Bd(s,e=[]){let i=[];return le.Children.forEach(s,(r,l)=>{if(!le.isValidElement(r))return;let c=[...e,l];if(r.type===le.Fragment){i.push.apply(i,Bd(r.props.children,c));return}qt(r.type===ys,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Bd(r.props.children,c)),i.push(d)}),i}var Nc="get",Uc="application/x-www-form-urlencoded";function Xc(s){return s!=null&&typeof s.tagName=="string"}function DS(s){return Xc(s)&&s.tagName.toLowerCase()==="button"}function NS(s){return Xc(s)&&s.tagName.toLowerCase()==="form"}function US(s){return Xc(s)&&s.tagName.toLowerCase()==="input"}function LS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function OS(s,e){return s.button===0&&(!e||e==="_self")&&!LS(s)}var oc=null;function PS(){if(oc===null)try{new FormData(document.createElement("form"),0),oc=!1}catch{oc=!0}return oc}var BS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function id(s){return s!=null&&!BS.has(s)?(Ci(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uc}"`),null):s}function zS(s,e){let i,r,l,c,d;if(NS(s)){let h=s.getAttribute("action");r=h?la(h,e):null,i=s.getAttribute("method")||Nc,l=id(s.getAttribute("enctype"))||Uc,c=new FormData(s)}else if(DS(s)||US(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?la(p,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Nc,l=id(s.getAttribute("formenctype"))||id(h.getAttribute("enctype"))||Uc,c=new FormData(h,s),!PS()){let{name:m,type:g,value:_}=s;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,_)}}else{if(Xc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nc,r=null,l=Uc,d=s}return c&&l==="text/plain"&&(d=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:d}}function wh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function IS(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function HS(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await IS(c,i);return d.links?d.links():[]}return[]}));return jS(r.flat(1).filter(FS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function C0(s,e,i,r,l,c){let d=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,m)=>d(p,m)||h(p,m)):c==="data"?e.filter((p,m)=>{var _;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function kS(s,e,{includeHydrateFallback:i}={}){return GS(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function GS(s){return[...new Set(s)]}function VS(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function jS(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(VS(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function XS(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&la(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Hv(){let s=le.useContext(Ds);return wh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function WS(){let s=le.useContext(jc);return wh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ch=le.createContext(void 0);Ch.displayName="FrameworkContext";function kv(){let s=le.useContext(Ch);return wh(s,"You must render this element inside a <HydratedRouter> element"),s}function qS(s,e){let i=le.useContext(Ch),[r,l]=le.useState(!1),[c,d]=le.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=le.useRef(null);le.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let R=v=>{v.forEach(L=>{d(L.isIntersecting)})},y=new IntersectionObserver(R,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),le.useEffect(()=>{if(r){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:Co(h,S),onBlur:Co(p,E),onMouseEnter:Co(m,S),onMouseLeave:Co(g,E),onTouchStart:Co(_,S)}]:[!1,x,{}]}function Co(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function YS({page:s,...e}){let{router:i}=Hv(),r=le.useMemo(()=>Cv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?le.createElement(KS,{page:s,matches:r,...e}):null}function ZS(s){let{manifest:e,routeModules:i}=kv(),[r,l]=le.useState([]);return le.useEffect(()=>{let c=!1;return HS(s,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[s,e,i]),r}function KS({page:s,matches:e,...i}){let r=Ya(),{manifest:l,routeModules:c}=kv(),{basename:d}=Hv(),{loaderData:h,matches:p}=WS(),m=le.useMemo(()=>C0(s,e,p,l,r,"data"),[s,e,p,l,r]),g=le.useMemo(()=>C0(s,e,p,l,r,"assets"),[s,e,p,l,r]),_=le.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,R=!1;if(e.forEach(v=>{var D;let L=l.routes[v.route.id];!L||!L.hasLoader||(!m.some(N=>N.route.id===v.route.id)&&v.route.id in h&&((D=c[v.route.id])!=null&&D.shouldRevalidate)||L.hasClientLoader?R=!0:E.add(v.route.id))}),E.size===0)return[];let y=XS(s,d);return R&&E.size>0&&y.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[d,h,r,l,m,e,s,c]),x=le.useMemo(()=>kS(g,l),[g,l]),S=ZS(g);return le.createElement(le.Fragment,null,_.map(E=>le.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>le.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:R})=>le.createElement("link",{key:E,...R})))}function QS(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gv&&(window.__reactRouterVersion="7.5.0")}catch{}function JS({basename:s,children:e,window:i}){let r=le.useRef();r.current==null&&(r.current=Hy({window:i,v5Compat:!0}));let l=r.current,[c,d]=le.useState({action:l.action,location:l.location}),h=le.useCallback(p=>{le.startTransition(()=>d(p))},[d]);return le.useLayoutEffect(()=>l.listen(h),[l,h]),le.createElement(wS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ln=le.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:d,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,...x},S){let{basename:E}=le.useContext(Ni),R=typeof m=="string"&&Vv.test(m),y,v=!1;if(typeof m=="string"&&R&&(y=m,Gv))try{let U=new URL(window.location.href),C=m.startsWith("//")?new URL(U.protocol+m):new URL(m),V=la(C.pathname,E);C.origin===U.origin&&V!=null?m=V+C.search+C.hash:v=!0}catch{Ci(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=dS(m,{relative:l}),[D,N,I]=qS(r,x),k=nM(m,{replace:d,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:_});function F(U){e&&e(U),U.defaultPrevented||k(U)}let W=le.createElement("a",{...x,...I,href:y||L,onClick:v||c?e:F,ref:QS(S,N),target:p,"data-discover":!R&&i==="render"?"true":void 0});return D&&!R?le.createElement(le.Fragment,null,W,le.createElement(YS,{page:L})):W});Ln.displayName="Link";var $S=le.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:d,viewTransition:h,children:p,...m},g){let _=Vo(d,{relative:m.relative}),x=Ya(),S=le.useContext(jc),{navigator:E,basename:R}=le.useContext(Ni),y=S!=null&&oM(_)&&h===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,L=x.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(L=L.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&R&&(D=la(D,R)||D);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let I=L===v||!l&&L.startsWith(v)&&L.charAt(N)==="/",k=D!=null&&(D===v||!l&&D.startsWith(v)&&D.charAt(v.length)==="/"),F={isActive:I,isPending:k,isTransitioning:y},W=I?e:void 0,U;typeof r=="function"?U=r(F):U=[r,I?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(F):c;return le.createElement(Ln,{...m,"aria-current":W,className:U,ref:g,style:C,to:d,viewTransition:h},typeof p=="function"?p(F):p)});$S.displayName="NavLink";var eM=le.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:d=Nc,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...x},S)=>{let E=rM(),R=sM(h,{relative:m}),y=d.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&Vv.test(h),L=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let N=D.nativeEvent.submitter,I=(N==null?void 0:N.getAttribute("formmethod"))||d;E(N||D.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:_})};return le.createElement("form",{ref:S,method:y,action:R,onSubmit:r?p:L,...x,"data-discover":!v&&s==="render"?"true":void 0})});eM.displayName="Form";function tM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jv(s){let e=le.useContext(Ds);return qt(e,tM(s)),e}function nM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:d}={}){let h=hS(),p=Ya(),m=Vo(s,{relative:c});return le.useCallback(g=>{if(OS(g,e)){g.preventDefault();let _=i!==void 0?i:Bo(p)===Bo(m);h(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:d})}},[p,h,m,i,r,e,s,l,c,d])}var iM=0,aM=()=>`__${String(++iM)}__`;function rM(){let{router:s}=jv("useSubmit"),{basename:e}=le.useContext(Ni),i=bS();return le.useCallback(async(r,l={})=>{let{action:c,method:d,encType:h,formData:p,body:m}=zS(r,e);if(l.navigate===!1){let g=l.fetcherKey||aM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function sM(s,{relative:e}={}){let{basename:i}=le.useContext(Ni),r=le.useContext(ua);qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Vo(s||".",{relative:e})},d=Ya();if(s==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:sa([i,c.pathname])),Bo(c)}function oM(s,e={}){let i=le.useContext(Pv);qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jv("useViewTransitionState"),l=Vo(s,{relative:e.relative});if(!i.isTransitioning)return!1;let c=la(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=la(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Hc(l.pathname,d)!=null||Hc(l.pathname,c)!=null}new TextEncoder;const lM=()=>T.jsxs("div",{className:"flex items-center",children:[T.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-indigo-600 dark:text-indigo-400",children:[T.jsx("path",{d:"M28 12L24 8L20 12L24 16L28 12Z",fill:"currentColor"}),T.jsx("path",{d:"M24 16L20 20L16 16L20 12L24 16Z",fill:"currentColor",fillOpacity:"0.8"}),T.jsx("path",{d:"M16 24L12 20L16 16L20 20L16 24Z",fill:"currentColor",fillOpacity:"0.6"}),T.jsx("rect",{x:"8",y:"20",width:"24",height:"16",rx:"2",fill:"currentColor",fillOpacity:"0.9"}),T.jsx("rect",{x:"16",y:"36",width:"8",height:"2",fill:"currentColor",fillOpacity:"0.7"}),T.jsx("path",{d:"M32 8C32 10.2091 30.2091 12 28 12C27.2316 12 26.5153 11.7849 25.9046 11.4142C25.4159 13.3948 23.6371 14.8571 21.5 14.8571C19.0147 14.8571 17 12.8424 17 10.3571C17 7.87183 19.0147 5.85714 21.5 5.85714C22.4021 5.85714 23.2462 6.11445 23.9659 6.56617C24.7191 4.47974 26.6866 3 29 3C31.7614 3 34 5.23858 34 8C34 8.06764 33.9987 8.13493 33.9961 8.20185C33.9987 8.13424 34 8.06695 34 8Z",fill:"currentColor",fillOpacity:"0.4"})]}),T.jsxs("div",{className:"ml-3 navbar-font text-xl font-bold tracking-tight",children:[T.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-['Poppins'] uppercase tracking-wider",children:"SKY"}),T.jsx("span",{className:"text-neutral-900 dark:text-white font-['Poppins'] uppercase tracking-wider",children:"FORGE"})]})]}),cM=()=>{const[s,e]=le.useState(!0),[i,r]=le.useState(!1),[l,c]=le.useState(!1),d=Ya(),h=()=>{e(!s),s?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.body.classList.remove("dark"),document.body.classList.add("light"),localStorage.setItem("theme","light")):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.body.classList.remove("light"),document.body.classList.add("dark"),localStorage.setItem("theme","dark"))};le.useEffect(()=>{localStorage.getItem("theme")==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),document.body.classList.remove("dark"),document.body.classList.add("light"),e(!1)):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),document.body.classList.remove("light"),document.body.classList.add("dark"),e(!0))},[]),le.useEffect(()=>{const m=()=>{window.scrollY>10?c(!0):c(!1)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[]);const p=m=>d.pathname===m;return T.jsxs("nav",{className:`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl ${l?"py-3 px-16 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm rounded-full":"py-3 px-16 bg-transparent"}`,children:[T.jsxs("div",{className:"flex justify-between items-center w-full",children:[T.jsx("div",{className:"flex items-center",children:T.jsx(Ln,{to:"/",className:"flex items-center",children:T.jsx(lM,{})})}),T.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[T.jsx(Ln,{to:"/",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${p("/")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Home"}),T.jsx(Ln,{to:"/about",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${p("/about")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"About"}),T.jsx(Ln,{to:"/projects",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${p("/projects")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Projects"}),T.jsx(Ln,{to:"/contact",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${p("/contact")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Contact"}),T.jsx(Ln,{to:"/feedback",className:`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${p("/feedback")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"}`,children:"Feedback"}),T.jsx("button",{onClick:h,className:"ml-6 p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors","aria-label":"Toggle theme",children:s?T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]}),T.jsx("div",{className:"md:hidden flex items-center",children:T.jsx("button",{onClick:()=>r(!i),className:"p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors","aria-label":"Toggle menu",children:i?T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-neutral-600 dark:text-neutral-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),T.jsx("div",{className:`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${i?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:T.jsx("div",{className:"px-8 py-4 bg-white dark:bg-neutral-900 shadow-md rounded-xl mt-2",children:T.jsxs("div",{className:"flex flex-col space-y-3",children:[T.jsx(Ln,{to:"/",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${p("/")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>r(!1),children:"Home"}),T.jsx(Ln,{to:"/about",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${p("/about")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>r(!1),children:"About"}),T.jsx(Ln,{to:"/projects",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${p("/projects")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>r(!1),children:"Projects"}),T.jsx(Ln,{to:"/contact",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${p("/contact")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>r(!1),children:"Contact"}),T.jsx(Ln,{to:"/feedback",className:`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${p("/feedback")?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-600 dark:text-neutral-300"}`,onClick:()=>r(!1),children:"Feedback"}),T.jsxs("button",{onClick:h,className:"flex items-center justify-between px-5 py-2.5 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300",children:[T.jsx("span",{children:s?"Light Mode":"Dark Mode"}),T.jsx("div",{className:"p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800",children:s?T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]})})})]})},lc=({children:s,className:e=""})=>T.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200",children:[T.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"}),T.jsx("div",{className:"absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"})]}),T.jsx("div",{className:"absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"}),T.jsx("div",{className:`relative z-10 pt-20 ${e}`,children:s})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="175",uM=0,D0=1,fM=2,Xv=1,dM=2,na=3,Wa=0,kn=1,ia=2,ja=0,Ms=1,N0=2,U0=3,L0=4,hM=5,Er=100,pM=101,mM=102,gM=103,vM=104,_M=200,xM=201,yM=202,SM=203,zd=204,Id=205,MM=206,EM=207,bM=208,TM=209,AM=210,RM=211,wM=212,CM=213,DM=214,Fd=0,Hd=1,kd=2,bs=3,Gd=4,Vd=5,jd=6,Xd=7,Wv=0,NM=1,UM=2,Xa=0,LM=1,OM=2,PM=3,BM=4,zM=5,IM=6,FM=7,qv=300,Ts=301,As=302,Wd=303,qd=304,Wc=306,Yd=1e3,Tr=1001,Zd=1002,_i=1003,HM=1004,cc=1005,Ai=1006,ad=1007,Ar=1008,ca=1009,Yv=1010,Zv=1011,zo=1012,Nh=1013,Rr=1014,aa=1015,jo=1016,Uh=1017,Lh=1018,Io=1020,Kv=35902,Qv=1021,Jv=1022,gi=1023,$v=1024,e_=1025,Fo=1026,Ho=1027,t_=1028,Oh=1029,n_=1030,Ph=1031,Bh=1033,Lc=33776,Oc=33777,Pc=33778,Bc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,zc=36492,vh=36494,_h=36495,i_=36283,xh=36284,yh=36285,Sh=36286,kM=3200,GM=3201,a_=0,VM=1,Va="",oi="srgb",Rs="srgb-linear",kc="linear",Bt="srgb",ss=7680,O0=519,jM=512,XM=513,WM=514,r_=515,qM=516,YM=517,ZM=518,KM=519,P0=35044,B0="300 es",ra=2e3,Gc=2001;class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Mh=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function QM(s,e){return(s%e+e)%e}function sd(s,e,i){return(1-i)*s+i*e}function Do(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,i=0){wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,i,r,l,c,d,h,p,m){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m)}set(e,i,r,l,c,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],S=r[5],E=r[8],R=l[0],y=l[3],v=l[6],L=l[1],D=l[4],N=l[7],I=l[2],k=l[5],F=l[8];return c[0]=d*R+h*L+p*I,c[3]=d*y+h*D+p*k,c[6]=d*v+h*N+p*F,c[1]=m*R+g*L+_*I,c[4]=m*y+g*D+_*k,c[7]=m*v+g*N+_*F,c[2]=x*R+S*L+E*I,c[5]=x*y+S*D+E*k,c[8]=x*v+S*N+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*c*g+r*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*d-h*m,x=h*p-g*c,S=m*c-d*p,E=i*_+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(l*m-g*r)*R,e[2]=(h*r-l*d)*R,e[3]=x*R,e[4]=(g*i-l*p)*R,e[5]=(l*c-h*i)*R,e[6]=S*R,e[7]=(r*p-m*i)*R,e[8]=(d*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(od.makeScale(e,i)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,i){return this.premultiply(od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new rt;function s_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JM(){const s=Vc("canvas");return s.style.display="block",s}const z0={};function Ic(s){s in z0||(z0[s]=!0,console.warn(s))}function $M(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function eE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const I0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Rs]:{primaries:e,whitePoint:r,transfer:kc,toXYZ:I0,fromXYZ:F0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:I0,fromXYZ:F0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Tt=nE();function oa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class iE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{os===void 0&&(os=Vc("canvas")),os.width=e.width,os.height=e.height;const l=os.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=os}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=oa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ld(l[d].image)):c.push(ld(l[d]))}else c=ld(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;class Gn extends Ns{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Tr,l=Tr,c=Ai,d=Ar,h=gi,p=ca,m=Gn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Xo(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yd:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yd:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=qv;Gn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,i=0,r=0,l=1){Qt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],S=p[5],E=p[9],R=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+R)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,N=(S+1)/2,I=(v+1)/2,k=(g+x)/4,F=(_+R)/4,W=(E+y)/4;return D>N&&D>I?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=k/r,c=F/r):N>I?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=k/l,c=W/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=W/c),this.set(r,l,c,i),this}let L=Math.sqrt((y-E)*(y-E)+(_-R)*(_-R)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(_-R)/L,this.z=(x-g)/L,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends Ns{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Qt(0,0,e,i),this.scissorTest=!1,this.viewport=new Qt(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Gn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends sE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class o_ extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const x=c[d+0],S=c[d+1],E=c[d+2],R=c[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(h===1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=R;return}if(_!==R||p!==x||m!==S||g!==E){let y=1-h;const v=p*x+m*S+g*E+_*R,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const I=Math.sqrt(D),k=Math.atan2(I,v*L);y=Math.sin(y*k)/I,h=Math.sin(h*k)/I}const N=h*L;if(p=p*y+x*N,m=m*y+S*N,g=g*y+E*N,_=_*y+R*N,y===1-h){const I=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=I,m*=I,g*=I,_*=I}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[d],x=c[d+1],S=c[d+2],E=c[d+3];return e[i]=h*E+g*_+p*S-m*x,e[i+1]=p*E+g*x+m*_-h*S,e[i+2]=m*E+g*S+h*x-p*_,e[i+3]=g*E-h*_-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),_=h(c/2),x=p(r/2),S=p(l/2),E=p(c/2);switch(d){case"XYZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"YZX":this._x=x*g*_+m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_-x*S*E;break;case"XZY":this._x=x*g*_-m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=r+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(d-l)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(c-m)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(d-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-c*p,this._y=l*g+d*p+c*h-r*m,this._z=c*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*d+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(H0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-c*l),_=2*(c*r-d*i);return this.x=i+p*m+d*_-h*g,this.y=r+p*g+h*m-c*_,this.z=l+p*_+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new se,H0=new Wo;class qo{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,di):di.fromBufferAttribute(c,d),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),ls.subVectors(e.a,No),cs.subVectors(e.b,No),us.subVectors(e.c,No),za.subVectors(cs,ls),Ia.subVectors(us,cs),mr.subVectors(ls,us);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-mr.z,mr.y,za.z,0,-za.x,Ia.z,0,-Ia.x,mr.z,0,-mr.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-mr.y,mr.x,0];return!ud(i,ls,cs,us,fc)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,ls,cs,us,fc))?!1:(dc.crossVectors(za,Ia),i=[dc.x,dc.y,dc.z],ud(i,ls,cs,us,fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new se,new se,new se,new se,new se,new se,new se,new se],di=new se,uc=new qo,ls=new se,cs=new se,us=new se,za=new se,Ia=new se,mr=new se,No=new se,fc=new se,dc=new se,gr=new se;function ud(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){gr.fromArray(s,c);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),p=e.dot(gr),m=i.dot(gr),g=r.dot(gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const lE=new qo,Uo=new se,fd=new se;class Ih{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(fd)),this.expandByPoint(Uo.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new se,dd=new se,hc=new se,Fa=new se,hd=new se,pc=new se,pd=new se;class cE{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){dd.copy(e).add(i).multiplyScalar(.5),hc.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(dd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(hc),h=Fa.dot(this.direction),p=-Fa.dot(hc),m=Fa.lengthSq(),g=Math.abs(1-d*d);let _,x,S,E;if(g>0)if(_=d*p-h,x=d*h-p,E=c*g,_>=0)if(x>=-E)if(x<=E){const R=1/g;_*=R,x*=R,S=_*(_+d*x+2*h)+x*(d*_+x+2*p)+m}else x=c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-d*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(_=Math.max(0,-(d*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m);else x=d>0?-c:c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(dd).addScaledVector(hc,x),S}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,c){hd.subVectors(i,e),pc.subVectors(r,e),pd.crossVectors(hd,pc);let d=this.direction.dot(pd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Fa.subVectors(this.origin,e);const p=h*this.direction.dot(pc.crossVectors(Fa,pc));if(p<0)return null;const m=h*this.direction.dot(hd.cross(Fa));if(m<0||p+m>d)return null;const g=-h*Fa.dot(pd);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,i,r,l,c,d,h,p,m,g,_,x,S,E,R,y){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m,g,_,x,S,E,R,y)}set(e,i,r,l,c,d,h,p,m,g,_,x,S,E,R,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/fs.setFromMatrixColumn(e,0).length(),c=1/fs.setFromMatrixColumn(e,1).length(),d=1/fs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*g,S=d*_,E=h*g,R=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=x-R*m,i[9]=-h*p,i[2]=R-x*m,i[6]=E+S*m,i[10]=d*p}else if(e.order==="YXZ"){const x=p*g,S=p*_,E=m*g,R=m*_;i[0]=x+R*h,i[4]=E*h-S,i[8]=d*m,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=S*h-E,i[6]=R+x*h,i[10]=d*p}else if(e.order==="ZXY"){const x=p*g,S=p*_,E=m*g,R=m*_;i[0]=x-R*h,i[4]=-d*_,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*g,i[9]=R-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const x=d*g,S=d*_,E=h*g,R=h*_;i[0]=p*g,i[4]=E*m-S,i[8]=x*m+R,i[1]=p*_,i[5]=R*m+x,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,E=h*p,R=h*m;i[0]=p*g,i[4]=R-x*_,i[8]=E*_+S,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*_+E,i[10]=x-R*_}else if(e.order==="XZY"){const x=d*p,S=d*m,E=h*p,R=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+R,i[5]=d*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=h*g,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,fE)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(r,Qn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(r,Qn)),Ha.normalize(),mc.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=mc.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=mc.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=mc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],S=r[13],E=r[2],R=r[6],y=r[10],v=r[14],L=r[3],D=r[7],N=r[11],I=r[15],k=l[0],F=l[4],W=l[8],U=l[12],C=l[1],V=l[5],ue=l[9],oe=l[13],_e=l[2],pe=l[6],z=l[10],K=l[14],Y=l[3],be=l[7],O=l[11],ee=l[15];return c[0]=d*k+h*C+p*_e+m*Y,c[4]=d*F+h*V+p*pe+m*be,c[8]=d*W+h*ue+p*z+m*O,c[12]=d*U+h*oe+p*K+m*ee,c[1]=g*k+_*C+x*_e+S*Y,c[5]=g*F+_*V+x*pe+S*be,c[9]=g*W+_*ue+x*z+S*O,c[13]=g*U+_*oe+x*K+S*ee,c[2]=E*k+R*C+y*_e+v*Y,c[6]=E*F+R*V+y*pe+v*be,c[10]=E*W+R*ue+y*z+v*O,c[14]=E*U+R*oe+y*K+v*ee,c[3]=L*k+D*C+N*_e+I*Y,c[7]=L*F+D*V+N*pe+I*be,c[11]=L*W+D*ue+N*z+I*O,c[15]=L*U+D*oe+N*K+I*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],S=e[14],E=e[3],R=e[7],y=e[11],v=e[15];return E*(+c*p*_-l*m*_-c*h*x+r*m*x+l*h*S-r*p*S)+R*(+i*p*S-i*m*x+c*d*x-l*d*S+l*m*g-c*p*g)+y*(+i*m*_-i*h*S-c*d*_+r*d*S+c*h*g-r*m*g)+v*(-l*h*g-i*p*_+i*h*x+l*d*_-r*d*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],S=e[11],E=e[12],R=e[13],y=e[14],v=e[15],L=_*y*m-R*x*m+R*p*S-h*y*S-_*p*v+h*x*v,D=E*x*m-g*y*m-E*p*S+d*y*S+g*p*v-d*x*v,N=g*R*m-E*_*m+E*h*S-d*R*S-g*h*v+d*_*v,I=E*_*p-g*R*p-E*h*x+d*R*x+g*h*y-d*_*y,k=i*L+r*D+l*N+c*I;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=L*F,e[1]=(R*x*c-_*y*c-R*l*S+r*y*S+_*l*v-r*x*v)*F,e[2]=(h*y*c-R*p*c+R*l*m-r*y*m-h*l*v+r*p*v)*F,e[3]=(_*p*c-h*x*c-_*l*m+r*x*m+h*l*S-r*p*S)*F,e[4]=D*F,e[5]=(g*y*c-E*x*c+E*l*S-i*y*S-g*l*v+i*x*v)*F,e[6]=(E*p*c-d*y*c-E*l*m+i*y*m+d*l*v-i*p*v)*F,e[7]=(d*x*c-g*p*c+g*l*m-i*x*m-d*l*S+i*p*S)*F,e[8]=N*F,e[9]=(E*_*c-g*R*c-E*r*S+i*R*S+g*r*v-i*_*v)*F,e[10]=(d*R*c-E*h*c+E*r*m-i*R*m-d*r*v+i*h*v)*F,e[11]=(g*h*c-d*_*c-g*r*m+i*_*m+d*r*S-i*h*S)*F,e[12]=I*F,e[13]=(g*R*l-E*_*l+E*r*x-i*R*x-g*r*y+i*_*y)*F,e[14]=(E*h*l-d*R*l-E*r*p+i*R*p+d*r*y-i*h*y)*F,e[15]=(d*_*l-g*h*l+g*r*p-i*_*p-d*r*x+i*h*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,g=c*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,g=d+d,_=h+h,x=c*m,S=c*g,E=c*_,R=d*g,y=d*_,v=h*_,L=p*m,D=p*g,N=p*_,I=r.x,k=r.y,F=r.z;return l[0]=(1-(R+v))*I,l[1]=(S+N)*I,l[2]=(E-D)*I,l[3]=0,l[4]=(S-N)*k,l[5]=(1-(x+v))*k,l[6]=(y+L)*k,l[7]=0,l[8]=(E+D)*F,l[9]=(y-L)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],hi.copy(this);const m=1/c,g=1/d,_=1/h;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,i.setFromRotationMatrix(hi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=ra){const p=this.elements,m=2*c/(i-e),g=2*c/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let S,E;if(h===ra)S=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(h===Gc)S=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=ra){const p=this.elements,m=1/(i-e),g=1/(r-l),_=1/(d-c),x=(i+e)*m,S=(r+l)*g;let E,R;if(h===ra)E=(d+c)*_,R=-2*_;else if(h===Gc)E=c*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const fs=new se,hi=new Jt,uE=new se(0,0,0),fE=new se(1,1,1),Ha=new se,mc=new se,Qn=new se,k0=new Jt,G0=new Wo;class Di{constructor(e=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return k0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G0.setFromEuler(this),this.setFromQuaternion(G0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dE=0;const V0=new se,ds=new Wo,$i=new Jt,gc=new se,Lo=new se,hE=new se,pE=new Wo,j0=new se(1,0,0),X0=new se(0,1,0),W0=new se(0,0,1),q0={type:"added"},mE={type:"removed"},hs={type:"childadded",child:null},md={type:"childremoved",child:null};class Dn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new se,i=new Di,r=new Wo,l=new se(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new rt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(X0,e)}rotateZ(e){return this.rotateOnAxis(W0,e)}translateOnAxis(e,i){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(X0,e)}translateZ(e){return this.translateOnAxis(W0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gc.copy(e):gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Lo,gc,this.up):$i.lookAt(gc,Lo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ds.setFromRotationMatrix($i),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q0),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mE),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q0),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,pE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),_=d(e.shapes),x=d(e.skeletons),S=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new se(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new se,ea=new se,gd=new se,ta=new se,ps=new se,ms=new se,Y0=new se,vd=new se,_d=new se,xd=new se,yd=new Qt,Sd=new Qt,Md=new Qt;class mi{constructor(e=new se,i=new se,r=new se){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){pi.subVectors(l,i),ea.subVectors(r,i),gd.subVectors(e,i);const d=pi.dot(pi),h=pi.dot(ea),p=pi.dot(gd),m=ea.dot(ea),g=ea.dot(gd),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*p-h*g)*x,E=(d*g-h*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,c,d,h,p){return this.getBarycoord(e,i,r,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ta.x),p.addScaledVector(d,ta.y),p.addScaledVector(h,ta.z),p)}static getInterpolatedAttribute(e,i,r,l,c,d){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(yd,c.x),d.addScaledVector(Sd,c.y),d.addScaledVector(Md,c.z),d}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),ea.subVectors(e,i),pi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),pi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(c,r),vd.subVectors(e,r);const p=ps.dot(vd),m=ms.dot(vd);if(p<=0&&m<=0)return i.copy(r);_d.subVectors(e,l);const g=ps.dot(_d),_=ms.dot(_d);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ps,d);xd.subVectors(e,c);const S=ps.dot(xd),E=ms.dot(xd);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(ms,h);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Y0.subVectors(c,l),h=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(Y0,h);const v=1/(y+R+x);return d=R*v,h=x*v,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Ed(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Rt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=QM(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ed(d,c,e+1/3),this.g=Ed(d,c,e),this.b=Ed(d,c,e-1/3)}return Tt.toWorkingColorSpace(this,l),this}setStyle(e,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=c_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Tt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(xt(Cn.r*255,0,255))*65536+Math.round(xt(Cn.g*255,0,255))*256+Math.round(xt(Cn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=g<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=oi){Tt.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(vc);const r=sd(ka.h,vc.h,i),l=sd(ka.s,vc.s,i),c=sd(ka.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Rt;Rt.NAMES=c_;let gE=0;class Yo extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Id,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class u_ extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new se,_c=new wt;let vE=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=P0,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(e),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class f_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class d_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wi extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let _E=0;const si=new Jt,bd=new Dn,gs=new se,Jn=new qo,Oo=new qo,_n=new se;class Za extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?d_:f_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new rt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ih);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Jn.min,Oo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Oo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Oo.min),Jn.expandByPoint(Oo.max))}Jn.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)_n.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(e,m),_n.add(gs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let W=0;W<r.count;W++)h[W]=new se,p[W]=new se;const m=new se,g=new se,_=new se,x=new wt,S=new wt,E=new wt,R=new se,y=new se;function v(W,U,C){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,W),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(x),E.sub(x);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[W].add(R),h[U].add(R),h[C].add(R),p[W].add(y),p[U].add(y),p[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,U=L.length;W<U;++W){const C=L[W],V=C.start,ue=C.count;for(let oe=V,_e=V+ue;oe<_e;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new se,N=new se,I=new se,k=new se;function F(W){I.fromBufferAttribute(l,W),k.copy(I);const U=h[W];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),N.crossVectors(k,U);const V=N.dot(p[W])<0?-1:1;d.setXYZW(W,D.x,D.y,D.z,V)}for(let W=0,U=L.length;W<U;++W){const C=L[W],V=C.start,ue=C.count;for(let oe=V,_e=V+ue;oe<_e;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new se,c=new se,d=new se,h=new se,p=new se,m=new se,g=new se,_=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let S=0,E=0;for(let R=0,y=p.length;R<y;R++){h.isInterleavedBufferAttribute?S=p[R]*h.data.stride+h.offset:S=p[R]*g;for(let v=0;v<g;v++)x[E++]=m[S++]}return new Ri(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Za,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],S=e(x,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new Jt,vr=new cE,xc=new Ih,K0=new se,yc=new se,Sc=new se,Mc=new se,Td=new se,Ec=new se,Q0=new se,bc=new se;class vi extends Dn{constructor(e=new Za,i=new u_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ec.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(Td.fromBufferAttribute(_,e),d?Ec.addScaledVector(Td,g):Ec.addScaledVector(Td.sub(i),g))}i.add(Ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),vr.copy(e.ray).recast(e.near),!(xc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(xc,K0)===null||vr.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(Z0.copy(c).invert(),vr.copy(e.ray).applyMatrix4(Z0),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=x.length;E<R;E++){const y=x[E],v=d[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let N=L,I=D;N<I;N+=3){const k=h.getX(N),F=h.getX(N+1),W=h.getX(N+2);l=Tc(this,v,e,r,m,g,_,k,F,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=E,v=R;y<v;y+=3){const L=h.getX(y),D=h.getX(y+1),N=h.getX(y+2);l=Tc(this,d,e,r,m,g,_,L,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,R=x.length;E<R;E++){const y=x[E],v=d[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let N=L,I=D;N<I;N+=3){const k=N,F=N+1,W=N+2;l=Tc(this,v,e,r,m,g,_,k,F,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=E,v=R;y<v;y+=3){const L=y,D=y+1,N=y+2;l=Tc(this,d,e,r,m,g,_,L,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function xE(s,e,i,r,l,c,d,h){let p;if(e.side===kn?p=r.intersectTriangle(d,c,l,!0,h):p=r.intersectTriangle(l,c,d,e.side===Wa,h),p===null)return null;bc.copy(h),bc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(bc);return m<i.near||m>i.far?null:{distance:m,point:bc.clone(),object:s}}function Tc(s,e,i,r,l,c,d,h,p,m){s.getVertexPosition(h,yc),s.getVertexPosition(p,Sc),s.getVertexPosition(m,Mc);const g=xE(s,e,i,r,yc,Sc,Mc,Q0);if(g){const _=new se;mi.getBarycoord(Q0,yc,Sc,Mc,_),l&&(g.uv=mi.getInterpolatedAttribute(l,h,p,m,_,new wt)),c&&(g.uv1=mi.getInterpolatedAttribute(c,h,p,m,_,new wt)),d&&(g.normal=mi.getInterpolatedAttribute(d,h,p,m,_,new se),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new se,materialIndex:0};mi.getNormal(yc,Sc,Mc,x.normal),g.face=x,g.barycoord=_}return g}class Zo extends Za{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new wi(m,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(_,2));function E(R,y,v,L,D,N,I,k,F,W,U){const C=N/F,V=I/W,ue=N/2,oe=I/2,_e=k/2,pe=F+1,z=W+1;let K=0,Y=0;const be=new se;for(let O=0;O<z;O++){const ee=O*V-oe;for(let ye=0;ye<pe;ye++){const Me=ye*C-ue;be[R]=Me*L,be[y]=ee*D,be[v]=_e,m.push(be.x,be.y,be.z),be[R]=0,be[y]=0,be[v]=k>0?1:-1,g.push(be.x,be.y,be.z),_.push(ye/F),_.push(1-O/W),K+=1}}for(let O=0;O<W;O++)for(let ee=0;ee<F;ee++){const ye=x+ee+pe*O,Me=x+ee+pe*(O+1),J=x+(ee+1)+pe*(O+1),me=x+(ee+1)+pe*O;p.push(ye,Me,me),p.push(Me,J,me),Y+=6}h.addGroup(S,Y,U),S+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(s){const e={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)e[l]=r[l]}return e}function yE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function h_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const SE={clone:ws,merge:Un};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=yE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class p_ extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ra}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new se,J0=new wt,$0=new wt;class li extends p_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,J0,$0),i.subVectors($0,J0)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class bE extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(vs,_s,e,i);l.layers=this.layers,this.add(l);const c=new li(vs,_s,e,i);c.layers=this.layers,this.add(c);const d=new li(vs,_s,e,i);d.layers=this.layers,this.add(d);const h=new li(vs,_s,e,i);h.layers=this.layers,this.add(h);const p=new li(vs,_s,e,i);p.layers=this.layers,this.add(p);const m=new li(vs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class m_ extends Gn{constructor(e=[],i=Ts,r,l,c,d,h,p,m,g){super(e,i,r,l,c,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TE extends wr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new m_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Zo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ja});c.uniforms.tEquirect.value=i;const d=new vi(l,c),h=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Ai),new bE(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class Ac extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),v=this._getHandJoint(m,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class RE extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rd=new se,wE=new se,CE=new rt;class Sr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Rd.subVectors(r,i).cross(wE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||CE.getNormalMatrix(e),l=this.coplanarPoint(Rd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Ih,Rc=new se;class Fh{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,d=new Sr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ra){const r=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],S=l[8],E=l[9],R=l[10],y=l[11],v=l[12],L=l[13],D=l[14],N=l[15];if(r[0].setComponents(p-c,x-m,y-S,N-v).normalize(),r[1].setComponents(p+c,x+m,y+S,N+v).normalize(),r[2].setComponents(p+d,x+g,y+E,N+L).normalize(),r[3].setComponents(p-d,x-g,y-E,N-L).normalize(),r[4].setComponents(p-h,x-_,y-R,N-D).normalize(),i===ra)r[5].setComponents(p+h,x+_,y+R,N+D).normalize();else if(i===Gc)r[5].setComponents(h,_,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class g_ extends Gn{constructor(e,i,r=Rr,l,c,d,h=_i,p=_i,m,g=Fo){if(g!==Fo&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,d,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ko extends Za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,_=e/h,x=i/p,S=[],E=[],R=[],y=[];for(let v=0;v<g;v++){const L=v*x-d;for(let D=0;D<m;D++){const N=D*_-c;E.push(N,-L,0),R.push(0,0,1),y.push(D/h),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<h;L++){const D=L+m*v,N=L+m*(v+1),I=L+1+m*(v+1),k=L+1+m*v;S.push(D,N,k),S.push(N,I,k)}this.setIndex(S),this.setAttribute("position",new wi(E,3)),this.setAttribute("normal",new wi(R,3)),this.setAttribute("uv",new wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hh extends Za{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let m=0;const g=[],_=new se,x=new se,S=[],E=[],R=[],y=[];for(let v=0;v<=r;v++){const L=[],D=v/r;let N=0;v===0&&d===0?N=.5/i:v===r&&p===Math.PI&&(N=-.5/i);for(let I=0;I<=i;I++){const k=I/i;_.x=-e*Math.cos(l+k*c)*Math.sin(d+D*h),_.y=e*Math.cos(d+D*h),_.z=e*Math.sin(l+k*c)*Math.sin(d+D*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),R.push(x.x,x.y,x.z),y.push(k+N,1-D),L.push(m++)}g.push(L)}for(let v=0;v<r;v++)for(let L=0;L<i;L++){const D=g[v][L+1],N=g[v][L],I=g[v+1][L],k=g[v+1][L+1];(v!==0||d>0)&&S.push(D,N,k),(v!==r-1||p<Math.PI)&&S.push(N,I,k)}this.setIndex(S),this.setAttribute("position",new wi(E,3)),this.setAttribute("normal",new wi(R,3)),this.setAttribute("uv",new wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ev extends Yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a_,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DE extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v_ extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const wd=new Jt,tv=new se,nv=new se;class UE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;tv.setFromMatrixPosition(e.matrixWorld),i.position.copy(tv),nv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(nv),i.updateMatrixWorld(),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class __ extends p_{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LE extends UE{constructor(){super(new __(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OE extends v_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PE extends v_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function iv(s,e,i,r){const l=zE(r);switch(i){case Qv:return s*e;case $v:return s*e;case e_:return s*e*2;case t_:return s*e/l.components*l.byteLength;case Oh:return s*e/l.components*l.byteLength;case n_:return s*e*2/l.components*l.byteLength;case Ph:return s*e*2/l.components*l.byteLength;case Jv:return s*e*3/l.components*l.byteLength;case gi:return s*e*4/l.components*l.byteLength;case Bh:return s*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:case $d:return Math.max(s,16)*Math.max(e,8)/4;case Kd:case Jd:return Math.max(s,8)*Math.max(e,8)/2;case eh:case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zc:case vh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case i_:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yh:case Sh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zE(s){switch(s){case ca:case Yv:return{byteLength:1,components:1};case zo:case Zv:case jo:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Rr:case Nh:case aa:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function x_(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function IE(s){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],R=_[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,_[x]=R)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const R=_[S];s.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,$E=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lb=`#define PI 3.141592653589793
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
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ub=`vec3 transformedNormal = objectNormal;
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
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
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
}`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ib=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
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
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
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
}`,X1=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,dT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vT=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:FE,alphahash_pars_fragment:HE,alphamap_fragment:kE,alphamap_pars_fragment:GE,alphatest_fragment:VE,alphatest_pars_fragment:jE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:KE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:$E,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:ab,color_pars_fragment:rb,color_pars_vertex:sb,color_vertex:ob,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:fb,displacementmap_vertex:db,emissivemap_fragment:hb,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:vb,envmap_common_pars_fragment:_b,envmap_pars_fragment:xb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Nb,envmap_vertex:Sb,fog_vertex:Mb,fog_pars_vertex:Eb,fog_fragment:bb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:Rb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Db,lights_toon_fragment:Ub,lights_toon_pars_fragment:Lb,lights_phong_fragment:Ob,lights_phong_pars_fragment:Pb,lights_physical_fragment:Bb,lights_physical_pars_fragment:zb,lights_fragment_begin:Ib,lights_fragment_maps:Fb,lights_fragment_end:Hb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:jb,map_fragment:Xb,map_pars_fragment:Wb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:a1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:f1,opaque_fragment:d1,packing:h1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:v1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:S1,shadowmap_vertex:M1,shadowmask_pars_fragment:E1,skinbase_vertex:b1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:R1,specularmap_fragment:w1,specularmap_pars_fragment:C1,tonemapping_fragment:D1,tonemapping_pars_fragment:N1,transmission_fragment:U1,transmission_pars_fragment:L1,uv_pars_fragment:O1,uv_pars_vertex:P1,uv_vertex:B1,worldpos_vertex:z1,background_vert:I1,background_frag:F1,backgroundCube_vert:H1,backgroundCube_frag:k1,cube_vert:G1,cube_frag:V1,depth_vert:j1,depth_frag:X1,distanceRGBA_vert:W1,distanceRGBA_frag:q1,equirect_vert:Y1,equirect_frag:Z1,linedashed_vert:K1,linedashed_frag:Q1,meshbasic_vert:J1,meshbasic_frag:$1,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:dT,points_frag:hT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:vT},Ue={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Un([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Un([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Un([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Un([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Un([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Un([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Un([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Un([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Un([Ue.common,Ue.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Un([Ue.lights,Ue.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const wc={r:0,b:0,g:0},xr=new Di,_T=new Jt;function xT(s,e,i,r,l,c,d){const h=new Rt(0);let p=c===!0?0:1,m,g,_=null,x=0,S=null;function E(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?i:e).get(N)),N}function R(D){let N=!1;const I=E(D);I===null?v(h,p):I&&I.isColor&&(v(I,1),N=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,d):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,N){const I=E(N);I&&(I.isCubeTexture||I.mapping===Wc)?(g===void 0&&(g=new vi(new Zo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:ws(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(N.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(xr)),g.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Bt,(_!==I||x!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=I,x=I.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new vi(new Ko(2,2),new qa({name:"BackgroundMaterial",uniforms:ws(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=I,x=I.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,N){D.getRGB(wc,h_(s)),r.buffers.color.setClear(wc.r,wc.g,wc.b,N,d)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,N=1){h.set(D),p=N,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(h,p)},render:R,addToRenderList:y,dispose:L}}function yT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(C,V,ue,oe,_e){let pe=!1;const z=_(oe,ue,V);c!==z&&(c=z,m(c.object)),pe=S(C,oe,ue,_e),pe&&E(C,oe,ue,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,N(C,V,ue,oe),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,V,ue){const oe=ue.wireframe===!0;let _e=r[C.id];_e===void 0&&(_e={},r[C.id]=_e);let pe=_e[V.id];pe===void 0&&(pe={},_e[V.id]=pe);let z=pe[oe];return z===void 0&&(z=x(p()),pe[oe]=z),z}function x(C){const V=[],ue=[],oe=[];for(let _e=0;_e<i;_e++)V[_e]=0,ue[_e]=0,oe[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ue,attributeDivisors:oe,object:C,attributes:{},index:null}}function S(C,V,ue,oe){const _e=c.attributes,pe=V.attributes;let z=0;const K=ue.getAttributes();for(const Y in K)if(K[Y].location>=0){const O=_e[Y];let ee=pe[Y];if(ee===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;z++}return c.attributesNum!==z||c.index!==oe}function E(C,V,ue,oe){const _e={},pe=V.attributes;let z=0;const K=ue.getAttributes();for(const Y in K)if(K[Y].location>=0){let O=pe[Y];O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),_e[Y]=ee,z++}c.attributes=_e,c.attributesNum=z,c.index=oe}function R(){const C=c.newAttributes;for(let V=0,ue=C.length;V<ue;V++)C[V]=0}function y(C){v(C,0)}function v(C,V){const ue=c.newAttributes,oe=c.enabledAttributes,_e=c.attributeDivisors;ue[C]=1,oe[C]===0&&(s.enableVertexAttribArray(C),oe[C]=1),_e[C]!==V&&(s.vertexAttribDivisor(C,V),_e[C]=V)}function L(){const C=c.newAttributes,V=c.enabledAttributes;for(let ue=0,oe=V.length;ue<oe;ue++)V[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),V[ue]=0)}function D(C,V,ue,oe,_e,pe,z){z===!0?s.vertexAttribIPointer(C,V,ue,_e,pe):s.vertexAttribPointer(C,V,ue,oe,_e,pe)}function N(C,V,ue,oe){R();const _e=oe.attributes,pe=ue.getAttributes(),z=V.defaultAttributeValues;for(const K in pe){const Y=pe[K];if(Y.location>=0){let be=_e[K];if(be===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const O=be.normalized,ee=be.itemSize,ye=e.get(be);if(ye===void 0)continue;const Me=ye.buffer,J=ye.type,me=ye.bytesPerElement,Se=J===s.INT||J===s.UNSIGNED_INT||be.gpuType===Nh;if(be.isInterleavedBufferAttribute){const Re=be.data,Pe=Re.stride,st=be.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)v(Y.location+Ke,Re.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)y(Y.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ke=0;Ke<Y.locationSize;Ke++)D(Y.location+Ke,ee/Y.locationSize,J,O,Pe*me,(st+ee/Y.locationSize*Ke)*me,Se)}else{if(be.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)v(Y.location+Re,be.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Re=0;Re<Y.locationSize;Re++)y(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Re=0;Re<Y.locationSize;Re++)D(Y.location+Re,ee/Y.locationSize,J,O,ee*me,ee/Y.locationSize*Re*me,Se)}}else if(z!==void 0){const O=z[K];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(Y.location,O);break;case 3:s.vertexAttrib3fv(Y.location,O);break;case 4:s.vertexAttrib4fv(Y.location,O);break;default:s.vertexAttrib1fv(Y.location,O)}}}}L()}function I(){W();for(const C in r){const V=r[C];for(const ue in V){const oe=V[ue];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete V[ue]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ue in V){const oe=V[ue];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete V[ue]}delete r[C.id]}function F(C){for(const V in r){const ue=r[V];if(ue[C.id]===void 0)continue;const oe=ue[C.id];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete ue[C.id]}}function W(){U(),d=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function ST(s,e,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function p(m,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)d(m[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*x[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function MT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const W=F===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ca&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==aa&&!W)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:N,vertexTextures:I,maxSamples:k}}function ET(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Sr,h=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||l;return l=x,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const L=c?0:r,D=L*4;let N=v.clippingState||null;p.value=N,N=g(E,x,D,S);for(let I=0;I!==D;++I)N[I]=i[I];v.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,E){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=p.value,E!==!0||y===null){const v=S+R*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,N=S;D!==R;++D,N+=4)d.copy(_[D]).applyMatrix4(L,h),d.normal.toArray(y,N),y[N+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function bT(s){let e=new WeakMap;function i(d,h){return h===Wd?d.mapping=Ts:h===qd&&(d.mapping=As),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wd||h===qd)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new TE(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ss=4,av=[.125,.215,.35,.446,.526,.582],br=20,Cd=new __,rv=new Rt;let Dd=null,Nd=0,Ud=0,Ld=!1;const Mr=(1+Math.sqrt(5))/2,xs=1/Mr,sv=[new se(-Mr,xs,0),new se(Mr,xs,0),new se(-xs,0,Mr),new se(xs,0,Mr),new se(0,Mr,-xs),new se(0,Mr,xs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],TT=new se;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=TT}=c;Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Nd,Ud),this._renderer.xr.enabled=Ld,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:jo,format:gi,colorSpace:Rs,depthBuffer:!1},l=lv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(c)),this._blurMaterial=RT(c,e,i)}return l}_compileMaterial(e){const i=new vi(this._lodPlanes[0],e);this._renderer.compile(i,Cd)}_sceneToCubeUV(e,i,r,l,c){const p=new li(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(rv),_.toneMapping=Xa,_.autoClear=!1;const E=new u_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new vi(new Zo,E);let y=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,y=!0):(E.color.copy(rv),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):D===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const N=this._cubeSize;Cc(l,D*N,L>2?N:0,N,N),_.setRenderTarget(l),y&&_.render(R,p),_.render(e,p)}R.geometry.dispose(),R.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new vi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Cc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Cd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=sv[(l-c-1)%sv.length];this._blur(e,c-1,c,d,h)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new vi(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*br-1),R=c/E,y=isFinite(c)?1+Math.floor(g*R):br;y>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const v=[];let L=0;for(let F=0;F<br;++F){const W=F/R,U=Math.exp(-W*W/2);v.push(U),F===0?L+=U:F<y&&(L+=2*U)}for(let F=0;F<v.length;F++)v[F]=v[F]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const N=this._sizeLods[l],I=3*N*(l>D-Ss?l-D+Ss:0),k=4*(this._cubeSize-N);Cc(i,I,k,3*N,2*N),p.setRenderTarget(i),p.render(_,Cd)}}function AT(s){const e=[],i=[],r=[];let l=s;const c=s-Ss+1+av.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>s-Ss?p=av[d-s+Ss-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,R=3,y=2,v=1,L=new Float32Array(R*E*S),D=new Float32Array(y*E*S),N=new Float32Array(v*E*S);for(let k=0;k<S;k++){const F=k%3*2/3-1,W=k>2?0:-1,U=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];L.set(U,R*E*k),D.set(x,y*E*k);const C=[k,k,k,k,k,k];N.set(C,v*E*k)}const I=new Za;I.setAttribute("position",new Ri(L,R)),I.setAttribute("uv",new Ri(D,y)),I.setAttribute("faceIndex",new Ri(N,v)),e.push(I),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function lv(s,e,i){const r=new wr(s,e,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function RT(s,e,i){const r=new Float32Array(br),l=new se(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kh(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function cv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function uv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function wT(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Wd||p===qd,g=p===Ts||p===As;if(m||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new ov(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new ov(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function CT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ic("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function DT(s,e,i,r){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(_){const x=[],S=_.index,E=_.attributes.position;let R=0;if(S!==null){const L=S.array;R=S.version;for(let D=0,N=L.length;D<N;D+=3){const I=L[D+0],k=L[D+1],F=L[D+2];x.push(I,k,k,F,F,I)}}else if(E!==void 0){const L=E.array;R=E.version;for(let D=0,N=L.length/3-1;D<N;D+=3){const I=D+0,k=D+1,F=D+2;x.push(I,k,k,F,F,I)}}else return;const y=new(s_(x)?d_:f_)(x,1);y.version=R;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function NT(s,e,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*d),i.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*d,E),i.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];i.update(y,r,1)}function _(x,S,E,R){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/d,S[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,R,0,E);let v=0;for(let L=0;L<E;L++)v+=S[L]*R[L];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function UT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function LT(s,e,i){const r=new WeakMap,l=new Qt;function c(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let C=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),R===!0&&(N=2),y===!0&&(N=3);let I=h.attributes.position.count*N,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*k*4*_),W=new o_(F,I,k,_);W.type=aa,W.needsUpdate=!0;const U=N*4;for(let V=0;V<_;V++){const ue=v[V],oe=L[V],_e=D[V],pe=I*k*4*V;for(let z=0;z<ue.count;z++){const K=z*U;E===!0&&(l.fromBufferAttribute(ue,z),F[pe+K+0]=l.x,F[pe+K+1]=l.y,F[pe+K+2]=l.z,F[pe+K+3]=0),R===!0&&(l.fromBufferAttribute(oe,z),F[pe+K+4]=l.x,F[pe+K+5]=l.y,F[pe+K+6]=l.z,F[pe+K+7]=0),y===!0&&(l.fromBufferAttribute(_e,z),F[pe+K+8]=l.x,F[pe+K+9]=l.y,F[pe+K+10]=l.z,F[pe+K+11]=_e.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new wt(I,k)},r.set(h,x),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const R=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function OT(s,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}const y_=new Gn,fv=new g_(1,1),S_=new o_,M_=new oE,E_=new m_,dv=[],hv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function Us(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=dv[l];if(c===void 0&&(c=new Float32Array(l),dv[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function qc(s,e){let i=hv[e];i===void 0&&(i=new Int32Array(e),hv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function PT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function BT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function zT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function IT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function FT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;gv.set(r),s.uniformMatrix2fv(this.addr,!1,gv),dn(i,r)}}function HT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;mv.set(r),s.uniformMatrix3fv(this.addr,!1,mv),dn(i,r)}}function kT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;pv.set(r),s.uniformMatrix4fv(this.addr,!1,pv),dn(i,r)}}function GT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function VT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function jT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function XT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function WT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function qT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function YT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function ZT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function KT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(fv.compareFunction=r_,c=fv):c=y_,i.setTexture2D(e||c,l)}function QT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||M_,l)}function JT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||E_,l)}function $T(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||S_,l)}function eA(s){switch(s){case 5126:return PT;case 35664:return BT;case 35665:return zT;case 35666:return IT;case 35674:return FT;case 35675:return HT;case 35676:return kT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function tA(s,e){s.uniform1fv(this.addr,e)}function nA(s,e){const i=Us(e,this.size,2);s.uniform2fv(this.addr,i)}function iA(s,e){const i=Us(e,this.size,3);s.uniform3fv(this.addr,i)}function aA(s,e){const i=Us(e,this.size,4);s.uniform4fv(this.addr,i)}function rA(s,e){const i=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function sA(s,e){const i=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function oA(s,e){const i=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function lA(s,e){s.uniform1iv(this.addr,e)}function cA(s,e){s.uniform2iv(this.addr,e)}function uA(s,e){s.uniform3iv(this.addr,e)}function fA(s,e){s.uniform4iv(this.addr,e)}function dA(s,e){s.uniform1uiv(this.addr,e)}function hA(s,e){s.uniform2uiv(this.addr,e)}function pA(s,e){s.uniform3uiv(this.addr,e)}function mA(s,e){s.uniform4uiv(this.addr,e)}function gA(s,e,i){const r=this.cache,l=e.length,c=qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||y_,c[d])}function vA(s,e,i){const r=this.cache,l=e.length,c=qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||M_,c[d])}function _A(s,e,i){const r=this.cache,l=e.length,c=qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||E_,c[d])}function xA(s,e,i){const r=this.cache,l=e.length,c=qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||S_,c[d])}function yA(s){switch(s){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return dA;case 36294:return hA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return xA}}class SA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=eA(i.type)}}class MA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yA(i.type)}}class EA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function vv(s,e){s.seq.push(e),s.map[e.id]=e}function bA(s,e,i){const r=s.name,l=r.length;for(Od.lastIndex=0;;){const c=Od.exec(r),d=Od.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){vv(i,m===void 0?new SA(h,s,e):new MA(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new EA(h),vv(i,_)),i=_}}}class Fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);bA(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function _v(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const TA=37297;let AA=0;function RA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const xv=new rt;function wA(s){Tt._getMatrix(xv,Tt.workingColorSpace,s);const e=`mat3( ${xv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case kc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+RA(s.getShaderSource(e),d)}else return l}function CA(s,e){const i=wA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function DA(s,e){let i;switch(e){case LM:i="Linear";break;case OM:i="Reinhard";break;case PM:i="Cineon";break;case BM:i="ACESFilmic";break;case IM:i="AgX";break;case FM:i="Neutral";break;case zM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new se;function NA(){Tt.getLuminanceCoefficients(Dc);const s=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function LA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function OA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Po(s){return s!==""}function Sv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(s){return s.replace(PA,zA)}const BA=new Map;function zA(s,e){let i=ot[e];if(i===void 0){const r=BA.get(e);if(r!==void 0)i=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(i)}const IA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(s){return s.replace(IA,FA)}function FA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function kA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function VA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wv:e="ENVMAP_BLENDING_MULTIPLY";break;case NM:e="ENVMAP_BLENDING_MIX";break;case UM:e="ENVMAP_BLENDING_ADD";break}return e}function jA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function XA(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=HA(i),m=kA(i),g=GA(i),_=VA(i),x=jA(i),S=UA(i),E=LA(c),R=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(y=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ot.tonemapping_pars_fragment:"",i.toneMapping!==Xa?DA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,CA("linearToOutputTexel",i.outputColorSpace),NA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),d=Eh(d),d=Sv(d,i),d=Mv(d,i),h=Eh(h),h=Sv(h,i),h=Mv(h,i),d=Ev(d),h=Ev(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+y+d,N=L+v+h,I=_v(l,l.VERTEX_SHADER,D),k=_v(l,l.FRAGMENT_SHADER,N);l.attachShader(R,I),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(s.debug.checkShaderErrors){const ue=l.getProgramInfoLog(R).trim(),oe=l.getShaderInfoLog(I).trim(),_e=l.getShaderInfoLog(k).trim();let pe=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,I,k);else{const K=yv(l,I,"vertex"),Y=yv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+K+`
`+Y)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(oe===""||_e==="")&&(z=!1);z&&(V.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:oe,prefix:y},fragmentShader:{log:_e,prefix:v}})}l.deleteShader(I),l.deleteShader(k),W=new Fc(l,R),U=OA(l,R)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,TA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=k,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new YA(e),i.set(e,r)),r}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function ZA(s,e,i,r,l,c,d){const h=new l_,p=new qA,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return m.add(U),U===0?"uv":`uv${U}`}function y(U,C,V,ue,oe){const _e=ue.fog,pe=oe.geometry,z=U.isMeshStandardMaterial?ue.environment:null,K=(U.isMeshStandardMaterial?i:e).get(U.envMap||z),Y=K&&K.mapping===Wc?K.image.height:null,be=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const O=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ee=O!==void 0?O.length:0;let ye=0;pe.morphAttributes.position!==void 0&&(ye=1),pe.morphAttributes.normal!==void 0&&(ye=2),pe.morphAttributes.color!==void 0&&(ye=3);let Me,J,me,Se;if(be){const Mt=Ti[be];Me=Mt.vertexShader,J=Mt.fragmentShader}else Me=U.vertexShader,J=U.fragmentShader,p.update(U),me=p.getVertexShaderID(U),Se=p.getFragmentShaderID(U);const Re=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),st=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,Ht=!!U.map,zt=!!U.matcap,ut=!!K,H=!!U.aoMap,On=!!U.lightMap,mt=!!U.bumpMap,nt=!!U.normalMap,Xe=!!U.displacementMap,Nt=!!U.emissiveMap,Ge=!!U.metalnessMap,P=!!U.roughnessMap,A=U.anisotropy>0,te=U.clearcoat>0,xe=U.dispersion>0,Ee=U.iridescence>0,de=U.sheen>0,Ie=U.transmission>0,we=A&&!!U.anisotropyMap,Ce=te&&!!U.clearcoatMap,gt=te&&!!U.clearcoatNormalMap,Ae=te&&!!U.clearcoatRoughnessMap,He=Ee&&!!U.iridescenceMap,Ye=Ee&&!!U.iridescenceThicknessMap,Qe=de&&!!U.sheenColorMap,Be=de&&!!U.sheenRoughnessMap,lt=!!U.specularMap,tt=!!U.specularColorMap,Ut=!!U.specularIntensityMap,j=Ie&&!!U.transmissionMap,Le=Ie&&!!U.thicknessMap,ce=!!U.gradientMap,ge=!!U.alphaMap,ze=U.alphaTest>0,Oe=!!U.alphaHash,it=!!U.extensions;let kt=Xa;U.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(kt=s.toneMapping);const tn={shaderID:be,shaderType:U.type,shaderName:U.name,vertexShader:Me,fragmentShader:J,defines:U.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:st,instancingColor:st&&oe.instanceColor!==null,instancingMorph:st&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Rs,alphaToCoverage:!!U.alphaToCoverage,map:Ht,matcap:zt,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:On,bumpMap:mt,normalMap:nt,displacementMap:x&&Xe,emissiveMap:Nt,normalMapObjectSpace:nt&&U.normalMapType===VM,normalMapTangentSpace:nt&&U.normalMapType===a_,metalnessMap:Ge,roughnessMap:P,anisotropy:A,anisotropyMap:we,clearcoat:te,clearcoatMap:Ce,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ae,dispersion:xe,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:Ye,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:lt,specularColorMap:tt,specularIntensityMap:Ut,transmission:Ie,transmissionMap:j,thicknessMap:Le,gradientMap:ce,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:ge,alphaTest:ze,alphaHash:Oe,combine:U.combine,mapUv:Ht&&R(U.map.channel),aoMapUv:H&&R(U.aoMap.channel),lightMapUv:On&&R(U.lightMap.channel),bumpMapUv:mt&&R(U.bumpMap.channel),normalMapUv:nt&&R(U.normalMap.channel),displacementMapUv:Xe&&R(U.displacementMap.channel),emissiveMapUv:Nt&&R(U.emissiveMap.channel),metalnessMapUv:Ge&&R(U.metalnessMap.channel),roughnessMapUv:P&&R(U.roughnessMap.channel),anisotropyMapUv:we&&R(U.anisotropyMap.channel),clearcoatMapUv:Ce&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:gt&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(U.sheenRoughnessMap.channel),specularMapUv:lt&&R(U.specularMap.channel),specularColorMapUv:tt&&R(U.specularColorMap.channel),specularIntensityMapUv:Ut&&R(U.specularIntensityMap.channel),transmissionMapUv:j&&R(U.transmissionMap.channel),thicknessMapUv:Le&&R(U.thicknessMap.channel),alphaMapUv:ge&&R(U.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(nt||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!pe.attributes.uv&&(Ht||ge),fog:!!_e,useFog:U.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Pe,skinning:oe.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ht&&U.map.isVideoTexture===!0&&Tt.getTransfer(U.map.colorSpace)===Bt,decodeVideoTextureEmissive:Nt&&U.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(U.emissiveMap.colorSpace)===Bt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:it&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&U.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return tn.vertexUv1s=m.has(1),tn.vertexUv2s=m.has(2),tn.vertexUv3s=m.has(3),m.clear(),tn}function v(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)C.push(V),C.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(L(C,U),D(C,U),C.push(s.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function L(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function N(U){const C=E[U.type];let V;if(C){const ue=Ti[C];V=SE.clone(ue.uniforms)}else V=U.uniforms;return V}function I(U,C){let V;for(let ue=0,oe=g.length;ue<oe;ue++){const _e=g[ue];if(_e.cacheKey===C){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new XA(s,C,U,c),g.push(V)),V}function k(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function F(U){p.remove(U)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:N,acquireProgram:I,releaseProgram:k,releaseShaderCache:F,programs:g,dispose:W}}function KA(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function QA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Av(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_,x,S,E,R,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:R,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=R,v.group=y),e++,v}function h(_,x,S,E,R,y){const v=d(_,x,S,E,R,y);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function p(_,x,S,E,R,y){const v=d(_,x,S,E,R,y);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||QA),r.length>1&&r.sort(x||Tv),l.length>1&&l.sort(x||Tv)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function JA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Av,s.set(r,[d])):l>=c.length?(d=new Av,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function $A(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Rt};break;case"SpotLight":i={position:new se,direction:new se,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=i,i}}}function e2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let t2=0;function n2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i2(s){const e=new $A,i=e2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const l=new se,c=new Jt,d=new Jt;function h(m){let g=0,_=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,R=0,y=0,v=0,L=0,D=0,N=0,I=0,k=0,F=0;m.sort(n2);for(let U=0,C=m.length;U<C;U++){const V=m[U],ue=V.color,oe=V.intensity,_e=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ue.r*oe,_+=ue.g*oe,x+=ue.b*oe;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],oe);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=V.shadow.matrix,L++}r.directional[S]=z,S++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ue).multiplyScalar(oe),z.distance=_e,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[R]=z;const K=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,K.updateMatrices(V),V.castShadow&&k++),r.spotLightMatrix[R]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=pe,N++}R++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(ue).multiplyScalar(oe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=V.shadow.matrix,D++}r.point[E]=z,E++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(oe),z.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[v]=z,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==R||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==L||W.numPointShadows!==D||W.numSpotShadows!==N||W.numSpotMaps!==I||W.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+I-k,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=R,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=L,W.numPointShadows=D,W.numSpotShadows=N,W.numSpotMaps=I,W.numLightProbes=F,r.version=t2++)}function p(m,g){let _=0,x=0,S=0,E=0,R=0;const y=g.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const D=m[v];if(D.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(D.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(D.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),E++}else if(D.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(y),R++}}}return{setup:h,setupView:p,state:r}}function Rv(s){const e=new i2(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function a2(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Rv(s),e.set(l,[h])):c>=d.length?(h=new Rv(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`;function o2(s,e,i){let r=new Fh;const l=new wt,c=new wt,d=new Qt,h=new DE({depthPacking:GM}),p=new NE,m={},g=i.maxTextureSize,_={[Wa]:kn,[kn]:Wa,[ia]:ia},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:r2,fragmentShader:s2}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Za;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let v=this.type;this.render=function(k,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const U=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(ja),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const oe=v!==na&&this.type===na,_e=v===na&&this.type!==na;for(let pe=0,z=k.length;pe<z;pe++){const K=k[pe],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const be=Y.getFrameExtents();if(l.multiply(be),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/be.x),l.x=c.x*be.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/be.y),l.y=c.y*be.y,Y.mapSize.y=c.y)),Y.map===null||oe===!0||_e===!0){const ee=this.type!==na?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wr(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const O=Y.getViewportCount();for(let ee=0;ee<O;ee++){const ye=Y.getViewport(ee);d.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ue.viewport(d),Y.updateMatrices(K,ee),r=Y.getFrustum(),N(F,W,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&L(Y,W),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(U,C,V)};function L(k,F){const W=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new wr(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,W,x,R,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,W,S,R,null)}function D(k,F,W,U){let C=null;const V=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)C=V;else if(C=W.isPointLight===!0?p:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=C.uuid,oe=F.uuid;let _e=m[ue];_e===void 0&&(_e={},m[ue]=_e);let pe=_e[oe];pe===void 0&&(pe=C.clone(),_e[oe]=pe,F.addEventListener("dispose",I)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,U===na?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=W}return C}function N(k,F,W,U,C){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===na)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const oe=e.update(k),_e=k.material;if(Array.isArray(_e)){const pe=oe.groups;for(let z=0,K=pe.length;z<K;z++){const Y=pe[z],be=_e[Y.materialIndex];if(be&&be.visible){const O=D(k,be,U,C);k.onBeforeShadow(s,k,F,W,oe,O,Y),s.renderBufferDirect(W,null,oe,O,k,Y),k.onAfterShadow(s,k,F,W,oe,O,Y)}}}else if(_e.visible){const pe=D(k,_e,U,C);k.onBeforeShadow(s,k,F,W,oe,pe,null),s.renderBufferDirect(W,null,oe,pe,k,null),k.onAfterShadow(s,k,F,W,oe,pe,null)}}const ue=k.children;for(let oe=0,_e=ue.length;oe<_e;oe++)N(ue[oe],F,W,U,C)}function I(k){k.target.removeEventListener("dispose",I);for(const W in m){const U=m[W],C=k.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const l2={[Fd]:Hd,[kd]:jd,[Gd]:Xd,[bs]:Vd,[Hd]:Fd,[jd]:kd,[Xd]:Gd,[Vd]:bs};function c2(s,e){function i(){let j=!1;const Le=new Qt;let ce=null;const ge=new Qt(0,0,0,0);return{setMask:function(ze){ce!==ze&&!j&&(s.colorMask(ze,ze,ze,ze),ce=ze)},setLocked:function(ze){j=ze},setClear:function(ze,Oe,it,kt,tn){tn===!0&&(ze*=kt,Oe*=kt,it*=kt),Le.set(ze,Oe,it,kt),ge.equals(Le)===!1&&(s.clearColor(ze,Oe,it,kt),ge.copy(Le))},reset:function(){j=!1,ce=null,ge.set(-1,0,0,0)}}}function r(){let j=!1,Le=!1,ce=null,ge=null,ze=null;return{setReversed:function(Oe){if(Le!==Oe){const it=e.get("EXT_clip_control");Oe?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Le=Oe;const kt=ze;ze=null,this.setClear(kt)}},getReversed:function(){return Le},setTest:function(Oe){Oe?Re(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Oe){ce!==Oe&&!j&&(s.depthMask(Oe),ce=Oe)},setFunc:function(Oe){if(Le&&(Oe=l2[Oe]),ge!==Oe){switch(Oe){case Fd:s.depthFunc(s.NEVER);break;case Hd:s.depthFunc(s.ALWAYS);break;case kd:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Vd:s.depthFunc(s.GEQUAL);break;case jd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Oe}},setLocked:function(Oe){j=Oe},setClear:function(Oe){ze!==Oe&&(Le&&(Oe=1-Oe),s.clearDepth(Oe),ze=Oe)},reset:function(){j=!1,ce=null,ge=null,ze=null,Le=!1}}}function l(){let j=!1,Le=null,ce=null,ge=null,ze=null,Oe=null,it=null,kt=null,tn=null;return{setTest:function(Mt){j||(Mt?Re(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!j&&(s.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Vn,hn){(ce!==Mt||ge!==Vn||ze!==hn)&&(s.stencilFunc(Mt,Vn,hn),ce=Mt,ge=Vn,ze=hn)},setOp:function(Mt,Vn,hn){(Oe!==Mt||it!==Vn||kt!==hn)&&(s.stencilOp(Mt,Vn,hn),Oe=Mt,it=Vn,kt=hn)},setLocked:function(Mt){j=Mt},setClear:function(Mt){tn!==Mt&&(s.clearStencil(Mt),tn=Mt)},reset:function(){j=!1,Le=null,ce=null,ge=null,ze=null,Oe=null,it=null,kt=null,tn=null}}}const c=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,R=!1,y=null,v=null,L=null,D=null,N=null,I=null,k=null,F=new Rt(0,0,0),W=0,U=!1,C=null,V=null,ue=null,oe=null,_e=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let be=null,O={};const ee=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new Qt().fromArray(ee),J=new Qt().fromArray(ye);function me(j,Le,ce,ge){const ze=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(j,Oe),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ce;it++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Le+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Oe}const Se={};Se[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Re(s.DEPTH_TEST),d.setFunc(bs),mt(!1),nt(D0),Re(s.CULL_FACE),H(ja);function Re(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Pe(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function st(j,Le){return _[j]!==Le?(s.bindFramebuffer(j,Le),_[j]=Le,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(j,Le){let ce=S,ge=!1;if(j){ce=x.get(Le),ce===void 0&&(ce=[],x.set(Le,ce));const ze=j.textures;if(ce.length!==ze.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,it=ze.length;Oe<it;Oe++)ce[Oe]=s.COLOR_ATTACHMENT0+Oe;ce.length=ze.length,ge=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ce)}function Ht(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const zt={[Er]:s.FUNC_ADD,[pM]:s.FUNC_SUBTRACT,[mM]:s.FUNC_REVERSE_SUBTRACT};zt[gM]=s.MIN,zt[vM]=s.MAX;const ut={[_M]:s.ZERO,[xM]:s.ONE,[yM]:s.SRC_COLOR,[zd]:s.SRC_ALPHA,[AM]:s.SRC_ALPHA_SATURATE,[bM]:s.DST_COLOR,[MM]:s.DST_ALPHA,[SM]:s.ONE_MINUS_SRC_COLOR,[Id]:s.ONE_MINUS_SRC_ALPHA,[TM]:s.ONE_MINUS_DST_COLOR,[EM]:s.ONE_MINUS_DST_ALPHA,[RM]:s.CONSTANT_COLOR,[wM]:s.ONE_MINUS_CONSTANT_COLOR,[CM]:s.CONSTANT_ALPHA,[DM]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,Le,ce,ge,ze,Oe,it,kt,tn,Mt){if(j===ja){R===!0&&(Pe(s.BLEND),R=!1);return}if(R===!1&&(Re(s.BLEND),R=!0),j!==hM){if(j!==y||Mt!==U){if((v!==Er||N!==Er)&&(s.blendEquation(s.FUNC_ADD),v=Er,N=Er),Mt)switch(j){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N0:s.blendFunc(s.ONE,s.ONE);break;case U0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case L0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case U0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case L0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,D=null,I=null,k=null,F.set(0,0,0),W=0,y=j,U=Mt}return}ze=ze||Le,Oe=Oe||ce,it=it||ge,(Le!==v||ze!==N)&&(s.blendEquationSeparate(zt[Le],zt[ze]),v=Le,N=ze),(ce!==L||ge!==D||Oe!==I||it!==k)&&(s.blendFuncSeparate(ut[ce],ut[ge],ut[Oe],ut[it]),L=ce,D=ge,I=Oe,k=it),(kt.equals(F)===!1||tn!==W)&&(s.blendColor(kt.r,kt.g,kt.b,tn),F.copy(kt),W=tn),y=j,U=!1}function On(j,Le){j.side===ia?Pe(s.CULL_FACE):Re(s.CULL_FACE);let ce=j.side===kn;Le&&(ce=!ce),mt(ce),j.blending===Ms&&j.transparent===!1?H(ja):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const ge=j.stencilWrite;h.setTest(ge),ge&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){C!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),C=j)}function nt(j){j!==uM?(Re(s.CULL_FACE),j!==V&&(j===D0?s.cullFace(s.BACK):j===fM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),V=j}function Xe(j){j!==ue&&(z&&s.lineWidth(j),ue=j)}function Nt(j,Le,ce){j?(Re(s.POLYGON_OFFSET_FILL),(oe!==Le||_e!==ce)&&(s.polygonOffset(Le,ce),oe=Le,_e=ce)):Pe(s.POLYGON_OFFSET_FILL)}function Ge(j){j?Re(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function P(j){j===void 0&&(j=s.TEXTURE0+pe-1),be!==j&&(s.activeTexture(j),be=j)}function A(j,Le,ce){ce===void 0&&(be===null?ce=s.TEXTURE0+pe-1:ce=be);let ge=O[ce];ge===void 0&&(ge={type:void 0,texture:void 0},O[ce]=ge),(ge.type!==j||ge.texture!==Le)&&(be!==ce&&(s.activeTexture(ce),be=ce),s.bindTexture(j,Le||Se[j]),ge.type=j,ge.texture=Le)}function te(){const j=O[be];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function xe(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function gt(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(j){Me.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Be(j){J.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function lt(j,Le){let ce=m.get(Le);ce===void 0&&(ce=new WeakMap,m.set(Le,ce));let ge=ce.get(j);ge===void 0&&(ge=s.getUniformBlockIndex(Le,j.name),ce.set(j,ge))}function tt(j,Le){const ge=m.get(Le).get(j);p.get(Le)!==ge&&(s.uniformBlockBinding(Le,ge,j.__bindingPointIndex),p.set(Le,ge))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},be=null,O={},_={},x=new WeakMap,S=[],E=null,R=!1,y=null,v=null,L=null,D=null,N=null,I=null,k=null,F=new Rt(0,0,0),W=0,U=!1,C=null,V=null,ue=null,oe=null,_e=null,Me.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Re,disable:Pe,bindFramebuffer:st,drawBuffers:Ke,useProgram:Ht,setBlending:H,setMaterial:On,setFlipSided:mt,setCullFace:nt,setLineWidth:Xe,setPolygonOffset:Nt,setScissorTest:Ge,activeTexture:P,bindTexture:A,unbindTexture:te,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:He,texImage3D:Ye,updateUBOMapping:lt,uniformBlockBinding:tt,texStorage2D:gt,texStorage3D:Ae,texSubImage2D:de,texSubImage3D:Ie,compressedTexSubImage2D:we,compressedTexSubImage3D:Ce,scissor:Qe,viewport:Be,reset:Ut}}function u2(s,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return S?new OffscreenCanvas(P,A):Vc("canvas")}function R(P,A,te){let xe=1;const Ee=Ge(P);if((Ee.width>te||Ee.height>te)&&(xe=te/Math.max(Ee.width,Ee.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(xe*Ee.width),Ie=Math.floor(xe*Ee.height);_===void 0&&(_=E(de,Ie));const we=A?E(de,Ie):_;return we.width=de,we.height=Ie,we.getContext("2d").drawImage(P,0,0,de,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+Ie+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,A,te,xe,Ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=A;if(A===s.RED&&(te===s.FLOAT&&(de=s.R32F),te===s.HALF_FLOAT&&(de=s.R16F),te===s.UNSIGNED_BYTE&&(de=s.R8)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.R8UI),te===s.UNSIGNED_SHORT&&(de=s.R16UI),te===s.UNSIGNED_INT&&(de=s.R32UI),te===s.BYTE&&(de=s.R8I),te===s.SHORT&&(de=s.R16I),te===s.INT&&(de=s.R32I)),A===s.RG&&(te===s.FLOAT&&(de=s.RG32F),te===s.HALF_FLOAT&&(de=s.RG16F),te===s.UNSIGNED_BYTE&&(de=s.RG8)),A===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RG8UI),te===s.UNSIGNED_SHORT&&(de=s.RG16UI),te===s.UNSIGNED_INT&&(de=s.RG32UI),te===s.BYTE&&(de=s.RG8I),te===s.SHORT&&(de=s.RG16I),te===s.INT&&(de=s.RG32I)),A===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGB8UI),te===s.UNSIGNED_SHORT&&(de=s.RGB16UI),te===s.UNSIGNED_INT&&(de=s.RGB32UI),te===s.BYTE&&(de=s.RGB8I),te===s.SHORT&&(de=s.RGB16I),te===s.INT&&(de=s.RGB32I)),A===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),te===s.UNSIGNED_INT&&(de=s.RGBA32UI),te===s.BYTE&&(de=s.RGBA8I),te===s.SHORT&&(de=s.RGBA16I),te===s.INT&&(de=s.RGBA32I)),A===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),A===s.RGBA){const Ie=Ee?kc:Tt.getTransfer(xe);te===s.FLOAT&&(de=s.RGBA32F),te===s.HALF_FLOAT&&(de=s.RGBA16F),te===s.UNSIGNED_BYTE&&(de=Ie===Bt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(P,A){let te;return P?A===null||A===Rr||A===Io?te=s.DEPTH24_STENCIL8:A===aa?te=s.DEPTH32F_STENCIL8:A===zo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===Io?te=s.DEPTH_COMPONENT24:A===aa?te=s.DEPTH_COMPONENT32F:A===zo&&(te=s.DEPTH_COMPONENT16),te}function I(P,A){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==Ai?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function k(P){const A=P.target;A.removeEventListener("dispose",k),W(A),A.isVideoTexture&&g.delete(A)}function F(P){const A=P.target;A.removeEventListener("dispose",F),C(A)}function W(P){const A=r.get(P);if(A.__webglInit===void 0)return;const te=P.source,xe=x.get(te);if(xe){const Ee=xe[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(P),Object.keys(xe).length===0&&x.delete(te)}r.remove(P)}function U(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const te=P.source,xe=x.get(te);delete xe[A.__cacheKey],d.memory.textures--}function C(P){const A=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Ee=0;Ee<A.__webglFramebuffer[xe].length;Ee++)s.deleteFramebuffer(A.__webglFramebuffer[xe][Ee]);else s.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[xe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=P.textures;for(let xe=0,Ee=te.length;xe<Ee;xe++){const de=r.get(te[xe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(te[xe])}r.remove(P)}let V=0;function ue(){V=0}function oe(){const P=V;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function _e(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function pe(P,A){const te=r.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const xe=P.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,P,A);return}}i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function z(P,A){const te=r.get(P);if(P.version>0&&te.__version!==P.version){J(te,P,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function K(P,A){const te=r.get(P);if(P.version>0&&te.__version!==P.version){J(te,P,A);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function Y(P,A){const te=r.get(P);if(P.version>0&&te.__version!==P.version){me(te,P,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const be={[Yd]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[Zd]:s.MIRRORED_REPEAT},O={[_i]:s.NEAREST,[HM]:s.NEAREST_MIPMAP_NEAREST,[cc]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[ad]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},ee={[jM]:s.NEVER,[KM]:s.ALWAYS,[XM]:s.LESS,[r_]:s.LEQUAL,[WM]:s.EQUAL,[ZM]:s.GEQUAL,[qM]:s.GREATER,[YM]:s.NOTEQUAL};function ye(P,A){if(A.type===aa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ai||A.magFilter===ad||A.magFilter===cc||A.magFilter===Ar||A.minFilter===Ai||A.minFilter===ad||A.minFilter===cc||A.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,be[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,be[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,be[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,O[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_i||A.minFilter!==cc&&A.minFilter!==Ar||A.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Me(P,A){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const xe=A.source;let Ee=x.get(xe);Ee===void 0&&(Ee={},x.set(xe,Ee));const de=_e(A);if(de!==P.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),Ee[de].usedTimes++;const Ie=Ee[P.__cacheKey];Ie!==void 0&&(Ee[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&U(A)),P.__cacheKey=de,P.__webglTexture=Ee[de].texture}return te}function J(P,A,te){let xe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=s.TEXTURE_3D);const Ee=Me(P,A),de=A.source;i.bindTexture(xe,P.__webglTexture,s.TEXTURE0+te);const Ie=r.get(de);if(de.version!==Ie.__version||Ee===!0){i.activeTexture(s.TEXTURE0+te);const we=Tt.getPrimaries(Tt.workingColorSpace),Ce=A.colorSpace===Va?null:Tt.getPrimaries(A.colorSpace),gt=A.colorSpace===Va||we===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ae=R(A.image,!1,l.maxTextureSize);Ae=Nt(A,Ae);const He=c.convert(A.format,A.colorSpace),Ye=c.convert(A.type);let Qe=D(A.internalFormat,He,Ye,A.colorSpace,A.isVideoTexture);ye(xe,A);let Be;const lt=A.mipmaps,tt=A.isVideoTexture!==!0,Ut=Ie.__version===void 0||Ee===!0,j=de.dataReady,Le=I(A,Ae);if(A.isDepthTexture)Qe=N(A.format===Ho,A.type),Ut&&(tt?i.texStorage2D(s.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,null));else if(A.isDataTexture)if(lt.length>0){tt&&Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,lt[0].width,lt[0].height);for(let ce=0,ge=lt.length;ce<ge;ce++)Be=lt[ce],tt?j&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,He,Ye,Be.data):i.texImage2D(s.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,He,Ye,Be.data);A.generateMipmaps=!1}else tt?(Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,Ae.width,Ae.height),j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,Ye,Ae.data)):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,lt[0].width,lt[0].height,Ae.depth);for(let ce=0,ge=lt.length;ce<ge;ce++)if(Be=lt[ce],A.format!==gi)if(He!==null)if(tt){if(j)if(A.layerUpdates.size>0){const ze=iv(Be.width,Be.height,A.format,A.type);for(const Oe of A.layerUpdates){const it=Be.data.subarray(Oe*ze/Be.data.BYTES_PER_ELEMENT,(Oe+1)*ze/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Oe,Be.width,Be.height,1,He,it)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Ae.depth,He,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Qe,Be.width,Be.height,Ae.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?j&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Ae.depth,He,Ye,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ce,Qe,Be.width,Be.height,Ae.depth,0,He,Ye,Be.data)}else{tt&&Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,lt[0].width,lt[0].height);for(let ce=0,ge=lt.length;ce<ge;ce++)Be=lt[ce],A.format!==gi?He!==null?tt?j&&i.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,He,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?j&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,Be.width,Be.height,He,Ye,Be.data):i.texImage2D(s.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,He,Ye,Be.data)}else if(A.isDataArrayTexture)if(tt){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,Ae.width,Ae.height,Ae.depth),j)if(A.layerUpdates.size>0){const ce=iv(Ae.width,Ae.height,A.format,A.type);for(const ge of A.layerUpdates){const ze=Ae.data.subarray(ge*ce/Ae.data.BYTES_PER_ELEMENT,(ge+1)*ce/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,He,Ye,ze)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(A.isData3DTexture)tt?(Ut&&i.texStorage3D(s.TEXTURE_3D,Le,Qe,Ae.width,Ae.height,Ae.depth),j&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(A.isFramebufferTexture){if(Ut)if(tt)i.texStorage2D(s.TEXTURE_2D,Le,Qe,Ae.width,Ae.height);else{let ce=Ae.width,ge=Ae.height;for(let ze=0;ze<Le;ze++)i.texImage2D(s.TEXTURE_2D,ze,Qe,ce,ge,0,He,Ye,null),ce>>=1,ge>>=1}}else if(lt.length>0){if(tt&&Ut){const ce=Ge(lt[0]);i.texStorage2D(s.TEXTURE_2D,Le,Qe,ce.width,ce.height)}for(let ce=0,ge=lt.length;ce<ge;ce++)Be=lt[ce],tt?j&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,He,Ye,Be):i.texImage2D(s.TEXTURE_2D,ce,Qe,He,Ye,Be);A.generateMipmaps=!1}else if(tt){if(Ut){const ce=Ge(Ae);i.texStorage2D(s.TEXTURE_2D,Le,Qe,ce.width,ce.height)}j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ye,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Qe,He,Ye,Ae);y(A)&&v(xe),Ie.__version=de.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function me(P,A,te){if(A.image.length!==6)return;const xe=Me(P,A),Ee=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+te);const de=r.get(Ee);if(Ee.version!==de.__version||xe===!0){i.activeTexture(s.TEXTURE0+te);const Ie=Tt.getPrimaries(Tt.workingColorSpace),we=A.colorSpace===Va?null:Tt.getPrimaries(A.colorSpace),Ce=A.colorSpace===Va||Ie===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!gt&&!Ae?He[ge]=R(A.image[ge],!0,l.maxCubemapSize):He[ge]=Ae?A.image[ge].image:A.image[ge],He[ge]=Nt(A,He[ge]);const Ye=He[0],Qe=c.convert(A.format,A.colorSpace),Be=c.convert(A.type),lt=D(A.internalFormat,Qe,Be,A.colorSpace),tt=A.isVideoTexture!==!0,Ut=de.__version===void 0||xe===!0,j=Ee.dataReady;let Le=I(A,Ye);ye(s.TEXTURE_CUBE_MAP,A);let ce;if(gt){tt&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,lt,Ye.width,Ye.height);for(let ge=0;ge<6;ge++){ce=He[ge].mipmaps;for(let ze=0;ze<ce.length;ze++){const Oe=ce[ze];A.format!==gi?Qe!==null?tt?j&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Oe.width,Oe.height,Qe,Oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,lt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Oe.width,Oe.height,Qe,Be,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,lt,Oe.width,Oe.height,0,Qe,Be,Oe.data)}}}else{if(ce=A.mipmaps,tt&&Ut){ce.length>0&&Le++;const ge=Ge(He[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,lt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){tt?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,Qe,Be,He[ge].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,He[ge].width,He[ge].height,0,Qe,Be,He[ge].data);for(let ze=0;ze<ce.length;ze++){const it=ce[ze].image[ge].image;tt?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,it.width,it.height,Qe,Be,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,lt,it.width,it.height,0,Qe,Be,it.data)}}else{tt?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Qe,Be,He[ge]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,lt,Qe,Be,He[ge]);for(let ze=0;ze<ce.length;ze++){const Oe=ce[ze];tt?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,Qe,Be,Oe.image[ge]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,lt,Qe,Be,Oe.image[ge])}}}y(A)&&v(s.TEXTURE_CUBE_MAP),de.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,te,xe,Ee,de){const Ie=c.convert(te.format,te.colorSpace),we=c.convert(te.type),Ce=D(te.internalFormat,Ie,we,te.colorSpace),gt=r.get(A),Ae=r.get(te);if(Ae.__renderTarget=A,!gt.__hasExternalTextures){const He=Math.max(1,A.width>>de),Ye=Math.max(1,A.height>>de);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,de,Ce,He,Ye,A.depth,0,Ie,we,null):i.texImage2D(Ee,de,Ce,He,Ye,0,Ie,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,0,mt(A)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,de),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const xe=A.depthTexture,Ee=xe&&xe.isDepthTexture?xe.type:null,de=N(A.stencilBuffer,Ee),Ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=mt(A);nt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,de,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,P)}else{const xe=A.textures;for(let Ee=0;Ee<xe.length;Ee++){const de=xe[Ee],Ie=c.convert(de.format,de.colorSpace),we=c.convert(de.type),Ce=D(de.internalFormat,Ie,we,de.colorSpace),gt=mt(A);te&&nt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Ce,A.width,A.height):nt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const Ee=xe.__webglTexture,de=mt(A);if(A.depthTexture.format===Fo)nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===Ho)nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function st(P){const A=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",Ee)};xe.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=xe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Pe(A.__webglFramebuffer,P)}else if(te){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=s.createRenderbuffer(),Re(A.__webglDepthbuffer[xe],P,!1);else{const Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,de)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Re(A.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ee)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,A,te){const xe=r.get(P);A!==void 0&&Se(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&st(P)}function Ht(P){const A=P.texture,te=r.get(P),xe=r.get(A);P.addEventListener("dispose",F);const Ee=P.textures,de=P.isWebGLCubeRenderTarget===!0,Ie=Ee.length>1;if(Ie||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=A.version,d.memory.textures++),de){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)te.__webglFramebuffer[we][Ce]=s.createFramebuffer()}else te.__webglFramebuffer[we]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)te.__webglFramebuffer[we]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let we=0,Ce=Ee.length;we<Ce;we++){const gt=r.get(Ee[we]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&nt(P)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const Ce=Ee[we];te.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const gt=c.convert(Ce.format,Ce.colorSpace),Ae=c.convert(Ce.type),He=D(Ce.internalFormat,gt,Ae,Ce.colorSpace,P.isXRRenderTarget===!0),Ye=mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,He,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,te.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(s.TEXTURE_CUBE_MAP,A);for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)Se(te.__webglFramebuffer[we][Ce],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ce);else Se(te.__webglFramebuffer[we],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(A)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let we=0,Ce=Ee.length;we<Ce;we++){const gt=Ee[we],Ae=r.get(gt);i.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),ye(s.TEXTURE_2D,gt),Se(te.__webglFramebuffer,P,gt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),y(gt)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,xe.__webglTexture),ye(we,A),A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)Se(te.__webglFramebuffer[Ce],P,A,s.COLOR_ATTACHMENT0,we,Ce);else Se(te.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,we,0);y(A)&&v(we),i.unbindTexture()}P.depthBuffer&&st(P)}function zt(P){const A=P.textures;for(let te=0,xe=A.length;te<xe;te++){const Ee=A[te];if(y(Ee)){const de=L(P),Ie=r.get(Ee).__webglTexture;i.bindTexture(de,Ie),v(de),i.unbindTexture()}}}const ut=[],H=[];function On(P){if(P.samples>0){if(nt(P)===!1){const A=P.textures,te=P.width,xe=P.height;let Ee=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(P),we=A.length>1;if(we)for(let Ce=0;Ce<A.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const gt=r.get(A[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,te,xe,0,0,te,xe,Ee,s.NEAREST),p===!0&&(ut.length=0,H.length=0,ut.push(s.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ut.push(de),H.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ce=0;Ce<A.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const gt=r.get(A[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,gt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function mt(P){return Math.min(l.maxSamples,P.samples)}function nt(P){const A=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(P){const A=d.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Nt(P,A){const te=P.colorSpace,xe=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Rs&&te!==Va&&(Tt.getTransfer(te)===Bt?(xe!==gi||Ee!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=nt}function f2(s,e){function i(r,l=Va){let c;const d=Tt.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===Uh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Yv)return s.BYTE;if(r===Zv)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Nh)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===aa)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===Qv)return s.ALPHA;if(r===Jv)return s.RGB;if(r===gi)return s.RGBA;if(r===$v)return s.LUMINANCE;if(r===e_)return s.LUMINANCE_ALPHA;if(r===Fo)return s.DEPTH_COMPONENT;if(r===Ho)return s.DEPTH_STENCIL;if(r===t_)return s.RED;if(r===Oh)return s.RED_INTEGER;if(r===n_)return s.RG;if(r===Ph)return s.RG_INTEGER;if(r===Bh)return s.RGBA_INTEGER;if(r===Lc||r===Oc||r===Pc||r===Bc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh||r===th||r===nh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===eh||r===th)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ih)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===vh||r===_h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===zc)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===i_||r===xh||r===yh||r===Sh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Gn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qa({vertexShader:d2,fragmentShader:h2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Ko(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m2 extends Ns{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,S=null,E=null;const R=new p2,y=i.getContextAttributes();let v=null,L=null;const D=[],N=[],I=new wt;let k=null;const F=new li;F.viewport=new Qt;const W=new li;W.viewport=new Qt;const U=[F,W],C=new BE;let V=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=D[J];return me===void 0&&(me=new Ad,D[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=D[J];return me===void 0&&(me=new Ad,D[J]=me),me.getGripSpace()},this.getHand=function(J){let me=D[J];return me===void 0&&(me=new Ad,D[J]=me),me.getHandSpace()};function oe(J){const me=N.indexOf(J.inputSource);if(me===-1)return;const Se=D[me];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||d),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",pe);for(let J=0;J<D.length;J++){const me=N[J];me!==null&&(N[J]=null,D[J].disconnect(me))}V=null,ue=null,R.reset(),e.setRenderTarget(v),S=null,x=null,_=null,l=null,L=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,Pe=null;y.depth&&(Pe=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=y.stencil?Ho:Fo,Re=y.stencil?Io:Rr);const st={colorFormat:i.RGBA8,depthFormat:Pe,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(st),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new wr(x.textureWidth,x.textureHeight,{format:gi,type:ca,depthTexture:new g_(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new wr(S.framebufferWidth,S.framebufferHeight,{format:gi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function pe(J){for(let me=0;me<J.removed.length;me++){const Se=J.removed[me],Re=N.indexOf(Se);Re>=0&&(N[Re]=null,D[Re].disconnect(Se))}for(let me=0;me<J.added.length;me++){const Se=J.added[me];let Re=N.indexOf(Se);if(Re===-1){for(let st=0;st<D.length;st++)if(st>=N.length){N.push(Se),Re=st;break}else if(N[st]===null){N[st]=Se,Re=st;break}if(Re===-1)break}const Pe=D[Re];Pe&&Pe.connect(Se)}}const z=new se,K=new se;function Y(J,me,Se){z.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Re=z.distanceTo(K),Pe=me.projectionMatrix.elements,st=Se.projectionMatrix.elements,Ke=Pe[14]/(Pe[10]-1),Ht=Pe[14]/(Pe[10]+1),zt=(Pe[9]+1)/Pe[5],ut=(Pe[9]-1)/Pe[5],H=(Pe[8]-1)/Pe[0],On=(st[8]+1)/st[0],mt=Ke*H,nt=Ke*On,Xe=Re/(-H+On),Nt=Xe*-H;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ge=Ke+Xe,P=Ht+Xe,A=mt-Nt,te=nt+(Re-Nt),xe=zt*Ht/P*Ge,Ee=ut*Ht/P*Ge;J.projectionMatrix.makePerspective(A,te,xe,Ee,Ge,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,Se=J.far;R.texture!==null&&(R.depthNear>0&&(me=R.depthNear),R.depthFar>0&&(Se=R.depthFar)),C.near=W.near=F.near=me,C.far=W.far=F.far=Se,(V!==C.near||ue!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ue=C.far),F.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=F.layers.mask|W.layers.mask;const Re=J.parent,Pe=C.cameras;be(C,Re);for(let st=0;st<Pe.length;st++)be(Pe[st],Re);Pe.length===2?Y(C,F,W):C.projectionMatrix.copy(F.projectionMatrix),O(J,C,Re)};function O(J,me,Se){Se===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Mh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let ee=null;function ye(J,me){if(g=me.getViewerPose(m||d),E=me,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Re=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Ke=0;Ke<Se.length;Ke++){const Ht=Se[Ke];let zt=null;if(S!==null)zt=S.getViewport(Ht);else{const H=_.getViewSubImage(x,Ht);zt=H.viewport,Ke===0&&(e.setRenderTargetTextures(L,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(L))}let ut=U[Ke];ut===void 0&&(ut=new li,ut.layers.enable(Ke),ut.viewport=new Qt,U[Ke]=ut),ut.matrix.fromArray(Ht.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Ht.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(zt.x,zt.y,zt.width,zt.height),Ke===0&&(C.matrix.copy(ut.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(ut)}const Pe=l.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&R.init(e,Ke,l.renderState)}}for(let Se=0;Se<D.length;Se++){const Re=N[Se],Pe=D[Se];Re!==null&&Pe!==void 0&&Pe.update(Re,me,m||d)}ee&&ee(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Me=new x_;Me.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const yr=new Di,g2=new Jt;function v2(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,h_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,D,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,N)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),R(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?p(y,v,L,D):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,N=L.envMapRotation;D&&(y.envMap.value=D,yr.copy(N),yr.x*=-1,yr.y*=-1,yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),y.envMapRotation.value.setFromMatrix4(g2.makeRotationFromEuler(yr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,L,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _2(s,e,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,D){const N=D.program;r.uniformBlockBinding(L,N)}function m(L,D){let N=l[L.id];N===void 0&&(E(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",y));const I=D.program;r.updateUBOMapping(L,I);const k=e.render.frame;c[L.id]!==k&&(x(L),c[L.id]=k)}function g(L){const D=_();L.__bindingPointIndex=D;const N=s.createBuffer(),I=L.__size,k=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,I,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,N),N}function _(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],N=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,F=N.length;k<F;k++){const W=Array.isArray(N[k])?N[k]:[N[k]];for(let U=0,C=W.length;U<C;U++){const V=W[U];if(S(V,k,U,I)===!0){const ue=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let pe=0;pe<oe.length;pe++){const z=oe[pe],K=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ue+_e,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,D,N,I){const k=L.value,F=D+"_"+N;if(I[F]===void 0)return typeof k=="number"||typeof k=="boolean"?I[F]=k:I[F]=k.clone(),!0;{const W=I[F];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return I[F]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function E(L){const D=L.uniforms;let N=0;const I=16;for(let F=0,W=D.length;F<W;F++){const U=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,V=U.length;C<V;C++){const ue=U[C],oe=Array.isArray(ue.value)?ue.value:[ue.value];for(let _e=0,pe=oe.length;_e<pe;_e++){const z=oe[_e],K=R(z),Y=N%I,be=Y%K.boundary,O=Y+be;N+=be,O!==0&&I-O<K.storage&&(N+=I-O),ue.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=N,N+=K.storage}}}const k=N%I;return k>0&&(N+=I-k),L.__size=N,L.__cache={},this}function R(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const N=d.indexOf(D.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const L in l)s.deleteBuffer(l[L]);d=[],l={},c={}}return{bind:p,update:m,dispose:v}}class x2{constructor(e={}){const{canvas:i=JM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const L=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1;this._outputColorSpace=oi;let k=0,F=0,W=null,U=-1,C=null;const V=new Qt,ue=new Qt;let oe=null;const _e=new Rt(0);let pe=0,z=i.width,K=i.height,Y=1,be=null,O=null;const ee=new Qt(0,0,z,K),ye=new Qt(0,0,z,K);let Me=!1;const J=new Fh;let me=!1,Se=!1;const Re=new Jt,Pe=new Jt,st=new se,Ke=new Qt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ut(){return W===null?Y:1}let H=r;function On(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dh}`),i.addEventListener("webglcontextlost",ge,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),H===null){const q="webgl2";if(H=On(q,w),H===null)throw On(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,nt,Xe,Nt,Ge,P,A,te,xe,Ee,de,Ie,we,Ce,gt,Ae,He,Ye,Qe,Be,lt,tt,Ut,j;function Le(){mt=new CT(H),mt.init(),tt=new f2(H,mt),nt=new MT(H,mt,e,tt),Xe=new c2(H,mt),nt.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Nt=new UT(H),Ge=new KA,P=new u2(H,mt,Xe,Ge,nt,tt,Nt),A=new bT(N),te=new wT(N),xe=new IE(H),Ut=new yT(H,xe),Ee=new DT(H,xe,Nt,Ut),de=new OT(H,Ee,xe,Nt),Qe=new LT(H,nt,P),Ae=new ET(Ge),Ie=new ZA(N,A,te,mt,nt,Ut,Ae),we=new v2(N,Ge),Ce=new JA,gt=new a2(mt),Ye=new xT(N,A,te,Xe,de,S,p),He=new o2(N,de,nt),j=new _2(H,Nt,nt,Xe),Be=new ST(H,mt,Nt),lt=new NT(H,mt,Nt),Nt.programs=Ie.programs,N.capabilities=nt,N.extensions=mt,N.properties=Ge,N.renderLists=Ce,N.shadowMap=He,N.state=Xe,N.info=Nt}Le();const ce=new m2(N,H);this.xr=ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(z,K,!1))},this.getSize=function(w){return w.set(z,K)},this.setSize=function(w,q,ae=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,K=q,i.width=Math.floor(w*Y),i.height=Math.floor(q*Y),ae===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(w,q,ae){z=w,K=q,Y=ae,i.width=Math.floor(w*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,q,ae,re){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,q,ae,re),Xe.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,q,ae,re){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,q,ae,re),Xe.scissor(ue.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Xe.setScissorTest(Me=w)},this.setOpaqueSort=function(w){be=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ae=!0){let re=0;if(w){let Z=!1;if(W!==null){const Te=W.texture.format;Z=Te===Bh||Te===Ph||Te===Oh}if(Z){const Te=W.texture.type,De=Te===ca||Te===Rr||Te===zo||Te===Io||Te===Uh||Te===Lh,Ne=Ye.getClearColor(),Fe=Ye.getClearAlpha(),$e=Ne.r,We=Ne.g,je=Ne.b;De?(E[0]=$e,E[1]=We,E[2]=je,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=$e,R[1]=We,R[2]=je,R[3]=Fe,H.clearBufferiv(H.COLOR,0,R))}else re|=H.COLOR_BUFFER_BIT}q&&(re|=H.DEPTH_BUFFER_BIT),ae&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ge,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Ye.dispose(),Ce.dispose(),gt.dispose(),Ge.dispose(),A.dispose(),te.dispose(),de.dispose(),Ut.dispose(),j.dispose(),Ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",on),ce.removeEventListener("sessionend",xn),Pn.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=Nt.autoReset,q=He.enabled,ae=He.autoUpdate,re=He.needsUpdate,Z=He.type;Le(),Nt.autoReset=w,He.enabled=q,He.autoUpdate=ae,He.needsUpdate=re,He.type=Z}function Oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const q=w.target;q.removeEventListener("dispose",it),kt(q)}function kt(w){tn(w),Ge.remove(w)}function tn(w){const q=Ge.get(w).programs;q!==void 0&&(q.forEach(function(ae){Ie.releaseProgram(ae)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ae,re,Z,Te){q===null&&(q=Ht);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Ja(w,q,ae,re,Z);Xe.setMaterial(re,De);let Fe=ae.index,$e=1;if(re.wireframe===!0){if(Fe=Ee.getWireframeAttribute(ae),Fe===void 0)return;$e=2}const We=ae.drawRange,je=ae.attributes.position;let dt=We.start*$e,Et=(We.start+We.count)*$e;Te!==null&&(dt=Math.max(dt,Te.start*$e),Et=Math.min(Et,(Te.start+Te.count)*$e)),Fe!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Fe.count)):je!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,je.count));const Xt=Et-dt;if(Xt<0||Xt===1/0)return;Ut.setup(Z,re,Ne,ae,Fe);let vt,_t=Be;if(Fe!==null&&(vt=xe.get(Fe),_t=lt,_t.setIndex(vt)),Z.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*ut()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(Z.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),Xe.setLineWidth(qe*ut()),Z.isLineSegments?_t.setMode(H.LINES):Z.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else Z.isPoints?_t.setMode(H.POINTS):Z.isSprite&&_t.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ic("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,Yt=Z._multiDrawCounts,St=Z._multiDrawCount,bn=Fe?xe.get(Fe).bytesPerElement:1,pa=Ge.get(re).currentProgram.getUniforms();for(let Gt=0;Gt<St;Gt++)pa.setValue(H,"_gl_DrawID",Gt),_t.render(qe[Gt]/bn,Yt[Gt])}else if(Z.isInstancedMesh)_t.renderInstances(dt,Xt,Z.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Yt=Math.min(ae.instanceCount,qe);_t.renderInstances(dt,Xt,Yt)}else _t.render(dt,Xt)};function Mt(w,q,ae){w.transparent===!0&&w.side===ia&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,da(w,q,ae),w.side=Wa,w.needsUpdate=!0,da(w,q,ae),w.side=ia):da(w,q,ae)}this.compile=function(w,q,ae=null){ae===null&&(ae=w),v=gt.get(ae),v.init(q),D.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),w!==ae&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const re=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ne=Te[De];Mt(Ne,ae,Z),re.add(Ne)}else Mt(Te,ae,Z),re.add(Te)}),v=D.pop(),re},this.compileAsync=function(w,q,ae=null){const re=this.compile(w,q,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(De){Ge.get(De).currentProgram.isReady()&&re.delete(De)}),re.size===0){Z(w);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Vn=null;function hn(w){Vn&&Vn(w)}function on(){Pn.stop()}function xn(){Pn.start()}const Pn=new x_;Pn.setAnimationLoop(hn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){Vn=w,ce.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},ce.addEventListener("sessionstart",on),ce.addEventListener("sessionend",xn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,q,W),v=gt.get(w,D.length),v.init(q),D.push(v),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,Se),y=Ce.get(w,L.length),y.init(),L.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Ka(Te,q,-1/0,N.sortObjects)}Ka(w,q,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(be,O),zt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,zt&&Ye.addToRenderList(y,w),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=v.state.shadowsArray;He.render(ae,w,q),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Z=y.transmissive;if(v.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Z.length>0)for(let De=0,Ne=Te.length;De<Ne;De++){const Fe=Te[De];Jo(re,Z,w,Fe)}zt&&Ye.render(w);for(let De=0,Ne=Te.length;De<Ne;De++){const Fe=Te[De];Qo(y,w,Fe,Fe.viewport)}}else Z.length>0&&Jo(re,Z,w,q),zt&&Ye.render(w),Qo(y,w,q);W!==null&&F===0&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),w.isScene===!0&&w.onAfterRender(N,w,q),Ut.resetDefaultState(),U=-1,C=null,D.pop(),D.length>0?(v=D[D.length-1],me===!0&&Ae.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Ka(w,q,ae,re){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){re&&Ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pe);const De=de.update(w),Ne=w.material;Ne.visible&&y.push(w,De,Ne,ae,Ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const De=de.update(w),Ne=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ke.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ke.copy(De.boundingSphere.center)),Ke.applyMatrix4(w.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ne)){const Fe=De.groups;for(let $e=0,We=Fe.length;$e<We;$e++){const je=Fe[$e],dt=Ne[je.materialIndex];dt&&dt.visible&&y.push(w,De,dt,ae,Ke.z,je)}}else Ne.visible&&y.push(w,De,Ne,ae,Ke.z,null)}}const Te=w.children;for(let De=0,Ne=Te.length;De<Ne;De++)Ka(Te[De],q,ae,re)}function Qo(w,q,ae,re){const Z=w.opaque,Te=w.transmissive,De=w.transparent;v.setupLightsView(ae),me===!0&&Ae.setGlobalState(N.clippingPlanes,ae),re&&Xe.viewport(V.copy(re)),Z.length>0&&Qa(Z,q,ae),Te.length>0&&Qa(Te,q,ae),De.length>0&&Qa(De,q,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Jo(w,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new wr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?jo:ca,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[re.id],De=re.viewport||V;Te.setSize(De.z*N.transmissionResolutionScale,De.w*N.transmissionResolutionScale);const Ne=N.getRenderTarget();N.setRenderTarget(Te),N.getClearColor(_e),pe=N.getClearAlpha(),pe<1&&N.setClearColor(16777215,.5),N.clear(),zt&&Ye.render(ae);const Fe=N.toneMapping;N.toneMapping=Xa;const $e=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),me===!0&&Ae.setGlobalState(N.clippingPlanes,re),Qa(w,ae,re),P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let je=0,dt=q.length;je<dt;je++){const Et=q[je],Xt=Et.object,vt=Et.geometry,_t=Et.material,qe=Et.group;if(_t.side===ia&&Xt.layers.test(re.layers)){const Yt=_t.side;_t.side=kn,_t.needsUpdate=!0,fa(Xt,ae,re,vt,_t,qe),_t.side=Yt,_t.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te))}N.setRenderTarget(Ne),N.setClearColor(_e,pe),$e!==void 0&&(re.viewport=$e),N.toneMapping=Fe}function Qa(w,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=w.length;Z<Te;Z++){const De=w[Z],Ne=De.object,Fe=De.geometry,$e=De.group;let We=De.material;We.allowOverride===!0&&re!==null&&(We=re),Ne.layers.test(ae.layers)&&fa(Ne,q,ae,Fe,We,$e)}}function fa(w,q,ae,re,Z,Te){w.onBeforeRender(N,q,ae,re,Z,Te),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(N,q,ae,re,w,Te),Z.transparent===!0&&Z.side===ia&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,N.renderBufferDirect(ae,q,re,Z,w,Te),Z.side=Wa,Z.needsUpdate=!0,N.renderBufferDirect(ae,q,re,Z,w,Te),Z.side=ia):N.renderBufferDirect(ae,q,re,Z,w,Te),w.onAfterRender(N,q,ae,re,Z,Te)}function da(w,q,ae){q.isScene!==!0&&(q=Ht);const re=Ge.get(w),Z=v.state.lights,Te=v.state.shadowsArray,De=Z.state.version,Ne=Ie.getParameters(w,Z.state,Te,q,ae),Fe=Ie.getProgramCacheKey(Ne);let $e=re.programs;re.environment=w.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(w.isMeshStandardMaterial?te:A).get(w.envMap||re.environment),re.envMapRotation=re.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",it),$e=new Map,re.programs=$e);let We=$e.get(Fe);if(We!==void 0){if(re.currentProgram===We&&re.lightsStateVersion===De)return Li(w,Ne),We}else Ne.uniforms=Ie.getUniforms(w),w.onBeforeCompile(Ne,N),We=Ie.acquireProgram(Ne,Fe),$e.set(Fe,We),re.uniforms=Ne.uniforms;const je=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ae.uniform),Li(w,Ne),re.needsLights=nn(w),re.lightsStateVersion=De,re.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=We,re.uniformsList=null,We}function Ui(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Li(w,q){const ae=Ge.get(w);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Ja(w,q,ae,re,Z){q.isScene!==!0&&(q=Ht),P.resetTextureUnits();const Te=q.fog,De=re.isMeshStandardMaterial?q.environment:null,Ne=W===null?N.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Rs,Fe=(re.isMeshStandardMaterial?te:A).get(re.envMap||De),$e=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let Xt=Xa;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=N.toneMapping);const vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,_t=vt!==void 0?vt.length:0,qe=Ge.get(re),Yt=v.state.lights;if(me===!0&&(Se===!0||w!==C)){const pn=w===C&&re.id===U;Ae.setState(re,w,pn)}let St=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Yt.state.version||qe.outputColorSpace!==Ne||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==Fe||re.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==$e||qe.vertexTangents!==We||qe.morphTargets!==je||qe.morphNormals!==dt||qe.morphColors!==Et||qe.toneMapping!==Xt||qe.morphTargetsCount!==_t)&&(St=!0):(St=!0,qe.__version=re.version);let bn=qe.currentProgram;St===!0&&(bn=da(re,q,Z));let pa=!1,Gt=!1,Pi=!1;const It=bn.getUniforms(),Tn=qe.uniforms;if(Xe.useProgram(bn.program)&&(pa=!0,Gt=!0,Pi=!0),re.id!==U&&(U=re.id,Gt=!0),pa||C!==w){Xe.buffers.depth.getReversed()?(Re.copy(w.projectionMatrix),eE(Re),tE(Re),It.setValue(H,"projectionMatrix",Re)):It.setValue(H,"projectionMatrix",w.projectionMatrix),It.setValue(H,"viewMatrix",w.matrixWorldInverse);const yn=It.map.cameraPosition;yn!==void 0&&yn.setValue(H,st.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&It.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Gt=!0,Pi=!0)}if(Z.isSkinnedMesh){It.setOptional(H,Z,"bindMatrix"),It.setOptional(H,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),It.setValue(H,"boneTexture",pn.boneTexture,P))}Z.isBatchedMesh&&(It.setOptional(H,Z,"batchingTexture"),It.setValue(H,"batchingTexture",Z._matricesTexture,P),It.setOptional(H,Z,"batchingIdTexture"),It.setValue(H,"batchingIdTexture",Z._indirectTexture,P),It.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&It.setValue(H,"batchingColorTexture",Z._colorsTexture,P));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(Z,ae,bn),(Gt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,It.setValue(H,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Gt&&(It.setValue(H,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&ha(Tn,Pi),Te&&re.fog===!0&&we.refreshFogUniforms(Tn,Te),we.refreshMaterialUniforms(Tn,re,Y,K,v.state.transmissionRenderTarget[w.id]),Fc.upload(H,Ui(qe),Tn,P)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Fc.upload(H,Ui(qe),Tn,P),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(H,"center",Z.center),It.setValue(H,"modelViewMatrix",Z.modelViewMatrix),It.setValue(H,"normalMatrix",Z.normalMatrix),It.setValue(H,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pn=re.uniformsGroups;for(let yn=0,xi=pn.length;yn<xi;yn++){const Bi=pn[yn];j.update(Bi,bn),j.bind(Bi,bn)}}return bn}function ha(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,q,ae){const re=Ge.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=q,Ge.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ae=Ge.get(w);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const $o=H.createFramebuffer();this.setRenderTarget=function(w,q=0,ae=0){W=w,k=q,F=ae;let re=!0,Z=null,Te=!1,De=!1;if(w){const Fe=Ge.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Fe.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Fe.__hasExternalTextures)P.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const je=w.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&Ge.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const We=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[q])?Z=We[q][ae]:Z=We[q],Te=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?Z=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[ae]:Z=We,V.copy(w.viewport),ue.copy(w.scissor),oe=w.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),ue.copy(ye).multiplyScalar(Y).floor(),oe=Me;if(ae!==0&&(Z=$o),Xe.bindFramebuffer(H.FRAMEBUFFER,Z)&&re&&Xe.drawBuffers(w,Z),Xe.viewport(V),Xe.scissor(ue),Xe.setScissorTest(oe),Te){const Fe=Ge.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,ae)}else if(De){const Fe=Ge.get(w.texture),$e=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,ae,$e)}else if(w!==null&&ae!==0){const Fe=Ge.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,ae)}U=-1},this.readRenderTargetPixels=function(w,q,ae,re,Z,Te,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){Xe.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const Fe=w.texture,$e=Fe.format,We=Fe.type;if(!nt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-re&&ae>=0&&ae<=w.height-Z&&H.readPixels(q,ae,re,Z,tt.convert($e),tt.convert(We),Te)}finally{const Fe=W!==null?Ge.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,q,ae,re,Z,Te,De){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(q>=0&&q<=w.width-re&&ae>=0&&ae<=w.height-Z){Xe.bindFramebuffer(H.FRAMEBUFFER,Ne);const Fe=w.texture,$e=Fe.format,We=Fe.type;if(!nt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(q,ae,re,Z,tt.convert($e),tt.convert(We),0);const dt=W!==null?Ge.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,dt);const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await $M(H,Et,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(je),H.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(w.image.width*re),Te=Math.floor(w.image.height*re),De=q!==null?q.x:0,Ne=q!==null?q.y:0;P.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,De,Ne,Z,Te),Xe.unbindTexture()};const el=H.createFramebuffer(),Oi=H.createFramebuffer();this.copyTextureToTexture=function(w,q,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(Ic("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let De,Ne,Fe,$e,We,je,dt,Et,Xt;const vt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(ae!==null)De=ae.max.x-ae.min.x,Ne=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,We=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-Z);De=Math.floor(vt.width*ln),Ne=Math.floor(vt.height*ln),w.isDataArrayTexture?Fe=vt.depth:w.isData3DTexture?Fe=Math.floor(vt.depth*ln):Fe=1,$e=0,We=0,je=0}re!==null?(dt=re.x,Et=re.y,Xt=re.z):(dt=0,Et=0,Xt=0);const _t=tt.convert(q.format),qe=tt.convert(q.type);let Yt;q.isData3DTexture?(P.setTexture3D(q,0),Yt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),Yt=H.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),Yt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const St=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pa=H.getParameter(H.UNPACK_SKIP_PIXELS),Gt=H.getParameter(H.UNPACK_SKIP_ROWS),Pi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const It=w.isDataArrayTexture||w.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const ln=Ge.get(w),pn=Ge.get(q),yn=Ge.get(ln.__renderTarget),xi=Ge.get(pn.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Bi=0;Bi<Fe;Bi++)It&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,Z,je+Bi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(q).__webglTexture,Te,Xt+Bi)),H.blitFramebuffer($e,We,De,Ne,dt,Et,De,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Ge.has(w)){const ln=Ge.get(w),pn=Ge.get(q);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,el),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Oi);for(let yn=0;yn<Fe;yn++)It?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,Z,je+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,Z),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Te,Xt+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Te),Z!==0?H.blitFramebuffer($e,We,De,Ne,dt,Et,De,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Yt,Te,dt,Et,Xt+yn,$e,We,De,Ne):H.copyTexSubImage2D(Yt,Te,dt,Et,$e,We,De,Ne);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Yt,Te,dt,Et,Xt,De,Ne,Fe,_t,qe,vt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Yt,Te,dt,Et,Xt,De,Ne,Fe,_t,vt.data):H.texSubImage3D(Yt,Te,dt,Et,Xt,De,Ne,Fe,_t,qe,vt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,dt,Et,De,Ne,_t,qe,vt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,dt,Et,vt.width,vt.height,_t,vt.data):H.texSubImage2D(H.TEXTURE_2D,Te,dt,Et,De,Ne,_t,qe,vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,St),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pa),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pi),Te===0&&q.generateMipmaps&&H.generateMipmap(Yt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,q,ae=null,re=null,Z=0){return Ic('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,ae,re,Z)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){k=0,F=0,W=null,Xe.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const b_=()=>{const s=le.useRef(null),e=le.useRef(0);return le.useEffect(()=>{const i=new RE,r=new li(75,window.innerWidth/window.innerHeight,.1,1e3),l=new x2({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.current&&(s.current.appendChild(l.domElement),l.domElement.style.position="absolute",l.domElement.style.top="0",l.domElement.style.left="0",l.domElement.style.width="100%",l.domElement.style.height="100%");const c=Math.min(window.devicePixelRatio,2);l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(c),l.setClearColor(0,0);const d=new PE(16777215,.5);i.add(d);const h=new OE(6514417,1);h.position.set(5,5,5),i.add(h);const p=new Ko(20,20,50,50),m=new ev({color:1710618,metalness:.1,roughness:.8,transparent:!0,opacity:.8}),g=new vi(p,m);g.rotation.x=-Math.PI/2,g.position.y=-2,i.add(g);const _=[],x=5,S=new Hh(.5,32,32),E=new ev({color:6514417,metalness:.7,roughness:.2,transparent:!0,opacity:.6});for(let L=0;L<x;L++){const D=new vi(S,E);D.position.set((Math.random()-.5)*10,Math.random()*5,(Math.random()-.5)*10),i.add(D),_.push({mesh:D,speed:Math.random()*.02+.01,amplitude:Math.random()*2+1})}r.position.z=10,r.position.y=5;let R=0;const y=()=>{e.current=requestAnimationFrame(y),R+=.01,_.forEach(D=>{D.mesh.position.y=Math.sin(R*D.speed)*D.amplitude,D.mesh.rotation.x+=.01,D.mesh.rotation.y+=.01});const L=g.geometry.attributes.position.array;for(let D=0;D<L.length;D+=3){const N=L[D],I=L[D+2];L[D+1]=Math.sin(N*.5+R)*.2+Math.sin(I*.5+R)*.2}g.geometry.attributes.position.needsUpdate=!0,l.render(i,r)};y();const v=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",v),()=>{e.current&&cancelAnimationFrame(e.current),s.current&&s.current.removeChild(l.domElement),window.removeEventListener("resize",v)}},[]),T.jsx("div",{ref:s,className:"fixed inset-0 -z-10 pointer-events-none",style:{opacity:.7,mixBlendMode:"overlay"}})},y2=()=>{const[,s]=le.useState({x:0,y:0}),e=le.useRef(null),i=le.useRef(null);return le.useEffect(()=>{const r=l=>{if(s({x:l.clientX,y:l.clientY}),i.current&&(i.current.style.transform=`translate(${l.clientX}px, ${l.clientY}px)`),e.current){const c=(window.innerWidth/2-l.pageX)/50,d=(window.innerHeight/2-l.pageY)/50;e.current.style.transform=`translateX(${c}px) translateY(${d}px)`}};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[]),T.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden",children:[T.jsx(b_,{}),T.jsx("div",{className:"relative z-10",children:T.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl py-24 md:py-32",children:T.jsx("div",{className:"flex flex-col items-center text-center",children:T.jsxs("div",{className:"max-w-2xl",children:[T.jsx("div",{className:"mb-6 relative",children:T.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"})}),T.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 font-sans relative",children:[T.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-4 w-32 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"}),"Creating digital",T.jsx("br",{}),"experiences that ",T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"matter"})]}),T.jsxs("p",{className:"text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12 relative",children:[T.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-6 w-24 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"}),"I'm a developer focused on crafting clean, user-friendly websites and applications with modern technologies and intuitive interfaces."]}),T.jsxs("div",{className:"flex flex-wrap gap-5 justify-center relative",children:[T.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-6 w-20 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"}),T.jsxs(Ln,{to:"/projects",className:"px-8 py-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-lg transition-all text-base font-medium relative group",children:[T.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10"}),"View Projects"]}),T.jsxs(Ln,{to:"/contact",className:"px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-base font-medium relative group",children:[T.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"}),"Contact Me"]})]})]})})})}),T.jsx("div",{className:"py-24 relative z-10 border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm",children:T.jsxs("div",{className:"container mx-auto px-6 md:px-8 max-w-6xl",children:[T.jsxs("div",{className:"mb-16 text-center",children:[T.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block",children:"Expertise"}),T.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:"Technologies"})]}),T.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{name:"React",desc:"Frontend Library",icon:"⚛️"},{name:"TypeScript",desc:"Type Safety",icon:"📘"},{name:"Tailwind",desc:"CSS Framework",icon:"🎨"},{name:"Node.js",desc:"Backend Runtime",icon:"🟢"},{name:"Next.js",desc:"React Framework",icon:"⏭️"},{name:"Three.js",desc:"3D Graphics",icon:"🎮"},{name:"GraphQL",desc:"API Query Language",icon:"🔍"},{name:"MongoDB",desc:"NoSQL Database",icon:"🗄️"}].map(r=>T.jsxs("div",{className:"group p-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),T.jsx("div",{className:"absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"}),T.jsxs("div",{className:"relative z-10",children:[T.jsx("div",{className:"text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300",children:r.icon}),T.jsx("h3",{className:"text-xl font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:r.name}),T.jsx("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:r.desc})]})]},r.name))})]})})]})},S2="/assets/ChatGPT%20Image%20Apr%2019_%202025_%2002_51_34%20AM-DH5rensq.png",M2=()=>{const[s,e]=le.useState("story"),[i,r]=le.useState(!1),[l,c]=le.useState(!1);return le.useEffect(()=>{r(!0)},[]),T.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16",children:T.jsxs("div",{className:`space-y-16 transition-all duration-700 transform ${i?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[T.jsxs("header",{className:"mb-16",children:[T.jsx("div",{className:"mb-6",children:T.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"About Me"})}),T.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8",children:["Developer with a passion for ",T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"design"})]}),T.jsx("p",{className:"text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"Creating beautiful, functional, and user-centered digital experiences that combine technical expertise with creative vision."})]}),T.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-center md:items-start",children:[T.jsx("div",{className:"relative w-56 h-56 md:w-64 md:h-64",children:l?T.jsx("div",{className:"w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center",children:T.jsx("span",{className:"text-4xl text-white font-bold",children:"H"})}):T.jsx("img",{src:S2,alt:"Harry's profile",onError:()=>c(!0),className:"w-full h-full rounded-2xl object-cover shadow-lg ring-4 ring-gray-100 dark:ring-gray-800"})}),T.jsx("div",{className:"flex-1 text-center md:text-left",children:T.jsxs("div",{className:"bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8",children:[T.jsxs("div",{className:"flex border-b border-neutral-200 dark:border-neutral-800 mb-8",children:[T.jsx("button",{onClick:()=>e("story"),className:`px-5 py-3 font-medium ${s==="story"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"My Story"}),T.jsx("button",{onClick:()=>e("skills"),className:`px-5 py-3 font-medium ${s==="skills"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"Skills"}),T.jsx("button",{onClick:()=>e("experience"),className:`px-5 py-3 font-medium ${s==="experience"?"text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400":"text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"}`,children:"Experience"})]}),s==="story"&&T.jsxs("div",{className:"space-y-5 text-neutral-800 dark:text-neutral-200",children:[T.jsx("p",{children:"Hello! I'm Harry, a passionate web developer with a keen eye for design and a love for creating immersive digital experiences. My journey in web development began 5 years ago when I discovered the power of creating interactive websites."}),T.jsx("p",{children:"What drives me is the perfect blend of creative and technical aspects that web development offers. I enjoy tackling complex problems and turning ideas into elegant, functional websites that provide exceptional user experiences."}),T.jsx("p",{children:"When I'm not coding, you can find me exploring new design trends, experimenting with 3D animations, or learning about emerging technologies in the web development space."})]}),s==="skills"&&T.jsx("div",{children:T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-medium mb-6",children:"Frontend Development"}),T.jsxs("ul",{className:"space-y-5",children:[T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"React.js"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"95%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"Three.js"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"90%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"TypeScript"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"85%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"Tailwind"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"92%"}})})]})]})]}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-medium mb-6",children:"Backend Development"}),T.jsxs("ul",{className:"space-y-5",children:[T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"Node.js"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"88%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"Express"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"85%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"MongoDB"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"82%"}})})]}),T.jsxs("li",{className:"flex flex-col sm:flex-row sm:items-center gap-2",children:[T.jsx("span",{className:"sm:w-1/3 text-sm",children:"GraphQL"}),T.jsx("div",{className:"w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2",children:T.jsx("div",{className:"bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full",style:{width:"78%"}})})]})]})]})]})}),s==="experience"&&T.jsxs("div",{className:"space-y-12",children:[T.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[T.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),T.jsx("h3",{className:"text-lg font-medium",children:"Senior Frontend Developer"}),T.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"Tech Solutions Inc. • 2021 - Present"}),T.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Leading frontend development for enterprise clients. Specialized in creating interactive 3D web experiences and optimizing application performance."})]}),T.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[T.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),T.jsx("h3",{className:"text-lg font-medium",children:"Web Developer"}),T.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"Digital Agency • 2019 - 2021"}),T.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Developed responsive websites and e-commerce platforms for various clients. Improved user experience and site performance across multiple projects."})]}),T.jsxs("div",{className:"relative pl-7 border-l border-neutral-300 dark:border-neutral-700",children:[T.jsx("div",{className:"absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"}),T.jsx("h3",{className:"text-lg font-medium",children:"Junior Developer"}),T.jsx("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 mb-2",children:"StartUp Inc. • 2018 - 2019"}),T.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Started my professional journey building web applications and learning modern frontend frameworks."})]})]})]})})]}),T.jsxs("div",{className:"py-12",children:[T.jsxs("div",{className:"mb-16",children:[T.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block",children:"Interests"}),T.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-8",children:"When I'm Not Coding"})]}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{title:"Exploring Design",icon:"🎨",text:"Always looking for new design inspirations and trends in UI/UX."},{title:"Learning",icon:"📚",text:"Constantly improving my skills and exploring new technologies."},{title:"3D Modeling",icon:"💻",text:"Creating 3D models and animations for web and personal projects."}].map((d,h)=>T.jsxs("div",{className:"p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all",children:[T.jsx("div",{className:"text-3xl mb-4",children:d.icon}),T.jsx("h3",{className:"text-lg font-medium mb-2",children:d.title}),T.jsx("p",{className:"text-neutral-600 dark:text-neutral-400 text-sm",children:d.text})]},h))})]})]})})},E2=[{id:1,title:"LuxMart - E-commerce",category:"E-commerce",description:"Premium e-commerce platform with React, Node.js, and MongoDB.",technologies:["React","Node.js","MongoDB"],image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop",link:"#",featured:!0},{id:2,title:"AI Chat Assistant",category:"AI Application",description:"AI-powered chat app with React, TypeScript, and OpenAI API.",technologies:["React","TypeScript","OpenAI"],image:"https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848",link:"#",featured:!0},{id:3,title:"Portfolio Website",category:"Personal",description:"3D animated portfolio with Three.js and React.",technologies:["React","Three.js","Tailwind"],image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1486&auto=format&fit=crop",link:"#",featured:!1}],b2=()=>{const[s,e]=le.useState(null),i=r=>{e(r)};return T.jsxs("div",{className:"container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16",children:[T.jsxs("div",{className:"space-y-12",children:[T.jsxs("header",{className:"mb-12",children:[T.jsx("div",{className:"mb-4",children:T.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"Portfolio"})}),T.jsxs("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6",children:["Selected ",T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"Projects"})]}),T.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"A collection of my recent work, showcasing my skills in web development and design."})]}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:E2.map(r=>T.jsxs("div",{onClick:()=>i(r),className:"group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all cursor-pointer",children:[T.jsx("div",{className:"aspect-[3/2] overflow-hidden",children:T.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"})}),T.jsxs("div",{className:"p-3",children:[T.jsx("h3",{className:"text-sm font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:r.title}),T.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2",children:r.description}),T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center gap-1",children:[r.technologies.slice(0,2).map(l=>T.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300",children:l},l)),r.technologies.length>2&&T.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300",children:["+",r.technologies.length-2]})]}),T.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] px-2 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-md transition-all",children:"View"})]})]})]},r.id))})]}),s&&T.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center p-6",children:T.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",children:[T.jsxs("div",{className:"h-72 sm:h-96 overflow-hidden bg-gray-200 dark:bg-gray-700 relative",children:[T.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover"}),T.jsx("button",{onClick:()=>e(null),className:"absolute top-6 right-6 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-colors",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),T.jsxs("div",{className:"p-10",children:[T.jsxs("div",{className:"flex flex-wrap justify-between items-start gap-4 mb-8",children:[T.jsx("h2",{className:"text-3xl font-bold",children:s.title}),T.jsx("span",{className:"px-4 py-2 bg-[#05d9e8]/20 border border-[#05d9e8]/30 text-base rounded-full",children:s.category})]}),T.jsx("p",{className:"text-lg leading-relaxed mb-10",children:s.description}),T.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Technologies Used"}),T.jsx("div",{className:"flex flex-wrap gap-3 mb-10",children:s.technologies.map((r,l)=>T.jsx("span",{className:"px-4 py-2 bg-[#05d9e8]/10 border border-[#05d9e8]/30 rounded-full",children:r},l))}),T.jsx("div",{className:"flex justify-end",children:T.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"btn text-[#ff2a6d] border-[#ff2a6d]",children:"Visit Project"})})]})]})})]})},T2=()=>{const[s,e]=le.useState({name:"",email:"",subject:"",message:""}),[i,r]=le.useState(!1),[l,c]=le.useState(null),d=p=>{const{name:m,value:g}=p.target;e(_=>({..._,[m]:g}))},h=async p=>{p.preventDefault(),r(!0),c(null);try{await new Promise(m=>setTimeout(m,1500)),console.log("Form submitted:",s),c("success"),e({name:"",email:"",subject:"",message:""})}catch(m){console.error("Error submitting form:",m),c("error")}finally{r(!1)}};return T.jsx("div",{className:"min-h-screen pt-20 bg-white dark:bg-gray-900",children:T.jsxs("div",{className:"container mx-auto px-4 py-16",children:[T.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-2",children:"Get In Touch"}),T.jsx("p",{className:"text-lg text-center max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-400",children:"Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!"}),T.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12",children:[T.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8",children:[T.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Send Me a Message"}),l==="success"&&T.jsx("div",{className:"mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg",children:"Your message has been sent successfully! I'll get back to you soon."}),l==="error"&&T.jsx("div",{className:"mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg",children:"There was an error sending your message. Please try again later."}),T.jsxs("form",{onSubmit:h,className:"space-y-6",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Your Name"}),T.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:d,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"John Doe"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Your Email"}),T.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:d,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"john@example.com"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium mb-2",children:"Subject"}),T.jsxs("select",{id:"subject",name:"subject",value:s.subject,onChange:d,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",children:[T.jsx("option",{value:"",children:"Select a subject"}),T.jsx("option",{value:"Project Inquiry",children:"Project Inquiry"}),T.jsx("option",{value:"Job Opportunity",children:"Job Opportunity"}),T.jsx("option",{value:"Collaboration",children:"Collaboration"}),T.jsx("option",{value:"Other",children:"Other"})]})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Your Message"}),T.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",placeholder:"Hello, I'd like to discuss a potential project..."})]}),T.jsx("button",{type:"submit",disabled:i,className:`w-full py-3 px-6 rounded-lg text-white font-medium transition-all transform hover:scale-[1.02] ${i?"bg-indigo-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700"}`,children:i?"Sending...":"Send Message"})]})]}),T.jsxs("div",{className:"flex flex-col justify-between",children:[T.jsxs("div",{className:"mb-12",children:[T.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Information"}),T.jsxs("div",{className:"space-y-6",children:[T.jsxs("div",{className:"flex items-start space-x-4",children:[T.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-semibold",children:"Email"}),T.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"dulgachharry@gmail.com"})]})]}),T.jsxs("div",{className:"flex items-start space-x-4",children:[T.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-semibold",children:"Phone"}),T.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"+91 (9988300738)"})]})]}),T.jsxs("div",{className:"flex items-start space-x-4",children:[T.jsx("div",{className:"bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full text-indigo-600 dark:text-indigo-400",children:T.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-semibold",children:"Location"}),T.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"INDIA,PUNJAB"})]})]})]})]}),T.jsxs("div",{children:[T.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Connect with Me"}),T.jsx("div",{className:"flex space-x-4",children:[{name:"GitHub",icon:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{name:"LinkedIn",icon:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},{name:"Twitter",icon:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}].map(p=>T.jsx("a",{href:"#",className:"bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors p-3 rounded-full","aria-label":p.name,children:T.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",className:"text-gray-600 dark:text-gray-400",children:T.jsx("path",{d:p.icon})})},p.name))})]})]})]})]})})},A2=[{id:1,name:"Sarah Johnson",company:"TechStart Inc.",position:"CEO",comment:"Harry completely transformed our company website. The 3D animations and responsive design have significantly increased our user engagement and conversion rates. Highly recommend!",rating:5,avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"January 15, 2023"},{id:2,name:"Michael Chen",company:"DigitalCraft",position:"CTO",comment:"Working with Harry was a pleasure. He delivered our e-commerce platform on time and with all the features we requested. The website is fast, secure, and looks fantastic.",rating:5,avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"March 22, 2023"},{id:3,name:"Emily Rodriguez",company:"CreativeMinds Agency",position:"Art Director",comment:"Harry has an amazing eye for design combined with superb technical skills. He brought our vision to life with stunning animations and intuitive UX. The project exceeded our expectations!",rating:5,avatar:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"June 10, 2023"},{id:4,name:"David Wilson",company:"Wilson Consulting",position:"Founder",comment:"The AI chat application Harry built for our consulting firm has revolutionized how we interact with clients. The interface is beautiful and the functionality is exactly what we needed.",rating:4,avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",date:"September 5, 2023"}],R2=()=>{const[s,e]=le.useState(0),[i,r]=le.useState(""),[l,c]=le.useState(""),[d,h]=le.useState(""),[p,m]=le.useState(!1),g=_=>{_.preventDefault(),m(!0),e(0),r(""),c(""),h("")};return T.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200",children:[T.jsx(b_,{}),T.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"}),T.jsx("div",{className:"absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"})]}),T.jsx("div",{className:"absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"}),T.jsx("div",{className:"container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16 relative z-10",children:T.jsxs("div",{className:"space-y-12",children:[T.jsxs("header",{className:"mb-12",children:[T.jsx("div",{className:"mb-4",children:T.jsx("span",{className:"text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400",children:"Testimonials"})}),T.jsxs("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6",children:["Client ",T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400",children:"Feedback"})]}),T.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl",children:"See what my clients have to say about working with me and share your own experience"})]}),T.jsxs("div",{className:"space-y-8",children:[T.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Client Testimonials"}),T.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:A2.map(_=>T.jsxs("div",{className:"group p-6 bg-white dark:bg-neutral-950 rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),T.jsx("div",{className:"absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"}),T.jsxs("div",{className:"relative z-10",children:[T.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[T.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30",children:T.jsx("img",{src:_.avatar,alt:_.name,className:"w-full h-full object-cover"})}),T.jsxs("div",{children:[T.jsx("h3",{className:"text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:_.name}),T.jsxs("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[_.position," at ",_.company]})]})]}),T.jsx("div",{className:"flex mb-3",children:[...Array(5)].map((x,S)=>T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-4 w-4 ${S<_.rating?"text-indigo-600 dark:text-indigo-400":"text-neutral-300 dark:text-neutral-700"}`,viewBox:"0 0 20 20",fill:"currentColor",children:T.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},S))}),T.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 mb-2",children:_.comment}),T.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-500",children:_.date})]})]},_.id))})]}),T.jsx("div",{className:"max-w-2xl mx-auto",children:T.jsxs("div",{className:"bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8",children:[T.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Share Your Experience"}),p&&T.jsx("div",{className:"mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800",children:"Thank you for your feedback! Your testimonial has been submitted and will be reviewed soon."}),T.jsxs("form",{onSubmit:g,className:"space-y-6",children:[T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Name"}),T.jsx("input",{type:"text",id:"name",value:l,onChange:_=>c(_.target.value),className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Email"}),T.jsx("input",{type:"email",id:"email",value:d,onChange:_=>h(_.target.value),className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Rating"}),T.jsx("div",{className:"flex space-x-1",children:[1,2,3,4,5].map(_=>T.jsx("button",{type:"button",onClick:()=>e(_),className:`p-2 rounded-lg transition-colors ${_<=s?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-neutral-400 dark:text-neutral-600 bg-neutral-50 dark:bg-neutral-800"}`,children:"★"},_))})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"comment",className:"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",children:"Your Feedback"}),T.jsx("textarea",{id:"comment",value:i,onChange:_=>r(_.target.value),rows:4,className:"w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all",required:!0})]}),T.jsx("button",{type:"submit",className:"w-full px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium",children:"Submit Feedback"})]})]})})]})})]})};function w2(){const[s,e]=le.useState(!1);le.useEffect(()=>{const r=()=>{window.scrollY>500?e(!0):e(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.jsx(JS,{children:T.jsxs("div",{className:"App min-h-screen",children:[T.jsx(cM,{}),T.jsxs(CS,{children:[T.jsx(ys,{path:"/",element:T.jsx(y2,{})}),T.jsx(ys,{path:"/about",element:T.jsx(lc,{children:T.jsx(M2,{})})}),T.jsx(ys,{path:"/projects",element:T.jsx(lc,{children:T.jsx(b2,{})})}),T.jsx(ys,{path:"/contact",element:T.jsx(lc,{children:T.jsx(T2,{})})}),T.jsx(ys,{path:"/feedback",element:T.jsx(lc,{children:T.jsx(R2,{})})})]}),s&&T.jsx("button",{onClick:i,className:"fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 z-50","aria-label":"Back to top",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})]})})}Iy.createRoot(document.getElementById("root")).render(T.jsx(Dy.StrictMode,{children:T.jsx(w2,{})}));
