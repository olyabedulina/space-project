import { useState, useEffect } from 'react';

export const breakpoints = {
  large: 1248,
  small: 768,
  xs: 360,
};

export const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    isMobile: false,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        isMobile: window.innerWidth < breakpoints.small,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
