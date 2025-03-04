import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ThreeDPhotoCarousel } from './ui/3d-carousel';

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Show carousel after 7.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="carousel" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="carousel-content w-full"
        ref={carouselRef}
      >
        <motion.div 
          variants={itemVariants} 
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ThreeDPhotoCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Carousel;