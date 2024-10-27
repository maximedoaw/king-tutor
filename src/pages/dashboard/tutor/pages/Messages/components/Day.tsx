import React from 'react';

interface DayInterface {
   day: string;
}

export default function Day(props: DayInterface) {
   return (
      <div className="flex justify-center">
         <p className="bg-[#FFEEE8] px-6 py-2 rounded">{props.day}</p>
      </div>
   );
}
