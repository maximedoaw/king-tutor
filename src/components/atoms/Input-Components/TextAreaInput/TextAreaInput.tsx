import React from 'react';
interface Props {
   label: string;
   placeholder: string;
}
function TextAreaInput({ label, placeholder }: Props) {
   return (
      <div className="w-full flex flex-col mt-3">
         <label className="text-xs text-[#1D2026]" htmlFor="">
            {label}
         </label>
         <textarea
            className="border outline-none h-24 rounded-sm pl-3 text-sm resize-none"
            placeholder={placeholder}
         />
      </div>
   );
}

export default TextAreaInput;
