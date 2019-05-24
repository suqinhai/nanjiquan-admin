	// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http/axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'font-awesome/css/font-awesome.min.css'
import i18n from './i18n'


Vue.prototype.$axios = api
Vue.config.productionTip = false

/* Vue.prototype.getHash = function (page) {
  const hash = history.hash
  history.hash = ''
  return hash ? hash : page
} */

// Vue.use(Vueresource)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  i18n: i18n,
  template: '<App/>'
})
