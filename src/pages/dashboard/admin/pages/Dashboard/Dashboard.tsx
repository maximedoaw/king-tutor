import React from 'react';
import { generalInfo } from '../../../../../constants/AdminDashboard';
import InforamtionCard from './components/InforamtionCard';
import DashboardTabs from './components/DashboardTabs/DashboardTabs';
function Dashboard() {
   return (
      <div className="w-full px-16 flex flex-col justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[70%] w-full mt-5 md:mt-5">
            {generalInfo.map((item, index) => (
               <InforamtionCard
                  key={index}
                  title={item.title}
                  number={item.amount}
                  img={item.img}
               />
            ))}
         </div>
         <h2 className="font-bold my-5">Here are our tutors</h2>
         <DashboardTabs />
      </div>
   );
}

export default Dashboard;
