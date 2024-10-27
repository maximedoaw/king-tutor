import { Button } from '../../components/atoms';
import profileImg from '../../assets/images/profile.png';
import { useNavigate } from 'react-router-dom';
function TutorProfileDesc() {
   const navigate = useNavigate();
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/video');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/photo');
   };
   return (
      <div className="w-full flex ">
         <div className="bg-[#fff] lg:w-[60%] w-[95%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <div className="w-[80%] md:w-[60%] flex flex-col items-left pt-8 ">
                  <h2 className="text-left text-xl mb-4 font-bold ">
                     Profile Description
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Let your students know about the higher education that
                     you’ve completed or are working on.
                  </p>
                  <p className="text-[#5686E1] text-left text-sm font-bold mb-3">
                     Guidelines to get approved
                  </p>
               </div>
               <form className="w-[80%] md:w-[60%] h-[100%] mb-8">
                  <textarea
                     name=""
                     className="w-full h-44 border-[1.5px] p-1 placeholder:text-sm border-gray-300 resize-none mb-2 rounded-md"
                     placeholder="Hello my name is ... and I'm from ..."
                  ></textarea>
                  <div className="w-full h-14 mb-16 rounded-sm bg-[#E4ECFD] flex items-center justify-center pt-2 pb-2">
                     <p className="text-[#6D717A] font-bold">
                        Keep it simple okay... No preasure
                     </p>
                  </div>
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
         <div className=" bg-[#FAFAFB] lg:w-[40%] pr-4 hidden justify-end items-start  lg:flex h-full">
            <img
               className="w-[80%] ml-6 object-contain "
               src={profileImg}
               alt=""
            />
         </div>
      </div>
   );
}

export default TutorProfileDesc;
