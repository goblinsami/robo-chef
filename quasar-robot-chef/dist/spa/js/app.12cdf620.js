(()=>{"use strict";var e={4647:(e,t,r)=>{var n=r(1957),o=r(3890),a=r(499),i=r(9835);function s(e,t,r,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(l,[["render",s]]),d=u;var f=r(9973),p=r(3340),h=r(8339);const v=[{path:"/",component:()=>Promise.all([r.e(736),r.e(783)]).then(r.bind(r,6783)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(944)]).then(r.bind(r,1944))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=v,g=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function b(e,t){const n=e(d);n.use(o.Z,t);const i="function"===typeof f["default"]?await(0,f["default"])({}):f["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,9973)),l=(0,a.Xl)("function"===typeof g?await g({store:i}):g);return i.$router=l,{app:n,store:i,storeKey:s,router:l}}const y={config:{}},w="";async function E({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:w})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}b(n.ri,y).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,6288)),Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));E(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var n=r(3340),o=r(7524);const a=o.Z.create({baseURL:"https://api.example.com"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o.Z,e.config.globalProperties.$api=a}))},6288:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(3340),o=r(7712);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",globalInjection:!0,messages:i});e.use(t)}))},9973:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n={};r.r(n),r.d(n,{getIngredients:()=>u,getRecipes:()=>c});var o={};r.r(o),r.d(o,{ADD_INGREDIENT:()=>p,SET_INGREDIENTS:()=>f,SET_RECIPES:()=>d});var a={};r.r(a),r.d(a,{action_addIngredient:()=>m,action_setIngredients:()=>v,action_setRecipes:()=>h});var i=r(3340),s=r(3100);const l={recipes:[],ingredients:[]};function c(e){return e.recipes}function u(e){return e.ingredients}r(6890),r(9665);function d(e,t){e.recipes.unshift(t)}function f(e,t){e.ingredients=t}function p(e,t){e.ingredients.push(t)}function h({commit:e},t){e("SET_RECIPES",t)}function v({commit:e},t){e("SET_INGREDIENTS",t)}function m({commit:e},t){e("ADD_INGREDIENT",t)}const g={namespaced:!0,getters:n,mutations:o,actions:a,state:l};var b=r(4186);const y=(0,i.h)((function(){const e=(0,s.MT)({modules:{recipes:g},plugins:[(0,b.Z)()]});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{783:"84d5584c",862:"187f721e",944:"600ea3d4"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+".e23caa58.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-robot-chef:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={783:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis["webpackChunkquasar_robot_chef"]=globalThis["webpackChunkquasar_robot_chef"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(4647)));n=r.O(n)})();