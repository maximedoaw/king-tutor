import React from 'react';

export default function Password() {
   return (
      <div className="max-w-xl space-y-4">
         <h2 className="font-bold">Update your password</h2>

         <form className="space-y-4">
            <div className="flex flex-col gap-1">
               <label htmlFor="newPassword">New Password</label>
               <input
                  type="password"
                  id="newPassword"
                  className="border-2 px-2 py-1 flex-1"
               />
            </div>

            <div className="flex flex-col gap-1">
               <label htmlFor="confirmPassword">Confirm Password</label>
               <input
                  type="password"
                  id="confirmPassword"
                  className="border-2 px-2 py-1 flex-1"
               />
            </div>

            <div className="text-white flex justify-end">
               <button className="px-6 py-3 bg-[#2B7CF8]">Save Changes</button>
            </div>
         </form>
      </div>
   );
}
