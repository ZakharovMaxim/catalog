<template>
  <div class="auth-popup" @click='close'>
    <div class="auth-form">
      <div class="row no-gutters align-items-center" :class='{reverse}' @click='close'>
        <div class="col-md-6 forms_col">
          <forms-auth :reverse='reverse' @changeDirection='changeDirection' />
        </div>
        <div class="col-md-6 info_col">
          <form-info @changeDirection='changeDirection' :reverse='reverse'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formInfo from './form-info'
import formsAuth from './forms-auth'
export default {
  name: 'auth-page',
  components: {formsAuth, formInfo},
  data () {
    return {
      reverse: false
    }
  },
  methods: {
    changeDirection () {
      this.reverse = !this.reverse
    },
    close (e) {
      if (e.target === e.currentTarget) this.$router.replace({query: ''})
    }
  }
}
</script>

<style lang="sass" scoped>
.auth
  &-popup
    width: 100%
    height: 100%
    position: fixed
    background: rgba(0, 0, 0, .5)
    display: flex
    align-items: center
    justify-content: center
    z-index: 2
  &-form
    max-width: 640px
.forms_col, .info_col
  transition: all .2s
.reverse
  .forms_col
    transform: translateX(100%)
  .info_col
    transform: translateX(-100%)
@media screen and (min-width: 768px) and (max-height: 500px)
  html
    min-height: 500px
  .auth
   &-popup
    align-items: flex-start
    overflow: auto
@media screen and (max-width: 768px)
  .reverse
    .forms_col
      transform: translateX(0)
    .info_col
      transform: translateX(0)
@media screen and (max-width: 768px) and (max-height: 450px)
  html
    min-height: 450px
  .auth
    &-popup
      align-items: flex-start
      overflow: auto
</style>
