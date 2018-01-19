import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
// import * as getters from './getters'
import moduleA from './modules/moduleA'
import venues from './modules/venues'
import clubs from './modules/clubs'

// "Usually will have only one store for each application" - https://vuex.vuejs.org/en/state.html
// state should only be in the store if it is shared across components
// example: https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  // getters,
  modules: {
    a: moduleA,
    venues,
    clubs
  },
  // In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be
  // thrown. This ensures that all state mutations can be explicitly tracked by debugging tools.
  strict: process.env.NODE_ENV !== 'production'
})
