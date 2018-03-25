import { HorizontalBar,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
  }
}