// import { AiOutlineBell } from 'react-icons/ai';
// import MichaelBoole from '../../../../assets/images/MichaelBoole.png';

// import ClassRow from './components/ClassRow';
// import NextClass from '../Dashboard/components/NextClass';

// export default function Classroom() {
//    return (
//       <div>
//          <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow hidden">
//             <div className="flex flex-col self-start">
//                <p className="text-[#6E7485]">Good morning</p>
//                <p className="text-xl font-bold">
//                   Messages <span>(3)</span>
//                </p>
//             </div>

//             <div className="flex items-stretch gap-2 self-end">
//                {/* <div className="flex items-center gap-2 text-lg bg-[#F5F7FA] px-2">
//                   <AiOutlineSearch />
//                   <input
//                      type="text"
//                      placeholder="Search"
//                      className="p-1 focus:outline-none bg-transparent flex-shrink"
//                   />
//                </div> */}

//                <div className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1">
//                   <AiOutlineBell />
//                </div>

//                <div className="w-10">
//                   <img src={MichaelBoole} alt="Profile image" />
//                </div>
//             </div>
//          </div>

//          <div className="sm:px-8 sm:py-4 px-2 py-2 space-y-5">
//             <div className="flex flex-col-reverse sm:flex-row justify-between">
//                <div className="sm:self-end self-start flex gap-2 items-center sm:block px-2 ">
//                   <h2 className="font-bold sm:text-xl text-base whitespace-nowrap">
//                      My Schedule
//                   </h2>
//                   <p className="text-[#195CC1] font-bold">Today</p>
//                </div>

//                <div className="flex justify-center">
//                   <NextClass
//                      student="John Clinton"
//                      hours="01"
//                      minutes="09"
//                      seconds="09"
//                   />
//                </div>
//             </div>

//             <div>
//                <ClassRow time={'08:00'} course={''} />
//                <ClassRow time={'09:00'} course={'English Language'} />
//                <ClassRow time={'10:00'} course={''} />
//                <ClassRow time={'11:00'} course={''} />
//                <ClassRow time={'12:00'} course={''} />
//                <ClassRow time={'13:00'} course={'English Language'} />
//                <ClassRow time={'14:00'} course={''} />
//                <ClassRow time={'15:00'} course={'English Language'} />
//             </div>
//          </div>
//       </div>
//    );
// }

import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { MdPeopleOutline, MdFullscreen, MdCallEnd } from 'react-icons/md';
import {
   PiChatsCircleLight,
   PiArrowSquareUpBold,
   PiMicrophoneLight,
} from 'react-icons/pi';
import {
   BsRecordCircle,
   BsThreeDots,
   BsThreeDotsVertical,
   BsCameraVideo,
} from 'react-icons/bs';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import teacher from '../../../../../assets/images/teacher.jpg';
import student from '../../../../../assets/images/student.jpg';

export default function ClassroomSave() {
   return (
      <div className="space-y-3">
         {/* HEADER */}
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow bprder-b hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">Good morning</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               <div className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1">
                  <AiOutlineBell />
               </div>

               <div className="w-10">
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         {/* FLEX CONTAINER */}
         <div className="flex justify-center flex-wrap-reverse flex-col sm:flex-row items-center sm:items-end gap-4">
            {/* FLEX ITEM 1 */}
            <div className="flex-1 px-6">
               <div className="flex items-center justify-between px-4 py-2">
                  <div>
                     <div>
                        <p>Demo Class</p>
                     </div>
                     <div className="font-bold text-2xl">
                        <p>English Language</p>
                     </div>
                  </div>

                  <div>
                     <div>
                        <p>Time remaining</p>
                     </div>
                     <div className="font-bold">
                        <span>02:00:01</span>
                     </div>
                  </div>
               </div>

               {/* Class session */}
               <div className="flex flex-shrink items-center justify-center relative">
                  <img
                     src={teacher}
                     alt="teacher"
                     className="rounded-3xl object-contain"
                  />

                  <div className="flex gap-4 absolute bottom-4 text-white">
                     <button className="bg-[#343A4280] p-2 rounded-full text-4xl opacity-70">
                        <BsThreeDots />
                     </button>
                     <button className="bg-[#343A4280] p-2 rounded-full text-4xl opacity-70">
                        <PiMicrophoneLight />
                     </button>
                     <button className="bg-[#CE2020] p-2 rounded-full text-4xl">
                        <MdCallEnd />
                     </button>
                     <button className="bg-[#343A4280] p-2 rounded-full text-4xl opacity-70">
                        <BsCameraVideo />
                     </button>
                     <button className="bg-[#343A4280] p-2 rounded-full text-4xl opacity-70">
                        <MdFullscreen />
                     </button>
                  </div>
               </div>

               {/* Extra controls */}
               <div className="bg-white px-10 py-5 space-y-3">
                  <div className="flex justify-end px-3">
                     <button className="bg-[#E4FAF7] text-[#038336] p-2 rounded-lg font-bold">
                        + Invite Someone
                     </button>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg text-4xl">
                        <MdPeopleOutline />
                     </button>
                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg text-4xl">
                        <PiChatsCircleLight />
                     </button>
                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg text-4xl">
                        <PiArrowSquareUpBold />
                     </button>
                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg text-4xl">
                        <BsRecordCircle />
                     </button>
                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg text-4xl">
                        <BsThreeDots />
                     </button>
                  </div>
               </div>
            </div>

            {/* FLEX ITEM 2 */}
            <div className="px-4 space-y-4">
               <div className="flex items-center justify-between px-5 text-base">
                  <p>
                     Class participants <span className="font-bold">(2)</span>
                  </p>
                  <button className="font-bold">
                     <BsThreeDotsVertical />
                  </button>
               </div>

               <div>
                  <img
                     src={student}
                     alt="student"
                     className="max-w-xs rounded-3xl"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
