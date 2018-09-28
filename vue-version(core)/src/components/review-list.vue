<template>
<div class="row">
  <review v-for='(review, i) in reviews' :key='i' :review='review'/>
</div>
</template>

<script>
import review from './review'
export default {
  name: 'review-list',
  props: {
    reviews: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {review}
}
</script>

<style lang="sass" scoped>

</style>
