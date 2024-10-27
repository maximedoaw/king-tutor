import React from 'react';
import { worries } from '../../../constants/Worrries';
import union from '../../../assets/images/Union.png';
import envelope from '../../../assets/icons/Envelope.png';
import { ArrowPoints } from '../../../components/atoms';
function DontWorry() {
   return (
      <div className=" w-full h-full py-16 flex justify-center items-center">
         <div className="flex flex-col md:flex-row items-center w-[80%] justify-between gap-12 ">
            <h2 className="font-bold text-3xl mb-10 flex md:hidden">
               Dont Worry were always here to help you
            </h2>
            <img
               className="md:w-[45%] w-full object-contain "
               src={union}
               alt=""
            />
            <div className="md:W-[50%] W-[80%] h-full">
               <h2 className="font-bold text-3xl mb-10 hidden md:flex">
                  Dont Worry were always here to help you
               </h2>
               <p className="text-[#6E7485] text-sm mb-10">
                  Mauris aliquet ornare tortor, ut mollis arcu luctus quis.
                  Phasellus nec augue malesuada, sagittis ligula vel, faucibus
                  metus. Nam viverra metus eget nunc dignissim.
               </p>
               {worries.map((item, index) => (
                  <ArrowPoints text={item} key={index} />
               ))}
               <div className="flex gap-4 mt-8">
                  <div className="w-9 h-9 flex justify-center items-center bg-white rounded-full">
                     <img
                        className="w-5 object-contain"
                        src={envelope}
                        alt=""
                     />
                  </div>
                  <div>
                     <p className="text-[#8C94A3] text-xs capitalize">
                        Email us, anytime anywhere
                     </p>
                     <h2 className="text-[#1D2026] font-bold text-sm">
                        help.eduguard@gamil.com
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DontWorry;
