import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Mainpage',
      meta: {layout: 'main'},
      component: () => import('../views/Mainpage.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      meta: {layout: 'main'},
      component: () => import('../views/Checkout.vue')
    },
    {
      path: '/product',
      name: 'Product',
      meta: {layout: 'main'},
      component: () => import('../views/Product.vue')
    },
    {
      path: '/shoppingcart',
      name: 'Shoppingcart',
      meta: {layout: 'main'},
      component: () => import('../views/Shoppingcart.vue')
    },
    {
      path: '/singlepage',
      name: 'Singlepage',
      meta: {layout: 'main'},
      component: () => import('../views/Singlepage.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
