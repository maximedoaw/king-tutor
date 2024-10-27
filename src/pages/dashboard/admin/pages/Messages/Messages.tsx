// import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
// import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import Avatar1 from '../../../../../assets/images/Avatar1.png';
import Avatar2 from '../../../../../assets/images/Avatar2.png';
import Avatar3 from '../../../../../assets/images/Avatar3.png';
import Avatar4 from '../../../../../assets/images/Avatar4.png';
import Avatar5 from '../../../../../assets/images/Avatar5.png';
import Avatar6 from '../../../../../assets/images/Avatar6.png';
import Avatar7 from '../../../../../assets/images/Avatar7.png';
import send from '../../../../../assets/icons/send.svg';
import smiley from '../../../../../assets/icons/smiley.svg';
// import messageIcon from '../../../../../assets/icons/messageIcon.svg';
// import starIcon from '../../../../../assets/icons/starIcon.svg';
// import notifIcon from '../../../../../assets/icons/notificationIcon.svg';

import RecievedMessage from './components/RecievedMessage';
import Day from './components/Day';
import SentMessage from './components/SentMessage';

export default function Messages() {
   return (
      <div className="bg-[#E1E9F4] h-screen overflow-auto">
         {/*  */}

         <div className="grid grid-cols-2 gap-3">
            {/* FIRTS ITEM */}
            <div className="bg-white space-y-2">
               {/* FIRST ROW */}
               <div className="flex items-center justify-between px-4 py-2">
                  <p className="font-bold">Chat</p>
                  <select name="" id="" className="bg-[#EBEBFF] px-6 py-2">
                     <option value="">
                        <span className="text-[#564FFD]">All</span>
                     </option>
                  </select>
               </div>

               {/* SEARCH BAR */}
               <div className="flex items-center px-4 py-2 gap-2 text-lg bg-[#F5F7FA]">
                  <div className="border flex items-center px-4 py-2 w-full">
                     <AiOutlineSearch />
                     <input
                        type="text"
                        placeholder="Search"
                        className="p-1 focus:outline-none bg-transparent w-full"
                     />
                  </div>
               </div>

               {/* CHATS */}
               {/* CHAT LIST */}
               <div className="flex flex-col px-1 overflow-auto">
                  {/* FIRST CHAT */}
                  <div className="flex justify-between items-center bg-[#E1E9F4] px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar1} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Jane Cooper</p>
                           <p className="text-sm text-[#6E7485]">
                              Yeah sure, tell me Zafor
                           </p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">just now</p>
                        <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p>
                     </div>
                  </div>

                  {/* SECOND CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar2} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Jenny Wilson</p>
                           <p className="text-sm text-[#6E7485]">
                              Thank you so much,sir
                           </p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">2d ago</p>
                        <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p>
                     </div>
                  </div>

                  {/* THIRD CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar3} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Marvin McKinney</p>
                           <p className="text-sm text-[#6E7485]">
                              You&apos;re welcome
                           </p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">1m ago</p>
                        <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p>
                     </div>
                  </div>

                  {/* FOURTH CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar4} alt="Profile image" />
                           {/* <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p> */}
                        </div>
                        <div>
                           <p className="font-bold">Eleanor Penna</p>
                           <p className="text-sm text-[#6E7485]">
                              Thank you so much,sir
                           </p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">1m ago</p>
                        {/* <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p> */}
                     </div>
                  </div>

                  {/* FIFTH CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar5} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Ronald Richards</p>
                           <p className="text-sm text-[#6E7485]">
                              Sorry I can&apos;t help you
                           </p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">1m ago</p>
                        {/* <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p> */}
                     </div>
                  </div>

                  {/* SIXTH CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar6} alt="Profile image" />
                           {/* <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p> */}
                        </div>
                        <div>
                           <p className="font-bold">Jacob Jones</p>
                           <p className="text-sm text-[#6E7485]">New message</p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">2m ago</p>
                        {/* <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p> */}
                     </div>
                  </div>

                  {/* SEVENTH CHAT */}
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar7} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Kathryn Murphy</p>
                           <p className="text-sm text-[#6E7485]">Thank you</p>
                        </div>
                     </div>
                     <div className="self-start flex flex-col space-y-3">
                        <p className="text-sm text-[#6E7485]">7m ago</p>
                        <p className="p-1 rounded-full bg-[#3A6AB3] w-min self-end"></p>
                     </div>
                  </div>
               </div>
            </div>

            {/* TEXT FIELD AREA */}
            <div className="bg-white flex flex-col gap-3 py-4 justify-between">
               {/* HEADER */}
               <div>
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar1} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Jane Cooper</p>
                           <p className="text-sm text-[#6E7485]">Active now</p>
                        </div>
                     </div>

                     <div className="p-3 bg-[#F5F7FA] cursor-pointer">
                        <BsThreeDots />
                     </div>
                  </div>
               </div>

               {/* MESSAGES */}
               <div className="mx-2 px-4 space-y-2">
                  <RecievedMessage
                     message="Hello and thanks for signing up to the course."
                     time="Time"
                  />

                  <Day day="Today" />

                  <SentMessage time="Time" message="Hello,Good Evening" />
                  <SentMessage time="Time" message="I'm Zafor" />
                  <SentMessage
                     time="Time"
                     message="I only have a small doubt about your lecture. Can you give me some time for this ?"
                  />

                  <RecievedMessage
                     time="Time"
                     message="Yeah sure, tell me Zafor"
                  />
               </div>

               {/* TEXT BOX */}
               <div className="flex items-center gap-2 px-3">
                  <div className="">
                     <img src={smiley} alt="Emojis" className="w-8" />
                  </div>
                  <div className="flex-1">
                     <textarea
                        className="w-full bg-[#F5F7FA] px-1 py-2 border focus:outline-none"
                        name="message"
                        id="message"
                        cols={30}
                        rows={2}
                        placeholder="Type your message"
                     ></textarea>
                  </div>
                  <div className="">
                     <img src={send} alt="Send" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
