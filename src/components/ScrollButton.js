import React, { useEffect, useState } from 'react';
import './ScrollButton.css'; // Import custom CSS for ScrollButton

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollBtn"
      className={isVisible ? 'scroll-btn visible' : 'scroll-btn'}
      onClick={scrollToTop}
    >
      &#8679;
    </button>
  );
};

export default ScrollButton;
