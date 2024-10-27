import React from 'react';
import { Button, Logo } from '../../components/atoms';

function SecondEmailConfirmation() {
   return (
      <div className="w-screen h-screen flex justify-center items-center flex-col">
         <Logo />
         <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="md:w-[50%] w-[90%]  h-[80%] bg-[#FAFAFB] p-12">
               <h2 className="font-bold text-xl">
                  Email Confirmation,{' '}
                  <span className="text-[#3A6AB3]">
                     before we get started...
                  </span>
               </h2>
               <p className="text-sm mt-6 mb-6">
                  Thank you for registering on KingsTutor, to finish your
                  registration please confirm your email by clicking on the
                  button below:
               </p>
               <div className="w-60 mb-8">
                  <Button type="next" btnText="CONFIRM YOUR EMAIL" />
               </div>
               <p className="text-sm">
                  Didnt signup for KingsTutor?{' '}
                  <span className="text-[#3A6AB3]">Let us know</span>
               </p>
               <hr className="mt-4 mb-8" />
               <p className="text-sm">
                  If you’re having trouble with the button above, copy and paste
                  the URL below into your web browser.
               </p>
               <a
                  className="text-sm text-[#3A6AB3]"
                  href="https://app.domain.com/auth/confirm-email/7ddc6cb3-0cd1-40d5-8e62-39b5bac44841"
               >
                  https://app.domain.com/auth/confirm-email/7ddc6cb3-0cd1-40d5-8e62-39b5bac44841
               </a>{' '}
            </div>
            <div className="w-[50%] flex justify-between items-center mt-6">
               <p className="text-xs">Email sent by KingTutor</p>
               <div className="flex items-center">
                  <p className="mr-4 text-xs">Terms and conditions </p>
                  &bull;
                  <p className="ml-4 text-xs"> Privacy policy</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SecondEmailConfirmation;
