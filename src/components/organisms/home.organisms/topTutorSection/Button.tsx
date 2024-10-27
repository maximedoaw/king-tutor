import { ButtonInterface } from '../../../../types/types';
import { arrow } from './pics';

const Button = ({ text, buttonIcon, href }: ButtonInterface) => {
   return (
      <>
         <div className="font-bold bg-white mt-8 py-3 px-6 text-center rounded-3xl shadow-3xl flex items-center justify-center gap-2 ">
            <a href={href} className="buttonText no-underline">
               {text}
            </a>
            {buttonIcon && <img src={arrow} className="buttonicon" />}
         </div>
      </>
   );
};

export default Button;
