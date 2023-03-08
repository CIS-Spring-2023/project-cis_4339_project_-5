<template>
  <div>
    <canvas id="zip-chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
import pieData from '../assets/pie-data.js'

//register the registerables
Chart.register(...registerables)
export default {
  name: 'ZipChart',
  data() {
    return {
      pieData: pieData
    }
  },

  mounted() {
    const ctx = document.getElementById('zip-chart');
    new Chart(ctx, this.pieData);
  }
}
</script>
