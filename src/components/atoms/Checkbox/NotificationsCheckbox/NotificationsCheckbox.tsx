import React, { useState } from 'react';
interface Props {
   text: string;
}
function NotificationsCheckbox({ text }: Props) {
   const [isChecked, setIsChecked] = useState(false);

   const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
   };

   return (
      <div className="flex">
         <input
            onChange={handleCheckBoxChange}
            type="checkbox"
            className={`${
               isChecked ? 'bg-[#3A6AB3]' : 'bg-transparent'
            } mr-2 mb-4`}
         />
         <p
            className={`text-sm ${isChecked ? 'text-black' : 'text-[#6E7485]'}`}
         >
            {text}
         </p>
      </div>
   );
}

export default NotificationsCheckbox;
