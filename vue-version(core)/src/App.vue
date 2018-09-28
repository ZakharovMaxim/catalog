<template>
  <div id="app">
    <div v-if='showLogin'>LOGIN</div>
    <header-catalog />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import headerCatalog from '@/components/header-catalog'
export default {
  name: 'App',
  components: {headerCatalog},
  computed: {
    showLogin () {
      console.log(this.$route)
      return this.$route.query.login
    }
  }
}
</script>

<style lang="sass">
  @import './assets/style/bootstrap-grid'
  @import './assets/style/reset'
  @import './assets/style/default'
  main
    padding-top: 50px
    background: $bg
</style>
