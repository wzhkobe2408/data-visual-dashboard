<template>
  <div className="chart-detail-container">
    <div class="intro">
      <router-link to="/"><i class="fas fa-chevron-left"></i></router-link>
    <h3 class="detail_title">Chart Detail</h3>
    <span class="date">Created on {{ date }}</span>
    </div>
    <hr />
      <keep-alive>
        <div class="wrapper">
          <component class="chart" :is="renderComponent" :data="chartData.data"></component>
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
        </div>
      </keep-alive>
      <table class="table table-striped table-dark"       v-if="chartData.data.labels.length > 0">
        <thead>
            <tr>
                <th>序号</th>
                <th>标签</th>
                <th>数据</th>
                <th>编辑</th>
                <th>删除</th>                     
            </tr>
        </thead>
          <tbody>
              <tr :key="index" v-for="(tableDataItem,index) in tableData">
                  <td>
                    <span>{{index}}</span>
                  </td>
                  <td>
                    <span>{{tableDataItem.label}}</span>
                  </td>
                  <td>
                    <input class="form-control" v-if="editIndex == index && editable == true" type="text" :value="tableDataItem.data">
                    <span v-else >{{tableDataItem.data}}</span>
                  </td>
                  <td>
                    <button v-if="editable && index==editIndex" class="btn btn-outline-danger" @click="cancle">取消</button>
                    <button v-if="editable && index==editIndex" class="btn btn-outline-success">确定</button>
                    <button @click="edit(index)" v-else class="btn btn-outline-primary">编辑</button>
                  </td>
                  <td><button class="btn btn-outline-danger">删除</button></td>
              </tr>
          </tbody>
      </table>

      <table class="table table-striped table-dark"       v-if="!chartData.data.labels.length > 0">
        <thead>
            <tr>
                <th>数据组</th>
                <th>x坐标</th>
                <th>y坐标</th>
                <th>r半径</th>
                <th>编辑</th>
                <th>删除</th>                     
            </tr>
        </thead>
          <tbody>
              <tr :key="index" v-for="(tableDataItem,index) in tableData">
                  <td>
                    <span>{{ tableDataItem.label }}</span>
                  </td>
                  <td>
                    <span>{{ tableDataItem.x }}</span>
                  </td>
                  <td>
                    <span>{{ tableDataItem.y }}</span>
                  </td>
                  <td>
                    <span>{{ tableDataItem.r }}</span>
                  </td>
                  <td>
                    <button class="btn btn-outline-primary">编辑</button>
                  </td>
                  <td><button class="btn btn-outline-danger">删除</button></td>
              </tr>
          </tbody>
      </table>
      <Modal id="addData" v-bind:label="label" v-bind:data="data" title="Add data">
        <form>
          <div class="form-group">
            <label for="label">Label</label>
            <input v-model="label"  type="text" id="label" class="form-control" />
          </div>
           <div v-if="this.chartData.data.labels.length <= 0" class="form-group">
            <label for="data">X坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="this.chartData.data.labels.length <= 0" class="form-group">
            <label for="data">Y坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="this.chartData.data.labels.length <= 0" class="form-group">
            <label for="data">Z坐标</label>
            <input type="text" class="form-control" id="data" />
          </div>
          <div v-if="this.chartData.data.datasets.length == 1" class="form-group">
            <label for="data">Data</label>
            <input v-model="data"  type="text" class="form-control" id="data" />
          </div>
          <div v-if="this.chartData.data.datasets.length !== 1 && this.chartData.data.labels.length > 0" class="form-group">
            <label for="data1">Data Set-1</label>
            <input type="text" class="form-control" id="data1" />
          </div>
          <div v-if="this.chartData.data.datasets.length !== 1 && this.chartData.data.labels.length > 0" class="form-group">
            <label for="data2">Data Set-2</label>
            <input type="text" class="form-control" id="data2" />
          </div>
        </form>
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
    computed: {
      ...mapState({
        chartData: state => state.chartData
        }),
      tableData() {
        if (this.chartData.data.labels.length > 0) {
          var tableData = this.chartData.data.labels.map(label => {
            return { label: label }
          })
          for (var i = 0; i < tableData.length; i++) {
            if(this.chartData.data.datasets.length == 1) {
              tableData[i].data = this.chartData.data.datasets[0].data[i]
            } else {
              tableData[i].data = ''
              for (var j = 0; j < this.chartData.data.datasets.length; j++) {
                tableData[i].data += this.chartData.data.datasets[j].data[i] + ' | '
              }
              tableData[i].data = tableData[i].data.substring(0,tableData[i].data.length - 2)
            }
          }
          return tableData
        } else {
          var tableData = []
              this.chartData.data.datasets.forEach(element => {
                  element.data.forEach(item => {
                    tableData.push({
                      label: element.label,
                      x: item.x,
                      y: item.y,
                      r: item.r
                    })
                  })
              })
              return tableData
           }
        }
      },
    data() {
      return {
        date: new Date().toGMTString(),
        renderComponent:'',
        editable: false,
        editIndex: -1,
        label: '',
        data: ''
      }
    },
    methods: {
      addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
      },
      removeData(chart) {
          chart.data.labels.pop();
          chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
          });
          chart.update();
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
              switch (this.chartData.type) {
          case 'linechart':
            this.renderComponent = 'LineChart'
            break;
          case 'bubblechart':
            this.renderComponent = 'BubbleChart'
            break;
          case 'doughnut':
            this.renderComponent = 'DoughNut'
            break;
          case 'radarchart':
            this.renderComponent = 'RadarChart'
            break;
          case 'polarareachart':
            this.renderComponent = 'PolarAreaChart'
            break;
          case 'horizontalbar':
            this.renderComponent = 'HorizontalBar'
            break;
          default:
            break;
        }
    }
}
</script>
<style scoped>
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
</style>

