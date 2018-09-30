<template>
<div class="form d-flex flex-column">
  <logo />
  <div class="form__title">{{title}}</div>
  <forms-auth-content :reverse='reverse' @changeDirection='changeDirection' />
</div>
</template>

<script>
import logo from './logo'
import formsAuthContent from './forms-auth-content'
export default {
  name: 'form-auth',
  components: {logo, formsAuthContent},
  data () {
    return {
      titles: ['Войдите что бы продолжить:', 'Вступите в клуб']
    }
  },
  props: ['reverse'],
  computed: {
    title () {
      return this.titles[+!!this.reverse]
    }
  },
  methods: {
    changeDirection () {
      this.$emit('changeDirection')
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  padding: 20px 30px
  background: #fff
  &__title
    font-weight: 500
    font-size: 16px
    color: #000
    margin: 30px 0
</style>
