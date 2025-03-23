import React, { Suspense, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { PageTransition } from './components/animations';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

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

// Create a mapping of route paths to their lazy components for preloading
const routeComponents = {
  '/': Home,
  '/about-us/': About,
  '/services/': Services,
  '/contact/': Contact,
  '/services/seo/': SEOService,
  '/services/web-design/': WebDesignService,
  '/services/hosting/': HostingService,
  '/pricing/': Pricing,
  '/tools/domain-generator/': DomainGenerator,
  '/tools/domain-cover-letter/': DomainCoverLetterGenerator,
  '/disclaimer/': Disclaimer,
  '/terms/': Terms,
  '/privacy/': Privacy,
  '/careers/': Careers,
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
        <Route path="/services/seo/" element={<SEOService />} />
        <Route path="/services/web-design/" element={<WebDesignService />} />
        <Route path="/services/hosting/" element={<HostingService />} />
        <Route path="/pricing/" element={<Pricing />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/tools/domain-generator/" element={<DomainGenerator />} />
        <Route path="/tools/domain-cover-letter/" element={<DomainCoverLetterGenerator />} />
        <Route path="/disclaimer/" element={<Disclaimer />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="/careers/" element={<Careers />} />
        {/* Add a catch-all route that redirects to home */}
        <Route path="*" element={<Home />} />
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
        // @ts-ignore - Force the preload by accessing the component's displayName
        component._init && component._init();
      } catch (e) {
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
