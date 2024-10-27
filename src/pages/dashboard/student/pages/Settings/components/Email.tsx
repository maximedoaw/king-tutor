const Email = () => {
   return (
      <div>
         <p className="font-semibold px-6 mb-6">Update your Email</p>
         <form action="" className="flex flex-col gap-y-4 pt-4">
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="newEmail"
                  className=" pr-8 py-2 flex items-center"
               >
                  New Email
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="email"
                     name="newEmail"
                     id="newEmail"
                     placeholder="Enter new email"
                     className="border w-full rounded-md p-2 py-3"
                  />
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
         </form>
      </div>
   );
};

export default Email;
