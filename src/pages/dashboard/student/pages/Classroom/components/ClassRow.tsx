import { useState } from 'react';

interface Row {
   time: string;
   course: string;
}

export default function ClassRow(props: Row) {
   const [menu, setMenu] = useState(false);

   return (
      <div className="flex bg-[#E1E9F4] border border-[#C2D1E7]">
         <div className="border-l border-r border-[#C2D1E7] px-6 py-4 text-xl">
            {props.time}
         </div>
         <div
            className={'flex-1 flex items-center justify-between px-5 relative'}
         >
            <div>
               <p className="font-bold">{props.course}</p>
               <p>{props.time}</p>
            </div>

            <span
               className="text-xl font-bold cursor-pointer"
               onClick={() => setMenu(!menu)}
            >
               &#x22EE;
            </span>

            {menu && (
               <div className="bg-white border absolute right-6 top-12">
                  <ul>
                     <li className="border-b p-2 text-sm font-bold text-center hover:bg-[#3A6AB3] hover:text-white active:bg-[#3A6AB3] nover:text-white">
                        <a href="#">
                           {props.course
                              ? 'Reschedule class'
                              : 'Schedule class'}
                        </a>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </div>
   );
}
