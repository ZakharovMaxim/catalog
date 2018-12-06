import axios from './axios'
import { logout } from '../actions/UserActions'
export default store => {

  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config.headers['Authorization']) {
      const token = store.getState()['user']['token']
      config.headers['Authorization'] = `Token ${token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401) {
      store.dispatch(logout())
    }
    return Promise.reject(error);
  });

}