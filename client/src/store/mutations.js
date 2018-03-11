import * as types from './type'

const mutations = {
  [types.CHANGE_COLOR](state, color) {
    state.color = color
  },
  [types.SET_TOKEN](state, token) {
    state.token = token
  },
  [types.DELETE_TOKEN](state) {
    state.token = null
  }
}


export default mutations