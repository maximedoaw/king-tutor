import { useState } from 'react';
import Modal from '../Modal';

const Processing = ({
   title,
   text,
   text2,
   isOpen,
}: {
   title: string;
   text: string;
   text2: string;
   isOpen: boolean;
}) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
   return (
      <div className="">
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="py-7 px-40 pt-14 bg-[#ECEDEE] flex flex-col items-center flex-wrap">
               <p className="font-bold text-2xl my-2">{title}</p>

               <p className="mt-4 ">{text}</p>
               <p className="mb-4 ">{text2}</p>
            </div>
         </Modal>
      </div>
   );
};

export default Processing;
