(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[7802],{61002:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}var n=t,i=t;n.default=i;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!o(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const h="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",f={begin:"\\\\[\\s\\S]",relevance:0},p={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[f]},m={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[f]},b={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},E=function(e,t,n={}){const i=a({className:"comment",begin:e,end:t,contains:[]},n);return i.contains.push(b),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},x=E("//","$"),w=E("/\\*","\\*/"),v=E("#","$"),y={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},N={className:"number",begin:h,relevance:0},_={className:"number",begin:"\\b(0b[01]+)",relevance:0},R={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},k={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[f,{begin:/\[/,end:/\]/,relevance:0,contains:[f]}]}]},M={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},O={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},A={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var L=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:h,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),a({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:f,APOS_STRING_MODE:p,QUOTE_STRING_MODE:m,PHRASAL_WORDS_MODE:b,COMMENT:E,C_LINE_COMMENT_MODE:x,C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:v,NUMBER_MODE:y,C_NUMBER_MODE:N,BINARY_NUMBER_MODE:_,CSS_NUMBER_MODE:R,REGEXP_MODE:k,TITLE_MODE:M,UNDERSCORE_TITLE_MODE:O,METHOD_GUARD:A,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function I(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function j(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function B(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>g(e)).join("|")+")"}(...e.illegal))}function T(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function S(e,t){void 0===e.relevance&&(e.relevance=1)}const P=["of","and","for","in","not","or","if","then","parent","list","value"];function C(e,t){return t?Number(t):function(e){return P.includes(e.toLowerCase())}(e)?0:1}function D(e,{plugins:t}){function n(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,t="|"){let n=0;return e.map(e=>{n+=1;const t=n;let i=g(e),r="";for(;i.length>0;){const e=d.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r}).map(e=>`(${e})`).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new i;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(i,s){const o=i;if(i.isCompiled)return o;[T].forEach(e=>e(i,s)),e.compilerExtensions.forEach(e=>e(i,s)),i.__beforeBegin=null,[j,B,S].forEach(e=>e(i,s)),i.isCompiled=!0;let l=null;if("object"==typeof i.keywords&&(l=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=function e(t,n,i="keyword"){const r={};return"string"==typeof t?s(i,t.split(" ")):Array.isArray(t)?s(i,t):Object.keys(t).forEach((function(i){Object.assign(r,e(t[i],n,i))})),r;function s(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach((function(t){const n=t.split("|");r[n[0]]=[e,C(n[0],n[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||i.lexemes||/\w+/,o.keywordPatternRe=n(l,!0),s&&(i.begin||(i.begin=/\B|\b/),o.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(o.endRe=n(i.end)),o.terminatorEnd=g(i.end)||"",i.endsWithParent&&s.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+s.terminatorEnd)),i.illegal&&(o.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return a(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e))return a(e,{starts:e.starts?a(e.starts):null});if(Object.isFrozen(e))return a(e);return e}("self"===e?i:e)}))),i.contains.forEach((function(e){t(e,o)})),i.starts&&t(i.starts,s),o.matcher=function(e){const t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function H(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return this.unknownLanguage=!0,s(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const $={"after:highlightElement":({el:e,result:t,text:n})=>{const i=z(e);if(!i.length)return;const r=document.createElement("div");r.innerHTML=t.value,t.value=function(e,t,n){let i=0,r="";const a=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){r+="<"+U(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function c(e){r+="</"+U(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(r+=s(n.substring(i,t[0].offset)),i=t[0].offset,t===e){a.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===i);a.reverse().forEach(l)}else"start"===t[0].event?a.push(t[0].node):a.pop(),u(t.splice(0,1)[0])}return r+s(n.substr(i))}(i,z(r),n)}};function U(e){return e.nodeName.toLowerCase()}function z(e){const t=[];return function e(n,i){for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:i,node:r}),i=e(r,i),U(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:r}));return i}(e,0),t}const K={},G=(e,t)=>{K[`${e}/${t}`]||(K[`${e}/${t}`]=!0)},V=s,q=a,W=Symbol("nomatch");var X=function(e){const t=Object.create(null),i=Object.create(null),s=[];let a=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function d(e){return g.noHighlightRe.test(e)}function h(e,t,n,i){let r="",s="";"object"==typeof t?(r=e,n=t.ignoreIllegals,s=t.language,i=void 0):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),s=e,r=t);const a={code:r,language:s};k("before:highlight",a);const o=a.result?a.result:f(a.language,a.code,n,i);return o.code=a.code,k("after:highlight",o),o}function f(e,n,i,o){function c(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=_.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof _.subLanguage){if(!t[_.subLanguage])return void k.addText(M);e=f(_.subLanguage,M,!0,R[_.subLanguage]),R[_.subLanguage]=e.top}else e=p(M,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(O+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!_.keywords)return void k.addText(M);let e=0;_.keywordPatternRe.lastIndex=0;let t=_.keywordPatternRe.exec(M),n="";for(;t;){n+=M.substring(e,t.index);const i=c(_,t);if(i){const[e,r]=i;if(k.addText(n),n="",O+=r,e.startsWith("_"))n+=t[0];else{const n=w.classNameAliases[e]||e;k.addKeyword(t[0],n)}}else n+=t[0];e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(M)}n+=M.substr(e),k.addText(n)}(),M=""}function d(e){return e.className&&k.openNode(w.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}}),_}function h(e){return 0===_.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function m(e){const t=e[0],n=e.rule,i=new r(n),s=[n.__beforeBegin,n["on:begin"]];for(const n of s)if(n&&(n(e,i),i.isMatchIgnored))return h(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?M+=t:(n.excludeBegin&&(M+=t),u(),n.returnBegin||n.excludeBegin||(M=t)),d(n),n.returnBegin?0:t.length}function b(e){const t=e[0],i=n.substr(e.index),s=function e(t,n,i){let s=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(t.endRe,i);if(s){if(t["on:end"]){const e=new r(t);t["on:end"](n,e),e.isMatchIgnored&&(s=!1)}if(s){for(;t.endsParent&&t.parent;)t=t.parent;return t}}if(t.endsWithParent)return e(t.parent,n,i)}(_,e,i);if(!s)return W;const a=_;a.skip?M+=t:(a.returnEnd||a.excludeEnd||(M+=t),u(),a.excludeEnd&&(M=t));do{_.className&&k.closeNode(),_.skip||_.subLanguage||(O+=_.relevance),_=_.parent}while(_!==s.parent);return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),d(s.starts)),a.returnEnd?0:t.length}let E={};function x(t,r){const s=r&&r[0];if(M+=t,null==s)return u(),0;if("begin"===E.type&&"end"===r.type&&E.index===r.index&&""===s){if(M+=n.slice(r.index,r.index+1),!a){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=E.rule,t}return 1}if(E=r,"begin"===r.type)return m(r);if("illegal"===r.type&&!i){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(_.className||"<unnamed>")+'"');throw e.mode=_,e}if("end"===r.type){const e=b(r);if(e!==W)return e}if("illegal"===r.type&&""===s)return 1;if(L>1e5&&L>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return M+=s,s.length}const w=N(e);if(!w)throw l.replace("{}",e),new Error('Unknown language: "'+e+'"');const v=D(w,{plugins:s});let y="",_=o||v;const R={},k=new g.__emitter(g);!function(){const e=[];for(let t=_;t!==w;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>k.openNode(e))}();let M="",O=0,A=0,L=0,I=!1;try{for(_.matcher.considerAll();;){L++,I?I=!1:_.matcher.considerAll(),_.matcher.lastIndex=A;const e=_.matcher.exec(n);if(!e)break;const t=x(n.substring(A,e.index),e);A=e.index+t}return x(n.substr(A)),k.closeAllNodes(),k.finalize(),y=k.toHTML(),{relevance:Math.floor(O),value:y,language:e,illegal:!1,emitter:k,top:_}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(A-100,A+100),mode:t.mode},sofar:y,relevance:0,value:V(n),emitter:k};if(a)return{illegal:!1,relevance:0,value:V(n),emitter:k,language:e,top:_,errorRaised:t};throw t}}function p(e,n){n=n||g.languages||Object.keys(t);const i=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:V(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),r=n.filter(N).filter(R).map(t=>f(t,e,!1));r.unshift(i);const s=r.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0}),[a,o]=s,l=a;return l.second_best=o,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,E={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(b,e=>e.replace(/\t/g,g.tabReplace)))}};function x(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const e=N(n[1]);return e||l.replace("{}",n[1]),e?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>d(e)||N(e))}(e);if(d(n))return;k("before:highlightElement",{el:e,language:n}),t=e;const r=t.textContent,s=n?h(r,{language:n,ignoreIllegals:!0}):p(r);k("after:highlightElement",{el:e,result:s,text:r}),e.innerHTML=s.value,function(e,t,n){const r=t?i[t]:n;e.classList.add("hljs"),r&&e.classList.add(r)}(e,n,s.language),e.result={language:s.language,re:s.relevance,relavance:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance,relavance:s.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0,G("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(x)};let v=!1;function y(){if("loading"===document.readyState)return void(v=!0);document.querySelectorAll("pre code").forEach(x)}function N(e){return e=(e||"").toLowerCase(),t[e]||t[i[e]]}function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function R(e){const t=N(e);return t&&!t.disableAutodetect}function k(e,t){const n=e;s.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){v&&y()}),!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:y,fixMarkup:function(e){return G("10.2.0","fixMarkup will be removed entirely in v11.0"),G("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,g.tabReplace||g.useBR?t.replace(o,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):t;var t},highlightElement:x,highlightBlock:function(e){return G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&(G("10.3.0","'useBR' will be removed entirely in v11.0"),G("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=q(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){G("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),v=!0},registerLanguage:function(n,i){let r=null;try{r=i(e)}catch(e){if("Language definition for '{}' could not be registered.".replace("{}",n),!a)throw e;r=c}r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&_(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(i))i[t]===e&&delete i[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:_,requireLanguage:function(e){G("10.4.0","requireLanguage will be removed entirely in v11."),G("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:R,inherit:q,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),s.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="10.7.3";for(const e in L)"object"==typeof L[e]&&n(L[e]);return Object.assign(e,L),e.addPlugin(m),e.addPlugin($),e.addPlugin(E),e}({});e.exports=X}}]);