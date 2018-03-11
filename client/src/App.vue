<template>
  <div id="app">
    <Header :color="this.headerColor" :username="username"/>
    <div class="custom-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
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
    Header
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
    background: #efefef;
    margin:0;
  }
  .custom-container {
    margin: 20px auto 0;
    width: 90%;
  }
  #app {
    min-height: 100vh;
  }
</style>
