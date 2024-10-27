import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import profileImage from '../../../../../../assets/images/settings-picture.png';

export default function General() {
   return (
      <div>
         <div className="space-y-5">
            <div className="flex gap-4 flex-wrap">
               <label htmlFor="profileImage">Profile Image</label>
               <div className="flex flex-col sm:flex-row justify-center gap-5">
                  <img
                     src={profileImage}
                     alt="Profile Image"
                     className="h-auto max-w-xs"
                  />

                  <div className="flex flex-col justify-between py-4">
                     <button className="px-8 py-3 rounded-lg bg-[#B0F5EB] flex items-center gap-1">
                        <MdOutlineAddAPhoto className="text-xl" />
                        <span>Upload Photo</span>
                     </button>

                     <div>
                        <p>Maximium size - 2MB</p>
                        <p>JPG or PNG format</p>
                     </div>
                  </div>
               </div>
            </div>

            <form className="space-y-3 max-w-xl">
               <div className="flex flex-col gap-1">
                  <label htmlFor="firstName">First name</label>
                  <input
                     type="text"
                     id="firstName"
                     className="border-2 px-2 py-1 flex-1"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="lastName">Last name</label>
                  <input
                     type="text"
                     id="lastName"
                     className="border-2 px-2 py-1 flex-1"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="phone">Phone number</label>
                  <input
                     type="tel"
                     id="phone"
                     className="border-2 px-2 py-1 flex-1"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="timezone">Time zone</label>
                  <input
                     type="text"
                     id="timezone"
                     className="border-2 px-2 py-1 flex-1"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="accounts">Social Networks:</label>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <FcGoogle className="text-2xl" />
                        <p>
                           Connected as <span>Hovero C.</span>
                        </p>
                     </div>

                     <button className="bg-[#EBF0F7] px-4 py-2 rounded-lg">
                        Disconnect
                     </button>
                  </div>
               </div>
            </form>

            <div className="text-white flex items-center gap-12">
               <button className="px-6 py-4 bg-[#2B7CF8]">Save Changes</button>
               <button className="px-6 py-4 bg-[#CE2020]">Logout</button>
            </div>
         </div>
      </div>
   );
}
