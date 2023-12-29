'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${
        isVisible ? 'show' : ''
      } hover:scale-110 hover:shadow-lg`}
      type='button'
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTop;
