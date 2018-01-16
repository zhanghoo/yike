import Vue from 'vue'
import Router from 'vue-router'
import AppGuide from '@/pages/common/AppGuide'
import AppIndex from '@/pages/index/AppIndex'
import AppFind from '@/pages/find/AppFind'
import AppHome from '@/pages/home/AppHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/guide'
    },
    {
      path: '/guide',
      name: 'guide',
      component: AppGuide
    },
    {
      path: '/index',
      name: 'index',
      component: AppIndex
    },
    {
      path: '/find',
      name: 'find',
      component: AppFind
    },
    {
      path: '/home',
      name: 'home',
      component: AppHome
    }
  ]
})
