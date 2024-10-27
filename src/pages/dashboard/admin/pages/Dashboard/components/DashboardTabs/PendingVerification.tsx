import React from 'react';
import { pending } from '../../../../../../../constants/AdminDashboard';
import TutorCard from '../TutorCard/TutorCard';
function PendingVerification() {
   return (
      <div>
         {pending.map((tutor, index) => (
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

export default PendingVerification;
