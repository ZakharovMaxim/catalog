<template>
  <img :src="logo" alt="">
</template>

<script>
import logo from '@/assets/logo.svg'
export default {
  name: 'logo',
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="sass" scoped>
img
  max-width: 100%
</style>
