<template>
<div class="card d-flex align-items-center justify-content-center rating">
  <div class="rating-average d-flex flex-column align-items-center">
    <div class="rating-average__content d-flex align-items-center justify-content-center flex-column">
      <span class='rating-average__total'>
        {{average}}
      </span>
      <span>
        из 5
      </span>
    </div>
    <review-stars :stars='average' />
  </div>
  <div class="rating-items">
    <table>
    <tr class='rating-item' v-for='(rate, key) in rating.items' :key='key'>
      <td class="rating-item__title">{{key | capitalize}}</td>
      <td class="rating-item__percent">
        <div class="fill" :style='{width: percent(rate) + "%"}'></div>
      </td>
      <td class="rating-item__total">
        {{rate}}
      </td>
    </tr>
    </table>
  </div>
</div>
</template>

<script>
import reviewStars from './review-stars'
export default {
  name: 'product-rating',
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  filters: {
    capitalize (v) {
      return v[0].toUpperCase() + v.slice(1)
    }
  },
  methods: {
    /**
     * return the percentage of ratings
     * @param {Number} count count of same rates
     */
    percent (count) {
      return count / this.rating.totalCount * 100 || 0
    }
  },
  computed: {
    /**
     * return average rate
     */
    average () {
      return +(
        this.rating.totalRating / this.rating.totalCount
      ).toFixed(1) || 0
    }
  },
  components: {reviewStars}
}
</script>

<style lang="sass" scoped>
.rating-average
  margin-right: 10px
  &__content
    background: $primary-color
    padding: 10px 15px
    font-size: 14px
    color: #fff
    border-radius: 5px
  &__total
    font-size: 26px
    font-weight: bold
    margin-bottom: 5px
    display: inline-block
.rating-items
  width: 80%
  table
    width: 100%
    border-collapse: separate;
    border-spacing: 8px;
    td
      vertical-align: middle
.rating-item
  &__title
  &__percent
    width: 60%
    height: 5px
    background: #eee
    border-radius: 10px
    .fill
      height: 100%
      background: $primary-color
      border-radius: 10px
@media screen and (max-width: 500px)
  .rating
    flex-wrap: wrap
</style>
