<template>
  <div id="app" :class='{"auth": showLogin && !token}'>
    <auth-page v-if='showLogin' />
    <header-catalog />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import headerCatalog from '@/components/header-catalog'
import authPage from '@/components/auth-page'
export default {
  name: 'App',
  components: {headerCatalog, authPage},
  computed: {
    ...mapGetters(['token']),
    showLogin () {
      return this.$route.query.login && !this.token
    }
  },
  created () {
    this.initializeToken()
  },
  methods: {
    ...mapActions(['initializeToken'])
  }
}
</script>

<style lang="sass">
  @import './assets/style/bootstrap-grid'
  @import './assets/style/reset'
  @import './assets/style/default'
  #app
    min-height: 100%
    background: $bg
    &.auth
      overflow: hidden
      height: 100%
  main
    padding-top: 50px
</style>
