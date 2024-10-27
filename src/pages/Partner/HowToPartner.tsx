import React from 'react';
import img from '../../assets/images/Union.png';

export default function HowToPartner() {
   return (
      <div className="w-full flex justify-center items-center pt-12">
         <div className="w-4/5 flex flex-col md:flex-row items-center justify-between ">
            <img
               src={img}
               className="w-full md:w-[30%] object-contain"
               alt=""
            />
            <div className="w-full md:w-[60%] items-center mt-8 md:mt-0">
               <h2 className="font-bold text-4xl mb-8">
                  How to become a partner
               </h2>
               <p>
                  Complete the brief form below, outlining your goals, and lets
                  explore the endless possibilities for collaboration.
               </p>
               <p>
                  Once we receive your submission, our team will diligently
                  review your information. Expect to hear from us soon using the
                  contact details provided. Lets shape the future of learning
                  together
               </p>
            </div>
         </div>
      </div>
   );
}
