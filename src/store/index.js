
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     isAuthenticated: false,
//     test: "test",
//   },
//   mutations: {
//     setAuthentication(state, status) {
//         state.isAuthenticated = status;
//     }
//   },
  
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

export default new Vuex.Store({
  state,
})