import React, { useState } from 'react';
import { InputComp, Button, Logo } from '../../components/atoms';
import signup from '../../assets/images/key.png';
import { useNavigate } from 'react-router-dom';
function SetPassword() {
   const navigate = useNavigate();
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState<string>('');
   const next = (e: React.MouseEvent) => {
      e.preventDefault();

      navigate('/auth/email-confirmation');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/signup');
   };
   return (
      <div className="w-full h-screen flex">
         <div className="bg-[#fff] md:w-[60%] w-[90%] h-full flex flex-col justify-center top-0 items-center  ">
            <div className="w-[100%] h-full flex flex-col justify-center items-center">
               <Logo />
               <div className="w-[55%] flex flex-col items-left pt-8">
                  <h2 className="text-center text-[1.5rem] font-bold mb-4 mt-6">
                     Set your password
                  </h2>
               </div>
               <form className="md:w-[55%] w-[80%] h-[100%] mb-8">
                  <InputComp
                     placeholder="Password"
                     type2="password"
                     selectedOption={password}
                     setSelectedOption={setPassword}
                  />
                  <InputComp
                     placeholder="Confirm password"
                     type2="password"
                     selectedOption={confirmPassword}
                     setSelectedOption={setConfirmPassword}
                  />
                  <div className="items-center gap-3 h-30 flex flex-col  mt-9 justify-between w-full">
                     <Button type="next" btnText="NEXT" onClick={next} />
                     <Button
                        type="signup"
                        btnText="BACK TO LOGIN"
                        onClick={back}
                     />
                  </div>
               </form>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#E7EBF3] h-full w-[35%] hidden md:flex">
            <img
               className="object-contain w-[70%] mx-auto border-3 border-3"
               src={signup}
               alt=""
            />
         </div>{' '}
         <div className=" bg-[#fff] h-full w-[5%] hidden md:flex"></div>{' '}
      </div>
   );
}

export default SetPassword;
