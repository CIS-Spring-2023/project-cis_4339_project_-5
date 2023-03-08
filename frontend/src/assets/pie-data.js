export const pieData = {
  type: 'pie',
  data: {
    labels: ['77040', '77020', '77479', '77080'],
    datasets: [
      {
        label: 'Clients Per Zipcodes',
        data: [15, 2, 5, 1],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(155, 205, 86)'
        ]
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1
  }
};

export default pieData;
