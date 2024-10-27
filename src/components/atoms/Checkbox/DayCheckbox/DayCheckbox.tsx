import React from 'react';
interface Props {
   day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
}
function DayCheckbox({ day }: Props) {
   return (
      <div className="flex gap-2 p-0 mt-4">
         <input type="checkbox" />
         <p className="text-sm">{day}</p>
      </div>
   );
}

export default DayCheckbox;
