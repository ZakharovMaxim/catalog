<template>
  <div class="loader">
    <svg :width='2 * r' :height='2 * r' viewbox='0 0 50 50' :stroke-dasharray='l' :stroke-dashoffset='50' :stroke-width='stroke'>
      <circle :cx='r' :cy='r' :r='r - stroke' />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'loading-component',
  data () {
    return {
      r: 25,
      stroke: 5
    }
  },
  computed: {
    /**
     * calculate circle length
     */
    l () {
      return Math.PI * 2 * (this.r - this.stroke / 2)
    }
  }
}
</script>

<style lang="sass" scoped>
  .loader
    text-align: center
    width: 100%
    svg
      circle
        fill: transparent
        stroke: $primary-color
        transform-origin: 50% 50%
        animation: spin 1s infinite linear
  @keyframes spin
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
