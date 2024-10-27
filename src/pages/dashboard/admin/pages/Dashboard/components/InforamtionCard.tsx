import React from 'react';

interface Props {
   img: string;
   title: string;
   number: number;
}

function InforamtionCard({ img, title, number }: Props) {
   return (
      <div className="bg-[#E6FCF9] w-full flex px-4 py-4 rounded-xl">
         <img className="w-6 object-contain mr-3" src={img} alt="" />
         <div className="w-3/5">
            <p className="text-xs font-medium">{title}</p>
            <h2 className="text-xl font-bold">{number}</h2>
         </div>
      </div>
   );
}

export default InforamtionCard;
