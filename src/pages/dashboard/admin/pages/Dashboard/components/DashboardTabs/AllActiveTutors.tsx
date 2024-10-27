import React from 'react';
import TutorCard from '../TutorCard/TutorCard';
import { tutorArrayAll } from '../../../../../../../constants/AdminDashboard';

function AllActiveTutors() {
   return (
      <div className="w-full">
         {tutorArrayAll.map((tutor, index) => (
            <TutorCard
               key={index}
               img={tutor.img}
               name={tutor.name}
               subject={tutor.subject}
               description={tutor.description}
               verified={tutor.verified}
               // banned={tutor.banned}
               // bannedBy={tutor.bannedby}
               // restricted={tutor.restricted}
               // restrictedBy={tutor.restricted}
            />
         ))}
      </div>
   );
}

export default AllActiveTutors;
