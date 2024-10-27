import React from 'react';
import Hero from './Hero';
import Partner from './Partner';
import PartnerSection from './PartnerSection';
import HowToPartner from './HowToPartner';
import BecomeAPartner from './BecomeAPartner';
import ChatWithSomeone from '../../components/molecules/ChatWithSomeone/ChatWithSomeone';
import { Footer2 } from '../../components/organisms';

export default function PartnerPage() {
   return (
      <div>
         <Hero />
         <Partner />
         <PartnerSection />
         <HowToPartner />
         <BecomeAPartner />
         <ChatWithSomeone />
         <Footer2 />
      </div>
   );
}
