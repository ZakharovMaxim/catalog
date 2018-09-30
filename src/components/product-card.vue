<template>
  <div class="product">
      <div class="product__image"><img :src="product.img" :alt="product.title"></div>
      <div class="product__title"><router-link :to='"/product/" + product.id'>{{product.title}}</router-link></div>
      <div class="product__action">
        <router-link :to='"/product/" + product.id'><btn-primary :text='"Оценить"'/></router-link>
      </div>
    </div>
</template>

<script>
import btnPrimary from './buttons/btn-primary'
export default {
  name: 'product-card',
  components: {btnPrimary},
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    link () {
      this.$router.push('/product/' + this.product.id)
    }
  }
}
</script>

<style lang="sass" scoped>
  .product
    background: #fff
    padding-bottom: 30px
    margin-bottom: 30px
    &__image
      width: 100%
      padding-top: 100%
      position: relative
      img
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
        height: 100%
        max-width: 100%
    &__title
      text-align: center
      margin: 10px 0 30px 0
      a
        text-decoration: none
        color: $text-color
        font-size: 13px
        font-weight: 500
    &__action
      text-align: center
</style>
