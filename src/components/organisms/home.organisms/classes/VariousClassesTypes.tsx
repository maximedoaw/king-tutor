/* eslint-disable prettier/prettier */
import React from 'react';
import classImg1 from '../../../../assets/images/classes-img-1.jpg';
import classSubImg1 from '../../../../assets/images/classes-img-1-sub-1.jpg';
import classImg2 from '../../../../assets/images/group-class-image-main.png';
import groupImgSub1 from '../../../../assets/images/group-class-image-1.jpg';
import groupImgSub2 from '../../../../assets/images/group-class-image-2.jpg';
import groupImgSub3 from '../../../../assets/images/group-class-image-3.jpg';
import groupImgSub4 from '../../../../assets/images/group-class-image-4.jpg';

export default function VariousClassesTypes() {
   return (
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-7">
         <h1 className="font-bold text-center text-3xl">See What We Offer</h1>

         <div className="flex flex-col sm:flex-row justify-around gap-10">
            {/* ONE-ON-ONE CLASSES */}
            <div className="card text-center">
               <div className="relative py-5 inline-flex pb-10">
                  <img
                     src={classImg1}
                     alt="image"
                     className="w-72 rounded-full h-auto border border-t-4 border-t-blue-500 border-l-blue-500 border-r-blue-500"
                  />
                  <img
                     src={classSubImg1}
                     alt="image"
                     className="rounded-full w-20 absolute top-0 right-1"
                  />
               </div>
               <div className="max-w-sm mx-auto space-y-5">
                  <h3 className="text-2xl font-bold">1-on-1 lessons</h3>
                  <p className="">
                     Find experienced tutors from all over the world sharing
                     their knowledge, skills and culture
                  </p>
                  <div>
                     <a href="#" className="text-[#01CAAD] font-bold">
                        Find a tutor &gt;
                     </a>
                  </div>
               </div>
            </div>

            {/* GROUP CLASSES */}
            <div className="card text-center">
               <div className="relative py-5 inline-flex">
                  <img
                     src={classImg2}
                     alt="image"
                     className="w-72 rounded-full h-auto bg-[#01CAAD]"
                  />
                  <img
                     src={groupImgSub1}
                     alt="image"
                     className="rounded-full w-20 absolute top-0 left-0"
                  />
                  <img
                     src={groupImgSub2}
                     alt="image"
                     className="rounded-full w-20 absolute top-0 right-0"
                  />
                  <img
                     src={groupImgSub3}
                     alt="image"
                     className="rounded-full w-20 absolute bottom-0 left-0"
                  />
                  <img
                     src={groupImgSub4}
                     alt="image"
                     className="rounded-full w-20 absolute bottom-0 right-0"
                  />
               </div>
               <div className="max-w-sm mx-auto space-y-4">
                  <h3 className="text-2xl font-bold">Group Classes</h3>
                  <p className="">
                     Learn with a community of people with thesame interests as
                     you
                  </p>
                  <div>
                     <a
                        href="/tutor/classroom"
                        className="text-[#01CAAD] font-bold mt-40"
                     >
                        See group classes &gt;
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
