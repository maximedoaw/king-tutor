import React from 'react';
import Hero from './Hero';
import JoinUs from './JoinUs';
import BecomeAnInvestor from './BecomeAnInvestor';
import ChatWithSomeone from '../../components/molecules/ChatWithSomeone/ChatWithSomeone';
import { Footer2 } from '../../components/organisms';

function InvestPage() {
   return (
      <div>
         <Hero />
         <JoinUs />
         <BecomeAnInvestor />
         <ChatWithSomeone />
         <Footer2 />
      </div>
   );
}

export default InvestPage;
