/*! third party licenses: js/vendor.LICENSE.txt */
var po=Object.defineProperty;var Eo=(t,e,r)=>e in t?po(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ue=(t,e,r)=>(Eo(t,typeof e!="symbol"?e+"":e,r),r);import{_ as w,G as D,H as ee,b as Ee,w as A,I as j,o as bt,f as k,J as Br,n as M,m as _e,B as Lt,j as te,K as It,e as O,D as Hr,a as Ot,L as vo,k as Wr,d as ve,i as Nt,M as Rt,l as go,t as re,N as yo,O as Yr,E as qr,P as St,Q as zr,R as De,S as mo,T as Jr,F as Zr,U as bo,V as Tt,p as wt,W as Lo,h as Io,X as Oo,Y as Qr,Z as No,$ as je,a0 as At,s as $t,a1 as Ro,a2 as So,a3 as Kr,a4 as To,a5 as Pt,C as wo,q as Ao,a6 as $o,a7 as en,x as Po,a8 as Fo,a9 as _o,g as tn,z as Do}from"./function-apply-T5nGdPJm.mjs";var rn={},jo=!1,Mo=w,Co=ee,Ut=D.f;Mo({target:"Object",stat:!0,forced:Object.defineProperty!==Ut,sham:!Co},{defineProperty:Ut});var le={},Go=Ee,nn=Go,Ft={},ko=A;Ft.f=ko;var Xt=nn,xo=j,Uo=Ft,Xo=D.f,_t=function(t){var e=Xt.Symbol||(Xt.Symbol={});xo(e,t)||Xo(e,t,{value:Uo.f(t)})},Vo=_t;Vo("iterator");var Bo=A,Ho=bt,Wo=D.f,it=Bo("unscopables"),st=Array.prototype;st[it]===void 0&&Wo(st,it,{configurable:!0,value:Ho(null)});var Yo=function(t){st[it][t]=!0},Dt={},qo=k,zo=!qo(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Jo=j,Zo=M,Qo=_e,Ko=Br,ei=zo,Vt=Ko("IE_PROTO"),at=Object,ti=at.prototype,on=ei?at.getPrototypeOf:function(t){var e=Qo(t);if(Jo(e,Vt))return e[Vt];var r=e.constructor;return Zo(r)&&e instanceof r?r.prototype:e instanceof at?ti:null},ri=k,ni=M,oi=Lt,Bt=on,ii=te,si=A,ut=si("iterator"),sn=!1,V,Xe,Ve;[].keys&&(Ve=[].keys(),"next"in Ve?(Xe=Bt(Bt(Ve)),Xe!==Object.prototype&&(V=Xe)):sn=!0);var ai=!oi(V)||ri(function(){var t={};return V[ut].call(t)!==t});ai&&(V={}),ni(V[ut])||ii(V,ut,function(){return this});var an={IteratorPrototype:V,BUGGY_SAFARI_ITERATORS:sn},ui=D.f,ci=j,li=A,Ht=li("toStringTag"),jt=function(t,e,r){t&&!r&&(t=t.prototype),t&&!ci(t,Ht)&&ui(t,Ht,{configurable:!0,value:e})},fi=an.IteratorPrototype,hi=bt,pi=It,Ei=jt,vi=Dt,gi=function(){return this},di=function(t,e,r,n){var o=e+" Iterator";return t.prototype=hi(fi,{next:pi(+!n,r)}),Ei(t,o,!1),vi[o]=gi,t},yi=O,mi=Hr,bi=function(t,e,r){try{return yi(mi(Object.getOwnPropertyDescriptor(t,e)[r]))}catch{}},Li=M,Ii=String,Oi=TypeError,Ni=function(t){if(typeof t=="object"||Li(t))return t;throw new Oi("Can't set "+Ii(t)+" as a prototype")},Ri=bi,Si=Ot,Ti=Ni,un=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},r;try{r=Ri(Object.prototype,"__proto__","set"),r(e,[]),t=e instanceof Array}catch{}return function(n,o){return Si(n),Ti(o),t?r(n,o):n.__proto__=o,n}}():void 0),wi=w,Ai=ve,cn=vo,$i=M,Pi=di,Wt=on,Yt=un,Fi=jt,_i=Wr,Be=te,Di=A,ji=Dt,ln=an,Mi=cn.PROPER,Ci=cn.CONFIGURABLE,qt=ln.IteratorPrototype,ye=ln.BUGGY_SAFARI_ITERATORS,oe=Di("iterator"),zt="keys",ie="values",Jt="entries",Gi=function(){return this},fn=function(t,e,r,n,o,a,f){Pi(r,e,n);var i=function(b){if(b===o&&L)return L;if(!ye&&b&&b in l)return l[b];switch(b){case zt:return function(){return new r(this,b)};case ie:return function(){return new r(this,b)};case Jt:return function(){return new r(this,b)}}return function(){return new r(this)}},s=e+" Iterator",v=!1,l=t.prototype,y=l[oe]||l["@@iterator"]||o&&l[o],L=!ye&&y||i(o),u=e==="Array"&&l.entries||y,g,h,p;if(u&&(g=Wt(u.call(new t)),g!==Object.prototype&&g.next&&(Wt(g)!==qt&&(Yt?Yt(g,qt):$i(g[oe])||Be(g,oe,Gi)),Fi(g,s,!0))),Mi&&o===ie&&y&&y.name!==ie&&(Ci?_i(l,"name",ie):(v=!0,L=function(){return Ai(y,this)})),o)if(h={values:i(ie),keys:a?L:i(zt),entries:i(Jt)},f)for(p in h)(ye||v||!(p in l))&&Be(l,p,h[p]);else wi({target:e,proto:!0,forced:ye||v},h);return l[oe]!==L&&Be(l,oe,L,{name:o}),ji[e]=L,h},hn=function(t,e){return{value:t,done:e}},ki=Rt,He=Yo,Zt=Dt,pn=Nt,xi=D.f,Ui=fn,me=hn,Xi=ee,En="Array Iterator",Vi=pn.set,Bi=pn.getterFor(En),Hi=Ui(Array,"Array",function(t,e){Vi(this,{type:En,target:ki(t),index:0,kind:e})},function(){var t=Bi(this),e=t.target,r=t.kind,n=t.index++;if(!e||n>=e.length)return t.target=void 0,me(void 0,!0);switch(r){case"keys":return me(n,!1);case"values":return me(e[n],!1)}return me([n,e[n]],!1)},"values"),Qt=Zt.Arguments=Zt.Array;if(He("keys"),He("values"),He("entries"),Xi&&Qt.name!=="values")try{xi(Qt,"name",{value:"values"})}catch{}var Wi=go.charAt,Yi=re,vn=Nt,qi=fn,Kt=hn,gn="String Iterator",zi=vn.set,Ji=vn.getterFor(gn);qi(String,"String",function(t){zi(this,{type:gn,string:Yi(t),index:0})},function(){var t=Ji(this),e=t.string,r=t.index,n;return r>=e.length?Kt(void 0,!0):(n=Wi(e,r),t.index+=n.length,Kt(n,!1))});var Zi={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Qi=yo,We=Qi("span").classList,er=We&&We.constructor&&We.constructor.prototype,Ki=er===Object.prototype?void 0:er,tr=Ee,dn=Zi,es=Ki,ue=Hi,Ye=Wr,yn=A,qe=yn("iterator"),rr=yn("toStringTag"),ze=ue.values,mn=function(t,e){if(t){if(t[qe]!==ze)try{Ye(t,qe,ze)}catch{t[qe]=ze}if(t[rr]||Ye(t,rr,e),dn[e]){for(var r in ue)if(t[r]!==ue[r])try{Ye(t,r,ue[r])}catch{t[r]=ue[r]}}}};for(var Je in dn)mn(tr[Je]&&tr[Je].prototype,Je);mn(es,"DOMTokenList");var nr=ee,ts=O,rs=ve,ns=k,Ze=Yr,os=St,is=zr,ss=_e,as=qr,H=Object.assign,or=Object.defineProperty,us=ts([].concat),cs=!H||ns(function(){if(nr&&H({b:1},H(or({},"a",{enumerable:!0,get:function(){or(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},r=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(o){e[o]=o}),H({},t)[r]!==7||Ze(H({},e)).join("")!==n})?function(t,e){for(var r=ss(t),n=arguments.length,o=1,a=os.f,f=is.f;n>o;)for(var i=as(arguments[o++]),s=a?us(Ze(i),a(i)):Ze(i),v=s.length,l=0,y;v>l;)y=s[l++],(!nr||rs(f,i,y))&&(r[y]=i[y]);return r}:H,ls=w,ir=cs;ls({target:"Object",stat:!0,arity:2,forced:Object.assign!==ir},{assign:ir});var fs=ve,hs=De,ps=A,Es=te,bn=function(){var t=hs("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,n=ps("toPrimitive");e&&!e[n]&&Es(e,n,function(o){return fs(r,this)},{arity:1})},vs=_t,gs=bn;vs("toPrimitive"),gs();var ds=Ot,ys=mo,ms=TypeError,bs=function(t){if(ds(this),t==="string"||t==="default")t="string";else if(t!=="number")throw new ms("Incorrect hint");return ys(this,t)},Ls=j,Is=te,Os=bs,Ns=A,sr=Ns("toPrimitive"),ar=Date.prototype;Ls(ar,sr)||Is(ar,sr,Os);var Ln={},Rs=Jr,Ss=D,Ts=It,ws=function(t,e,r){var n=Rs(e);n in t?Ss.f(t,n,Ts(0,r)):t[n]=r},ur=bo,As=Zr,$s=ws,Ps=Array,Fs=Math.max,_s=function(t,e,r){for(var n=As(t),o=ur(e,n),a=ur(r===void 0?n:r,n),f=Ps(Fs(a-o,0)),i=0;o<a;o++,i++)$s(f,i,t[o]);return f.length=i,f},Ds=wt,js=Rt,In=Tt.f,Ms=_s,On=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Cs=function(t){try{return In(t)}catch{return Ms(On)}};Ln.f=function(t){return On&&Ds(t)==="Window"?Cs(t):In(js(t))};var cr=Lo,Gs=D,Nn=function(t,e,r){return r.get&&cr(r.get,e,{getter:!0}),r.set&&cr(r.set,e,{setter:!0}),Gs.f(t,e,r)},lr=Io,ks=Hr,xs=Oo,Us=lr(lr.bind),Xs=function(t,e){return ks(t),e===void 0?t:xs?Us(t,e):function(){return t.apply(e,arguments)}},Vs=wt,Rn=Array.isArray||function(t){return Vs(t)==="Array"},Bs=O,Hs=k,Sn=M,Ws=Qr,Ys=De,qs=No,Tn=function(){},zs=[],wn=Ys("Reflect","construct"),Mt=/^\s*(?:class|function)\b/,Js=Bs(Mt.exec),Zs=!Mt.test(Tn),se=function(t){if(!Sn(t))return!1;try{return wn(Tn,zs,t),!0}catch{return!1}},An=function(t){if(!Sn(t))return!1;switch(Ws(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Zs||!!Js(Mt,qs(t))}catch{return!0}};An.sham=!0;var Qs=!wn||Hs(function(){var t;return se(se.call)||!se(Object)||!se(function(){t=!0})||t})?An:se,fr=Rn,Ks=Qs,ea=Lt,ta=A,ra=ta("species"),hr=Array,na=function(t){var e;return fr(t)&&(e=t.constructor,Ks(e)&&(e===hr||fr(e.prototype))?e=void 0:ea(e)&&(e=e[ra],e===null&&(e=void 0))),e===void 0?hr:e},oa=na,ia=function(t,e){return new(oa(t))(e===0?0:e)},sa=Xs,aa=O,ua=qr,ca=_e,la=Zr,fa=ia,pr=aa([].push),C=function(t){var e=t===1,r=t===2,n=t===3,o=t===4,a=t===6,f=t===7,i=t===5||a;return function(s,v,l,y){for(var L=ca(s),u=ua(L),g=sa(v,l),h=la(u),p=0,b=y||fa,N=e?b(s,h):r||f?b(s,0):void 0,ne,xe;h>p;p++)if((i||p in u)&&(ne=u[p],xe=g(ne,p,L),t))if(e)N[p]=xe;else if(xe)switch(t){case 3:return!0;case 5:return ne;case 6:return p;case 2:pr(N,ne)}else switch(t){case 4:return!1;case 7:pr(N,ne)}return a?-1:n||o?o:N}},ha={forEach:C(0),map:C(1),filter:C(2),some:C(3),every:C(4),find:C(5),findIndex:C(6),filterReject:C(7)},be=w,Me=Ee,Ct=ve,pa=O,z=ee,W=je,Ea=k,E=j,va=At,ct=Ot,Ce=Rt,Gt=Jr,ga=re,lt=It,fe=bt,$n=Yr,da=Tt,Pn=Ln,ya=St,Fn=Kr,_n=D,ma=To,Dn=zr,Qe=te,ba=Nn,kt=$t,La=Br,jn=So,Er=Ro,Ia=A,Oa=Ft,Na=_t,Ra=bn,Sa=jt,Mn=Nt,Ge=ha.forEach,m=La("hidden"),$e="Symbol",he="prototype",Ta=Mn.set,vr=Mn.getterFor($e),I=Object[he],U=Me.Symbol,ce=U&&U[he],wa=Me.RangeError,Aa=Me.TypeError,Ke=Me.QObject,Cn=Fn.f,B=_n.f,Gn=Pn.f,$a=Dn.f,kn=pa([].push),_=kt("symbols"),ge=kt("op-symbols"),Pa=kt("wks"),et=!Ke||!Ke[he]||!Ke[he].findChild,xn=function(t,e,r){var n=Cn(I,e);n&&delete I[e],B(t,e,r),n&&t!==I&&B(I,e,n)},ft=z&&Ea(function(){return fe(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a!==7})?xn:B,tt=function(t,e){var r=_[t]=fe(ce);return Ta(r,{type:$e,tag:t,description:e}),z||(r.description=e),r},Pe=function(t,e,r){t===I&&Pe(ge,e,r),ct(t);var n=Gt(e);return ct(r),E(_,n)?(r.enumerable?(E(t,m)&&t[m][n]&&(t[m][n]=!1),r=fe(r,{enumerable:lt(0,!1)})):(E(t,m)||B(t,m,lt(1,{})),t[m][n]=!0),ft(t,n,r)):B(t,n,r)},ht=function(t,e){ct(t);var r=Ce(e),n=$n(r).concat(Un(r));return Ge(n,function(o){(!z||Ct(pt,r,o))&&Pe(t,o,r[o])}),t},Fa=function(t,e){return e===void 0?fe(t):ht(fe(t),e)},pt=function(t){var e=Gt(t),r=Ct($a,this,e);return this===I&&E(_,e)&&!E(ge,e)?!1:r||!E(this,e)||!E(_,e)||E(this,m)&&this[m][e]?r:!0},gr=function(t,e){var r=Ce(t),n=Gt(e);if(!(r===I&&E(_,n)&&!E(ge,n))){var o=Cn(r,n);return o&&E(_,n)&&!(E(r,m)&&r[m][n])&&(o.enumerable=!0),o}},dr=function(t){var e=Gn(Ce(t)),r=[];return Ge(e,function(n){!E(_,n)&&!E(jn,n)&&kn(r,n)}),r},Un=function(t){var e=t===I,r=Gn(e?ge:Ce(t)),n=[];return Ge(r,function(o){E(_,o)&&(!e||E(I,o))&&kn(n,_[o])}),n};W||(U=function(){if(va(ce,this))throw new Aa("Symbol is not a constructor");var t=!arguments.length||arguments[0]===void 0?void 0:ga(arguments[0]),e=Er(t),r=function(n){this===I&&Ct(r,ge,n),E(this,m)&&E(this[m],e)&&(this[m][e]=!1);var o=lt(1,n);try{ft(this,e,o)}catch(a){if(!(a instanceof wa))throw a;xn(this,e,o)}};return z&&et&&ft(I,e,{configurable:!0,set:r}),tt(e,t)},ce=U[he],Qe(ce,"toString",function(){return vr(this).tag}),Qe(U,"withoutSetter",function(t){return tt(Er(t),t)}),Dn.f=pt,_n.f=Pe,ma.f=ht,Fn.f=gr,da.f=Pn.f=dr,ya.f=Un,Oa.f=function(t){return tt(Ia(t),t)},z&&(ba(ce,"description",{configurable:!0,get:function(){return vr(this).description}}),Qe(I,"propertyIsEnumerable",pt,{unsafe:!0}))),be({global:!0,constructor:!0,wrap:!0,forced:!W,sham:!W},{Symbol:U}),Ge($n(Pa),function(t){Na(t)}),be({target:$e,stat:!0,forced:!W},{useSetter:function(){et=!0},useSimple:function(){et=!1}}),be({target:"Object",stat:!0,forced:!W,sham:!z},{create:Fa,defineProperty:Pe,defineProperties:ht,getOwnPropertyDescriptor:gr}),be({target:"Object",stat:!0,forced:!W},{getOwnPropertyNames:dr}),Ra(),Sa(U,$e),jn[m]=!0;var _a=je,Xn=_a&&!!Symbol.for&&!!Symbol.keyFor,Da=w,ja=De,Ma=j,Ca=re,Vn=$t,Ga=Xn,rt=Vn("string-to-symbol-registry"),ka=Vn("symbol-to-string-registry");Da({target:"Symbol",stat:!0,forced:!Ga},{for:function(t){var e=Ca(t);if(Ma(rt,e))return rt[e];var r=ja("Symbol")(e);return rt[e]=r,ka[r]=e,r}});var xa=w,Ua=j,Xa=Pt,Va=wo,Ba=$t,Ha=Xn,yr=Ba("symbol-to-string-registry");xa({target:"Symbol",stat:!0,forced:!Ha},{keyFor:function(t){if(!Xa(t))throw new TypeError(Va(t)+" is not a symbol");if(Ua(yr,t))return yr[t]}});var Wa=O,Ya=Wa([].slice),qa=O,mr=Rn,za=M,br=wt,Ja=re,Lr=qa([].push),Za=function(t){if(za(t))return t;if(mr(t)){for(var e=t.length,r=[],n=0;n<e;n++){var o=t[n];typeof o=="string"?Lr(r,o):(typeof o=="number"||br(o)==="Number"||br(o)==="String")&&Lr(r,Ja(o))}var a=r.length,f=!0;return function(i,s){if(f)return f=!1,s;if(mr(this))return s;for(var v=0;v<a;v++)if(r[v]===i)return s}}},Qa=w,Bn=De,Hn=Ao,Ka=ve,de=O,Wn=k,Ir=M,Or=Pt,Yn=Ya,eu=Za,tu=je,ru=String,G=Bn("JSON","stringify"),Le=de(/./.exec),Nr=de("".charAt),nu=de("".charCodeAt),ou=de("".replace),iu=de(1 .toString),su=/[\uD800-\uDFFF]/g,Rr=/^[\uD800-\uDBFF]$/,Sr=/^[\uDC00-\uDFFF]$/,Tr=!tu||Wn(function(){var t=Bn("Symbol")("stringify detection");return G([t])!=="[null]"||G({a:t})!=="{}"||G(Object(t))!=="{}"}),wr=Wn(function(){return G("\uDF06\uD834")!=='"\\udf06\\ud834"'||G("\uDEAD")!=='"\\udead"'}),au=function(t,e){var r=Yn(arguments),n=eu(e);if(!(!Ir(n)&&(t===void 0||Or(t))))return r[1]=function(o,a){if(Ir(n)&&(a=Ka(n,this,ru(o),a)),!Or(a))return a},Hn(G,null,r)},uu=function(t,e,r){var n=Nr(r,e-1),o=Nr(r,e+1);return Le(Rr,t)&&!Le(Sr,o)||Le(Sr,t)&&!Le(Rr,n)?"\\u"+iu(nu(t,0),16):t};G&&Qa({target:"JSON",stat:!0,arity:3,forced:Tr||wr},{stringify:function(t,e,r){var n=Yn(arguments),o=Hn(Tr?au:G,null,n);return wr&&typeof o=="string"?ou(o,su,uu):o}});var cu=w,lu=je,fu=k,qn=St,hu=_e,pu=!lu||fu(function(){qn.f(1)});cu({target:"Object",stat:!0,forced:pu},{getOwnPropertySymbols:function(t){var e=qn.f;return e?e(hu(t)):[]}});var Eu=w,vu=ee,gu=Ee,Ie=O,du=j,yu=M,mu=At,bu=re,Lu=Nn,Iu=$o,P=gu.Symbol,x=P&&P.prototype;if(vu&&yu(P)&&(!("description"in x)||P().description!==void 0)){var Ar={},Oe=function(){var t=arguments.length<1||arguments[0]===void 0?void 0:bu(arguments[0]),e=mu(x,this)?new P(t):t===void 0?P():P(t);return t===""&&(Ar[e]=!0),e};Iu(Oe,P),Oe.prototype=x,x.constructor=Oe;var Ou=String(P("description detection"))==="Symbol(description detection)",Nu=Ie(x.valueOf),Ru=Ie(x.toString),Su=/^Symbol\((.*)\)[^)]+$/,Tu=Ie("".replace),wu=Ie("".slice);Lu(x,"description",{configurable:!0,get:function(){var t=Nu(this);if(du(Ar,t))return"";var e=Ru(t),r=Ou?wu(e,7,-1):Tu(e,Su,"$1");return r===""?void 0:r}}),Eu({global:!0,constructor:!0,forced:!0},{Symbol:Oe})}var Au=en,$u=Qr,Pu=Au?{}.toString:function(){return"[object "+$u(this)+"]"},Fu=en,_u=te,Du=Pu;Fu||_u(Object.prototype,"toString",Du,{unsafe:!0});var ju=M,Mu=Lt,$r=un,Cu=function(t,e,r){var n,o;return $r&&ju(n=e.constructor)&&n!==r&&Mu(o=n.prototype)&&o!==r.prototype&&$r(t,o),t},Gu=O,ku=Gu(1 .valueOf),xu="	\n\v\f\r                　\u2028\u2029\uFEFF",Uu=O,Xu=Po,Vu=re,Et=xu,Pr=Uu("".replace),Bu=RegExp("^["+Et+"]+"),Hu=RegExp("(^|[^"+Et+"])["+Et+"]+$"),nt=function(t){return function(e){var r=Vu(Xu(e));return t&1&&(r=Pr(r,Bu,"")),t&2&&(r=Pr(r,Hu,"$1")),r}},Wu={start:nt(1),end:nt(2),trim:nt(3)},Yu=w,zn=jo,qu=ee,Jn=Ee,Zn=nn,Qn=O,zu=Fo,Fr=j,Ju=Cu,Zu=At,Qu=Pt,Kn=_o,Ku=k,ec=Tt.f,tc=Kr.f,rc=D.f,nc=ku,oc=Wu.trim,ke="Number",J=Jn[ke];Zn[ke];var vt=J.prototype,ic=Jn.TypeError,sc=Qn("".slice),Ne=Qn("".charCodeAt),ac=function(t){var e=Kn(t,"number");return typeof e=="bigint"?e:uc(e)},uc=function(t){var e=Kn(t,"number"),r,n,o,a,f,i,s,v;if(Qu(e))throw new ic("Cannot convert a Symbol value to a number");if(typeof e=="string"&&e.length>2){if(e=oc(e),r=Ne(e,0),r===43||r===45){if(n=Ne(e,2),n===88||n===120)return NaN}else if(r===48){switch(Ne(e,1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+e}for(f=sc(e,2),i=f.length,s=0;s<i;s++)if(v=Ne(f,s),v<48||v>a)return NaN;return parseInt(f,o)}}return+e},gt=zu(ke,!J(" 0o1")||!J("0b1")||J("+0x1")),cc=function(t){return Zu(vt,t)&&Ku(function(){nc(t)})},Te=function(t){var e=arguments.length<1?0:J(ac(t));return cc(this)?Ju(Object(e),this,Te):e};Te.prototype=vt,gt&&!zn&&(vt.constructor=Te),Yu({global:!0,constructor:!0,wrap:!0,forced:gt},{Number:Te});var lc=function(t,e){for(var r=qu?ec(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0,o;r.length>n;n++)Fr(e,o=r[n])&&!Fr(t,o)&&rc(t,o,tc(e,o))};(gt||zn)&&lc(Zn[ke],J);var Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.LogLevel=void 0;var fc=function(t){return t[t.Debug=0]="Debug",t[t.Info=1]="Info",t[t.Warn=2]="Warn",t[t.Error=3]="Error",t[t.Fatal=4]="Fatal",t}({});Q.LogLevel=fc,Object.defineProperty(le,"__esModule",{value:!0}),le.ConsoleLogger=void 0,le.buildConsoleLogger=gc;var d=Q;function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function hc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,eo(n.key),n)}}function pc(t,e,r){return e&&_r(t.prototype,e),r&&_r(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ec(t,e,r){return e=eo(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function eo(t){var e=vc(t,"string");return K(e)==="symbol"?e:String(e)}function vc(t,e){if(K(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(K(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var to=function(){function t(e){hc(this,t),Ec(this,"context",void 0),this.context=e||{}}return pc(t,[{key:"formatMessage",value:function(e,r,n){var o="["+d.LogLevel[r].toUpperCase()+"] ";return n&&n.app&&(o+=n.app+": "),typeof e=="string"?o+e:(o+="Unexpected ".concat(e.name),e.message&&(o+=' "'.concat(e.message,'"')),r===d.LogLevel.Debug&&e.stack&&(o+="\n\nStack trace:\n".concat(e.stack)),o)}},{key:"log",value:function(e,r,n){var o,a;if(!(typeof((o=this.context)===null||o===void 0?void 0:o.level)=="number"&&e<((a=this.context)===null||a===void 0?void 0:a.level)))switch(K(r)==="object"&&(n==null?void 0:n.error)===void 0&&(n.error=r),e){case d.LogLevel.Debug:console.debug(this.formatMessage(r,d.LogLevel.Debug,n),n);break;case d.LogLevel.Info:console.info(this.formatMessage(r,d.LogLevel.Info,n),n);break;case d.LogLevel.Warn:console.warn(this.formatMessage(r,d.LogLevel.Warn,n),n);break;case d.LogLevel.Error:console.error(this.formatMessage(r,d.LogLevel.Error,n),n);break;case d.LogLevel.Fatal:default:console.error(this.formatMessage(r,d.LogLevel.Fatal,n),n);break}}},{key:"debug",value:function(e,r){this.log(d.LogLevel.Debug,e,Object.assign({},this.context,r))}},{key:"info",value:function(e,r){this.log(d.LogLevel.Info,e,Object.assign({},this.context,r))}},{key:"warn",value:function(e,r){this.log(d.LogLevel.Warn,e,Object.assign({},this.context,r))}},{key:"error",value:function(e,r){this.log(d.LogLevel.Error,e,Object.assign({},this.context,r))}},{key:"fatal",value:function(e,r){this.log(d.LogLevel.Fatal,e,Object.assign({},this.context,r))}}]),t}();le.ConsoleLogger=to;function gc(t){return new to(t)}var Fe={};function dc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ro={exports:{}},c=ro.exports={},S,T;function dt(){throw new Error("setTimeout has not been defined")}function yt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?S=setTimeout:S=dt}catch{S=dt}try{typeof clearTimeout=="function"?T=clearTimeout:T=yt}catch{T=yt}})();function no(t){if(S===setTimeout)return setTimeout(t,0);if((S===dt||!S)&&setTimeout)return S=setTimeout,setTimeout(t,0);try{return S(t,0)}catch{try{return S.call(null,t,0)}catch{return S.call(this,t,0)}}}function yc(t){if(T===clearTimeout)return clearTimeout(t);if((T===yt||!T)&&clearTimeout)return T=clearTimeout,clearTimeout(t);try{return T(t)}catch{try{return T.call(null,t)}catch{return T.call(this,t)}}}var F=[],Z=!1,X,we=-1;function mc(){!Z||!X||(Z=!1,X.length?F=X.concat(F):we=-1,F.length&&oo())}function oo(){if(!Z){var t=no(mc);Z=!0;for(var e=F.length;e;){for(X=F,F=[];++we<e;)X&&X[we].run();we=-1,e=F.length}X=null,Z=!1,yc(t)}}c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];F.push(new io(t,e)),F.length===1&&!Z&&no(oo)};function io(t,e){this.fun=t,this.array=e}io.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function $(){}c.on=$,c.addListener=$,c.once=$,c.off=$,c.removeListener=$,c.removeAllListeners=$,c.emit=$,c.prependListener=$,c.prependOnceListener=$,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};var bc=ro.exports;const Lc=dc(bc);var ot={};const Ic=typeof Lc=="object"&&ot&&ot.NODE_DEBUG&&/\bsemver\b/i.test(ot.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var so=Ic;const Oc="2.0.0",ao=256,Nc=Number.MAX_SAFE_INTEGER||9007199254740991,Rc=16,Sc=ao-6,Tc=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var uo={MAX_LENGTH:ao,MAX_SAFE_COMPONENT_LENGTH:Rc,MAX_SAFE_BUILD_LENGTH:Sc,MAX_SAFE_INTEGER:Nc,RELEASE_TYPES:Tc,SEMVER_SPEC_VERSION:Oc,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},mt={exports:{}};(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n}=uo,o=so;e=t.exports={};const a=e.re=[],f=e.safeRe=[],i=e.src=[],s=e.t={};let v=0;const l="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",r],[l,n]],L=g=>{for(const[h,p]of y)g=g.split("".concat(h,"*")).join("".concat(h,"{0,").concat(p,"}")).split("".concat(h,"+")).join("".concat(h,"{1,").concat(p,"}"));return g},u=(g,h,p)=>{const b=L(h),N=v++;o(g,N,h),s[g]=N,i[N]=h,a[N]=new RegExp(h,p?"g":void 0),f[N]=new RegExp(b,p?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-]".concat(l,"*")),u("MAINVERSION","(".concat(i[s.NUMERICIDENTIFIER],")\\.(").concat(i[s.NUMERICIDENTIFIER],")\\.(").concat(i[s.NUMERICIDENTIFIER],")")),u("MAINVERSIONLOOSE","(".concat(i[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(i[s.NUMERICIDENTIFIERLOOSE],")\\.(").concat(i[s.NUMERICIDENTIFIERLOOSE],")")),u("PRERELEASEIDENTIFIER","(?:".concat(i[s.NUMERICIDENTIFIER],"|").concat(i[s.NONNUMERICIDENTIFIER],")")),u("PRERELEASEIDENTIFIERLOOSE","(?:".concat(i[s.NUMERICIDENTIFIERLOOSE],"|").concat(i[s.NONNUMERICIDENTIFIER],")")),u("PRERELEASE","(?:-(".concat(i[s.PRERELEASEIDENTIFIER],"(?:\\.").concat(i[s.PRERELEASEIDENTIFIER],")*))")),u("PRERELEASELOOSE","(?:-?(".concat(i[s.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(i[s.PRERELEASEIDENTIFIERLOOSE],")*))")),u("BUILDIDENTIFIER","".concat(l,"+")),u("BUILD","(?:\\+(".concat(i[s.BUILDIDENTIFIER],"(?:\\.").concat(i[s.BUILDIDENTIFIER],")*))")),u("FULLPLAIN","v?".concat(i[s.MAINVERSION]).concat(i[s.PRERELEASE],"?").concat(i[s.BUILD],"?")),u("FULL","^".concat(i[s.FULLPLAIN],"$")),u("LOOSEPLAIN","[v=\\s]*".concat(i[s.MAINVERSIONLOOSE]).concat(i[s.PRERELEASELOOSE],"?").concat(i[s.BUILD],"?")),u("LOOSE","^".concat(i[s.LOOSEPLAIN],"$")),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE","".concat(i[s.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),u("XRANGEIDENTIFIER","".concat(i[s.NUMERICIDENTIFIER],"|x|X|\\*")),u("XRANGEPLAIN","[v=\\s]*(".concat(i[s.XRANGEIDENTIFIER],")(?:\\.(").concat(i[s.XRANGEIDENTIFIER],")(?:\\.(").concat(i[s.XRANGEIDENTIFIER],")(?:").concat(i[s.PRERELEASE],")?").concat(i[s.BUILD],"?)?)?")),u("XRANGEPLAINLOOSE","[v=\\s]*(".concat(i[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(i[s.XRANGEIDENTIFIERLOOSE],")(?:\\.(").concat(i[s.XRANGEIDENTIFIERLOOSE],")(?:").concat(i[s.PRERELEASELOOSE],")?").concat(i[s.BUILD],"?)?)?")),u("XRANGE","^".concat(i[s.GTLT],"\\s*").concat(i[s.XRANGEPLAIN],"$")),u("XRANGELOOSE","^".concat(i[s.GTLT],"\\s*").concat(i[s.XRANGEPLAINLOOSE],"$")),u("COERCE","(^|[^\\d])(\\d{1,".concat(r,"})(?:\\.(\\d{1,").concat(r,"}))?(?:\\.(\\d{1,").concat(r,"}))?(?:$|[^\\d])")),u("COERCERTL",i[s.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM","(\\s*)".concat(i[s.LONETILDE],"\\s+"),!0),e.tildeTrimReplace="$1~",u("TILDE","^".concat(i[s.LONETILDE]).concat(i[s.XRANGEPLAIN],"$")),u("TILDELOOSE","^".concat(i[s.LONETILDE]).concat(i[s.XRANGEPLAINLOOSE],"$")),u("LONECARET","(?:\\^)"),u("CARETTRIM","(\\s*)".concat(i[s.LONECARET],"\\s+"),!0),e.caretTrimReplace="$1^",u("CARET","^".concat(i[s.LONECARET]).concat(i[s.XRANGEPLAIN],"$")),u("CARETLOOSE","^".concat(i[s.LONECARET]).concat(i[s.XRANGEPLAINLOOSE],"$")),u("COMPARATORLOOSE","^".concat(i[s.GTLT],"\\s*(").concat(i[s.LOOSEPLAIN],")$|^$")),u("COMPARATOR","^".concat(i[s.GTLT],"\\s*(").concat(i[s.FULLPLAIN],")$|^$")),u("COMPARATORTRIM","(\\s*)".concat(i[s.GTLT],"\\s*(").concat(i[s.LOOSEPLAIN],"|").concat(i[s.XRANGEPLAIN],")"),!0),e.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE","^\\s*(".concat(i[s.XRANGEPLAIN],")\\s+-\\s+(").concat(i[s.XRANGEPLAIN],")\\s*$")),u("HYPHENRANGELOOSE","^\\s*(".concat(i[s.XRANGEPLAINLOOSE],")\\s+-\\s+(").concat(i[s.XRANGEPLAINLOOSE],")\\s*$")),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(mt,mt.exports);var wc=mt.exports;const Ac=Object.freeze({loose:!0}),$c=Object.freeze({}),Pc=t=>t?typeof t!="object"?Ac:t:$c;var Fc=Pc;const Dr=/^[0-9]+$/,co=(t,e)=>{const r=Dr.test(t),n=Dr.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},_c=(t,e)=>co(e,t);var Dc={compareIdentifiers:co,rcompareIdentifiers:_c};const Re=so,{MAX_LENGTH:jr,MAX_SAFE_INTEGER:Se}=uo,{safeRe:Mr,t:Cr}=wc,jc=Fc,{compareIdentifiers:Y}=Dc;let Mc=class R{constructor(e,r){if(r=jc(r),e instanceof R){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError('Invalid version. Must be a string. Got type "'.concat(typeof e,'".'));if(e.length>jr)throw new TypeError("version is longer than ".concat(jr," characters"));Re("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const n=e.trim().match(r.loose?Mr[Cr.LOOSE]:Mr[Cr.FULL]);if(!n)throw new TypeError("Invalid Version: ".concat(e));if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Se||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Se||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Se||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){const a=+o;if(a>=0&&a<Se)return a}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(Re("SemVer.compare",this.version,this.options,e),!(e instanceof R)){if(typeof e=="string"&&e===this.version)return 0;e=new R(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof R||(e=new R(e,this.options)),Y(this.major,e.major)||Y(this.minor,e.minor)||Y(this.patch,e.patch)}comparePre(e){if(e instanceof R||(e=new R(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const n=this.prerelease[r],o=e.prerelease[r];if(Re("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n!==o)return Y(n,o)}while(++r)}compareBuild(e){e instanceof R||(e=new R(e,this.options));let r=0;do{const n=this.build[r],o=e.build[r];if(Re("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n!==o)return Y(n,o)}while(++r)}inc(e,r,n){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const o=Number(n)?1:0;if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[o];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let a=[r,o];n===!1&&(a=[r]),Y(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error("invalid increment argument: ".concat(e))}return this.raw=this.format(),this.build.length&&(this.raw+="+".concat(this.build.join("."))),this}};var lo=Mc;const Gr=lo,Cc=(t,e,r=!1)=>{if(t instanceof Gr)return t;try{return new Gr(t,e)}catch(n){if(!r)return null;throw n}};var Gc=Cc;const kc=Gc,xc=(t,e)=>{const r=kc(t,e);return r?r.version:null};var Uc=xc;const Xc=tn(Uc),Vc=lo,Bc=(t,e)=>new Vc(t,e).major;var Hc=Bc;const kr=tn(Hc);class Wc{constructor(e){Ue(this,"bus");typeof e.getVersion!="function"||!Xc(e.getVersion())?console.warn("Proxying an event bus with an unknown or invalid version"):kr(e.getVersion())!==kr(this.getVersion())&&console.warn("Proxying an event bus of version "+e.getVersion()+" with "+this.getVersion()),this.bus=e}getVersion(){return"3.1.0"}subscribe(e,r){this.bus.subscribe(e,r)}unsubscribe(e,r){this.bus.unsubscribe(e,r)}emit(e,r){this.bus.emit(e,r)}}class Yc{constructor(){Ue(this,"handlers",new Map)}getVersion(){return"3.1.0"}subscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).concat(r))}unsubscribe(e,r){this.handlers.set(e,(this.handlers.get(e)||[]).filter(n=>n!=r))}emit(e,r){(this.handlers.get(e)||[]).forEach(n=>{try{n(r)}catch(o){console.error("could not invoke event listener",o)}})}}let ae=null;function xt(){return ae!==null?ae:typeof window>"u"?new Proxy({},{get:()=>()=>console.error("Window not available, EventBus can not be established!")}):(typeof window.OC<"u"&&window.OC._eventBus&&typeof window._nc_event_bus>"u"&&(console.warn("found old event bus instance at OC._eventBus. Update your version!"),window._nc_event_bus=window.OC._eventBus),typeof(window==null?void 0:window._nc_event_bus)<"u"?ae=new Wc(window._nc_event_bus):ae=window._nc_event_bus=new Yc,ae)}function qc(t,e){xt().subscribe(t,e)}function al(t,e){xt().unsubscribe(t,e)}function ul(t,e){xt().emit(t,e)}let Ae;const fo=[];function zc(){if(Ae===void 0){const t=document==null?void 0:document.getElementsByTagName("head")[0];Ae=t?t.getAttribute("data-requesttoken"):null}return Ae}function Jc(t){fo.push(t)}qc("csrf-token-update",t=>{Ae=t.token,fo.forEach(e=>{try{e(t.token)}catch(r){console.error("error updating CSRF token observer",r)}})});const xr=(t,e)=>t?t.getAttribute(e):null;let q;function Zc(){if(q!==void 0)return q;const t=document==null?void 0:document.getElementsByTagName("head")[0];if(!t)return null;const e=xr(t,"data-user");return e===null?(q=null,q):(q={uid:e,displayName:xr(t,"data-user-displayname"),isAdmin:!!window._oc_isadmin},q)}const Qc=Object.freeze(Object.defineProperty({__proto__:null,getCurrentUser:Zc,getRequestToken:zc,onRequestTokenUpdate:Jc},Symbol.toStringTag,{value:"Module"})),Kc=Do(Qc);Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.LoggerBuilder=void 0;var el=Kc,Ur=Q;function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}function tl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xr(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,ho(n.key),n)}}function rl(t,e,r){return e&&Xr(t.prototype,e),r&&Xr(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vr(t,e,r){return e=ho(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ho(t){var e=nl(t,"string");return pe(e)==="symbol"?e:String(e)}function nl(t,e){if(pe(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(pe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ol=function(){function t(e){tl(this,t),Vr(this,"context",void 0),Vr(this,"factory",void 0),this.context={},this.factory=e}return rl(t,[{key:"setApp",value:function(e){return this.context.app=e,this}},{key:"setLogLevel",value:function(e){return this.context.level=e,this}},{key:"setUid",value:function(e){return this.context.uid=e,this}},{key:"detectUser",value:function(){var e=(0,el.getCurrentUser)();return e!==null&&(this.context.uid=e.uid),this}},{key:"detectLogLevel",value:function(){var e=this,r=function n(){if(document.readyState==="complete"||document.readyState==="interactive"){var o,a;e.context.level=(o=(a=window._oc_config)===null||a===void 0?void 0:a.loglevel)!==null&&o!==void 0?o:Ur.LogLevel.Warn,window._oc_debug&&(e.context.level=Ur.LogLevel.Debug),document.removeEventListener("readystatechange",n)}else document.addEventListener("readystatechange",n)};return r(),this}},{key:"build",value:function(){return this.context.level===void 0&&this.detectLogLevel(),this.factory(this.context)}}]),t}();Fe.LoggerBuilder=ol,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LogLevel",{enumerable:!0,get:function(){return n.LogLevel}}),t.getLogger=a,t.getLoggerBuilder=o;var e=le,r=Fe,n=Q;function o(){return new r.LoggerBuilder(e.buildConsoleLogger)}function a(){return o().build()}}(rn);const cl=rn.getLoggerBuilder().setApp("activity").detectUser().build();export{ha as a,_s as b,ws as c,ia as d,ul as e,Rn as f,Zc as g,zc as h,Qs as i,cl as l,Jc as o,Lc as p,qc as s,al as u};
