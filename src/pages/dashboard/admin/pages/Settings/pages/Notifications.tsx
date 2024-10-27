import React from 'react';

export default function Notifications() {
   return (
      <div className="space-y-3">
         <h2 className="font-bold text-2xl">Notification settings</h2>

         <div className="space-y-4">
            <p className="text-xl">Email notifications</p>
            <div className="flex gap-2">
               <div>
                  <input type="checkbox" id="survey" />
               </div>
               <div>
                  <label htmlFor="survey" className="text-xl">
                     Tutor requests
                  </label>
                  <p>
                     Get updates about your lessons, messages and learning
                     journey
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
