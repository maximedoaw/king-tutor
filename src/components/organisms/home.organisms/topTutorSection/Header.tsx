import { HeadersInterface } from '../../../../types/types';
// import styles from './header.module.css';

const Header = ({ text }: HeadersInterface) => {
   return (
      <>
         <h1 className="header text-5xl text-center text-[#414852] text-white font-[system-ui] font-semibold pt-10 p-10">
            {' '}
            {text}{' '}
         </h1>

         <div className="container mx-auto flex text-center sm:flex-none">
            <ul className="headlinks grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 sm:grid-cols-3 justify-center list-none rounded-full gap-8 my-[50px] mx-auto sm:items-center lg:items-start">
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     Chemistry{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     English{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     French{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     Mathermatics{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     Javascript{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="links m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[30px] text-sm h-5 w-5 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     {' '}
                     Python{' '}
                  </a>
               </li>
               <li>
                  <a
                     className="glinks  m-[5px] text-center bg-blue-600 rounded-full text-white font-medium py-[10px] px-[40px] text-sm h-5 w-24 hover:transition-all hover:bg-[#14253f] hover:text-white"
                     href="#"
                  >
                     More{' '}
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Header;
