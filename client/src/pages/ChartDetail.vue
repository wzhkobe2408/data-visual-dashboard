<template>
  <div className="chart-detail-container">
    <div class="intro">
    <h3>Chart Detail</h3>
    <span class="date">Created on {{ date }}</span>
    </div>
    <hr />
      <LineChart />
      <table class="table table-striped table-dark">
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
              <tr>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>January</span>
                  </td>
                  <td>
                    <span>25</span>
                  </td>
                  <td>
                    <button class="btn btn-outline-primary">编辑</button>
                  </td>
                  <td><button class="btn btn-outline-danger">删除</button></td>
              </tr>
              <tr>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>January</span>
                  </td>
                  <td>
                    <span>25</span>
                  </td>
                  <td>
                    <button class="btn btn-outline-primary">编辑</button>
                  </td>
                  <td><button class="btn btn-outline-danger">删除</button></td>
              </tr>
              <tr>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>January</span>
                  </td>
                  <td>
                    <span>25</span>
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
    data() {
      return {
        date: new Date().toGMTString()
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
</style>

