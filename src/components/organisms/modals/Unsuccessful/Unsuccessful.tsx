import { useState } from 'react';
import Modal from '../Modal';
import { X } from 'lucide-react';

const UnsuccessfulModal = ({
   title,
   text,
   text2,
   buttonText,
   isOpen,
}: {
   title: string;
   text: string;
   text2: string;
   buttonText: string;
   isOpen: boolean;
}) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
   return (
      <div className="">
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="py-7 px-20 bg-[#ECEDEE] flex flex-col items-center flex-wrap">
               {/* <img src={bluecheck} alt="" className="w-[3em]" /> */}
               <span className="p-2 bg-red-500 rounded-full w-[3em]">
                  <X color="white" className="w-full h-full"></X>
               </span>

               <p className="font-bold text-2xl my-2">{title}</p>

               <p className="mt-4 mb-1">{text}</p>
               <p className="mb-4 mt-1">{text2}</p>
               <button className="text-white p-3 bg-[#2B7CF8] mt-2 font-semibold rounded-md px-8">
                  {buttonText}
               </button>
            </div>
         </Modal>
      </div>
   );
};

export default UnsuccessfulModal;
