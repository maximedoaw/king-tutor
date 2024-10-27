import React from 'react';

export default function TutorAbout() {
   return (
      <div className="space-y-6 my-4">
         <h4 className="font-bold text-2xl py-3 border-b">About</h4>
         <p>
            Write it in the language you&apos;ll be teaching and make sure to
            follow our{' '}
            <a href="#" className="font-bold text-[#3A6AB3]">
               guidelines
            </a>{' '}
            to get approved
         </p>

         <textarea
            name="about"
            className="px-4 py-2 bg-[#F5F7FA] rounded-lg w-full"
            id="about"
            cols={30}
         ></textarea>
      </div>
   );
}
