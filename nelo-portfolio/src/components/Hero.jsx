import React, { useState, useEffect } from 'react';
import neloImage from '../assets/nelo.svg';
import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from './animations';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="hero" className="min-h-[90vh] sm:min-h-screen flex items-center bg-dark pt-16">
      <div className="container mx-auto px-4 py-8 sm:py-16 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="order-2 md:order-1">
          <StaggeredList 
            delayIncrement={0.1} 
            initialDelay={0.2} 
            direction="up" 
            distance={isMobile ? 20 : 30}
          >
            <div className="inline-block px-2 sm:px-3 py-1 bg-primary/20 text-primary rounded-full mb-3 sm:mb-4 text-sm sm:text-base">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                10+ Years Experience
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-3 sm:mb-4">
              Chinelo Vivian Opara
              <span className="block text-xl sm:text-2xl md:text-3xl text-primary mt-1 sm:mt-2">
                Cybersecurity Analyst
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg">
              Protecting digital assets and securing networks with expertise in threat detection, 
              vulnerability assessment, and security strategy implementation.
            </p>
            
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <motion.a 
                href="#resume" 
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(13, 148, 136, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-secondary text-secondary font-medium rounded-md hover:bg-secondary/10 transition-colors text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </StaggeredList>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <FadeIn delay={0.3} duration={0.8}>
            <div className="relative">
              <motion.div 
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-3 sm:border-4 border-primary/30 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 group"
                whileHover={{ 
                  scale: 1.03,
                  rotate: 3,
                  borderColor: "rgba(13, 148, 136, 0.8)",
                  boxShadow: "0 20px 25px -5px rgba(13, 148, 136, 0.3), 0 10px 10px -5px rgba(13, 148, 136, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img 
                  src={neloImage} 
                  alt="Chinelo Vivian Opara" 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </motion.div>
              
              {/* 5-star rating badge */}
              <motion.div 
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-dark p-2 sm:p-3 rounded-lg shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <motion.svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    >
                      <path 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                      />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
