import{$ as bn,$a as Ie,A as m,Aa as oe,B as k,Ba as Nt,C,Ca as Lt,D as a,Da as z,E as Mt,Ea as ci,F as Qt,Fa as y,G as Jt,Ga as Bt,H as w,Ha as gn,I as D,Ia as di,J as te,Ja as jt,K as $,Ka as Me,L as E,La as re,Ma as lt,N as K,Na as ui,O as ee,Oa as Te,P as M,Pa as mi,Q as ei,Qa as hi,R as ni,Ra as pi,S as Se,T as ii,Ta as fi,U as oi,V as v,Va as bi,W as G,X as vt,Y as X,Ya as gi,Z as yt,_ as Ae,_a as _i,a as g,aa as p,b as Kt,ba as S,bb as vi,c as xe,ca as P,cb as Vt,d as Rt,da as H,db as ot,e as _,ea as Tt,eb as zt,f as Kn,fa as ne,fb as Pe,g as Ce,ga as it,gb as yi,h as Ot,ha as wt,hb as Fe,ia as xt,ib as wi,j as hn,ja as ri,jb as Ne,k as qn,ka as ai,kb as Le,l as Qn,la as si,lb as Be,m as Ee,ma as W,mb as Ut,n as Jn,na as f,o as et,oa as h,p as pn,pa as B,q as De,qa as j,r as st,ra as V,sa as ie,t as qt,ta as Re,u as ti,ua as li,v as ke,va as N,w as gt,wa as It,x as fn,xa as Pt,y as nt,ya as Oe,z as _t,za as Ft}from"./chunk-U74NFWYH.js";function ae(i){return i.buttons===0||i.detail===0}function se(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var _n;function xi(){if(_n==null){let i=typeof document<"u"?document.head:null;_n=!!(i&&(i.createShadowRoot||i.attachShadow))}return _n}function vn(i){if(xi()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function le(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function L(i){return i.composedPath?i.composedPath()[0]:i.target}var yn;try{yn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{yn=!1}var A=(()=>{class i{_platformId=a(ni);isBrowser=this._platformId?pi(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||yn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ce;function Ci(){if(ce==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ce=!0}))}finally{ce=ce||!1}return ce}function Ht(i){return Ci()?i:!!i.capture}function de(i,n=0){return Ei(i)?Number(i):arguments.length===2?n:0}function Ei(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function q(i){return i instanceof M?i.nativeElement:i}var Di=new C("cdk-input-modality-detector-options"),ki={ignoreKeys:[18,17,224,91,16]},Si=650,wn={passive:!0,capture:!0},Ai=(()=>{class i{_platform=a(A);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Kn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=L(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Si||(this._modality.next(ae(t)?"keyboard":"mouse"),this._mostRecentTarget=L(t))};_onTouchstart=t=>{if(se(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=L(t)};constructor(){let t=a(E),e=a(D),o=a(Di,{optional:!0});if(this._options=g(g({},ki),o),this.modalityDetected=this._modality.pipe(ke(1)),this.modalityChanged=this.modalityDetected.pipe(qt()),this._platform.isBrowser){let r=a(X).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,wn),r.listen(e,"mousedown",this._onMousedown,wn),r.listen(e,"touchstart",this._onTouchstart,wn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ue=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(ue||{}),Ri=new C("cdk-focus-monitor-default-options"),je=Ht({passive:!0,capture:!0}),me=(()=>{class i{_ngZone=a(E);_platform=a(A);_inputModalityDetector=a(Ai);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=a(D);_stopInputModalityDetector=new _;constructor(){let t=a(Ri,{optional:!0});this._detectionMode=t?.detectionMode||ue.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=L(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=q(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ot();let r=vn(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let l={checkChildren:e,subject:new _,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=q(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=q(t),s=this._document.activeElement;r===s?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,e,c)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===ue.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===ue.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Si:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=L(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,je),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,je)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(nt(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,je),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,je),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ve=new WeakMap,Q=(()=>{class i{_appRef;_injector=a(w);_environmentInjector=a(Mt);load(t){let e=this._appRef=this._appRef||this._injector.get(ne),o=Ve.get(e);o||(o={loaders:new Set,refs:[]},Ve.set(e,o),e.onDestroy(()=>{Ve.get(e)?.refs.forEach(r=>r.destroy()),Ve.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(Te(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Oi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),ze;function Fo(){if(ze===void 0&&(ze=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(ze=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return ze}function No(i){return Fo()?.createHTML(i)||i}function Mi(i,n,t){let e=t.sanitize(oi.HTML,n);i.innerHTML=No(e||"")}function Wt(i){return Array.isArray(i)?i:[i]}var Ti=new Set,Ct,Ue=(()=>{class i{_platform=a(A);_nonce=a(ii,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Bo}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Lo(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Lo(i,n){if(!Ti.has(i))try{Ct||(Ct=document.createElement("style"),n&&Ct.setAttribute("nonce",n),Ct.setAttribute("type","text/css"),document.head.appendChild(Ct)),Ct.sheet&&(Ct.sheet.insertRule(`@media ${i} {body{ }}`,0),Ti.add(i))}catch(t){console.error(t)}}function Bo(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var he=(()=>{class i{_mediaMatcher=a(Ue);_zone=a(E);_queries=new Map;_destroySubject=new _;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ii(Wt(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Ii(Wt(t)).map(s=>this._registerQuery(s).observable),r=qn(o);return r=Qn(r.pipe(st(1)),r.pipe(ke(1),De(0))),r.pipe(hn(s=>{let l={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new Rt(s=>{let l=c=>this._zone.run(()=>s.next(c));return e.addListener(l),()=>{e.removeListener(l)}}).pipe(gt(e),hn(({matches:s})=>({query:t,matches:s})),nt(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ii(i){return i.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var jo=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Pi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({providers:[jo]})}return i})();var Dn=(()=>{class i{_platform=a(A);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return zo(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Vo($o(t));if(e&&(Fi(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),r=Fi(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Xo(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Zo(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Vo(i){try{return i.frameElement}catch{return null}}function zo(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Uo(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Ho(i){return Yo(i)&&i.type=="hidden"}function Wo(i){return Go(i)&&i.hasAttribute("href")}function Yo(i){return i.nodeName.toLowerCase()=="input"}function Go(i){return i.nodeName.toLowerCase()=="a"}function Bi(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Fi(i){if(!Bi(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Xo(i){let n=i.nodeName.toLowerCase(),t=n==="input"&&i.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function Zo(i){return Ho(i)?!1:Uo(i)||Wo(i)||i.hasAttribute("contenteditable")||Bi(i)}function $o(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Cn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,o,r=!1,s){this._element=n,this._checker=t,this._ngZone=e,this._document=o,this._injector=s,r||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?G(n,{injector:this._injector}):setTimeout(n)}},kn=(()=>{class i{_checker=a(Dn);_ngZone=a(E);_document=a(D);_injector=a(w);constructor(){a(Q).load(Oi)}create(t,e=!1){return new Cn(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ji=new C("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Vi=new C("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ko=0,Sn=(()=>{class i{_ngZone=a(E);_defaultOptions=a(Vi,{optional:!0});_liveElement;_document=a(D);_sanitizer=a(gi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=a(ji,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,r,s;return e.length===1&&typeof e[0]=="number"?s=e[0]:[r,s]=e,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:Mi(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let r=0;r<e.length;r++)e[r].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Ko++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let r=e[o],s=r.getAttribute("aria-owns");s?s.indexOf(t)===-1&&r.setAttribute("aria-owns",s+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ct=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(ct||{}),Ni="cdk-high-contrast-black-on-white",Li="cdk-high-contrast-white-on-black",xn="cdk-high-contrast-active",zi=(()=>{class i{_platform=a(A);_hasCheckedHighContrastMode=!1;_document=a(D);_breakpointSubscription;constructor(){this._breakpointSubscription=a(he).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ct.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ct.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ct.BLACK_ON_WHITE}return ct.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(xn,Ni,Li),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===ct.BLACK_ON_WHITE?t.add(xn,Ni):e===ct.WHITE_ON_BLACK&&t.add(xn,Li)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),An=(()=>{class i{constructor(){a(zi)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({imports:[Pi]})}return i})();function He(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Rn={},Z=class i{_appId=a(ei);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),Rn.hasOwnProperty(n)||(Rn[n]=0),`${n}${t?i._infix+"-":""}${Rn[n]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ui={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function On(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function R(i){return i==null?"":typeof i=="string"?i:`${i}px`}var qo=new C("cdk-dir-doc",{providedIn:"root",factory:()=>a(D)}),Qo=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Jo(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Qo.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var pe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=K("ltr");change=new $;constructor(){let t=a(qo,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Jo(e||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Et;function Hi(){if(Et==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Et=!1,Et;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Et=!0;else{let i=Element.prototype.scrollTo;i?Et=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Et=!1}}return Et}var U=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({})}return i})();var nr=20,Mn=(()=>{class i{_ngZone=a(E);_platform=a(A);_renderer=a(X).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new _;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=nr){return this._platform.isBrowser?new Rt(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(pn(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ot()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(et(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let o=q(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ir=20,fe=(()=>{class i{_platform=a(A);_listeners;_viewportSize=null;_change=new _;_document=a(D);constructor(){let t=a(E),e=a(X).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),s=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:s,left:l}}change(t=ir){return t>0?this._change.pipe(pn(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Wi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({})}return i})(),Tn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({imports:[U,Wi,U,Wi]})}return i})();var be=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},rt=class extends be{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,t,e,o,r){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null}},dt=class extends be{templateRef;viewContainerRef;context;injector;constructor(n,t,e,o){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},In=class extends be{element;constructor(n){super(),this.element=n instanceof M?n.nativeElement:n}},ut=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof rt)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof dt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof In)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},We=class extends ut{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,o=e.get(bn,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=n.injector||this._defaultInjector||w.NULL,r=o.get(Mt,e.injector);t=Te(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var mt=(()=>{class i extends ut{_moduleRef=a(bn,{optional:!0});_document=a(D);_viewContainerRef=a(Ae);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(e,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[H]})}return i})(),at=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({})}return i})();var Yi=Hi();function Gt(i){return new Ye(i.get(fe),i.get(D))}var Ye=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=R(-this._previousScrollPosition.left),n.style.top=R(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,o=t.style,r=e.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Yi&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Yi&&(e.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Qi(i,n){return new Ge(i.get(Mn),i.get(E),i.get(fe),n)}var Ge=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,o){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(et(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ge=class{enable(){}disable(){}attach(){}};function Pn(i,n){return n.some(t=>{let e=i.bottom<t.top,o=i.top>t.bottom,r=i.right<t.left,s=i.left>t.right;return e||o||r||s})}function Gi(i,n){return n.some(t=>{let e=i.top<t.top,o=i.bottom>t.bottom,r=i.left<t.left,s=i.right>t.right;return e||o||r||s})}function Ji(i,n){return new Xe(i.get(Mn),i.get(fe),i.get(E),n)}var Xe=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,o){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();Pn(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},to=(()=>{class i{_injector=a(w);constructor(){}noop=()=>new ge;close=t=>Qi(this._injector,t);block=()=>Gt(this._injector);reposition=t=>Ji(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ht=class{positionStrategy;scrollStrategy=new ge;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Ze=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var eo=(()=>{class i{_attachedOverlays=[];_document=a(D);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),no=(()=>{class i extends eo{_ngZone=a(E);_renderer=a(X).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=ee(i)))(o||i)}})();static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),io=(()=>{class i extends eo{_platform=a(A);_ngZone=a(E);_renderer=a(X).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=L(t)};_clickListener=t=>{let e=L(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let l=r[s],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(Xi(l.overlayElement,e)||Xi(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=ee(i)))(o||i)}})();static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Xi(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var oo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),qe=(()=>{class i{_platform=a(A);_containerElement;_document=a(D);_styleLoader=a(Q);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||On()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),On()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(oo)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,o){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Nn(i){return i&&i.nodeType===1}var Yt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new _;_attachments=new _;_detachments=new _;_positionStrategy;_scrollStrategy;_locationChanges=xe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new _;_outsidePointerEvents=new _;_afterNextRenderRef;constructor(n,t,e,o,r,s,l,c,u,d=!1,b,I){this._portalOutlet=n,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=b,this._renderer=I,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=G(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Kt(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=R(this._config.width),n.height=R(this._config.height),n.minWidth=R(this._config.minWidth),n.minHeight=R(this._config.minHeight),n.maxWidth=R(this._config.maxWidth),n.maxHeight=R(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Nn(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fn(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let o=Wt(t||[]).filter(r=>!!r);o.length&&(e?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=G(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Zi="cdk-overlay-connected-position-bounding-box",or=/([A-Za-z%]+)$/;function ro(i,n){return new $e(n,i.get(fe),i.get(D),i.get(A),i.get(qe))}var $e=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new _;_resizeSubscription=xe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,o,r){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Zi),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,r=[],s;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,o,l),u=this._getOverlayPoint(c,t,l),d=this._getOverlayFit(u,t,e,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,e)){r.push({position:l,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:t})}if(r.length){let l=null,c=-1;for(let u of r){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Dt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Zi),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:Nn(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let o;if(e.originX=="center")o=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=e.originX=="start"?s:l}t.left<0&&(o-=t.left);let r;return e.originY=="center"?r=n.top+n.height/2:r=e.originY=="top"?n.top:n.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(n,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,t,e,o){let r=Ki(t),{x:s,y:l}=n,c=this._getOffset(o,"x"),u=this._getOffset(o,"y");c&&(s+=c),u&&(l+=u);let d=0-s,b=s+r.width-e.width,I=0-l,F=l+r.height-e.height,T=this._subtractOverflows(r.width,d,b),O=this._subtractOverflows(r.height,I,F),bt=T*O;return{visibleArea:bt,isCompletelyWithinViewport:r.width*r.height===bt,fitsInViewportVertically:O===r.height,fitsInViewportHorizontally:T==r.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,r=e.right-t.x,s=$i(this._overlayRef.getConfig().minHeight),l=$i(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=o,u=n.fitsInViewportHorizontally||l!=null&&l<=r;return c&&u}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Ki(t),r=this._viewportRect,s=Math.max(n.x+o.width-r.width,0),l=Math.max(n.y+o.height-r.height,0),c=Math.max(r.top-e.top-n.y,0),u=Math.max(r.left-e.left-n.x,0),d=0,b=0;return o.width<=r.width?d=u||-s:d=n.x<this._getViewportMarginStart()?r.left-e.left-n.x:0,o.height<=r.height?b=c||-l:b=n.y<this._getViewportMarginTop()?r.top-e.top-n.y:0,this._previousPushAmount={x:d,y:b},{x:n.x+d,y:n.y+b}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!rr(this._lastScrollVisibility,e)){let o=new Ze(n,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,o=this._isRtl(),r,s,l;if(t.overlayY==="top")s=n.y,r=e.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let F=Math.min(e.bottom-n.y+e.top,n.y),T=this._lastBoundingBoxSize.height;r=F*2,s=n.y-F,r>T&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-T/2)}let c=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,u=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,d,b,I;if(u)I=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)b=n.x,d=e.right-n.x-this._getViewportMarginEnd();else{let F=Math.min(e.right-n.x+e.left,n.x),T=this._lastBoundingBoxSize.width;d=F*2,b=n.x-F,d>T&&!this._isInitialRender&&!this._growAfterOpen&&(b=n.x-T/2)}return{top:s,left:b,bottom:l,right:I,width:d,height:r}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=R(e.width),o.height=R(e.height),o.top=R(e.top)||"auto",o.bottom=R(e.bottom)||"auto",o.left=R(e.left)||"auto",o.right=R(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=R(r)),s&&(o.maxWidth=R(s))}this._lastBoundingBoxSize=e,Dt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Dt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Dt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();Dt(e,this._getExactOverlayY(t,n,d)),Dt(e,this._getExactOverlayX(t,n,d))}else e.position="static";let l="",c=this._getOffset(t,"x"),u=this._getOffset(t,"y");c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),e.transform=l.trim(),s.maxHeight&&(o?e.maxHeight=R(s.maxHeight):r&&(e.maxHeight="")),s.maxWidth&&(o?e.maxWidth=R(s.maxWidth):r&&(e.maxWidth="")),Dt(this._pane.style,e)}_getExactOverlayY(n,t,e){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(r.y+this._overlayRect.height)}px`}else o.top=R(r.y);return o}_getExactOverlayX(n,t,e){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(r.x+this._overlayRect.width)}px`}else o.left=R(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Gi(n,e),isOriginOutsideView:Pn(n,e),isOverlayClipped:Gi(t,e),isOverlayOutsideView:Pn(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,o)=>e-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Wt(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof M)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function Dt(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function $i(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(or);return!t||t==="px"?parseFloat(n):null}return i||null}function Ki(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function rr(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var qi="cdk-global-overlay-wrapper";function pt(i){return new Ke}var Ke=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(qi),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:l}=e,c=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),u=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),d=this._xPosition,b=this._xOffset,I=this._overlayRef.getConfig().direction==="rtl",F="",T="",O="";c?O="flex-start":d==="center"?(O="center",I?T=b:F=b):I?d==="left"||d==="end"?(O="flex-end",F=b):(d==="right"||d==="start")&&(O="flex-start",T=b):d==="left"||d==="start"?(O="flex-start",F=b):(d==="right"||d==="end")&&(O="flex-end",T=b),n.position=this._cssPosition,n.marginLeft=c?"0":F,n.marginTop=u?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":T,t.justifyContent=O,t.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(qi),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},ao=(()=>{class i{_injector=a(w);constructor(){}global(){return pt()}flexibleConnectedTo(t){return ro(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),so=new C("OVERLAY_DEFAULT_CONFIG");function Xt(i,n){i.get(Q).load(oo);let t=i.get(qe),e=i.get(D),o=i.get(Z),r=i.get(ne),s=i.get(pe),l=i.get(yt,null,{optional:!0})||i.get(X).createRenderer(null,null),c=new ht(n),u=i.get(so,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,"showPopover"in e.body?c.usePopover=n?.usePopover??u:c.usePopover=!1;let d=e.createElement("div"),b=e.createElement("div");d.id=o.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),b.appendChild(d),c.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let I=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Nn(I)?I.after(b):I?.type==="parent"?I.element.appendChild(b):t.getContainerElement().appendChild(b),new Yt(new We(d,r,i),b,d,c,i.get(E),i.get(no),e,i.get(mi),i.get(io),n?.disableAnimations??i.get(Se,null,{optional:!0})==="NoopAnimations",i.get(Mt),l)}var lo=(()=>{class i{scrollStrategies=a(to);_positionBuilder=a(ao);_injector=a(w);constructor(){}create(t){return Xt(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var kt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({providers:[lo],imports:[U,at,Tn,Tn]})}return i})();var ar=new C("MATERIAL_ANIMATIONS"),co=null;function sr(){return a(ar,{optional:!0})?.animationsDisabled||a(Se,{optional:!0})==="NoopAnimations"?"di-disabled":(co??=a(Ue).matchMedia("(prefers-reduced-motion)").matches,co?"reduced-motion":"enabled")}function J(){return sr()!=="enabled"}var Y=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Y||{}),Ln=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Y.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},uo=Ht({passive:!0,capture:!0}),Bn=class{_events=new Map;addHandler(n,t,e,o){let r=this._events.get(t);if(r){let s=r.get(e);s?s.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,uo)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,uo)))}_delegateEventHandler=n=>{let t=L(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},_e={enterDuration:225,exitDuration:150},lr=800,mo=Ht({passive:!0,capture:!0}),ho=["mousedown","touchstart"],po=["mouseup","mouseleave","touchend","touchcancel"],cr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qe=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Bn;constructor(n,t,e,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=q(e)),r&&r.get(Q).load(cr)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=g(g({},_e),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||dr(n,t,o),l=n-o.left,c=t-o.top,u=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${l-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,e.color!=null&&(d.style.backgroundColor=e.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let b=window.getComputedStyle(d),I=b.transitionProperty,F=b.transitionDuration,T=I==="none"||F==="0s"||F==="0s, 0s"||o.width===0&&o.height===0,O=new Ln(this,d,e,T);d.style.transform="scale3d(1, 1, 1)",O.state=Y.FADING_IN,e.persistent||(this._mostRecentTransientRipple=O);let bt=null;return!T&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Zn=()=>{bt&&(bt.fallbackTimer=null),clearTimeout($n),this._finishRippleTransition(O)},mn=()=>this._destroyRipple(O),$n=setTimeout(mn,u+100);d.addEventListener("transitionend",Zn),d.addEventListener("transitioncancel",mn),bt={onTransitionEnd:Zn,onTransitionCancel:mn,fallbackTimer:$n}}),this._activeRipples.set(O,bt),(T||!u)&&this._finishRippleTransition(O),O}fadeOutRipple(n){if(n.state===Y.FADING_OUT||n.state===Y.HIDDEN)return;let t=n.element,e=g(g({},_e),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=Y.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=q(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ho.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{po.forEach(t=>{this._triggerElement.addEventListener(t,this,mo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Y.FADING_IN?this._startFadeOutTransition(n):n.state===Y.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=Y.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Y.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ae(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+lr;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!se(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Y.VISIBLE||n.config.terminateOnPointerUp&&n.state===Y.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(ho.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(po.forEach(t=>n.removeEventListener(t,this,mo)),this._pointerUpEventsRegistered=!1))}};function dr(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var fo=new C("mat-ripple-global-options");var ur={capture:!0},mr=["focus","mousedown","mouseenter","touchstart"],jn="mat-ripple-loader-uninitialized",Vn="mat-ripple-loader-class-name",bo="mat-ripple-loader-centered",Je="mat-ripple-loader-disabled",go=(()=>{class i{_document=a(D);_animationsDisabled=J();_globalRippleOptions=a(fo,{optional:!0});_platform=a(A);_ngZone=a(E);_injector=a(w);_eventCleanups;_hosts=new Map;constructor(){let t=a(X).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>mr.map(e=>t.listen(this._document,e,this._onInteraction,ur)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(jn,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Vn))&&t.setAttribute(Vn,e.className||""),e.centered&&t.setAttribute(bo,""),e.disabled&&t.setAttribute(Je,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Je,""):t.removeAttribute(Je)}_onInteraction=t=>{let e=L(t);if(e instanceof HTMLElement){let o=e.closest(`[${jn}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Vn)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??_e.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??_e.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Je),rippleConfig:{centered:t.hasAttribute(bo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},c=new Qe(l,this._ngZone,e,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:c,hasSetUpEvents:u}),t.removeAttribute(jn)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _o=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var hr=new C("MAT_BUTTON_CONFIG");function vo(i){return i==null?void 0:ui(i)}var yo=(()=>{class i{_elementRef=a(M);_ngZone=a(E);_animationsDisabled=J();_config=a(hr,{optional:!0});_focusMonitor=a(me);_cleanupClick;_renderer=a(yt);_rippleLoader=a(go);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){a(Q).load(_o);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(it("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ci(o.color?"mat-"+o.color:""),z("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",lt],disabled:[2,"disabled","disabled",lt],ariaDisabled:[2,"aria-disabled","ariaDisabled",lt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",lt],tabIndex:[2,"tabIndex","tabIndex",vo],_tabindex:[2,"tabindex","_tabindex",vo]}})}return i})();var wo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({imports:[U]})}return i})();var pr=["matButton",""],fr=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],br=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var xo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Co=(()=>{class i extends yo{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=gr(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?xo.get(this._appearance):null,r=xo.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[H],attrs:pr,ngContentSelectors:br,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(Oe(fr),ie(0,"span",0),Ft(1),j(2,"span",1),Ft(3,1),V(),Ft(4,2),ie(5,"span",2)(6,"span",3)),e&2&&z("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function gr(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Eo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({imports:[wo,U]})}return i})();function _r(i,n){if(i&1){let t=Re();f(0,"div",1)(1,"button",2),N("click",function(){Qt(t);let o=Pt();return Jt(o.action())}),y(2),h()()}if(i&2){let t=Pt();v(2),gn(" ",t.data.action," ")}}var vr=["label"];function yr(i,n){}var wr=Math.pow(2,31)-1,ve=class{_overlayRef;instance;containerInstance;_afterDismissed=new _;_afterOpened=new _;_onAction=new _;_durationTimeoutId;_dismissedByAction=!1;constructor(n,t){this._overlayRef=t,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,wr))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Do=new C("MatSnackBarData"),Zt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},xr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Cr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),Er=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),ko=(()=>{class i{snackBarRef=a(ve);data=a(Do);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,o){e&1&&(f(0,"div",0),y(1),h(),wt(2,_r,3,1,"div",1)),e&2&&(v(),gn(" ",o.data.message,`
`),v(),xt(o.hasAction?2:-1))},dependencies:[Co,xr,Cr,Er],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),zn="_mat-snack-bar-enter",Un="_mat-snack-bar-exit",Dr=(()=>{class i extends ut{_ngZone=a(E);_elementRef=a(M);_changeDetectorRef=a(re);_platform=a(A);_animationsDisabled=J();snackBarConfig=a(Zt);_document=a(D);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=a(w);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new _;_onExit=new _;_onEnter=new _;_animationState="void";_live;_label;_role;_liveElementId=a(Z).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Un?this._completeExit():t===zn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?G(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(zn)},200)))}exit(){return this._destroyed?Ot(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?G(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Un)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Un),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let o=this._label.nativeElement,r="mdc-snackbar__label";o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let r=e[o],s=r.getAttribute("aria-owns");this._trackedModals.add(r),s?s.indexOf(t)===-1&&r.setAttribute("aria-owns",s+" "+t):r.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let o=e.replace(this._liveElementId,"").trim();o.length>0?t.setAttribute("aria-owns",o):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),o=t.querySelector("[aria-live]");if(e&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(r=document.activeElement),e.removeAttribute("aria-hidden"),o.appendChild(e),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,o){if(e&1&&oe(mt,7)(vr,7),e&2){let r;Nt(r=Lt())&&(o._portalOutlet=r.first),Nt(r=Lt())&&(o._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,o){e&1&&N("animationend",function(s){return o.onAnimationEnd(s.animationName)})("animationcancel",function(s){return o.onAnimationEnd(s.animationName)}),e&2&&z("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[H],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(f(0,"div",1)(1,"div",2,0)(3,"div",3),Tt(4,yr,0,0,"ng-template",4),h(),B(5,"div"),h()()),e&2&&(v(5),it("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[mt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),kr=new C("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Zt}),St=(()=>{class i{_live=a(Sn);_injector=a(w);_breakpointObserver=a(he);_parentSnackBar=a(i,{optional:!0,skipSelf:!0});_defaultConfig=a(kr);_animationsDisabled=J();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ko;snackBarContainerComponent=Dr;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",o){let r=g(g({},this._defaultConfig),o);return r.data={message:t,action:e},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector,r=w.create({parent:o||this._injector,providers:[{provide:Zt,useValue:e}]}),s=new rt(this.snackBarContainerComponent,e.viewContainerRef,r),l=t.attach(s);return l.instance.snackBarConfig=e,l.instance}_attach(t,e){let o=g(g(g({},new Zt),this._defaultConfig),e),r=this._createOverlay(o),s=this._attachSnackBarContainer(r,o),l=new ve(s,r);if(t instanceof vt){let c=new dt(t,null,{$implicit:o.data,snackBarRef:l});l.instance=s.attachTemplatePortal(c)}else{let c=this._createInjector(o,l),u=new rt(t,void 0,c),d=s.attachComponentPortal(u);l.instance=d.instance}return this._breakpointObserver.observe(Ui.HandsetPortrait).pipe(nt(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),o.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(l,o),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new ht;e.direction=t.direction;let o=pt(this._injector),r=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!r||t.horizontalPosition==="end"&&r,l=!s&&t.horizontalPosition!=="center";return s?o.left("0"):l?o.right("0"):o.centerHorizontally(),t.verticalPosition==="top"?o.top("0"):o.bottom("0"),e.positionStrategy=o,e.disableAnimations=this._animationsDisabled,Xt(this._injector,e)}_createInjector(t,e){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return w.create({parent:o||this._injector,providers:[{provide:ve,useValue:e},{provide:Do,useValue:t.data}]})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var So=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({providers:[St],imports:[kt,at,Eo,ko,U]})}return i})();var tt=class i{http=a(bi);API_URL="/api/users";usersState=K([]);users=di(()=>this.usersState());loadAll(n=""){let t=new fi;return n&&(t=t.set("q",n)),this.http.get(this.API_URL,{params:t}).pipe(_t(e=>this.usersState.set(e)))}create(n){return this.http.post(this.API_URL,n).pipe(_t(t=>{this.usersState.update(e=>[...e,t])}))}update(n,t){return this.http.put(`${this.API_URL}/${n}`,t).pipe(_t(()=>{this.usersState.update(e=>e.map(o=>o.id===n?g(g({},o),t):o))}))}delete(n){return this.http.delete(`${this.API_URL}/${n}`).pipe(_t(()=>{this.usersState.update(t=>t.filter(e=>e.id!==n))}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};function Sr(i,n){i&1&&(f(0,"span",6),y(1,"Name is required (min 3 chars)."),h())}function Ar(i,n){i&1&&(f(0,"span",6),y(1,"Please enter a valid email."),h())}var tn=class i{fb=a(Be);userService=a(tt);router=a(_i);snackBar=a(St);userForm=this.fb.group({name:["",[ot.required,ot.minLength(3)]],email:["",[ot.required,ot.email]]});isValid(n){let t=this.userForm.get(n);return t?.invalid&&(t?.dirty||t?.touched)}onSubmit(){this.userForm.valid&&this.userService.create(this.userForm.value).subscribe({next:()=>{this.snackBar.open("User created successfully! \u{1F389}","Close",{duration:3e3}),this.router.navigate(["/users"])},error:n=>{this.snackBar.open("Error saving user. Please try again.","Close",{duration:5e3})}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-add-user"]],decls:19,vars:8,consts:[[1,"max-w-md","mx-auto","mt-10","p-6","bg-whitel","shadow-md","border"],[1,"text-2xl","font-bold","mb-6","text-gray-800"],[3,"ngSubmit","formGroup"],[1,"mb-4"],[1,"block","text-sm","font-medium","text-gray-700"],["formControlName","name","type","text",1,"w-full","px-4","py-2","border","border-secondary","rounded-none","focus:ring-2","focus:ring-green-500","outline-none","shadow-sm"],[1,"text-xs","text-red-500"],[1,"mb-6"],["formControlName","email","type","email",1,"w-full","px-4","py-2","border","border-secondary","rounded-none","focus:ring-2","focus:ring-green-500","outline-none","shadow-sm"],[1,"flex","gap-4"],["type","button","routerLink","/users",1,"px-4","py-2","border","rounded-none","hover:bg-gray-50"],["type","submit",1,"bg-primary","hover:bg-secondary","text-white","px-4","py-2","rounded-lg","transition-colors","rounded-none","w-[150px]","h-[48px]","cursor-pointer",3,"disabled"]],template:function(t,e){t&1&&(f(0,"div",0)(1,"h2",1),y(2,"Add New User"),h(),f(3,"form",2),N("ngSubmit",function(){return e.onSubmit()}),f(4,"div",3)(5,"label",4),y(6,"Full Name"),h(),B(7,"input",5),wt(8,Sr,2,0,"span",6),h(),f(9,"div",7)(10,"label",4),y(11,"Email Address"),h(),B(12,"input",8),wt(13,Ar,2,0,"span",6),h(),f(14,"div",9)(15,"button",10),y(16," Cancel "),h(),f(17,"button",11),y(18," Add User "),h()()()()),t&2&&(v(3),W("formGroup",e.userForm),v(4),z("border-red-500",e.isValid("name")),v(),xt(e.isValid("name")?8:-1),v(4),z("border-red-500",e.isValid("email")),v(),xt(e.isValid("email")?13:-1),v(4),W("disabled",e.userForm.invalid))},dependencies:[hi,Ut,Fe,Vt,zt,Pe,Le,Ne,So,Ie],encapsulation:2})};function en(i){i||(i=a(te));let n=new Rt(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(nt(n))}var nn=class i{user=Me.required();deleteUser=jt();editUser=jt();onDelete(){this.deleteUser.emit(this.user())}onEdit(){this.editUser.emit(this.user())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-user"]],inputs:{user:[1,"user"]},outputs:{deleteUser:"deleteUser",editUser:"editUser"},decls:11,vars:2,consts:[[1,"flex","min-w-[300px]","p-5","shadow","mb-4","gap-4","bg-white"],[1,"flex-1"],[1,"text-lg"],[1,"text-gray-600"],[1,"flex","gap-2"],[1,"bg-secondary","p-2","text-white","w-[100px]","h-[48px]","cursor-pointer","hover:bg-primary",3,"click"],[1,"hover:border-2","text-red-700","px-4","py-2","rounded-lg","transition-colors","rounded-none","w-[100px]","h-[48px]","cursor-pointer",3,"click"]],template:function(t,e){t&1&&(j(0,"div",0)(1,"div",1)(2,"p",2),y(3),V(),j(4,"p",3),y(5),V()(),j(6,"div",4)(7,"button",5),It("click",function(){return e.onEdit()}),y(8,"Edit"),V(),j(9,"button",6),It("click",function(){return e.onDelete()}),y(10,"Delete"),V()()()),t&2&&(v(3),Bt(e.user().name),v(2),Bt(e.user().email))},encapsulation:2})};function Rr(i,n){if(i&1){let t=Re();f(0,"li")(1,"app-user",0),N("deleteUser",function(o){Qt(t);let r=Pt();return Jt(r.onDelete(o))})("editUser",function(o){Qt(t);let r=Pt();return Jt(r.onEdit(o))}),h()()}if(i&2){let t=n.$implicit;v(),W("user",t)}}var on=class i{usersList=Me.required();deleteUser=jt();editUser=jt();onDelete(n){this.deleteUser.emit(n)}onEdit(n){this.editUser.emit(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-users-list"]],inputs:{usersList:[1,"usersList"]},outputs:{deleteUser:"deleteUser",editUser:"editUser"},decls:3,vars:0,consts:[[3,"deleteUser","editUser","user"]],template:function(t,e){t&1&&(f(0,"ul"),ai(1,Rr,2,1,"li",null,ri),h()),t&2&&(v(),si(e.usersList()))},dependencies:[nn],encapsulation:2})};function Or(i,n){}var ft=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Wn=(()=>{class i extends ut{_elementRef=a(M);_focusTrapFactory=a(kn);_config;_interactivityChecker=a(Dn);_ngZone=a(E);_focusMonitor=a(me);_renderer=a(yt);_changeDetectorRef=a(re);_injector=a(w);_platform=a(A);_document=a(D);_portalOutlet;_focusTrapped=new _;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=a(ft,{optional:!0})||new ft,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),s(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",o),s=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||G(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=le(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=le();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=le()))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&oe(mt,7),e&2){let r;Nt(r=Lt())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&it("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[H],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&Tt(0,Or,0,0,"ng-template",0)},dependencies:[mt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),ye=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new _;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!He(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},Mr=new C("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=a(w);return()=>Gt(i)}}),Tr=new C("DialogData"),Ir=new C("DefaultDialogConfig");function Pr(i){let n=K(i),t=new $;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Yn=(()=>{class i{_injector=a(w);_defaultOptions=a(Ir,{optional:!0});_parentDialog=a(i,{optional:!0,skipSelf:!0});_overlayContainer=a(qe);_idGenerator=a(Z);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;_ariaHiddenElements=new Map;_scrollStrategy=a(Mr);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){}open(t,e){let o=this._defaultOptions||new ft;e=g(g({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),s=Xt(this._injector,r),l=new ye(s,e),c=this._attachContainer(s,l,e);if(l.containerInstance=c,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(st(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(t,l,c,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Hn(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Hn(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Hn(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new ht({positionStrategy:t.positionStrategy||pt().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let r=o.injector||o.viewContainerRef?.injector,s=[{provide:ft,useValue:o},{provide:ye,useValue:e},{provide:Yt,useValue:t}],l;o.container?typeof o.container=="function"?l=o.container:(l=o.container.type,s.push(...o.container.providers(o))):l=Wn;let c=new rt(l,o.viewContainerRef,w.create({parent:r||this._injector,providers:s}));return t.attach(c).instance}_attachDialogContent(t,e,o,r){if(t instanceof vt){let s=this._createInjector(r,e,o,void 0),l={$implicit:r.data,dialogRef:e};r.templateContext&&(l=g(g({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new dt(t,null,l,s))}else{let s=this._createInjector(r,e,o,this._injector),l=o.attachComponentPortal(new rt(t,r.viewContainerRef,s));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,o,r){let s=t.injector||t.viewContainerRef?.injector,l=[{provide:Tr,useValue:t.data},{provide:ye,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,o)):l.push(...t.providers)),t.direction&&(!s||!s.get(pe,null,{optional:!0}))&&l.push({provide:pe,useValue:Pr(t.direction)}),w.create({parent:s||r,providers:l})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute("aria-hidden",r):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let r=e[o];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Hn(i,n){let t=i.length;for(;t--;)n(i[t])}var Oo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({providers:[Yn],imports:[kt,at,An,at]})}return i})();function Fr(i,n){}var an=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Gn="mdc-dialog--open",Mo="mdc-dialog--opening",To="mdc-dialog--closing",Nr=150,Lr=75,Br=(()=>{class i extends Wn{_animationStateChanged=new $;_animationsEnabled=!J();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Po(this._config.enterAnimationDuration)??Nr:0;_exitAnimationDuration=this._animationsEnabled?Po(this._config.exitAnimationDuration)??Lr:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Io,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Mo,Gn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Gn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Gn),this._animationsEnabled?(this._hostElement.style.setProperty(Io,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(To)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Mo,To)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=ee(i)))(o||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(li("id",o._config.id),it("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),z("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[H],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(f(0,"div",0)(1,"div",1),Tt(2,Fr,0,0,"ng-template",2),h()())},dependencies:[mt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Io="--mat-dialog-transition-duration";function Po(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?de(i.substring(0,i.length-2)):i.endsWith("s")?de(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var rn=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(rn||{}),At=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ce(1);_beforeClosed=new Ce(1);_result;_closeFallbackTimeout;_state=rn.OPEN;_closeInteractionType;constructor(n,t,e){this._ref=n,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(et(o=>o.state==="opened"),st(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(et(o=>o.state==="closed"),st(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Jn(this.backdropClick(),this.keydownEvents().pipe(et(o=>o.keyCode===27&&!this.disableClose&&!He(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),jr(this,o.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(et(e=>e.state==="closing"),st(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=rn.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=rn.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function jr(i,n,t){return i._closeInteractionType=n,i.close(t)}var we=new C("MatMdcDialogData"),Vr=new C("mat-mdc-dialog-default-options"),zr=new C("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(w);return()=>Gt(i)}}),Xn=(()=>{class i{_defaultOptions=a(Vr,{optional:!0});_scrollStrategy=a(zr);_parentDialog=a(i,{optional:!0,skipSelf:!0});_idGenerator=a(Z);_injector=a(w);_dialog=a(Yn);_animationsDisabled=J();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;dialogConfigClass=an;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){this._dialogRefConstructor=At,this._dialogContainerType=Br,this._dialogDataToken=we}open(t,e){let o;e=g(g({},this._defaultOptions||new an),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,Kt(g({},e),{positionStrategy:pt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:ft,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(s,l,c)=>(o=new this._dialogRefConstructor(s,e,c),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var sn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=S({type:i});static \u0275inj=k({providers:[Xn],imports:[Oo,kt,at,U]})}return i})();var ln=class i{dialogRef=a(At);data=a(we);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-confirm-dialog"]],decls:10,vars:2,consts:[[1,"p-6"],[1,"text-xl","font-bold","mb-2","text-gray-800"],[1,"text-gray-600","mb-6"],[1,"flex","justify-end","gap-3"],[1,"px-4","py-2","border","hover:bg-gray-50","transition-colors",3,"click"],[1,"bg-red-600","text-white","px-4","py-2","hover:bg-red-700","transition-colors","shadow-sm",3,"click"]],template:function(t,e){t&1&&(j(0,"div",0)(1,"h2",1),y(2),V(),j(3,"p",2),y(4),V(),j(5,"div",3)(6,"button",4),It("click",function(){return e.dialogRef.close(!1)}),y(7," Cancel "),V(),j(8,"button",5),It("click",function(){return e.dialogRef.close(!0)}),y(9," Delete "),V()()()),t&2&&(v(2),Bt(e.data.title),v(2),Bt(e.data.message))},dependencies:[sn],encapsulation:2})};var cn=class i{fb=a(Be);userService=a(tt);snackBar=a(St);dialogRef=a(At);data=a(we);editForm=this.fb.group({name:[this.data.name,[ot.required]],email:[this.data.email,[ot.required,ot.email]]});onSave(){this.editForm.valid&&this.userService.update(this.data.id,this.editForm.value).subscribe({next:()=>{this.snackBar.open("User updated successfully!","OK",{duration:3e3}),this.dialogRef.close(!0)},error:()=>this.snackBar.open("Update failed","Close",{duration:3e3})})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-user-edit-dialog"]],decls:17,vars:2,consts:[[1,"p-6"],[1,"text-xl","font-bold","mb-4"],[3,"ngSubmit","formGroup"],[1,"mb-4"],[1,"block","text-sm","font-medium","text-gray-700"],["formControlName","name","type","text",1,"w-full","px-4","py-2","border","border-secondary","rounded-none","focus:ring-2","focus:ring-green-500","outline-none","shadow-sm"],[1,"mb-6"],["formControlName","email","type","email",1,"w-full","px-4","py-2","border","border-secondary","rounded-none","focus:ring-2","focus:ring-green-500","outline-none","shadow-sm"],[1,"flex","justify-end","gap-3"],["type","button",1,"px-4","py-2","border","rounded-none","hover:bg-gray-50",3,"click"],["type","submit",1,"bg-primary","hover:bg-secondary","text-white","px-4","py-2","rounded-lg","transition-colors","rounded-none","w-[150px]","h-[48px]","cursor-pointer",3,"disabled"]],template:function(t,e){t&1&&(f(0,"div",0)(1,"h2",1),y(2,"Edit User"),h(),f(3,"form",2),N("ngSubmit",function(){return e.onSave()}),f(4,"div",3)(5,"label",4),y(6,"Name"),h(),B(7,"input",5),h(),f(8,"div",6)(9,"label",4),y(10,"Email"),h(),B(11,"input",7),h(),f(12,"div",8)(13,"button",9),N("click",function(){return e.dialogRef.close()}),y(14,"Cancel"),h(),f(15,"button",10),y(16," Update "),h()()()()),t&2&&(v(3),W("formGroup",e.editForm),v(12),W("disabled",e.editForm.invalid))},dependencies:[sn,Ut,Fe,Vt,zt,Pe,Le,Ne],encapsulation:2})};function Ur(i,n){i&1&&(f(0,"div",2),B(1,"div",3),h())}var dn=class i{userService=a(tt);searchControl=new yi("");isLoading=K(!1);constructor(){this.searchControl.valueChanges.pipe(De(400),qt(),_t(()=>this.isLoading.set(!0)),fn(n=>this.userService.loadAll(n||"").pipe(ti(()=>this.isLoading.set(!1)))),en()).subscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-user-search"]],decls:3,vars:2,consts:[[1,"relative","max-w-md"],["type","text","placeholder","Search users...",1,"w-full","px-4","py-2","border","border-secondary","rounded-none","focus:ring-2","focus:ring-green-500","outline-none","shadow-sm",3,"formControl"],[1,"absolute","right-3","top-2.5"],[1,"animate-spin","h-5","w-5","border-2","border-green-500","border-t-transparent","rounded-full"]],template:function(t,e){t&1&&(f(0,"div",0),B(1,"input",1),wt(2,Ur,2,0,"div",2),h()),t&2&&(v(),W("formControl",e.searchControl),v(),xt(e.isLoading()?2:-1))},dependencies:[Ut,Vt,zt,wi],encapsulation:2})};var Hr=["class","page"],un=class i{destroyRef=a(te);dialog=a(Xn);snackBar=a(St);authService=a(vi);userService=a(tt);users=this.userService.users;ngOnInit(){this.userService.loadAll().pipe(en(this.destroyRef)).subscribe()}onDelete(n){this.dialog.open(ln,{width:"350px",data:{title:"Delete User",message:`Are you sure you want to delete ${n.name}? This action cannot be undone.`}}).afterClosed().subscribe(e=>{e&&this.userService.delete(n.id).subscribe({next:()=>{this.snackBar.open("User deleted successfully","OK",{duration:3e3})},error:()=>this.snackBar.open("Error deleting user","Close")})})}onEdit(n){this.dialog.open(cn,{width:"400px",data:n}).afterClosed().subscribe(e=>{})}logOut(){this.authService.logout()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-users",8,"page"]],attrs:Hr,decls:8,vars:1,consts:[[1,"py-3","flex","justify-between"],[1,"flex","gap-3"],["routerLink","/users/add",1,"bg-primary","hover:bg-secondary","text-white","px-4","py-2","rounded-lg","transition-colors","rounded-none","w-[100px]","h-[48px]","cursor-pointer"],[1,"hover:border-2","text-red-700","px-4","py-2","rounded-lg","transition-colors","rounded-none","w-[100px]","h-[48px]","cursor-pointer",3,"click"],[3,"deleteUser","editUser","usersList"]],template:function(t,e){t&1&&(f(0,"nav",0),B(1,"app-user-search"),f(2,"div",1)(3,"button",2),y(4," Add User "),h(),f(5,"button",3),N("click",function(){return e.logOut()}),y(6," Log Out "),h()()(),f(7,"app-users-list",4),N("deleteUser",function(r){return e.onDelete(r)})("editUser",function(r){return e.onEdit(r)}),h()),t&2&&(v(7),W("usersList",e.users()))},dependencies:[on,Ie,dn],encapsulation:2})};var Uu=[{path:"",component:un},{path:"add",component:tn}];export{Uu as USERS_ROUTES};
