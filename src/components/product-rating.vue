<template>
<div class="card d-flex align-items-center justify-content-center rating">
  <div class="rating__average d-flex flex-column align-items-center">
    <div class="rating__average-content d-flex align-items-center justify-content-center flex-column">
      <span class='rating__average-total'>
        {{average}}
      </span>
      <span>
        из 5
      </span>
    </div>
    <review-stars :stars='average' />
  </div>
  <div class="rating__items">
    <table>
    <tr class='rating__item' v-for='(rate, key) in rating.items' :key='key'>
      <td class="rating__item-title">{{key | capitalize}}</td>
      <td class="rating__item-percent">
        <div class="fill" :style='{width: percent(rate) + "%"}'></div>
      </td>
      <td class="rating__item-total">
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
    percent (count) {
      return count / this.rating.totalCount * 100 || 0
    }
  },
  computed: {
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
.rating
    &__average
      margin-right: 10px
      &-content
        background: $primary-color
        padding: 10px 15px
        font-size: 14px
        color: #fff
        border-radius: 5px
      &-total
        font-size: 26px
        font-weight: bold
        margin-bottom: 5px
        display: inline-block
    &__items
      width: 80%
      table
        width: 100%
        border-collapse: separate;
        border-spacing: 8px;
        td
          vertical-align: middle
    &__item
      &-title
      &-percent
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
