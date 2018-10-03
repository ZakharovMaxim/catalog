<template>
  <div class="col-md-6 review">
    <div class="card">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="review__poster">
            <img :src="userLogo" alt="">
          </div>
          <div class="d-flex flex-column justify-content-center">
            <div class="review__name">{{review.created_by.username}}</div>
            <div class="review__rate">
              <review-stars :stars='review.rate' />
            </div>
          </div>
        </div>
        <div class="review__date">{{review.created_at | formatDate}}</div>
      </div>
      <div class="review__text">
        {{review.text}}
      </div>
    </div>
  </div>
</template>

<script>
import userLogo from '@/assets/green_small_mouth-512.png'
import reviewStars from './review-stars'
import {formatDate} from '../tools/moment'
export default {
  name: 'review',
  data () {
    return {
      userLogo
    }
  },
  filters: {
    formatDate
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  components: {reviewStars}
}
</script>

<style lang="sass" scoped>
.review
  margin-bottom: 10px
  &__poster
    width: 50px
    height: 50px
    overflow: hidden
    margin-right: 5px
    img
      width: 100%
      height: 100%
  &__date
    font-size: 10px
  &__name
    font-size: 18px
  &__text
    margin-top: 10px
</style>
