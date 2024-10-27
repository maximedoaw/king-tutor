import { useState, useEffect } from 'react';
import {
   AiOutlinePlusCircle,
   AiOutlineCreditCard,
   AiOutlineMessage,
   AiOutlineSetting,
   AiOutlineClose,
   AiOutlineMenu,
} from 'react-icons/ai';

// import Profile from 'src/pages/tutor_profile/TutorProfile';
import { BsBarChartLine } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoStack } from 'react-icons/go';
import { MdLogout, MdHome, MdArrowBack } from 'react-icons/md';
import { Earnings } from '../../../components/organisms';
import {
   Dashboard,
   Calendar,
   // Classroom,
   // Earnings,
   Messages,
   Settings,
   StudentClassroom,
} from './pages/index';
import Profile from './../../tutor_profile/Profile';
import { Logo } from '../../../components/atoms';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TutorDashboard() {
   const [page, setPage] = useState('dashboard');
   const [menu, setMenu] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const [history, setHistory] = useState<string[]>([]);

   useEffect(() => {
      setHistory((prevHistory) => [...prevHistory, location.pathname]);
   }, [location.pathname]);

   const goToHome = () => {
      setPage('home');
      setMenu(false);
      navigate('/');
   };

   const goToPrevious = () => {
      if (history.length > 1) {
         const previousPage = history[history.length - 2];
         setHistory((prevHistory) => prevHistory.slice(0, -1));
         navigate(previousPage);
      }
   };

   return (
      <div className="h-screen ">
         {/* -------------- SIDEBAR -------------------- */}
         <div className="bg-[#0E1B2E] hidden sm:flex flex-col justify-between pb-10 space-y-20 h-screen w-[18vw] fixed top-0 left-0 z-10">
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

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'newclass' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('newclass')}
                  >
                     <AiOutlinePlusCircle />
                     <span>My Calendar</span>
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'classroom' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('classroom')}
                  >
                     <GoStack />
                     <span>Classroom</span>
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'earnings' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('earnings')}
                  >
                     <AiOutlineCreditCard />
                     <span>Earnings</span>
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'messages' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('messages')}
                  >
                     <AiOutlineMessage />
                     <span>Messages</span>
                     <span className="px-2 w-fit h-fit rounded-full text-[#0266FD] bg-white">
                        3
                     </span>
                  </li>
                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'profile' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('profile')}
                  >
                     <CgProfile />
                     <span>My Profile</span>
                  </li>

                  <li
                     className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                        page === 'settings' ? 'text-white bg-[#2B7CF8]' : ''
                     }`}
                     onClick={() => setPage('settings')}
                  >
                     <AiOutlineSetting />
                     <span>Settings</span>
                  </li>
                  <li
                     className="flex items-center gap-2 px-5 py-2 cursor-pointer"
                     onClick={goToHome}
                  >
                     <MdHome />
                     <span>Home</span>
                  </li>
                  <li
                     className="flex items-center gap-2 px-5 py-2 cursor-pointer"
                     onClick={goToPrevious}
                  >
                     <MdArrowBack />
                     <span>Previous</span>
                  </li>
               </ul>
            </aside>

            <div className="flex items-center gap-2 text-[#8C94A3] px-4 py-2">
               <MdLogout />
               <a href="#">Sign out</a>
            </div>
         </div>

         {/* -------------------- MAIN AREA ------------------ */}

         <div className="w-full sm:w-auto sm:ml-[18vw]">
            {/* RESPONSIVE MENU */}
            <div className="flex sm:hidden flex-col text-xl shadow bg-[#0E1B2E] w-full">
               <div className="flex justify-between items-center">
                  <div className="">
                     <Logo />
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
                              page === 'newclass'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('newclass');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlinePlusCircle />
                           <span>Start new class</span>
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
                           <GoStack />
                           Classroom
                        </li>

                        <li
                           className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                              page === 'earnings'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('earnings');
                              setMenu(!menu);
                           }}
                        >
                           <AiOutlineCreditCard />
                           Earnings
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
                              page === 'profile'
                                 ? 'text-white bg-[#2B7CF8]'
                                 : ''
                           }`}
                           onClick={() => {
                              setPage('profile');
                              setMenu(!menu);
                           }}
                        >
                           <CgProfile />
                           My Profile
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
                        <li
                           className="flex items-center gap-2 p-2 cursor-pointer"
                           onClick={goToHome}
                        >
                           <MdHome />
                           <span>Home</span>
                        </li>
                     </ul>
                  </div>
               )}
            </div>

            <div className="min-h-screen">
               {page === 'dashboard' && <Dashboard />}
               {page === 'newclass' && <Calendar />}
               {page === 'classroom' && <StudentClassroom />}
               {page === 'earnings' && <Earnings />}
               {page === 'messages' && <Messages />}
               {page === 'profile' && <Messages />}
               {page === 'settings' && <Settings />}
               {page === 'profile' && <Profile />}
            </div>
         </div>
      </div>
   );
}
