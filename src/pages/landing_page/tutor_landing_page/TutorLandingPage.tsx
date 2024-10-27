import React from 'react';
import Hero from './Hero';
import SuccessCardSection from './SuccessCardSection';
import StartTeaching from './StartTeaching';
import DontWorry from './DontWorry';

import SuccessStories from './SuccessStories';
import InspireOthers from './InspireOthers';
import { OurAchievements } from '../../../components/molecules';
import { Footer2 } from '../../../components/organisms';
import { QualityFeaturesComponent } from '../../../components/organisms/home.organisms';
import ChatWithSomeone from '../../../components/molecules/ChatWithSomeone/ChatWithSomeone';

function TutorLandingPage() {
   return (
      <div className="bg-[#F0F8FF] w-full">
         <Hero />
         <OurAchievements showTitle={false} />
         <SuccessCardSection />
         <StartTeaching />
         <DontWorry />
         <QualityFeaturesComponent />
         <SuccessStories />
         <InspireOthers />
         <ChatWithSomeone />
         <Footer2 />
      </div>
   );
}

export default TutorLandingPage;
