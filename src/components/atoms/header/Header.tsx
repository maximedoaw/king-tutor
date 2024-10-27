import { Link } from 'react-router-dom';
import logo from '../../../assets/images/KT_logo.png';

export default function Header() {
   return (
      <div className="bg-gradient-to-r from-[#04173D] to-[#002060]">
         <header className="max-w-7xl mx-auto flex justify-between items-center py-1 px-6">
            <div>
               <Link to="/">
                  <img src={logo} alt="logo" />
                  {/* <p>Images</p> */}
               </Link>
            </div>

            <div>
               <select
                  name="language"
                  id="language"
                  className="bg-inherit text-white font-bold"
               >
                  <option value="english">English</option>
                  <option value="french">French</option>
               </select>
            </div>
         </header>
      </div>
   );
}
