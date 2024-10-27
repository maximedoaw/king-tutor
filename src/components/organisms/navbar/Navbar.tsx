/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Logo } from '../../atoms';

export default function Navbar() {
   const [nav, setNav] = useState(false);

   function toggleNav() {
      setNav((prevState) => !prevState);
   }
   return (
      <header
         className={`max-w-full bg-[#345FA1] text-white font-bold ${
            nav && 'pb-4'
         } `}
      >
         <div className="max-w-6xl hidden sm:flex mx-auto items-center justify-between overflow-hidden ">
            <div className="logobg flex justify-center items-start sm:items-center  sm:rounded-b-3xl sm:mr-2">
               <Logo />
            </div>

            <nav className="flex items-center space-x-4">
               <Link to="/dashboard-student/find-tutor">Find a tutor</Link>
               <Link to="/dashboard-student/group-class">Group Class</Link>
               <Link to="/tutor/home">Become A Tutor</Link>
               <Link to="/about">About Us</Link>
            </nav>
            <div className="">
               <select className="bg-[#345FA1] px-3 py-2" name="language">
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                  <option value="Dutch">Dutch</option>
               </select>
            </div>

            <Link
               to="/auth/login"
               className="px-4 py-2 bg-cyan-300 text-black rounded"
            >
               Log in
            </Link>
         </div>

         {/* ------------------------ MOBILE NAVIGATION SECTION -------------------------- */}
         <div className="flex sm:hidden px-2 items-center justify-between">
            <div className="logobg pb-2 flex justify-center items-start">
               <Logo />
            </div>

            <button className="w-8 h-8" onClick={toggleNav}>
               {nav ? (
                  <AiOutlineClose className="w-full h-full" />
               ) : (
                  <AiOutlineMenu className="w-full h-full" />
               )}
            </button>
            {nav}
         </div>

         {/* CONDITIONALLY RENDER THE RESPONSIVE NAV WHEN BUTTON IS CLICKED */}
         {nav && (
            <div className="px-6">
               <div className="sm:hidden bg-white text-blue-700 flex flex-col px-8 space-y-3 py-3 rounded mt-2">
                  <nav className="flex flex-col text-center space-y-1">
                     <Link to="/dashboard-student/find-tutor">
                        Find a tutor
                     </Link>
                     <Link to="/dashboard-student/group-class">
                        Group Class
                     </Link>
                     <a href="/tutor/home" className="">
                        Become A Tutor
                     </a>
                  </nav>

                  <select
                     className="bg-blue-400 px-3 py-2 text-white rounded"
                     name="language"
                  >
                     <option value="english">English</option>
                     <option value="french">French</option>
                     <option value="spanish">Spanish</option>
                     <option value="Dutch">Dutch</option>
                  </select>

                  <Link
                     to="/auth/login"
                     className="px-4 py-2 bg-cyan-300 text-black rounded"
                  >
                     Log in
                  </Link>
               </div>
            </div>
         )}
      </header>
   );
}
