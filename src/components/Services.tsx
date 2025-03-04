import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Database, Code2, Users } from 'lucide-react';
import { Feature } from '@/components/ui/feature-section-with-bento-grid';

const Services = () => {
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
    <section id="services" className="section-padding" style={{ marginTop: "-25%" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Feature />
        </motion.div>

        {/* Discuss Your Project button with responsive positioning */}
        <motion.div 
          variants={itemVariants}
          className="mt-[-2rem] md:mt-[-5rem] text-center relative z-10" 
        >
          <a href="#consultation" className="inline-flex items-center bg-oritech-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-poppins">
            Discuss Your Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;