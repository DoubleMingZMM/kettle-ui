import Vue from 'vue'
import Vuex from 'vuex'
import zmm from './modules/zmm'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    zmm,
    user
  }
})

export default store
