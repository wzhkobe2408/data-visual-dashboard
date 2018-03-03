<template>
   <div class="header" :style="{backgroundColor:color}">
     <div class="container">
       <div class="left-nav">
         <ul>
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/about">About</router-link></li>
           <li><router-link to="/map">Map</router-link></li>
           <li><router-link to="/3d">3D</router-link></li>
         </ul>
       </div>
       <div class="right-nav">
         <ul>
           <li><router-link to="/login">Login</router-link></li>
           <li><router-link to="/signup">Signup</router-link></li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  props: ['color'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
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
</style>