import React, { useState } from 'react';
import Upload from '../../../../../assets/images/upload.png';
import camera from '../../../../../assets/icons/camera.png';
import google from '../../../../../assets/icons/google.png';
import Password from './components/Password';
import General from './components/General';
import Email from './components/Email';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';

export default function Settings() {
   const [general, setGeneral] = useState<boolean>(true);
   const [password, setPassword] = useState<boolean>(false);
   const [email, setEmail] = useState<boolean>(false);
   const [calendar, setCalendar] = useState<boolean>(false);
   const [notifications, setNotifications] = useState<boolean>(false);
   const [active, setActive] = useState<string>('General');
   const showGeneral = () => {
      setPassword(false);
      setEmail(false);
      setCalendar(false);
      setNotifications(false);
      setGeneral(true);
      setActive('General');
   };
   const showPassword = () => {
      setGeneral(false);
      setEmail(false);
      setCalendar(false);
      setNotifications(false);
      setPassword(true);
      setActive('Password');
   };
   const showEmail = () => {
      setGeneral(false);
      setPassword(false);
      setCalendar(false);
      setNotifications(false);
      setEmail(true);
      setActive('Email');
   };
   const showCalendar = () => {
      setGeneral(false);
      setPassword(false);
      setEmail(false);
      setNotifications(false);
      setCalendar(true);
      setActive('Calendar');
   };
   const showNotifications = () => {
      setGeneral(false);
      setPassword(false);
      setEmail(false);
      setCalendar(false);
      setNotifications(true);
      setActive('Notifications');
   };
   return (
      <div className="py-8">
         <p className="text-xl font-bold px-10">Account settings</p>
         <div className="mt-12 px-6 flex">
            <div className="mini-menu bg-slate-200 rounded-lg py-4 px-4 w-1/5 h-full">
               <ul className="flex flex-col items-center justify-around gap-y-4 ">
                  <li
                     className={`hover:cursor-pointer ${
                        active === 'General'
                           ? 'border-b-2 border-blue-500 text-blue-500 pb-3 font-semibold'
                           : ''
                     }`}
                     onFocus={showGeneral}
                  >
                     <button type="button" onClick={() => showGeneral}>
                        General
                     </button>
                  </li>
                  <li
                     className={`hover:cursor-pointer ${
                        active === 'Password'
                           ? 'border-b-2 border-blue-500 text-blue-500 pb-3 font-semibold'
                           : ''
                     }`}
                     onFocus={showPassword}
                  >
                     <button type="button" onClick={() => showPassword}>
                        Password
                     </button>
                  </li>
                  <li
                     className={`hover:cursor-pointer ${
                        active === 'Email'
                           ? 'border-b-2 border-blue-500 text-blue-500 pb-3 font-semibold'
                           : ''
                     }`}
                     onFocus={showEmail}
                  >
                     <button type="button" onClick={() => showEmail}>
                        Email
                     </button>
                  </li>
                  <li
                     className={`hover:cursor-pointer ${
                        active === 'Calendar'
                           ? 'border-b-2 border-blue-500 text-blue-500 pb-3 font-semibold'
                           : ''
                     }`}
                     onFocus={showCalendar}
                  >
                     <button type="button" onClick={() => showCalendar}>
                        Calendar
                     </button>
                  </li>
                  <li
                     className={`hover:cursor-pointer ${
                        active === 'Notifications'
                           ? 'border-b-2 border-blue-500 text-blue-500 pb-3 font-semibold'
                           : ''
                     }`}
                     onFocus={showNotifications}
                  >
                     <button type="button" onClick={() => showNotifications}>
                        Notifications
                     </button>
                  </li>
               </ul>
            </div>
            <div className="w-4/5 px-4 pb-8">
               {general && <General></General>}
               {password && <Password></Password>}
               {email && <Email></Email>}
               {calendar && <Calendar></Calendar>}
               {notifications && <Notifications></Notifications>}
            </div>
         </div>
      </div>
   );
}
