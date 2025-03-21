import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * 
 * This component scrolls the window to the top when the route changes.
 * It should be placed inside the Router component in the app's main entry point.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use auto scrolling for faster page transitions
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
