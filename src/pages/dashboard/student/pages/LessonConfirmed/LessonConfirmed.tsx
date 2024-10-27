import React from 'react';
import check from '../../../../../assets/icons/blueCheck.png';

function LessonConfirmed() {
   return (
      <div className="w-[25rem] p-8 flex flex-col items-center  h-60 bg-[#D9D9D9] rounded-lg gap-3">
         <img src={check} className="w-8 object-contain" alt="" />
         <h2 className="font-bold text-lg">lesson confirmed</h2>
         <p>
            You have confirmed your class with Jace Kayode the money has now
            been sent to him.{' '}
         </p>
         <button className="bg-[#2B7CF8] p-2 rounded-md text-white">
            Direct to dashboard
         </button>
      </div>
   );
}

export default LessonConfirmed;
