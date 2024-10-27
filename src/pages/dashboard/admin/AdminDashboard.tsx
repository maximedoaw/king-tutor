import { useState } from 'react';
import logo from '../../../assets/images/KT_logo.png';
import {
   AiOutlinePlusCircle,
   AiOutlineCreditCard,
   AiOutlineMessage,
   AiOutlineSetting,
   AiOutlineSearch,
   AiOutlineClose,
   AiOutlineMenu,
   AiOutlineBell,
} from 'react-icons/ai';
import MichaelBoole from '../../../assets/images/MichaelBoole.png';
import messageIcon from '../../../assets/icons/messageIcon.svg';
import starIcon from '../../../assets/icons/starIcon.svg';
import notifIcon from '../../../assets/icons/notificationIcon.svg';

import { BsBarChartLine, BsPeopleFill } from 'react-icons/bs';
import { GoStack } from 'react-icons/go';
import { MdLogout } from 'react-icons/md';
import { Dashboard, Messages, Settings, Reports, ManageAdmins } from './pages';
import { Logo } from '../../../components/atoms';
import SuperAdminDashboard from '../super_admin/Dashboard';

export default function AdminDashboard() {
   const [page, setPage] = useState('dashboard');
   const [menu, setMenu] = useState(false);
   const [notifications, setNotifications] = useState(false);

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

   return (
      <div className="h-screen">
         {/* -------------- SIDEBAR -------------------- */}
         <div className="bg-[#0E1B2E] hidden sm:flex flex-col space-y-20 h-screen w-1/4 fixed top-0 left-0 z-10">
            <aside className="overflow-hidden">
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

                  {/* <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'Tutor' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('Tutor')}
                  >
                     <AiOutlinePlusCircle />
                     Tutor
                  </li> */}

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'report' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('report')}
                  >
                     <GoStack />
                     Reports
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'manageAdmin' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('manageAdmin')}
                  >
                     <BsPeopleFill />
                     Manage Admins
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
                     className="px-2 py-3 cursor-pointer text-white text-3xl"
                     onClick={() => setMenu(!menu)}
                  >
                     {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
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

                        {/* <li
                           className={`flex border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'Tutor' ? 'text-white bg-[#2B7CF8]' : ''
                           }`}
                           onClick={() => {
                              setPage('Tutor');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlinePlusCircle />
                           <span>Tutor</span>
                        </li> */}

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'report' ? 'text-white bg-[#2B7CF8]' : ''
                           }`}
                           onClick={() => {
                              setPage('report');
                              setMenu(!menu);
                           }}
                        >
                           <GoStack />
                           Reports
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'manageAdmin'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('manageAdmin');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineCreditCard />
                           Manage Admins
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

            <div className="bg-white px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow border-b hidden">
               <div className="flex flex-col self-start">
                  <p className="text-[#6E7485]">{getCurrentTimeGreeting()}</p>
                  <p className="text-xl font-bold">
                     {page.charAt(0).toUpperCase() + page.slice(1)}{' '}
                     {page === 'messages' && <span>(3)</span>}
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

                  <div className="flex items-center text-2xl bg-[#F5F7FA] px-2 py-1 cursor-pointer relative">
                     <AiOutlineBell
                        onClick={() => setNotifications(!notifications)}
                     />
                     {notifications && (
                        <div className="bg-white w-[250px] absolute top-[100%] -left-[80%] p-4 shadow">
                           <div className="flex justify-between items-center text-xl font-bold">
                              <span>Notification</span>
                              <img src={notifIcon} />
                           </div>
                           <ul className="flex flex-col">
                              <li className="flex items-start justify-between gap-2">
                                 <div>
                                    <p className="text-sm font-bold">
                                       Account Activated!
                                    </p>
                                    <p className="text-xs text-[#9A9A9A]">
                                       30mins ago
                                    </p>
                                 </div>
                                 <span className="text-[#F1C75B]">
                                    <img src={starIcon} />
                                 </span>
                              </li>
                           </ul>
                           <div className="flex justify-end text-[#2B7CF8]">
                              See all
                           </div>
                        </div>
                     )}
                  </div>

                  <div className="text-[#8C94A3] flex items-center justify-between gap-2 bg-[#F5F7FA] px-4">
                     <div className="text-left">
                        <p className="text-base text-[#4D5461]">
                           Michael Boole
                        </p>
                        <p className="text-sm">Admin</p>
                     </div>
                     <img src={MichaelBoole} alt="Admin's Profile Photo" />
                  </div>
               </div>
            </div>

            {/* This is the conditional rendering based on the selected page */}
            {page === 'dashboard' && <SuperAdminDashboard />}
            {page === 'Tutor' && <Dashboard />}
            {page === 'report' && <Reports />}
            {page === 'manageAdmin' && <ManageAdmins />}
            {page === 'messages' && <Messages />}
            {page === 'settings' && <Settings />}
         </div>
      </div>
   );
}
