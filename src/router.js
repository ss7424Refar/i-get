import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import Home from './views/Index/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path:'home',
          name: 'home',
          component: Home
        },    //定义默认显示子组件
        {
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          path:'main',
          name: 'main',
          component: function () {
            return import(/* webpackChunkName: "about" */ './views/Index/Main.vue')
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  //用你的方式获取登录的用户信息
  const userinfo = localStorage.userInfo
  if(userinfo || to.name === 'login'){
    //如果存在用户信息，或者进入的页面是登录页面，则直接进入
    next()
  }else {
    //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
    //如未登录用户进入用户中心的页面地址，检测到未登录，
    //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
    next({
      name: 'login'
      // query: {
      //   redirect: to.path
      // }
    })
  }
})

export default router
