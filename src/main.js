import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VDistpicker from 'v-distpicker'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
/* 把axios对象挂到Vue实例上面，其他组件在使用axios的时候直接 this.$http就可以了 */
Vue.prototype.$http = axios
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

import 'common/stylus/index.styl'

Vue.use(ElementUI)
Vue.use(VDistpicker)
Vue.use(VueResource)
// 本地登录注册
// Vue.http.options.emulateJSON = true
// Vue.http.options.root = 'http://211.149.193.19:8100'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
