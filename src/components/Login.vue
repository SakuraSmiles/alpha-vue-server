<template>
  <div class="login">
    <div class="container">
      <h1>账号登录</h1>
      <form>
        <input v-model="loginName" placeholder="请输入用户名"/>
        <input v-model="password" placeholder="请输入密码"/>
        <button @click='sendLogin'>登录</button>
      </form>
      <p>username is: {{ loginName }}</p>
      <p>password is: {{ password }}</p>
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
      password: ''
    }
  },
  methods: {
    sendLogin () {
      var userData = JSON.stringify({
        'loginName': this.loginName,
        'password': this.password
      })
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.get('/rest/login', userData, config).then(res => {
        console.log(res)
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
