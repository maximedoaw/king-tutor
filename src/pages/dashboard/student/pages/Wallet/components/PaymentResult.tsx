function PaymentResult({ success = true }: { success: boolean }) {
   return (
      <div className="p-3 text-gray-800 flex flex-col items-center gap-y-4">
         {success ? (
            <svg
               width="60"
               height="60"
               viewBox="0 0 60 60"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M30 5C16.25 5 5 16.25 5 30C5 43.75 16.25 55 30 55C43.75 55 55 43.75 55 30C55 16.25 43.75 5 30 5ZM25 42.5L12.5 30L16.025 26.475L25 35.425L43.975 16.45L47.5 20L25 42.5Z"
                  fill="#2B7CF8"
               />
            </svg>
         ) : (
            <svg
               width="60"
               height="60"
               viewBox="0 0 60 60"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M30 5C43.825 5 55 16.175 55 30C55 43.825 43.825 55 30 55C16.175 55 5 43.825 5 30C5 16.175 16.175 5 30 5ZM38.975 17.5L30 26.475L21.025 17.5L17.5 21.025L26.475 30L17.5 38.975L21.025 42.5L30 33.525L38.975 42.5L42.5 38.975L33.525 30L42.5 21.025L38.975 17.5Z"
                  fill="#E52323"
               />
            </svg>
         )}

         <p className="font-bold text-lg">
            Payment {success ? 'succesfull' : 'unsuccesfull'}
         </p>
         <p className="text-center">
            Your payment is {success ? 'succesfull' : 'unsuccesfull'}. You will
            be redirected in 60 seconds
         </p>
         {/* The page needs to refresh or redirect the user to the dashboard. Don't use Link fro react-router-dom here. It uses file system routing. Google what this means please. Thanks! (spykelionel) */}
         <a
            href={'/dashboard-student'}
            className="text-white text-center p-4 bg-[#2B7CF8] rounded-md w-full"
            onClick={undefined}
         >
            Redirect now
         </a>
      </div>
   );
}

export default PaymentResult;
