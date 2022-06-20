import { useEffect, useState } from 'react';

const { sizes } = require('sizes');

export function checkCurrentWidth() {
  if (window.innerWidth < sizes.mobile) {
    return true;
  } else {
    return false;
  }
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(checkCurrentWidth());
  useEffect(() => {
    function handleResize() {
      setIsMobile(checkCurrentWidth());
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}
