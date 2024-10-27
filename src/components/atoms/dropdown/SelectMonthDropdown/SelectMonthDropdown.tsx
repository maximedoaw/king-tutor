import React, { useState } from 'react';

interface ButtonProps {
   onSelectMonth: (string: string) => void;
}
const SelectMonthDropdownButton = ({ onSelectMonth }: ButtonProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedMonth, setSelectedMonth] = useState('');

   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleSelectMonth = (month: string) => {
      setSelectedMonth(month);
      setIsOpen(false);
      // Call the callback function with the selected month
      onSelectMonth(month);
   };

   return (
      <div className="relative">
         <button
            onClick={toggleDropdown}
            className="border border-[#C4C4C4] flex items-center px-4 py-2 rounded-sm focus:outline-none"
         >
            {selectedMonth !== ''
               ? selectedMonth
               : new Date().toLocaleString('default', { month: 'long' })}
            <svg
               className={`ml-2 h-5 w-5 transform ${
                  isOpen ? 'rotate-180' : ''
               }`}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.7-.3l-4-4a1 1 0 011.4-1.4L10 9.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-.7.3z"
                  clipRule="evenodd"
               />
            </svg>
         </button>
         {isOpen && (
            <div className="absolute bg-white mt-2 py-2 rounded-sm shadow-lg">
               {months.map((month, index) => (
                  <button
                     key={index}
                     className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full text-left focus:outline-none"
                     onClick={() => handleSelectMonth(month)}
                  >
                     {month}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectMonthDropdownButton;
