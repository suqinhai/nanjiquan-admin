import Vue from 'vue'
import Router from 'vue-router'
import { userInfo } from 'os';
const Main = ()=> import('@/views/common/main')
const Login = ()=> import('@/views/common/login')
const notFound = ()=> import('@/views/common/notFound')
const index = ()=> import('@/views/index/index')

const User= ()=>import('@/views/user/lists/index')
const nanjiquanapply=()=>import('@/views/user/nanjiquanapply/index')
const nanjiquanapplydetails=()=>import('@/views/user/nanjiquanapply/details')
const investmentapply=()=>import('@/views/user/investmentapply/index')
const investmentapplydetails=()=>import('@/views/user/investmentapply/details')
const shopapplylists=()=>import('@/views/user/shopapply/index')
const shopapplydetails=()=>import('@/views/user/shopapply/details')
const recruiterapplylists=()=>import('@/views/user/recruiterapply/index')
const recruiterapplydetails=()=>import('@/views/user/recruiterapply/details')
const nanjiquanapplyverifylists=()=>import('@/views/apply/nanjiquanapply/index')
const nanjiquanapplyverifydetails=()=>import('@/views/apply/nanjiquanapply/details')
const nanjiquanapplyverify=()=>import('@/views/apply/nanjiquanapply/verify')
const investmentapplyverifylists=()=>import('@/views/apply/investmentapply/index')
const investmentapplyverifydetails=()=>import('@/views/apply/investmentapply/details')
const investmentapplyverify=()=>import('@/views/apply/investmentapply/verify')
const recruiterappverifylists=()=>import('@/views/apply/recruiterapp/index')
const recruiterappverifydetails=()=>import('@/views/apply/recruiterapp/details')
const recruiterappverify=()=>import('@/views/apply/recruiterapp/verify')
const Shopapplyverifylists=()=>import('@/views/apply/Shopapply/index')
const Shopapplyverifydetails=()=>import('@/views/apply/Shopapply/details')
const Shopapplyverify=()=>import('@/views/apply/Shopapply/verify')





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
        },{
          path:'/User/lists',
          name:'',
          component:User,
         },{
            path:"/nanjiquanapply/lists",
            name:'',
            component:nanjiquanapply,
         },{
          path:"/nanjiquanapply/details",
          name:'',
          component:nanjiquanapplydetails,
        },{
           path:"/investmentapply/lists",
            name:'',
            component:investmentapply,
        },{
          path:"/investmentapply/details",
          name:'',
          component:investmentapplydetails,
        },{
          path:"/shopapply/lists",
          name:'',
          component:shopapplylists,
        },{
          path:"/shopapply/details",
          name:'',
          component:shopapplydetails,
        },{
          path:"/recruiterapply/lists",
          name:'',
          component:recruiterapplylists,
        },{
          path:"/recruiterapply/details",
          name:'',
          component:recruiterapplydetails,
        },{
          path:"/nanjiquanapply/verifylists",
          name:'',
          component:nanjiquanapplyverifylists,
        },{
          path:"/nanjiquanapply/verifydetails",
          name:'',
          component:nanjiquanapplyverifydetails,
        },{
          path:"/nanjiquanapply/verify",
          name:'',
          component:nanjiquanapplyverify,
        },{
          path:"/investmentapply/verifylists",
          name:'',
          component:investmentapplyverifylists,
        },{
          path:"/investmentapply/verifydetails",
          name:'',
          component:investmentapplyverifydetails,
        },{
          path:"/investmentapply/verify",
          name:'',
          component:investmentapplyverify,
        },{
          path:"/recruiterapp/verifylists",
          name:'',
          component:recruiterappverifylists,
        },{
          path:"/recruiterapp/verifydetails",
          name:'',
          component:recruiterappverifydetails,
        },{
          path:"/recruiterapp/verify",
          name:'',
          component:recruiterappverify,
        },{
          path:"/Shopapply/verifylists",
          name:'',
          component:Shopapplyverifylists,
        },{
          path:"/Shopapply/verifydetails",
          name:'',
          component:Shopapplyverifydetails,
        },{
          path:"/Shopapply/verify",
          name:'',
          component:Shopapplyverify,
        },{
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
    }
  ]
})


export default vueRouter