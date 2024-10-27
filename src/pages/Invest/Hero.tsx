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
                  Invest In Our Vision{' '}
               </h1>
               <p className="md:text-lg text-sm md:w-[35%] w-[80%] text-center mb-10">
                  We are shaping the future of learning, and we invite you to
                  join us on this exciting journey as an investor. Consider
                  becoming a part of our mission by investing in KingsTutor
               </p>
               <button
                  className="bg-[#0367FF] text-white px-4 h-12 py-2 mt-4 font-bold uppercase"
                  onClick={() => {
                     const formElement =
                        document.getElementById('investor-form');
                     if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                     }
                  }}
               >
                  Invest in KingsTutor
               </button>
            </div>
         </div>
      </div>
   );
}

export default Hero;
