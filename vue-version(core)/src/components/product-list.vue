<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12" v-for='(product, i) in filteredProducts' :key='i'>
          <product-card :product='product' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import productCard from './product-card'
export default {
  name: 'product-list',
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.setProducts().then(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions(['setProducts'])
  },
  computed: {
    ...mapGetters(['filteredProducts'])
  },
  components: {productCard}
}
</script>

<style scoped lang='sass'>
</style>
