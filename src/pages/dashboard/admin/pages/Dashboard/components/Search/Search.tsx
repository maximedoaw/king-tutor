import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Search() {
   const subjects = ['English', 'Math', 'Geography']; // Add more subjects to the list if needed

   return (
      <div className="flex flex-col mt-8 mb-4 md:flex-row justify-center items-center gap-6 w-[100%] flex-start">
         <button className=" text-sm px-0 py-2 rounded-l focus:outline-none ">
            Subject
         </button>

         <div className="ml-0 w-full">
            <select className="w-contain bg-[#EBEBFF] rounded  inset-y-0 right-0 px-4 text-sm py-2  border-l focus:outline-none">
               {subjects.map((subject, index) => (
                  <option key={index} value={subject} className="w-full">
                     {subject}
                  </option>
               ))}
            </select>
         </div>
         <div className="flex w-full gap-2 pb-4 md:pb-0 items-center">
            <div className="relative md:ml-2 flex items-center justify-center">
               <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-1 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
               />

               <FiSearch
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  size={15}
               />
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none block md:block">
               <FiSearch size={15} />
            </button>
         </div>
         {/* <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hidden md:block">
            <FiSearch size={15} />
         </button> */}
      </div>
   );
}

export default Search;
