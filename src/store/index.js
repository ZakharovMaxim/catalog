import vue from 'vue'
import vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
vue.use(vuex)

export const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})
