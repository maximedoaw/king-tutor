import React from 'react';
import phone from '../../../../../../assets/images/phone.png';
import stickyNotes from '../../../../../../assets/images/stickyNotes.png';

function CompleteReport() {
   return (
      <div className="border p-4 w-[95%]">
         <div>
            <div className="flex gap-3 ">
               <h2 className="font-medium text-lg">Report by</h2>
               <h4 className="underline ">Viny Tina</h4>
               <p className="text-[#3B414A]">(30 Sept 2023)</p>
            </div>
            <div className="flex gap-3 ">
               <h2 className="font-medium text-lg">Short Reason</h2>
               <h4 className="underline ">Asking for my contact</h4>
            </div>
            <div>
               <h2 className="py-6 font-bold text-xl">Description</h2>

               <p className="text-[#272B31BF] bg-[#F5F7FA] p-3 rounded-xl">
                  One day Vako had enough with the 9-to-5 grind, or more like
                  9-to-9 in his case, and quit his job, or more like got himself
                  fired from his own startup. <br />
                  He decided to work on his dream: be his own boss, travel the
                  world, only do the work he enjoyed, and make a lot more money
                  in the process. No more begging for vacation days and living
                  from paycheck to paycheck. After trying everything from
                  e-commerce stores to professional poker his lucky break came
                  when he started freelance design. Vako fell in love with the
                  field that gives him the lifestyle of his dreams. Vako
                  realizes that people who take courses on Udemy want to
                  transform their lives. Today with his courses and mentoring
                  Vako is helping thousands of people transform their lives,
                  just like he did once....
               </p>
            </div>
            <div>
               <h2 className="py-6 font-bold text-xl">Image Proof</h2>
               <div className="flex w-full gap-8">
                  <img src={phone} alt="" />
                  <img src={stickyNotes} alt="" />
               </div>
            </div>
            <div>
               <h2 className="py-6 font-bold text-xl">Action</h2>
               <div className="text-white px-2 py-1 flex gap-2">
                  <button className="bg-[#2B7CF8] px-2 py-1">
                     Issue warning
                  </button>
                  <button className="bg-[#01E0C0] px-2 py-1">
                     Message Student
                  </button>
                  <button className="bg-[#E52323] px-2 py-1">
                     Suspend Tutor
                  </button>
                  <button className="bg-[#2B7CF8] px-2 py-1">
                     Mark as resolved
                  </button>
               </div>
            </div>
            <div>
               <h2 className="py-6 font-bold text-xl">Confirm warning</h2>
               <div className="text-white px-2 py-1 flex gap-2">
                  <button className="bg-[#2B7CF8] px-2 py-1 rounded-lg">
                     Confirm warning
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CompleteReport;
