<template>
  <div class="tab">
    <div class="tab-header">
        <div :class="{'tab-item':true,'tab-active':showIndex == 1}" @click="toogleTab(1)">Tab 1</div>
        <div :class="{'tab-item':true,'tab-active':showIndex == 2}" @click="toogleTab(2)">Tab 2</div>
        <div :class="{'tab-item':true,'tab-active':showIndex == 3}" @click="toogleTab(3)">Tab 3</div>
    </div>
    <div class="tab-content-container">
        <div class="tab-content" v-if="showIndex == 1">
            <h1>This is the tab 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem temporibus, excepturi voluptas blanditiis mollitia inventore nam, illo nostrum sed amet explicabo modi ipsa illum iste ea accusamus laboriosam itaque.</p>
        </div>
        <div class="tab-content" v-if="showIndex == 2">
            <h1>This is the tab 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem temporibus, excepturi voluptas blanditiis mollitia inventore nam, illo nostrum sed amet explicabo modi ipsa illum iste ea accusamus laboriosam itaque.</p>
        </div>
        <div class="tab-content" v-if="showIndex == 3">
            <h1>This is the tab 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem temporibus, excepturi voluptas blanditiis mollitia inventore nam, illo nostrum sed amet explicabo modi ipsa illum iste ea accusamus laboriosam itaque.</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          showIndex:1
      }
  },
  methods: {
      toogleTab(index) {
          this.showIndex = index;
      }
  }
}
</script>
<style>
    .tab {
        background-color: #fff;
    }
    .tab-header {
        background-color: rgb(92, 125, 218);
    }
    .tab-item {
        padding: 10px;
        color:#fff;
    }
    .tab-item {
        display: inline-block;
        cursor:pointer;
    }
    .tab-active {
        border-bottom: 2px solid rgb(236, 188, 55);
    }
    .tab-content-container {
        padding: 10px;
    }
</style>

