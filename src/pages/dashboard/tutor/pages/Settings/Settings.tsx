import React, { useState } from 'react';
import {
   General,
   Password,
   Email,
   Calendar,
   Notifications,
} from './pages/index';
import LinkToChat from '../../../../../components/atoms/link/LinkToChat';

export default function Settings() {
   const [page, setPage] = useState('general');
   return (
      <div>
         <div className="fixed bottom-[4vh] right-4 z-10">
            <LinkToChat />
         </div>
         <div className="px-6 py-4 space-y-6">
            <h1 className="font-bold text-3xl">Account Settings</h1>

            {/* FLEX CONTAINER */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-16 flex-wrap">
               {/* FIRST FLEX ITEM */}
               <ul
                  className="px-16 py-8 sm:px-8 sm:py-4 bg-[#EBF0F7] rounded-lg flex flex-col gap-2 text-center
                self-stretch sm:self-start"
               >
                  <li
                     className={`cursor-pointer ${
                        page === 'general' &&
                        'text-[#2B7CF8] pb-1 border-b-2 border-[#2B7CF8] '
                     }`}
                     onClick={() => setPage('general')}
                  >
                     General
                  </li>
                  <li
                     className={`cursor-pointer ${
                        page === 'password' &&
                        'text-[#2B7CF8] pb-1 border-b-2 border-[#2B7CF8] '
                     }`}
                     onClick={() => setPage('password')}
                  >
                     Password
                  </li>
                  <li
                     className={`cursor-pointer ${
                        page === 'email' &&
                        'text-[#2B7CF8] pb-1 border-b-2 border-[#2B7CF8] '
                     }`}
                     onClick={() => setPage('email')}
                  >
                     Email
                  </li>
                  <li
                     className={`cursor-pointer ${
                        page === 'calendar' &&
                        'text-[#2B7CF8] pb-1 border-b-2 border-[#2B7CF8] '
                     }`}
                     onClick={() => setPage('calendar')}
                  >
                     Calendar
                  </li>
                  <li
                     className={`cursor-pointer ${
                        page === 'notifications' &&
                        'text-[#2B7CF8] pb-1 border-b-2 border-[#2B7CF8] '
                     }`}
                     onClick={() => setPage('notifications')}
                  >
                     Notifications
                  </li>
               </ul>

               {/* SECOND FLEX ITEM */}
               <div className="flex-1">
                  {page === 'general' && <General />}
                  {page === 'password' && <Password />}
                  {page === 'email' && <Email />}
                  {page === 'calendar' && <Calendar />}
                  {page === 'notifications' && <Notifications />}
               </div>
            </div>
         </div>
      </div>
   );
}
