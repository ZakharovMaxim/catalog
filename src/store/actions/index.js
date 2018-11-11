import axios from '../../configs/axiosConfig'

export default {
  /**
   * fetch product list from api
   * @returns {Promise}
   */
  setProducts ({commit}) {
    return axios.get('/products').then((data) => {
      commit('setProducts', data.data)
    })
  },
  /**
   * fetch product from api by id
   * @param {Number} id product identifier
   * @returns {Promise}
   */
  setProduct ({commit}, id) {
    let products = []
    return axios.get('/products').then((data) => {
      products = [].concat(data.data)
      return axios.get('/reviews/' + id)
    }).then(data => {
      const product = products.find(p => p.id === +id)
      if (!product) throw new Error('Продукт не найден')
      product.reviews = data.data
      commit('setProduct', product)
    })
  },
  /**
   * set sort name
   * @param {String} sort sort name
   */
  setSort ({commit}, sort) {
    commit('setSort', sort)
  },
  /**
   * set login request to api
   * @param {Object} payload object whick contains login and password fields
   * @returns {Promise}
   */
  login ({commit}, payload) {
    return axios.post('/login/', payload)
      .then(data => {
        if (!data.data.success) {
          throw new Error('Неверные данные')
        }
        commit('setToken', {
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
  registration ({commit}, payload) {
    return axios.post('/register/', payload)
      .then(data => {
        if (!data.data.success) {
          throw new Error(data.data.message)
        }
        commit('setToken', {
          token: data.data.token,
          login: payload.username
        })
      })
  },
  /**
   * get token and login from localstorage
   */
  initializeToken ({commit}) {
    const token = localStorage.getItem('token')
    const login = localStorage.getItem('login')
    commit('setToken', {
      token,
      login
    })
  },
  /**
   * remove token and login from localstorage and store
   */
  logout ({commit}) {
    commit('setToken', '')
  },
  /**
   * send post request to api for create new review
   * @param {Object} payload object whick contains rate and text fields
   * @return {Promise}
   */
  newReview (vx, payload) {
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
        vx.commit('newReview', data)
      })
  }
}
