/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { payemntMethod } from '../../../constants/Earnings';
import { VisaCard, WithdrawCard } from '../../molecules';
import { Arrow, ArrowRight } from '../../atoms';
import { CardModal } from '..';
function WithdrawSection() {
   const [selectedCard, setSelectedCard] = useState<number>(0);
   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <div className="w-full flex flex-col lg:flex-row justify-between pl-12 pr-12 py-6">
         <div className="lg:w-[43%] w-full">
            <h2 className="font-bold pb-4">Withdraw your money</h2>
            <hr className="pt-6 " />
            <p className="text-[#A1A5B3] text-xs">payment method</p>
            <div className="w-full">
               {payemntMethod.map((item, index) => (
                  <WithdrawCard
                     key={index}
                     paymentIcon={item.paymentMeth}
                     name={item.name}
                     number={item.number}
                     date={item.date}
                     isSelected={index === selectedCard}
                     onClick={() => setSelectedCard(index)}
                  />
               ))}
            </div>
            <div className="flex w-full justify-between my-8">
               <div>
                  <h3 className="text-2xl">$16,593.00</h3>
                  <p className="text-[#4E5566] text-lg mt-4">Current Balance</p>
               </div>
               <button className="bg-[#3A6AB3] text-white text-lg px-2 h-14 font-medium">
                  Withdraw Money
               </button>
            </div>
         </div>
         <div className="lg:w-[51%] w-full px-12 flex flex-col justify-center items-center ">
            <div className="flex justify-between self-end w-full">
               <h2 className="font-bold ">Cards</h2>
               {/* <Dropdown /> */}
            </div>
            <hr className="pt-6 " />
            <VisaCard />
            <div className="w-[80%] flex justify-between items-center h-8 ">
               <div className="w-1/2 flex gap-2">
                  <div className="w-3 bg-[#3A6AB3] h-3  rounded-full"></div>
                  <div className="w-3 bg-[#E1E9F4] h-3  rounded-full"></div>
               </div>

               <div className="w-1/2 flex justify-end">
                  <Arrow color={'#4E5566'} />
                  <ArrowRight color={'#4E5566'} />
               </div>
            </div>
            <div className="relative w-full flex justify-center">
               <div
                  onClick={openModal}
                  className="w-[80%] h-24 mt-8 border-2 border-dashed flex justify-center items-center"
               >
                  <div className="w-5 h-5 border-2 mr-2 border-[#3A6AB3] rounded-full flex justify-center items-center">
                     <p className="text-[#3A6AB3] font-bold">+</p>
                  </div>
                  <h2>Add Card</h2>
               </div>
            </div>
         </div>
         {isModalOpen && <CardModal closeModal={closeModal} />}{' '}
         {/* Render the modal when isModalOpen is true */}
      </div>
   );
}

export default WithdrawSection;
