import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ 
  end, 
  start = 0, 
  duration = 2, 
  delay = 1,
  prefix = '',
  suffix = '',
  className = ""
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(start + (end - start) * easedProgress));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };
      
      // Delay the start of the animation
      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);
      
      return () => {
        clearTimeout(timer);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, hasAnimated, start, end, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default CountUp;
