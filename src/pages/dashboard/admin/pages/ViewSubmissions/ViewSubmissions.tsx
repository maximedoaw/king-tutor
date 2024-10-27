import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import Header from '../../../../../components/atoms/header/Header';
import image from '../../../../../assets/images/tutor.png';
import image2 from '../../../../../assets/images/pic4.png';
import editProfile from '../../../../../assets/images/edit-profile.png';

export default function ViewSubmissions() {
   return (
      <div>
         <Header />

         <div className="flex">
            <div className="px-8 py-6 space-y-7">
               <div className="space-y-2">
                  <div className="flex items-center gap-4">
                     <span className="font-bold text-lg">Name:</span>
                     <span>Jace Kayode</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="font-bold text-lg">Email:</span>
                     <span>jacekayode@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="font-bold text-lg">Subject:</span>
                     <span>Javascript</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="font-bold text-lg">Price:</span>
                     <span>$20</span>
                  </div>
               </div>

               <div className="space-y-5">
                  {/* PROFILE IMAGE */}
                  <div className="space-y-2">
                     <h4 className="font-bold text-2xl">Profile image</h4>
                     <img src={image} alt="Image" className="h-44" />
                  </div>

                  {/* PROFILE VIDEO */}
                  <div className="space-y-2">
                     <h4 className="font-bold text-2xl">Profile video</h4>
                     <div className="relative flex items-center justify-center">
                        <img src={image2} alt="Image" className="h-44" />
                        <AiFillPlayCircle className="text-white text-5xl absolute" />
                     </div>
                  </div>

                  {/* ABOUT */}
                  <div className="space-y-2">
                     <h4 className="font-bold text-2xl">About</h4>
                     <div className="bg-[#F5F7FA] px-4 py-2 max-w-2xl">
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
                        did once....
                     </div>
                  </div>

                  {/* CERTIFICATION & EXPERIENCE */}
                  <div className="space-y-2">
                     <h4 className="font-bold text-2xl">
                        Certification and Experience
                     </h4>
                     <p className="text-[#3A6AB3] underline cursor-pointer">
                        See document
                     </p>
                     <p className="text-[#3A6AB3] underline cursor-pointer">
                        See document
                     </p>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <button className="bg-[#2B7CF8] text-white py-3 px-4 rounded-lg">
                     Schedule demo class
                  </button>
                  <button className="bg-[#E52323] text-white py-3 px-4 rounded-lg">
                     Decline submission
                  </button>
               </div>
            </div>

            {/* IMAGE */}
            <div className="sticky top-0">
               <img src={editProfile} alt="Image" className="" />
            </div>
         </div>
      </div>
   );
}
