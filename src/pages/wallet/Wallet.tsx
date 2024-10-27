import React, { useState } from 'react';
import Balance from './Balance';
import { transactions } from '../../constants/wallet';
import PaymentMethod from './components/PaymentMethod';
import LinkToChat from '../../components/atoms/link/LinkToChat';

function Wallet() {
   const [pay, setPay] = useState(false);
   return (
      <div className="w-full flex flex-col justify-center items-center relative">
         <div className="fixed bottom-[4vh] right-4">
            <LinkToChat />
         </div>
         {/* --------- POPUP!! --------- */}
         {pay && (
            <div
               className="w-screen h-full absolute flex justify-center items-start bg-black bg-opacity-50 pt-16"
               onClick={() => setPay(false)}
            >
               <div className="px-6" onClick={(e) => e.stopPropagation()}>
                  <PaymentMethod />
               </div>
            </div>
         )}
         <h2 className="my-6 w-[60%]">KingsTutor Wallet</h2>
         <div className="w-[60%] h-[24rem] bg-[#EBF0F7] p-8">
            <div className="w-full justify-between flex mb-4">
               <h1 className="font-bold text-lg">My balance</h1>
               <button
                  className="bg-[#2B7CF8] text-white p-2 px-4 rounded-lg"
                  onClick={() => setPay(true)}
               >
                  Add Money
               </button>
            </div>
            <Balance title="Available" amount="0.00" />
            <div className="w-[80%]  flex justify-between mt-8">
               <Balance title="Total" amount="0.00" />
               <Balance title="unavailable" amount="0.00" />
            </div>
            <p className="text-[#8C94A3] text-xs my-8 w-[70%]">
               *The amounts listed here are close approximations. There may be a
               slight difference due to changes in foreign exchange rates. All
               amounts are based on US Dollars
            </p>
         </div>
         <div className="py-8 w-[60%]">
            <h2 className="py-4">Transaction History</h2>
            <table className="table-auto w-full rounded-2xl overflow-hidden">
               <thead className="bg-[#ebf0f7] border-b-2 py-2">
                  <tr>
                     <th className="py-2 px-4 text-left font-normal text-sm text-[#49454FCC]">
                        Date
                     </th>
                     <th className="py-2 px-4 text-left font-normal text-sm text-[#49454FCC]">
                        Description
                     </th>
                     <th className="py-2 px-4 text-left font-normal text-sm text-[#49454FCC]">
                        Amount (USD)
                     </th>
                     <th className="py-2 px-4 text-left font-normal text-sm text-[#49454FCC]">
                        Status
                     </th>
                     <th className="py-2 px-4 text-left  font-normal text-sm text-[#49454FCC]">
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody className="bg-[#ebf0f7]">
                  {transactions.map((transaction, index) => (
                     <tr key={index} className="hover:bg-[#f3f4f6]">
                        <td className="py-2 px-4 text-sm">
                           {transaction.date}
                        </td>
                        <td className="py-2 px-4 text-sm">
                           {transaction.description}
                        </td>
                        <td className="py-2 px-4 text-sm">
                           {transaction.amount}
                        </td>
                        <td
                           className={`py-2 px-4 text-sm ${
                              transaction.status === 'Success'
                                 ? 'text-[#0EAD69]'
                                 : 'text-[#C10B0ECC]'
                           }`}
                        >
                           {transaction.status}
                        </td>
                        <td className="py-2 px-4 text-sm">
                           <button className="bg-[#2b7cf8] text-white px-4 py-1 rounded-sm text-sm ">
                              Redo
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Wallet;
