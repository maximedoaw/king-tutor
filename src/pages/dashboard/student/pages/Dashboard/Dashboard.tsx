import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import video from '../../../../../assets/icons/play.png';
import user from '../../../../../assets/icons/user.svg';
import {
   play,
   star,
} from '../../../../../components/organisms/home.organisms/topTutorSection/pics';
import CardDashboard from './component/CardDashboard';
import {
   ActivitySquareIcon,
   Trophy,
   User2Icon,
   UserIcon,
   X,
} from 'lucide-react';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';
import { GoTasklist } from 'react-icons/go';
import { useState } from 'react';
import { cardInfos } from '../../../../../constants/card';

export default function Dashboard({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
   const getCurrentTimeGreeting = (): string => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) return 'Good Morning';
      else if (currentHour < 18) return 'Good Afternoon';
      else return 'Good Evening';
   };

   const [notifications, setNotifications] = useState<boolean>(false);
   const [searchTerm, setSearchTerm] = useState('');

   // Filter the cardInfos array based on the search term
   const filteredCards = cardInfos.filter((info ) => info.tutor?.subject?.toLowerCase().includes(searchTerm.toLowerCase()),
   );

   return (
      <div>
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">{getCurrentTimeGreeting()}</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end h-full">
               <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-3">
                  <AiOutlineSearch className="w-8 h-6" />
                  <input
                     type="text"
                     placeholder="Search by subject"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
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
                                    3 new messages
                                 </span>
                              </p>
                              <p className="text-xs">just now</p>
                           </div>
                        </div>
                        {/* OTHER NOTIFICATIONS */}
                     </div>
                  )}
               </div>
               <div className="w-10" onClick={() => setPage('settings')}>
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         <div className="my-8 px-8">
            <p className="font-medium text-lg mb-2">Dashboard</p>
            <div className="flex gap-x-4">
               {/* Dashboard Stats */}
               <div className="flex bg-red-100 px-6 py-3  gap-x-2 items-center w-full">
                  <div className="h-12">
                     <img src={video} alt="" className="h-full" />
                  </div>
                  <div className="h-full flex flex-col justify-center">
                     <p className=" text-xl">400</p>
                     <p className="text-xs">Lessons booked</p>
                  </div>
               </div>
               {/* Additional Stat Cards */}
            </div>
         </div>

         <div className="container px-8">
            <div className="row columns-1 md:columns-3 flex-1">
               {filteredCards.length > 0 ? (
                  filteredCards.map((info) => (
                     <CardDashboard
                        key={info.tutor.name}
                        subject={info.tutor.subject}
                        image={info.mainImage}
                        playIcon={play}
                        starIcon={star}
                        tutorName={info.tutor.name}
                        lessonLabel={info.trialLesson?.label}
                        lessonPrice={info.trialLesson?.price}
                        numlesson={info.totalLessons}
                        numOfStar={info.rating}
                        href="#"
                     />
                  ))
               ) : (
                  <p className="text-center w-full py-4 text-gray-500">
                     No lessons found for "{searchTerm}"
                  </p>
               )}
            </div>
         </div>
      </div>
   );
}
