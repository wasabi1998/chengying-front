"use strict";(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[3219],{81429:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(1068),r=n.n(a),c=n(86902),l=n.n(c),i=n(14310),o=n.n(i),s=n(20116),u=n.n(s),d=n(34074),m=n.n(d),p=n(78914),f=n.n(p),v=n(39649),y=n.n(v),h=n(20368),E=n.n(h),g=n(63978),N=n.n(g),Z=n(68420),b=n(27344),x=n(5281),k=n(84441),F=n(3020),C=n(3362),S=n(44845),D=n(81643),Y=n.n(D),B=n(67294),M=n(18446),w=n.n(M),O=n(70390),_=n(70492);n(21865),n(83062),n(82601),n(78511),n(46295),n(40451),n(94859),n(27539);function A(e,t){var n=l()(e);if(o()){var a=o()(e);t&&(a=u()(a).call(a,(function(t){return m()(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n,a,r=null!=arguments[t]?arguments[t]:{};t%2?f()(n=A(Object(r),!0)).call(n,(function(t){(0,S.Z)(e,t,r[t])})):y()?E()(e,y()(r)):f()(a=A(Object(r))).call(a,(function(t){N()(e,t,m()(r,t))}))}return e}function L(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,C.Z)(e);if(t){var c=(0,C.Z)(this).constructor;n=r()(a,arguments,c)}else n=a.apply(this,arguments);return(0,F.Z)(this,n)}}var I=function(e){(0,k.Z)(n,e);var t=L(n);function n(e){var a;return(0,Z.Z)(this,n),a=t.call(this,e),(0,S.Z)((0,x.Z)(a),"chart",null),(0,S.Z)((0,x.Z)(a),"onResize",(function(){a.state.myChart.resize()})),(0,S.Z)((0,x.Z)(a),"styleFormat",(function(e){return"string"==typeof e?Y()(e).call(e,"%")>-1?e:e.replace(/[px]/gi,"")+"px":e+"px"})),a.state={myChart:null},a}return(0,b.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props.option,t=_.init(this.chart);t.setOption(e),this.setState({myChart:t})}},{key:"componentWillUnmount",value:function(){this.state.myChart.dispose()}},{key:"componentDidUpdate",value:function(e){var t=this.props.option;w()(e.option,t)||this.state.myChart.setOption(t,!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,a=t.height,r=R(R({},t.style),{},{width:n?this.styleFormat(n):"100%",height:a?this.styleFormat(a):"300px"});return B.createElement(O.Z,{onResize:this.onResize},B.createElement("div",{ref:function(t){return e.chart=t},style:r}))}}]),n}(B.PureComponent)},70390:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(1068),r=n.n(a),c=n(68420),l=n(27344),i=n(5281),o=n(84441),s=n(3020),u=n(3362),d=n(44845),m=n(77766),p=n.n(m);function f(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var c=(0,u.Z)(this).constructor;n=r()(a,arguments,c)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var v=function(e){(0,o.Z)(n,e);var t=f(n);function n(){var e,a;(0,c.Z)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=t.call.apply(t,p()(e=[this]).call(e,l)),(0,d.Z)((0,i.Z)(a),"resize",(function(){var e=a.props.onResize;e&&e()})),a}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize,!1)}},{key:"render",value:function(){return this.props.children}}]),n}(n(67294).Component)},73219:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(14310),r=n.n(a),c=n(20116),l=n.n(c),i=n(34074),o=n.n(i),s=n(78914),u=n.n(s),d=n(39649),m=n.n(d),p=n(20368),f=n.n(p),v=n(63978),y=n.n(v),h=n(71649),E=n(44845),g=n(44930),N=n(95266),Z=n(63109),b=n.n(Z),x=n(11128),k=n.n(x),F=n(31581),C=n.n(F),S=n(33032),D=n.n(S),Y=n(77766),B=n.n(Y),M=n(32366),w=n.n(M),O=n(78580),_=n.n(O),A=n(2991),R=n.n(A),L=n(86902),I=n.n(L),z=n(67294),U=n(30381),P=n.n(U),j=n(29027),H=n(97183),K=n(39903),T=n(45360),W=n(77268),G=n(67908),$=n(8263),q=n(81429),J=["#2FC25B","#1890FF","#6087EF","#7460EF","#AB60EF","#E85EB3","#EF5350","#F18646","#FFB310","#8BDA63"],Q=n(11382),V=n(19528);function X(e,t){var n=I()(e);if(r()){var a=r()(e);t&&(a=l()(a).call(a,(function(t){return o()(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n,a,r=null!=arguments[t]?arguments[t]:{};t%2?u()(n=X(Object(r),!0)).call(n,(function(t){(0,E.Z)(e,t,r[t])})):m()?f()(e,m()(r)):u()(a=X(Object(r))).call(a,(function(t){y()(e,t,o()(r,t))}))}return e}function te(e){var t,n=e.config,a=e.time,r=e.index,c=e.delNoDataChart,l=z.useState({}),i=(0,N.Z)(l,2),o=i[0],s=i[1],d=z.useState({}),m=(0,N.Z)(d,2),p=m[0],f=m[1],v=z.useState(!1),y=(0,N.Z)(v,2),h=y[0],E=y[1],Z=function(){var e=(0,g.Z)(b().mark((function e(t){var n,l,i,o,u,d,m,p,v,y,h,g;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),l=t.targets,i=t.decimal,o=t.unit,u=t.metric,d={targets:l,decimal:i,unit:o,from:P()("".concat(a[0].format("YYYY-MM-DD")," 00:00:00")).valueOf(),to:P()("".concat(a[1].format("YYYY-MM-DD")," 23:59:59")).valueOf()},e.next=5,V.DB.getChartData(d);case 5:if(m=e.sent,p=m.data,v=p.code,y=p.msg,0!==(null==(h=p.data)||null===(n=h.x)||void 0===n?void 0:n.length)){e.next=10;break}return c(r),e.abrupt("return");case 10:0===v?(g=ee(ee({},h),{},{title:u}),s(x(g)),f(g)):T.Z.error(y),E(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){var n,a,r,c={grid:{left:20,right:20,top:56,bottom:12,containLabel:!0},title:{text:e.title||"",left:"50%",top:12,textStyle:{color:"#333333",fontFamily:"PingFangSC-Regular, PingFang SC",fontSize:14,fontWeight:400}},xAxis:{type:"category",data:R()(n=e.x||[]).call(n,(function(e){return P()(1e3*e).format("MM/DD HH:mm")})),axisLine:{lineStyle:{color:"#BFBFBF"}}},yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"#BFBFBF"}},splitLine:{lineStyle:{type:"dashed"}},axisLabel:{margin:14}},tooltip:{show:!0,trigger:"axis",textStyle:{fontSize:12,lineHeight:20,padding:12}},series:[]},l=[],i=J.length;return u()(a=e.y||[]).call(a,(function(e,t){l.push({data:e.data,type:"line",smooth:!0,lineStyle:{color:J[t%i]}})})),c.series=B()(r=[]).call(r,l),ee({},c)};return z.useEffect((function(){Z(n)}),[n]),z.createElement("div",{className:"more-chart"},h?z.createElement("div",{className:"more-chart-mask"},z.createElement(Q.Z,{tip:"数据加载中",indicator:z.createElement(G.Z,{type:"loading",style:{fontSize:24},spin:!0})})):null,z.createElement("div",{className:"more-chart-item"},z.createElement(q.Z,{option:o,width:"100%",height:"100%"})),z.createElement("div",{className:"more-chart-legend"},z.createElement("div",{className:"more-chart-legend-item",style:{marginBottom:12}},z.createElement("span",null),z.createElement("span",{style:{color:"#3F87FF"}},"current")),R()(t=p.y||[]).call(t,(function(e,t){var n=J[t%J.length];return z.createElement("div",{className:"more-chart-legend-item",key:t},z.createElement("div",{className:"legend-item-left"},z.createElement("div",{className:"legend-icon",style:{background:n}}),z.createElement("span",{className:"legend-title"},e.title)),z.createElement("span",null,e.data[0]))}))))}var ne={ok:"#12BC6A",pending:"#F9DB13",no_data:"#FFA941",alerting:"#FF5F5C",paused:"#BFBFBF"},ae=[{key:"ip",dataIndex:"ip",title:"节点"},{key:"cpu",dataIndex:"cpu",title:"cpu",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}},{key:"mem",dataIndex:"mem",title:"内存",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}},{key:"system_disk",dataIndex:"system_disk",title:"系统盘",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}},{key:"data_disk",dataIndex:"data_disk",title:"数据盘",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}}],re=[{key:"service_name",dataIndex:"service_name",title:"服务"},{key:"ip",dataIndex:"ip",title:"节点"},{key:"ha_role",dataIndex:"ha_role",title:"角色",render:function(e){return e||"--"}},{key:"status",dataIndex:"status",title:"状态",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}}],ce=[{key:"service_name",dataIndex:"service_name",title:"服务"},{key:"ip",dataIndex:"ip",title:"节点"},{key:"status",dataIndex:"status",title:"状态",render:function(e){var t="NORMAL"===e?"#12BC6A":"#FF5F5C",n="NORMAL"===e?"正常":"异常";return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:t}}),z.createElement("div",{className:"circle-text"},n))}}],le=[{key:"alert_name",dataIndex:"alert_name",title:"告警名称"},{key:"state",dataIndex:"state",title:"状态",render:function(e){return z.createElement("div",{className:"circle-box"},z.createElement("div",{className:"circle",style:{background:ne[e]}}),z.createElement("div",{className:"circle-text"},e))}},{key:"dashboard_name",dataIndex:"dashboard_name",title:"仪表盘名称(组件)"},{key:"dashboard_title",dataIndex:"dashboard_title",title:"仪表盘标题"},{key:"time",dataIndex:"time",title:"告警时间"}];function ie(e,t){var n=I()(e);if(r()){var a=r()(e);t&&(a=l()(a).call(a,(function(t){return o()(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n,a,r=null!=arguments[t]?arguments[t]:{};t%2?u()(n=ie(Object(r),!0)).call(n,(function(t){(0,E.Z)(e,t,r[t])})):m()?f()(e,m()(r)):u()(a=ie(Object(r))).call(a,(function(t){y()(e,t,o()(r,t))}))}return e}var se,ue,de=H.Z.Content,me=K.Z.RangePicker,pe=(se=0,function(){return(++se).toString()});!function(e){e.SUCCESS="SUCCESS",e.RUNNING="RUNNING"}(ue||(ue={}));const fe=(0,j.$j)((function(e){return{authorityList:e.UserCenterStore.authorityList}}))((function(e){var t,n=P()(),a=P()().subtract(6,"days"),r=z.useState([a,n]),c=(0,N.Z)(r,2),l=c[0],i=c[1],o=z.useState([]),s=(0,N.Z)(o,2),u=s[0],d=s[1],m=z.useState({}),p=(0,N.Z)(m,2),f=p[0],v=p[1],y=z.useState([]),E=(0,N.Z)(y,2),Z=E[0],x=E[1],F=z.useState([]),S=(0,N.Z)(F,2),Y=S[0],M=S[1],O=z.useState({pedding:!1,process:0}),A=(0,N.Z)(O,2),L=A[0],U=A[1],j=z.useRef(null),K=function(){var e=(0,g.Z)(b().mark((function e(){var t,n,a,r,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.DB.getNodeStatus();case 2:t=e.sent,n=t.data,a=n.code,r=n.msg,c=n.data,0===a?d(c):(T.Z.destroy(),T.Z.error(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,g.Z)(b().mark((function e(){var t,n,a,r,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.DB.getAppStatus();case 2:t=e.sent,n=t.data,a=n.code,r=n.msg,c=n.data,0===a?v(c):(T.Z.destroy(),T.Z.error(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,g.Z)(b().mark((function e(){var t,n,a,r,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.DB.getHistoryAlarm({from:P()("".concat(l[0].format("YYYY-MM-DD")," 00:00:00")).valueOf(),to:P()("".concat(l[1].format("YYYY-MM-DD")," 23:59:59")).valueOf()});case 2:t=e.sent,n=t.data,a=n.code,r=n.msg,c=n.data,0===a?x(c.data):T.Z.error(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,g.Z)(b().mark((function e(){var t,n,a,r,c,l,i;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.DB.getChartConfigList();case 2:t=e.sent,n=t.data,a=n.code,r=n.msg,c=n.data,0===a?(l=[],i=[],w()(c).call(c,(function(e,t,n,a){var r=oe(oe({noData:!1},t),{},{moduleName:_()(l).call(l,t.module)?"":t.module,moduleType:"System"!==e.module&&"System"!==t.module||e.module===t.module?"":t.module});return l.push(t.module),i.push(r),t}),{}),M(i)):(T.Z.destroy(),T.Z.error(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){var t=(0,h.Z)(Y);t[e].noData=!0,M(t)};z.useEffect((function(){K(),q()}),[]),z.useEffect((function(){J(),Q()}),[l]);var ee=z.useMemo((function(){var e;return z.createElement("div",{className:"body-time"},z.createElement("span",null,"报告内容周期：",B()(e="".concat(l[0].format("YYYY-MM-DD")," 至 ")).call(e,l[1].format("YYYY-MM-DD"))),z.createElement("span",null,"报告生成时间：",P()().format("YYYY-MM-DD HH:mm:ss")))}),[]);return z.createElement(H.Z,null,z.createElement(de,{className:"inspection-report"},z.createElement("div",{className:"inspection-report-header"},z.createElement("div",{className:"inspection-report-time"},z.createElement("span",{style:{color:"red"}},"*"),z.createElement("span",{style:{margin:"0 6px"}},"时间:"),z.createElement(me,{className:"inspection-report-RangePicker",suffixIcon:z.createElement("span",{className:"emicon emicon-calendar"}),value:l,disabledDate:function(e){return e&&e.valueOf()>k()()||k()()-12096e5>e&&e.valueOf()},separator:"至",allowClear:!1,onChange:function(e){i(e)}})),L.pedding?z.createElement(W.Z,{className:"inspection-repoty-btn",type:"primary"},z.createElement("span",{className:"margin-right-8"},"报告生成中"),L.process,"%"):z.createElement(W.Z,{className:"inspection-report-btn",type:"primary",onClick:function(){e.authorityList.sub_menu_diagnose_inspect_report?(U({pedding:!0,process:0}),V.DB.generatorReport({from:P()("".concat(l[0].format("YYYY-MM-DD")," 00:00:00")).valueOf(),to:P()("".concat(l[1].format("YYYY-MM-DD")," 23:59:59")).valueOf()}).then((function(e){var t,n=e.data,a=n.data,r=n.msg;if(0!==n.code)return T.Z.error(r);t=a.report_id,j.current=C()((function(){V.DB.getReportProgress({id:t}).then((function(e){var n=e.data,a=n.code,r=n.msg,c=n.data;if(0!==a)return T.Z.error(r);c.status===ue.SUCCESS&&(clearInterval(j.current),D()((function(){var e;U({pedding:!1,process:100}),window.open(B()(e="/api/v2/inspect/download?id=".concat(t,"&file_path=")).call(e,c.file_path),"_self")}),200)),U({pedding:!0,process:c.progress})})).catch((function(e){T.Z.error(e.message),U({pedding:!1,process:0})}))}),500)})).catch((function(e){U({pedding:!1,process:0}),T.Z.error(e.message)}))):T.Z.error("权限不足，请联系管理员！")},icon:"download"},"立即下载")),z.createElement("div",{className:"inspection-report-overflow"},z.createElement("div",{className:"inspection-report-body",id:"inspection-report-body"},z.createElement("div",{className:"body-title"},"巡检报告"),ee,z.createElement("div",{className:"body-l2-title"},"集群状态汇总"),z.createElement("div",{className:"body-tips"},z.createElement("div",{className:"body-tips-left"},z.createElement(G.Z,{type:"info-circle",theme:"filled",style:{color:"#999"}})),z.createElement("div",{className:"body-tips-right"},z.createElement("span",null,"1.报告中涉及的状态为报告下载时间点的状态。"),z.createElement("span",null,"2.状态为“正常”表示节点或应用当前的健康状态为健康，监控指标没有告警。状态为“异常”表示节点或应用当前的健康状态为不健康，或者监控指标有告警"))),z.createElement("div",{className:"body-l3-title"},"节点状态"),z.createElement($.Z,{rowKey:pe,className:"border-table",columns:ae,dataSource:u,pagination:!1}),z.createElement("div",{className:"body-l3-title"},"应用状态"),R()(t=I()(f)).call(t,(function(e){return"DTBase"===e?z.createElement("div",{key:e},z.createElement("div",{className:"body-l4-title"},e),z.createElement($.Z,{rowKey:pe,className:"border-table",columns:re,dataSource:f[e],pagination:!1})):z.createElement("div",{key:e},z.createElement("div",{className:"body-l4-title"},e),z.createElement($.Z,{rowKey:pe,className:"border-table",columns:ce,dataSource:f[e],pagination:!1}))})),z.createElement("div",{className:"body-l3-title"},"告警记录"),z.createElement($.Z,{rowKey:pe,className:"border-table",columns:le,dataSource:Z,pagination:!1}),z.createElement("div",{className:"body-l2-title"},"集群状态详细内容"),R()(Y).call(Y,(function(e,t){return e.noData?null:z.createElement("div",{key:t},e.moduleType?z.createElement("div",{className:"body-l3-title"},"System"===e.moduleType?"节点状态":"应用状态"):null,e.moduleName?z.createElement("div",{className:"body-l4-title"},e.moduleName):null,z.createElement(te,{config:e,time:l,key:t,index:t,delNoDataChart:X}))}))))))}))}}]);