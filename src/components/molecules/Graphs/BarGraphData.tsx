import { ApexOptions } from 'apexcharts';

export const BarOptions: ApexOptions = {
   chart: {
      type: 'bar',
   },
   colors: ['rgba(75, 192, 192, 1)'], // Set the bar color to teal
   dataLabels: {
      enabled: false,
   },
   xaxis: {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
   },
   yaxis: {
      title: {
         text: 'Value',
      },
   },
};

export const BarSeries = [
   {
      name: 'Profile view',
      data: [200, 430, 350, 470, 300, 600, 550],
   },
];
