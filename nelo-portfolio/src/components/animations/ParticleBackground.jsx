import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ 
  count = 50, 
  colors = ['#0D9488', '#0EA5E9', '#6366F1'], 
  minSize = 2, 
  maxSize = 6,
  minSpeed = 0.5,
  maxSpeed = 2,
  className = "absolute inset-0 z-0 overflow-hidden"
}) => {
  // Generate random particles
  const generateParticles = useCallback(() => {
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * 100; // random position as percentage
      const y = Math.random() * 100;
      const duration = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const delay = Math.random() * 2;
      
      particles.push({ size, color, x, y, duration, delay, id: i });
    }
    
    return particles;
  }, [count, colors, minSize, maxSize, minSpeed, maxSpeed]);
  
  const particles = generateParticles();
  
  return (
    <div className={className}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50
            ],
            y: [
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50
            ],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration * 10,
            ease: "linear",
            repeat: Infinity,
            delay: particle.delay,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Add some larger, slower-moving elements that look like financial data or graphs */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <motion.div
          key={`graph-${index}`}
          className="absolute opacity-5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 60 + 20,
            borderBottom: `2px solid ${colors[index % colors.length]}`,
            borderLeft: `2px solid ${colors[index % colors.length]}`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 15 + index * 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 2,
            repeatType: "reverse"
          }}
        >
          {/* Create a simple graph line */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${colors[index % colors.length]} 50%, transparent 100%)`,
              clipPath: `polygon(0 ${50 + Math.random() * 50}%, 20% ${Math.random() * 100}%, 40% ${Math.random() * 100}%, 60% ${Math.random() * 100}%, 80% ${Math.random() * 100}%, 100% ${Math.random() * 100}%)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleBackground;
