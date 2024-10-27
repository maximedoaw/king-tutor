import React from 'react';
import { Footer2, Navbar } from '../..';

interface Props {
   children: React.ReactNode;
}

export default function PrimaryLayout({ children }: Props) {
   return (
      <div>
         <Navbar />
         {children}
         <Footer2 />
      </div>
   );
}
