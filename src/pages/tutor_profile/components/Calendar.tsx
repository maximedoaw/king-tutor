import React, { useState } from 'react';
import chevLeft from '../../../assets/icons/chevLeft.png';
import chevRight from '../../../assets/icons/chevRight.png';

const Calendar: React.FC = () => {
   const [selectedTimes, setSelectedTimes] = useState<{
      [key: string]: string[];
   }>({});
   const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
   const [is30Mins, setIs30Mins] = useState(true);

   const daysOfWeek: string[] = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
   ];

   const times30Mins: string[] = [
      '8:00',
      '8:30',
      '9:00',
      '9:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
   ];

   const times60Mins: string[] = [
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
   ];

   const selectedTimesArray = is30Mins ? times30Mins : times60Mins;

   const handleTimeClick = (day: string, time: string) => {
      const selectedDayTimes = selectedTimes[day] || [];
      const newSelectedTimes = {
         ...selectedTimes,
         [day]: selectedDayTimes.includes(time)
            ? selectedDayTimes.filter((selectedTime) => selectedTime !== time)
            : [...selectedDayTimes, time],
      };
      setSelectedTimes(newSelectedTimes);
   };

   const handlePrevWeek = () => {
      const newWeek = new Date(currentWeek);
      newWeek.setDate(newWeek.getDate() - 7);
      setCurrentWeek(newWeek);
      setSelectedTimes({});
   };

   const handleNextWeek = () => {
      const newWeek = new Date(currentWeek);
      newWeek.setDate(newWeek.getDate() + 7);
      setCurrentWeek(newWeek);
      setSelectedTimes({});
   };

   const startDateFormat = currentWeek.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
   });
   const endOfWeek = new Date(currentWeek);
   endOfWeek.setDate(endOfWeek.getDate() + 7);
   const endDateFormat = endOfWeek.toLocaleDateString('en-US', {
      day: 'numeric',
   });
   const dateRangeString = `${startDateFormat} - ${endDateFormat}`;

   return (
      <div className="text-center">
         <div className="bg-[#ECEDEE] rounded-lg py-4 flex justify-between px-8">
            <button
               className={`w-[45%] bg-white h-full p-2 rounded ${
                  is30Mins ? 'bg-green-100 ' : 'text-[#3A6AB3]'
               }`}
               onClick={() => setIs30Mins(true)}
            >
               30 mins
            </button>
            <button
               className={`w-[45%] bg-white h-full p-2 rounded ${
                  !is30Mins ? 'bg-green-100 ' : 'text-[#3A6AB3]'
               }`}
               onClick={() => setIs30Mins(false)}
            >
               60 mins
            </button>
         </div>
         <div className="flex items-center justify-center space-x-4 mb-4 mt-4">
            <button className="bg-[#C2D1E7] p-3" onClick={handlePrevWeek}>
               <img className="w-3 object-contain" src={chevLeft} alt="" />
            </button>
            <div className="text-lg font-bold">{dateRangeString}</div>
            <button className="bg-[#C2D1E7] p-3" onClick={handleNextWeek}>
               <img className="w-3 object-contain" src={chevRight} alt="" />
            </button>
         </div>

         <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day) => (
               <div key={day} className="text-center">
                  <div className="font-bold mb-2 border-t-2 border-[#3A6AB3] rounded-sm">
                     {day}
                  </div>
                  {selectedTimesArray.map((time) => (
                     <div
                        key={time}
                        className={`cursor-pointer my-1 p-2 ${
                           selectedTimes[day]?.includes(time)
                              ? 'bg-[#3A6AB3] rounded-xl text-white border-[#3A6AB3]'
                              : 'bg-white text-[#3A6AB3]'
                        }`}
                        onClick={() => handleTimeClick(day, time)}
                     >
                        {time}
                     </div>
                  ))}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Calendar;
