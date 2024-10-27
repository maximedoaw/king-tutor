import React, { useState } from 'react';
import sendMsg from '../../../assets/images/send_msg.png';

function ConfirmLesson() {
   const [activeButton, setActiveButton] = useState('');

   const handleClick = (buttonName: string) => {
      setActiveButton(buttonName);
   };
   return (
      <div className="bg-[#ECEDEE] px-12 py-12  w-[32rem]  pb-4 pt-4 flex flex-col gap-4 rounded-2xl">
         <h2 className="font-bold text-xl">Confirm This Lesson</h2>
         <p>Confirm your lesson so the tutor can receive their funds</p>
         <div className="flex flex-col gap-y-2">
            <button
               onClick={() => handleClick('satisfied')}
               className={`bg-[#E6FCF9] rounded-md px-2 py-1 px-4 w-fit ${
                  activeButton === 'satisfied' ? 'border border-[#3A6AB3]' : ''
               }`}
            >
               Yes, I had the lesson and I am satisfied
            </button>
            {/* <button
               onClick={() => handleClick('notSatisfied')}
               className={`bg-[#E6FCF9] rounded-md mr-3 my-2 px-2 py-1 ${
                  activeButton === 'notSatisfied'
                     ? 'border border-[#3A6AB3]'
                     : ''
               }`}
            >
               Not satisfied with the lesson
            </button> */}
            <button
               onClick={() => handleClick('noLesson')}
               className={`bg-[#E6FCF9] rounded-md px-2 py-1 w-fit px-4 ${
                  activeButton === 'noLesson' ? 'border border-[#3A6AB3]' : ''
               }`}
            >
               No lesson held
            </button>
         </div>
         {activeButton === 'noLesson' && (
            <div className="w-full ">
               {/* <p>Give a reason for your dissatisfaction so we can improve</p> */}
               <p>Can you give a reason why lesson didn't hold?</p>
               <div className="flex items-center  justify-between ">
                  <textarea
                     name=""
                     id=""
                     placeholder="Type your review here "
                     className="w-[87%] resize-none h-[6rem] outline-none mt-2 p-2"
                  ></textarea>
                  <img
                     className="w-[8.5%] object-contain"
                     src={sendMsg}
                     alt=""
                  />
               </div>
            </div>
         )}
         <button className="bg-[#3A6AB3] text-white rounded-md w-24 py-1">
            Submit
         </button>
      </div>
   );
}

export default ConfirmLesson;
