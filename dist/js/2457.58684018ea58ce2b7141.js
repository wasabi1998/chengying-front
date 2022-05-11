"use strict";(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[2457],{12457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var c=n(95266),r=n(33032),a=n.n(r),o=n(67294),l=n(45360),s=n(35247),u=n(4191),i=n(11382),m=n(36808),d=n(86902),f=n.n(d),p=n(14310),h=n.n(p),v=n(34074),E=n.n(v),y=n(78914),Z=n.n(y),_=n(39649),b=n.n(_),g=n(20368),w=n.n(g),x=n(63978),I=n.n(x),C=n(73126),N=n(44845),k=n(71649),S=n(78580),j=n.n(S),L=n(20116),O=n.n(L),R=n(77766),T=n.n(R),K=n(59340),U=n.n(K),z=n(31238),F=n.n(z),H=n(29027),P=n(67908),M=n(8263),V=n(37092),$=n(64143),A=n(75940);function B(e,t){var n=f()(e);if(h()){var c=h()(e);t&&(c=O()(c).call(c,(function(t){return E()(e,t).enumerable}))),n.push.apply(n,c)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n,c,r=null!=arguments[t]?arguments[t]:{};t%2?Z()(n=B(Object(r),!0)).call(n,(function(t){(0,N.Z)(e,t,r[t])})):b()?w()(e,b()(r)):Z()(c=B(Object(r))).call(c,(function(t){I()(e,t,E()(r,t))}))}return e}const G=(0,H.$j)((function(e){return{authorityList:e.UserCenterStore.authorityList}}))((function(e){var t=e.records,n=e.history,r=o.useState([]),a=(0,c.Z)(r,2),s=a[0],u=a[1],d=o.useState({visible:!1,title:"",type:"",execId:""}),f=(0,c.Z)(d,2),p=f[0],h=f[1],v=function(e,t){h((function(n){return{visible:!n.visible,title:"echo"===t?"脚本查看":"日志查看",type:t,execId:e&&e.execId}}))},E=function(e){var t,n,c;return T()(t=T()(n="".concat((c=e.name,encodeURIComponent(c)),"_")).call(n,e.objectValue,"_")).call(t,e.execId)};return o.createElement(o.Fragment,null,o.createElement(M.Z,{className:"echo-table dt-table-fixed-base",style:{height:"calc(100vh - 380px)",boxShadow:"none"},scroll:{y:!0},rowKey:E,showHeader:!1,expandIcon:function(e){var t=e.expanded,n=e.onExpand,c=e.record;return c&&c.children?o.createElement("a",{className:"custem-icon",onClick:function(e){return n(c,e)}},o.createElement(P.Z,{type:t?"down":"right"})):o.createElement("span",{className:"no-icon"})},expandedRowKeys:s,dataSource:t.children,onExpand:function(e,t){var n=(0,k.Z)(s),c=E(t);e&&!j()(n).call(n,c)?n.push(c):n=O()(s).call(s,(function(e){return e!=c})),u(n)},indentSize:25,pagination:!1},o.createElement(M.Z.Column,{title:"名称",key:"name",render:function(e,t){return o.createElement("div",{className:"td-name"},1===t.status&&o.createElement(i.Z,{size:"small",style:{margin:"0 10px"}}),2===t.status&&o.createElement(P.Z,{style:{color:"#12BC6A"},type:"check-circle",theme:"filled"}),3===t.status&&o.createElement(P.Z,{style:{color:"red"},type:"close-circle",theme:"filled"}),t.desc,t.execId&&o.createElement("span",{className:"opt-tool"},o.createElement("a",{onClick:function(e){return v(t,"log")}},"日志查看"),o.createElement("a",{onClick:function(e){return v(t,"echo")}},"脚本查看")))}}),o.createElement(M.Z.Column,{title:"类型",width:"20%",render:function(e,c){return o.createElement("a",{onClick:function(e){return function(e){if(l.Z.destroy(),!e.isExist)return l.Z.warning("该组件已从该集群卸载！");var c="";switch(e.objectType){case 1:c="/deploycenter/cluster/detail/deployed?from=".concat(location.pathname),$.Z.setNaviKey("menu_deploy_center","deployed");break;case 2:c="/opscenter/service?from=".concat(location.pathname),e=D(D({},e),{},{productName:t.productName}),m.set("em_product_id",""),m.set("em_product_name",""),m.set("em_current_parent_product",t.parentProductName),$.Z.setNaviKey("menu_ops_center","sub_menu_service");break;default:c="/opscenter/hoststatus?from=".concat(location.pathname),m.set("em_product_id",""),m.set("em_product_name",t.productName),m.set("em_current_parent_product",t.parentProductName),$.Z.setNaviKey("menu_ops_center","sub_menu_host")}sessionStorage.setItem("service_object",U()(e)),n.push(c)}(c)}},3!=c.objectType?c.objectValue:c.hostIp)}}),o.createElement(M.Z.Column,{title:"开始时间",width:"20%",dataIndex:"startTime"}),o.createElement(M.Z.Column,{title:"持续时间",width:"12%",dataIndex:"duration",render:function(e,t){return 1===t.status?o.createElement(A.Z,{initial:F()(t.status)}):e+"s"}})),p.visible&&o.createElement(V.Z,(0,C.Z)({},p,{onColse:v})))}));var W=n(19528),q=n(35770);const J=function(e){var t,n=e.location,r=e.history,d=n.state,f=void 0===d?{}:d,p=o.useState({}),h=(0,c.Z)(p,2),v=h[0],E=h[1];o.useEffect((function(){return y(),function(){return clearTimeout(t)}}),[]);var y=function e(){W.mt.getEchoOrderDetail({clusterId:m.get("em_current_cluster_id"),operationId:f.operationId}).then((function(n){var c=n.data;0===c.code?(E(c.data),t=a()((function(){e()}),5e3)):l.Z.error(c.msg)}))},Z=o.createElement(o.Fragment,null,o.createElement("div",{className:"echo-status clearfix mb-12"},o.createElement("span",{className:"mr-48"},"状态：",(q.statusMap[(v||{}).status]||{}).label||"--"),o.createElement("span",{className:"mr-48"},"对象：",(v||{}).productName||"--"),o.createElement("span",{className:"mr-48"},"开始时间：",(v||{}).startTime||"--"),o.createElement("span",{className:"mr-48"},"持续时间：",(v||{}).duration||"--","s")),o.createElement(G,{records:v,history:r,states:f}));return o.createElement("div",{className:"scriptecho-page"},o.createElement(s.Z,null,o.createElement(s.Z.Item,{onClick:function(e){return r.push("/deploycenter/cluster/detail/echoList?from=".concat(n.pathname))}},"集群命令"),o.createElement(s.Z.Item,null,(v||{}).name||"--")),o.createElement(u.Z,{title:o.createElement("span",null,1===(v||{}).status&&o.createElement(i.Z,{size:"small"})," ",(v||{}).name),footer:Z}))}},37092:(e,t,n)=>{n.d(t,{Z:()=>S});var c=n(71649),r=n(95266),a=n(32366),o=n.n(a),l=n(86902),s=n.n(l),u=n(77766),i=n.n(u),m=n(39969),d=n.n(m),f=n(67294),p=n(45360),h=n(77268),v=n(30258),E=n(11382),y=n(14277),Z=n(74981),_=(n(44576),n(68886),n(40049),n(55827)),b=n(30381),g=n.n(b),w=n(36808),x=n(96486),I=function(e,t){var n,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o()(n=s()(c)).call(n,(function(e,t){var n,r;return i()(n=i()(r="".concat(e)).call(r,t,"=")).call(n,c[t],"&")}),"".concat(e,"?")).replace(/&$/,"");fetch(r).then((function(e){return e.blob()})).then((function(e){var n=d().createObjectURL(e),c=document.createElement("a");c.href=n,c.download=t,c.click(),d().revokeObjectURL(c.href)})).catch((function(e){p.Z.error(e.message)}))},C=function(e){var t=e.title,n=e.visible,c=e.type,r=e.onColse,a=e.execId,o=e.showFooter,l=void 0===o||o,s=f.useRef(null),u=f.useCallback((function(e){var t=e.type,n=e.payload;switch(t){case"log":I("/api/v2/cluster/downLoadShellLog","".concat(a,"-shell.log"),n);break;case"echo":I("/api/v2/cluster/downLoadShellContent","".concat(a,"-content.sh"),n)}}),[]),i="echo"===c?f.createElement(h.Z,{type:"primary",disabled:!a,onClick:x.debounce((function(){return u({type:"echo",payload:{execId:a}})}),200)},"下载完整脚本"):f.createElement(h.Z,{type:"primary",disabled:!a,onClick:x.debounce((function(){u({type:"log",payload:{clusterId:w.get("em_current_cluster_id"),execId:a}})}),200)},"下载完整日志");return f.createElement(v.Z,{className:"code-view-modal",width:"echo"===c?520:1050,title:t,visible:n,footer:l?i:null,onCancel:function(e){s.current&&s.current.wsClose(),r()}},"echo"===c?f.createElement(N,{execId:a}):f.createElement(k,{execId:a,cref:s}))},N=function(e){var t=e.execId,n=f.useState(""),c=(0,r.Z)(n,2),a=c[0],o=c[1];return f.useEffect((function(){t&&function(e){_.Z.showShellContent({execId:e}).then((function(e){var t=e.data,n=t.data,c=t.code,r=t.msg;if(0===c)return o(n);p.Z.error(r)})).catch((function(e){p.Z.error(e.message)}))}(t)}),[t]),f.createElement(Z.ZP,{className:"ace-code-portal",mode:"golang",theme:"kuroir",value:a,readOnly:!0,width:"400px",height:"100%",showGutter:!1})},k=function(e){var t=e.execId,n=e.cref,a=f.useState([]),o=(0,r.Z)(a,2),l=o[0],s=o[1],u=f.useState(!1),m=(0,r.Z)(u,2),d=m[0],p=m[1],h=f.useRef(null);f.useImperativeHandle(n,(function(){return{wsClose:function(){h.current&&h.current.close(),h.current=null}}}));f.useEffect((function(){if(t)try{var e,n;h.current=new WebSocket(i()(e=i()(n="ws://".concat(window.location.hostname,":")).call(n,window.location.port,"/api/v2/cluster/showShellLog?execId=")).call(e,t)),h.current.onmessage=function(e){s((function(t){var n;return i()(n=[]).call(n,(0,c.Z)(t),[{time:"[".concat(g()().format("hh:mm:ss"),"]"),message:e.data}])})),p(!1)},h.current.onopen=function(e){p(!0)},h.current.onerror=function(e){p(!1)},h.current.onclose=function(){p(!1)}}catch(e){p(!1)}}),[t]);return f.createElement(E.Z,{spinning:d},l.length?f.createElement("div",{className:"log-info"},f.createElement("ul",{dangerouslySetInnerHTML:{__html:function(e){var t="";for(var n in e){t+="\n        <li>\n          <pre>".concat(e[n].message,"</pre>\n        </li>\n      ")}return t}(l)}})):f.createElement(y.Z,null))};const S=f.memo(C,(function(e,t){return e.execId===t.execId}))}}]);