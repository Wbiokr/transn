!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{total:{default:0,type:[Number,String]},current:{default:1,type:[Number,String]},size:{default:5,type:[Number,String]},cb:{type:Function},isJump:{type:[Number,String,Boolean],default:!1}},data:function(){return{pages:[1,2,3,4,5,6]}},watch:{total:function(){this.updatePages()}},mounted:function(){this.updatePages()},methods:{prev:function(){this.current<=1||this.calPages(this.current-1)},next:function(){this.current>=Math.ceil(this.total/this.size)||this.calPages(this.current+1)},jump:function(e){e<1||e>Math.ceil(this.total/this.size)||this.calPages(e)},updatePages:function(){var e=Math.ceil(this.total/this.size);if(e>=1&&e<=6){for(var t=[],n=0;n<e;n++)t.push(n+1);this.pages=t}else this.current<=4?this.pages=[1,2,3,4,5,6]:this.current>e-2?this.pages=[e-5,e-4,e-3,e-2,e-1,e]:this.pages=[this.current-3,this.current-2,this.current-1,this.current,this.current+1,this.current+2]},calPages:function(e){var t=Math.ceil(this.total/this.size);if(t>=1&&t<=6){for(var n=[],r=0;r<t;r++)n.push(r+1);this.pages=n}else this.pages=e<=4?[1,2,3,4,5,6]:e>t-2?[t-5,t-4,t-3,t-2,t-1,t]:[e-3,e-2,e-1,e,e+1,e+2];this.cb&&this.cb(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=a.default},function(e,t,n){"use strict";function r(e){p||n(3)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(9),p=!1,u=n(8),d=r,c=u(i.a,s.a,!1,d,"data-v-759536d5",null);c.options.__file="src\\components\\Page\\index.vue",t.default=c.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("39e2f8be",r,!1,{})},function(e,t,n){t=e.exports=n(5)(!0),t.push([e.i,"\n.item-page[data-v-759536d5] {\n  text-align: right;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.item-page *[data-v-759536d5] {\n  -webkit-transition: none;\n  transition: none;\n}\n.item-page a[data-v-759536d5], .item-page input[data-v-759536d5] {\n  display: inline-block;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.87);\n  float: left;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  margin: 0 6px;\n  border: 1px solid #D8D8D8;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  cursor: pointer;\n}\n.item-page a.up span[data-v-759536d5], .item-page input.up span[data-v-759536d5] {\n    -webkit-transform: rotate(135deg);\n        -ms-transform: rotate(135deg);\n            transform: rotate(135deg);\n}\n.item-page a.next span[data-v-759536d5], .item-page input.next span[data-v-759536d5] {\n    -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.item-page a.dis[data-v-759536d5], .item-page input.dis[data-v-759536d5] {\n    cursor: not-allowed;\n    color: #ccc;\n    border-color: #ccc;\n}\n.item-page a span[data-v-759536d5], .item-page input span[data-v-759536d5] {\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    border: 1px solid #999;\n    border-left: none;\n    border-top: none;\n}\n.item-page a[data-v-759536d5]:hover, .item-page input[data-v-759536d5]:hover {\n    -webkit-transition: all ease 0.3s;\n    transition: all ease 0.3s;\n}\n.item-page a[data-v-759536d5]:hover, .item-page a.cur[data-v-759536d5], .item-page input[data-v-759536d5]:hover, .item-page input.cur[data-v-759536d5] {\n    color: #9C92FF;\n    border-color: #9C92FF;\n}\n.item-page a:hover span[data-v-759536d5], .item-page a.cur span[data-v-759536d5], .item-page input:hover span[data-v-759536d5], .item-page input.cur span[data-v-759536d5] {\n      border-color: #9C92FF;\n}\n.item-page input[data-v-759536d5] {\n  width: 50px;\n}\n.item-page .p-ul > span[data-v-759536d5] {\n  float: left;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 10px;\n}\n.item-page .p-ul[data-v-759536d5] {\n  display: inline-block;\n}\n","",{version:3,sources:["C:/Users/Administrator/Documents/code/npm/src/components/Page/index.vue"],names:[],mappings:";AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;EAAjB,iBAAiB;CAAE;AAErB;EACE,sBAAsB;EACtB,gBAAgB;EAChB,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,0BAA0B;EAC1B,2BAAmB;UAAnB,mBAAmB;EACnB,gBAAgB;CAAE;AAClB;IACE,kCAA0B;QAA1B,8BAA0B;YAA1B,0BAA0B;CAAE;AAC9B;IACE,kCAA0B;QAA1B,8BAA0B;YAA1B,0BAA0B;CAAE;AAC9B;IACE,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;CAAE;AACvB;IACE,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;CAAE;AACrB;IACE,kCAA0B;IAA1B,0BAA0B;CAAE;AAC9B;IACE,eAAe;IACf,sBAAsB;CAAE;AACxB;MACE,sBAAsB;CAAE;AAE9B;EACE,YAAY;CAAE;AAEhB;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CAAE;AAEpB;EACE,sBAAsB;CAAE",file:"index.vue",sourcesContent:[".item-page {\n  text-align: right;\n  margin: 0 auto;\n  padding-top: 20px; }\n\n.item-page * {\n  transition: none; }\n\n.item-page a, .item-page input {\n  display: inline-block;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.87);\n  float: left;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  margin: 0 6px;\n  border: 1px solid #D8D8D8;\n  border-radius: 4px;\n  cursor: pointer; }\n  .item-page a.up span, .item-page input.up span {\n    transform: rotate(135deg); }\n  .item-page a.next span, .item-page input.next span {\n    transform: rotate(-45deg); }\n  .item-page a.dis, .item-page input.dis {\n    cursor: not-allowed;\n    color: #ccc;\n    border-color: #ccc; }\n  .item-page a span, .item-page input span {\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    border: 1px solid #999;\n    border-left: none;\n    border-top: none; }\n  .item-page a:hover, .item-page input:hover {\n    transition: all ease 0.3s; }\n  .item-page a:hover, .item-page a.cur, .item-page input:hover, .item-page input.cur {\n    color: #9C92FF;\n    border-color: #9C92FF; }\n    .item-page a:hover span, .item-page a.cur span, .item-page input:hover span, .item-page input.cur span {\n      border-color: #9C92FF; }\n\n.item-page input {\n  width: 50px; }\n\n.item-page .p-ul > span {\n  float: left;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 10px; }\n\n.item-page .p-ul {\n  display: inline-block; }\n"],sourceRoot:""}])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(f)return g;r.parentNode.removeChild(r)}if(v){var i=A++;r=l||(l=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=B(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(m,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!p)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),d={},c=p&&(document.head||document.getElementsByTagName("head")[0]),l=null,A=0,f=!1,g=function(){},h=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){f=n,h=a||{};var i=u(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=d[o.id];s.refs--,n.push(s)}t?(i=u(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete d[s.id]}}}};var B=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],p=i[2],u=i[3],d={id:e+":"+a,css:s,media:p,sourceMap:u};r[o]?r[o].parts.push(d):n.push(r[o]={id:o,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,a,i){var o,s=e=e||{},p=typeof e.default;"object"!==p&&"function"!==p||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):r&&(d=r),d){var c=u.functional,l=c?u.render:u.beforeCreate;c?(u._injectStyles=d,u.render=function(e,t){return d.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,d):[d]}return{esModule:o,exports:s,options:u}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"show",rawName:"v-show",value:e.total/e.size>1,expression:"total/size>1"}],staticClass:"item-page"},[n("div",{staticClass:"p-ul"},[n("a",{staticClass:"up",class:{dis:Number(e.current)<=1},attrs:{href:"javascript:;"},on:{click:e.prev}},[n("span")]),e._v(" "),e._l(e.pages,function(t,r){return n("a",{key:r,class:{cur:t==e.current},on:{click:function(n){e.jump(t)}}},[e._v(e._s(t))])}),e._v(" "),n("a",{staticClass:"next",class:{dis:Number(e.current)>=Math.ceil(e.total/e.size)},attrs:{href:"javascript:;"},on:{click:e.next}},[n("span")]),e._v(" "),e.isJump?n("span",[e._v("跳至")]):e._e(),e._v(" "),e.isJump?n("input",{staticStyle:{cursor:"auto"},attrs:{type:"text",oninput:'value=value.replace(/[^\\d]/g,"")'},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.jump(Number(t.target.value))}}}):e._e(),e._v(" "),e.isJump?n("span",[e._v("页")]):e._e()],2)])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i}])});