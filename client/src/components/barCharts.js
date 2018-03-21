import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }, {
        responsive: true, 
        maintainAspectRatio: false, 
        title: {
            display: true,
            text: 'Average'
        }, 
        lineAt: 30, 
        plugins: [{
            id: 'averageLine',
            afterDraw(chart) {
                if (typeof chart.config.options.lineAt != 'undefined') {
                    var lineAt = chart.config.options.lineAt;
                    var ctxPlugin = chart.chart.ctx;
                    var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
                    var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];
                       
                    // I'm not good at maths
                    // So I couldn't find a way to make it work ...
                    // ... without having the `min` property set to 0
                    if(yAxe.min != 0) return;
                    
                    ctxPlugin.strokeStyle = "red";
                    ctxPlugin.beginPath();
                    lineAt = (lineAt - yAxe.min) * (100 / yAxe.max);
                    lineAt = (100 - lineAt) / 100 * (yAxe.height) + yAxe.top;
                    ctxPlugin.moveTo(xAxe.left, lineAt);
                    ctxPlugin.lineTo(xAxe.right, lineAt);
                    ctxPlugin.stroke();
                }
            }
    }]})
  }
}