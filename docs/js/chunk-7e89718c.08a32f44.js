(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e89718c"],{"057f":function(t,e,r){var a=r("fc6a"),o=r("241c").f,i={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==i.call(t)?c(t):o(a(t))}},"0dc0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shopInside pt100"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",[r("div",[r("ul",{staticClass:"navColumn"},[r("router-link",{staticClass:"title pointer",attrs:{tag:"li",to:"/shop"}},[t._v("商品列表")]),r("li",{staticClass:"title pointer",on:{click:t.back}},[t._v(t._s(t.product.category))]),r("li",{staticClass:"title"},[t._v(t._s(t.product.title))])],1)]),r("div",{staticClass:"row mb-5 mt-4 align-items-center"},[r("div",{staticClass:"col-md-6"},[r("img",{attrs:{src:t.product.imageUrl,alt:t.product.title}}),r("span",{staticClass:"like"},[t.getFilterLocalData(t.product)?r("i",{staticClass:"fa fa-heart text-danger",on:{click:function(e){return e.stopPropagation(),t.removeLike(t.product)}}}):r("i",{staticClass:"fa fa-heart-o text-dark",on:{click:function(e){return e.stopPropagation(),t.addLike(t.product)}}})])]),r("div",{staticClass:"shopInside_info col-md-6 col-xl-4"},[r("div",[r("h2",{staticClass:"h2 mb-3 mt-xl-0"},[t._v(t._s(t.product.title))]),r("span",[t._v("購買數量:")]),r("div",{staticClass:"row"},[r("div",{staticClass:"addSize mt-2 col-6"},["護具"!==t.product.category?r("select",{staticClass:"form-control",class:{redBorder:t.isSize},attrs:{id:"tasteValue"},on:{change:function(e){return e.preventDefault(),t.tasteValue(e)}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("口味")]),r("option",{attrs:{value:"草莓"}},[t._v("草莓")]),r("option",{attrs:{value:"巧克力"}},[t._v("巧克力")]),r("option",{attrs:{value:"香草"}},[t._v("香草")])]):r("select",{staticClass:"form-control",class:{redBorder:t.isSize},attrs:{id:"protectiveValue"},on:{change:function(e){return e.preventDefault(),t.protectiveValue(e)}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("尺寸")]),r("option",{attrs:{value:"L"}},[t._v("L")]),r("option",{attrs:{value:"M"}},[t._v("M")]),r("option",{attrs:{value:"S"}},[t._v("S")])])]),r("div",{staticClass:"addNumber mt-2 col-6"},[r("select",{staticClass:"form-control",attrs:{name:"",id:"cartNum"},on:{change:function(e){return e.preventDefault(),t.cartNumFn(e)}}},t._l(10,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])})),0)])]),r("p",{staticClass:"h3 pt-2 pb-2 mb-4"},[t._v("NT."+t._s(t.product.price))])]),0===t.product.in_stock?r("div",{staticClass:"text-danger text-center"},[t._v("商品已售完")]):r("div",{staticClass:"addShop text-center"},[r("button",{staticClass:"col-5",on:{click:function(e){return e.preventDefault(),t.addtoCart(t.product.id)}}},[t._v("加入購物車")]),r("span",{staticClass:"col"}),r("button",{staticClass:"col-5",attrs:{to:"/shop/all"},on:{click:function(e){return e.preventDefault(),t.buyNow(t.product.id)}}},[t._v("直接購買")])]),r("h6",{staticClass:"h5 pt-4"},[t._v("商品描述:")]),r("ul",{staticClass:"ml-2"},[r("li",{staticClass:"productWrite mb-3"},[t._v(t._s(t.product.description))])]),r("h6",{staticClass:"h5 mb-3"},[t._v("商品資訊:")]),t._m(0)])]),r("div",{staticClass:"aboutLike"},[t._m(1),r("div",{staticClass:"info row"},t._l(t.moreLook,(function(e,a){return r("div",{key:a,staticClass:"col-6 col-lg-3 mt-4"},[r("div",{on:{click:function(r){return r.preventDefault(),t.goPath(e.id)}}},[r("img",{attrs:{src:e.imageUrl,alt:""}}),r("p",{staticClass:"text-left py-2"},[t._v(t._s(e.title))]),r("p",{staticClass:"text-left"},[t._v("NT."+t._s(e.price))])])])})),0)])])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"ml-2"},[r("li",{staticClass:"mb-3"},[t._v("實品顏色依照片為主")]),r("li",{staticClass:"mb-3"},[t._v("厚薄:適中")]),r("li",{staticClass:"mb-3"},[t._v("彈性:佳")]),r("li",{staticClass:"mb-3"},[t._v("素材產地 / 中國")]),r("li",{staticClass:"mb-3"},[t._v("加工產地 / 中國")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"h2 mb-3 text-center"},[r("span",[t._v("MORE LOOK")])])}],i=(r("a4d3"),r("99af"),r("4de4"),r("c740"),r("4160"),r("45fc"),r("a434"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),n=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={data:function(){return{isSize:!1,itemId:"",products:"",product:"",moreLook:[],likeData:[]}},methods:s({},Object(n["b"])("cartsModules",["cartNumFn","addtoCart"]),{getProduct:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/products/all");e.$store.dispatch("updateLoading",!0),e.$http.get(r).then((function(r){var a=r.data.products.filter((function(e,r,a){if(e.id!==t)return e}));e.products=a;for(var o=0;o<4;o++){var i=Math.floor(Math.random()*e.products.length);e.moreLook.push(e.products[i]),e.products.splice(i,1)}}));var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/product/").concat(t);e.$http.get(a).then((function(t){e.product=t.data.product,e.$store.dispatch("updateLoading",!1)}))},goPath:function(t){var e=this;e.$router.push({path:"/shop_inside/".concat(t)}),location.reload()},back:function(t){var e=this;"護具"===e.product.category?e.$router.push({path:"/shop/protective"}):"乳清"===e.product.category&&e.$router.push({path:"/shop/whey"})},tasteValue:function(){var t=this;t.$store.state.cartsModules.cart.carts.size=document.querySelector("#tasteValue").value,t.isSize=!1},protectiveValue:function(){var t=this;t.$store.state.cartsModules.cart.carts.size=document.querySelector("#protectiveValue").value,t.isSize=!1},buyNow:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/cart"),a={product_id:t,qty:e.$store.state.cartsModules.cartNum,size:e.$store.state.cartsModules.cart.carts.size};void 0===e.$store.state.cartsModules.cart.carts.size?(alert("請選擇尺寸/口味"),e.isSize=!0,e.$store.dispatch("updateLoading",!1)):(e.$http.post(r,{data:a}).then((function(t){e.$store.dispatch("cartsModules/getCart")})),e.$router.push("/checkProduct"))},getLocalData:function(){var t=this;t.likeData=JSON.parse(localStorage.getItem("likeData"))||[]},getFilterLocalData:function(t){var e=this;return e.likeData.some((function(e){return t.id===e.id}))},addLike:function(t){var e=this,r={title:t.title,id:t.id};e.likeData.push(r),localStorage.setItem("likeData",JSON.stringify(e.likeData))},removeLike:function(t){var e=this,r=e.likeData.findIndex((function(e){return e.title===t.title}));e.likeData.splice(r,1),localStorage.setItem("likeData",JSON.stringify(e.likeData))}}),computed:s({},Object(n["c"])(["isLoading"])),created:function(){var t=this;t.itemId=t.$route.params.itemId,t.getProduct(t.itemId),t.getLocalData()}},l=u,f=(r("9506"),r("2877")),d=Object(f["a"])(l,a,o,!1,null,"2396ebe3",null);e["default"]=d.exports},"45fc":function(t,e,r){"use strict";var a=r("23e7"),o=r("b727").some,i=r("a640"),n=r("ae40"),c=i("some"),s=n("some");a({target:"Array",proto:!0,forced:!c||!s},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6678:function(t,e,r){},"746f":function(t,e,r){var a=r("428f"),o=r("5135"),i=r("e538"),n=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});o(e,t)||n(e,t,{value:i.f(t)})}},9506:function(t,e,r){"use strict";var a=r("6678"),o=r.n(a);o.a},a434:function(t,e,r){"use strict";var a=r("23e7"),o=r("23cb"),i=r("a691"),n=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),f=r("ae40"),d=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var r,a,l,f,d,p,g=c(this),y=n(g.length),O=o(t,y),_=arguments.length;if(0===_?r=a=0:1===_?(r=0,a=y-O):(r=_-2,a=h(v(i(e),0),y-O)),y+r-a>b)throw TypeError(m);for(l=s(g,a),f=0;f<a;f++)d=O+f,d in g&&u(l,f,g[d]);if(l.length=a,r<a){for(f=O;f<y-a;f++)d=f+a,p=f+r,d in g?g[p]=g[d]:delete g[p];for(f=y;f>y-a+r;f--)delete g[f-1]}else if(r>a)for(f=y-a;f>O;f--)d=f+a-1,p=f+r-1,d in g?g[p]=g[d]:delete g[p];for(f=0;f<r;f++)g[f+O]=arguments[f+2];return g.length=y-a+r,l}})},a4d3:function(t,e,r){"use strict";var a=r("23e7"),o=r("da84"),i=r("d066"),n=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),v=r("825a"),h=r("7b0b"),b=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),O=r("df75"),_=r("241c"),C=r("057f"),w=r("7418"),k=r("06cf"),S=r("9bf2"),j=r("d1e7"),D=r("9112"),P=r("6eeb"),x=r("5692"),L=r("f772"),$=r("d012"),N=r("90e3"),M=r("b622"),I=r("e538"),z=r("746f"),E=r("d44e"),V=r("69f3"),J=r("b727").forEach,F=L("hidden"),A="Symbol",T="prototype",q=M("toPrimitive"),B=V.set,R=V.getterFor(A),U=Object[T],W=o.Symbol,K=i("JSON","stringify"),Q=k.f,G=S.f,H=C.f,X=j.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),at=o.QObject,ot=!at||!at[T]||!at[T].findChild,it=c&&l((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=Q(U,e);a&&delete U[e],G(t,e,r),a&&t!==U&&G(U,e,a)}:G,nt=function(t,e){var r=Y[t]=y(W[T]);return B(r,{type:A,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,r){t===U&&st(Z,e,r),v(t);var a=m(e,!0);return v(r),f(Y,a)?(r.enumerable?(f(t,F)&&t[F][a]&&(t[F][a]=!1),r=y(r,{enumerable:g(0,!1)})):(f(t,F)||G(t,F,g(1,{})),t[F][a]=!0),it(t,a,r)):G(t,a,r)},ut=function(t,e){v(t);var r=b(e),a=O(r).concat(vt(r));return J(a,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,F)&&this[F][e])||r)},dt=function(t,e){var r=b(t),a=m(e,!0);if(r!==U||!f(Y,a)||f(Z,a)){var o=Q(r,a);return!o||!f(Y,a)||f(r,F)&&r[F][a]||(o.enumerable=!0),o}},pt=function(t){var e=H(b(t)),r=[];return J(e,(function(t){f(Y,t)||f($,t)||r.push(t)})),r},vt=function(t){var e=t===U,r=H(e?Z:b(t)),a=[];return J(r,(function(t){!f(Y,t)||e&&!f(U,t)||a.push(Y[t])})),a};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===U&&r.call(Z,t),f(this,F)&&f(this[F],e)&&(this[F][e]=!1),it(this,e,g(1,t))};return c&&ot&&it(U,e,{configurable:!0,set:r}),nt(e,t)},P(W[T],"toString",(function(){return R(this).tag})),P(W,"withoutSetter",(function(t){return nt(N(t),t)})),j.f=ft,S.f=st,k.f=dt,_.f=C.f=pt,w.f=vt,I.f=function(t){return nt(M(t),t)},c&&(G(W[T],"description",{configurable:!0,get:function(){return R(this).description}}),n||P(U,"propertyIsEnumerable",ft,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),J(O(rt),(function(t){z(t)})),a({target:A,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),a({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),a({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),a({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),K){var ht=!s||l((function(){var t=W();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));a({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var a,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(a=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!ct(e))return e}),o[1]=e,K.apply(null,o)}})}W[T][q]||D(W[T],q,W[T].valueOf),E(W,A),$[F]=!0},ade3:function(t,e,r){"use strict";function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}))},b64b:function(t,e,r){var a=r("23e7"),o=r("7b0b"),i=r("df75"),n=r("d039"),c=n((function(){i(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},c740:function(t,e,r){"use strict";var a=r("23e7"),o=r("b727").findIndex,i=r("44d2"),n=r("ae40"),c="findIndex",s=!0,u=n(c);c in[]&&Array(1)[c]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},dbb4:function(t,e,r){var a=r("23e7"),o=r("83ab"),i=r("56ef"),n=r("fc6a"),c=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,a=n(t),o=c.f,u=i(a),l={},f=0;while(u.length>f)r=o(a,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var a=r("23e7"),o=r("d039"),i=r("fc6a"),n=r("06cf").f,c=r("83ab"),s=o((function(){n(1)})),u=!c||s;a({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return n(i(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a}}]);
//# sourceMappingURL=chunk-7e89718c.08a32f44.js.map