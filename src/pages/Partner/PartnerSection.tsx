import React from 'react';
import uni1 from '../../assets/images/bandung.png';
import uni2 from '../../assets/images/harvard.png';
import uni4 from '../../assets/images/stanford.png';
import uni5 from '../../assets/images/google.png';
import uni6 from '../../assets/images/tokopedia.png';
import uni7 from '../../assets/images/cambrige.png';
import uni8 from '../../assets/images/oxford.png';
import uni9 from '../../assets/images/microsoft.png';
import uni10 from '../../assets/images/amazon.png';
import uni11 from '../../assets/images/samsung.png';

export default function PartnerSection() {
   const university: string[] = [
      uni1,
      uni2,
      uni4,
      uni5,
      uni6,
      uni7,
      uni8,
      uni9,
      uni10,
      uni11,
   ];
   return (
      <div className="w-full flex items-center justify-center">
         <div className="w-[80%] grid grid-cols-2 md:grid-cols-5 gap-12">
            {university.map((img, index) => (
               <img
                  src={img}
                  className="object-contain w-32"
                  alt=""
                  key={index}
               />
            ))}
         </div>
      </div>
   );
}
