<template>
  <div class="container">
    <div class="row">
      <loading-component :callback='callback()' :props='{id: product.id}'>
      <div class="product-page__content">
        <div class="product-page__title">
         {{product.title}}
        </div>
        <div class="row align-items-strech rating_row no-gutters">
          <div class="col-md-6">
            <div class="card d-flex flex-column">
              <div class="product-page__image">
               <img :src="product.img" alt="">
              </div>
              <div class="product-page__text">
                <div class="product-page__text-title">Описание</div>
                <p>{{product.text}}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <product-rating :rating='productRating' />
          </div>
        </div>
        <new-review v-if='token' :product_id='product.id' />
        <review-list :reviews='product.reviews' />
      </div>
      </loading-component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import reviewList from './review-list'
import productRating from './product-rating'
import loadingComponent from './loading-component'
import newReview from './new-review'
export default {
  name: 'product-page',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['productRating', 'product', 'token'])
  },
  pagetitle: 'Оцените продукт',
  methods: {
    ...mapActions(['setProduct']),
    callback () {
      return () => {
        return this.setProduct(this.$route.params.id)
      }
    }
  },
  components: {reviewList, productRating, newReview, loadingComponent}
}
</script>

<style lang='sass'>
  .card
    background: #fff
    height: 100%
    padding: 10px
  .rating_row
    margin-bottom: 30px
    width: 100%
  .product-page
    &__content
      max-width: 800px
      margin: 0 auto
      width: 100%
    &__image
      text-align: center
      img
        max-width: 100%
    &__title
      font-size: 16px
      color: $text-color
      text-align: center
      margin-bottom: 10px
      text-transform: uppercase
    &__text
      &-title
        font-size: 26px
        border-bottom: 1px solid #000
        padding-bottom: 5px
        margin-bottom: 30px
        color: #000
</style>
