(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e1da80e"],{"5acf":function(t,e,c){var n=c("99d4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=c("499e").default;a("695561d1",n,!0,{sourceMap:!1,shadowMode:!1})},"7d0a":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"receive"},[c("section",{staticClass:"popup-content"},[t.token?t._e():c("section",[t._m(0),t._m(1)]),t.token?c("section",[c("figure",{staticClass:"title"},[t._v("Receive "),c("span",[t._v(t._s(t.token.symbol))])]),c("figure",{staticClass:"sub-title"},[t._v("You can receive "+t._s(t.token.symbol)+" to the account listed below.")])]):t._e(),c("section",{staticClass:"scroller"},[t.token?t._e():c("section",{staticClass:"accounts"},t._l(t.accounts,function(e){return c("section",{staticClass:"account"},[t.qrs[e.unique()]?c("section",{staticClass:"qr"},[c("img",{attrs:{src:t.qrs[e.unique()]}})]):t._e(),c("section",{staticClass:"info"},[c("figure",{staticClass:"network"},[t._v(t._s(e.network().name))]),c("figure",{staticClass:"name",class:{bigger:e.sendable().length<15}},[t._v(t._s(e.sendable()))])]),c("section",{staticClass:"actions"},[c("Button",{attrs:{primary:t.copied===e.sendable(),icon:t.copied===e.sendable()?"far fa-check":"far fa-copy"},nativeOn:{click:function(c){return t.copy(e)}}})],1)])}),0),t.token?c("section",{staticClass:"accounts single"},[c("section",{staticClass:"account"},[t.qr?c("section",{staticClass:"qr"},[c("img",{attrs:{src:t.qr}})]):t._e(),c("section",{staticClass:"info"},[c("figure",{staticClass:"network"},[t._v(t._s(t.forcedAccount.network().name))]),c("figure",{staticClass:"name",class:{bigger:t.forcedAccount.sendable().length<15}},[t._v(t._s(t.forcedAccount.sendable()))])]),c("section",{staticClass:"actions"},[c("Button",{attrs:{primary:t.copied===t.forcedAccount.sendable(),icon:t.copied===t.forcedAccount.sendable()?"far fa-check":"far fa-copy"},nativeOn:{click:function(e){return t.copy(t.forcedAccount)}}})],1)])]):t._e()])]),c("section",{staticClass:"popup-buttons"},[c("Button",{attrs:{text:"Done",primary:"1"},nativeOn:{click:function(e){return function(){return t.closer(null)}()}}})],1)])},a=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("figure",{staticClass:"title"},[t._v("Receivable "),c("span",[t._v("accounts")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("figure",{staticClass:"sub-title"},[t._v("Each "),c("b",[t._v("network")]),t._v(" accepts different types of tokens. Make sure you are selecting the appropriate network.")])}],o=(c("8e6e"),c("ac6a"),c("456d"),c("7f7f"),c("7514"),c("bd86")),s=c("a026"),i=(c("f289"),c("2f62")),r=c("4815"),u=c("21f8"),l=c("4b59"),f=c("abe0"),p=c("91dc");function b(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),c.push.apply(c,n)}return c}function d(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?b(c,!0).forEach(function(e){Object(o["a"])(t,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):b(c).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))})}return t}var v={props:["popin","closer"],data:function(){return{copied:null,lastPopup:null,qr:null,qrs:{}}},computed:d({},Object(i["d"])(["scatter"]),{accounts:function(){return r["a"].accounts()},token:function(){return this.popin.data.props.token},forcedAccount:function(){var t=this;if(this.token)return this.accounts.find(function(e){return e.networkUnique===t.token.network().unique()})}}),mounted:function(){var t=this;this.forcedAccount?p["a"].createQR(this.forcedAccount.sendable()).then(function(e){return t.qr=e}):this.accounts.map(function(e){p["a"].createQR(e.sendable()).then(function(c){return s["a"].set(t.qrs,e.unique(),c)}),t.$forceUpdate()})},methods:d({copy:function(t){var e=t.sendable();this.copied=e,window.wallet.utility.copy(e);var c=l["a"].snackbar("Copied ".concat(t.network().name," account to clipboard."));this.lastPopup&&this[f["c"]](this.lastPopup),this.lastPopup=c,u["a"].push(c)}},Object(i["b"])([f["c"]]))},h=v,g=(c("ebb2"),c("2877")),x=Object(g["a"])(h,n,a,!1,null,"47b232b9",null);e["default"]=x.exports},"99d4":function(t,e,c){e=t.exports=c("2350")(!1),e.push([t.i,".receive[data-v-47b232b9]{max-width:400px;width:calc(100% - 80px);margin:0 auto;position:relative}.receive .sub-title[data-v-47b232b9]{margin-top:-20px;font-size:14px;color:#00a8ff}.receive .scroller[data-v-47b232b9]{margin-top:20px;max-height:250px;overflow-y:auto}.receive .accounts .account[data-v-47b232b9]{text-align:left;padding:10px;border:1px solid rgba(0,168,255,.08);border-radius:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.receive .accounts .account.singular[data-v-47b232b9]{display:block}.receive .accounts .account[data-v-47b232b9]:not(:first-child){margin-top:10px}.receive .accounts .account .qr[data-v-47b232b9]{border-radius:4px;overflow:hidden;width:80px;height:80px;margin-right:15px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.receive .accounts .account .qr img[data-v-47b232b9]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}.receive .accounts .account .info[data-v-47b232b9]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:15px}.receive .accounts .account .info .name[data-v-47b232b9]{font-size:13px;font-weight:700;word-break:break-word}.receive .accounts .account .info .name.bigger[data-v-47b232b9]{font-size:14px}.receive .accounts .account .info .network[data-v-47b232b9]{font-size:13px;color:#999}.receive .accounts .account .actions[data-v-47b232b9]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.receive .accounts .account .actions button[data-v-47b232b9]{padding:10px;height:auto;margin-left:5px;width:50px}",""])},ebb2:function(t,e,c){"use strict";var n=c("5acf"),a=c.n(n);a.a}}]);