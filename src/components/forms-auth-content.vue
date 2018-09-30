<template>
  <div class='form__content'>
    <error-message :text='Form.errors.get("form")' v-if='Form.errors.has("form")'/>
    <custom-input :label='"Ваш логин"' :value='Form.username' @input='handleLogin' :error='Form.errors.get("username")' @submit='submit'/>
    <custom-input :label='"Ваш пароль"' :type='"password"' :value='Form.password' @input='handlePassword' :error='Form.errors.get("password")' @submit='submit'/>
    <custom-input :label='"Повторите пароль"' :type='"password"' :value='Form.passwordConfirm' @input='handlePasswordConfirm' :error='Form.errors.get("passwordConfirm")' v-if='strategy === "registration"' @submit='submit'/>
    <btn-primary :text='btnText' @click='submit' :loading='loading'/>
    <div class="form__changeDirection">или <span @click='changeDirection'>{{!this.reverse ? 'регистрация' : 'авторизация'}}</span></div>
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
  props: ['reverse'],
  computed: {
    strategy () {
      return this.reverse ? 'registration' : 'login'
    },
    btnText () {
      return this.reverse ? 'Регистрация' : 'Авторизация'
    }
  },
  watch: {
    reverse () {
      this.Form.reset()
    }
  },
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
          },
          ignore: !this.reverse
        }
      }),
      loading: false
    }
  },
  methods: {
    ...mapActions(['registration', 'login']),
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
      let request = this.Form.submit(this[this.strategy])
      if (!request) return
      this.loading = true
      request.then(data => {
        this.Form.reset()
        this.$router.replace({query: ''})
      }).catch(e => {
        this.Form.errors.setOne('form', 'Неверные данные')
      }).then(() => {
        this.loading = false
      })
    },
    changeDirection () {
      this.$emit('changeDirection')
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  &__content
    text-align: center
  &__changeDirection
    span
      text-decoration: underline
@media screen and (min-width: 768px)
  .form__changeDirection
    display: none
</style>
