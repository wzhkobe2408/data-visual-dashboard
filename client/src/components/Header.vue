<template>
   <div class="header">
     <div class="container">
       <div class="left-nav">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">New</a></li>
           <li><a href="#">More</a></li>
         </ul>
       </div>
       <div class="right-nav">
         <ul>
           <li><a href="#">Login</a></li>
           <li><a href="#">Logout</a></li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  } 
  ul li a {
    color:#f4f4f4;
    font-size: 18px;
    display: inline-block;
    text-decoration: none;
    padding: 10px 15px;
  }
  ul li a:hover {
    background-color:#5b67a3;
  }
  .container {
    width: 80%;
    padding:0;
    margin: auto;
  }
  .container:after {
    content:'';
    display: table;
    clear:both;
  }
  .header {
    background-color:#7986cb;
  }
</style>