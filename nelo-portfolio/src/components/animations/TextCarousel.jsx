import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextCarousel = ({ 
  texts = [], 
  interval = 3000, 
  initialDelay = 0,
  className = "",
  textClassName = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialDelay, setIsInitialDelay] = useState(true);
  
  useEffect(() => {
    // Handle initial delay
    if (isInitialDelay) {
      const initialTimer = setTimeout(() => {
        setIsInitialDelay(false);
      }, initialDelay);
      
      return () => clearTimeout(initialTimer);
    }
    
    // Set up rotation interval
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    
    return () => clearTimeout(timer);
  }, [currentIndex, interval, initialDelay, isInitialDelay, texts.length]);
  
  // Don't render anything if no texts
  if (texts.length === 0) return null;
  
  // Don't start animation until initial delay is over
  if (isInitialDelay) {
    return (
      <div className={className}>
        <div className={textClassName}>{texts[0]}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={textClassName}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextCarousel;
