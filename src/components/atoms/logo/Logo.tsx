import { Link } from 'react-router-dom';
import logo2 from '../../../assets/images/KT_logo.png';

function Logo() {
   return (
      <div className=" h-20 w-48 flex justify-start rounded-b-3xl sm:justify-center   sm:m-auto">
         <Link to={'/'}>
            <img src={logo2} alt="logo" />
         </Link>
      </div>
   );
}

export default Logo;
