/* eslint-disable prettier/prettier */
import React from 'react';
import Arrow from '../../../assets/icons/ArrowForward.png';
import google from '../../../assets/icons/google.png';

interface ButtonProps {
   type: 'signup' | 'login' | 'google' | 'next' | 'upload';
   btnText: string;
   onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ type, btnText, onClick }) => {
   console.log(type);

   const getBackgroundColor = () => {
      switch (type) {
         case 'login':
            return ' bg-[#01CAAD]';
         case 'google':
            return ' bg-white';
         case 'next':
            return ' bg-[#01CAAD]';
         case 'upload':
            return 'bg-[#3A6AB3]';
         default:
            return ' bg-[#00205E]';
      }
   };
   const getButtonClasses = () => {
      let classes = 'text-sm';

      if (type === 'google') {
         classes += ' border-[1.3px] border-solid border-gray-300';
      }

      classes += type === 'login' ? ' w-[50%]' : ' w-full';
      classes += type === 'google' ? ' h-[3rem]' : ' h-[2.5rem]';
      classes += getBackgroundColor();
      classes += type === 'google' ? ' text-[#575757]' : ' text-white';
      classes += ' rounded-lg';
      classes += type === 'google' ? '' : ' shadow-xl';
      classes += ' flex items-center justify-center gap-3';

      return classes;
   };

   const showIcon = () => {
      if (type === 'google') {
         return <img src={google} alt="Circle" />;
      }

      if (type === 'login') {
         return <img src={Arrow} alt="Circle" />;
      }

      return null;
   };

   return (
      <button onClick={onClick} className={getButtonClasses()}>
         {btnText}
         {showIcon()}
      </button>
   );
};

export default Button;
