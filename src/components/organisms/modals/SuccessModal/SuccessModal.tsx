import { useState } from 'react';
import Modal from '../Modal';
import bluecheck from '../../../../assets/icons/blueCheck.png';

const SuccessModal = ({
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
               <img src={bluecheck} alt="" className="w-[3em]" />
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

export default SuccessModal;
