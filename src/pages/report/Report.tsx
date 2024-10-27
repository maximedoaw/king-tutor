import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdVerifiedUser } from 'react-icons/md';
import { LiaUserGraduateSolid } from 'react-icons/lia';
import Header from '../..//components/atoms/header/Header';
import ImageUpload from '../../components/atoms/Input-Components/uploadButton/UploadButton';
import flag from '../../assets/images/flag.png';
import sideImage from '../../assets/images/report-img.png';

export default function Report() {
   const handleImageUpload = (file: File) => {
      // Handle the uploaded image file here
      console.log('Uploaded image:', file);
   };

   const [submit, setSubmit] = useState(false);

   return (
      <div className="relative">
         {/* ---------- POPUP ------------ */}
         {submit === true && (
            <div
               className="w-screen h-full absolute flex justify-center items-start bg-black bg-opacity-50 pt-16 z-10"
               onClick={() => setSubmit(false)}
            >
               <div
                  className="px-6 flex sticky top-[20%]"
                  onClick={(e) => e.stopPropagation()}
               >
                  <div className="w-full bg-white rounded-lg px-6 py-8 flex flex-col gap-5 items-center">
                     <AiFillCheckCircle className="text-[#2B7CF8] text-5xl" />

                     <div className="space-y-2">
                        <h3 className="text-xl font-bold text-center">
                           Report successfully submited
                        </h3>

                        <p className="max-w-lg text-center">
                           We will reveiw your report promptly and take
                           appropriate action to address the issue. Please note
                           that we may need to contact you for additional
                           information if required
                        </p>
                     </div>

                     <button className="py-2 px-4 rounded bg-[#2B7CF8] text-white font-bold">
                        Back to Dashboard
                     </button>
                  </div>
               </div>
            </div>
         )}

         <Header />

         <div className="max-w-6xl mx-auto">
            <div className="py-10 flex flex-wrap-reverse">
               {/* FIRST FLEX ITEM */}
               <div className="space-y-6 max-w-xl px-4">
                  <h1 className="text-[#B71C1C] font-bold text-3xl">
                     Report Form
                  </h1>

                  <p className="text[#8C94A3] opacity-70">
                     We strive to maintain a safe and productive learning
                     environment for all our students.If you have encountered
                     any issues or concerns with one of our tutors,we encourage
                     you to report them using this form. Your feedback is
                     valuable to us, and we take all reports seriously.
                  </p>

                  <div>
                     <div className="flex gap-2">
                        <span className="font-bold">Report tutor:</span>
                        <div className="flex flex-col items-center gap-1">
                           <div className="flex items-center gap-1 leading-none">
                              <span className="font-bold">Jagwa E.</span>
                              <span>
                                 <img src={flag} alt="Flag" className="w-4" />
                              </span>
                              <span>
                                 <MdVerifiedUser className="text-[#2B7CF8]" />
                              </span>
                           </div>
                           <span className="flex items-center gap-2 leading-none text-sm text-[#8C94A3]">
                              <LiaUserGraduateSolid />{' '}
                              <span>Teaches Javascript</span>
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <h3 className="text-xl">Select a reason for reporting</h3>

                     <select
                        name="reason"
                        id="reason"
                        className="bg-[#EBEBFF] text-[#564FFD] py-3 px-2 font-bold"
                     >
                        <option value="contact">Asking for my contact</option>
                        <option value="language">
                           Use of improper or obscene language
                        </option>
                        <option value="nudity">
                           Nudity or perverse behaviour
                        </option>
                        <option value="harassment">
                           Inappopriate behaviour or harassment
                        </option>
                        <option value="langauge">
                           Lack of knowledge of the language being taught
                        </option>
                        <option value="unprofessional">
                           Unprofessional behaviour
                        </option>
                        <option value="other">Other (*precise)</option>
                     </select>

                     <p>Add images or proof (*optional)</p>

                     <ImageUpload onImageUpload={handleImageUpload} />
                  </div>

                  <div className="space-y-2">
                     <h4 className="text-lg">More details (*optional)</h4>
                     <textarea
                        name="details"
                        id="details"
                        cols={30}
                        rows={5}
                        placeholder="Type your review here"
                        className="bg-[#F5F7FA] p-4"
                     ></textarea>
                  </div>

                  <p>
                     By submitting this form,you acknowledge that the
                     information provided is accurate and truthful to the best
                     of your knowledge.We will review your report promptly and
                     take appropriate action to address the issue.Please note
                     that we may need to contact you for additional information
                     if required.
                  </p>

                  <button
                     className="bg-[#2B7CF8] text-white rounded-lg py-2 px-5"
                     onClick={() => setSubmit(true)}
                  >
                     Submit report
                  </button>
               </div>

               {/* SECOND FLEX ITEM */}
               <div className="flex-1 px-5 sm:sticky sm:top-5 self-end">
                  <p className="font-bold text-2xl text-[#404040]">
                     Report defaulters
                  </p>
                  <p className="text-4xl font-bold text-[#6000F7]">
                     Let&apos;s keep Kingstutor safe
                  </p>

                  <img src={sideImage} alt="Cover image" />
               </div>
            </div>
         </div>
      </div>
   );
}
