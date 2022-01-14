import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import road from '../views/road.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/road',
    name: 'road',
    component: road
  },
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
