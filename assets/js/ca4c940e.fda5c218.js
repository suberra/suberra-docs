"use strict";(self.webpackChunksuberra_docs=self.webpackChunksuberra_docs||[]).push([[305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(r),d=a,m=y["".concat(i,".").concat(d)]||y[d]||p[d]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905);const c=r.p+"assets/images/what_is_suberra-0da6dc8d252cf9d77200b0f2be279437.png";var s=r(9960);const i=function(e){const t=e.cards;return a.createElement("div",{className:"container",style:{padding:5}},a.createElement("div",{className:"row is-multiline"},t.map(((e,t)=>a.createElement("div",{className:"col col--6",key:t,style:{padding:5}},a.createElement(s.Z,{className:"card",to:e.route,style:{height:"100%",textAlign:"center"}},a.createElement("div",{className:"card__body"},a.createElement("h4",null,e.title),a.createElement("p",null,e.description))))))))},l={title:"Introduction",slug:"/",sidebar_position:1,description:"Introduction"},u=void 0,p={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Introduction",source:"@site/docs/0_introduction.mdx",sourceDirName:".",slug:"/",permalink:"/suberra-docs/docs/",draft:!1,editUrl:"https://github.com/suberra/suberra-docs/docs/0_introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:1,description:"Introduction"},sidebar:"docs",next:{title:"What is Suberra",permalink:"/suberra-docs/docs/overview/what_is_suberra"}},y={},d=[{title:"Gasless Transactions",description:"Suberra allows you to pay gas on behalf of your users",route:"/docs/overview/use_cases"},{title:"Subscriptions",description:"Suberra allows you to accept recurring subscriptions on a weekly, monthly or yearly basis. We automate the charges so you don't have to.",route:"/docs/subscriptions/subscriptions"}],m=[{value:"Accept crypto payments from any user",id:"accept-crypto-payments-from-any-user",level:2},{value:"Accept crypto payments for anything",id:"accept-crypto-payments-for-anything",level:2},{value:"Features at a glance",id:"features-at-a-glance",level:2}],f={toc:m};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Suberra is a payments gateway that allow businesses to accept payments from Anywhere for Anything."),(0,o.kt)("div",{style:{flexBasis:"300px",flexGrow:"1",textAlign:"center"}},(0,o.kt)("img",{src:c,style:{alignSelf:"center",maxWidth:"100%"}})),(0,o.kt)("h2",{id:"accept-crypto-payments-from-any-user"},"Accept crypto payments from any user"),(0,o.kt)("p",null,"By integrating with Suberra once, you can accept payments from most popular wallets on any network. You can also integrate with centralised exchanges such as Binance Pay and FTX and allow users to pay you crypto payments directly from those platforms."),(0,o.kt)("h2",{id:"accept-crypto-payments-for-anything"},"Accept crypto payments for anything"),(0,o.kt)("p",null,"You can use Suberra to accept payments for anything. Some examples are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tickets and merchandise: Accept crypto payments for your conference tickets"),(0,o.kt)("li",{parentName:"ul"},"SaaS-based subscription: Collecting a fixed monthly fee for access to your platform."),(0,o.kt)("li",{parentName:"ul"},"Pay-as-you-go Subscription: Ideal for services that have a usage based pricing.")),(0,o.kt)("h2",{id:"features-at-a-glance"},"Features at a glance"),(0,o.kt)(i,{cards:d,mdxType:"Cards"}))}b.isMDXComponent=!0}}]);