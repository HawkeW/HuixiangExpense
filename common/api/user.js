import createRequest from './index.js'
import store from '../../store/index.js'

export function registerUser(params = {}) {
  return createRequest.instance('/users/register/', 'post', params, {
    ContentType: "application/json"
  })
}

export function checkUser(params = {}) {
  return createRequest.instance('/users/login/', 'post', params, {
    ContentType: "application/json"
  })
}

