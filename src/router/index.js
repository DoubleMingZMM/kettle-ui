import Vue from 'vue'
import Router from 'vue-router'
import zmm from '@/view/zmm'
import dashboard from '@/view/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/zmm',
      name: 'zmm',
      component: zmm
    }
  ]
})
