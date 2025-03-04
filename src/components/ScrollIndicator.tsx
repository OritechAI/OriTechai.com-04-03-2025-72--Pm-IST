import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false); // Set to false to disable the indicator

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIndicator(false);
      } else {
        setShowIndicator(false); // Keep it false to ensure it never shows
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      window.scrollTo({
        top: visionSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.button
            onClick={scrollToContent}
            className="flex flex-col items-center justify-center text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-sm mb-2 font-medium font-roboto-mono">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-oritech-red" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;