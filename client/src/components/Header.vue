<template>
   <div class="header" :style="{backgroundColor:color}">
   <div class="banner"></div>
     <div class="my-container">
       <div class="left-nav">
         <ul>
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/color">Color</router-link></li>
           <li><router-link to="/map">Map</router-link></li>
           <li><router-link to="/3d">3D</router-link></li>
           <li><router-link to="/manage">Manage Data</router-link></li>
           <li><router-link to="/interativemap">Interative Map</router-link></li>
         </ul>
       </div>
       <div class="right-nav">
         <ul>
           <li class="username" v-if="gettersUserInfo.username"><router-link to="/user">{{ gettersUserInfo.username }}</router-link><li>
            <li v-if="gettersUserInfo.username" @click="clearToken">
              <router-link to="/login">Logout</router-link><li>
           <li v-if="!gettersUserInfo.username"><router-link to="/login">Login</router-link></li>
           <li v-if="!gettersUserInfo.username"><router-link to="/signup">Signup</router-link></li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['color'],
  computed: {
    ...mapGetters([
      'gettersToken',
      'gettersUserInfo'
    ])
  },
  methods: {
    ...mapActions([
      'deleteToken',
      'clearUserInfo'
    ]),
    clearToken() {
      this.clearUserInfo()
      localStorage.setItem('jwt','')
      localStorage.setItem('userinfo','')
      this.$router.push('/login')
    },
  }
}
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  ul {
   margin:0;
   padding:0;
   list-style: none; 
  }
  .left-nav {
    float:left;
  }
  .right-nav {
    float:right;
  }
  ul > li {
    float:left;
    font-weight:200;
  } 
  ul li a {
    color:#f4f4f4;
    font-size: 16px;
    display: inline-block;
    text-decoration: none;
    padding: 14px 15px;
    font-weight:200;
  }
  ul li a:hover {
    background-color:#424242;
  }
  .my-container {
    background: rgb(27, 27, 27);
    padding:0 5%;
    margin: auto;
  }
  .my-container:after {
    content:'';
    display: table;
    clear:both;
  }
  .username {
    border-bottom: none !important;
  }
  .router-link-exact-active.router-link-active {
    border-bottom: 2px solid #ffbc00;
    font-weight: bold;
  }
  .banner {
	width: 100%;
	height: 120px;
	background: url('../assets/banner.jpg');
	background-position: 0% 10%;
	background-repeat: no-repeat;
	background-size: cover;
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgb(27, 27, 27);
    border-bottom: 5px solid rgb(70, 70, 70);
    z-index: 10000;
  }
</style>