/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface AccordionProps {
   title: string;
   content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [height, setHeight] = useState('0px');
   const contentRef = useRef<HTMLDivElement>(null);

   const toggleAccordion = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      if (contentRef.current) {
         setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
      }
   }, [isOpen]);

   return (
      <div className="mb-4 bg-white rounded-lg border border-[#CAD6F1]">
         <button
            className="flex items-center justify-between w-full py-4 px-6 rounded-lg"
            onClick={toggleAccordion}
         >
            <span className="text-base text-[#16194F] text-left font-bold">
               {title}
            </span>
            <div className="text-xl transition-transform duration-300 ease-in-out">
               {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
         </button>
         <div
            ref={contentRef}
            style={{ maxHeight: height, transition: 'max-height 0.5s ease' }}
            className="overflow-hidden"
         >
            <div className="py-4 px-6 text-[#16194F]">
               <p>{content}</p>
            </div>
         </div>
      </div>
   );
};

export default Accordion;
