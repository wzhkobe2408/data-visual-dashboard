export const changeMsg = ({commit}) => {
    commit({
      type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
      msg: '我是修改后的数据~~~'
    });
  };

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