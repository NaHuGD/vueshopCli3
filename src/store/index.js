import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    strict: true,
    namespaced: true,
    isLoading: false,
    products: [],
    cart: {
      carts: {
        size: ''
      }
    },
    paginations: ''
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProducts (context, page) {
      // 取得api資料
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('LOADING', false)
      })
    },
    getCart (context) {
      // 取得購物車內容
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true)
      axios.get(url).then(response => {
        // 接受到購物車資訊時用eventbus傳遞
        context.commit('CART', response.data.data)
        context.commit('LOADING', false)
      })
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    CART (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    products (state) {
      return state.products
    },
    cart (state) {
      return state.cart
    }
  },
  modules: {

  }
})
