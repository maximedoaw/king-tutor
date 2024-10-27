import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import MichaelBoole from '../../assets/images/MichaelBoole.png';
import Admin from './components/Admin';
import tutor from '../../assets/images/classes-img-1.jpg';
import SuperAdmin from './components/SuperAdmin';

export default function ManageAdmin() {
   const [admins] = useState([
      {
         key: 1,
         name: 'Youmbi Fala',
         image: tutor,
         dateAdded: '10/10/23',
         superAdmin: true,
      },
      {
         key: 2,
         name: 'Youmbi Fala',
         image: tutor,
         dateAdded: '10/10/23',
         superAdmin: false,
      },
      {
         key: 3,
         name: 'Youmbi Fala',
         image: tutor,
         dateAdded: '10/10/23',
         superAdmin: false,
      },
   ]);

   const [tab, setTab] = useState('all'); // all, admins, super

   const regularAdmins = admins.filter((admin) => admin.superAdmin === false);
   const superAdmins = admins.filter((admin) => admin.superAdmin === true);

   const renderedAdmins = admins.map((admin) => (
      <Admin
         key={admin.key}
         image={admin.image}
         dateAdded={admin.dateAdded}
         name={admin.name}
         superAdmin={admin.superAdmin}
      />
   ));

   const renderedRegularAdmins = regularAdmins.map((admin) => (
      <Admin
         key={admin.key}
         image={admin.image}
         dateAdded={admin.dateAdded}
         name={admin.name}
         superAdmin={admin.superAdmin}
      />
   ));

   const renderedSuperAdmins = superAdmins.map((admin) => (
      <Admin
         key={admin.key}
         image={admin.image}
         dateAdded={admin.dateAdded}
         name={admin.name}
         superAdmin={admin.superAdmin}
      />
   ));

   return (
      <div className="">
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">Good morning</p>
               <p className="text-xl font-bold">
                  Messages <span>(3)</span>
               </p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               <div className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1">
                  <AiOutlineBell />
               </div>

               <div className="w-10">
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         <div className="mx-10 my-6 space-y-6">
            <h3 className="text-2xl font-bold">Here are our admins</h3>

            <ul className="flex max-w-xl">
               <li
                  className={`py-2 flex-1 text-center cursor-pointer ${
                     tab === 'all' && 'border-b-4 border-[#2B7CF8]'
                  }`}
                  onClick={() => setTab('all')}
               >
                  All admins
               </li>
               <li
                  className={`py-2 flex-1 text-center cursor-pointer ${
                     tab === 'admins' && 'border-b-4 border-[#2B7CF8]'
                  }`}
                  onClick={() => setTab('admins')}
               >
                  Admins
               </li>
               <li
                  className={`py-2 flex-1 text-center cursor-pointer ${
                     tab === 'super' && 'border-b-4 border-[#2B7CF8]'
                  }`}
                  onClick={() => setTab('super')}
               >
                  Super Admins
               </li>
            </ul>

            <div className="space-y-4">
               {tab === 'all' && renderedAdmins}
               {tab === 'admins' && renderedRegularAdmins}
               {tab === 'super' && (
                  <>
                     <SuperAdmin
                        dateAdded="10/10/23"
                        image={tutor}
                        name="Super Man"
                        superAdmin={true}
                     />
                     {renderedSuperAdmins}
                  </>
               )}
            </div>
         </div>
      </div>
   );
}
