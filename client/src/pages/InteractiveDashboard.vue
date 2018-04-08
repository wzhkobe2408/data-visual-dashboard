<template>
  <div style="margin-bottom: 40px">
    <div class="title"><h2>Interative Map</h2>
      <hr />
    </div>
  <div class="dashboard-grid">
    <div class="top-graph">
      <div class="top-graph-item" >
        <barCharts class="average-barcharts" />
      </div>
      <div class="top-graph-item" >
        <pieCharts class="gender-bar" />
      </div>
      <div class="top-graph-item" >
        <horizontalBar :chart-data="horizontalBarData" class="ageBar" />
      </div>
      <div class="top-graph-item" >
        <highCharts :options="options"  :styles="styles" />
      </div>
    </div>
    <div class="middle-graph">
      <geojsonMap class="geojson-map" />
      <div class="middle-right-graph" >
        <div class="middle-right-graph-item">
          <h3>Timeline change</h3>
          <lineCharts class="bilibili-linechart" :chart-data="dataSet"/>
        </div>
        <div class="middle-right-graph-item">
          <h3>Keyword Cloud</h3>
          <wordCloud />
        </div>        
      </div>
    </div>
    <div class="bottom-graph">
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 
          <a target="_blank" href="https://www.bilibili.com"><img src="../assets/bilibili.jpg" alt="img"></a>
          <hr>
        </div>
        <div class="bottom-graph-item-bottom">
          <p><span>up主</span>：★⑥檤轮囬★</p>
          <p><span>关注人数：</span>105w</p>
          <p><span>稿件：</span>351</p>
        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 
          <a target="_blank" href="https://www.bilibili.com"><img src="../assets/bilibili.jpg" alt="img"></a>
          <hr>
        </div>
        <div class="bottom-graph-item-bottom">
          <p><span>up主</span>：木鱼水心</p>
          <p><span>关注人数：</span>156w</p>
          <p><span>稿件：</span>649</p>
        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 
          <a target="_blank" href="https://www.bilibili.com"><img src="../assets/bilibili.jpg" alt="img"></a>      
          <hr>
        </div>
        <div class="bottom-graph-item-bottom">
          <p><span>up主</span>：3Blue1Brown</p>
          <p><span>关注人数：</span>18.6w</p>
          <p><span>稿件：</span>58</p>
        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 
          <a target="_blank" href="https://www.bilibili.com"><img src="../assets/bilibili.jpg" alt="img"></a>          
          <hr>
        </div>
        <div class="bottom-graph-item-bottom">
          <p><span>up主</span>：水天王x</p>
          <p><span>关注人数：</span>51</p>
          <p><span>稿件：</span>14.9w</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import geojsonMap from '../components/geojsonMap.vue'
import wordCloud from '../components/wordCloud.vue'
import lineCharts from '../components/lineCharts.js'
import pieCharts from '../components/pieCharts.js'
import barCharts from '../components/barCharts.js'
import horizontalBar from '../components/horizontalBar.js'
import { mapState, mapActions } from 'vuex'

import Highcharts from 'highcharts/highstock';
import highCharts from '../components/highCharts.vue'
export default {
  components: {
    geojsonMap,
    wordCloud,
    lineCharts,
    pieCharts,
    highCharts,
    barCharts,
    horizontalBar
  },
  computed: {
    ...mapState({
      dataSet: state => state.dataset[0]
    })
  },
  methods: {
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
    },
  data() {
    return {
       options: {
          colorAxis: {
              minColor: '#FFFFFF',
              maxColor: Highcharts.getOptions().colors[0]
          },
          series: [{
              type: 'treemap',
              layoutAlgorithm: 'squarified',
              data: [{
                  name: '舞蹈区',
                  value: 6,
                  colorValue: 1
              }, {
                  name: '鬼畜区',
                  value: 6,
                  colorValue: 2
              }, {
                  name: '音乐区',
                  value: 4,
                  colorValue: 3
              }, {
                  name: '直播区',
                  value: 3,
                  colorValue: 4
              }, {
                  name: '科技区',
                  value: 2,
                  colorValue: 5
              }, {
                  name: '动画区',
                  value: 2,
                  colorValue: 6
              }, {
                  name: '电影区',
                  value: 1,
                  colorValue: 7
              }]
          }],
          title: {
              text: 'Partition Distribution'
          }
      },
      styles: {
        width: 270,
        height: 220
      },
      horizontalBarData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 27]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
  .dashboard-grid {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 240px auto 320px;
  }
  .title {
    margin-left: 5%;
    margin-right: 5%;
  }
  .top-graph {
    grid-column: 1 / -1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
  .bottom-graph {
    grid-column: 1 / -1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
  .top-graph-item {
    background-color: #fff;
    border-radius: 4px;
    border:1px solid #d6d6d6;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
  }
  .bottom-graph-item {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;;
    border:1px solid #d6d6d6;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  .middle-graph {
    grid-column: 1 / -1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
  }
  .geojson-map {
    grid-column: 1 / 9;
    width: 100% !important;
  }
  .middle-right-graph {
    height: 550px;
    grid-column: 9 / -1;
  }
  .middle-right-graph-item {
    height: 270px;
    padding: 10px;
    background-color: #fff;
    border:1px solid #d6d6d6;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    border-radius: 4px;
  }
  .middle-right-graph-item:not(:last-child) {
    margin-bottom: 10px;
  }
  h3 {
    margin: 0;
    padding: 0;
  }
  .bottom-graph-item-top {
    height: 190px;
    margin-bottom: 30px;
  }
  .bottom-graph-item-top img {
    width: 100%;
  }
  .bilibili-linechart {
    width: 100%;
    height: 200px;
  }
  .gender-bar {
    width: 270px;
    height: 220px;
  }
  .bottom-graph-item-bottom p {
    margin: 6px 0;
  }
  .average-barcharts {
    width: 270px;
    height: 220px;
  }
  .ageBar {
    width: 270px;
    height: 220px;
  }
</style>
