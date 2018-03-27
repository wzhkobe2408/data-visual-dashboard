<template>
  <div class="bounce">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
 </div>
</template>
<style scoped>
   .bounce {
   margin: 20px 10px 0 10px;
   width: 70px;
   text-align: center;
  }
  
  .bounce>div {
   width: 18px;
   height: 18px;
   background-color: rgb(255, 255, 255);
   border-radius: 100%;
   display: inline-block;
   animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  
  .bounce .bounce1 {
   animation-delay: -0.32s;
  }
  
  .bounce .bounce2 {
   animation-delay: -0.16s;
  }
  
  @keyframes sk-bouncedelay {
   0%,
   80%,
   100% {
    transform: scale(0);
   }
   40% {
    transform: scale(1.0);
   }
  }
</style>
