<template>
  <div class="container">
    <div class="row">
      <div class="product-page__content">
        <div class="product-page__title">
          {{product.title}}
        </div>
        <div class="row align-items-strech rating_row no-gutters">
          <div class="col-md-6">
            <div class="card product-page__image">
              <img src="../assets/default_image.png" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <product-rating :rating='productRating' />
          </div>
        </div>
        <review-list :reviews='product.reviews'/>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import reviewList from './review-list'
import productRating from './product-rating'
export default {
  name: 'product-page',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['productRating', 'product'])
  },
  created () {
    this.$store.dispatch('setProduct', this.$route.params.id).then(d => {
      this.loading = false
    })
  },
  components: {reviewList, productRating}
}
</script>

<style lang='sass'>
  .card
    background: #fff
    height: 100%
    padding: 10px
  .rating_row
    margin-bottom: 30px
  .product-page
    &__content
      max-width: 800px
      margin: 0 auto
    &__image
      img
        max-width: 100%
    &__title
      font-size: 16px
      color: $text-color
      text-align: center
      margin-bottom: 10px
      text-transform: uppercase
</style>
