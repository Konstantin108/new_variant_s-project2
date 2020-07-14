<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'
  export default {
    computed: {
      layout() {
        console.log()
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<style lang="scss">
  @import 'assets/style.css';
</style>
