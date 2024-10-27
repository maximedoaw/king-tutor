import { InputComp, Button, Logo } from '../../components/atoms';
import loginImg from '../../assets/images/login.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function TutorLogin() {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <div className="w-full  flex h-screen">
         <div className="bg-[#fff] w-full md:w-[55%] flex flex-col justify-center items-center">
            <div className="logobg flex justify-center ml-4 sm:ml-0 sm:items-center  sm:rounded-b-3xl sm:mr-2">
               <Logo />
            </div>
            <div className="w-[100%] flex h-[95%] flex-col justify-center items-center">
               <div className="w-[80%] md:w-[60%]  flex items-left">
                  <h2 className="text-left font-bold">SIGN IN</h2>
               </div>
               <form className="w-[80%] md:w-[60%] ">
                  <InputComp
                     placeholder="Email Address*"
                     selectedOption={email}
                     setSelectedOption={setEmail}
                  />
                  <InputComp
                     placeholder="Password*"
                     selectedOption={password}
                     setSelectedOption={setPassword}
                  />
                  <div className="w-full h-20 pb-6 flex items-center justify-between">
                     <Button
                        type="login"
                        btnText="LOGIN"
                        onClick={() => {
                           navigate('/dashboard');
                        }}
                     />
                     <h2 className="font-bold  lg:text-xl text-slate-600 hover:sm:text-black text-right text-sm">
                        <a href="">Forgot your password?</a>
                     </h2>
                  </div>
               </form>
               <div className="w-[80%] md:w-[60%]">
                  <Button
                     type="signup"
                     btnText="CREATE NEW ACCOUNT"
                     onClick={() => navigate('/tutor/profile')}
                  />
               </div>
            </div>

            <div className="flex justify-content-center pb-4 mt-24">
               <p className="mr-4">Terms and conditions </p>
               &bull;
               <p className="ml-4"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[60%] pr-6 pl-6 hidden md:flex flex-col justify-center ">
            <p className="text-4xl font-bold mt-5 text-center">
               Teach Online Earn money on your own schedule
            </p>
            <img
               className="object-contain w-[70%] mx-auto "
               src={loginImg}
               alt=""
            />
         </div>
      </div>
   );
}

export default TutorLogin;
