import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
// import HelloFromVux from '@/components/HelloFromVux'
const login = resolve => require(['@/components/login.vue'], resolve) // 登录页
const Home = resolve => require(['@/components/Home.vue'], resolve) // home页
const Detail = resolve => require(['@/components/Detail.vue'], resolve) // 详情页
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
