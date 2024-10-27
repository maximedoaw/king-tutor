import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import Header from '../../components/atoms/header/Header';
import editPic from '../../assets/images/edit-profile.png';
import TutorProfilePhoto from './components/TutorProfilePhoto';
import TutorProfileVideo from './components/TutorProfileVideo';
import TutorAbout from './components/TutorAbout';
import TutorSchedule from './components/TutorSchedule';
import TutorCertification from './components/TutorCertification';

export default function EditProfile() {
   const [tab, setTab] = useState('photo');
   const [submit, setSubmit] = useState(false);
   return (
      <div className="relative">
         <Header />

         {/* POPUP */}
         {submit === true && (
            <div
               className="w-screen h-full absolute flex justify-center items-start bg-black bg-opacity-50 pt-16 z-10"
               onClick={() => setSubmit(false)}
            >
               <div
                  className="px-6 flex sticky top-[20%]"
                  onClick={(e) => e.stopPropagation()}
               >
                  <div className="w-full bg-white rounded-lg px-6 py-8 flex flex-col gap-5 items-center">
                     <AiFillCheckCircle className="text-[#2B7CF8] text-5xl" />

                     <div className="space-y-2">
                        <h3 className="text-xl font-bold text-center">
                           Submission Successful
                        </h3>

                        <p className="max-w-lg text-center">
                           Your profile information will be reveiwed and must
                           meet our quality standards to be approved within 24
                           hours. Edits not meeting the standard will be
                           declined and won&apos;t be displayed
                        </p>
                     </div>

                     <button className="py-2 px-4 rounded bg-[#2B7CF8] text-white font-bold">
                        Back to Dashboard
                     </button>
                  </div>
               </div>
            </div>
         )}

         <div className="max-w-6xl mx-auto py-8 space-y-4 px-4">
            <h1 className="font-bold text-3xl">
               <span className="text-[#2B7CF8]">Edit</span> Profile Information
            </h1>

            <div className="flex gap-8 flex-wrap-reverse">
               {/*  */}
               <div className="flex flex-col gap-4 flex-1">
                  <ul className="flex gap-4">
                     <li
                        className={`flex-1 text-center cursor-pointer py-2 ${
                           tab === 'photo' && 'border-b-2 border-[#2B7CF8]'
                        }`}
                        onClick={() => setTab('photo')}
                     >
                        Photo
                     </li>
                     <li
                        className={`flex-1 text-center cursor-pointer py-2 ${
                           tab === 'video' && 'border-b-2 border-[#2B7CF8]'
                        }`}
                        onClick={() => setTab('video')}
                     >
                        Video
                     </li>
                     <li
                        className={`flex-1 text-center cursor-pointer py-2 ${
                           tab === 'about' && 'border-b-2 border-[#2B7CF8]'
                        }`}
                        onClick={() => setTab('about')}
                     >
                        About
                     </li>
                     <li
                        className={`flex-1 text-center cursor-pointer py-2 ${
                           tab === 'schedule' && 'border-b-2 border-[#2B7CF8]'
                        }`}
                        onClick={() => setTab('schedule')}
                     >
                        Schedule
                     </li>
                     <li
                        className={`flex-1 text-center cursor-pointer py-2 ${
                           tab === 'resume' && 'border-b-2 border-[#2B7CF8]'
                        }`}
                        onClick={() => setTab('resume')}
                     >
                        Resume
                     </li>
                  </ul>

                  <div>
                     {/* --------------- PROFILE PHOTO --------------------- */}
                     {tab === 'photo' && <TutorProfilePhoto />}

                     {/* -------------- PROFILE VIDEO ------------------------ */}
                     {tab === 'video' && <TutorProfileVideo />}

                     {/*  --------------------- ABOUT ------------------------ */}
                     {tab === 'about' && <TutorAbout />}

                     {/*  --------------------- SCHEDULE ------------------------ */}
                     {tab === 'schedule' && <TutorSchedule />}

                     {/*  --------------------- CERTIFICATION & EXPERIENCE ------------------------ */}
                     {tab === 'resume' && <TutorCertification />}
                  </div>

                  <button
                     className="bg-[#2B7CF8] font-bold px-4 py-2 text-white rounded-lg"
                     onClick={() => setSubmit(true)}
                  >
                     Submit changes
                  </button>
               </div>

               {/* SIDE IMAGE */}
               <div className="lg:flex flex-col items-center relative max-w-lg hidden">
                  <div className="sticky top-0">
                     <h4 className="text-4xl font-bold absolute top-8 left-10 text-center">
                        Keep a clean profile to{' '}
                        <span className="text-[#2B7CF8]">
                           get more students
                        </span>
                     </h4>
                     <img src={editPic} alt="Edit profile" className="w-fit " />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
