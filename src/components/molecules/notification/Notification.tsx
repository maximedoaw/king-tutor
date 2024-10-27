import React from 'react';
import messageIcon from '../../../assets/icons/messageIcon.svg';
import starIcon from '../../../assets/icons/starIcon.svg';
import notifIcon from '../../../assets/icons/notificationIcon.svg';

const Notification = () => {
   return (
      <div className="  rounded  w-96 text-base bg-white space-y-3">
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
               <img src={messageIcon} alt="Message icon" className="w-full" />
            </div>

            <div className="space-y-2 text-sm">
               <p>
                  <span className="font-bold text-base">Kevin</span> sent you{' '}
                  <span className="text-base"> 3 new messages</span>
               </p>
               <p className="text-xs">just now</p>
            </div>
         </div>

         {/* SECOND NOTIFICATION */}
         <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
            <div className="w-3/15">
               <img src={starIcon} alt="Star icon" className="w-full" />
            </div>

            <div className="space-y-1 text-sm">
               <p>
                  <span className="font-bold text-base">John</span> gave you a
                  5-star rating on your previous class
               </p>
               <p className="text-xs">5 mins ago</p>
            </div>
         </div>

         {/* THIRD NOTIFICATION */}
         <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
            <div className="w-3/15">
               <img src={notifIcon} alt="Star icon" className="w-full" />
            </div>

            <div className="space-y-1 text-sm">
               <p>
                  <span className="font-bold text-base">Sraboni</span> just
                  booked a class
               </p>
               <p className="text-xs">6 mins ago</p>
            </div>
         </div>

         {/* FOURTH NOTIFICATION */}
         <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
            <div className="w-3/15">
               <img src={notifIcon} alt="Star icon" className="w-full" />
            </div>

            <div className="space-y-1 text-sm">
               <p>
                  <span className="font-bold text-base">Arif</span> just booked
                  a class
               </p>
               <p className="text-xs">19 mins ago</p>
            </div>
         </div>
      </div>
   );
};

export default Notification;
