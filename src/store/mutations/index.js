export default {
  setProducts (state, payload) {
    payload.forEach(p => {
      // api doesnt return absolute path to img :(
      if (!~p.img.indexOf('http')) p.img = `http://smktesting.herokuapp.com/static/${p.img}`
    })
    state.products = payload
  },
  /**
   *
   * @param {String} sort
   */
  setSort (state, sort) {
    state.sort = sort
  },
  setProduct (state, product) {
    if (!~product.img.indexOf('http')) product.img = `http://smktesting.herokuapp.com/static/${product.img}`
    state.product = product
  },
  /**
   * set token and login to localstorage and store
   * if payload is equal false set data as empty strings otherwise use payload data
   * @param {Object | String} payload
   */
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
