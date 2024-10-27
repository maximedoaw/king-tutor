import React from 'react';

export default function Email() {
   return (
      <div className="max-w-xl space-y-4">
         <h2 className="font-bold">Update your Email</h2>

         <form className="">
            <div className="flex flex-col gap-1">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  className="border-2 px-2 py-1 flex-1"
               />
            </div>
         </form>

         <div className="text-white flex justify-end">
            <button className="px-6 py-3 bg-[#2B7CF8]">Save Changes</button>
         </div>
      </div>
   );
}
