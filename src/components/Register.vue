<template>

</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
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
      axios.post('/rest/user', userData, config).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
