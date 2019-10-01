import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0,
    power: 0
  },
  mutations: {
    getDiamondNum (state, {num, power}) {
      state.num = num
      state.power = power
    },
    addDiamondNum (state, num) {
      let value = state.num
      //   console.log(num, 'mutations')
      value += num
      state.num = value
    }
  },
  actions: {
    firstDiamondNum ({state, commit}, {num, power}) {
      commit('getDiamondNum', {num, power})
    },
    changeDiamondNum ({
      state,
      commit
    }, num) {
      commit('addDiamondNum', num)
    }
  }
})
