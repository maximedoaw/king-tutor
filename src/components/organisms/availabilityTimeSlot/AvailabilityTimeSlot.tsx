import React from 'react';
import Input from '../../atoms/Input-Components/InputComp';

interface Props {
   day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
}
function AvailabilityTimeSlot({ day }: Props) {
   return (
      <div className="w-[100%] flex gap-3 items-center">
         <Input
            placeholder={day}
            selectedOption={''}
            setSelectedOption={() => {}}
         />
         <p className="w-[5%]">to</p>
         <Input
            placeholder=""
            selectedOption={''}
            setSelectedOption={() => {}}
         />
         <button
            onClick={(e: React.MouseEvent) => {
               e.preventDefault();
            }}
            className="text-xl"
         >
            +
         </button>
      </div>
   );
}

export default AvailabilityTimeSlot;
