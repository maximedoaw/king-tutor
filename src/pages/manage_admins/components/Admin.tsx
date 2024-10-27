import React, { useState } from 'react';
import { MdVerified } from 'react-icons/md';
// import tutor from '../../../assets/images/classes-img-1.jpg';

interface Props {
   image: string;
   name: string;
   dateAdded: string;
   superAdmin: boolean;
}

export default function Admin({ image, name, dateAdded, superAdmin }: Props) {
   const [isSuperAdmin, setSuperAdmin] = useState(superAdmin);

   return (
      <div className="flex py-1 px-2 border">
         <img src={image} alt="Tutor profile" className="h-28" />

         <div className="flex flex-1 self-stretch justify-between px-4">
            {/* Admin name column */}
            <div className="flex flex-col justify-center gap-4 items-center">
               <span className="font-bold flex items-center gap-1 text-xl">
                  {name} <MdVerified className="text-xl text-[#2B7CF8]" />
               </span>
               {!isSuperAdmin && <span className="text-[#E52323] ">Admin</span>}
               {isSuperAdmin && (
                  <span className="text-[#2B7CF8] ">Super Admin</span>
               )}
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
                  <button
                     className="text-white bg-[#2B7CF8] py-1 px-4"
                     onClick={() => setSuperAdmin(!isSuperAdmin)}
                  >
                     {isSuperAdmin === true
                        ? 'Remove super admin'
                        : 'Make super admin'}
                  </button>

                  <button className="text-white bg-[#E52323] py-1 px-4">
                     Remove admin
                  </button>

                  <button className="bg-white py-1 px-4 border border-black">
                     Message
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
