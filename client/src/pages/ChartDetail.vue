<template>
  <div className="chart-detail-container">
    <div class="intro">
      <router-link to="/"><i class="fas fa-chevron-left"></i></router-link>
    <h3 class="detail_title">Chart Detail</h3>
    <span class="date">Created on {{ date }}</span>
    </div>
    <hr />
        <div class="wrapper">
          <component ref="heart" class="chart" :is="renderComponent" :chart-data="dataset[index]" :index="index"></component>
          <div class="button-group">
              <button class="btn btn-primary" data-toggle="modal" data-target="#addData">Add Data</button>
              <button class="btn btn-danger">Remove Data</button>
              <div class="btn-group">
                <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Change Datatype
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Bar</a>
                  <a class="dropdown-item" href="#">Line</a>
                  <a class="dropdown-item" href="#">Radar</a>
                </div>
              </div>        
          </div>
          <div class="control-wrapper">
            <div @click="decreaseIndex" class="left-control">
              <span>&#x27a4;</span>
            </div>
            <div @click="increaseIndex" class="right-control">
              <span>&#x27a4;</span>
            </div>
          </div>
        </div>
          <div>
              <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>数据标签</th>
                    <th>数据</th>
                    <th>编辑</th>
                    <th>删除</th>                     
                </tr>
            </thead>
            <tbody v-if="chartData.index == 1">
               <tr v-for="i in (0,dataset[chartData.index].datasets[0].data.length + dataset[chartData.index].datasets[1].data.length)" :key="i">
                  <td>
                    {{i-1}}
                  </td>
                  <td>
                    {{i <= dataset[chartData.index].datasets[0].data.length? dataset[chartData.index].datasets[0].label : dataset[chartData.index].datasets[1].label}}
                  </td>
                  <td>
                    {{i <= dataset[chartData.index].datasets[0].data.length? 
                    dataset[chartData.index].datasets[0].data[i-1] : dataset[chartData.index].datasets[1].data[i-1-dataset[chartData.index].datasets[0].data.length]}}
                  </td>
                  <td>
                    <button class="btn btn-outline-primary">编辑</button>
                  </td>
                  <td>
                    <button class="btn btn-outline-danger">删除</button>
                  </td>
                </tr>
             </tbody>
             <tbody v-else>
                 <tr :key="index" v-for="(row, index) in dataset[chartData.index].labels">
                   <td>
                     <span>{{index}}</span>
                   </td>
                   <td>
                     <span>{{row}}</span>
                   </td>
                   <td>
                     <span>{{ dataset[chartData.index].datasets[0].data[index] }}</span>
                     <span v-if="dataset[chartData.index].datasets.length>1"> — {{ dataset[chartData.index].datasets[1].data[index] }}</span>
                   </td>
                   <td>
                     <button class="btn btn-outline-primary">编辑</button>
                   </td>
                   <td>
                     <button class="btn btn-outline-danger">删除</button>
                   </td>
                 </tr>
             </tbody>
         </table>
          </div>
      <Modal id="addData" title="Add data">
        <form slot="main">
          <div class="form-group">
            <label for="label">Label</label>
            <input v-model="label"  type="text" id="label" class="form-control" />
          </div>
           <div v-if="dataset[chartData.index].labels.length <= 0" class="form-group">
            <label for="data">X坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="dataset[chartData.index].labels.length <= 0" class="form-group">
            <label for="data">Y坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="dataset[chartData.index].labels.length <= 0" class="form-group">
            <label for="data">Z坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="dataset[chartData.index].datasets.length == 1" class="form-group">
            <label for="data">Data</label>
            <input v-model="data"  type="text" class="form-control" id="data" />
          </div>
          <div v-if="dataset[chartData.index].datasets.length !== 1 && dataset[chartData.index].labels.length > 0" class="form-group">
            <label for="data1">Data Set-1</label>
            <input type="text" class="form-control" id="data1" />
          </div>
          <div v-if="dataset[chartData.index].datasets.length !== 1 && dataset[chartData.index].labels.length > 0" class="form-group">
            <label for="data2">Data Set-2</label>
            <input type="text" class="form-control" id="data2" />
          </div>
        </form>
          <button slot="cancel" type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" data-dismiss="modal" slot="confirm" class="btn btn-primary" @click="addData">Confirm</button>
      </Modal>
  </div>
</template>
<script>
import { mapGetters,mapState,mapActions } from 'vuex'
import LineChart from '../components/lineCharts.js'
import BubbleChart from '../components/bubbleCharts.js'
import RadarChart from '../components/radarCharts.js'
import DoughNut from '../components/doughNut.js'
import PolarAreaChart from '../components/polarAreaCharts.js'
import HorizontalBar from '../components/horizontalBar.js'
import Modal from '../components/modal.vue'
export default {
   components: {
        LineChart,
        BubbleChart,
        RadarChart,
        DoughNut,
        PolarAreaChart,
        HorizontalBar,
        Modal
    },
    data() {
      return {
        date: new Date().toGMTString(),
        editable: false,
        editIndex: -1,
        label: '',
        data: ''
      }
    },
    computed: {
      ...mapState({
          chartData: state => state.chartData,
          index: state => state.chartData.index,
          dataset: state => state.dataset
        }),
        renderComponent() {
          switch (this.chartData.type) {
          case 'linechart':
            return 'LineChart'
            break;
          case 'bubblechart':
            return 'BubbleChart'
            break;
          case 'doughnut':
            return 'DoughNut'
            break;
          case 'radarchart':
            return 'RadarChart'
            break;
          case 'polarareachart':
            return 'PolarAreaChart'
            break;
          case 'horizontalbar':
            return 'HorizontalBar'
            break;
          default:
            return ''
            break;
        }
        }
      },
    methods: {
      ...mapActions([
        'addChartData',
        'setChartData',
        'stopLoading',
        'startLoading'
      ]),
      addData() { 
        this.addChartData({
          data: this.data,
          label: this.label
        }, this.index)
        this.$refs.heart.renderChart(this.dataset[this.chartData.index])
      },
      increaseIndex() {
        var typeArr = ['linechart','bubblechart','doughnut','radarchart','polarareachart','horizontalbar']
        var currentIndex = typeArr.indexOf(this.chartData.type)
        this.setChartData({
          type: typeArr[currentIndex + 1],
          index: this.chartData.index + 1
        }) 
      },
      decreaseIndex() {
        var typeArr = ['linechart','bubblechart','doughnut','radarchart','polarareachart','horizontalbar']
        var currentIndex = typeArr.indexOf(this.chartData.type)
        this.setChartData({
          type: typeArr[currentIndex - 1],
          index: this.chartData.index - 1
        }) 
      },
      edit(index) {
        this.editIndex = index;
        this.editable = true;
      },
      cancle() {
        this.editIndex = -1;
        this.editable = false;
      }
    },
    created() {
    },
    mounted() {
        this.stopLoading()
    },
    beforeDestroy() {
        this.startLoading()
    }
}
</script>
<style scoped>
  .chart-detail-container {
    width:90%;
    margin: 0 auto;
  }
  .table {
    margin-top: 10px;
  }
  .detail_title {
    display:inline-block;
    margin-left: 20px;
    margin-bottom: 0;
    vertical-align: bottom;
  }
  .date {
    float: right;
  }
  .wrapper {
    position: relative;
  }
  .chart {
      background: #ffffff;
      border:1px solid #d6d6d6;
      border-radius:4px;
      box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
      padding: 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      padding-bottom: 80px;
    }
    .button-group button {
      margin-right: 20px;
    }
    .button-group {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%,0);
    }
    .fa-chevron-left {
      color:#000 !important;
      font-size: 20px;
    }
    .control-wrapper {
      font-size: 25px;
      color: #0084ff;
      position: absolute;
      padding: 0 20px;
      top: 50%;
      left: 0;
      right: 0;
      transform: translate(0, -50%);
    }
    .left-control {
      cursor: pointer;
      float:left;
      transform: rotateZ(180deg);
    }
    .right-control {
      cursor: pointer;
      float:right;
    }
</style>

