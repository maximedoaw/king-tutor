import React, { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import Header from '../../components/atoms/header/Header';
import welcome from '../../assets/images/new-welcome.png';
import SentMessage from './components/SentMessage';
import RecievedMessage from './components/RecievedMessage';

export default function LiveChat() {
   const [message, setMessage] = useState<string>('');
   const [chats, setChats] = useState<React.ReactNode[]>([]);

   function sendMessage() {
      setMessage('');
      console.log(message);

      const send: React.ReactNode = (
         <SentMessage
            key={Math.floor(Math.random() * 1000)}
            message={message}
            time={`${new Date()
               .getHours()
               .toString()
               .padStart(2, '0')}:${new Date()
               .getMinutes()
               .toString()
               .padStart(2, '0')}`}
         />
      );
      setChats((prev) => [...prev, send]);
   }

   return (
      <div className="">
         <Header />

         <div className="max-w-5xl mx-auto my-4">
            {/* FLEXBOX */}
            <div className="flex h-[80vh]">
               {/* CHATBOX */}
               <div className="flex flex-col gap-3">
                  <div className="bg-[#EBF0F7] flex-1 px-6 py-3 rounded-lg flex flex-col gap-5 overflow-auto">
                     <SentMessage
                        message="Hi there! I'm facing some difficulties with
                              my account and could use some help.I can't
                              seem to access my recent session materials, and
                              it's slightly frustrating.Could you please
                              help me resolve this ?"
                        time="08:16 AM"
                     />

                     <RecievedMessage message="Hey there!" time="08:18 AM" />

                     <RecievedMessage
                        message="Hello. I am the Kingstutor personnel who will be accompanying you to solve the issue you have. So, how about you start by telling me exactly what is wrong with your account and the challenges you are facing..."
                        time="08:18 AM"
                     />

                     <SentMessage
                        message="How do I solve the problem ?"
                        time="08:20 AM"
                     />

                     {chats}
                  </div>

                  <div className="bg-[#EBF0F7] rounded-3xl py-2 px-4 flex gap-2 items-center">
                     <div className="flex-1 bg-white rounded-xl flex items-center px-2 gap-2">
                        <input
                           type="text"
                           className="py-1 px-3 rounded-3xl w-full focus:outline-none"
                           placeholder="Some text..."
                           onChange={(e) => setMessage(e.target.value)}
                           value={message}
                        />

                        <LuImagePlus className="text-xl" />
                     </div>
                     <button
                        className="bg-[#2B7CF8] font-bold py-1 px-12 text-white rounded-xl disabled:opacity-40"
                        onClick={sendMessage}
                        disabled={message === ''}
                     >
                        Send
                     </button>
                  </div>
               </div>

               {/* SIDE IMAGE */}
               <div className="flex-1 hidden relative sm:flex items-center px-1">
                  <h4 className="text-2xl absolute left-6 top-16">
                     Chat with us if you have any issues
                  </h4>
                  <img src={welcome} alt="Image" />
               </div>
            </div>
         </div>
      </div>
   );
}
