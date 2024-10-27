import React from 'react';
import { MdVerified } from 'react-icons/md';
// import tutor from '../../../assets/images/classes-img-1.jpg';

interface Props {
   image: string;
   name: string;
   dateAdded: string;
   superAdmin: boolean;
}

export default function SuperAdmin({ image, name, dateAdded }: Props) {
   return (
      <div className="flex py-1 px-2 border">
         <img src={image} alt="Tutor profile" className="h-28" />

         <div className="flex flex-1 self-stretch justify-between px-4">
            {/* Admin name column */}
            <div className="flex flex-col justify-center gap-4 items-center">
               <span className="font-bold flex items-center gap-1 text-xl">
                  {name} <MdVerified className="text-xl text-[#2B7CF8]" />
               </span>
               <span className="text-[#2B7CF8] ">Super Admin</span>
            </div>

            {/* Date added */}
            <div className="flex flex-col justify-center gap-4 items-center">
               <span className="font-bold text-xl">Date Added</span>
               <span className="text-sm">{dateAdded}</span>
            </div>

            {/* Action */}
            <div className="flex flex-col justify-center gap-4">
               <span className="font-bold text-xl">Action</span>
               <div className="flex gap-2">
                  <button className="bg-white py-1 px-4 border border-black">
                     Message
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
