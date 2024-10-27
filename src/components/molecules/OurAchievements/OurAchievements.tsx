import React from 'react';

type Props = {
   showTitle?: boolean;
};

export default function OurAchievements({ showTitle = true }: Props) {
   return (
      <div>
         <div className="max-w-7xl mx-auto  space-y-3 lg:px-3 sm:px-6 px-3 my-6 sm:my-10 text-sm sm:text-base">
            {showTitle && (
               <h2 className="font-bold text-xl sm:text-3xl">
                  Our Achievements
               </h2>
            )}

            <div className="bg-[#DAE9FF] text-2xl py-3 px-8 flex flex-col sm:flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center rounded">
               <div className="text-center px-8 py-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <h4 className="font-bold">32000+</h4>
                  <p>Experienced Tutors</p>
               </div>
               <div className="text-center px-8 py-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <h4 className="font-bold">2000+</h4>
                  <p>5-Star Tutor Rating</p>
               </div>
               <div className="text-center px-8 py-10 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <h4 className="font-bold">200+</h4>
                  <p>Subjects taught</p>
               </div>
               <div className="text-center px-8 py-2">
                  <h4 className="font-bold">200+</h4>
                  <p>Tutor Nationalities</p>
               </div>
            </div>
         </div>
      </div>
   );
}
