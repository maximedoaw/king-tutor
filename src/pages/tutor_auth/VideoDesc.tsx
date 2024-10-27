/* eslint-disable prettier/prettier */

import { Button } from '../../components/atoms';
import ImageUpload from '../../components/atoms/Input-Components/uploadButton/UploadButton';
import manProf from '../../assets/images/camera.png';
import videoUpload from '../../assets/images/videoDesc.png';
import think from '../../assets/icons/Idea.png';
import { useNavigate } from 'react-router-dom';
function VideoDesc() {
   const handleImageUpload = (file: File) => {
      // Handle the uploaded image file here
      console.log('Uploaded image:', file);
   };
   const navigate = useNavigate();

   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/availability');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/about');
   };
   return (
      <div className="w-full flex">
         <div className="bg-[#fff] lg:w-[60%] w-[95%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <div className="w-[85%] lg:w-[60%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-[1.5rem] font-bold">
                     Video Description
                  </h2>
                  <p className="text-[#909090] text-left text-[1rem] mb-4">
                     Upload a brief video description of your self and your
                     class... <br />
                     <span className="text-[#3A6AB3] font-bold ">
                        guidelines to get approved.
                     </span>
                  </p>
                  <ImageUpload onImageUpload={handleImageUpload} />
                  <div className="w-full h-16 pt-6 pb-6 mt-10 rounded-sm bg-[#E4ECFD] flex items-center justify-center">
                     <img
                        className="w-[3rem] object-contain"
                        src={think}
                        alt=""
                     />
                     <p className="font-bold text-[0.9rem] text-[#6D717A]">
                        Be lively and friendly.. No pressure
                     </p>
                  </div>
                  <div className="items-center gap-3 h-30 flex flex-col w-full mt-8 mb-4 justify-between">
                     <Button type="next" btnText="NEXT" onClick={next} />
                     <Button
                        type="signup"
                        btnText="BACK TO LOGIN"
                        onClick={back}
                     />
                  </div>
               </div>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4">Terms and conditions </p>
               &bull;
               <p className="ml-4"> Privacy policy</p>
            </div>
         </div>
         <div className="bg-[#FAFAFB] w-[40%] relative mt-12 hidden lg:flex">
            <img
               src={videoUpload}
               alt=""
               className="absolute top-[-8rem] left-0 w-[95%] object-contain"
            />
            <img
               src={manProf}
               alt=""
               className="absolute top-0 left-[8rem] w-[27%] object-contain"
            />
         </div>
      </div>
   );
}

export default VideoDesc;
