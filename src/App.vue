<template>
  <div id="app">
    <Index></Index>
    <Login v-bind:show-login="false"></Login>
  </div>
</template>

<script>
// 导入组件
import Login from './components/Login'
import Index from './components/Index'
export default {
  name: 'app',
  components: {
    Login,
    Index
  }
}

</script>

<style scoped>
app{

}
</style>
