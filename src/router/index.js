import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import contact from '../views/contactus.vue'
import about from '../views/about.vue'
import apparel from '../views/apparel.vue'
import convention from '../views/convention.vue'
import basketball from '../views/basketball.vue'
import test from '../views/test.vue'
import policy from '../views/policy.vue'
import jobs from '../views/jobs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/contactus',
    name: 'contact',
    component: contact
  },
  {
    path: '/about',
    name: 'about',
    component: about
      }  ,
    {
      path: '/apparel',
      name: 'apparel',
      component: apparel
        } ,
    {
      path: '/convention',
      name: 'convention',
      component: convention
        },
    {
      path: '/basketball',
      name: 'basketball',
      component: basketball
      },
  {
    path: '/apparel',
    name: 'apparel',
    component: apparel
  },
  {
    path: '/convention',
    name: 'convention',
    component: convention
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },{
    path: '/policy',
    name: 'Policy',
    component: policy
  },{
    path: '/jobs',
    name: 'Jobs',
    component: jobs
  },{
    path: '/products/:id/',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    props (route) {
      const props = { ...route.params };
      props.id = +props.id;
      return props
    }
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
