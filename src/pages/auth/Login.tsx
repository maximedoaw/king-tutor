import React, { useState } from 'react';
import { InputComp, Button, Logo } from '../../components/atoms';
import work from '../../assets/images/work.png';
import { Link } from 'react-router-dom';

function Login() {
   // const navigate = useNavigate();
   // const next = (e: React.MouseEvent) => {
   //    e.preventDefault();
   //    navigate('/auth/signup');
   // };

   /** Stat management */
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   /** Custom hook */
   // const { login } = useAuth();

   /** handle login */
   function handleLogin() {
      if (email !== '' && password !== '') {
         // login(email, password).then((response: any) => {
         //    if (response) {
         //       navigate('/student/dashboard');
         //    }
         // });
      }
   }

   return (
      <div className="w-full h-screen sm:flex">
         <div className="bg-[#fff] sm:w-[50%] w-full flex flex-col justify-around h-full items-center">
            <div className="logobg flex justify-center items-start sm:items-center  sm:rounded-b-3xl sm:mr-2">
               <Logo />
            </div>
            <div className="w-[100%] flex h-[95%] flex-col justify-center items-center">
               <div className="w-full mx-auto flex-col items-center flex">
                  <form className="sm:w-[80%] h-[40%] w-[80%] lg:w-[50%]">
                     {/* <Button type="google" btnText="CREATE NEW ACCOUNT" />
                  <p className="text-[#909090] text-sm mt-5 flex justify-center items-center ">
                     or
                  </p>{' '} */}
                     <InputComp
                        placeholder="Email address*"
                        type="input"
                        type2=""
                        selectedOption={email}
                        setSelectedOption={setEmail}
                     />
                     <InputComp
                        type="input"
                        type2="password"
                        placeholder="Password*"
                        selectedOption={password}
                        setSelectedOption={setPassword}
                     />
                     <div className="w-full h-20 pb-6 flex items-center justify-between">
                        <Button
                           onClick={(e: React.MouseEvent) => {
                              e.preventDefault();
                           }}
                           type="login"
                           btnText="LOGIN"
                        />
                        <h2 className="font-bold text-xs text-right">
                           <Link to={'/auth/forgot-password'}>
                              <a href="">Forgot your password?</a>
                           </Link>
                        </h2>
                     </div>
                  </form>
               </div>
               <div className="sm:w-[80%] w-[80%] lg:w-[50%] h-20 pb-6 flex items-center justify-between">
                  <Link to="/auth/signup" className="w-full">
                     <Button
                        onClick={handleLogin}
                        type="signup"
                        btnText="CREATE ACCOUNT"
                     />
                  </Link>
               </div>
            </div>

            <div className="flex justify-content-center pb-4 mt-4 z-50">
               <p className="mr-4">Terms and conditions </p>
               &bull;
               <p className="ml-4"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#345FA1] w-[50%] pr-6 pl-6 hidden sm:flex flex-col  h-full relative  ">
            <span
               className="w-[8em] h-full absolute bg-blue-200"
               style={{ left: '47%', zIndex: '10' }}
            ></span>
            <p
               className="text-4xl font-bold mt-5 text-white sm:text-start md:text-6xl h-1/2 flex flex-col justify-center"
               style={{ textTransform: 'capitalize', zIndex: '20' }}
            >
               <p>
                  Learn from <span className="md:text-black">the</span>
               </p>
               <p>
                  comfort of <span className="md:text-black">your</span> home{' '}
               </p>
            </p>
            {/* <p className="text-4xl font-bold mt-5 text-white sm:text-center md:text-6xl py-8">
               Learn from the comfort of your home{' '}
            </p> */}

            {/* <img
               className="object-contain w-[80%] mx-auto "
               src={work}
               alt=""
            /> */}
         </div>
      </div>
   );
}

export default Login;
