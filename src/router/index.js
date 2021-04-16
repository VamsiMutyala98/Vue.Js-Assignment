import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import userDetails from '../components/userDetails.vue'
import Dashboard from '../components/Dashboard.vue'
import Home from '../components/Home.vue'
// import Checking from '../components/Checking.vue'
// import { mdiLogin } from '@mdi/js'
import  Login from '../components/Login.vue'
import openPage from '../components/openPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'openPage',
    component: openPage
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Dashboard
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/userDetails',
    name: 'userDetails',
    component: userDetails
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
