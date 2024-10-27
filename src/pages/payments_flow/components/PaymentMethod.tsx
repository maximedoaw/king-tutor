import React, { useState } from 'react';
import {
   AiOutlineCreditCard,
   AiOutlineWallet,
   AiOutlineLock,
   AiFillStar,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import hand from '../../../assets/images/hand.png';
import avatar from '../../../assets/images/Avatar1.png';
import mobileMoney from '../../../assets/images/mobile-money.png';
import orangeMoney from '../../../assets/images/orange-money.png';
import expressUnion from '../../../assets/images/express-union.png';
import paypal from '../../../assets/images/paypal.svg';

export default function PaymentMethod() {
   const [payment, setPayment] = useState('wallet');

   return (
      <div className="flex flex-col gap-5 mb-6">
         <div className="bg-[#F5F7FA] py-12 px-10 space-y-5">
            <p className="font-bold">Choose how to pay</p>

            <div className="flex gap-2">
               <button
                  onClick={() => setPayment('card')}
                  className={`px-4 py-2 text-xl bg-white rounded-lg flex items-center gap-1 ${
                     payment === 'card' && 'border border-black'
                  }`}
               >
                  <AiOutlineCreditCard />
                  <span>Card</span>
               </button>
               <button
                  onClick={() => setPayment('google')}
                  className={`px-4 py-2 text-xl bg-white rounded-lg flex items-center gap-1 ${
                     payment === 'google' && 'border border-black'
                  }`}
               >
                  <FcGoogle />
                  <span>Pay</span>
               </button>
               <button
                  onClick={() => setPayment('paypal')}
                  className={`px-4 py-2 text-xl bg-white rounded-lg flex items-center gap-1 ${
                     payment === 'paypal' && 'border border-black'
                  }`}
               >
                  <img src={paypal} alt="Paypal" className="w-3/4" />
               </button>
            </div>

            <div className="flex flex-col space-y-4">
               <div className="space-y-2 flex flex-col">
                  <p className="text-sm">
                     Recommended for local payment methods
                  </p>

                  <button
                     onClick={() => setPayment('wallet')}
                     className={`px-4 py-2 self-start bg-[#2B7CF8] rounded-lg font-bold text-white ${
                        payment === 'wallet' && 'border border-black'
                     }`}
                  >
                     KingsTutor Wallet
                  </button>

                  <button
                     className={`self-start border p-2 text-[#0E1B2E] bg-white rounded-lg ${
                        payment === 'local' && 'border border-black'
                     }`}
                     onClick={() => setPayment('local')}
                  >
                     Local payment method{' '}
                     {payment === 'local' ? <>&#11205;</> : <>&#11206;</>}
                  </button>

                  <div className="flex items-center gap-1">
                     <input type="checkbox" id="checkbox" />
                     <label htmlFor="checkbox">
                        Save this card for future payments
                     </label>
                  </div>
               </div>

               {/* ------------------------------- DYNAMIC ---------------------- */}
               {/* KINGSTUTOR WALLET */}
               {payment === 'wallet' && (
                  <div className="flex flex-col gap-3">
                     <div className="bg-[#2B7CF8] text-white flex gap-1">
                        <div className="space-y-1 flex flex-col justify-around py-3 px-2">
                           <p className="font-bold text-xl">
                              Pay with your KingsTutor wallet
                           </p>
                           <p className="text-lg">Your wallet balance</p>
                           <p className="text-lg">$ 1000</p>

                           <button className="bg-white px-5 py-1 text-sm flex items-center gap-1 text-[#2B7CF8]">
                              <AiOutlineWallet />
                              <span>Add money to your wallet</span>
                           </button>
                        </div>

                        <div className="bg-white rounded-s-full px-8 py-5 relative">
                           <img src={hand} alt="Hand card" />

                           <div className="absolute text-black leading-tight bottom-7 left-8">
                              <p>Pay easy</p>
                              <p>With our electronic wallet</p>
                           </div>
                        </div>
                     </div>

                     <button className="bg-[#0E1B2E] text-white font-bold rounded-lg py-3">
                        Confirm Payment - $ <span>10.00</span>
                     </button>

                     <div className="max-w-md">
                        <p className="leading-tight">
                           By clicking the &quot;Confirm Payment&quot;
                           button,you agree to{' '}
                           <span className="text-[#2B7CF8]">
                              <a href="#">KingsTutor Refund Policies</a>
                           </span>
                        </p>
                     </div>
                  </div>
               )}

               {/* CARD PAYMENT */}
               {payment === 'card' && (
                  <div className="flex flex-col gap-3">
                     <div>
                        <input
                           type="text"
                           placeholder="0000 0000 0000 0000"
                           className="px-3 py-2 text-lg w-full rounded-lg border-2 border-"
                        />
                     </div>
                     <div className="flex items-center gap-4">
                        <input
                           type="text"
                           placeholder="MM/YY"
                           className="px-3 py-2 text-lg w-full rounded-lg border-2 border-"
                        />
                        <input
                           type="text"
                           placeholder="CVC"
                           className="px-3 py-2 text-lg w-full rounded-lg border-2 border-"
                        />
                     </div>

                     <button className="bg-[#0E1B2E] text-white font-bold rounded-lg py-3">
                        Confirm Payment - $ <span>10.00</span>
                     </button>

                     <div className="max-w-md">
                        <p className="leading-tight">
                           By clicking the &quot;Confirm Payment&quot;
                           button,you agree to{' '}
                           <span className="text-[#2B7CF8]">
                              <a href="#">KingsTutor Refund Policies</a>
                           </span>
                        </p>
                     </div>
                  </div>
               )}

               {/* PAYPAL PAYMENT */}
               {payment === 'paypal' && (
                  <div className="flex flex-col gap-3">
                     <button className="bg-[#DAF9E6] flex justify-center py-2">
                        <img src={paypal} alt="Paypal" className="rounded-lg" />
                     </button>
                     <div className="max-w-md">
                        <p className="leading-tight">
                           By clicking the &quot;Paypal button&quot; button,you
                           agree to{' '}
                           <span className="text-[#2B7CF8]">
                              <a href="#">KingsTutor Refund Policies</a>
                           </span>
                        </p>
                     </div>
                  </div>
               )}

               {/* GOOGLE PAY */}
               {payment === 'google' && (
                  <div className="flex flex-col gap-3">
                     <button className="bg-[#0E1B2E] flex items-center justify-center text-2xl gap-1 text-white font-bold rounded-lg py-3">
                        <span>
                           <FcGoogle />
                        </span>{' '}
                        <span>Pay</span>
                     </button>
                     <div className="max-w-md">
                        <p className="leading-tight">
                           By clicking the &quot;Confirm Payment&quot;
                           button,you agree to{' '}
                           <span className="text-[#2B7CF8]">
                              <a href="#">KingsTutor Refund Policies</a>
                           </span>
                        </p>
                     </div>
                  </div>
               )}

               {payment === 'local' && (
                  <div className="space-y-4">
                     <div className="w-full py-6 text-center bg-white font-bold text-3xl">
                        Local Pay
                     </div>

                     <div className="flex justify-center gap-3">
                        <button>
                           <img src={mobileMoney} alt="Mobile Money" />
                        </button>

                        <button>
                           <img src={orangeMoney} alt="Orange Money" />
                        </button>

                        <button>
                           <img src={expressUnion} alt="Express Union" />
                        </button>
                     </div>
                  </div>
               )}

               {/* -------------------- END OF DYNAMIC ---------------------------- */}

               <p className="flex items-center gap-2 max-w-md">
                  <span className="text-xl">
                     <AiOutlineLock />
                  </span>
                  <span className="leading-tight">
                     It&apos;s safe to pay on KingsTutor. All transactions are
                     protected by SSL encryption
                  </span>
               </p>
            </div>
         </div>

         <div className="bg-[#F5F7FA] py-6 px-4 space-y-5">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#6E7485]">
               <div className="flex gap-2 items-center">
                  <p className="border-2 border-[#2B7CF8] px-1 py-1 flex items-center gap-1 ">
                     <span>
                        <AiFillStar className="text-[#2B7CF8]" />
                     </span>
                     <span>5.0</span>
                  </p>

                  <span>100 reviews</span>
               </div>

               <div className="">
                  <button className="font-bold text-xl px-2 py-1 border-2 border-[#6E7485]">
                     &lt;
                  </button>
                  <button className="font-bold text-xl px-2 py-1 border-2 border-[#6E7485]">
                     &gt;
                  </button>
               </div>
            </div>

            <div>
               <div>
                  <img src={avatar} alt="Profile image" />
               </div>
               <div className="max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ipsam neque quas? Facere atque vel voluptatem eaque
                  laudantium eligendi praesentium illo hic autem beatae dicta,
                  cumque amet delectus harum recusandae?
               </div>
            </div>
         </div>
      </div>
   );
}
