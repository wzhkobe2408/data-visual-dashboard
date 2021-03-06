import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Color from '@/pages/Color.vue'
import Login from '@/components/loginForm.vue'
import Signup from '@/components/signupForm.vue'
import Mapping from '@/pages/Mapping.vue'
import ThreeD from '@/pages/ThreeD.vue'
import Manage from '@/pages/Manage.vue'
import User from '@/pages/User.vue'
import ChartDetail from '@/pages/ChartDetail.vue'
import notFound from '@/components/notFound'
import InterativeDashboard from '@/pages/InteractiveDashboard.vue'
import WeatherMap from '@/pages/WeatherMap.vue'

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
      path: '/color',
      name: 'Color',
      component: Color
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
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/chart_detail',
      name: 'ChartDetail',
      component: ChartDetail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path:'/interativemap',
      name: 'InterativeDashboard',
      component: InterativeDashboard
    },{
      path: '/weathermap',
      name: 'WeatherMap',
      component: WeatherMap
    }
  ]
})