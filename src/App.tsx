import React, { Suspense, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { PageTransition } from './components/animations';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';
import ThemeProvider from './context/ThemeProvider';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/home/Home'));
const About = React.lazy(() => import('./pages/about/About'));
const Services = React.lazy(() => import('./pages/services/Services'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const SEOService = React.lazy(() => import('./pages/services/seo/SEO'));
const WebDesignService = React.lazy(() => import('./pages/services/web-design'));
const HostingService = React.lazy(() => import('./pages/services/hosting/Hosting'));
const Pricing = React.lazy(() => import('./pages/pricing/Pricing'));
const DomainGenerator = React.lazy(() => import('./pages/tools/domain-generator/DomainGenerator'));
const DomainCoverLetterGenerator = React.lazy(() => import('./pages/tools/domain-cover-letter/DomainCoverLetter'));
const Disclaimer = React.lazy(() => import('./pages/disclaimer/Disclaimer'));
const Terms = React.lazy(() => import('./pages/terms/Terms'));
const Privacy = React.lazy(() => import('./pages/privacy/Privacy'));
const Careers = React.lazy(() => import('./pages/careers/Careers'));
const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio'));
const WriteForUs = React.lazy(() => import('./pages/write-for-us/WriteForUs'));
const NotFound = React.lazy(() => import('./pages/not-found/NotFound'));}

// Create a mapping of route paths to their lazy components for preloading
const routeComponents = {
  '/': Home,
  '/about-us/': About,
  '/services/': Services,
  '/contact/': Contact,
  '/search-engine-optimization/': SEOService,
  '/services/web-design/': WebDesignService,
  '/hosting-with-us/': HostingService,
  '/pricing/': Pricing,
  '/domain-name-generator/': DomainGenerator,
  '/services/how-to-register-a-com-np-domain-in-nepal/': DomainCoverLetterGenerator,
  '/disclaimer/': Disclaimer,
  '/terms/': Terms,
  '/privacy/': Privacy,
  '/careers/': Careers,
  '/portfolio/': Portfolio,
  '/write-for-us/': WriteForUs,
  '/404/': NotFound,
};

// Create a context for route preloading
interface RoutePreloadContextType {
  preloadRoute: (path: string) => void;
}

const RoutePreloadContext = createContext<RoutePreloadContextType>({
  preloadRoute: () => {},
});

// Hook to use the route preload context
export const useRoutePreload = () => useContext(RoutePreloadContext);

// Fallback component for suspense
const PageLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    <LoadingSpinner size="large" />
  </div>
);

// Wrapper component to handle location changes for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition location={location.pathname} mode="fade">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/search-engine-optimization/" element={<SEOService />} />
        <Route path="/services/web-design/" element={<WebDesignService />} />
        <Route path="/hosting-with-us/" element={<HostingService />} />
        <Route path="/pricing/" element={<Pricing />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/domain-name-generator/" element={<DomainGenerator />} />
        <Route path="/services/how-to-register-a-com-np-domain-in-nepal/" element={<DomainCoverLetterGenerator />} />
        <Route path="/disclaimer/" element={<Disclaimer />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/write-for-us/" element={<WriteForUs />} />
        {/* Add a catch-all route that shows the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

// Route preloader provider component
const RoutePreloadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preloadedRoutes, setPreloadedRoutes] = useState<Set<string>>(new Set());
  
  // Function to preload a route
  const preloadRoute = (path: string) => {
    if (preloadedRoutes.has(path) || !routeComponents[path as keyof typeof routeComponents]) {
      return;
    }
    
    // Start preloading the component
    const component = routeComponents[path as keyof typeof routeComponents];
    if (component) {
      // Trigger the dynamic import by accessing the component
      // This will cause webpack to load the chunk
      try {
        // @ts-expect-error - Force the preload by accessing the component's displayName
        if (component._init) component._init();
      } catch {
        // Silently fail if component doesn't support this method
      }
      
      setPreloadedRoutes(prev => new Set(prev).add(path));
    }
  };
  
  return (
    <RoutePreloadContext.Provider value={{ preloadRoute }}>
      {children}
    </RoutePreloadContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RoutePreloadProvider>
          <ScrollToTop />
          <Suspense fallback={<PageLoading />}>
            <AnimatedRoutes />
          </Suspense>
        </RoutePreloadProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
