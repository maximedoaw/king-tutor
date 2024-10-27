import React from 'react';
import startTeaching from '../../../assets/images/start_teaching.png';
import { startTeachingArr } from '../../../constants/start_teaching';
import Card from '../../../components/molecules/cards/startTeaching/StartTeachingCard';
function StartTeaching() {
   return (
      <div className="w-full flex justify-center bg-white py-16">
         <div className="w-[80%] flex md:flex-row flex-col justify-between ">
            <h2 className="w-full font-bold text-3xl mb-8 py-8 flex md:hidden">
               Why you’ll start teaching on KingsTutor
            </h2>
            <img
               className="md:w-[40%] w-full h-full object-contain mb-8"
               src={startTeaching}
               alt=""
            />
            <div className="md:w-[55%] w-[90%]">
               <h2 className="w-full font-bold text-3xl mb-8 py-8 hidden md:flex">
                  Why you’ll start teaching on KingsTutor
               </h2>

               <p className="w-full text-left mb-8 text-[#595F70] text-xs">
                  Praesent congue ornare nibh sed ullamcorper. Proin venenatis
                  tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
                  vitae nulla a purus mollis venenatis.{' '}
               </p>
               <div className="">
                  {startTeachingArr.map((item, index) => (
                     <Card text={item.text} title={item.title} key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default StartTeaching;
