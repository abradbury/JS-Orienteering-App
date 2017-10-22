import * as types from '../mutations'

const state = {
  counter: 7
}

const getters = {
  exampleGetter: state => {
    return state.counter + 19
  }
}

// mutations must be synchronous: https://vuex.vuejs.org/en/mutations.html
const mutations = {  // i.e. setter!
  INCREMENT (state) {
    state.counter++
  }
}

// actions don't mutate the state, but commit mutations
// can be asynchronous
const actions = {
  // original: increment (context)
  // new below using ES2015 argument destructuring
  increment ({ commit }) {
    commit('increment')
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  },
  // store.dispatch('actionA').then(() => { ... }
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  },

  // more concrete example
  checkout ({ commit, state }, products) {
    // save the items currently in the cart
    // const savedCartItems = [...state.cart.added]
    // send out checkout request, and optimistically
    // clear the cart
    commit(types.CHECKOUT_REQUEST)
    // the shop API accepts a success callback and a failure callback
  //   shop.buyProducts(
  //     products,
  //     // handle success
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     // handle failure
  //     () => commit(types.CHECKOUT_FAILURE, savedCartItems)
  //   )
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
