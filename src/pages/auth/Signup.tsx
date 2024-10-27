import React, { useState } from 'react';
import { Button, InputComp, Logo } from '../../components/atoms';
import signup from '../../assets/images/Welcome.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
   const navigate = useNavigate();
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/set-password');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/login');
   };

   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [phoneNumber, setPhoneNumber] = useState<string>('');
   const [companyName, setCompanyName] = useState<string>('');
   const [timezone, setTimezone] = useState<string>('');
   const [country, setCountry] = useState<string>('');

   return (
      <div className="w-full flex">
         <div
            className="bg-[#fff] md:w-[60%]
         w-full flex flex-col justify-center items-center"
         >
            <div className="w-[100%] flex flex-col justify-center items-center">
               <Logo />
               <div className="md:w-[55%] w-[80%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold mb-4">
                     Sign up to KingsTutor
                  </h2>
               </div>
               <form className="md:w-[55%] w-[80%] h-[100%] mb-8">
                  <div className="w-[100%] flex gap-4">
                     <InputComp
                        placeholder="First name"
                        type="input"
                        selectedOption={firstName}
                        setSelectedOption={setFirstName}
                     />
                     <InputComp
                        placeholder="Last name"
                        type="input"
                        selectedOption={lastName}
                        setSelectedOption={setLastName}
                     />
                  </div>
                  <InputComp
                     placeholder="Email"
                     type="input"
                     type2=""
                     selectedOption={email}
                     setSelectedOption={setEmail}
                  />

                  <InputComp
                     placeholder="Company name"
                     selectedOption={companyName}
                     setSelectedOption={setCompanyName}
                  />
                  <div className="w-[100%] flex gap-4">
                     <InputComp
                        placeholder="Country"
                        type="dropdown"
                        options={['Cameroon', 'France', 'Britin']}
                        selectedOption={country}
                        setSelectedOption={setCountry}
                     />
                     <InputComp
                        placeholder="phone"
                        selectedOption={phoneNumber}
                        setSelectedOption={setPhoneNumber}
                     />
                  </div>
                  <InputComp
                     placeholder="Default timezone"
                     type="dropdown"
                     options={['GMT+1', 'UTC', 'EST']}
                     selectedOption={timezone}
                     setSelectedOption={setTimezone}
                  />
                  <div className="items-center gap-3 h-30 flex flex-col  mt-3 justify-between w-full">
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
         <div className=" bg-[#FAFAFB] w-[40%] hidden md:block">
            <img
               className="object-contain w-[70%] mx-auto  "
               src={signup}
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default Signup;
