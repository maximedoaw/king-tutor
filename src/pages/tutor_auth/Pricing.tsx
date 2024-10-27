import { Button } from '../../components/atoms';
import pricing from '../../assets/images/pricing.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Pricing() {
   const navigate = useNavigate();
   const [price, setPrice] = useState<number>(3);
   const [warning1, setWarning] = useState<boolean>(false);
   const [warning2, setWarning2] = useState<boolean>(false);
   const next = (e: React.MouseEvent) => {
      e.preventDefault();
      if (price < 3) {
         setWarning(true);
      } else if (price > 50) {
         setWarning2(true);
      } else {
         navigate('/tutor/success');
      }
   };
   const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWarning(false);
      setWarning2(false);
      let tempPrice: number = parseFloat(e.currentTarget.value);
      if (tempPrice < 3) {
         setWarning(true);
      }
      if (tempPrice > 50) {
         setWarning2(true);
      }
      setPrice(tempPrice);
      console.log(tempPrice);
   };
   const increment = (e: React.MouseEvent) => {
      e.preventDefault();
      setWarning(false);
      setWarning2(false);
      if (price < 51) {
         setPrice(price + 3);
      }
      if (price < 3) {
         setWarning(true);
      } else if (price > 50) {
         setWarning2(true);
      }
   };
   const decrement = (e: React.MouseEvent) => {
      e.preventDefault();
      setWarning(false);
      setWarning2(false);
      if (price > 2) {
         setPrice(price - 3);
      }
      if (price < 3) {
         setWarning(true);
      } else if (price > 50) {
         setWarning2(true);
      }
   };
   return (
      <div className="w-full h-[80vh]  flex flex-col md:flex-row">
         <div className="bg-[#fff] w-[95%] md:w-[55%] flex flex-col justify-around items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
               <div className="w-[60%] flex flex-col items-left pt-8">
                  <h2 className="text-left text-xl mb-4 font-bold">Pricing</h2>

                  <p className="text-[#5686E1] text-left text-sm font-bold mb-3">
                     Set your pay rate per hour in USD
                  </p>
               </div>
               <form className="w-[60%] h-[100%] mb-8">
                  <span className="mr-2">$</span>
                  {/* $<span className="pl-1">USD</span> */}
                  <label htmlFor="price">
                     <input
                        name="price"
                        type="number"
                        className="w-16 pl-6 h-8 border-[1.5px] p-1 placeholder:text-sm border-gray-300 resize-none mb-2 rounded-md"
                        value={price}
                        onChange={(e) => changePrice(e)}
                     />
                     <button
                        type="button"
                        className="mx-1 ml-2 bg-[#3A6AB3] rounded w-[2em] font-bold text-white"
                        onClick={(e) => decrement(e)}
                     >
                        -
                     </button>
                     <button
                        type="button"
                        className="mx-1 bg-[#3A6AB3] rounded w-[2em] font-bold text-white"
                        onClick={(e) => increment(e)}
                     >
                        +
                     </button>
                  </label>
                  <label htmlFor="warning" className="block">
                     <span className="ml-2 text-xs text-red-500">
                        {warning1 && 'Price cannot be less than $3'}
                     </span>
                     <span className="ml-2 text-xs text-red-500">
                        {warning2 && 'Price cannot be more than $50'}
                     </span>
                  </label>
                  <div className="w-full p-3 font-bold text-[#6D717A] text-sm mb-32 rounded-sm bg-[#E4ECFD] mt-8 flex items-center justify-center">
                     <p className="">
                        Please note that KingsTutor has 10% of your earnings.
                        Highest amount to be charged is 50$
                     </p>
                  </div>
                  <div className="items-center gap-3 h-30 flex flex-col  mt-3 justify-between w-full">
                     <Button type="next" btnText="NEXT" onClick={next} />
                  </div>
               </form>
               <div className="flex justify-content-center pb-4">
                  <p className="mr-4 text-sm">Terms and conditions </p>
                  &bull;
                  <p className="ml-4 text-sm"> Privacy policy</p>
               </div>
            </div>
         </div>
         <div className=" bg-[#FAFAFB] w-[45%] hidden md:flex items-center justify-end">
            <img className="w-[77%] " src={pricing} alt="" />
         </div>
      </div>
   );
}

export default Pricing;
