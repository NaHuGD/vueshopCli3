(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8dedc86"],{"0777":function(t,e,s){},"6d8a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt150"},[t._m(0),s("div",{staticClass:"turn"},[s("img",{staticClass:"turnBg",attrs:{src:t.turnBg,ondragstart:"return false;"},on:{click:function(e){return e.preventDefault(),t.playTurn(e)}}}),s("img",{staticClass:"turnTable",attrs:{src:t.turnTable,ondragstart:"return false;"}})]),s("div",{class:{rewardAlert:t.isAlertBg,"d-none":!1===t.isAlertBg}},[s("div",{staticClass:"alertBg",on:{click:function(e){e.preventDefault(),t.isAlertBg=!1}}}),s("div",{staticClass:"alertInfo"},[t._m(1),s("p",{staticClass:"text-center"},[t._v("Save up to")]),s("p",{staticClass:"text-center"},[t._v(t._s(t.price))]),s("p",{staticClass:"text-center pt-2"},[t._v("優惠代碼: kaizbb90")]),s("router-link",{staticClass:"d-block",attrs:{tag:"button",to:"/shop/all"}},[t._v("馬上購物去")]),s("button",{staticClass:"d-block",on:{click:function(e){return e.preventDefault(),t.playAgain(e)}}},[t._v("再玩一次")])],1)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center my-3 info"},[s("p",{staticClass:"h3"},[t._v("歡樂大轉盤")]),s("p",[t._v("點擊下方圖片轉動唱盤,獲取折扣碼")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-success"},[s("i",{staticClass:"fa fa-money"})])}],n=s.p+"img/turnBg.4cbf744d.png",i=s("d635"),c={data:function(){return{turnBg:n,turnTable:i["a"],isPlay:!0,isNum:"",isAlertBg:!1,price:""}},methods:{playTurn:function(){var t=this,e=document.querySelector(".turnTable"),s=Math.floor(5*Math.random());if(!0===t.isPlay){switch(s){case 0:t.price="70%",t.isNum=360;break;case 1:t.price="80%",t.isNum=450;break;case 2:t.price="85%",t.isNum=550;break;case 3:t.price="90%",t.isNum=600;break;default:t.price="95%",t.isNum=650;break}e.style.transform="rotate(".concat(t.isNum,"deg)"),e.style.transition="5s",t.isPlay=!1,setTimeout((function(){t.isAlertBg=!0}),5e3)}},playAgain:function(){var t=this,e=document.querySelector(".turnTable");t.isPlay=!0,e.style.transform="rotate(0deg)",e.style.transition="0s",t.isAlertBg=!1}}},l=c,u=(s("ff96"),s("2877")),o=Object(u["a"])(l,a,r,!1,null,"7c020655",null);e["default"]=o.exports},d635:function(t,e,s){"use strict";e["a"]=s.p+"img/turnTable.c7f6d65b.png"},ff96:function(t,e,s){"use strict";var a=s("0777"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-d8dedc86.cc1479f6.js.map