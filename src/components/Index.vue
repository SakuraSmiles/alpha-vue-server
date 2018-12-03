<template>
<div class="index">
  <Top></Top>
  <Toolbar></Toolbar>
  <Middle></Middle>
  <Bottom></Bottom>
</div>
</template>

<script>
import Toolbar from './common/Toolbar'
import Top from './index/Top'
import Bottom from './index/Bottom'
import Middle from './index/Middle'
export default {
  name: 'index',
  components: {
    Toolbar,
    Top,
    Bottom,
    Middle
  }
}
</script>

<style scoped>
  @import '../assets/css/index.css';
</style>
