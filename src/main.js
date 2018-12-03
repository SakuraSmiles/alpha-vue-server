// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import Icon from '../node_modules/vue-svg-icon/Icon.vue'
import ElementUI from 'element-ui'
import store from './store'

/* 使用element-ui */
Vue.use(ElementUI)
/* 使用icon图标 */
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
