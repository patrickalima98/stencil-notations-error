let t,e,n=0,l=!1,s=!1,o=!1,r=!1;const i=window,c=document,a={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},u=new WeakMap,$=t=>u.get(t),f=(t,e)=>u.set(e.s=t,e),d=t=>console.error(t),m=new Map,p=[],h=[],b=[],y=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&a.t?v(_):a.raf(_))},w=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(s){d(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},_=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){d(e)}t.length=0})(p);const t=2==(6&a.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;w(h,t),w(b,t),h.length>0&&(b.push(...h),h.length=0),(l=p.length+h.length+b.length>0)?a.raf(_):n=0},v=t=>Promise.resolve().then(t),g=y(h,!0),j={},k=t=>"object"==(t=typeof t)||"function"===t,M=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_nuiverse_ui("./p-d8631f0b.js").then(()=>{a.o=i.__stencil_cssshim}),R=async()=>{a.o=i.__stencil_cssshim;const t=new RegExp("/nuiverse-ui(\\.esm)?\\.js($|\\?|#)"),e=Array.from(c.querySelectorAll("script")).find(e=>t.test(e.src)||"nuiverse-ui"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href));return U(t.href),window.customElements||await __sc_import_nuiverse_ui("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},U=t=>{const e=(()=>`__sc_import_${"nuiverse-ui".replace(/\s|-/g,"_")}`)();try{i[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i[e]=n=>{const s=new URL(n,t).href;let o=l.get(s);if(!o){const t=c.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${e}.m = m;`],{type:"application/javascript"})),o=new Promise(n=>{t.onload=()=>{n(i[e].m),t.remove()}}),l.set(s,o),c.head.appendChild(t)}return o}}},x=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!k(l))&&(l=String(l)),o&&r?i[i.length-1].i+=l:i.push(o?O(null,l):l),r=o)};if(c(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=O(t,null);return a.u=e,i.length>0&&(a.$=i),a.p=s,a},O=(t,e)=>({t:0,h:t,i:e,_:null,$:null,u:null,p:null}),L={},P=(t,e,n,l,s,o)=>{if(n===l)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,s=I(n),o=I(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if("ref"===e)l&&l(t);else{const c=k(l);if((r||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!r||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}},E=/\s/,I=t=>t?t.split(E):[],T=(t,e,n,l)=>{const s=11===e._.nodeType&&e._.host?e._.host:e._,o=t&&t.u||j,r=e.u||j;for(l in o)l in r||P(s,l,o[l],void 0,n,e.t);for(l in r)P(s,l,o[l],r[l],n,e.t)},A=(n,l,o)=>{let i,a,u,$=l.$[o],f=0;if(s||(r=!0,"slot"===$.h&&($.t|=$.$?2:1)),null!==$.i)i=$._=c.createTextNode($.i);else if(1&$.t)i=$._=c.createTextNode("");else if(i=$._=c.createElement(2&$.t?"slot-fb":$.h),T(null,$,!1),$.$)for(f=0;f<$.$.length;++f)(a=A(n,$,f,i))&&i.appendChild(a);return i["s-hn"]=e,3&$.t&&(i["s-sr"]=!0,i["s-cr"]=t,i["s-sn"]=$.p||"",(u=n&&n.$&&n.$[o])&&u.h===$.h&&n._&&C(n._,!1)),i},C=(t,n)=>{a.t|=1;const l=t.childNodes;for(let s=l.length-1;s>=0;s--){const t=l[s];t["s-hn"]!==e&&t["s-ol"]&&(S(t).insertBefore(t,N(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),n&&C(t,n)}a.t&=-2},D=(t,e,n,l,s,o)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(;s<=o;++s)l[s]&&(r=A(null,n,s,t))&&(l[s]._=r,i.insertBefore(r,N(e)))},F=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(s=l._,z(l),o=!0,s["s-ol"]?s["s-ol"].remove():C(s,!0),s.remove())},H=(t,e)=>t.h===e.h&&("slot"!==t.h||t.p===e.p),N=t=>t&&t["s-ol"]||t,S=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,q=(t,e)=>{const n=e._=t._,l=t.$,s=e.$;let o;null===e.i?("slot"===e.h||T(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,i=e.length-1,c=e[0],a=e[i],u=l.length-1,$=l[0],f=l[u];for(;o<=i&&r<=u;)null==c?c=e[++o]:null==a?a=e[--i]:null==$?$=l[++r]:null==f?f=l[--u]:H(c,$)?(q(c,$),c=e[++o],$=l[++r]):H(a,f)?(q(a,f),a=e[--i],f=l[--u]):H(c,f)?("slot"!==c.h&&"slot"!==f.h||C(c._.parentNode,!1),q(c,f),t.insertBefore(c._,a._.nextSibling),c=e[++o],f=l[--u]):H(a,$)?("slot"!==c.h&&"slot"!==f.h||C(a._.parentNode,!1),q(a,$),t.insertBefore(a._,c._),a=e[--i],$=l[++r]):(s=A(e&&e[r],n,r,t),$=l[++r],s&&S(c._).insertBefore(s,N(c._)));o>i?D(t,null==l[u+1]?null:l[u+1]._,n,l,r,u):r>u&&F(e,o,i)})(n,l,e,s):null!==s?(null!==t.i&&(n.textContent=""),D(n,null,e,s,0,s.length-1)):null!==l&&F(l,0,l.length-1)):(o=n["s-cr"])?o.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},B=t=>{let e,n,l,s,o,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(e=i[n]).nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(i[s]["s-hn"]!==e["s-hn"])if(r=i[s].nodeType,""!==o){if(1===r&&o===i[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){e.hidden=!0;break}B(e)}},V=[],W=t=>{let e,n,l,s,r=t.childNodes,i=r.length,c=0,a=0,u=0;for(i=r.length;c<i;c++){if((e=r[c])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(u=n.nodeType)||8===u)&&""===s||1===u&&null===n.getAttribute("slot")&&""===s||1===u&&n.getAttribute("slot")===s)&&(V.some(t=>t.v===n)||(o=!0,n["s-sn"]=s,V.push({g:e,v:n})));1===e.nodeType&&W(e)}},z=t=>{t.u&&t.u.ref&&t.u.ref(null),t.$&&t.$.forEach(z)},G=(t,e)=>{e&&!t.j&&e["s-p"].push(new Promise(e=>t.j=e))},J=(t,e,n)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.s,s=()=>K(t,e,n,l);return G(e,e.k),Z(void 0,()=>g(s))},K=(n,l,i,u)=>{const $=n["s-rc"];try{((n,l,i,u)=>{e=n.tagName;const $=l.M||O(null,null),f=(t=>t&&t.h===L)(u)?u:x(null,null,u);if(f.h=null,f.t|=4,l.M=f,f._=$._=n,t=n["s-cr"],s=!1,o=!1,q($,f),r){W(f._);for(let t=0;t<V.length;t++){const e=V[t];if(!e.v["s-ol"]){const t=c.createTextNode("");t["s-nr"]=e.v,e.v.parentNode.insertBefore(e.v["s-ol"]=t,e.v)}}a.t|=1;for(let t=0;t<V.length;t++){const e=V[t],n=e.g.parentNode;let l=e.g.nextSibling,s=e.v["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.v["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.v.parentNode||e.v.nextSibling!==l)&&e.v!==l&&n.insertBefore(e.v,l)}a.t&=-2}o&&B(f._),V.length=0})(n,l,0,u.render())}catch(f){d(f)}l.t&=-17,l.t|=2,$&&($.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>Q(n,l,i);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},Q=(t,e,n)=>{const l=e.s,s=e.k;64&e.t?Y(l,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),Y(l,"componentDidLoad"),e.R(t),s||X()),e.j&&(e.j(),e.j=void 0),512&e.t&&v(()=>J(t,e,n)),e.t&=-517},X=()=>{c.documentElement.classList.add("hydrated"),a.t|=2},Y=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){d(l)}},Z=(t,e)=>t&&t.then?t.then(e):e(),tt=(t,e,n)=>{if(e.U){const l=Object.entries(e.U),s=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>$(t).O.get(e))(this,t)},set(n){((t,e,n,l)=>{const s=$(this),o=s.L,r=s.O.get(e),i=s.t,c=s.s;(n=((t,e)=>null==t||k(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,l.U[e][0]))===r||8&i&&void 0!==r||(s.O.set(e,n),c&&2==(18&i)&&J(o,s,l))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){a.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},et=(t,e,n,l,s,o,r)=>{let i,c,a,u;if(1===o.nodeType){for((i=o.getAttribute("c-id"))&&((c=i.split("."))[0]!==r&&"0"!==c[0]||(a={t:0,P:c[0],I:c[1],T:c[2],A:c[3],h:o.tagName.toLowerCase(),_:o,u:null,$:null,C:null,p:null,i:null},e.push(a),o.removeAttribute("c-id"),t.$||(t.$=[]),t.$[a.A]=a,t=a,l&&"0"===a.T&&(l[a.A]=a._))),u=o.childNodes.length-1;u>=0;u--)et(t,e,n,l,s,o.childNodes[u],r);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)et(t,e,n,l,s,o.shadowRoot.childNodes[u],r)}else if(8===o.nodeType)(c=o.nodeValue.split("."))[1]!==r&&"0"!==c[1]||(a={t:0,P:c[1],I:c[2],T:c[3],A:c[4],_:o,u:null,$:null,C:null,p:null,h:null,i:null},"t"===(i=c[0])?(a._=o.nextSibling,a._&&3===a._.nodeType&&(a.i=a._.textContent,e.push(a),o.remove(),t.$||(t.$=[]),t.$[a.A]=a,l&&"0"===a.T&&(l[a.A]=a._))):a.P===r&&("s"===i?(a.h="slot",o["s-sn"]=c[5]?a.p=c[5]:"",o["s-sr"]=!0,n.push(a),t.$||(t.$=[]),t.$[a.A]=a):"r"===i&&(s["s-cr"]=o,o["s-cn"]=!0)));else if(t&&"style"===t.h){const e=O(null,o.textContent);e._=o,e.A="0",t.$=[e]}},nt=(t,e)=>{if(1===t.nodeType){let n=0;for(;n<t.childNodes.length;n++)nt(t.childNodes[n],e);if(t.shadowRoot)for(n=0;n<t.shadowRoot.childNodes.length;n++)nt(t.shadowRoot.childNodes[n],e)}else if(8===t.nodeType){const n=t.nodeValue.split(".");"o"===n[0]&&(e.set(n[1]+"."+n[2],t),t.nodeValue="",t["s-sd"]=""===n[3])}},lt=t=>{const e=t["s-cr"]=c.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},st=(t,e={})=>{const n=[],l=e.exclude||[],s=c.head,o=i.customElements,r=s.querySelector("meta[charset]"),f=c.createElement("style"),p=[];let h,b=!0;Object.assign(a,e),a.l=new URL(e.resourcesUrl||"./",c.baseURI).href,e.syncQueue&&(a.t|=4),a.t|=2,t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],D:e[1],U:e[2],F:e[3]};s.U=e[2];const r=s.D,i=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,L:t,O:new Map};e.H=new Promise(t=>e.R=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this)}connectedCallback(){h&&(clearTimeout(h),h=null),b?p.push(this):a.jmp(()=>((t,e)=>{if(0==(1&a.t)){const n=()=>{},l=$(t);if(!(1&l.t)){let n;l.t|=1,(n=t.getAttribute("s-id"))&&((t,e,n,l)=>{const s=t.shadowRoot,o=[],r=l.M=O(e,null);a.N||nt(c.body,a.N=new Map),t["s-id"]=n,t.removeAttribute("s-id"),et(r,o,[],null,t,t,n),o.forEach(t=>{const n=t.P+"."+t.I,l=a.N.get(n),o=t._;l&&(l["s-sd"]||"0"===t.P)&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=e,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),a.N.delete(n)})})(t,e.D,n,l),n||4&e.t&&lt(t);{let e=t;for(;e=e.parentNode||e.host;)if(1===e.nodeType&&e.hasAttribute("s-id")||e["s-p"]){G(l,l.k=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),v(()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=(t=>{const e=t.D.replace(/-/g,"_"),n=t.S,l=m.get(n);return l?l[e]:__sc_import_nuiverse_ui(`./${n}.entry.js`).then(t=>(m.set(n,t),t[e]),d)})(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(tt(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(i){d(i)}e.t&=-9,t()}}const o=e.k,r=()=>J(t,e,n);o&&o["s-rc"]?o["s-rc"].push(r):r()})(t,l,e))}n()}})(this,s))}disconnectedCallback(){a.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=$(t);2==(18&n.t)&&J(t,n,e)}})(this,s)}componentOnReady(){return $(this).H}};s.S=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,tt(i,s,1)))})),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),s.insertBefore(f,r?r.nextSibling:s.firstChild),b=!1,p.length>0?p.forEach(t=>t.connectedCallback()):a.jmp(()=>h=setTimeout(X,30,"timeout"))},ot=(t,e,n)=>{const l=rt(t);return{emit:t=>l.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},rt=t=>$(t).L;export{L as H,M as a,st as b,ot as c,rt as g,x as h,R as p,f as r};