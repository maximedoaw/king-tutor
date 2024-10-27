import React from 'react';
import union from '../../../assets/images/Union (1).png';

function InspireOthers() {
   return (
      <div className="bg-[#14253F] flex items-center justify-center w-full flex-col md:flex-row px-4">
         <h2 className="font-bold text-2xl text-white mb-10 flex md:hidden pt-12">
            20k+ Instructor created their success story with KingsTutor{' '}
         </h2>
         <div className="w-[80%] flex items-center justify-between py-8 flex-col-reverse md:flex-row">
            <div className="md:w-[40%] w-full">
               <h2 className="font-bold text-2xl text-white mb-10 hidden md:flex">
                  20k+ Instructor created their success story with KingsTutor
               </h2>
               <p className="text-sm text-white py-10">
                  Become an instructor & start teaching with 26k certified
                  instructors. Create a success story with 67.1k Students
                  <br /> — Grow yourself with 71 countries.
               </p>
               <button className="text-white bg-[#347BE8] py-3 px-4 mt-6">
                  Register Now
               </button>
            </div>
            <img className="md:w-[50%] w-full" src={union} alt="" />{' '}
         </div>
      </div>
   );
}

export default InspireOthers;
