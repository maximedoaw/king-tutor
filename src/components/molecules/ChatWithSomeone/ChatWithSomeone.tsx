import { Link } from 'react-router-dom';

export default function ChatWithSomeone() {
   return (
      <div className="w-full bg-[#DAF9E6] md:h-16 h-20 flex items-center justify-center py-10">
         <div className="flex flex-col md:flex-row gap-2">
            <p className="font-medium">Need help? We’re always here for you.</p>
            <button className="bg-[#2B7CF8] p-1 text-white rounded-lg border shadow-lg border-white">
               <Link to="/live-class">Chat with a Live Person</Link>
            </button>
         </div>
      </div>
   );
}
