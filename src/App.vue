<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'
  import Cart from '@/components/app/Cart'
  import CartItem from '@/components/app/CartItem'
  import Filter from '@/components/app/Filter'
  import Loader from '@/components/app/Loader'
  import Navbar from '@/components/app/Navbar'
  import Product from '@/components/app/Product'
  import Products from '@/components/app/Products'



  export default {
    computed: {
      layout() {
        console.log()
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      MainLayout, Cart, CartItem, Filter, Loader, Navbar, Product, Products
    },
    methods: {
      getJson(url) {
        return fetch(url)
                .then(result => result.json())
                .catch(error => {
                  alert('error');
                })
      },
    }
  }
</script>

<style lang="scss">
  @import 'assets/style.css';
</style>
