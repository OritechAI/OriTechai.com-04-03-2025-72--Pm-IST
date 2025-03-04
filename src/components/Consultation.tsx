import React from 'react';
import { motion } from 'framer-motion';
import CalendarBooking from '@/components/CalendarBooking';

const Consultation = () => {
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
    <section id="consultation" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-8 user-select-text">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">Book a Free consultation</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins">
            Ready to transform your business with AI automation? Schedule a consultation with our sales reps.
          </p>
        </motion.div>
        
        {/* Calendar Component */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50" style={{ height: "650px" }}>
            <CalendarBooking />
          </div>
        </motion.div>

        {/* Orange glow section */}
        <div className="relative">
          <div 
            className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-1 scale-105 mt-[-30%]"
            style={{ 
              transform: "scale(1.05)",
              marginTop: "-30%" 
            }} 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Consultation;