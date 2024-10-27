import React, { useState } from 'react';
import sendMsg from '../../../assets/images/send_msg.png';

function Ratings() {
   const [selectedButton, setSelectedButton] = useState<number | null>(null);
   const handleButtonClick = (buttonNumber: number) => {
      setSelectedButton(buttonNumber);
   };

   const buttons: JSX.Element[] = [];
   for (let buttonNumber = 1; buttonNumber <= 5; buttonNumber++) {
      buttons.push(
         <button
            key={buttonNumber}
            onClick={() => handleButtonClick(buttonNumber)}
            className={`w-[2.5rem] h-[2.5rem] mr-4 rounded-md font-bold text-lg ${
               buttonNumber <= 2 ? 'bg-[#F7BBBB]' : 'bg-[#E6FBEF]'
            }  ${
               selectedButton === buttonNumber
                  ? 'border-[1.5px] border-[#3A6AB3]'
                  : 'border border-2-transperent'
            }`}
         >
            {buttonNumber}
         </button>,
      );
   }
   return (
      <div className="bg-[#ECEDEE] px-12  w-[40rem] h-[16rem] pt-4 flex flex-col gap-4 rounded-2xl">
         <h2 className="text-lg">
            How was your lesson <span className="font-bold"> Jace Kayode?</span>{' '}
         </h2>
         <h4 className="text-[1rem]">Rate it on a scale of 5</h4>
         <div className="flex w-full justify-between">
            <div className="">{buttons}</div>
            <button className="bg-[#01E0C0] text-white px-4 text-lg rounded-md">
               confirm rating
            </button>
         </div>

         <div className="w-full flex flex-col justify-between">
            <h5 className="mb-2">
               Leave a review about this{' '}
               <span className="font-bold"> Jace Kayode </span> to help other
               students
            </h5>
            <div className="flex w-full  justify-between">
               <input
                  className="w-[88%] h-10 rounded-md outline-none pl-3"
                  type="text"
                  placeholder="Type your review here .."
               />
               <img className="w-[7%] object-contain" src={sendMsg} alt="" />
            </div>
         </div>
      </div>
   );
}

export default Ratings;
