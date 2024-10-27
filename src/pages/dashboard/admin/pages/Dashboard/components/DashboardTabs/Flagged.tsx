import React from 'react';
import { sanctioned } from '../../../../../../../constants/AdminDashboard';
import TutorCard from '../TutorCard/TutorCard';

function Flagged() {
   return (
      <div>
         {sanctioned.map((tutor, index) => (
            <TutorCard
               key={index}
               img={tutor.img}
               name={tutor.name}
               subject={tutor.subject}
               description={tutor.description}
               banned={tutor.banned}
               bannedBy={tutor.bannedby}
               restricted={tutor.restricted}
               restrictedBy={tutor.restricted}
               verified={tutor.verified}
            />
         ))}
      </div>
   );
}

export default Flagged;
