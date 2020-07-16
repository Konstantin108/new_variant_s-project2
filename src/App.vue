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
    data: () => ({
    api: ''
  }),
    computed: {
      layout() {
        console.log()
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      MainLayout
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
