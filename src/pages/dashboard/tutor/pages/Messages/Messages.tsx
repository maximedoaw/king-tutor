import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import Avatar1 from '../../../../../assets/images/Avatar1.png';
import Avatar2 from '../../../../../assets/images/Avatar2.png';
import Avatar3 from '../../../../../assets/images/Avatar3.png';
import Avatar4 from '../../../../../assets/images/Avatar4.png';
import Avatar5 from '../../../../../assets/images/Avatar5.png';
import Avatar6 from '../../../../../assets/images/Avatar6.png';
import Avatar7 from '../../../../../assets/images/Avatar7.png';
import send from '../../../../../assets/icons/send.svg';
import smiley from '../../../../../assets/icons/smiley.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';
import { useNavigate } from 'react-router-dom';
import RecievedMessage from './components/RecievedMessage';
import Day from './components/Day';
import SentMessage from './components/SentMessage';

export default function Messages() {
   const [notifications, setNotifications] = useState(false);
   const navigate = useNavigate();

   const gotoProfile = () => {
      navigate('/profile');
   };

   return (
      <div className="bg-[#E1E9F4] h-screen">
         <div className="bg-white px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow border-b hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">Good morning</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               {/* <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-2">
                  <AiOutlineSearch />
                  <input
                     type="text"
                     placeholder="Search"
                     className="p-1 focus:outline-none bg-transparent flex-shrink"
                  />
               </div> */}

               <div className="flex items-center text-2xl bg-[#F5F7FA] px-2 py-1 relative ">
                  <AiOutlineBell
                     className="cursor-pointer"
                     onClick={() => setNotifications(!notifications)}
                  />
                  <p className="p-1 bg-[#FF6636] rounded-full absolute top-3 right-2 border-2 border-white"></p>

                  {notifications && (
                     <div className="py-2 absolute z-10 border right-4 top-8 rounded shadow  w-80 text-base bg-white space-y-3">
                        <div className="flex justify-between border-b py-1 px-2">
                           <p>Recent Activity</p>
                           <select
                              className="bg-white"
                              name="recentActivity"
                              id="recentActivity"
                           >
                              <option value="today">Today</option>
                           </select>
                        </div>
                        {/* NOTIFICATIONS */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="">
                              <img
                                 src={messageIcon}
                                 alt="Message icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Kevin
                                 </span>{' '}
                                 sent you{' '}
                                 <span className="text-base">
                                    {' '}
                                    3 new messages
                                 </span>
                              </p>
                              <p className="text-xs">just now</p>
                           </div>
                        </div>

                        {/* SECOND NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={starIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    John
                                 </span>{' '}
                                 gave you a 5-star rating on your previous class
                              </p>
                              <p className="text-xs">5 mins ago</p>
                           </div>
                        </div>

                        {/* THIRD NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={notifIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Sraboni
                                 </span>{' '}
                                 just booked a class
                              </p>
                              <p className="text-xs">6 mins ago</p>
                           </div>
                        </div>

                        {/* FOURTH NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={notifIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Arif
                                 </span>{' '}
                                 just booked a class
                              </p>
                              <p className="text-xs">19 mins ago</p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               <div className="w-10">
                  <button onClick={gotoProfile}>
                     <img src={MichaelBoole} alt="Profile image" />
                  </button>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-message gap-3 border-4 w-full min-w-[799px]">
            {/* FIRTS ITEM */}
            <div className="bg-white space-y-2 h-[88vh] overflow-auto">
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
               <div className="flex flex-col px-1 max-h-full overflow-auto">
                  {/* FIRST CHAT */}
                  <div className="flex justify-between items-center bg-[#E1E9F4] px-5 py-2">
                     <div className="flex gap-2 items-center">
                        <div className="relative">
                           <img src={Avatar1} alt="Profile image" />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           <p className="font-bold">Jane Cooper</p>
                           <p className="hidden md:block text-sm text-[#6E7485]">
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
                              New message
                           </p>
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
                           <p className="hidden md:block text-sm text-[#6E7485]">
                              Thank you
                           </p>
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
