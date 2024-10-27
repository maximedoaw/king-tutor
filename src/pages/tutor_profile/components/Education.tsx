import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

interface Props {
   school: string;
   degree: string;
   city: string;
   country: string;
   year: string;
}
export default function Education({
   school,
   degree,
   city,
   country,
   year,
}: Props) {
   return (
      <div className="flex flex-col sm:flex-row gap-4 border">
         <div className="bg-[#564FFD1A] px-5 py-3 flex items-center justify-center">
            <div className="p-4 rounded-full bg-purple-400">
               <FaGraduationCap className="text-white text-2xl" />
            </div>
         </div>
         <div className="flex-1 space-y-2 py-2 px-2">
            <p className="font-bold text-xl">
               <span>{school}</span>, <span>{country}</span>
            </p>
            <p className="font-light text-[#6E7485]">{degree}</p>
            <p className="font-light text-[#6E7485]">
               <span>{city}</span> <span>{year}</span>
            </p>
         </div>
      </div>
   );
}
