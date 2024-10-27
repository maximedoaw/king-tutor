import React from 'react';

interface SentMesesageInterface {
   message: string;
   time: string;
}

export default function SentMessage(props: SentMesesageInterface) {
   return (
      <div className="text-right flex flex-col items-end">
         <div className="text-[#6E7485] text-sm">{props.time}</div>
         <div className="bg-[#3A6AB3] py-2 px-4 text-white">
            {props.message}
         </div>
      </div>
   );
}
