export default {
  setProducts (state, payload) {
    state.products = payload
  },
  setFilter (state, filter) {
    state.filter = filter
  },
  setProduct (state, product) {
    state.product = product
  },
  setToken (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  }
}
