import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import tutor from '../../../../../assets/images/tutor.png';
import flag from '../../../../../assets/images/flag.png';
import verified from '../../../../../assets/images/verified.png';
import favor from '../../../../../assets/images/favor.png';
import tutor1 from '../../../../../assets/images/tutor1.png';
import youtube from '../../../../../assets/images/youtube.png';
import { getCurrentTimeGreeting } from '../../../../../utils';
import { Heart, MessageSquare, Star, X } from 'lucide-react';
import LiveChat from '../../LiveChat';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';
import Modal from '../Dashboard/component/Modal2';
import Modal2 from '../Dashboard/component/Modal';
import avatar5 from '../../../../../assets/images/Avatar5.png';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';
import playIcon from '../../../../../assets/icons/play.png';

export default function FindTutor({
   setPage,
   typeTemp,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
   typeTemp: string;
}) {
   const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [notifications, setNotifications] = useState<boolean>(false);
   return (
      <div>
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow ">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">{getCurrentTimeGreeting()}</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-2">
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

            {/* filter section */}

            <div className="container rounded-lg bg-gray-100 p-5 my-8">
               <div className="column-4 flex justify-around flex-col md:flex-row">
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
                        <option value="500">FCFA 4000- 6000</option>
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
                        <option value="Spain">Any Country</option>
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
                        <option value="avialable">Any time</option>
                        <option value="avialable">available</option>
                        <option value="avialable">available</option>
                        <option value="avialable">available</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* tutor section */}

            <div className="column-2 flex w-full gap-1 gap-x-4 flex-col lg:flex-row">
               <div className=" lg:w-3/4 w-full">
                  <div className="rounded flex gap-1 gap-x-3 my-0 mt-0 column-3 w-full p-4 border-2 border-gray-300">
                     <div
                        className="w-1/4 h-48 align-middle my-auto mr-3"
                        style={{ position: 'relative' }}
                     >
                        <img src={tutor} alt="" className="rounded w-full" />
                        <span
                           style={{
                              position: 'absolute',
                              right: '1em',
                              top: '1.2em',
                           }}
                           className="bg-green-400 w-4 h-4 rounded-2xl text-xs border-2 border-white"
                        ></span>
                     </div>
                     <div className=" w-1/2">
                        <p className=" font-semibold flex">
                           {' '}
                           Jace Kayode{' '}
                           <div className=" mx-5 w-5">
                              <img src={flag} alt="" className=" w-full" />
                           </div>
                           <div className="w-5 ">
                              <img src={verified} alt="" className=" w-full" />
                           </div>
                           <img src="" alt="" className="icons w-1/5" />{' '}
                        </p>
                        <small className=" text-gray-700">
                           <img src="" alt="" className=" w-12" /> Professional
                           JavaScript tutor
                        </small>
                        <br />
                        <small className=" text-gray-700">
                           Speaks: English{' '}
                           <span className=" bg-blue-300"> Native</span> French{' '}
                           <span className=" bg-blue-300"> Native</span>
                        </small>
                        <p className=" text-gray-500">
                           Lorem ipsum dolor sit amet consectetur. Morbi
                           ultrices velit orci amet mauris nec. Tincidunt dui
                           mauris pellentesque quam.
                        </p>
                        <span className=" text-blue-500 ">Read More</span>
                        <p className=" font-semibold">100 Lessons Thought</p>
                        <span className=" text-gray-500 flex gap-x-2">
                           <Star
                              className="text-blue-600"
                              fill="#2563eb"
                              fillOpacity={0.4}
                              width="1em"
                           ></Star>
                           <span>4.5 student rating</span>
                        </span>
                     </div>
                     <div className="w-1/4 text-right justify-end  align-middle">
                        <div className="favourite w-5 ml-auto bg-blue-950 p-1 mb-7">
                           <Heart
                              color="white"
                              className="w-full h-full"
                           ></Heart>
                        </div>

                        <div className=" text-blue-600 font-bold ">
                           <p>$500</p>
                           <p className=" text-gray-500 font-normal">
                              60 min lession
                           </p>
                        </div>

                        <div className="btn mt-7">
                           <button
                              className=" px-2 py-2 rounded bg-blue-600 text-white"
                              onClick={() => setIsModalOpen2(true)}
                           >
                              {' '}
                              {typeTemp === 'mytutors'
                                 ? 'Book a lesson'
                                 : 'Book a trial lesson'}
                           </button>
                        </div>
                        <div className="btn mt-4">
                           <button
                              className=" px-2 py-2 rounded bg-transparent border text-black border-black"
                              onClick={() => setPage('messages')}
                           >
                              {' '}
                              Message
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="rounded flex gap-1 gap-x-3 my-0 mt-0 column-3 w-full p-4 border-2 border-gray-300">
                     <div
                        className="w-1/4 h-48 align-middle my-auto mr-3"
                        style={{ position: 'relative' }}
                     >
                        <img src={tutor} alt="" className="rounded w-full" />
                        <span
                           style={{
                              position: 'absolute',
                              right: '1em',
                              top: '1.2em',
                           }}
                           className="bg-green-400 w-4 h-4 rounded-2xl text-xs border-2 border-white"
                        ></span>
                     </div>
                     <div className=" w-1/2">
                        <p className=" font-semibold flex">
                           {' '}
                           Jace Kayode{' '}
                           <div className=" mx-5 w-5">
                              <img src={flag} alt="" className=" w-full" />
                           </div>
                           <div className="w-5 ">
                              <img src={verified} alt="" className=" w-full" />
                           </div>
                           <img src="" alt="" className="icons w-1/5" />{' '}
                        </p>
                        <small className=" text-gray-700">
                           <img src="" alt="" className=" w-12" /> Professional
                           JavaScript tutor
                        </small>
                        <br />
                        <small className=" text-gray-700">
                           Speaks: English{' '}
                           <span className=" bg-blue-300"> Native</span> French{' '}
                           <span className=" bg-blue-300"> Native</span>
                        </small>
                        <p className=" text-gray-500">
                           Lorem ipsum dolor sit amet consectetur. Morbi
                           ultrices velit orci amet mauris nec. Tincidunt dui
                           mauris pellentesque quam.
                        </p>
                        <span className=" text-blue-500 ">Read More</span>
                        <p className=" font-semibold">100 Lessons Thought</p>
                        <span className=" text-gray-500 flex gap-x-2">
                           <Star
                              className="text-blue-600"
                              fill="#2563eb"
                              fillOpacity={0.4}
                              width="1em"
                           ></Star>
                           <span>4.5 student rating</span>
                        </span>
                     </div>
                     <div className="w-1/4 text-right justify-end  align-middle">
                        <div className="favourite w-5 ml-auto bg-blue-950 p-1 mb-7">
                           <Heart
                              color="white"
                              className="w-full h-full"
                           ></Heart>
                        </div>

                        <div className=" text-blue-600 font-bold ">
                           <p>$500</p>
                           <p className=" text-gray-500 font-normal">
                              60 min lession
                           </p>
                        </div>

                        <div className="btn mt-7">
                           <button
                              className=" px-2 py-2 rounded bg-blue-600 text-white"
                              onClick={() => setIsModalOpen2(true)}
                           >
                              {' '}
                              {typeTemp === 'mytutors'
                                 ? 'Book a lesson'
                                 : 'Book a trial lesson'}
                           </button>
                        </div>
                        <div className="btn mt-4 flex items-center gap-x-5">
                           <button className=" px-2 py-2 rounded bg-transparent border text-black border-black">
                              {' '}
                              Buy package
                           </button>
                           <button
                              className=" px-2 py-2 rounded bg-transparent border text-black border-black"
                              onClick={() => setPage('messages')}
                           >
                              <MessageSquare></MessageSquare>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="rounded flex gap-1 gap-x-3 my-0 mt-0 column-3 w-full p-4 border-2 border-gray-300">
                     <div
                        className="w-1/4 h-48 align-middle my-auto mr-3"
                        style={{ position: 'relative' }}
                     >
                        <img src={tutor} alt="" className="rounded w-full" />
                        <span
                           style={{
                              position: 'absolute',
                              right: '1em',
                              top: '1.2em',
                           }}
                           className="bg-gray-300 w-4 h-4 rounded-2xl text-xs border-2 border-white"
                        ></span>
                     </div>
                     <div className=" w-1/2">
                        <p className=" font-semibold flex">
                           {' '}
                           Jace Kayode{' '}
                           <div className=" mx-5 w-5">
                              <img src={flag} alt="" className=" w-full" />
                           </div>
                           <div className="w-5 ">
                              <img src={verified} alt="" className=" w-full" />
                           </div>
                           <img src="" alt="" className="icons w-1/5" />{' '}
                        </p>
                        <small className=" text-gray-700">
                           <img src="" alt="" className=" w-12" /> Professional
                           JavaScript tutor
                        </small>
                        <br />
                        <small className=" text-gray-700">
                           Speaks: English{' '}
                           <span className=" bg-blue-300"> Native</span> French{' '}
                           <span className=" bg-blue-300"> Native</span>
                        </small>
                        <p className=" text-gray-500">
                           Lorem ipsum dolor sit amet consectetur. Morbi
                           ultrices velit orci amet mauris nec. Tincidunt dui
                           mauris pellentesque quam.
                        </p>
                        <span className=" text-blue-500 ">Read More</span>
                        <p className=" font-semibold">100 Lessons Thought</p>
                        <span className=" text-gray-500 flex gap-x-2">
                           <Star
                              className="text-blue-600"
                              fill="#2563eb"
                              fillOpacity={0.4}
                              width="1em"
                           ></Star>
                           <span>4.5 student rating</span>
                        </span>
                     </div>
                     <div className="w-1/4 text-right justify-end  align-middle">
                        <div className="favourite w-5 ml-auto bg-blue-950 p-1 mb-7">
                           <Heart
                              color="white"
                              className="w-full h-full"
                           ></Heart>
                        </div>

                        <div className=" text-blue-600 font-bold ">
                           <p>$500</p>
                           <p className=" text-gray-500 font-normal">
                              60 min lession
                           </p>
                        </div>

                        <div className="btn mt-7">
                           <button
                              className=" px-2 py-2 rounded bg-blue-600 text-white"
                              onClick={() => setIsModalOpen2(true)}
                           >
                              {' '}
                              {typeTemp === 'mytutors'
                                 ? 'Book a lesson'
                                 : 'Book a trial lesson'}
                           </button>
                        </div>
                        <div className="btn mt-4 flex items-center gap-x-5">
                           <button className=" px-2 py-2 rounded bg-transparent border text-black border-black">
                              {' '}
                              Buy package
                           </button>
                           <button
                              className=" px-2 py-2 rounded bg-transparent border text-black border-black"
                              onClick={() => setPage('messages')}
                           >
                              <MessageSquare></MessageSquare>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" lg:w-1/4 w-full">
                  <div className="w-full rounded-lg bg-gray-200 py-8 px-3">
                     <div className="display rounded-lg relative ">
                        <img
                           src={tutor1}
                           alt=""
                           className="w-full"
                           onClick={() => setIsModalOpen(true)}
                        />
                        <div className="playIcon absolute top-4 left-12">
                           <a href="#" onClick={() => setIsModalOpen(true)}>
                              <img src={youtube} alt="" className="w-full" />
                           </a>
                        </div>
                     </div>

                     <div className="btn mt-4 w-full">
                        {/* <a href="#" className="w-full"> */}
                        <button
                           className="w-full rounded text-black bg-white hover:bg-gray-300 py-2"
                           onClick={() => setIsModalOpen2(true)}
                        >
                           View Schedule
                        </button>
                        {/* </a> */}
                     </div>
                  </div>
               </div>
            </div>
            <LiveChat></LiveChat>
            <Modal isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
               <div className="">
                  <div className="py-6 px-8">
                     <div className="flex w-full justify-between items-center pb-3">
                        <div className="flex items-center gap-x-3">
                           <img src={avatar5} alt="" />
                           <div>
                              <p>Book a trial lesson</p>
                              <p className="text-xs">
                                 Javascript with Grace Kayode
                              </p>
                           </div>
                        </div>
                        <X onClick={() => setIsModalOpen2(false)}></X>
                     </div>
                     <hr></hr>
                     <div style={{ overflowY: 'scroll' }}>
                        <div className="flex w-full justify-center">
                           <div className="rounded-xl bg-gray-200 flex gap-x-1 my-6 justify-center px-2 py-2">
                              <span className="rounded-xl px-12 py-2 bg-white">
                                 30 mins
                              </span>
                              <span className="rounded-xl bg-[#d9feef] px-12 py-2">
                                 60 mins
                              </span>
                           </div>
                        </div>
                        <div className="flex w-full justify-center gap-x-6 items-center text-lg">
                           <span className="bg-blue-100">
                              <CaretLeftIcon
                                 className=" "
                                 width="2em"
                                 height="2em"
                                 color="gray"
                              ></CaretLeftIcon>
                           </span>
                           <p className="font-semibold">October 4 - 10, 2024</p>
                           <span className="bg-blue-100">
                              <CaretRightIcon
                                 className=" "
                                 width="2em"
                                 height="2em"
                                 color="gray"
                              ></CaretRightIcon>
                           </span>
                        </div>
                        <div className="flex w-full justify-center my-4">
                           <div className="flex gap-x-1">
                              <div>
                                 <p className="border-t-2 border-gray-400 pt-1 px-1">
                                    Wed
                                 </p>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-1">
                                    Thur
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg bg-blue-400 p-2 py-1 text-sm border border-blue-400 text-white">
                                       08:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       09:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-2">
                                    Fri
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg bg-white p-2 py-1 text-sm border border-blue-400 text-blue-400">
                                       09:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-2">
                                    Sat
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-1">
                                    Sun
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       08:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       09:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-1">
                                    Mon
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       08:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       09:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <p className="border-t-2 border-blue-400 pt-1 px-1">
                                    Tue
                                 </p>
                                 <div className="flex flex-col gap-y-1">
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       08:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       09:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       10:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       11:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       12:00
                                    </p>
                                    <p className="rounded-lg p-2 py-1 text-sm text-blue-400">
                                       13:00
                                    </p>
                                 </div>
                              </div>
                           </div>
                           {/* <Calendar></Calendar> */}
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 p-4 px-6 pb-6 w-full">
                     <div>
                        <p className="text-sm">
                           The calendar is in your time zone
                        </p>
                        <p className="text-sm">Africa/Lagos 14:56</p>
                     </div>
                     <a href="/book-lesson">
                        <button className="rounded-xl bg-blue-500 text-white p-3 px-6">
                           Confirm time
                        </button>
                     </a>
                  </div>
               </div>
            </Modal>
            <Modal2 isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
               <div className="w-full h-full">
                  <img
                     src={tutor1}
                     alt=""
                     className="w-full h-96 rounded-none h-full"
                  />
                  <span
                     style={{ position: 'absolute', right: '1em', top: '1em' }}
                     onClick={() => setIsModalOpen(false)}
                  >
                     <X color="white"></X>{' '}
                  </span>
                  <span
                     className="image2 mt-[-50px] pl-3"
                     style={{
                        position: 'absolute',
                        bottom: '2em',
                        left: '1em',
                     }}
                  >
                     {playIcon && (
                        <img src={playIcon} className="playIcon w-10" alt="" />
                     )}
                  </span>
               </div>
            </Modal2>
         </div>
      </div>
   );
}
