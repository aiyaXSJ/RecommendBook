(function(e){function n(n){for(var o,r,c=n[0],s=n[1],u=n[2],f=0,l=[];f<c.length;f++)r=c[f],a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);g&&g(n);while(l.length)l.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var s=t[r];0!==a[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={index:0},i=[];function r(e){return c.p+"static/js/"+({"pages-cart-cart":"pages-cart-cart","pages-index-index":"pages-index-index","pages-message-message":"pages-message-message","pages-profile-profile":"pages-profile-profile"}[e]||e)+"."+{"pages-cart-cart":"ef8dca51","pages-index-index":"a0552afc","pages-message-message":"e7c02428","pages-profile-profile":"aec5e052"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e),i=function(n){s.onerror=s.onload=null,clearTimeout(u);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,t[1](r)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var g=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("67c5")},1130:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},"1dce":function(e,n,t){e.exports=t.p+"static/fonts/iconfont.9f9b0b19.eot"},"2d27":function(e,n,t){"use strict";var o=t("5c39"),a=t.n(o);a.a},"2eae":function(e,n,t){"use strict";t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.myRequest=void 0;var o="http://localhost:3000",a=function(e){return new Promise((function(n,t){uni.request({url:o+e.url,method:e.method||"GET",data:e.data||{},success:function(e){if(404==e.statusCode)return uni.showToast({title:"获取数据失败"});n(e)},fail:function(e){return uni.showToast({title:"请求接口失败"})}})}))};n.myRequest=a},4434:function(e,n,t){"use strict";t.r(n);var o=t("1130"),a=t("46df");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("2d27");var r,c=t("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=s.exports},"46df":function(e,n,t){"use strict";t.r(n);var o=t("fd50"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"5c39":function(e,n,t){var o=t("a6fa");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("fb0c15ea",o,!0,{sourceMap:!1,shadowMode:!1})},"67c5":function(e,n,t){"use strict";var o=t("ee27"),a=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("dbbd"),t("1c31");var i=o(t("e143")),r=o(t("4434")),c=t("2eae");i.default.config.productionTip=!1,i.default.prototype.$myRequest=c.myRequest,r.default.mpType="app";var s=new i.default((0,a.default)({},r.default));s.$mount()},"71dc":function(e,n,t){e.exports=t.p+"static/fonts/iconfont.de421e42.ttf"},a6fa:function(e,n,t){var o=t("24fb"),a=t("1de5"),i=t("1dce"),r=t("c041"),c=t("71dc"),s=t("fcfb");n=o(!1);var u=a(i),f=a(i,{hash:"#iefix"}),g=a(r),l=a(c),p=a(s,{hash:"#iconfont"});n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */@font-face{font-family:iconfont;src:url("+u+"); /* IE9 */src:url("+f+') format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url('+g+') format("woff"),url('+l+') format("truetype"),url('+p+') format("svg") /* iOS 4.1- */}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-cainixihuanfuben:before{content:"\\e653"}.icon-paihangbang:before{content:"\\e66e"}.icon-new:before{content:"\\e8ed"}.icon-remen:before{content:"\\e629"}.icon-lunkuodasan-:before{content:"\\e612"}.icon-hot:before{content:"\\e605"}.icon-cainixihuan:before{content:"\\e652"}.icon-shu:before{content:"\\e762"}.icon-rementuijian:before{content:"\\e610"}.icon-lock:before{content:"\\e645"}.icon-baobiao:before{content:"\\e619"}.icon-shangpingouwudai:before{content:"\\e788"}.icon-baobiao1:before{content:"\\e65d"}.icon-baobiao2:before{content:"\\e63a"}.icon-morentouxiang:before{content:"\\e616"}.icon-tijikongjian-xianxing:before{content:"\\e89f"}.icon-danju-tianchong:before{content:"\\e62a"}.icon-shuben:before{content:"\\e60a"}.icon-shuben1:before{content:"\\e603"}.icon-shangpin:before{content:"\\e74e"}.icon-yanjing:before{content:"\\e611"}.icon-users:before{content:"\\e651"}.icon-yonghu:before{content:"\\e6b2"}',""]),e.exports=n},c041:function(e,n,t){e.exports=t.p+"static/fonts/iconfont.156f7318.woff"},dbbd:function(e,n,t){"use strict";(function(e){var n=t("ee27"),o=n(t("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"图书推荐系统",navigationBarBackgroundColor:"#4682B4",backgroundColor:"#F8F8F8",enablePullDownRefresh:!0},tabBar:{borderStyle:"white",color:"#bfbfbf",selectedColor:"#4682B4",list:[{text:"首页",pagePath:"pages/index/index",iconPath:"static/tabbar/shouye.png",selectedIconPath:"static/tabbar/shouye-active.png",redDot:!1,badge:""},{text:"资讯",pagePath:"pages/message/message",iconPath:"static/tabbar/zixun.png",selectedIconPath:"static/tabbar/zixun-active.png",redDot:!1,badge:""},{text:"购物车",pagePath:"pages/cart/cart",iconPath:"static/tabbar/gouwuche.png",selectedIconPath:"static/tabbar/gouwuche-active.png",redDot:!1,badge:""},{text:"我的",pagePath:"pages/profile/profile",iconPath:"static/tabbar/yonghu.png",selectedIconPath:"static/tabbar/yonghu-active.png",redDot:!1,badge:""}],backgroundColor:"#f7f7fa"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("b3b0"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-cart-cart",(function(e){var n={component:t.e("pages-cart-cart").then(function(){return e(t("4687"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-profile-profile",(function(e){var n={component:t.e("pages-profile-profile").then(function(){return e(t("9443"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-message-message",(function(e){var n={component:t.e("pages-message-message").then(function(){return e(t("86a5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"图书推荐系统"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/cart/cart",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[e("pages-cart-cart",{slot:"page"})])}},meta:{id:2,name:"pages-cart-cart",isNVue:!1,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/profile/profile",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"我的主页"})},[e("pages-profile-profile",{slot:"page"})])}},meta:{id:3,name:"pages-profile-profile",isNVue:!1,pagePath:"pages/profile/profile",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/message/message",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"资讯"})},[e("pages-message-message",{slot:"page"})])}},meta:{id:4,name:"pages-message-message",isNVue:!1,pagePath:"pages/message/message",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},fcfb:function(e,n,t){e.exports=t.p+"static/img/iconfont.66d2ab31.svg"},fd50:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o}});