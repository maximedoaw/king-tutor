const Password = () => {
   return (
      <div>
         <p className="font-semibold px-6 mb-6">Update your password</p>
         <form action="" className="flex flex-col gap-y-4 pt-4">
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="oldPassword"
                  className=" pr-8 py-2 flex items-center"
               >
                  Old Password
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="password"
                     name="oldPassword"
                     id="oldPassword"
                     placeholder="Enter old password"
                     className="border w-full rounded-md p-2 py-3"
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="newPassword"
                  className=" pr-8 py-2 flex items-center"
               >
                  New Password
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="password"
                     name="newPassword"
                     id="newPassword"
                     placeholder="Enter new password"
                     className="border w-full rounded-md p-2 py-3"
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="confirmPassword"
                  className=" pr-6 py-2 flex items-center"
               >
                  Verify Password
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="password"
                     name="confirmPassword"
                     id="confirmPassword"
                     placeholder="Confirm password"
                     className="border w-full rounded-md p-2 py-3"
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6 mt-12 lg:pr-10  justify-end">
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

export default Password;
