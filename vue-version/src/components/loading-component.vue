<template>
    <div class='loading-component'>
      <loader v-if='loading && !error'/>
      <slot v-else-if='!error' />
      <error v-else :text='error'/>
    </div>
</template>

<script>
import loader from './loader'
import error from './error'
export default {
  name: 'loading-component',
  data () {
    return {
      loading: true,
      error: null
    }
  },
  props: {
    callback: {
      type: Function,
      required: true
    },
    props: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  /**
   * component take callback whick returns promise, if promise resolved, show content otherwise show error,
   * while promise is pending show loading component
   */
  created () {
    this.callback().then(() => {
      this.loading = false
      this.error = null
    }).catch(e => {
      this.loading = false
      this.error = e.message || 'Что-то пошло не так :('
    })
  },
  components: {loader, error}
}
</script>

<style lang="sass" scoped>
.loading-component
  width: 100%
</style>
