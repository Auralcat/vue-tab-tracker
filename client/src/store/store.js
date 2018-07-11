import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutation: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = Boolean(token)
      // if (token) {
      //   state.isUserLoggedIn = true
      // } else {
      //   state.isUserLoggedIn = false
      // }
    },
    setUser (state, token) {
      state.token = token
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, token) {
      commit('setUser', token)
    }

  }
})
