import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  effect = 'fade', // 'fade', 'slide', 'zoom', 'rotate'
  threshold = 0.1,
  duration = 1,
  className = ""
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Different animation effects
  let animationProps = {};

  switch (effect) {
    case 'fade':
      const opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
      animationProps = { opacity };
      break;
    case 'slide':
      const x = useTransform(scrollYProgress, [0, threshold], [100, 0]);
      animationProps = { x, opacity: useTransform(scrollYProgress, [0, threshold], [0, 1]) };
      break;
    case 'zoom':
      const scale = useTransform(scrollYProgress, [0, threshold], [0.8, 1]);
      animationProps = { scale, opacity: useTransform(scrollYProgress, [0, threshold], [0, 1]) };
      break;
    case 'rotate':
      const rotate = useTransform(scrollYProgress, [0, threshold], [10, 0]);
      animationProps = { rotate, opacity: useTransform(scrollYProgress, [0, threshold], [0, 1]) };
      break;
    default:
      const defaultOpacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
      animationProps = { opacity: defaultOpacity };
  }

  return (
    <motion.div
      ref={ref}
      style={{
        ...animationProps,
        transition: `all ${duration}s ease-out`
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
