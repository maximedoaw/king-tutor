import React from 'react';
import succes from '../../assets/images/success.png';
import ok from '../../assets/icons/Ok.png';
import { Button } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';

function Success() {
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/');
   };
   return (
      <div className="w-screen h-full overflow-x-hidden ">
         <div className="w-full flex flex-col items-center pt-8 justify-center  md:h-[80vh]">
            <div className="relative w-52 h-52 border-8 border-green-600 rounded-full flex justify-center align-middle">
               <img
                  src={succes}
                  className="absolute inset-0 w-full h-full object-contain"
                  alt=""
               />
               <img
                  src={ok}
                  className="absolute inset-1/4 w-[40%] h-[40%] mx-auto object-contain top-[6rem] left-24"
                  alt=""
               />
            </div>
            <h2 className="text-green-600 font-bold text-3xl mt-8 ">
               Success!
            </h2>
            <div>
               <h3 className="font-bold text-lg w-[80%] m-auto  text-center">
                  We’ve recieved your application to KingsTutor
               </h3>
               <p className="text-[#93969B] w-[80%] md:w-[40%] mt-6 text-sm m-auto  text-center">
                  Our admins will review your information and send you and email
                  to activate your tutor account within 24hours. If you are
                  eligible, our admins will schedule a demo class where you will
                  teach and they will assess you. We will do our best to get to
                  you as soon as possible
               </p>
               <div className="w-24 mt-4 m-auto  text-center">
                  <Button type="signup" btnText="HOME" onClick={next} />
               </div>
            </div>
            <div className="flex  pb-4 mt-10 w-[80%]  text-center mx-auto justify-center">
               <p className="mr-4">Terms and conditions </p>
               &bull;
               <p className="ml-4"> Privacy policy</p>
            </div>
         </div>
      </div>
   );
}

export default Success;
