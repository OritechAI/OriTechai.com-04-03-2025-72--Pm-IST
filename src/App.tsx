import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, MessageSquare, Database, Code2, Users, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Services from './components/Services';
import Team from './components/Team';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import About from './components/About';
import Vision from './components/Vision';
import SplineBackground from './components/SplineBackground';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [webGLError, setWebGLError] = useState(false);
  const [headerReady, setHeaderReady] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has visited before and when
    const checkVisitStatus = () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const currentTime = Date.now();
      
      if (lastVisit) {
        const timeSinceLastVisit = currentTime - parseInt(lastVisit);
        const oneHourInMs = 60 * 60 * 1000;
        
        // If less than 1 hour since last visit, skip animation
        if (timeSinceLastVisit < oneHourInMs) {
          setSkipAnimation(true);
          setHeaderReady(true);
          setContentReady(true);
          setShowContent(true);
        }
      }
      
      // Update last visit time
      localStorage.setItem('lastVisit', currentTime.toString());
    };
    
    checkVisitStatus();
    
    if (!skipAnimation) {
      // Make header visible at 7.5 seconds
      const headerTimer = setTimeout(() => {
        setHeaderReady(true);
      }, 7500);

      // Prepare content after animation starts
      const prepareContentTimer = setTimeout(() => {
        setContentReady(true);
      }, 3000);

      // Show main content after 7.5 seconds
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 7500);

      return () => {
        clearTimeout(headerTimer);
        clearTimeout(prepareContentTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [skipAnimation]);

  // Pre-check WebGL support before attempting to render Spline
  useEffect(() => {
    // Quick pre-check for basic WebGL support
    const preCheckWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          console.log('WebGL not supported in this browser, using fallback');
          setWebGLError(true);
          return false;
        }
        return true;
      } catch (e) {
        console.log('Error checking WebGL support:', e);
        setWebGLError(true);
        return false;
      }
    };
    
    if (!preCheckWebGL()) {
      // If pre-check fails, don't even try to load Spline
      setWebGLError(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  // Animation variants for content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Enhanced fallback background with animated gradient when WebGL is not available
  const FallbackBackground = () => (
    <div className="fixed inset-0 z-5 bg-oritech-bg overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite'
        }}
      ></div>
      
      {/* Glowing accent elements */}
      <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[30%] w-[40vw] h-[40vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Wave patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201000%201000%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M0%2C1000%20C400%2C800%20600%2C900%201000%2C1000%20L1000%2C0%20L0%2C0%20Z%27%20fill%3D%27%23ce0005%27%20opacity%3D%270.05%27%2F%3E%3C%2Fsvg%3E')] bg-cover opacity-40"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Crect%20x%3D%270%27%20y%3D%270%27%20width%3D%271%27%20height%3D%271%27%20fill%3D%27%23ce0005%27%20opacity%3D%270.03%27%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-20"></div>
    </div>
  );

  const handleSplineError = () => {
    setWebGLError(true);
  };

  return (
    <div className="min-h-screen">
      {/* Use enhanced fallback background if WebGL fails */}
      {webGLError ? (
        <FallbackBackground />
      ) : (
        <div 
          className="fixed inset-0 z-1 spline-container"
          style={{ 
            opacity: showAnimation ? 1 : 0, 
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <SplineBackground onError={handleSplineError} />
        </div>
      )}

      {/* Header loads first, separate from other content for better performance */}
      {headerReady && (
        <div className="relative z-20">
          <Header activeSection={activeSection} />
        </div>
      )}

      {contentReady && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 content-container"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >            
            <main>
              {/* About component first */}
              <motion.div variants={itemVariants}>
                <About />
              </motion.div>

              {/* Reduced spacing between About and Services */}
              <motion.div 
                variants={itemVariants} 
                className="mt-[-2rem]" // Reduced top margin to bring services closer to hero
              >
                <Services />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Vision />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Consultation />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Team />
              </motion.div>
            </main>
            
            <motion.div variants={itemVariants}>
              <Footer />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;