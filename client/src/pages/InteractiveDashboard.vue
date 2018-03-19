<template>
  <div class="dashboard-grid">
    <div class="top-graph">
      <div class="top-graph-item" ></div>
      <div class="top-graph-item" ></div>
      <div class="top-graph-item" ></div>
      <div class="top-graph-item" ></div>
    </div>
    <div class="middle-graph">
      <geojsonMap class="geojson-map" />
      <div class="middle-right-graph" >
        <div class="middle-right-graph-item"></div>
        <div class="middle-right-graph-item"></div>        
      </div>
    </div>
    <div class="bottom-graph">
      <div class="bottom-graph-item" ></div>
      <div class="bottom-graph-item" ></div>
      <div class="bottom-graph-item" ></div>
      <div class="bottom-graph-item" ></div>
    </div>
  </div>
</template>
<script>
import geojsonMap from '../components/geojsonMap.vue'

export default {
  components: {
    geojsonMap
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
    background-color: #fff;
    border-radius: 4px;
    border:1px solid #d6d6d6;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
  }
  .bottom-graph-item {
    width: 100%;
    height: 100%;
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
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 1fr 1fr;
  }
  .middle-right-graph-item {
    height: 100%;
    background-color: #fff;
    border:1px solid #d6d6d6;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    border-radius: 4px;
  }
</style>
