<template>
  <button @click='$emit("click")'>
    <span>{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'btn-secondary',
  props: {
    text: {
      default: 'Кнопка'
    }
  }
}
</script>

<style lang="sass" scoped>
button
  font-size: 17px
  font-weight: bold
  background: transparent
  border: 3px solid #fff
  padding: 17px 20px
  border-radius: 90px
  color: #fff
  cursor: pointer
  transition: color .2s, background .2s
  width: 100%
  text-align: center
  outline: none
  &:hover
    color: $text-color
    background: #fff
</style>
