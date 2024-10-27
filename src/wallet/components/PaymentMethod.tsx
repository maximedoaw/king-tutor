import React, { useState } from 'react';
import {
   AiFillCheckCircle,
   AiFillCloseCircle,
   AiOutlineCreditCard,
   AiOutlineLock,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import mobileMoney from '../../assets/images/mobile-money.png';
import orangeMoney from '../../assets/images/orange-money.png';
import expressUnion from '../../assets/images/express-union.png';
import paypal from '../../assets/images/paypal.svg';

export default function PaymentMethod() {
   const [payment, setPayment] = useState('card');
   const [processing, setProcessing] = useState(false);
   const [status, setStatus] = useState('pending');

   function processPayment() {
      setProcessing(true);

      setTimeout(() => {
         setProcessing(false);
      }, 3000);
   }

   return (
      <div className="">
         {!processing && (
            <div className="flex flex-col">
               <div className="bg-[#F5F7FA] py-4 px-10 space-y-5 rounded-3xl">
                  <p className="font-bold">Choose how to pay</p>

                  <div className="flex gap-2 flex-wrap">
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

                           <button
                              className="bg-[#0E1B2E] text-white font-bold rounded-lg py-3"
                              onClick={processPayment}
                           >
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
                           <button
                              className="bg-[#DAF9E6] flex justify-center py-2"
                              onClick={processPayment}
                           >
                              <img
                                 src={paypal}
                                 alt="Paypal"
                                 className="rounded-lg"
                              />
                           </button>
                           <div className="max-w-md">
                              <p className="leading-tight">
                                 By clicking the &quot;Paypal button&quot;
                                 button,you agree to{' '}
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
                           <button
                              className="bg-[#0E1B2E] flex items-center justify-center text-2xl gap-1 text-white font-bold rounded-lg py-3"
                              onClick={processPayment}
                           >
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
                           It&apos;s safe to pay on KingsTutor. All transactions
                           are protected by SSL encryption
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         )}

         {processing && (
            <div>
               {/* LOADER */}
               <div
                  className="bg-white flex flex-col items-center py-14 px-16 gap-14 rounded-3xl"
                  onClick={() => setStatus('success')} // DELETE THIS ONCLICK METHOD
               >
                  <span className="loader"></span>
                  <div className="text-center space-y-1">
                     <h4 className="text-2xl font-bold">Processing payment</h4>
                     <p>Your payment is being processed</p>
                     <p>You will be redirected once the payment is done</p>
                  </div>
               </div>
            </div>
         )}

         {/* SUCCEESS */}
         {status === 'success' && (
            <div className="bg-white flex flex-col items-center py-14 px-16 gap-4 rounded-3xl">
               <AiFillCheckCircle className="text-5xl text-[#2B7CF8]" />
               <div className="text-center space-y-1">
                  <h4 className="text-2xl font-bold">Payment Successful</h4>
                  <p>Your payment was successful</p>
                  <p>You will be redirected in 60 seconds</p>
               </div>
               <a href="#" className="bg-[#2B7CF8] py-2 px-5 text-white">
                  Redirect now
               </a>
            </div>
         )}

         {/* FAIL */}
         {status === 'fail' && (
            <div className="bg-white flex flex-col items-center py-14 px-16 gap-4 rounded-3xl">
               <AiFillCloseCircle className="text-5xl text-[#E52323]" />
               <div className="text-center space-y-1">
                  <h4 className="text-2xl font-bold">Payment Unuccessful</h4>
                  <p>Your payment was unsuccessful</p>
                  <p>You will be redirected in 60 seconds</p>
               </div>
               <a href="#" className="bg-[#2B7CF8] py-2 px-5 text-white">
                  Redirect now
               </a>
            </div>
         )}
      </div>
   );
}
