import React from 'react';
interface Props {
   img: string;
   amount: string;
   type: string;
}
function MoneyCard({ img, amount, type }: Props) {
   return (
      <div className="flex gap-4 w-[25%]">
         <img src={img} className="object-contain" alt="" />
         <div>
            <h4 className="text-lg">{amount}</h4>
            <p className="text-[#4E5566] text-sm">{type}</p>
         </div>
      </div>
   );
}

export default MoneyCard;
