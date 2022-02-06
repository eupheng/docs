"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7115],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9573:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="Introduction",s={unversionedId:"smart-contracts/frontend_app/introduction",id:"smart-contracts/frontend_app/introduction",title:"Introduction",description:"In this tutorial you will learn how to build a CosmJS based dApp. The example dApp",source:"@site/docs/04-smart-contracts/10-frontend_app/01-introduction.md",sourceDirName:"04-smart-contracts/10-frontend_app",slug:"/smart-contracts/frontend_app/introduction",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/introduction",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/10-frontend_app/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Verifying Smart Contracts",permalink:"/fr/docs/1.0/smart-contracts/verify"},next:{title:"Cosmic dApp logic",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/cosmicdapp-logic"}},d=[{value:"Views",id:"views",children:[{value:"Login",id:"login",children:[],level:3},{value:"Native balance",id:"native-balance",children:[],level:3},{value:"Balance of a CW20 contract",id:"balance-of-a-cw20-contract",children:[],level:3},{value:"Error for address with no contract",id:"error-for-address-with-no-contract",children:[],level:3}],level:2},{value:"Setup environment",id:"setup-environment",children:[],level:2}],p={toc:d};function u(t){var e=t.components,c=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial you will learn how to build a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," based dApp. The example dApp\nwill be a balance checker that will allow you to see your native tokens and the CW20 tokens of the contract with the\naddress you enter."),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"It will look like this:"),(0,a.kt)("h3",{id:"login"},"Login"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(9370).Z,width:"1037",height:"636"})),(0,a.kt)("h3",{id:"native-balance"},"Native balance"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(6366).Z,width:"1158",height:"478"})),(0,a.kt)("h3",{id:"balance-of-a-cw20-contract"},"Balance of a CW20 contract"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(6755).Z,width:"1114",height:"419"})),(0,a.kt)("h3",{id:"error-for-address-with-no-contract"},"Error for address with no contract"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(3959).Z,width:"1144",height:"398"})),(0,a.kt)("h2",{id:"setup-environment"},"Setup environment"),(0,a.kt)("p",null,"We recommend to use ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," but this tutorial should be easily followed with\nany other text editor."),(0,a.kt)("p",null,"You should download the latest release of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps"},(0,a.kt)("inlineCode",{parentName:"a"},"CosmWasm/dApps"))," monorepo using your\npreferred method."))}u.isMDXComponent=!0},6755:function(t,e,n){e.Z=n.p+"assets/images/balance-cw20-72a7a41bcd6a92e7f9dc28b2b0fe4863.png"},3959:function(t,e,n){e.Z=n.p+"assets/images/balance-error-2b5e1d9e86cfac6405a24d7ab68d3709.png"},6366:function(t,e,n){e.Z=n.p+"assets/images/balance-native-cd51ddbca284098ae81b2365ac4083c5.png"},9370:function(t,e,n){e.Z=n.p+"assets/images/login-7e2c08327a417c05bcf775b0e77490da.png"}}]);