export default {
  setProducts (state, payload) {
    payload.forEach(p => {
      if (!~p.img.indexOf('http')) p.img = `http://smktesting.herokuapp.com/static/${p.img}`
    })
    state.products = payload
  },
  setFilter (state, filter) {
    state.filter = filter
  },
  setProduct (state, product) {
    if (!~product.img.indexOf('http')) product.img = `http://smktesting.herokuapp.com/static/${product.img}`
    state.product = product
  },
  setToken (state, payload) {
    const token = payload.token || ''
    const login = payload.login || ''
    state.token = token
    localStorage.setItem('token', token)
    state.login = login
    localStorage.setItem('login', login)
  },
  newReview (state, payload) {
    if (!state.product) return
    state.product.reviews.push(payload)
  }
}
