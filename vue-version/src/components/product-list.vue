<template>
  <loading-component :callback='setProducts'>
    <div class="products">
      <sorts />
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12" v-for='(product, i) in sortedProducts' :key='i'>
          <product-card :product='product' />
        </div>
      </div>
  </div>
  </loading-component>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import productCard from './product-card'
import loadingComponent from './loading-component'
import sorts from './sorts'
export default {
  name: 'product-list',
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['setProducts'])
  },
  computed: {
    ...mapGetters(['sortedProducts'])
  },
  components: {productCard, loadingComponent, sorts}
}
</script>
