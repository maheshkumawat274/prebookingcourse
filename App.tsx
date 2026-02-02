
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const navigateTo = (page: PageType) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage onPreBook={() => navigateTo('checkout')} />
      )}
      
      {currentPage === 'checkout' && (
        <CheckoutPage 
          onSuccess={() => navigateTo('success')} 
          onCancel={() => navigateTo('landing')}
        />
      )}

      {currentPage === 'success' && (
        <SuccessPage onHome={() => navigateTo('landing')} />
      )}
    </>
  );
};

export default App;
