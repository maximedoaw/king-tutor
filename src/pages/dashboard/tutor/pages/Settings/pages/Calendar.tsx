import React from 'react';
import { BsGoogle } from 'react-icons/bs';

export default function Calendar() {
   return (
      <div className="flex flex-col sm:flex-row items-center gap-4 py-10 flex-wrap">
         <div className="flex items-center gap-2">
            <BsGoogle className="text-[#EA4335] text-5xl gap- bg-[#EBF0F7] p-2" />
            <p className="leading-tight">
               Connect your Google Calendar and synchronize all your lessons
               with your personal schedule
            </p>
         </div>

         <button className="px-4 py-2 bg-[#2B7CF8] text-white">
            Connect to Google Calendar
         </button>
      </div>
   );
}
