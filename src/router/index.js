import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/contactus.vue'
import about from '../views/About.vue'
import apparel from '../views/apparel.vue'
import convention from '../views/convention.vue'
import basketball from '../views/basketball.vue'
import jobs from '../views/jobs.vue'
import elementary from '../views/elementary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },  {
    path: '/home',
    name: 'home',
    component: Home
  },  {
    path: '/contactus',
    name: 'contact',
    component: contact
  },  {
    path: '/about',
    name: 'about',
    component: about
  },  {
    path: '/apparel',
    name: 'apparel',
    component: apparel
  },  {
    path: '/convention',
    name: 'convention',
    component: convention
  },  {
    path: '/basketball',
    name: 'basketball',
    component: basketball
  },  {
    path: '/jobs',
    name: 'Jobs',
    component: jobs
  },  {
    path: '/elementary',
    name: 'Elementary',
    component: elementary
  },
  { path: "*", redirect: "/" }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
