<template>
  <div class='error'>{{text}}</div>
</template>

<script>
export default {
  name: 'error',
  props: {
    text: {
      type: String,
      default: 'Ошибка'
    }
  }
}
</script>

<style lang="sass" scoped>
.error
  font-size: 26px
  color: $primary-color
  width: 100%
  text-align: center
</style>
