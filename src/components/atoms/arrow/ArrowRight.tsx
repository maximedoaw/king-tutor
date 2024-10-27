import React from 'react';

function ArrowRight({ color }: { color: string }) {
   return (
      <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M20.25 12H3.75"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M13.5 5.25L20.25 12L13.5 18.75"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}

export default ArrowRight;
