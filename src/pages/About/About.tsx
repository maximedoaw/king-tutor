import { useState } from 'react';
import logo from '../../assets/images/KT_logo.png';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { OurAchievements } from '../../components/molecules';
import { Footer, Footer2, Vision } from '../../components/organisms';
import {
   CoreValues,
   JoinUsNowComponent,
} from '../../components/organisms/home.organisms';

export default function About() {
   const [nav, setNav] = useState(false);

   function toggleNav() {
      setNav((prevState) => !prevState);
   }

   const router = useNavigate();
   return (
      <div className="space-y-10">
         <header className="header h-full sm:h-[90vh] pb-6 text-sm sm:text-base">
            {/* NAVBAR */}
            <div className="max-w-6xl hidden sm:flex gap-2 mx-auto items-center justify-between overflow-hidden lg:px-3 px-14">
               <div className="logobg h-[100px] w-44 flex justify-center items-start">
                  <Link to={'/'}>
                     <img src={logo} alt="logo" />
                  </Link>
               </div>

               <nav className="flex items-center gap-5 text-white">
                  <Link to="/dashboard-student/find-tutor">Find a tutor</Link>
                  <Link to="/dashboard-student/group-class">Group Class</Link>
                  <Link to="/tutor/home">Become A Tutor</Link>
               </nav>
            </div>

            {/* ------------------------ MOBILE NAVIGATION SECTION -------------------------- */}
            <div className="flex sm:hidden px-8 items-center justify-between">
               <div className="logobg pb-2 flex justify-center items-start">
                  <img src={logo} alt="logo" />
               </div>

               <button className="w-8 h-8" onClick={toggleNav}>
                  {nav ? (
                     <AiOutlineClose className="w-full h-full text-white" />
                  ) : (
                     <AiOutlineMenu className="w-full h-full text-white" />
                  )}
               </button>
               {nav}
            </div>

            {/* CONDITIONALLY RENDER THE RESPONSIVE NAV WHEN BUTTON IS CLICKED */}
            {nav && (
               <div className="px-6">
                  <div className="sm:hidden bg-black bg-opacity-40 text-white font-bold flex flex-col px-8 space-y-3 py-3 rounded mt-2">
                     <nav className="flex flex-col text-center space-y-1">
                        {/* <a href="#" className="border-b-2 border-blue-300 pb-1">
                           Find A Tutor
                        </a>
                        <a href="#" className="border-b-2 border-blue-300 pb-1">
                           Group Class
                        </a>
                        <a href="#" className="border-b-2 border-blue-300 pb-1">
                           Become A Tutor
                        </a> */}
                        <Link
                           to="/dashboard-student/find-tutor"
                           className="border-b-2 border-blue-300 pb-1"
                        >
                           Find a tutor
                        </Link>
                        <Link
                           to="/dashboard-student/group-class"
                           className="border-b-2 border-blue-300 pb-1"
                        >
                           Group Class
                        </Link>
                        <Link
                           to="/tutor/home"
                           className="border-b-2 border-blue-300 pb-1"
                        >
                           Become A Tutor
                        </Link>
                     </nav>
                  </div>
               </div>
            )}

            {/* HERO */}
            <div className="max-w-7xl mx-auto text-white space-y-4 pt-20 lg:px-20 sm:px-16 px-8 lg:h-3/4 flex flex-col justify-center">
               <h1 className="font-bold sm:text-3xl text-2xl text-left">
                  About Us
               </h1>
               <p className="text-left text-sm sm:text-base w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur praesentium eum, provident ab neque nam ullam!
                  Facere tempore totam illo ullam sed expedita fuga
                  consequuntur. Harum cupiditate officiis cumque commodi,
                  accusantium aliquid? Iusto repellendus exercitationem
                  consectetur eius, ut beatae quod libero saepe sint eum labore
                  voluptate provident in, illo officiis et ullam, ratione
                  molestiae dicta distinctio odio molestias sit aliquid
                  explicabo! Magni sequi quo nisi consequuntur, dolorem debitis
                  natus laudantium!
               </p>
            </div>
         </header>

         {/* VISION & MISSION SECTION */}
         <Vision />

         {/* CORE VALUES SECTION */}
         <CoreValues />

         {/* ACHIEVEMENTS SECTION */}
         <OurAchievements />

         <div>
            {/* JOIN US SECTION */}
            <JoinUsNowComponent />

            <div className="bg-[#DAF9E6] py-5 px-2 text-center font-bold flex flex-wrap justify-center items-center gap-3">
               <span className="text-[#414852]">
                  Need help? We&apos;re always here for you
               </span>
               <button className="bg-[#2B7CF8] py-2 px-3 rounded-lg shadow-lg text-white">
                  Chat with a Live person
               </button>
            </div>

            {/* FOOTER */}
            <Footer2 />
         </div>
      </div>
   );
}
