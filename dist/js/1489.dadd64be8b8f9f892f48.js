(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[1489,4974],{58657:(t,e,n)=>{var i=n(60386);t.exports=function(t,e,n){for(n=n||document,t={parentNode:t};(t=t.parentNode)&&t!==n;)if(i(t,e))return t}},60386:t=>{"use strict";t.exports=function(t,e){var n=window.Element.prototype,i=n.matches||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector;if(!t||1!==t.nodeType)return!1;var r=t.parentNode;if(i)return i.call(t,e);for(var s=r.querySelectorAll(e),o=s.length,a=0;a<o;a++)if(s[a]===t)return!0;return!1}},62988:(t,e,n)=>{var i=n(61755),r=n(26665).each;function s(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}s.prototype={constuctor:s,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;r(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";r(this.handlers,(function(e){e[t]()}))}},t.exports=s},38177:(t,e,n)=>{var i=n(62988),r=n(26665),s=r.each,o=r.isFunction,a=r.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var r=this.queries,c=n&&this.browserIsIncapable;return r[t]||(r[t]=new i(t,c)),o(e)&&(e={match:e}),a(e)||(e=[e]),s(e,(function(e){o(e)&&(e={match:e}),r[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},61755:t=>{function e(t){this.options=t,!t.deferSetup&&this.setup()}e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=e},26665:t=>{t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,i=t.length;n<i&&!1!==e(t[n],n);n++);}}},24974:(t,e,n)=>{var i=n(38177);t.exports=new i},98143:function(t,e,n){var i,r;void 0===(r="function"==typeof(i=function(){function t(t,e){return function(n,i,r,s){n[t]?n[t](i,r,s):n[e]&&n[e]("on"+i,r)}}return{add:t("addEventListener","attachEvent"),remove:t("removeEventListener","detachEvent")}})?i.call(e,n,e,t):i)||(t.exports=r)}}]);