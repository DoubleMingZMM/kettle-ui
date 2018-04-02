import Vue from 'vue'
import Vuex from 'vuex'
import zmm from './modules/zmm'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...zmm
})

export default store
