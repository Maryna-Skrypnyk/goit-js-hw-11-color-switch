parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"LHNm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var t=e(require("./js/colors-data"));function e(t){return t&&t.__esModule?t:{default:t}}var o=document.querySelector('button[data-action="start"]'),a=document.querySelector('button[data-action="stop"]'),l=null;function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function n(){var t=localStorage.getItem("color");t&&(document.body.style.backgroundColor=t)}a.disabled=!0,o.addEventListener("click",function(e){e.target.disabled=!0,a.disabled=!1,l||(l=setInterval(function(){document.body.style.backgroundColor=t.default[r(0,t.default.length-1)],localStorage.setItem("color",document.body.style.backgroundColor)},1e3),console.log(l))}),a.addEventListener("click",function(t){t.target.disabled=!0,o.disabled=!1,clearInterval(l),localStorage.setItem("color",document.body.style.backgroundColor),l=null}),n();
},{"./sass/main.scss":"clu1","./js/colors-data":"LHNm"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.1eb82f28.js.map