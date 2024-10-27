import React, { useRef } from 'react';
import visa from '../../../../assets/images/Visa.png';
import cards from '../../../../assets/images/Cards.png';
import dots from '../../../../assets/icons/DotsThree.png';
import copyIcon from '../../../../assets/icons/Copy.png';

function VisaCard() {
   const divStyle = {
      backgroundImage: `url(${cards})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   };

   const textToCopyRef = useRef<HTMLParagraphElement | null>(null);
   const copyToClipboard = () => {
      if (textToCopyRef.current) {
         const text = textToCopyRef.current.textContent!;
         const textArea = document.createElement('textarea');
         textArea.value = text;
         document.body.appendChild(textArea);
         textArea.select();
         document.execCommand('copy');
         document.body.removeChild(textArea);
      }
   };
   return (
      <div className="w-[29rem] h-[20rem] px-12 py-8" style={divStyle}>
         <div className="w-full flex justify-between">
            <img src={visa} className="object-contain" alt="" />
            <img src={dots} className="object-contain" alt="" />
         </div>
         <div className="w-[70%] flex justify-between">
            <p ref={textToCopyRef} className="w-full text-2xl text-white">
               4855 **** **** ****
            </p>
            <img
               onClick={copyToClipboard}
               className="object-contain"
               src={copyIcon}
               alt=""
            />
         </div>
         <div className="w-[70%] flex justify-between items-center mt-12">
            <div>
               <h5 className="text-sm text-[#8C89D4]">EXPIRES</h5>
               <p className="text-white text-lg">04/24</p>
            </div>
            <div>
               <h5 className="text-sm text-[#8C89D4]">CARD NAME</h5>
               <p className="text-white text-lg"> Vako Ahmir</p>
            </div>
         </div>
      </div>
   );
}

export default VisaCard;
