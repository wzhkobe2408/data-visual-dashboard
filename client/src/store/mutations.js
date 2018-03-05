import * as types from './type'

const mutations = {
  [types.CHANGE_COLOR](state, color) {
    state.color = color
  }
}

export default mutations