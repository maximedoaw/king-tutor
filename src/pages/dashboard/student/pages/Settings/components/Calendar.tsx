import google from '../../../../../../assets/icons/google.png';
const Calendar = () => {
   return (
      <div className="flex h-full">
         <div className="w-full flex gap-x-2 justify-center items-center h-full">
            <img
               src={google}
               alt="google-calendar"
               className="bg-slate-200 p-4"
            />
            <span className="w-1/3">
               Connect your google calendar and synchronize all your lessons
               with your personal schedule
            </span>
            <button
               type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-7"
            >
               Connect to google calendar
            </button>
         </div>
      </div>
   );
};

export default Calendar;
