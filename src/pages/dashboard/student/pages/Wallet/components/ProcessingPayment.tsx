function ProcessingPayment() {
   return (
      <div className="p-3 text-gray-800 flex flex-col items-center gap-y-4">
         <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
         >
            <rect width="60" height="60" fill="url(#pattern0_1750_5799)" />
            <defs>
               <pattern
                  id="pattern0_1750_5799"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
               >
                  <use
                     xlinkHref="#image0_1750_5799"
                     transform="scale(0.0111111)"
                  />
               </pattern>
               <image
                  id="image0_1750_5799"
                  width="90"
                  height="90"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlklEQVR4nO2czU5TQRTH/3TRPgQbAWEp+AC4EIwKca2wVNgJz2BEIj6C8gYasUXXChsr8QNXyAMIfkVUcCHGUDPhkDRNP+bOnblnzu35JZO2t+2dM39Oz5wzdy6AoiiKoiiKoiiKYkUJwDyAVwB+UzPP5+g9xQO9AN4DqLVom/QZJQWlDiLXi62enYJ5C5FP2k2HP6KGI2IjgdBV2KPhqIGDBELvww4NRxkJHTIciWUjQOgIFY5EMxfA+0L8SsRTotTNJr0rWp5ThW6TIWx6LFg0dLShSKGhSh5p2ks6ZuvJIcMROzEWBaUA4YiVmIuCXs/hiA0JRUHRYzhiQ4uCjNCZPSOS5KoHWRnV7UL/4jZWMho6MiKXRUGM5K4oIAoApgE8BbAL4C89rgKYovczJzdFAdEP4F0Hx3lLn8ucXBQFOBbvq2Uo/AKgj9tgiRQsPLmxveEKI5KZTijySbvGbbg0njkKXeE2XBqfHIXe4TZcGoeOQv/hNlwau45Cf+Q2XBqrjkI/4TZcGlOOQl8NZZDJG2fJA8yMOwOgB/IpUMWXROTXofLoAtX/jR2u5iRx76eKz7YyPBXKkNk2Hd9APuijiq+TJ/dxTRh5StwLVPFVKE8+pMcyxeTgv952QhsjFE/MtBH6uq9OlOOfTDOvruQk84iKHpr4ytTMcxVZUZQu5AKAZQDbdbthPwB4AGCc27g8MARg3aIKXAMwyG2sVM4B2EuwrmE+O8pttERP3nNYqfsO4DS38ZJ47rgkWqNQo1hOfLWUbQyMmI0y9+iSkFmAWYp088yyB6Hvcw5gqYlB5lhsbHsQ2qR+UV3cNJfwJe/pjnJT/U6APQ8jABZpH3b9rk7z+g6AYYdz7nsQej+20HE3RfpVthz0SsJiwkfo2AIjRRJ7J+VkOEm3YSQZ+E8AE90yGfpgEsA/x8Gb71226GPcg9DnIZghB09u5tkDFn2tpejDFDuiqXjwNNMeW/RlrmB/68YS/KwnkU07ssxGRkm4JCKLX1Ra9Ci0aQuW/Zps5YVluBDtyS73K4b4H0ljlEls1d2Ds0XHRE98jXz2LLRuDve8CbxVM+dTPG4Cb9V0c3ikMbprWPAs9C3uAcXKiOc8+gz3gGJmxZPQD7kHEjuDtFaRRuQfXDfDS2Mi5erdJe4BSOIieWbSKx5XuA2XyACtwh1ZTHyPNFykZ5hSv2rDvSTm9W3NLhRFURRFURRFUZCe/53pmNcURXP0AAAAAElFTkSuQmCC"
               />
            </defs>
         </svg>

         <p className="font-bold text-lg">Processing Payment</p>
         <p className="text-center">
            Your payment is being processed. You will be redirected once the
            payment is done
         </p>
      </div>
   );
}

export default ProcessingPayment;
