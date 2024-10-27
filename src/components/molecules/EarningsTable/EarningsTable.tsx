import React, { useState } from 'react';
import { tableData } from '../../../constants/Earnings';
function EarningsTable() {
   const [selectedRow, setSelectedRow] = useState(-1);
   const handleOptionsClick = (index: number) => {
      setSelectedRow(index === selectedRow ? -1 : index);
   };
   return (
      <table className="md:w-[100%] w-full px -12">
         <thead>
            <tr>
               <th className="bg-[#F5F7FA] text-[#6E7485] text-sm p-3 w-[20%]">
                  DATE
               </th>
               <th className="bg-[#F5F7FA] text-[#6E7485] text-sm p-3 w-[20%]">
                  METHOD
               </th>
               <th className="bg-[#F5F7FA] text-[#6E7485] text-sm p-3 w-[20%]">
                  AMOUNT
               </th>
               <th className="bg-[#F5F7FA] text-[#6E7485] text-sm p-3 w-[20%]">
                  STATUS
               </th>
               <th className="bg-[#F5F7FA] text-[#6E7485] text-sm p-3 w-[20%]"></th>
            </tr>
         </thead>
         <tbody>
            {tableData.map((row, index) => (
               <tr
                  key={index}
                  className={`hover:shadow-lg ${
                     selectedRow === index ? '' : ''
                  } items-center h-14 relative`}
               >
                  <td className=" text-center text-sm">{row.date}</td>
                  <td className=" text-center text-sm">{row.method}</td>
                  <td className=" text-center text-sm">{row.amount}</td>
                  <td
                     className={`${
                        row.status === 'Pending'
                           ? 'text-[#FD8E1F]'
                           : row.status === 'Completed'
                             ? 'text-[#23BD33]'
                             : 'text-[#E34444]'
                     } text-center text-sm`}
                  >
                     {row.status}
                  </td>
                  <td
                     className=" text-center"
                     onClick={() => handleOptionsClick(index)}
                  >
                     {row.status === 'Pending' && selectedRow === index && (
                        <div className="bg-white border border-gray-300  font top-[40px] p-2 w-36 absolute z-10">
                           <ul>
                              <li className="text-xs">Cancel Withdrawal </li>
                           </ul>
                        </div>
                     )}
                     ...
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default EarningsTable;
