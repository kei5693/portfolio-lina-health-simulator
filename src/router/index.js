import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '../views/Survey.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
]

const router = new VueRouter({
  routes
})

export default router
