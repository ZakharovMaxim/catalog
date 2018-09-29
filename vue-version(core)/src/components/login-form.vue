<template>
  <div class='login-form'>
    <error-message :text='Form.errors.get("form")' v-if='Form.errors.has("form")'/>
    <custom-input :label='"Ваш логин"' :value='Form.username' @input='handleLogin' :error='Form.errors.get("username")'/>
    <custom-input :label='"Ваш пароль"' :type='"password"' :value='Form.password' @input='handlePassword' :error='Form.errors.get("password")'/>
    <btn-primary :text='"Войти"' @click='submit' :loading='loading'/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import errorMessage from './error-message'
import btnPrimary from './buttons/btn-primary'
import customInput from './custom-input'
import Form from '../tools/Form'
export default {
  name: 'login-form',
  components: {btnPrimary, customInput, errorMessage},
  data () {
    return {
      Form: new Form({
        username: {
          required: true,
          min: 6,
          max: 25
        },
        password: {
          required: true,
          min: 6,
          max: 25
        }
      }),
      loading: false
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (v) {
      this.Form.errors.remove('username')
      this.Form.username = v
    },
    handlePassword (v) {
      this.Form.errors.remove('password')
      this.Form.password = v
    },
    submit () {
      let request = this.Form.submit(this.login)
      if (!request) return
      this.loading = true
      request.then(data => {
        this.loading = false
        this.Form.reset()
        this.$router.replace({query: ''})
      }).catch(e => {
        this.Form.errors.setOne('form', 'Неверные данные')
        this.loading = false
        console.dir(e)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.login-form
  text-align: center
</style>
