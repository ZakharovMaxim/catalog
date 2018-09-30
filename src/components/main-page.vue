<template>
  <div class='container'>
    <product-list />
  </div>
</template>

<script>
import productList from './product-list'
export default {
  name: 'main-page',
  components: {productList}
}
</script>
