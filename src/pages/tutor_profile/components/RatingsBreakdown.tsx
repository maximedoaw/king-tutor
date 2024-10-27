import React from 'react';
import { AiFillStar } from 'react-icons/ai';

type RatingsSectionProps = {
   averageRating: number;
   ratingsData: number[];
};

const Ratings: React.FC<RatingsSectionProps> = ({
   //    averageRating,
   ratingsData,
}) => {
   const totalRatings = ratingsData.reduce((acc, count) => acc + count, 0);

   return (
      <div className="bg p-4 rounded-md flex w-full flex-wrap gap-6 justify-center max-w-xl">
         {/* Left Column: Average Rating */}
         {/* <div className="flex flex-col items-center justify-center pr-8">
            <div className="text-5xl font-semibold">{averageRating}</div>
            <div className="flex space-x-2 text-2xl">
               {Array.from({ length: 5 }).map((_, index) => (
                  <AiFillStar key={index} className="text-[#FD8E1F] text-xl" />
               ))}
            </div>
            <div className="text-xl text-gray-600">Average Rating</div>
         </div> */}

         {/* Right Column: Ratings Breakdown */}
         <div className="flex-1 space-y-2">
            {ratingsData.map((count, index) => (
               <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center space-x-4 space-y-0"
               >
                  <div className="flex">
                     <div className="flex items-center space-x-2 flex-1 w-36">
                        {Array.from({ length: 5 - index }).map(
                           (_, starIndex) => (
                              <AiFillStar
                                 key={starIndex}
                                 className="text-[#FD8E1F] text-xl "
                              />
                           ),
                        )}
                     </div>
                     <div className="text-sm ml-8 ">{5 - index} stars</div>
                  </div>
                  <div className="flex-1">
                     <div className="relative w-full h-2 bg-gray-200">
                        <div
                           className="absolute h-2 bg-[#2C5086]"
                           style={{ width: `${(count / totalRatings) * 100}%` }}
                        ></div>
                     </div>
                  </div>
                  <div className="text-sm text-gray-600">({count})</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Ratings;
