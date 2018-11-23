<template>
  <div class="login">
    <div class="container">
      <h1>账号登录</h1>
      <form>
        <input v-model="loginName" placeholder="请输入用户名"/>
        <input type="password" v-model="password" placeholder="请输入密码"/>
        <button @click='sendLogin'>登录</button>
      </form>
      <el-dialog :visible.sync ="showMsg" width = 30% :modal-append-to-body = "false">{{message}}</el-dialog>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      loginName: '',
      password: '',
      message: '',
      showMsg: false
    }
  },
  methods: {
    sendLogin () {
      axios.get('/rest/login', {
        params: {
          loginName: this.loginName,
          password: this.password
        }
      }).then(res => {
        if (res.data === 'success') {
          this.message = '欢迎你'
        } else {
          this.showMsg = true
          this.message = '账号密码错误！'
        }
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/login.css';
</style>
