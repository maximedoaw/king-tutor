import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineWarning } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '../../../../../../shadcn-components/DropdownMenu';
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
   const [like, setLike] = useState(false);

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
               {/* <button
                  className="p-3 bg-[#F5F7FA] text-[#414852]"
                  onClick={() => setLike(!like)}
               >
                  {like === false ? <AiOutlineHeart /> : <AiFillHeart />}
               </button> */}

               <DropdownMenu>
                  <DropdownMenuTrigger className="p-3 bg-[#F5F7FA] text-[#414852]">
                     <BsThreeDots />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-10 bg-white">
                     <DropdownMenuItem className="cursor-pointer hover:bg-slate-200">
                        Message
                     </DropdownMenuItem>
                     <DropdownMenuItem className="cursor-pointer hover:bg-slate-200">
                        Book another lesson
                     </DropdownMenuItem>
                     <DropdownMenuItem className="cursor-pointer hover:bg-slate-200">
                        Block Student
                     </DropdownMenuItem>
                     {/* <DropdownMenuItem className="flex items-center gap-1 text-base font-bold text-red-600 cursor-pointer hover:bg-slate-200">
                        <AiOutlineWarning />
                        <span>Report Tutor</span>
                     </DropdownMenuItem> */}
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
      </div>
   );
}
