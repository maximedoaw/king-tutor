import { useEffect, useState } from 'react';
import {
   AiOutlineClockCircle,
   AiOutlineClose,
   AiOutlineCreditCard,
   AiOutlineMenu,
   AiOutlineMessage,
   AiOutlinePlusCircle,
   AiOutlineSetting,
   AiOutlineWallet,
} from 'react-icons/ai';
import { BsBarChartLine } from 'react-icons/bs';
import { GoStack } from 'react-icons/go';
import { MdFavorite, MdLogout } from 'react-icons/md';
import logo from '../../../assets/images/KT_logo.png';
import { Logo } from '../../../components/atoms';
import {
   Classroom,
   Dashboard,
   FindTutor,
   Groupclass,
   History,
   Messages,
   Settings,
   StudentClassroom,
   Wallet,
} from './pages/index';

export default function StudentDashboard({ pageTemp }: { pageTemp: string }) {
   const [page, setPage] = useState<string>(pageTemp);
   const [menu, setMenu] = useState(false);
   return (
      <div className="h-screen ">
         {/* -------------- SIDEBAR -------------------- */}
         <div className="bg-[#0E1B2E] hidden sm:flex flex-col h-screen w-1/4 fixed top-0 left-0 z-10 justify-between">
            <aside className="overflow-auto">
               <div className="mb-4">
                  <Logo />
               </div>
               <ul className="text-[#8C94A3] flex flex-col gap-3">
                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'dashboard' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('dashboard')}
                  >
                     <BsBarChartLine />
                     Dashboard
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'findtutor' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('findtutor')}
                  >
                     <AiOutlinePlusCircle />
                     <span>Find Tutor</span>
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'groupclass' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('groupclass')}
                  >
                     <GoStack />
                     Group Class
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'classroom' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('classroom')}
                  >
                     <AiOutlineCreditCard />
                     Class Room
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'messages' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('messages')}
                  >
                     <AiOutlineMessage />
                     Messages
                     <span className="px-2 w-fit h-fit rounded-full text-[#0266FD] bg-white">
                        3
                     </span>
                  </li>
                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'mytutors' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('mytutors')}
                  >
                     <MdFavorite />
                     My Tutors
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'history' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('history')}
                  >
                     <AiOutlineClockCircle />
                     History
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'wallet' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('wallet')}
                  >
                     <AiOutlineWallet />
                     Wallet
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'settings' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('settings')}
                  >
                     <AiOutlineSetting />
                     Settings
                  </li>
               </ul>
            </aside>

            <div className="flex items-center gap-2 text-[#8C94A3] px-4 py-2">
               <MdLogout />
               <a href="#">Log out</a>
            </div>
         </div>

         {/* -------------------- MAIN AREA ------------------ */}

         <div className="sm:ml-[25vw]">
            {/* RESPONSIVE MENU */}
            <div className="flex sm:hidden flex-col text-xl shadow bg-[#0E1B2E]">
               <div className="flex justify-between items-center">
                  <div className="">
                     <img src={logo} alt="KingsTutor Logo" />
                  </div>
                  <div
                     className=" px-2 py-3 cursor-pointer text-white text-3xl"
                     onClick={() => setMenu(!menu)}
                  >
                     {menu && <AiOutlineClose />}
                     {!menu && <AiOutlineMenu />}
                  </div>
               </div>

               {menu && (
                  <div className="">
                     <ul className="text-[#8C94A3] flex flex-col gap-3 py-3">
                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'dashboard'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('dashboard');
                              setMenu(!menu);
                           }}
                        >
                           <BsBarChartLine />
                           Dashboard
                        </li>

                        <li
                           className={`flex border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'findtutor'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('findtutor');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlinePlusCircle />
                           <span>Find Tutor</span>
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'groupclass'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('groupclass');
                              setMenu(!menu);
                           }}
                        >
                           <GoStack />
                           Group Class
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'classroom'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('classroom');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineCreditCard />
                           Classroom
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'messages'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('messages');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineMessage />
                           Messages
                           <span className="px-2 w-fit h-fit rounded-full text-[#0266FD] bg-white">
                              3
                           </span>
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'history'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('history');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineClockCircle />
                           History
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'wallet' ? 'text-white bg-[#2B7CF8]' : ''
                           }`}
                           onClick={() => {
                              setPage('wallet');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineMessage />
                           Wallet
                        </li>

                        <li
                           className={`flex items-center gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'settings'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('settings');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineSetting />
                           Settings
                        </li>
                     </ul>
                  </div>
               )}
            </div>

            {page === 'dashboard' && <Dashboard setPage={setPage} />}
            {page === 'findtutor' && (
               <FindTutor setPage={setPage} typeTemp="findtutor" />
            )}
            {page === 'classroom' && <StudentClassroom />}
            {page === 'groupclass' && <Groupclass setPage={setPage} />}
            {page === 'messages' && <Messages setPage={setPage} />}
            {page === 'mytutors' && (
               <FindTutor setPage={setPage} typeTemp="mytutors" />
            )}
            {page === 'settings' && <Settings />}
            {page === 'classroom' && <Classroom />}
            {page === 'history' && <History setPage={setPage} />}
            {page === 'wallet' && <Wallet setPage={setPage} />}
         </div>
      </div>
   );
}
