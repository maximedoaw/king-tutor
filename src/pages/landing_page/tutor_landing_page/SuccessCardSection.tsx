import React from 'react';
import { SuccessCard } from '../../../components/molecules';
import { successCardArray } from '../../../constants/successCards';

function SuccessCardSection() {
   return (
      <div className="p-12 flex flex-col justify-center items-center ">
         <h1 className="font-bold text-3xl mb-14">
            How youll become successful instructor
         </h1>
         <div className="flex flex-col md:flex-row gap-3 w-full justify-evenly items-center">
            {successCardArray.map((item, index) => (
               <SuccessCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  text={item.text}
               />
            ))}
         </div>
      </div>
   );
}

export default SuccessCardSection;
