import React, { useState } from 'react';
import {
   InputField,
   TextAreaInput,
   ImageUpload,
   NotificationsCheckbox,
} from '../../atoms';

import { notificationsCheckbox } from '../../../constants/notifications';
import { DeleteModal } from '..';

function AccountSettings() {
   const [isModalOpen, setModalOpen] = useState(false);

   const handleDelete = () => {
      setModalOpen(false); // Close the modal
   };

   const handleCancel = () => {
      setModalOpen(false); // Close the modal
   };
   return (
      <div className="px-12 w-full flex flex-col justify-between">
         <div className="flex justify-between mt-8">
            <div className="w-[75%]">
               <h2 className="font-bold text-xl py-4">Account Settings</h2>
               <div className="flex justify-between">
                  <div className="w-[49%]">
                     <InputField label="First name" placeholder="First name" />
                  </div>
                  <div className="w-[49%]">
                     <InputField label="Last name" placeholder="Last name" />
                  </div>
               </div>
               <InputField
                  type="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
               />
               <InputField label="Username" placeholder="Username" />
            </div>
            <div className="w-[17%] border h flex flex-col justify-center items-center bg-[#F5F7FA] object-contain">
               <ImageUpload />
               <p className="text-[#6E7485] text-xs mx-2">
                  Image size should be under 1MB and image ration needs to be
                  1:1
               </p>
            </div>
         </div>
         <InputField
            label="Title"
            type="wordcount"
            placeholder="Your title, profession or small biography"
         />
         <TextAreaInput
            label="Biography"
            placeholder="Tour title, proffession or small biography"
         />
         <div className="w-[25%] mt-6 flex justify-between">
            <button className="bg-[#3A6AB3] text-white py-2 w-[8rem] mr-5">
               Save Changes
            </button>
            <button
               onClick={() => setModalOpen(true)}
               className="bg-[#CE2020] text-white py-2 w-[8rem]"
            >
               Delete Account
            </button>
         </div>
         <div className="w-full flex justify-between my-16">
            <div className="w-[40%]">
               <h2 className="font-bold text-xl">Notifications</h2>
               <div className="mt-8">
                  {notificationsCheckbox.map((not, index) => (
                     <NotificationsCheckbox text={not} key={index} />
                  ))}
               </div>
               <button className="bg-[#3A6AB3] text-white p-2">
                  Save Changes
               </button>
            </div>
            <div className="w-[45%]">
               <h2 className="font-bold text-xl">Change password</h2>
               <div className="mb-6">
                  <InputField
                     label="Current Password"
                     type="password"
                     placeholder="password"
                  />{' '}
                  <div className="h-4"></div>
                  <InputField
                     label="New Password"
                     type="password"
                     placeholder="password"
                  />{' '}
                  <div className="h-4"></div>
                  <InputField
                     label="Confirm Password"
                     type="password"
                     placeholder="Confirm new password"
                  />
               </div>
               <button className="bg-[#3A6AB3] text-white p-2">
                  Save Changes
               </button>
            </div>
         </div>
         {isModalOpen && (
            <DeleteModal
               closeModal={handleCancel}
               deleteAccount={handleDelete}
            />
         )}
      </div>
   );
}

export default AccountSettings;
