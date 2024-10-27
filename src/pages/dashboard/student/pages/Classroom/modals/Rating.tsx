import { useState } from 'react';
import Modal from './Modal';
import { FaTelegram } from 'react-icons/fa6';

const Rating = ({
   tutorName,
   isOpen,
}: {
   tutorName: string;
   isOpen: boolean;
}) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
   return (
      <div className="">
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="py-7 px-20 bg-gray-100">
               <p>How was your lesson with {tutorName}</p>
               <p>Rate it on a scale of 5</p>
               <div className="flex items-center justify-between my-2 mb-7">
                  <div className="flex items-center gap-x-2">
                     <span className="py-0.5 px-2 bg-red-200 rounded">1</span>
                     <span className="py-0.5 px-2 bg-red-200 rounded">2</span>
                     <span className="py-0.5 px-2 bg-green-100 rounded">3</span>
                     <span className="py-0.5 px-2 bg-green-100 rounded">4</span>
                     <span className="py-0.5 px-2 bg-green-100 rounded">5</span>
                  </div>
                  <button
                     type="button"
                     className="rounded bg-[#2dcdb5] p-3 py-1 text-white"
                  >
                     confirm rating
                  </button>
               </div>
               <p>
                  Leave a review about this {tutorName} to help other students
               </p>
               <label
                  htmlFor="review"
                  className="my-2 flex items-center w-full gap-x-7"
               >
                  <input
                     type="text"
                     name="review"
                     id="review"
                     placeholder="Type your review here"
                     className="py-2 px-8 w-[80%] rounded-lg"
                  />
                  <span className="h-full w-[2.2em]">
                     <FaTelegram
                        color="white"
                        fill="#2b7cf8"
                        className="w-full h-full"
                     ></FaTelegram>
                  </span>
               </label>
            </div>
         </Modal>
      </div>
   );
};

export default Rating;
