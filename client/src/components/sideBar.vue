<template>
	<div class="col-md-3">
		<div class="card">
      <div class="card-body text-center">
        <img class="profile-img" src="../assets/avatar.png" alt="img">
		<span class="hint">Click to upload</span>
        <p class="mt-1">{{ gettersUserInfo.username }}</p>
        <p>{{ gettersUserInfo.email }}</p>
        <hr />
        <p>Developer | Student</p>
        <button class="btn btn-outline-primary btn-block">Edit</button>
      </div>
      <div>
        <ul class="main-nav">
          <li :key="index" v-for="(item, index) in lists">
            <p ref="p" @click="toggleNestBar($event, index)">{{ item.name }}<span>⏷</span></p>
            <ul v-show="index == showNest.showIndex && showNest.show" class="sub-nav">
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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showNest: {
        showIndex: -1,
        show: false
      },
      lists:[
        {name:'This is the item 1', sub:['This is the sub1', 'This is the sub2','This is the sub1', 'This is the sub2']},
        {name:'This is the item 2', sub:['This is the sub1', 'This is the sub2','This is the sub1', 'This is the sub2','This is the sub1']},
        {name:'This is the item 3', sub:['This is the sub1', 'This is the sub2','This is the sub1']},
        {name:'This is the item 4', sub:['This is the sub1', 'This is the sub2','This is the sub1', 'This is the sub2']},
        {name:'This is the item 5', sub:['This is the sub1', 'This is the sub2','This is the sub1', 'This is the sub2']}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'gettersUserInfo'
    ]),
  },
  methods: {
    handleClick() {
      alert("It worked");
    },
    toggleNestBar(e, index) {
      if (this.showNest.showIndex == index) {
        this.showNest.show = !this.showNest.show;
		e.target.classList.toggle('active')
      } else {
		for(var i = 0; i < this.$refs.p.length; i++) {
			this.$refs.p[i].classList.remove('active')
		}
        this.showNest.showIndex = index;
		e.target.classList.add('active')
        this.showNest.show = true;
      }
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
  }
  .sub-nav li {
    padding: 8px 0 8px 20px;
  }
  .sub-nav li:not(:last-child) {
    border-bottom: 1px solid #e7e7e7;
  }
  .active {
    background: #313131;
    color: #fff;
  }
  .sub-nav li:hover {
    background: #686aff;
    color: white;
  }
</style>
