(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[3591,911,3825,3805,2575,8956,3379,3979,2193,4974,8831,1633,4676],{81643:(e,t,a)=>{e.exports=a(58015)},2991:(e,t,a)=>{e.exports=a(11787)},12088:(e,t,a)=>{e.exports=a(20711)},6764:(e,t,a)=>{var n=a(70216);e.exports=n},77874:(e,t,a)=>{a(25749);var n=a(80003);e.exports=n("Array").indexOf},17166:(e,t,a)=>{a(94889);var n=a(80003);e.exports=n("Array").map},97993:(e,t,a)=>{var n=a(41535),r=a(77874),l=Array.prototype;e.exports=function(e){var t=e.indexOf;return e===l||n(l,e)&&t===l.indexOf?r:t}},51597:(e,t,a)=>{var n=a(41535),r=a(17166),l=Array.prototype;e.exports=function(e){var t=e.map;return e===l||n(l,e)&&t===l.map?r:t}},20711:(e,t,a)=>{var n=a(6764);e.exports=n},25749:(e,t,a)=>{"use strict";var n=a(65609),r=a(32108),l=a(89830).indexOf,s=a(16680),o=r([].indexOf),i=!!o&&1/o([1],1,-0)<0,c=s("indexOf");n({target:"Array",proto:!0,forced:i||!c},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return i?o(this,e,t)||0:l(this,e,t)}})},94889:(e,t,a)=>{"use strict";var n=a(65609),r=a(2912).map;n({target:"Array",proto:!0,forced:!a(71319)("map")},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},58015:(e,t,a)=>{var n=a(97993);e.exports=n},11787:(e,t,a)=>{var n=a(51597);e.exports=n},24043:(e,t,a)=>{e.exports={default:a(47185),__esModule:!0}},85315:(e,t,a)=>{"use strict";t.__esModule=!0;var n,r=a(24043),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,l.default)(e)}},62988:(e,t,a)=>{var n=a(61755),r=a(26665).each;function l(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var a=this;this.listener=function(e){a.mql=e.currentTarget||e,a.assess()},this.mql.addListener(this.listener)}l.prototype={constuctor:l,addHandler:function(e){var t=new n(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;r(t,(function(a,n){if(a.equals(e))return a.destroy(),!t.splice(n,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";r(this.handlers,(function(t){t[e]()}))}},e.exports=l},38177:(e,t,a)=>{var n=a(62988),r=a(26665),l=r.each,s=r.isFunction,o=r.isArray;function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}i.prototype={constructor:i,register:function(e,t,a){var r=this.queries,i=a&&this.browserIsIncapable;return r[e]||(r[e]=new n(e,i)),s(t)&&(t={match:t}),o(t)||(t=[t]),l(t,(function(t){s(t)&&(t={match:t}),r[e].addHandler(t)})),this},unregister:function(e,t){var a=this.queries[e];return a&&(t?a.removeHandler(t):(a.clear(),delete this.queries[e])),this}},e.exports=i},61755:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},26665:e=>{e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var a=0,n=e.length;a<n&&!1!==t(e[a],a);a++);}}},24974:(e,t,a)=>{var n=a(38177);e.exports=new n},63805:e=>{"use strict";e.exports=n,e.exports.isMobile=n,e.exports.default=n;var t=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function n(e){e||(e={});var n=e.ua;if(n||"undefined"==typeof navigator||(n=navigator.userAgent),n&&n.headers&&"string"==typeof n.headers["user-agent"]&&(n=n.headers["user-agent"]),"string"!=typeof n)return!1;var r=e.tablet?a.test(n):t.test(n);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==n.indexOf("Macintosh")&&-1!==n.indexOf("Safari")&&(r=!0),r}},81633:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(42723),r=a(88239),l=a(99663),s=a(49135),o=a(93196),i=a(67294),c=a(45697),u=a.n(c),d=a(94184),p=a.n(d),h=a(46871),f=function(e){function t(a){(0,l.default)(this,t);var n=(0,s.default)(this,e.call(this,a));n.handleChange=function(e){var t=n.props,a=t.disabled,l=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:(0,r.default)({},n.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var o="checked"in a?a.checked:a.defaultChecked;return n.state={checked:o},n}return(0,o.default)(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?(0,r.default)({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,a=t.prefixCls,l=t.className,s=t.style,o=t.name,c=t.id,u=t.type,d=t.disabled,h=t.readOnly,f=t.tabIndex,m=t.onClick,g=t.onFocus,y=t.onBlur,v=t.autoFocus,b=t.value,C=(0,n.default)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),Z=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),k=this.state.checked,x=p()(a,l,((e={})[a+"-checked"]=k,e[a+"-disabled"]=d,e));return i.createElement("span",{className:x,style:s},i.createElement("input",(0,r.default)({name:o,id:c,type:u,readOnly:h,disabled:d,tabIndex:f,className:a+"-input",checked:!!k,onClick:m,onFocus:g,onBlur:y,onChange:this.handleChange,autoFocus:v,ref:this.saveInput,value:b},Z)),i.createElement("span",{className:a+"-inner"}))},t}(i.Component);f.propTypes={prefixCls:u().string,className:u().string,style:u().object,name:u().string,id:u().string,type:u().string,defaultChecked:u().oneOfType([u().number,u().bool]),checked:u().oneOfType([u().number,u().bool]),disabled:u().bool,onFocus:u().func,onBlur:u().func,onChange:u().func,onClick:u().func,tabIndex:u().oneOfType([u().string,u().number]),readOnly:u().bool,autoFocus:u().bool,value:u().any},f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},(0,h.polyfill)(f);const m=f},53825:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(67294),r=a(45697),l=a.n(r),s=a(41143),o=a.n(s),i=a(34988),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var a,n;u(this,t);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=n=d(this,e.call.apply(e,[this].concat(l))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,l=a.to;r?t.replace(l):t.push(l)}},d(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);o()(this.context.router,"You should not use <Link> outside a <Router>"),o()(void 0!==t,'You must specify the "to" property');var l=this.context.router.history,s="string"==typeof t?(0,i.ob)(t,null,null,l.location):t,u=l.createHref(s);return n.createElement("a",c({},r,{onClick:this.handleClick,href:u,ref:a}))},t}(n.Component);h.propTypes={onClick:l().func,target:l().string,replace:l().bool,to:l().oneOfType([l().string,l().object]).isRequired,innerRef:l().oneOfType([l().string,l().func])},h.defaultProps={replace:!1},h.contextTypes={router:l().shape({history:l().shape({push:l().func.isRequired,replace:l().func.isRequired,createHref:l().func.isRequired}).isRequired}).isRequired};const f=h},51592:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ee});var n=a(1068),r=a.n(n),l=a(3649),s=a.n(l),o=a(66419),i=a.n(o),c=a(65420),u=a.n(c),d=a(19996),p=a.n(d),h=a(41511),f=a.n(h),m=a(86902),g=a.n(m),y=a(14310),v=a.n(y),b=a(20116),C=a.n(b),Z=a(34074),k=a.n(Z),x=a(78914),G=a.n(x),E=a(39649),w=a.n(E),D=a(20368),T=a.n(D),j=a(63978),O=a.n(j),_=a(73126),P=a(68420),S=a(27344),I=a(5281),F=a(84441),A=a(3020),q=a(3362),N=a(44845),R=a(94198),M=a.n(R),V=a(51942),U=a.n(V),L=a(81643),B=a.n(L),H=a(2991),J=a.n(H),K=a(67294),z=a(69035),$=a(66253),Y=a(4107),W=a(34041),Q=a(45360),X=a(87558),ee=a(35247),te=a(31097),ae=a(67908),ne=a(9676),re=a(77268),le=a(53825);const se=[{value:"mail_dt",title:"默认邮件通道"},{value:"mail_api",title:"API邮件通道"},{value:"mail_jar",title:"扩展插件通道"}],oe=[{value:"sms_yp",title:"云片短信通道"},{value:"sms_dy",title:"大鱼短信通道"},{value:"sms_api",title:"API短信通道"},{value:"sms_jar",title:"扩展插件通道"}],ie=[{value:"ding_dt",title:"钉钉机器人"},{value:"ding_api",title:"API钉钉通道"},{value:"ding_jar",title:"扩展插件通道"}],ce=[{value:"cus_jar",title:"扩展插件通道"}],ue=[{value:"wechat_dt",title:"企业微信机器人"},{value:"webhook_jar",title:"扩展插件通道"}];var de=a(19528);function pe(e,t){var a=g()(e);if(v()){var n=v()(e);t&&(n=C()(n).call(n,(function(t){return k()(e,t).enumerable}))),a.push.apply(a,n)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?G()(a=pe(Object(r),!0)).call(a,(function(t){(0,N.Z)(e,t,r[t])})):w()?T()(e,w()(r)):G()(n=pe(Object(r))).call(n,(function(t){O()(e,t,k()(r,t))}))}return e}function fe(e,t){var a=void 0!==u()&&p()(e)||e["@@iterator"];if(!a){if(f()(e)||(a=function(e,t){var a;if(!e)return;if("string"==typeof e)return me(e,t);var n=s()(a=Object.prototype.toString.call(e)).call(a,8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return i()(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw l}}}}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ge(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,q.Z)(e);if(t){var l=(0,q.Z)(this).constructor;a=r()(n,arguments,l)}else a=n.apply(this,arguments);return(0,A.Z)(this,a)}}var ye=z.Z.Item,ve=$.ZP.Group,be=Y.Z.TextArea,Ce=W.Z.Option,Ze=["http://dtalert:8085/gate/alert/sms_sync","http://dtalert:8085/gate/alert/mail_sync","http://dtalert:8085/gate/alert/ding_sync","http://dtalert:8085/gate/alert/custom_sync","","http://dtalert:8085/gate/alert/wechat_sync"],ke={alertGateType:1,alertGateCode:"",alertGateSource:"",alertGateName:"",alertGateJson:"",alertTemplate:"",alertTemplateId:"",webhook:"",filePath:"",phones:"",emails:"",dings:"",isDefault:!1,uploadImage:!1,url:Ze[0],subject:""},xe=["dtstack_sms","dtstack_mail","dtstack_ding","dtstack_custom","","dtstack_wechat"],Ge=function(e){(0,F.Z)(a,e);var t=ge(a);function a(e){var n;return(0,P.Z)(this,a),n=t.call(this,e),(0,N.Z)((0,I.Z)(n),"state",{gid:n.getParamsFromUrl(window.location.href).gid||null,tid:n.getParamsFromUrl(window.location.href).tid||null,formData:ke,testActive:!1,placeholder:{jar:'{"classname":"com.dtstack.sender.sms.xxxsender"}',api:'{\n"cookiestore": false,\n"configs": [{\n"url": "",\n"method": "get",\n"header": {},\n"body": {}\n}],\n"context": {}\n} ',sms_yp:'请按照此格式输入配置信息：\n{"yp_api_key":"xxxxxx"}',mail_dt:'{\n"mail.smtp.host":"smtp.yeah.net",\n"mail.smtp.port":"25",\n"mail.smtp.ssl.enable":"false",\n"mail.smtp.username":"daishu@dtstack.com",\n"mail.smtp.password":"xxxx",\n"mail.smtp.from":"daishu@dtstack.com"\n}'},channels:[],isDisable:!1}),(0,N.Z)((0,I.Z)(n),"getAlertChannels",(function(){var e=(0,I.Z)(n),t=[];de.sr.dtstackAlertChannelList({page:1,size:100}).then((function(a){a.data.success?de.sr.getAlertNotifications().then((function(n){var r,l=fe(a.data.data.data);try{for(l.s();!(r=l.n()).done;){var s,o=r.value,i=fe(n);try{for(i.s();!(s=i.n()).done;){var c=s.value;o.alertGateName===c.name&&t.push(he(he({},o),{},{gid:c.id,type:c.type,isDefault:c.isDefault}))}}catch(e){i.e(e)}finally{i.f()}}}catch(e){l.e(e)}finally{l.f()}e.setState({channels:t})})):Q.Z.error("获取通道失败！")}))})),(0,N.Z)((0,I.Z)(n),"handleCheckNameReuse",(function(e,t,a){var r,l=!1,s=fe(n.state.channels);try{for(s.s();!(r=s.n()).done;){r.value.alertGateName===t&&(l=!0)}}catch(e){s.e(e)}finally{s.f()}l?a("告警通道名称已经存在！"):a()})),(0,N.Z)((0,I.Z)(n),"getChannelData",(function(e,t){var a=(0,I.Z)(n);de.sr.getDtstackAlertDetail({id:t}).then((function(t){if(t.data.success){var n=t.data.data;de.sr.getGrafanaAlertDetail({alertId:e}).then((function(e){var t=e.data;n=he(he({},n),{},{phones:t.settings.phones,emails:t.settings.emails,dings:t.settings.dings,isDefault:t.isDefault,uploadImage:t.settings.uploadImage,url:t.settings.url,webhook:t.settings.webhook,subject:t.settings.subject,created:t.created,updated:t.updated}),a.setDefaultFormData(n)}))}else Q.Z.error(t.message)}))})),(0,N.Z)((0,I.Z)(n),"setDefaultFormData",(function(e){var t=n.props.form.setFieldsValue;n.setState({formData:e},(function(){t(e)}))})),(0,N.Z)((0,I.Z)(n),"handleFieldChange",(function(e){var t=n.state.formData;t[e.target.name]=e.target.value,n.setState({formData:t})})),(0,N.Z)((0,I.Z)(n),"handleCheckboxChange",(function(e){var t=e.target.name,a=n.state.formData;a[t]=e.target.checked,n.setState({formData:a})})),(0,N.Z)((0,I.Z)(n),"handleGateTypeChange",(function(e){var t=n.state.formData,a=n.props.form.setFieldsValue;t.alertGateType=e.target.value,t.alertGateCode="",t.url=Ze[e.target.value-1],n.setState({formData:t}),a(t)})),(0,N.Z)((0,I.Z)(n),"handleGateCodeChange",(function(e){var t=n.state.formData;t.alertGateCode=e,n.setState({formData:t})})),(0,N.Z)((0,I.Z)(n),"fileUploadChange",(function(e){var t=n.state.formData;e.file.status,"done"===e.file.status?(Q.Z.success("上传成功"),e.file.response.success?(t.filePath=e.file.response.data,n.setState({formData:t})):Q.Z.error(e.file.response.message)):"error"===e.file.status&&Q.Z.error("上传失败")})),(0,N.Z)((0,I.Z)(n),"getGrafanaParams",(function(){var e=n.state,t=e.formData,a=e.gid,r=a?{id:M()(a+""),created:t.created,updated:t.updated}:{};switch(t.alertGateType){case 1:r=he(he({},r),{},{name:t.alertGateName,type:xe[t.alertGateType-1],isDefault:t.isDefault,settings:{httpMethod:"POST",autoResolve:!0,uploadImage:t.uploadImage,url:t.url,phones:t.phones,subject:t.subject,source:t.alertGateSource}});break;case 2:r=he(he({},r),{},{name:t.alertGateName,type:xe[t.alertGateType-1],isDefault:t.isDefault,settings:{httpMethod:"POST",autoResolve:!0,uploadImage:t.uploadImage,url:t.url,emails:t.emails,subject:t.subject,source:t.alertGateSource}});break;case 3:r=he(he({},r),{},{name:t.alertGateName,type:xe[t.alertGateType-1],isDefault:t.isDefault,settings:{httpMethod:"POST",autoResolve:!0,uploadImage:t.uploadImage,url:t.url,dings:t.dings,subject:t.subject,source:t.alertGateSource}});break;case 4:r=he(he({},r),{},{name:t.alertGateName,type:xe[t.alertGateType-1],isDefault:t.isDefault,settings:{httpMethod:"POST",autoResolve:!0,uploadImage:t.uploadImage,url:t.url,identification:t.identification,subject:t.subject,source:t.alertGateSource}});break;case 6:r=he(he({},r),{},{name:t.alertGateName,type:xe[t.alertGateType-1],isDefault:t.isDefault,settings:{httpMethod:"POST",autoResolve:!0,uploadImage:t.uploadImage,url:t.url,webhook:t.webhook,subject:t.subject,source:t.alertGateSource}})}return r})),(0,N.Z)((0,I.Z)(n),"handleTestChannel",(function(){var e=n.getGrafanaParams();de.sr.grafanaAlertChannelTest(e).then((function(e){"Test notification sent"===e.data.message&&Q.Z.success("测试告警发送成功！")}))})),(0,N.Z)((0,I.Z)(n),"handleFormSubmit",(function(e){e.preventDefault();var t=(0,I.Z)(n),a=n.state,r=a.formData,l=a.gid,s=a.tid,o={alertGateType:r.alertGateType,alertGateCode:r.alertGateCode,alertGateSource:r.alertGateSource,alertGateName:r.alertGateName,alertGateJson:r.alertGateJson,alertTemplate:r.alertTemplate,alertTemplateId:r.alertTemplateId,filePath:r.filePath,id:s},i=n.getGrafanaParams();l?n.props.form.validateFields((function(e){e||de.sr.grafanaAlertChannelUpdate(i).then((function(e){(e=e.data).id?de.sr.dtstackAlertChannelSave(o).then((function(e){(e=e.data).success?(Q.Z.success("保存成功！"),t.setState({testActive:!0})):Q.Z.error(e.message)})):Q.Z.error(e.message)}))})):n.props.form.validateFields((function(e){e||de.sr.grafanaAlertChannelSave(i).then((function(e){(e=e.data).id?de.sr.dtstackAlertChannelSave(o).then((function(e){(e=e.data).success?(Q.Z.success("保存成功！"),t.setState({testActive:!0,isDisable:!0})):Q.Z.error(e.message)})):Q.Z.error(e.message)}))}))})),n}return(0,S.Z)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.gid,a=e.tid;this.getAlertChannels(),t?this.getChannelData(t+"",a+""):this.setDefaultFormData(U()({},ke))}},{key:"getParamsFromUrl",value:function(e){var t={},a=[],n="",r="",l=e.substring(B()(e).call(e,"?")+1,e.length).split("&");for(var s in l)n=(a=l[s].split("="))[0],r=a[1],t[n]=r;return t}},{key:"render",value:function(){var e,t,a,n=this.props.form,r=n.getFieldDecorator,l=n.getFieldsValue,s=this.state,o=s.formData,i=s.placeholder,c=s.testActive,u=s.gid,d=s.isDisable,p={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:10}}},h={name:"file",action:"/gate/alert/jarUpload",onChange:this.fileUploadChange},f=[];switch(l().alertGateType){case 1:f=oe;break;case 2:f=se;break;case 3:f=ie;break;case 4:f=ce;break;case 6:f=ue}var m=K.createElement(ye,(0,_.Z)({},p,{label:"上传文件"}),K.createElement(X.Z,h,K.createElement("a",{href:"javascript:;"},"选择jar文件")));return K.createElement("div",{className:"add-alert-channel"},K.createElement(ee.Z,null,K.createElement(ee.Z.Item,null,K.createElement(le.Z,{to:"/deploycenter/monitoring/alert?activeKey=channel"},"告警通道")),K.createElement(ee.Z.Item,null,u?"编辑告警通道":"新增告警通道")),K.createElement("div",{className:"box-shadow-style overflow-scroll"},K.createElement(z.Z,{onSubmit:this.handleFormSubmit},K.createElement(ye,(0,_.Z)({},p,{label:"告警类型"}),r("alertGateType",{rules:[{required:!0,message:"请选择告警通道"}],initialValue:o.alertGateType})(K.createElement(ve,{name:"alertGateType",onChange:this.handleGateTypeChange},K.createElement($.ZP,{value:1},"短信通道"),K.createElement($.ZP,{value:2},"邮件通道"),K.createElement($.ZP,{value:3},"钉钉通道"),K.createElement($.ZP,{value:6},"企业微信通道"),K.createElement($.ZP,{value:4},"自定义通道")))),K.createElement(ye,(0,_.Z)({},p,{label:"通道模式"}),r("alertGateCode",{rules:[{required:!0,message:"通道模式不可为空"}],initialValue:o.alertGateCode})(K.createElement(W.Z,{onChange:this.handleGateCodeChange},J()(f).call(f,(function(e,t){return K.createElement(Ce,{value:e.value,key:"".concat(t)},e.title)}))))),l().alertGateCode&&-1!==B()(e=l().alertGateCode).call(e,"jar")&&m,K.createElement(ye,(0,_.Z)({},p,{label:"使用场景"}),r("alertGateSource",{rules:[{required:!0,message:"产品不能为空"},{max:32,message:"场景名称不能超过32个字符"}],initialValue:o.alertGateSource})(K.createElement(Y.Z,{placeholder:"使用场景一般指产品名称，请输入产品名称，不超过32个字符",name:"alertGateSource",onChange:this.handleFieldChange}))),K.createElement(ye,(0,_.Z)({},p,{label:"通道名称"}),r("alertGateName",{rules:[{required:!0,message:"通道名称不能为空"},{max:32,message:"通道名称不能超过32个字符"}],initialValue:o.alertGateName})(K.createElement(Y.Z,{name:"alertGateName",disabled:!!u,placeholder:"请输入通道名称，不超过32个字符",onChange:this.handleFieldChange}))),K.createElement(ye,(0,_.Z)({},p,{label:"通道配置信息"}),r("alertGateJson",{rules:[{required:!0,message:"配置信息不能为空"}],initialValue:o.alertGateJson})(K.createElement(be,{name:"alertGateJson",placeholder:l().alertGateCode&&("sms_yp"===l().alertGateCode?i.sms_yp:"mail_dt"===l().alertGateCode?i.mail_dt:-1!==B()(t=l().alertGateCode).call(t,"jar")?i.jar:-1!==B()(a=l().alertGateCode).call(a,"api")?i.api:""),rows:6,onChange:this.handleFieldChange}))),K.createElement(ye,(0,_.Z)({},p,{label:"通知消息模版"}),r("alertTemplate",{rules:[{required:!0,message:"消息模版不能为空"}],initialValue:o.alertTemplate})(K.createElement(be,{name:"alertTemplate",placeholder:'请按照此格式填写："【企业名称】$'+'{message}，请登录EasyManage处理"，如【'.concat(window.APPCONFIG.company,"】$")+"{message}，请登录EasyManage处理",rows:4,onChange:this.handleFieldChange}))),K.createElement(ye,(0,_.Z)({},p,{label:K.createElement("span",null,"适用于所有告警",K.createElement(te.Z,{title:"对所有告警使用此通知"},K.createElement(ae.Z,{style:{marginLeft:2},type:"question-circle"})))}),r("isDefault",{initialValue:o.isDefault,valuePropName:"checked"})(K.createElement(ne.Z,{name:"isDefault",onChange:this.handleCheckboxChange}))),K.createElement(ye,(0,_.Z)({},p,{label:K.createElement("span",null,"包含图片",K.createElement(te.Z,{title:"捕获监控图片并将其包含在告警信息中"},K.createElement(ae.Z,{style:{marginLeft:2},type:"question-circle"})))}),r("uploadImage",{initialValue:o.uploadImage,valuePropName:"checked"})(K.createElement(ne.Z,{name:"uploadImage",onChange:this.handleCheckboxChange}))),K.createElement(ye,(0,_.Z)({},p,{label:"URL"}),r("url",{rules:[{required:!0,message:"URL不能为空"}],initialValue:o.url})(K.createElement(Y.Z,{name:"url",onChange:this.handleFieldChange}))),2===o.alertGateType?K.createElement(ye,(0,_.Z)({},p,{label:"Email"}),r("emails",{rules:[{required:!0,message:"emails不能为空"}],initialValue:o.emails})(K.createElement(Y.Z,{name:"emails",placeholder:"填写告警邮箱，多个用逗号分隔",onChange:this.handleFieldChange}))):"",1===o.alertGateType?K.createElement(ye,(0,_.Z)({},p,{label:"Phones"}),r("phones",{rules:[{required:!0,message:"phones不能为空"}],initialValue:o.phones})(K.createElement(Y.Z,{name:"phones",placeholder:"填写告警手机号，多个用逗号分隔",onChange:this.handleFieldChange}))):"",3===o.alertGateType?K.createElement(ye,(0,_.Z)({},p,{label:"Dings"}),r("dings",{rules:[{required:!0,message:"dings不能为空"}],initialValue:o.dings})(K.createElement(Y.Z,{name:"dings",placeholder:"填写告警钉钉，多个用逗号分隔",onChange:this.handleFieldChange}))):"",void 0,6===o.alertGateType?K.createElement(ye,(0,_.Z)({},p,{label:"Webhook"}),r("webhook",{rules:[{required:!0,message:"webhook不能为空"}],initialValue:o.webhook})(K.createElement(Y.Z,{name:"webhook",placeholder:"多个用逗号分隔",onChange:this.handleFieldChange}))):"",1!==o.alertGateType&&K.createElement(ye,(0,_.Z)({},p,{label:"Subject"}),r("subject",{rules:[{required:!0,message:"subject不能为空"}],initialValue:o.subject})(K.createElement(Y.Z,{name:"subject",onChange:this.handleFieldChange}))),K.createElement(ye,{className:"add-alert-channel-bottom"},K.createElement(re.Z,{type:"primary",disabled:!c,style:{marginRight:10},onClick:this.handleTestChannel},"发送测试"),K.createElement(re.Z,{type:"primary",disabled:d,htmlType:"submit"},"保存")))))}}]),a}(K.Component);const Ee=z.Z.create()(Ge)},73126:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(12088);function r(){return(r=n||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}}}]);