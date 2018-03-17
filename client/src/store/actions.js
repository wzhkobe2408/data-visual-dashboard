import * as types from './type'

export const thumbUp = ({commit}) => {
  commit({
    type:'thumbUp',
    payload:1
  })
}

export const thumbDown = ({commit}) => {
  commit({
    type:'thumbDown',
    payload:-1
  })
}

export const addComment = ({commit},content) => {
  commit('addComment', content)
}

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