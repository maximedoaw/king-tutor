import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import LinkToChat from '../../../../../components/atoms/link/LinkToChat';
import { getISOWeek } from 'date-fns';
import {
   formatWeekRange,
   daysOfTheWeek,
   // renderTableCell,
   getWeekDateRange,
   scheduleF,
   scheduleP,
   times,
} from '../../../../../constants/calendar';
import './calendar.css';
function CalendarComp() {
   const [date, setDate] = useState<Value | Date | null>(new Date());
   const handleDateChange = (value: Value) => {
      setDate(value);
   };
   let weekDatesArr: string[] = [];
   const today = new Date();
   const dayOfMonth = today.getDate();
   const dayString: string = dayOfMonth + '';
   const isoWeekNumber = date ? getISOWeek(date as Date) : null;
   if (date !== null && date instanceof Date) {
      weekDatesArr = getWeekDateRange(date);
   } else {
      console.error('Date is null');
   }
   const renderTableCell = (cellData: [string, string]): React.ReactNode => {
      const [cell1, cell2] = cellData;
      const cellClass1 =
         cell1 === 'booked'
            ? 'bg-blue-500'
            : cell1 === 'unavailable'
              ? 'bg-[#F5F7FA]'
              : 'bg-green-500';
      const cellClass2 =
         cell2 === 'booked'
            ? 'bg-blue-500'
            : cell2 === 'unavailable'
              ? 'bg-[#F5F7FA]'
              : 'bg-green-500';

      const [isOptionsVisible, setOptionsVisible] = useState(false);

      const handleDivClick = () => {
         setOptionsVisible(!isOptionsVisible);
      };

      const optionsRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref

      useEffect(() => {
         const handleOutsideClick = (event: MouseEvent) => {
            if (
               optionsRef.current &&
               !optionsRef.current.contains(event.target as Node)
            ) {
               setOptionsVisible(false);
            }
         };

         if (isOptionsVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
         }

         return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
         };
      }, [isOptionsVisible]);

      return (
         <td className={'border-[1.5px] p-0 h-full border-[#888D9A]'}>
            <div className="w-full h-full flex">
               <div
                  className={`w-1/2 h-[3.1rem] ${cellClass1}`}
                  onClick={handleDivClick}
               ></div>
               <div
                  className={`w-1/2 h-[3.1rem] ${cellClass2}`}
                  onClick={handleDivClick}
               ></div>
            </div>
            {isOptionsVisible && (
               <div
                  ref={optionsRef}
                  className="options-box flex flex-col absolute z-40 p-0"
               >
                  {cell1 === 'available' && (
                     <div className="flex flex-col  border bg-white ">
                        <button className="border-b-[1px] text-[#90959F] p-[5px] text-[10px]  font-medium">
                           Mark Unavailable
                        </button>
                        <div className="w-full h-3 bg-blue-700"></div>
                        <button className="text-[#E52323] p-[5px] text-[10px] font-medium">
                           Always Mark Available
                        </button>
                     </div>
                  )}
                  {cell1 === 'unavailable' && (
                     <div className="flex flex-col  border bg-white ">
                        <button className="border-b-[1px] text-[#90959F] text-[10px] font-medium p-[5px]">
                           Mark Available
                        </button>
                        <div className="w-full h-3 bg-blue-700"></div>
                        <button className="text-[#E52323] text-[10px] font-medium p-[5px]">
                           Always Mark Unavailable
                        </button>
                     </div>
                  )}
                  {cell1 === 'booked' && (
                     <div className="flex flex-col border bg-white">
                        <button className="border-b-[1px] text-[#90959F] text-[10px] font-medium p-[5px]">
                           Mark Available
                        </button>
                        <div className="w-full h-3 bg-blue-700"></div>
                        <button className="text-[#E52323] text-[10px] font-medium p-[5px]">
                           Mark Unavailable
                        </button>
                     </div>
                  )}
               </div>
            )}
         </td>
      );
   };

   const tableRows = (
      isoWeekNumber === scheduleP.weekNumber ? scheduleP : scheduleF
   ).data.map((row, rowIndex) => (
      <tr key={rowIndex} className="h-[3rem] text-center">
         <td className="bg-[#F5F7FA] text-[#B9BABA]">{times[rowIndex]}</td>
         {row.map((cells, cellIndex) => (
            <React.Fragment key={cellIndex}>
               {renderTableCell(cells)}
            </React.Fragment>
         ))}
      </tr>
   ));

   return (
      <div className="w-full h-full flex flex-col pt-8 pb-8 pl-10 pr-10">
         <div className="fixed bottom-[4vh] right-4">
            <LinkToChat />
         </div>
         <div className="w-full h-[20%] ">
            <h2 className="self-left font-bold text-3xl mb-5">Your Calendar</h2>
            <h2 className="flex w-full font-medium justify-between mb-4">
               {date !== null
                  ? formatWeekRange(date as Date)
                  : 'No date selected'}
            </h2>
         </div>
         <div className="w-full flex justify-between">
            <div className="w-[65%] h-[60%]  overflow-auto">
               <table className="w-full border-[1.5px] border-[#888D9A] rounded-3xl overflow-y-hidden">
                  <thead className="h-[7rem] table-fixed">
                     <tr>
                        <th className="text-[#2B7CF8] bg-[#F5F7FA] ">Week</th>
                        {daysOfTheWeek.map((day, index) => (
                           <th
                              key={index}
                              className="border-[1.5px] border-[#888D9A] text-[#B9BABA] bg-[#F5F7FA] font-normal w-[12%]"
                           >
                              <p
                                 className={`${
                                    weekDatesArr[index] == dayString
                                       ? 'text-blue-500'
                                       : ''
                                 }`}
                              >
                                 {weekDatesArr[index]}
                              </p>
                              <p
                                 className={`${
                                    weekDatesArr[index] == dayString
                                       ? 'text-blue-500'
                                       : ''
                                 }`}
                              >
                                 {day}
                              </p>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>{tableRows}</tbody>
               </table>
            </div>
            <div className="w-[30%] h-full">
               <Calendar value={date} onChange={handleDateChange} />
            </div>
         </div>
         <div className="w-full flex justify-between items-center mt-3">
            <div className="w-[60%] h-[4rem] flex justify-evenly mt-2">
               <div className="flex items-center">
                  <div className="w-[25px] h-[25px] bg-green-500 rounded-full mr-2"></div>
                  <p>Available</p>
               </div>
               <div className="flex items-center">
                  <div className="w-[25px] h-[25px] bg-blue-500 rounded-full mr-2"></div>
                  <p>Booked</p>
               </div>
               <div className="flex items-center">
                  <div className="w-[24px] h-[24px] bg-[#F5F7FA] rounded-full border border-[#4C535C] mr-2 "></div>
                  <p>Unavailable</p>
               </div>
            </div>
            <button className="bg-blue-500 h-12 pr-8 pl-8 rounded-md text-white">
               Confirm Changes{' '}
            </button>
         </div>
      </div>
   );
}

export default CalendarComp;
