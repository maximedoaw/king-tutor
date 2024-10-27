import React from 'react';

export default function Notifications() {
   return (
      <div className="space-y-3">
         <h2 className="font-bold text-2xl">Notification settings</h2>

         <div className="space-y-4">
            <div className="flex gap-2">
               <div>
                  <input type="checkbox" id="lessons" />
               </div>
               <div>
                  <label htmlFor="lessons" className="text-xl">
                     Lessons and Learning
                  </label>
                  <p>
                     Get updates about your lessons, messages and learning
                     journey
                  </p>
               </div>
            </div>

            <div className="flex gap-2">
               <div>
                  <input type="checkbox" id="tips" />
               </div>
               <div>
                  <label htmlFor="tips" className="text-xl">
                     Tips and discounts
                  </label>
                  <p>
                     Discover tips for learning on KingsTutor and recieve
                     special promotions and discounts
                  </p>
               </div>
            </div>

            <p className="text-xl">KingsTutor Insights</p>
            <div className="flex gap-2">
               <div>
                  <input type="checkbox" id="survey" />
               </div>
               <div>
                  <label htmlFor="survey" className="text-xl">
                     Surverys and interviews
                  </label>
                  <p>
                     Earn rewards by offering feedback on your learning
                     experience on KingsTutor
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
