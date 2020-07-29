import createRequest from './index.js'
import store from '../../store/index.js'

export function getBillList(params = {}) {
  return createRequest.instance('/bill/list/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function addBill(params = {}) {
  return createRequest.instance('/bill/add/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function addBillUser(params = {}) {
  return createRequest.instance('/bill/add_user/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function getExpenses(params = {}) {
  return createRequest.instance('/expense/list/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function addExpense(params = {}) {
  return createRequest.instance('/expense/add/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function deleteExpense(params = {}) {
  return createRequest.instance('/expense/remove/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function updateExpense(params = {}) {
  return createRequest.instance('/expense/update/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}

export function getCost(params = {}) {
  return createRequest.instance('/expense/cost/', 'post', params, {
    ContentType: "application/x-www-form-urlencoded"
  })
}