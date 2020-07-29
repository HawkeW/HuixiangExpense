import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    hasLogin: false,
    user: {},
    auth: '',
  },
  mutations:{
    setHasLogin(state, val) {
      console.log(`登录状态${val}`)
      state.hasLogin = val
    },
    setUser(state, obj) {
      state.user = {
        ...state.user,
        ...obj
      }
       console.log(obj)
      uni.setStorage({
        key:'user',
        data:state.user
      })
    },
    setAuth(state, auth) {
      state.auth = auth;
      uni.setStorage({
        key: 'auth',
        data: auth
      })
    },
  },
  actions:{
    
  },
  getters:{},
  modules:{}
})

export default store