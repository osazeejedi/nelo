import React from 'react';
import { motion } from 'framer-motion';

const StaggeredList = ({ 
  children, 
  delayIncrement = 0.1, 
  initialDelay = 0.2,
  duration = 2,
  direction = 'up',
  distance = 30,
  className = ""
}) => {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayIncrement,
        delayChildren: initialDelay
      }
    }
  };

  // Child variants
  const getItemVariants = () => {
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

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          ease: "easeOut"
        }
      }
    };
  };

  // Clone children and wrap each in a motion.div
  const itemVariants = getItemVariants();
  const staggeredChildren = React.Children.map(children, (child, index) => {
    return (
      <motion.div
        key={index}
        variants={itemVariants}
      >
        {child}
      </motion.div>
    );
  });

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {staggeredChildren}
    </motion.div>
  );
};

export default StaggeredList;
