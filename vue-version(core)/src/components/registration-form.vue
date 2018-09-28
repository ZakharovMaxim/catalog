<template>
  <div>
    <custom-input :label='"Ваш логин"' />
    <custom-input :label='"Ваш пароль"' :type='"password"'/>
    <custom-input :label='"Повторите пароль"' :type='"password"'/>
    <btn-primary :text='"Регистрация"' />
  </div>
</template>

<script>
import btnPrimary from './buttons/btn-primary'
import customInput from './custom-input'
export default {
  name: 'registration-form',
  components: {btnPrimary, customInput}
}
</script>

<style lang="sass" scoped>

</style>
