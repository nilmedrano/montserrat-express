function Ss(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ma}=Object.prototype,{getPrototypeOf:_i}=Object,sn=(t=>e=>{const i=Ma.call(e);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),fe=t=>(t=t.toLowerCase(),e=>sn(e)===t),on=t=>e=>typeof e===t,{isArray:Je}=Array,_t=on("undefined");function xa(t){return t!==null&&!_t(t)&&t.constructor!==null&&!_t(t.constructor)&&ae(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cs=fe("ArrayBuffer");function Fa(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cs(t.buffer),e}const Ba=on("string"),ae=on("function"),Rs=on("number"),an=t=>t!==null&&typeof t=="object",ja=t=>t===!0||t===!1,$t=t=>{if(sn(t)!=="object")return!1;const e=_i(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ha=fe("Date"),Va=fe("File"),$a=fe("Blob"),za=fe("FileList"),qa=t=>an(t)&&ae(t.pipe),Ka=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ae(t.append)&&((e=sn(t))==="formdata"||e==="object"&&ae(t.toString)&&t.toString()==="[object FormData]"))},Ga=fe("URLSearchParams"),[Wa,Ja,Xa,Ya]=["ReadableStream","Request","Response","Headers"].map(fe),Qa=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function It(t,e,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Je(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const c=i?Object.getOwnPropertyNames(t):Object.keys(t),l=c.length;let u;for(r=0;r<l;r++)u=c[r],e.call(null,t[u],u,t)}}function Ps(t,e){e=e.toLowerCase();const i=Object.keys(t);let r=i.length,s;for(;r-- >0;)if(s=i[r],e===s.toLowerCase())return s;return null}const Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ns=t=>!_t(t)&&t!==Os;function ri(){const{caseless:t}=Ns(this)&&this||{},e={},i=(r,s)=>{const c=t&&Ps(e,s)||s;$t(e[c])&&$t(r)?e[c]=ri(e[c],r):$t(r)?e[c]=ri({},r):Je(r)?e[c]=r.slice():e[c]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&It(arguments[r],i);return e}const Za=(t,e,i,{allOwnKeys:r}={})=>(It(e,(s,c)=>{i&&ae(s)?t[c]=Ss(s,i):t[c]=s},{allOwnKeys:r}),t),ec=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),tc=(t,e,i,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),i&&Object.assign(t.prototype,i)},nc=(t,e,i,r)=>{let s,c,l;const u={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),c=s.length;c-- >0;)l=s[c],(!r||r(l,t,e))&&!u[l]&&(e[l]=t[l],u[l]=!0);t=i!==!1&&_i(t)}while(t&&(!i||i(t,e))&&t!==Object.prototype);return e},ic=(t,e,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=e.length;const r=t.indexOf(e,i);return r!==-1&&r===i},rc=t=>{if(!t)return null;if(Je(t))return t;let e=t.length;if(!Rs(e))return null;const i=new Array(e);for(;e-- >0;)i[e]=t[e];return i},sc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_i(Uint8Array)),oc=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const c=s.value;e.call(t,c[0],c[1])}},ac=(t,e)=>{let i;const r=[];for(;(i=t.exec(e))!==null;)r.push(i);return r},cc=fe("HTMLFormElement"),lc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,r,s){return r.toUpperCase()+s}),Dr=(({hasOwnProperty:t})=>(e,i)=>t.call(e,i))(Object.prototype),hc=fe("RegExp"),Ds=(t,e)=>{const i=Object.getOwnPropertyDescriptors(t),r={};It(i,(s,c)=>{let l;(l=e(s,c,t))!==!1&&(r[c]=l||s)}),Object.defineProperties(t,r)},uc=t=>{Ds(t,(e,i)=>{if(ae(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const r=t[i];if(ae(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},fc=(t,e)=>{const i={},r=s=>{s.forEach(c=>{i[c]=!0})};return Je(t)?r(t):r(String(t).split(e)),i},dc=()=>{},pc=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,$n="abcdefghijklmnopqrstuvwxyz",kr="0123456789",ks={DIGIT:kr,ALPHA:$n,ALPHA_DIGIT:$n+$n.toUpperCase()+kr},gc=(t=16,e=ks.ALPHA_DIGIT)=>{let i="";const{length:r}=e;for(;t--;)i+=e[Math.random()*r|0];return i};function mc(t){return!!(t&&ae(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const yc=t=>{const e=new Array(10),i=(r,s)=>{if(an(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const c=Je(r)?[]:{};return It(r,(l,u)=>{const p=i(l,s+1);!_t(p)&&(c[u]=p)}),e[s]=void 0,c}}return r};return i(t,0)},wc=fe("AsyncFunction"),vc=t=>t&&(an(t)||ae(t))&&ae(t.then)&&ae(t.catch),b={isArray:Je,isArrayBuffer:Cs,isBuffer:xa,isFormData:Ka,isArrayBufferView:Fa,isString:Ba,isNumber:Rs,isBoolean:ja,isObject:an,isPlainObject:$t,isReadableStream:Wa,isRequest:Ja,isResponse:Xa,isHeaders:Ya,isUndefined:_t,isDate:Ha,isFile:Va,isBlob:$a,isRegExp:hc,isFunction:ae,isStream:qa,isURLSearchParams:Ga,isTypedArray:sc,isFileList:za,forEach:It,merge:ri,extend:Za,trim:Qa,stripBOM:ec,inherits:tc,toFlatObject:nc,kindOf:sn,kindOfTest:fe,endsWith:ic,toArray:rc,forEachEntry:oc,matchAll:ac,isHTMLForm:cc,hasOwnProperty:Dr,hasOwnProp:Dr,reduceDescriptors:Ds,freezeMethods:uc,toObjectSet:fc,toCamelCase:lc,noop:dc,toFiniteNumber:pc,findKey:Ps,global:Os,isContextDefined:Ns,ALPHABET:ks,generateString:gc,isSpecCompliantForm:mc,toJSONObject:yc,isAsyncFn:wc,isThenable:vc};function N(t,e,i,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s)}b.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ls=N.prototype,Us={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Us[t]={value:t}});Object.defineProperties(N,Us);Object.defineProperty(Ls,"isAxiosError",{value:!0});N.from=(t,e,i,r,s,c)=>{const l=Object.create(Ls);return b.toFlatObject(t,l,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),N.call(l,t.message,e,i,r,s),l.cause=t,l.name=t.name,c&&Object.assign(l,c),l};const _c=null;function si(t){return b.isPlainObject(t)||b.isArray(t)}function Ms(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function Lr(t,e,i){return t?t.concat(e).map(function(s,c){return s=Ms(s),!i&&c?"["+s+"]":s}).join(i?".":""):e}function Ec(t){return b.isArray(t)&&!t.some(si)}const Ic=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function cn(t,e,i){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,i=b.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,D){return!b.isUndefined(D[R])});const r=i.metaTokens,s=i.visitor||I,c=i.dots,l=i.indexes,p=(i.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function v(A){if(A===null)return"";if(b.isDate(A))return A.toISOString();if(!p&&b.isBlob(A))throw new N("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(A)||b.isTypedArray(A)?p&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function I(A,R,D){let B=A;if(A&&!D&&typeof A=="object"){if(b.endsWith(R,"{}"))R=r?R:R.slice(0,-2),A=JSON.stringify(A);else if(b.isArray(A)&&Ec(A)||(b.isFileList(A)||b.endsWith(R,"[]"))&&(B=b.toArray(A)))return R=Ms(R),B.forEach(function(k,q){!(b.isUndefined(k)||k===null)&&e.append(l===!0?Lr([R],q,c):l===null?R:R+"[]",v(k))}),!1}return si(A)?!0:(e.append(Lr(D,R,c),v(A)),!1)}const C=[],P=Object.assign(Ic,{defaultVisitor:I,convertValue:v,isVisitable:si});function O(A,R){if(!b.isUndefined(A)){if(C.indexOf(A)!==-1)throw Error("Circular reference detected in "+R.join("."));C.push(A),b.forEach(A,function(B,H){(!(b.isUndefined(B)||B===null)&&s.call(e,B,b.isString(H)?H.trim():H,R,P))===!0&&O(B,R?R.concat(H):[H])}),C.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return O(t),e}function Ur(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ei(t,e){this._pairs=[],t&&cn(t,this,e)}const xs=Ei.prototype;xs.append=function(e,i){this._pairs.push([e,i])};xs.toString=function(e){const i=e?function(r){return e.call(this,r,Ur)}:Ur;return this._pairs.map(function(s){return i(s[0])+"="+i(s[1])},"").join("&")};function Tc(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fs(t,e,i){if(!e)return t;const r=i&&i.encode||Tc,s=i&&i.serialize;let c;if(s?c=s(e,i):c=b.isURLSearchParams(e)?e.toString():new Ei(e,i).toString(r),c){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class Mr{constructor(){this.handlers=[]}use(e,i,r){return this.handlers.push({fulfilled:e,rejected:i,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Bs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bc=typeof URLSearchParams<"u"?URLSearchParams:Ei,Ac=typeof FormData<"u"?FormData:null,Sc=typeof Blob<"u"?Blob:null,Cc={isBrowser:!0,classes:{URLSearchParams:bc,FormData:Ac,Blob:Sc},protocols:["http","https","file","blob","url","data"]},Ii=typeof window<"u"&&typeof document<"u",Rc=(t=>Ii&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Pc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Oc=Ii&&window.location.href||"http://localhost",Nc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ii,hasStandardBrowserEnv:Rc,hasStandardBrowserWebWorkerEnv:Pc,origin:Oc},Symbol.toStringTag,{value:"Module"})),he={...Nc,...Cc};function Dc(t,e){return cn(t,new he.classes.URLSearchParams,Object.assign({visitor:function(i,r,s,c){return he.isNode&&b.isBuffer(i)?(this.append(r,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},e))}function kc(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Lc(t){const e={},i=Object.keys(t);let r;const s=i.length;let c;for(r=0;r<s;r++)c=i[r],e[c]=t[c];return e}function js(t){function e(i,r,s,c){let l=i[c++];if(l==="__proto__")return!0;const u=Number.isFinite(+l),p=c>=i.length;return l=!l&&b.isArray(s)?s.length:l,p?(b.hasOwnProp(s,l)?s[l]=[s[l],r]:s[l]=r,!u):((!s[l]||!b.isObject(s[l]))&&(s[l]=[]),e(i,r,s[l],c)&&b.isArray(s[l])&&(s[l]=Lc(s[l])),!u)}if(b.isFormData(t)&&b.isFunction(t.entries)){const i={};return b.forEachEntry(t,(r,s)=>{e(kc(r),s,i,0)}),i}return null}function Uc(t,e,i){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(i||JSON.stringify)(t)}const Tt={transitional:Bs,adapter:["xhr","http","fetch"],transformRequest:[function(e,i){const r=i.getContentType()||"",s=r.indexOf("application/json")>-1,c=b.isObject(e);if(c&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s?JSON.stringify(js(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e)||b.isReadableStream(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(c){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dc(e,this.formSerializer).toString();if((u=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return cn(u?{"files[]":e}:e,p&&new p,this.formSerializer)}}return c||s?(i.setContentType("application/json",!1),Uc(e)):e}],transformResponse:[function(e){const i=this.transitional||Tt.transitional,r=i&&i.forcedJSONParsing,s=this.responseType==="json";if(b.isResponse(e)||b.isReadableStream(e))return e;if(e&&b.isString(e)&&(r&&!this.responseType||s)){const l=!(i&&i.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(u){if(l)throw u.name==="SyntaxError"?N.from(u,N.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Tt.headers[t]={}});const Mc=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xc=t=>{const e={};let i,r,s;return t&&t.split(`
`).forEach(function(l){s=l.indexOf(":"),i=l.substring(0,s).trim().toLowerCase(),r=l.substring(s+1).trim(),!(!i||e[i]&&Mc[i])&&(i==="set-cookie"?e[i]?e[i].push(r):e[i]=[r]:e[i]=e[i]?e[i]+", "+r:r)}),e},xr=Symbol("internals");function gt(t){return t&&String(t).trim().toLowerCase()}function zt(t){return t===!1||t==null?t:b.isArray(t)?t.map(zt):String(t)}function Fc(t){const e=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=i.exec(t);)e[r[1]]=r[2];return e}const Bc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zn(t,e,i,r,s){if(b.isFunction(r))return r.call(this,e,i);if(s&&(e=i),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function jc(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,i,r)=>i.toUpperCase()+r)}function Hc(t,e){const i=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+i,{value:function(s,c,l){return this[r].call(this,e,s,c,l)},configurable:!0})})}class ee{constructor(e){e&&this.set(e)}set(e,i,r){const s=this;function c(u,p,v){const I=gt(p);if(!I)throw new Error("header name must be a non-empty string");const C=b.findKey(s,I);(!C||s[C]===void 0||v===!0||v===void 0&&s[C]!==!1)&&(s[C||p]=zt(u))}const l=(u,p)=>b.forEach(u,(v,I)=>c(v,I,p));if(b.isPlainObject(e)||e instanceof this.constructor)l(e,i);else if(b.isString(e)&&(e=e.trim())&&!Bc(e))l(xc(e),i);else if(b.isHeaders(e))for(const[u,p]of e.entries())c(p,u,r);else e!=null&&c(i,e,r);return this}get(e,i){if(e=gt(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!i)return s;if(i===!0)return Fc(s);if(b.isFunction(i))return i.call(this,s,r);if(b.isRegExp(i))return i.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,i){if(e=gt(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!i||zn(this,this[r],r,i)))}return!1}delete(e,i){const r=this;let s=!1;function c(l){if(l=gt(l),l){const u=b.findKey(r,l);u&&(!i||zn(r,r[u],u,i))&&(delete r[u],s=!0)}}return b.isArray(e)?e.forEach(c):c(e),s}clear(e){const i=Object.keys(this);let r=i.length,s=!1;for(;r--;){const c=i[r];(!e||zn(this,this[c],c,e,!0))&&(delete this[c],s=!0)}return s}normalize(e){const i=this,r={};return b.forEach(this,(s,c)=>{const l=b.findKey(r,c);if(l){i[l]=zt(s),delete i[c];return}const u=e?jc(c):String(c).trim();u!==c&&delete i[c],i[u]=zt(s),r[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const i=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(i[s]=e&&b.isArray(r)?r.join(", "):r)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,i])=>e+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...i){const r=new this(e);return i.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[xr]=this[xr]={accessors:{}}).accessors,s=this.prototype;function c(l){const u=gt(l);r[u]||(Hc(s,l),r[u]=!0)}return b.isArray(e)?e.forEach(c):c(e),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(ee.prototype,({value:t},e)=>{let i=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[i]=r}}});b.freezeMethods(ee);function qn(t,e){const i=this||Tt,r=e||i,s=ee.from(r.headers);let c=r.data;return b.forEach(t,function(u){c=u.call(i,c,s.normalize(),e?e.status:void 0)}),s.normalize(),c}function Hs(t){return!!(t&&t.__CANCEL__)}function Xe(t,e,i){N.call(this,t??"canceled",N.ERR_CANCELED,e,i),this.name="CanceledError"}b.inherits(Xe,N,{__CANCEL__:!0});function Vs(t,e,i){const r=i.config.validateStatus;!i.status||!r||r(i.status)?t(i):e(new N("Request failed with status code "+i.status,[N.ERR_BAD_REQUEST,N.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function Vc(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function $c(t,e){t=t||10;const i=new Array(t),r=new Array(t);let s=0,c=0,l;return e=e!==void 0?e:1e3,function(p){const v=Date.now(),I=r[c];l||(l=v),i[s]=p,r[s]=v;let C=c,P=0;for(;C!==s;)P+=i[C++],C=C%t;if(s=(s+1)%t,s===c&&(c=(c+1)%t),v-l<e)return;const O=I&&v-I;return O?Math.round(P*1e3/O):void 0}}function zc(t,e){let i=0;const r=1e3/e;let s=null;return function(){const l=this===!0,u=Date.now();if(l||u-i>r)return s&&(clearTimeout(s),s=null),i=u,t.apply(null,arguments);s||(s=setTimeout(()=>(s=null,i=Date.now(),t.apply(null,arguments)),r-(u-i)))}}const Gt=(t,e,i=3)=>{let r=0;const s=$c(50,250);return zc(c=>{const l=c.loaded,u=c.lengthComputable?c.total:void 0,p=l-r,v=s(p),I=l<=u;r=l;const C={loaded:l,total:u,progress:u?l/u:void 0,bytes:p,rate:v||void 0,estimated:v&&u&&I?(u-l)/v:void 0,event:c,lengthComputable:u!=null};C[e?"download":"upload"]=!0,t(C)},i)},qc=he.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");let r;function s(c){let l=c;return e&&(i.setAttribute("href",l),l=i.href),i.setAttribute("href",l),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return r=s(window.location.href),function(l){const u=b.isString(l)?s(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}(),Kc=he.hasStandardBrowserEnv?{write(t,e,i,r,s,c){const l=[t+"="+encodeURIComponent(e)];b.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),b.isString(r)&&l.push("path="+r),b.isString(s)&&l.push("domain="+s),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Gc(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Wc(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function $s(t,e){return t&&!Gc(e)?Wc(t,e):e}const Fr=t=>t instanceof ee?{...t}:t;function Me(t,e){e=e||{};const i={};function r(v,I,C){return b.isPlainObject(v)&&b.isPlainObject(I)?b.merge.call({caseless:C},v,I):b.isPlainObject(I)?b.merge({},I):b.isArray(I)?I.slice():I}function s(v,I,C){if(b.isUndefined(I)){if(!b.isUndefined(v))return r(void 0,v,C)}else return r(v,I,C)}function c(v,I){if(!b.isUndefined(I))return r(void 0,I)}function l(v,I){if(b.isUndefined(I)){if(!b.isUndefined(v))return r(void 0,v)}else return r(void 0,I)}function u(v,I,C){if(C in e)return r(v,I);if(C in t)return r(void 0,v)}const p={url:c,method:c,data:c,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(v,I)=>s(Fr(v),Fr(I),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(I){const C=p[I]||s,P=C(t[I],e[I],I);b.isUndefined(P)&&C!==u||(i[I]=P)}),i}const zs=t=>{const e=Me({},t);let{data:i,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:c,headers:l,auth:u}=e;e.headers=l=ee.from(l),e.url=Fs($s(e.baseURL,e.url),t.params,t.paramsSerializer),u&&l.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):"")));let p;if(b.isFormData(i)){if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((p=l.getContentType())!==!1){const[v,...I]=p?p.split(";").map(C=>C.trim()).filter(Boolean):[];l.setContentType([v||"multipart/form-data",...I].join("; "))}}if(he.hasStandardBrowserEnv&&(r&&b.isFunction(r)&&(r=r(e)),r||r!==!1&&qc(e.url))){const v=s&&c&&Kc.read(c);v&&l.set(s,v)}return e},Jc=typeof XMLHttpRequest<"u",Xc=Jc&&function(t){return new Promise(function(i,r){const s=zs(t);let c=s.data;const l=ee.from(s.headers).normalize();let{responseType:u}=s,p;function v(){s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let I=new XMLHttpRequest;I.open(s.method.toUpperCase(),s.url,!0),I.timeout=s.timeout;function C(){if(!I)return;const O=ee.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),R={data:!u||u==="text"||u==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:O,config:t,request:I};Vs(function(B){i(B),v()},function(B){r(B),v()},R),I=null}"onloadend"in I?I.onloadend=C:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(C)},I.onabort=function(){I&&(r(new N("Request aborted",N.ECONNABORTED,s,I)),I=null)},I.onerror=function(){r(new N("Network Error",N.ERR_NETWORK,s,I)),I=null},I.ontimeout=function(){let A=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||Bs;s.timeoutErrorMessage&&(A=s.timeoutErrorMessage),r(new N(A,R.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,s,I)),I=null},c===void 0&&l.setContentType(null),"setRequestHeader"in I&&b.forEach(l.toJSON(),function(A,R){I.setRequestHeader(R,A)}),b.isUndefined(s.withCredentials)||(I.withCredentials=!!s.withCredentials),u&&u!=="json"&&(I.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&I.addEventListener("progress",Gt(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&I.upload&&I.upload.addEventListener("progress",Gt(s.onUploadProgress)),(s.cancelToken||s.signal)&&(p=O=>{I&&(r(!O||O.type?new Xe(null,t,I):O),I.abort(),I=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const P=Vc(s.url);if(P&&he.protocols.indexOf(P)===-1){r(new N("Unsupported protocol "+P+":",N.ERR_BAD_REQUEST,t));return}I.send(c||null)})},Yc=(t,e)=>{let i=new AbortController,r;const s=function(p){if(!r){r=!0,l();const v=p instanceof Error?p:this.reason;i.abort(v instanceof N?v:new Xe(v instanceof Error?v.message:v))}};let c=e&&setTimeout(()=>{s(new N(`timeout ${e} of ms exceeded`,N.ETIMEDOUT))},e);const l=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p&&(p.removeEventListener?p.removeEventListener("abort",s):p.unsubscribe(s))}),t=null)};t.forEach(p=>p&&p.addEventListener&&p.addEventListener("abort",s));const{signal:u}=i;return u.unsubscribe=l,[u,()=>{c&&clearTimeout(c),c=null}]},Qc=function*(t,e){let i=t.byteLength;if(!e||i<e){yield t;return}let r=0,s;for(;r<i;)s=r+e,yield t.slice(r,s),r=s},Zc=async function*(t,e,i){for await(const r of t)yield*Qc(ArrayBuffer.isView(r)?r:await i(String(r)),e)},Br=(t,e,i,r,s)=>{const c=Zc(t,e,s);let l=0;return new ReadableStream({type:"bytes",async pull(u){const{done:p,value:v}=await c.next();if(p){u.close(),r();return}let I=v.byteLength;i&&i(l+=I),u.enqueue(new Uint8Array(v))},cancel(u){return r(u),c.return()}},{highWaterMark:2})},jr=(t,e)=>{const i=t!=null;return r=>setTimeout(()=>e({lengthComputable:i,total:t,loaded:r}))},ln=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",qs=ln&&typeof ReadableStream=="function",oi=ln&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),el=qs&&(()=>{let t=!1;const e=new Request(he.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),Hr=64*1024,ai=qs&&!!(()=>{try{return b.isReadableStream(new Response("").body)}catch{}})(),Wt={stream:ai&&(t=>t.body)};ln&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Wt[e]&&(Wt[e]=b.isFunction(t[e])?i=>i[e]():(i,r)=>{throw new N(`Response type '${e}' is not supported`,N.ERR_NOT_SUPPORT,r)})})})(new Response);const tl=async t=>{if(t==null)return 0;if(b.isBlob(t))return t.size;if(b.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(b.isArrayBufferView(t))return t.byteLength;if(b.isURLSearchParams(t)&&(t=t+""),b.isString(t))return(await oi(t)).byteLength},nl=async(t,e)=>{const i=b.toFiniteNumber(t.getContentLength());return i??tl(e)},il=ln&&(async t=>{let{url:e,method:i,data:r,signal:s,cancelToken:c,timeout:l,onDownloadProgress:u,onUploadProgress:p,responseType:v,headers:I,withCredentials:C="same-origin",fetchOptions:P}=zs(t);v=v?(v+"").toLowerCase():"text";let[O,A]=s||c||l?Yc([s,c],l):[],R,D;const B=()=>{!R&&setTimeout(()=>{O&&O.unsubscribe()}),R=!0};let H;try{if(p&&el&&i!=="get"&&i!=="head"&&(H=await nl(I,r))!==0){let V=new Request(e,{method:"POST",body:r,duplex:"half"}),y;b.isFormData(r)&&(y=V.headers.get("content-type"))&&I.setContentType(y),V.body&&(r=Br(V.body,Hr,jr(H,Gt(p)),null,oi))}b.isString(C)||(C=C?"cors":"omit"),D=new Request(e,{...P,signal:O,method:i.toUpperCase(),headers:I.normalize().toJSON(),body:r,duplex:"half",withCredentials:C});let k=await fetch(D);const q=ai&&(v==="stream"||v==="response");if(ai&&(u||q)){const V={};["status","statusText","headers"].forEach(f=>{V[f]=k[f]});const y=b.toFiniteNumber(k.headers.get("content-length"));k=new Response(Br(k.body,Hr,u&&jr(y,Gt(u,!0)),q&&B,oi),V)}v=v||"text";let me=await Wt[b.findKey(Wt,v)||"text"](k,t);return!q&&B(),A&&A(),await new Promise((V,y)=>{Vs(V,y,{data:me,headers:ee.from(k.headers),status:k.status,statusText:k.statusText,config:t,request:D})})}catch(k){throw B(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new N("Network Error",N.ERR_NETWORK,t,D),{cause:k.cause||k}):N.from(k,k&&k.code,t,D)}}),ci={http:_c,xhr:Xc,fetch:il};b.forEach(ci,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Vr=t=>`- ${t}`,rl=t=>b.isFunction(t)||t===null||t===!1,Ks={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let i,r;const s={};for(let c=0;c<e;c++){i=t[c];let l;if(r=i,!rl(i)&&(r=ci[(l=String(i)).toLowerCase()],r===void 0))throw new N(`Unknown adapter '${l}'`);if(r)break;s[l||"#"+c]=r}if(!r){const c=Object.entries(s).map(([u,p])=>`adapter ${u} `+(p===!1?"is not supported by the environment":"is not available in the build"));let l=e?c.length>1?`since :
`+c.map(Vr).join(`
`):" "+Vr(c[0]):"as no adapter specified";throw new N("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:ci};function Kn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xe(null,t)}function $r(t){return Kn(t),t.headers=ee.from(t.headers),t.data=qn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ks.getAdapter(t.adapter||Tt.adapter)(t).then(function(r){return Kn(t),r.data=qn.call(t,t.transformResponse,r),r.headers=ee.from(r.headers),r},function(r){return Hs(r)||(Kn(t),r&&r.response&&(r.response.data=qn.call(t,t.transformResponse,r.response),r.response.headers=ee.from(r.response.headers))),Promise.reject(r)})}const Gs="1.7.2",Ti={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ti[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const zr={};Ti.transitional=function(e,i,r){function s(c,l){return"[Axios v"+Gs+"] Transitional option '"+c+"'"+l+(r?". "+r:"")}return(c,l,u)=>{if(e===!1)throw new N(s(l," has been removed"+(i?" in "+i:"")),N.ERR_DEPRECATED);return i&&!zr[l]&&(zr[l]=!0,console.warn(s(l," has been deprecated since v"+i+" and will be removed in the near future"))),e?e(c,l,u):!0}};function sl(t,e,i){if(typeof t!="object")throw new N("options must be an object",N.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const c=r[s],l=e[c];if(l){const u=t[c],p=u===void 0||l(u,c,t);if(p!==!0)throw new N("option "+c+" must be "+p,N.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new N("Unknown option "+c,N.ERR_BAD_OPTION)}}const li={assertOptions:sl,validators:Ti},be=li.validators;class Ue{constructor(e){this.defaults=e,this.interceptors={request:new Mr,response:new Mr}}async request(e,i){try{return await this._request(e,i)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const c=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?c&&!String(r.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+c):r.stack=c}catch{}}throw r}}_request(e,i){typeof e=="string"?(i=i||{},i.url=e):i=e||{},i=Me(this.defaults,i);const{transitional:r,paramsSerializer:s,headers:c}=i;r!==void 0&&li.assertOptions(r,{silentJSONParsing:be.transitional(be.boolean),forcedJSONParsing:be.transitional(be.boolean),clarifyTimeoutError:be.transitional(be.boolean)},!1),s!=null&&(b.isFunction(s)?i.paramsSerializer={serialize:s}:li.assertOptions(s,{encode:be.function,serialize:be.function},!0)),i.method=(i.method||this.defaults.method||"get").toLowerCase();let l=c&&b.merge(c.common,c[i.method]);c&&b.forEach(["delete","get","head","post","put","patch","common"],A=>{delete c[A]}),i.headers=ee.concat(l,c);const u=[];let p=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(i)===!1||(p=p&&R.synchronous,u.unshift(R.fulfilled,R.rejected))});const v=[];this.interceptors.response.forEach(function(R){v.push(R.fulfilled,R.rejected)});let I,C=0,P;if(!p){const A=[$r.bind(this),void 0];for(A.unshift.apply(A,u),A.push.apply(A,v),P=A.length,I=Promise.resolve(i);C<P;)I=I.then(A[C++],A[C++]);return I}P=u.length;let O=i;for(C=0;C<P;){const A=u[C++],R=u[C++];try{O=A(O)}catch(D){R.call(this,D);break}}try{I=$r.call(this,O)}catch(A){return Promise.reject(A)}for(C=0,P=v.length;C<P;)I=I.then(v[C++],v[C++]);return I}getUri(e){e=Me(this.defaults,e);const i=$s(e.baseURL,e.url);return Fs(i,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Ue.prototype[e]=function(i,r){return this.request(Me(r||{},{method:e,url:i,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function i(r){return function(c,l,u){return this.request(Me(u||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:c,data:l}))}}Ue.prototype[e]=i(),Ue.prototype[e+"Form"]=i(!0)});class bi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const r=this;this.promise.then(s=>{if(!r._listeners)return;let c=r._listeners.length;for(;c-- >0;)r._listeners[c](s);r._listeners=null}),this.promise.then=s=>{let c;const l=new Promise(u=>{r.subscribe(u),c=u}).then(s);return l.cancel=function(){r.unsubscribe(c)},l},e(function(c,l,u){r.reason||(r.reason=new Xe(c,l,u),i(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const i=this._listeners.indexOf(e);i!==-1&&this._listeners.splice(i,1)}static source(){let e;return{token:new bi(function(s){e=s}),cancel:e}}}function ol(t){return function(i){return t.apply(null,i)}}function al(t){return b.isObject(t)&&t.isAxiosError===!0}const hi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hi).forEach(([t,e])=>{hi[e]=t});function Ws(t){const e=new Ue(t),i=Ss(Ue.prototype.request,e);return b.extend(i,Ue.prototype,e,{allOwnKeys:!0}),b.extend(i,e,null,{allOwnKeys:!0}),i.create=function(s){return Ws(Me(t,s))},i}const z=Ws(Tt);z.Axios=Ue;z.CanceledError=Xe;z.CancelToken=bi;z.isCancel=Hs;z.VERSION=Gs;z.toFormData=cn;z.AxiosError=N;z.Cancel=z.CanceledError;z.all=function(e){return Promise.all(e)};z.spread=ol;z.isAxiosError=al;z.mergeConfig=Me;z.AxiosHeaders=ee;z.formToJSON=t=>js(b.isHTMLForm(t)?new FormData(t):t);z.getAdapter=Ks.getAdapter;z.HttpStatusCode=hi;z.default=z;window.axios=z;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var qr={};/**
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
 */const Js=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=s&63|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=s&63|128)}return e},cl=function(t){const e=[];let i=0,r=0;for(;i<t.length;){const s=t[i++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=t[i++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=t[i++],l=t[i++],u=t[i++],p=((s&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const c=t[i++],l=t[i++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const c=t[s],l=s+1<t.length,u=l?t[s+1]:0,p=s+2<t.length,v=p?t[s+2]:0,I=c>>2,C=(c&3)<<4|u>>4;let P=(u&15)<<2|v>>6,O=v&63;p||(O=64,l||(P=64)),r.push(i[I],i[C],i[P],i[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Js(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const c=i[t.charAt(s++)],u=s<t.length?i[t.charAt(s)]:0;++s;const v=s<t.length?i[t.charAt(s)]:64;++s;const C=s<t.length?i[t.charAt(s)]:64;if(++s,c==null||u==null||v==null||C==null)throw new ll;const P=c<<2|u>>4;if(r.push(P),v!==64){const O=u<<4&240|v>>2;if(r.push(O),C!==64){const A=v<<6&192|C;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hl=function(t){const e=Js(t);return Xs.encodeByteArray(e,!0)},Ys=function(t){return hl(t).replace(/\./g,"")},Qs=function(t){try{return Xs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fl=()=>ul().__FIREBASE_DEFAULTS__,dl=()=>{if(typeof process>"u"||typeof qr>"u")return;const t=qr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qs(t[1]);return e&&JSON.parse(e)},Zs=()=>{try{return fl()||dl()||pl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eo=()=>{var t;return(t=Zs())===null||t===void 0?void 0:t.config},gl=t=>{var e;return(e=Zs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function to(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function no(){try{return typeof indexedDB=="object"}catch{return!1}}function io(){return new Promise((t,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var c;e(((c=s.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}function vl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _l="FirebaseError";class ge extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=_l,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,je.prototype.create)}}class je{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},s=`${this.service}/${e}`,c=this.errors[e],l=c?El(c,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new ge(s,u,r)}}function El(t,e){return t.replace(Il,(i,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Il=/\{\$([^}]+)}/g;function Jt(t,e){if(t===e)return!0;const i=Object.keys(t),r=Object.keys(e);for(const s of i){if(!r.includes(s))return!1;const c=t[s],l=e[s];if(Kr(c)&&Kr(l)){if(!Jt(c,l))return!1}else if(c!==l)return!1}for(const s of r)if(!i.includes(s))return!1;return!0}function Kr(t){return t!==null&&typeof t=="object"}/**
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
 */function ro(t){const e=[];for(const[i,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tl(t,e){const i=new bl(t,e);return i.subscribe.bind(i)}class bl{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let s;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");Al(e,["next","error","complete"])?s=e:s={next:e,error:i,complete:r},s.next===void 0&&(s.next=Gn),s.error===void 0&&(s.error=Gn),s.complete===void 0&&(s.complete=Gn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Al(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function Gn(){}/**
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
 */const Sl=1e3,Cl=2,Rl=4*60*60*1e3,Pl=.5;function Gr(t,e=Sl,i=Cl){const r=e*Math.pow(i,t),s=Math.round(Pl*r*(Math.random()-.5)*2);return Math.min(Rl,r+s)}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class ue{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class Ol{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new ml;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:i});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(s)return null;throw c}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dl(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);r===u&&l.resolve(s)}return s}onInit(e,i){var r;const s=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(s,c);const l=this.instances.get(s);return l&&e(l,s),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const s of r)try{s(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nl(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nl(t){return t===De?void 0:t}function Dl(t){return t.instantiationMode==="EAGER"}/**
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
 */class kl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ol(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const Ll={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Ul=x.INFO,Ml={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},xl=(t,e,...i)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ml[e];if(s)console[s](`[${r}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hn{constructor(e){this.name=e,this._logLevel=Ul,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ll[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Fl=(t,e)=>e.some(i=>t instanceof i);let Wr,Jr;function Bl(){return Wr||(Wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jl(){return Jr||(Jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,ui=new WeakMap,oo=new WeakMap,Wn=new WeakMap,Ai=new WeakMap;function Hl(t){const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{i(Ce(t.result)),s()},l=()=>{r(t.error),s()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&so.set(i,t)}).catch(()=>{}),Ai.set(e,t),e}function Vl(t){if(ui.has(t))return;const e=new Promise((i,r)=>{const s=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{i(),s()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});ui.set(t,e)}let fi={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oo.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ce(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $l(t){fi=t(fi)}function zl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=t.call(Jn(this),e,...i);return oo.set(r,e.sort?e.sort():[e]),Ce(r)}:jl().includes(t)?function(...e){return t.apply(Jn(this),e),Ce(so.get(this))}:function(...e){return Ce(t.apply(Jn(this),e))}}function ql(t){return typeof t=="function"?zl(t):(t instanceof IDBTransaction&&Vl(t),Fl(t,Bl())?new Proxy(t,fi):t)}function Ce(t){if(t instanceof IDBRequest)return Hl(t);if(Wn.has(t))return Wn.get(t);const e=ql(t);return e!==t&&(Wn.set(t,e),Ai.set(e,t)),e}const Jn=t=>Ai.get(t);function ao(t,e,{blocked:i,upgrade:r,blocking:s,terminated:c}={}){const l=indexedDB.open(t,e),u=Ce(l);return r&&l.addEventListener("upgradeneeded",p=>{r(Ce(l.result),p.oldVersion,p.newVersion,Ce(l.transaction),p)}),i&&l.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),u.then(p=>{c&&p.addEventListener("close",()=>c()),s&&p.addEventListener("versionchange",v=>s(v.oldVersion,v.newVersion,v))}).catch(()=>{}),u}const Kl=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Xn=new Map;function Xr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,s=Gl.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kl.includes(i)))return;const c=async function(l,...u){const p=this.transaction(l,s?"readwrite":"readonly");let v=p.store;return r&&(v=v.index(u.shift())),(await Promise.all([v[i](...u),s&&p.done]))[0]};return Xn.set(e,c),c}$l(t=>({...t,get:(e,i,r)=>Xr(e,i)||t.get(e,i,r),has:(e,i)=>!!Xr(e,i)||t.has(e,i)}));/**
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
 */class Wl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Jl(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function Jl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Yr="0.10.4";/**
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
 */const xe=new hn("@firebase/app"),Xl="@firebase/app-compat",Yl="@firebase/analytics-compat",Ql="@firebase/analytics",Zl="@firebase/app-check-compat",eh="@firebase/app-check",th="@firebase/auth",nh="@firebase/auth-compat",ih="@firebase/database",rh="@firebase/database-compat",sh="@firebase/functions",oh="@firebase/functions-compat",ah="@firebase/installations",ch="@firebase/installations-compat",lh="@firebase/messaging",hh="@firebase/messaging-compat",uh="@firebase/performance",fh="@firebase/performance-compat",dh="@firebase/remote-config",ph="@firebase/remote-config-compat",gh="@firebase/storage",mh="@firebase/storage-compat",yh="@firebase/firestore",wh="@firebase/vertexai-preview",vh="@firebase/firestore-compat",_h="firebase",Eh="10.12.1";/**
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
 */const pi="[DEFAULT]",Ih={[di]:"fire-core",[Xl]:"fire-core-compat",[Ql]:"fire-analytics",[Yl]:"fire-analytics-compat",[eh]:"fire-app-check",[Zl]:"fire-app-check-compat",[th]:"fire-auth",[nh]:"fire-auth-compat",[ih]:"fire-rtdb",[rh]:"fire-rtdb-compat",[sh]:"fire-fn",[oh]:"fire-fn-compat",[ah]:"fire-iid",[ch]:"fire-iid-compat",[lh]:"fire-fcm",[hh]:"fire-fcm-compat",[uh]:"fire-perf",[fh]:"fire-perf-compat",[dh]:"fire-rc",[ph]:"fire-rc-compat",[gh]:"fire-gcs",[mh]:"fire-gcs-compat",[yh]:"fire-fst",[vh]:"fire-fst-compat",[wh]:"fire-vertex","fire-js":"fire-js",[_h]:"fire-js-all"};/**
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
 */const Xt=new Map,Th=new Map,gi=new Map;function Qr(t,e){try{t.container.addComponent(e)}catch(i){xe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function pe(t){const e=t.name;if(gi.has(e))return xe.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const i of Xt.values())Qr(i,t);for(const i of Th.values())Qr(i,t);return!0}function un(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
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
 */const bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Re=new je("app","Firebase",bh);/**
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
 */class Ah{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}/**
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
 */const fn=Eh;function co(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Re.create("bad-app-name",{appName:String(s)});if(i||(i=eo()),!i)throw Re.create("no-options");const c=Xt.get(s);if(c){if(Jt(i,c.options)&&Jt(r,c.config))return c;throw Re.create("duplicate-app",{appName:s})}const l=new kl(s);for(const p of gi.values())l.addComponent(p);const u=new Ah(i,r,l);return Xt.set(s,u),u}function Sh(t=pi){const e=Xt.get(t);if(!e&&t===pi&&eo())return co();if(!e)throw Re.create("no-app",{appName:t});return e}function ce(t,e,i){var r;let s=(r=Ih[t])!==null&&r!==void 0?r:t;i&&(s+=`-${i}`);const c=s.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const u=[`Unable to register library "${s}" with version "${e}":`];c&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),c&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xe.warn(u.join(" "));return}pe(new ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ch="firebase-heartbeat-database",Rh=1,Et="firebase-heartbeat-store";let Yn=null;function lo(){return Yn||(Yn=ao(Ch,Rh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Et)}catch(i){console.warn(i)}}}}).catch(t=>{throw Re.create("idb-open",{originalErrorMessage:t.message})})),Yn}async function Ph(t){try{const i=(await lo()).transaction(Et),r=await i.objectStore(Et).get(ho(t));return await i.done,r}catch(e){if(e instanceof ge)xe.warn(e.message);else{const i=Re.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xe.warn(i.message)}}}async function Zr(t,e){try{const r=(await lo()).transaction(Et,"readwrite");await r.objectStore(Et).put(e,ho(t)),await r.done}catch(i){if(i instanceof ge)xe.warn(i.message);else{const r=Re.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});xe.warn(r.message)}}}function ho(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Oh=1024,Nh=30*24*60*60*1e3;class Dh{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Lh(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=es();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=Nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=es(),{heartbeatsToSend:r,unsentEntries:s}=kh(this._heartbeatsCache.heartbeats),c=Ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function es(){return new Date().toISOString().substring(0,10)}function kh(t,e=Oh){const i=[];let r=t.slice();for(const s of t){const c=i.find(l=>l.agent===s.agent);if(c){if(c.dates.push(s.date),ts(i)>e){c.dates.pop();break}}else if(i.push({agent:s.agent,dates:[s.date]}),ts(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Lh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return no()?io().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Ph(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ts(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Uh(t){pe(new ue("platform-logger",e=>new Wl(e),"PRIVATE")),pe(new ue("heartbeat",e=>new Dh(e),"PRIVATE")),ce(di,Yr,t),ce(di,Yr,"esm2017"),ce("fire-js","")}Uh("");var Mh="firebase",xh="10.12.1";/**
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
 */ce(Mh,xh,"app");function uo(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(i[r[s]]=t[r[s]]);return i}function fo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fh=fo,po=new je("auth","Firebase",fo());/**
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
 */const Yt=new hn("@firebase/auth");function Bh(t,...e){Yt.logLevel<=x.WARN&&Yt.warn(`Auth (${fn}): ${t}`,...e)}function qt(t,...e){Yt.logLevel<=x.ERROR&&Yt.error(`Auth (${fn}): ${t}`,...e)}/**
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
 */function ns(t,...e){throw Si(t,...e)}function go(t,...e){return Si(t,...e)}function mo(t,e,i){const r=Object.assign(Object.assign({},Fh()),{[e]:i});return new je("auth","Firebase",r).create(e,{appName:t.name})}function Kt(t){return mo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Si(t,...e){if(typeof t!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(i,...r)}return po.create(t,...e)}function M(t,e,...i){if(!t)throw Si(e,...i)}function yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qt(e),new Error(e)}function Qt(t,e){t||yt(e)}function jh(){return is()==="http:"||is()==="https:"}function is(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jh()||to()||"connection"in navigator)?navigator.onLine:!0}function Vh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Qt(i>e,"Short delay should be less than long delay!"),this.isMobile=yl()||wl()}get(){return Hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $h(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class yo{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qh=new bt(3e4,6e4);function wo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,i,r,s={}){return vo(t,s,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const u=ro(Object.assign({key:t.config.apiKey},l)).slice(1),p=await t._getAdditionalHeaders();return p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode),yo.fetch()(_o(t,t.config.apiHost,i,u),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},c))})}async function vo(t,e,i){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zh),e);try{const s=new Kh(t),c=await Promise.race([i(),s.promise]);s.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw Ht(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[p,v]=u.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ht(t,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw Ht(t,"email-already-in-use",l);if(p==="USER_DISABLED")throw Ht(t,"user-disabled",l);const I=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw mo(t,I,v);ns(t,I)}}catch(s){if(s instanceof ge)throw s;ns(t,"network-request-failed",{message:String(s)})}}function _o(t,e,i,r){const s=`${e}${i}?${r}`;return t.config.emulator?$h(t.config,s):`${t.config.apiScheme}://${s}`}class Kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(go(this.auth,"network-request-failed")),qh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ht(t,e,i){const r={appName:t.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const s=go(t,e,r);return s.customData._tokenResponse=i,s}/**
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
 */async function Gh(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function Eo(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const i=Ye(t),r=await i.getIdToken(e),s=Io(r);M(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:s,token:r,authTime:wt(Qn(s.auth_time)),issuedAtTime:wt(Qn(s.iat)),expirationTime:wt(Qn(s.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Qn(t){return Number(t)*1e3}function Io(t){const[e,i,r]=t.split(".");if(e===void 0||i===void 0||r===void 0)return qt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qs(i);return s?JSON.parse(s):(qt("Failed to decode base64 JWT payload"),null)}catch(s){return qt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rs(t){const e=Io(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mi(t,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof ge&&Jh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=wt(this.lastLoginAt),this.creationTime=wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zt(t){var e;const i=t.auth,r=await t.getIdToken(),s=await mi(t,Eo(i,{idToken:r}));M(s==null?void 0:s.users.length,i,"internal-error");const c=s.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?To(c.providerUserInfo):[],u=Qh(t.providerData,l),p=t.isAnonymous,v=!(t.email&&c.passwordHash)&&!(u!=null&&u.length),I=p?v:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:u,metadata:new yi(c.createdAt,c.lastLoginAt),isAnonymous:I};Object.assign(t,C)}async function Yh(t){const e=Ye(t);await Zt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function To(t){return t.map(e=>{var{providerId:i}=e,r=uo(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zh(t,e){const i=await vo(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=t.config,l=_o(t,s,"/v1/token",`key=${c}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",yo.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function eu(t,e){return dn(t,"POST","/v2/accounts:revokeToken",wo(t,e))}/**
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
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){M(e.length!==0,"internal-error");const i=rs(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:s,expiresIn:c}=await Zh(e,i);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:s,expirationTime:c}=i,l=new Ke;return r&&(M(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),c&&(M(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function Ae(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor(e){var{uid:i,auth:r,stsTokenManager:s}=e,c=uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new yi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await mi(this,this.stsTokenManager.getToken(this.auth,e));return M(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Wh(this,e)}reload(){return Yh(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Zt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await mi(this,Gh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,s,c,l,u,p,v,I;const C=(r=i.displayName)!==null&&r!==void 0?r:void 0,P=(s=i.email)!==null&&s!==void 0?s:void 0,O=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,A=(l=i.photoURL)!==null&&l!==void 0?l:void 0,R=(u=i.tenantId)!==null&&u!==void 0?u:void 0,D=(p=i._redirectEventId)!==null&&p!==void 0?p:void 0,B=(v=i.createdAt)!==null&&v!==void 0?v:void 0,H=(I=i.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:k,emailVerified:q,isAnonymous:me,providerData:V,stsTokenManager:y}=i;M(k&&y,e,"internal-error");const f=Ke.fromJSON(this.name,y);M(typeof k=="string",e,"internal-error"),Ae(C,e.name),Ae(P,e.name),M(typeof q=="boolean",e,"internal-error"),M(typeof me=="boolean",e,"internal-error"),Ae(O,e.name),Ae(A,e.name),Ae(R,e.name),Ae(D,e.name),Ae(B,e.name),Ae(H,e.name);const g=new Se({uid:k,auth:e,email:P,emailVerified:q,displayName:C,isAnonymous:me,photoURL:A,phoneNumber:O,tenantId:R,stsTokenManager:f,createdAt:B,lastLoginAt:H});return V&&Array.isArray(V)&&(g.providerData=V.map(m=>Object.assign({},m))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(e,i,r=!1){const s=new Ke;s.updateFromServerResponse(i);const c=new Se({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zt(c),c}static async _fromGetAccountInfoResponse(e,i,r){const s=i.users[0];M(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?To(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(c!=null&&c.length),u=new Ke;u.updateFromIdToken(r);const p=new Se({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new yi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,v),p}}/**
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
 */const ss=new Map;function ke(t){Qt(t instanceof Function,"Expected a class definition");let e=ss.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ss.set(t,e),e)}/**
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
 */class bo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}bo.type="NONE";const os=bo;/**
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
 */function Zn(t,e,i){return`firebase:${t}:${e}:${i}`}class Ge{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=Zn(this.userKey,s.apiKey,c),this.fullPersistenceKey=Zn("persistence",s.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new Ge(ke(os),e,r);const s=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=s[0]||ke(os);const l=Zn(r,e.config.apiKey,e.name);let u=null;for(const v of i)try{const I=await v._get(l);if(I){const C=Se._fromJSON(e,I);v!==c&&(u=C),c=v;break}}catch{}const p=s.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Ge(c,e,r):(c=p[0],u&&await c._set(l,u.toJSON()),await Promise.all(i.map(async v=>{if(v!==c)try{await v._remove(l)}catch{}})),new Ge(c,e,r))}}/**
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
 */function as(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ou(e))return"Blackberry";if(au(e))return"Webos";if(nu(e))return"Safari";if((e.includes("chrome/")||iu(e))&&!e.includes("edge/"))return"Chrome";if(su(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tu(t=de()){return/firefox\//i.test(t)}function nu(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iu(t=de()){return/crios\//i.test(t)}function ru(t=de()){return/iemobile/i.test(t)}function su(t=de()){return/android/i.test(t)}function ou(t=de()){return/blackberry/i.test(t)}function au(t=de()){return/webos/i.test(t)}/**
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
 */function Ao(t,e=[]){let i;switch(t){case"Browser":i=as(de());break;case"Worker":i=`${as(de())}-${t}`;break;default:i=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${fn}/${r}`}/**
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
 */class cu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,u)=>{try{const p=e(c);l(p)}catch(p){u(p)}});r.onAbort=i,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lu(t,e={}){return dn(t,"GET","/v2/passwordPolicy",wo(t,e))}/**
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
 */const hu=6;class uu{constructor(e){var i,r,s,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:hu,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,s,c,l,u;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(i=p.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(s=p.containsLowercaseLetter)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(l=p.containsNumericCharacter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),p}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),s&&(i.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class fu{constructor(e,i,r,s){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cs(this),this.idTokenSubscription=new cs(this),this.beforeStateQueue=new cu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=po,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ke(i)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Eo(this,{idToken:e}),r=await Se._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(mt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,u=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===u)&&(p!=null&&p.user)&&(s=p.user,c=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Zt(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Kt(this));const i=e?Ye(e):null;return i&&M(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lu(this),i=new uu(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new je("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await eu(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ke(e)||this._popupRedirectResolver;M(i,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[ke(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,s){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const p=e.addObserver(i,r,s);return()=>{l=!0,p()}}else{const p=e.addObserver(i);return()=>{l=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ao(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Bh(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function du(t){return Ye(t)}class cs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tl(i=>this.observer=i)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pu(t,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new bt(3e4,6e4);/**
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
 */new bt(2e3,1e4);/**
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
 */new bt(3e4,6e4);/**
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
 */new bt(5e3,15e3);var ls="@firebase/auth",hs="1.7.3";/**
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
 */class gu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yu(t){pe(new ue("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;M(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ao(t)},v=new fu(r,s,c,p);return pu(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),pe(new ue("auth-internal",e=>{const i=du(e.getProvider("auth").getImmediate());return(r=>new gu(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce(ls,hs,mu(t)),ce(ls,hs,"esm2017")}/**
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
 */const wu=5*60;gl("authIdTokenMaxAge");yu("Browser");var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var So;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,f){function g(){}g.prototype=f.prototype,y.D=f.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(m,w,E){for(var d=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)d[ye-2]=arguments[ye];return f.prototype[w].apply(m,d)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,f,g){g||(g=0);var m=Array(16);if(typeof f=="string")for(var w=0;16>w;++w)m[w]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(w=0;16>w;++w)m[w]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=y.g[0],g=y.g[1],w=y.g[2];var E=y.g[3],d=f+(E^g&(w^E))+m[0]+3614090360&4294967295;f=g+(d<<7&4294967295|d>>>25),d=E+(w^f&(g^w))+m[1]+3905402710&4294967295,E=f+(d<<12&4294967295|d>>>20),d=w+(g^E&(f^g))+m[2]+606105819&4294967295,w=E+(d<<17&4294967295|d>>>15),d=g+(f^w&(E^f))+m[3]+3250441966&4294967295,g=w+(d<<22&4294967295|d>>>10),d=f+(E^g&(w^E))+m[4]+4118548399&4294967295,f=g+(d<<7&4294967295|d>>>25),d=E+(w^f&(g^w))+m[5]+1200080426&4294967295,E=f+(d<<12&4294967295|d>>>20),d=w+(g^E&(f^g))+m[6]+2821735955&4294967295,w=E+(d<<17&4294967295|d>>>15),d=g+(f^w&(E^f))+m[7]+4249261313&4294967295,g=w+(d<<22&4294967295|d>>>10),d=f+(E^g&(w^E))+m[8]+1770035416&4294967295,f=g+(d<<7&4294967295|d>>>25),d=E+(w^f&(g^w))+m[9]+2336552879&4294967295,E=f+(d<<12&4294967295|d>>>20),d=w+(g^E&(f^g))+m[10]+4294925233&4294967295,w=E+(d<<17&4294967295|d>>>15),d=g+(f^w&(E^f))+m[11]+2304563134&4294967295,g=w+(d<<22&4294967295|d>>>10),d=f+(E^g&(w^E))+m[12]+1804603682&4294967295,f=g+(d<<7&4294967295|d>>>25),d=E+(w^f&(g^w))+m[13]+4254626195&4294967295,E=f+(d<<12&4294967295|d>>>20),d=w+(g^E&(f^g))+m[14]+2792965006&4294967295,w=E+(d<<17&4294967295|d>>>15),d=g+(f^w&(E^f))+m[15]+1236535329&4294967295,g=w+(d<<22&4294967295|d>>>10),d=f+(w^E&(g^w))+m[1]+4129170786&4294967295,f=g+(d<<5&4294967295|d>>>27),d=E+(g^w&(f^g))+m[6]+3225465664&4294967295,E=f+(d<<9&4294967295|d>>>23),d=w+(f^g&(E^f))+m[11]+643717713&4294967295,w=E+(d<<14&4294967295|d>>>18),d=g+(E^f&(w^E))+m[0]+3921069994&4294967295,g=w+(d<<20&4294967295|d>>>12),d=f+(w^E&(g^w))+m[5]+3593408605&4294967295,f=g+(d<<5&4294967295|d>>>27),d=E+(g^w&(f^g))+m[10]+38016083&4294967295,E=f+(d<<9&4294967295|d>>>23),d=w+(f^g&(E^f))+m[15]+3634488961&4294967295,w=E+(d<<14&4294967295|d>>>18),d=g+(E^f&(w^E))+m[4]+3889429448&4294967295,g=w+(d<<20&4294967295|d>>>12),d=f+(w^E&(g^w))+m[9]+568446438&4294967295,f=g+(d<<5&4294967295|d>>>27),d=E+(g^w&(f^g))+m[14]+3275163606&4294967295,E=f+(d<<9&4294967295|d>>>23),d=w+(f^g&(E^f))+m[3]+4107603335&4294967295,w=E+(d<<14&4294967295|d>>>18),d=g+(E^f&(w^E))+m[8]+1163531501&4294967295,g=w+(d<<20&4294967295|d>>>12),d=f+(w^E&(g^w))+m[13]+2850285829&4294967295,f=g+(d<<5&4294967295|d>>>27),d=E+(g^w&(f^g))+m[2]+4243563512&4294967295,E=f+(d<<9&4294967295|d>>>23),d=w+(f^g&(E^f))+m[7]+1735328473&4294967295,w=E+(d<<14&4294967295|d>>>18),d=g+(E^f&(w^E))+m[12]+2368359562&4294967295,g=w+(d<<20&4294967295|d>>>12),d=f+(g^w^E)+m[5]+4294588738&4294967295,f=g+(d<<4&4294967295|d>>>28),d=E+(f^g^w)+m[8]+2272392833&4294967295,E=f+(d<<11&4294967295|d>>>21),d=w+(E^f^g)+m[11]+1839030562&4294967295,w=E+(d<<16&4294967295|d>>>16),d=g+(w^E^f)+m[14]+4259657740&4294967295,g=w+(d<<23&4294967295|d>>>9),d=f+(g^w^E)+m[1]+2763975236&4294967295,f=g+(d<<4&4294967295|d>>>28),d=E+(f^g^w)+m[4]+1272893353&4294967295,E=f+(d<<11&4294967295|d>>>21),d=w+(E^f^g)+m[7]+4139469664&4294967295,w=E+(d<<16&4294967295|d>>>16),d=g+(w^E^f)+m[10]+3200236656&4294967295,g=w+(d<<23&4294967295|d>>>9),d=f+(g^w^E)+m[13]+681279174&4294967295,f=g+(d<<4&4294967295|d>>>28),d=E+(f^g^w)+m[0]+3936430074&4294967295,E=f+(d<<11&4294967295|d>>>21),d=w+(E^f^g)+m[3]+3572445317&4294967295,w=E+(d<<16&4294967295|d>>>16),d=g+(w^E^f)+m[6]+76029189&4294967295,g=w+(d<<23&4294967295|d>>>9),d=f+(g^w^E)+m[9]+3654602809&4294967295,f=g+(d<<4&4294967295|d>>>28),d=E+(f^g^w)+m[12]+3873151461&4294967295,E=f+(d<<11&4294967295|d>>>21),d=w+(E^f^g)+m[15]+530742520&4294967295,w=E+(d<<16&4294967295|d>>>16),d=g+(w^E^f)+m[2]+3299628645&4294967295,g=w+(d<<23&4294967295|d>>>9),d=f+(w^(g|~E))+m[0]+4096336452&4294967295,f=g+(d<<6&4294967295|d>>>26),d=E+(g^(f|~w))+m[7]+1126891415&4294967295,E=f+(d<<10&4294967295|d>>>22),d=w+(f^(E|~g))+m[14]+2878612391&4294967295,w=E+(d<<15&4294967295|d>>>17),d=g+(E^(w|~f))+m[5]+4237533241&4294967295,g=w+(d<<21&4294967295|d>>>11),d=f+(w^(g|~E))+m[12]+1700485571&4294967295,f=g+(d<<6&4294967295|d>>>26),d=E+(g^(f|~w))+m[3]+2399980690&4294967295,E=f+(d<<10&4294967295|d>>>22),d=w+(f^(E|~g))+m[10]+4293915773&4294967295,w=E+(d<<15&4294967295|d>>>17),d=g+(E^(w|~f))+m[1]+2240044497&4294967295,g=w+(d<<21&4294967295|d>>>11),d=f+(w^(g|~E))+m[8]+1873313359&4294967295,f=g+(d<<6&4294967295|d>>>26),d=E+(g^(f|~w))+m[15]+4264355552&4294967295,E=f+(d<<10&4294967295|d>>>22),d=w+(f^(E|~g))+m[6]+2734768916&4294967295,w=E+(d<<15&4294967295|d>>>17),d=g+(E^(w|~f))+m[13]+1309151649&4294967295,g=w+(d<<21&4294967295|d>>>11),d=f+(w^(g|~E))+m[4]+4149444226&4294967295,f=g+(d<<6&4294967295|d>>>26),d=E+(g^(f|~w))+m[11]+3174756917&4294967295,E=f+(d<<10&4294967295|d>>>22),d=w+(f^(E|~g))+m[2]+718787259&4294967295,w=E+(d<<15&4294967295|d>>>17),d=g+(E^(w|~f))+m[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(w+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+w&4294967295,y.g[3]=y.g[3]+E&4294967295}r.prototype.u=function(y,f){f===void 0&&(f=y.length);for(var g=f-this.blockSize,m=this.B,w=this.h,E=0;E<f;){if(w==0)for(;E<=g;)s(this,y,E),E+=this.blockSize;if(typeof y=="string"){for(;E<f;)if(m[w++]=y.charCodeAt(E++),w==this.blockSize){s(this,m),w=0;break}}else for(;E<f;)if(m[w++]=y[E++],w==this.blockSize){s(this,m),w=0;break}}this.h=w,this.o+=f},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;var g=8*this.o;for(f=y.length-8;f<y.length;++f)y[f]=g&255,g/=256;for(this.u(y),y=Array(16),f=g=0;4>f;++f)for(var m=0;32>m;m+=8)y[g++]=this.g[f]>>>m&255;return y};function c(y,f){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=f(y)}function l(y,f){this.h=f;for(var g=[],m=!0,w=y.length-1;0<=w;w--){var E=y[w]|0;m&&E==f||(g[w]=E,m=!1)}this.g=g}var u={};function p(y){return-128<=y&&128>y?c(y,function(f){return new l([f|0],0>f?-1:0)}):new l([y|0],0>y?-1:0)}function v(y){if(isNaN(y)||!isFinite(y))return C;if(0>y)return D(v(-y));for(var f=[],g=1,m=0;y>=g;m++)f[m]=y/g|0,g*=4294967296;return new l(f,0)}function I(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return D(I(y.substring(1),f));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=v(Math.pow(f,8)),m=C,w=0;w<y.length;w+=8){var E=Math.min(8,y.length-w),d=parseInt(y.substring(w,w+E),f);8>E?(E=v(Math.pow(f,E)),m=m.j(E).add(v(d))):(m=m.j(g),m=m.add(v(d)))}return m}var C=p(0),P=p(1),O=p(16777216);t=l.prototype,t.m=function(){if(R(this))return-D(this).m();for(var y=0,f=1,g=0;g<this.g.length;g++){var m=this.i(g);y+=(0<=m?m:4294967296+m)*f,f*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A(this))return"0";if(R(this))return"-"+D(this).toString(y);for(var f=v(Math.pow(y,6)),g=this,m="";;){var w=q(g,f).g;g=B(g,w.j(f));var E=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=w,A(g))return E+m;for(;6>E.length;)E="0"+E;m=E+m}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function A(y){if(y.h!=0)return!1;for(var f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=B(this,y),R(y)?-1:A(y)?0:1};function D(y){for(var f=y.g.length,g=[],m=0;m<f;m++)g[m]=~y.g[m];return new l(g,~y.h).add(P)}t.abs=function(){return R(this)?D(this):this},t.add=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],m=0,w=0;w<=f;w++){var E=m+(this.i(w)&65535)+(y.i(w)&65535),d=(E>>>16)+(this.i(w)>>>16)+(y.i(w)>>>16);m=d>>>16,E&=65535,d&=65535,g[w]=d<<16|E}return new l(g,g[g.length-1]&-2147483648?-1:0)};function B(y,f){return y.add(D(f))}t.j=function(y){if(A(this)||A(y))return C;if(R(this))return R(y)?D(this).j(D(y)):D(D(this).j(y));if(R(y))return D(this.j(D(y)));if(0>this.l(O)&&0>y.l(O))return v(this.m()*y.m());for(var f=this.g.length+y.g.length,g=[],m=0;m<2*f;m++)g[m]=0;for(m=0;m<this.g.length;m++)for(var w=0;w<y.g.length;w++){var E=this.i(m)>>>16,d=this.i(m)&65535,ye=y.i(w)>>>16,Qe=y.i(w)&65535;g[2*m+2*w]+=d*Qe,H(g,2*m+2*w),g[2*m+2*w+1]+=E*Qe,H(g,2*m+2*w+1),g[2*m+2*w+1]+=d*ye,H(g,2*m+2*w+1),g[2*m+2*w+2]+=E*ye,H(g,2*m+2*w+2)}for(m=0;m<f;m++)g[m]=g[2*m+1]<<16|g[2*m];for(m=f;m<2*f;m++)g[m]=0;return new l(g,0)};function H(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function k(y,f){this.g=y,this.h=f}function q(y,f){if(A(f))throw Error("division by zero");if(A(y))return new k(C,C);if(R(y))return f=q(D(y),f),new k(D(f.g),D(f.h));if(R(f))return f=q(y,D(f)),new k(D(f.g),f.h);if(30<y.g.length){if(R(y)||R(f))throw Error("slowDivide_ only works with positive integers.");for(var g=P,m=f;0>=m.l(y);)g=me(g),m=me(m);var w=V(g,1),E=V(m,1);for(m=V(m,2),g=V(g,2);!A(m);){var d=E.add(m);0>=d.l(y)&&(w=w.add(g),E=d),m=V(m,1),g=V(g,1)}return f=B(y,w.j(f)),new k(w,f)}for(w=C;0<=y.l(f);){for(g=Math.max(1,Math.floor(y.m()/f.m())),m=Math.ceil(Math.log(g)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),E=v(g),d=E.j(f);R(d)||0<d.l(y);)g-=m,E=v(g),d=E.j(f);A(E)&&(E=P),w=w.add(E),y=B(y,d)}return new k(w,y)}t.A=function(y){return q(this,y).h},t.and=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)&y.i(m);return new l(g,this.h&y.h)},t.or=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)|y.i(m);return new l(g,this.h|y.h)},t.xor=function(y){for(var f=Math.max(this.g.length,y.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)^y.i(m);return new l(g,this.h^y.h)};function me(y){for(var f=y.g.length+1,g=[],m=0;m<f;m++)g[m]=y.i(m)<<1|y.i(m-1)>>>31;return new l(g,y.h)}function V(y,f){var g=f>>5;f%=32;for(var m=y.g.length-g,w=[],E=0;E<m;E++)w[E]=0<f?y.i(E+g)>>>f|y.i(E+g+1)<<32-f:y.i(E+g);return new l(w,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=v,l.fromString=I,So=l}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});var Vt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,a){return n==Array.prototype||n==Object.prototype||(n[o]=a.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vt=="object"&&Vt];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function s(n,o){if(o)e:{var a=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var _=n[h];if(!(_ in a))break e;a=a[_]}n=n[n.length-1],h=a[n],o=o(h),o!=h&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}function c(n,o){n instanceof String&&(n+="");var a=0,h=!1,_={next:function(){if(!h&&a<n.length){var T=a++;return{value:o(T,n[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}s("Array.prototype.values",function(n){return n||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function p(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function v(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function I(n,o,a){return n.call.apply(n.bind,arguments)}function C(n,o,a){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,h),n.apply(o,_)}}return function(){return n.apply(o,arguments)}}function P(n,o,a){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:C,P.apply(null,arguments)}function O(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function A(n,o){function a(){}a.prototype=o.prototype,n.aa=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(h,_,T){for(var S=Array(arguments.length-2),F=2;F<arguments.length;F++)S[F-2]=arguments[F];return o.prototype[_].apply(h,S)}}function R(n){const o=n.length;if(0<o){const a=Array(o);for(let h=0;h<o;h++)a[h]=n[h];return a}return[]}function D(n,o){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(p(h)){const _=n.length||0,T=h.length||0;n.length=_+T;for(let S=0;S<T;S++)n[_+S]=h[S]}else n.push(h)}}class B{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function H(n){return/^[\s\xa0]*$/.test(n)}function k(){var n=u.navigator;return n&&(n=n.userAgent)?n:""}function q(n){return q[" "](n),n}q[" "]=function(){};var me=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function V(n,o,a){for(const h in n)o.call(a,n[h],h,n)}function y(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function f(n){const o={};for(const a in n)o[a]=n[a];return o}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(n,o){let a,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(a in h)n[a]=h[a];for(let T=0;T<g.length;T++)a=g[T],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function w(n){var o=1;n=n.split(":");const a=[];for(;0<o&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function E(n){u.setTimeout(()=>{throw n},0)}function d(){var n=yn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ye{constructor(){this.h=this.g=null}add(o,a){const h=Qe.get();h.set(o,a),this.h?this.h.next=h:this.g=h,this.h=h}}var Qe=new B(()=>new Zo,n=>n.reset());class Zo{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,et=!1,yn=new ye,Li=()=>{const n=u.Promise.resolve(void 0);Ze=()=>{n.then(ea)}};var ea=()=>{for(var n;n=d();){try{n.h.call(n.g)}catch(a){E(a)}var o=Qe;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}et=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var ta=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};u.addEventListener("test",a,o),u.removeEventListener("test",a,o)}catch{}return n}();function tt(n,o){if(G.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(me){e:{try{q(o.nodeName);var _=!0;break e}catch{}_=!1}_||(o=null)}}else a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:na[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&tt.aa.h.call(this)}}A(tt,G);var na={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),ia=0;function ra(n,o,a,h,_){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!h,this.ha=_,this.key=++ia,this.da=this.fa=!1}function St(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Ct(n){this.src=n,this.g={},this.h=0}Ct.prototype.add=function(n,o,a,h,_){var T=n.toString();n=this.g[T],n||(n=this.g[T]=[],this.h++);var S=vn(n,o,h,_);return-1<S?(o=n[S],a||(o.fa=!1)):(o=new ra(o,this.src,T,!!h,_),o.fa=a,n.push(o)),o};function wn(n,o){var a=o.type;if(a in n.g){var h=n.g[a],_=Array.prototype.indexOf.call(h,o,void 0),T;(T=0<=_)&&Array.prototype.splice.call(h,_,1),T&&(St(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function vn(n,o,a,h){for(var _=0;_<n.length;++_){var T=n[_];if(!T.da&&T.listener==o&&T.capture==!!a&&T.ha==h)return _}return-1}var _n="closure_lm_"+(1e6*Math.random()|0),En={};function Ui(n,o,a,h,_){if(Array.isArray(o)){for(var T=0;T<o.length;T++)Ui(n,o[T],a,h,_);return null}return a=Fi(a),n&&n[At]?n.K(o,a,v(h)?!!h.capture:!!h,_):sa(n,o,a,!1,h,_)}function sa(n,o,a,h,_,T){if(!o)throw Error("Invalid event type");var S=v(_)?!!_.capture:!!_,F=Tn(n);if(F||(n[_n]=F=new Ct(n)),a=F.add(o,a,h,S,T),a.proxy)return a;if(h=oa(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)ta||(_=S),_===void 0&&(_=!1),n.addEventListener(o.toString(),h,_);else if(n.attachEvent)n.attachEvent(xi(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function oa(){function n(a){return o.call(n.src,n.listener,a)}const o=aa;return n}function Mi(n,o,a,h,_){if(Array.isArray(o))for(var T=0;T<o.length;T++)Mi(n,o[T],a,h,_);else h=v(h)?!!h.capture:!!h,a=Fi(a),n&&n[At]?(n=n.i,o=String(o).toString(),o in n.g&&(T=n.g[o],a=vn(T,a,h,_),-1<a&&(St(T[a]),Array.prototype.splice.call(T,a,1),T.length==0&&(delete n.g[o],n.h--)))):n&&(n=Tn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=vn(o,a,h,_)),(a=-1<n?o[n]:null)&&In(a))}function In(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[At])wn(o.i,n);else{var a=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(a,h,n.capture):o.detachEvent?o.detachEvent(xi(a),h):o.addListener&&o.removeListener&&o.removeListener(h),(a=Tn(o))?(wn(a,n),a.h==0&&(a.src=null,o[_n]=null)):St(n)}}}function xi(n){return n in En?En[n]:En[n]="on"+n}function aa(n,o){if(n.da)n=!0;else{o=new tt(o,this);var a=n.listener,h=n.ha||n.src;n.fa&&In(n),n=a.call(h,o)}return n}function Tn(n){return n=n[_n],n instanceof Ct?n:null}var bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(n){return typeof n=="function"?n:(n[bn]||(n[bn]=function(o){return n.handleEvent(o)}),n[bn])}function W(){_e.call(this),this.i=new Ct(this),this.M=this,this.F=null}A(W,_e),W.prototype[At]=!0,W.prototype.removeEventListener=function(n,o,a,h){Mi(this,n,o,a,h)};function Y(n,o){var a,h=n.F;if(h)for(a=[];h;h=h.F)a.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new G(o,n);else if(o instanceof G)o.target=o.target||n;else{var _=o;o=new G(h,n),m(o,_)}if(_=!0,a)for(var T=a.length-1;0<=T;T--){var S=o.g=a[T];_=Rt(S,h,!0,o)&&_}if(S=o.g=n,_=Rt(S,h,!0,o)&&_,_=Rt(S,h,!1,o)&&_,a)for(T=0;T<a.length;T++)S=o.g=a[T],_=Rt(S,h,!1,o)&&_}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var a=n.g[o],h=0;h<a.length;h++)St(a[h]);delete n.g[o],n.h--}}this.F=null},W.prototype.K=function(n,o,a,h){return this.i.add(String(n),o,!1,a,h)},W.prototype.L=function(n,o,a,h){return this.i.add(String(n),o,!0,a,h)};function Rt(n,o,a,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var _=!0,T=0;T<o.length;++T){var S=o[T];if(S&&!S.da&&S.capture==a){var F=S.listener,K=S.ha||S.src;S.fa&&wn(n.i,S),_=F.call(K,h)!==!1&&_}}return _&&!h.defaultPrevented}function Bi(n,o,a){if(typeof n=="function")a&&(n=P(n,a));else if(n&&typeof n.handleEvent=="function")n=P(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(n,o||0)}function ji(n){n.g=Bi(()=>{n.g=null,n.i&&(n.i=!1,ji(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class ca extends _e{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(n){_e.call(this),this.h=n,this.g={}}A(nt,_e);var Hi=[];function Vi(n){V(n.g,function(o,a){this.g.hasOwnProperty(a)&&In(o)},n),n.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Vi(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var An=u.JSON.stringify,la=u.JSON.parse,ha=class{stringify(n){return u.JSON.stringify(n,void 0)}parse(n){return u.JSON.parse(n,void 0)}};function Sn(){}Sn.prototype.h=null;function $i(n){return n.h||(n.h=n.i())}function ua(){}var it={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cn(){G.call(this,"d")}A(Cn,G);function Rn(){G.call(this,"c")}A(Rn,G);var He={},zi=null;function Pn(){return zi=zi||new W}He.La="serverreachability";function qi(n){G.call(this,He.La,n)}A(qi,G);function rt(n){const o=Pn();Y(o,new qi(o))}He.STAT_EVENT="statevent";function Ki(n,o){G.call(this,He.STAT_EVENT,n),this.stat=o}A(Ki,G);function Q(n){const o=Pn();Y(o,new Ki(o,n))}He.Ma="timingevent";function Gi(n,o){G.call(this,He.Ma,n),this.size=o}A(Gi,G);function st(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){n()},o)}function ot(){this.g=!0}ot.prototype.xa=function(){this.g=!1};function fa(n,o,a,h,_,T){n.info(function(){if(n.g)if(T)for(var S="",F=T.split("&"),K=0;K<F.length;K++){var U=F[K].split("=");if(1<U.length){var J=U[0];U=U[1];var X=J.split("_");S=2<=X.length&&X[1]=="type"?S+(J+"="+U+"&"):S+(J+"=redacted&")}}else S=null;else S=T;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+o+`
`+a+`
`+S})}function da(n,o,a,h,_,T,S){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+o+`
`+a+`
`+T+" "+S})}function Ve(n,o,a,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+ga(n,a)+(h?" "+h:"")})}function pa(n,o){n.info(function(){return"TIMEOUT: "+o})}ot.prototype.info=function(){};function ga(n,o){if(!n.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var h=a[n];if(!(2>h.length)){var _=h[1];if(Array.isArray(_)&&!(1>_.length)){var T=_[0];if(T!="noop"&&T!="stop"&&T!="close")for(var S=1;S<_.length;S++)_[S]=""}}}}return An(a)}catch{return o}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ma={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Pt(){}A(Pt,Sn),Pt.prototype.g=function(){return new XMLHttpRequest},Pt.prototype.i=function(){return{}},Nn=new Pt;function Ee(n,o,a,h){this.j=n,this.i=o,this.l=a,this.R=h||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Ji={},Dn={};function kn(n,o,a){n.L=1,n.v=kt(we(o)),n.m=a,n.P=!0,Xi(n,null)}function Xi(n,o){n.F=Date.now(),Ot(n),n.A=we(n.v);var a=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),hr(a.i,"t",h),n.C=0,a=n.j.J,n.h=new Wi,n.g=Rr(n.j,a?o:null,!n.m),0<n.O&&(n.M=new ca(P(n.Y,n,n.g),n.O)),o=n.U,a=n.g,h=n.ca;var _="readystatechange";Array.isArray(_)||(_&&(Hi[0]=_.toString()),_=Hi);for(var T=0;T<_.length;T++){var S=Ui(a,_[T],h||o.handleEvent,!1,o.h||o);if(!S)break;o.g[S.key]=S}o=n.H?f(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),rt(),fa(n.i,n.u,n.A,n.l,n.R,n.m)}Ee.prototype.ca=function(n){n=n.target;const o=this.M;o&&ve(n)==3?o.j():this.Y(n)},Ee.prototype.Y=function(n){try{if(n==this.g)e:{const X=ve(this.g);var o=this.g.Ba();const qe=this.g.Z();if(!(3>X)&&(X!=3||this.g&&(this.h.h||this.g.oa()||yr(this.g)))){this.J||X!=4||o==7||(o==8||0>=qe?rt(3):rt(2)),Ln(this);var a=this.g.Z();this.X=a;t:if(Yi(this)){var h=yr(this.g);n="";var _=h.length,T=ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),at(this);var S="";break t}this.h.i=new u.TextDecoder}for(o=0;o<_;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(T&&o==_-1)});h.length=0,this.h.g+=n,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=a==200,da(this.i,this.u,this.A,this.l,this.R,X,a),this.o){if(this.T&&!this.K){t:{if(this.g){var F,K=this.g;if((F=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(F)){var U=F;break t}}U=null}if(a=U)Ve(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Un(this,a);else{this.o=!1,this.s=3,Q(12),Pe(this),at(this);break e}}if(this.P){a=!0;let le;for(;!this.J&&this.C<S.length;)if(le=ya(this,S),le==Dn){X==4&&(this.s=4,Q(14),a=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Ji){this.s=4,Q(15),Ve(this.i,this.l,S,"[Invalid Chunk]"),a=!1;break}else Ve(this.i,this.l,le,null),Un(this,le);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||S.length!=0||this.h.h||(this.s=1,Q(16),a=!1),this.o=this.o&&a,!a)Ve(this.i,this.l,S,"[Invalid Chunked Response]"),Pe(this),at(this);else if(0<S.length&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.ba&&!J.M&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Hn(J),J.M=!0,Q(11))}}else Ve(this.i,this.l,S,null),Un(this,S);X==4&&Pe(this),this.o&&!this.J&&(X==4?br(this.j,this):(this.o=!1,Ot(this)))}else La(this.g),a==400&&0<S.indexOf("Unknown SID")?(this.s=3,Q(12)):(this.s=0,Q(13)),Pe(this),at(this)}}}catch{}finally{}};function Yi(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function ya(n,o){var a=n.C,h=o.indexOf(`
`,a);return h==-1?Dn:(a=Number(o.substring(a,h)),isNaN(a)?Ji:(h+=1,h+a>o.length?Dn:(o=o.slice(h,h+a),n.C=h+a,o)))}Ee.prototype.cancel=function(){this.J=!0,Pe(this)};function Ot(n){n.S=Date.now()+n.I,Qi(n,n.I)}function Qi(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=st(P(n.ba,n),o)}function Ln(n){n.B&&(u.clearTimeout(n.B),n.B=null)}Ee.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(pa(this.i,this.A),this.L!=2&&(rt(),Q(17)),Pe(this),this.s=2,at(this)):Qi(this,this.S-n)};function at(n){n.j.G==0||n.J||br(n.j,n)}function Pe(n){Ln(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,Vi(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function Un(n,o){try{var a=n.j;if(a.G!=0&&(a.g==n||Mn(a.h,n))){if(!n.K&&Mn(a.h,n)&&a.G==3){try{var h=a.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)Bt(a),xt(a);else break e;jn(a),Q(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=st(P(a.Za,a),6e3));if(1>=tr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Ne(a,11)}else if((n.K||a.g==n)&&Bt(a),!H(o))for(_=a.Da.g.parse(o),o=0;o<_.length;o++){let U=_[o];if(a.T=U[0],U=U[1],a.G==2)if(U[0]=="c"){a.K=U[1],a.ia=U[2];const J=U[3];J!=null&&(a.la=J,a.j.info("VER="+a.la));const X=U[4];X!=null&&(a.Aa=X,a.j.info("SVER="+a.Aa));const qe=U[5];qe!=null&&typeof qe=="number"&&0<qe&&(h=1.5*qe,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const le=n.g;if(le){const jt=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jt){var T=h.h;T.g||jt.indexOf("spdy")==-1&&jt.indexOf("quic")==-1&&jt.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(xn(T,T.h),T.h=null))}if(h.D){const Vn=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;Vn&&(h.ya=Vn,j(h.I,h.D,Vn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var S=n;if(h.qa=Cr(h,h.J?h.ia:null,h.W),S.K){nr(h.h,S);var F=S,K=h.L;K&&(F.I=K),F.B&&(Ln(F),Ot(F)),h.g=S}else Ir(h);0<a.i.length&&Ft(a)}else U[0]!="stop"&&U[0]!="close"||Ne(a,7);else a.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Ne(a,7):Bn(a):U[0]!="noop"&&a.l&&a.l.ta(U),a.v=0)}}rt(4)}catch{}}var wa=class{constructor(n,o){this.g=n,this.map=o}};function Zi(n){this.l=n||10,u.PerformanceNavigationTiming?(n=u.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function er(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function tr(n){return n.h?1:n.g?n.g.size:0}function Mn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function xn(n,o){n.g?n.g.add(o):n.h=o}function nr(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Zi.prototype.cancel=function(){if(this.i=ir(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ir(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.D);return o}return R(n.i)}function va(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(p(n)){for(var o=[],a=n.length,h=0;h<a;h++)o.push(n[h]);return o}o=[],a=0;for(h in n)o[a++]=n[h];return o}function _a(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(p(n)||typeof n=="string"){var o=[];n=n.length;for(var a=0;a<n;a++)o.push(a);return o}o=[],a=0;for(const h in n)o[a++]=h;return o}}}function rr(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(p(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var a=_a(n),h=va(n),_=h.length,T=0;T<_;T++)o.call(void 0,h[T],a&&a[T],n)}var sr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ea(n,o){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var h=n[a].indexOf("="),_=null;if(0<=h){var T=n[a].substring(0,h);_=n[a].substring(h+1)}else T=n[a];o(T,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Oe(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof Oe){this.h=n.h,Nt(this,n.j),this.o=n.o,this.g=n.g,Dt(this,n.s),this.l=n.l;var o=n.i,a=new ht;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),or(this,a),this.m=n.m}else n&&(o=String(n).match(sr))?(this.h=!1,Nt(this,o[1]||"",!0),this.o=ct(o[2]||""),this.g=ct(o[3]||"",!0),Dt(this,o[4]),this.l=ct(o[5]||"",!0),or(this,o[6]||"",!0),this.m=ct(o[7]||"")):(this.h=!1,this.i=new ht(null,this.h))}Oe.prototype.toString=function(){var n=[],o=this.j;o&&n.push(lt(o,ar,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(lt(o,ar,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(lt(a,a.charAt(0)=="/"?ba:Ta,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",lt(a,Sa)),n.join("")};function we(n){return new Oe(n)}function Nt(n,o,a){n.j=a?ct(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Dt(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function or(n,o,a){o instanceof ht?(n.i=o,Ca(n.i,n.h)):(a||(o=lt(o,Aa)),n.i=new ht(o,n.h))}function j(n,o,a){n.i.set(o,a)}function kt(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ct(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function lt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,Ia),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Ia(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ar=/[#\/\?@]/g,Ta=/[#\?:]/g,ba=/[#\?]/g,Aa=/[#\?@]/g,Sa=/#/g;function ht(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Ie(n){n.g||(n.g=new Map,n.h=0,n.i&&Ea(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}t=ht.prototype,t.add=function(n,o){Ie(this),this.i=null,n=$e(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function cr(n,o){Ie(n),o=$e(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function lr(n,o){return Ie(n),o=$e(n,o),n.g.has(o)}t.forEach=function(n,o){Ie(this),this.g.forEach(function(a,h){a.forEach(function(_){n.call(o,_,h,this)},this)},this)},t.na=function(){Ie(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let h=0;h<o.length;h++){const _=n[h];for(let T=0;T<_.length;T++)a.push(o[h])}return a},t.V=function(n){Ie(this);let o=[];if(typeof n=="string")lr(this,n)&&(o=o.concat(this.g.get($e(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)o=o.concat(n[a])}return o},t.set=function(n,o){return Ie(this),this.i=null,n=$e(this,n),lr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},t.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function hr(n,o,a){cr(n,o),0<a.length&&(n.i=null,n.g.set($e(n,o),R(a)),n.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var h=o[a];const T=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var _=T;S[h]!==""&&(_+="="+encodeURIComponent(String(S[h]))),n.push(_)}}return this.i=n.join("&")};function $e(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Ca(n,o){o&&!n.j&&(Ie(n),n.i=null,n.g.forEach(function(a,h){var _=h.toLowerCase();h!=_&&(cr(this,h),hr(this,_,a))},n)),n.j=o}function Ra(n,o){const a=new ot;if(u.Image){const h=new Image;h.onload=O(Te,a,"TestLoadImage: loaded",!0,o,h),h.onerror=O(Te,a,"TestLoadImage: error",!1,o,h),h.onabort=O(Te,a,"TestLoadImage: abort",!1,o,h),h.ontimeout=O(Te,a,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Pa(n,o){const a=new ot,h=new AbortController,_=setTimeout(()=>{h.abort(),Te(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(T=>{clearTimeout(_),T.ok?Te(a,"TestPingServer: ok",!0,o):Te(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(_),Te(a,"TestPingServer: error",!1,o)})}function Te(n,o,a,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(a)}catch{}}function Oa(){this.g=new ha}function Na(n,o,a){const h=a||"";try{rr(n,function(_,T){let S=_;v(_)&&(S=An(_)),o.push(h+T+"="+encodeURIComponent(S))})}catch(_){throw o.push(h+"type="+encodeURIComponent("_badmap")),_}}function Lt(n){this.l=n.Ub||null,this.j=n.eb||!1}A(Lt,Sn),Lt.prototype.g=function(){return new Ut(this.l,this.j)},Lt.prototype.i=function(n){return function(){return n}}({});function Ut(n,o){W.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ut,W),t=Ut.prototype,t.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,ft(this)},t.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ut(this)),this.readyState=0},t.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ur(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function ur(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}t.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?ut(this):ft(this),this.readyState==3&&ur(this)}},t.Ra=function(n){this.g&&(this.response=this.responseText=n,ut(this))},t.Qa=function(n){this.g&&(this.response=n,ut(this))},t.ga=function(){this.g&&ut(this)};function ut(n){n.readyState=4,n.l=null,n.j=null,n.v=null,ft(n)}t.setRequestHeader=function(n,o){this.u.append(n,o)},t.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function ft(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ut.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function fr(n){let o="";return V(n,function(a,h){o+=h,o+=":",o+=a,o+=`\r
`}),o}function Fn(n,o,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=fr(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):j(n,o,a))}function $(n){W.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A($,W);var Da=/^https?$/i,ka=["POST","PUT"];t=$.prototype,t.Ha=function(n){this.J=n},t.ea=function(n,o,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?$i(this.o):$i(Nn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(T){dr(this,T);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)a.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())a.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(T=>T.toLowerCase()=="content-type"),_=u.FormData&&n instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ka,o,void 0))||h||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,S]of a)this.g.setRequestHeader(T,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mr(this),this.u=!0,this.g.send(n),this.u=!1}catch(T){dr(this,T)}};function dr(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,pr(n),Mt(n)}function pr(n){n.A||(n.A=!0,Y(n,"complete"),Y(n,"error"))}t.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,Y(this,"complete"),Y(this,"abort"),Mt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),$.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gr(this):this.bb())},t.bb=function(){gr(this)};function gr(n){if(n.h&&typeof l<"u"&&(!n.v[1]||ve(n)!=4||n.Z()!=2)){if(n.u&&ve(n)==4)Bi(n.Ea,0,n);else if(Y(n,"readystatechange"),ve(n)==4){n.h=!1;try{const S=n.Z();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var h;if(h=S===0){var _=String(n.D).match(sr)[1]||null;!_&&u.self&&u.self.location&&(_=u.self.location.protocol.slice(0,-1)),h=!Da.test(_?_.toLowerCase():"")}a=h}if(a)Y(n,"complete"),Y(n,"success");else{n.m=6;try{var T=2<ve(n)?n.g.statusText:""}catch{T=""}n.l=T+" ["+n.Z()+"]",pr(n)}}finally{Mt(n)}}}}function Mt(n,o){if(n.g){mr(n);const a=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||Y(n,"ready");try{a.onreadystatechange=h}catch{}}}function mr(n){n.I&&(u.clearTimeout(n.I),n.I=null)}t.isActive=function(){return!!this.g};function ve(n){return n.g?n.g.readyState:0}t.Z=function(){try{return 2<ve(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),la(o)}};function yr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function La(n){const o={};n=(n.g&&2<=ve(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(H(n[h]))continue;var a=w(n[h]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const T=o[_]||[];o[_]=T,T.push(a)}y(o,function(h){return h.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function wr(n){this.Aa=0,this.i=[],this.j=new ot,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dt("baseRetryDelayMs",5e3,n),this.cb=dt("retryDelaySeedMs",1e4,n),this.Wa=dt("forwardChannelMaxRetries",2,n),this.wa=dt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(n&&n.concurrentRequestLimit),this.Da=new Oa,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wr.prototype,t.la=8,t.G=1,t.connect=function(n,o,a,h){Q(0),this.W=n,this.H=o||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=Cr(this,null,this.W),Ft(this)};function Bn(n){if(vr(n),n.G==3){var o=n.U++,a=we(n.I);if(j(a,"SID",n.K),j(a,"RID",o),j(a,"TYPE","terminate"),pt(n,a),o=new Ee(n,n.j,o),o.L=2,o.v=kt(we(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=o.v,a=!0),a||(o.g=Rr(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Ot(o)}Sr(n)}function xt(n){n.g&&(Hn(n),n.g.cancel(),n.g=null)}function vr(n){xt(n),n.u&&(u.clearTimeout(n.u),n.u=null),Bt(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&u.clearTimeout(n.s),n.s=null)}function Ft(n){if(!er(n.h)&&!n.s){n.s=!0;var o=n.Ga;Ze||Li(),et||(Ze(),et=!0),yn.add(o,n),n.B=0}}function Ua(n,o){return tr(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=st(P(n.Ga,n,o),Ar(n,n.B)),n.B++,!0)}t.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const _=new Ee(this,this.j,n);let T=this.o;if(this.S&&(T?(T=f(T),m(T,this.S)):T=this.S),this.m!==null||this.O||(_.H=T,T=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=Er(this,_,o),a=we(this.I),j(a,"RID",n),j(a,"CVER",22),this.D&&j(a,"X-HTTP-Session-Id",this.D),pt(this,a),T&&(this.O?o="headers="+encodeURIComponent(String(fr(T)))+"&"+o:this.m&&Fn(a,this.m,T)),xn(this.h,_),this.Ua&&j(a,"TYPE","init"),this.P?(j(a,"$req",o),j(a,"SID","null"),_.T=!0,kn(_,a,null)):kn(_,a,o),this.G=2}}else this.G==3&&(n?_r(this,n):this.i.length==0||er(this.h)||_r(this))};function _r(n,o){var a;o?a=o.l:a=n.U++;const h=we(n.I);j(h,"SID",n.K),j(h,"RID",a),j(h,"AID",n.T),pt(n,h),n.m&&n.o&&Fn(h,n.m,n.o),a=new Ee(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Er(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),xn(n.h,a),kn(a,h,o)}function pt(n,o){n.H&&V(n.H,function(a,h){j(o,h,a)}),n.l&&rr({},function(a,h){j(o,h,a)})}function Er(n,o,a){a=Math.min(n.i.length,a);var h=n.l?P(n.l.Na,n.l,n):null;e:{var _=n.i;let T=-1;for(;;){const S=["count="+a];T==-1?0<a?(T=_[0].g,S.push("ofs="+T)):T=0:S.push("ofs="+T);let F=!0;for(let K=0;K<a;K++){let U=_[K].g;const J=_[K].map;if(U-=T,0>U)T=Math.max(0,_[K].g-100),F=!1;else try{Na(J,S,"req"+U+"_")}catch{h&&h(J)}}if(F){h=S.join("&");break e}}}return n=n.i.splice(0,a),o.D=n,h}function Ir(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;Ze||Li(),et||(Ze(),et=!0),yn.add(o,n),n.v=0}}function jn(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=st(P(n.Fa,n),Ar(n,n.v)),n.v++,!0)}t.Fa=function(){if(this.u=null,Tr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=st(P(this.ab,this),n)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Q(10),xt(this),Tr(this))};function Hn(n){n.A!=null&&(u.clearTimeout(n.A),n.A=null)}function Tr(n){n.g=new Ee(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=we(n.qa);j(o,"RID","rpc"),j(o,"SID",n.K),j(o,"AID",n.T),j(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&j(o,"TO",n.ja),j(o,"TYPE","xmlhttp"),pt(n,o),n.m&&n.o&&Fn(o,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=kt(we(o)),a.m=null,a.P=!0,Xi(a,n)}t.Za=function(){this.C!=null&&(this.C=null,xt(this),jn(this),Q(19))};function Bt(n){n.C!=null&&(u.clearTimeout(n.C),n.C=null)}function br(n,o){var a=null;if(n.g==o){Bt(n),Hn(n),n.g=null;var h=2}else if(Mn(n.h,o))a=o.D,nr(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var _=n.B;h=Pn(),Y(h,new Gi(h,a)),Ft(n)}else Ir(n);else if(_=o.s,_==3||_==0&&0<o.X||!(h==1&&Ua(n,o)||h==2&&jn(n)))switch(a&&0<a.length&&(o=n.h,o.i=o.i.concat(a)),_){case 1:Ne(n,5);break;case 4:Ne(n,10);break;case 3:Ne(n,6);break;default:Ne(n,2)}}}function Ar(n,o){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*o}function Ne(n,o){if(n.j.info("Error code "+o),o==2){var a=P(n.fb,n),h=n.Xa;const _=!h;h=new Oe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Nt(h,"https"),kt(h),_?Ra(h.toString(),a):Pa(h.toString(),a)}else Q(2);n.G=0,n.l&&n.l.sa(o),Sr(n),vr(n)}t.fb=function(n){n?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function Sr(n){if(n.G=0,n.ka=[],n.l){const o=ir(n.h);(o.length!=0||n.i.length!=0)&&(D(n.ka,o),D(n.ka,n.i),n.h.i.length=0,R(n.i),n.i.length=0),n.l.ra()}}function Cr(n,o,a){var h=a instanceof Oe?we(a):new Oe(a);if(h.g!="")o&&(h.g=o+"."+h.g),Dt(h,h.s);else{var _=u.location;h=_.protocol,o=o?o+"."+_.hostname:_.hostname,_=+_.port;var T=new Oe(null);h&&Nt(T,h),o&&(T.g=o),_&&Dt(T,_),a&&(T.l=a),h=T}return a=n.D,o=n.ya,a&&o&&j(h,a,o),j(h,"VER",n.la),pt(n,h),h}function Rr(n,o,a){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new $(new Lt({eb:a})):new $(n.pa),o.Ha(n.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pr(){}t=Pr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oe(n,o){W.call(this),this.g=new wr(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!H(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!H(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new ze(this)}A(oe,W),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){Bn(this.g)},oe.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=An(n),n=a);o.i.push(new wa(o.Ya++,n)),o.G==3&&Ft(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,Bn(this.g),delete this.g,oe.aa.N.call(this)};function Or(n){Cn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}A(Or,Cn);function Nr(){Rn.call(this),this.status=1}A(Nr,Rn);function ze(n){this.g=n}A(ze,Pr),ze.prototype.ua=function(){Y(this.g,"a")},ze.prototype.ta=function(n){Y(this.g,new Or(n))},ze.prototype.sa=function(n){Y(this.g,new Nr)},ze.prototype.ra=function(){Y(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,ma.COMPLETE="complete",ua.EventType=it,it.OPEN="a",it.CLOSE="b",it.ERROR="c",it.MESSAGE="d",W.prototype.listen=W.prototype.K,$.prototype.listenOnce=$.prototype.L,$.prototype.getLastError=$.prototype.Ka,$.prototype.getLastErrorCode=$.prototype.Ba,$.prototype.getStatus=$.prototype.Z,$.prototype.getResponseJson=$.prototype.Oa,$.prototype.getResponseText=$.prototype.oa,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Ha}).apply(typeof Vt<"u"?Vt:typeof self<"u"?self:typeof window<"u"?window:{});const fs="@firebase/firestore";/**
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
 */class Z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
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
 */let pn="10.12.1";/**
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
 */const en=new hn("@firebase/firestore");function re(t,...e){if(en.logLevel<=x.DEBUG){const i=e.map(Co);en.debug(`Firestore (${pn}): ${t}`,...i)}}function Ci(t,...e){if(en.logLevel<=x.ERROR){const i=e.map(Co);en.error(`Firestore (${pn}): ${t}`,...i)}}function Co(t){if(typeof t=="string")return t;try{/**
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
*/return function(i){return JSON.stringify(i)}(t)}catch{return t}}/**
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
 */function Ro(t="Unexpected state"){const e=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: `+t;throw Ci(e),new Error(e)}function wi(t,e){t||Ro()}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends ge{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class We{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class vu{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _u{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(Z.UNAUTHENTICATED))}shutdown(){}}class Eu{constructor(e){this.t=e,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){let r=this.i;const s=p=>this.i!==r?(r=this.i,i(p)):Promise.resolve();let c=new We;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new We,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const p=c;e.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},u=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(p=>u(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?u(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new We)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wi(typeof r.accessToken=="string"),new vu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return wi(e===null||typeof e=="string"),new Z(e)}}class Iu{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tu{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Iu(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Au{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,re("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const s=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>s(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?s(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(wi(typeof i.token=="string"),this.R=i.token,new bu(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Su(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<t;r++)i[r]=Math.floor(256*Math.random());return i}/**
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
 */class Cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Su(40);for(let c=0;c<s.length;++c)r.length<20&&s[c]<i&&(r+=e.charAt(s[c]%e.length))}return r}}function Po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ru{constructor(e,i,r,s,c,l,u,p,v){this.databaseId=e,this.appId=i,this.persistenceKey=r,this.host=s,this.ssl=c,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=p,this.useFetchStreams=v}}class tn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var ds,L;(L=ds||(ds={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new So([4294967295,4294967295],0);function ei(){return typeof document<"u"?document:null}/**
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
 */class Pu{constructor(e,i,r=1e3,s=1.5,c=6e4){this.oi=e,this.timerId=i,this.No=r,this.Lo=s,this.Bo=c,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const i=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,i-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ri{constructor(e,i,r,s,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,s,c){const l=Date.now()+r,u=new Ri(e,i,l,s,c);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ou(t,e){if(Ci("AsyncQueue",`${e}: ${t}`),Po(t))return new ie(ne.UNAVAILABLE,`${e}: ${t}`);throw t}var ps,gs;(gs=ps||(ps={})).J_="default",gs.Cache="cache";/**
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
 */class Nu{constructor(e,i,r,s){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=r,this.databaseInfo=s,this.user=Z.UNAUTHENTICATED,this.clientId=Cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async c=>{re("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(re("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(ne.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const r=Ou(i,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function Oo(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ms=new Map;function Du(t,e,i,r){if(e===!0&&r===!0)throw new ie(ne.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}/**
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
 */class ys{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Du("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oo((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ie(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ie(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ie(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ku{constructor(e,i,r,s){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ys({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ys(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _u;switch(r.type){case"firstParty":return new Tu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=ms.get(i);r&&(re("ComponentProvider","Removing Datastore"),ms.delete(i),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Lu{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Pu(this,"async_queue_retry"),this.hu=()=>{const i=ei();i&&re("AsyncQueue","Visibility state changed to "+i.visibilityState),this.Yo.Wo()};const e=ei();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const i=ei();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const i=new We;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Po(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const i=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Ci("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=i,i}enqueueAfterDelay(e,i,r){this.Pu(),this.lu.indexOf(e)>-1&&(i=0);const s=Ri.createAndSchedule(this,e,i,r,c=>this.Eu(c));return this._u.push(s),s}Pu(){this.au&&Ro()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const i of this._u)if(i.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this._u)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const i=this._u.indexOf(e);this._u.splice(i,1)}}class Uu extends ku{constructor(e,i,r,s){super(e,i,r,s),this.type="firestore",this._queue=function(){return new Lu}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mu(this),this._firestoreClient.terminate()}}function Mu(t){var e,i,r;const s=t._freezeSettings(),c=function(u,p,v,I){return new Ru(u,p,v,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Oo(I.experimentalLongPollingOptions),I.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Nu(t._authCredentials,t._appCheckCredentials,t._queue,c),!((i=s.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,i=!0){(function(s){pn=s})(fn),pe(new ue("firestore",(r,{instanceIdentifier:s,options:c})=>{const l=r.getProvider("app").getImmediate(),u=new Uu(new Eu(r.getProvider("auth-internal")),new Au(r.getProvider("app-check-internal")),function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(v.options.projectId,I)}(l,s),l);return c=Object.assign({useFetchStreams:i},c),u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),ce(fs,"4.6.3",e),ce(fs,"4.6.3","esm2017")})();const No="@firebase/installations",Pi="0.6.7";/**
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
 */const Do=1e4,ko=`w:${Pi}`,Lo="FIS_v2",xu="https://firebaseinstallations.googleapis.com/v1",Fu=60*60*1e3,Bu="installations",ju="Installations";/**
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
 */const Hu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fe=new je(Bu,ju,Hu);function Uo(t){return t instanceof ge&&t.code.includes("request-failed")}/**
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
 */function Mo({projectId:t}){return`${xu}/projects/${t}/installations`}function xo(t){return{token:t.token,requestStatus:2,expiresIn:$u(t.expiresIn),creationTime:Date.now()}}async function Fo(t,e){const r=(await e.json()).error;return Fe.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bo({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vu(t,{refreshToken:e}){const i=Bo(t);return i.append("Authorization",zu(e)),i}async function jo(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $u(t){return Number(t.replace("s","000"))}function zu(t){return`${Lo} ${t}`}/**
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
 */async function qu({appConfig:t,heartbeatServiceProvider:e},{fid:i}){const r=Mo(t),s=Bo(t),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&s.append("x-firebase-client",v)}const l={fid:i,authVersion:Lo,appId:t.appId,sdkVersion:ko},u={method:"POST",headers:s,body:JSON.stringify(l)},p=await jo(()=>fetch(r,u));if(p.ok){const v=await p.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:xo(v.authToken)}}else throw await Fo("Create Installation",p)}/**
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
 */function Ho(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ku(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Gu=/^[cdef][\w-]{21}$/,vi="";function Wu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const i=Ju(t);return Gu.test(i)?i:vi}catch{return vi}}function Ju(t){return Ku(t).substr(0,22)}/**
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
 */function gn(t){return`${t.appName}!${t.appId}`}/**
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
 */const Vo=new Map;function $o(t,e){const i=gn(t);zo(i,e),Xu(i,e)}function zo(t,e){const i=Vo.get(t);if(i)for(const r of i)r(e)}function Xu(t,e){const i=Yu();i&&i.postMessage({key:t,fid:e}),Qu()}let Le=null;function Yu(){return!Le&&"BroadcastChannel"in self&&(Le=new BroadcastChannel("[Firebase] FID Change"),Le.onmessage=t=>{zo(t.data.key,t.data.fid)}),Le}function Qu(){Vo.size===0&&Le&&(Le.close(),Le=null)}/**
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
 */const Zu="firebase-installations-database",ef=1,Be="firebase-installations-store";let ti=null;function Oi(){return ti||(ti=ao(Zu,ef,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Be)}}})),ti}async function nn(t,e){const i=gn(t),s=(await Oi()).transaction(Be,"readwrite"),c=s.objectStore(Be),l=await c.get(i);return await c.put(e,i),await s.done,(!l||l.fid!==e.fid)&&$o(t,e.fid),e}async function qo(t){const e=gn(t),r=(await Oi()).transaction(Be,"readwrite");await r.objectStore(Be).delete(e),await r.done}async function mn(t,e){const i=gn(t),s=(await Oi()).transaction(Be,"readwrite"),c=s.objectStore(Be),l=await c.get(i),u=e(l);return u===void 0?await c.delete(i):await c.put(u,i),await s.done,u&&(!l||l.fid!==u.fid)&&$o(t,u.fid),u}/**
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
 */async function Ni(t){let e;const i=await mn(t.appConfig,r=>{const s=tf(r),c=nf(t,s);return e=c.registrationPromise,c.installationEntry});return i.fid===vi?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function tf(t){const e=t||{fid:Wu(),registrationStatus:0};return Ko(e)}function nf(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rf(t,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sf(t)}:{installationEntry:e}}async function rf(t,e){try{const i=await qu(t,e);return nn(t.appConfig,i)}catch(i){throw Uo(i)&&i.customData.serverCode===409?await qo(t.appConfig):await nn(t.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function sf(t){let e=await ws(t.appConfig);for(;e.registrationStatus===1;)await Ho(100),e=await ws(t.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await Ni(t);return r||i}return e}function ws(t){return mn(t,e=>{if(!e)throw Fe.create("installation-not-found");return Ko(e)})}function Ko(t){return of(t)?{fid:t.fid,registrationStatus:0}:t}function of(t){return t.registrationStatus===1&&t.registrationTime+Do<Date.now()}/**
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
 */async function af({appConfig:t,heartbeatServiceProvider:e},i){const r=cf(t,i),s=Vu(t,i),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&s.append("x-firebase-client",v)}const l={installation:{sdkVersion:ko,appId:t.appId}},u={method:"POST",headers:s,body:JSON.stringify(l)},p=await jo(()=>fetch(r,u));if(p.ok){const v=await p.json();return xo(v)}else throw await Fo("Generate Auth Token",p)}function cf(t,{fid:e}){return`${Mo(t)}/${e}/authTokens:generate`}/**
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
 */async function Di(t,e=!1){let i;const r=await mn(t.appConfig,c=>{if(!Go(c))throw Fe.create("not-registered");const l=c.authToken;if(!e&&uf(l))return c;if(l.requestStatus===1)return i=lf(t,e),c;{if(!navigator.onLine)throw Fe.create("app-offline");const u=df(c);return i=hf(t,u),u}});return i?await i:r.authToken}async function lf(t,e){let i=await vs(t.appConfig);for(;i.authToken.requestStatus===1;)await Ho(100),i=await vs(t.appConfig);const r=i.authToken;return r.requestStatus===0?Di(t,e):r}function vs(t){return mn(t,e=>{if(!Go(e))throw Fe.create("not-registered");const i=e.authToken;return pf(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hf(t,e){try{const i=await af(t,e),r=Object.assign(Object.assign({},e),{authToken:i});return await nn(t.appConfig,r),i}catch(i){if(Uo(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await qo(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nn(t.appConfig,r)}throw i}}function Go(t){return t!==void 0&&t.registrationStatus===2}function uf(t){return t.requestStatus===2&&!ff(t)}function ff(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fu}function df(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pf(t){return t.requestStatus===1&&t.requestTime+Do<Date.now()}/**
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
 */async function gf(t){const e=t,{installationEntry:i,registrationPromise:r}=await Ni(e);return r?r.catch(console.error):Di(e).catch(console.error),i.fid}/**
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
 */async function mf(t,e=!1){const i=t;return await yf(i),(await Di(i,e)).token}async function yf(t){const{registrationPromise:e}=await Ni(t);e&&await e}/**
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
 */function wf(t){if(!t||!t.options)throw ni("App Configuration");if(!t.name)throw ni("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw ni(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ni(t){return Fe.create("missing-app-config-values",{valueName:t})}/**
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
 */const Wo="installations",vf="installations-internal",_f=t=>{const e=t.getProvider("app").getImmediate(),i=wf(e),r=un(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ef=t=>{const e=t.getProvider("app").getImmediate(),i=un(e,Wo).getImmediate();return{getId:()=>gf(i),getToken:s=>mf(i,s)}};function If(){pe(new ue(Wo,_f,"PUBLIC")),pe(new ue(vf,Ef,"PRIVATE"))}If();ce(No,Pi);ce(No,Pi,"esm2017");/**
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
 */const rn="analytics",Tf="firebase_id",bf="origin",Af=60*1e3,Sf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ki="https://www.googletagmanager.com/gtag/js";/**
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
 */const te=new hn("@firebase/analytics");/**
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
 */const Cf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},se=new je("analytics","Analytics",Cf);/**
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
 */function Rf(t){if(!t.startsWith(ki)){const e=se.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function Jo(t){return Promise.all(t.map(e=>e.catch(i=>i)))}function Pf(t,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(t,e)),i}function Of(t,e){const i=Pf("firebase-js-sdk-policy",{createScriptURL:Rf}),r=document.createElement("script"),s=`${ki}?l=${t}&id=${e}`;r.src=i?i==null?void 0:i.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Nf(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Df(t,e,i,r,s,c){const l=r[s];try{if(l)await e[l];else{const p=(await Jo(i)).find(v=>v.measurementId===s);p&&await e[p.appId]}}catch(u){te.error(u)}t("config",s,c)}async function kf(t,e,i,r,s){try{let c=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const u=await Jo(i);for(const p of l){const v=u.find(C=>C.measurementId===p),I=v&&e[v.appId];if(I)c.push(I);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),t("event",r,s||{})}catch(c){te.error(c)}}function Lf(t,e,i,r){async function s(c,...l){try{if(c==="event"){const[u,p]=l;await kf(t,e,i,u,p)}else if(c==="config"){const[u,p]=l;await Df(t,e,i,r,u,p)}else if(c==="consent"){const[u,p]=l;t("consent",u,p)}else if(c==="get"){const[u,p,v]=l;t("get",u,p,v)}else if(c==="set"){const[u]=l;t("set",u)}else t(c,...l)}catch(u){te.error(u)}}return s}function Uf(t,e,i,r,s){let c=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(c=window[s]),window[s]=Lf(c,t,e,i),{gtagCore:c,wrappedGtag:window[s]}}function Mf(t){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(ki)&&i.src.includes(t))return i;return null}/**
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
 */const xf=30,Ff=1e3;class Bf{constructor(e={},i=Ff){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xo=new Bf;function jf(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hf(t){var e;const{appId:i,apiKey:r}=t,s={method:"GET",headers:jf(r)},c=Sf.replace("{app-id}",i),l=await fetch(c,s);if(l.status!==200&&l.status!==304){let u="";try{const p=await l.json();!((e=p.error)===null||e===void 0)&&e.message&&(u=p.error.message)}catch{}throw se.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function Vf(t,e=Xo,i){const{appId:r,apiKey:s,measurementId:c}=t.options;if(!r)throw se.create("no-app-id");if(!s){if(c)return{measurementId:c,appId:r};throw se.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new qf;return setTimeout(async()=>{u.abort()},Af),Yo({appId:r,apiKey:s,measurementId:c},l,u,e)}async function Yo(t,{throttleEndTimeMillis:e,backoffCount:i},r,s=Xo){var c;const{appId:l,measurementId:u}=t;try{await $f(r,e)}catch(p){if(u)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw p}try{const p=await Hf(t);return s.deleteThrottleMetadata(l),p}catch(p){const v=p;if(!zf(v)){if(s.deleteThrottleMetadata(l),u)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:l,measurementId:u};throw p}const I=Number((c=v==null?void 0:v.customData)===null||c===void 0?void 0:c.httpStatus)===503?Gr(i,s.intervalMillis,xf):Gr(i,s.intervalMillis),C={throttleEndTimeMillis:Date.now()+I,backoffCount:i+1};return s.setThrottleMetadata(l,C),te.debug(`Calling attemptFetch again in ${I} millis`),Yo(t,C,r,s)}}function $f(t,e){return new Promise((i,r)=>{const s=Math.max(e-Date.now(),0),c=setTimeout(i,s);t.addEventListener(()=>{clearTimeout(c),r(se.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zf(t){if(!(t instanceof ge)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Kf(t,e,i,r,s){if(s&&s.global){t("event",i,r);return}else{const c=await e,l=Object.assign(Object.assign({},r),{send_to:c});t("event",i,l)}}/**
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
 */async function Gf(){if(no())try{await io()}catch(t){return te.warn(se.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return te.warn(se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wf(t,e,i,r,s,c,l){var u;const p=Vf(t);p.then(O=>{i[O.measurementId]=O.appId,t.options.measurementId&&O.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>te.error(O)),e.push(p);const v=Gf().then(O=>{if(O)return r.getId()}),[I,C]=await Promise.all([p,v]);Mf(c)||Of(c,I.measurementId),s("js",new Date);const P=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return P[bf]="firebase",P.update=!0,C!=null&&(P[Tf]=C),s("config",I.measurementId,P),I.measurementId}/**
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
 */class Jf{constructor(e){this.app=e}_delete(){return delete vt[this.app.options.appId],Promise.resolve()}}let vt={},_s=[];const Es={};let ii="dataLayer",Xf="gtag",Is,Qo,Ts=!1;function Yf(){const t=[];if(to()&&t.push("This is a browser extension environment."),vl()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),i=se.create("invalid-analytics-context",{errorInfo:e});te.warn(i.message)}}function Qf(t,e,i){Yf();const r=t.options.appId;if(!r)throw se.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw se.create("no-api-key");if(vt[r]!=null)throw se.create("already-exists",{id:r});if(!Ts){Nf(ii);const{wrappedGtag:c,gtagCore:l}=Uf(vt,_s,Es,ii,Xf);Qo=c,Is=l,Ts=!0}return vt[r]=Wf(t,_s,Es,e,Is,ii,i),new Jf(t)}function Zf(t=Sh()){t=Ye(t);const e=un(t,rn);return e.isInitialized()?e.getImmediate():ed(t)}function ed(t,e={}){const i=un(t,rn);if(i.isInitialized()){const s=i.getImmediate();if(Jt(e,i.getOptions()))return s;throw se.create("already-initialized")}return i.initialize({options:e})}function td(t,e,i,r){t=Ye(t),Kf(Qo,vt[t.app.options.appId],e,i,r).catch(s=>te.error(s))}const bs="@firebase/analytics",As="0.10.4";function nd(){pe(new ue(rn,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Qf(r,s,i)},"PUBLIC")),pe(new ue("analytics-internal",t,"PRIVATE")),ce(bs,As),ce(bs,As,"esm2017");function t(e){try{const i=e.getProvider(rn).getImmediate();return{logEvent:(r,s,c)=>td(i,r,s,c)}}catch(i){throw se.create("interop-component-reg-failed",{reason:i})}}}nd();const id={apiKey:"AIzaSyDz2L3YhZJ4KquXAGis8b_FwmT6B1NhN3M",authDomain:"montserrat-express.firebaseapp.com",databaseURL:"https://montserrat-express-default-rtdb.europe-west1.firebasedatabase.app",projectId:"montserrat-express",storageBucket:"montserrat-express.appspot.com",messagingSenderId:"954584025750",appId:"1:954584025750:web:bc111c60970010480710b7",measurementId:"G-DJHT6HJDYV"},rd=co(id);Zf(rd);
