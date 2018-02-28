<template>
  <div id="app">
    <Header/>
    <div class="custom-container">
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
  .custom-container {
    margin: 20px auto 0;
    width: 90%;
  }
</style>
