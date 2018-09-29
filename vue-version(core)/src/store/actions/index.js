import axios from '../../configs/axiosConfig'

export default {
  setProducts ({commit}) {
    return axios.get('/products').then((data) => {
      commit('setProducts', data.data)
    }).catch(e => {
      console.log(e)
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
    }).catch(e => {
      console.log(e)
    })
  },
  setFilter ({commit}, filter) {
    commit('setFilter', filter)
  },
  login ({commit}, payload) {
    return axios.post('/login/', payload)
      .then(data => {
        // if (!data.data.success) Promise.reject()
        commit('setToken', data.data.token)
      })
  },
  registration ({commit}, payload) {
    return axios.post('/register/', payload)
      .then(data => {
        // if (!data.data.success) Promise.reject()
        commit('setToken', data.data.token)
      })
  },
  initializeToken ({commit}) {
    const token = localStorage.getItem('token')
    commit('setToken', token)
  },
  logout ({commit}) {
    commit('setToken', null)
  }
}
