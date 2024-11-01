import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);

root.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
         <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
   </React.StrictMode>,
);
