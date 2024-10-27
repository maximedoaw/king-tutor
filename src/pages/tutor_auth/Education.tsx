/* eslint-disable prettier/prettier */
import { Button, InputComp } from '../../components/atoms';
import graduation from '../../assets/images/graduation.png';
import certificate from '../../assets/images/certificate.png';
import { useNavigate } from 'react-router-dom';

function Education() {
   const navigate = useNavigate();

   //  const handleImageUpload = (file: File) => {
   //     // Handle the uploaded image file here
   //     console.log('Uploaded image:', file);
   //  };
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/description');
   };
   const back = (e: React.MouseEvent) => {
      e.preventDefault();
      navigate('/tutor/certification');
   };
   return (
      <div className="w-full h-screen flex flex-col md:flex-row items-start">
         <div className="bg-[#fff] w-full lg:w-[60%] flex flex-col items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <div className="w-[80%] md:w-[60%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-xl mb-4 font-bold">
                     Education
                  </h2>
                  <p className="text-[#909090] text-left text-sm">
                     Let your students know about the higher education that
                     you’ve completed or are working on.
                  </p>
               </div>
               <form className="w-[80%] md:w-[60%] h-[100%] mb-8">
                  <InputComp
                     placeholder="University"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Degree"
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Degree type"
                     type="dropdown"
                     options={['', '']}
                     selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <InputComp
                     placeholder="Specialization"
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
                     <p className="text-[#5686E1] text-xs font-bold mb-3">
                        Add another education
                     </p>
                  </div>
                  <div className="flex items-center justify-between mb-6 w-full">
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
         <div className="h-full w-[40%] sticky hidden lg:flex">
            <img
               src={certificate}
               className="w-[90%] top-[6rem] object-contain absolute"
               alt=""
            />
            <img
               src={graduation}
               className="w-[65%] top-[15rem] object-contain absolute"
               alt=""
            />
         </div>{' '}
      </div>
   );
}

export default Education;
