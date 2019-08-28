import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import Home from './views/Index/Home.vue'
import Insert from './views/Index/Insert.vue'

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
            return import('./views/Index/Main.vue')
          }
        },    //定义默认显示子组件
        {
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          path:'insert',
          name: 'insert',
          component: Insert
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  //用你的方式获取登录的用户信息
  const user = localStorage.getItem('user')
  if(to.name === 'home' || to.name === 'main'){
    //如果存在用户信息，或者进入的页面是登录页面，则直接进入
    if (user) {
      next()
    }else {
      //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
