import { SET_PRODUCTS, SET_SORT, SET_PRODUCT, SET_TOKEN, NEW_REVIEW } from '../TYPES'
import axiosConfig from '../../configs/axiosConfig'

export default {
  [SET_PRODUCTS] (state, payload) {
    console.dir(axiosConfig)
    payload.forEach(p => {
      // api doesnt return absolute path to img :(
      if (!~p.img.indexOf('http')) p.img = axiosConfig.defaults.static + p.img
    })
    state.products = payload
  },
  /**
   *
   * @param {String} sort
   */
  [SET_SORT] (state, sort) {
    state.sort = sort
  },
  [SET_PRODUCT] (state, product) {
    if (!~product.img.indexOf('http')) product.img = axiosConfig.defaults.static + product.img
    state.product = product
  },
  /**
   * set token and login to localstorage and store
   * if payload is equal false set data as empty strings otherwise use payload data
   * @param {Object | String} payload
   */
  [SET_TOKEN] (state, payload) {
    const token = payload.token || ''
    const login = payload.login || ''
    state.token = token
    localStorage.setItem('token', token)
    state.login = login
    localStorage.setItem('login', login)
  },
  [NEW_REVIEW] (state, payload) {
    if (!state.product) return
    state.product.reviews.push(payload)
  }
}
