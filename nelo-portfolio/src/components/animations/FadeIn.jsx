import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 2, 
  direction = null, 
  distance = 50,
  className = "" 
}) => {
  // Set initial and animate properties based on direction
  let initial = { opacity: 0 };
  
  if (direction === 'up') {
    initial.y = distance;
  } else if (direction === 'down') {
    initial.y = -distance;
  } else if (direction === 'left') {
    initial.x = distance;
  } else if (direction === 'right') {
    initial.x = -distance;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
