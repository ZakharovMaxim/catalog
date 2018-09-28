<template>
  <div class="auth-trigger d-flex align-items-center" @click='open'>
    <img :src="account" alt="">
    <span>Войти</span>
  </div>
</template>

<script>
import account from '@/assets/account-btn.svg'
export default {
  name: 'auth-trigger',
  data () {
    return {
      account
    }
  },
  methods: {
    open () {
      this.$router.replace({query: {'login': true}})
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
