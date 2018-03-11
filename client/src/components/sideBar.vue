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
      <div>
        <ul class="main-nav">
          <li :key="index" v-for="(item, index) in lists">
            <p>{{ item.name }}<span>⏷</span></p>
            <ul class="sub-nav">
              <li :key="index" v-for="(subItem, index) in item.sub">
                {{ subItem }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists:[
        {name:'This is the item 1', sub:['This is the sub1', 'This is the sub2']},
        {name:'This is the item 2', sub:['This is the sub1', 'This is the sub2']},
        {name:'This is the item 3', sub:['This is the sub1', 'This is the sub2']},
        {name:'This is the item 4', sub:['This is the sub1', 'This is the sub2']},
        {name:'This is the item 5', sub:['This is the sub1', 'This is the sub2']}
      ]
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
  .nested {
    padding-left:40px;
  }
  ul {
    list-style: none;
    padding:0;
    margin: 0;
  }
  li {
    cursor: pointer;
  }
  .main-nav p {
    padding: 10px;
    margin: 0;
  }
  .main-nav p span {
    float: right;
  }
  .main-nav > li:nth-child(2n) {
    background: rgb(255, 255, 255);
  }
  .main-nav > li:nth-child(2n + 1) {
    background: #efefef;
  }
  .sub-nav {
    background: #f5f5f5;
    padding:10px 20px;
  }
  .sub-nav li {
    padding: 5px 0;
  }
  .sub-nav li:not(:last-child) {
    border-bottom: 1px solid #c4c4c4;
  }
</style>
