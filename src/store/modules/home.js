/**
 * Created by wdy on 2018/1/12.
 */
const home = {
  state: {
    count: 0,
    userDetail: {
      userName: '',
      pwd: ''
    }
  },
  mutations: {
    add (state) {
      // 变更状态
      state.count = state.count + 10
    },
    reduce (state) {
      state.count--
    },
    userDetail (state, userObj) {
      state.userDetail = userObj
    }
  },
  actions: {
    add ({commit}) {
      setTimeout(() => (
        commit('add')
      ), 3000)
    },
    reduce ({commit}) {
      commit('reduce')
    },
    userDetail ({commit}, userObj) {
      commit('userDetail', userObj)
    }
  }
}
export default home
