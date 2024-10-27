import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
   const handleOverlayClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      // Close the modal if the overlay is clicked (not the content inside)
      if (event.target === event.currentTarget) {
         onClose();
      }
   };

   if (!isOpen) return null;

   return ReactDOM.createPortal(
      <div
         className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
         onClick={handleOverlayClick}
      >
         <div
            className="bg-gray-200 overflow-hidden shadow-xl transform transition-all rounded-lg"
            style={{
               position: 'absolute',
               left: '31em',
            }}
         >
            <div className="">{children}</div>
         </div>
      </div>,
      document.getElementById('root') as HTMLElement,
   );
};

export default Modal;
