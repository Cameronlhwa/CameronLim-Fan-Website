function xw(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(r,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function YE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gd={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function kw(){if(G_)return Vl;G_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Vl.Fragment=e,Vl.jsx=n,Vl.jsxs=n,Vl}var K_;function Uw(){return K_||(K_=1,Gd.exports=kw()),Gd.exports}var z=Uw(),Kd={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Lw(){if(Q_)return we;Q_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Z={};function K(O,J,he){this.props=O,this.context=J,this.refs=Z,this.updater=he||j}K.prototype.isReactComponent={},K.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},K.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function te(){}te.prototype=K.prototype;function ae(O,J,he){this.props=O,this.context=J,this.refs=Z,this.updater=he||j}var ue=ae.prototype=new te;ue.constructor=ae,F(ue,K.prototype),ue.isPureReactComponent=!0;var be=Array.isArray,pe={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function P(O,J,he,ie,re,Re){return he=Re.ref,{$$typeof:r,type:O,key:J,ref:he!==void 0?he:null,props:Re}}function R(O,J){return P(O.type,J,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function C(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return J[he]})}var V=/\/+/g;function U(O,J){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):J.toString(36)}function I(){}function Tt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function dt(O,J,he,ie,re){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(Re){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0;break;case E:return Se=O._init,dt(Se(O._payload),J,he,ie,re)}}if(Se)return re=re(O),Se=ie===""?"."+U(O,0):ie,be(re)?(he="",Se!=null&&(he=Se.replace(V,"$&/")+"/"),dt(re,J,he,"",function(it){return it})):re!=null&&(w(re)&&(re=R(re,he+(re.key==null||O&&O.key===re.key?"":(""+re.key).replace(V,"$&/")+"/")+Se)),J.push(re)),1;Se=0;var mt=ie===""?".":ie+":";if(be(O))for(var je=0;je<O.length;je++)ie=O[je],Re=mt+U(ie,je),Se+=dt(ie,J,he,Re,re);else if(je=D(O),typeof je=="function")for(O=je.call(O),je=0;!(ie=O.next()).done;)ie=ie.value,Re=mt+U(ie,je++),Se+=dt(ie,J,he,Re,re);else if(Re==="object"){if(typeof O.then=="function")return dt(Tt(O),J,he,ie,re);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function ne(O,J,he){if(O==null)return O;var ie=[],re=0;return dt(O,ie,"","",function(Re){return J.call(he,Re,re++)}),ie}function _e(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function He(){}return we.Children={map:ne,forEach:function(O,J,he){ne(O,function(){J.apply(this,arguments)},he)},count:function(O){var J=0;return ne(O,function(){J++}),J},toArray:function(O){return ne(O,function(J){return J})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},we.Component=K,we.Fragment=n,we.Profiler=o,we.PureComponent=ae,we.StrictMode=s,we.Suspense=p,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,we.act=function(){throw Error("act(...) is not supported in production builds of React.")},we.cache=function(O){return function(){return O.apply(null,arguments)}},we.cloneElement=function(O,J,he){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=F({},O.props),re=O.key,Re=void 0;if(J!=null)for(Se in J.ref!==void 0&&(Re=void 0),J.key!==void 0&&(re=""+J.key),J)!Oe.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(ie[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)ie.children=he;else if(1<Se){for(var mt=Array(Se),je=0;je<Se;je++)mt[je]=arguments[je+2];ie.children=mt}return P(O.type,re,void 0,void 0,Re,ie)},we.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},we.createElement=function(O,J,he){var ie,re={},Re=null;if(J!=null)for(ie in J.key!==void 0&&(Re=""+J.key),J)Oe.call(J,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(re[ie]=J[ie]);var Se=arguments.length-2;if(Se===1)re.children=he;else if(1<Se){for(var mt=Array(Se),je=0;je<Se;je++)mt[je]=arguments[je+2];re.children=mt}if(O&&O.defaultProps)for(ie in Se=O.defaultProps,Se)re[ie]===void 0&&(re[ie]=Se[ie]);return P(O,Re,void 0,void 0,null,re)},we.createRef=function(){return{current:null}},we.forwardRef=function(O){return{$$typeof:m,render:O}},we.isValidElement=w,we.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:_e}},we.memo=function(O,J){return{$$typeof:y,type:O,compare:J===void 0?null:J}},we.startTransition=function(O){var J=pe.T,he={};pe.T=he;try{var ie=O(),re=pe.S;re!==null&&re(he,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(He,de)}catch(Re){de(Re)}finally{pe.T=J}},we.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},we.use=function(O){return pe.H.use(O)},we.useActionState=function(O,J,he){return pe.H.useActionState(O,J,he)},we.useCallback=function(O,J){return pe.H.useCallback(O,J)},we.useContext=function(O){return pe.H.useContext(O)},we.useDebugValue=function(){},we.useDeferredValue=function(O,J){return pe.H.useDeferredValue(O,J)},we.useEffect=function(O,J){return pe.H.useEffect(O,J)},we.useId=function(){return pe.H.useId()},we.useImperativeHandle=function(O,J,he){return pe.H.useImperativeHandle(O,J,he)},we.useInsertionEffect=function(O,J){return pe.H.useInsertionEffect(O,J)},we.useLayoutEffect=function(O,J){return pe.H.useLayoutEffect(O,J)},we.useMemo=function(O,J){return pe.H.useMemo(O,J)},we.useOptimistic=function(O,J){return pe.H.useOptimistic(O,J)},we.useReducer=function(O,J,he){return pe.H.useReducer(O,J,he)},we.useRef=function(O){return pe.H.useRef(O)},we.useState=function(O){return pe.H.useState(O)},we.useSyncExternalStore=function(O,J,he){return pe.H.useSyncExternalStore(O,J,he)},we.useTransition=function(){return pe.H.useTransition()},we.version="19.0.0",we}var Y_;function qm(){return Y_||(Y_=1,Kd.exports=Lw()),Kd.exports}var Y=qm();const $E=YE(Y),jw=xw({__proto__:null,default:$E},[Y]);var Qd={exports:{}},Pl={},Yd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function zw(){return $_||($_=1,function(r){function e(ne,_e){var de=ne.length;ne.push(_e);e:for(;0<de;){var He=de-1>>>1,O=ne[He];if(0<o(O,_e))ne[He]=_e,ne[de]=O,de=He;else break e}}function n(ne){return ne.length===0?null:ne[0]}function s(ne){if(ne.length===0)return null;var _e=ne[0],de=ne.pop();if(de!==_e){ne[0]=de;e:for(var He=0,O=ne.length,J=O>>>1;He<J;){var he=2*(He+1)-1,ie=ne[he],re=he+1,Re=ne[re];if(0>o(ie,de))re<O&&0>o(Re,ie)?(ne[He]=Re,ne[re]=de,He=re):(ne[He]=ie,ne[he]=de,He=he);else if(re<O&&0>o(Re,de))ne[He]=Re,ne[re]=de,He=re;else break e}}return _e}function o(ne,_e){var de=ne.sortIndex-_e.sortIndex;return de!==0?de:ne.id-_e.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,S=null,D=3,j=!1,F=!1,Z=!1,K=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function ue(ne){for(var _e=n(y);_e!==null;){if(_e.callback===null)s(y);else if(_e.startTime<=ne)s(y),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=n(y)}}function be(ne){if(Z=!1,ue(ne),!F)if(n(p)!==null)F=!0,Tt();else{var _e=n(y);_e!==null&&dt(be,_e.startTime-ne)}}var pe=!1,Oe=-1,P=5,R=-1;function w(){return!(r.unstable_now()-R<P)}function C(){if(pe){var ne=r.unstable_now();R=ne;var _e=!0;try{e:{F=!1,Z&&(Z=!1,te(Oe),Oe=-1),j=!0;var de=D;try{t:{for(ue(ne),S=n(p);S!==null&&!(S.expirationTime>ne&&w());){var He=S.callback;if(typeof He=="function"){S.callback=null,D=S.priorityLevel;var O=He(S.expirationTime<=ne);if(ne=r.unstable_now(),typeof O=="function"){S.callback=O,ue(ne),_e=!0;break t}S===n(p)&&s(p),ue(ne)}else s(p);S=n(p)}if(S!==null)_e=!0;else{var J=n(y);J!==null&&dt(be,J.startTime-ne),_e=!1}}break e}finally{S=null,D=de,j=!1}_e=void 0}}finally{_e?V():pe=!1}}}var V;if(typeof ae=="function")V=function(){ae(C)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,I=U.port2;U.port1.onmessage=C,V=function(){I.postMessage(null)}}else V=function(){K(C,0)};function Tt(){pe||(pe=!0,V())}function dt(ne,_e){Oe=K(function(){ne(r.unstable_now())},_e)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ne){ne.callback=null},r.unstable_continueExecution=function(){F||j||(F=!0,Tt())},r.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ne?Math.floor(1e3/ne):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(ne){switch(D){case 1:case 2:case 3:var _e=3;break;default:_e=D}var de=D;D=_e;try{return ne()}finally{D=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ne,_e){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var de=D;D=ne;try{return _e()}finally{D=de}},r.unstable_scheduleCallback=function(ne,_e,de){var He=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?He+de:He):de=He,ne){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,ne={id:E++,callback:_e,priorityLevel:ne,startTime:de,expirationTime:O,sortIndex:-1},de>He?(ne.sortIndex=de,e(y,ne),n(p)===null&&ne===n(y)&&(Z?(te(Oe),Oe=-1):Z=!0,dt(be,de-He))):(ne.sortIndex=O,e(p,ne),F||j||(F=!0,Tt())),ne},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(ne){var _e=D;return function(){var de=D;D=_e;try{return ne.apply(this,arguments)}finally{D=de}}}}($d)),$d}var X_;function Bw(){return X_||(X_=1,Yd.exports=zw()),Yd.exports}var Xd={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function qw(){if(W_)return Kt;W_=1;var r=qm();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Kt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Kt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Kt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Kt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:j}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:D,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Kt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Kt.requestFormReset=function(p){s.d.r(p)},Kt.unstable_batchedUpdates=function(p,y){return p(y)},Kt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Kt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kt.version="19.0.0",Kt}var Z_;function XE(){if(Z_)return Xd.exports;Z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xd.exports=qw(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function Hw(){if(J_)return Pl;J_=1;var r=Bw(),e=qm(),n=XE();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),be=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Oe(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var P=Symbol.for("react.client.reference");function R(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===P?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case Z:return"Suspense";case K:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case F:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:R(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return R(t(i))}catch{}}return null}var w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,V,U;function I(t){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+U}var Tt=!1;function dt(t,i){if(!t||Tt)return"";Tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var B=H}Reflect.construct(t,[],W)}else{try{W.call()}catch(H){B=H}t.call(W.prototype)}}else{try{throw Error()}catch(H){B=H}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var b=v.split(`
`),M=T.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<M.length&&!M[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===M.length)for(l=b.length-1,h=M.length-1;1<=l&&0<=h&&b[l]!==M[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==M[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==M[h]){var G=`
`+b[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=h);break}}}finally{Tt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function ne(t){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return t=dt(t.type,!1),t;case 11:return t=dt(t.type.render,!1),t;case 1:return t=dt(t.type,!0),t;default:return""}}function _e(t){try{var i="";do i+=ne(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function He(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function O(t){if(de(t)!==t)throw Error(s(188))}function J(t){var i=t.alternate;if(!i){if(i=de(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),t;if(d===l)return O(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function he(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=he(t),i!==null)return i;t=t.sibling}return null}var ie=Array.isArray,re=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re={pending:!1,data:null,method:null,action:null},Se=[],mt=-1;function je(t){return{current:t}}function it(t){0>mt||(t.current=Se[mt],Se[mt]=null,mt--)}function Ke(t,i){mt++,Se[mt]=t.current,t.current=i}var Wt=je(null),Ei=je(null),vn=je(null),ar=je(null);function or(t,i){switch(Ke(vn,i),Ke(Ei,t),Ke(Wt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?E_(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=E_(t),i=T_(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}it(Wt),Ke(Wt,i)}function Ti(){it(Wt),it(Ei),it(vn)}function Co(t){t.memoizedState!==null&&Ke(ar,t);var i=Wt.current,a=T_(i,t.type);i!==a&&(Ke(Ei,t),Ke(Wt,a))}function oa(t){Ei.current===t&&(it(Wt),it(Ei)),ar.current===t&&(it(ar),Cl._currentValue=Re)}var la=Object.prototype.hasOwnProperty,hs=r.unstable_scheduleCallback,ua=r.unstable_cancelCallback,Kh=r.unstable_shouldYield,Do=r.unstable_requestPaint,rn=r.unstable_now,_u=r.unstable_getCurrentPriorityLevel,At=r.unstable_ImmediatePriority,Dt=r.unstable_UserBlockingPriority,Ai=r.unstable_NormalPriority,vu=r.unstable_LowPriority,Oo=r.unstable_IdlePriority,Qh=r.log,fs=r.unstable_setDisableYieldValue,lr=null,Ft=null;function No(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(lr,t,void 0,(t.current.flags&128)===128)}catch{}}function Wn(t){if(typeof Qh=="function"&&fs(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(lr,t)}catch{}}var Zt=Math.clz32?Math.clz32:Tu,Mo=Math.log,Eu=Math.LN2;function Tu(t){return t>>>=0,t===0?32:31-(Mo(t)/Eu|0)|0}var Zn=128,ur=4194304;function jn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function En(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=jn(a):(d&=T,d!==0?l=jn(d):t||(v=T&~v,v!==0&&(l=jn(v))))):(T=a&~h,T!==0?l=jn(T):d!==0?l=jn(d):t||(v=a&~v,v!==0&&(l=jn(v)))),l===0?0:i!==0&&i!==l&&(i&h)===0&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function cr(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ca(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vo(){var t=Zn;return Zn<<=1,(Zn&4194176)===0&&(Zn=128),t}function hr(){var t=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),t}function ha(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function lt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Au(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,b=t.expirationTimes,M=t.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Zt(a),W=1<<G;T[G]=0,b[G]=-1;var B=M[G];if(B!==null)for(M[G]=null,G=0;G<B.length;G++){var H=B[G];H!==null&&(H.lane&=-536870913)}a&=~W}l!==0&&fr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function fr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Zt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function dr(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Zt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Su(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wu(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:j_(t.type))}function mr(t,i){var a=re.p;try{return re.p=t,i()}finally{re.p=a}}var Jn=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Jn,St="__reactProps$"+Jn,Si="__reactContainer$"+Jn,ds="__reactEvents$"+Jn,fa="__reactListeners$"+Jn,ei="__reactHandles$"+Jn,Po="__reactResources$"+Jn,pr="__reactMarker$"+Jn;function ms(t){delete t[Ot],delete t[St],delete t[ds],delete t[fa],delete t[ei]}function zn(t){var i=t[Ot];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Si]||a[Ot]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=w_(t);t!==null;){if(a=t[Ot])return a;t=w_(t)}return i}t=a,a=t.parentNode}return null}function wi(t){if(t=t[Ot]||t[Si]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function gr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function yr(t){var i=t[Po];return i||(i=t[Po]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Je(t){t[pr]=!0}var xo=new Set,da={};function un(t,i){sn(t,i),sn(t+"Capture",i)}function sn(t,i){for(da[t]=i,t=0;t<i.length;t++)xo.add(i[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ko={},Uo={};function bu(t){return la.call(Uo,t)?!0:la.call(ko,t)?!1:Yh.test(t)?Uo[t]=!0:(ko[t]=!0,!1)}function _r(t,i,a){if(bu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function vr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Tn(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ru(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $h(t){var i=Ru(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ps(t){t._valueTracker||(t._valueTracker=$h(t))}function Lo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ru(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var bi=/[\n"\\]/g;function rt(t){return t.replace(bi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Er(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Jt(i)):t.value!==""+Jt(i)&&(t.value=""+Jt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?pa(t,v,Jt(i)):a!=null?pa(t,v,Jt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Jt(T):t.removeAttribute("name")}function gs(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Jt(a):"",i=i!=null?""+Jt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function pa(t,i,a){i==="number"&&ma(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ze(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ys(t,i,a){if(i!=null&&(i=""+Jt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Jt(a):""}function Tr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ie(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Jt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function An(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Xh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Xh.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Iu(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&jo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&jo(t,d,i[d])}function zo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(t){return Zh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Sn=null;function ga(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ri=null,Ii=null;function Ci(t){var i=wi(t);if(i&&(t=i.stateNode)){var a=t[St]||null;e:switch(t=i.stateNode,i.type){case"input":if(Er(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[St]||null;if(!h)throw Error(s(90));Er(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Lo(l)}break e;case"textarea":ys(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&ze(t,!!a.multiple,i,!1)}}}var Bo=!1;function Cu(t,i,a){if(Bo)return t(i,a);Bo=!0;try{var l=t(i);return l}finally{if(Bo=!1,(Ri!==null||Ii!==null)&&(vc(),Ri&&(i=Ri,t=Ii,Ii=Ri=null,Ci(i),t)))for(i=0;i<t.length;i++)Ci(t[i])}}function _s(t,i){var a=t.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var wn=!1;if(cn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){wn=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{wn=!1}var ni=null,Ar=null,Di=null;function qo(){if(Di)return Di;var t,i=Ar,a=i.length,l,h="value"in ni?ni.value:ni.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(t,1<l?1-l:void 0)}function ii(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ri(){return!0}function Ho(){return!1}function Nt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ri:Ho,this.isPropagationStopped=Ho,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Nt(Fe),Es=C({},Fe,{view:0,detail:0}),Du=Nt(Es),_a,va,si,Ts=C({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(_a=t.screenX-si.screenX,va=t.screenY-si.screenY):va=_a=0,si=t),_a)},movementY:function(t){return"movementY"in t?t.movementY:va}}),bn=Nt(Ts),Ou=C({},Ts,{dataTransfer:0}),Jh=Nt(Ou),As=C({},Es,{relatedTarget:0}),Ea=Nt(As),Fo=C({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ta=Nt(Fo),Nu=C({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aa=Nt(Nu),ef=C({},Fe,{data:0}),Go=Nt(ef),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ko(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vu[t])?!!i[t]:!1}function ws(){return Ko}var Pu=C({},Es,{key:function(t){if(t.key){var i=Ss[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ii(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(t){return t.type==="keypress"?ii(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ii(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sa=Nt(Pu),xu=C({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Nt(xu),Oi=C({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),ku=Nt(Oi),Uu=C({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lu=Nt(Uu),ju=C({},Ts,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wa=Nt(ju),en=C({},Fe,{newState:0,oldState:0}),zu=Nt(en),Bu=[9,13,27,32],ai=cn&&"CompositionEvent"in window,c=null;cn&&"documentMode"in document&&(c=document.documentMode);var g=cn&&"TextEvent"in window&&!c,_=cn&&(!ai||c&&8<c&&11>=c),A=" ",k=!1;function q(t,i){switch(t){case"keyup":return Bu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ee(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xe=!1;function wt(t,i){switch(t){case"compositionend":return ee(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return t=i.data,t===A&&k?null:t;default:return null}}function ke(t,i){if(xe)return t==="compositionend"||!ai&&q(t,i)?(t=qo(),Di=Ar=ni=null,xe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Mt[t.type]:i==="textarea"}function Ni(t,i,a,l){Ri?Ii?Ii.push(l):Ii=[l]:Ri=l,i=wc(i,"onChange"),0<i.length&&(a=new ya("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Ut=null,oi=null;function Yo(t){p_(t,0)}function qu(t){var i=gr(t);if(Lo(i))return t}function Fp(t,i){if(t==="change")return i}var Gp=!1;if(cn){var tf;if(cn){var nf="oninput"in document;if(!nf){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),nf=typeof Kp.oninput=="function"}tf=nf}else tf=!1;Gp=tf&&(!document.documentMode||9<document.documentMode)}function Qp(){Ut&&(Ut.detachEvent("onpropertychange",Yp),oi=Ut=null)}function Yp(t){if(t.propertyName==="value"&&qu(oi)){var i=[];Ni(i,oi,t,ga(t)),Cu(Yo,i)}}function hS(t,i,a){t==="focusin"?(Qp(),Ut=i,oi=a,Ut.attachEvent("onpropertychange",Yp)):t==="focusout"&&Qp()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(oi)}function dS(t,i){if(t==="click")return qu(i)}function mS(t,i){if(t==="input"||t==="change")return qu(i)}function pS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hn=typeof Object.is=="function"?Object.is:pS;function $o(t,i){if(hn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!la.call(i,h)||!hn(t[h],i[h]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,i){var a=$p(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$p(a)}}function Wp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ma(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ma(t.document)}return i}function rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function gS(t,i){var a=Zp(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&Wp(i.ownerDocument.documentElement,i)){if(l!==null&&rf(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=Xp(i,d);var v=Xp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var yS=cn&&"documentMode"in document&&11>=document.documentMode,ba=null,sf=null,Xo=null,af=!1;function Jp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;af||ba==null||ba!==ma(l)||(l=ba,"selectionStart"in l&&rf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&$o(Xo,l)||(Xo=l,l=wc(sf,"onSelect"),0<l.length&&(i=new ya("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ba)))}function bs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ra={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},of={},eg={};cn&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Rs(t){if(of[t])return of[t];if(!Ra[t])return t;var i=Ra[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in eg)return of[t]=i[a];return t}var tg=Rs("animationend"),ng=Rs("animationiteration"),ig=Rs("animationstart"),_S=Rs("transitionrun"),vS=Rs("transitionstart"),ES=Rs("transitioncancel"),rg=Rs("transitionend"),sg=new Map,ag="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Bn(t,i){sg.set(t,i),un(i,[t])}var Rn=[],Ia=0,lf=0;function Hu(){for(var t=Ia,i=lf=Ia=0;i<t;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&og(a,h,d)}}function Fu(t,i,a,l){Rn[Ia++]=t,Rn[Ia++]=i,Rn[Ia++]=a,Rn[Ia++]=l,lf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function uf(t,i,a,l){return Fu(t,i,a,l),Gu(t)}function Sr(t,i){return Fu(t,null,null,i),Gu(t)}function og(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Zt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function Gu(t){if(50<Tl)throw Tl=0,pd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ca={},lg=new WeakMap;function In(t,i){if(typeof t=="object"&&t!==null){var a=lg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:_e(i)},lg.set(t,i),i)}return{value:t,source:i,stack:_e(i)}}var Da=[],Oa=0,Ku=null,Qu=0,Cn=[],Dn=0,Is=null,Mi=1,Vi="";function Cs(t,i){Da[Oa++]=Qu,Da[Oa++]=Ku,Ku=t,Qu=i}function ug(t,i,a){Cn[Dn++]=Mi,Cn[Dn++]=Vi,Cn[Dn++]=Is,Is=t;var l=Mi;t=Vi;var h=32-Zt(l)-1;l&=~(1<<h),a+=1;var d=32-Zt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Mi=1<<32-Zt(i)+h|a<<h|l,Vi=d+t}else Mi=1<<d|a<<h|l,Vi=t}function cf(t){t.return!==null&&(Cs(t,1),ug(t,1,0))}function hf(t){for(;t===Ku;)Ku=Da[--Oa],Da[Oa]=null,Qu=Da[--Oa],Da[Oa]=null;for(;t===Is;)Is=Cn[--Dn],Cn[Dn]=null,Vi=Cn[--Dn],Cn[Dn]=null,Mi=Cn[--Dn],Cn[Dn]=null}var tn=null,Lt=null,Be=!1,qn=null,li=!1,ff=Error(s(519));function Ds(t){var i=Error(s(418,""));throw Jo(In(i,t)),ff}function cg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Ot]=t,i[St]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<Sl.length;a++)Ve(Sl[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),gs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ps(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Tr(i,l.value,l.defaultValue,l.children),ps(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||v_(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=bc),i=!0):i=!1,i||Ds(t)}function hg(t){for(tn=t.return;tn;)switch(tn.tag){case 3:case 27:li=!0;return;case 5:case 13:li=!1;return;default:tn=tn.return}}function Wo(t){if(t!==tn)return!1;if(!Be)return hg(t),Be=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Md(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Lt&&Ds(t),hg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Lt=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Lt=null}}else Lt=tn?Fn(t.stateNode.nextSibling):null;return!0}function Zo(){Lt=tn=null,Be=!1}function Jo(t){qn===null?qn=[t]:qn.push(t)}var el=Error(s(460)),fg=Error(s(474)),df={then:function(){}};function dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yu(){}function mg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Yu,Yu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===el?Error(s(483)):t;default:if(typeof i.status=="string")i.then(Yu,Yu);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===el?Error(s(483)):t}throw tl=i,el}}var tl=null;function pg(){if(tl===null)throw Error(s(459));var t=tl;return tl=null,t}var Na=null,nl=0;function $u(t){var i=nl;return nl+=1,Na===null&&(Na=[]),mg(Na,t,i)}function il(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Xu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function gg(t){var i=t._init;return i(t._payload)}function yg(t){function i(x,N){if(t){var L=x.deletions;L===null?(x.deletions=[N],x.flags|=16):L.push(N)}}function a(x,N){if(!t)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=xr(x,N),x.index=0,x.sibling=null,x}function d(x,N,L){return x.index=L,t?(L=x.alternate,L!==null?(L=L.index,L<N?(x.flags|=33554434,N):L):(x.flags|=33554434,N)):(x.flags|=1048576,N)}function v(x){return t&&x.alternate===null&&(x.flags|=33554434),x}function T(x,N,L,Q){return N===null||N.tag!==6?(N=od(L,x.mode,Q),N.return=x,N):(N=h(N,L),N.return=x,N)}function b(x,N,L,Q){var le=L.type;return le===p?G(x,N,L.props.children,Q,L.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ae&&gg(le)===N.type)?(N=h(N,L.props),il(N,L),N.return=x,N):(N=mc(L.type,L.key,L.props,null,x.mode,Q),il(N,L),N.return=x,N)}function M(x,N,L,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=ld(L,x.mode,Q),N.return=x,N):(N=h(N,L.children||[]),N.return=x,N)}function G(x,N,L,Q,le){return N===null||N.tag!==7?(N=js(L,x.mode,Q,le),N.return=x,N):(N=h(N,L),N.return=x,N)}function W(x,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=od(""+N,x.mode,L),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return L=mc(N.type,N.key,N.props,null,x.mode,L),il(L,N),L.return=x,L;case m:return N=ld(N,x.mode,L),N.return=x,N;case ae:var Q=N._init;return N=Q(N._payload),W(x,N,L)}if(ie(N)||Oe(N))return N=js(N,x.mode,L,null),N.return=x,N;if(typeof N.then=="function")return W(x,$u(N),L);if(N.$$typeof===j)return W(x,hc(x,N),L);Xu(x,N)}return null}function B(x,N,L,Q){var le=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return le!==null?null:T(x,N,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case f:return L.key===le?b(x,N,L,Q):null;case m:return L.key===le?M(x,N,L,Q):null;case ae:return le=L._init,L=le(L._payload),B(x,N,L,Q)}if(ie(L)||Oe(L))return le!==null?null:G(x,N,L,Q,null);if(typeof L.then=="function")return B(x,N,$u(L),Q);if(L.$$typeof===j)return B(x,N,hc(x,L),Q);Xu(x,L)}return null}function H(x,N,L,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return x=x.get(L)||null,T(N,x,""+Q,le);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case f:return x=x.get(Q.key===null?L:Q.key)||null,b(N,x,Q,le);case m:return x=x.get(Q.key===null?L:Q.key)||null,M(N,x,Q,le);case ae:var Ce=Q._init;return Q=Ce(Q._payload),H(x,N,L,Q,le)}if(ie(Q)||Oe(Q))return x=x.get(L)||null,G(N,x,Q,le,null);if(typeof Q.then=="function")return H(x,N,L,$u(Q),le);if(Q.$$typeof===j)return H(x,N,L,hc(N,Q),le);Xu(N,Q)}return null}function ce(x,N,L,Q){for(var le=null,Ce=null,fe=N,ge=N=0,xt=null;fe!==null&&ge<L.length;ge++){fe.index>ge?(xt=fe,fe=null):xt=fe.sibling;var qe=B(x,fe,L[ge],Q);if(qe===null){fe===null&&(fe=xt);break}t&&fe&&qe.alternate===null&&i(x,fe),N=d(qe,N,ge),Ce===null?le=qe:Ce.sibling=qe,Ce=qe,fe=xt}if(ge===L.length)return a(x,fe),Be&&Cs(x,ge),le;if(fe===null){for(;ge<L.length;ge++)fe=W(x,L[ge],Q),fe!==null&&(N=d(fe,N,ge),Ce===null?le=fe:Ce.sibling=fe,Ce=fe);return Be&&Cs(x,ge),le}for(fe=l(fe);ge<L.length;ge++)xt=H(fe,x,ge,L[ge],Q),xt!==null&&(t&&xt.alternate!==null&&fe.delete(xt.key===null?ge:xt.key),N=d(xt,N,ge),Ce===null?le=xt:Ce.sibling=xt,Ce=xt);return t&&fe.forEach(function(qr){return i(x,qr)}),Be&&Cs(x,ge),le}function Te(x,N,L,Q){if(L==null)throw Error(s(151));for(var le=null,Ce=null,fe=N,ge=N=0,xt=null,qe=L.next();fe!==null&&!qe.done;ge++,qe=L.next()){fe.index>ge?(xt=fe,fe=null):xt=fe.sibling;var qr=B(x,fe,qe.value,Q);if(qr===null){fe===null&&(fe=xt);break}t&&fe&&qr.alternate===null&&i(x,fe),N=d(qr,N,ge),Ce===null?le=qr:Ce.sibling=qr,Ce=qr,fe=xt}if(qe.done)return a(x,fe),Be&&Cs(x,ge),le;if(fe===null){for(;!qe.done;ge++,qe=L.next())qe=W(x,qe.value,Q),qe!==null&&(N=d(qe,N,ge),Ce===null?le=qe:Ce.sibling=qe,Ce=qe);return Be&&Cs(x,ge),le}for(fe=l(fe);!qe.done;ge++,qe=L.next())qe=H(fe,x,ge,qe.value,Q),qe!==null&&(t&&qe.alternate!==null&&fe.delete(qe.key===null?ge:qe.key),N=d(qe,N,ge),Ce===null?le=qe:Ce.sibling=qe,Ce=qe);return t&&fe.forEach(function(Pw){return i(x,Pw)}),Be&&Cs(x,ge),le}function ot(x,N,L,Q){if(typeof L=="object"&&L!==null&&L.type===p&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case f:e:{for(var le=L.key;N!==null;){if(N.key===le){if(le=L.type,le===p){if(N.tag===7){a(x,N.sibling),Q=h(N,L.props.children),Q.return=x,x=Q;break e}}else if(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ae&&gg(le)===N.type){a(x,N.sibling),Q=h(N,L.props),il(Q,L),Q.return=x,x=Q;break e}a(x,N);break}else i(x,N);N=N.sibling}L.type===p?(Q=js(L.props.children,x.mode,Q,L.key),Q.return=x,x=Q):(Q=mc(L.type,L.key,L.props,null,x.mode,Q),il(Q,L),Q.return=x,x=Q)}return v(x);case m:e:{for(le=L.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){a(x,N.sibling),Q=h(N,L.children||[]),Q.return=x,x=Q;break e}else{a(x,N);break}else i(x,N);N=N.sibling}Q=ld(L,x.mode,Q),Q.return=x,x=Q}return v(x);case ae:return le=L._init,L=le(L._payload),ot(x,N,L,Q)}if(ie(L))return ce(x,N,L,Q);if(Oe(L)){if(le=Oe(L),typeof le!="function")throw Error(s(150));return L=le.call(L),Te(x,N,L,Q)}if(typeof L.then=="function")return ot(x,N,$u(L),Q);if(L.$$typeof===j)return ot(x,N,hc(x,L),Q);Xu(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(a(x,N.sibling),Q=h(N,L),Q.return=x,x=Q):(a(x,N),Q=od(L,x.mode,Q),Q.return=x,x=Q),v(x)):a(x,N)}return function(x,N,L,Q){try{nl=0;var le=ot(x,N,L,Q);return Na=null,le}catch(fe){if(fe===el)throw fe;var Ce=Vn(29,fe,null,x.mode);return Ce.lanes=Q,Ce.return=x,Ce}finally{}}}var Os=yg(!0),_g=yg(!1),Ma=je(null),Wu=je(0);function vg(t,i){t=Fi,Ke(Wu,t),Ke(Ma,i),Fi=t|i.baseLanes}function mf(){Ke(Wu,Fi),Ke(Ma,Ma.current)}function pf(){Fi=Wu.current,it(Ma),it(Wu)}var On=je(null),ui=null;function wr(t){var i=t.alternate;Ke(Rt,Rt.current&1),Ke(On,t),ui===null&&(i===null||Ma.current!==null||i.memoizedState!==null)&&(ui=t)}function Eg(t){if(t.tag===22){if(Ke(Rt,Rt.current),Ke(On,t),ui===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ui=t)}}else br()}function br(){Ke(Rt,Rt.current),Ke(On,On.current)}function Pi(t){it(On),ui===t&&(ui=null),it(Rt)}var Rt=je(0);function Zu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var TS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},AS=r.unstable_scheduleCallback,SS=r.unstable_NormalPriority,It={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new TS,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&AS(SS,function(){t.controller.abort()})}var sl=null,yf=0,Va=0,Pa=null;function wS(t,i){if(sl===null){var a=sl=[];yf=0,Va=Sd(),Pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return yf++,i.then(Tg,Tg),i}function Tg(){if(--yf===0&&sl!==null){Pa!==null&&(Pa.status="fulfilled");var t=sl;sl=null,Va=0,Pa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function bS(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ag=w.S;w.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&wS(t,i),Ag!==null&&Ag(t,i)};var Ns=je(null);function _f(){var t=Ns.current;return t!==null?t:Xe.pooledCache}function Ju(t,i){i===null?Ke(Ns,Ns.current):Ke(Ns,i.pool)}function Sg(){var t=_f();return t===null?null:{parent:It._currentValue,pool:t}}var Rr=0,Ie=null,Qe=null,pt=null,ec=!1,xa=!1,Ms=!1,tc=0,al=0,ka=null,RS=0;function ut(){throw Error(s(321))}function vf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!hn(t[a],i[a]))return!1;return!0}function Ef(t,i,a,l,h,d){return Rr=d,Ie=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,w.H=t===null||t.memoizedState===null?Vs:Ir,Ms=!1,d=a(l,h),Ms=!1,xa&&(d=bg(i,a,l,h)),wg(t),d}function wg(t){w.H=ci;var i=Qe!==null&&Qe.next!==null;if(Rr=0,pt=Qe=Ie=null,ec=!1,al=0,ka=null,i)throw Error(s(300));t===null||Vt||(t=t.dependencies,t!==null&&cc(t)&&(Vt=!0))}function bg(t,i,a,l){Ie=t;var h=0;do{if(xa&&(ka=null),al=0,xa=!1,25<=h)throw Error(s(301));if(h+=1,pt=Qe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}w.H=Ps,d=i(a,l)}while(xa);return d}function IS(){var t=w.H,i=t.useState()[0];return i=typeof i.then=="function"?ol(i):i,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(Ie.flags|=1024),i}function Tf(){var t=tc!==0;return tc=0,t}function Af(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Sf(t){if(ec){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ec=!1}Rr=0,pt=Qe=Ie=null,xa=!1,al=tc=0,ka=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ie.memoizedState=pt=t:pt=pt.next=t,pt}function gt(){if(Qe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var i=pt===null?Ie.memoizedState:pt.next;if(i!==null)pt=i,Qe=t;else{if(t===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},pt===null?Ie.memoizedState=pt=t:pt=pt.next=t}return pt}var nc;nc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ol(t){var i=al;return al+=1,ka===null&&(ka=[]),t=mg(ka,t,i),i=Ie,(pt===null?i.memoizedState:pt.next)===null&&(i=i.alternate,w.H=i===null||i.memoizedState===null?Vs:Ir),t}function ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===j)return Gt(t)}throw Error(s(438,String(t)))}function wf(t){var i=null,a=Ie.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=nc(),Ie.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=be;return i.index++,a}function xi(t,i){return typeof i=="function"?i(t):i}function rc(t){var i=gt();return bf(i,Qe,t)}function bf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,b=null,M=i,G=!1;do{var W=M.lane&-536870913;if(W!==M.lane?(Ue&W)===W:(Rr&W)===W){var B=M.revertLane;if(B===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),W===Va&&(G=!0);else if((Rr&B)===B){M=M.next,B===Va&&(G=!0);continue}else W={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},b===null?(T=b=W,v=d):b=b.next=W,Ie.lanes|=B,kr|=B;W=M.action,Ms&&a(d,W),d=M.hasEagerState?M.eagerState:a(d,W)}else B={lane:W,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},b===null?(T=b=B,v=d):b=b.next=B,Ie.lanes|=W,kr|=W;M=M.next}while(M!==null&&M!==i);if(b===null?v=d:b.next=T,!hn(d,t.memoizedState)&&(Vt=!0,G&&(a=Pa,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Rf(t){var i=gt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Vt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Rg(t,i,a){var l=Ie,h=gt(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn((Qe||h).memoizedState,a);if(v&&(h.memoizedState=a,Vt=!0),h=h.queue,Df(Dg.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||pt!==null&&pt.memoizedState.tag&1){if(l.flags|=2048,Ua(9,Cg.bind(null,l,h,a,i),{destroy:void 0},null),Xe===null)throw Error(s(349));d||(Rr&60)!==0||Ig(l,i,a)}return a}function Ig(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ie.updateQueue,i===null?(i=nc(),Ie.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Cg(t,i,a,l){i.value=a,i.getSnapshot=l,Og(i)&&Ng(t)}function Dg(t,i,a){return a(function(){Og(i)&&Ng(t)})}function Og(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!hn(t,a)}catch{return!0}}function Ng(t){var i=Sr(t,2);i!==null&&nn(i,t,2)}function If(t){var i=an();if(typeof t=="function"){var a=t;if(t=a(),Ms){Wn(!0);try{a()}finally{Wn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},i}function Mg(t,i,a,l){return t.baseState=a,bf(t,Qe,typeof l=="function"?l:xi)}function CS(t,i,a,l,h){if(oc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};w.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Vg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Vg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=w.T,v={};w.T=v;try{var T=a(h,l),b=w.S;b!==null&&b(v,T),Pg(t,i,T)}catch(M){Cf(t,i,M)}finally{w.T=d}}else try{d=a(h,l),Pg(t,i,d)}catch(M){Cf(t,i,M)}}function Pg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xg(t,i,l)},function(l){return Cf(t,i,l)}):xg(t,i,a)}function xg(t,i,a){i.status="fulfilled",i.value=a,kg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Vg(t,a)))}function Cf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,kg(i),i=i.next;while(i!==l)}t.action=null}function kg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ug(t,i){return i}function Lg(t,i){if(Be){var a=Xe.formState;if(a!==null){e:{var l=Ie;if(Be){if(Lt){t:{for(var h=Lt,d=li;h.nodeType!==8;){if(!d){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=Fn(h.nextSibling),l=h.data==="F!";break e}}Ds(l)}l=!1}l&&(i=a[0])}}return a=an(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:i},a.queue=l,a=ny.bind(null,Ie,l),l.dispatch=a,l=If(!1),d=Pf.bind(null,Ie,!1,l.queue),l=an(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=CS.bind(null,Ie,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function jg(t){var i=gt();return zg(i,Qe,t)}function zg(t,i,a){i=bf(t,i,Ug)[0],t=rc(xi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?ol(i):i;var l=gt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ie.flags|=2048,Ua(9,DS.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function DS(t,i){t.action=i}function Bg(t){var i=gt(),a=Qe;if(a!==null)return zg(i,a,t);gt(),i=i.memoizedState,a=gt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ua(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Ie.updateQueue,i===null&&(i=nc(),Ie.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function qg(){return gt().memoizedState}function sc(t,i,a,l){var h=an();Ie.flags|=t,h.memoizedState=Ua(1|i,a,{destroy:void 0},l===void 0?null:l)}function ac(t,i,a,l){var h=gt();l=l===void 0?null:l;var d=h.memoizedState.inst;Qe!==null&&l!==null&&vf(l,Qe.memoizedState.deps)?h.memoizedState=Ua(i,a,d,l):(Ie.flags|=t,h.memoizedState=Ua(1|i,a,d,l))}function Hg(t,i){sc(8390656,8,t,i)}function Df(t,i){ac(2048,8,t,i)}function Fg(t,i){return ac(4,2,t,i)}function Gg(t,i){return ac(4,4,t,i)}function Kg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Qg(t,i,a){a=a!=null?a.concat([t]):null,ac(4,4,Kg.bind(null,i,t),a)}function Of(){}function Yg(t,i){var a=gt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&vf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function $g(t,i){var a=gt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&vf(i,l[1]))return l[0];if(l=t(),Ms){Wn(!0);try{t()}finally{Wn(!1)}}return a.memoizedState=[l,i],l}function Nf(t,i,a){return a===void 0||(Rr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=Wy(),Ie.lanes|=t,kr|=t,a)}function Xg(t,i,a,l){return hn(a,i)?a:Ma.current!==null?(t=Nf(t,a,l),hn(t,i)||(Vt=!0),t):(Rr&42)===0?(Vt=!0,t.memoizedState=a):(t=Wy(),Ie.lanes|=t,kr|=t,i)}function Wg(t,i,a,l,h){var d=re.p;re.p=d!==0&&8>d?d:8;var v=w.T,T={};w.T=T,Pf(t,!1,i,a);try{var b=h(),M=w.S;if(M!==null&&M(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var G=bS(b,l);ll(t,i,G,pn(t))}else ll(t,i,l,pn(t))}catch(W){ll(t,i,{then:function(){},status:"rejected",reason:W},pn())}finally{re.p=d,w.T=v}}function OS(){}function Mf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Zg(t).queue;Wg(t,h,i,Re,a===null?OS:function(){return Jg(t),a(l)})}function Zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Re,baseState:Re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:Re},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Jg(t){var i=Zg(t).next.queue;ll(t,i,{},pn())}function Vf(){return Gt(Cl)}function ey(){return gt().memoizedState}function ty(){return gt().memoizedState}function NS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();t=Or(a);var l=Nr(i,t,a);l!==null&&(nn(l,i,a),hl(l,i,a)),i={cache:gf()},t.payload=i;return}i=i.return}}function MS(t,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},oc(t)?iy(i,a):(a=uf(t,i,a,l),a!==null&&(nn(a,t,l),ry(a,i,l)))}function ny(t,i,a){var l=pn();ll(t,i,a,l)}function ll(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(oc(t))iy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,hn(T,v))return Fu(t,i,h,0),Xe===null&&Hu(),!1}catch{}finally{}if(a=uf(t,i,h,l),a!==null)return nn(a,t,l),ry(a,i,l),!0}return!1}function Pf(t,i,a,l){if(l={lane:2,revertLane:Sd(),action:l,hasEagerState:!1,eagerState:null,next:null},oc(t)){if(i)throw Error(s(479))}else i=uf(t,a,l,2),i!==null&&nn(i,t,2)}function oc(t){var i=t.alternate;return t===Ie||i!==null&&i===Ie}function iy(t,i){xa=ec=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function ry(t,i,a){if((a&4194176)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,dr(t,a)}}var ci={readContext:Gt,use:ic,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut};ci.useCacheRefresh=ut,ci.useMemoCache=ut,ci.useHostTransitionStatus=ut,ci.useFormState=ut,ci.useActionState=ut,ci.useOptimistic=ut;var Vs={readContext:Gt,use:ic,useCallback:function(t,i){return an().memoizedState=[t,i===void 0?null:i],t},useContext:Gt,useEffect:Hg,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,sc(4194308,4,Kg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return sc(4194308,4,t,i)},useInsertionEffect:function(t,i){sc(4,2,t,i)},useMemo:function(t,i){var a=an();i=i===void 0?null:i;var l=t();if(Ms){Wn(!0);try{t()}finally{Wn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=an();if(a!==void 0){var h=a(i);if(Ms){Wn(!0);try{a(i)}finally{Wn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=MS.bind(null,Ie,t),[l.memoizedState,t]},useRef:function(t){var i=an();return t={current:t},i.memoizedState=t},useState:function(t){t=If(t);var i=t.queue,a=ny.bind(null,Ie,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(t,i){var a=an();return Nf(a,t,i)},useTransition:function(){var t=If(!1);return t=Wg.bind(null,Ie,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ie,h=an();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));(Ue&60)!==0||Ig(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Hg(Dg.bind(null,l,d,t),[t]),l.flags|=2048,Ua(9,Cg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=an(),i=Xe.identifierPrefix;if(Be){var a=Vi,l=Mi;a=(l&~(1<<32-Zt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=tc++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=RS++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return an().memoizedState=NS.bind(null,Ie)}};Vs.useMemoCache=wf,Vs.useHostTransitionStatus=Vf,Vs.useFormState=Lg,Vs.useActionState=Lg,Vs.useOptimistic=function(t){var i=an();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Pf.bind(null,Ie,!0,a),a.dispatch=i,[t,i]};var Ir={readContext:Gt,use:ic,useCallback:Yg,useContext:Gt,useEffect:Df,useImperativeHandle:Qg,useInsertionEffect:Fg,useLayoutEffect:Gg,useMemo:$g,useReducer:rc,useRef:qg,useState:function(){return rc(xi)},useDebugValue:Of,useDeferredValue:function(t,i){var a=gt();return Xg(a,Qe.memoizedState,t,i)},useTransition:function(){var t=rc(xi)[0],i=gt().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:Rg,useId:ey};Ir.useCacheRefresh=ty,Ir.useMemoCache=wf,Ir.useHostTransitionStatus=Vf,Ir.useFormState=jg,Ir.useActionState=jg,Ir.useOptimistic=function(t,i){var a=gt();return Mg(a,Qe,t,i)};var Ps={readContext:Gt,use:ic,useCallback:Yg,useContext:Gt,useEffect:Df,useImperativeHandle:Qg,useInsertionEffect:Fg,useLayoutEffect:Gg,useMemo:$g,useReducer:Rf,useRef:qg,useState:function(){return Rf(xi)},useDebugValue:Of,useDeferredValue:function(t,i){var a=gt();return Qe===null?Nf(a,t,i):Xg(a,Qe.memoizedState,t,i)},useTransition:function(){var t=Rf(xi)[0],i=gt().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:Rg,useId:ey};Ps.useCacheRefresh=ty,Ps.useMemoCache=wf,Ps.useHostTransitionStatus=Vf,Ps.useFormState=Bg,Ps.useActionState=Bg,Ps.useOptimistic=function(t,i){var a=gt();return Qe!==null?Mg(a,Qe,t,i):(a.baseState=t,[t,a.queue.dispatch])};function xf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={isMounted:function(t){return(t=t._reactInternals)?de(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Or(l);h.payload=i,a!=null&&(h.callback=a),i=Nr(t,h,l),i!==null&&(nn(i,t,l),hl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Or(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Nr(t,h,l),i!==null&&(nn(i,t,l),hl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=pn(),l=Or(a);l.tag=2,i!=null&&(l.callback=i),i=Nr(t,l,a),i!==null&&(nn(i,t,a),hl(i,t,a))}};function sy(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!$o(a,l)||!$o(h,d):!0}function ay(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&kf.enqueueReplaceState(i,i.state,null)}function xs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=C({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var lc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function oy(t){lc(t)}function ly(t){console.error(t)}function uy(t){lc(t)}function uc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Uf(t,i,a){return a=Or(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(t,i)},a}function hy(t){return t=Or(t),t.tag=3,t}function fy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){cy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){cy(i,a,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function VS(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&cl(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return ui===null?_d():a.alternate===null&&at===0&&(at=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===df?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Ed(t,l,h)),!1;case 22:return a.flags|=65536,l===df?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Ed(t,l,h)),!1}throw Error(s(435,a.tag))}return Ed(t,l,h),_d(),!1}if(Be)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ff&&(t=Error(s(422),{cause:l}),Jo(In(t,a)))):(l!==ff&&(i=Error(s(423),{cause:l}),Jo(In(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=In(l,a),h=Uf(t.stateNode,l,h),Zf(t,h),at!==4&&(at=2)),!1;var d=Error(s(520),{cause:l});if(d=In(d,a),vl===null?vl=[d]:vl.push(d),at!==4&&(at=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Uf(a.stateNode,l,t),Zf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=hy(h),fy(h,t,a,l),Zf(a,h),!1}a=a.return}while(a!==null);return!1}var dy=Error(s(461)),Vt=!1;function jt(t,i,a,l){i.child=t===null?_g(i,null,a,l):Os(i,t.child,a,l)}function my(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Us(i),l=Ef(t,i,a,v,d,h),T=Tf(),t!==null&&!Vt?(Af(t,i,h),ki(t,i,h)):(Be&&T&&cf(i),i.flags|=1,jt(t,i,l,h),i.child)}function py(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!ad(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,gy(t,i,d,l,h)):(t=mc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Kf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(v,l)&&t.ref===i.ref)return ki(t,i,h)}return i.flags|=1,t=xr(d,l),t.ref=i.ref,t.return=i,i.child=t}function gy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if($o(d,l)&&t.ref===i.ref)if(Vt=!1,i.pendingProps=l=d,Kf(t,h))(t.flags&131072)!==0&&(Vt=!0);else return i.lanes=t.lanes,ki(t,i,h)}return Lf(t,i,a,l,h)}function yy(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(ul(t,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return _y(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ju(i,v!==null?v.cachePool:null),v!==null?vg(i,v):mf(),Eg(i);else return i.lanes=i.childLanes=536870912,_y(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Ju(i,v.cachePool),vg(i,v),br(),i.memoizedState=null):(t!==null&&Ju(i,null),mf(),br());return jt(t,i,h,a),i.child}function _y(t,i,a,l){var h=_f();return h=h===null?null:{parent:It._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Ju(i,null),mf(),Eg(i),t!==null&&cl(t,i,l,!0),null}function ul(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function Lf(t,i,a,l,h){return Us(i),a=Ef(t,i,a,l,void 0,h),l=Tf(),t!==null&&!Vt?(Af(t,i,h),ki(t,i,h)):(Be&&l&&cf(i),i.flags|=1,jt(t,i,a,h),i.child)}function vy(t,i,a,l,h,d){return Us(i),i.updateQueue=null,a=bg(i,l,a,h),wg(t),l=Tf(),t!==null&&!Vt?(Af(t,i,d),ki(t,i,d)):(Be&&l&&cf(i),i.flags|=1,jt(t,i,a,d),i.child)}function Ey(t,i,a,l,h){if(Us(i),i.stateNode===null){var d=Ca,v=a.contextType;typeof v=="object"&&v!==null&&(d=Gt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Gt(v):Ca,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(xf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&kf.enqueueReplaceState(d,d.state,null),dl(i,l,d,h),fl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,b=xs(a,T);d.props=b;var M=d.context,G=a.contextType;v=Ca,typeof G=="object"&&G!==null&&(v=Gt(G));var W=a.getDerivedStateFromProps;G=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||M!==v)&&ay(i,d,l,v),Dr=!1;var B=i.memoizedState;d.state=B,dl(i,l,d,h),fl(),M=i.memoizedState,T||B!==M||Dr?(typeof W=="function"&&(xf(i,a,W,l),M=i.memoizedState),(b=Dr||sy(i,a,b,l,B,M,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=M),d.props=l,d.state=M,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wf(t,i),v=i.memoizedProps,G=xs(a,v),d.props=G,W=i.pendingProps,B=d.context,M=a.contextType,b=Ca,typeof M=="object"&&M!==null&&(b=Gt(M)),T=a.getDerivedStateFromProps,(M=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||B!==b)&&ay(i,d,l,b),Dr=!1,B=i.memoizedState,d.state=B,dl(i,l,d,h),fl();var H=i.memoizedState;v!==W||B!==H||Dr||t!==null&&t.dependencies!==null&&cc(t.dependencies)?(typeof T=="function"&&(xf(i,a,T,l),H=i.memoizedState),(G=Dr||sy(i,a,G,l,B,H,b)||t!==null&&t.dependencies!==null&&cc(t.dependencies))?(M||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=b,l=G):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,ul(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Os(i,t.child,null,h),i.child=Os(i,null,a,h)):jt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=ki(t,i,h),t}function Ty(t,i,a,l){return Zo(),i.flags|=256,jt(t,i,a,l),i.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:Sg()}}function Bf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Pn),t}function Ay(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Rt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?wr(i):br(),Be){var T=Lt,b;if(b=T){e:{for(b=T,T=li;b.nodeType!==8;){if(!T){T=null;break e}if(b=Fn(b.nextSibling),b===null){T=null;break e}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:Is!==null?{id:Mi,overflow:Vi}:null,retryLane:536870912},b=Vn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,tn=i,Lt=null,b=!0):b=!1}b||Ds(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;Pi(i)}return T=l.children,l=l.fallback,h?(br(),h=i.mode,T=Hf({mode:"hidden",children:T},h),l=js(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=zf(a),h.childLanes=Bf(t,v,a),i.memoizedState=jf,l):(wr(i),qf(i,T))}if(b=t.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(d)i.flags&256?(wr(i),i.flags&=-257,i=Ff(t,i,a)):i.memoizedState!==null?(br(),i.child=t.child,i.flags|=128,i=null):(br(),h=l.fallback,T=i.mode,l=Hf({mode:"visible",children:l.children},T),h=js(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Os(i,t.child,null,a),l=i.child,l.memoizedState=zf(a),l.childLanes=Bf(t,v,a),i.memoizedState=jf,i=h);else if(wr(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var M=v.dgst;v=M,l=Error(s(419)),l.stack="",l.digest=v,Jo({value:l,source:null,stack:null}),i=Ff(t,i,a)}else if(Vt||cl(t,i,a,!1),v=(a&t.childLanes)!==0,Vt||v){if(v=Xe,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane)throw b.retryLane=l,Sr(t,l),nn(v,t,l),dy}T.data==="$?"||_d(),i=Ff(t,i,a)}else T.data==="$?"?(i.flags|=128,i.child=t.child,i=YS.bind(null,t),T._reactRetry=i,i=null):(t=b.treeContext,Lt=Fn(T.nextSibling),tn=i,Be=!0,qn=null,li=!1,t!==null&&(Cn[Dn++]=Mi,Cn[Dn++]=Vi,Cn[Dn++]=Is,Mi=t.id,Vi=t.overflow,Is=i),i=qf(i,l.children),i.flags|=4096);return i}return h?(br(),h=l.fallback,T=i.mode,b=t.child,M=b.sibling,l=xr(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&31457280,M!==null?h=xr(M,h):(h=js(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=zf(a):(b=T.cachePool,b!==null?(M=It._currentValue,b=b.parent!==M?{parent:M,pool:M}:b):b=Sg(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=Bf(t,v,a),i.memoizedState=jf,l):(wr(i),a=t.child,t=a.sibling,a=xr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function qf(t,i){return i=Hf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Hf(t,i){return Yy(t,i,0,null)}function Ff(t,i,a){return Os(i,t.child,null,a),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Sy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Yf(t.return,i,a)}function Gf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function wy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(jt(t,i,l.children,a),l=Rt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sy(t,a,i);else if(t.tag===19)Sy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ke(Rt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Zu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Gf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Zu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Gf(i,!0,a,null,d);break;case"together":Gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),kr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(cl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=xr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=xr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&cc(t)))}function PS(t,i,a){switch(i.tag){case 3:or(i,i.stateNode.containerInfo),Cr(i,It,t.memoizedState.cache),Zo();break;case 27:case 5:Co(i);break;case 4:or(i,i.stateNode.containerInfo);break;case 10:Cr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ay(t,i,a):(wr(i),t=ki(t,i,a),t!==null?t.sibling:null);wr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(cl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return wy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ke(Rt,Rt.current),l)break;return null;case 22:case 23:return i.lanes=0,yy(t,i,a);case 24:Cr(i,It,t.memoizedState.cache)}return ki(t,i,a)}function by(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Vt=!0;else{if(!Kf(t,a)&&(i.flags&128)===0)return Vt=!1,PS(t,i,a);Vt=(t.flags&131072)!==0}else Vt=!1,Be&&(i.flags&1048576)!==0&&ug(i,Qu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")ad(l)?(t=xs(l,t),i.tag=1,i=Ey(null,i,l,t,a)):(i.tag=0,i=Lf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===F){i.tag=11,i=my(null,i,l,t,a);break e}else if(h===te){i.tag=14,i=py(null,i,l,t,a);break e}}throw i=R(l)||l,Error(s(306,i,""))}}return i;case 0:return Lf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=xs(l,i.pendingProps),Ey(t,i,l,h,a);case 3:e:{if(or(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,Wf(t,i),dl(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Cr(i,It,d),d!==h.cache&&$f(i,[It],a,!0),fl(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Ty(t,i,d,a);break e}else if(d!==l){l=In(Error(s(424)),i),Jo(l),i=Ty(t,i,d,a);break e}else for(Lt=Fn(i.stateNode.containerInfo.firstChild),tn=i,Be=!0,qn=null,li=!0,a=_g(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zo(),d===l){i=ki(t,i,a);break e}jt(t,i,d,a)}i=i.child}return i;case 26:return ul(t,i),t===null?(a=C_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Be||(a=i.type,t=i.pendingProps,l=Rc(vn.current).createElement(a),l[Ot]=i,l[St]=t,zt(l,a,t),Je(l),i.stateNode=l):i.memoizedState=C_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Co(i),t===null&&Be&&(l=i.stateNode=b_(i.type,i.pendingProps,vn.current),tn=i,li=!0,Lt=Fn(l.firstChild)),l=i.pendingProps.children,t!==null||Be?jt(t,i,l,a):i.child=Os(i,null,l,a),ul(t,i),i.child;case 5:return t===null&&Be&&((h=l=Lt)&&(l=cw(l,i.type,i.pendingProps,li),l!==null?(i.stateNode=l,tn=i,Lt=Fn(l.firstChild),li=!1,h=!0):h=!1),h||Ds(i)),Co(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,Md(h,d)?l=null:v!==null&&Md(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Ef(t,i,IS,null,null,a),Cl._currentValue=h),ul(t,i),jt(t,i,l,a),i.child;case 6:return t===null&&Be&&((t=a=Lt)&&(a=hw(a,i.pendingProps,li),a!==null?(i.stateNode=a,tn=i,Lt=null,t=!0):t=!1),t||Ds(i)),null;case 13:return Ay(t,i,a);case 4:return or(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Os(i,null,l,a):jt(t,i,l,a),i.child;case 11:return my(t,i,i.type,i.pendingProps,a);case 7:return jt(t,i,i.pendingProps,a),i.child;case 8:return jt(t,i,i.pendingProps.children,a),i.child;case 12:return jt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Cr(i,i.type,l.value),jt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Us(i),h=Gt(h),l=l(h),i.flags|=1,jt(t,i,l,a),i.child;case 14:return py(t,i,i.type,i.pendingProps,a);case 15:return gy(t,i,i.type,i.pendingProps,a);case 19:return wy(t,i,a);case 22:return yy(t,i,a);case 24:return Us(i),l=Gt(It),t===null?(h=_f(),h===null&&(h=Xe,d=gf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Xf(i),Cr(i,It,h)):((t.lanes&a)!==0&&(Wf(t,i),dl(i,null,null,a),fl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Cr(i,It,l)):(l=d.cache,Cr(i,It,l),l!==h.cache&&$f(i,[It],a,!0))),jt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var Qf=je(null),ks=null,Ui=null;function Cr(t,i,a){Ke(Qf,i._currentValue),i._currentValue=a}function Li(t){t._currentValue=Qf.current,it(Qf)}function Yf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function $f(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Yf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Yf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function cl(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;hn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===ar.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Cl):t=[Cl])}h=h.return}t!==null&&$f(i,t,a,l),i.flags|=262144}function cc(t){for(t=t.firstContext;t!==null;){if(!hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){ks=t,Ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return Ry(ks,t)}function hc(t,i){return ks===null&&Us(t),Ry(t,i)}function Ry(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(t===null)throw Error(s(308));Ui=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ui=Ui.next=i;return a}var Dr=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Or(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(tt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Gu(t),og(t,null,a),i}return Fu(t,l,i,a),Gu(t)}function hl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,dr(t,a)}}function Zf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Jf=!1;function fl(){if(Jf){var t=Pa;if(t!==null)throw t}}function dl(t,i,a,l){Jf=!1;var h=t.updateQueue;Dr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,M=b.next;b.next=null,v===null?d=M:v.next=M,v=b;var G=t.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=M:T.next=M,G.lastBaseUpdate=b))}if(d!==null){var W=h.baseState;v=0,G=M=b=null,T=d;do{var B=T.lane&-536870913,H=B!==T.lane;if(H?(Ue&B)===B:(l&B)===B){B!==0&&B===Va&&(Jf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ce=t,Te=T;B=i;var ot=a;switch(Te.tag){case 1:if(ce=Te.payload,typeof ce=="function"){W=ce.call(ot,W,B);break e}W=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=Te.payload,B=typeof ce=="function"?ce.call(ot,W,B):ce,B==null)break e;W=C({},W,B);break e;case 2:Dr=!0}}B=T.callback,B!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[B]:H.push(B))}else H={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(M=G=H,b=W):G=G.next=H,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);G===null&&(b=W),h.baseState=b,h.firstBaseUpdate=M,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),kr|=v,t.lanes=v,t.memoizedState=W}}function Iy(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Cy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Iy(a[t],i)}function ml(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){$e(i,i.return,T)}}function Mr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a;try{T()}catch(M){$e(h,b,M)}}}l=l.next}while(l!==d)}}catch(M){$e(i,i.return,M)}}function Dy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Cy(i,a)}catch(l){$e(t,t.return,l)}}}function Oy(t,i,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){$e(t,i,l)}}function Ls(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){$e(t,i,d)}}function fn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$e(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$e(t,i,h)}else a.current=null}function Ny(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$e(t,t.return,h)}}function My(t,i,a){try{var l=t.stateNode;sw(l,t.type,a,i),l[St]=i}catch(h){$e(t,t.return,h)}}function Vy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(td(t,i,a),t=t.sibling;t!==null;)td(t,i,a),t=t.sibling}function fc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(fc(t,i,a),t=t.sibling;t!==null;)fc(t,i,a),t=t.sibling}var ji=!1,st=!1,nd=!1,Py=typeof WeakSet=="function"?WeakSet:Set,Pt=null,xy=!1;function xS(t,i){if(t=t.containerInfo,Od=Mc,t=Zp(t),rf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,b=-1,M=0,G=0,W=t,B=null;t:for(;;){for(var H;W!==a||h!==0&&W.nodeType!==3||(T=v+h),W!==d||l!==0&&W.nodeType!==3||(b=v+l),W.nodeType===3&&(v+=W.nodeValue.length),(H=W.firstChild)!==null;)B=W,W=H;for(;;){if(W===t)break t;if(B===a&&++M===h&&(T=v),B===d&&++G===l&&(b=v),(H=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=H}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nd={focusedElem:t,selectionRange:a},Mc=!1,Pt=i;Pt!==null;)if(i=Pt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Pt=t;else for(;Pt!==null;){switch(i=Pt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ce=xs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ce,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Te){$e(a,a.return,Te)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)xd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Pt=t;break}Pt=i.return}return ce=xy,xy=!1,ce}function ky(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Bi(t,a),l&4&&ml(5,a);break;case 1:if(Bi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){$e(a,a.return,T)}else{var h=xs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){$e(a,a.return,T)}}l&64&&Dy(a),l&512&&Ls(a,a.return);break;case 3:if(Bi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Cy(l,t)}catch(T){$e(a,a.return,T)}}break;case 26:Bi(t,a),l&512&&Ls(a,a.return);break;case 27:case 5:Bi(t,a),i===null&&l&4&&Ny(a),l&512&&Ls(a,a.return);break;case 12:Bi(t,a);break;case 13:Bi(t,a),l&4&&jy(t,a);break;case 22:if(h=a.memoizedState!==null||ji,!h){i=i!==null&&i.memoizedState!==null||st;var d=ji,v=st;ji=h,(st=i)&&!v?Vr(t,a,(a.subtreeFlags&8772)!==0):Bi(t,a),ji=d,st=v}l&512&&(a.memoizedProps.mode==="manual"?Ls(a,a.return):fn(a,a.return));break;default:Bi(t,a)}}function Uy(t){var i=t.alternate;i!==null&&(t.alternate=null,Uy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ms(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,dn=!1;function zi(t,i,a){for(a=a.child;a!==null;)Ly(t,i,a),a=a.sibling}function Ly(t,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(lr,a)}catch{}switch(a.tag){case 26:st||fn(a,i),zi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||fn(a,i);var l=yt,h=dn;for(yt=a.stateNode,zi(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);ms(a),yt=l,dn=h;break;case 5:st||fn(a,i);case 6:h=yt;var d=dn;if(yt=null,zi(t,i,a),yt=h,dn=d,yt!==null)if(dn)try{t=yt,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){$e(a,i,v)}else try{yt.removeChild(a.stateNode)}catch(v){$e(a,i,v)}break;case 18:yt!==null&&(dn?(i=yt,a=a.stateNode,i.nodeType===8?Pd(i.parentNode,a):i.nodeType===1&&Pd(i,a),Ml(i)):Pd(yt,a.stateNode));break;case 4:l=yt,h=dn,yt=a.stateNode.containerInfo,dn=!0,zi(t,i,a),yt=l,dn=h;break;case 0:case 11:case 14:case 15:st||Mr(2,a,i),st||Mr(4,a,i),zi(t,i,a);break;case 1:st||(fn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Oy(a,i,l)),zi(t,i,a);break;case 21:zi(t,i,a);break;case 22:st||fn(a,i),st=(l=st)||a.memoizedState!==null,zi(t,i,a),st=l;break;default:zi(t,i,a)}}function jy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ml(t)}catch(a){$e(i,i.return,a)}}function kS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Py),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Py),i;default:throw Error(s(435,t.tag))}}function id(t,i){var a=kS(t);i.forEach(function(l){var h=$S.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Nn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:yt=T.stateNode,dn=!1;break e;case 3:yt=T.stateNode.containerInfo,dn=!0;break e;case 4:yt=T.stateNode.containerInfo,dn=!0;break e}T=T.return}if(yt===null)throw Error(s(160));Ly(d,v,h),yt=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)zy(i,t),i=i.sibling}var Hn=null;function zy(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(i,t),Mn(t),l&4&&(Mr(3,t,t.return),ml(3,t),Mr(5,t,t.return));break;case 1:Nn(i,t),Mn(t),l&512&&(st||a===null||fn(a,a.return)),l&64&&ji&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Hn;if(Nn(i,t),Mn(t),l&512&&(st||a===null||fn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[pr]||d[Ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),zt(d,l,a),d[Ot]=t,Je(d),l=d;break e;case"link":var v=N_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=N_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ot]=t,Je(d),l=d}t.stateNode=l}else M_(h,t.type,t.stateNode);else t.stateNode=O_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?M_(h,t.type,t.stateNode):O_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&My(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var b=h.firstChild;b;){var M=b.nextSibling,G=b.nodeName;b[pr]||G==="HEAD"||G==="BODY"||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&b.rel.toLowerCase()==="stylesheet"||h.removeChild(b),b=M}for(var W=t.type,B=h.attributes;B.length;)h.removeAttributeNode(B[0]);zt(h,W,d),h[Ot]=t,h[St]=d}catch(ce){$e(t,t.return,ce)}}case 5:if(Nn(i,t),Mn(t),l&512&&(st||a===null||fn(a,a.return)),t.flags&32){h=t.stateNode;try{An(h,"")}catch(ce){$e(t,t.return,ce)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,My(t,h,a!==null?a.memoizedProps:h)),l&1024&&(nd=!0);break;case 6:if(Nn(i,t),Mn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ce){$e(t,t.return,ce)}}break;case 3:if(Dc=null,h=Hn,Hn=Ic(i.containerInfo),Nn(i,t),Hn=h,Mn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(i.containerInfo)}catch(ce){$e(t,t.return,ce)}nd&&(nd=!1,By(t));break;case 4:l=Hn,Hn=Ic(t.stateNode.containerInfo),Nn(i,t),Mn(t),Hn=l;break;case 12:Nn(i,t),Mn(t);break;case 13:Nn(i,t),Mn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fd=rn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,id(t,l)));break;case 22:if(l&512&&(st||a===null||fn(a,a.return)),b=t.memoizedState!==null,M=a!==null&&a.memoizedState!==null,G=ji,W=st,ji=G||b,st=W||M,Nn(i,t),st=W,ji=G,Mn(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=b?i._visibility&-2:i._visibility|1,b&&(i=ji||st,a===null||M||i||La(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){M=a=i;try{if(h=M.stateNode,b)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=M.stateNode,T=M.memoizedProps.style;var H=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(ce){$e(M,M.return,ce)}}}else if(i.tag===6){if(a===null){M=i;try{M.stateNode.nodeValue=b?"":M.memoizedProps}catch(ce){$e(M,M.return,ce)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,id(t,a))));break;case 19:Nn(i,t),Mn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,id(t,l)));break;case 21:break;default:Nn(i,t),Mn(t)}}function Mn(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Vy(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=ed(t);fc(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(An(v,""),l.flags&=-33);var T=ed(t);fc(t,T,v);break;case 3:case 4:var b=l.stateNode.containerInfo,M=ed(t);td(t,M,b);break;default:throw Error(s(161))}}}catch(G){$e(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function By(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;By(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Bi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ky(t,i.alternate,i),i=i.sibling}function La(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Mr(4,i,i.return),La(i);break;case 1:fn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Oy(i,i.return,a),La(i);break;case 26:case 27:case 5:fn(i,i.return),La(i);break;case 22:fn(i,i.return),i.memoizedState===null&&La(i);break;default:La(i)}t=t.sibling}}function Vr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Vr(h,d,a),ml(4,d);break;case 1:if(Vr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(M){$e(l,l.return,M)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Iy(b[h],T)}catch(M){$e(l,l.return,M)}}a&&v&64&&Dy(d),Ls(d,d.return);break;case 26:case 27:case 5:Vr(h,d,a),a&&l===null&&v&4&&Ny(d),Ls(d,d.return);break;case 12:Vr(h,d,a);break;case 13:Vr(h,d,a),a&&v&4&&jy(h,d);break;case 22:d.memoizedState===null&&Vr(h,d,a),Ls(d,d.return);break;default:Vr(h,d,a)}i=i.sibling}}function rd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rl(a))}function sd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&rl(t))}function Pr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qy(t,i,a,l),i=i.sibling}function qy(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Pr(t,i,a,l),h&2048&&ml(9,i);break;case 3:Pr(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&rl(t)));break;case 12:if(h&2048){Pr(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){$e(i,i.return,b)}}else Pr(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Pr(t,i,a,l):pl(t,i):d._visibility&4?Pr(t,i,a,l):(d._visibility|=4,ja(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&rd(i.alternate,i);break;case 24:Pr(t,i,a,l),h&2048&&sd(i.alternate,i);break;default:Pr(t,i,a,l)}}function ja(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,b=l,M=v.flags;switch(v.tag){case 0:case 11:case 15:ja(d,v,T,b,h),ml(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&4?ja(d,v,T,b,h):pl(d,v):(G._visibility|=4,ja(d,v,T,b,h)),h&&M&2048&&rd(v.alternate,v);break;case 24:ja(d,v,T,b,h),h&&M&2048&&sd(v.alternate,v);break;default:ja(d,v,T,b,h)}i=i.sibling}}function pl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:pl(a,l),h&2048&&rd(l.alternate,l);break;case 24:pl(a,l),h&2048&&sd(l.alternate,l);break;default:pl(a,l)}i=i.sibling}}var gl=8192;function za(t){if(t.subtreeFlags&gl)for(t=t.child;t!==null;)Hy(t),t=t.sibling}function Hy(t){switch(t.tag){case 26:za(t),t.flags&gl&&t.memoizedState!==null&&ww(Hn,t.memoizedState,t.memoizedProps);break;case 5:za(t);break;case 3:case 4:var i=Hn;Hn=Ic(t.stateNode.containerInfo),za(t),Hn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=gl,gl=16777216,za(t),gl=i):za(t));break;default:za(t)}}function Fy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function yl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pt=l,Ky(l,t)}Fy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gy(t),t=t.sibling}function Gy(t){switch(t.tag){case 0:case 11:case 15:yl(t),t.flags&2048&&Mr(9,t,t.return);break;case 3:yl(t);break;case 12:yl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,dc(t)):yl(t);break;default:yl(t)}}function dc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pt=l,Ky(l,t)}Fy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Mr(8,i,i.return),dc(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,dc(i));break;default:dc(i)}t=t.sibling}}function Ky(t,i){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:Mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:rl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=t;Pt!==null;){l=Pt;var h=l.sibling,d=l.return;if(Uy(l),l===a){Pt=null;break e}if(h!==null){h.return=d,Pt=h;break e}Pt=d}}}function US(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,a,l){return new US(t,i,a,l)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xr(t,i){var a=t.alternate;return a===null?(a=Vn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qy(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function mc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")ad(t)&&(v=1);else if(typeof t=="string")v=Aw(t,a,Wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return js(a.children,h,d,i);case y:v=8,h|=24;break;case E:return t=Vn(12,a,i,h|2),t.elementType=E,t.lanes=d,t;case Z:return t=Vn(13,a,i,h),t.elementType=Z,t.lanes=d,t;case K:return t=Vn(19,a,i,h),t.elementType=K,t.lanes=d,t;case ue:return Yy(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case j:v=10;break e;case D:v=9;break e;case F:v=11;break e;case te:v=14;break e;case ae:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Vn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function js(t,i,a,l){return t=Vn(7,t,l,i),t.lanes=a,t}function Yy(t,i,a,l){t=Vn(22,t,l,i),t.elementType=ue,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=Sr(d,2);v!==null&&(h._pendingVisibility|=2,nn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=Sr(d,2);v!==null&&(h._pendingVisibility&=-3,nn(v,d,2))}}};return t.stateNode=h,t}function od(t,i,a){return t=Vn(6,t,null,i),t.lanes=a,t}function ld(t,i,a){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function qi(t){t.flags|=4}function $y(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V_(i)){if(i=On.current,i!==null&&((Ue&4194176)===Ue?ui!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||i!==ui))throw tl=df,fg;t.flags|=8192}}function pc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?hr():536870912,t.lanes|=i,qa|=i)}function _l(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function LS(t,i,a){var l=i.pendingProps;switch(hf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return et(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Li(It),Ti(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wo(i)?qi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qn!==null&&(gd(qn),qn=null))),et(i),null;case 26:return a=i.memoizedState,t===null?(qi(i),a!==null?(et(i),$y(i,a)):(et(i),i.flags&=-16777217)):a?a!==t.memoizedState?(qi(i),et(i),$y(i,a)):(et(i),i.flags&=-16777217):(t.memoizedProps!==l&&qi(i),et(i),i.flags&=-16777217),null;case 27:oa(i),a=vn.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return et(i),null}t=Wt.current,Wo(i)?cg(i):(t=b_(h,l,a),i.stateNode=t,qi(i))}return et(i),null;case 5:if(oa(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return et(i),null}if(t=Wt.current,Wo(i))cg(i);else{switch(h=Rc(vn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Ot]=i,t[St]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(zt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qi(i)}}return et(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=vn.current,Wo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=tn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Ot]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||v_(t.nodeValue,a)),t||Ds(i)}else t=Rc(t).createTextNode(l),t[Ot]=i,i.stateNode=t}return et(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Wo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ot]=i}else Zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else qn!==null&&(gd(qn),qn=null),h=!0;if(!h)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),pc(i,i.updateQueue),et(i),null;case 4:return Ti(),t===null&&Id(i.stateNode.containerInfo),et(i),null;case 10:return Li(i.type),et(i),null;case 19:if(it(Rt),h=i.memoizedState,h===null)return et(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)_l(h,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Zu(t),d!==null){for(i.flags|=128,_l(h,!1),t=d.updateQueue,i.updateQueue=t,pc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Qy(a,t),a=a.sibling;return Ke(Rt,Rt.current&1|2),i.child}t=t.sibling}h.tail!==null&&rn()>gc&&(i.flags|=128,l=!0,_l(h,!1),i.lanes=4194304)}else{if(!l)if(t=Zu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,pc(i,t),_l(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Be)return et(i),null}else 2*rn()-h.renderingStartTime>gc&&a!==536870912&&(i.flags|=128,l=!0,_l(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=rn(),i.sibling=null,t=Rt.current,Ke(Rt,l?t&1|2:t&1),i):(et(i),null);case 22:case 23:return Pi(i),pf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),a=i.updateQueue,a!==null&&pc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&it(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Li(It),et(i),null;case 25:return null}throw Error(s(156,i.tag))}function jS(t,i){switch(hf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Li(It),Ti(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return oa(i),null;case 13:if(Pi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Zo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return it(Rt),null;case 4:return Ti(),null;case 10:return Li(i.type),null;case 22:case 23:return Pi(i),pf(),t!==null&&it(Ns),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Li(It),null;case 25:return null;default:return null}}function Xy(t,i){switch(hf(i),i.tag){case 3:Li(It),Ti();break;case 26:case 27:case 5:oa(i);break;case 4:Ti();break;case 13:Pi(i);break;case 19:it(Rt);break;case 10:Li(i.type);break;case 22:case 23:Pi(i),pf(),t!==null&&it(Ns);break;case 24:Li(It)}}var zS={getCacheForType:function(t){var i=Gt(It),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},BS=typeof WeakMap=="function"?WeakMap:Map,tt=0,Xe=null,De=null,Ue=0,We=0,mn=null,Hi=!1,Ba=!1,ud=!1,Fi=0,at=0,kr=0,zs=0,cd=0,Pn=0,qa=0,vl=null,hi=null,hd=!1,fd=0,gc=1/0,yc=null,Ur=null,_c=!1,Bs=null,El=0,dd=0,md=null,Tl=0,pd=null;function pn(){if((tt&2)!==0&&Ue!==0)return Ue&-Ue;if(w.T!==null){var t=Va;return t!==0?t:Sd()}return wu()}function Wy(){Pn===0&&(Pn=(Ue&536870912)===0||Be?Vo():536870912);var t=On.current;return t!==null&&(t.flags|=32),Pn}function nn(t,i,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(Ha(t,0),Gi(t,Ue,Pn,!1)),lt(t,a),((tt&2)===0||t!==Xe)&&(t===Xe&&((tt&2)===0&&(zs|=a),at===4&&Gi(t,Ue,Pn,!1)),fi(t))}function Zy(t,i,a){if((tt&6)!==0)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||cr(t,i),h=l?FS(t,i):vd(t,i,!0),d=l;do{if(h===0){Ba&&!l&&Gi(t,i,0,!1);break}else if(h===6)Gi(t,i,0,!Hi);else{if(a=t.current.alternate,d&&!qS(a)){h=vd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=vl;var b=T.current.memoizedState.isDehydrated;if(b&&(Ha(T,v).flags|=256),v=vd(T,v,!1),v!==2){if(ud&&!b){T.errorRecoveryDisabledLanes|=d,zs|=d,h=4;break e}d=hi,hi=h,d!==null&&gd(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Ha(t,0),Gi(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){Gi(l,i,Pn,!Hi);break e}break;case 2:hi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=fd+300-rn(),10<d)){if(Gi(l,i,Pn,!Hi),En(l,0)!==0)break e;l.timeoutHandle=A_(Jy.bind(null,l,a,hi,yc,hd,i,Pn,zs,qa,Hi,2,-0,0),d);break e}Jy(l,a,hi,yc,hd,i,Pn,zs,qa,Hi,0,-0,0)}}break}while(!0);fi(t)}function gd(t){hi===null?hi=t:hi.push.apply(hi,t)}function Jy(t,i,a,l,h,d,v,T,b,M,G,W,B){var H=i.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:Sw},Hy(i),i=bw(),i!==null)){t.cancelPendingCommit=i(a_.bind(null,t,a,l,h,v,T,b,1,W,B)),Gi(t,d,v,!M);return}a_(t,a,l,h,v,T,b,G,W,B)}function qS(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gi(t,i,a,l){i&=~cd,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Zt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&fr(t,a,i)}function vc(){return(tt&6)===0?(Al(0),!1):!0}function yd(){if(De!==null){if(We===0)var t=De.return;else t=De,Ui=ks=null,Sf(t),Na=null,nl=0,t=De;for(;t!==null;)Xy(t.alternate,t),t=t.return;De=null}}function Ha(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ow(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),yd(),Xe=t,De=a=xr(t.current,null),Ue=i,We=0,mn=null,Hi=!1,Ba=cr(t,i),ud=!1,qa=Pn=cd=zs=kr=at=0,hi=vl=null,hd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Zt(l),d=1<<h;i|=t[h],l&=~d}return Fi=i,Hu(),a}function e_(t,i){Ie=null,w.H=ci,i===el?(i=pg(),We=3):i===fg?(i=pg(),We=4):We=i===dy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,De===null&&(at=1,uc(t,In(i,t.current)))}function t_(){var t=w.H;return w.H=ci,t===null?ci:t}function n_(){var t=w.A;return w.A=zS,t}function _d(){at=4,Hi||(Ue&4194176)!==Ue&&On.current!==null||(Ba=!0),(kr&134217727)===0&&(zs&134217727)===0||Xe===null||Gi(Xe,Ue,Pn,!1)}function vd(t,i,a){var l=tt;tt|=2;var h=t_(),d=n_();(Xe!==t||Ue!==i)&&(yc=null,Ha(t,i)),i=!1;var v=at;e:do try{if(We!==0&&De!==null){var T=De,b=mn;switch(We){case 8:yd(),v=6;break e;case 3:case 2:case 6:On.current===null&&(i=!0);var M=We;if(We=0,mn=null,Fa(t,T,b,M),a&&Ba){v=0;break e}break;default:M=We,We=0,mn=null,Fa(t,T,b,M)}}HS(),v=at;break}catch(G){e_(t,G)}while(!0);return i&&t.shellSuspendCounter++,Ui=ks=null,tt=l,w.H=h,w.A=d,De===null&&(Xe=null,Ue=0,Hu()),v}function HS(){for(;De!==null;)i_(De)}function FS(t,i){var a=tt;tt|=2;var l=t_(),h=n_();Xe!==t||Ue!==i?(yc=null,gc=rn()+500,Ha(t,i)):Ba=cr(t,i);e:do try{if(We!==0&&De!==null){i=De;var d=mn;t:switch(We){case 1:We=0,mn=null,Fa(t,i,d,1);break;case 2:if(dg(d)){We=0,mn=null,r_(i);break}i=function(){We===2&&Xe===t&&(We=7),fi(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:dg(d)?(We=0,mn=null,r_(i)):(We=0,mn=null,Fa(t,i,d,7));break;case 5:var v=null;switch(De.tag){case 26:v=De.memoizedState;case 5:case 27:var T=De;if(!v||V_(v)){We=0,mn=null;var b=T.sibling;if(b!==null)De=b;else{var M=T.return;M!==null?(De=M,Ec(M)):De=null}break t}}We=0,mn=null,Fa(t,i,d,5);break;case 6:We=0,mn=null,Fa(t,i,d,6);break;case 8:yd(),at=6;break e;default:throw Error(s(462))}}GS();break}catch(G){e_(t,G)}while(!0);return Ui=ks=null,w.H=l,w.A=h,tt=a,De!==null?0:(Xe=null,Ue=0,Hu(),at)}function GS(){for(;De!==null&&!Kh();)i_(De)}function i_(t){var i=by(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,i===null?Ec(t):De=i}function r_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=vy(a,i,i.pendingProps,i.type,void 0,Ue);break;case 11:i=vy(a,i,i.pendingProps,i.type.render,i.ref,Ue);break;case 5:Sf(i);default:Xy(a,i),i=De=Qy(i,Fi),i=by(a,i,Fi)}t.memoizedProps=t.pendingProps,i===null?Ec(t):De=i}function Fa(t,i,a,l){Ui=ks=null,Sf(i),Na=null,nl=0;var h=i.return;try{if(VS(t,h,i,a,Ue)){at=1,uc(t,In(a,t.current)),De=null;return}}catch(d){if(h!==null)throw De=h,d;at=1,uc(t,In(a,t.current)),De=null;return}i.flags&32768?(Be||l===1?t=!0:Ba||(Ue&536870912)!==0?t=!1:(Hi=t=!0,(l===2||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),s_(i,t)):Ec(i)}function Ec(t){var i=t;do{if((i.flags&32768)!==0){s_(i,Hi);return}t=i.return;var a=LS(i.alternate,i,Fi);if(a!==null){De=a;return}if(i=i.sibling,i!==null){De=i;return}De=i=t}while(i!==null);at===0&&(at=5)}function s_(t,i){do{var a=jS(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);at=6,De=null}function a_(t,i,a,l,h,d,v,T,b,M){var G=w.T,W=re.p;try{re.p=2,w.T=null,KS(t,i,a,l,W,h,d,v,T,b,M)}finally{w.T=G,re.p=W}}function KS(t,i,a,l,h,d,v,T){do Ga();while(Bs!==null);if((tt&6)!==0)throw Error(s(327));var b=t.finishedWork;if(l=t.finishedLanes,b===null)return null;if(t.finishedWork=null,t.finishedLanes=0,b===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var M=b.lanes|b.childLanes;if(M|=lf,Au(t,l,M,d,v,T),t===Xe&&(De=Xe=null,Ue=0),(b.subtreeFlags&10256)===0&&(b.flags&10256)===0||_c||(_c=!0,dd=M,md=a,XS(Ai,function(){return Ga(),null})),a=(b.flags&15990)!==0,(b.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,d=re.p,re.p=2,v=tt,tt|=4,xS(t,b),zy(b,t),gS(Nd,t.containerInfo),Mc=!!Od,Nd=Od=null,t.current=b,ky(t,b.alternate,b),Do(),tt=v,re.p=d,w.T=a):t.current=b,_c?(_c=!1,Bs=t,El=l):o_(t,M),M=t.pendingLanes,M===0&&(Ur=null),No(b.stateNode),fi(t),i!==null)for(h=t.onRecoverableError,b=0;b<i.length;b++)M=i[b],h(M.value,{componentStack:M.stack});return(El&3)!==0&&Ga(),M=t.pendingLanes,(l&4194218)!==0&&(M&42)!==0?t===pd?Tl++:(Tl=0,pd=t):Tl=0,Al(0),null}function o_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,rl(i)))}function Ga(){if(Bs!==null){var t=Bs,i=dd;dd=0;var a=Su(El),l=w.T,h=re.p;try{if(re.p=32>a?32:a,w.T=null,Bs===null)var d=!1;else{a=md,md=null;var v=Bs,T=El;if(Bs=null,El=0,(tt&6)!==0)throw Error(s(331));var b=tt;if(tt|=4,Gy(v.current),qy(v,v.current,T,a),tt=b,Al(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(lr,v)}catch{}d=!0}return d}finally{re.p=h,w.T=l,o_(t,i)}}return!1}function l_(t,i,a){i=In(a,i),i=Uf(t.stateNode,i,2),t=Nr(t,i,2),t!==null&&(lt(t,2),fi(t))}function $e(t,i,a){if(t.tag===3)l_(t,t,a);else for(;i!==null;){if(i.tag===3){l_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){t=In(a,t),a=hy(2),l=Nr(i,a,2),l!==null&&(fy(a,l,i,t),lt(l,2),fi(l));break}}i=i.return}}function Ed(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new BS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(ud=!0,h.add(a),t=QS.bind(null,t,i,a),i.then(t,t))}function QS(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Ue&a)===a&&(at===4||at===3&&(Ue&62914560)===Ue&&300>rn()-fd?(tt&2)===0&&Ha(t,0):cd|=a,qa===Ue&&(qa=0)),fi(t)}function u_(t,i){i===0&&(i=hr()),t=Sr(t,i),t!==null&&(lt(t,i),fi(t))}function YS(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),u_(t,a)}function $S(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),u_(t,a)}function XS(t,i){return hs(t,i)}var Tc=null,Ka=null,Td=!1,Ac=!1,Ad=!1,qs=0;function fi(t){t!==Ka&&t.next===null&&(Ka===null?Tc=Ka=t:Ka=Ka.next=t),Ac=!0,Td||(Td=!0,ZS(WS))}function Al(t,i){if(!Ad&&Ac){Ad=!0;do for(var a=!1,l=Tc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Zt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,f_(l,d))}else d=Ue,d=En(l,l===Xe?d:0),(d&3)===0||cr(l,d)||(a=!0,f_(l,d));l=l.next}while(a);Ad=!1}}function WS(){Ac=Td=!1;var t=0;qs!==0&&(aw()&&(t=qs),qs=0);for(var i=rn(),a=null,l=Tc;l!==null;){var h=l.next,d=c_(l,i);d===0?(l.next=null,a===null?Tc=h:a.next=h,h===null&&(Ka=a)):(a=l,(t!==0||(d&3)!==0)&&(Ac=!0)),l=h}Al(t)}function c_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Zt(d),T=1<<v,b=h[v];b===-1?((T&a)===0||(T&l)!==0)&&(h[v]=ca(T,i)):b<=i&&(t.expiredLanes|=T),d&=~T}if(i=Xe,a=Ue,a=En(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ua(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||cr(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ua(l),Su(a)){case 2:case 8:a=Dt;break;case 32:a=Ai;break;case 268435456:a=Oo;break;default:a=Ai}return l=h_.bind(null,t),a=hs(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ua(l),t.callbackPriority=2,t.callbackNode=null,2}function h_(t,i){var a=t.callbackNode;if(Ga()&&t.callbackNode!==a)return null;var l=Ue;return l=En(t,t===Xe?l:0),l===0?null:(Zy(t,l,i),c_(t,rn()),t.callbackNode!=null&&t.callbackNode===a?h_.bind(null,t):null)}function f_(t,i){if(Ga())return null;Zy(t,i,!0)}function ZS(t){lw(function(){(tt&6)!==0?hs(At,t):t()})}function Sd(){return qs===0&&(qs=Vo()),qs}function d_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ti(""+t)}function m_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function JS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=d_((h[St]||null).action),v=l.submitter;v&&(i=(i=v[St]||null)?d_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ya("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qs!==0){var b=v?m_(h,v):new FormData(h);Mf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(T.preventDefault(),b=v?m_(h,v):new FormData(h),Mf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var wd=0;wd<ag.length;wd++){var bd=ag[wd],ew=bd.toLowerCase(),tw=bd[0].toUpperCase()+bd.slice(1);Bn(ew,"on"+tw)}Bn(tg,"onAnimationEnd"),Bn(ng,"onAnimationIteration"),Bn(ig,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(_S,"onTransitionRun"),Bn(vS,"onTransitionStart"),Bn(ES,"onTransitionCancel"),Bn(rg,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function p_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],b=T.instance,M=T.currentTarget;if(T=T.listener,b!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=M;try{d(h)}catch(G){lc(G)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(T=l[v],b=T.instance,M=T.currentTarget,T=T.listener,b!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=M;try{d(h)}catch(G){lc(G)}h.currentTarget=null,d=b}}}}function Ve(t,i){var a=i[ds];a===void 0&&(a=i[ds]=new Set);var l=t+"__bubble";a.has(l)||(g_(i,t,2,!1),a.add(l))}function Rd(t,i,a){var l=0;i&&(l|=4),g_(a,t,l,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Id(t){if(!t[Sc]){t[Sc]=!0,xo.forEach(function(a){a!=="selectionchange"&&(nw.has(a)||Rd(a,!1,t),Rd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,Rd("selectionchange",!1,i))}}function g_(t,i,a,l){switch(j_(i)){case 2:var h=Cw;break;case 8:h=Dw;break;default:h=zd}a=h.bind(null,i,a,t),h=void 0,!wn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Cd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&(b=v.stateNode.containerInfo,b===h||b.nodeType===8&&b.parentNode===h))return;v=v.return}for(;T!==null;){if(v=zn(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Cu(function(){var M=d,G=ga(a),W=[];e:{var B=sg.get(t);if(B!==void 0){var H=ya,ce=t;switch(t){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":H=Sa;break;case"focusin":ce="focus",H=Ea;break;case"focusout":ce="blur",H=Ea;break;case"beforeblur":case"afterblur":H=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=ku;break;case tg:case ng:case ig:H=Ta;break;case rg:H=Lu;break;case"scroll":case"scrollend":H=Du;break;case"wheel":H=wa;break;case"copy":case"cut":case"paste":H=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Qo;break;case"toggle":case"beforetoggle":H=zu}var Te=(i&4)!==0,ot=!Te&&(t==="scroll"||t==="scrollend"),x=Te?B!==null?B+"Capture":null:B;Te=[];for(var N=M,L;N!==null;){var Q=N;if(L=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||L===null||x===null||(Q=_s(N,x),Q!=null&&Te.push(wl(N,Q,L))),ot)break;N=N.return}0<Te.length&&(B=new H(B,ce,null,a,G),W.push({event:B,listeners:Te}))}}if((i&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",B&&a!==Sn&&(ce=a.relatedTarget||a.fromElement)&&(zn(ce)||ce[Si]))break e;if((H||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,H?(ce=a.relatedTarget||a.toElement,H=M,ce=ce?zn(ce):null,ce!==null&&(ot=de(ce),Te=ce.tag,ce!==ot||Te!==5&&Te!==27&&Te!==6)&&(ce=null)):(H=null,ce=M),H!==ce)){if(Te=bn,Q="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(Te=Qo,Q="onPointerLeave",x="onPointerEnter",N="pointer"),ot=H==null?B:gr(H),L=ce==null?B:gr(ce),B=new Te(Q,N+"leave",H,a,G),B.target=ot,B.relatedTarget=L,Q=null,zn(G)===M&&(Te=new Te(x,N+"enter",ce,a,G),Te.target=L,Te.relatedTarget=ot,Q=Te),ot=Q,H&&ce)t:{for(Te=H,x=ce,N=0,L=Te;L;L=Qa(L))N++;for(L=0,Q=x;Q;Q=Qa(Q))L++;for(;0<N-L;)Te=Qa(Te),N--;for(;0<L-N;)x=Qa(x),L--;for(;N--;){if(Te===x||x!==null&&Te===x.alternate)break t;Te=Qa(Te),x=Qa(x)}Te=null}else Te=null;H!==null&&y_(W,B,H,Te,!1),ce!==null&&ot!==null&&y_(W,ot,ce,Te,!0)}}e:{if(B=M?gr(M):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var le=Fp;else if(bt(B))if(Gp)le=mS;else{le=fS;var Ce=hS}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?M&&zo(M.elementType)&&(le=Fp):le=dS;if(le&&(le=le(t,M))){Ni(W,le,a,G);break e}Ce&&Ce(t,B,M),t==="focusout"&&M&&B.type==="number"&&M.memoizedProps.value!=null&&pa(B,"number",B.value)}switch(Ce=M?gr(M):window,t){case"focusin":(bt(Ce)||Ce.contentEditable==="true")&&(ba=Ce,sf=M,Xo=null);break;case"focusout":Xo=sf=ba=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Jp(W,a,G);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":Jp(W,a,G)}var fe;if(ai)e:{switch(t){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else xe?q(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(_&&a.locale!=="ko"&&(xe||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&xe&&(fe=qo()):(ni=G,Ar="value"in ni?ni.value:ni.textContent,xe=!0)),Ce=wc(M,ge),0<Ce.length&&(ge=new Go(ge,t,null,a,G),W.push({event:ge,listeners:Ce}),fe?ge.data=fe:(fe=ee(a),fe!==null&&(ge.data=fe)))),(fe=g?wt(t,a):ke(t,a))&&(ge=wc(M,"onBeforeInput"),0<ge.length&&(Ce=new Go("onBeforeInput","beforeinput",null,a,G),W.push({event:Ce,listeners:ge}),Ce.data=fe)),JS(W,t,M,a,G)}p_(W,i)})}function wl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function wc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=_s(t,a),h!=null&&l.unshift(wl(t,h,d)),h=_s(t,i),h!=null&&l.push(wl(t,h,d))),t=t.return}return l}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,b=T.alternate,M=T.stateNode;if(T=T.tag,b!==null&&b===l)break;T!==5&&T!==26&&T!==27||M===null||(b=M,h?(M=_s(a,d),M!=null&&v.unshift(wl(a,M,b))):h||(M=_s(a,d),M!=null&&v.push(wl(a,M,b)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var iw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function __(t){return(typeof t=="string"?t:""+t).replace(iw,`
`).replace(rw,"")}function v_(t,i){return i=__(i),__(t)===i}function bc(){}function Ye(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(t,""+l);break;case"className":vr(t,"class",l);break;case"tabIndex":vr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(t,a,l);break;case"style":Iu(t,l,d);break;case"data":if(i!=="object"){vr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ti(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Ye(t,i,"name",h.name,h,null),Ye(t,i,"formEncType",h.formEncType,h,null),Ye(t,i,"formMethod",h.formMethod,h,null),Ye(t,i,"formTarget",h.formTarget,h,null)):(Ye(t,i,"encType",h.encType,h,null),Ye(t,i,"method",h.method,h,null),Ye(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ti(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=bc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ti(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),_r(t,"popover",l);break;case"xlinkActuate":Tn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Tn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Tn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Tn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Tn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Tn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_r(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wh.get(a)||a,_r(t,a,l))}}function Dd(t,i,a,l,h,d){switch(a){case"style":Iu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?An(t,l):(typeof l=="number"||typeof l=="bigint")&&An(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!da.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[St]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):_r(t,a,l)}}}function zt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ye(t,i,d,v,a,null)}}h&&Ye(t,i,"srcSet",a.srcSet,a,null),l&&Ye(t,i,"src",a.src,a,null);return;case"input":Ve("invalid",t);var T=d=v=h=null,b=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":b=G;break;case"defaultChecked":M=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Ye(t,i,l,G,a,null)}}gs(t,d,T,b,M,v,h,!1),ps(t);return;case"select":Ve("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Ye(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?ze(t,!!l,i,!1):a!=null&&ze(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ye(t,i,v,T,a,null)}Tr(t,l,h,d),ps(t);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(t,i,b,l,a,null)}return;case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<Sl.length;l++)Ve(Sl[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ye(t,i,M,l,a,null)}return;default:if(zo(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Dd(t,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Ye(t,i,T,l,a,null))}function sw(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,b=null,M=null,G=null;for(H in a){var W=a[H];if(a.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":b=W;default:l.hasOwnProperty(H)||Ye(t,i,H,null,l,W)}}for(var B in l){var H=l[B];if(W=a[B],l.hasOwnProperty(B)&&(H!=null||W!=null))switch(B){case"type":d=H;break;case"name":h=H;break;case"checked":M=H;break;case"defaultChecked":G=H;break;case"value":v=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==W&&Ye(t,i,B,H,l,W)}}Er(t,v,T,b,M,G,d,h);return;case"select":H=v=T=B=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":H=b;default:l.hasOwnProperty(d)||Ye(t,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":B=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==b&&Ye(t,i,h,d,l,b)}i=T,a=v,l=H,B!=null?ze(t,!!a,B,!1):!!l!=!!a&&(i!=null?ze(t,!!a,i,!0):ze(t,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ye(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":B=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Ye(t,i,v,h,l,d)}ys(t,B,H);return;case"option":for(var ce in a)if(B=a[ce],a.hasOwnProperty(ce)&&B!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:Ye(t,i,ce,null,l,B)}for(b in l)if(B=l[b],H=a[b],l.hasOwnProperty(b)&&B!==H&&(B!=null||H!=null))switch(b){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ye(t,i,b,B,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)B=a[Te],a.hasOwnProperty(Te)&&B!=null&&!l.hasOwnProperty(Te)&&Ye(t,i,Te,null,l,B);for(M in l)if(B=l[M],H=a[M],l.hasOwnProperty(M)&&B!==H&&(B!=null||H!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:Ye(t,i,M,B,l,H)}return;default:if(zo(i)){for(var ot in a)B=a[ot],a.hasOwnProperty(ot)&&B!==void 0&&!l.hasOwnProperty(ot)&&Dd(t,i,ot,void 0,l,B);for(G in l)B=l[G],H=a[G],!l.hasOwnProperty(G)||B===H||B===void 0&&H===void 0||Dd(t,i,G,B,l,H);return}}for(var x in a)B=a[x],a.hasOwnProperty(x)&&B!=null&&!l.hasOwnProperty(x)&&Ye(t,i,x,null,l,B);for(W in l)B=l[W],H=a[W],!l.hasOwnProperty(W)||B===H||B==null&&H==null||Ye(t,i,W,B,l,H)}var Od=null,Nd=null;function Rc(t){return t.nodeType===9?t:t.ownerDocument}function E_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Md(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vd=null;function aw(){var t=window.event;return t&&t.type==="popstate"?t===Vd?!1:(Vd=t,!0):(Vd=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,lw=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(t){return S_.resolve(null).then(t).catch(uw)}:A_;function uw(t){setTimeout(function(){throw t})}function Pd(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),Ml(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);Ml(i)}function xd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xd(a),ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cw(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[pr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function hw(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function w_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function b_(t,i,a){switch(i=Rc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var xn=new Map,R_=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ki=re.d;re.d={f:fw,r:dw,D:mw,C:pw,L:gw,m:yw,X:vw,S:_w,M:Ew};function fw(){var t=Ki.f(),i=vc();return t||i}function dw(t){var i=wi(t);i!==null&&i.tag===5&&i.type==="form"?Jg(i):Ki.r(t)}var Ya=typeof document>"u"?null:document;function I_(t,i,a){var l=Ya;if(l&&typeof i=="string"&&i){var h=rt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),R_.has(h)||(R_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zt(i,"link",t),Je(i),l.head.appendChild(i)))}}function mw(t){Ki.D(t),I_("dns-prefetch",t,null)}function pw(t,i){Ki.C(t,i),I_("preconnect",t,i)}function gw(t,i,a){Ki.L(t,i,a);var l=Ya;if(l&&t&&i){var h='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+rt(a.imageSizes)+'"]')):h+='[href="'+rt(t)+'"]';var d=h;switch(i){case"style":d=$a(t);break;case"script":d=Xa(t)}xn.has(d)||(t=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),xn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(bl(d))||i==="script"&&l.querySelector(Rl(d))||(i=l.createElement("link"),zt(i,"link",t),Je(i),l.head.appendChild(i)))}}function yw(t,i){Ki.m(t,i);var a=Ya;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Xa(t)}if(!xn.has(d)&&(t=C({rel:"modulepreload",href:t},i),xn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(d)))return}l=a.createElement("link"),zt(l,"link",t),Je(l),a.head.appendChild(l)}}}function _w(t,i,a){Ki.S(t,i,a);var l=Ya;if(l&&t){var h=yr(l).hoistableStyles,d=$a(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(bl(d)))T.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":i},a),(a=xn.get(d))&&kd(t,a);var b=v=l.createElement("link");Je(b),zt(b,"link",t),b._p=new Promise(function(M,G){b.onload=M,b.onerror=G}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Cc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function vw(t,i){Ki.X(t,i);var a=Ya;if(a&&t){var l=yr(a).hoistableScripts,h=Xa(t),d=l.get(h);d||(d=a.querySelector(Rl(h)),d||(t=C({src:t,async:!0},i),(i=xn.get(h))&&Ud(t,i),d=a.createElement("script"),Je(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Ew(t,i){Ki.M(t,i);var a=Ya;if(a&&t){var l=yr(a).hoistableScripts,h=Xa(t),d=l.get(h);d||(d=a.querySelector(Rl(h)),d||(t=C({src:t,async:!0,type:"module"},i),(i=xn.get(h))&&Ud(t,i),d=a.createElement("script"),Je(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function C_(t,i,a,l){var h=(h=vn.current)?Ic(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=$a(a.href),a=yr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$a(a.href);var d=yr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(bl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),xn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xn.set(t,a),d||Tw(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Xa(a),a=yr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $a(t){return'href="'+rt(t)+'"'}function bl(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function Tw(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zt(i,"link",a),Je(i),t.head.appendChild(i))}function Xa(t){return'[src="'+rt(t)+'"]'}function Rl(t){return"script[async]"+t}function O_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(l)return i.instance=l,Je(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Je(l),zt(l,"style",h),Cc(l,a.precedence,t),i.instance=l;case"stylesheet":h=$a(a.href);var d=t.querySelector(bl(h));if(d)return i.state.loading|=4,i.instance=d,Je(d),d;l=D_(a),(h=xn.get(h))&&kd(l,h),d=(t.ownerDocument||t).createElement("link"),Je(d);var v=d;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),zt(d,"link",l),i.state.loading|=4,Cc(d,a.precedence,t),i.instance=d;case"script":return d=Xa(a.src),(h=t.querySelector(Rl(d)))?(i.instance=h,Je(h),h):(l=a,(h=xn.get(d))&&(l=C({},a),Ud(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Je(h),zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Cc(l,a.precedence,t));return i.instance}function Cc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ud(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Dc=null;function N_(t,i,a){if(Dc===null){var l=new Map,h=Dc=new Map;h.set(a,l)}else h=Dc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[pr]||d[Ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function M_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Aw(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function V_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Il=null;function Sw(){}function ww(t,i,a){if(Il===null)throw Error(s(475));var l=Il;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=$a(a.href),d=t.querySelector(bl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Oc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,Je(d);return}d=t.ownerDocument||t,a=D_(a),(h=xn.get(h))&&kd(a,h),d=d.createElement("link"),Je(d);var v=d;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),zt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Oc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function bw(){if(Il===null)throw Error(s(475));var t=Il;return t.stylesheets&&t.count===0&&Ld(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Ld(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Oc(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Ld(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,i.forEach(Rw,t),Nc=null,Oc.call(t))}function Rw(t,i){if(!(i.state.loading&4)){var a=Nc.get(t);if(a)var l=a.get(null);else{a=new Map,Nc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Oc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Cl={$$typeof:j,Provider:null,Consumer:null,_currentValue:Re,_currentValue2:Re,_threadCount:0};function Iw(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ha(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.hiddenUpdates=ha(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function P_(t,i,a,l,h,d,v,T,b,M,G,W){return t=new Iw(t,i,a,v,T,b,M,W),i=1,d===!0&&(i|=24),d=Vn(3,null,null,i),t.current=d,d.stateNode=t,i=gf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Xf(d),t}function x_(t){return t?(t=Ca,t):Ca}function k_(t,i,a,l,h,d){h=x_(h),l.context===null?l.context=h:l.pendingContext=h,l=Or(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Nr(t,l,i),a!==null&&(nn(a,t,i),hl(a,t,i))}function U_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function jd(t,i){U_(t,i),(t=t.alternate)&&U_(t,i)}function L_(t){if(t.tag===13){var i=Sr(t,67108864);i!==null&&nn(i,t,67108864),jd(t,67108864)}}var Mc=!0;function Cw(t,i,a,l){var h=w.T;w.T=null;var d=re.p;try{re.p=2,zd(t,i,a,l)}finally{re.p=d,w.T=h}}function Dw(t,i,a,l){var h=w.T;w.T=null;var d=re.p;try{re.p=8,zd(t,i,a,l)}finally{re.p=d,w.T=h}}function zd(t,i,a,l){if(Mc){var h=Bd(l);if(h===null)Cd(t,i,l,Vc,a),z_(t,l);else if(Nw(h,t,i,a,l))l.stopPropagation();else if(z_(t,l),i&4&&-1<Ow.indexOf(t)){for(;h!==null;){var d=wi(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=jn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-Zt(v);T.entanglements[1]|=b,v&=~b}fi(d),(tt&6)===0&&(gc=rn()+500,Al(0))}}break;case 13:T=Sr(d,2),T!==null&&nn(T,d,2),vc(),jd(d,2)}if(d=Bd(l),d===null&&Cd(t,i,l,Vc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Cd(t,i,l,null,a)}}function Bd(t){return t=ga(t),qd(t)}var Vc=null;function qd(t){if(Vc=null,t=zn(t),t!==null){var i=de(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=He(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Vc=t,null}function j_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_u()){case At:return 2;case Dt:return 8;case Ai:case vu:return 32;case Oo:return 268435456;default:return 32}default:return 32}}var Hd=!1,Lr=null,jr=null,zr=null,Dl=new Map,Ol=new Map,Br=[],Ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z_(t,i){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(i.pointerId)}}function Nl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=wi(i),i!==null&&L_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Nw(t,i,a,l,h){switch(i){case"focusin":return Lr=Nl(Lr,t,i,a,l,h),!0;case"dragenter":return jr=Nl(jr,t,i,a,l,h),!0;case"mouseover":return zr=Nl(zr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Dl.set(d,Nl(Dl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Ol.set(d,Nl(Ol.get(d)||null,t,i,a,l,h)),!0}return!1}function B_(t){var i=zn(t.target);if(i!==null){var a=de(i);if(a!==null){if(i=a.tag,i===13){if(i=He(a),i!==null){t.blockedOn=i,mr(t.priority,function(){if(a.tag===13){var l=pn(),h=Sr(a,l);h!==null&&nn(h,a,l),jd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Bd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Sn=l,a.target.dispatchEvent(l),Sn=null}else return i=wi(a),i!==null&&L_(i),t.blockedOn=a,!1;i.shift()}return!0}function q_(t,i,a){Pc(t)&&a.delete(i)}function Mw(){Hd=!1,Lr!==null&&Pc(Lr)&&(Lr=null),jr!==null&&Pc(jr)&&(jr=null),zr!==null&&Pc(zr)&&(zr=null),Dl.forEach(q_),Ol.forEach(q_)}function xc(t,i){t.blockedOn===i&&(t.blockedOn=null,Hd||(Hd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mw)))}var kc=null;function H_(t){kc!==t&&(kc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){kc===t&&(kc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(qd(l||a)===null)continue;break}var d=wi(a);d!==null&&(t.splice(i,3),i-=3,Mf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ml(t){function i(b){return xc(b,t)}Lr!==null&&xc(Lr,t),jr!==null&&xc(jr,t),zr!==null&&xc(zr,t),Dl.forEach(i),Ol.forEach(i);for(var a=0;a<Br.length;a++){var l=Br[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Br.length&&(a=Br[0],a.blockedOn===null);)B_(a),a.blockedOn===null&&Br.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[St]||null;if(typeof d=="function")v||H_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[St]||null)T=v.formAction;else if(qd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),H_(a)}}}function Fd(t){this._internalRoot=t}Uc.prototype.render=Fd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();k_(a,l,t,i,null,null)},Uc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&Ga(),k_(t.current,2,null,t,null,null),vc(),i[Si]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var i=wu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Br.length&&i!==0&&i<Br[a].priority;a++);Br.splice(a,0,t),a===0&&B_(t)}};var F_=e.version;if(F_!=="19.0.0")throw Error(s(527,F_,"19.0.0"));re.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=J(i),t=t!==null?he(t):null,t=t===null?null:t.stateNode,t};var Vw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:zn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{lr=Lc.inject(Vw),Ft=Lc}catch{}}return Pl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=oy,d=ly,v=uy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=P_(t,1,!1,null,null,a,l,h,d,v,T,null),t[Si]=i.current,Id(t.nodeType===8?t.parentNode:t),new Fd(i)},Pl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=oy,v=ly,T=uy,b=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),i=P_(t,1,!0,i,a??null,l,h,d,v,T,b,M),i.context=x_(null),a=i.current,l=pn(),h=Or(l),h.callback=null,Nr(a,h,l),i.current.lanes=l,lt(i,l),fi(i),t[Si]=i.current,Id(t),new Uc(i)},Pl.version="19.0.0",Pl}var ev;function Fw(){if(ev)return Qd.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qd.exports=Hw(),Qd.exports}var Gw=Fw();const Kw=YE(Gw);XE();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Yl.apply(this,arguments)}var Yr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Yr||(Yr={}));const tv="popstate";function Qw(r){r===void 0&&(r={});function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return fm("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:nh(o)}return $w(e,n,null,r)}function ht(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function WE(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yw(){return Math.random().toString(36).substr(2,8)}function nv(r,e){return{usr:r.state,key:r.key,idx:e}}function fm(r,e,n,s){return n===void 0&&(n=null),Yl({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||s||Yw()})}function nh(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function yo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function $w(r,e,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m=Yr.Pop,p=null,y=E();y==null&&(y=0,f.replaceState(Yl({},f.state,{idx:y}),""));function E(){return(f.state||{idx:null}).idx}function S(){m=Yr.Pop;let K=E(),te=K==null?null:K-y;y=K,p&&p({action:m,location:Z.location,delta:te})}function D(K,te){m=Yr.Push;let ae=fm(Z.location,K,te);y=E()+1;let ue=nv(ae,y),be=Z.createHref(ae);try{f.pushState(ue,"",be)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;o.location.assign(be)}u&&p&&p({action:m,location:Z.location,delta:1})}function j(K,te){m=Yr.Replace;let ae=fm(Z.location,K,te);y=E();let ue=nv(ae,y),be=Z.createHref(ae);f.replaceState(ue,"",be),u&&p&&p({action:m,location:Z.location,delta:0})}function F(K){let te=o.location.origin!=="null"?o.location.origin:o.location.href,ae=typeof K=="string"?K:nh(K);return ae=ae.replace(/ $/,"%20"),ht(te,"No window.location.(origin|href) available to create URL for href: "+ae),new URL(ae,te)}let Z={get action(){return m},get location(){return r(o,f)},listen(K){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(tv,S),p=K,()=>{o.removeEventListener(tv,S),p=null}},createHref(K){return e(o,K)},createURL:F,encodeLocation(K){let te=F(K);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:D,replace:j,go(K){return f.go(K)}};return Z}var iv;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(iv||(iv={}));function Xw(r,e,n){return n===void 0&&(n="/"),Ww(r,e,n)}function Ww(r,e,n,s){let o=typeof e=="string"?yo(e):e,u=Hm(o.pathname||"/",n);if(u==null)return null;let f=ZE(r);Zw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=cb(u);m=ob(f[p],y)}return m}function ZE(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(ht(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let y=Xr([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(ht(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),ZE(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:sb(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of JE(u.path))o(u,f,p)}),e}function JE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=JE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Zw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:ab(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Jw=/^:[\w-]+$/,eb=3,tb=2,nb=1,ib=10,rb=-2,rv=r=>r==="*";function sb(r,e){let n=r.split("/"),s=n.length;return n.some(rv)&&(s+=rb),e&&(s+=tb),n.filter(o=>!rv(o)).reduce((o,u)=>o+(Jw.test(u)?eb:u===""?nb:ib),s)}function ab(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ob(r,e,n){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=lb({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:Xr([u,S.pathname]),pathnameBase:mb(Xr([u,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(u=Xr([u,S.pathnameBase]))}return f}function lb(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=ub(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,E,S)=>{let{paramName:D,isOptional:j}=E;if(D==="*"){let Z=m[S]||"";f=u.slice(0,u.length-Z.length).replace(/(.)\/+$/,"$1")}const F=m[S];return j&&!F?y[D]=void 0:y[D]=(F||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function ub(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),WE(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function cb(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return WE(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Hm(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function hb(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?yo(r):r;return{pathname:n?n.startsWith("/")?n:fb(n,e):e,search:pb(s),hash:gb(o)}}function fb(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wd(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function db(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fm(r,e){let n=db(r);return e?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function Gm(r,e,n,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=yo(r):(o=Yl({},r),ht(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let S=e.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),S-=1;o.pathname=D.join("/")}m=S>=0?e[S]:"/"}let p=hb(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}const Xr=r=>r.join("/").replace(/\/\/+/g,"/"),mb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),pb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function yb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const eT=["post","put","patch","delete"];new Set(eT);const _b=["get",...eT];new Set(_b);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},$l.apply(this,arguments)}const Km=Y.createContext(null),vb=Y.createContext(null),ls=Y.createContext(null),Sh=Y.createContext(null),rr=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),tT=Y.createContext(null);function Eb(r,e){let{relative:n}=e===void 0?{}:e;_o()||ht(!1);let{basename:s,navigator:o}=Y.useContext(ls),{hash:u,pathname:f,search:m}=iT(r,{relative:n}),p=f;return s!=="/"&&(p=f==="/"?s:Xr([s,f])),o.createHref({pathname:p,search:m,hash:u})}function _o(){return Y.useContext(Sh)!=null}function vo(){return _o()||ht(!1),Y.useContext(Sh).location}function nT(r){Y.useContext(ls).static||Y.useLayoutEffect(r)}function $n(){let{isDataRoute:r}=Y.useContext(rr);return r?xb():Tb()}function Tb(){_o()||ht(!1);let r=Y.useContext(Km),{basename:e,future:n,navigator:s}=Y.useContext(ls),{matches:o}=Y.useContext(rr),{pathname:u}=vo(),f=JSON.stringify(Fm(o,n.v7_relativeSplatPath)),m=Y.useRef(!1);return nT(()=>{m.current=!0}),Y.useCallback(function(y,E){if(E===void 0&&(E={}),!m.current)return;if(typeof y=="number"){s.go(y);return}let S=Gm(y,JSON.parse(f),u,E.relative==="path");r==null&&e!=="/"&&(S.pathname=S.pathname==="/"?e:Xr([e,S.pathname])),(E.replace?s.replace:s.push)(S,E.state,E)},[e,s,f,u,r])}const Ab=Y.createContext(null);function Sb(r){let e=Y.useContext(rr).outlet;return e&&Y.createElement(Ab.Provider,{value:r},e)}function iT(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=Y.useContext(ls),{matches:o}=Y.useContext(rr),{pathname:u}=vo(),f=JSON.stringify(Fm(o,s.v7_relativeSplatPath));return Y.useMemo(()=>Gm(r,JSON.parse(f),u,n==="path"),[r,f,u,n])}function wb(r,e){return bb(r,e)}function bb(r,e,n,s){_o()||ht(!1);let{navigator:o,static:u}=Y.useContext(ls),{matches:f}=Y.useContext(rr),m=f[f.length-1],p=m?m.params:{};m&&m.pathname;let y=m?m.pathnameBase:"/";m&&m.route;let E=vo(),S;if(e){var D;let te=typeof e=="string"?yo(e):e;y==="/"||(D=te.pathname)!=null&&D.startsWith(y)||ht(!1),S=te}else S=E;let j=S.pathname||"/",F=j;if(y!=="/"){let te=y.replace(/^\//,"").split("/");F="/"+j.replace(/^\//,"").split("/").slice(te.length).join("/")}let Z=Xw(r,{pathname:F}),K=Ob(Z&&Z.map(te=>Object.assign({},te,{params:Object.assign({},p,te.params),pathname:Xr([y,o.encodeLocation?o.encodeLocation(te.pathname).pathname:te.pathname]),pathnameBase:te.pathnameBase==="/"?y:Xr([y,o.encodeLocation?o.encodeLocation(te.pathnameBase).pathname:te.pathnameBase])})),f,n,s);return e&&K?Y.createElement(Sh.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},S),navigationType:Yr.Pop}},K):K}function Rb(){let r=Pb(),e=yb(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),n?Y.createElement("pre",{style:o},n):null,null)}const Ib=Y.createElement(Rb,null);class Cb extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Y.createElement(rr.Provider,{value:this.props.routeContext},Y.createElement(tT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Db(r){let{routeContext:e,match:n,children:s}=r,o=Y.useContext(Km);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),Y.createElement(rr.Provider,{value:e},s)}function Ob(r,e,n,s){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var u;if(!n)return null;if(n.errors)r=n.matches;else if((u=s)!=null&&u.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let f=r,m=(o=n)==null?void 0:o.errors;if(m!=null){let E=f.findIndex(S=>S.route.id&&(m==null?void 0:m[S.route.id])!==void 0);E>=0||ht(!1),f=f.slice(0,Math.min(f.length,E+1))}let p=!1,y=-1;if(n&&s&&s.v7_partialHydration)for(let E=0;E<f.length;E++){let S=f[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=E),S.route.id){let{loaderData:D,errors:j}=n,F=S.route.loader&&D[S.route.id]===void 0&&(!j||j[S.route.id]===void 0);if(S.route.lazy||F){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((E,S,D)=>{let j,F=!1,Z=null,K=null;n&&(j=m&&S.route.id?m[S.route.id]:void 0,Z=S.route.errorElement||Ib,p&&(y<0&&D===0?(kb("route-fallback"),F=!0,K=null):y===D&&(F=!0,K=S.route.hydrateFallbackElement||null)));let te=e.concat(f.slice(0,D+1)),ae=()=>{let ue;return j?ue=Z:F?ue=K:S.route.Component?ue=Y.createElement(S.route.Component,null):S.route.element?ue=S.route.element:ue=E,Y.createElement(Db,{match:S,routeContext:{outlet:E,matches:te,isDataRoute:n!=null},children:ue})};return n&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?Y.createElement(Cb,{location:n.location,revalidation:n.revalidation,component:Z,error:j,children:ae(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ae()},null)}var rT=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(rT||{}),sT=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(sT||{});function Nb(r){let e=Y.useContext(Km);return e||ht(!1),e}function Mb(r){let e=Y.useContext(vb);return e||ht(!1),e}function Vb(r){let e=Y.useContext(rr);return e||ht(!1),e}function aT(r){let e=Vb(),n=e.matches[e.matches.length-1];return n.route.id||ht(!1),n.route.id}function Pb(){var r;let e=Y.useContext(tT),n=Mb(),s=aT();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function xb(){let{router:r}=Nb(rT.UseNavigateStable),e=aT(sT.UseNavigateStable),n=Y.useRef(!1);return nT(()=>{n.current=!0}),Y.useCallback(function(o,u){u===void 0&&(u={}),n.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,$l({fromRouteId:e},u)))},[r,e])}const sv={};function kb(r,e,n){sv[r]||(sv[r]=!0)}function Ub(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function av(r){let{to:e,replace:n,state:s,relative:o}=r;_o()||ht(!1);let{future:u,static:f}=Y.useContext(ls),{matches:m}=Y.useContext(rr),{pathname:p}=vo(),y=$n(),E=Gm(e,Fm(m,u.v7_relativeSplatPath),p,o==="path"),S=JSON.stringify(E);return Y.useEffect(()=>y(JSON.parse(S),{replace:n,state:s,relative:o}),[y,S,o,n,s]),null}function dm(r){return Sb(r.context)}function gn(r){ht(!1)}function Lb(r){let{basename:e="/",children:n=null,location:s,navigationType:o=Yr.Pop,navigator:u,static:f=!1,future:m}=r;_o()&&ht(!1);let p=e.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:u,static:f,future:$l({v7_relativeSplatPath:!1},m)}),[p,m,u,f]);typeof s=="string"&&(s=yo(s));let{pathname:E="/",search:S="",hash:D="",state:j=null,key:F="default"}=s,Z=Y.useMemo(()=>{let K=Hm(E,p);return K==null?null:{location:{pathname:K,search:S,hash:D,state:j,key:F},navigationType:o}},[p,E,S,D,j,F,o]);return Z==null?null:Y.createElement(ls.Provider,{value:y},Y.createElement(Sh.Provider,{children:n,value:Z}))}function jb(r){let{children:e,location:n}=r;return wb(mm(e),n)}new Promise(()=>{});function mm(r,e){e===void 0&&(e=[]);let n=[];return Y.Children.forEach(r,(s,o)=>{if(!Y.isValidElement(s))return;let u=[...e,o];if(s.type===Y.Fragment){n.push.apply(n,mm(s.props.children,u));return}s.type!==gn&&ht(!1),!s.props.index||!s.props.children||ht(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=mm(s.props.children,u)),n.push(f)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pm(){return pm=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},pm.apply(this,arguments)}function zb(r,e){if(r==null)return{};var n={},s=Object.keys(r),o,u;for(u=0;u<s.length;u++)o=s[u],!(e.indexOf(o)>=0)&&(n[o]=r[o]);return n}function Bb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function qb(r,e){return r.button===0&&(!e||e==="_self")&&!Bb(r)}const Hb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fb="6";try{window.__reactRouterVersion=Fb}catch{}const Gb="startTransition",ov=jw[Gb];function Kb(r){let{basename:e,children:n,future:s,window:o}=r,u=Y.useRef();u.current==null&&(u.current=Qw({window:o,v5Compat:!0}));let f=u.current,[m,p]=Y.useState({action:f.action,location:f.location}),{v7_startTransition:y}=s||{},E=Y.useCallback(S=>{y&&ov?ov(()=>p(S)):p(S)},[p,y]);return Y.useLayoutEffect(()=>f.listen(E),[f,E]),Y.useEffect(()=>Ub(s),[s]),Y.createElement(Lb,{basename:e,children:n,location:m.location,navigationType:m.action,navigator:f,future:s})}const Qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xl=Y.forwardRef(function(e,n){let{onClick:s,relative:o,reloadDocument:u,replace:f,state:m,target:p,to:y,preventScrollReset:E,viewTransition:S}=e,D=zb(e,Hb),{basename:j}=Y.useContext(ls),F,Z=!1;if(typeof y=="string"&&Yb.test(y)&&(F=y,Qb))try{let ue=new URL(window.location.href),be=y.startsWith("//")?new URL(ue.protocol+y):new URL(y),pe=Hm(be.pathname,j);be.origin===ue.origin&&pe!=null?y=pe+be.search+be.hash:Z=!0}catch{}let K=Eb(y,{relative:o}),te=$b(y,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:S});function ae(ue){s&&s(ue),ue.defaultPrevented||te(ue)}return Y.createElement("a",pm({},D,{href:F||K,onClick:Z||u?s:ae,ref:n,target:p}))});var lv;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(lv||(lv={}));var uv;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(uv||(uv={}));function $b(r,e){let{target:n,replace:s,state:o,preventScrollReset:u,relative:f,viewTransition:m}=e===void 0?{}:e,p=$n(),y=vo(),E=iT(r,{relative:f});return Y.useCallback(S=>{if(qb(S,n)){S.preventDefault();let D=s!==void 0?s:nh(y)===nh(E);p(r,{replace:D,state:o,preventScrollReset:u,relative:f,viewTransition:m})}},[y,p,E,s,o,n,r,u,f,m])}const Xb=()=>{};var cv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Wb=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},lT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,j=y&63;p||(j=64,f||(D=64)),s.push(n[E],n[S],n[D],n[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(oT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Wb(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new Zb;const D=u<<2|m>>4;if(s.push(D),y!==64){const j=m<<4&240|y>>2;if(s.push(j),S!==64){const F=y<<6&192|S;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Zb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jb=function(r){const e=oT(r);return lT.encodeByteArray(e,!0)},ih=function(r){return Jb(r).replace(/\./g,"")},uT=function(r){try{return lT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof cv>"u")return;const r=cv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},iR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&uT(r[1]);return e&&JSON.parse(e)},wh=()=>{try{return Xb()||tR()||nR()||iR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},cT=r=>{var e,n;return(n=(e=wh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},rR=r=>{const e=cT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hT=()=>{var r;return(r=wh())===null||r===void 0?void 0:r.config},fT=r=>{var e;return(e=wh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ih(JSON.stringify(n)),ih(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function lR(){var r;const e=(r=wh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function cR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hR(){const r=Xt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function fR(){return!lR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mT(){try{return typeof indexedDB=="object"}catch{return!1}}function pT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function dR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mR,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?pR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Xn(o,m,s)}}function pR(r,e){return r.replace(gR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const gR=/\{\$([^}]+)}/g;function yR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ts(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(hv(u)&&hv(f)){if(!ts(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function hv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function kl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function _R(r,e){const n=new vR(r,e);return n.subscribe.bind(n)}class vR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ER(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Zd),o.error===void 0&&(o.error=Zd),o.complete===void 0&&(o.complete=Zd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ER(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Zd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=1e3,AR=2,SR=4*60*60*1e3,wR=.5;function fv(r,e=TR,n=AR){const s=e*Math.pow(n,r),o=Math.round(wR*s*(Math.random()-.5)*2);return Math.min(SR,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hs){return this.instances.has(e)}getOptions(e=Hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hs){return this.component?this.component.multipleInstances?e:Hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RR(r){return r===Hs?void 0:r}function IR(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const DR={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},OR=Ne.INFO,NR={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},MR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=NR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bh{constructor(e){this.name=e,this._logLevel=OR,this._logHandler=MR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const VR=(r,e)=>e.some(n=>r instanceof n);let dv,mv;function PR(){return dv||(dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xR(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,gm=new WeakMap,yT=new WeakMap,Jd=new WeakMap,Qm=new WeakMap;function kR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Wr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&gT.set(n,r)}).catch(()=>{}),Qm.set(e,r),e}function UR(r){if(gm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});gm.set(r,e)}let ym={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return gm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||yT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function LR(r){ym=r(ym)}function jR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(em(this),e,...n);return yT.set(s,e.sort?e.sort():[e]),Wr(s)}:xR().includes(r)?function(...e){return r.apply(em(this),e),Wr(gT.get(this))}:function(...e){return Wr(r.apply(em(this),e))}}function zR(r){return typeof r=="function"?jR(r):(r instanceof IDBTransaction&&UR(r),VR(r,PR())?new Proxy(r,ym):r)}function Wr(r){if(r instanceof IDBRequest)return kR(r);if(Jd.has(r))return Jd.get(r);const e=zR(r);return e!==r&&(Jd.set(r,e),Qm.set(e,r)),e}const em=r=>Qm.get(r);function _T(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Wr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Wr(f.result),p.oldVersion,p.newVersion,Wr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const BR=["get","getKey","getAll","getAllKeys","count"],qR=["put","add","delete","clear"],tm=new Map;function pv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(tm.get(e))return tm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=qR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||BR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return tm.set(e,u),u}LR(r=>({...r,get:(e,n,s)=>pv(e,n)||r.get(e,n,s),has:(e,n)=>!!pv(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FR(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _m="@firebase/app",gv="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new bh("@firebase/app"),GR="@firebase/app-compat",KR="@firebase/analytics-compat",QR="@firebase/analytics",YR="@firebase/app-check-compat",$R="@firebase/app-check",XR="@firebase/auth",WR="@firebase/auth-compat",ZR="@firebase/database",JR="@firebase/data-connect",eI="@firebase/database-compat",tI="@firebase/functions",nI="@firebase/functions-compat",iI="@firebase/installations",rI="@firebase/installations-compat",sI="@firebase/messaging",aI="@firebase/messaging-compat",oI="@firebase/performance",lI="@firebase/performance-compat",uI="@firebase/remote-config",cI="@firebase/remote-config-compat",hI="@firebase/storage",fI="@firebase/storage-compat",dI="@firebase/firestore",mI="@firebase/vertexai",pI="@firebase/firestore-compat",gI="firebase",yI="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="[DEFAULT]",_I={[_m]:"fire-core",[GR]:"fire-core-compat",[QR]:"fire-analytics",[KR]:"fire-analytics-compat",[$R]:"fire-app-check",[YR]:"fire-app-check-compat",[XR]:"fire-auth",[WR]:"fire-auth-compat",[ZR]:"fire-rtdb",[JR]:"fire-data-connect",[eI]:"fire-rtdb-compat",[tI]:"fire-fn",[nI]:"fire-fn-compat",[iI]:"fire-iid",[rI]:"fire-iid-compat",[sI]:"fire-fcm",[aI]:"fire-fcm-compat",[oI]:"fire-perf",[lI]:"fire-perf-compat",[uI]:"fire-rc",[cI]:"fire-rc-compat",[hI]:"fire-gcs",[fI]:"fire-gcs-compat",[dI]:"fire-fst",[pI]:"fire-fst-compat",[mI]:"fire-vertex","fire-js":"fire-js",[gI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map,vI=new Map,Em=new Map;function yv(r,e){try{r.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const e=r.name;if(Em.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;Em.set(e,r);for(const n of rh.values())yv(n,r);for(const n of vI.values())yv(n,r);return!0}function ta(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new ea("app","Firebase",EI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=yI;function vT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Zr.create("bad-app-name",{appName:String(o)});if(n||(n=hT()),!n)throw Zr.create("no-options");const u=rh.get(o);if(u){if(ts(n,u.options)&&ts(s,u.config))return u;throw Zr.create("duplicate-app",{appName:o})}const f=new CR(o);for(const p of Em.values())f.addComponent(p);const m=new TI(n,s,f);return rh.set(o,m),m}function Ym(r=vm){const e=rh.get(r);if(!e&&r===vm&&hT())return vT();if(!e)throw Zr.create("no-app",{appName:r});return e}function Ln(r,e,n){var s;let o=(s=_I[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(m.join(" "));return}_i(new Kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="firebase-heartbeat-database",SI=1,Wl="firebase-heartbeat-store";let nm=null;function ET(){return nm||(nm=_T(AI,SI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zr.create("idb-open",{originalErrorMessage:r.message})})),nm}async function wI(r){try{const n=(await ET()).transaction(Wl),s=await n.objectStore(Wl).get(TT(r));return await n.done,s}catch(e){if(e instanceof Xn)Ji.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function _v(r,e){try{const s=(await ET()).transaction(Wl,"readwrite");await s.objectStore(Wl).put(e,TT(r)),await s.done}catch(n){if(n instanceof Xn)Ji.warn(n.message);else{const s=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(s.message)}}}function TT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=1024,RI=30;class II{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=vv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>RI){const f=OI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ji.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vv(),{heartbeatsToSend:s,unsentEntries:o}=CI(this._heartbeatsCache.heartbeats),u=ih(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ji.warn(n),""}}}function vv(){return new Date().toISOString().substring(0,10)}function CI(r,e=bI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Ev(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ev(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mT()?pT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ev(r){return ih(JSON.stringify({version:2,heartbeats:r})).length}function OI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(r){_i(new Kn("platform-logger",e=>new HR(e),"PRIVATE")),_i(new Kn("heartbeat",e=>new II(e),"PRIVATE")),Ln(_m,gv,r),Ln(_m,gv,"esm2017"),Ln("fire-js","")}NI("");var MI="firebase",VI="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(MI,VI,"app");const AT="@firebase/installations",$m="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=1e4,wT=`w:${$m}`,bT="FIS_v2",PI="https://firebaseinstallations.googleapis.com/v1",xI=60*60*1e3,kI="installations",UI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qs=new ea(kI,UI,LI);function RT(r){return r instanceof Xn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT({projectId:r}){return`${PI}/projects/${r}/installations`}function CT(r){return{token:r.token,requestStatus:2,expiresIn:zI(r.expiresIn),creationTime:Date.now()}}async function DT(r,e){const s=(await e.json()).error;return Qs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function OT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function jI(r,{refreshToken:e}){const n=OT(r);return n.append("Authorization",BI(e)),n}async function NT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function zI(r){return Number(r.replace("s","000"))}function BI(r){return`${bT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=IT(r),o=OT(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:bT,appId:r.appId,sdkVersion:wT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await NT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:CT(y.authToken)}}else throw await DT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/^[cdef][\w-]{21}$/,Tm="";function GI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=KI(r);return FI.test(n)?n:Tm}catch{return Tm}}function KI(r){return HI(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Map;function PT(r,e){const n=Rh(r);xT(n,e),QI(n,e)}function xT(r,e){const n=VT.get(r);if(n)for(const s of n)s(e)}function QI(r,e){const n=YI();n&&n.postMessage({key:r,fid:e}),$I()}let Fs=null;function YI(){return!Fs&&"BroadcastChannel"in self&&(Fs=new BroadcastChannel("[Firebase] FID Change"),Fs.onmessage=r=>{xT(r.data.key,r.data.fid)}),Fs}function $I(){VT.size===0&&Fs&&(Fs.close(),Fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebase-installations-database",WI=1,Ys="firebase-installations-store";let im=null;function Xm(){return im||(im=_T(XI,WI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ys)}}})),im}async function sh(r,e){const n=Rh(r),o=(await Xm()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&PT(r,e.fid),e}async function kT(r){const e=Rh(r),s=(await Xm()).transaction(Ys,"readwrite");await s.objectStore(Ys).delete(e),await s.done}async function Ih(r,e){const n=Rh(r),o=(await Xm()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&PT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(r){let e;const n=await Ih(r.appConfig,s=>{const o=ZI(s),u=JI(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Tm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZI(r){const e=r||{fid:GI(),registrationStatus:0};return UT(e)}function JI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Qs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=eC(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tC(r)}:{installationEntry:e}}async function eC(r,e){try{const n=await qI(r,e);return sh(r.appConfig,n)}catch(n){throw RT(n)&&n.customData.serverCode===409?await kT(r.appConfig):await sh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tC(r){let e=await Tv(r.appConfig);for(;e.registrationStatus===1;)await MT(100),e=await Tv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wm(r);return s||n}return e}function Tv(r){return Ih(r,e=>{if(!e)throw Qs.create("installation-not-found");return UT(e)})}function UT(r){return nC(r)?{fid:r.fid,registrationStatus:0}:r}function nC(r){return r.registrationStatus===1&&r.registrationTime+ST<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC({appConfig:r,heartbeatServiceProvider:e},n){const s=rC(r,n),o=jI(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:wT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await NT(()=>fetch(s,m));if(p.ok){const y=await p.json();return CT(y)}else throw await DT("Generate Auth Token",p)}function rC(r,{fid:e}){return`${IT(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(r,e=!1){let n;const s=await Ih(r.appConfig,u=>{if(!LT(u))throw Qs.create("not-registered");const f=u.authToken;if(!e&&oC(f))return u;if(f.requestStatus===1)return n=sC(r,e),u;{if(!navigator.onLine)throw Qs.create("app-offline");const m=uC(u);return n=aC(r,m),m}});return n?await n:s.authToken}async function sC(r,e){let n=await Av(r.appConfig);for(;n.authToken.requestStatus===1;)await MT(100),n=await Av(r.appConfig);const s=n.authToken;return s.requestStatus===0?Zm(r,e):s}function Av(r){return Ih(r,e=>{if(!LT(e))throw Qs.create("not-registered");const n=e.authToken;return cC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aC(r,e){try{const n=await iC(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await sh(r.appConfig,s),n}catch(n){if(RT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kT(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sh(r.appConfig,s)}throw n}}function LT(r){return r!==void 0&&r.registrationStatus===2}function oC(r){return r.requestStatus===2&&!lC(r)}function lC(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+xI}function uC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function cC(r){return r.requestStatus===1&&r.requestTime+ST<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(r){const e=r,{installationEntry:n,registrationPromise:s}=await Wm(e);return s?s.catch(console.error):Zm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(r,e=!1){const n=r;return await dC(n),(await Zm(n,e)).token}async function dC(r){const{registrationPromise:e}=await Wm(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(r){if(!r||!r.options)throw rm("App Configuration");if(!r.name)throw rm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw rm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function rm(r){return Qs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="installations",pC="installations-internal",gC=r=>{const e=r.getProvider("app").getImmediate(),n=mC(e),s=ta(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},yC=r=>{const e=r.getProvider("app").getImmediate(),n=ta(e,jT).getImmediate();return{getId:()=>hC(n),getToken:o=>fC(n,o)}};function _C(){_i(new Kn(jT,gC,"PUBLIC")),_i(new Kn(pC,yC,"PRIVATE"))}_C();Ln(AT,$m);Ln(AT,$m,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="analytics",vC="firebase_id",EC="origin",TC=60*1e3,AC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new bh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new ea("analytics","Analytics",SC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(r){if(!r.startsWith(Jm)){const e=yn.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(e.message),""}return r}function zT(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function bC(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function RC(r,e){const n=bC("firebase-js-sdk-policy",{createScriptURL:wC}),s=document.createElement("script"),o=`${Jm}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function IC(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function CC(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await zT(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){ln.error(m)}r("config",o,u)}async function DC(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await zT(n);for(const p of f){const y=m.find(S=>S.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){ln.error(u)}}function OC(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await DC(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await CC(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){ln.error(m)}}return o}function NC(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=OC(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function MC(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Jm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=30,PC=1e3;class xC{constructor(e={},n=PC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const BT=new xC;function kC(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function UC(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:kC(s)},u=AC.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function LC(r,e=BT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new BC;return setTimeout(async()=>{m.abort()},TC),qT({appId:s,apiKey:o,measurementId:u},f,m,e)}async function qT(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=BT){var u;const{appId:f,measurementId:m}=r;try{await jC(s,e)}catch(p){if(m)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await UC(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!zC(y)){if(o.deleteThrottleMetadata(f),m)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?fv(n,o.intervalMillis,VC):fv(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,S),ln.debug(`Calling attemptFetch again in ${E} millis`),qT(r,S,s,o)}}function jC(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zC(r){if(!(r instanceof Xn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class BC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qC(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(){if(mT())try{await pT()}catch(r){return ln.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ln.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FC(r,e,n,s,o,u,f){var m;const p=LC(r);p.then(j=>{n[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>ln.error(j)),e.push(p);const y=HC().then(j=>{if(j)return s.getId()}),[E,S]=await Promise.all([p,y]);MC(u)||RC(u,E.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[EC]="firebase",D.update=!0,S!=null&&(D[vC]=S),o("config",E.measurementId,D),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.app=e}_delete(){return delete Bl[this.app.options.appId],Promise.resolve()}}let Bl={},Sv=[];const wv={};let sm="dataLayer",KC="gtag",bv,HT,Rv=!1;function QC(){const r=[];if(dT()&&r.push("This is a browser extension environment."),dR()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:e});ln.warn(n.message)}}function YC(r,e,n){QC();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(Bl[s]!=null)throw yn.create("already-exists",{id:s});if(!Rv){IC(sm);const{wrappedGtag:u,gtagCore:f}=NC(Bl,Sv,wv,sm,KC);HT=u,bv=f,Rv=!0}return Bl[s]=FC(r,Sv,wv,e,bv,sm,n),new GC(r)}function $C(r=Ym()){r=Et(r);const e=ta(r,ah);return e.isInitialized()?e.getImmediate():XC(r)}function XC(r,e={}){const n=ta(r,ah);if(n.isInitialized()){const o=n.getImmediate();if(ts(e,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:e})}function WC(r,e,n,s){r=Et(r),qC(HT,Bl[r.app.options.appId],e,n,s).catch(o=>ln.error(o))}const Iv="@firebase/analytics",Cv="0.10.12";function ZC(){_i(new Kn(ah,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return YC(s,o,n)},"PUBLIC")),_i(new Kn("analytics-internal",r,"PRIVATE")),Ln(Iv,Cv),Ln(Iv,Cv,"esm2017");function r(e){try{const n=e.getProvider(ah).getImmediate();return{logEvent:(s,o,u)=>WC(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}ZC();function ep(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function FT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC=FT,GT=new ea("auth","Firebase",FT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new bh("@firebase/auth");function e1(r,...e){oh.logLevel<=Ne.WARN&&oh.warn(`Auth (${Eo}): ${r}`,...e)}function Kc(r,...e){oh.logLevel<=Ne.ERROR&&oh.error(`Auth (${Eo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(r,...e){throw tp(r,...e)}function mi(r,...e){return tp(r,...e)}function KT(r,e,n){const s=Object.assign(Object.assign({},JC()),{[e]:n});return new ea("auth","Firebase",s).create(e,{appName:r.name})}function Wi(r){return KT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return GT.create(r,...e)}function ye(r,e,...n){if(!r)throw tp(e,...n)}function Yi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Kc(e),new Error(e)}function er(r,e){r||Yi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function t1(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t1()||dT()||"connection"in navigator)?navigator.onLine:!0}function i1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=oR()||cR()}get(){return n1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(r,e){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new lu(3e4,6e4);function us(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function sr(r,e,n,s,o={}){return YT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=ou(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},u);return uR()||(y.referrerPolicy="no-referrer"),QT.fetch()($T(r,r.config.apiHost,n,m),y)})}async function YT(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},r1),e);try{const o=new o1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw jc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw jc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw jc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw KT(r,E,y);Qn(r,E)}}catch(o){if(o instanceof Xn)throw o;Qn(r,"network-request-failed",{message:String(o)})}}async function uu(r,e,n,s,o={}){const u=await sr(r,e,n,s,o);return"mfaPendingCredential"in u&&Qn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function $T(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?np(r.config,o):`${r.config.apiScheme}://${o}`}function a1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),s1.get())})}}function jc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=mi(r,e,s);return o.customData._tokenResponse=n,o}function Ov(r){return r!==void 0&&r.enterprise!==void 0}class l1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return a1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function u1(r,e){return sr(r,"GET","/v2/recaptchaConfig",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(r,e){return sr(r,"POST","/v1/accounts:delete",e)}async function XT(r,e){return sr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h1(r,e=!1){const n=Et(r),s=await n.getIdToken(e),o=ip(s);ye(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ql(am(o.auth_time)),issuedAtTime:ql(am(o.iat)),expirationTime:ql(am(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function am(r){return Number(r)*1e3}function ip(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=uT(n);return o?JSON.parse(o):(Kc("Failed to decode base64 JWT payload"),null)}catch(o){return Kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Nv(r){const e=ip(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&f1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function f1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ql(this.lastLoginAt),this.creationTime=ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(r){var e;const n=r.auth,s=await r.getIdToken(),o=await lo(r,XT(n,{idToken:s}));ye(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?WT(u.providerUserInfo):[],m=p1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Sm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function m1(r){const e=Et(r);await lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p1(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function WT(r){return r.map(e=>{var{providerId:n}=e,s=ep(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(r,e){const n=await YT(r,{},async()=>{const s=ou({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=$T(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",QT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function y1(r,e){return sr(r,"POST","/v2/accounts:revokeToken",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await g1(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new io;return s&&(ye(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $i{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Sm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h1(this,e)}reload(){return m1(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await lo(this,c1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,y,E;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,j=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,F=(f=n.photoURL)!==null&&f!==void 0?f:void 0,Z=(m=n.tenantId)!==null&&m!==void 0?m:void 0,K=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,te=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ae=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ue,emailVerified:be,isAnonymous:pe,providerData:Oe,stsTokenManager:P}=n;ye(ue&&P,e,"internal-error");const R=io.fromJSON(this.name,P);ye(typeof ue=="string",e,"internal-error"),Hr(S,e.name),Hr(D,e.name),ye(typeof be=="boolean",e,"internal-error"),ye(typeof pe=="boolean",e,"internal-error"),Hr(j,e.name),Hr(F,e.name),Hr(Z,e.name),Hr(K,e.name),Hr(te,e.name),Hr(ae,e.name);const w=new $i({uid:ue,auth:e,email:D,emailVerified:be,displayName:S,isAnonymous:pe,photoURL:F,phoneNumber:j,tenantId:Z,stsTokenManager:R,createdAt:te,lastLoginAt:ae});return Oe&&Array.isArray(Oe)&&(w.providerData=Oe.map(C=>Object.assign({},C))),K&&(w._redirectEventId=K),w}static async _fromIdTokenResponse(e,n,s=!1){const o=new io;o.updateFromServerResponse(n);const u=new $i({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await lh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?WT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new io;m.updateFromIdToken(s);const p=new $i({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Sm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function Xi(r){er(r instanceof Function,"Expected a class definition");let e=Mv.get(r);return e?(er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Mv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZT.type="NONE";const Vv=ZT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(r,e,n){return`firebase:${r}:${e}:${n}`}class ro{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Qc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Qc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ro(Xi(Vv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Xi(Vv);const f=Qc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){const S=$i._fromJSON(e,E);y!==u&&(m=S),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ro(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new ro(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r0(e))return"Blackberry";if(s0(e))return"Webos";if(e0(e))return"Safari";if((e.includes("chrome/")||t0(e))&&!e.includes("edge/"))return"Chrome";if(i0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function JT(r=Xt()){return/firefox\//i.test(r)}function e0(r=Xt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t0(r=Xt()){return/crios\//i.test(r)}function n0(r=Xt()){return/iemobile/i.test(r)}function i0(r=Xt()){return/android/i.test(r)}function r0(r=Xt()){return/blackberry/i.test(r)}function s0(r=Xt()){return/webos/i.test(r)}function rp(r=Xt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _1(r=Xt()){var e;return rp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v1(){return hR()&&document.documentMode===10}function a0(r=Xt()){return rp(r)||i0(r)||s0(r)||r0(r)||/windows phone/i.test(r)||n0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(r,e=[]){let n;switch(r){case"Browser":n=Pv(Xt());break;case"Worker":n=`${Pv(Xt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(r,e={}){return sr(r,"GET","/v2/passwordPolicy",us(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=6;class S1{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:A1,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xv(this),this.idTokenSubscription=new xv(this),this.beforeStateQueue=new E1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xi(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await XT(this,{idToken:e}),s=await $i._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Wi(this));const n=e?Et(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await y1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xi(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Xi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&e1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function na(r){return Et(r)}class xv{constructor(e){this.auth=e,this.observer=null,this.addObserver=_R(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b1(r){Ch=r}function l0(r){return Ch.loadJS(r)}function R1(){return Ch.recaptchaEnterpriseScript}function I1(){return Ch.gapiScript}function C1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class D1{constructor(){this.enterprise=new O1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class O1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const N1="recaptcha-enterprise",u0="NO_RECAPTCHA";class M1{constructor(e){this.type=N1,this.auth=na(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{u1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new l1(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Ov(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(u0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new D1().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Ov(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=R1();p.length!==0&&(p+=m),l0(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function kv(r,e,n,s=!1,o=!1){const u=new M1(r);let f;if(o)f=u0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function wm(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await kv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await kv(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(r,e){const n=ta(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ts(u,e??{}))return o;Qn(o,"already-initialized")}return n.initialize({options:e})}function P1(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function x1(r,e,n){const s=na(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=c0(e),{host:f,port:m}=k1(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ts(y,s.config.emulator)&&ts(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,U1()}function c0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function k1(r){const e=c0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Uv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Uv(f)}}}function Uv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function U1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yi("not implemented")}_getIdTokenResponse(e){return Yi("not implemented")}_linkToIdToken(e,n){return Yi("not implemented")}_getReauthenticationResolver(e){return Yi("not implemented")}}async function L1(r,e){return sr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(r,e){return uu(r,"POST","/v1/accounts:signInWithPassword",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(r,e){return uu(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}async function B1(r,e){return uu(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends sp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Zl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Zl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(e,n,"signInWithPassword",j1);case"emailLink":return z1(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(e,s,"signUpPassword",L1);case"emailLink":return B1(e,{idToken:n,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(r,e){return uu(r,"POST","/v1/accounts:signInWithIdp",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="http://localhost";class $s extends sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=ep(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new $s(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return so(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,so(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,so(e,n)}buildRequest(){const e={requestUri:q1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ou(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F1(r){const e=xl(kl(r)).link,n=e?xl(kl(e)).deep_link_id:null,s=xl(kl(r)).deep_link_id;return(s?xl(kl(s)).link:null)||s||n||e||r}class ap{constructor(e){var n,s,o,u,f,m;const p=xl(kl(e)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,S=H1((o=p.mode)!==null&&o!==void 0?o:null);ye(y&&E&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=F1(e);try{return new ap(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return Zl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ap.parseLink(n);return ye(s,"argument-error"),Zl._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends h0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends cu{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gr.credential(n,s)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends cu{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends cu{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(r,e){return uu(r,"POST","/v1/accounts:signUp",us(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await $i._fromIdTokenResponse(e,s,o),f=Lv(s);return new Xs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Lv(s);return new Xs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Lv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Xn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new uh(e,n,s,o)}}function f0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(r,u,e,s):u})}async function K1(r,e,n=!1){const s=await lo(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Xs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(r,e,n=!1){const{auth:s}=r;if(kn(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const u=await lo(r,f0(s,o,e,r),n);ye(u.idToken,s,"internal-error");const f=ip(u.idToken);ye(f,s,"internal-error");const{sub:m}=f;return ye(r.uid===m,s,"user-mismatch"),Xs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(r,e,n=!1){if(kn(r.app))return Promise.reject(Wi(r));const s="signIn",o=await f0(r,s,e),u=await Xs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function Y1(r,e){return d0(na(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(r){const e=na(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $1(r,e,n){if(kn(r.app))return Promise.reject(Wi(r));const s=na(r),f=await wm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&m0(r),p}),m=await Xs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function X1(r,e,n){return kn(r.app)?Promise.reject(Wi(r)):Y1(Et(r),To.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&m0(r),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(r,e){return sr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(r,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Et(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await lo(s,W1(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function J1(r,e,n,s){return Et(r).onIdTokenChanged(e,n,s)}function eD(r,e,n){return Et(r).beforeAuthStateChanged(e,n)}function p0(r){return Et(r).signOut()}const ch="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=1e3,nD=10;class y0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);v1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nD):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const iD=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_0.type="SESSION";const v0=_0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Dh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await rD(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=op("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const D=S;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}function aD(r){pi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof pi().WorkerGlobalScope<"u"&&typeof pi().importScripts=="function"}async function oD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lD(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function uD(){return E0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="firebaseLocalStorageDb",cD=1,hh="firebaseLocalStorage",A0="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(r,e){return r.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function hD(){const r=indexedDB.deleteDatabase(T0);return new hu(r).toPromise()}function bm(){const r=indexedDB.open(T0,cD);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(hh,{keyPath:A0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(hh)?e(s):(s.close(),await hD(),e(await bm()))})})}async function jv(r,e,n){const s=Oh(r,!0).put({[A0]:e,value:n});return new hu(s).toPromise()}async function fD(r,e){const n=Oh(r,!1).get(e),s=await new hu(n).toPromise();return s===void 0?null:s.value}function zv(r,e){const n=Oh(r,!0).delete(e);return new hu(n).toPromise()}const dD=800,mD=3;class S0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dh._getInstance(uD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oD(),!this.activeServiceWorker)return;this.sender=new sD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bm();return await jv(e,ch,"1"),await zv(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Oh(o,!1).getAll();return new hu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S0.type="LOCAL";const pD=S0;new lu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(r,e){return e?Xi(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,n){return so(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yD(r){return d0(r.auth,new lp(r),r.bypassAuthState)}function _D(r){const{auth:e,user:n}=r;return ye(n,e,"internal-error"),Q1(n,new lp(r),r.bypassAuthState)}async function vD(r){const{auth:e,user:n}=r;return ye(n,e,"internal-error"),K1(n,new lp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yD;case"linkViaPopup":case"linkViaRedirect":return vD;case"reauthViaPopup":case"reauthViaRedirect":return _D;default:Qn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=new lu(2e3,1e4);class to extends w0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ED.get())};e()}}to.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="pendingRedirect",Yc=new Map;class AD extends w0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const s=await SD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SD(r,e){const n=RD(e),s=bD(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function wD(r,e){Yc.set(r._key(),e)}function bD(r){return Xi(r._redirectPersistence)}function RD(r){return Qc(TD,r.config.apiKey,r.name)}async function ID(r,e,n=!1){if(kn(r.app))return Promise.reject(Wi(r));const s=na(r),o=gD(s,e),f=await new AD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=10*60*1e3;class DD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!b0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function b0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(r,e={}){return sr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VD=/^https?/;async function PD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ND(r);for(const n of e)try{if(xD(n))return}catch{}Qn(r,"unauthorized-domain")}function xD(r){const e=Am(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!VD.test(n))return!1;if(MD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new lu(3e4,6e4);function qv(){const r=pi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function UD(r){return new Promise((e,n)=>{var s,o,u;function f(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),n(mi(r,"network-request-failed"))},timeout:kD.get()})}if(!((o=(s=pi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=pi().gapi)===null||u===void 0)&&u.load)f();else{const m=C1("iframefcb");return pi()[m]=()=>{gapi.load?f():n(mi(r,"network-request-failed"))},l0(`${I1()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw $c=null,e})}let $c=null;function LD(r){return $c=$c||UD(r),$c}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=new lu(5e3,15e3),zD="__/auth/iframe",BD="emulator/auth/iframe",qD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FD(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?np(e,BD):`https://${r.config.authDomain}/${zD}`,s={apiKey:e.apiKey,appName:r.name,v:Eo},o=HD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ou(s).slice(1)}`}async function GD(r){const e=await LD(r),n=pi().gapi;return ye(n,r,"internal-error"),e.open({where:document.body,url:FD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=mi(r,"network-request-failed"),m=pi().setTimeout(()=>{u(f)},jD.get());function p(){pi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QD=500,YD=600,$D="_blank",XD="http://localhost";class Hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WD(r,e,n,s=QD,o=YD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},KD),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Xt().toLowerCase();n&&(m=t0(y)?$D:n),JT(y)&&(e=e||XD,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[j,F])=>`${D}${j}=${F},`,"");if(_1(y)&&m!=="_self")return ZD(e||"",m),new Hv(null);const S=window.open(e||"",m,E);ye(S,r,"popup-blocked");try{S.focus()}catch{}return new Hv(S)}function ZD(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="__/auth/handler",eO="emulator/auth/handler",tO=encodeURIComponent("fac");async function Fv(r,e,n,s,o,u){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Eo,eventId:o};if(e instanceof h0){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",yR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(e instanceof cu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${tO}=${encodeURIComponent(p)}`:"";return`${nO(r)}?${ou(m).slice(1)}${y}`}function nO({config:r}){return r.emulator?np(r,eO):`https://${r.authDomain}/${JD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="webStorageSupport";class iO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=ID,this._overrideRedirectResult=wD}async _openPopup(e,n,s,o){var u;er((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Fv(e,n,s,Am(),o);return WD(e,f,op())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Fv(e,n,s,Am(),o);return aD(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(er(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GD(e),s=new DD(e);return n.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(om,{type:om},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[om];f!==void 0&&n(!!f),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a0()||e0()||rp()}}const rO=iO;var Gv="@firebase/auth",Kv="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oO(r){_i(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;ye(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o0(r)},y=new w1(s,o,u,p);return P1(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_i(new Kn("auth-internal",e=>{const n=na(e.getProvider("auth").getImmediate());return(s=>new sO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Gv,Kv,aO(r)),Ln(Gv,Kv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=5*60,uO=fT("authIdTokenMaxAge")||lO;let Qv=null;const cO=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uO)return;const o=n==null?void 0:n.token;Qv!==o&&(Qv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hO(r=Ym()){const e=ta(r,"auth");if(e.isInitialized())return e.getImmediate();const n=V1(r,{popupRedirectResolver:rO,persistence:[pD,iD,v0]}),s=fT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=cO(u.toString());eD(n,f,()=>f(n.currentUser)),J1(n,m=>f(m))}}const o=cT("auth");return o&&x1(n,`http://${o}`),n}function fO(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}b1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=mi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",fO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oO("Browser");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,R0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,R){function w(){}w.prototype=R.prototype,P.D=R.prototype,P.prototype=new w,P.prototype.constructor=P,P.C=function(C,V,U){for(var I=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)I[Tt-2]=arguments[Tt];return R.prototype[V].apply(C,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,R,w){w||(w=0);var C=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)C[V]=R.charCodeAt(w++)|R.charCodeAt(w++)<<8|R.charCodeAt(w++)<<16|R.charCodeAt(w++)<<24;else for(V=0;16>V;++V)C[V]=R[w++]|R[w++]<<8|R[w++]<<16|R[w++]<<24;R=P.g[0],w=P.g[1],V=P.g[2];var U=P.g[3],I=R+(U^w&(V^U))+C[0]+3614090360&4294967295;R=w+(I<<7&4294967295|I>>>25),I=U+(V^R&(w^V))+C[1]+3905402710&4294967295,U=R+(I<<12&4294967295|I>>>20),I=V+(w^U&(R^w))+C[2]+606105819&4294967295,V=U+(I<<17&4294967295|I>>>15),I=w+(R^V&(U^R))+C[3]+3250441966&4294967295,w=V+(I<<22&4294967295|I>>>10),I=R+(U^w&(V^U))+C[4]+4118548399&4294967295,R=w+(I<<7&4294967295|I>>>25),I=U+(V^R&(w^V))+C[5]+1200080426&4294967295,U=R+(I<<12&4294967295|I>>>20),I=V+(w^U&(R^w))+C[6]+2821735955&4294967295,V=U+(I<<17&4294967295|I>>>15),I=w+(R^V&(U^R))+C[7]+4249261313&4294967295,w=V+(I<<22&4294967295|I>>>10),I=R+(U^w&(V^U))+C[8]+1770035416&4294967295,R=w+(I<<7&4294967295|I>>>25),I=U+(V^R&(w^V))+C[9]+2336552879&4294967295,U=R+(I<<12&4294967295|I>>>20),I=V+(w^U&(R^w))+C[10]+4294925233&4294967295,V=U+(I<<17&4294967295|I>>>15),I=w+(R^V&(U^R))+C[11]+2304563134&4294967295,w=V+(I<<22&4294967295|I>>>10),I=R+(U^w&(V^U))+C[12]+1804603682&4294967295,R=w+(I<<7&4294967295|I>>>25),I=U+(V^R&(w^V))+C[13]+4254626195&4294967295,U=R+(I<<12&4294967295|I>>>20),I=V+(w^U&(R^w))+C[14]+2792965006&4294967295,V=U+(I<<17&4294967295|I>>>15),I=w+(R^V&(U^R))+C[15]+1236535329&4294967295,w=V+(I<<22&4294967295|I>>>10),I=R+(V^U&(w^V))+C[1]+4129170786&4294967295,R=w+(I<<5&4294967295|I>>>27),I=U+(w^V&(R^w))+C[6]+3225465664&4294967295,U=R+(I<<9&4294967295|I>>>23),I=V+(R^w&(U^R))+C[11]+643717713&4294967295,V=U+(I<<14&4294967295|I>>>18),I=w+(U^R&(V^U))+C[0]+3921069994&4294967295,w=V+(I<<20&4294967295|I>>>12),I=R+(V^U&(w^V))+C[5]+3593408605&4294967295,R=w+(I<<5&4294967295|I>>>27),I=U+(w^V&(R^w))+C[10]+38016083&4294967295,U=R+(I<<9&4294967295|I>>>23),I=V+(R^w&(U^R))+C[15]+3634488961&4294967295,V=U+(I<<14&4294967295|I>>>18),I=w+(U^R&(V^U))+C[4]+3889429448&4294967295,w=V+(I<<20&4294967295|I>>>12),I=R+(V^U&(w^V))+C[9]+568446438&4294967295,R=w+(I<<5&4294967295|I>>>27),I=U+(w^V&(R^w))+C[14]+3275163606&4294967295,U=R+(I<<9&4294967295|I>>>23),I=V+(R^w&(U^R))+C[3]+4107603335&4294967295,V=U+(I<<14&4294967295|I>>>18),I=w+(U^R&(V^U))+C[8]+1163531501&4294967295,w=V+(I<<20&4294967295|I>>>12),I=R+(V^U&(w^V))+C[13]+2850285829&4294967295,R=w+(I<<5&4294967295|I>>>27),I=U+(w^V&(R^w))+C[2]+4243563512&4294967295,U=R+(I<<9&4294967295|I>>>23),I=V+(R^w&(U^R))+C[7]+1735328473&4294967295,V=U+(I<<14&4294967295|I>>>18),I=w+(U^R&(V^U))+C[12]+2368359562&4294967295,w=V+(I<<20&4294967295|I>>>12),I=R+(w^V^U)+C[5]+4294588738&4294967295,R=w+(I<<4&4294967295|I>>>28),I=U+(R^w^V)+C[8]+2272392833&4294967295,U=R+(I<<11&4294967295|I>>>21),I=V+(U^R^w)+C[11]+1839030562&4294967295,V=U+(I<<16&4294967295|I>>>16),I=w+(V^U^R)+C[14]+4259657740&4294967295,w=V+(I<<23&4294967295|I>>>9),I=R+(w^V^U)+C[1]+2763975236&4294967295,R=w+(I<<4&4294967295|I>>>28),I=U+(R^w^V)+C[4]+1272893353&4294967295,U=R+(I<<11&4294967295|I>>>21),I=V+(U^R^w)+C[7]+4139469664&4294967295,V=U+(I<<16&4294967295|I>>>16),I=w+(V^U^R)+C[10]+3200236656&4294967295,w=V+(I<<23&4294967295|I>>>9),I=R+(w^V^U)+C[13]+681279174&4294967295,R=w+(I<<4&4294967295|I>>>28),I=U+(R^w^V)+C[0]+3936430074&4294967295,U=R+(I<<11&4294967295|I>>>21),I=V+(U^R^w)+C[3]+3572445317&4294967295,V=U+(I<<16&4294967295|I>>>16),I=w+(V^U^R)+C[6]+76029189&4294967295,w=V+(I<<23&4294967295|I>>>9),I=R+(w^V^U)+C[9]+3654602809&4294967295,R=w+(I<<4&4294967295|I>>>28),I=U+(R^w^V)+C[12]+3873151461&4294967295,U=R+(I<<11&4294967295|I>>>21),I=V+(U^R^w)+C[15]+530742520&4294967295,V=U+(I<<16&4294967295|I>>>16),I=w+(V^U^R)+C[2]+3299628645&4294967295,w=V+(I<<23&4294967295|I>>>9),I=R+(V^(w|~U))+C[0]+4096336452&4294967295,R=w+(I<<6&4294967295|I>>>26),I=U+(w^(R|~V))+C[7]+1126891415&4294967295,U=R+(I<<10&4294967295|I>>>22),I=V+(R^(U|~w))+C[14]+2878612391&4294967295,V=U+(I<<15&4294967295|I>>>17),I=w+(U^(V|~R))+C[5]+4237533241&4294967295,w=V+(I<<21&4294967295|I>>>11),I=R+(V^(w|~U))+C[12]+1700485571&4294967295,R=w+(I<<6&4294967295|I>>>26),I=U+(w^(R|~V))+C[3]+2399980690&4294967295,U=R+(I<<10&4294967295|I>>>22),I=V+(R^(U|~w))+C[10]+4293915773&4294967295,V=U+(I<<15&4294967295|I>>>17),I=w+(U^(V|~R))+C[1]+2240044497&4294967295,w=V+(I<<21&4294967295|I>>>11),I=R+(V^(w|~U))+C[8]+1873313359&4294967295,R=w+(I<<6&4294967295|I>>>26),I=U+(w^(R|~V))+C[15]+4264355552&4294967295,U=R+(I<<10&4294967295|I>>>22),I=V+(R^(U|~w))+C[6]+2734768916&4294967295,V=U+(I<<15&4294967295|I>>>17),I=w+(U^(V|~R))+C[13]+1309151649&4294967295,w=V+(I<<21&4294967295|I>>>11),I=R+(V^(w|~U))+C[4]+4149444226&4294967295,R=w+(I<<6&4294967295|I>>>26),I=U+(w^(R|~V))+C[11]+3174756917&4294967295,U=R+(I<<10&4294967295|I>>>22),I=V+(R^(U|~w))+C[2]+718787259&4294967295,V=U+(I<<15&4294967295|I>>>17),I=w+(U^(V|~R))+C[9]+3951481745&4294967295,P.g[0]=P.g[0]+R&4294967295,P.g[1]=P.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+V&4294967295,P.g[3]=P.g[3]+U&4294967295}s.prototype.u=function(P,R){R===void 0&&(R=P.length);for(var w=R-this.blockSize,C=this.B,V=this.h,U=0;U<R;){if(V==0)for(;U<=w;)o(this,P,U),U+=this.blockSize;if(typeof P=="string"){for(;U<R;)if(C[V++]=P.charCodeAt(U++),V==this.blockSize){o(this,C),V=0;break}}else for(;U<R;)if(C[V++]=P[U++],V==this.blockSize){o(this,C),V=0;break}}this.h=V,this.o+=R},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var R=1;R<P.length-8;++R)P[R]=0;var w=8*this.o;for(R=P.length-8;R<P.length;++R)P[R]=w&255,w/=256;for(this.u(P),P=Array(16),R=w=0;4>R;++R)for(var C=0;32>C;C+=8)P[w++]=this.g[R]>>>C&255;return P};function u(P,R){var w=m;return Object.prototype.hasOwnProperty.call(w,P)?w[P]:w[P]=R(P)}function f(P,R){this.h=R;for(var w=[],C=!0,V=P.length-1;0<=V;V--){var U=P[V]|0;C&&U==R||(w[V]=U,C=!1)}this.g=w}var m={};function p(P){return-128<=P&&128>P?u(P,function(R){return new f([R|0],0>R?-1:0)}):new f([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return K(y(-P));for(var R=[],w=1,C=0;P>=w;C++)R[C]=P/w|0,w*=4294967296;return new f(R,0)}function E(P,R){if(P.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P.charAt(0)=="-")return K(E(P.substring(1),R));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=y(Math.pow(R,8)),C=S,V=0;V<P.length;V+=8){var U=Math.min(8,P.length-V),I=parseInt(P.substring(V,V+U),R);8>U?(U=y(Math.pow(R,U)),C=C.j(U).add(y(I))):(C=C.j(w),C=C.add(y(I)))}return C}var S=p(0),D=p(1),j=p(16777216);r=f.prototype,r.m=function(){if(Z(this))return-K(this).m();for(var P=0,R=1,w=0;w<this.g.length;w++){var C=this.i(w);P+=(0<=C?C:4294967296+C)*R,R*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(F(this))return"0";if(Z(this))return"-"+K(this).toString(P);for(var R=y(Math.pow(P,6)),w=this,C="";;){var V=be(w,R).g;w=te(w,V.j(R));var U=((0<w.g.length?w.g[0]:w.h)>>>0).toString(P);if(w=V,F(w))return U+C;for(;6>U.length;)U="0"+U;C=U+C}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function F(P){if(P.h!=0)return!1;for(var R=0;R<P.g.length;R++)if(P.g[R]!=0)return!1;return!0}function Z(P){return P.h==-1}r.l=function(P){return P=te(this,P),Z(P)?-1:F(P)?0:1};function K(P){for(var R=P.g.length,w=[],C=0;C<R;C++)w[C]=~P.g[C];return new f(w,~P.h).add(D)}r.abs=function(){return Z(this)?K(this):this},r.add=function(P){for(var R=Math.max(this.g.length,P.g.length),w=[],C=0,V=0;V<=R;V++){var U=C+(this.i(V)&65535)+(P.i(V)&65535),I=(U>>>16)+(this.i(V)>>>16)+(P.i(V)>>>16);C=I>>>16,U&=65535,I&=65535,w[V]=I<<16|U}return new f(w,w[w.length-1]&-2147483648?-1:0)};function te(P,R){return P.add(K(R))}r.j=function(P){if(F(this)||F(P))return S;if(Z(this))return Z(P)?K(this).j(K(P)):K(K(this).j(P));if(Z(P))return K(this.j(K(P)));if(0>this.l(j)&&0>P.l(j))return y(this.m()*P.m());for(var R=this.g.length+P.g.length,w=[],C=0;C<2*R;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var V=0;V<P.g.length;V++){var U=this.i(C)>>>16,I=this.i(C)&65535,Tt=P.i(V)>>>16,dt=P.i(V)&65535;w[2*C+2*V]+=I*dt,ae(w,2*C+2*V),w[2*C+2*V+1]+=U*dt,ae(w,2*C+2*V+1),w[2*C+2*V+1]+=I*Tt,ae(w,2*C+2*V+1),w[2*C+2*V+2]+=U*Tt,ae(w,2*C+2*V+2)}for(C=0;C<R;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=R;C<2*R;C++)w[C]=0;return new f(w,0)};function ae(P,R){for(;(P[R]&65535)!=P[R];)P[R+1]+=P[R]>>>16,P[R]&=65535,R++}function ue(P,R){this.g=P,this.h=R}function be(P,R){if(F(R))throw Error("division by zero");if(F(P))return new ue(S,S);if(Z(P))return R=be(K(P),R),new ue(K(R.g),K(R.h));if(Z(R))return R=be(P,K(R)),new ue(K(R.g),R.h);if(30<P.g.length){if(Z(P)||Z(R))throw Error("slowDivide_ only works with positive integers.");for(var w=D,C=R;0>=C.l(P);)w=pe(w),C=pe(C);var V=Oe(w,1),U=Oe(C,1);for(C=Oe(C,2),w=Oe(w,2);!F(C);){var I=U.add(C);0>=I.l(P)&&(V=V.add(w),U=I),C=Oe(C,1),w=Oe(w,1)}return R=te(P,V.j(R)),new ue(V,R)}for(V=S;0<=P.l(R);){for(w=Math.max(1,Math.floor(P.m()/R.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),U=y(w),I=U.j(R);Z(I)||0<I.l(P);)w-=C,U=y(w),I=U.j(R);F(U)&&(U=D),V=V.add(U),P=te(P,I)}return new ue(V,P)}r.A=function(P){return be(this,P).h},r.and=function(P){for(var R=Math.max(this.g.length,P.g.length),w=[],C=0;C<R;C++)w[C]=this.i(C)&P.i(C);return new f(w,this.h&P.h)},r.or=function(P){for(var R=Math.max(this.g.length,P.g.length),w=[],C=0;C<R;C++)w[C]=this.i(C)|P.i(C);return new f(w,this.h|P.h)},r.xor=function(P){for(var R=Math.max(this.g.length,P.g.length),w=[],C=0;C<R;C++)w[C]=this.i(C)^P.i(C);return new f(w,this.h^P.h)};function pe(P){for(var R=P.g.length+1,w=[],C=0;C<R;C++)w[C]=P.i(C)<<1|P.i(C-1)>>>31;return new f(w,P.h)}function Oe(P,R){var w=R>>5;R%=32;for(var C=P.g.length-w,V=[],U=0;U<C;U++)V[U]=0<R?P.i(U+w)>>>R|P.i(U+w+1)<<32-R:P.i(U+w);return new f(V,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,R0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Jr=f}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I0,Ul,C0,Xc,Rm,D0,O0,N0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break e;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var q=_++;return{value:g(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function S(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function D(c,g,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,D.apply(null,arguments)}function j(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function F(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,q){for(var ee=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)ee[xe-2]=arguments[xe];return g.prototype[k].apply(A,ee)}}function Z(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function K(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const k=c.length||0,q=A.length||0;c.length=k+q;for(let ee=0;ee<q;ee++)c[k+ee]=A[ee]}else c.push(A)}}class te{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ae(c){return/^[\s\xa0]*$/.test(c)}function ue(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function be(c){return be[" "](c),c}be[" "]=function(){};var pe=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Oe(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function P(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function R(c){const g={};for(const _ in c)g[_]=c[_];return g}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let q=0;q<w.length;q++)_=w[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function U(c){m.setTimeout(()=>{throw c},0)}function I(){var c=He;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Tt{constructor(){this.h=this.g=null}add(g,_){const A=dt.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var dt=new te(()=>new ne,c=>c.reset());class ne{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,de=!1,He=new Tt,O=()=>{const c=m.Promise.resolve(void 0);_e=()=>{c.then(J)}};var J=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){U(_)}var g=dt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}de=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var re=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Re(c,g){if(ie.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(pe){e:{try{be(g.nodeName);var k=!0;break e}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}F(Re,ie);var Se={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var mt="closure_listenable_"+(1e6*Math.random()|0),je=0;function it(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++je,this.da=this.fa=!1}function Ke(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Wt(c){this.src=c,this.g={},this.h=0}Wt.prototype.add=function(c,g,_,A,k){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ee=vn(c,g,A,k);return-1<ee?(g=c[ee],_||(g.fa=!1)):(g=new it(g,this.src,q,!!A,k),g.fa=_,c.push(g)),g};function Ei(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),q;(q=0<=k)&&Array.prototype.splice.call(A,k,1),q&&(Ke(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function vn(c,g,_,A){for(var k=0;k<c.length;++k){var q=c[k];if(!q.da&&q.listener==g&&q.capture==!!_&&q.ha==A)return k}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),or={};function Ti(c,g,_,A,k){if(Array.isArray(g)){for(var q=0;q<g.length;q++)Ti(c,g[q],_,A,k);return null}return _=_u(_),c&&c[mt]?c.K(g,_,y(A)?!!A.capture:!1,k):Co(c,g,_,!1,A,k)}function Co(c,g,_,A,k,q){if(!g)throw Error("Invalid event type");var ee=y(k)?!!k.capture:!!k,xe=Do(c);if(xe||(c[ar]=xe=new Wt(c)),_=xe.add(g,_,A,ee,q),_.proxy)return _;if(A=oa(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)re||(k=ee),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(ua(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function oa(){function c(_){return g.call(c.src,c.listener,_)}const g=Kh;return c}function la(c,g,_,A,k){if(Array.isArray(g))for(var q=0;q<g.length;q++)la(c,g[q],_,A,k);else A=y(A)?!!A.capture:!!A,_=_u(_),c&&c[mt]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],_=vn(q,_,A,k),-1<_&&(Ke(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Do(c))&&(g=c.g[g.toString()],c=-1,g&&(c=vn(g,_,A,k)),(_=-1<c?g[c]:null)&&hs(_))}function hs(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[mt])Ei(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(ua(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Do(g))?(Ei(_,c),_.h==0&&(_.src=null,g[ar]=null)):Ke(c)}}}function ua(c){return c in or?or[c]:or[c]="on"+c}function Kh(c,g){if(c.da)c=!0;else{g=new Re(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&hs(c),c=_.call(A,g)}return c}function Do(c){return c=c[ar],c instanceof Wt?c:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(c){return typeof c=="function"?c:(c[rn]||(c[rn]=function(g){return c.handleEvent(g)}),c[rn])}function At(){he.call(this),this.i=new Wt(this),this.M=this,this.F=null}F(At,he),At.prototype[mt]=!0,At.prototype.removeEventListener=function(c,g,_,A){la(this,c,g,_,A)};function Dt(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new ie(g,c);else if(g instanceof ie)g.target=g.target||c;else{var k=g;g=new ie(A,c),C(g,k)}if(k=!0,_)for(var q=_.length-1;0<=q;q--){var ee=g.g=_[q];k=Ai(ee,A,!0,g)&&k}if(ee=g.g=c,k=Ai(ee,A,!0,g)&&k,k=Ai(ee,A,!1,g)&&k,_)for(q=0;q<_.length;q++)ee=g.g=_[q],k=Ai(ee,A,!1,g)&&k}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ke(_[A]);delete c.g[g],c.h--}}this.F=null},At.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},At.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function Ai(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,q=0;q<g.length;++q){var ee=g[q];if(ee&&!ee.da&&ee.capture==_){var xe=ee.listener,wt=ee.ha||ee.src;ee.fa&&Ei(c.i,ee),k=xe.call(wt,A)!==!1&&k}}return k&&!A.defaultPrevented}function vu(c,g,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function Oo(c){c.g=vu(()=>{c.g=null,c.i&&(c.i=!1,Oo(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Qh extends he{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(c){he.call(this),this.h=c,this.g={}}F(fs,he);var lr=[];function Ft(c){Oe(c.g,function(g,_){this.g.hasOwnProperty(_)&&hs(g)},c),c.g={}}fs.prototype.N=function(){fs.aa.N.call(this),Ft(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,Wn=m.JSON.parse,Zt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Mo(){}Mo.prototype.h=null;function Eu(c){return c.h||(c.h=c.i())}function Tu(){}var Zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){ie.call(this,"d")}F(ur,ie);function jn(){ie.call(this,"c")}F(jn,ie);var En={},cr=null;function ca(){return cr=cr||new At}En.La="serverreachability";function Vo(c){ie.call(this,En.La,c)}F(Vo,ie);function hr(c){const g=ca();Dt(g,new Vo(g))}En.STAT_EVENT="statevent";function ha(c,g){ie.call(this,En.STAT_EVENT,c),this.stat=g}F(ha,ie);function lt(c){const g=ca();Dt(g,new ha(g,c))}En.Ma="timingevent";function Au(c,g){ie.call(this,En.Ma,c),this.size=g}F(Au,ie);function fr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function dr(){this.g=!0}dr.prototype.xa=function(){this.g=!1};function Su(c,g,_,A,k,q){c.info(function(){if(c.g)if(q)for(var ee="",xe=q.split("&"),wt=0;wt<xe.length;wt++){var ke=xe[wt].split("=");if(1<ke.length){var Mt=ke[0];ke=ke[1];var bt=Mt.split("_");ee=2<=bt.length&&bt[1]=="type"?ee+(Mt+"="+ke+"&"):ee+(Mt+"=redacted&")}}else ee=null;else ee=q;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+ee})}function wu(c,g,_,A,k,q,ee){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+q+" "+ee})}function mr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ot(c,_)+(A?" "+A:"")})}function Jn(c,g){c.info(function(){return"TIMEOUT: "+g})}dr.prototype.info=function(){};function Ot(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var q=k[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ee=1;ee<k.length;ee++)k[ee]=""}}}}return No(_)}catch{return g}}var St={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ds;function fa(){}F(fa,Mo),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},ds=new fa;function ei(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Po}function Po(){this.i=null,this.g="",this.h=!1}var pr={},ms={};function zn(c,g,_){c.L=1,c.v=ys(rt(g)),c.m=_,c.P=!0,wi(c,null)}function wi(c,g){c.F=Date.now(),Je(c),c.A=rt(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Ii(_.i,"t",A),c.C=0,_=c.j.J,c.h=new Po,c.g=Lu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Qh(D(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(lr[0]=k.toString()),k=lr);for(var q=0;q<k.length;q++){var ee=Ti(_,k[q],A||g.handleEvent,!1,g.h||g);if(!ee)break;g.g[ee.key]=ee}g=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),hr(),Su(c.i,c.u,c.A,c.l,c.R,c.m)}ei.prototype.ca=function(c){c=c.target;const g=this.M;g&&bn(c)==3?g.j():this.Y(c)},ei.prototype.Y=function(c){try{if(c==this.g)e:{const bt=bn(this.g);var g=this.g.Ba();const Ni=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ou(this.g)))){this.J||bt!=4||g==7||(g==8||0>=Ni?hr(3):hr(2)),da(this);var _=this.g.Z();this.X=_;t:if(gr(this)){var A=Ou(this.g);c="";var k=A.length,q=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),un(this);var ee="";break t}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(q&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=_==200,wu(this.i,this.u,this.A,this.l,this.R,bt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,wt=this.g;if((xe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(xe)){var ke=xe;break t}}ke=null}if(_=ke)mr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cn(this,_);else{this.o=!1,this.s=3,lt(12),sn(this),un(this);break e}}if(this.P){_=!0;let Ut;for(;!this.J&&this.C<ee.length;)if(Ut=yr(this,ee),Ut==ms){bt==4&&(this.s=4,lt(14),_=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==pr){this.s=4,lt(15),mr(this.i,this.l,ee,"[Invalid Chunk]"),_=!1;break}else mr(this.i,this.l,Ut,null),cn(this,Ut);if(gr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ee.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)mr(this.i,this.l,ee,"[Invalid Chunked Response]"),sn(this),un(this);else if(0<ee.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ws(Mt),Mt.M=!0,lt(11))}}else mr(this.i,this.l,ee,null),cn(this,ee);bt==4&&sn(this),this.o&&!this.J&&(bt==4?xu(this.j,this):(this.o=!1,Je(this)))}else Jh(this.g),_==400&&0<ee.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),sn(this),un(this)}}}catch{}finally{}};function gr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function yr(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?ms:(_=Number(g.substring(_,A)),isNaN(_)?pr:(A+=1,A+_>g.length?ms:(g=g.slice(A,A+_),c.C=A+_,g)))}ei.prototype.cancel=function(){this.J=!0,sn(this)};function Je(c){c.S=Date.now()+c.I,xo(c,c.I)}function xo(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=fr(D(c.ba,c),g)}function da(c){c.B&&(m.clearTimeout(c.B),c.B=null)}ei.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Jn(this.i,this.A),this.L!=2&&(hr(),lt(17)),sn(this),this.s=2,un(this)):xo(this,this.S-c)};function un(c){c.j.G==0||c.J||xu(c.j,c)}function sn(c){da(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ft(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function cn(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||_r(_.h,c))){if(!c.K&&_r(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Sa(_),Ta(_);else break e;Ko(_),lt(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=fr(D(_.Za,_),6e3));if(1>=bu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((c.K||_.g==c)&&Sa(_),!ae(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let ke=k[g];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Mt=ke[3];Mt!=null&&(_.la=Mt,_.j.info("VER="+_.la));const bt=ke[4];bt!=null&&(_.Aa=bt,_.j.info("SVER="+_.Aa));const Ni=ke[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ut=c.g;if(Ut){const oi=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var q=A.h;q.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(vr(q,q.h),q.h=null))}if(A.D){const Yo=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(A.ya=Yo,ze(A.I,A.D,Yo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ee=c;if(A.qa=Uu(A,A.J?A.ia:null,A.W),ee.K){Tn(A.h,ee);var xe=ee,wt=A.L;wt&&(xe.I=wt),xe.B&&(da(xe),Je(xe)),A.g=ee}else Vu(A);0<_.i.length&&Aa(_)}else ke[0]!="stop"&&ke[0]!="close"||Oi(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Oi(_,7):Fo(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}hr(4)}catch{}}var Yh=class{constructor(c,g){this.g=c,this.map=g}};function ko(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function bu(c){return c.h?1:c.g?c.g.size:0}function _r(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function vr(c,g){c.g?c.g.add(g):c.h=g}function Tn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}ko.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Jt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return Z(c.i)}function Ru(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function $h(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function ps(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=$h(c),A=Ru(c),k=A.length,q=0;q<k;q++)g.call(void 0,A[q],_&&_[q],c)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ma(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var q=c[_].substring(0,A);k=c[_].substring(A+1)}else q=c[_];g(q,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function bi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof bi){this.h=c.h,Er(this,c.j),this.o=c.o,this.g=c.g,gs(this,c.s),this.l=c.l;var g=c.i,_=new ti;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),pa(this,_),this.m=c.m}else c&&(g=String(c).match(Lo))?(this.h=!1,Er(this,g[1]||"",!0),this.o=Tr(g[2]||""),this.g=Tr(g[3]||"",!0),gs(this,g[4]),this.l=Tr(g[5]||"",!0),pa(this,g[6]||"",!0),this.m=Tr(g[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}bi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(An(g,jo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(An(g,jo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(An(_,_.charAt(0)=="/"?zo:Iu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",An(_,Zh)),c.join("")};function rt(c){return new bi(c)}function Er(c,g,_){c.j=_?Tr(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function gs(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function pa(c,g,_){g instanceof ti?(c.i=g,Bo(c.i,c.h)):(_||(g=An(g,Wh)),c.i=new ti(g,c.h))}function ze(c,g,_){c.i.set(g,_)}function ys(c){return ze(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tr(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function An(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Xh),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Xh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jo=/[#\/\?@]/g,Iu=/[#\?:]/g,zo=/[#\?]/g,Wh=/[#\?@]/g,Zh=/#/g;function ti(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&ma(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=ti.prototype,r.add=function(c,g){Sn(this),this.i=null,c=Ci(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function ga(c,g){Sn(c),g=Ci(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ri(c,g){return Sn(c),g=Ci(c,g),c.g.has(g)}r.forEach=function(c,g){Sn(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){Sn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let q=0;q<k.length;q++)_.push(g[A])}return _},r.V=function(c){Sn(this);let g=[];if(typeof c=="string")Ri(this,c)&&(g=g.concat(this.g.get(Ci(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Sn(this),this.i=null,c=Ci(this,c),Ri(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ii(c,g,_){ga(c,g),0<_.length&&(c.i=null,c.g.set(Ci(c,g),Z(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const q=encodeURIComponent(String(A)),ee=this.V(A);for(A=0;A<ee.length;A++){var k=q;ee[A]!==""&&(k+="="+encodeURIComponent(String(ee[A]))),c.push(k)}}return this.i=c.join("&")};function Ci(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Bo(c,g){g&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(ga(this,A),Ii(this,k,_))},c)),c.j=g}function Cu(c,g){const _=new dr;if(m.Image){const A=new Image;A.onload=j(wn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=j(wn,_,"TestLoadImage: error",!1,g,A),A.onabort=j(wn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=j(wn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function _s(c,g){const _=new dr,A=new AbortController,k=setTimeout(()=>{A.abort(),wn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(k),q.ok?wn(_,"TestPingServer: ok",!0,g):wn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),wn(_,"TestPingServer: error",!1,g)})}function wn(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function vs(){this.g=new Zt}function ni(c,g,_){const A=_||"";try{ps(c,function(k,q){let ee=k;y(k)&&(ee=No(k)),g.push(A+q+"="+encodeURIComponent(ee))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function Ar(c){this.l=c.Ub||null,this.j=c.eb||!1}F(Ar,Mo),Ar.prototype.g=function(){return new Di(this.l,this.j)},Ar.prototype.i=function(c){return function(){return c}}({});function Di(c,g){At.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Di,At),r=Di.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ri(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ii(this):ri(this),this.readyState==3&&qo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ii(this))},r.Qa=function(c){this.g&&(this.response=c,ii(this))},r.ga=function(){this.g&&ii(this)};function ii(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ri(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ri(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ho(c){let g="";return Oe(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Nt(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Ho(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):ze(c,g,_))}function Fe(c){At.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Fe,At);var ya=/^https?$/i,Es=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ds.g(),this.v=this.o?Eu(this.o):Eu(ds),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){Du(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Es,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ee]of _)this.g.setRequestHeader(q,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Du(this,q)}};function Du(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,_a(c),si(c)}function _a(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Dt(this,"complete"),Dt(this,"abort"),si(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},r.bb=function(){va(this)};function va(c){if(c.h&&typeof f<"u"&&(!c.v[1]||bn(c)!=4||c.Z()!=2)){if(c.u&&bn(c)==4)vu(c.Ea,0,c);else if(Dt(c,"readystatechange"),bn(c)==4){c.h=!1;try{const ee=c.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=ee===0){var k=String(c.D).match(Lo)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!ya.test(k?k.toLowerCase():"")}_=A}if(_)Dt(c,"complete"),Dt(c,"success");else{c.m=6;try{var q=2<bn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",_a(c)}}finally{si(c)}}}}function si(c,g){if(c.g){Ts(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Dt(c,"ready");try{_.onreadystatechange=A}catch{}}}function Ts(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function bn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Wn(g)}};function Ou(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Jh(c){const g={};c=(c.g&&2<=bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ae(c[A]))continue;var _=V(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=g[k]||[];g[k]=q,q.push(_)}P(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function Ea(c){this.Aa=0,this.i=[],this.j=new dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,c),this.cb=As("retryDelaySeedMs",1e4,c),this.Wa=As("forwardChannelMaxRetries",2,c),this.wa=As("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ko(c&&c.concurrentRequestLimit),this.Da=new vs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ea.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){lt(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Uu(this,null,this.W),Aa(this)};function Fo(c){if(Nu(c),c.G==3){var g=c.U++,_=rt(c.I);if(ze(_,"SID",c.K),ze(_,"RID",g),ze(_,"TYPE","terminate"),Ss(c,_),g=new ei(c,c.j,g),g.L=2,g.v=ys(rt(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Lu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Je(g)}ku(c)}function Ta(c){c.g&&(ws(c),c.g.cancel(),c.g=null)}function Nu(c){Ta(c),c.u&&(m.clearTimeout(c.u),c.u=null),Sa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Aa(c){if(!Uo(c.h)&&!c.s){c.s=!0;var g=c.Ga;_e||O(),de||(_e(),de=!0),He.add(g,c),c.B=0}}function ef(c,g){return bu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=fr(D(c.Ga,c,g),Qo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new ei(this,this.j,c);let q=this.o;if(this.S&&(q?(q=R(q),C(q,this.S)):q=this.S),this.m!==null||this.O||(k.H=q,q=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=Mu(this,k,g),_=rt(this.I),ze(_,"RID",c),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Ss(this,_),q&&(this.O?g="headers="+encodeURIComponent(String(Ho(q)))+"&"+g:this.m&&Nt(_,this.m,q)),vr(this.h,k),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",g),ze(_,"SID","null"),k.T=!0,zn(k,_,null)):zn(k,_,g),this.G=2}}else this.G==3&&(c?Go(this,c):this.i.length==0||Uo(this.h)||Go(this))};function Go(c,g){var _;g?_=g.l:_=c.U++;const A=rt(c.I);ze(A,"SID",c.K),ze(A,"RID",_),ze(A,"AID",c.T),Ss(c,A),c.m&&c.o&&Nt(A,c.m,c.o),_=new ei(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Mu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),vr(c.h,_),zn(_,A,g)}function Ss(c,g){c.H&&Oe(c.H,function(_,A){ze(g,A,_)}),c.l&&ps({},function(_,A){ze(g,A,_)})}function Mu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;e:{var k=c.i;let q=-1;for(;;){const ee=["count="+_];q==-1?0<_?(q=k[0].g,ee.push("ofs="+q)):q=0:ee.push("ofs="+q);let xe=!0;for(let wt=0;wt<_;wt++){let ke=k[wt].g;const Mt=k[wt].map;if(ke-=q,0>ke)q=Math.max(0,k[wt].g-100),xe=!1;else try{ni(Mt,ee,"req"+ke+"_")}catch{A&&A(Mt)}}if(xe){A=ee.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function Vu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;_e||O(),de||(_e(),de=!0),He.add(g,c),c.v=0}}function Ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=fr(D(c.Fa,c),Qo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=fr(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Ta(this),Pu(this))};function ws(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Pu(c){c.g=new ei(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=rt(c.qa);ze(g,"RID","rpc"),ze(g,"SID",c.K),ze(g,"AID",c.T),ze(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&ze(g,"TO",c.ja),ze(g,"TYPE","xmlhttp"),Ss(c,g),c.m&&c.o&&Nt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ys(rt(g)),_.m=null,_.P=!0,wi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Ta(this),Ko(this),lt(19))};function Sa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function xu(c,g){var _=null;if(c.g==g){Sa(c),ws(c),c.g=null;var A=2}else if(_r(c.h,g))_=g.D,Tn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=ca(),Dt(A,new Au(A,_)),Aa(c)}else Vu(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&ef(c,g)||A==2&&Ko(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Qo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Oi(c,g){if(c.j.info("Error code "+g),g==2){var _=D(c.fb,c),A=c.Xa;const k=!A;A=new bi(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Er(A,"https"),ys(A),k?Cu(A.toString(),_):_s(A.toString(),_)}else lt(2);c.G=0,c.l&&c.l.sa(g),ku(c),Nu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function ku(c){if(c.G=0,c.ka=[],c.l){const g=Jt(c.h);(g.length!=0||c.i.length!=0)&&(K(c.ka,g),K(c.ka,c.i),c.h.i.length=0,Z(c.i),c.i.length=0),c.l.ra()}}function Uu(c,g,_){var A=_ instanceof bi?rt(_):new bi(_);if(A.g!="")g&&(A.g=g+"."+A.g),gs(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var q=new bi(null);A&&Er(q,A),g&&(q.g=g),k&&gs(q,k),_&&(q.l=_),A=q}return _=c.D,g=c.ya,_&&g&&ze(A,_,g),ze(A,"VER",c.la),Ss(c,A),A}function Lu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new Ar({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}r=ju.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function wa(){}wa.prototype.g=function(c,g){return new en(c,g)};function en(c,g){At.call(this),this.g=new Ea(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ae(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ae(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ai(this)}F(en,At),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Fo(this.g)},en.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=No(c),c=_);g.i.push(new Yh(g.Ya++,c)),g.G==3&&Aa(g)},en.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,en.aa.N.call(this)};function zu(c){ur.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}F(zu,ur);function Bu(){jn.call(this),this.status=1}F(Bu,jn);function ai(c){this.g=c}F(ai,ju),ai.prototype.ua=function(){Dt(this.g,"a")},ai.prototype.ta=function(c){Dt(this.g,new zu(c))},ai.prototype.sa=function(c){Dt(this.g,new Bu)},ai.prototype.ra=function(){Dt(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,N0=function(){return new wa},O0=function(){return ca()},D0=En,Rm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},St.NO_ERROR=0,St.TIMEOUT=8,St.HTTP_ERROR=6,Xc=St,Si.COMPLETE="complete",C0=Si,Tu.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",At.prototype.listen=At.prototype.K,Ul=Tu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,I0=Fe}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const $v="@firebase/firestore",Xv="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new bh("@firebase/firestore");function Wa(){return Ws.logLevel}function se(r,...e){if(Ws.logLevel<=Ne.DEBUG){const n=e.map(up);Ws.debug(`Firestore (${Ao}): ${r}`,...n)}}function tr(r,...e){if(Ws.logLevel<=Ne.ERROR){const n=e.map(up);Ws.error(`Firestore (${Ao}): ${r}`,...n)}}function uo(r,...e){if(Ws.logLevel<=Ne.WARN){const n=e.map(up);Ws.warn(`Firestore (${Ao}): ${r}`,...n)}}function up(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+r;throw tr(e),new Error(e)}function Ge(r,e){r||ve()}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class mO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pO{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Ks;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ks,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ks)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new M0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Yt(e)}}class gO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new gO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _O{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,kn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,se("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Wv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new Wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=vO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function co(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=-62135596800,Jv=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Jv);return new ft(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zv)throw new oe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jv}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new ft(0,0))}static max(){return new Ee(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="__name__";class di{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(),s===void 0?s=e.length-n:s>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=di.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=di.isNumericId(e),o=di.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?di.extractNumericId(e).compare(di.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class Ze extends di{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const EO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends di{construct(e,n,s){return new qt(e,n,s)}static isValidIdentifier(e){return EO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===eE}static keyField(){return new qt([eE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new oe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new oe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new oe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new oe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ze.fromString(e))}static fromName(e){return new me(Ze.fromString(e).popFirst(5))}static empty(){return new me(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=-1;function TO(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new ft(n+1,0):new ft(n,s));return new ns(o,me.empty(),e)}function AO(r){return new ns(r.readTime,r.key,Jl)}class ns{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ns(Ee.min(),me.empty(),Jl)}static max(){return new ns(Ee.max(),me.empty(),Jl)}}function SO(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(r.documentKey,e.documentKey),n!==0?n:Pe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==wO)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,s)=>{n(e)})}static reject(e){return new $((n,s)=>{s(e)})}static waitFor(e){return new $((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next(o=>o?$.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new $((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new $((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function RO(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Nh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=-1;function Mh(r){return r==null}function fh(r){return r===0&&1/r==-1/0}function IO(r){return typeof r=="number"&&Number.isInteger(r)&&!fh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="";function CO(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=tE(e)),e=DO(r.get(n),e);return tE(e)}function DO(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case P0:n+="";break;default:n+=u}}return n}function tE(r){return r+P0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ia(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function x0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Bt.RED,this.left=o??Bt.EMPTY,this.right=u??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Bt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,s,o,u){return this}insert(e,n,s){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iE(this.data.getIterator())}getIteratorFrom(e){return new iE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class iE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new Ct(qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new k0("Invalid base64 string: "+u):u}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const OO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(r){if(Ge(!!r),typeof r=="string"){let e=0;const n=OO.exec(r);if(Ge(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function rs(r){return typeof r=="string"?Ht.fromBase64String(r):Ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="server_timestamp",L0="__type__",j0="__previous_value__",z0="__local_write_time__";function hp(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[L0])===null||n===void 0?void 0:n.stringValue)===U0}function Vh(r){const e=r.mapValue.fields[j0];return hp(e)?Vh(e):e}function eu(r){const e=is(r.mapValue.fields[z0].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,s,o,u,f,m,p,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const dh="(default)";class tu{constructor(e,n){this.projectId=e,this.database=n||dh}static empty(){return new tu("","")}get isDefaultDatabase(){return this.database===dh}isEqual(e){return e instanceof tu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="__type__",MO="__max__",qc={mapValue:{}},q0="__vector__",mh="value";function ss(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hp(r)?4:PO(r)?9007199254740991:VO(r)?10:11:ve()}function vi(r,e){if(r===e)return!0;const n=ss(r);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return eu(r).isEqual(eu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=is(o.timestampValue),m=is(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return rs(o.bytesValue).isEqual(rs(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ct(o.geoPointValue.latitude)===ct(u.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ct(o.integerValue)===ct(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ct(o.doubleValue),m=ct(u.doubleValue);return f===m?fh(f)===fh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return co(r.arrayValue.values||[],e.arrayValue.values||[],vi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(nE(f)!==nE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!vi(f[p],m[p])))return!1;return!0}(r,e);default:return ve()}}function nu(r,e){return(r.values||[]).find(n=>vi(n,e))!==void 0}function ho(r,e){if(r===e)return 0;const n=ss(r),s=ss(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ct(u.integerValue||u.doubleValue),p=ct(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return rE(r.timestampValue,e.timestampValue);case 4:return rE(eu(r),eu(e));case 5:return Pe(r.stringValue,e.stringValue);case 6:return function(u,f){const m=rs(u),p=rs(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Pe(m[y],p[y]);if(E!==0)return E}return Pe(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Pe(ct(u.latitude),ct(f.latitude));return m!==0?m:Pe(ct(u.longitude),ct(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return sE(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,y,E;const S=u.fields||{},D=f.fields||{},j=(m=S[mh])===null||m===void 0?void 0:m.arrayValue,F=(p=D[mh])===null||p===void 0?void 0:p.arrayValue,Z=Pe(((y=j==null?void 0:j.values)===null||y===void 0?void 0:y.length)||0,((E=F==null?void 0:F.values)===null||E===void 0?void 0:E.length)||0);return Z!==0?Z:sE(j,F)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===qc.mapValue&&f===qc.mapValue)return 0;if(u===qc.mapValue)return 1;if(f===qc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const D=Pe(p[S],E[S]);if(D!==0)return D;const j=ho(m[p[S]],y[E[S]]);if(j!==0)return j}return Pe(p.length,E.length)}(r.mapValue,e.mapValue);default:throw ve()}}function rE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const n=is(r),s=is(e),o=Pe(n.seconds,s.seconds);return o!==0?o:Pe(n.nanos,s.nanos)}function sE(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=ho(n[o],s[o]);if(u)return u}return Pe(n.length,s.length)}function fo(r){return Im(r)}function Im(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=is(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return rs(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return me.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Im(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Im(n.fields[f])}`;return o+"}"}(r.mapValue):ve()}function Wc(r){switch(ss(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vh(r);return e?16+Wc(e):16;case 5:return 2*r.stringValue.length;case 6:return rs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Wc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ia(s.fields,(u,f)=>{o+=u.length+Wc(f)}),o}(r.mapValue);default:throw ve()}}function aE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Cm(r){return!!r&&"integerValue"in r}function fp(r){return!!r&&"arrayValue"in r}function oE(r){return!!r&&"nullValue"in r}function lE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Zc(r){return!!r&&"mapValue"in r}function VO(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[B0])===null||n===void 0?void 0:n.stringValue)===q0}function Hl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ia(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Hl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function PO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===MO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hl(n)}setAll(e){let n=qt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Hl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Zc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ia(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Un(Hl(this.value))}}function H0(r){const e=[];return ia(r.fields,(n,s)=>{const o=new qt([n]);if(Zc(s)){const u=H0(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new $t(e,0,Ee.min(),Ee.min(),Ee.min(),Un.empty(),0)}static newFoundDocument(e,n,s,o){return new $t(e,1,n,Ee.min(),s,o,0)}static newNoDocument(e,n){return new $t(e,2,n,Ee.min(),Ee.min(),Un.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,Ee.min(),Ee.min(),Un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.position=e,this.inclusive=n}}function uE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(f.referenceValue),n.key):s=ho(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function cE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function xO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{}class vt extends F0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new UO(e,n,s):n==="array-contains"?new zO(e,s):n==="in"?new BO(e,s):n==="not-in"?new qO(e,s):n==="array-contains-any"?new HO(e,s):new vt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new LO(e,s):new jO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ho(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends F0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yn(e,n)}matches(e){return G0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function G0(r){return r.op==="and"}function K0(r){return kO(r)&&G0(r)}function kO(r){for(const e of r.filters)if(e instanceof Yn)return!1;return!0}function Dm(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+fo(r.value);if(K0(r))return r.filters.map(e=>Dm(e)).join(",");{const e=r.filters.map(n=>Dm(n)).join(",");return`${r.op}(${e})`}}function Q0(r,e){return r instanceof vt?function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)}(r,e):r instanceof Yn?function(s,o){return o instanceof Yn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&Q0(f,o.filters[m]),!0):!1}(r,e):void ve()}function Y0(r){return r instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(r):r instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Y0).join(" ,")+"}"}(r):"Filter"}class UO extends vt{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class LO extends vt{constructor(e,n){super(e,"in",n),this.keys=$0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jO extends vt{constructor(e,n){super(e,"not-in",n),this.keys=$0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $0(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>me.fromName(s.referenceValue))}class zO extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&nu(n.arrayValue,this.value)}}class BO extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nu(this.value.arrayValue,n)}}class qO extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nu(this.value.arrayValue,n)}}class HO extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>nu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function hE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new FO(r,e,n,s,o,u,f)}function dp(r){const e=Ae(r);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fo(s)).join(",")),e.le=n}return e.le}function mp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!xO(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Q0(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!cE(r.startAt,e.startAt)&&cE(r.endAt,e.endAt)}function Om(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function GO(r,e,n,s,o,u,f,m){return new bo(r,e,n,s,o,u,f,m)}function pp(r){return new bo(r)}function fE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function X0(r){return r.collectionGroup!==null}function Fl(r){const e=Ae(r);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ct(qt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new iu(u,s))}),n.has(qt.keyField().canonicalString())||e.he.push(new iu(qt.keyField(),s))}return e.he}function gi(r){const e=Ae(r);return e.Pe||(e.Pe=KO(e,Fl(r))),e.Pe}function KO(r,e){if(r.limitType==="F")return hE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new iu(o.field,u)});const n=r.endAt?new ph(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ph(r.startAt.position,r.startAt.inclusive):null;return hE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Nm(r,e){const n=r.filters.concat([e]);return new bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Mm(r,e,n){return new bo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function fu(r,e){return mp(gi(r),gi(e))&&r.limitType===e.limitType}function W0(r){return`${dp(gi(r))}|lt:${r.limitType}`}function Za(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>Y0(o)).join(", ")}]`),Mh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>fo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>fo(o)).join(",")),`Target(${s})`}(gi(r))}; limitType=${r.limitType})`}function Ph(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Fl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=uE(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Fl(s),o)||s.endAt&&!function(f,m,p){const y=uE(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Fl(s),o))}(r,e)}function QO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Z0(r){return(e,n)=>{let s=!1;for(const o of Fl(r)){const u=YO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function YO(r,e,n){const s=r.field.isKeyField()?me.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?ho(p,y):ve()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ia(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return x0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new nt(me.comparator);function nr(){return $O}const J0=new nt(me.comparator);function Ll(...r){let e=J0;for(const n of r)e=e.insert(n.key,n);return e}function eA(r){let e=J0;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gs(){return Gl()}function tA(){return Gl()}function Gl(){return new ra(r=>r.toString(),(r,e)=>r.isEqual(e))}const XO=new nt(me.comparator),WO=new Ct(me.comparator);function Me(...r){let e=WO;for(const n of r)e=e.add(n);return e}const ZO=new Ct(Pe);function JO(){return ZO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function nA(r){return{integerValue:""+r}}function eN(r,e){return IO(e)?nA(e):gp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this._=void 0}}function tN(r,e,n){return r instanceof ru?function(o,u){const f={fields:{[L0]:{stringValue:U0},[z0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&hp(u)&&(u=Vh(u)),u&&(f.fields[j0]=u),{mapValue:f}}(n,e):r instanceof su?rA(r,e):r instanceof au?sA(r,e):function(o,u){const f=iA(o,u),m=dE(f)+dE(o.Ie);return Cm(f)&&Cm(o.Ie)?nA(m):gp(o.serializer,m)}(r,e)}function nN(r,e,n){return r instanceof su?rA(r,e):r instanceof au?sA(r,e):n}function iA(r,e){return r instanceof gh?function(s){return Cm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class ru extends xh{}class su extends xh{constructor(e){super(),this.elements=e}}function rA(r,e){const n=aA(e);for(const s of r.elements)n.some(o=>vi(o,s))||n.push(s);return{arrayValue:{values:n}}}class au extends xh{constructor(e){super(),this.elements=e}}function sA(r,e){let n=aA(e);for(const s of r.elements)n=n.filter(o=>!vi(o,s));return{arrayValue:{values:n}}}class gh extends xh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function dE(r){return ct(r.integerValue||r.doubleValue)}function aA(r){return fp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.field=e,this.transform=n}}function rN(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof su&&o instanceof su||s instanceof au&&o instanceof au?co(s.elements,o.elements,vi):s instanceof gh&&o instanceof gh?vi(s.Ie,o.Ie):s instanceof ru&&o instanceof ru}(r.transform,e.transform)}class sN{constructor(e,n){this.version=e,this.transformResults=n}}class Zi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zi}static exists(e){return new Zi(void 0,e)}static updateTime(e){return new Zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class kh{}function oA(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new uA(r.key,Zi.none()):new du(r.key,r.data,Zi.none());{const n=r.data,s=Un.empty();let o=new Ct(qt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new sa(r.key,s,new Gn(o.toArray()),Zi.none())}}function aN(r,e,n){r instanceof du?function(o,u,f){const m=o.value.clone(),p=pE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof sa?function(o,u,f){if(!Jc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=pE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(lA(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Kl(r,e,n,s){return r instanceof du?function(u,f,m,p){if(!Jc(u.precondition,f))return m;const y=u.value.clone(),E=gE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof sa?function(u,f,m,p){if(!Jc(u.precondition,f))return m;const y=gE(u.fieldTransforms,p,f),E=f.data;return E.setAll(lA(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,n,s):function(u,f,m){return Jc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function oN(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=iA(s.transform,o||null);u!=null&&(n===null&&(n=Un.empty()),n.set(s.field,u))}return n||null}function mE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,(u,f)=>rN(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class du extends kh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends kh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function lA(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function pE(r,e,n){const s=new Map;Ge(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,nN(f,m,n[o]))}return s}function gE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,tN(u,f,e))}return s}class uA extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lN extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&aN(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Kl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Kl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tA();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=oA(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Me())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,s)=>mE(n,s))&&co(this.baseMutations,e.baseMutations,(n,s)=>mE(n,s))}}class yp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ge(e.mutations.length===s.length);let o=function(){return XO}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new yp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,Le;function fN(r){switch(r){case X.OK:return ve();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ve()}}function cA(r){if(r===void 0)return tr("GRPC error has no .code"),X.UNKNOWN;switch(r){case _t.OK:return X.OK;case _t.CANCELLED:return X.CANCELLED;case _t.UNKNOWN:return X.UNKNOWN;case _t.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case _t.INTERNAL:return X.INTERNAL;case _t.UNAVAILABLE:return X.UNAVAILABLE;case _t.UNAUTHENTICATED:return X.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case _t.NOT_FOUND:return X.NOT_FOUND;case _t.ALREADY_EXISTS:return X.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return X.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case _t.ABORTED:return X.ABORTED;case _t.OUT_OF_RANGE:return X.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return X.UNIMPLEMENTED;case _t.DATA_LOSS:return X.DATA_LOSS;default:return ve()}}(Le=_t||(_t={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new Jr([4294967295,4294967295],0);function yE(r){const e=dN().encode(r),n=new R0;return n.update(e),new Uint8Array(n.digest())}function _E(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Jr([n,s],0),new Jr([o,u],0)]}class _p{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new jl(`Invalid padding: ${n}`);if(s<0)throw new jl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new jl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new jl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Jr.fromNumber(this.Ee)}Ae(e,n,s){let o=e.add(n.multiply(Jr.fromNumber(s)));return o.compare(mN)===1&&(o=new Jr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=yE(e),[s,o]=_E(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new _p(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const n=yE(e),[s,o]=_E(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class jl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,mu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Uh(Ee.min(),o,new nt(Pe),nr(),Me())}}class mu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new mu(s,n,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,s,o){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=o}}class hA{constructor(e,n){this.targetId=e,this.ge=n}}class fA{constructor(e,n,s=Ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class vE{constructor(){this.pe=0,this.ye=EE(),this.we=Ht.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Me(),n=Me(),s=Me();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ve()}}),new mu(this.we,this.be,e,n,s)}Me(){this.Se=!1,this.ye=EE()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class pN{constructor(e){this.ke=e,this.qe=new Map,this.Qe=nr(),this.$e=Hc(),this.Ke=Hc(),this.Ue=new nt(Pe)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(e){const n=e.targetId,s=e.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Om(u))if(s===0){const f=new me(u.path);this.ze(n,f,$t.newNoDocument(f,Ee.min()))}else Ge(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=rs(s).toUint8Array()}catch(p){if(p instanceof k0)return uo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new _p(f,o,u)}catch(p){return uo(p instanceof jl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(e){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Om(m.target)){const p=new me(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,$t.newNoDocument(p,e))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Me();this.Ke.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new Uh(e,n,this.Ue,this.Qe,s);return this.Qe=nr(),this.$e=Hc(),this.Ke=Hc(),this.Ue=new nt(Pe),o}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new vE,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Ct(Pe),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ct(Pe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new vE),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Hc(){return new nt(me.comparator)}function EE(){return new nt(me.comparator)}const gN={asc:"ASCENDING",desc:"DESCENDING"},yN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_N={and:"AND",or:"OR"};class vN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vm(r,e){return r.useProto3Json||Mh(e)?e:{value:e}}function yh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function EN(r,e){return yh(r,e.toTimestamp())}function yi(r){return Ge(!!r),Ee.fromTimestamp(function(n){const s=is(n);return new ft(s.seconds,s.nanos)}(r))}function vp(r,e){return Pm(r,e).canonicalString()}function Pm(r,e){const n=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function mA(r){const e=Ze.fromString(r);return Ge(vA(e)),e}function xm(r,e){return vp(r.databaseId,e.path)}function lm(r,e){const n=mA(e);if(n.get(1)!==r.databaseId.projectId)throw new oe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new oe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new me(gA(n))}function pA(r,e){return vp(r.databaseId,e)}function TN(r){const e=mA(r);return e.length===4?Ze.emptyPath():gA(e)}function km(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gA(r){return Ge(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function TE(r,e,n){return{name:xm(r,e),fields:n.value.mapValue.fields}}function AN(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ge(E===void 0||typeof E=="string"),Ht.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ht.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const E=y.code===void 0?X.UNKNOWN:cA(y.code);return new oe(E,y.message||"")}(f);n=new fA(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=lm(r,s.document.name),u=yi(s.document.updateTime),f=s.document.createTime?yi(s.document.createTime):Ee.min(),m=new Un({mapValue:{fields:s.document.fields}}),p=$t.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new eh(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=lm(r,s.document),u=s.readTime?yi(s.readTime):Ee.min(),f=$t.newNoDocument(o,u),m=s.removedTargetIds||[];n=new eh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=lm(r,s.document),u=s.removedTargetIds||[];n=new eh([],u,o,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new hN(o,u),m=s.targetId;n=new hA(m,f)}}return n}function SN(r,e){let n;if(e instanceof du)n={update:TE(r,e.key,e.value)};else if(e instanceof uA)n={delete:xm(r,e.key)};else if(e instanceof sa)n={update:TE(r,e.key,e.data),updateMask:MN(e.fieldMask)};else{if(!(e instanceof lN))return ve();n={verify:xm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof ru)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof su)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof au)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof gh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw ve()}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:EN(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve()}(r,e.precondition)),n}function wN(r,e){return r&&r.length>0?(Ge(e!==void 0),r.map(n=>function(o,u){let f=o.updateTime?yi(o.updateTime):yi(u);return f.isEqual(Ee.min())&&(f=yi(u)),new sN(f,o.transformResults||[])}(n,e))):[]}function bN(r,e){return{documents:[pA(r,e.path)]}}function RN(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=pA(r,o);const u=function(y){if(y.length!==0)return _A(Yn.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Ja(D.field),direction:DN(D.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Vm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:n,parent:o}}function IN(r){let e=TN(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ge(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(S){const D=yA(S);return D instanceof Yn&&K0(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(D=>function(F){return new iu(eo(F.field),function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(D))}(n.orderBy));let m=null;n.limit&&(m=function(S){let D;return D=typeof S=="object"?S.value:S,Mh(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(S){const D=!!S.before,j=S.values||[];return new ph(j,D)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const D=!S.before,j=S.values||[];return new ph(j,D)}(n.endAt)),GO(e,o,f,u,m,"F",p,y)}function CN(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yA(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=eo(n.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(n.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(n.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=eo(n.unaryFilter.field);return vt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(r):r.fieldFilter!==void 0?function(n){return vt.create(eo(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(s=>yA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(r):ve()}function DN(r){return gN[r]}function ON(r){return yN[r]}function NN(r){return _N[r]}function Ja(r){return{fieldPath:r.canonicalString()}}function eo(r){return qt.fromServerFormat(r.fieldPath)}function _A(r){return r instanceof vt?function(n){if(n.op==="=="){if(lE(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NAN"}};if(oE(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lE(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NAN"}};if(oE(n.value))return{unaryFilter:{field:Ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ja(n.field),op:ON(n.op),value:n.value}}}(r):r instanceof Yn?function(n){const s=n.getFilters().map(o=>_A(o));return s.length===1?s[0]:{compositeFilter:{op:NN(n.op),filters:s}}}(r):ve()}function MN(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,s,o,u=Ee.min(),f=Ee.min(),m=Ht.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.Tt=e}}function PN(r){const e=IN({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.Tn=new kN}addToCollectionParentIndex(e,n){return this.Tn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ns.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class kN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ct(Ze.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ct(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},EA=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(EA,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new mo(0)}static Un(){return new mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="LruGarbageCollector",UN=1048576;function wE([r,e],[n,s]){const o=Pe(r,n);return o===0?Pe(e,s):o}class LN{constructor(e){this.Hn=e,this.buffer=new Ct(wE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();wE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){se(SE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wo(n)?se(SE,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.er(3e5)})}}class zN{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Nh.ae);const s=new LN(n);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(AE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),AE):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,n))).next(S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(y=Date.now(),Wa()<=Ne.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function BN(r,e){return new zN(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changes=new ra(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Kl(s.mutation,o,Gn.empty(),ft.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Me()){const o=Gs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Ll();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Me()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=nr();const f=Gl(),m=function(){return Gl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof sa)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Kl(E.mutation,y,E.mutation.getFieldMask(),ft.now())):f.set(y.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var S;return m.set(y,new HN(E,(S=f.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Gl();let o=new nt((f,m)=>f-m),u=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Gn.empty();E=m.applyToLocalView(y,E),s.set(p,E);const S=(o.get(m.batchId)||Me()).add(p);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,S=tA();E.forEach(D=>{if(!u.has(D)){const j=oA(n.get(D),s.get(D));j!==null&&S.set(D,j),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,S))}return $.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return me.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):X0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):$.resolve(Gs());let m=Jl,p=u;return f.next(y=>$.forEach(y,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next(D=>{p=p.insert(E,D)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Me())).next(E=>({batchId:m,changes:eA(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(s=>{let o=Ll();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Ll();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,p=>{const y=function(S,D){return new bo(D,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((S,D)=>{f=f.insert(S,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,$t.newInvalidDocument(E)))});let m=Ll();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Kl(E.mutation,y,Gn.empty(),ft.now()),Ph(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return $.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:yi(o.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:PN(o.bundledQuery),readTime:yi(o.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.overlays=new nt(me.comparator),this.Rr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gs();return $.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Et(e,n,u)}),$.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const o=Gs(),u=n.length+1,f=new me(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return $.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new nt((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Gs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Gs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return $.resolve(m)}Et(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new cN(n,s));let u=this.Rr.get(n);u===void 0&&(u=Me(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.Vr=new Ct(kt.mr),this.gr=new Ct(kt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new kt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new kt(e,n))}br(e,n){e.forEach(s=>this.removeReference(s,n))}Sr(e){const n=new me(new Ze([])),s=new kt(n,e),o=new kt(n,e+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new me(new Ze([])),s=new kt(n,e),o=new kt(n,e+1);let u=Me();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new kt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return me.comparator(e.key,n.key)||Pe(e.Cr,n.Cr)}static pr(e,n){return Pe(e.Cr,n.Cr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ct(kt.mr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new uN(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(f)}lookupMutationBatch(e,n){return $.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?cp:this.Fr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new kt(n,0),o=new kt(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ct(Pe);return n.forEach(o=>{const u=new kt(o,0),f=new kt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),$.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const f=new kt(new me(u),0);let m=new Ct(Pe);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},f),$.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ge(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return $.forEach(n.mutations,o=>{const u=new kt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new kt(n,0),o=this.Mr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.kr=e,this.docs=function(){return new nt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let s=nr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$t.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=nr();const f=n.path,m=new me(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||SO(AO(E),s)<=0||(o.has(E.key)||Ph(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ve()}qr(e,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new XN(this)}getSize(e){return $.resolve(this.size)}}class XN extends qN{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),$.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.persistence=e,this.Qr=new ra(n=>dp(n),mp),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Ep,this.targetCount=0,this.Ur=mo.Kn()}forEachTarget(e,n){return this.Qr.forEach((s,o)=>n(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),$.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.zn(n),$.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.Kr.yr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.Kr.br(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Kr.vr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Nh(0),this.zr=!1,this.zr=!0,this.jr=new QN,this.referenceDelegate=e(this),this.Hr=new WN(this),this.indexManager=new xN,this.remoteDocumentCache=function(o){return new $N(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new VN(n),this.Yr=new GN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new YN(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const o=new ZN(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,n){return $.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class ZN extends bO{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.ti=new Ep,this.ni=null}static ri(e){return new Tp(e)}get ii(){if(this.ni)return this.ni;throw ve()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),$.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ii,s=>{const o=me.fromPath(s);return this.si(e,o).next(u=>{u||n.removeEntry(o,Ee.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return $.or([()=>$.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class _h{constructor(e,n){this.persistence=e,this.oi=new ra(s=>CO(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=BN(this,n)}static ri(e,n){return new _h(e,n)}Zr(){}Xr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return $.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?$.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),$.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wc(e.data.value)),n}ar(e,n,s){return $.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.oi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(e,n){let s=Me(),o=Me();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ap(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return fR()?8:RO(Xt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.rs(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new JN;return this._s(e,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,f,m.size)})}).next(()=>u.result)}us(e,n,s,o){return s.documentReadCount<this.es?(Wa()<=Ne.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),$.resolve()):(Wa()<=Ne.DEBUG&&se("QueryEngine","Query:",Za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Wa()<=Ne.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gi(n))):$.resolve())}rs(e,n){if(fE(n))return $.resolve(null);let s=gi(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Mm(n,null,"F"),s=gi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Me(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.cs(n,m);return this.ls(n,y,f,p.readTime)?this.rs(e,Mm(n,null,"F")):this.hs(e,y,n,p)}))})))}ss(e,n,s,o){return fE(n)||o.isEqual(Ee.min())?$.resolve(null):this.ns.getDocuments(e,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?$.resolve(null):(Wa()<=Ne.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Za(n)),this.hs(e,f,n,TO(o,Jl)).next(m=>m))})}cs(e,n){let s=new Ct(Z0(e));return n.forEach((o,u)=>{Ph(e,u)&&(s=s.add(u))}),s}ls(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,n,s){return Wa()<=Ne.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Za(n)),this.ns.getDocumentsMatchingQuery(e,n,ns.min(),s)}hs(e,n,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LocalStore",t2=3e8;class n2{constructor(e,n,s,o){this.persistence=e,this.Ps=n,this.serializer=o,this.Ts=new nt(Pe),this.Is=new ra(u=>dp(u),mp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FN(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function i2(r,e,n,s){return new n2(r,e,n,s)}async function AA(r,e){const n=Ae(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Me();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function r2(r,e){const n=Ae(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const S=y.batch,D=S.keys();let j=$.resolve();return D.forEach(F=>{j=j.next(()=>E.getEntry(p,F)).next(Z=>{const K=y.docVersions.get(F);Ge(K!==null),Z.version.compareTo(K)<0&&(S.applyToRemoteDocument(Z,y),Z.isValidDocument()&&(Z.setReadTime(y.commitVersion),E.addEntry(Z)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(p,S))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Me();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function SA(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function s2(r,e){const n=Ae(r),s=e.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];e.targetChanges.forEach((E,S)=>{const D=o.get(S);if(!D)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,S).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,S)));let j=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Ht.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,s)),o=o.insert(S,j),function(Z,K,te){return Z.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=t2?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(D,j,E)&&m.push(n.Hr.updateTargetData(u,j))});let p=nr(),y=Me();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(a2(u,f,e.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!s.isEqual(Ee.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(S=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return $.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ts=o,u))}function a2(r,e,n){let s=Me(),o=Me();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=nr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):se(Sp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function o2(r,e){const n=Ae(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=cp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function l2(r,e){const n=Ae(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new $r(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Um(r,e,n){const s=Ae(r),o=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!wo(f))throw f;se(Sp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function bE(r,e,n){const s=Ae(r);let o=Ee.min(),u=Me();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const S=Ae(p),D=S.Is.get(E);return D!==void 0?$.resolve(S.Ts.get(D)):S.Hr.getTargetData(y,E)}(s,f,gi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,e,n?o:Ee.min(),n?u:Me())).next(m=>(u2(s,QO(e),m),{documents:m,gs:u})))}function u2(r,e,n){let s=r.Es.get(e)||Ee.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class RE{constructor(){this.activeTargetIds=JO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c2{constructor(){this.ho=new RE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new RE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="ConnectivityMonitor";class CE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){se(IE,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){se(IE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc=null;function Lm(){return Fc===null?Fc=function(){return 268435456+Math.round(2147483648*Math.random())}():Fc++,"0x"+Fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="RestConnection",f2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class d2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===dh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(e,n,s,o,u){const f=Lm(),m=this.So(e,n.toUriEncodedString());se(um,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,s).then(y=>(se(um,`Received RPC '${e}' ${f}: `,y),y),y=>{throw uo(um,`RPC '${e}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(e,n,s,o,u,f){return this.bo(e,n,s,o,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}So(e,n){const s=f2[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class p2 extends d2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,o){const u=Lm();return new Promise((f,m)=>{const p=new I0;p.setWithCredentials(!0),p.listenOnce(C0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Xc.NO_ERROR:const E=p.getResponseJson();se(Qt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case Xc.TIMEOUT:se(Qt,`RPC '${e}' ${u} timed out`),m(new oe(X.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const S=p.getStatus();if(se(Qt,`RPC '${e}' ${u} failed with status:`,S,"response text:",p.getResponseText()),S>0){let D=p.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D==null?void 0:D.error;if(j&&j.status&&j.message){const F=function(K){const te=K.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(te)>=0?te:X.UNKNOWN}(j.status);m(new oe(F,j.message))}else m(new oe(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new oe(X.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{se(Qt,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);se(Qt,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}Wo(e,n,s){const o=Lm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=N0(),m=O0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");se(Qt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const S=f.createWebChannel(E,p);let D=!1,j=!1;const F=new m2({Fo:K=>{j?se(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,K):(D||(se(Qt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),D=!0),se(Qt,`RPC '${e}' stream ${o} sending:`,K),S.send(K))},Mo:()=>S.close()}),Z=(K,te,ae)=>{K.listen(te,ue=>{try{ae(ue)}catch(be){setTimeout(()=>{throw be},0)}})};return Z(S,Ul.EventType.OPEN,()=>{j||(se(Qt,`RPC '${e}' stream ${o} transport opened.`),F.Qo())}),Z(S,Ul.EventType.CLOSE,()=>{j||(j=!0,se(Qt,`RPC '${e}' stream ${o} transport closed`),F.Ko())}),Z(S,Ul.EventType.ERROR,K=>{j||(j=!0,uo(Qt,`RPC '${e}' stream ${o} transport errored:`,K),F.Ko(new oe(X.UNAVAILABLE,"The operation could not be completed")))}),Z(S,Ul.EventType.MESSAGE,K=>{var te;if(!j){const ae=K.data[0];Ge(!!ae);const ue=ae,be=(ue==null?void 0:ue.error)||((te=ue[0])===null||te===void 0?void 0:te.error);if(be){se(Qt,`RPC '${e}' stream ${o} received error:`,be);const pe=be.status;let Oe=function(w){const C=_t[w];if(C!==void 0)return cA(C)}(pe),P=be.message;Oe===void 0&&(Oe=X.INTERNAL,P="Unknown error status: "+pe+" with message "+be.message),j=!0,F.Ko(new oe(Oe,P)),S.close()}else se(Qt,`RPC '${e}' stream ${o} received:`,ae),F.Uo(ae)}}),Z(m,D0.STAT_EVENT,K=>{K.stat===Rm.PROXY?se(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):K.stat===Rm.NOPROXY&&se(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.$o()},0),F}}function cm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(r){return new vN(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="PersistentStream";class bA{constructor(e,n,s,o,u,f,m,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new wA(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{e(()=>{const o=new oe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return se(DE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(se(DE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class g2 extends bA{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=AN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ee.min():f.readTime?yi(f.readTime):Ee.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=km(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Om(p)?{documents:bN(u,p)}:{query:RN(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=dA(u,f.resumeToken);const y=Vm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Ee.min())>0){m.readTime=yh(u,f.snapshotVersion.toTimestamp());const y=Vm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=CN(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=km(this.serializer),n.removeTarget=e,this.I_(n)}}class y2 extends bA{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=wN(e.writeResults,e.commitTime),s=yi(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=km(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>SN(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{}class v2 extends _2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new oe(X.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.bo(e,Pm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(X.UNKNOWN,u.toString())})}Co(e,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,Pm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new oe(X.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class E2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(tr(n),this.N_=!1):se("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="RemoteStore";class T2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{aa(this)&&(se(Zs,"Restarting streams for network reachability change."),await async function(p){const y=Ae(p);y.W_.add(4),await pu(y),y.j_.set("Unknown"),y.W_.delete(4),await jh(y)}(this))})}),this.j_=new E2(s,o)}}async function jh(r){if(aa(r))for(const e of r.G_)await e(!0)}async function pu(r){for(const e of r.G_)await e(!1)}function RA(r,e){const n=Ae(r);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Ip(n)?Rp(n):Ro(n).c_()&&bp(n,e))}function wp(r,e){const n=Ae(r),s=Ro(n);n.U_.delete(e),s.c_()&&IA(n,e),n.U_.size===0&&(s.c_()?s.P_():aa(n)&&n.j_.set("Unknown"))}function bp(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(r).y_(e)}function IA(r,e){r.H_.Ne(e),Ro(r).w_(e)}function Rp(r){r.H_=new pN({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Ro(r).start(),r.j_.B_()}function Ip(r){return aa(r)&&!Ro(r).u_()&&r.U_.size>0}function aa(r){return Ae(r).W_.size===0}function CA(r){r.H_=void 0}async function A2(r){r.j_.set("Online")}async function S2(r){r.U_.forEach((e,n)=>{bp(r,e)})}async function w2(r,e){CA(r),Ip(r)?(r.j_.q_(e),Rp(r)):r.j_.set("Unknown")}async function b2(r,e,n){if(r.j_.set("Online"),e instanceof fA&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,e)}catch(s){se(Zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vh(r,s)}else if(e instanceof eh?r.H_.We(e):e instanceof hA?r.H_.Ze(e):r.H_.je(e),!n.isEqual(Ee.min()))try{const s=await SA(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(y);E&&u.U_.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(Ht.EMPTY_BYTE_STRING,E.snapshotVersion)),IA(u,p);const S=new $r(E.target,p,y,E.sequenceNumber);bp(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){se(Zs,"Failed to raise snapshot:",s),await vh(r,s)}}async function vh(r,e,n){if(!wo(e))throw e;r.W_.add(1),await pu(r),r.j_.set("Offline"),n||(n=()=>SA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{se(Zs,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await jh(r)})}function DA(r,e){return e().catch(n=>vh(r,n,e))}async function zh(r){const e=Ae(r),n=as(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:cp;for(;R2(e);)try{const o=await o2(e.localStore,s);if(o===null){e.K_.length===0&&n.P_();break}s=o.batchId,I2(e,o)}catch(o){await vh(e,o)}OA(e)&&NA(e)}function R2(r){return aa(r)&&r.K_.length<10}function I2(r,e){r.K_.push(e);const n=as(r);n.c_()&&n.b_&&n.S_(e.mutations)}function OA(r){return aa(r)&&!as(r).u_()&&r.K_.length>0}function NA(r){as(r).start()}async function C2(r){as(r).C_()}async function D2(r){const e=as(r);for(const n of r.K_)e.S_(n.mutations)}async function O2(r,e,n){const s=r.K_.shift(),o=yp.from(s,e,n);await DA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await zh(r)}async function N2(r,e){e&&as(r).b_&&await async function(s,o){if(function(f){return fN(f)&&f!==X.ABORTED}(o.code)){const u=s.K_.shift();as(s).h_(),await DA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await zh(s)}}(r,e),OA(r)&&NA(r)}async function OE(r,e){const n=Ae(r);n.asyncQueue.verifyOperationInProgress(),se(Zs,"RemoteStore received new credentials");const s=aa(n);n.W_.add(3),await pu(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await jh(n)}async function M2(r,e){const n=Ae(r);e?(n.W_.delete(2),await jh(n)):e||(n.W_.add(2),await pu(n),n.j_.set("Unknown"))}function Ro(r){return r.J_||(r.J_=function(n,s,o){const u=Ae(n);return u.M_(),new g2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:A2.bind(null,r),No:S2.bind(null,r),Lo:w2.bind(null,r),p_:b2.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Ip(r)?Rp(r):r.j_.set("Unknown")):(await r.J_.stop(),CA(r))})),r.J_}function as(r){return r.Y_||(r.Y_=function(n,s,o){const u=Ae(n);return u.M_(),new y2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:C2.bind(null,r),Lo:N2.bind(null,r),D_:D2.bind(null,r),v_:O2.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await zh(r)):(await r.Y_.stop(),r.K_.length>0&&(se(Zs,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Cp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dp(r,e){if(tr("AsyncQueue",`${e}: ${r}`),wo(r))return new oe(X.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=Ll(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.Z_=new nt(me.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ve():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class po{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new po(e,n,ao.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class P2{constructor(){this.queries=ME(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Ae(n),u=o.queries;o.queries=ME(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new oe(X.ABORTED,"Firestore shutting down"))}}function ME(){return new ra(r=>W0(r),fu)}async function x2(r,e){const n=Ae(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new V2,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Dp(f,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&Op(n)}async function k2(r,e){const n=Ae(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function U2(r,e){const n=Ae(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&Op(n)}function L2(r,e,n){const s=Ae(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(e)}function Op(r){r.ia.forEach(e=>{e.next()})}var jm,VE;(VE=jm||(jm={}))._a="default",VE.Cache="cache";class j2{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==jm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.key=e}}class VA{constructor(e){this.key=e}}class z2{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Me(),this.mutatedKeys=Me(),this.ya=Z0(e),this.wa=new ao(this.ya)}get ba(){return this.fa}Sa(e,n){const s=n?n.Da:new NE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const D=o.get(E),j=Ph(this.query,S)?S:null,F=!!D&&this.mutatedKeys.has(D.key),Z=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let K=!1;D&&j?D.data.isEqual(j.data)?F!==Z&&(s.track({type:3,doc:j}),K=!0):this.va(D,j)||(s.track({type:2,doc:j}),K=!0,(p&&this.ya(j,p)>0||y&&this.ya(j,y)<0)&&(m=!0)):!D&&j?(s.track({type:0,doc:j}),K=!0):D&&!j&&(s.track({type:1,doc:D}),K=!0,(p||y)&&(m=!0)),K&&(j?(f=f.add(j),u=Z?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,S)=>function(j,F){const Z=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return Z(j)-Z(F)}(E.type,S.type)||this.ya(E.doc,S.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new po(this.query,e.wa,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new NE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Me(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new VA(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new MA(s))}),n}Oa(e){this.fa=e.gs,this.pa=Me();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return po.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Np="SyncEngine";class B2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class q2{constructor(e){this.key=e,this.Ba=!1}}class H2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new ra(m=>W0(m),fu),this.qa=new Map,this.Qa=new Set,this.$a=new nt(me.comparator),this.Ka=new Map,this.Ua=new Ep,this.Wa={},this.Ga=new Map,this.za=mo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function F2(r,e,n=!0){const s=jA(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await PA(s,e,n,!0),o}async function G2(r,e){const n=jA(r);await PA(n,e,!0,!1)}async function PA(r,e,n,s){const o=await l2(r.localStore,gi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await K2(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&RA(r.remoteStore,o),m}async function K2(r,e,n,s,o){r.Ha=(S,D,j)=>async function(Z,K,te,ae){let ue=K.view.Sa(te);ue.ls&&(ue=await bE(Z.localStore,K.query,!1).then(({documents:P})=>K.view.Sa(P,ue)));const be=ae&&ae.targetChanges.get(K.targetId),pe=ae&&ae.targetMismatches.get(K.targetId)!=null,Oe=K.view.applyChanges(ue,Z.isPrimaryClient,be,pe);return xE(Z,K.targetId,Oe.Ma),Oe.snapshot}(r,S,D,j);const u=await bE(r.localStore,e,!0),f=new z2(e,u.gs),m=f.Sa(u.documents),p=mu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);xE(r,n,y.Ma);const E=new B2(e,n,f);return r.ka.set(e,E),r.qa.has(n)?r.qa.get(n).push(e):r.qa.set(n,[e]),y.snapshot}async function Q2(r,e,n){const s=Ae(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!fu(f,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Um(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&wp(s.remoteStore,o.targetId),zm(s,o.targetId)}).catch(So)):(zm(s,o.targetId),await Um(s.localStore,o.targetId,!0))}async function Y2(r,e){const n=Ae(r),s=n.ka.get(e),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),wp(n.remoteStore,s.targetId))}async function $2(r,e,n){const s=nM(r);try{const o=await function(f,m){const p=Ae(f),y=ft.now(),E=m.reduce((j,F)=>j.add(F.key),Me());let S,D;return p.persistence.runTransaction("Locally write mutations","readwrite",j=>{let F=nr(),Z=Me();return p.ds.getEntries(j,E).next(K=>{F=K,F.forEach((te,ae)=>{ae.isValidDocument()||(Z=Z.add(te))})}).next(()=>p.localDocuments.getOverlayedDocuments(j,F)).next(K=>{S=K;const te=[];for(const ae of m){const ue=oN(ae,S.get(ae.key).overlayedDocument);ue!=null&&te.push(new sa(ae.key,ue,H0(ue.value.mapValue),Zi.exists(!0)))}return p.mutationQueue.addMutationBatch(j,y,te,m)}).next(K=>{D=K;const te=K.applyToLocalDocumentSet(S,Z);return p.documentOverlayCache.saveOverlays(j,K.batchId,te)})}).then(()=>({batchId:D.batchId,changes:eA(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new nt(Pe)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,n),await gu(s,o.changes),await zh(s.remoteStore)}catch(o){const u=Dp(o,"Failed to persist write");n.reject(u)}}async function xA(r,e){const n=Ae(r);try{const s=await s2(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ge(f.Ba):o.removedDocuments.size>0&&(Ge(f.Ba),f.Ba=!1))}),await gu(n,s,e)}catch(s){await So(s)}}function PE(r,e,n){const s=Ae(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Ae(f);p.onlineState=m;let y=!1;p.queries.forEach((E,S)=>{for(const D of S.ta)D.sa(m)&&(y=!0)}),y&&Op(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function X2(r,e,n){const s=Ae(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ka.get(e),u=o&&o.key;if(u){let f=new nt(me.comparator);f=f.insert(u,$t.newNoDocument(u,Ee.min()));const m=Me().add(u),p=new Uh(Ee.min(),new Map,new nt(Pe),f,m);await xA(s,p),s.$a=s.$a.remove(u),s.Ka.delete(e),Mp(s)}else await Um(s.localStore,e,!1).then(()=>zm(s,e,n)).catch(So)}async function W2(r,e){const n=Ae(r),s=e.batch.batchId;try{const o=await r2(n.localStore,e);UA(n,s,null),kA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await gu(n,o)}catch(o){await So(o)}}async function Z2(r,e,n){const s=Ae(r);try{const o=await function(f,m){const p=Ae(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(S=>(Ge(S!==null),E=S.keys(),p.mutationQueue.removeMutationBatch(y,S))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);UA(s,e,n),kA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await gu(s,o)}catch(o){await So(o)}}function kA(r,e){(r.Ga.get(e)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(e)}function UA(r,e,n){const s=Ae(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function zm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(e),r.isPrimaryClient&&r.Ua.Sr(e).forEach(s=>{r.Ua.containsKey(s)||LA(r,s)})}function LA(r,e){r.Qa.delete(e.path.canonicalString());const n=r.$a.get(e);n!==null&&(wp(r.remoteStore,n),r.$a=r.$a.remove(e),r.Ka.delete(n),Mp(r))}function xE(r,e,n){for(const s of n)s instanceof MA?(r.Ua.addReference(s.key,e),J2(r,s)):s instanceof VA?(se(Np,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,e),r.Ua.containsKey(s.key)||LA(r,s.key)):ve()}function J2(r,e){const n=e.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(se(Np,"New document in limbo: "+n),r.Qa.add(s),Mp(r))}function Mp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const n=new me(Ze.fromString(e)),s=r.za.next();r.Ka.set(s,new q2(n)),r.$a=r.$a.insert(n,s),RA(r.remoteStore,new $r(gi(pp(n.path)),s,"TargetPurposeLimboResolution",Nh.ae))}}async function gu(r,e,n){const s=Ae(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,e,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=Ap.Yi(p.targetId,y);u.push(S)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const E=Ae(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>$.forEach(y,D=>$.forEach(D.Hi,j=>E.persistence.referenceDelegate.addReference(S,D.targetId,j)).next(()=>$.forEach(D.Ji,j=>E.persistence.referenceDelegate.removeReference(S,D.targetId,j)))))}catch(S){if(!wo(S))throw S;se(Sp,"Failed to update sequence numbers: "+S)}for(const S of y){const D=S.targetId;if(!S.fromCache){const j=E.Ts.get(D),F=j.snapshotVersion,Z=j.withLastLimboFreeSnapshotVersion(F);E.Ts=E.Ts.insert(D,Z)}}}(s.localStore,u))}async function eM(r,e){const n=Ae(r);if(!n.currentUser.isEqual(e)){se(Np,"User change. New user:",e.toKey());const s=await AA(n.localStore,e);n.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new oe(X.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await gu(n,s.Rs)}}function tM(r,e){const n=Ae(r),s=n.Ka.get(e);if(s&&s.Ba)return Me().add(s.key);{let o=Me();const u=n.qa.get(e);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.ba)}return o}}function jA(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X2.bind(null,e),e.La.p_=U2.bind(null,e.eventManager),e.La.Ja=L2.bind(null,e.eventManager),e}function nM(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z2.bind(null,e),e}class Eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return i2(this.persistence,new e2,e.initialUser,this.serializer)}Xa(e){return new TA(Tp.ri,this.serializer)}Za(e){return new c2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eh.provider={build:()=>new Eh};class iM extends Eh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ge(this.persistence.referenceDelegate instanceof _h);const s=this.persistence.referenceDelegate.garbageCollector;return new jN(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new TA(s=>_h.ri(s,n),this.serializer)}}class Bm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>PE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eM.bind(null,this.syncEngine),await M2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new P2}()}createDatastore(e){const n=Lh(e.databaseInfo.databaseId),s=function(u){return new p2(u)}(e.databaseInfo);return function(u,f,m,p){return new v2(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new T2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>PE(this.syncEngine,n,0),function(){return CE.D()?new CE:new h2}())}createSyncEngine(e,n){return function(o,u,f,m,p,y,E){const S=new H2(o,u,f,m,p,y);return E&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Ae(o);se(Zs,"RemoteStore shutting down."),u.W_.add(5),await pu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bm.provider={build:()=>new Bm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="FirestoreClient";class sM{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Yt.UNAUTHENTICATED,this.clientId=V0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{se(os,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(se(os,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Dp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hm(r,e){r.asyncQueue.verifyOperationInProgress(),se(os,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await AA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function kE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await aM(r);se(os,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>OE(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>OE(e.remoteStore,o)),r._onlineComponents=e}async function aM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(os,"Using user provided OfflineComponentProvider");try{await hm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;uo("Error using user provided cache. Falling back to memory cache: "+n),await hm(r,new Eh)}}else se(os,"Using default OfflineComponentProvider"),await hm(r,new iM(void 0));return r._offlineComponents}async function zA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(os,"Using user provided OnlineComponentProvider"),await kE(r,r._uninitializedComponentsProvider._online)):(se(os,"Using default OnlineComponentProvider"),await kE(r,new Bm))),r._onlineComponents}function oM(r){return zA(r).then(e=>e.syncEngine)}async function UE(r){const e=await zA(r),n=e.eventManager;return n.onListen=F2.bind(null,e.syncEngine),n.onUnlisten=Q2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=G2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Y2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(r,e,n){if(!n)throw new oe(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function lM(r,e,n,s){if(e===!0&&s===!0)throw new oe(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function jE(r){if(!me.isDocumentKey(r))throw new oe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function zE(r){if(me.isDocumentKey(r))throw new oe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Bh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve()}function Ql(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new oe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(r);throw new oe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="firestore.googleapis.com",BE=!0;class qE{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HA,this.ssl=BE}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:BE;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=EA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UN)throw new oe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new oe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new oe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new oe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new dO;switch(s.type){case"firstParty":return new yO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=LE.get(n);s&&(se("ComponentProvider","Removing Datastore"),LE.delete(n),s.terminate())}(this),Promise.resolve()}}function uM(r,e,n,s={}){var o;const u=(r=Ql(r,qh))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${e}:${n}`;u.host!==HA&&u.host!==m&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!ts(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Yt.MOCK_USER;else{y=aR(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new oe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Yt(S)}r._authCredentials=new mO(new M0(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class _n{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class es extends ir{constructor(e,n,s){super(e,n,pp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new me(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function Hh(r,e,...n){if(r=Et(r),qA("collection","path",e),r instanceof qh){const s=Ze.fromString(e,...n);return zE(s),new es(r,null,s)}{if(!(r instanceof _n||r instanceof es))throw new oe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return zE(s),new es(r.firestore,null,s)}}function cM(r,e,...n){if(r=Et(r),arguments.length===1&&(e=V0.newId()),qA("doc","path",e),r instanceof qh){const s=Ze.fromString(e,...n);return jE(s),new _n(r,null,new me(s))}{if(!(r instanceof _n||r instanceof es))throw new oe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return jE(s),new _n(r.firestore,r instanceof es?r.converter:null,new me(s))}}function hM(r,e){return r=Et(r),e=Et(e),r instanceof ir&&e instanceof ir&&r.firestore===e.firestore&&fu(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="AsyncQueue";class FE{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new wA(this,"async_queue_retry"),this.bu=()=>{const s=cm();s&&se(HE,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const n=cm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=cm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ks;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wo(e))throw e;se(HE,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw tr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const o=Cp.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&ve()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function GE(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Th extends qh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new FE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new FE(e),this._firestoreClient=void 0,await e}}}function fM(r,e){const n=typeof r=="object"?r:Ym(),s=typeof r=="string"?r:dh,o=ta(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=rR("firestore");u&&uM(o,...u)}return o}function FA(r){if(r._terminated)throw new oe(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dM(r),r._firestoreClient}function dM(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new NO(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,BA(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new sM(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Ht.fromBase64String(e))}catch(n){throw new oe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=/^__.*__$/;class pM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new sa(e,this.data,this.fieldMask,n,this.fieldTransforms):new du(e,this.data,n,this.fieldTransforms)}}function GA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class Up{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Up(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ah(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(GA(this.Lu)&&mM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class gM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Lh(e)}ju(e,n,s,o=!1){return new Up({Lu:e,methodName:n,zu:s,path:qt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KA(r){const e=r._freezeSettings(),n=Lh(r._databaseId);return new gM(r._databaseId,!!e.ignoreUndefinedProperties,n)}function yM(r,e,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,e,n,o);$A("Data must be an object, but it was:",f,s);const m=QA(s,f);let p,y;if(u.merge)p=new Gn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const D=vM(e,S,n);if(!f.contains(D))throw new oe(X.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);TM(E,D)||E.push(D)}p=new Gn(E),y=f.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,y=f.fieldTransforms;return new pM(new Un(m),p,y)}class Lp extends Pp{_toFieldTransform(e){return new iN(e.path,new ru)}isEqual(e){return e instanceof Lp}}function _M(r,e,n,s=!1){return jp(n,r.ju(s?4:3,e))}function jp(r,e){if(YA(r=Et(r)))return $A("Unsupported field value:",e,r),QA(r,e);if(r instanceof Pp)return function(s,o){if(!GA(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=jp(m,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return eN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:yh(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:yh(o.serializer,u)}}if(s instanceof xp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof go)return{bytesValue:dA(o.serializer,s._byteString)};if(s instanceof _n){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:vp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof kp)return function(f,m){return{mapValue:{fields:{[B0]:{stringValue:q0},[mh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return gp(m.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Bh(s)}`)}(r,e)}function QA(r,e){const n={};return x0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ia(r,(s,o)=>{const u=jp(o,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function YA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ft||r instanceof xp||r instanceof go||r instanceof _n||r instanceof Pp||r instanceof kp)}function $A(r,e,n){if(!YA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Bh(n);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function vM(r,e,n){if((e=Et(e))instanceof Vp)return e._internalPath;if(typeof e=="string")return XA(r,e);throw Ah("Field path arguments must be of type string or ",r,!1,void 0,n)}const EM=new RegExp("[~\\*/\\[\\]]");function XA(r,e,n){if(e.search(EM)>=0)throw Ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Vp(...e.split("."))._internalPath}catch{throw Ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Ah(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new oe(X.INVALID_ARGUMENT,m+r+p)}function TM(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AM extends WA{data(){return super.data()}}function Fh(r,e){return typeof e=="string"?XA(r,e):e instanceof Vp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new oe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zp{}class ZA extends zp{}function JA(r,e,...n){let s=[];e instanceof zp&&s.push(e),s=s.concat(n),function(u){const f=u.filter(p=>p instanceof Io).length,m=u.filter(p=>p instanceof yu).length;if(f>1||f>0&&m>0)throw new oe(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class yu extends ZA{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yu(e,n,s)}_apply(e){const n=this._parse(e);return nS(e._query,n),new ir(e.firestore,e.converter,Nm(e._query,n))}_parse(e){const n=KA(e.firestore);return function(u,f,m,p,y,E,S){let D;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new oe(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){QE(S,E);const F=[];for(const Z of S)F.push(KE(p,u,Z));D={arrayValue:{values:F}}}else D=KE(p,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||QE(S,E),D=_M(m,f,S,E==="in"||E==="not-in");return vt.create(y,E,D)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qi(r,e,n){const s=e,o=Fh("where",r);return yu._create(o,s,n)}class Io extends zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Io(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)nS(f,p),f=Nm(f,p)}(e._query,n),new ir(e.firestore,e.converter,Nm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function eS(...r){return r.forEach(e=>iS("or",e)),Io._create("or",r)}function Gc(...r){return r.forEach(e=>iS("and",e)),Io._create("and",r)}class Bp extends ZA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bp(e,n)}_apply(e){const n=function(o,u,f){if(o.startAt!==null)throw new oe(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new oe(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new iu(u,f)}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new bo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,n))}}function tS(r,e="asc"){const n=e,s=Fh("orderBy",r);return Bp._create(s,n)}function KE(r,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new oe(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X0(e)&&n.indexOf("/")!==-1)throw new oe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ze.fromString(n));if(!me.isDocumentKey(s))throw new oe(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return aE(r,new me(s))}if(n instanceof _n)return aE(r,n._key);throw new oe(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(n)}.`)}function QE(r,e){if(!Array.isArray(r)||r.length===0)throw new oe(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nS(r,e){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new oe(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function iS(r,e){if(!(e instanceof yu||e instanceof Io))throw new oe(X.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class wM{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ia(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[mh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ct(f.doubleValue));return new kp(u)}convertGeoPoint(e){return new xp(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(eu(e));default:return null}}convertTimestamp(e){const n=is(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);Ge(vA(s));const o=new tu(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(n)||tr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rS extends WA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class th extends rS{data(e={}){return super.data(e)}}class RM{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new zl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new th(this._firestore,this._userDataWriter,s.key,s,new zl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new th(o._firestore,o._userDataWriter,m.doc.key,m.doc,new zl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new th(o._firestore,o._userDataWriter,m.doc.key,m.doc,new zl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:IM(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IM(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class sS extends wM{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function aS(r,e){const n=Ql(r.firestore,Th),s=cM(r),o=bM(r.converter,e);return DM(n,[yM(KA(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Zi.exists(!1))]).then(()=>s)}function CM(r,...e){var n,s,o;r=Et(r);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof e[f]!="object"||GE(e[f])||(u=e[f],f++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(GE(e[f])){const S=e[f];e[f]=(n=S.next)===null||n===void 0?void 0:n.bind(S),e[f+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[f+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let p,y,E;if(r instanceof _n)y=Ql(r.firestore,Th),E=pp(r._key.path),p={next:S=>{e[f]&&e[f](OM(y,r,S))},error:e[f+1],complete:e[f+2]};else{const S=Ql(r,ir);y=Ql(S.firestore,Th),E=S._query;const D=new sS(y);p={next:j=>{e[f]&&e[f](new RM(y,D,S,j))},error:e[f+1],complete:e[f+2]},SM(r._query)}return function(D,j,F,Z){const K=new rM(Z),te=new j2(j,K,F);return D.asyncQueue.enqueueAndForget(async()=>x2(await UE(D),te)),()=>{K.su(),D.asyncQueue.enqueueAndForget(async()=>k2(await UE(D),te))}}(FA(y),E,m,p)}function DM(r,e){return function(s,o){const u=new Ks;return s.asyncQueue.enqueueAndForget(async()=>$2(await oM(s),o,u)),u.promise}(FA(r),e)}function OM(r,e,n){const s=n.docs.get(e._key),o=new sS(r);return new rS(r,o,e._key,s,new zl(n.hasPendingWrites,n.fromCache),e.converter)}function oS(){return new Lp("serverTimestamp")}(function(e,n=!0){(function(o){Ao=o})(Eo),_i(new Kn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Th(new pO(s.getProvider("auth-internal")),new _O(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new oe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tu(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Ln($v,Xv,e),Ln($v,Xv,"esm2017")})();const NM={apiKey:"AIzaSyAVJQiENUGpGEejGTyw6ATL-CwCv-YNPjU",authDomain:"cameron-lim-community.firebaseapp.com",projectId:"cameron-lim-community",storageBucket:"cameron-lim-community.firebasestorage.app",messagingSenderId:"416527574703",appId:"1:416527574703:web:6a36d0ae695f48d36c565a",measurementId:"G-D1DJYVEEE7"},qp=vT(NM);$C(qp);const Js=hO(qp),Gh=fM(qp),lS=Y.createContext();function MM({children:r}){const[e,n]=Y.useState(null),[s,o]=Y.useState(!0);$n();const u=async m=>{try{return await Z1(Js.currentUser,{displayName:m}),!0}catch(p){throw console.error("Error updating username:",p),p}};Y.useEffect(()=>Js.onAuthStateChanged(p=>{n(p),o(!1)}),[]);const f={currentUser:e,loading:s,updateUsername:u};return z.jsxs(lS.Provider,{value:f,children:[r," "]})}function cs(){const r=Y.useContext(lS);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r}const VM=()=>{const[r,e]=Y.useState(""),[n,s]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(!1),p=$n(),y=async E=>{E.preventDefault(),m(!0);try{(await X1(Js,r,n)).user.email.toLowerCase()==="cameronlimhwa@gmail.com"?p("/admin"):p("/user")}catch(S){u(S.message)}finally{m(!1)}};return z.jsx("div",{className:"auth-container",children:z.jsxs("div",{className:"auth-card",children:[z.jsx("h2",{children:"Sign In"}),o&&z.jsx("div",{className:"error-message",children:o}),z.jsxs("form",{onSubmit:y,children:[z.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:E=>e(E.target.value),required:!0}),z.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:E=>s(E.target.value),required:!0}),z.jsx("button",{type:"submit",disabled:f,children:f?"Signing In...":"Sign In"})]}),z.jsxs("div",{className:"auth-links",children:[z.jsx(Xl,{to:"/createaccount",children:"Create New Account"}),z.jsx(Xl,{to:"/forgot-password",children:"Forgot Password?"})]})]})})},PM=()=>{const{currentUser:r,loading:e,updateUsername:n}=cs(),[s,o]=Y.useState(!1),[u,f]=Y.useState(""),[m,p]=Y.useState(""),y=$n();console.log("[UserDashboard] Auth state:",{currentUser:r==null?void 0:r.uid,loading:e});const E=()=>{y("chat")},S=async()=>{try{await p0(Js),console.log("[UserDashboard] Signed out successfully"),y("/")}catch(F){console.error("[UserDashboard] Sign out error:",F)}};if(e)return z.jsx("div",{className:"loading-message",children:"Checking authentication status..."});if(!r)return console.log("[UserDashboard] No user - redirecting to signin"),null;const D=()=>{o(!0),f(r.displayName||"")},j=async F=>{F.preventDefault(),p("");try{await n(u),o(!1)}catch(Z){p("Failed to update username: "+Z.message)}};return z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"dashboard-banner",children:[z.jsxs("div",{className:"banner-left",children:["Welcome",r.displayName?`, ${r.displayName}!`:"! Please set your profile!"]}),z.jsxs("div",{className:"banner-right",children:[z.jsx("button",{className:"dashboard-button",onClick:D,children:"Profile"}),z.jsx("button",{className:"dashboard-button sign-out",onClick:S,children:"Sign Out"})]})]}),z.jsxs("div",{className:"dashboard",children:[s&&z.jsx("div",{className:"modal-backdrop",children:z.jsx("div",{className:"profile-modal",children:z.jsxs("form",{onSubmit:j,children:[z.jsx("h3",{children:"Edit Profile"}),z.jsx("h4",{className:"username-label",children:"Username:"}),z.jsx("input",{type:"text",value:u,onChange:F=>f(F.target.value),placeholder:"Enter new username"}),m&&z.jsx("div",{className:"error-message",children:m}),z.jsxs("div",{className:"modal-buttons",children:[z.jsx("button",{type:"submit",className:"dashboard-button",children:"Save"}),z.jsx("button",{type:"button",className:"dashboard-button cancel",onClick:()=>o(!1),children:"Cancel"})]})]})})}),z.jsx("h2",{children:"Your Contacts:"}),z.jsx("div",{className:"vertAlign",children:z.jsx("button",{className:"dashboard-button",onClick:E,"data-testid":"chat-button",children:"Cameron Lim"})})]})]})},xM=()=>{const r=$n(),e=async()=>{try{await p0(Js)}catch(n){console.error("Sign out error:",n)}};return Y.useEffect(()=>{var n;((n=Js.currentUser)==null?void 0:n.email)!=="cameronlimhwa@gmail.com"&&r("/user")},[r]),z.jsxs("div",{className:"dashboard",children:[z.jsx("h1",{children:"Admin Dashboard"}),z.jsx("p",{children:"Welcome Cameron! (Admin View)"}),z.jsxs("div",{className:"vertAlign",children:[z.jsx("button",{className:"dashboard-button",onClick:()=>r("/admin/chat"),children:"Open Admin Chat"}),z.jsx("button",{className:"dashboard-button",onClick:e,children:"Sign Out"})]})]})},kM=()=>{const{currentUser:r,loading:e}=cs();return console.log("[PrivateRoute] Auth state:",{currentUser:r==null?void 0:r.uid,loading:e}),e?z.jsxs("div",{className:"loading-overlay",children:[z.jsx("div",{className:"loader"}),z.jsx("p",{children:"Verifying authentication..."})]}):r?location.pathname.startsWith("/admin")?r.email.toLowerCase()==="cameronlimhwa@gmail.com"?z.jsx(dm,{}):z.jsx(av,{to:"/user",replace:!0}):z.jsx(dm,{}):z.jsx(av,{to:"/signin",replace:!0})},UM=()=>{const[r,e]=Y.useState(""),[n,s]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(""),[p,y]=Y.useState(!1),E=$n(),S=async D=>{if(D.preventDefault(),n!==o)return m("Passwords do not match");y(!0);try{await $1(Js,r,n),E("/user")}catch(j){m(j.message),y(!1)}};return z.jsx("div",{className:"auth-container",children:z.jsxs("div",{className:"auth-card",children:[z.jsx("h2",{children:"Join Cameron's Community"}),f&&z.jsx("div",{className:"error-message",children:f}),z.jsxs("form",{onSubmit:S,children:[z.jsxs("div",{className:"input-group",children:[z.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:D=>e(D.target.value),required:!0}),z.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:D=>s(D.target.value),minLength:"6",required:!0}),z.jsx("input",{type:"password",placeholder:"Confirm password",value:o,onChange:D=>u(D.target.value),required:!0})]}),z.jsx("button",{type:"submit",className:"auth-button",disabled:p,children:p?"Creating Account...":"Create Account"})]}),z.jsxs("div",{className:"auth-links",children:[z.jsx("span",{children:"Already have an account? "}),z.jsx(Xl,{to:"/signin",children:"Sign In"})]})]})})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var no=function(){return no=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},no.apply(this,arguments)},uS=function(r){return{loading:r==null,value:r}},LM=function(){return function(r,e){switch(e.type){case"error":return no(no({},r),{error:e.error,loading:!1,value:void 0});case"reset":return uS(e.defaultValue);case"value":return no(no({},r),{error:void 0,loading:!1,value:e.value});default:return r}}},jM=function(r){var e=void 0,n=Y.useReducer(LM(),uS(e)),s=n[0],o=n[1],u=Y.useCallback(function(){var p=void 0;o({type:"reset",defaultValue:p})},[r]),f=Y.useCallback(function(p){o({type:"error",error:p})},[]),m=Y.useCallback(function(p){o({type:"value",value:p})},[]);return Y.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])},zM=function(r,e,n){var s=Y.useRef(r);return Y.useEffect(function(){e(r,s.current)||(s.current=r,n&&n())}),s},BM=function(r,e){var n=!r&&!e,s=!!r&&!!e&&hM(r,e);return n||s},qM=function(r,e){return zM(r,BM,e)},HM=function(r,e){var n=jM(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,p=n.value,y=qM(r,u);return Y.useEffect(function(){if(!y.current){m(void 0);return}var E=CM(y.current,m,f);return function(){E()}},[y.current]),[p,o,s]},cS=function(r,e){var n=HM(r),s=n[0],o=n[1],u=n[2],f=FM(s,void 0,void 0);return[f,o,u,s]},FM=function(r,e,n){return Y.useMemo(function(){var s;return(s=r==null?void 0:r.docs.map(function(o){return o.data(e)}))!==null&&s!==void 0?s:n},[r,e])};function GM({filterUserId:r,adminUid:e}){var j;const{currentUser:n}=cs(),s=Hh(Gh,"messages"),o=Y.useRef(null),u=Y.useRef(null),f=(j=n==null?void 0:n.metadata)==null?void 0:j.creationTime,m=f?ft.fromDate(new Date(f)):ft.now(),p=JA(s,Gc(eS(Gc(Qi("senderId","==",r),Qi("receiverId","==",e)),Gc(Qi("senderId","==",e),Qi("receiverId","==",r)),Gc(Qi("senderId","==",e),Qi("receiverId","==","broadcast"))),Qi("timestamp",">=",m)),tS("timestamp","asc")),[y,E,S]=cS(p),D=()=>{var F;(F=o.current)==null||F.scrollIntoView({behavior:"smooth"})};return Y.useEffect(()=>{S&&(console.error("Firestore Error:",S),console.log("Current User UID:",n==null?void 0:n.uid))},[S]),Y.useEffect(()=>{D()},[y]),Y.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[]),E?z.jsx("div",{children:"Loading messages..."}):S?z.jsxs("div",{children:["Error loading messages: ",S.message]}):z.jsx("div",{className:"messages-container",ref:u,children:z.jsxs("div",{className:"message-list",children:[(y==null?void 0:y.length)===0?z.jsx("div",{children:"No messages yet. Start the conversation!"}):y==null?void 0:y.map(F=>{var Z;return z.jsxs("div",{className:`message ${F.senderId===(n==null?void 0:n.uid)?"sent":"received"}`,children:[F.receiverId==="broadcast"&&z.jsx("div",{className:"broadcast-badge",children:"From 🧋:"}),z.jsx("div",{className:"message-content",children:F.content}),z.jsx("div",{className:"message-time",children:(Z=F.timestamp)==null?void 0:Z.toDate().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})})]},F.id)}),z.jsx("div",{ref:o})]})})}function KM(){const{currentUser:r}=cs(),e="Ie35osxKxPMkroz5M6jvAe2Suhf2",[n,s]=Y.useState(""),[o,u]=Y.useState(0),f=async m=>{if(m.preventDefault(),!(!r||n.trim()===""||o>=3))try{const p=r.uid===e;await aS(Hh(Gh,"messages"),{senderId:r.uid,receiverId:p?"broadcast":e,content:n,timestamp:oS(),read:!1,type:"text",isBroadcast:p}),u(y=>y+1),s("")}catch(p){console.error("Error sending message:",p)}};return z.jsx("div",{className:"message-input",children:z.jsxs("form",{onSubmit:f,children:[z.jsx("input",{value:n,onChange:m=>s(m.target.value),maxLength:100,placeholder:(r==null?void 0:r.uid)===e?"Type broadcast message...":"Type your message...",disabled:o>=3}),z.jsxs("button",{type:"submit",disabled:o>=3,className:"send-button",children:[(r==null?void 0:r.uid)===e?"Broadcast":"Send","(",3-o," left)"]})]})})}const QM=()=>{const{currentUser:r}=cs(),e=$n();return z.jsxs("div",{className:"chat-container",children:[z.jsx("header",{className:"chat-header",children:z.jsxs("div",{className:"chat-info",children:[z.jsx("h1",{className:"chat-title",children:"Chat with Cameron"}),z.jsxs("div",{className:"message-counter",children:["Messages remaining: ",3-((r==null?void 0:r.messageCount)||0)]})]})}),z.jsx("main",{className:"chat-main",children:r?z.jsxs(z.Fragment,{children:[z.jsx(GM,{filterUserId:r.uid,adminUid:"Ie35osxKxPMkroz5M6jvAe2Suhf2"}),z.jsx("div",{className:"input-container",children:z.jsx(KM,{})})]}):z.jsx("div",{className:"loading-chat",children:"Loading chat session..."})}),z.jsx("button",{className:"back-button",onClick:()=>e("/user"),children:"← Return to Dashboard"})]})},YM=Y.createContext();function $M({children:r}){const[e,n]=Y.useState(0),[s,o]=Y.useState(null);return z.jsx(YM.Provider,{value:{messageCount:e,setMessageCount:n,selectedUser:s,setSelectedUser:o},children:r})}function XM(){const{currentUser:r}=cs(),e=Hh(Gh,"messages"),n=Y.useRef(null),s=Y.useRef(null),o=JA(e,eS(Qi("receiverId","==",r==null?void 0:r.uid),Qi("senderId","==",r==null?void 0:r.uid)),tS("timestamp","asc")),[u,f,m]=cS(o),p=()=>{var y;(y=n.current)==null||y.scrollIntoView({behavior:"smooth"})};return Y.useEffect(()=>{p()},[u]),Y.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[]),f?z.jsx("div",{children:"Loading messages..."}):m?z.jsxs("div",{children:["Error loading messages: ",m.message]}):z.jsx("div",{className:"messages-container",ref:s,children:z.jsxs("div",{className:"message-list",children:[(u==null?void 0:u.length)===0?z.jsx("div",{className:"no-messages",children:"No messages yet. Start chatting!"}):u==null?void 0:u.map(y=>{var E;return z.jsxs("div",{className:`message ${y.senderId===(r==null?void 0:r.uid)?"sent":"received"}`,children:[z.jsx("div",{className:"message-content",children:y.content}),z.jsx("div",{className:"message-time",children:(E=y.timestamp)==null?void 0:E.toDate().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})})]},y.id)}),z.jsx("div",{ref:n})]})})}function WM(){const{currentUser:r}=cs(),[e,n]=Y.useState(""),s=async o=>{if(o.preventDefault(),!(!r||e.trim()===""))try{await aS(Hh(Gh,"messages"),{senderId:r.uid,receiverId:"broadcast",content:e,timestamp:oS(),read:!1,type:"text",isBroadcast:!0}),n("")}catch(u){console.error("Error sending message:",u)}};return z.jsx("div",{className:"message-input",children:z.jsxs("form",{onSubmit:s,children:[z.jsx("input",{value:e,onChange:o=>n(o.target.value),maxLength:100,placeholder:"Type broadcast message..."}),z.jsx("button",{type:"submit",className:"send-button",children:"Broadcast"})]})})}const ZM=()=>{const{currentUser:r}=cs(),e=$n();return z.jsxs("div",{className:"chat-container",children:[z.jsx("header",{className:"chat-header",children:z.jsxs("div",{className:"chat-info",children:[z.jsx("h1",{className:"chat-title",children:"Admin Chat Console"}),z.jsx("div",{className:"message-counter",children:r?`Logged in as ${r.email}`:"Loading..."})]})}),z.jsx("main",{className:"chat-main",children:r?z.jsxs(z.Fragment,{children:[z.jsx(XM,{filterUserId:r.uid,adminUid:r.uid}),z.jsx("div",{className:"input-container",children:z.jsx(WM,{})})]}):z.jsx("div",{className:"loading-chat",children:"Loading admin session..."})}),z.jsx("button",{className:"back-button",onClick:()=>e("/admin"),children:"← Return to Dashboard"})]})},Hp="/CameronLim-Fan-Website/",JM=()=>z.jsxs(z.Fragment,{children:[z.jsxs("header",{children:[z.jsx("h1",{children:"Cameron Lim's Online Cafe"}),z.jsx("div",{style:oo.subtitleContainer,children:z.jsx("h2",{children:"Chat with Cameron Lim and his community :) 🖥️ 💬"})})]}),z.jsx(dm,{})]}),eV=({children:r})=>{const e=vo(),n=$n();return Y.useEffect(()=>{try{decodeURIComponent(e.pathname)}catch{n(Hp,{replace:!0})}},[e.pathname,n]),r},tV=()=>z.jsx(Kb,{basename:Hp,children:z.jsx(MM,{children:z.jsx($M,{children:z.jsx(eV,{children:z.jsx("div",{style:oo.container,children:z.jsx("div",{style:oo.contentContainer,children:z.jsxs(jb,{children:[z.jsxs(gn,{element:z.jsx(JM,{}),children:[z.jsx(gn,{path:"/",element:z.jsx(nV,{})}),z.jsx(gn,{path:"/signin",element:z.jsx(VM,{})}),z.jsx(gn,{path:"/createaccount",element:z.jsx(UM,{})})]}),z.jsxs(gn,{element:z.jsx(kM,{}),children:[z.jsxs(gn,{path:"/user",children:[z.jsx(gn,{index:!0,element:z.jsx(PM,{})}),z.jsx(gn,{path:"chat",element:z.jsx(QM,{})})]}),z.jsxs(gn,{path:"/admin",children:[z.jsx(gn,{index:!0,element:z.jsx(xM,{})}),z.jsx(gn,{path:"chat",element:z.jsx(ZM,{})})]})]}),z.jsx(gn,{path:"*",element:z.jsx(iV,{})})]})})})})})})}),nV=()=>z.jsxs("div",{style:oo.buttonContainer,children:[z.jsx(Xl,{to:"/signin",style:oo.button,children:"Sign In"}),z.jsx(Xl,{to:"/createaccount",style:oo.button,children:"Create Account"})]}),iV=()=>{const r=$n();return Y.useEffect(()=>r(Hp),[r]),null},oo={container:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",minHeight:"100vh",padding:"10px",backgroundColor:"#ffffff"},subtitleContainer:{marginTop:"-10px",textAlign:"center",color:"#666"},buttonContainer:{display:"flex",flexDirection:"column",gap:"15px",marginTop:"30px"},button:{padding:"15px 30px",fontSize:"1.1rem",backgroundColor:"#5db1ff",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",transition:"transform 0.2s, background-color 0.2s",width:"220px",textDecoration:"none",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",":hover":{backgroundColor:"#21867a",transform:"scale(1.05)"}},contentContainer:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",flexDirection:"column"}};Kw.createRoot(document.getElementById("root")).render(z.jsx($E.StrictMode,{children:z.jsx(tV,{})}));
