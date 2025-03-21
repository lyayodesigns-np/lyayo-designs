import React, { Suspense, createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import { PageTransition } from './components/animations';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Services = React.lazy(() => import('./pages/services'));
const Contact = React.lazy(() => import('./pages/contact'));
const SEOService = React.lazy(() => import('./pages/services/seo'));
const WebDesignService = React.lazy(() => import('./pages/services/web-design'));

// Create a mapping of route paths to their lazy components for preloading
const routeComponents = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/contact': Contact,
  '/services/seo': SEOService,
  '/services/web-design': WebDesignService,
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
