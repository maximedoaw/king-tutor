import React from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import course from '../../../../../assets/images/course.png';
import flag from '../../../../../assets/images/flag.png';
import verified from '../../../../../assets/images/verified.png';
import { getCurrentTimeGreeting } from '../../../../../utils';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';
import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { BsThreeDots } from 'react-icons/bs';
import GroupClasses from './components/GroupClasses';
import LiveChat from '../../LiveChat';

export default function Groupclass({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
   const [notifications, setNotifications] = useState<boolean>(false);

   return (
      <div>
         <div className="px-6 py-3 sm:flex flex-col columns-2 sm:flex-row sm:flex-wrap sm:items-center shadow hidden">
            <div className="flex flex-col self-start w-1/4">
               <p className="text-[#6E7485]">{getCurrentTimeGreeting()}</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-4 self-end justify-end w-3/4">
               <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-2 w-[70%]">
                  <AiOutlineSearch />
                  <input
                     type="text"
                     placeholder="Search"
                     className="p-1 focus:outline-none bg-transparent flex-shrink"
                  />
               </div>

               <div
                  className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1"
                  style={{ position: 'relative' }}
               >
                  <AiOutlineBell
                     className="cursor-pointer"
                     onClick={() => setNotifications(!notifications)}
                  />

                  <span
                     style={{
                        position: 'absolute',
                        right: '.75em',
                        top: '1em',
                     }}
                     className="bg-red-400 w-1.5 h-1.5 rounded-2xl text-xs"
                  ></span>
                  {notifications && (
                     <div className="py-2 p-6 absolute z-10 border right-4 top-8 rounded shadow  w-[24rem] text-base bg-white space-y-3">
                        <span
                           style={{
                              position: 'absolute',
                              top: '.5em',
                              right: '.6em',
                           }}
                           className="hover:cursor-pointer"
                           onClick={() => setNotifications(false)}
                        >
                           <X width={17} height={17}></X>
                        </span>
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

         {/* filter section */}

         <div className=" rounded-lg bg-gray-100 p-5 my-8 md:mx-8">
            <div className="column-4 flex justify-between flex-col md:flex-row gap-4 text-center">
               <div className="rounded-lg bg-white shadow-lg flex flex-col items-start pl-3 justify-center py-3 w-[60%]">
                  <label htmlFor="subject">Subject</label>
                  {/* <br /> */}
                  <select name="subject" id="subject">
                     <option value="webDevelopment">Web Development</option>
                     <option value="webDevelopment">Web Development</option>
                     <option value="webDevelopment">Web Development</option>
                     <option value="webDevelopment">Web Development</option>
                  </select>
               </div>
               <div className="rounded-lg bg-white shadow-lg flex flex-col items-start pl-3 justify-center py-3 w-[60%] ">
                  <label htmlFor="price">Price</label>
                  {/* <br /> */}
                  <select name="price" id="price">
                     <option value="500">$500</option>
                     <option value="500">$500</option>
                     <option value="500">$500</option>
                     <option value="500">$500</option>
                  </select>
               </div>
               <div className="rounded-lg bg-white shadow-lg flex flex-col items-start pl-3 justify-center py-3 w-[60%] ">
                  <label htmlFor="country">country</label>
                  {/* <br /> */}
                  <select name="country" id="country">
                     <option value="Spain">Spain</option>
                     <option value="Spain">Spain</option>
                     <option value="Spain">Spain</option>
                     <option value="Spain">Spain</option>
                  </select>
               </div>
               <div
                  className="rounded-lg bg-white shadow-lg flex flex-col items-start pl-3 justify-center py-3 w-[60%] 
               "
               >
                  <label htmlFor="avialable">Avialable</label>
                  {/* <br /> */}
                  <select name="avialable" id="avialable">
                     <option value="avialable">available</option>
                     <option value="avialable">available</option>
                     <option value="avialable">available</option>
                     <option value="avialable">available</option>
                  </select>
               </div>
            </div>
         </div>

         {/* body section */}

         <div className=" gap-8">
            <GroupClasses setPage={setPage}></GroupClasses>
            <GroupClasses setPage={setPage}></GroupClasses>
            <GroupClasses setPage={setPage}></GroupClasses>
         </div>
         <LiveChat></LiveChat>
      </div>
   );
}
