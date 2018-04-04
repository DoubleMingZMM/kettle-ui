import { fetchModules } from '../../api'
const zmm = {
  state: {
    name: 'daniel',
    age: 30,
    testArr: []
  },
  mutations: {
    SET_MODULES: (state, { items }) => {
      state.testArr = items.data
    }
  },
  actions: {
    FETCH_MODULES: ({ commit, dispatch, state }, { payload }) => {
      return fetchModules(payload)
        .then(items => commit('SET_MODULES', { items }))
    }
  },
  getters: {
    getAge (state) {
      const { age } = state
      return age
    }
  }
}

export default zmm
