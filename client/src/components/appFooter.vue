<template>
  <div class="app-footer">
      <div class="left">
          <p>Sponsored by nobody :)</p>
      </div>
      <div class="right">
          <span>Home</span>
          <span>Color</span>
          <span>Map</span>
          <span>3D</span>
          <span>Manage Data</span>
          <span>Interative Map</span>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .app-footer {
        margin-top: 80px;
        background-color: rgb(26, 26, 26);
        height: 100px;
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        color: #fefefe;
        align-items: center;
        font-size: 18px;
    }
    .app-footer span {
        margin-right: 10px;
    }
</style>
