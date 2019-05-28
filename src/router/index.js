import Vue from 'vue'
import Router from 'vue-router'
const Main = ()=> import('@/views/common/main')
const Login = ()=> import('@/views/common/login')
const notFound = ()=> import('@/views/common/notFound')
const index = ()=> import('@/views/index/index')
const content = ()=> import('@/views/content/content');
const contentDetails = ()=> import('@/views/content/contentDetails');

const project = ()=> import('@/views/project/project');
const pbDetails = ()=> import('@/views/project/pbDetails');
const resume = ()=> import('@/views/resume/resume');
const resumeDetails = ()=> import('@/views/resume/resumeDetails');
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
        {
          path: '/content',
          name: '',
          component: content,
        },
        {
          path: '/contentDetails',
          name: '',
          component: contentDetails,
        },
        {
          path: '/project',
          name: '',
          component: project,
        },
        {
          path: '/pbDetails',
          name: '',
          component: pbDetails,
        },
        {
          path: '/resume',
          name: '',
          component: resume,
        },
        {
          path: '/',
          name: '',
          component: resumeDetails,
        }
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