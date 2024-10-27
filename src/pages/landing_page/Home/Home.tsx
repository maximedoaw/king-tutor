import React from 'react';
import {
   VariousClassesTypes,
   Hero,
   TopTutorSection,
   Faq,
   QualityFeaturesComponent,
   HomeIntermediateComponent,
} from '../../../components/organisms/home.organisms';
import ChatWithSomeone from '../../../components/molecules/ChatWithSomeone/ChatWithSomeone';

import { OurAchievements } from '../../../components/molecules';
import { PrimaryLayout } from '../../../components/organisms';

export default function Home() {
   return (
      <PrimaryLayout>
         <Hero />
         <OurAchievements showTitle={false} />
         <TopTutorSection />
         <VariousClassesTypes />
         <QualityFeaturesComponent />
         <HomeIntermediateComponent />
         <Faq />
         <ChatWithSomeone />
      </PrimaryLayout>
   );
}
