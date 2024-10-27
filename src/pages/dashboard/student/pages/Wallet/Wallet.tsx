import { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import MichaelBoole from '../../../../../assets/images/MichaelBoole.png';
import { EarningsTable } from '../../../../../components/molecules';
import PaymentMethod from './components/PaymentMethod';
import Modal from './Modal';
import starIcon from '../../../../../assets/icons/starIcon.svg';
import messageIcon from '../../../../../assets/icons/messageIcon.svg';
import notifIcon from '../../../../../assets/icons/notificationIcon.svg';
import { X } from 'lucide-react';

export default function Wallet({
   setPage,
}: {
   setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
   const title = 'KingsTutor Wallet';
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [notifications, setNotifications] = useState<boolean>(false);
   return (
      <div>
         <div className="px-6 py-3 sm:flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between shadow hidden">
            <div className="flex flex-col self-start">
               <p className="text-[#6E7485]">{title}</p>
            </div>

            <div className="flex items-stretch gap-2 self-end">
               <div
                  className="flex items-center text-lg bg-[#F5F7FA] px-2 py-1"
                  style={{ position: 'relative' }}
               >
                  <AiOutlineBell
                     className="cursor-pointer"
                     onClick={() => setNotifications(!notifications)}
                  />

                  <span
                     style={{
                        position: 'absolute',
                        right: '.75em',
                        top: '1em',
                     }}
                     className="bg-red-400 w-1.5 h-1.5 rounded-2xl text-xs"
                  ></span>
                  {notifications && (
                     <div className="py-2 p-6 absolute z-10 border right-4 top-8 rounded shadow  w-[24rem] text-base bg-white space-y-3">
                        <span
                           style={{
                              position: 'absolute',
                              top: '.5em',
                              right: '.6em',
                           }}
                           className="hover:cursor-pointer"
                           onClick={() => setNotifications(false)}
                        >
                           <X width={17} height={17}></X>
                        </span>
                        <div className="flex justify-between border-b py-1 px-2">
                           <p>Recent Activity</p>
                           <select
                              className="bg-white"
                              name="recentActivity"
                              id="recentActivity"
                           >
                              <option value="today">Today</option>
                           </select>
                        </div>
                        {/* NOTIFICATIONS */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="">
                              <img
                                 src={messageIcon}
                                 alt="Message icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-2 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Kevin
                                 </span>{' '}
                                 sent you{' '}
                                 <span className="text-base">
                                    {' '}
                                    3 new messages
                                 </span>
                              </p>
                              <p className="text-xs">just now</p>
                           </div>
                        </div>

                        {/* SECOND NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={starIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    John
                                 </span>{' '}
                                 gave you a 5-star rating on your previous class
                              </p>
                              <p className="text-xs">5 mins ago</p>
                           </div>
                        </div>

                        {/* THIRD NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={notifIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Sraboni
                                 </span>{' '}
                                 just booked a class
                              </p>
                              <p className="text-xs">6 mins ago</p>
                           </div>
                        </div>

                        {/* FOURTH NOTIFICATION */}
                        <div className="flex items-center gap-2 hover:bg-[#564FFD] px-2 py-1 cursor-pointer text-[#4E5566] hover:text-white">
                           <div className="w-3/15">
                              <img
                                 src={notifIcon}
                                 alt="Star icon"
                                 className="w-full"
                              />
                           </div>

                           <div className="space-y-1 text-sm">
                              <p>
                                 <span className="font-bold text-base">
                                    Arif
                                 </span>{' '}
                                 just booked a class
                              </p>
                              <p className="text-xs">19 mins ago</p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               <div className="w-10" onClick={() => setPage('settings')}>
                  <img src={MichaelBoole} alt="Profile image" />
               </div>
            </div>
         </div>

         <div className="bg-[#EBF0F7] rounded-md p-10 px-10 m-5 ">
            <div className="flex justify-between items-center ">
               <h1 className="font-bold">My Balance</h1>
               <div className="flex">
                  <button
                     className="text-white p-2 bg-[#2B7CF8] rounded-md w-full"
                     onClick={() => setIsModalOpen(true)}
                  >
                     Add Money
                  </button>
               </div>
            </div>
            <div className="my-3 flex flex-col  gap-y-5">
               <div className="flex justify-between ">
                  <div className="relative">
                     <p>Available Balance</p>
                     <p className="font-extrabold pb-0 mb-0 text-xl">
                        $ 0.00 USD
                     </p>
                     <span className="w-1/3 h-[5px] bg-[#2B7CF8] rounded-md inline-block p-0 m-0 absolute -bottom-2"></span>
                  </div>
               </div>
               <div className="flex justify-between my-3">
                  <div className="relative">
                     <p>Total Balance</p>
                     <p className="font-extrabold pb-0 mb-0 text-xl">
                        $ 0.00 USD
                     </p>
                     <span className="w-1/3 h-[5px] bg-[#2B7CF8] rounded-md inline-block p-0 m-0 absolute -bottom-2"></span>
                  </div>
                  <div className="relative">
                     <p>UnAvailable Balance</p>
                     <p className="font-extrabold pb-0 mb-0 text-xl">
                        $ 0.00 USD
                     </p>
                     <span className="w-1/3 h-[5px] bg-[#2B7CF8] rounded-md inline-block p-0 m-0 absolute -bottom-2"></span>
                  </div>
               </div>
               <p className="text-gray-500 my-2">
                  *The amounts listed here are close approximations. There may
                  be a slight difference due to changes in foreign exchange
                  rates. All amounts are based on US Dollars
               </p>
            </div>
         </div>
         <div className=" m-5 ">
            <p className="font-bold my-2 ">Transaction Hisory</p>
            <EarningsTable />
         </div>

         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <PaymentMethod />
            {/* <ProcessingPayment /> */}
            {/* <PaymentResult success={false} /> */}
         </Modal>
      </div>
   );
}
