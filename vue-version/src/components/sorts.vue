<template>
  <div class="sorts row">
    <div class="col d-flex">
      <div class="sorts__title">
        <span>Сортировать: </span>
      </div>
      <sort-list :list='sortStrategies' />
    </div>
  </div>
</template>

<script>
import sortList from './sort-list'
import sortStrategies from '../strategies/sortStrategies'
export default {
  name: 'sorts',
  data () {
    return {
      sortStrategies
    }
  },
  components: {sortList}
}
</script>

<style lang="sass" scoped>
.sorts
  font-size: 16px
  margin-bottom: 25px
  &__title
    font-weight: bold
</style>
