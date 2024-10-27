import React, { useState } from 'react';
import Upload from '../../../components/atoms/Input-Components/uploadImage/UploadImage';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function TutorCertification() {
   const [add, setAdd] = useState(false);

   const generateDateOptions = () => {
      const years = [];
      const currentYear = new Date().getFullYear();
      const earliestYear = 2000;

      for (let i = currentYear; i >= earliestYear; i--) {
         years.push(
            <option key={i} value={i}>
               {i}
            </option>,
         );
      }
      return years;
   };

   const dateOptions = generateDateOptions();

   return (
      <div className="space-y-6 my-4">
         <h4 className="font-bold text-2xl py-3 border-b">
            Certification and Experience
         </h4>

         <p>
            If you recently got certified, add it to your profile to standout
         </p>

         <div className="space-y-2">
            <span
               className="text-[#5686E1] flex items-center gap-2 cursor-pointer font-bold"
               onClick={() => setAdd(true)}
            >
               <AiFillPlusCircle className="text-2xl" />
               Add another education
            </span>

            <span className="text-[#5686E1] flex items-center gap-2 cursor-pointer font-bold">
               <AiFillPlusCircle className="text-2xl" />
               Add another experience
            </span>
         </div>

         {add && (
            <div className="space-y-2">
               <h3 className="font-bold text-xl">Teaching Certification</h3>
               <p>
                  Do you have teaching certificates ? If so,describe them to
                  enhance your profile credibility and get more students
               </p>

               <div className="space-y-3">
                  <select
                     name="subjects"
                     id="subjects"
                     className="px-4 py-2 w-full border border-black border-opacity-30 rounded-lg bg-white"
                  >
                     <option value="" disabled selected hidden>
                        Choose subject
                     </option>
                     <option value="english">English</option>
                     <option value="french">French</option>
                     <option value="spanish">Spanish</option>
                     <option value="hindi">Hindi</option>
                     <option value="mexican">Mexican</option>
                  </select>

                  <select
                     name="certificate"
                     id="certificate"
                     className="px-4 py-2 w-full border border-black border-opacity-30 rounded-lg bg-white"
                  >
                     <option value="" disabled selected hidden>
                        Choose certificate
                     </option>
                     <option value="masters">Masters in English</option>
                     <option value="bachelors">
                        Bachelor&apos;s in English
                     </option>
                  </select>

                  <input
                     type="text"
                     className="px-4 py-2 w-full border border-black border-opacity-30 rounded-lg"
                     placeholder="description"
                  />

                  <input
                     type="text"
                     className="px-4 py-2 w-full border border-black border-opacity-30 rounded-lg"
                     placeholder="issued by"
                  />

                  <div className="space-y-1">
                     <p>Years of study</p>
                     <div className="flex items-center gap-4">
                        <select
                           name="start-year"
                           id="start-year"
                           className="px-4 py-2 border border-black border-opacity-30 rounded-lg bg-white"
                        >
                           <option value="" disabled selected hidden>
                              Start date
                           </option>
                           {dateOptions}
                        </select>

                        <select
                           name="end-year"
                           id="end-year"
                           className="px-4 py-2 border border-black border-opacity-30 rounded-lg bg-white"
                        >
                           <option value="" disabled selected hidden>
                              End date
                           </option>

                           {dateOptions}
                        </select>
                     </div>
                  </div>
               </div>
               <div>
                  <p>Upload your certificate to boost your credibility</p>
                  <Upload />
               </div>
            </div>
         )}
      </div>
   );
}
