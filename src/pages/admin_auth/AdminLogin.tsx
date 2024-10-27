import { InputComp, Button, Logo } from '../../components/atoms';
import AdminLoginImg from '../../assets/images/work.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AdminLogin() {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <div className="w-full h-[100%] flex">
         <div className="bg-[#fff] w-full md:w-[55%] flex flex-col justify-center items-center">
            <Logo />
            <div className="w-[100%] flex h-[95%] flex-col justify-center items-center">
               <div className="w-[80%] md:w-[60%]  flex items-left">
                  <h2 className="text-left font-bold">SIGN IN</h2>
               </div>
               <form className="w-[80%] md:w-[60%] h-[50%]">
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
                           navigate('../admin-dashboard');
                        }}
                     />
                     <h2 className="font-bold text-xs">
                        <a href="">Forgot your password?</a>
                     </h2>
                  </div>
               </form>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[45%] pr-6 pl-6 hidden md:block">
            <p className="text-4xl font-bold mt-12 ">
               Let's Get Everything in Order
            </p>
            <img
               className="object-contain w-[100%] mx-auto "
               src={AdminLoginImg}
               alt=""
            />
         </div>
      </div>
   );
}

export default AdminLogin;
