import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router/inedx'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
