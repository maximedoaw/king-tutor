import React from 'react';
import Appstores from '../../../assets/images/appStores.png';
import {
   AiFillFacebook,
   AiFillYoutube,
   AiFillTwitterSquare,
   AiFillInstagram,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <div className="w-full bg-[#DCEAFF]">
         <footer className="text-[#414852] font-normal py-4 px-8  text-sm sm:text-base bg-[#DCEAFF] ">
            <div className="container mx-auto flex flex-col md:flex-row justify-center flex-wrap pt-5">
               <div className="footer-column w-full md:w-1/4">
                  <h4 className="text-black font-bold">Our tutors</h4>

                  <ul className="mt-2 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black"> English tutors </li>
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
                  </ul>
               </div>
               <div className="footer-column w-full md:w-1/4">
                  <h4 className="text-black font-bold">Learn a subject</h4>
                  <ul className="mt-2 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-1 w-full">
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
                  </ul>
               </div>
               <div className="footer-column w-full  md:w-1/4">
                  <h4 className="text-black font-bold">Lessons</h4>
                  <ul className="mt-2 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black"> 1-on-1 lessons </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Group lessons </li>
                     </a>{' '}
                  </ul>
                  <h4 className="text-black font-bold"> Teaching </h4>
                  <ul className="mt-2">
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
                  <h4 className="text-black font-bold"> More </h4>
                  <ul className="mt-2 grid grid-cols-4 md:grid-cols-1 w-full">
                     <a href="#">
                        <li className="text-black"> FAQ </li>
                        <li className="text-black"> KingsTutor Blog </li>
                     </a>{' '}
                     <a href="#">
                        <li className="text-black"> Download the app </li>
                     </a>{' '}
                  </ul>
               </div>
               <div className="footer-column w-full md:w-1/4">
                  <h4 className="text-black font-bold">
                     Partnership and Investment
                  </h4>
                  <ul className="mt-2 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-1 w-full">
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
                  <div className="w-full h-52 bg-[#01CAAD] flex flex-col items-center justify-center p-6 my-2">
                     <p className="text-white font-medium text-lg">
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
            <hr></hr>
            <div className="max-w-7xl mx-auto flex justify-between border-t sm:justify-around gap-4 px-3 flex-wrap mt-2 py-1">
               <p>@2024 KingsTutor CM Limited</p>
               <ul className=" flex flex-wrap gap-x-8 gap-y-7 px-4 sm:px-6">
                  <li>
                     <Link to="/about" className="hover:text-[#3A6AB3]">
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
                     <Link to="/" className="hover:text-[#3A6AB3]">
                        Contact
                     </Link>
                  </li>
               </ul>
               <div className="text-3xl flex gap-4">
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
