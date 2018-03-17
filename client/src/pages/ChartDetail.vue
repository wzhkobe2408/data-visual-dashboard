<template>
  <div className="chart-detail-container">
    <div class="intro">
    <h3>Chart Detail</h3>
    <span class="date">Created on {{ date }}</span>
    </div>
    <hr />
      <keep-alive>
        <component class="chart" :is="renderComponent" :data="chartData.data"></component>
      </keep-alive>
      <div class="button-group">
        <button class="btn btn-primary">Add Data</button>
        <button class="btn btn-danger">Remove Data</button>
        <button class="btn btn-success">Change Data Type</button>        
      </div>
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
                    <span>{{tableDataItem.data}}</span>
                  </td>
                  <td>
                    <button class="btn btn-outline-primary">编辑</button>
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
export default {
   components: {
        LineChart,
        BubbleChart,
        RadarChart,
        DoughNut,
        PolarAreaChart,
        HorizontalBar
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
        renderComponent:''
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
  h3 {
    float: left;
  }
  .date {
    float: right;
  }
  .intro::after {
    clear: both;
    display: block;
    content: '';
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
      text-align: center;
      position: absolute;
      top: 655px;
      left: 50%;
      transform: translate(-50%,0);
    }
</style>

