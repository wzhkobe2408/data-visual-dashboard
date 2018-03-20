import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [40, 60],
          backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)'
					],
        }
      ]
    }, {
          responsive: true, 
          maintainAspectRatio: false, 
          title: {
            display: true,
            text: 'Gender Distribution'
    }})
  }
}