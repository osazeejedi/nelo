import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ 
  text, 
  delay = 100, 
  initialDelay = 0,
  className = "",
  cursorClassName = "text-primary",
  showCursor = true,
  onComplete = () => {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    
    // Reset if text changes
    if (text !== displayText && currentIndex === 0) {
      setDisplayText('');
    }
    
    // Initial delay before typing starts
    if (currentIndex === 0) {
      timeout = setTimeout(() => {
        setCurrentIndex(1);
        setDisplayText(text.substring(0, 1));
      }, initialDelay);
      return () => clearTimeout(timeout);
    }
    
    // Continue typing
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
    
    return () => clearTimeout(timeout);
  }, [text, delay, currentIndex, displayText, initialDelay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span 
          className={cursorClassName}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypeWriter;
