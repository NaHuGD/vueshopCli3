(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6739a00"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"20b6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(Math.round(e.final_total)))])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(Math.round(t.order.total)))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],i=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),a=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),t.$http.get(e).then((function(e){t.order=e.data.order,t.$store.dispatch("updateLoading",!1)}))},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/pay/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),t.$http.post(e).then((function(e){e.data.success&&t.getOrder(),t.$store.dispatch("updateLoading",!1)}))}},computed:s({},Object(a["c"])(["isLOading"])),created:function(){var t=this;t.orderId=t.$route.params.orderId,t.getOrder()}},f=u,d=r("2877"),l=Object(d["a"])(f,n,o,!1,null,null,null);e["default"]=l.exports},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),d=r("5135"),l=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),O=r("7c73"),m=r("df75"),_=r("241c"),w=r("057f"),j=r("7418"),P=r("06cf"),S=r("9bf2"),C=r("d1e7"),x=r("9112"),E=r("6eeb"),$=r("5692"),k=r("f772"),D=r("d012"),I=r("90e3"),L=r("b622"),N=r("e538"),J=r("746f"),F=r("d44e"),M=r("69f3"),T=r("b727").forEach,q=k("hidden"),Q="Symbol",W="prototype",z=L("toPrimitive"),A=M.set,B=M.getterFor(Q),G=Object[W],H=o.Symbol,K=i("JSON","stringify"),R=P.f,U=S.f,V=w.f,X=C.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=o.QObject,ot=!nt||!nt[W]||!nt[W].findChild,it=c&&f((function(){return 7!=O(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=R(G,e);n&&delete G[e],U(t,e,r),n&&t!==G&&U(G,e,n)}:U,at=function(t,e){var r=Y[t]=O(H[W]);return A(r,{type:Q,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,r){t===G&&st(Z,e,r),p(t);var n=g(e,!0);return p(r),d(Y,n)?(r.enumerable?(d(t,q)&&t[q][n]&&(t[q][n]=!1),r=O(r,{enumerable:y(0,!1)})):(d(t,q)||U(t,q,y(1,{})),t[q][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=m(r).concat(pt(r));return T(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?O(t):ut(O(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===G&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,q)&&this[q][e])||r)},lt=function(t,e){var r=v(t),n=g(e,!0);if(r!==G||!d(Y,n)||d(Z,n)){var o=R(r,n);return!o||!d(Y,n)||d(r,q)&&r[q][n]||(o.enumerable=!0),o}},bt=function(t){var e=V(v(t)),r=[];return T(e,(function(t){d(Y,t)||d(D,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=V(e?Z:v(t)),n=[];return T(r,(function(t){!d(Y,t)||e&&!d(G,t)||n.push(Y[t])})),n};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===G&&r.call(Z,t),d(this,q)&&d(this[q],e)&&(this[q][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(G,e,{configurable:!0,set:r}),at(e,t)},E(H[W],"toString",(function(){return B(this).tag})),E(H,"withoutSetter",(function(t){return at(I(t),t)})),C.f=dt,S.f=st,P.f=lt,_.f=w.f=bt,j.f=pt,N.f=function(t){return at(L(t),t)},c&&(U(H[W],"description",{configurable:!0,get:function(){return B(this).description}}),a||E(G,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),T(m(rt),(function(t){J(t)})),n({target:Q,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(h(t))}}),K){var ht=!s||f((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,K.apply(null,o)}})}H[W][z]||x(H[W],z,H[W].valueOf),F(H,Q),D[q]=!0},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,u=i(n),f={},d=0;while(u.length>d)r=o(n,e=u[d++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=o((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-e6739a00.00b7c355.js.map