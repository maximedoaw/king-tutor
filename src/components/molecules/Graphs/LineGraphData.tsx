import { LineControllerDatasetOptions } from 'chart.js';
import React from 'react';

import { ApexOptions } from 'apexcharts';

export const series = [
   {
      name: 'Earnings',
      data: [50000, 52000, 51000, 53000, 54000, 55000, 56000],
   },
];

export const options: ApexOptions = {
   chart: {
      type: 'area',
      height: 300,
      toolbar: {
         show: false,
         // Hides the toolbar with zoom/pan options
      },
   },
   colors: ['rgba(140, 162, 255, 1)'],

   stroke: {
      curve: 'smooth',
      // Provides a smooth curve
   },
   xaxis: {
      categories: [
         'Aug 1',
         'Aug 2',
         'Aug 3',
         'Aug 4',
         'Aug 5',
         'Aug 6',
         'Aug 7',
      ],
   },
   tooltip: {
      enabled: true,
      x: {
         format: 'dd MMM',
         // Formats the date on the tooltip
      },
   },
   grid: {
      show: true,
      borderColor: '#e7e7e7',
      strokeDashArray: 4,
      // Dashes on the grid lines
   },
   yaxis: {
      title: {
         text: 'Earnings',
      },
      labels: {
         formatter: (value: number) => `${value / 1000}k`,
         // Custom formatting for y-axis labels
      },
   },
   fill: {
      opacity: 0.3,
      // Controls the opacity of the fill under the line
      colors: ['rgba(140, 162, 255, 1)'],
   },
   legend: {
      show: false,
      // Hides the legend
   },
};
