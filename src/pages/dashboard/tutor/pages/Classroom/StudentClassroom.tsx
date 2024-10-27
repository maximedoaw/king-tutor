import React, { useState } from 'react';
import NextClass from '../Dashboard/components/NextClass';
import IncomingClasses from './components/IncomingClasses';
import AttendedClasses from './components/AttendedClasses';
import LinkToChat from '../../../../../components/atoms/link/LinkToChat';

export default function StudentClassroom() {
   const [tab, setTab] = useState('all');
   return (
      <div className="px-10 py-10 space-y-5">
         <div className="fixed bottom-[4vh] right-4 z-10">
            <LinkToChat />
         </div>
         <div className="flex justify-between">
            <div>
               <p>Your classroom</p>
            </div>

            <NextClass
               student="John Clinton"
               hours="01"
               minutes="09"
               seconds="09"
               buttonText="Join Class"
            />
         </div>

         <div>
            <ul className="flex gap-3 font-bold">
               <li
                  className={`cursor-pointer ${
                     tab === 'all' ? 'underline' : ''
                  }`}
                  onClick={() => setTab('all')}
               >
                  All
               </li>
               <li
                  className={`cursor-pointer ${
                     tab === 'incoming' ? 'underline' : ''
                  }`}
                  onClick={() => setTab('incoming')}
               >
                  Incoming
               </li>
               <li
                  className={`cursor-pointer ${
                     tab === 'attended' ? 'underline' : ''
                  }`}
                  onClick={() => setTab('attended')}
               >
                  Attended
               </li>
            </ul>
         </div>

         {/* ALL CLASSES */}
         {tab === 'all' && (
            <div className="">
               <IncomingClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
               />
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
               <IncomingClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
               />
            </div>
         )}

         {/* INCOMING CLASSES */}
         {tab === 'incoming' && (
            <div>
               <IncomingClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
               />
               <IncomingClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
               />
            </div>
         )}

         {/* ATTENDED CLASSSES */}
         {tab === 'attended' && (
            <div>
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
               <AttendedClasses
                  tutorName="Jace Kayode"
                  lesson="Javascript Lesson"
                  price="10.00"
                  duration="60 mins"
                  date="Fri, July 24 2023"
                  time="8:30 - 9:30"
                  rated={false}
               />
            </div>
         )}
      </div>
   );
}
