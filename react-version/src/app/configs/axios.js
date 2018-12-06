import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://smktesting.herokuapp.com/api/',
  static: 'http://smktesting.herokuapp.com/static/'
})

export default instance
