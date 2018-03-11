<template>
   <div class="header" :style="{backgroundColor:color}">
     <div class="container">
       <div class="left-nav">
         <ul>
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/color">Color</router-link></li>
           <li><router-link to="/map">Map</router-link></li>
           <li><router-link to="/3d">3D</router-link></li>
           <li><router-link to="/manage">Manage Data</router-link></li>
         </ul>
       </div>
       <div class="right-nav">
         <ul>
           <li v-if="username"><router-link to="/" v-html="username"></router-link><li>
            <li v-if="username" @click="clearToken">
              <router-link to="/login">Logout</router-link><li>
           <li v-if="!username"><router-link to="/login">Login</router-link></li>
           <li v-if="!username"><router-link to="/signup">Signup</router-link></li>
            <li @click="getInfo"><router-link to="/">GetInfo</router-link></li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['color'],
  data () {
    return {
      username:'',
      email:''
    }
  },
  computed: {
    ...mapGetters([
      'gettersToken'
    ])
  },
  watch: {
    gettersToken() {

    }
  },
  methods: {
    ...mapActions([
      'deleteToken'
    ]),
    clearToken() {
      this.deleteToken()
      localStorage.setItem('jwt','')
      this.$router.push('/login')
    },
    getInfo() {
    axios.get('/api/userinfo',{ 
      headers: {'x-access-token': localStorage.getItem('jwt')}
    })
      .then(response => {
        this.email = response.data.userinfo.email;
        this.username = response.data.userinfo.username;
      })
      .catch(err => {
        console.log('Error happend')
      })
    }
  },
  mounted() {
    axios.get('/api/userinfo',{ 
      headers: {'x-access-token': localStorage.getItem('jwt')}
    })
      .then(response => {
        this.email = response.data.userinfo.email;
        this.username = response.data.userinfo.username;
      })
      .catch(err => {
        console.log('Error happend')
      })
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
  .container {
    width: 90%;
    padding:0;
    margin: auto;
  }
  .container:after {
    content:'';
    display: table;
    clear:both;
  }
  .router-link-exact-active.router-link-active {
    border-bottom: 2px solid #ffbc00;
    font-weight: bold;
  }
</style>