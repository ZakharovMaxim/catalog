import axios from '../../configs/axiosConfig'
import { SET_PRODUCTS, SET_SORT, SET_PRODUCT, SET_TOKEN, NEW_REVIEW, LOGIN, LOGOUT, REGISTRATION, INITIALIZE_TOKEN } from '../TYPES'
export default {
  /**
   * fetch product list from api
   * @returns {Promise}
   */
  [SET_PRODUCTS] ({commit}) {
    return axios.get('/products').then((data) => {
      commit(SET_PRODUCTS, data.data)
    })
  },
  /**
   * fetch product from api by id
   * @param {Number} id product identifier
   * @returns {Promise}
   */
  [SET_PRODUCT] ({commit}, id) {
    let products = []
    return axios.get('/products').then((data) => {
      products = [].concat(data.data)
      return axios.get('/reviews/' + id)
    }).then(data => {
      const product = products.find(p => p.id === +id)
      if (!product) throw new Error('Продукт не найден')
      product.reviews = data.data
      commit(SET_PRODUCT, product)
    })
  },
  /**
   * set sort name
   * @param {String} sort sort name
   */
  [SET_SORT] ({commit}, sort) {
    console.log(sort)
    commit(SET_SORT, sort)
  },
  /**
   * set login request to api
   * @param {Object} payload object whick contains login and password fields
   * @returns {Promise}
   */
  [LOGIN] ({commit}, payload) {
    return axios.post('/login/', payload)
      .then(data => {
        if (!data.data.success) {
          throw new Error('Неверные данные')
        }
        commit(SET_TOKEN, {
          token: data.data.token || '',
          login: (data.data.token && payload.username) || ''
        })
      })
  },
  /**
   * set registration request to api
   * @param {Object} payload object whick contains login and password fields
   * @returns {Promise}
   */
  [REGISTRATION] ({commit}, payload) {
    return axios.post('/register/', payload)
      .then(data => {
        if (!data.data.success) {
          throw new Error(data.data.message)
        }
        commit(SET_TOKEN, {
          token: data.data.token,
          login: payload.username
        })
      })
  },
  /**
   * get token and login from localstorage
   */
  [INITIALIZE_TOKEN] ({commit}) {
    const token = localStorage.getItem('token')
    const login = localStorage.getItem('login')
    commit(SET_TOKEN, {
      token,
      login
    })
  },
  /**
   * remove token and login from localstorage and store
   */
  [LOGOUT] ({commit}) {
    commit(SET_TOKEN, '')
  },
  /**
   * send post request to api for create new review
   * @param {Object} payload object whick contains rate and text fields
   * @return {Promise}
   */
  [NEW_REVIEW] (vx, payload) {
    const token = vx.getters.token
    const login = vx.getters.login
    return axios.post('/reviews/' + payload.product, payload, {
      headers: {Authorization: `Token ${token}`}
    })
      .then(response => {
        if (!response.data.success) {
          throw new Error({
            status: 422,
            message: response.data.message
          })
        }
        const data = {
          id: response.data.review_id,
          product: payload.product,
          created_by: {
            id: 1,
            username: login
          },
          created_at: new Date(),
          rate: payload.rate,
          text: payload.text
        }
        vx.commit(NEW_REVIEW, data)
      })
  }
}
