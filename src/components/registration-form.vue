<template>
  <div class='registration-form'>
    <error-message :text='Form.errors.get("form")' v-if='Form.errors.has("form")'/>
    <custom-input :label='"Ваш логин"' :value='Form.username' @input='handleLogin' :error='Form.errors.get("username")' />
    <custom-input :label='"Ваш пароль"' :type='"password"' :value='Form.password' @input='handlePassword' :error='Form.errors.get("password")'/>
    <custom-input :label='"Повторите пароль"' :type='"password"' :value='Form.passwordConfirm' @input='handlePasswordConfirm' :error='Form.errors.get("passwordConfirm")'/>
    <btn-primary :text='"Регистрация"' @click='submit' :loading='loading'/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import btnPrimary from './buttons/btn-primary'
import customInput from './custom-input'
import errorMessage from './error-message'
import Form from '../tools/Form'
export default {
  name: 'registration-form',
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
        },
        passwordConfirm: {
          confirm: {
            field: 'password',
            errorMsg: 'Пароли не совпадают'
          }
        }
      }),
      loading: false
    }
  },
  methods: {
    ...mapActions(['registration']),
    handleLogin (v) {
      this.Form.errors.remove('username')
      this.Form.username = v
    },
    handlePassword (v) {
      this.Form.errors.remove('password')
      this.Form.password = v
    },
    handlePasswordConfirm (v) {
      this.Form.errors.remove('passwordConfirm')
      this.Form.passwordConfirm = v
    },
    submit () {
      let request = this.Form.submit(this.registration)
      if (!request) return
      this.loading = true
      request.then(data => {
        this.loading = false
        this.Form.reset()
        this.$router.replace({query: ''})
      }).catch(e => {
        this.Form.errors.setOne('form', 'Ошибка на сервере')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.registration-form
  text-align: center
</style>
