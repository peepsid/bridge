(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c0c8028"],{"142f":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"moonpay"},[r("section",{staticClass:"content"},[t.src?r("iframe",{attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",frameborder:"0",height:"100%",src:t.src,width:"100%"}},[r("p",[t._v("Your browser does not support iframes.")])]):t._e()]),r("section",{staticClass:"popout-buttons"},[r("Button",{attrs:{text:"Close"},nativeOn:{click:function(e){return t.closer(!1)}}})],1)])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("6762"),r("2fdb"),r("96cf"),r("3b8d")),a=r("bd86"),i=r("2f62"),c=r("30f0");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={props:["popup","closer"],data:function(){return{src:null}},computed:p({},Object(i["d"])(["scatter"]),{token:function(){return this.popup.data.props.token},amount:function(){return this.popup.data.props.amount},to:function(){return this.popup.data.props.to},memo:function(){return this.popup.data.props.memo},email:function(){return this.popup.data.props.email},random:function(){return this.popup.data.props.random},identifier:function(){return this.scatter.hash}}),mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={apiKey:"pk_live_NuTKeMYegyaGK6Puxk7Pn89RbvDgG3P",colorCode:"%2300A8FF",externalCustomerId:this.identifier+(this.random||"")},this.to&&(e.walletAddress=this.to),this.token&&(e.currencyCode=this.token.symbol),this.amount&&(e.baseCurrencyAmount=parseFloat(this.amount).toFixed(2)),this.memo&&(e.walletAddressTag=this.memo),this.email&&(e.email=this.email),r=this.scatter.settings.displayCurrency,e.baseCurrencyCode=["EUR","GBP","USD"].includes(r)?r:"USD",o="https://buy.moonpay.io"+Object.keys(e).reduce(function(t,r,o){return t+=0===o?"?":"&",t+=r+"="+e[r],t},""),console.log("url",o),t.next=12,Object(c["POST"])("moonpay/sign",{url:o});case 12:n=t.sent,o+="&signature=".concat(encodeURIComponent(n)),console.log(o),this.src=o;case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},d=l,f=(r("4213"),r("2877")),m=Object(f["a"])(d,o,n,!1,null,"19d9ea28",null);e["default"]=m.exports},4213:function(t,e,r){"use strict";var o=r("4f9d"),n=r.n(o);n.a},"4f9d":function(t,e,r){var o=r("bee3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("065f1ebf",o,!0,{sourceMap:!1,shadowMode:!1})},bee3:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".moonpay .content[data-v-19d9ea28]{padding:0}",""])}}]);