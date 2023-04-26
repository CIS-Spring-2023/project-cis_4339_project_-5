<template>
  <div>
    <canvas id="zip-chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

//register the registerables
Chart.register(...registerables);
export default {
  props: {
    zipCodeData: {
      type: Array,
    },
  },
  name: "ZipChart",

  async mounted() {
    const ctx = document.getElementById("zip-chart");
    await new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(this.zipCodeData),
        datasets: [
          {
            label: "Clients Per Zipcodes",
            data: Object.values(this.zipCodeData),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(155, 205, 86)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        lineTension: 1,
      },
    });
  },
};
</script>
