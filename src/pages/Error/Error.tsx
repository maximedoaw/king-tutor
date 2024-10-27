import { Link } from 'react-router-dom';

export default function Error() {
   return (
      <div className="flex items-center justify-center min-h-screen text-center text-white bg-slate-700 font-mono">
         <div className="">
            <h3 className="text-6xl font-extrabold mb-5">404</h3>
            <p className="text-2xl mb-6">Page Not Found</p>

            <Link
               to="/"
               className="w-fit px-6 py-2 hover:bg-slate-800 border border-slate-800 shadow-inner text-white hover:font-semibold rounded-lg cursor-pointer"
            >
               Goto Home
            </Link>
         </div>
      </div>
   );
}
