import strategies from '../../strategies/sortStrategies'
export default {
  products (state) {
    return state.products
  },
  filter (state) {
    return state.filter
  },
  filteredProducts (state) {
    const filter = state.filter
    const strategy = strategies[filter]
    if (!filter || !strategy) return state.products

    return state.products.sort(strategy.callback)
  }
}
