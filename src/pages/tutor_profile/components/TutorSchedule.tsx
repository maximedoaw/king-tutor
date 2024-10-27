import React from 'react';
import { PiWarningOctagonBold } from 'react-icons/pi';

export default function TutorSchedule() {
   return (
      <div className="space-y-6 my-4">
         <h4 className="font-bold text-2xl py-3 border-b">Schedule</h4>

         <div className="bg-[#C2D1E7] py-2 px-3">
            <p className="flex items-center gap-3">
               <PiWarningOctagonBold className="text-2xl" />
               You can edit your schedule on{' '}
               <a href="#" className="underline font-bold text-[#2B7CF8]">
                  your calendar
               </a>
            </p>
         </div>
      </div>
   );
}
