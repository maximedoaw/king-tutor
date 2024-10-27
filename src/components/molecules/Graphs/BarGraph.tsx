import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { BarSeries, BarOptions } from './BarGraphData';

const BarChart = () => {
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
   const options = {};

   return (
      <div>
         <div className="flex justify-between border-b py-1 px-2">
            <p>Profile View</p>
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
            options={BarOptions}
            series={BarSeries}
            type="bar"
            height={chartHeight}
         />{' '}
      </div>
   );
};

export default BarChart;
