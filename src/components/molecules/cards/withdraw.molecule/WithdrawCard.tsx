import React from 'react';
import ok from '../../../../assets/icons/Ok.png';

interface Props {
   paymentIcon: string;
   number: string;
   date: string;
   name: string;
   isSelected: boolean;
   onClick: () => void;
}

function WithdrawCard({
   paymentIcon,
   isSelected,
   number,
   date,
   name,
   onClick,
}: Props) {
   const borderClass = isSelected ? 'border border-[#23BD33]' : 'border';

   return (
      <div
         onClick={onClick}
         className={`flex items-center w-full justify-evenly py-2 my-3 ${borderClass}`}
      >
         <img className="object-contain" src={paymentIcon} alt="" />
         <p className="text-[#4E5566] text-sm">{number}</p>
         <p className="text-[#4E5566] text-sm">{date}</p>
         <p className="text-[#4E5566] text-sm">{name}</p>
         <div>
            {isSelected && (
               <img className="object-contain w-5 h-5" src={ok} alt="" />
            )}
         </div>
      </div>
   );
}

export default WithdrawCard;
