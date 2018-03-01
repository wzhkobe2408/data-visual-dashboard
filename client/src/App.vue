<template>
  <div id="app">
    <Header/>
    <div class="custom-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
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
</style>
