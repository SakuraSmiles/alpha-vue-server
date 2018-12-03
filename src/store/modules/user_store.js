export default {
  state: {
    isLogin: false,
    isShowLogin: false
  },
  mutations: {
    showLoginDialog: state => {
      state.isShowLogin = true
    },
    hiddenLoginDialog: state => {
      state.isShowLogin = false
    },
    login: state => {
      state.isLogin = true
    },
    logout: state => {
      state.isLogin = false
    }
  }
}
