/* eslint-disable prettier/prettier */
import { Button } from '../../components/atoms';
import ImageUpload from '../../components/atoms/Input-Components/uploadButton/UploadButton';
import manProf from '../../assets/images/manProf.png';
import photoUpload from '../../assets/images/photoUpload.png';
import { useNavigate } from 'react-router-dom';
function ProfileComp() {
   const navigate = useNavigate();

   const handleImageUpload = (file: File) => {
      // Handle the uploaded image file here
      console.log('Uploaded image:', file);
   };
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/certification');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/about');
   };
   return (
      <div className="w-full flex flex-col lg:flex-row">
         <div className="bg-[#fff] w-[95%] lg:w-[60%] flex flex-col justify-center items-center">
            <div className="w-[100%] flex flex-col justify-center items-center m-auto">
               <div className="w-[80%] md:w-[60%] flex flex-col items-left pt-8 m-auto">
                  <h2 className="text-left text-[1.5rem] font-bold">
                     Profile photo
                  </h2>
                  <p className="text-[#909090] text-left text-[1rem] mb-4">
                     Try to make a good first impression, tutors who look
                     friendly and professional get the most students
                  </p>
                  <div className="w-full md:w-[70%] m-auto">
                     <ImageUpload onImageUpload={handleImageUpload} />
                  </div>
                  <div className="items-center gap-3 h-30 flex flex-col w-full mt-10 mb-4 justify-between">
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
         <div className="bg-[#FAFAFB] w-[40%] relative mt-12 hidden lg:flex h-full justify-center items-center">
            <img
               src={manProf}
               alt=""
               className="absolute top-0 left-[4rem] w-[30%]"
            />
            <img
               src={photoUpload}
               alt=""
               className="absolute top-0 left-0 w-[90%]"
            />
         </div>
      </div>
   );
}

export default ProfileComp;
