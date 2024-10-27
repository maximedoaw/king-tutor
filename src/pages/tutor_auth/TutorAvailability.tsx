import { Button, InputComp } from '../../components/atoms';
import timeManagement from '../../assets/images/time_management.png';
import { useNavigate } from 'react-router-dom';

export default function TutorAvailability() {
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/pricing');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/about');
   };
   return (
      <div className="w-full flex md:flex-row flex-col">
         <div className="bg-[#fff] lg:w-[40%] w-[100%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center m-auto">
               <div className="w-[80%] md:w-[60%] flex flex-col items-left pt-8 m-auto">
                  <h2 className="text-left text-xl mb-4 font-bold">
                     Availability
                  </h2>
                  <p className="text-[#5686E1] text-left text-sm font-bold mb-3">
                     Set your timezone
                  </p>
                  <p className="text-[#909090] text-left text-sm">
                     A correct timezone is essential to coordinate lessons with
                     international students
                  </p>
                  <InputComp
                     placeholder="Select timezone"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <h2 className="text-left text-sm mt-2 font-bold">
                     Set your Availability
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Availability shows your potential working hours. Students
                     can book lessons at these times.
                  </p>
               </div>
               <form className=" w-[80%] md:w-[60%] h-[100%] mb-8">
                  <div className="flex gap-2 p-0 m-0">
                     <input type="checkbox" />
                     <p className="text-sm">Monday</p>
                  </div>
                  <div className="w-[100%] flex gap-3 items-center justify-center">
                     <InputComp
                        placeholder="Monday"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <p className="w-[5%]">to</p>
                     <InputComp
                        placeholder=""
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <button className="text-xl">+</button>
                  </div>{' '}
                  <div className="w-[100%] flex gap-3 items-center">
                     <InputComp
                        placeholder="Tuesday"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <p className="w-[5%]">to</p>
                     <InputComp
                        placeholder=""
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <button className="text-xl">+</button>
                  </div>{' '}
                  <div className="w-[100%] flex gap-3 items-center">
                     <InputComp
                        placeholder="Wednesday"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <p className="w-[5%]">to</p>
                     <InputComp
                        placeholder=""
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <button className="text-xl">+</button>
                  </div>{' '}
                  <div className="w-[100%] flex gap-3 items-center">
                     <InputComp
                        placeholder="Thursday"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <p className="w-[5%]">to</p>
                     <InputComp
                        placeholder=""
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <button className="text-xl">+</button>
                  </div>{' '}
                  <div className="w-[100%] flex gap-3 items-center">
                     <InputComp
                        placeholder="Friday"
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <p className="w-[5%]">to</p>
                     <InputComp
                        placeholder=""
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <button className="text-xl">+</button>
                  </div>
                  <div className="w-full h-22 mt-4 mb-4 rounded-md p-3 bg-gray-100 flex align-middle  justify-between align items-center">
                     <p className="text-sm text-[#767676] w-[60%]">
                        Upload your certificate to boost yout credibility
                     </p>
                     <button className="w-[40%] h-8 rounded-sm text-white bg-[#3A6AB3]">
                        Upload File
                     </button>
                  </div>
                  <div className="flex align-middle gap-1 mt-4">
                     <button className="w-4 h-4 bg-[#5686E1] text-white rounded-full flex items-center justify-center">
                        +
                     </button>
                     <p className="text-[#5686E1] text-xs font-bold">
                        Add another education
                     </p>
                  </div>
                  <div className="flex items-center justify-between w-full mb-4 mt-4">
                     <Button type="next" btnText="NEXT" onClick={next} />
                  </div>
                  <Button
                     type="signup"
                     btnText="BACK TO LOGIN"
                     onClick={back}
                  />
               </form>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[60%] pr-6 pl-6 hidden lg:flex">
            <img
               className="object-contain w-[66%] mx-auto "
               src={timeManagement}
               alt=""
            />
         </div>{' '}
      </div>
   );
}
