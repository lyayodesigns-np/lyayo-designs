import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { PageTransition } from './components/animations';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Services = React.lazy(() => import('./pages/services'));
const Contact = React.lazy(() => import('./pages/contact'));
const SEOService = React.lazy(() => import('./pages/services/seo'));
const WebDesignService = React.lazy(() => import('./pages/services/web-design'));

// Fallback component for suspense
const PageLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    <div className="loading-spinner"></div>
  </div>
);

// Wrapper component to handle location changes for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition location={location.pathname} mode="fade">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<SEOService />} />
        <Route path="/services/web-design" element={<WebDesignService />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a catch-all route that redirects to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoading />}>
          <AnimatedRoutes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
