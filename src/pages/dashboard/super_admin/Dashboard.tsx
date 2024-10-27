import React from 'react';
import { generalInfo } from '../../../constants/AdminDashboard';
import InforamtionCard from '../admin/pages/Dashboard/components/InforamtionCard';
import DashboardTabs from '../admin/pages/Dashboard/components/DashboardTabs/DashboardTabs';
import avatar from '../../../assets/icons/ppleIcon.png';

function SuperAdminDashboard() {
   return (
      <div className="w-full px-16 mt-12">
         <div className="flex flex-row gap-4 w-full md:mt-0">
            {generalInfo.map((item, index) => (
               <InforamtionCard
                  key={index}
                  title={item.title}
                  number={item.amount}
                  img={item.img}
               />
            ))}
            <InforamtionCard title="Manage Admin" number={100} img={avatar} />
         </div>
         <h2 className="font-bold my-6">Super Admin Here are our tutors</h2>
         <DashboardTabs />
      </div>
   );
}

export default SuperAdminDashboard;
