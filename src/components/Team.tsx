import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: 'Andi',
      role: 'CEO & Sales Representative',
      bio: 'Leading Oritech with a vision to transform businesses through AI automation.'
    },
    {
      name: 'Eno',
      role: 'Sales Representative',
      bio: 'Connecting businesses with the perfect AI solutions to meet their unique needs.'
    },
    {
      name: 'Enes',
      role: 'Sales Representative',
      bio: 'Driving success through authentic connections and innovative sales strategies.'
    },
    {
      name: 'Grihith',
      role: 'CTO & Developer',
      bio: 'The technical genius behind our cutting-edge AI automation solutions.'
    }
  ];

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

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section id="team" className="section-padding bg-oritech-bg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins user-select-text">Meet our team</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="team-card text-center bg-oritech-gray/30 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1 font-poppins user-select-text">{member.name}</h3>
                <p className="text-oritech-red mb-4 font-poppins user-select-text">{member.role}</p>
                <p className="text-gray-300 font-poppins user-select-text">{member.bio}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-oritech-red to-transparent mt-4"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;