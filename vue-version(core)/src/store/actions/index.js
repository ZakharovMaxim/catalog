import axios from '../../configs/axiosConfig'

export default {
  setProducts ({commit}) {
    return axios.get('/products').then((data) => {
      console.log(data)
      commit('setProducts', data.data)
    }).catch(e => {
      console.log(e)
    })
  },
  setFilter ({commit}, filter) {
    commit('setFilter', filter)
  }
}
