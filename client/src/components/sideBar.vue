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
        <li class="list-group-item" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">List</li>
        <div id="collapseOne" class="collapse show">
          This is the test
        </div>
        <li class="list-group-item" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">List</li>
        <div id="collapseTwo" class="collapse">
          This is the test
        </div>
        <li class="list-group-item" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">List</li>
        <div id="collapseThree" class="collapse">
          This is the test
        </div>
        <li class="list-group-item" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">List</li>
        <div id="collapseFour" class="collapse">
          This is the test
        </div>
        <li class="list-group-item" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">List</li>
        <div id="collapseFive" class="collapse">
          This is the test
        </div>
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
