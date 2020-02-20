import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'
import 'bootstrap'
import 'font-awesome/css/font-awesome.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'eslint-loader/index'

import './bus'
import './fadein'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.component('Loading', Loading)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  // 讓使用者離開該欄位時觸發驗證
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW
  }
})
Vue.use(VueAwesomeSwiper)

Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
// 開啟跨域
axios.defaults.withCredentials = true

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // to 到達的頁面
  // from 從哪個頁面過去
  // next 進入的網址
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        // 帳號登入成功時(true)
        next()
      } else {
        // 不是登入狀態時，回到登入頁面，讓頁面自動跳回login
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
// 跳轉後頁面回到頂部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
