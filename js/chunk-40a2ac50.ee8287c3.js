(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a2ac50"],{a55b:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login"},[e("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),s.signin(t)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[s._v("KaizBB會員登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}}),e("div",{staticClass:"checkbox mb-3 text-danger"},[s._v(s._s(s.isMessage))]),e("button",{staticClass:"btn-lg btn-block",attrs:{type:"submit"}},[s._v("登入")]),e("button",{staticClass:"goBack",on:{click:function(t){return t.preventDefault(),s.goBack(t)}}},[s._v("回上一頁")]),e("p",{staticClass:"my-3 text-muted"},[s._v("© 2017-2019")])])])},r=[],n={data:function(){return{isMessage:"",user:{username:"",password:""}}},methods:{signin:function(){var s="".concat("https://vue-course-api.hexschool.io","/admin/signin"),t=this;t.$http.post(s,t.user).then((function(s){t.isMessage=s.data.message,s.data.success&&t.$router.push("admin/Products")}))},goBack:function(){var s=this;s.$router.go(-1)}}},o=n,i=(e("e831"),e("2877")),u=Object(i["a"])(o,a,r,!1,null,"58cfdffe",null);t["default"]=u.exports},e831:function(s,t,e){"use strict";var a=e("f8f5"),r=e.n(a);r.a},f8f5:function(s,t,e){}}]);
//# sourceMappingURL=chunk-40a2ac50.ee8287c3.js.map