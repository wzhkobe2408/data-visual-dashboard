import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props:['data'],
  mounted () {
    this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
  }
}