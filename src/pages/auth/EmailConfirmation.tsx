import React from 'react';
import { Button, Logo } from '../../components/atoms';
import email from '../../assets/images/email.png';
import { Link, useNavigate } from 'react-router-dom';

function EmailConfirmation() {
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();

      navigate('/auth/confirmation');
   };
   // const back = (e: React.MouseEvent) => {
   //    e.preventDefault();
   //    navigate('/student/confirmation');
   // };
   return (
      <div className="w-full h-screen flex">
         <div className="bg-[#fff] md:w-[50%] w-full flex flex-col justify-center items-center">
            <Logo />
            <div className="w-[100%] flex h-[95%] flex-col justify-center items-center">
               <div className="w-[65%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold mb-4">
                     Confirm your email address{' '}
                  </h2>
                  <p className="text-[#909090] text-left text-sm mb-6">
                     Please check your email for the next step to signup.
                  </p>
               </div>
               <div className="items-start w-[65%] gap-3 h-30 flex flex-col  mt-3 justify-between">
                  <div className="w-[50%]">
                     <Link to="/chat" className="w-full">
                        <Button type="next" btnText="CONTACT SUPPORT" />
                     </Link>
                  </div>
                  <div className="w-[40%] mt-2">
                     <Button
                        type="signup"
                        btnText="CONTINUE UX"
                        onClick={next}
                     />
                  </div>
               </div>
               <div className="w-[65%] mt-12 mb-12">
                  <Button type="signup" btnText="BACK TO LOGIN" />
               </div>
            </div>
            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[45%] relative hidden md:flex">
            <img
               className="object-contain w-[80%] mx-auto mr-[50%] absolute"
               src={email}
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default EmailConfirmation;
