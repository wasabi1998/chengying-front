"use strict";(self.webpackChunkdt_em_front=self.webpackChunkdt_em_front||[]).push([[9730],{70688:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(31238),r=a.n(n),l=a(77766),c=a.n(l),i=a(67294),o=a(45334),s={B:1,KB:1024,MB:Math.pow(1024,2),GB:Math.pow(1024,3),TB:Math.pow(1024,4)};function u(e){if("string"==typeof e){var t=/(B|KB|MB|GB|TB)/.exec(e),a=t?t[0]:null;return(a?s[a]:1)*(e?m(r()(e)):0)}return e?m(e):0}function m(e){return isNaN(e)?0:e}function d(e){var t,a,n,r=e.now,l=e.total,s=e.unit,m=e.pStyle,d=u(r),p=u(l),f=void 0!==e.percent?e.percent:p?d/p*100:0;s&&(r=c()(a="".concat(r)).call(a,s),l=c()(n="".concat(l)).call(n,s));return i.createElement("div",{className:"progress-bar"},i.createElement("p",{style:m},c()(t="".concat(r," / ")).call(t,l)),i.createElement(o.Z,{strokeColor:"#3F87FF",strokeWidth:4,percent:f,showInfo:!1}))}},20075:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(95266),r=a(41511),l=a.n(r),c=a(78914),i=a.n(c),o=a(3649),s=a.n(o),u=a(2991),m=a.n(u),d=a(67294),p=a(24105),f=a(31097),v=a(60331),h=a(8263),g=a(94184),y=a.n(g),Z=a(96486),_=p.Z.Panel;const E=function(e){var t=d.useState({}),a=(0,n.Z)(t,2),r=a[0],c=a[1],o=e.className,u=e.paneKeyName,g=void 0===u?"product_name":u,E=e.activeKey,b=e.onChange,S=e.serviceList,w=e.serviceGroup;d.useEffect((function(){var e,t,a,n;l()(w)&&w.length&&(e=w,a=["blue","purple","green","magenta","orange","cyan","volcano","lime","gold","geekblue","red"],n={},i()(t=(0,Z.uniq)(e)).call(t,(function(e,t){var r=a.length;n[e]=t<r?a[t]:a[t-r]})),c(n))}),[w]);var x=[{dataIndex:"service_name",key:"service_name",width:"26%",render:e.serviceNameRender||function(e){return d.createElement(f.Z,{placement:"right",title:e},e.length>12?s()(e).call(e,0,10)+"...":e)}},{dataIndex:"status",key:"status",width:70,render:function(e,t){return d.createElement("div",null,"正常"===e?d.createElement(v.Z,{className:"table_avatar",color:"#12BC6A"},t.status_count):d.createElement(v.Z,{className:"table_avatar",color:"#EF5350"},t.status_count),e)}},{dataIndex:"health_state",key:"health_state",width:85,render:function(e,t){var a=e>0||"healthy"===e?{text:"健康",color:"#12BC6A"}:{text:"不健康",color:"#FFB310"};return d.createElement("div",null,d.createElement(v.Z,{className:"table_avatar",color:a.color},t.health_state_count),a.text)}},{dataIndex:"group",width:68,key:"group",render:function(e){return d.createElement(f.Z,{placement:"right",title:e},d.createElement(v.Z,{className:"table_group",color:r[e]},d.createElement("div",{className:"table_group_div"},e)))}}];return d.createElement(p.Z,{className:y()("c-overview__ant-collapse",o),activeKey:E,onChange:b},m()(S).call(S,(function(t,a){return d.createElement(_,{key:t[g],header:d.createElement(d.Fragment,null,d.createElement("i",{className:"emicon emicon-folder-anticon mr-8",style:{color:t.service_count&&"healthy"!==t.service_status?"#FF5F5C":"#12BC6A"}}),t.product_name)},t.service_count?d.createElement(h.Z,{rowKey:"service_name",size:"small",className:"c-overview_ant-table",rowClassName:function(){return"c-overview_row-trigger"},style:{background:"#fff"},columns:x,dataSource:t.service_list,pagination:!1,showHeader:!1,onRow:function(a){return{onClick:function(n){return e.onTableRowClick(a,t)}}}}):d.createElement("div",{className:"service-normal"},d.createElement("i",{className:"emicon emicon-health_service",style:{color:"#12BC6A"}}),d.createElement("p",null,"服务全部正常")))})))}},12383:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(4107),l=a(39144),c=a(77268),i=a(67908),o=a(94184),s=a.n(o),u=a(74981),m=(a(12477),a(40049),r.Z.TextArea);const d=function(e){var t=e.yaml,a=e.readOnly;return n.createElement(l.Z,{title:"YAML",size:"small",className:"c-yaml-editor__ant-card",extra:n.createElement("div",{style:{display:"flex"}},n.createElement(m,{id:"J_CMDCode",value:t,style:{position:"absolute",opacity:0,zIndex:-10}}),n.createElement(c.Z,{id:"J_CopyBtn",type:"link",style:{padding:0},"data-clipboard-action":"cut","data-clipboard-target":"#J_CMDCode"},n.createElement(i.Z,{type:"copy"})," 复制到剪贴板"))},n.createElement(u.ZP,{className:s()({yaml_editor_readonly:a}),mode:"yaml",theme:"kuroir",value:t,readOnly:a||!1,width:"100%",height:"100%",onChange:e.onChange,name:"ADVANCED_MODE_DIV"}))}},18274:(e,t,a)=>{a.d(t,{E9:()=>i,MD:()=>n,OY:()=>l,RI:()=>c,XN:()=>r});var n=[{text:"部署成功",value:"deployed"},{text:"部署失败",value:"deploy fail"},{text:"部署中",value:"deploying"},{text:"卸载失败",value:"undeploy fail"},{text:"卸载中",value:"undeploying"}],r=[{text:"更新成功",value:"success"},{text:"更新失败",value:"fail"},{text:"更新中",value:"update"}],l={hosts:["主机集群"],kubernetes:["Kubernetes集群（自建集群）","Kubernetes集群（导入已有集群）"]},c={hosts:{title:"主机安装会经过2个状态：管控安装-主机初始化，若某一步安装失败，请查看具体日志。",filters:[{text:"管控安装成功",value:"管控安装成功"},{text:"管控安装失败",value:"管控安装失败"},{text:"script安装成功",value:"script安装成功"},{text:"script安装失败",value:"script安装失败"},{text:"主机初始化成功",value:"主机初始化成功"},{text:"主机初始化失败",value:"主机初始化失败"}],finalStatus:3},kubernetes:{title:"Kubernetes集群主机安装会经过5个状态：管控安装-主机初始化-K8S Docker初始化-K8S Node初始化-K8S Node部署成功，若某一步安装失败，请查看具体日志",filters:[{text:"管控安装失败",value:"管控安装失败",status:-1},{text:"管控安装成功",value:"管控安装成功",status:1},{text:"主机初始化失败",value:"主机初始化失败",status:-3},{text:"主机初始化成功",value:"主机初始化成功",status:3},{text:"K8S DOCKER初始化失败",value:"K8S DOCKER初始化失败",status:-5},{text:"K8S DOCKER初始化成功",value:"K8S DOCKER初始化成功",status:5},{text:"K8S NODE初始化失败",value:"K8S NODE初始化失败",status:-6},{text:"K8S NODE初始化成功",value:"K8S NODE初始化成功",status:6},{text:"K8S NODE部署失败",value:"K8S NODE部署失败",status:-7},{text:"K8S NODE部署成功",value:"K8S NODE部署成功",status:7}],finalStatus:7}},i={NAMESPACE:"em_current_k8s_namespace"}},79730:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Xe});var n=a(1068),r=a.n(n),l=a(14310),c=a.n(l),i=a(20116),o=a.n(i),s=a(34074),u=a.n(s),m=a(78914),d=a.n(m),p=a(39649),f=a.n(p),v=a(20368),h=a.n(v),g=a(63978),y=a.n(g),Z=a(73126),_=a(44930),E=a(68420),b=a(27344),S=a(5281),w=a(84441),x=a(3020),N=a(3362),C=a(44845),k=a(63109),O=a.n(k),L=a(77766),F=a.n(L),I=a(31581),D=a.n(I),K=a(86902),B=a.n(K),P=a(41511),M=a.n(P),A=a(54103),R=a.n(A),T=a(94473),V=a.n(T),j=a(67294),q=a(29027),z=a(4107),U=a(45360),G=a(30258),$=a(67908),H=a(52553),W=a(27049),Y=a(77268),J=a(8263),Q=a(83107),X=a(19528),ee=a(70688),te=a(95266),ae=a(2991),ne=a.n(ae),re=a(69035),le=a(34041),ce=a(66253),ie=a(87558),oe=a(96486),se=ie.Z.Dragger;const ue=function(e){var t,a,n,r,l=e.onChange,c=e.icon,i=e.defaultFileList,o=j.useState([]),s=(0,te.Z)(o,2),u=s[0],m=s[1],d={name:"file",fileList:u,beforeUpload:function(e){return(null==e?void 0:e.size)>52428800?(U.Z.error("本地上传文件不可超过50MB!"),p([]),!1):(p([e]),!1)},onRemove:function(){p([])}};function p(e){m(e),l(e)}return t=function(){m(i)},a=[i],n=j.useRef(!0),r=j.useRef(a),j.useEffect((function(){var e=n.current,l=r.current,c=(0,oe.isEqual)(a,l);if(n.current=!1,r.current=a,e||!c)return t()}),a),j.createElement(se,(0,Z.Z)({className:"c-dragger_ant-upload"},d),j.createElement("p",{className:"ant-upload-drag-icon"},c||j.createElement($.Z,{type:"cloud-upload"})),j.createElement("p",{className:"ant-upload-text"},"点击或将文件拖拽到此处上传"))};var me=a(12383);function de(e,t){var a=B()(e);if(c()){var n=c()(e);t&&(n=o()(n).call(n,(function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}var pe=re.Z.Item,fe=le.Z.Option,ve=ce.ZP.Group,he=j.forwardRef((function(e,t){return j.createElement(ue,e)})),ge=j.forwardRef((function(e,t){return j.createElement(me.Z,e)})),ye={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}};const Ze=re.Z.create()((function(e){var t=e.form,n=t.getFieldDecorator,r=t.validateFields,l=t.setFieldsValue,c=t.getFieldsValue,i=t.getFieldValue,o=e.namespace,s=e.visible,m=e.imageStoreList,p=e.authorityList,v=e.handleSave,g=e.handleCancel,_=void 0!==o,E=j.useState({}),b=(0,te.Z)(E,2),S=b[0],w=b[1],x=j.useState(""),N=(0,te.Z)(x,2),k=N[0],O=N[1],L=j.useState(""),F=(0,te.Z)(L,2),I=F[0],D=F[1],K=j.useState(!1),B=(0,te.Z)(K,2),P=B[0],A=B[1],R=c(),T=p.yaml_edit;j.useEffect((function(){void 0!==o&&X.OO.getNamespaceInfo({namespace:o}).then((function(e){var t=e.data,a=t.code,n=t.data,r=t.msg;0===a?(w(n||{}),O(n.file_name||""),D(n.yaml||"")):U.Z.error(r)}))}),[o]),j.useEffect((function(){"agent"===R.type&&X.OO.getYamlFile({namespace:R.namespace,registry_id:R.registry_id}).then((function(e){var t=e.data,a=t.code,n=t.data,r=t.msg;0===a?D(n.yaml):U.Z.error(r)}))}),[R.namespace,R.registry_id,R.type]);return j.createElement(G.Z,{title:(_?"编辑":"添加")+"命名空间",visible:s,confirmLoading:P,onOk:function(){r((function(e,t){if(!e){A(!0);var a=function(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?d()(a=de(Object(r),!0)).call(a,(function(t){(0,C.Z)(e,t,r[t])})):f()?h()(e,f()(r)):d()(n=de(Object(r))).call(n,(function(t){y()(e,t,u()(r,t))}))}return e}({},t);"kubeconfig"===a.type?(a.yaml=a.file,a.file_name=k,delete a.file):a.yaml=I,v(a,(function(){A(!1)}))}}))},onCancel:g},j.createElement(re.Z,null,j.createElement(pe,(0,Z.Z)({label:"命名空间名称"},ye),n("namespace",{initialValue:_?S.namespace:"",rules:[{required:!0,message:"请输入命名空间"},{pattern:/^\S{1,64}$/,message:"请输入除空格外的字符，不超过64个字符"}]})(j.createElement(z.Z,{placeholder:"请输入命名空间名称",disabled:_}))),j.createElement(pe,(0,Z.Z)({label:"选择镜像仓库"},ye),n("registry_id",{initialValue:_&&-1!==S.registry?S.registry:void 0,rules:[{required:!0,message:"请选择镜像仓库"}]})(j.createElement(le.Z,{placeholder:"请选择镜像仓库"},M()(m)&&ne()(m).call(m,(function(e){return j.createElement(fe,{key:e.id,value:e.id},e.name)}))))),j.createElement(pe,(0,Z.Z)({required:!0,label:"添加方式"},ye),n("type",{initialValue:_?S.type:"kubeconfig"})(j.createElement(ve,null,j.createElement(ce.ZP,{value:"kubeconfig"},"kubeconfig"),j.createElement(ce.ZP,{value:"agent"},"agent")))),"agent"!==i("type")?j.createElement(pe,(0,Z.Z)({label:"上传文件"},ye),n("file",{initialValue:_?S.yaml:"",rules:[{required:!0,message:"请上传文件"}]})(j.createElement(he,{icon:j.createElement("img",{src:a(15165)}),defaultFileList:_&&S.file_name?[{uid:"1",name:S.file_name,status:"done"}]:[],onChange:function(e){if(e.length>0){var t=e[0],a=new FileReader;a.readAsText(t),a.onload=function(){l({file:a.result}),O(t.name)}}else l({file:""}),O("")}}))):j.createElement(pe,null,n("yaml",{initialValue:_?S.yaml:""})(j.createElement(ge,{yaml:I,readOnly:!T,onChange:function(e){return D(e)}}))),j.createElement(pe,{style:{display:"none"}},n("id",{initialValue:_?S.id:void 0})(j.createElement(z.Z,null)))))}));var _e=a(37870);function Ee(e,t){var a=B()(e);if(c()){var n=c()(e);t&&(n=o()(n).call(n,(function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?d()(a=Ee(Object(r),!0)).call(a,(function(t){(0,C.Z)(e,t,r[t])})):f()?h()(e,f()(r)):d()(n=Ee(Object(r))).call(n,(function(t){y()(e,t,u()(r,t))}))}return e}var Se=re.Z.Item,we={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:15}}};const xe=re.Z.create()((function(e){var t=e.namespace,a=e.visible,n=e.handleCancel,r=e.form,l=r.getFieldDecorator,c=r.validateFields,i=j.useState(!1),o=(0,te.Z)(i,2),s=o[0],u=o[1],m=j.useState(!1),d=(0,te.Z)(m,2),p=d[0],f=d[1],v=j.useState(!1),h=(0,te.Z)(v,2),g=h[0],y=h[1];function _(e){c((function(t,a){t||e(a)}))}return j.createElement(G.Z,{title:"绑定IP",visible:a,footer:j.createElement(j.Fragment,null,j.createElement(Y.Z,{type:"primary",ghost:!0,onClick:function(){_((function(e){f(!0),X.OO.pingConnect(be(be({},e),{},{namespace:t})).then((function(e){var t=e.data,a=t.code,n=t.msg;0===a?(u(!0),U.Z.success("测试连通性通过")):U.Z.error(n),f(!1)}))}))},loading:p},"测试连通性"),j.createElement(Y.Z,{type:"default",onClick:n},"取消"),j.createElement(Y.Z,{type:"primary",disabled:!s,onClick:function(){_((function(a){y(!0),X.OO.saveNamespace(be(be({},a),{},{namespace:t,type:"agent"})).then((function(t){var a=t.data,r=a.code,l=a.msg;0===r?(U.Z.success("绑定成功"),e.getTableList(),n()):U.Z.error(l),y(!1)}))}))},loading:g},"确定")),bodyStyle:{padding:"0 0 8px 0"},onCancel:n},j.createElement(re.Z,null,j.createElement(_e.Z,{className:"mb-20",type:"info",message:"请联系集群管理员，暴露easyagent服务供集群外访问"}),j.createElement(Se,(0,Z.Z)({label:"IP"},we),l("ip",{rules:[{required:!0,message:"请输入IP地址"},{pattern:/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,message:"请输入正确的IP地址"}]})(j.createElement(z.Z,{placeholder:"请输入IP地址"}))),j.createElement(Se,(0,Z.Z)({label:"端口"},we),l("port",{rules:[{required:!0,message:"请输入端口"},{pattern:/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,message:"请输入正确的端口"}]})(j.createElement(z.Z,{placeholder:"请输入端口"})))))}));var Ne=a(79855),Ce=a(20455),ke=a.n(Ce),Oe=a(51942),Le=a.n(Oe),Fe=a(60331),Ie=a(14277),De=a(20075),Ke=a(36808),Be=a(18274),Pe=a(64143);function Me(e,t){var a=B()(e);if(c()){var n=c()(e);t&&(n=o()(n).call(n,(function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ae(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?d()(a=Me(Object(r),!0)).call(a,(function(t){(0,C.Z)(e,t,r[t])})):f()?h()(e,f()(r)):d()(n=Me(Object(r))).call(n,(function(t){y()(e,t,u()(r,t))}))}return e}var Re=z.Z.Search,Te=le.Z.Option;const Ve=function(e){var t=e.namespace,a=j.useState({namespace:t,parentProductName:"all",productName:"all",serviceName:"all"}),n=(0,te.Z)(a,2),r=n[0],l=n[1],c=j.useState([]),i=(0,te.Z)(c,2),o=i[0],s=i[1],u=j.useState([]),m=(0,te.Z)(u,2),p=m[0],f=m[1],v=j.useState([]),h=(0,te.Z)(v,2),g=h[0],y=h[1],Z=j.useState([]),_=(0,te.Z)(Z,2),E=_[0],b=_[1];return j.useEffect((function(){X.OO.getServiceLists({namespace:t,parentProductName:"all"}).then((function(e){var t=e.data,a=t.code,n=t.data,c=t.msg;if(0===a&&n){var i=B()(n.products),o=V()(i).call(i,(function(e){return"DTinsight"===e}))||i[0];s(i),l(Ae(Ae({},r),{},{parentProductName:o}))}else U.Z.error(c)}))}),[]),j.useEffect((function(){o.length>0&&X.OO.getServiceLists(Ae({namespace:t},r)).then((function(e){var t=e.data,a=t.code,n=t.data,r=t.msg;0===a&&n?function(){var e=ke()(n.products)[0],t=[],a=[],r=[],l=function(n){var l=0,c=e[n],i=B()(c),o=ke()(c);d()(o).call(o,(function(e,t){Le()(e,{service_name:i[t],status:"available"===e.service_status?"正常":"异常",status_count:e.service_status_count}),"healthy"===e.health_state&&++l,e.group&&r.push(e.group)}));var s=o.length,u={product_name:n,service_count:s,service_status:s===l?"healthy":"unhealthy",service_list:o};"healthy"===u.service_status?t.push(u):(t.unshift(u),a.push(u.product_name))};for(var c in e)l(c);b(r),y(t),f(a)}():U.Z.error(r)}))}),[r]),j.createElement("div",{className:"namespace-overview-page"},j.createElement("div",{className:"header-container mb-12"},j.createElement("span",{className:"mr-20"},j.createElement("span",null,"产品名称："),j.createElement(le.Z,{placeholder:"请选择产品",style:{width:264},value:"all"===r.parentProductName?void 0:r.parentProductName,onChange:function(e){l(Ae(Ae({},r),{},{parentProductName:e}))}},ne()(o).call(o,(function(e){return j.createElement(Te,{key:e,value:e},e)})))),j.createElement(Re,{placeholder:"输入服务名称进行搜索",style:{width:264},onSearch:function(e){l(Ae(Ae({},r),{},{serviceName:e||"all"}))}})),M()(g)&&g.length?j.createElement(De.Z,{className:"c-namespace__overview",activeKey:p,onChange:function(e){return f(e)},serviceList:g,serviceGroup:E,serviceNameRender:function(e,t){return j.createElement(j.Fragment,null,j.createElement("span",null,e),j.createElement(Fe.Z,{className:"c-overview__ant-tag ml-20"},t.version))},onTableRowClick:function(a,n){var r,l;Ke.set(Be.E9.NAMESPACE,t),Ke.set("em_product_name",n.product_name),Pe.Z.setNaviKey("menu_ops_center","sub_menu_service"),e.history.push(F()(r=F()(l="/opscenter/service?component=".concat(n.product_name,"&service_group=")).call(l,a.group,"&service=")).call(r,a.service_name))}}):j.createElement("div",{className:"overview-empty"},j.createElement(Ie.Z,{className:"c-ant_empty-center"})))};function je(e,t){var a=B()(e);if(c()){var n=c()(e);t&&(n=o()(n).call(n,(function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}function qe(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?d()(a=je(Object(r),!0)).call(a,(function(t){(0,C.Z)(e,t,r[t])})):f()?h()(e,f()(r)):d()(n=je(Object(r))).call(n,(function(t){y()(e,t,u()(r,t))}))}return e}const ze=function(e){var t=j.useState({start:0,limit:10}),a=(0,te.Z)(t,2),n=a[0],r=a[1],l=j.useState({list:[],count:0}),c=(0,te.Z)(l,2),i=c[0],o=c[1],s=j.useState(!1),u=(0,te.Z)(s,2),m=u[0],d=u[1],p=[{title:"发生时间",dataIndex:"time",key:"time",width:"20%"},{title:"类型",dataIndex:"type",key:"type",width:"15%"},{title:"原因",dataIndex:"reason",key:"reason",width:"15%"},{title:"对象",dataIndex:"resource",key:"resource",width:"20%"},{title:"信息",dataIndex:"message",key:"message",width:"20%",render:function(e){return e?j.createElement("span",{style:{wordBreak:"break-all"}},e):"--"}}],f={size:"small",pageSize:n.limit,total:i.count,current:n.start/n.limit+1,showTotal:function(e){return j.createElement("span",null,"共",j.createElement("span",{style:{color:"#3F87FF"}},e),"条数据，每页显示",n.limit,"条")}};return j.useEffect((function(){X.OO.getEventLists(qe(qe({},n),{},{namespace:e.namespace})).then((function(e){var t=e.data,a=t.code,n=t.data,r=t.msg;0===a?o({list:n.events||[],count:n.size||0}):U.Z.error(r),d(!1)}))}),[n]),j.createElement(J.Z,{size:"middle",rowKey:"id",className:"dt-pagination-lower dt-table-border dt-table-last-row-noborder",scroll:{y:"calc(100vh - 90px - 32px - 89px - 88px)"},loading:m,columns:p,dataSource:i.list,pagination:f,onChange:function(e){var t=e.current,a=e.pageSize;r({start:(t-1)*a,limit:a})}})};function Ue(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,N.Z)(e);if(t){var l=(0,N.Z)(this).constructor;a=r()(n,arguments,l)}else a=n.apply(this,arguments);return(0,x.Z)(this,a)}}var Ge,$e=Ne.Z.TabPane,He=function(e){(0,w.Z)(a,e);var t=Ue(a);function a(){var e,n;(0,E.Z)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=t.call.apply(t,F()(e=[this]).call(e,l)),(0,C.Z)((0,S.Z)(n),"state",{activeKey:"overview"}),n}return(0,b.Z)(a,[{key:"render",value:function(){var e=this,t=this.state.activeKey,a=this.props,n={namespace:a.namespace,history:a.history};return j.createElement(Ne.Z,{activeKey:t,onChange:function(t){return e.setState({activeKey:t})}},j.createElement($e,{key:"overview",tab:"服务概览"},"overview"===t&&j.createElement(Ve,n)),j.createElement($e,{key:"eventview",tab:"事件查看"},"eventview"===t&&j.createElement(ze,n)))}}]),a}(j.PureComponent);function We(e,t){var a=B()(e);if(c()){var n=c()(e);t&&(n=o()(n).call(n,(function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ye(e){for(var t=1;t<arguments.length;t++){var a,n,r=null!=arguments[t]?arguments[t]:{};t%2?d()(a=We(Object(r),!0)).call(a,(function(t){(0,C.Z)(e,t,r[t])})):f()?h()(e,f()(r)):d()(n=We(Object(r))).call(n,(function(t){y()(e,t,u()(r,t))}))}return e}function Je(e){var t=function(){if("undefined"==typeof Reflect||!r())return!1;if(r().sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,N.Z)(e);if(t){var l=(0,N.Z)(this).constructor;a=r()(n,arguments,l)}else a=n.apply(this,arguments);return(0,x.Z)(this,a)}}var Qe=z.Z.Search,Xe=(0,q.$j)((function(e){return{cur_parent_cluster:e.HeaderStore.cur_parent_cluster,authorityList:e.UserCenterStore.authorityList}}),void 0)(Ge=function(e){(0,w.Z)(a,e);var t=Je(a);function a(){var e,n;(0,E.Z)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=t.call.apply(t,F()(e=[this]).call(e,l)),(0,C.Z)((0,S.Z)(n),"state",{imageStoreList:[],namespaceList:[],reqParams:{desc:!0,status:void 0,type:void 0,namespace:void 0},tableLoading:!1,namespaceVisible:!1,record:{},ipVisible:!1,drawerVisible:!1}),(0,C.Z)((0,S.Z)(n),"timer",null),(0,C.Z)((0,S.Z)(n),"getNamespaceList",(0,_.Z)(O().mark((function e(){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({tableLoading:!0}),n.getNamespaceListApi((function(){n.cycleNamespaceList()})),n.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e)})))),(0,C.Z)((0,S.Z)(n),"getNamespaceListApi",function(){var e=(0,_.Z)(O().mark((function e(t){var a,r,l,c,i,o;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.reqParams,e.next=3,X.OO.getNamespaceList(a);case 3:r=e.sent,l=r.data,c=l.code,i=l.data,o=l.msg,0===c?(n.setState({namespaceList:i||[]}),t&&t()):U.Z.error(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,C.Z)((0,S.Z)(n),"cycleNamespaceList",(function(){clearInterval(n.timer),n.timer=D()((0,_.Z)(O().mark((function e(){return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNamespaceListApi();case 2:case"end":return e.stop()}}),e)}))),6e4)})),(0,C.Z)((0,S.Z)(n),"getImageStoreList",(function(){var e=n.props.cur_parent_cluster;X.$v.getImageStoreList({cluster_id:e.id}).then((function(e){var t=e.data;0===t.code?n.setState({imageStoreList:t.data?t.data.list:[]}):U.Z.error(t.msg)}))})),(0,C.Z)((0,S.Z)(n),"handleNamespaceSearch",(function(e){var t=Ye(Ye({},n.state.reqParams),{},{namespace:e||void 0});n.setState({reqParams:t},n.getNamespaceList)})),(0,C.Z)((0,S.Z)(n),"namespaceModalShow",(function(e){n.props.authorityList.ns_edit?n.setState({namespaceVisible:!n.state.namespaceVisible,record:e||{}}):U.Z.error("权限不足，请联系管理员！")})),(0,C.Z)((0,S.Z)(n),"handleConfirmDelete",function(){var e=(0,_.Z)(O().mark((function e(t){var a,r,l,c,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.OO.confirmDelete({namespace:t.namespace});case 2:a=e.sent,r=a.data,l=r.code,c=r.data,i=r.msg,0===l?c.status?n.handleDeleteNamespace(t):G.Z.confirm({title:"该命名空间已部署产品，不支持删除",icon:j.createElement($.Z,{type:"exclamation-circle",theme:"filled"}),okText:"确定",cancelText:"取消",onOk:function(){},onCancel:function(){}}):U.Z.error(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,C.Z)((0,S.Z)(n),"handleDeleteNamespace",(function(e){var t;G.Z.confirm({title:"确定删除该命名空间吗？",icon:j.createElement($.Z,{type:"exclamation-circle",theme:"filled"}),okType:"danger",onOk:(t=(0,_.Z)(O().mark((function t(){var a,r,l,c;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.OO.deleteNamespace({namespace:e.namespace});case 2:a=t.sent,r=a.data,l=r.code,c=r.msg,0===l?(U.Z.success("执行成功"),n.getNamespaceList()):U.Z.error(c);case 5:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})})),(0,C.Z)((0,S.Z)(n),"handleIpConnect",(function(e){n.setState({ipVisible:!n.state.ipVisible,record:e||{}})})),(0,C.Z)((0,S.Z)(n),"handleTableChange",(function(e,t,a){var r=Ye({},n.state.reqParams);B()(t).length>0&&(M()(t.status)&&(r.status=t.status.join(",")||void 0),M()(t.type)&&(r.type=t.type.join(",")||void 0)),a.field&&(r.desc="ascend"!==a.order),n.setState({reqParams:r},n.getNamespaceList)})),(0,C.Z)((0,S.Z)(n),"handleSave",(function(e,t){X.OO.saveNamespace(e).then((function(e){var a=e.data,r=a.code,l=a.msg;t&&t(),0===r?(U.Z.success("保存成功"),n.namespaceModalShow(),n.getNamespaceList()):U.Z.error(l)}))})),(0,C.Z)((0,S.Z)(n),"infoDrawerShow",(function(e){n.setState({drawerVisible:!n.state.drawerVisible,record:e||{}})})),(0,C.Z)((0,S.Z)(n),"initColums",(function(){var e=[{text:"正常",value:"valid",color:"#12BC6A"},{text:"异常",value:"invalid",color:"#FF5F5C"},{text:"未连接",value:"not_connect",color:"#FFB310"}];return[{title:"namespace",dataIndex:"namespace",key:"namespace",render:function(e,t){var a;return e?j.createElement("a",{onClick:R()(a=n.infoDrawerShow).call(a,(0,S.Z)(n),t)},e):"--"}},{title:"状态",dataIndex:"status",key:"status",filters:e,filterMultiple:!0,render:function(t){var a=V()(e).call(e,(function(e){return e.value===t}));return j.createElement(H.Z,{color:a.color,text:a.text})}},{title:"添加方式",dataIndex:"type",key:"type",filters:[{text:"kubeconfig",value:"kubeconfig"},{text:"agent",value:"agent"}],filterMultiple:!0,render:function(e){return e||"--"}},{title:"cpu使用",dataIndex:"cpu",key:"cpu",render:function(e,t){return j.createElement(ee.Z,{now:t.cpu_used,total:t.cpu_total,percent:t.cpu_percent})}},{title:"内存使用",dataIndex:"memory",key:"memory",render:function(e,t){return j.createElement(ee.Z,{now:t.memory_used,total:t.memory_total,percent:t.memory_percent})}},{title:"最近修改人",dataIndex:"user",key:"user",render:function(e){return e||"--"}},{title:"最近修改时间",dataIndex:"update_time",key:"update_time",sorter:!0},{title:"操作",dataIndex:"actions",key:"actions",render:function(e,t){var a,r,l;return n.props.authorityList.ns_edit?j.createElement(j.Fragment,null,j.createElement("a",{onClick:R()(a=n.namespaceModalShow).call(a,(0,S.Z)(n),t)},"编辑"),j.createElement(j.Fragment,null,j.createElement(W.Z,{type:"vertical"}),t.isDeployed?j.createElement("span",{style:{color:"#999"}},"删除"):j.createElement("a",{onClick:R()(r=n.handleConfirmDelete).call(r,(0,S.Z)(n),t)},"删除")),"not_connect"===t.status&&j.createElement(j.Fragment,null,j.createElement(W.Z,{type:"vertical"}),j.createElement("a",{onClick:R()(l=n.handleIpConnect).call(l,(0,S.Z)(n),t)},"IP配置"))):"--"}}]})),n}return(0,b.Z)(a,[{key:"componentDidMount",value:function(){this.getNamespaceList(),this.getImageStoreList()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.state,a=t.imageStoreList,n=t.namespaceList,r=t.tableLoading,l=t.namespaceVisible,c=t.record,i=t.ipVisible,o=t.drawerVisible,s=this.props.authorityList;return j.createElement("div",{className:"cluster-page-body cluster-namespace-page"},j.createElement("div",{className:"clearfix mb-12"},j.createElement(Qe,{className:"dt-form-shadow-bg",style:{width:264},placeholder:"按namespace搜索",onSearch:this.handleNamespaceSearch}),j.createElement(Y.Z,{className:"fl-r",type:"primary",onClick:function(){return e.namespaceModalShow()}},"添加命名空间")),j.createElement(J.Z,{rowKey:"id",className:"dt-table-fixed-base",style:{height:"calc(100vh - 230px)"},scroll:{y:!0},loading:r,columns:this.initColums(),dataSource:n,pagination:!1,onChange:this.handleTableChange}),l&&j.createElement(Ze,{namespace:c.namespace,authorityList:s,visible:l,imageStoreList:a,handleSave:this.handleSave,handleCancel:function(){return e.namespaceModalShow()}}),i&&j.createElement(xe,{namespace:c.namespace,visible:i,handleCancel:function(){return e.handleIpConnect()},getTableList:this.getNamespaceList}),j.createElement(Q.Z,{className:"c-namespace-info_ant-drawer",title:c.namespace,key:c.id+c.namespace,width:"70%",placement:"right",onClose:function(){return e.infoDrawerShow()},visible:o},o&&j.createElement(He,(0,Z.Z)({},this.props,{namespace:c.namespace}))))}}]),a}(j.PureComponent))||Ge},64143:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(77766),r=a.n(n),l=a(78914),c=a.n(l),i=a(81643),o=a.n(i),s=a(2991),u=a.n(s),m=a(86902),d=a.n(m),p=a(31238),f=a.n(p),v=a(45360),h=a(36808),g=a(18274);const y={pageWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},pageHeight:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},getBase64:function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)},percent:function(e,t){return e&&e!==1/0?(e>1&&(e=1),t=t||2,t=Math.pow(10,t),Math.round(e*t*100)/t+"%"):"0%"},getCssText:function(e){var t="";for(var a in e)t+=a+":"+e[a]+";";return t},formateDateTime:function(e){var t,a,n,l,c;if(!e)return"";var i=new Date(e),o=i.getFullYear(),s=i.getMonth()+1+"",u=i.getDate()+"",m=i.getHours()+"",d=i.getMinutes()+"",p=i.getSeconds()+"";return 1===s.toString().length&&(s="0".concat(s)),1===u.toString().length&&(u="0".concat(u)),1===m.toString().length&&(m="0".concat(m)),1===d.toString().length&&(d="0".concat(d)),1===p.toString().length&&(p="0".concat(p)),r()(t=r()(a=r()(n=r()(l=r()(c="".concat(o,"-")).call(c,s,"-")).call(l,u," ")).call(n,m,":")).call(a,d,":")).call(t,p)},formateDate:function(e){var t,a;if(!e)return"";var n=new Date(e),l=n.getFullYear(),c=n.getMonth()+1+"",i=n.getDate()+"";return 1===c.toString().length&&(c="0".concat(c)),1===i.toString().length&&(i="0".concat(i)),r()(t=r()(a="".concat(l,"-")).call(a,c,"-")).call(t,i)},trim:function(e){return"string"==typeof e?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):e},messageFilter:function(e,t,a,n){1001===e.status.code&&(n||v.Z.success("成功"),t&&t())},getTableParam:function(e){var t={};return c()(e).call(e,(function(e,a){var n=e.split("-");t[n[1]]=n[2]})),t},setAlertControl:function(e){var t={},a=e.alert_control;return"1"===a?t.close=1:(t.close=0,e["alert_num_"+a]&&(t.times_after_close=e["alert_num_"+a]),e["recover_num_"+a]&&(t.close_after_long_time_reset_amount=e["recover_num_"+a],t.close_after_long_time_reset_unit=e["recover_unit_"+a])),t},getAlertControl:function(e){var t={alert_control:""};return 0===e.close&&(0!==e.times_after_close?(t.alert_control="2",t["alert_num_"+t.alert_control]=e.times_after_close):t.alert_control="3",""!==e.close_after_long_time_reset_amount&&("2"===t.alert_control&&(t.alert_control="4"),t["alert_num_"+t.alert_control]=e.times_after_close,t["recover_num_"+t.alert_control]=e.close_after_long_time_reset_amount,t["recover_unit_"+t.alert_control]=e.close_after_long_time_reset_unit)),t},filterOption:function(e,t){var a;return-1!==o()(a=t.props.children).call(a,e)},getParamsFromUrl:function(e){var t={},a=[],n="",r="",l=e.substring(o()(e).call(e,"?")+1,e.length).split("&");for(var c in l)n=(a=l[c].split("="))[0],r=a[1],t[n]=r;return t},jsonToQuery:function(e){var t;return e?function(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}(u()(t=d()(e)).call(t,(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])}))).join("&"):""},checkNullObj:function(e){return 0===d()(e).length},serviceCallback:function(e,t,a){0===e.data.code?(v.Z.success(t),a&&a()):v.Z.error(e.data.msg)},noAuthorityToDO:function(e,t){return!e[t]&&(v.Z.error("权限不足，请联系管理员!"),!0)},get k8sNamespace(){return h.get(g.E9.NAMESPACE)},setNaviKey:function(e,t){sessionStorage.setItem("firstLevelNav",e),sessionStorage.setItem("siderLevelNav",t)},formatGBUnit:function(e){return o()(e).call(e,"MB")>-1?f()(e.replace("MB",""))/1024:o()(e).call(e,"KB")>-1?f()(e.replace("KB",""))/1024/1024:o()(e).call(e,"GB")>-1?f()(e.replace("GB","")):o()(e).call(e,"TB")>-1?1024*f()(e.replace("TB","")):0}}},15165:(e,t,a)=>{e.exports=a.p+"images/0d83591cdb1f69ef715d.svg"}}]);