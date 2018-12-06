import strategies from '../../strategies/sortStrategies'
export default {
  products (state) {
    return state.products
  },
  sort (state) {
    return state.sort
  },
  /**
   * get all strategies from file and get current sort from store
   * @returns {Array} sortedProducts
   */
  sortedProducts (state) {
    const sort = state.sort
    const strategy = strategies[sort]
    if (!sort || !strategy) return state.products
    return state.products.slice().sort(strategy.callback)
  },
  product (state) {
    return state.product
  },
  /**
   * iterates over the array and returns an object with statistical rating indicators
   */
  productRating (state) {
    const product = state.product
    const result = {
      items: {
        perfect: 0,
        good: 0,
        average: 0,
        bad: 0,
        terrible: 0
      },
      totalCount: 0,
      totalRating: 0
    }
    if (!product.reviews) return result

    product.reviews.forEach(r => {
      switch (r.rate) {
        case 1: result.items['terrible']++
          break
        case 2: result.items['bad']++
          break
        case 3: result.items['average']++
          break
        case 4: result.items['good']++
          break
        case 5: result.items['perfect']++
          break
      }
      if (r.rate) {
        result.totalCount++
        result.totalRating += r.rate
      }
    })
    return result
  },
  token (state) {
    return state.token
  },
  login (state) {
    return state.login
  }
}
