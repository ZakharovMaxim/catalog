<template>
  <loading-component :callback='setProducts'>
    <div class="products">
      <filters />
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12" v-for='(product, i) in filteredProducts' :key='i'>
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
import filters from './filters'
export default {
  name: 'product-list',
  data () {
    return {
      loading: true
    }
  },
  created () {
  },
  methods: {
    ...mapActions(['setProducts'])
  },
  computed: {
    ...mapGetters(['filteredProducts'])
  },
  components: {productCard, loadingComponent, filters}
}
</script>
