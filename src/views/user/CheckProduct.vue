<template>
  <div>
    <CheckSchedule />
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="checkProduct main row p-3 mb-3" v-if="cart.carts != ''">
        <div class="col-md-8 p-0 pr-md-3">
          <table class="bagTitle">
            <tr class="row">
              <th>品名</th>
              <th>尺寸/口味</th>
              <th>數量</th>
              <th>單價</th>
              <th>刪除</th>
            </tr>
          </table>
          <table
            class="bagInfo"
            :class="{'sale':couponSuccess}"
            v-for="(item,key) in cart.carts"
            :key="key"
          >
            <tr class="row" v-if="item.product">
              <td class="col-sm-2 col-3 w-100 pr-0">
                <img class="col-12 p-0" :src="item.product.imageUrl" :alt="item.product.title" />
                <p class="col-12 p-0">{{item.product.title}}</p>
              </td>
              <td class="col-sm col-2 text-center">{{item.size}}</td>
              <td class="col-sm col-2 text-center">
                <select
                  v-model="item.qty"
                  @change.prevent="changeCartFn(item.id,item.product.id, item.qty, item.size)"
                >
                  <option :value="num" v-for="num in 10" :key="num.id">{{num}}</option>
                </select>
              </td>
              <td class="col-sm col-3 text-center">{{item.product.price | currency}}</td>
              <td class="col-sm col-2 text-center" @click.prevent="cartItemDelete(item)">
                <button>
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="priceInfo col-md-4 py-3">
          <table class="title">
            <thead>
              <th class="pb-5">訂單明細</th>
            </thead>
          </table>
          <table class="w-100">
            <tr>
              <th class="pb-4">小計</th>
              <td class="text-right">{{cart.total | currency}}</td>
            </tr>
            <tr v-if="couponSuccess" class="text-success">
              <th class="pb-4">折扣價</th>
              <td class="text-right">{{cart.final_total | currency}}</td>
            </tr>
            <tr>
              <th class="pb-4">運費</th>
              <td class="text-right">$80</td>
            </tr>
          </table>
          <table class="table">
            <tr class="pt-4">
              <th class="pl-0">總計</th>
              <td class="text-right pr-0">{{cart.final_total + 80 | currency}}</td>
            </tr>
          </table>
          <button class="goCheckOut" @click.prevent="goCheckOutFn">下一步</button>
          <div class="coupons">
            <div class="barcode mt-md-4 mt-2">
              <img :src="barcodeImg" alt="條碼" ondragstart="return false;" />
            </div>
            <div class="row pl-2 couponsInfo" v-if="couponSuccess == false">
              <input
                type="text"
                class="col-11"
                placeholder="輸入折扣碼"
                @keyup.enter="addCoupons()"
                v-model="coupon_code"
              />
              <button class="applyCoupons col-1" @click.prevent="addCoupons()">
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
            <p class="couponCode text-center px-5" v-if="couponSuccess == true">{{coupon_code}}</p>
            <span>
              <p v-if="couponSuccess == true" class="text-success text-center pt-2">已套用優惠券!</p>
              <p
                v-if="couponMessage == '找不到優惠券!' | couponMessage == '優惠券無法使用'"
                class="text-danger text-center pt-2"
              >優惠券輸入錯誤</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="main mb-3 mx-auto py-3 col-10" v-if="cart.carts.length < 1">
      <router-link to="shop/all" class="text-center h5 m-0 d-block">點我前往購物</router-link>
    </div>
  </div>
</template>
<script>
import CheckSchedule from '@/components/user/CheckSchedule'
import barcodeImg from '@/assets/images/checkout/barcode.jpg'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CheckSchedule
  },
  data () {
    return {
      barcodeImg,
      coupon_code: '',
      couponSuccess: '',
      couponMessage: '',
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    ...mapActions(['getCart']),
    cartItemDelete (item) {
      const vm = this
      vm.$store.state.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`
      vm.$http.delete(url).then(response => {
        vm.getCart()
        vm.$store.state.isLoading = false
      })
    },
    addCoupons () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      vm.$store.state.isLoading = true
      vm.$http.post(url, { data: coupon }).then(response => {
        // 套用優惠卷//
        vm.couponSuccess = response.data.success
        vm.couponMessage = response.data.message
        vm.getCart()
        vm.$store.state.isLoading = false
      })
    },
    goCheckOutFn () {
      const vm = this
      vm.$router.push('/checkInfo')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    changeCartFn (id, productId, qty, size) {
      const vm = this
      vm.$store.dispatch('updateLoading', true)
      const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const changeCart = {
        product_id: productId,
        qty: qty,
        size: size
      }
      vm.$http
        .all([
          vm.$http.delete(delAPI),
          vm.$http.post(addAPI, { data: changeCart })
        ])
        .then(
          vm.$http.spread((delResp, addResp) => {
            vm.getCart()
            vm.$store.dispatch('updateLoading', false)
          })
        )
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'cart', 'products'])
  },
  created () {
    const vm = this
    vm.getCart()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/breakpoint.scss";
a {
  text-decoration: none;
  color: $color-darkRed;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>
