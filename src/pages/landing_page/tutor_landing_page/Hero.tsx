import { Link } from 'react-router-dom';
import heroBg from '../../../assets/images/heroImg.png';
import { TransparentNavbar } from '../../../components/organisms';
import { useNavigate } from 'react-router-dom';

function Hero() {
   const navigate = useNavigate();
   return (
      <div className="relative h-screen w-full border">
         <Link to={''}>
            <img
               className="w-full h-full object-cover  object-center absolute top-0 left-0 z-10"
               src={heroBg}
               alt="Background Image"
            />
         </Link>
         <div className="absolute w-full h-full text-white z-20">
            <TransparentNavbar />
            <div className="w-full h-[85%] flex flex-col items-center justify-center mt-12">
               <h1 className="md:text-4xl text-3xl font-bold mb-10 md:w-[55%] w-[70%] text-center">
                  Become an Online tutor Teach anywhere, Anytime
               </h1>
               <p className="md:text-lg text-sm md:w-[35%] w-[80%] text-center mb-10">
                  Get an experienced tutor to shape you career, learn new
                  cultures, skills and achieve your goals with the best online
                  tutors.
               </p>
               {/* <button className="bg-[#0367FF] text-white px-4 w-48 h-12 py-2 mt-4 font-bold">
                  Sign Up
               </button> */}
               <button
                  onClick={() => navigate('/tutor/profile')}
                  className="bg-[#0367FF] w-64 h-12 flex items-center justify-center p-3 rounded-md text-white "
               >
                  Sign Up
               </button>
            </div>
         </div>
      </div>
   );
}

export default Hero;
