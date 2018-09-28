<template>
  <div class='container'>
    <filters />
    <product-list />
  </div>
</template>

<script>
import productList from './product-list'
import filters from './filters'
export default {
  name: 'main-page',
  components: {productList, filters}
}
</script>
