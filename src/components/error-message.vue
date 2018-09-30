<template>
  <div class="error">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'error-message',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.error
  color: $primary-color
  font-size: 10px
</style>
