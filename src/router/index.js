import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactus from '../views/contactus.vue'
import About from '../views/About.vue'
import Apparel from '../views/apparel.vue'
import convention from '../views/convention.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home    
  },
  {
    path: '/contactus',
    name: 'contact',
    component: Contactus    
  }
  ,
  {
    path: '/About Us',
    redirect: 'about',
    name: 'about',
    component: About
      }  ,
    {
      path: '/apparel',
      name: 'apparel',
      component: Apparel
        } ,
    {
      path: '/convention',
      name: 'convention',
      component: convention
        }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
