import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

type SplineBackgroundProps = {
  onError?: () => void;
  onLoad?: () => void;
};

const SplineBackground: React.FC<SplineBackgroundProps> = ({ onError, onLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const splineRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);
  const robotRef = useRef<any>(null);
  const isTouchDeviceRef = useRef(false);

  const handleLoad = (spline: any) => {
    setLoading(false);
    splineRef.current = spline;
    
    // Initialize mouse position at center of screen
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    
    // Store robot reference
    robotRef.current = spline.findObjectByName('Robot');
    
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    if (onError) onError();
  };

  // Function to update robot rotation based on mouse/touch position
  const updateRobotRotation = () => {
    if (!splineRef.current || !robotRef.current) return;
    
    try {
      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (mouseRef.current.x / window.innerWidth) * 2 - 1;
      const normalizedY = -(mouseRef.current.y / window.innerHeight) * 2 + 1;
      
      // Apply smooth animation using lerp (linear interpolation)
      const currentRotationY = robotRef.current.rotation.y || 0;
      const currentRotationX = robotRef.current.rotation.x || 0;
      const targetRotationY = normalizedX * 0.6; // Limit rotation range
      const targetRotationX = normalizedY * 0.4; // Less vertical rotation
      
      // Smoothly interpolate between current and target rotation
      robotRef.current.rotation.y = currentRotationY + (targetRotationY - currentRotationY) * 0.05;
      robotRef.current.rotation.x = currentRotationX + (targetRotationX - currentRotationX) * 0.05;
      
      // Continue animation loop
      requestRef.current = requestAnimationFrame(updateRobotRotation);
    } catch (error) {
      console.warn('Error updating Spline robot position:', error);
    }
  };

  // Setup mouse move tracking
  useEffect(() => {
    // Detect if device has touch capability
    isTouchDeviceRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(updateRobotRotation);
    
    // Add appropriate event listeners based on device type
    if (isTouchDeviceRef.current) {
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
    } else {
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Clean up listeners and animation frame on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-5">
      <Spline
        scene="https://prod.spline.design/Qs48LEPKi91dwsR4/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '-3%',
          left: 0
        }}
      />
    </div>
  );
};

export default SplineBackground;