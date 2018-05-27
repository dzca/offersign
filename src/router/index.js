import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Pricing from '@/pages/Pricing'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'feature',
    component: Home
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  }
]

const router = new VueRouter({
  mode: 'history',
  // history: true,
  // base: __dirname,
  routes: routes
})

export default router