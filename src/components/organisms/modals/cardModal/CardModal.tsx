import React from 'react';
import creditCard from '../../../../assets/icons/CreditCard.png';
import paperclip from '../../../../assets/icons/PaperPlaneRight.png';
function CardModal({ closeModal }: { closeModal: () => void }) {
   return (
      <div
         className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 z-50"
         onClick={closeModal}
      >
         <div className="bg-white w-[30rem] h-[23rem] p-8 pb-2 rounded-lg">
            {/* Add your modal content here */}
            <div className="w-full flex justify-between border-b">
               <h2 className="text-sm font-bold">New Payment Card</h2>
               <button className="text-lg" onClick={closeModal}>
                  &times;
               </button>
            </div>
            <div className="flex flex-col my-3">
               <label className="text-sm font-semibold mb-1" htmlFor="">
                  Name
               </label>{' '}
               <input
                  placeholder="Name on Card"
                  className="border outline-none p-1"
                  type="text"
               />
            </div>
            <div className="flex flex-col mb-4">
               <label className="text-sm font-semibold mb-1" htmlFor="">
                  Card Number
               </label>{' '}
               <div className="flex p-1 border">
                  <img
                     src={creditCard}
                     className="object-contain pr-1 w-6"
                     alt=""
                  />
                  <input
                     placeholder="Card number"
                     className="w-[90%] border-l outline-none pl-2" // Add pl-2 for left padding
                     type="text"
                  />
               </div>
            </div>
            <div className="flex gap-3 my-2">
               <div className="flex flex-col w-1/2 ">
                  <label className="text-sm font-semibold" htmlFor="">
                     MM/YY
                  </label>{' '}
                  <input
                     placeholder="MM/YY"
                     className="border outline-none p-1"
                     type="text"
                  />
               </div>{' '}
               <div className="flex flex-col w-1/2">
                  <label className="text-sm font-semibold" htmlFor="">
                     CVC
                  </label>{' '}
                  <input
                     placeholder="Security Code"
                     className="border outline-none p-1"
                     type="text"
                  />
               </div>
            </div>
            <div className="flex justify-between mt-5">
               <button
                  onClick={closeModal}
                  className="bg-[#F5F7FA]  text-black w-[5rem] rounded-sm h-[2.5rem]"
               >
                  Cancel
               </button>
               <button className="bg-[#2B7CF8] flex justify-between items-center text-white rounded-sm px-2 w-[9.5rem] h-[2.5rem]">
                  Save Card
                  <img src={paperclip} className="w-5 object-contain" alt="" />
               </button>
            </div>
         </div>
      </div>
   );
}

export default CardModal;
