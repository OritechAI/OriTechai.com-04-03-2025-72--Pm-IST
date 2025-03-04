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

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [webGLError, setWebGLError] = useState(false);
  const [headerReady, setHeaderReady] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);
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
      // Make header visible at 6 seconds
      const headerTimer = setTimeout(() => {
        setHeaderReady(true);
      }, 6000);

      // Prepare content after animation starts
      const prepareContentTimer = setTimeout(() => {
        setContentReady(true);
      }, 3000);

      // Show main content after 6 seconds
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 6000);

      return () => {
        clearTimeout(headerTimer);
        clearTimeout(prepareContentTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [skipAnimation]);

  useEffect(() => {
    if (showAnimation && splineContainerRef.current) {
      try {
        // Check if WebGL is supported
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          console.warn('WebGL not supported, falling back to static background');
          setWebGLError(true);
          return;
        }
        
        // Clear the container first
        splineContainerRef.current.innerHTML = '';
        
        // Create the spline-viewer element
        const splineViewer = document.createElement('spline-viewer');
        splineViewer.setAttribute('url', 'https://prod.spline.design/E3tmxupCiJ1hax8e/scene.splinecode');
        splineViewer.setAttribute('events-target', 'global');
        splineViewer.style.width = '100%';
        splineViewer.style.height = '100%';
        splineViewer.style.position = 'fixed';
        splineViewer.style.top = '0';
        splineViewer.style.left = '0';
        splineViewer.style.zIndex = '5';
        
        // Add error handling
        splineViewer.addEventListener('error', (e) => {
          console.warn('Spline viewer error:', e);
          setWebGLError(true);
        });
        
        splineContainerRef.current.appendChild(splineViewer);
        
        // Set up global mouse event forwarding
        const handleMouseMove = (e: MouseEvent) => {
          if (splineViewer) {
            // Create a custom event with the mouse coordinates
            const event = new CustomEvent('mousemove-proxy', {
              detail: {
                clientX: e.clientX,
                clientY: e.clientY
              }
            });
            
            // Dispatch to the spline viewer
            splineViewer.dispatchEvent(event);
          }
        };
        
        // Add global mouse tracking
        document.addEventListener('mousemove', handleMouseMove);
        
        // Clean up function
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      } catch (error) {
        console.error('Error initializing Spline viewer:', error);
        setWebGLError(true);
      }
    }
  }, [showAnimation]);

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

  // Hero section with green wave background
  const heroBackground = (
    <div className="hero-section fixed inset-0 z-1">
      <div className="hero-wave"></div>
    </div>
  );

  // Fallback gradient background when WebGL is not available
  const fallbackBackground = (
    <div 
      className="fixed inset-0 z-5"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(206, 0, 5, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(206, 0, 5, 0.15) 0%, transparent 50%)'
      }}></div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero background or Spline container or fallback background */}
      {webGLError ? (
        heroBackground
      ) : (
        <div 
          ref={splineContainerRef} 
          className="fixed inset-0 z-10 spline-container"
          style={{ 
            opacity: showAnimation ? 1 : 0, 
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          {/* Spline viewer will be inserted here */}
        </div>
      )}

      {/* Header loads first, separate from other content for better performance */}
      {headerReady && (
        <div className="relative z-20 content-container">
          <Header activeSection={activeSection} />
        </div>
      )}

      {contentReady && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 content-container"
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