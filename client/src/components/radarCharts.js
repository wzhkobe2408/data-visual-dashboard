import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props:['data'],
  mounted () {
    this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
  }
}
