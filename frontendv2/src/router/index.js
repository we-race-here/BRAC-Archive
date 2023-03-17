import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'content',
    },
  },
  // {
  //   path: '/results',
  //   name: 'results',
  //   component: () => import('@/views/Result.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },

  {
    path: '/Road',
    name: 'Road',
    component: () => import('@/views/road.vue'),
    meta: {
      layout: 'content',
    },
    

  },
  {
    path: '/RoadCup',
    name: 'RoadCup',
    component: () => import('@/views/roadcup.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/RoadCupTeam',
    name: 'RoadCupTeam',
    component: () => import('@/views/roadcupTeam.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/Cross',
    name: 'Cross',
    component: () => import('@/views/cross.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/CrossCup',
    name: 'CrossCup',
    component: () => import('@/views/CrossCup.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/CrossCupTeam',
    name: 'CrossCupTeam',
    component: () => import('@/views/CrossCupTeam.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/Track',
    name: 'Track',
    component: () => import('@/views/Track.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/ResultByRider',
    name: 'ResultByRider',
    component: () => import('@/views/ResultByRider.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/MTB',
    name: 'MTB',
    component: () => import('@/views/MTB.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/AllEvents',
    name: 'AllEvents',
    component: () => import('@/views/Events.vue'),
    meta: {
      layout: 'content',
    },

  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error404.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
    },
  },
  {
    path: '/iframe',
    name: 'IFrame Version',
    component: () => import('@/views/iframe.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
  
  // {
  //   path: '/second-page',
  //   name: 'second-page',
  //   component: () => import('@/views/SecondPage.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },
  // {
  //   path: '/login',
  //   name: 'auth-login',
  //   component: () => import('@/views/Login.vue'),
  //   meta: {
  //     layout: 'blank',
  //   },
  // },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
