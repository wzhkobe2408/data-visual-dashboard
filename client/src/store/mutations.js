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
      state.chartData.index = state.chartData.index
      switch (state.chartData.index) {
        case 0:
        case 5:
          state.dataset[state.chartData.index].labels.push(addData.label);
          state.dataset[state.chartData.index].datasets[0].data.push(Number(addData.data));
          break;
        case 1:
          break;
        case 2:
        state.dataset[state.chartData.index].labels.push(addData.label);
        state.dataset[state.chartData.index].datasets[0].data.push(Number(addData.data));
          break;
        case 3:
          break;
        case 4:
          break;
        default:
          break;
      }
  },
  [types.START_LOADING](state) {
    state.loading = true;
  },
  [types.STOP_LOADING](state) {
    state.loading = false;
  },
  [types.UPDATE_DASHBOARD](state) {
    state.dashboard.barChartData.datasets[0].data = 
    state.dashboard.barChartData.datasets[0].data.map(item => {
      return Math.ceil(80*Math.random())
    })
  }
}


export default mutations