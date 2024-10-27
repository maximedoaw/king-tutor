/* eslint-disable prettier/prettier */
import { Button, InputComp } from '../../components/atoms';
import certificate from '../../assets/images/certificate.png';
import graduationCap from '../../assets/images/graduationCap.png';
import { useNavigate } from 'react-router-dom';

function TutorCertificate() {
   const navigate = useNavigate();

   //  const handleImageUpload = (file: File) => {
   //     // Handle the uploaded image file here
   //     console.log('Uploaded image:', file);
   //  };
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/education');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/photo');
   };
   return (
      <div className="w-full flex md:flex-row flex-col">
         <div className="bg-[#fff] lg:w-[60%] w-[95%] flex flex-col  items-center ">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <div className="md:w-[60%] w-[80%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-xl mb-4 font-bold">
                     Teaching Certification
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Do you have teaching certificates? If so, describe them to
                     enhance your profile credibility and get more students.
                  </p>
                  <p className="text-[#909090] mt-3 text-left text-sm">
                     I dont have a certificate
                  </p>
               </div>
               <form className="md:w-[60%] w-[80%] h-[100%] mb-8">
                  <InputComp
                     placeholder="Choose Subject"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Certificate"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Description"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Issued By"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <div className="w-[100%] flex gap-3 items-center justify-center">
                     <InputComp
                        placeholder="Year Of Study"
                        type="dropdown"
                        options={['', '']}
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                     <div className="border-t border-dashed border-black w-[20%]"></div>
                     <InputComp
                        placeholder=""
                        type="dropdown"
                        options={['', '']}
                        selectedOption={''}
                        setSelectedOption={() => {}}
                     />
                  </div>
                  <div className="w-full h-[5.5rem] mt-3 mb-3 rounded-md p-2 bg-gray-100 flex align-middle  justify-between align items-center">
                     <p className="text-sm text-[#767676] w-[60%]">
                        Upload your certificate to boost yout credibility
                     </p>
                     <button className="w-[40%] h-8 rounded-sm text-white bg-[#3A6AB3]">
                        Upload File
                     </button>
                  </div>
                  <div className="flex items-center justify-between w-full mt-4 mb-4">
                     <Button type="next" btnText="NEXT" onClick={next} />
                  </div>
                  <Button type="signup" btnText="BACK" onClick={back} />
               </form>
            </div>

            <div className="flex justify-content-center pb-4">
               <p className="mr-4 text-sm">Terms and conditions </p>
               &bull;
               <p className="ml-4 text-sm"> Privacy policy</p>
            </div>
         </div>
         <div className=" h-full w-[40%] relative hidden lg:flex">
            <img
               src={certificate}
               className="w-[100%] top-[8rem] object-contain absolute"
               alt=""
            />
            <img
               src={graduationCap}
               className="w-[75%] top-[15rem] object-contain absolute"
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default TutorCertificate;
