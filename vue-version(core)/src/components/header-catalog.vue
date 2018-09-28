<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-4 offset-md-4 logo">
          <router-link to='/'>
            <img :src="logo" alt="">
          </router-link>
        </div>
        <div class="col-md-auto col-sm-12 justify-content-end d-flex">
          <auth-trigger />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import logo from '@/assets/logo.svg'
import authTrigger from './auth-trigger'
export default {
  name: 'header-catalog',
  data () {
    return {
      logo
    }
  },
  components: {authTrigger}
}
</script>

<style lang="sass" scoped>
header
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05)
  padding: 30px 0
.logo
  text-align: center
</style>
