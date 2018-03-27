<template>
  <div>
      <h1>User Profile</h1>
      <hr />
      <div class="profile-container">
       <img class="user-img" src="../assets/avatar.png" alt="img">
       <div class="text-info">
          <p><span>Username: </span>{{ gettersUserInfo.username }}</p>
          <p><span>Email: </span>{{ gettersUserInfo.email }}</p>
          <p><span>Address: </span>{{ gettersUserInfo.address || 'empty' }}</p>
          <p><span>Career: </span>{{ gettersUserInfo.career || 'empty' }}</p>
          <button class="btn btn-primary">Edit</button>
       </div>
      </div>
  </div>  
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
    ...mapGetters([
      'gettersUserInfo'
      ])
    },
    methods:{
      ...mapActions([
      'stopLoading',
      'startLoading'
      ])
    },
    mounted() {
        this.stopLoading()
    },
    beforeDestroy() {
        this.startLoading()
    }
  }
</script>
<style scoped>
  .profile-container {
    margin-top: 40px;
  }
  .profile-container .user-img {
    height:264px;
    position: relative;
    top:-93px;
    left:6px;
  }
  .text-info {
    text-align: left;
    display: inline-block;
    color:#000 !important;
    font-size: 20px;
    background-color: #f4f4f4;
    border: 1px solid #cfcfcf;
    padding: 20px 40px;
  }
</style>
