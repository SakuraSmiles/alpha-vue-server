<template>
  <div :class="toolbar_isOpen" @mouseenter="enter()" @mouseleave="leave()" v-on:click="click()">
      <div  v-for="(item,index) in type_list" :key="index"  :class="item"></div>
    </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      type_list: {
        0: 'one',
        1: 'two',
        2: 'three',
        3: 'four',
        4: 'five',
        5: 'six'
      },
      toolbar_isOpen: 'toolbar'
    }
  },
  methods: {
    enter () {
      this.type_list = {
        0: 'oneAfter',
        1: 'twoAfter',
        2: 'threeAfter',
        3: 'fourAfter',
        4: 'fiveAfter',
        5: 'sixAfter'
      }
    },
    leave () {
      this.toolbar_isOpen = 'toolbar'
      this.type_list = {
        0: 'one',
        1: 'two',
        2: 'three',
        3: 'four',
        4: 'five',
        5: 'six'
      }
    },
    click () {
      if (!this.$store.state.user.isLogin) {
        this.$store.commit('showLoginDialog')
      }
      console.log(this.$store.state.user.isShowLogin)
      this.toolbar_isOpen = 'toolbarOpen'
      this.type_list = {
        0: 'oneOpen',
        1: 'twoOpen',
        2: 'threeOpen',
        3: 'fourOpen',
        4: 'fiveOpen',
        5: 'sixOpen'
      }
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/toolbar.css';
</style>
