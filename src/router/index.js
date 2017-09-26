import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import login from 'components/login/login'
import about from 'components/about/about'
import main from 'components/main/main'
import orderList from 'components/order-list/order-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/orderList',
      component: orderList
    },
    {
      path: '/main',
      component: main
    }
  ]
})
