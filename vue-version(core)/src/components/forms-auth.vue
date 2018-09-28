<template>
<div class="form d-flex flex-column">
  <logo />
  <div class="form__title">{{title}}</div>
  <keep-alive>
    <login-form v-if='!reverse' />
    <registration-form v-else />
  </keep-alive>
</div>
</template>

<script>
import logo from './logo'
import loginForm from './login-form'
import registrationForm from './registration-form'
export default {
  name: 'form-auth',
  components: {logo, loginForm, registrationForm},
  data () {
    return {
      titles: ['Войдите что бы продолжить:', 'Вступите в клуб']
    }
  },
  props: ['reverse'],
  computed: {
    title () {
      return this.titles[+!!this.reverse]
    }
  }
}
</script>

<style lang="sass" scoped>
  .form
    padding: 20px 30px
    background: #fff
    &__title
      font-weight: 500
      font-size: 16px
      color: #000
      margin: 30px 0
</style>
