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
  },
  [types.SET_USER_INFO](state, userinfo) {
    state.userInfo.username = userinfo.username
    state.userInfo.email = userinfo.email
  },
  [types.CLEAR_USER_INFO](state) {
    state.userInfo.username = ''
    state.userInfo.email = ''
  },
  [types.SET_CHART_DATA](state, chartData) {
    state.chartData = chartData
  },
  [types.ADD_CHART_DATA](state, addData, index) {
    switch (index) {
      case 0:
      case 5:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  },
}


export default mutations