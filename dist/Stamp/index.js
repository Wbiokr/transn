!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return("0"+e).slice(-2)}Object.defineProperty(t,"__esModule",{value:!0});var o=t.formatMDhm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YMD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(!e)return!1;var o=new Date(e).getFullYear(),u=r(new Date(e).getMonth()+1),f=r(new Date(e).getDate()),i=r(new Date(e).getHours()),a=r(new Date(e).getMinutes()),c=r(new Date(e).getSeconds());switch(t){case"YM":return""+o+n+u;case"YMDh":return""+o+n+u+n+f+" "+i;case"YMDhm":return""+o+n+u+n+f+" "+i+":"+a;case"YMDhms":return""+o+n+u+n+f+" "+i+":"+a+":"+c;case"YMD":default:return""+o+n+u+n+f}};t.default=o}])});