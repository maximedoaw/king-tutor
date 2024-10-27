import React from 'react';
import clock from '../../../../../../assets/images/clock.png';
import { useNavigate } from 'react-router-dom';

interface NextClassInterface {
   student: string;
   hours: string;
   minutes: string;
   seconds: string;
   buttonText?: string;
   className?: string;
}

export default function NextClass(props: NextClassInterface) {
   const navigate = useNavigate();

   const {
      student,
      hours,
      minutes,
      seconds,
      buttonText = 'START CLASS NOW',
   } = props;

   return (
      <div className="flex justify-between sm:justify-around flex-wrap items-center px-6 py-2 gap-x-4 sm:self-auto bg-[#E6FCF9] sm:py-8">
         <div className="text-center">
            <img src={clock} alt="Clock" className="w-60 lg:mb-4" />
            <p className="text-[#8E9094] text-sm lg:text-xl">
               Your next lesson with{' '}
            </p>
            <p className="text-[#195CC1] font-bold sm:text-xl text-base lg:text-3xl">
               {props.student}
            </p>
            <p className="text-[#8E9094] text-sm lg:text-xl">starts in</p>
         </div>

         <div className="flex flex-col items-center gap-2">
            <div className="flex items-start">
               <div className="flex flex-col items-center">
                  <span className="text-xl text-[#195CC1] font-bold lg:text-3xl">
                     {props.hours}
                  </span>
                  <span className="text-[#8E9094] text-sm lg:text-xl">
                     Hours
                  </span>
               </div>

               <span className="text-xl text-[#195CC1] font-bold lg:text-3xl">
                  :
               </span>

               <div className="flex flex-col items-center">
                  <span className="text-xl text-[#195CC1] font-bold lg:text-3xl">
                     {props.minutes}
                  </span>
                  <span className="text-[#8E9094] text-sm lg:text-xl">
                     Minutes
                  </span>
               </div>

               <span className="text-xl text-[#195CC1] font-bold lg:text-3xl">
                  :
               </span>

               <div className="flex flex-col items-center">
                  <span className="text-xl text-[#195CC1] font-bold lg:text-3xl">
                     {props.seconds}
                  </span>
                  <span className="text-[#8E9094] text-sm lg:text-xl">
                     Seconds
                  </span>
               </div>
            </div>

            <button
               type="button"
               onClick={() => navigate('/live-class')}
               className="bg-[#2dcdb5] active:bg-[#31ac9b] text-sm text-white px-6 py-4 shadow-lg rounded lg:text-lg sm:mt-6"
            >
               {props.buttonText}
            </button>
         </div>
      </div>
   );
}
