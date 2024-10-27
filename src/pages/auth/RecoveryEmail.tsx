import React from 'react';
import { Logo, Button } from '../../components/atoms';
import { useNavigate } from 'react-router-dom';

function RecoveryEmail() {
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();

      navigate('/auth/reset-password');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/login');
   };
   return (
      <div className="w-full flex">
         <div className="bg-[#fff] md:w-[45%] w-[95%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <Logo />
               <div className="w-[65%] flex flex-col mt-4 items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold mb-4">
                     Recovery Email Sent!{' '}
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Please check your email for next steps to reset your
                     password.{' '}
                  </p>
               </div>
               <div className="items-start gap-4 h-30 flex flex-col  mt-9 mb-10 justify-between w-[65%]">
                  <Button type="login" btnText="RESET" onClick={next} />
                  <Button
                     type="signup"
                     btnText="BACK TO LOGIN"
                     onClick={back}
                  />
               </div>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] h-full w-[55%] hidden md:flex "></div>{' '}
      </div>
   );
}

export default RecoveryEmail;
