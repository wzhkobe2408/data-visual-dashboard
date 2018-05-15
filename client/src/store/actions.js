import * as types from './type'

export const changeColor =({commit}, color) => {
  commit(types.CHANGE_COLOR, color)
}

export const setToken = ({commit}, token) => {
  commit(types.SET_TOKEN, token)
}

export const deleteToken = ({commit}) => {
  commit(types.DELETE_TOKEN)
}

export const setUserInfo = ({commit}, userinfo) => {
  commit(types.SET_USER_INFO, userinfo)
}

export const clearUserInfo = ({commit}) => {
  commit(types.CLEAR_USER_INFO)
}

export const setChartData = ({commit},chartData) => {
  commit(types.SET_CHART_DATA, chartData)
}

export const addChartData = ({ commit }, addData, index) => {
  commit(types.ADD_CHART_DATA, addData, index)
}

export const startLoading = ({ commit }) => {
  commit(types.START_LOADING)
}

export const stopLoading = ({ commit }) => {
  commit(types.STOP_LOADING)
}

export const updateDashboard = ({ commit }) => {
  commit(types.UPDATE_DASHBOARD)
}