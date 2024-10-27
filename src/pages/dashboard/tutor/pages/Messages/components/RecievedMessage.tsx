import React from 'react';

interface RecievedMessageInterface {
   time: string;
   message: string;
}
export default function RecievedMessage(props: RecievedMessageInterface) {
   return (
      <div className="flex flex-col items-start">
         <div className="text-[#6E7485] text-sm">{props.time}</div>
         <div className="bg-[#E1E9F4] py-2 px-4">{props.message}</div>
      </div>
   );
}
