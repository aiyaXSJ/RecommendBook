(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1eff":function(t,e,n){"use strict";var r=n("ee27");n("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("c964")),o={data:function(){return{userlist:[],booklist:[],navlist:[{icon:"iconfont icon-new",title:"新书速递",path:"pages/message/message"},{icon:"iconfont icon-remen",title:"人气榜单",path:"pages/message/message"},{icon:"iconfont icon-paihangbang",title:"高分图书",path:"pages/message/message"},{icon:"iconfont icon-cainixihuanfuben",title:"猜你喜欢",path:"pages/message/message"}]}},onLoad:function(){this.send()},methods:{send:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/getNew"});case 2:n=e.sent,r=n.data,t.booklist=r.slice(0,24);case 5:case"end":return e.stop()}}),e)})))()},push:function(t){console.log(t)}}};e.default=o},2427:function(t,e,n){t.exports=n.p+"static/img/timg.655c7ab3.jpg"},3921:function(t,e,n){"use strict";var r=n("59d3"),i=n.n(r);i.a},4407:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-1c65f3e8]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-1c65f3e8]{width:100%;height:100%}.nav[data-v-1c65f3e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.nav uni-text[data-v-1c65f3e8]{font-size:%?30?%}.nav .nav_item[data-v-1c65f3e8]{width:25%;text-align:center}.nav .nav_item uni-view[data-v-1c65f3e8]{width:%?120?%;height:%?120?%;color:#fff;background:#4682b4;-webkit-border-radius:50%;border-radius:50%;font-size:%?70?%;margin:10px auto;line-height:%?120?%}.hot_books[data-v-1c65f3e8]{background:#eee;overflow:hidden;margin-top:10px}.hot_books .title[data-v-1c65f3e8]{height:50px;line-height:50px;text-align:center;color:#4682b4;letter-spacing:%?40?%;background:#fff;margin:%?7?% 0}.books_list[data-v-1c65f3e8]{padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.books_item[data-v-1c65f3e8]{background:#fff;width:%?355?%;margin:%?10?% 0;font-size:%?30?%}.books_item uni-image[data-v-1c65f3e8]{width:100%;height:150px}',""]),t.exports=e},"59d3":function(t,e,n){var r=n("4407");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("cfd416ce",r,!0,{sourceMap:!1,shadowMode:!1})},"676a":function(t,e,n){"use strict";n.r(e);var r=n("1eff"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"8bd3":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"home"},[r("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:3e3,duration:1e3}},[r("v-uni-swiper-item",[r("v-uni-view",{staticClass:"swiper-item"},[r("v-uni-image",{attrs:{src:n("2427"),mode:"widthFix"}})],1)],1),r("v-uni-swiper-item",[r("v-uni-view",{staticClass:"swiper-item"},[r("v-uni-image",{attrs:{src:n("2427"),mode:"widthFix"}})],1)],1),r("v-uni-swiper-item",[r("v-uni-view",{staticClass:"swiper-item"},[r("v-uni-image",{attrs:{src:n("2427"),mode:"widthFix"}})],1)],1)],1),r("v-uni-view",{staticClass:"nav"},t._l(t.navlist,(function(e){return r("v-uni-view",{staticClass:"nav_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.push(e.path)}}},[r("v-uni-view",{class:e.icon}),r("v-uni-text",[t._v(t._s(e.title))])],1)})),1),r("v-uni-view",{staticClass:"hot_books"},[r("v-uni-view",{staticClass:"title"},[t._v("新书速递")]),r("v-uni-view",{staticClass:"books_list"},t._l(t.booklist,(function(e){return r("v-uni-view",{key:e.id,staticClass:"books_item"},[r("v-uni-image",{attrs:{src:e.bookimg,mode:""}}),r("v-uni-view",{staticClass:"item_title"},[t._v(t._s(e.bookname))]),r("v-uni-view",{staticClass:"item_author"},[t._v("作者："+t._s(e.author))]),r("v-uni-view",{staticClass:"item_tag"},[t._v("作者：东野奎吾")])],1)})),1)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},w={};w[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(G([])));m&&m!==r&&i.call(m,a)&&(w=m);var y=L.prototype=k.prototype=Object.create(w);_.prototype=y.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},f.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[s]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,n,r){var i=new j(b(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function b(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=C(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,o,a){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function C(t,e,n){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?v:h,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b3b0:function(t,e,n){"use strict";n.r(e);var r=n("8bd3"),i=n("676a");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3921");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"1c65f3e8",null,!1,r["a"],a);e["default"]=c.exports},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("d3b7"),n("e6cf");function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}}}]);