import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import guy from '../../../../../../assets/images/guy.png';

interface Props {
   tutorName: string;
   lesson: string;
   price: string;
   duration: string;
   date: string;
   time: string;
}

export default function IncomingClasses(props: Props) {
   const [menu, setMenu] = useState(false);
   return (
      <div className="flex items-center justify-between my-6 flex-wrap gap-5">
         {/* FIRST ITEM */}
         <div className="flex gap-2">
            <div>
               <img src={guy} alt="profile" />
            </div>

            <div className="flex flex-col justify-between">
               <div className="flex flex-col">
                  <span className="font-bold">{props.tutorName}</span>
                  <span>{props.lesson}</span>
               </div>

               <div className="flex flex-col">
                  <span>${props.price}</span>
                  <span>{props.duration} lesson</span>
               </div>
            </div>
         </div>

         {/* SECOND ITEM */}
         <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 self-start">
               <span>Fri,July 4 2023</span>
               <span>{props.time}</span>
            </div>

            <div className="flex items-center gap-3 relative">
               <button className="bg-[#2B7CF8] active:bg-[#1e3d6d] px-7 py-3 text-white">
                  See classroom
               </button>
               <button className="p-3 py-4 bg-[#F5F7FA] text-[#414852]">
                  <AiOutlineHeart />
               </button>
               <button
                  className="p-3 py-4 bg-[#F5F7FA] text-[#414852]"
                  onClick={() => setMenu(!menu)}
               >
                  <BsThreeDots />
               </button>

               {/* Menu */}
               {menu && (
                  <div className="bg-white shadow-lg border text-sm absolute bottom-3 right-9">
                     <ul className="space-y-1">
                        <li className="px-2 py-1 hover:bg-gray-200">
                           <a href="#">Visit tutor profile</a>
                        </li>
                        <li className="px-2 py-1 hover:bg-gray-200">
                           <a href="#">Book another lesson</a>
                        </li>
                        <li className="px-2 py-1 hover:bg-gray-200">
                           <a href="#">Reschedule</a>
                        </li>
                        <li className="px-2 py-1 hover:bg-gray-200">
                           <a href="#">Send a message</a>
                        </li>
                     </ul>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
