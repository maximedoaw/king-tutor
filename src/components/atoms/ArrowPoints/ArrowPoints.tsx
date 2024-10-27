import React from 'react';
import ArrowRight from '../../../assets/icons/ArrowRight.png';
interface Props {
   text: string;
}
function ArrowPoints({ text }: Props) {
   return (
      <div className="flex w-100% gap-2 mb-3">
         <img src={ArrowRight} alt="" />
         <p className="text-xs font-bold">{text}</p>
      </div>
   );
}

export default ArrowPoints;
