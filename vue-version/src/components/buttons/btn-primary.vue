<template>
  <button @click='$emit("click")' :class='{loading}' :disabled='loading'>
    <span>{{text}}</span>
    <span class='icon'>
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.97513 5.43767C5.78988 5.03719 5.6875 4.58007 5.6875 4.07407C5.6875 3.56807 5.78988 3.06004 5.97513 2.58337C6.15997 2.1063 6.42769 1.66019 6.75878 1.27763C7.08947 0.895482 7.48353 0.575667 7.92066 0.352407C8.35819 0.127926 8.83919 0 9.34375 0C9.84831 0 10.3293 0.102667 10.7668 0.288037C11.2044 0.473815 11.598 0.742296 11.9287 1.07393C12.259 1.40556 12.5275 1.80074 12.7124 2.23952C12.898 2.67789 13 3.16067 13 3.66667C13 4.17267 12.8976 4.65544 12.7124 5.09381C12.5275 5.53259 12.2598 5.92778 11.9287 6.25941C11.5984 6.59104 6.93753 10.8142 6.5 11C6.06247 10.8142 1.40156 6.59104 1.07087 6.25941C0.740187 5.92778 0.472469 5.53259 0.287219 5.09381C0.102375 4.65544 0 4.17267 0 3.66667C0 3.16067 0.102375 2.67789 0.287219 2.23952C0.472469 1.80074 0.739781 1.40556 1.07087 1.07393C1.40156 0.742296 1.79563 0.473815 2.23316 0.288037C2.67028 0.102667 3.15128 0 3.65625 0C4.16122 0 4.64222 0.127926 5.07934 0.351593C5.51688 0.575667 5.91053 0.895074 6.24163 1.27722C6.57231 1.65978 6.84003 2.10589 7.02528 2.58296C7.21012 3.06004 7.3125 3.56807 7.3125 4.07407C7.3125 4.58007 7.21012 5.03719 7.02528 5.43767C6.84003 5.83815 6.57312 6.18241 6.24163 6.46352" fill="white"/>
      </svg>
    </span>
  </button>
</template>
<script>
export default {
  name: 'btn-primary',
  props: {
    text: {
      default: 'Кнопка'
    },
    loading: Boolean
  }
}
</script>

<style lang="sass" scoped>
button
  font-size: 15px
  font-weight: bold
  background: $primary-color
  border: 0
  padding: 7px 50px
  position: relative
  border-radius: 90px
  color: #fff
  cursor: pointer
  text-align: center
  max-width: 100%
  &.loading
    background: darken($primary-color, 10%)
  span.icon
    position: absolute
    top: 50%
    right: 10px
    transform: translateY(-50%)
</style>
