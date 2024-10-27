import React, { useState } from 'react';
import { tutorArrayAll } from '../../../../../constants/AdminDashboard';
import TutorCard from '../Dashboard/components/TutorCard/TutorCard';
import CompleteReport from './component/CompleteReport';
function Reports() {
   const [showReport, setShowRep] = useState(false);
   const showFullReport = () => {
      setShowRep(!showReport);
   };
   return (
      <div className="w-full p-8">
         <div className={`${showReport ? 'hidden' : 'flex flex-col'} w-full `}>
            {tutorArrayAll.map((tutor, index) => (
               <TutorCard
                  onClick={showFullReport}
                  key={index}
                  img={tutor.img}
                  name={tutor.name}
                  subject={tutor.subject}
                  description={tutor.description}
                  verified={tutor.verified}
                  report={true}
               />
            ))}
         </div>
         <div className={`${showReport ? 'flex flex-col' : 'hidden'}`}>
            <TutorCard
               img={tutorArrayAll[1].img}
               name={tutorArrayAll[1].name}
               subject={tutorArrayAll[1].subject}
               description={tutorArrayAll[1].description}
               verified={tutorArrayAll[1].verified}
               report={true}
               completeReport={true}
            />
            <div className="w-full flex flex-col gap-8 mt-12">
               <CompleteReport />
               <CompleteReport />
            </div>
         </div>
      </div>
   );
}

export default Reports;
