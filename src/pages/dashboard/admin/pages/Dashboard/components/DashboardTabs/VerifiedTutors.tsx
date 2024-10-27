import React from 'react';
import TutorCard from '../TutorCard/TutorCard';
import { verified } from '../../../../../../../constants/AdminDashboard';

function VerifiedTutors() {
   return (
      <div>
         {verified.map((tutor, index) => (
            <TutorCard
               key={index}
               img={tutor.img}
               name={tutor.name}
               subject={tutor.subject}
               description={tutor.description}
               verified={tutor.verified}
            />
         ))}
      </div>
   );
}

export default VerifiedTutors;
