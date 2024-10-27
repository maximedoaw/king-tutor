import React, { useState } from 'react';
import { FaRegStopCircle } from 'react-icons/fa';
import { GoPeople, GoSmiley } from 'react-icons/go';
import { IoMicOffOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle, AiOutlineSend } from 'react-icons/ai';
import { FaPersonChalkboard } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { FiVideo, FiMessageSquare } from 'react-icons/fi';
import { RxShare2 } from 'react-icons/rx';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { MdLogout, MdOutlineBackHand } from 'react-icons/md';
import student from '../../assets/images/student-chat.png';
import tutor from '../../assets/images/teacher-chat.png';

import logo from '../../assets/images/KT_logo.png';

export default function Header() {
   const [chatbox, setChatBox] = useState<boolean>(false);
   const [hand, setHand] = useState<boolean>(false);
   return (
      <div className="">
         <div className="h-screen flex flex-col">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#04173D] to-[#002060]">
               <header className="max-w-7xl mx-auto flex justify-between items-center py-1 px-6">
                  <div>
                     <img src={logo} alt="logo" />
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2 text-white">
                        <div className="p-1 bg-red-500 rounded-full"></div>
                        <div>10:20</div>
                     </div>

                     {/* <button className="px-4 py-2 text-white flex items-center gap-2 border border-white rounded-lg hover:bg-white hover:text-[#002060]">
                     <FaRegStopCircle className="text-2xl" />
                     <span>End Class</span>
                  </button> */}

                     <div className="border border-white rounded-xl px-4 py-2 text-white flex items-center gap-2">
                        <GoPeople className="text-2xl" />
                        <span>5</span>
                     </div>
                  </div>
               </header>
            </div>
            {/* VIDEO FEED SECTION */}
            <div className="max-h-full overflow-hidden flex flex-col flex-grow gap-2 sm:flex-row sm:justify-around sm:items-center h-4/5 px-4 py-3 relative">
               {/* TUTOR */}
               <div className=" max-w-xl">
                  <img src={tutor} alt="Tutor" className="w-full rounded-xl" />
               </div>

               {/* STUDENT */}
               <div className=" max-w-xl relative">
                  <img
                     src={student}
                     alt="Tutor"
                     className="max-h-full rounded-xl object-cover"
                  />

                  {hand && (
                     <MdOutlineBackHand className="text-3xl absolute top-4 left-2 bg-[#ECC502] rounded-full" />
                  )}
               </div>

               {/* CHATBOX */}
               {chatbox && (
                  <div className="absolute bottom-2 right-2 bg-[#F5F7FA] px-4 py-2 max-w-[440px] h-4/5 rounded-lg space-y-3 shadow-lg z-10 flex flex-col justify-between">
                     {/* Header and Info of chatbox */}
                     <div className="space-y-3">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <h3 className="text-xl font-bold">Chat</h3>
                              <select
                                 name="recipients"
                                 id="recipients"
                                 className="px-3 py-1 border-2 border-black rounded-lg"
                              >
                                 <option value="everyone">Everyone</option>
                              </select>
                           </div>

                           {/* Close Button */}
                           <button
                              className="text-2xl"
                              onClick={() => setChatBox(false)}
                           >
                              <IoMdClose />
                           </button>
                        </div>

                        {/* INFO */}
                        <div className="bg-[#C3D0E5] bg-opacity-50 rounded-xl px-4 py-2 flex items-center gap-4">
                           <AiOutlineInfoCircle className="text-4xl" />

                           <p className="leading-tight">
                              Messages can only be seen by people in the call
                              and are deleted when the call ends!
                           </p>
                        </div>
                     </div>

                     {/* ------------------ MESSAGES ---------------------- */}
                     <div className="h-full overflow-scroll gap-2 py-2 space-y-2">
                        <div className="flex w-full justify-between items-start px-2 py-1">
                           <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                 <span className="font-bold">You</span>
                                 <span className="text-xs">2:12 PM</span>
                              </div>
                              <p>Heyy</p>
                           </div>

                           <button className="p-2">
                              <BsThreeDots />
                           </button>
                        </div>

                        <div className="flex w-full justify-between items-start px-2 py-1">
                           <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                 <span className="font-bold">Karen A</span>
                                 <span className="text-xs">2:12 PM</span>
                              </div>
                              <p>What&apos;s up ?</p>
                              <p>How&apos;s it going ?</p>
                           </div>

                           <button className="p-2">
                              <BsThreeDots />
                           </button>
                        </div>

                        <div className="bg-[#E9EBF8] flex w-full justify-between items-start px-2 py-1">
                           <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                 <span className="font-bold">Karen A</span>
                                 <span className="text-xs">2:12 PM</span>
                              </div>
                              <p>What&apos;s up ?</p>
                              <p>How&apos;s it going ?</p>
                           </div>

                           <p className="border-2 border-black px-3 rounded-md text-xs">
                              PRIVATE
                           </p>
                        </div>
                     </div>

                     {/* TEXTBOX */}
                     <div className="w-full bg-[#E9EBF8] p-2 rounded-lg flex items-center">
                        <input
                           type="text"
                           className="bg-[#E9EBF8] flex-1 rounded-lg py-1 px-3"
                           placeholder="Send a message to everyone"
                        />
                        <button className="p-2 text-xl">
                           <GoSmiley />
                        </button>
                        <button className="p-2 text-xl">
                           <AiOutlineSend />
                        </button>
                     </div>
                  </div>
               )}
            </div>
            {/* ----------------------------- BOTTOM BUTTONS ----------------------------------- */}
            <div className=" py-2 px-6 flex items-center justify-center gap-5 overflow-auto">
               {/* LEFT BUTTONS */}
               <div className="flex items-center gap-3">
                  <button className="px-3 py-2 rounded-xl border-2 border-black text-2xl">
                     <IoMicOffOutline />
                  </button>
                  <button className="px-3 py-2 rounded-xl border-2 border-black text-2xl">
                     <FiVideo />
                  </button>
               </div>

               {/* MIDDLE BUTTONS */}
               <div className="flex items-center gap-3">
                  <button className="px-3 py-2 rounded-xl border-2 border-black text-2xl">
                     <RxShare2 />
                  </button>
                  <button className="px-3 py-2 rounded-xl border-2 border-black text-2xl">
                     <BsThreeDotsVertical />
                  </button>

                  <button className="bg-[#CC525F] text-white font-bold flex items-center gap-2 px-3 py-3 rounded-xl">
                     <MdLogout className="text-2xl" />
                     <span className="text-nowrap">Leave Class</span>
                  </button>
               </div>

               {/* RIGHT BUTTONS */}
               <div className="flex items-center gap-3">
                  <button
                     className="px-3 py-2 rounded-xl border-2 border-black flex items-center gap-2"
                     onClick={() => setHand(!hand)}
                  >
                     <MdOutlineBackHand className="text-2xl" />
                  </button>

                  <button className="px-3 py-2 rounded-xl border-2 border-black flex items-center gap-2">
                     <FaPersonChalkboard className="text-2xl" />
                     <span className="font-bold">Whiteboard</span>
                  </button>

                  <button
                     className="px-3 py-2 rounded-xl border-2 border-black text-2xl relative"
                     onClick={() => setChatBox(!chatbox)}
                  >
                     <FiMessageSquare />

                     <span className="absolute -top-1 -right-2 px-2 py-1 rounded-full bg-black text-white text-xs">
                        5
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
