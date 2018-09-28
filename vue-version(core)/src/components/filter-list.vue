<template>
  <div class="filters__list">
    <ul>
      <li
        v-for='(f, i) in filters'
        :key='i'
        :class='{"active": i === filter}'
        @click='setFilter(i)'
        >
          {{f.text}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import filters from '../strategies/sortStrategies'
export default {
  name: 'filter-list',
  data () {
    return {
      filters
    }
  },
  methods: {
    setFilter (filter) {
      this.$store.dispatch('setFilter', filter)
    }
  },
  computed: {
    ...mapGetters(['filter'])
  }
}
</script>

<style lang="sass" scoped>
.filters__list
  ul
    display: flex
    li
      color: $gray
      margin-left: 30px
      position: relative
      cursor: pointer
      &.active
        color: $primary-color
        cursor: default
      &:not(:first-child):before
        position: absolute
        top: 0
        left: -15px
        height: 100%
        width: 1px
        background: $gray
        content: ''
</style>
