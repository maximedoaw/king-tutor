import React from 'react';

import { earnings } from '../../../constants/Earnings';
import { EarningsTable, MoneyCard } from '../../molecules';
import { WithdrawSection } from '..';
function Earnings() {
   return (
      <div className="pt-12 flex flex-col ">
         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-12 my-12 ">
            {earnings.map((item, index) => (
               <MoneyCard
                  key={index}
                  amount={item.amount}
                  img={item.img}
                  type={item.type}
               />
            ))}
         </div>
         <WithdrawSection />
         <div className="px-12 w-full">
            <h2 className="font-bold mb-4">Withdrawal History</h2>
            <EarningsTable />
         </div>
      </div>
   );
}

export default Earnings;
