import React, { useState } from 'react';
import { InputComp, Button, Logo } from '../../components/atoms';
import monitor from '../../assets/images/monitor.png';

function ResetPassword() {
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState<string>('');
   return (
      <div className="w-full flex">
         <div className="bg-[#fff] md:w-[45%] w-[95%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <Logo />
               <div className="w-[65%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold mb-4">
                     Reset your password{' '}
                  </h2>
               </div>
               <form className="w-[65%] h-[100%] mb-8">
                  <InputComp
                     placeholder="New password"
                     selectedOption={password}
                     setSelectedOption={setPassword}
                  />
                  <InputComp
                     placeholder="Retype new password"
                     selectedOption={confirmPassword}
                     setSelectedOption={setConfirmPassword}
                  />
                  <div className="items-start gap-3 h-30 flex flex-col  mt-9 mb-10 justify-between w-[60%]">
                     <Button type="login" btnText="RESET" />
                  </div>
                  <Button type="signup" btnText="BACK TO LOGIN" />
               </form>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] h-full w-[55%] hidden md:flex">
            <img
               className="object-contain w-[70%] mx-auto"
               src={monitor}
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default ResetPassword;
