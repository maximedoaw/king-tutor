/* eslint-disable prettier/prettier */

import { Logo } from '../../atoms';

export default function Navbar2() {
   // const [nav, setNav] = useState(false);
   const nav = false;
   // function toggleNav() {
   //    setNav((prevState) => !prevState);
   // }
   return (
      <header
         className={`max-w-full bg-[#021C4F] text-white font-bold ${
            nav && 'pb-4'
         } `}
      >
         <div className="max-w-6xl  sm:flex items-center justify-between overflow-hidden px-3">
            <div className="h-[100px] w-52 flex justify-center items-start">
               <Logo />
            </div>
         </div>
      </header>
   );
}
