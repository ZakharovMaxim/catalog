<template>
  <div class="filters row">
    <div class="col d-flex">
      <div class="filters__title">
        <span>Сортировать: </span>
      </div>
      <filter-list />
    </div>
  </div>
</template>

<script>
import filterList from './filter-list'
export default {
  name: 'filters',
  components: {filterList}
}
</script>

<style lang="sass" scoped>
.filters
  font-size: 16px
  margin-bottom: 25px
  &__title
    font-weight: bold
</style>
