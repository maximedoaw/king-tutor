import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import video from '../../../../../assets/icons/play.png';
import user from '../../../../../assets/icons/user.svg';
import {
   pic1,
   pic2,
   pic3,
   pic4,
   pic5,
   pic6,
   play,
   star,
} from '../../../../../components/organisms/home.organisms/topTutorSection/pics';
import CardDashbaord from './component/CardDashboard';
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

export default function Dashboard({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
   const getCurrentTimeGreeting = (): string => {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
         return 'Good Morning';
      } else if (currentHour < 18) {
         return 'Good Afternoon';
      } else {
         return 'Good Evening';
      }
   };
   const [notifications, setNotifications] = useState<boolean>(false);
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
         <div className="my-8 px-8">
            <p className="font-medium text-lg mb-2">Dashboard</p>
            <div className="flex gap-x-4">
               <div className="flex bg-red-100 px-6 py-3  gap-x-2 items-center w-full">
                  <div className="h-12">
                     <img src={video} alt="" className="h-full" />
                  </div>
                  <div className="h-full flex flex-col justify-center">
                     <p className=" text-xl">400</p>
                     <p className="text-xs">Lessons booked</p>
                  </div>
               </div>
               <div className="flex bg-purple-100 px-6 py-3  gap-x-2 items-center w-full">
                  <div className="h-12 bg-white p-3">
                     <ActivitySquareIcon
                        color="purple"
                        className="h-full"
                     ></ActivitySquareIcon>
                  </div>
                  <div className="h-full flex flex-col justify-center">
                     <p className=" text-xl">6</p>
                     <p className="text-xs">Active lessons</p>
                  </div>
               </div>
               <div className="flex bg-red-100 px-6 py-3  gap-x-2 items-center w-full">
                  <div className="h-12 bg-white p-3">
                     {/* <img src={user} alt="" className="h-full" /> */}
                     <User2Icon color="red" className="h-full"></User2Icon>
                  </div>
                  <div className="h-full flex flex-col justify-center">
                     <p className=" text-xl">43</p>
                     <p className="text-xs">Tutors booked</p>
                  </div>
               </div>
               <div className="flex bg-green-100 px-6 py-3  gap-x-4 items-center w-full">
                  <div className="h-12 bg-white p-3">
                     <Trophy className="h-full" color="green"></Trophy>
                  </div>
                  <div className="h-full flex flex-col justify-center">
                     <p className=" text-xl">350</p>
                     <p className="text-xs">Lessons completed</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="my-8 px-8">
            <p className="font-medium text-lg">
               Start learning something today
            </p>
            <div className="container rounded-lg bg-gray-100 p-5 mt-2">
               <div className="column-4 flex justify-between flex-col md:flex-row">
                  <div className="rounded-lg bg-white shadow-lg px-7 py-3 ">
                     <label
                        htmlFor="subject"
                        style={{ textTransform: 'uppercase' }}
                     >
                        I want to learn
                     </label>
                     <br />
                     <select name="subject" id="subject">
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                     </select>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg px-7 py-3 ">
                     <label
                        htmlFor="price"
                        style={{ textTransform: 'uppercase' }}
                     >
                        Price per lesson
                     </label>
                     <br />
                     <select name="price" id="price">
                        <option value="500">$500</option>
                        <option value="500">$500</option>
                        <option value="500">$500</option>
                        <option value="500">$500</option>
                     </select>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg px-7 py-3 ">
                     <label
                        htmlFor="country"
                        style={{ textTransform: 'uppercase' }}
                     >
                        country of origin
                     </label>
                     <br />
                     <select name="country" id="country">
                        <option value="Spain">Spain</option>
                        <option value="Spain">Spain</option>
                        <option value="Spain">Spain</option>
                        <option value="Spain">Spain</option>
                     </select>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg px-7 py-3 ">
                     <label
                        htmlFor="avialable"
                        style={{ textTransform: 'uppercase' }}
                     >
                        I'm avialable
                     </label>
                     <br />
                     <select name="avialable" id="avialable">
                        <option value="avialable">available</option>
                        <option value="avialable">available</option>
                        <option value="avialable">available</option>
                        <option value="avialable">available</option>
                     </select>
                  </div>
               </div>

               <div className="column-4 flex gap-x-8 mt-4 flex-col md:flex-row">
                  <div className="rounded-lg bg-white shadow-lg px-4 py-3 flex items-center h-full">
                     <select name="subject" id="subject">
                        <option value="webDevelopment">Specialties</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                     </select>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg px-4 py-3 flex items-center h-full">
                     <select name="subject" id="subject">
                        <option value="webDevelopment">Also speaks</option>
                        <option value="webDevelopment">Spanish</option>
                        <option value="webDevelopment">French</option>
                        <option value="webDevelopment">Italian</option>
                     </select>
                  </div>
                  <div className="rounded-lg bg-white shadow-lg px-4 py-3 flex items-center h-full">
                     <select name="subject" id="subject">
                        <option
                           value="webDevelopment"
                           style={{ textTransform: 'capitalize' }}
                        >
                           Sort by:Our top picks
                        </option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDevelopment">Web Development</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>

         <div className="container px-8 ">
            <div className="row columns-1 md:columns-3 flex-1">
               <CardDashbaord
                  subject="French"
                  image={pic1}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
               <CardDashbaord
                  subject="French"
                  image={pic2}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
               <CardDashbaord
                  subject="French"
                  image={pic3}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
            </div>
            <div className="row gap-3 flex-1 mt-2 columns-1 md:columns-3 ">
               <CardDashbaord
                  subject="French"
                  image={pic4}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
               <CardDashbaord
                  subject="French"
                  image={pic5}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
               <CardDashbaord
                  subject="French"
                  image={pic6}
                  playIcon={play}
                  starIcon={star}
                  tutorName="Jagwa"
                  lessonLabel="Trial lesson starts from"
                  lessonPrice="USD 30.0"
                  numlesson="100 Lessons"
                  numOfStar="3.0"
                  href="#"
               />
            </div>
         </div>
      </div>
   );
}
