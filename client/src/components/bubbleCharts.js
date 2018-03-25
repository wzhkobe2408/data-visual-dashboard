import { Bubble ,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bubble,
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
  }
}