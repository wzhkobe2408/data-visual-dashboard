<template>
  <div class="charts">
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
        <div class="add-button"><i class="fas fa-plus-circle"></i></div>
        <div class="social-icon-group mx-auto">
            <i class="fas fa-comment-alt"></i> <span style="margin-right:10px">10</span>
            <i class="fas fa-thumbs-up"></i> <span style="margin-right:10px">10</span>
            <i class="fas fa-thumbs-down"></i> <span style="margin-right:10px">10</span>
        </div>
  </div>
</template>
 
<script>
import VueHighcharts from 'vue2-highcharts'

export default{
    components: {
        VueHighcharts
    },
    data(){
      return{
        options: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Monthly Average Temperature'
          },
          subtitle: {
            text: 'Source: WorldClimate.com'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [
            {
              name: 'Tokyo',
              marker: {
                symbol: 'square'
              },
              data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }
          ]
        }
      }
    },
    methods: {
      updateData() {
        console.log(this.$refs)
      }
    }
}
</script>
<style scoped>
  .vue-highcharts {
    box-shadow: 0 0 0 rgba(0,0,0,0);
    border-radius: 0;
    padding: 0.5em 0em 1.5em 0em;
  }
    .charts {
      position: relative;
  }
    .add-button {
      position: absolute;
      top: 45px;
      right: 20px;
      font-size: 20px;
      color:rgb(72, 192, 92);
  }
    .social-icon-group {
      position: absolute;
      top: 86%;
      left: 35%;
      font-size: 15px;
  }
</style>

