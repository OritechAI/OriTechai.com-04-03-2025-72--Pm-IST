import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface TubelightNavbarProps {
  logo: React.ReactNode;
  items: NavItem[];
  onNavClick: (url: string) => void;
}

export const TubelightNavbar: React.FC<TubelightNavbarProps> = ({ 
  logo, 
  items, 
  onNavClick 
}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  // Function to calculate item positions and dimensions
  const getItemStyle = (index: number) => {
    if (isMobile) {
      return {
        width: 40,
        x: index * 48
      };
    } else {
      // Calculate position based on previous items' widths
      const x = items.slice(0, index).reduce((acc, item) => {
        return acc + (item.name.length * 10 + 64);
      }, 0);
      
      return {
        width: items[index].name.length * 10 + 64,
        x: x
      };
    }
  };

  const handleItemClick = (index: number, url: string) => {
    setActiveItem(index);
    onNavClick(url);
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    duration: 0.3
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[150] flex justify-center items-center p-4 bg-[#1a1a1a] backdrop-blur-md shadow-md transition-all duration-300">
      <div className="flex items-center rounded-full border border-white/10 p-1 max-w-7xl mx-auto w-full justify-between">
        <div className="px-3">
          {logo}
        </div>
        
        <div className="relative flex">
          {hoveredItem !== null && (
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-full"
              layoutId="hoverBackground"
              initial={false}
              animate={{
                width: getItemStyle(hoveredItem).width,
                height: 40,
                x: getItemStyle(hoveredItem).x,
                opacity: 0.5
              }}
              transition={spring}
            />
          )}
          
          {activeItem !== null && (
            <motion.div
              className="absolute inset-0 bg-oritech-red rounded-full"
              layoutId="activeBackground"
              initial={false}
              animate={{
                width: getItemStyle(activeItem).width,
                height: 40,
                x: getItemStyle(activeItem).x
              }}
              transition={spring}
            />
          )}
          
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.name}
                className={`relative flex items-center justify-center px-4 py-2 rounded-full text-white ${
                  i === activeItem ? 'text-white font-medium' : 'text-white/80'
                }`}
                onHoverStart={() => setHoveredItem(i)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => handleItemClick(i, item.url)}
                style={{ zIndex: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {!isMobile && (
                  <span className="ml-2 font-poppins">{item.name}</span>
                )}
              </motion.button>
            );
          })}
        </div>
        
        <motion.button
          className="ml-4 bg-oritech-red text-white font-medium px-4 py-2 rounded-full hover:bg-oritech-red/90 transition-colors font-poppins"
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavClick('/consultation')}
        >
          {isMobile ? 'Book' : 'Book a call'}
        </motion.button>
      </div>
    </div>
  );
};