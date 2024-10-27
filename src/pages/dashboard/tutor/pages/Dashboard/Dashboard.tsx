import { AiOutlineBell } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import { FullStar, HalfStar } from '../../../../../components/atoms';
import NextClass from './components/NextClass';
import LinkToChat from '../../../../../components/atoms/link/LinkToChat';
import { useNavigate } from 'react-router-dom';
// import Ratings from '../pages/tutor_profile/components/Ratings';
import Ratings from './../../../../../pages/tutor_profile/components/RatingsBreakdown';
import lineGraph from './../../../../../assets/icons/lineGraph.svg';
import Activity from '../../../../../components/molecules/notification/Notification';
import LineGraph from '../../../../../components/molecules/Graphs/LineGraph';
import BarGraph from '../../../../../components/molecules/Graphs/BarGraph';

export default function Dashboard() {
   const averageRating = 3.5; // Replace with your actual average rating
   const ratingsData = [120, 60, 30, 20, 50];
   const navigate = useNavigate();
   return (
      <div className="">
         <div className="fixed bottom-[4vh] right-4">
            <LinkToChat />
         </div>
         <div className="px-6 py-3 flex items-center justify-between shadow">
            <div className="flex flex-col items-center">
               <p className="text-[#6E7485]">Good morning</p>
               <p className="text-lg sm:text-2xl font-bold text-[#2B7CF8]">
                  Michael Boole
               </p>
            </div>

            <div className="flex items-stretch gap-2">
               <div className="flex items-center self-center text-lg rounded-full sm:rounded-none bg-[#F5F7FA] sm:px-2 sm:py-1 p-3">
                  <AiOutlineBell />
               </div>

               <div onClick={() => navigate('/tutor-profile')}>
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row flex-wrap sm:items-center px-4 lg:px-8">
            <div className="sm:flex-1">
               <NextClass
                  student="John Clinton"
                  hours="01"
                  minutes="09"
                  seconds="09"
                  buttonText="Join Class"
               />
            </div>

            {/* ------------------------------------ */}

            <div className="space-y-5 sm:flex-1">
               <div className="flex gap-36 justify-between px-6 py-3 border-b">
                  <p className="whitespace-nowrap">Your overall rating</p>
                  <select
                     name="time"
                     id="time"
                     className="bg-white outline-none"
                  >
                     <option value="week">This week</option>
                     <option value="month">This month</option>
                     <option value="year">This year</option>
                  </select>
               </div>

               <div className="flex-col flex px-6 py-3 border-b h-full items-center">
                  <div className="w-full flex gap-1 h-40 max-w-xl" id="main">
                     <div className="flex flex-col items-center space-y-2 text-center px-8 py-4 bg-[#E6FCF9] ">
                        <p className="text-3xl font-bold">4.6</p>

                        <div className="flex">
                           <FullStar />
                           <FullStar />
                           <FullStar />
                           <FullStar />
                           <HalfStar />
                        </div>

                        <p>Overall Rating</p>
                     </div>
                     <div className="w-full ">
                        <img src={lineGraph} alt="" className="w-full h-40" />
                     </div>
                  </div>
                  <Ratings
                     averageRating={averageRating}
                     ratingsData={ratingsData}
                  />
               </div>

               <div></div>
            </div>
         </div>
         <div className="lg:px-16 flex justify-between gap-4">
            <Activity />
            <div className="w-[35%]">
               <LineGraph />
            </div>
            <div className="w-[35%]">
               <BarGraph />
            </div>
         </div>
      </div>
   );
}
