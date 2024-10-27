import React from 'react';
import { PiStudentThin } from 'react-icons/pi';
import { AiFillStar } from 'react-icons/ai';
import { MdVerifiedUser } from 'react-icons/md';

import Jaceman from '../../assets/images/JacemanKayode.png';
import PaymentMethod from './components/PaymentMethod';
import Header from '../../components/atoms/header/Header';

export default function Payment() {
   return (
      <div>
         <Header />

         <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-4xl my-3">Payments</h2>
            {/* FLEX CONTAINER */}
            <div className="flex gap-4 flex-wrap justify-center px-4">
               {/* FIRST FLEX ITEM */}
               <div className="bg-[#F5F7FA] py-8 px-6 space-y-5 self-start">
                  <p className="text-2xl">Booking Info</p>
                  <div className="flex gap-3">
                     <div>
                        <img src={Jaceman} alt="" />
                     </div>
                     <div className="flex flex-col">
                        <p className="flex items-center gap-1">
                           <PiStudentThin /> <span>Javascript</span>
                        </p>
                        <p className="font-bold text-xl">Jaceman Kayode</p>
                        <p className="flex items-center gap-1">
                           <span className="text-[#2B7CF8]">
                              <AiFillStar />
                           </span>
                           <span>(20 reviews)</span>
                        </p>
                        <p className="flex items-center gap-1">
                           <MdVerifiedUser /> Verified Tutor
                        </p>
                     </div>
                  </div>

                  <div className="p-2 bg-[#ECEDEE]">
                     <button className="bg-white px-8 py-2 rounded-lg">
                        30 mins
                     </button>
                     <button className="bg-[#E6FCF9] px-8 py-2 rounded-lg">
                        60 mins
                     </button>
                  </div>

                  <div className="space-y-2">
                     <div className="border-b border-black py-2">
                        <p className="text-2xl">Friday, 6 October at 14:00</p>
                        <p>Times is based on your location</p>
                     </div>

                     <div className="border-b border-black py-2">
                        <p className="text-2xl">Your booking</p>
                        <p className="flex justify-between">
                           <span>60 mins lesson</span> <span>USD 10.00</span>
                        </p>
                        <p className="flex justify-between">
                           <span>Processing fee</span> <span>USD 0.25</span>
                        </p>
                     </div>

                     <div className="flex justify-between">
                        <p className="text-xl font-bold">Total</p>
                        <div className="flex flex-col">
                           <span className="font-bold text-xl text-right">
                              USD 10.25
                           </span>
                           <span className="text-sm">charged at USD 15.30</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* SECOND FLEX ITEM */}
               <div className="flex-1">
                  <PaymentMethod />
               </div>
            </div>
         </div>
      </div>
   );
}
