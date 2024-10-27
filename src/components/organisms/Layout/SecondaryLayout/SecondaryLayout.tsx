import React from 'react';
import { Footer, Navbar2 } from '../..';

interface Props {
   children: React.ReactNode;
}

export default function SecondaryLayout({ children }: Props) {
   return (
      <div>
         <Navbar2 />
         {children}
         <Footer />
      </div>
   );
}
