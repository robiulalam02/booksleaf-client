import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left of the page
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;