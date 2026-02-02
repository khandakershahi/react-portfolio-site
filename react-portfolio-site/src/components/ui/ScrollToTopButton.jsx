import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
