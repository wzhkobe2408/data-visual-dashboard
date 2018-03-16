<template>
  <div class="tab">
    <div class="tab-header">
        <div :class="{'tab-item':true,'tab-active':showIndex == 1}" @click="toogleTab(1)">Activity</div>
        <div :class="{'tab-item':true,'tab-active':showIndex == 2}" @click="toogleTab(2)">History</div>
        <div :class="{'tab-item':true,'tab-active':showIndex == 3}" @click="toogleTab(3)">Playground</div>
    </div>
    <div class="tab-content-container">
        <div class="tab-content" v-if="showIndex == 1">
            <h1>Recent Activity</h1>
            <hr />
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur <span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
            </ul>
        </div>
        <div class="tab-content" v-if="showIndex == 2">
            <h1>History Record</h1>
            <hr />
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
            </ul>
        </div>
        <div class="tab-content" v-if="showIndex == 3">
            <h1>Playground</h1>
            <hr />
            <div class="playground">
                <div class="play-item"></div>
                <div class="play-item"></div>
                <div class="play-item"></div>
                <div class="play-item"></div>
                <div class="play-item"></div>
                <div class="play-item"></div>                
            </div>
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
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }
    .tab-header {
        background-color: rgb(44, 44, 44);
        border-radius: 4px 4px 0 0;
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
    .tab-content ul {
        list-style: none;
        padding: 0 20px;
        margin: 0;
        font-size: 20px;
    }
    .tab-content li::after {
        content: '';
        display: block;
        clear: both;
    }
    .tab-content .playground {
        display:grid;
        grid-template-columns:repeat(6,1fr); 
        grid-gap: 10px;
    }
    .tab-content .play-item {
        width: 100%;
        height: 100px;
        background: rgb(36, 36, 36);
        border-radius: 4px;
    }
    .tab-content span {
        float: right;
    }
</style>

