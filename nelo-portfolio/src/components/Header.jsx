import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['About', 'Experience', 'Services', 'Testimonials', 'Contact'];

  // Track scroll position for header background opacity
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate background opacity based on scroll position
  const headerOpacity = Math.min(0.9, 0.6 + (scrollPosition / 300));

  return (
    <motion.header 
      className="fixed w-full backdrop-blur-sm z-50 py-3 sm:py-4"
      style={{ 
        backgroundColor: `rgba(15, 23, 42, ${headerOpacity})`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div 
          className="text-primary font-bold text-lg sm:text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.05, 
            textShadow: "0 0 8px rgba(13, 148, 136, 0.6)" 
          }}
        >
          Chinelo Opara
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 + index * 0.1,
                  type: "spring"
                }}
              >
                <motion.a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-light hover:text-primary transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-light p-1.5 rounded-md hover:bg-slate-800/50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </motion.svg>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-dark/95 backdrop-blur-sm overflow-hidden border-t border-slate-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item} 
                  className="w-full text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 24
                  }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-light hover:text-primary transition-colors px-4 py-3 block w-full text-lg"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ 
                      scale: 1.1, 
                      color: "#0D9488",
                      textShadow: "0 0 5px rgba(13, 148, 136, 0.5)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
