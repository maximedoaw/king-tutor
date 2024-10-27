/* eslint-disable prettier/prettier */

import React from 'react';
import intermediate from '../../../../assets/images/intermediate.png';

export default function HomeIntermediateComponent() {
   return (
      <div className="bg-[#ebf0f7]">
         <div className="max-w-7xl mx-auto text-center flex flex-col items-center pb-7">
            <div className="flex">
               <img src={intermediate} alt="Image" className="" />
            </div>
            <div className="flex flex-col gap-3 px-10 py-5">
               <h2 className="text-2xl sm:text-4xl">
                  Hundreds of thousands of students join us monthly
               </h2>

               <div className="flex justify-center">
                  <p className="max-w-md">
                     Add a colourful narrative to your journey and start
                     achieving your goals with us
                  </p>
               </div>

               <a
                  href="#"
                  className="px-12 py-3 rounded bg-teal-400 text-white mt-4 self-center"
               >
                  Start Learning
               </a>
            </div>
         </div>
      </div>
   );
}
