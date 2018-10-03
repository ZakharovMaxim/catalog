<template>
  <div class="sorts__list">
    <ul>
      <li
        v-for='(s, i) in list'
        :key='i'
        :class='{"active": i === sort}'
        @click='setSort(i)'
        >
          {{s.text}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'sort-list',
  methods: {
    setSort (sort) {
      this.$store.dispatch('setSort', sort)
    }
  },
  computed: {
    ...mapGetters(['sort'])
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.sorts__list
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
