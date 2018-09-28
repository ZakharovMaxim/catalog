<template>
  <div class='login-form'>
    <custom-input :label='"Ваш логин"' />
    <custom-input :label='"Ваш пароль"' :type='"password"'/>
    <btn-primary :text='"Войти"' />
  </div>
</template>

<script>
import btnPrimary from './buttons/btn-primary'
import customInput from './custom-input'
export default {
  name: 'login-form',
  components: {btnPrimary, customInput}
}
</script>

<style lang="sass" scoped>
.login-form
  text-align: center
</style>
