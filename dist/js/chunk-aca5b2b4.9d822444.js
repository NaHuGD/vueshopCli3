(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aca5b2b4"],{"5aa7":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("CheckSchedule"),s("form",{on:{submit:function(e){return e.preventDefault(),t.paying(e)}}},[s("div",{staticClass:"mx-auto mb-4 container"},[s("div",{staticClass:"Confirm"},[s("div",{staticClass:"row p-2 py-md-4"},[s("span",{staticClass:"col-12 col-md-6 pb-2 pb-md-0"},[s("p",[t._v("訂購人:"+t._s(t.order.user.name))])]),s("span",{staticClass:"col-12 col-md-6 text-md-right"},[s("p",[t._v("訂購日期:"+t._s(t.order.user.nowDate))])])]),s("div",{staticClass:"product py-2"},[t._m(0),t._l(t.order.products,(function(e,c){return s("div",{key:c,staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v(t._s(e.product.title))]),s("p",{staticClass:"col"},[t._v(t._s(e.qty)+"/件")]),s("p",{staticClass:"col text-right"},[t._v(t._s(t._f("currency")(e.product.price)))])])}))],2),s("div",{staticClass:"info py-2"},[s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("收件人姓名 :")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t.order.user.name))])]),s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("收件人電話 :")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t.order.user.tel))])]),s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("收件地址 :")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t.order.user.address))])]),s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("收件人信箱 :")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t.order.user.email))])])]),s("div",{staticClass:"total py-2"},[s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("總價")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])]),t._m(1),s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("小計")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v(t._s(t._f("currency")(t.order.total+80)))])])]),s("div",{staticClass:"pt-3"},[s("p",{staticClass:"d-inline"},[t._v("訂單編號 :")]),s("p",{staticClass:"d-inline-block px-2"},[t._v(t._s(t.orderId))])]),s("div",{staticClass:"pt-2",class:{"text-danger":!1===t.order.is_paid,"text-success":t.order.is_paid}},[s("p",{staticClass:"d-inline"},[t._v("付款狀態 :")]),t.order.is_paid?s("p",{staticClass:"d-inline px-2"},[t._v("完成付款")]):s("p",{staticClass:"d-inline px-2"},[t._v("尚未付款")])]),s("button",{staticClass:"paying",class:{active:!1===t.order.is_paid,active:t.order.is_paid}},[s("span",{staticClass:"box"},[t.order.is_paid?s("i",{staticClass:"fa fa-check"}):t._e()]),!0===t.order.is_paid?s("p",[t._v("結帳完成")]):s("p",[t._v("點擊付款")])])])])]),!0===t.isAlert?s("div",{staticClass:"checkOutAlert",on:{click:function(e){e.preventDefault(),t.isAlert=!1}}},[s("div",{staticClass:"info"},[s("span",{staticClass:"text-success"},[t.isIcon?s("i",{staticClass:"fa fa-check-circle-o"}):s("i",{staticClass:"fa fa-spinner fa-spin text-dark"})]),s("p",[t._v("感謝您購買凱力的產品,我們將儘速為您出貨")]),s("span",{staticClass:"count"},[t._v(t._s(t.num)+"%")]),s("router-link",{staticClass:"d-block",attrs:{tag:"button",to:"/shop/all"}},[t._v("繼續購物")]),s("button",{staticClass:"d-block",on:{click:function(e){e.preventDefault(),t.isAlert=!1}}},[t._v("查看清單")])],1)]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-secondary text-left"},[t._v("項目")]),s("p",{staticClass:"col text-secondary"},[t._v("數量")]),s("p",{staticClass:"col text-secondary text-right"},[t._v("單價")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center p-2"},[s("p",{staticClass:"col text-left"},[t._v("運費")]),s("p",{staticClass:"col mobNone"}),s("p",{staticClass:"col text-right"},[t._v("$80")])])}],r=(s("a4d3"),s("99af"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),o=s("9352"),i=s("2f62");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,c)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={components:{CheckSchedule:o["a"]},data:function(){return{payingCheck:!0,isAlert:!1,isIcon:!1,num:0,order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/order/").concat(t.orderId);t.$store.state.isLoading=!0,t.$http.get(e).then((function(e){t.order=e.data.order,t.$store.state.isLoading=!1,t.payingCheck=!t.order.is_paid}))},paying:function(){var t=this;if(t.payingCheck){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/pay/").concat(t.orderId);t.$store.state.isLoading=!0,t.$http.post(e).then((function(e){e.data.success&&t.getOrder()})),document.querySelector(".paying").classList.add("active"),t.$store.state.isLoading=!1,t.payingCheck=!1}setTimeout((function(){t.isAlert=!0,t.countFn()}),1e3)},countFn:function(){var t=this;if(100===t.num)return!1;var e=setInterval((function(s){var c=document.querySelector(".count");!0===t.isAlert?(c.innerHTML="".concat(t.num+1)+"%",t.num++,100===t.num&&(clearInterval(e),setTimeout((function(){c.classList.add("countStyle"),t.isIcon=!0}),600))):(t.isIcon=!1,clearInterval(e))}),10)}},computed:l({},Object(i["c"])(["isLoading"])),created:function(){var t=this;t.orderId=this.$route.params.orderId,t.getOrder()},mounted:function(){document.querySelector(".checkOut").style="border:3px solid #8d3742;",document.querySelector(".checkOut>i").style="color:#8d3742;",document.querySelector(".checkOut>p").style="color:#8d3742;",document.querySelector(".checkInfo").style="border:3px solid #8d3742;",document.querySelector(".checkInfo>i").style="color:#8d3742;",document.querySelector(".checkInfo>p").style="color:#8d3742;",document.querySelector(".checkSchedule>span").classList.add("scheduleConfirmAnimation")}},p=d,u=(s("9576"),s("2877")),v=Object(u["a"])(p,c,a,!1,null,null,null);e["default"]=v.exports},9576:function(t,e,s){"use strict";var c=s("ea75"),a=s.n(c);a.a},ea75:function(t,e,s){}}]);
//# sourceMappingURL=chunk-aca5b2b4.9d822444.js.map