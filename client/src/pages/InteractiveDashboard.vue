<template>
  <div class="dashboard-grid">
    <div class="top-graph">
      <div class="top-graph-item" >
        <h3>Average</h3>
      </div>
      <div class="top-graph-item" >
        <h3>Gender Distribution</h3>
      </div>
      <div class="top-graph-item" >
        <h3>Age Distribution</h3>
      </div>
      <div class="top-graph-item" >
        <h3>Partition Distribution</h3>
      </div>
    </div>
    <div class="middle-graph">
      <geojsonMap class="geojson-map" />
      <div class="middle-right-graph" >
        <div class="middle-right-graph-item">
          <h3>Timeline change</h3>
          <lineCharts class="bilibili-linechart" :data="dataSet"/>
        </div>
        <div class="middle-right-graph-item">
          <h3>Bilibili Keyword Cloud</h3>
          <wordCloud />
        </div>        
      </div>
    </div>
    <div class="bottom-graph">
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 

        </div>
        <div class="bottom-graph-item-bottom">

        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 

        </div>
        <div class="bottom-graph-item-bottom">

        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 

        </div>
        <div class="bottom-graph-item-bottom">

        </div>
      </div>
      <div class="bottom-graph-item" >
        <div class="bottom-graph-item-top"> 

        </div>
        <div class="bottom-graph-item-bottom">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import geojsonMap from '../components/geojsonMap.vue'
import wordCloud from '../components/wordCloud.vue'
import lineCharts from '../components/lineCharts.js'
import { mapState } from 'vuex'

export default {
  components: {
    geojsonMap,
    wordCloud,
    lineCharts
  },
  computed: {
    ...mapState({
      dataSet: state => state.dataset[0]
    })
  }
}
</script>
<style scoped>
  .dashboard-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 180px auto 320px;
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
    width: 100%;
    height: 100%;
    padding: 10px;
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
    height: 70%;
    background-color: rgb(175, 175, 175);
  }
  .bilibili-linechart {
    width: 100%;
    height: 200px;
  }
</style>
