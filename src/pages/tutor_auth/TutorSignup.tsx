import { Navbar2 } from '../../components/organisms';
import { Breadcrumbs } from '../../components/molecules';
import { useLocation } from 'react-router-dom';

function TutorSignup() {
   const location = useLocation();
   const pathnameSegments = location.pathname.split('/');
   const lastSegment = pathnameSegments[pathnameSegments.length - 1];

   return (
      <div className="w-full flex flex-col">
         <Navbar2 />
         <Breadcrumbs stage={lastSegment} />
      </div>
   );
}

export default TutorSignup;
