import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import road from '../views/road.vue'
import roadcup from '../views/roadcup.vue'
import roadcupTeam from '../views/roadcupTeam.vue'
import cross from '../views/cross.vue'
import CrossCup from '../views/CrossCup.vue'
import CrossCupTeam from '../views/CrossCupTeam.vue'
import Track from '../views/Track.vue'
import ResultByRider from '../views/ResultByRider.vue'
import MTB from '../views/MTB.vue'
import Events from '../views/Events.vue'
import EventRaces from '../views/EventRaces.vue'

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
  {
    path: '/CrossCup',
    name: 'CrossCup',
    component: CrossCup
  },
  {
    path: '/CrossCupTeam',
    name: 'CrossCupTeam',
    component: CrossCupTeam
  },
  {
    path: '/Track',
    name: 'Track',
    component: Track
  },
  {
    path: '/ResultByRider',
    name: 'ResultByRider',
    component: ResultByRider
  },
  {
    path: '/MTB',
    name: 'MTB',
    component: MTB
  },
  {
    path: '/AllEvents',
    name: 'AllEvents',
    component: Events
  },

  {
    path: '/Event/:id',
    name: 'EventRaces',
    component: EventRaces
  },
  
  
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
