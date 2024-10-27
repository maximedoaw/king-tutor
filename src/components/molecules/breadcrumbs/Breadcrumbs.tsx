/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { FaBars } from 'react-icons/fa6';

export default function Breadcrumbs({ stage }: { stage: string }) {
   const navigate = useNavigate();

   const next = (location: string) => {
      navigate(`/tutor/${location}`);
   };
   const [menu, setMenu] = useState<boolean>(false);
   return (
      <div className="">
         <div className="max-w-7xl mx-auto bg-[#222223] py-3">
            <div className="md:flex items-center justify-center px-8 gap-4 text-gray-500 overflow-auto hidden">
               <span
                  onClick={() => next('profile')}
                  className={`${
                     stage.trim() === 'about' ? 'text-white font-semibold' : ''
                  }`}
               >
                  About
               </span>

               <span className="font-bold text-2xl">&gt;</span>
               <span
                  onClick={() => next('photo')}
                  className={`${
                     stage.trim() === 'photo' ? 'text-white font-semibold' : ''
                  }`}
               >
                  Photo
               </span>
               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('certification')}
                  className={`${
                     stage.trim() === 'certification'
                        ? 'text-white font-semibold'
                        : ''
                  }`}
               >
                  Certification
               </span>

               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('education')}
                  className={`${
                     stage.trim() === 'education'
                        ? 'text-white font-semibold'
                        : ''
                  }`}
               >
                  Education
               </span>

               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('description')}
                  className={`${
                     stage.trim() === 'description'
                        ? 'text-white font-semibold'
                        : ''
                  }`}
               >
                  Description
               </span>

               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('video')}
                  className={`${
                     stage.trim() === 'video' ? 'text-white font-semibold' : ''
                  }`}
               >
                  Video
               </span>

               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('availability')}
                  className={`${
                     stage.trim() === 'availability'
                        ? 'text-white font-semibold'
                        : ''
                  }`}
               >
                  Availability
               </span>

               <span className="font-bold text-2xl">&gt;</span>

               <span
                  onClick={() => next('pricing')}
                  className={`${
                     stage.trim() === 'pricing'
                        ? 'text-white font-semibold'
                        : ''
                  }`}
               >
                  Pricing
               </span>
            </div>

            {/* responsive breadcrumbs */}
            <div className="bg-[#222223] flex md:hidden absolute flex-col w-full py-2">
               <div className="w-full flex justify-between items-center px-4 ">
                  <h2
                     className="text-white
                  "
                  >
                     Breadcrumbs
                  </h2>
                  {menu ? (
                     <RxCross2
                        className="text-white"
                        onClick={() => {
                           setMenu(!menu);
                        }}
                     />
                  ) : (
                     <FaBars
                        className="text-white"
                        onClick={() => {
                           setMenu(!menu);
                        }}
                     />
                  )}
               </div>
               <div
                  className={` flex-col  items-center justify-center px-8 gap-4 text-gray-500 overflow-auto  bg-[#222223] w-full ${
                     menu ? 'flex' : 'hidden'
                  } z-30`}
               >
                  <span
                     onClick={() => {
                        next('about');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'profile'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     About
                  </span>
                  <hr />
                  <span
                     onClick={() => {
                        next('photo');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'photo'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Photo
                  </span>

                  <span
                     onClick={() => {
                        next('certification');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'certification'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Certification
                  </span>

                  <span
                     onClick={() => {
                        next('education');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'education'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Education
                  </span>
                  <hr />

                  <span
                     onClick={() => {
                        next('description');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'description'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Description
                  </span>

                  <span
                     onClick={() => {
                        next('video');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'video'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Video
                  </span>

                  <span
                     onClick={() => {
                        next('availability');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'availability'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center border-b`}
                  >
                     Availability
                  </span>

                  <span
                     onClick={() => {
                        next('pricing');
                        setMenu(false);
                     }}
                     className={`${
                        stage.trim() === 'pricing'
                           ? 'text-white font-semibold'
                           : ''
                     } w-full flex justify-center items-center`}
                  >
                     Pricing
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
