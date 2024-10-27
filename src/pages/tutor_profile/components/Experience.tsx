import React from 'react';
import { MdOutlineWork } from 'react-icons/md';

interface Props {
   company: string;
   country: string;
   position: string;
   startDate: string;
   endDate: string;
}
export default function Experience({
   company,
   country,
   position,
   startDate,
   endDate,
}: Props) {
   return (
      <div className="flex flex-col sm:flex-row gap-4 border">
         <div className="bg-[#564FFD1A] px-5 py-3 flex items-center justify-center">
            <div className="p-4 rounded-full bg-purple-400">
               <MdOutlineWork className="text-white text-2xl" />
            </div>
         </div>
         <div className="flex-1 space-y-2 py-2 px-2">
            <p className="font-bold text-xl">
               <span>{company}</span>, <span>{country}</span>
            </p>
            <p className="font-light text-[#6E7485]">{position}</p>
            <p className="font-light text-[#6E7485]">
               <span>{startDate}</span> - <span>{endDate}</span>
            </p>
         </div>
      </div>
   );
}
