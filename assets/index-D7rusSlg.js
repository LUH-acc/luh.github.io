import{d as e,h as t,o as n,r,c as o,a as s,F as i,b as a,u as c,g as u,t as l,_ as f}from"./index-BpSucwqX.js";const d=[{name:"user1",age:20,sex:1,userId:1},{name:"user1",age:20,sex:1,userId:2},{name:"user2",age:20,sex:1,userId:3},{name:"user3",age:20,sex:1,userId:4},{name:"user4",age:20,sex:1,userId:5},{name:"user5",age:20,sex:1,userId:6},{name:"user6",age:20,sex:1,userId:7}];function h(e,t){return function(){return e.apply(t,arguments)}}const{toString:p}=Object.prototype,{getPrototypeOf:m}=Object,y=(e=>t=>{const n=p.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>y(t)===e),b=e=>t=>typeof t===e,{isArray:w}=Array,E=b("undefined");const O=g("ArrayBuffer");const R=b("string"),S=b("function"),T=b("number"),A=e=>null!==e&&"object"==typeof e,x=e=>{if("object"!==y(e))return!1;const t=m(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},v=g("Date"),C=g("File"),j=g("Blob"),N=g("FileList"),P=g("URLSearchParams"),[_,F,L,U]=["ReadableStream","Request","Response","Headers"].map(g);function B(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),w(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,q=e=>!E(e)&&e!==k;const I=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&m(Uint8Array)),M=g("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),H=g("RegExp"),J=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},W="abcdefghijklmnopqrstuvwxyz",K="0123456789",V={DIGIT:K,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+K};const $=g("AsyncFunction"),G={isArray:w,isArrayBuffer:O,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||S(e.append)&&("formdata"===(t=y(e))||"object"===t&&S(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&O(e.buffer),t},isString:R,isNumber:T,isBoolean:e=>!0===e||!1===e,isObject:A,isPlainObject:x,isReadableStream:_,isRequest:F,isResponse:L,isHeaders:U,isUndefined:E,isDate:v,isFile:C,isBlob:j,isRegExp:H,isFunction:S,isStream:e=>A(e)&&S(e.pipe),isURLSearchParams:P,isTypedArray:I,isFileList:N,forEach:B,merge:function e(){const{caseless:t}=q(this)&&this||{},n={},r=(r,o)=>{const s=t&&D(n,o)||o;x(n[s])&&x(r)?n[s]=e(n[s],r):x(r)?n[s]=e({},r):w(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&B(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(B(t,((t,r)=>{n&&S(t)?e[r]=h(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&m(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:y,kindOfTest:g,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(w(e))return e;let t=e.length;if(!T(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:M,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:J,freezeMethods:e=>{J(e,((t,n)=>{if(S(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];S(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return w(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:D,global:k,isContextDefined:q,ALPHABET:V,generateString:(e=16,t=V.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&S(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(A(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=w(e)?[]:{};return B(e,((e,t)=>{const s=n(e,r+1);!E(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:$,isThenable:e=>e&&(A(e)||S(e))&&S(e.then)&&S(e.catch)};function X(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}G.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q=X.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Z[e]={value:e}})),Object.defineProperties(X,Z),Object.defineProperty(Q,"isAxiosError",{value:!0}),X.from=(e,t,n,r,o,s)=>{const i=Object.create(Q);return G.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),X.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function Y(e){return G.isPlainObject(e)||G.isArray(e)}function ee(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function te(e,t,n){return e?e.concat(t).map((function(e,t){return e=ee(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ne=G.toFlatObject(G,{},null,(function(e){return/^is[A-Z]/.test(e)}));function re(e,t,n){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!G.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(G.isDate(e))return e.toISOString();if(!a&&G.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(e)||G.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(G.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(G.isArray(e)&&function(e){return G.isArray(e)&&!e.some(Y)}(e)||(G.isFileList(e)||G.endsWith(n,"[]"))&&(a=G.toArray(e)))return n=ee(n),a.forEach((function(e,r){!G.isUndefined(e)&&null!==e&&t.append(!0===i?te([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!Y(e)||(t.append(te(o,n,s),c(e)),!1)}const l=[],f=Object.assign(ne,{defaultVisitor:u,convertValue:c,isVisitable:Y});if(!G.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!G.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),G.forEach(n,(function(n,s){!0===(!(G.isUndefined(n)||null===n)&&o.call(t,n,G.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function se(e,t){this._pairs=[],e&&re(e,this,t)}const ie=se.prototype;function ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ce(e,t,n){if(!t)return e;const r=n&&n.encode||ae,o=n&&n.serialize;let s;if(s=o?o(t,n):G.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}ie.append=function(e,t){this._pairs.push([e,t])},ie.toString=function(e){const t=e?function(t){return e.call(this,t,oe)}:oe;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class ue{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:se,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},de="undefined"!=typeof window&&"undefined"!=typeof document,he=(pe="undefined"!=typeof navigator&&navigator.product,de&&["ReactNative","NativeScript","NS"].indexOf(pe)<0);var pe;const me="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ye=de&&window.location.href||"http://localhost",ge={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:de,hasStandardBrowserEnv:he,hasStandardBrowserWebWorkerEnv:me,origin:ye},Symbol.toStringTag,{value:"Module"})),...fe};function be(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&G.isArray(r)?r.length:s,a)return G.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&G.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&G.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(G.isFormData(e)&&G.isFunction(e.entries)){const n={};return G.forEachEntry(e,((e,r)=>{t(function(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const we={transitional:le,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=G.isObject(e);o&&G.isHTMLForm(e)&&(e=new FormData(e));if(G.isFormData(e))return r?JSON.stringify(be(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return re(e,new ge.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ge.isNode&&G.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=G.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return re(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||we.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw X.from(o,X.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],(e=>{we.headers[e]={}}));const Ee=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oe=Symbol("internals");function Re(e){return e&&String(e).trim().toLowerCase()}function Se(e){return!1===e||null==e?e:G.isArray(e)?e.map(Se):String(e)}function Te(e,t,n,r,o){return G.isFunction(r)?r.call(this,t,n):(o&&(t=n),G.isString(t)?G.isString(r)?-1!==t.indexOf(r):G.isRegExp(r)?r.test(t):void 0:void 0)}class Ae{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Re(t);if(!o)throw new Error("header name must be a non-empty string");const s=G.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Se(e))}const s=(e,t)=>G.forEach(e,((e,n)=>o(e,n,t)));if(G.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(G.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ee[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(G.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=Re(e)){const n=G.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(G.isFunction(t))return t.call(this,e,n);if(G.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Re(e)){const n=G.findKey(this,e);return!(!n||void 0===this[n]||t&&!Te(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Re(e)){const o=G.findKey(n,e);!o||t&&!Te(0,n[o],o,t)||(delete n[o],r=!0)}}return G.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Te(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return G.forEach(this,((r,o)=>{const s=G.findKey(n,o);if(s)return t[s]=Se(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Se(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&G.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Oe]=this[Oe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Re(e);t[r]||(!function(e,t){const n=G.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return G.isArray(e)?e.forEach(r):r(e),this}}function xe(e,t){const n=this||we,r=t||n,o=Ae.from(r.headers);let s=r.data;return G.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ve(e){return!(!e||!e.__CANCEL__)}function Ce(e,t,n){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,n),this.name="CanceledError"}function je(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}Ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),G.reduceDescriptors(Ae.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),G.freezeMethods(Ae),G.inherits(Ce,X,{__CANCEL__:!0});const Ne=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,s=Date.now();if(t||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(s-n)))}}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i};u[t?"download":"upload"]=!0,e(u)}),n)},Pe=ge.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=G.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),_e=ge.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];G.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),G.isString(r)&&i.push("path="+r),G.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Fe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=e=>e instanceof Ae?{...e}:e;function Ue(e,t){t=t||{};const n={};function r(e,t,n){return G.isPlainObject(e)&&G.isPlainObject(t)?G.merge.call({caseless:n},e,t):G.isPlainObject(t)?G.merge({},t):G.isArray(t)?t.slice():t}function o(e,t,n){return G.isUndefined(t)?G.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!G.isUndefined(t))return r(void 0,t)}function i(e,t){return G.isUndefined(t)?G.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Le(e),Le(t),!0)};return G.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);G.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Be=e=>{const t=Ue({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Ae.from(a),t.url=ce(Fe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),G.isFormData(r))if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(ge.hasStandardBrowserEnv&&(o&&G.isFunction(o)&&(o=o(t)),o||!1!==o&&Pe(t.url))){const e=s&&i&&_e.read(i);e&&a.set(s,e)}return t},De="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Be(e);let o=r.data;const s=Ae.from(r.headers).normalize();let i,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let u=new XMLHttpRequest;function l(){if(!u)return;const r=Ae.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());je((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new X("Request aborted",X.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new X("Network Error",X.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||le;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new X(e,t.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,r,u)),u=null},void 0===o&&s.setContentType(null),"setRequestHeader"in u&&G.forEach(s.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),G.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&"json"!==a&&(u.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&u.addEventListener("progress",Ne(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Ne(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=t=>{u&&(n(!t||t.type?new Ce(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);f&&-1===ge.protocols.indexOf(f)?n(new X("Unsupported protocol "+f+":",X.ERR_BAD_REQUEST,e)):u.send(o||null)}))},ke=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof X?t:new Ce(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new X(`timeout ${t} of ms exceeded`,X.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},qe=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Ie=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*qe(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await s.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(i+=a),e.enqueue(new Uint8Array(o))},cancel:e=>(r(e),s.return())},{highWaterMark:2})},Me=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},ze="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,He=ze&&"function"==typeof ReadableStream,Je=ze&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),We=He&&(()=>{let e=!1;const t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ke=He&&!!(()=>{try{return G.isReadableStream(new Response("").body)}catch(e){}})(),Ve={stream:Ke&&(e=>e.body)};var $e;ze&&($e=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Ve[e]&&(Ve[e]=G.isFunction($e[e])?t=>t[e]():(t,n)=>{throw new X(`Response type '${e}' is not supported`,X.ERR_NOT_SUPPORT,n)})})));const Ge=async(e,t)=>{const n=G.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:G.isBlob(e)?e.size:G.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:G.isArrayBufferView(e)?e.byteLength:(G.isURLSearchParams(e)&&(e+=""),G.isString(e)?(await Je(e)).byteLength:void 0))(t):n},Xe={http:null,xhr:De,fetch:ze&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=Be(e);u=u?(u+"").toLowerCase():"text";let h,p,[m,y]=o||s||i?ke([o,s],i):[];const g=()=>{!h&&setTimeout((()=>{m&&m.unsubscribe()})),h=!0};let b;try{if(c&&We&&"get"!==n&&"head"!==n&&0!==(b=await Ge(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});G.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body&&(r=Ie(n.body,65536,Me(b,Ne(c)),null,Je))}G.isString(f)||(f=f?"cors":"omit"),p=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let o=await fetch(p);const s=Ke&&("stream"===u||"response"===u);if(Ke&&(a||s)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=G.toFiniteNumber(o.headers.get("content-length"));o=new Response(Ie(o.body,65536,a&&Me(t,Ne(a,!0)),s&&g,Je),e)}u=u||"text";let i=await Ve[G.findKey(Ve,u)||"text"](o,e);return!s&&g(),y&&y(),await new Promise(((t,n)=>{je(t,n,{data:i,headers:Ae.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(w){if(g(),w&&"TypeError"===w.name&&/fetch/i.test(w.message))throw Object.assign(new X("Network Error",X.ERR_NETWORK,e,p),{cause:w.cause||w});throw X.from(w,w&&w.code,e,p)}})};G.forEach(Xe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Qe=e=>`- ${e}`,Ze=e=>G.isFunction(e)||null===e||!1===e,Ye=e=>{e=G.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ze(n)&&(r=Xe[(t=String(n)).toLowerCase()],void 0===r))throw new X(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new X("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Qe).join("\n"):" "+Qe(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function et(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ce(null,e)}function tt(e){et(e),e.headers=Ae.from(e.headers),e.data=xe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ye(e.adapter||we.adapter)(e).then((function(t){return et(e),t.data=xe.call(e,e.transformResponse,t),t.headers=Ae.from(t.headers),t}),(function(t){return ve(t)||(et(e),t&&t.response&&(t.response.data=xe.call(e,e.transformResponse,t.response),t.response.headers=Ae.from(t.response.headers))),Promise.reject(t)}))}const nt="1.7.2",rt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ot={};rt.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new X(function(e,t){return"[Axios v1.7.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!ot[o]&&(ot[o]=!0),!e||e(r,o,s)}};const st={assertOptions:function(e,t,n){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new X("option "+s+" must be "+n,X.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}},validators:rt},it=st.validators;class at{constructor(e){this.defaults=e,this.interceptors={request:new ue,response:new ue}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ue(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&st.assertOptions(n,{silentJSONParsing:it.transitional(it.boolean),forcedJSONParsing:it.transitional(it.boolean),clarifyTimeoutError:it.transitional(it.boolean)},!1),null!=r&&(G.isFunction(r)?t.paramsSerializer={serialize:r}:st.assertOptions(r,{encode:it.function,serialize:it.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&G.merge(o.common,o[t.method]);o&&G.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ae.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[tt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=tt.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return ce(Fe((e=Ue(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}G.forEach(["delete","get","head","options"],(function(e){at.prototype[e]=function(t,n){return this.request(Ue(n||{},{method:e,url:t,data:(n||{}).data}))}})),G.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ue(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}at.prototype[e]=t(),at.prototype[e+"Form"]=t(!0)}));class ct{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ce(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ct((function(t){e=t})),cancel:e}}}const ut={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ut).forEach((([e,t])=>{ut[t]=e}));const lt=function e(t){const n=new at(t),r=h(at.prototype.request,n);return G.extend(r,at.prototype,n,{allOwnKeys:!0}),G.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ue(t,n))},r}(we);lt.Axios=at,lt.CanceledError=Ce,lt.CancelToken=ct,lt.isCancel=ve,lt.VERSION=nt,lt.toFormData=re,lt.AxiosError=X,lt.Cancel=lt.CanceledError,lt.all=function(e){return Promise.all(e)},lt.spread=function(e){return function(t){return e.apply(null,t)}},lt.isAxiosError=function(e){return G.isObject(e)&&!0===e.isAxiosError},lt.mergeConfig=Ue,lt.AxiosHeaders=Ae,lt.formToJSON=e=>be(G.isHTMLForm(e)?new FormData(e):e),lt.getAdapter=Ye,lt.HttpStatusCode=ut,lt.default=lt;const ft={class:"chat-box"},dt={class:"chat-header"},ht=["onClick"],pt={class:"chat-content"},mt={class:"chat-message"},yt=e({__name:"index",setup(e){const f=t({});n((()=>{}));const h=r([]),p=()=>{lt.post("http://127.0.0.1:3000/sendMsg",{text:"hello",...f.value}).then((()=>{h.push({id:(new Date).getTime(),text:"hello"})}))},m=()=>{fetch("http://127.0.0.1:3000/getMsg").then((async e=>{const t=await e.json();h.push({id:(new Date).getTime(),text:t.data.text})}))};return(e,t)=>(u(),o("div",ft,[s("div",dt,[(u(!0),o(i,null,a(c(d),(e=>(u(),o("div",{class:"chat-user",key:e.userId,onClick:t=>{return n=e,void(f.value=n);var n}},l(e.name),9,ht)))),128))]),s("div",pt,[s("div",mt,[(u(!0),o(i,null,a(c(h),(e=>(u(),o("p",{key:e.id},l(e.text),1)))),128))]),s("button",{onClick:p},"发送"),s("button",{onClick:m},"接收")])]))}}),gt=f(yt,[["__scopeId","data-v-84cbd645"]]);export{gt as default};
