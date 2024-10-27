import React, { useState } from 'react'
import { TutorMessage } from '../../../pages/dashboard/student/pages/Messages/Messages';

export type ConversationProps = {
    chat : TutorMessage,
    isActive : boolean
}

const Conversation: React.FC<ConversationProps> = ({ chat, isActive }) => {

   return (
      <div
       className={`flex justify-between items-center ${isActive && 'bg-[#E1E9F4]'} px-5 py-2`}>
         <div className="flex gap-2 items-center cursor-pointer">
            <div className="relative">
               <img src={chat.photoURL} alt="Profile image" />
               <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
            </div>
            <div>
               <p className="font-bold">{chat.username}</p>
               <p className="text-sm text-[#6E7485]">{chat.message}</p>
            </div>
         </div>
         <div className="self-start flex flex-col space-y-3">
            <p className="text-sm text-[#6E7485]">{chat.connection}</p>
            {isActive && <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p>}
         </div>
      </div>
   );
};

export default Conversation
