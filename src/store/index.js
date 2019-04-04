// store.js重命名为index.js
import Vue from 'vue'
import Vuex from 'vuex'

//引入最基本的状态
import state from './state'
import mutations from './mutations'
import actions from './actions'
// 随着项目的增大，可以把状态分成模块(user.js)
import user from './module/user'


Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // }

  //使用简写方式
  state,
  mutations,
  actions,
  // 随着项目的增大，可以把状态分成模块(user.js)
  modules: {
    user
  }
})
