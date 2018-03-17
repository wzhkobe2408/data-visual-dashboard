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
                <li>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit<span>2017-05-01</span></li>
                <li>consequatur magnam harum qui aut temporibus dolore<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Architecto vero aut neque tenetur, suscipit dolore in cum, repellat<span>2017-05-01</span></li>
                <li>Eos molestias commodi vel quos neque sunt.<span>2017-05-01</span></li>
            </ul>
        </div>
        <div class="tab-content" v-if="showIndex == 2">
            <h1>History Record</h1>
            <hr />
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit<span>2017-05-01</span></li>
                <li>consequatur magnam harum qui aut temporibus dolore<span>2017-05-01</span></li>
                <li>Lorem ipsum dolor sit amet consectetur<span>2017-05-01</span></li>
                <li>Architecto vero aut neque tenetur, suscipit dolore in cum, repellat<span>2017-05-01</span></li>
                <li>Eos molestias commodi vel quos neque sunt.<span>2017-05-01</span></li>
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
        padding: 10px 20px 20px;
    }
    .tab-content ul {
        list-style: none;
        margin: 0;
        padding:0;
        font-size: 20px;
    }
    .tab-content li::after {
        content: '';
        display: block;
        clear: both;
    }
    .tab-content .playground {
        display:grid;
        grid-template-columns:repeat(5,1fr); 
        grid-gap: 10px;
    }
    .tab-content .play-item {
        width: 100%;
        height: 120px;
        border-radius: 4px;
    }
    .tab-content .play-item:hover {
        filter: brightness(0.6);
    }
    .play-item:nth-child(1) {
        background: url(https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&auto=format&fit=crop&w=750&q=80) no-repeat center center;
        background-size: cover;
    }
    .play-item:nth-child(2) {
        background: url(https://images.unsplash.com/photo-1506043959821-2eda767099c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8516f569db6d6ddcbc8daae137d08216&auto=format&fit=crop&w=667&q=80) no-repeat center center;
        background-size: cover;
    }
    .play-item:nth-child(3) {
        background: url(https://images.unsplash.com/photo-1507905155456-d8b1a9e5e55b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aed1c5c3705fe91cd2bdfffc37cd7886&auto=format&fit=crop&w=750&q=80) no-repeat center center;
        background-size: cover;
    }
    .play-item:nth-child(4) {
        background: url(    https://images.unsplash.com/photo-1516203294340-5ba5f612dc6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b79294f231ab4799218e82818a07de1&auto=format&fit=crop&w=1485&q=80) no-repeat center center;
        background-size: cover;
    }
    .play-item:nth-child(5) {
        background: url(        https://images.unsplash.com/photo-1464039397811-476f652a343b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86ec8c23fcac41d5c77684ef15ea95d5&auto=format&fit=crop&w=748&q=80) no-repeat center center;
        background-size: cover;
    }
    .tab-content span {
        float: right;
    }
</style>

