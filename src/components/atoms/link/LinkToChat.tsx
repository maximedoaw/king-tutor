import React from 'react';
import { Link } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';

export default function LinkToChat() {
   return (
      <Link
         to={'/chat'}
         className="bg-[#EBF0F7] inline-flex p-3 rounded-full shadow-lg"
      >
         <MdMessage className="text-2xl text-[#2B7CF8]" />
      </Link>
   );
}
