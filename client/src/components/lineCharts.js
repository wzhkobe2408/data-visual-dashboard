import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data'],
  mounted () {
    this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
  }
}