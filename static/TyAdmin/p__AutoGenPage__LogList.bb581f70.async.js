(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{IpcI:function(e,t,n){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,n){"use strict";n("DZo9");var r=n("8z0m"),a=n("oBTY"),c=n("fWQN"),i=n("mtLc"),u=n("yKVA"),o=n("879j"),s=n("q1tI"),l=n.n(s),p=n("ye1Q"),d=n("xvlK"),f=n("IpcI"),m=n.n(f);function b(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var h=function(e){Object(u["a"])(n,e);var t=Object(o["a"])(n);function n(e){var r;return Object(c["a"])(this,n),r=t.call(this,e),r.state={loading:!1,fileList:[]},r.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),r.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return r.setState({fileList:t,imageUrl:e,loading:!1})}))},r}return Object(i["a"])(n,[{key:"render",value:function(e){console.log(this.props),console.log("props");var t=l.a.createElement("div",null,this.state.loading?l.a.createElement(p["default"],null):l.a.createElement(d["default"],null),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(n=this.props.img),l.a.createElement(r["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},n?l.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t)}}]),n}(l.a.Component);t["a"]=function(e){return l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{id:"components-upload-demo-avatar"},l.a.createElement(h,e)))}},"c83/":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n("k1fw"),a=n("WmNS"),c=n.n(a),i=n("9og8"),u=n("io9h");function o(e){return s.apply(this,arguments)}function s(){return s=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/log_type",{params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/log_type/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/log_type",{method:"POST",data:Object(r["a"])(Object(r["a"])({},t),{},{method:"post"})}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(c.a.mark((function e(t,n){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/log_type/".concat(n),{method:"PUT",data:Object(r["a"])(Object(r["a"])({},t),{},{id:n})}));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}},dVR5:function(e,t,n){"use strict";n.r(t);n("qVdP");var r=n("jsC+"),a=(n("lUTK"),n("BvKs")),c=(n("5NDa"),n("5rEg")),i=(n("+L6B"),n("2/Rp")),u=(n("P2fV"),n("NJEC")),o=(n("/zsF"),n("PArb")),s=n("WmNS"),l=n.n(s),p=n("k1fw"),d=(n("miYZ"),n("tsqr")),f=n("9og8"),m=n("tJVT"),b=(n("OaEy"),n("2fM7")),h=n("G3dp"),v=n("/MfK"),w=n("xvlK"),O=n("8Skl"),j=n("q1tI"),y=n.n(j),g=n("Hx5s"),x=n("56R7"),E=(n("2qtc"),n("kLXV")),k=function(e){var t=e.modalVisible,n=e.onCancel;return y.a.createElement(E["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u8bbf\u95ee\u65e5\u5fd7",visible:t,width:600,onCancel:function(){return n()},footer:null},e.children)},C=k,S=n("io9h");function R(e){return I.apply(this,arguments)}function I(){return I=Object(f["a"])(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/log",{params:t}));case 1:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function T(e){return q.apply(this,arguments)}function q(){return q=Object(f["a"])(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/log/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function L(e){return _.apply(this,arguments)}function _(){return _=Object(f["a"])(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/log",{method:"POST",data:Object(p["a"])(Object(p["a"])({},t),{},{method:"post"})}));case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function K(e,t){return V.apply(this,arguments)}function V(){return V=Object(f["a"])(l.a.mark((function e(t,n){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/log/".concat(n),{method:"PUT",data:Object(p["a"])(Object(p["a"])({},t),{},{id:n})}));case 1:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}var U=function(e){var t=e.modalVisible,n=e.onCancel;return y.a.createElement(E["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u8bbf\u95ee\u65e5\u5fd7",visible:t,width:600,onCancel:function(){return n()},footer:null},e.children)},N=U,P=(n("PkmJ"),n("c83/")),A=(n("wd/R"),n("+n12")),F=(n("Lzxq"),b["a"].Option),D=function(){var e=Object(j["useState"])(!1),t=Object(m["a"])(e,2),n=t[0],s=t[1],E=Object(j["useState"])(!1),k=Object(m["a"])(E,2),S=k[0],I=k[1],q=Object(j["useState"])({}),_=Object(m["a"])(q,2),V=_[0],U=_[1],D=Object(j["useRef"])(),J=Object(j["useRef"])(),B=Object(j["useRef"])(),W=function(){var e=Object(f["a"])(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=d["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,L(Object(p["a"])({},t));case 4:return n(),d["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(r in e.t0.data.fields_errors)a=e.t0.data.fields_errors[r],J.current.setFields([{name:r,errors:a}]);else d["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return n(),d["b"].error("\u6dfb\u52a0\u5931\u8d25"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(f["a"])(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=d["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,K(t,n);case 4:return r(),d["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(a in e.t0.data.fields_errors)t=e.t0.data.fields_errors[a],B.current.setFields([{name:a,errors:t}]);else d["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return r(),d["b"].error("\u4fee\u6539\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(f["a"])(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=d["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,r=t.map((function(e){return e.id})).join(","),e.next=7,T(r);case 7:return n(),d["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),n(),d["b"].error("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),Q=[],Y=[{title:"ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0,rules:[{required:!0,message:"ID\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u7528\u6237id",dataIndex:"userid",rules:[{required:!0,message:"\u7528\u6237id\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u65f6\u95f4",dataIndex:"time",rules:[{required:!0,message:"\u65f6\u95f4\u4e3a\u5fc5\u586b\u9879"}]},{title:"ip\u5730\u5740",dataIndex:"ip",rules:[{required:!0,message:"ip\u5730\u5740\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u8bbe\u5907",dataIndex:"device",rules:[{required:!0,message:"\u8bbe\u5907\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u57ce\u5e02",dataIndex:"city",rules:[{required:!0,message:"\u57ce\u5e02\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u65e5\u5fd7\u7c7b\u578b",dataIndex:"type",backendType:"foreignKey",rules:[{required:!0,message:"\u65e5\u5fd7\u7c7b\u578b\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t){t.value;var n=t.onChange,r=se.map((function(e){return y.a.createElement(F,{key:e.id,value:e.id},e.text)}));return y.a.createElement(b["a"],{placeholder:"\u8bf7\u9009\u62e9\u65e5\u5fd7\u7c7b\u578b",onChange:n},r)}},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return y.a.createElement(y.a.Fragment,null,y.a.createElement(h["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(f["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:I(!0),U(t);case 2:case"end":return e.stop()}}),e)})))}),y.a.createElement(o["a"],{type:"vertical"}),y.a.createElement(u["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8bbf\u95ee\u65e5\u5fd7\u5417\uff1f",placement:"topRight",onConfirm:function(){M([t]),D.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},y.a.createElement(v["default"],{title:"\u5220\u9664",className:"icon"})))}}],Z=Object(A["e"])(Y),G=Object(A["k"])(Z),H=[].concat(Y),X=[].concat(Y),$=Object(j["useState"])({}),ee=Object(m["a"])($,2),te=ee[0],ne=ee[1],re=Object(j["useState"])({}),ae=Object(m["a"])(re,2),ce=ae[0],ie=ae[1],ue=Object(j["useState"])([]),oe=Object(m["a"])(ue,2),se=oe[0],le=oe[1];return Object(j["useEffect"])((function(){Object(P["b"])().then((function(e){le(e.data)}))}),[]),y.a.createElement(g["c"],null,y.a.createElement(x["a"],{beforeSearchSubmit:function(e){return Object(A["d"])(e,Q),e},params:ce,scroll:{x:"100%"},columnsStateMap:te,onColumnsStateChange:function(e){return ne(e)},headerTitle:"\u8bbf\u95ee\u65e5\u5fd7\u8868\u683c",actionRef:D,rowKey:"id",toolBarRender:function(e,t){var n=t.selectedRows;return[y.a.createElement(i["a"],{type:"primary",onClick:function(){return s(!0)}},y.a.createElement(w["default"],null)," \u65b0\u5efa"),y.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u8bbf\u95ee\u65e5\u5fd7 ",onSearch:function(e){ie({search:e}),D.current.reload()}}),n&&n.length>0&&y.a.createElement(r["a"],{overlay:y.a.createElement(a["a"],{onClick:function(){var e=Object(f["a"])(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=4;break}return e.next=3,M(n);case 3:D.current.reloadAndRest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},y.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"))},y.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",y.a.createElement(O["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&y.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",y.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,n){return R(Object(p["a"])(Object(p["a"])({},e),{},{sorter:t,filter:n}))},columns:G,rowSelection:{}}),y.a.createElement(C,{onCancel:function(){return s(!1)},modalVisible:n},y.a.createElement(x["a"],{formRef:J,onSubmit:function(){var e=Object(f["a"])(l.a.mark((function e(t){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(A["l"])(t),e.next=3,W(t);case 3:n=e.sent,n&&(s(!1),D.current&&D.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{labelCol:{span:6},labelAlign:"left"},columns:X,rowSelection:{}})),y.a.createElement(N,{onCancel:function(){return I(!1)},modalVisible:S},y.a.createElement(x["a"],{formRef:B,onSubmit:function(){var e=Object(f["a"])(l.a.mark((function e(t){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(A["l"])(t),e.next=3,z(t,V.id);case 3:n=e.sent,n&&(I(!1),D.current&&D.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:V,labelCol:{span:6},labelAlign:"left"},columns:H,rowSelection:{}})))};t["default"]=D}}]);