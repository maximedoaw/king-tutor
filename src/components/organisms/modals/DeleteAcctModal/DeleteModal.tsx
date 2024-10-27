import React from 'react';
import warnning from '../../../../assets/images/warning.png';

type DeleteModalProps = {
   closeModal: () => void;
   deleteAccount: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
   closeModal,
   deleteAccount,
}) => {
   return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
         <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div
               className="fixed inset-0 transition-opacity"
               aria-hidden="true"
            >
               <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
               <div className="flex flex-col items-center">
                  <img
                     src={warnning}
                     alt="Modal Image"
                     className="w-32 h-32 mb-4"
                  />

                  <p className="text-lg font-bold mb-4">
                     Are you sure you want to do this?
                  </p>

                  <div className="w-full flex justify-center">
                     <button
                        className="py-2 px-4 text-gray-500 mr-2 bg-[#F5F7FA]"
                        onClick={closeModal}
                     >
                        Cancel
                     </button>
                     <button
                        className="py-2 px-4 bg-[#E52323] hover:bg-red-600 text-white"
                        onClick={deleteAccount}
                     >
                        Delete Account
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DeleteModal;
