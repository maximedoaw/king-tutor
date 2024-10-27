import React, { useState } from 'react';
import { Button, Logo, InputComp } from '../../components/atoms';
import cyberSec from '../../assets/images/Cybersecurity.png';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
   const navigate = useNavigate();
   const [email, setEmail] = useState<string>('');
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/email-recovery-msg');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/login');
   };
   return (
      <div className="w-full h-screen flex overflow-y-hidden ">
         <div className="bg-[#fff] md:w-[45%] w-[95%] h-full flex flex-col justify-center top-0 items-center  ">
            <div className="w-[100%] h-full flex flex-col justify-center items-center">
               <Logo />
               <div className="w-[65%] flex flex-col mt-4 items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold mb-4">
                     Reset your password{' '}
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Type in your registered email address to reset password
                  </p>
               </div>
               <form className="w-[65%] h-[100%] mb-8">
                  <InputComp
                     placeholder="Email Address"
                     selectedOption={email}
                     setSelectedOption={setEmail}
                  />
                  <div className="items-start gap-3 h-30 flex flex-col  mt-6 mb-10 justify-between w-[100%]">
                     <Button type="login" btnText="RESET" onClick={next} />
                  </div>
                  <Button
                     type="signup"
                     btnText="BACK TO LOGIN"
                     onClick={back}
                  />
               </form>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] h-full w-[55%] hidden md:flex ">
            <img
               className="object-contain w-[70%] mx-auto mt-12"
               src={cyberSec}
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default ForgotPassword;
