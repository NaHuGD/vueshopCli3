import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', //輸入路徑不是定義的path
    redirect: 'home', //導頁致官網
  },
  {
    path: '/',
    name: 'User',
    component: () => import('@/views/user/User'), //載入元件
    redirect: 'home',
    children: [
      {   //首頁
        path: 'home',
        name: 'Home',
        component: () => import('@/views/user/Home'),
      },
      {   //商品頁
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/user/Shop'),
        redirect: { name: 'All' },
        children: [
          {
            path: 'all', //護具分頁
            name: 'All',
            component: () => import('@/views/user/Shop'),
          },
          {
            path: 'protective', //護具分頁
            name: 'Protective',
            component: () => import('@/views/user/Shop'),
          },
          {
            path: 'whey', //乳清分頁
            name: 'Whey',
            component: () => import('@/views/user/Shop'),
          },
          {
            path: 'like', //乳清分頁
            name: 'Like',
            component: () => import('@/views/user/Shop'),
          },
        ]
      },
      {
        path: 'search', //搜尋商品
        name: 'ShopSearch',
        component: () => import('@/views/user/Shop'),
        redirect: { name: 'All' },
        children: [
          {
            path: ':id', //搜尋商品
            name: 'ShopSearch',
            component: () => import('@/views/user/Shop'),
          }
        ]
      },
      {   //商品內頁
        path: 'shop_inside',
        name: 'ShopInside',
        component: () => import('@/views/user/ShopInside'),
        children: [
          {
            path: ':itemId',
            name: 'ShopInside',
            component: () => import('@/views/user/ShopInside'),
          }
        ]
      },
      {   //抽獎頁
        path: 'discount',
        name: 'Discount',
        component: () => import('@/views/user/Discount'),
      },
      {
        path: 'discount/turn',
        name: 'Turn',
        component: () => import('@/views/user/Turn'),
      },
      {   //訊息頁
        path: 'news',
        name: 'News',
        component: () => import('@/views/user/News'),
      },
      {   //確認商品
        path: 'checkProduct',
        name: 'CheckProduct',
        component: () => import('@/views/user/CheckProduct'),
      },
      {   //確認資訊
        path: 'checkInfo',
        name: 'CheckInfo',
        component: () => import('@/views/user/CheckInfo'),
      },
      {   //確認結帳頁
        path: 'confirm/:orderId',
        name: 'Confirm',
        component: () => import('@/views/user/Confirm'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Admin'),
    children: [
      {
        path: 'products', //路由網址
        name: 'Products',
        component: () => import('@/views/admin/Products'),
        meta: { requiresAuth: true },//需要驗證，確保進入頁面需要驗正
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/admin/Orders'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/admin/Coupons'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'Admin',
    component: () => import('@/views/admin/Admin'),
    children: [
      {   //一般頁面不需驗正
        path: 'customer_order',
        name: 'CustomerOrder',
        component: () => import('@/views/admin/CustomerOrder'),
      },
      {   //結帳確認頁
        path: 'customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('@/views/admin/CustomerCheckout'),
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
