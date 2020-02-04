import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import './bus';
import './fadein';
import currencyFilter from "./filters/currency";
import dateFilter from "./filters/date";

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.use(VueAwesomeSwiper);

Vue.filter('currency', currencyFilter);
Vue.filter('date',dateFilter);

axios.defaults.withCredentials = true;//開啟跨域

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  console.log('next', next);
  if (to.meta.requiresAuth) { //進入的網址
    console.log('需要驗證');
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) { //帳號登入成功時(true)
        next(); //登入狀態時
      } else {
        next({
          path: '/login'
        }); //不是登入狀態時，回到登入頁面，讓頁面自動跳回login
      }
    });
  } else {
    next();
  }
});