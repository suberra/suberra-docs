"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i=r.p+"assets/images/getting_started_two_methods-bad548b0cf1d1cc916f73eedb4d92ecc.png",a={title:"Getting started",description:"Getting Started"},s=void 0,c={unversionedId:"integration/getting_started",id:"integration/getting_started",title:"Getting started",description:"Getting Started",source:"@site/docs/4_integration/getting_started.mdx",sourceDirName:"4_integration",slug:"/integration/getting_started",permalink:"/docs/integration/getting_started",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/4_integration/getting_started.mdx",tags:[],version:"current",frontMatter:{title:"Getting started",description:"Getting Started"},sidebar:"docs",previous:{title:"Subscription NFT",permalink:"/docs/subscriptions/subscription_nft"},next:{title:"Webhooks",permalink:"/docs/integration/webhooks"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Direct on-chain query",id:"direct-on-chain-query",level:2},{value:"Webhooks",id:"webhooks",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Integration with Suberra involves the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating a ",(0,o.kt)("em",{parentName:"li"},"product subscriptions")," contract that would keep track of product and prices"),(0,o.kt)("li",{parentName:"ol"},"Set up access controls by checking if a user has valid access to the product subscriptions")),(0,o.kt)("div",{style:{flexBasis:"300px",flexGrow:"1",textAlign:"center"}},(0,o.kt)("img",{src:i,style:{alignSelf:"center",maxWidth:"100%"}})),(0,o.kt)("p",null,"There are two ways of integration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Direct on-chain query"),(0,o.kt)("li",{parentName:"ol"},"Webhooks")),(0,o.kt)("h2",{id:"direct-on-chain-query"},"Direct on-chain query"),(0,o.kt)("p",null,"This option is more suitable for developers who wants to use the automation and subscription storage on Suberra without going through Suberra's centralised Webhook services."),(0,o.kt)("p",null,"Information about the membership is stored as a Proof-of-Membership. The contract interfaces are similar to a standard ERC-721 contract."),(0,o.kt)("h2",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Some merchants might require a more complicated event handling mechanism that cannot be done directly on-chain. For example, a merchant might want to receive real-time requests whenever a customer subscribes to the platform so that it can modify its own customer database and send a welcome email."),(0,o.kt)("p",null,"Suberra operates off-chain servers that provide webhook events for this integration method. For a comprehensive list of webhooks that we fire, as well as an onboarding process please follow the webhooks guide."))}d.isMDXComponent=!0}}]);