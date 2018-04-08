// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import axios from 'axios'
import Materials from "vue-materials"
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.use(Materials)

window.axios = axios; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
