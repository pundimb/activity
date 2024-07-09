/*! third party licenses: js/vendor.LICENSE.txt */
var ae=Object.defineProperty;var Ee=(t,e,r)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var y=(t,e,r)=>Ee(t,typeof e!="symbol"?e+"":e,r);import{g as V}from"./_commonjsHelpers-BdswosdL.mjs";function ce(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H={exports:{}},E=H.exports={},u,I;function P(){throw new Error("setTimeout has not been defined")}function F(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=P}catch{u=P}try{typeof clearTimeout=="function"?I=clearTimeout:I=F}catch{I=F}})();function W(t){if(u===setTimeout)return setTimeout(t,0);if((u===P||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch{try{return u.call(null,t,0)}catch{return u.call(this,t,0)}}}function le(t){if(I===clearTimeout)return clearTimeout(t);if((I===F||!I)&&clearTimeout)return I=clearTimeout,clearTimeout(t);try{return I(t)}catch{try{return I.call(null,t)}catch{return I.call(this,t)}}}var R=[],O=!1,L,w=-1;function he(){!O||!L||(O=!1,L.length?R=L.concat(R):w=-1,R.length&&z())}function z(){if(!O){var t=W(he);O=!0;for(var e=R.length;e;){for(L=R,R=[];++w<e;)L&&L[w].run();w=-1,e=R.length}L=null,O=!1,le(t)}}E.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];R.push(new Y(t,e)),R.length===1&&!O&&W(z)};function Y(t,e){this.fun=t,this.array=e}Y.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={};function f(){}E.on=f,E.addListener=f,E.once=f,E.off=f,E.removeListener=f,E.removeAllListeners=f,E.emit=f,E.prependListener=f,E.prependOnceListener=f,E.listeners=function(t){return[]},E.binding=function(t){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(t){throw new Error("process.chdir is not supported")},E.umask=function(){return 0};var ue=H.exports;const Ie=ce(ue);var D={};const pe=typeof Ie=="object"&&D&&D.NODE_DEBUG&&/\bsemver\b/i.test(D.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var Z=pe;const fe="2.0.0",q=256,Re=Number.MAX_SAFE_INTEGER||9007199254740991,Le=16,de=q-6,Ne=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var J={MAX_LENGTH:q,MAX_SAFE_COMPONENT_LENGTH:Le,MAX_SAFE_BUILD_LENGTH:de,MAX_SAFE_INTEGER:Re,RELEASE_TYPES:Ne,SEMVER_SPEC_VERSION:fe,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},C={exports:{}};(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:a}=J,l=Z;e=t.exports={};const te=e.re=[],re=e.safeRe=[],n=e.src=[],s=e.t={};let ne=0;const S="[a-zA-Z0-9-]",se=[["\\s",1],["\\d",a],[S,i]],ie=d=>{for(const[p,v]of se)d=d.split("".concat(p,"*")).join("".concat(p,"{0,").concat(v,"}")).split("".concat(p,"+")).join("".concat(p,"{1,").concat(v,"}"));return d},o=(d,p,v)=>{const oe=ie(p),T=ne++;l(d,T,p),s[d]=T,n[T]=p,te[T]=new RegExp(p,v?"g":void 0),re[T]=new RegExp(oe,v?"g":void 0)};o("NUMERICIDENTIFIER","0|[1-9]\\d*"),o("NUMERICIDENTIFIERLOOSE","\\d+"),o("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-]".concat(S,"*")),o("MAINVERSION","(".concat(n[s.NUMERICIDENTIFIER],")\\.(").concat(n[s.NUMERICIDENTIFIER],")\\.(").concat(n[s.NUMERICIDENTIFIER],")")),o("MAINVERSIONLOOSE","(".concat(n[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(n[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(n[s.NUMERICIDENTIFIERLOOSE],")")),o("PRERELEASEIDENTIFIER","(?:".concat(n[s.NUMERICIDENTIFIER],"|").concat(n[s.NONNUMERICIDENTIFIER],")")),o("PRERELEASEIDENTIFIERLOOSE","(?:".concat(n[s.NUMERICIDENTIFIERLOOSE],"|").concat(n[s.NONNUMERICIDENTIFIER],")")),o("PRERELEASE","(?:-(".concat(n[s.PRERELEASEIDENTIFIER],"(?:\\.").concat(n[s.PRERELEASEIDENTIFIER],")*))")),o("PRERELEASELOOSE","(?:-?(".concat(n[s.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(n[s.PRERELEASEIDENTIFIERLOOSE],")*))")),o("BUILDIDENTIFIER","".concat(S,"+")),o("BUILD","(?:\\+(".concat(n[s.BUILDIDENTIFIER],"(?:\\.").concat(n[s.BUILDIDENTIFIER],")*))")),o("FULLPLAIN","v?".concat(n[s.MAINVERSION]).concat(n[s.PRERELEASE],"?").concat(n[s.BUILD],"?")),o("FULL","^".concat(n[s.FULLPLAIN],"$")),o("LOOSEPLAIN","[v=\\s]*".concat(n[s.MAINVERSIONLOOSE]).concat(n[s.PRERELEASELOOSE],"?").concat(n[s.BUILD],"?")),o("LOOSE","^".concat(n[s.LOOSEPLAIN],"$")),o("GTLT","((?:<|>)?=?)"),o("XRANGEIDENTIFIERLOOSE","".concat(n[s.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),o("XRANGEIDENTIFIER","".concat(n[s.NUMERICIDENTIFIER],"|x|X|\\*")),o("XRANGEPLAIN","[v=\\s]*(".concat(n[s.XRANGEIDENTIFIER],")(?:\\.(").concat(n[s.XRANGEIDENTIFIER],")(?:\\.(").concat(n[s.XRANGEIDENTIFIER],")(?:").concat(n[s.PRERELEASE],")?").concat(n[s.BUILD],"?)?)?")),o("XRANGEPLAINLOOSE","[v=\\s]*(".concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(n[s.XRANGEIDENTIFIERLOOSE],")(?:").concat(n[s.PRERELEASELOOSE],")?").concat(n[s.BUILD],"?)?)?")),o("XRANGE","^".concat(n[s.GTLT],"\\s*").concat(n[s.XRANGEPLAIN],"$")),o("XRANGELOOSE","^".concat(n[s.GTLT],"\\s*").concat(n[s.XRANGEPLAINLOOSE],"$")),o("COERCEPLAIN","(^|[^\\d])(\\d{1,".concat(r,"})(?:\\.(\\d{1,").concat(r,"}))?(?:\\.(\\d{1,").concat(r,"}))?")),o("COERCE","".concat(n[s.COERCEPLAIN],"(?:$|[^\\d])")),o("COERCEFULL",n[s.COERCEPLAIN]+"(?:".concat(n[s.PRERELEASE],")?(?:").concat(n[s.BUILD],")?(?:$|[^\\d])")),o("COERCERTL",n[s.COERCE],!0),o("COERCERTLFULL",n[s.COERCEFULL],!0),o("LONETILDE","(?:~>?)"),o("TILDETRIM","(\\s*)".concat(n[s.LONETILDE],"\\s+"),!0),e.tildeTrimReplace="$1~",o("TILDE","^".concat(n[s.LONETILDE]).concat(n[s.XRANGEPLAIN],"$")),o("TILDELOOSE","^".concat(n[s.LONETILDE]).concat(n[s.XRANGEPLAINLOOSE],"$")),o("LONECARET","(?:\\^)"),o("CARETTRIM","(\\s*)".concat(n[s.LONECARET],"\\s+"),!0),e.caretTrimReplace="$1^",o("CARET","^".concat(n[s.LONECARET]).concat(n[s.XRANGEPLAIN],"$")),o("CARETLOOSE","^".concat(n[s.LONECARET]).concat(n[s.XRANGEPLAINLOOSE],"$")),o("COMPARATORLOOSE","^".concat(n[s.GTLT],"\\s*(").concat(n[s.LOOSEPLAIN],")$|^$")),o("COMPARATOR","^".concat(n[s.GTLT],"\\s*(").concat(n[s.FULLPLAIN],")$|^$")),o("COMPARATORTRIM","(\\s*)".concat(n[s.GTLT],"\\s*(").concat(n[s.LOOSEPLAIN],"|").concat(n[s.XRANGEPLAIN],")"),!0),e.comparatorTrimReplace="$1$2$3",o("HYPHENRANGE","^\\s*(".concat(n[s.XRANGEPLAIN],")\\s+-\\s+(").concat(n[s.XRANGEPLAIN],")\\s*$")),o("HYPHENRANGELOOSE","^\\s*(".concat(n[s.XRANGEPLAINLOOSE],")\\s+-\\s+(").concat(n[s.XRANGEPLAINLOOSE],")\\s*$")),o("STAR","(<|>)?=?\\s*\\*"),o("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),o("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(C,C.exports);var me=C.exports;const Oe=Object.freeze({loose:!0}),ve=Object.freeze({}),Te=t=>t?typeof t!="object"?Oe:t:ve;var Ae=Te;const G=/^[0-9]+$/,K=(t,e)=>{const r=G.test(t),i=G.test(e);return r&&i&&(t=+t,e=+e),t===e?0:r&&!i?-1:i&&!r?1:t<e?-1:1},$e=(t,e)=>K(e,t);var ge={compareIdentifiers:K,rcompareIdentifiers:$e};const g=Z,{MAX_LENGTH:_,MAX_SAFE_INTEGER:b}=J,{safeRe:U,t:x}=me,be=Ae,{compareIdentifiers:N}=ge;let we=class h{constructor(e,r){if(r=be(r),e instanceof h){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError('Invalid version. Must be a string. Got type "'.concat(typeof e,'".'));if(e.length>_)throw new TypeError("version is longer than ".concat(_," characters"));g("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const i=e.trim().match(r.loose?U[x.LOOSE]:U[x.FULL]);if(!i)throw new TypeError("Invalid Version: ".concat(e));if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>b||this.major<0)throw new TypeError("Invalid major version");if(this.minor>b||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>b||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){const l=+a;if(l>=0&&l<b)return l}return a}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(g("SemVer.compare",this.version,this.options,e),!(e instanceof h)){if(typeof e=="string"&&e===this.version)return 0;e=new h(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof h||(e=new h(e,this.options)),N(this.major,e.major)||N(this.minor,e.minor)||N(this.patch,e.patch)}comparePre(e){if(e instanceof h||(e=new h(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const i=this.prerelease[r],a=e.prerelease[r];if(g("prerelease compare",r,i,a),i===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(i===void 0)return-1;if(i!==a)return N(i,a)}while(++r)}compareBuild(e){e instanceof h||(e=new h(e,this.options));let r=0;do{const i=this.build[r],a=e.build[r];if(g("prerelease compare",r,i,a),i===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(i===void 0)return-1;if(i!==a)return N(i,a)}while(++r)}inc(e,r,i){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,i),this.inc("pre",r,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,i),this.inc("pre",r,i);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const a=Number(i)?1:0;if(!r&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(r===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let l=[r,a];i===!1&&(l=[r]),N(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error("invalid increment argument: ".concat(e))}return this.raw=this.format(),this.build.length&&(this.raw+="+".concat(this.build.join("."))),this}};var Q=we;const X=Q,Se=(t,e,r=!1)=>{if(t instanceof X)return t;try{return new X(t,e)}catch(i){if(!r)return null;throw i}};var ye=Se;const De=ye,Pe=(t,e)=>{const r=De(t,e);return r?r.version:null};var Fe=Pe;const Ce=V(Fe),Me=Q,Ge=(t,e)=>new Me(t,e).major;var _e=Ge;const j=V(_e);class Ue{constructor(e){y(this,"bus");typeof e.getVersion!="function"||!Ce(e.getVersion())?console.warn("Proxying an event bus with an unknown or invalid version"):j(e.getVersion())!==j(this.getVersion())&&console.warn("Proxying an event bus of version "+e.getVersion()+" with "+this.getVersion()),this.bus=e}getVersion(){return"3.2.0"}subscribe(e,r){this.bus.subscribe(e,r)}unsubscribe(e,r){this.bus.unsubscribe(e,r)}emit(e,r){this.bus.emit(e,r)}}class xe{constructor(){y(this,"handlers",new Map)}getVersion(){return"3.2.0"}subscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).concat(r))}unsubscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).filter(i=>i!=r))}emit(e,r){(this.handlers.get(e)||[]).forEach(i=>{try{i(r)}catch(a){console.error("could not invoke event listener",a)}})}}let A=null;function M(){return A!==null?A:typeof window>"u"?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):(typeof window.OC<"u"&&window.OC._eventBus&&typeof window._nc_event_bus>"u"&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),typeof(window==null?void 0:window._nc_event_bus)<"u"?A=new Ue(window._nc_event_bus):A=window._nc_event_bus=new xe,A)}function Xe(t,e){M().subscribe(t,e)}function Qe(t,e){M().unsubscribe(t,e)}function et(t,e){M().emit(t,e)}let $;const ee=[];function tt(){if($===void 0){const t=document==null?void 0:document.getElementsByTagName("head")[0];$=t?t.getAttribute("data-requesttoken"):null}return $}function rt(t){ee.push(t)}Xe("csrf-token-update",t=>{$=t.token,ee.forEach(e=>{try{e($)}catch(r){console.error("error updating CSRF token observer",r)}})});let m;const k=(t,e)=>t?t.getAttribute(e):null;function je(){if(m!==void 0)return m;const t=document==null?void 0:document.getElementsByTagName("head")[0];if(!t)return null;const e=k(t,"data-user");return e===null?(m=null,m):(m={uid:e,displayName:k(t,"data-user-displayname"),isAdmin:!!window._oc_isadmin},m)}var c=(t=>(t[t.Debug=0]="Debug",t[t.Info=1]="Info",t[t.Warn=2]="Warn",t[t.Error=3]="Error",t[t.Fatal=4]="Fatal",t))(c||{}),ke=Object.defineProperty,Be=(t,e,r)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ve=(t,e,r)=>(Be(t,typeof e!="symbol"?e+"":e,r),r);class He{constructor(e){Ve(this,"context"),this.context=e||{}}formatMessage(e,r,i){let a="["+c[r].toUpperCase()+"] ";return i&&i.app&&(a+=i.app+": "),typeof e=="string"?a+e:(a+="Unexpected ".concat(e.name),e.message&&(a+=' "'.concat(e.message,'"')),r===c.Debug&&e.stack&&(a+="\n\nStack trace:\n".concat(e.stack)),a)}log(e,r,i){var a,l;if(!(typeof((a=this.context)==null?void 0:a.level)=="number"&&e<((l=this.context)==null?void 0:l.level)))switch(typeof r=="object"&&(i==null?void 0:i.error)===void 0&&(i.error=r),e){case c.Debug:console.debug(this.formatMessage(r,c.Debug,i),i);break;case c.Info:console.info(this.formatMessage(r,c.Info,i),i);break;case c.Warn:console.warn(this.formatMessage(r,c.Warn,i),i);break;case c.Error:console.error(this.formatMessage(r,c.Error,i),i);break;case c.Fatal:default:console.error(this.formatMessage(r,c.Fatal,i),i);break}}debug(e,r){this.log(c.Debug,e,Object.assign({},this.context,r))}info(e,r){this.log(c.Info,e,Object.assign({},this.context,r))}warn(e,r){this.log(c.Warn,e,Object.assign({},this.context,r))}error(e,r){this.log(c.Error,e,Object.assign({},this.context,r))}fatal(e,r){this.log(c.Fatal,e,Object.assign({},this.context,r))}}function We(t){return new He(t)}var ze=Object.defineProperty,Ye=(t,e,r)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,B=(t,e,r)=>(Ye(t,typeof e!="symbol"?e+"":e,r),r);class Ze{constructor(e){B(this,"context"),B(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=je();return e!==null&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,r=()=>{var i,a;document.readyState==="complete"||document.readyState==="interactive"?(e.context.level=(a=(i=window._oc_config)==null?void 0:i.loglevel)!=null?a:c.Warn,window._oc_debug&&(e.context.level=c.Debug),document.removeEventListener("readystatechange",r)):document.addEventListener("readystatechange",r)};return r(),this}build(){return this.context.level===void 0&&this.detectLogLevel(),this.factory(this.context)}}function qe(){return new Ze(We)}const nt=qe().setApp("activity").detectUser().build();export{je as a,rt as c,tt as d,et as e,nt as l,Ie as p,Xe as s,Qe as u};
