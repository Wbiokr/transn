!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.checkUsername=function(e){if(0==e.length||void 0==e||e.exec(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/))return(void 0).$toast({msg:"输入的用户名无效"}),!1},t.checkPassword=function(e){if(!e.exec(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{8,16}$/))return(void 0).$toast({msg:"密码长度应为8~16位，数字+字母组合"}),!1},t.checkActor=function(e){if(void 0==e)return(void 0).$toast({msg:"未选择身份"}),!1}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=o(r),c=n(2),s=o(c),i=n(3),a=o(i);t.default={check:u.default,login:s.default,register:a.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){var t=e.username,n=e.password,r=e.cb,u=e.sus;e.err;(0,o.checkUsername)(t),function(){if(!n)r&&r()}(),(void 0).$axios({method:"post",url:"/login",data:{username:t,password:n}}).then(function(e){return e.json()}).then(function(e){u&&u(e)}).catch(function(e){e&&e(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){var t=e.username,n=e.password,r=e.actor,u=e.cb;(0,o.checkUsername)(t),(0,o.checkPassword)(n),(0,o.checkActor)(r),(void 0).$axios({method:"post",url:"/register",data:{username:t,password:n,actor:r}}).then(function(e){return e.json()}).then(function(e){console.log(e),u&&u(e)}).catch(function(e){console.log(e)})}}])});