import Vue from 'vue'
import Router from 'vue-router'
const Main = ()=> import('@/views/common/main')
const Login = ()=> import('@/views/common/login')
const notFound = ()=> import('@/views/common/notFound')
const index = ()=> import('@/views/index/index')

Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/login',
      name: 'route.login',
      component: Login,
      hidden:true
    },
    {
      path: '/',
      name: 'route.index',
      component: Main,
      iconCls: 'fa fa-user-o',
      children: [
        {
          path: '/index',
          name: '首页',
          component: index,
        },
      ]
    },
    {
      path: '/',
      name: '',
      component: Main,
      iconCls: 'fa fa-gamepad',
      hidden:true,
      children: [
        {
          path: '/notFound',
          name: 'route.notFound',
          component: notFound,
        },
      ]
    },
  ]
})


export default vueRouter