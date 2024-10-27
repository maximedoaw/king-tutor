import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import guy from '../../../../../../assets/images/guy.png';

interface Props {
   tutorName: string;
   lesson: string;
   price: string;
   duration: string;
   date: string;
   time: string;
   rated: boolean;
}

export default function AttendedClasses(props: Props) {
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
               {props.rated && (
                  <div className="bg-[#8C94A3] px-6 py-3 text-white">Rated</div>
               )}
               {!props.rated && (
                  <button className="bg-[#05C451] px-6 py-3 text-white">
                     Rate this lesson
                  </button>
               )}
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
                           <a href="#">Rate tutor</a>
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
