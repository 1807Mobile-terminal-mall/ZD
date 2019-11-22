import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/Classify.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('@/views/Manage.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('@/views/Shopping.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/My.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
