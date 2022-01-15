import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import road from '../views/road.vue'
import roadcup from '../views/roadcup.vue'
import roadcupTeam from '../views/roadcupTeam.vue'
import cross from '../views/cross.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Road',
    name: 'road',
    component: road
  },
  {
    path: '/RoadCup',
    name: 'roadcup',
    component: roadcup
  },
  {
    path: '/RoadCupTeam',
    name: 'roadcup',
    component: roadcupTeam
  },
  {
    path: '/Cross',
    name: 'cross',
    component: cross
  },
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
