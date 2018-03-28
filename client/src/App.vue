<template>
  <div id="app">
    <Header class="top-nav" :color="this.headerColor" :username="username"/>
    <div class="custom-container">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Header from './components/Header'
import AppFooter from './components/appFooter.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      headerColor:'#1b1b1b',
      username: ''
    }
  },
  components: {
    Header,
    AppFooter
  },
  computed: {
    ...mapGetters([
      'gettersToken'
    ])
  },
  watch: {
    gettersToken() {
      if (!this.gettersToken) {
        this.username = ''
      } else {
        this.username = 'wangzhonghuan'
      }
    }
  }
}
</script>

<style>
  body {
    background: #ffffff;
    margin:0;
  }
  .custom-container {
    margin: 50px auto 0;
  }
  #app {
    min-height: 100vh;
  }
</style>
