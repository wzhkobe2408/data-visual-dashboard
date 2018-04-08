<template>
	<div class="col-md-3">
		<div class="card">
      <div class="card-body text-center">
        <img class="profile-img" src="../assets/avatar.png" alt="img">
        <router-link to="/user"><p class="mt-1">{{ gettersUserInfo.username }}</p></router-link>
        <p>{{ gettersUserInfo.email }}</p>
        <hr />
        <p>Developer | Student</p>
        <button class="btn btn-block">Edit</button>
      </div>
      	<div class="profile-usermenu">
          <div class="nav-item">
            <i class="fas fa-home"></i> <span>Overview</span> <span class="badge badge-dark float-right">5</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-user"></i> <span>Account</span> <span class="badge badge-dark float-right">3</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-cog"></i> <span>Settings</span> 
          </div>
          <div class="nav-item">
            <i class="fas fa-thumbtack"></i> <span>TasksHelp</span>
          </div>
          <div class="nav-item">
            <i class="fas fa-info-circle"></i> <span>About</span> <span class="badge badge-dark float-right">2</span>
          </div>
          <div class="nav-item">
            <i class="fab fa-telegram"></i> <span>Contact</span>
          </div>
				</div>
		</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'gettersUserInfo'
    ]),
  },
  methods: {
  }
};
</script>
<style scoped>
  .profile-img {
    border-radius: 50%;
    width: 120px;
    height: auto;
  }
  .card {
    margin-top: 0;
    box-shadow: 0 0 1px rgba(0,0,0,0.1);
  }
  .profile-img:hover {
	filter: brightness(0.5);
  }
  .hint {
	position: absolute;
	top: 68px;
	left: 86px;
	color: white;
	opacity: 0;
	transition: all 0.5s ease-in;
  }
  .profile-img:hover + span {
	opacity: 1;
  }
  .nav-item {
    padding: 10px 20px;
    cursor: pointer;
  }
  .nav-item:hover {
    background: #f4f4f4;
  }
  span {
    display: inline-block;
    margin-left: 20px;
  }
  .col-md-3 {
    padding-right: 0 !important;
  }
  .badge {
    position: relative;
    top:3px;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: rgb(0, 0, 0);
  }
  .badge-dark {
    color: #fff;
  }
</style>
