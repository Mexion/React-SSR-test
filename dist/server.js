!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(2)),o=n(r(3)),i=n(r(0)),l=r(4),f=n(r(5)),a=new u.default,c=new o.default,d=l.renderToString(i.default.createElement(f.default,null));c.get("/",(function(e,t){e.body="\n        <html>\n            <header>\n                <title>Hello SSR</title>\n            </header>\n            <body>\n                "+d+"\n            </body>\n        </html>\n    "})),a.use(c.routes()).use(c.allowedMethods()),a.listen(4321)},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0));t.default=function(){return u.default.createElement("h1",null,"This is The Home Page")}}]);
//# sourceMappingURL=server.js.map