const Notifications = () => {
   return (
      <div>
         <p className="font-semibold px-6 mb-6">Notification settings</p>
         <p className="font-semibold px-6 mb-2">Email notifications</p>
         <div className="flex gap-x-3 px-6 mb-4">
            <input
               type="checkbox"
               name=""
               id="lessons"
               checked
               className="w-6 border-blue-500 outline-blue-500"
               style={{ position: 'relative', top: '-.5em' }}
            />
            <div>
               <p>Lessons and learning</p>
               <p>
                  Get updates about your lessons, messages, and learning
                  journey.
               </p>
            </div>
         </div>
         <div className="flex gap-x-3 px-6 mb-4">
            <input
               type="checkbox"
               name=""
               id=""
               className="w-6 border-blue-500 outline-blue-500"
               style={{ position: 'relative', top: '-.5em' }}
            />
            <div>
               <p>Tips and discounts</p>
               <p>
                  Discover tips for learning on Kings Tutor and recieve special
                  promotions and discounts.
               </p>
            </div>
         </div>
         <p className="font-semibold px-6 mb-2">Kings Tutor Insights</p>
         <div className="flex gap-x-3 px-6">
            <input
               type="checkbox"
               name="surveys"
               id="surveys"
               className="w-6 border-blue-500 "
               style={{ position: 'relative', top: '-.5em' }}
            />
            <div>
               <p>Surveys and interviews</p>
               <p>
                  Earn rewards by offering feedback on your learning experience
                  on Kings Tutor.
               </p>
            </div>
         </div>
         <div className="form-group w-full flex px-6 mt-6 lg:pr-20  justify-end">
            <button
               type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-7"
            >
               Save changes
            </button>
         </div>
      </div>
   );
};

export default Notifications;
