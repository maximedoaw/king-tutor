import React from 'react';

import {
   AiFillFacebook,
   AiFillYoutube,
   AiFillTwitterSquare,
   AiFillInstagram,
} from 'react-icons/ai';
import Appstores from '../../../assets/images/appStores.png';
import { Link } from 'react-router-dom';

export default function Footer2() {
   return (
      <div className="w-full bg-[#DCEAFF]">
         <footer className="text-[rgb(65,72,82)] font-normal py-4 text-sm sm:text-base bg-[#DCEAFF] ">
            <div className=" mx-auto flex flex-row sm:justify-center justify-between flex-wrap pt-5 px-8 footer-column-container">
               <div className="footer-column w-1/2 md:w-1/4">
                  <h4 className="text-black font-bold mt-2 mb-2">Our tutors</h4>

                  <p>
                     <a href="#">English tutors</a>
                  </p>
                  <p>
                     <a href="#">French tutors</a>
                  </p>
                  <p>
                     <a href="#">Math tutors</a>
                  </p>
                  <p>
                     <a href="#">Physics tutors</a>
                  </p>
                  <p>
                     <a href="#">JavaScript tutors</a>
                  </p>
                  <p>
                     <a href="#">Python tutors</a>
                  </p>
                  <p>
                     <a href="#">Japanesse tutors</a>
                  </p>
                  <p>
                     <a href="#">See more</a>
                  </p>
                  {/* <ul className=" flex flex-wrap gap-2 footer-links">
                     <a href="#">
                        <li className="text-black">English tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> French tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Math tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Physics tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> JavaScript tutors </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> Python tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Japanese tutors </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> JavaScript tutors </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> JavaScript tutors </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> JavaScript tutors </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> See more </li>
                     </a>{' '}
                  </ul> */}
               </div>
               <div className="footer-column w-1/2 md:w-1/4">
                  <h4 className="text-black font-bold mt-2 mb-2">
                     Learn a subject
                  </h4>
                  <p>
                     <a href="#">Learn English</a>
                  </p>
                  <p>
                     <a href="#">Learn French</a>
                  </p>
                  <p>
                     <a href="#">Learn Math</a>
                  </p>
                  <p>
                     <a href="#">Learn Physics</a>
                  </p>
                  <p>
                     <a href="#">Learn JavaScript</a>
                  </p>
                  <p>
                     <a href="#">Learn Python</a>
                  </p>
                  <p>
                     <a href="#">Learn Japanese</a>
                  </p>
                  <p>
                     <a href="#">See All</a>
                  </p>
                  {/* <ul className=" flex flex-wrap gap-2">
                     <a href="#">
                        <li className="text-black"> Learn English </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn French </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn Math </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn Physics </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn JavaScript </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> Learn Python </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn Japanese </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Learn JavaScript </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> Learn JavaScript </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> Learn JavaScript </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> Learn JavaScript </li>
                     </a>
                     <a href="#">
                        <li className="text-black"> See All </li>
                     </a>{' '}
                  </ul> */}
               </div>
               <div className="footer-column w-1/2  md:w-1/4">
                  <h4 className="text-black font-bold mt-2 mb-2">Lessons</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black"> 1-on-1 lessons </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Group lessons </li>
                     </a>{' '}
                  </ul>
                  <h4 className="text-black font-bold mt-2"> Teaching </h4>
                  <ul className="">
                     <a href="#">
                        <li className="text-black"> Become a tutor </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black">
                           {' '}
                           Our teaching code of conduct{' '}
                        </li>
                     </a>
                  </ul>
                  <h4 className="text-black font-bold mt-2 mb-2"> More </h4>
                  <ul className=" grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black"> FAQ </li>
                        <li className="text-black"> KingsTutor Blog </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Download the app </li>
                     </a>{' '}
                  </ul>
               </div>
               <div className="footer-column w-1/2 md:w-1/4">
                  <h4 className="text-black font-bold mt-2 mb-2">
                     Partnership and Investment
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black">
                           <Link
                              to="/partner"
                              onClick={() =>
                                 window.scrollTo({ top: 0, behavior: 'auto' })
                              }
                           >
                              Become a partner
                           </Link>{' '}
                        </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black">
                           <Link
                              to="/invest"
                              onClick={() =>
                                 window.scrollTo({ top: 0, behavior: 'auto' })
                              }
                           >
                              Become an investor
                           </Link>{' '}
                        </li>
                     </a>{' '}
                  </ul>
                  <div
                     className="w-full h-52 bg-[#01CAAD] flex flex-col items-center justify-center p-6 my-2 "
                     style={{ paddingTop: '1em' }}
                  >
                     <p
                        className="text-white font-medium text-base"
                        style={{ marginBottom: '0' }}
                     >
                        KingsTutor is available on App store and play store
                     </p>
                     <img
                        src={Appstores}
                        className="w-40 object-contain"
                        alt=""
                     />
                  </div>
               </div>
            </div>
            <div className=" border border-gray-600 mt-5 w-full"></div>
            <div className="max-w-7xl mx-auto flex justify-between sm:justify-around gap-4 flex-wrap mt-10 px-8">
               <p className="ml-[70px]">@2024 KingsTutor CM Limited</p>
               <ul className=" flex flex-wrap gap-x-4 gap-y-5 px-4 sm:px-6">
                  <li>
                     <Link
                        to="/about"
                        className="hover:text-[#3A6AB3]"
                        onClick={() =>
                           window.scrollTo({ top: 0, behavior: 'auto' })
                        }
                     >
                        About Us
                     </Link>
                  </li>
                  <li>
                     <Link to="/" className="hover:text-[#3A6AB3]">
                        Support
                     </Link>
                  </li>
                  <li>
                     <Link to="/" className="hover:text-[#3A6AB3]">
                        Legal
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/"
                        className="hover:text-[#3A6AB3]"
                        onClick={() =>
                           window.scrollTo({ top: 0, behavior: 'auto' })
                        }
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
               <div className="text-3xl flex gap-2 ml-[70px]">
                  <a href="#" className="hover:text-[#4267B2]">
                     <AiFillFacebook />
                  </a>
                  <a href="#" className="hover:text-[#FF0000]">
                     <AiFillYoutube />
                  </a>
                  <a href="#" className="hover:text-[#1DA1F2]">
                     <AiFillTwitterSquare />
                  </a>
                  <a href="#" className="hover:text-[#E1306C]">
                     <AiFillInstagram />
                  </a>
               </div>
            </div>
         </footer>
      </div>
   );
}
