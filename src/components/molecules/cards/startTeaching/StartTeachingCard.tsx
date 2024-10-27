import React from 'react';
import ok from '../../../../assets/icons/Ok.png';
interface Props {
   title: string;
   text: string;
}
function StartTeachingCard({ title, text }: Props) {
   return (
      <div className="w-full flex justify-center items-center gap-2 mt-4">
         <img className="w-[2rem] object-contain" src={ok} alt="" />
         <div className="flex flex-col gap-2">
            <h2 className="font-bold m-0 p-0 text-sm">{title}</h2>
            <p className="text-xs">{text}</p>
         </div>
      </div>
   );
}

export default StartTeachingCard;
