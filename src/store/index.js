import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getJson() {
      const key = process.env.VUE_APP_API
      const api = await fetch(key)
      return await api.json()
    }
  },
  modules: {
  }
})
