<template>
  <div id="app">
    <Header/>
    <div class="container">
      <SideBar />
      <MainContent />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    MainContent
  }
}
</script>

<style>
  body {
    background: #efefef;
    margin:0;
  }
  .container {
    margin-top: 20px;
  }
</style>
