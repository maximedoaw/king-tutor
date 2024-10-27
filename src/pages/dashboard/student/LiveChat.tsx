import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LiveChat = () => {
   const [show, setShow] = useState<boolean>(false);
   return (
      <div
         className="flex gap-x-1 items-center"
         style={{ position: 'fixed', bottom: '2.5em', right: '1.5em' }}
      >
         {show && (
            <div className="p-4 py-3 bg-[#bbf7d0] rounded-lg">
               <p>Need help?</p>
               <p className="font-bold">chat live with someone</p>
            </div>
         )}
         <div
            className="p-5 bg-gray-100 rounded-full"
            onFocus={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onMouseEnter={() => setShow(true)}
         >
            <Link to="/chat">
               <MessageSquare fill="#2563eb" color="#2563eb"></MessageSquare>
            </Link>
         </div>
      </div>
   );
};

export default LiveChat;
