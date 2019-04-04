import Vue from 'vue'
import App from './App.vue'
import router from './router' //相当于'./router/index'
import store from './store' //相当于'./store/index'
import config from './config' //相当于'./config/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
