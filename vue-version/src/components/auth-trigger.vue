<template>
  <div class="auth-trigger d-flex align-items-center" @click='triggered'>
    <img :src="account" alt="">
    <span>{{text}}</span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import account from '@/assets/account-btn.svg'
export default {
  name: 'auth-trigger',
  data () {
    return {
      account
    }
  },
  computed: {
    ...mapGetters(['token']),
    text () {
      return this.token ? 'Выйти' : 'Войти'
    }
  },
  methods: {
    ...mapActions(['logout']),
    /**
     * open login page or trigger logout action
     */
    triggered () {
      if (this.token) this.logout()
      else this.$router.replace({query: {'login': true}})
    }
  }
}
</script>

<style lang="sass" scoped>
.auth-trigger
  cursor: pointer
  img
    margin-right: 10px
  a
    text-decoration: none
    color: inherit
    font-weight: bold
</style>
