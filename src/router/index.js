import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/pages/index/AppIndex'
import AppFind from '@/pages/find/AppFind'
import AppHome from '@/pages/home/AppHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: AppIndex
    },
    {
      path: '/',
      name: 'find',
      component: AppFind
    },
    {
      path: '/',
      name: 'home',
      component: AppHome
    }
  ]
})
