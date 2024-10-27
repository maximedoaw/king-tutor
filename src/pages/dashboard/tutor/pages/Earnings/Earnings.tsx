import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';

export default function Earnings() {
   return (
      <div>
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">Good morning</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               {/* <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-2">
                  <AiOutlineSearch />
                  <input
                     type="text"
                     placeholder="Search"
                     className="p-1 focus:outline-none bg-transparent flex-shrink"
                  />
               </div> */}

               <div className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1">
                  <AiOutlineBell />
               </div>

               <div className="w-10">
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>
      </div>
   );
}
