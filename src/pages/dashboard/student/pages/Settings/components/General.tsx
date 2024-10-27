import Upload from '../../../../../../assets/images/upload.png';
import camera from '../../../../../../assets/icons/camera.png';
import google from '../../../../../../assets/icons/google.png';
import { Asterisk } from 'lucide-react';
const General = () => {
   return (
      <div>
         <form action="" className="flex flex-col gap-y-6">
            <div className="form-group w-full flex px-6">
               <label htmlFor="profile-image" className=" pr-8 py-2">
                  Profile Image
               </label>
               <div className="pl-6 flex w-4/5">
                  <div className="w-3/6">
                     <img
                        src={Upload}
                        alt="profil-image"
                        className="rounded-lg w-3/4 h-4/5 mt-4"
                     />
                  </div>
                  <div className="p-4 flex flex-col justify-center gap-y-4 pl-0">
                     <input
                        type="file"
                        name="profile-image"
                        id="profile-image"
                        hidden
                        required
                     />

                     <button
                        type="button"
                        className="rounded-md bg-green-200 p-2"
                     >
                        {' '}
                        <label
                           htmlFor="profile-image"
                           className="w-full flex items-center justify-center gap-x-1"
                        >
                           <img src={camera} className="w-6" alt="" />
                           Upload Photo
                        </label>
                     </button>
                     <div>
                        <p>Maximum size - 2MB</p>
                        <p>JPG or PNG format</p>
                     </div>
                  </div>
               </div>
               {/* <div className="w-2/6 px-8">
                        <img
                           src={Upload}
                           alt="profil-image"
                           className="rounded-lg w-full mt-4"
                        />
                     </div>
                     <div className="p-4 flex flex-col justify-center gap-y-4">
                        <input
                           type="file"
                           name="profile-image"
                           id="profile-image"
                           hidden
                        />

                        <button
                           type="button"
                           className="rounded-md bg-green-200 p-2"
                        >
                           {' '}
                           <label
                              htmlFor="profile-image"
                              className="w-full flex items-center justify-center gap-x-1"
                           >
                              <img src={camera} className="w-6" alt="" />
                              Upload Photo
                           </label>
                        </button>
                        <div>
                           <p>Maximum size - 2MB</p>
                           <p>JPG or PNG format</p>
                        </div>
                     </div> */}
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="firstName"
                  className=" pr-8 py-2 flex items-center"
               >
                  First name{' '}
                  <Asterisk color="red" width={12} height={12}></Asterisk>
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="text"
                     name="firstName"
                     id="firstName"
                     placeholder="Enter first name"
                     className="border w-full rounded-md p-2 py-3"
                     required
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="lastName"
                  className=" pr-8 py-2 flex items-center"
               >
                  Last name
                  <Asterisk color="red" width={12} height={12}></Asterisk>
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="text"
                     name="lastName"
                     id="lastName"
                     placeholder="Enter last name"
                     className="border w-full rounded-md p-2 py-3"
                     required
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="contact"
                  className=" pr-1 py-2 flex items-center"
               >
                  Phone number
                  <Asterisk color="red" width={12} height={12}></Asterisk>
               </label>
               <div className="pl-10 flex w-4/5">
                  <input
                     type="tel"
                     name="contact"
                     id="contact"
                     placeholder="Enter contact"
                     className="border w-full rounded-md p-2 py-3"
                     required
                  />
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <label
                  htmlFor="timeZone"
                  className=" pr-9 py-2 flex items-center"
               >
                  Time zone
                  <Asterisk color="red" width={12} height={12}></Asterisk>
               </label>
               <div className="pl-10 flex w-4/5">
                  <select
                     name="timeZone"
                     id="timeZone"
                     className="w-full border rounded-md p-2 py-3"
                     required
                  >
                     <option value="WAT">WAT</option>
                     <option value="EST">EST</option>
                     <option value="UTC">UTC</option>
                  </select>
               </div>
            </div>
            <div className="form-group w-full flex px-6">
               <p className=" pr-9 py-2 flex items-center">Social networks</p>
               <div className="pl-8 flex w-4/5 social-networks">
                  <div className="flex gap-x-2 items-start">
                     <img src={google} alt="" />
                     <div>
                        <p>Connected as Hovero C.</p>
                        <p>Disconnect</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="form-group w-full flex px-6 gap-x-4">
               <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-7"
               >
                  Save changes
               </button>
               <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-7"
               >
                  {' '}
                  Delete Account
               </button>
            </div>
         </form>
      </div>
   );
};

export default General;
