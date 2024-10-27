import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import Avatar1 from '../../../../../assets/images/Avatar1.png';
import send from '../../../../../assets/icons/send.svg';
import smiley from '../../../../../assets/icons/smiley.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';

import RecievedMessage from './components/RecievedMessage';
import Day from './components/Day';
import SentMessage from './components/SentMessage';
import { TutorList } from '../../../../../constants/tutor';
import Conversation from '../../../../../components/atoms/conversation/Conversation';


export type TutorMessage = {
   username: string 
   message : string,
   connection : string,
   photoURL ? : string,
}

export default function Messages({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
   const [notifications, setNotifications] = useState(false);
   const [chats, setChats] = useState<TutorMessage[]>(TutorList);
   const [activeIndex, setActiveIndex] = useState(0);
   const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) =>{
      
      setChats(TutorList)

      setChats((chats) => chats.filter((chat) => chat.username.toLowerCase().includes(e.target.value.toLowerCase())))
   }

   const handleSelectConversation = () =>{
      
   }
   return (
      <div className="bg-[#E1E9F4] h-screen overflow-auto">
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

               <div className="w-10" onClick={() => setPage('settings')}>
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-3">
            {/* FIRTS ITEM */}
            <div className="bg-white space-y-2 h-[93vh]">
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
                        onChange={handleSearch}
                     />
                  </div>
               </div>

               {/* CHATS */}
               {/* CHAT LIST */}
               <div
                  className={`flex flex-col px-1 overflow-auto ${
                     chats.length === 0 ? 'items-center' : ''
                  }`}
               >
                  {/* ALL CHATS */}
                  {chats.length > 0 ? (
                     chats.map((chat, index) => {
                        return (
                           <div
                              key={index}
                              onClick={() => setActiveIndex(index)}
                           >
                              <Conversation
                                 chat={chat}
                                 isActive={activeIndex === index}
                              />
                           </div>
                        );
                     })
                  ) : (
                     <div
                        className="font-bold text-gray-500
                     text-2xl mt-24"
                     >
                        No user found
                     </div>
                  )}
               </div>
            </div>

            {/* TEXT FIELD AREA */}
            <div className="bg-white flex flex-col gap-3 py-4 justify-between pb-8">
               {/* HEADER */}
               <div>
                  <div className="flex justify-between items-center px-5 py-2">
                     <div className="flex gap-2 items-center cursor-pointer">
                        <div className="relative">
                           <img
                             //src={Avatar1}
                              src={chats[activeIndex]?.photoURL || TutorList[activeIndex]?.photoURL}
                              alt="Profile image"
                           />
                           <p className="p-1 rounded-full w-min bg-[#23BD33] border-2 border-[#FFFFFF] absolute right-0 bottom-1"></p>
                        </div>
                        <div>
                           {/* <p className="font-bold">{chats[activeIndex].username}</p> */}
                           <p className="text-sm text-[#6E7485]">
                              {chats[activeIndex]?.connection || TutorList[activeIndex]?.connection}
                           </p>
                        </div>
                     </div>

                     <div className="p-3 bg-[#F5F7FA] cursor-pointer">
                        <BsThreeDots />
                     </div>
                  </div>
               </div>

               {/* MESSAGES */}
               <div className=" bg-white h-[70vh] overflow-auto ">
                  <div className="mx-2 px-4 space-y-2 justify-start flex flex-col">
                     <RecievedMessage
                        message="Hello and thanks for signing up to the course."
                        time="Time"
                     />
                     <Day day="Today" />
                     {/* <RecievedMessage
                        message="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     iste nulla quibusdam ab, quasi cumque. Lorem ipsum dolor
                     sit amet consectetur adipisicing elit. Consequatur labore
                     quos dolorum, provident earum facilis optio eaque quisquam
                     maxime aut quae quo suscipit. Fuga iste nulla quibusdam ab,
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     iste nulla quibusdam ab, quasi cumque. iste nulla quibusdam
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     iste nulla quibusdam ab, quasi cumque. Lorem ipsum dolor
                     sit amet consectetur adipisicing elit. Consequatur labore
                     quos dolorum, provident earum facilis optio eaque quisquam
                     maxime aut quae quo suscipit. Fuga iste nulla quibusdam ab,
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     iste nulla quibusdam ab, quasi cumque. Lorem ipsum dolor
                     sit amet consectetur adipisicing elit. Consequatur labore
                     quos dolorum, provident earum facilis optio eaque quisquam
                     maxime aut quae quo suscipit. Fuga iste nulla quibusdam ab,
                     quasi cumque. Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Consequatur labore quos dolorum,
                     provident earum facilis optio eaque quisquam maxime aut
                     quae quo suscipit. Fuga iste nulla quibusdam ab, quasi
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur labore quos dolorum, provident earum facilis
                     optio eaque quisquam maxime aut quae quo suscipit. Fuga
                     iste nulla quibusdam ab, quasi cumque. cumque. quasi
                     cumque. ab, quasi cumque. quasi cumque."
                        time="Time"
                     /> */}

                     <SentMessage time="Time" message="Hello,Good Evening" />
                     <SentMessage time="Time" message="I'm Zafor" />
                     <SentMessage
                        time="Time"
                        message="I only have a small doubt about your lecture. Can you give me some time for this ?"
                     />
                     <RecievedMessage
                        time="Time"
                        //message="Hello world"
                        message={chats[activeIndex]?.message || TutorList[activeIndex]?.message}
                     />
                  </div>
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
