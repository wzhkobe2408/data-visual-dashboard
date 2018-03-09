<template>
	<div class="col-md-3">
		<div class="card">
      <div class="card-body text-center">
        <img class="profile-img" src="../assets/avatar.png" alt="img">
        <p class="mt-1">Wang Zhonghuan</p>
        <hr />
        <p>Developer | Student</p>
        <button class="btn btn-outline-primary btn-block">Edit</button>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">List</li>
        <li class="list-group-item">List</li>
        <li class="list-group-item">List</li>
        <li class="list-group-item">List</li>
        <li class="list-group-item">List</li>
        </ul>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:''
    }
  },
  methods: {
    handleClick() {
      alert("It worked");
    }
  }
};
</script>
<style scoped>
  .profile-img {
    border-radius: 50%;
    width: 120px;
    height: auto;
  }
</style>
