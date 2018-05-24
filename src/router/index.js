import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  // history: true,
  // base: __dirname,
  routes: routes
})

export default router