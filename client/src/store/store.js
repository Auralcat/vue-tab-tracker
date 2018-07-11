import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null
  },
  mutation: {
    setToken (state, token) {
      state.token = token
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
