import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  props:['data'],
  mounted () {
    this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
  }
}