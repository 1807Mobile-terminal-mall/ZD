import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabs: [{
        path:'/home',
        label: '首页',
        icon: 'cubeic-home'
      }, {
        path: '/classify',
        label: '分类',
        icon: 'cubeic-calendar'
      }, {
        path: '/manage',
        label: '当家',
        icon: 'cubeic-vip'
      }, {
        path: '/shopping',
        label: '购物',
        icon: 'cubeic-mall'
      }, {
        path: '/my',
        label: '我的',
        icon: 'cubeic-person'
      }]
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
