import { useState } from 'react';
import Flagged from './Flagged';
import Inactive from './Inactive';
import PendingVerification from './PendingVerification';
import AllActiveTutors from './AllActiveTutors';
import VerifiedTutors from './VerifiedTutors';
import Search from '../Search/Search';

function DashboardTabs() {
   const [activeTab, setActiveTab] = useState(1);

   const handleTabClick = (tabIndex: number) => {
      setActiveTab(tabIndex);
   };

   const renderTabContent = () => {
      switch (activeTab) {
         case 1:
            return (
               <div>
                  <Search />
                  <AllActiveTutors />
               </div>
            );
         case 2:
            return (
               <div>
                  <Search />
                  <VerifiedTutors />
               </div>
            );
         case 3:
            return (
               <div>
                  <Search />
                  <PendingVerification />{' '}
               </div>
            );
         case 4:
            return (
               <div>
                  <Search />
                  <Flagged />{' '}
               </div>
            );
         case 5:
            return (
               <div>
                  <Search />
                  <Inactive />{' '}
               </div>
            );
         default:
            return null;
      }
   };

   return (
      <div className="mt-3 ">
         <div className="flex justify-between space-x-2 border-b-[1.5px] overflow-x-auto">
            <button
               onClick={() => handleTabClick(1)}
               className={`tab-button ${
                  activeTab === 1
                     ? 'active border-b-[3.5px] border-[#2B7CF8]'
                     : ''
               }`}
            >
               All active tutors
            </button>
            <button
               onClick={() => handleTabClick(2)}
               className={`tab-button ${
                  activeTab === 2
                     ? 'active border-b-[3.5px] border-[#2B7CF8]'
                     : ''
               }`}
            >
               Verified tutors
            </button>
            <button
               onClick={() => handleTabClick(3)}
               className={`tab-button ${
                  activeTab === 3
                     ? 'active border-b-[3.5px] border-[#2B7CF8]'
                     : ''
               }`}
            >
               Pending Verifications
            </button>
            <button
               onClick={() => handleTabClick(4)}
               className={`tab-button ${
                  activeTab === 4
                     ? 'active border-b-[3.5px] border-[#2B7CF8]'
                     : ''
               }`}
            >
               Banned/Flagged
            </button>
            <button
               onClick={() => handleTabClick(5)}
               className={`tab-button ${
                  activeTab === 5
                     ? 'active border-b-[3.5px] border-[#2B7CF8]'
                     : ''
               }`}
            >
               Inactive
            </button>
         </div>
         <div className="tab-content mt-4">{renderTabContent()}</div>
      </div>
   );
}

export default DashboardTabs;
