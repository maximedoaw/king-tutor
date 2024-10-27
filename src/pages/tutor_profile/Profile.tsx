// THIS IS THE STUDENT VEIW OF THE TUTOR PROFILE
import React, { useState } from 'react';
import instructor from '../../assets/images/instructor.png';
import Header from '../../components/atoms/header/Header';
import {
   AiFillPlayCircle,
   AiFillStar,
   AiOutlineTeam,
   AiOutlineCalendar,
   AiOutlineMessage,
   // AiOutlineStar,
   // AiFillYoutube,
   AiOutlineWarning,
} from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PiCrown } from 'react-icons/pi';

import Education from './components/Education';
import Experience from './components/Experience';
import tutor from '../../assets/images/tutor1.png';
import avatar from '../../assets/images/student.jpg';
import Review from './components/Review';
import { Badge } from '../../shadcn-components/Badge';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuTrigger,
} from '../../shadcn-components/DropdownMenu';
import Calendar from './components/Calendar';
import Ratings from './components/Ratings';

// import { Progress } from '../../shadcn-components/Progress';

export default function Profile() {
   const [tab, setTab] = useState('about');
   const averageRating = 4.5; // Replace with your actual average rating
   const ratingsData = [120, 60, 30, 20, 50];

   return (
      <div className="">
         <Header />

         {/* PROFILE INFO */}
         <div className="bg-[#3787FD29] px-14">
            <div className="flex justify-between items-start bg-white px-4 py-6 shadow-md translate-y-20 max-w-4xl mx-auto">
               <div className="flex items-center flex-wrap gap-4">
                  <div>
                     <img
                        src={instructor}
                        alt="Profile Image"
                        width={'150px'}
                        height={'150px'}
                        className="rounded-full"
                     />
                  </div>

                  <div className="flex flex-col gap-3">
                     <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                           <h3 className="text-3xl font-bold">Vako Ahmir</h3>
                           <Badge
                              variant={'outline'}
                              className="text-[#2B7CF8] bg-[#E1E9F4] flex items-center gap-2"
                           >
                              <PiCrown className="text-lg" />
                              <span>Top Rated and Experienced Tutor</span>
                           </Badge>
                        </div>
                        <p className="text-sm">
                           English Teacher & Best selling intructor
                        </p>
                     </div>

                     <div className="flex items-center gap-5 flex-wrap">
                        <div className="flex items-center gap-1">
                           <AiFillStar className="text-[#FD8E1F] text-xl" />
                           <span>4.5</span>
                           <span className="text-sm">(50 reviews)</span>
                        </div>

                        <div className="flex items-center gap-1">
                           <AiOutlineTeam className="text-[#564FFD] text-xl" />
                           <span>419</span>
                           <span className="text-sm">students</span>
                        </div>

                        <div className="flex items-center gap-1">
                           <AiFillPlayCircle className="text-[#FF6636] text-xl" />
                           <span>7</span>
                           <span className="text-sm">subjects</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <DropdownMenu>
                     <DropdownMenuTrigger>
                        <BsThreeDotsVertical className="text-2xl" />
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="bg-white">
                        <DropdownMenuLabel className="flex items-center justify-center gap-3 font-bold text-red-600 cursor-pointer hover:bg-slate-200">
                           <AiOutlineWarning className="text-xl" />
                           <span className="text-base">REPORT</span>
                        </DropdownMenuLabel>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>
            </div>
         </div>

         {/* BODY && FLEX CONTAINER */}
         <div className="mt-20 max-w-7xl mx-auto py-12 px-6 flex gap-10 sm:gap-4 flex-wrap-reverse">
            {/* FIRST FLEX ITEM */}
            <div className="space-y-8 flex-1 max-w-3xl mx-auto">
               {/* NAVIGATION TABS */}
               <ul className="flex text-xl border-b gap-2">
                  <li
                     className={`flex-1 cursor-pointer py-2 text-center ${
                        tab === 'about' && 'border-b-4 border-[#2B7CF8]'
                     }`}
                     onClick={() => setTab('about')}
                  >
                     About
                  </li>
                  <li
                     className={`flex-1 cursor-pointer py-2 text-center ${
                        tab === 'schedule' && 'border-b-4 border-[#2B7CF8]'
                     }`}
                     onClick={() => setTab('schedule')}
                  >
                     Schedule
                  </li>
                  <li
                     className={`flex-1 cursor-pointer py-2 text-center ${
                        tab === 'reviews' && 'border-b-4 border-[#2B7CF8]'
                     }`}
                     onClick={() => setTab('reviews')}
                  >
                     Reviews
                  </li>
                  <li
                     className={`flex-1 cursor-pointer py-2 text-center ${
                        tab === 'resume' && 'border-b-4 border-[#2B7CF8]'
                     }`}
                     onClick={() => setTab('resume')}
                  >
                     Resume
                  </li>
               </ul>
               {/* --------------- ABOUT ---------------------------- */}
               {tab === 'about' && (
                  <div className="space-y-4">
                     <h2 className="text-3xl font-bold py-4 border-b">About</h2>
                     <p className="leading-7 py-4 border-b">
                        One day Vako had enough with the 9-to-5 grind, or more
                        like 9-to-9 in his case, and quit his job, or more like
                        got himself fired from his own startup. He decided to
                        work on his dream: be his own boss, travel the world,
                        only do the work he enjoyed, and make a lot more money
                        in the process. No more begging for vacation days and
                        living from paycheck to paycheck. After trying
                        everything from e-commerce stores to professional poker
                        his lucky break came when he started freelance design.
                        Vako fell in love with the field that gives him the
                        lifestyle of his dreams. Vako realizes that people who
                        take courses on Udemy want to transform their lives.
                        Today with his courses and mentoring Vako is helping
                        thousands of people transform their lives, just like he
                        did once.
                     </p>
                  </div>
               )}

               {tab === 'schedule' && (
                  <div className="space-y-4">
                     <h2 className="text-3xl font-bold py-4 border-b">
                        Schedule
                     </h2>

                     <Calendar />
                  </div>
               )}
               {/* --------------- RESUME ------------------- */}
               {tab === 'resume' && (
                  <>
                     <div className="space-y-4">
                        <h2 className="text-3xl font-bold py-4 border-b">
                           Education
                        </h2>

                        {/* EDUCATION COMPONENT */}
                        <Education
                           school="Atlanta University"
                           degree="Masters in Arts and Language"
                           city="California"
                           country="USA"
                           year="2016"
                        />

                        <Education
                           school="God's Grace Primary School"
                           degree="Masters in Arts and Language"
                           city="California"
                           country="USA"
                           year="2016"
                        />
                     </div>
                     {/* EXPERIENCE */}
                     <div className="space-y-4">
                        <h2 className="text-3xl font-bold py-4 border-b">
                           Experience
                        </h2>

                        <Experience
                           company="Emeka High International"
                           country="USA"
                           position="Assistant English Lecturer"
                           startDate="Aug 2019"
                           endDate="Sep 2022"
                        />
                     </div>
                  </>
               )}

               {/* ---------------- REVEIWS ------------------- */}
               {tab === 'reviews' && (
                  <div className="space-y-7">
                     <p className="text-3xl font-bold py-4 border-b">Reviews</p>

                     {/* ------------- RATINGS ------------------------ */}
                     <Ratings
                        averageRating={averageRating}
                        ratingsData={ratingsData}
                     />

                     {/* REVIEWS */}
                     <div className="space-y-6">
                        {/* FIRST REVIEW */}
                        <Review
                           name="Clinton V."
                           image={avatar}
                           date="September 20, 2023"
                           comment="Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Hic facilis sed ea iure, veritatis ratione
                              ab ullam molestiae vitae debitis corporis
                              accusamus alias delectus, libero natus consectetur
                              ipsum deserunt dolores!"
                        />

                        {/* SECOND REVIEW */}
                        <Review
                           name="Clinton V."
                           image={avatar}
                           date="September 20, 2023"
                           comment="Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Hic facilis sed ea iure, veritatis ratione
                              ab ullam molestiae vitae debitis corporis
                              accusamus alias delectus, libero natus consectetur
                              ipsum deserunt dolores!"
                        />

                        {/* THIRD REVIEW */}
                        <Review
                           name="Clinton V."
                           image={avatar}
                           date="September 20, 2023"
                           comment="Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Hic facilis sed ea iure, veritatis ratione
                              ab ullam molestiae vitae debitis corporis
                              accusamus alias delectus, libero natus consectetur
                              ipsum deserunt dolores!"
                        />
                     </div>
                  </div>
               )}
            </div>

            {/* CARD && SECOND FLEX ITEM */}
            <div className="p-4 sm:sticky sm:top-5 self-end  bg-[#ECEDEE] flex flex-col gap-4 border-2 border-[#2B7CF8] rounded-lg">
               <div className="relative">
                  <img src={tutor} alt="Tutor" />
                  <AiFillPlayCircle className="text-6xl absolute top-16 left-[40%] cursor-pointer text-white" />
               </div>

               <button className="bg-[#2B7CF8] text-white rounded-lg py-3">
                  Book a lesson
               </button>

               <button className="bg-white flex justify-center gap-3 rounded-lg py-3">
                  <AiOutlineCalendar />
                  <span>See Schedule</span>
               </button>

               <button className="bg-white flex justify-center gap-3 rounded-lg py-3">
                  <AiOutlineMessage />
                  <span>Send a message</span>
               </button>
            </div>
         </div>
      </div>
   );
}
