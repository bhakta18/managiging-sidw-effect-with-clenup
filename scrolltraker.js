import React, { useEffect } from 'react';

const ScrollTracker = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(`Scroll Position: ${window.scrollY}`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Scroll the page to see the scroll position in the console.</h2>
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default ScrollTracker;
