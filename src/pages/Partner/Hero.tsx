import React from 'react';
import { TransparentNavbar } from '../../components/organisms';
// import heroBg from '../../../assets/images/invest.png';
import heroBg from '../../assets/images/invest.png';
function Hero() {
   return (
      <div className="relative h-screen w-full border">
         <img
            className="w-full h-full object-cover  object-center absolute top-0 left-0 z-10"
            src={heroBg}
            alt="Background Image"
         />
         <div className="absolute w-full h-full text-white z-20">
            <TransparentNavbar />
            <div className="w-full h-[85%] flex flex-col items-center justify-center mt-12">
               <h1 className="md:text-4xl text-3xl font-bold mb-10 md:w-[55%] w-[70%] text-center">
                  Become A Partner{' '}
               </h1>
               <p className="text-sm md:w-[45%] w-[80%] text-center mb-10">
                  At KingsTutor, were driving the future of education through
                  dynamic partnerships. Whether youre an individual tutor
                  expanding your global reach, an organization or company
                  enhancing training programs with flexible online tutoring, or
                  a school striving for academic success with personalized
                  support, KingsTutor is your catalyst for educational
                  advancement. Experience global exposure, cutting-edge
                  technology, and tailored solutions supported by a vibrant
                  community as you embark on an enriching educational journey
                  with us.
               </p>
               <button
                  className="bg-[#0367FF] text-white px-4 h-12 py-2 mt-4 font-bold uppercase"
                  onClick={() => {
                     const formElement =
                        document.getElementById('partner-form');
                     if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                     }
                  }}
               >
                  Partner with us{' '}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Hero;
