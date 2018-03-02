import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Login from '@/components/loginForm.vue'
import Signup from '@/components/signupForm.vue'
import Mapping from '@/pages/Mapping.vue'
import ThreeD from '@/pages/ThreeD.vue'
import notFound from '@/components/notFound'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/map',
      name: 'Mapping',
      component: Mapping
    },
    {
      path: '/3d',
      name: 'ThreeD',
      component: ThreeD
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})