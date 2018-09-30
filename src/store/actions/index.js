import axios from '../../configs/axiosConfig'

export default {
  setProducts ({commit}) {
    return axios.get('/products').then((data) => {
      commit('setProducts', data.data)
    })
  },
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
  setFilter ({commit}, filter) {
    commit('setFilter', filter)
  },
  login ({commit}, payload) {
    return axios.post('/login/', payload)
      .then(data => {
        if (!data.data.success) {
          throw new Error({
            status: 422,
            message: 'Неверные данные'
          })
        }
        commit('setToken', {
          token: data.data.token || '',
          login: (data.data.token && payload.username) || ''
        })
      })
  },
  registration ({commit}, payload) {
    return axios.post('/register/', payload)
      .then(data => {
        // if (!data.data.success) Promise.reject()
        commit('setToken', {
          token: data.data.token,
          login: payload.username
        })
      })
  },
  initializeToken ({commit}) {
    const token = localStorage.getItem('token')
    const login = localStorage.getItem('login')
    commit('setToken', {
      token,
      login
    })
  },
  logout ({commit}) {
    commit('setToken', '')
  },
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
