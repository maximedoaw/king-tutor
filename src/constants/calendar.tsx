import {
   startOfWeek,
   eachDayOfInterval,
   endOfWeek,
   format,
   // getISOWeek,
} from 'date-fns';
// import { ReactNode } from 'react';

const handleCellClick = (
   rowIndex: number,
   cellIndex: number,
   setter: ({
      rowIndex,
      cellIndex,
   }: {
      rowIndex: number;
      cellIndex: number;
   }) => void,
) => {
   setter({ rowIndex, cellIndex });
};
const daysOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
function getWeekDateRange(date2: Date) {
   const startOfWeekDate = startOfWeek(date2);
   const endOfWeekDate = endOfWeek(date2);
   const weekDates = eachDayOfInterval({
      start: startOfWeekDate,
      end: endOfWeekDate,
   });
   const formattedDates = weekDates.map((dates) => format(dates, 'dd'));
   return formattedDates;
}

// const renderTableCell = (cellData: [string, string]): React.ReactNode => {
//    const [cell1, cell2] = cellData;
//    const cellClass1 =
//       cell1 === 'booked'
//          ? 'bg-blue-500'
//          : cell1 === 'unavailable'
//          ? 'bg-[#F5F7FA]'
//          : 'bg-green-500';
//    const cellClass2 =
//       cell2 === 'booked'
//          ? 'bg-blue-500'
//          : cell2 === 'unavailable'
//          ? 'bg-[#F5F7FA]'
//          : 'bg-green-500';

//    const [isOptionsVisible, setOptionsVisible] = useState(false);

//    const handleDivClick = () => {
//       setOptionsVisible(!isOptionsVisible);
//    };

//    return (
//       <td className={'border-[1.5px] p-0 h-full border-[#888D9A]'}>
//          <div className="w-full h-full flex">
//             <div
//                className={`w-1/2 h-[3.1rem] ${cellClass1}`}
//                onClick={handleDivClick}
//             ></div>
//             <div
//                className={`w-1/2 h-[3.1rem] ${cellClass2}`}
//                onClick={handleDivClick}
//             ></div>
//          </div>
//          {isOptionsVisible && (
//             <div className="options-box absolute z-40">
//                {/* Add your options content here */}
//                <button onClick={handleDivClick}>Close Options</button>
//             </div>
//          )}
//       </td>
//    );
// };

const formatWeekRange = (dateOfDay: Date): string => {
   const startOfWeekDate = startOfWeek(dateOfDay, { weekStartsOn: 0 });
   const endOfWeekDate = endOfWeek(dateOfDay, { weekStartsOn: 0 });

   const startDay = format(startOfWeekDate, 'dd');
   const endDay = format(endOfWeekDate, 'dd');
   const month = format(startOfWeekDate, 'MMMM');

   return `${month}, ${startDay}-${endDay}`;
};

const futureSchedule: [string, string][][] = [
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
];

const currentSchedule: [string, string][][] = [
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['available', 'unavailable'],
      ['available', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['booked', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['available', 'available'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'available'],
      ['unavailable', 'unavailable'],
      ['booked', 'booked'],
      ['unavailable', 'available'],
      ['booked', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['available', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'available'],
      ['unavailable', 'unavailable'],
      ['booked', 'booked'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['available', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unabookedvailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['booked', 'booked'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'available'],
      ['available', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'available'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
   [
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['available', 'unavailable'],
      ['unavailable', 'unavailable'],
      ['unavailable', 'unavailable'],
   ],
];

const scheduleP = {
   data: currentSchedule,
   weekNumber: 41,
};
const scheduleF = {
   data: futureSchedule,
   weekNumber: 4001,
};
const times = [
   '08:00',
   '09:00',
   '10:00',
   '11:00',
   '12:00',
   '13:00',
   '14:00',
   '15:00',
   '16:00',
   '17:00',
   '18:00',
   '19:00',
   '20:00',
   '21:00',
   '22:00',
];

export {
   formatWeekRange,
   daysOfTheWeek,
   // renderTableCell,
   getWeekDateRange,
   currentSchedule,
   times,
   handleCellClick,
   futureSchedule,
   scheduleP,
   scheduleF,
};
