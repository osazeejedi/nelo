import React from 'react';
import { motion } from 'framer-motion';

// SVG icons related to financial crime and cybersecurity
const icons = [
  // Briefcase icon
  {
    viewBox: "0 0 24 24",
    path: "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h2v2h-2V5zm-2 0H8v2h2V5zm10 14H4V9h16v10z",
    color: "#0D9488"
  },
  // Shield/Security icon
  {
    viewBox: "0 0 24 24",
    path: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    color: "#0EA5E9"
  },
  // Document/Compliance icon
  {
    viewBox: "0 0 24 24",
    path: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
    color: "#6366F1"
  },
  // Fingerprint/Forensics icon
  {
    viewBox: "0 0 24 24",
    path: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z",
    color: "#0D9488"
  },
  // Money/Finance icon
  {
    viewBox: "0 0 24 24",
    path: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    color: "#0EA5E9"
  }
];

const FloatingIcons = ({ 
  count = 10, 
  minSize = 30, 
  maxSize = 60,
  className = "absolute inset-0 z-0 overflow-hidden pointer-events-none"
}) => {
  // Generate random positions for icons
  const generateIconPositions = () => {
    const positions = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const icon = icons[i % icons.length];
      const x = Math.random() * 90 + 5; // 5-95% of width
      const y = Math.random() * 90 + 5; // 5-95% of height
      const duration = Math.random() * 20 + 10; // 10-30s
      const delay = Math.random() * 5;
      
      positions.push({ 
        size, 
        icon, 
        x, 
        y, 
        duration, 
        delay, 
        id: i,
        rotate: Math.random() * 360
      });
    }
    
    return positions;
  };
  
  const iconPositions = generateIconPositions();
  
  return (
    <div className={className}>
      {iconPositions.map((item) => (
        <motion.svg
          key={item.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={item.icon.viewBox}
          className="absolute opacity-15"
          style={{
            width: item.size,
            height: item.size,
            left: `${item.x}%`,
            top: `${item.y}%`,
            fill: item.icon.color,
            rotate: `${item.rotate}deg`
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            rotate: [item.rotate, item.rotate + 20, item.rotate],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: item.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: item.delay,
            repeatType: "reverse"
          }}
          whileHover={{
            scale: 1.5,
            opacity: 0.4,
            transition: { duration: 0.3 }
          }}
        >
          <path d={item.icon.path} />
        </motion.svg>
      ))}
    </div>
  );
};

export default FloatingIcons;
