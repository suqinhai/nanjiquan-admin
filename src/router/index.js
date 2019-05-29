import Vue from 'vue'
import Router from 'vue-router'
const Main = ()=> import('@/views/common/main')
const Login = ()=> import('@/views/common/login')
const notFound = ()=> import('@/views/common/notFound')
const index = ()=> import('@/views/index/index')
//内容管理
const content = ()=> import('@/views/content/content');
const contentDetails = ()=> import('@/views/content/contentDetails');
const project = ()=> import('@/views/project/project');
const pbDetails = ()=> import('@/views/project/pbDetails');
const resume = ()=> import('@/views/resume/resume');
const resumeDetails = ()=> import('@/views/resume/resumeDetails');
const agreement = ()=> import('@/views/agreement/agreement');
//广告管理
const advertisement = () => import('@/views/advertisement/advertisement');
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
          name: '岗位列表',
          component: content,
        },
        {
          path: '/contentDetails',
          name: '投递详情',
          component: contentDetails,
        },
        {
          path: '/project',
          name: '项目列表',
          component: project,
        },
        {
          path: '/pbDetails',
          name: '查阅情况',
          component: pbDetails,
        },
        {
          path: '/resume',
          name: '简历列表',
          component: resume,
        },
        {
          path: '/resumeDetails',
          name: '查看简历',
          component: resumeDetails,
        },
        {
          path: '/agreement',
          name: '协议管理',
          component: agreement,
        }
        ,
        {
          path: '/',
          name: '广告列表',
          component: advertisement,
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