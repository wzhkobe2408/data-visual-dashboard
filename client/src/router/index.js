import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import About from '@/pages/About.vue'

import notFound from '@/components/notFound'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'notFind',
      component: notFind
    }
  ]
})