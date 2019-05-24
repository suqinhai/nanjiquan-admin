import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'
import qs from 'qs'
import router from '../router/index.js'
import domain from './domain.js'

let axiosIns = axios.create({});

axiosIns.defaults.baseURL = domain

// 添加请求拦截器
axiosIns.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // let contentType = 'application/x-www-form-urlencoded; charset=UTF-8'
  config.headers['Content-Type'] = 'application/json'
  let token = window.localStorage.getItem('token')
  let adminInfo = window.localStorage.getItem('adminInfo')
  if (token) {
    config.headers['token'] = token
    config.headers['mobile'] =  JSON.parse(adminInfo).userInfo.mobile
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  console.log('错误的传参')
  return Promise.reject(error)
})

axiosIns.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (!res.data) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})
const ajaxMethod = ['get', 'post']
const api = {}
const dislodgeURL = ['/groupRecomment/save', '/groupRecomment/list', '/business/info', '/goods/goodsAuditlist',
 '/businessCheck/list', '/businessCheck/save', '/groupRecomment/update', '/brand/brandList' ,'/international/internationalList',
 '/videoShow/update','/friends/update','/userMessage/list', '/brand/brandAuditlist']

ajaxMethod.forEach((method) => {
  api['baseURL'] = axiosIns.defaults.baseURL
  api[method] = function(uri, data, config) {

    if( dislodgeURL.indexOf(uri) == -1 ){
      var adminInfo = window.localStorage.getItem('adminInfo')
          adminInfo = JSON.parse(adminInfo)
      if ( adminInfo && adminInfo.userInfo && data){
        data['businessId'] = adminInfo.userInfo.businessId;
        data['sysUserId'] = adminInfo.userInfo.userId
      }
    }
    
    return new Promise(function(resolve, reject) {
      axiosIns[method](uri, data, config).then((response) => {
        // if(response.data.code == 999){
        //     // Message.error(response.data.msg)
        //     window.localStorage.removeItem('token');
        //     router.replace('/login')
        //     return false
        // }

        if(response.data.code < 0 || response.data.code == 500){
          Message.error(response.data.msg)
          reject()
          return false
        }
        
        resolve(response)
      }).catch(function(error) {
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Error', error.message)
        }
      })
    })
  }
})

export default api
