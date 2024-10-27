import { useState } from 'react';
import Modal from './Modal';
import { FaTelegram } from 'react-icons/fa6';
import ConfirmLesson2 from '../../../../../../components/organisms/confirmLesson/ConfirmLesson';

const ConfirmLesson = ({ isOpen }: { isOpen: boolean }) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
   return (
      <div className="">
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {/* <div className="py-7 px-20 bg-gray-100">
               <p className="font-bold text-2xl">Confirm this lesson</p>
               <p className="my-4 text-sm">
                  Confirm you had the lesson so that the tutor can receive their
                  funds
               </p>
               <p className="bg-green-50 p-2 my-2 w-fit text-sm">
                  Yes i had the lesson
               </p>
               <p className="bg-green-50 p-2 my-2 w-fit text-sm">
                  No lesson held
               </p>
               <p className="text-sm">
                  Can you give a reason why lesson didn't hold?
               </p>
               <label
                  htmlFor="reason"
                  className="my-2 flex items-center w-full gap-x-7"
               >
                  <textarea
                     name="reason"
                     id="reason"
                     placeholder="Type your review here"
                     className="py-2 px-8 w-[80%] rounded-lg"
                  ></textarea>
                  <span className="h-full w-[2.2em]">
                     <FaTelegram
                        color="white"
                        fill="#2b7cf8"
                        className="w-full h-full"
                     ></FaTelegram>
                  </span>
               </label>
               <button className="rounded-md bg-blue-900 mt-3 px-6 py-1 text-white">
                  submit
               </button>
            </div> */}
            <ConfirmLesson2 />
         </Modal>
      </div>
   );
};

export default ConfirmLesson;
