import React from 'react';
import images from '../../../assets/images/Images.png';
import quote from '../../../assets/icons/Quotes.png';
function SuccessStories() {
   return (
      <div className="flex flex-col md:flex-row py-12 px-4 bg-white justify-center items-center">
         <h2 className="font-bold text-4xl mb-10 flex md:hidden">
            20k+ Instructor created their success story with KingsTutor{' '}
         </h2>
         <div className="w-[85%] flex items-center justify-between flex-col-reverse md:flex-row">
            <div className="md:w-[35%] w-full  ">
               <h2 className="font-bold text-4xl mb-10 hidden md:flex">
                  20k+ Instructor created their success story with KingsTutor{' '}
               </h2>
               <p className="text-[#4E5566] text-lg font-medium mb-6 mt-8 md:mt-0">
                  Nunc euismod sapien non felis eleifend porttitor. Maecenas
                  dictum eros justo, id commodo ante laoreet nec. Phasellus
                  aliquet, orci id pellentesque mollis.
               </p>
               <div className="bg-[#E9F2FF] p-6 w-full ">
                  <img src={quote} alt="" />
                  <p>
                     Nulla sed malesuada augue. Morbi interdum vulputate
                     imperdiet. Pellentesque ullamcorper auctor ante, egestas
                     interdum quam facilisis commodo. Phasellus efficitur quis
                     ex in consectetur. Mauris tristique suscipit metus, a
                     molestie dui dapibus vel.
                  </p>
               </div>
            </div>
            <img src={images} alt="" className="w-full md:w-[50%]" />
         </div>
      </div>
   );
}

export default SuccessStories;
