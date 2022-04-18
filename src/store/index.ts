import { createStore } from 'vuex'

export default createStore({
  state: {
    number: () => {return 10}
  },
  getters: {
    getNumber(){return this.number}
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
