import React from 'react';
import image from '../../assets/images/Images.png';
import { InputComp as Input } from '../../components/atoms';
export default function BecomeAPartner() {
   return (
      <div className="w-full flex justify-center items-center py-12 md:py-0">
         <div className="w-[80%] flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-[60%] w-[95%]">
               <form action="" className="w-[90%]" id="partner-form">
                  <h2 className="text-3xl font-bold">Become a Partner</h2>
                  <Input
                     placeholder="name of person/company/organisation"
                     // selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <Input
                     placeholder="E-mail"
                     // selectedOption={''}
                     setSelectedOption={() => {}}
                  />
                  <Input
                     placeholder="Phone Number/Whatsapp"
                     // selectedOption={''}
                     setSelectedOption={() => {}}
                  />{' '}
                  <textarea
                     name=""
                     id=""
                     placeholder="Investment Description "
                     className="w-full resize-none h-[6rem] border outline-none mt-2 p-2"
                  ></textarea>{' '}
                  <button className="bg-[#2B7CF8] p-3 rounded-md text-white mt-4">
                     Submit
                  </button>
               </form>
            </div>
            <img
               src={image}
               className="md:w-[40%] w-[95%] object-contain mb-4"
               alt=""
            />
         </div>
      </div>
   );
}
