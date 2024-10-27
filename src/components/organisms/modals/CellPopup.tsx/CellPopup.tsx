import React from 'react';
interface Props {
   onClose: () => void;
   handleAction: (action: string) => void;
   scheduleData: string[][];
   selectedCell: { rowIndex: number; cellIndex: number };
   cellStatuses: {
      available: string;
      booked: string;
      unavailable: string;
   };
}
function CellPopup({
   onClose,
   scheduleData,
   selectedCell,
   cellStatuses,
   handleAction,
}: Props) {
   const cellStatus = selectedCell
      ? scheduleData[selectedCell.rowIndex][selectedCell.cellIndex]
      : null;

   return (
      <div className="popup mt-4 mr-4 bg-white p-4 rounded-lg shadow-lg z-10">
         {cellStatus === cellStatuses.available && (
            <>
               <button
                  onClick={() => handleAction('markUnavailable')}
                  className="block w-full mb-2 p-2 text-center bg-red-500 text-white rounded"
               >
                  Mark Unavailable
               </button>
               <button
                  onClick={() => handleAction('alwaysMarkAvailable')}
                  className="block w-full p-2 text-center bg-green-500 text-white rounded"
               >
                  Always Mark Available
               </button>
            </>
         )}
         {cellStatus === cellStatuses.unavailable && (
            <>
               <button
                  onClick={() => handleAction('markAvailable')}
                  className="block w-full mb-2 p-2 text-center bg-green-500 text-white rounded"
               >
                  Mark Available
               </button>
               <button
                  onClick={() => handleAction('alwaysMarkUnavailable')}
                  className="block w-full p-2 text-center bg-red-500 text-white rounded"
               >
                  Always Mark Unavailable
               </button>
            </>
         )}
         {cellStatus === cellStatuses.booked && (
            <>
               <button
                  onClick={() => handleAction('markAvailable')}
                  className="block w-full mb-2 p-2 text-center bg-green-500 text-white rounded"
               >
                  Mark Available
               </button>
               <button
                  onClick={() => handleAction('markUnavailable')}
                  className="block w-full p-2 text-center bg-red-500 text-white rounded"
               >
                  Mark Unavailable
               </button>
            </>
         )}
         <button
            onClick={onClose}
            className="block w-full p-2 text-center bg-gray-300 text-gray-700 rounded"
         >
            Close
         </button>
      </div>
   );
}
export default CellPopup;
