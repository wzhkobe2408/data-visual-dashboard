// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
import { Map, TileLayer, OsmSource } from 'vuelayers'
import 'vuelayers/lib/style.css'
Vue.config.productionTip = false

Vue.use(Map)
Vue.use(TileLayer)
Vue.use(OsmSource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
