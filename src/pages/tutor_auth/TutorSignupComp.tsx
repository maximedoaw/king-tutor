/* eslint-disable prettier/prettier */
import { Button, InputComp } from '../../components/atoms';
import signup from '../../assets/images/signup.png';
import { useNavigate } from 'react-router-dom';

function TutorSignupComp() {
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();

      navigate('/tutor/photo');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/auth/signup');
   };
   return (
      <div className="w-full flex justify-center md:flex-row flex-col md:gap-4">
         <div className=" w-[90%] flex flex-col justify-center items-center m-auto">
            <div className="w-full bg-[#fff] flex flex-col justify-center items-center">
               <div className="w-[90%] flex flex-col justify-center items-center">
                  <div className=" flex flex-col items-left pt-8">
                     <h2 className="text-left text-[1.5rem] font-bold">
                        Sign up to KingsTutor
                     </h2>
                     <p className="text-[#909090] text-left text-sm">
                        Start creating your public profile. Your can return at
                        any time to finish your registration
                     </p>
                  </div>
                  <form className=" h-[100%] mb-8">
                     <div className="w-[100%] flex gap-4">
                        <InputComp
                           placeholder="First name"
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                        <InputComp
                           placeholder="Last name"
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                     </div>
                     <InputComp
                        placeholder="Choose subject..."
                        type="dropdown"
                        options={['English ', 'French', 'Spanish', 'Dutch']}
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <div className="w-[100%] flex gap-4">
                        <InputComp
                           placeholder="Language spoken"
                           type="dropdown"
                           options={[
                              'English, USA',
                              'French, Fr',
                              'Spanish',
                              'Dutch',
                           ]}
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                        <InputComp
                           placeholder="Level"
                           type="dropdown"
                           options={['Beginner', 'Intermediate', 'Advanced']}
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                     </div>
                     <InputComp
                        placeholder="Describe your teaching experience"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <div className="w-[100%] flex gap-4">
                        <InputComp
                           placeholder="Country"
                           type="dropdown"
                           options={['Cameroon', 'France', 'Britin']}
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                        <InputComp
                           placeholder="Phone #"
                           selectedOption={''}
                           setSelectedOption={() => {}}
                        />
                     </div>
                     <InputComp
                        placeholder="Default timezone"
                        type="dropdown"
                        options={[
                           'America/New_York',
                           'America/Los_Angeles',
                           'Europe/London',
                           'Europe/Paris',
                           'Asia/Tokyo',
                           'Australia/Sydney',
                           'Africa/Johannesburg',
                        ]}
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <h2 className="text-left font-bold mb-2 text-sm mt-4">
                        Age
                     </h2>
                     <label htmlFor="" className="flex items-center">
                        <input
                           className="form-checkbox mr-4 w-7 h-7"
                           type="checkbox"
                        />
                        <span>I confirm I’m over 18</span>
                     </label>
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
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[80%] h-screen items-center justify-center lg:flex hidden">
            <img
               className="object-contain w-[90%] h-full"
               src={signup}
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default TutorSignupComp;
