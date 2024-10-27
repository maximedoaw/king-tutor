/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { faqItems } from '../../../../constants/faq';
import { Accordion } from '../../../molecules';

function Faq() {
   return (
      <div className="container mx-auto w-full flex flex-col items-center pt-[4rem] pb-[4rem] transition-all duration-75">
         <h1 className="text-[30px] font-bold mb-4 text-[#414852] text-center">
            Frequently Asked Questions
         </h1>
         <div className="w-full lg:w-[28%] flex justify-center items-center mb-8">
            <p className=" text-center text-lg px-5">
               If you are not sure whether KingsTutor is suitable for you or
               not, do not worry. We are here to explain everything you might
               want to know.
            </p>
         </div>
         <div className="w-[90%] flex flex-col gap-2]">
            {faqItems.map((item) => (
               <Accordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
               />
            ))}
         </div>
      </div>
   );
}

export default Faq;
