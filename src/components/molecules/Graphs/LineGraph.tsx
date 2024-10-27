import React from 'react';
import { Line } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
import { options, series } from './LineGraphData';
import { useState, useEffect } from 'react';

const LineGraph = () => {
   const [chartHeight, setChartHeight] = useState(300);

   useEffect(() => {
      const handleResize = () => {
         setChartHeight(window.innerHeight * 0.3); // Set the height to 70% of the screen height
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Set the initial height

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div>
         <div className="flex justify-between border-b py-1 px-2">
            <p>Earnings</p>
            <select
               className="bg-white"
               name="recentActivity"
               id="recentActivity"
            >
               <option value="today">Today</option>
               <option value="last-week">Last Week</option>
               <option value="last-month">Last Month</option>
            </select>
         </div>
         <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={chartHeight}
         />
      </div>
   );
};

export default LineGraph;
