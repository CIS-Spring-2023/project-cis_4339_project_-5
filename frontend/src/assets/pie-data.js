import { zip_client_data } from "../mock_data";
console.log(zip_client_data)
export const pieData = {

  type: 'pie',
  data: {
    labels: Object.keys(zip_client_data),
    datasets: [
      {
        label: 'Clients Per Zipcodes',
        data: Object.values(zip_client_data),
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
