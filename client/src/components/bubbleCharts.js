import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  props:['data'],
  mounted () {
    this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
  }
}