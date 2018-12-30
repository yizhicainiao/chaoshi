import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import template from './views/template.vue'
import useradd from './views/useradd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: login
    },
    {
      path:'/template',
      name:'template',
      component: template
    },
    {
      path:'/useradd',
      name:'useradd',
      component: useradd
    }
  ]
})
