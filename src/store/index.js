import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/user_store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userStore
  }
})
