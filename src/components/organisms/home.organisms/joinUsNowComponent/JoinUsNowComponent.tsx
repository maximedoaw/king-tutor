import React from 'react';
import { Link } from 'react-router-dom';

export default function JoinUsNowComponent() {
   return (
      <div>
         <div className="bg-[#3A6AB3]">
            <div className="max-w-7xl mx-auto space-y-6 py-12 text-sm sm:text-base">
               <h2 className="text-center text-2xl font-bold text-white">
                  JOIN US
               </h2>
               <p className="text-center text-white max-w-2xl mx-auto px-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum voluptates commodi ducimus distinctio esse aliquid,
                  fuga ullam at nobis quis. Odit aperiam suscipit assumenda
                  adipisci aut est veniam error libero. Harum culpa ex eveniet
                  mollitia sed obcaecati quia nam, cum repellat laudantium,
                  doloribus recusandae tenetur numquam quam repellendus minus
                  nesciunt!
               </p>
               <div className="flex justify-center items-center gap-4 px-8 flex-wrap">
                  <a
                     href="#"
                     className="px-8 font-bold py-3 rounded text-center bg-[#B0F5EB]"
                  >
                     Find a tutor
                  </a>
                  <a
                     href="#"
                     className="py-3 font-bold px-6 rounded text-center bg-[#B0F5EB]"
                  >
                     Become a tutor
                  </a>
                  <Link
                     to="/partner"
                     className="py-3 font-bold px-6 rounded text-center bg-[#B0F5EB]"
                     onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'auto' })
                     }
                  >
                     Become a partner
                  </Link>
                  <Link
                     to="/invest"
                     className="py-3 font-bold px-6 rounded text-center bg-[#B0F5EB]"
                     onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'auto' })
                     }
                  >
                     Become an investor
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
