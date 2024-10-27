import React from 'react';
interface Props {
   title: string;
   amount: string;
}
function Balance({ title, amount }: Props) {
   return (
      <div className="w-[10rem] h-[4rem]">
         <h4 className=" mb-2">{title} Balance</h4>
         <p className="font-bold text-xl">${amount} USD</p>
         <hr className="w-[32%] h-1 rounded-sm mt-1 bg-[#2B7CF8]" />
      </div>
   );
}

export default Balance;
