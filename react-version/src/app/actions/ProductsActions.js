import axios from '../configs/axios'
import { SET_PRODUCTS, SET_PRODUCT, NEW_REVIEW } from './types'

export function setProducts() {
  return dispatch => {
    return axios.get('/products').then(response => {
      checkResponseOnError(response, response.data.message)

      response.data.forEach(product => {
        product.img = axios.defaults.static + product.img
      })

      dispatch({
        type: SET_PRODUCTS,
        payload: response.data
      })

      return response
    })
  }
}
export function setProduct(id) {
  return dispatch => {
    let product = {}
    return axios
      .get('/products')
      .then(response => {

        checkResponseOnError(response, response.data.message)

        const foundById = response.data.find(p => p.id === +id)
        if (!foundById) {
          throw new Error('Product not found')
        }

        Object.assign(product, foundById)
        return axios.get('/reviews/' + id)
      })
      .then(response => {

        checkResponseOnError(response, response.data.message)

        product.img = axios.defaults.static + product.img
        product.reviews = response.data

        dispatch({
          type: SET_PRODUCT,
          payload: product
        })
      })
  }
}
export function newReview(payload, id, token) {
  return dispatch => {
    return axios
      .post('/reviews/' + id, payload, {
        headers: { Authorization: true }
      })
      .then(response => {

        checkResponseOnError(response, 'Cant add new review not, try later')
        
        dispatch({
          type: NEW_REVIEW,
          payload: {
            created_at: new Date(),
            created_by: {
              username: 'user'
            },
            ...payload
          }
        })
      })
  }
}

function checkResponseOnError (response, messageOnError = "Server Error") {
  if (response.data.success === false || (response.status !== 200 && response.status !== 201)) {
    throw new Error(messageOnError)
  }
}