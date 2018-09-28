<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-4 offset-md-4 logo">
          <router-link to='/'>
            <logo />
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
import authTrigger from './auth-trigger'
import logo from './logo'
export default {
  name: 'header-catalog',
  components: {authTrigger, logo}
}
</script>

<style lang="sass" scoped>
header
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05)
  padding: 30px 0
  background: #fff
.logo
  text-align: center
</style>
