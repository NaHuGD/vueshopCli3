import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart: {
      carts: {
        size: ''
      }
    },
    cartNum: 1
  },
  actions: {
    getCart (context) {
      // 取得購物車內容
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then(response => {
        // 接受到購物車資訊時用eventbus傳遞
        context.commit('CART', response.data.data)
        context.commit('LOADING', false, { root: true })
      })
    },
    cartNumFn (context) {
      context.commit('CARTNUM', document.querySelector('#cartNum').value)
    },
    addtoCart (context, id) {
      // qty加入的數量
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      const cart = {
        product_id: id,
        qty: vm.state.cartsModules.cartNum,
        size: vm.state.cartsModules.cart.carts.size
      }
      if (vm.state.cartsModules.cart.carts.size === undefined) {
        alert('請選擇尺寸/口味')
        // vm.isSize = true
        context.commit('LOADING', false, { root: true })
      } else {
        axios.post(url, { data: cart }).then(response => {
          // 加入購物車,response=商品資料
          context.dispatch('getCart')
          context.commit('BAGTOGGLE', false, { root: true })
          context.commit('LOADING', false, { root: true })
        })
      }
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    },
    CARTNUM (state, payload) {
      state.cartNum = payload
    }
  },
  getters: {
    cart (state) {
      return state.cart
    }
  }
}
