import React from 'react';
import companyEmployee from '../../../assets/images/company-employee.png';
import groupSmileyFriends from '../../../assets/images/group-smiley-friends.png';

export default function Vision() {
   return (
      <div>
         <div className="flex flex-wrap px-4 sm:px-14 lg:px-4 justify-center gap-6">
            <div className="lg:max-w-[40rem] ">
               <img src={companyEmployee} alt="Company Employee" />

               <div className="px-4 py-5 bg-[#E1E9F4] space-y-2">
                  <h3 className="font-bold">
                     <span className="border-b-4 border-red-600">Our</span>{' '}
                     Vision
                  </h3>
                  <p className="text-sm sm:text-base">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Officia velit sint magnam deleniti praesentium soluta
                     tempore ad. Nulla, pariatur placeat eveniet voluptatum
                     vitae exercitationem, at tempore animi sint laboriosam
                     quasi officia nihil distinctio aut necessitatibus dolores
                     fugiat? Maiores numquam, labore culpa commodi reprehenderit
                     dolores consequuntur dolore laboriosam? Est culpa nobis
                     eligendi? Adipisci tempore ea consequatur est! Cumque
                     mollitia laudantium maiores.
                  </p>
               </div>
            </div>{' '}
            <div className="flex flex-col lg:max-w-[40rem]">
               <img src={groupSmileyFriends} alt="Company Employee" />

               <div className="px-4 py-5 bg-[#E1E9F4] space-y-2">
                  <h3 className="font-bold">
                     <span className="border-b-4 border-red-600">Our</span>{' '}
                     Mission
                  </h3>
                  <p className="text-sm sm:text-base">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Officia velit sint magnam deleniti praesentium soluta
                     tempore ad. Nulla, pariatur placeat eveniet voluptatum
                     vitae exercitationem, at tempore animi sint laboriosam
                     quasi officia nihil distinctio aut necessitatibus dolores
                     fugiat? Maiores numquam, labore culpa commodi reprehenderit
                     dolores consequuntur dolore laboriosam? Est culpa nobis
                     eligendi? Adipisci tempore ea consequatur est! Cumque
                     mollitia laudantium maiores.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
