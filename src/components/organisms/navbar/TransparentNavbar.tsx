import React, { useState } from 'react';
import { Logo, LanguageDropdown } from '../../atoms';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function TransparentNavbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const navigate = useNavigate();

   return (
      <nav
         className={`w-full ${
            menuOpen ? 'bg-black' : ' bg-opacity-50'
         } absolute`}
      >
         <div className="flex flex-col md:flex-row  items-center  justify-between max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="w-full md:w-[20%] flex justify-between md:px-0 px-6">
               <Logo />

               <div className="md:hidden">
                  {menuOpen ? (
                     <FaTimes
                        onClick={toggleMenu}
                        className="text-lg mt-6 text-white cursor-pointer"
                     />
                  ) : (
                     <FaBars
                        onClick={toggleMenu}
                        className="text-lg mt-6 text-white cursor-pointer"
                     />
                  )}
               </div>
            </div>
            <div
               className={`md:flex flex-col md:flex-row md:items-center md:space-x-4  ${
                  menuOpen ? 'flex' : 'hidden'
               }  w-[80%] justify-center items-center `}
            >
               <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center mt-4 md:mt-0">
                  <li className="text-white">
                     <a href="/">Home</a>
                  </li>
                  <li className="text-white">
                     <a href="/">Find A Tutor</a>
                  </li>
                  <li className="text-white">
                     <a href="/tutor/home">Become A Tutor</a>
                  </li>
               </ul>
               <div className="flex gap-2 flex-col md:flex-row">
                  <LanguageDropdown />
                  <button
                     className="bg-[#0367FF] h-8 flex items-center justify-center p-3 rounded-md text-white w-32"
                     onClick={() => navigate('/tutor_auth/tutor-sign-in')}
                  >
                     Log In
                  </button>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default TransparentNavbar;
