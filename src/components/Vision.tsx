import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Sparkles, ArrowRight, Zap, BrainCircuit, Globe } from 'lucide-react';

const Vision = () => {
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

  const highlightVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-oritech-gray/30 to-transparent pointer-events-none z-0"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="vision-content relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins user-select-text">
              Our Vision
            </h2>
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-oritech-red"
              variants={highlightVariants}
            ></motion.div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-poppins user-select-text mt-6">
            Leading the AI Revolution—Innovation, Growth, and a Future for All
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div variants={itemVariants} className="lg:col-span-8">
            {/* Main content card - setting explicit height to match the side cards */}
            <div className="bg-oritech-gray/30 backdrop-blur-sm p-8 rounded-lg border border-oritech-gray/50 shadow-lg h-full flex flex-col">
              <div className="prose prose-invert max-w-none flex-1">
                <p className="text-gray-300 mb-6 font-poppins leading-relaxed user-select-text">
                  There comes a time in history when innovation shatters limitations. When the bold redefines what is possible. When humanity stands at the threshold of a new era—not just of technology, but of transformation. That time is now, and OriTech is leading the charge.
                </p>
                <p className="text-gray-300 mb-6 font-poppins leading-relaxed user-select-text">
                  We are not just building AI. We are building a world where technology serves humanity—where businesses thrive, people reclaim their time, and life moves forward with greater ease, purpose, and freedom. AI is not here to replace us; it is here to elevate us. To free us from repetitive work, from stress, from feeling like there's never enough time in the day.
                </p>
                <p className="text-gray-300 mb-6 font-poppins leading-relaxed user-select-text">
                  Imagine waking up knowing that your business runs smarter, faster, and stronger—where AI handles the complexity so you can focus on what truly matters. Whether you are a business owner fighting to grow, a worker striving for balance, or an entrepreneur chasing a dream, AI will be your greatest ally.
                </p>
                <p className="text-gray-300 mb-6 font-poppins leading-relaxed user-select-text">
                  OriTech is here to make AI accessible to all. We will lower costs for businesses, increase profits, and open doors that once seemed impossible. This is about people. About families. About parents working hard to build a better future for their children. About leaders guiding their teams toward success. About communities coming together to embrace innovation rather than fear it.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="space-y-6">
              <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 shadow-lg hover:bg-oritech-gray/40 transition-colors duration-300">
                <Sparkles className="h-10 w-10 text-oritech-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Innovation</h3>
                <p className="text-gray-300 font-poppins user-select-text">We push boundaries and redefine what's possible with AI automation.</p>
              </div>
              
              <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 shadow-lg hover:bg-oritech-gray/40 transition-colors duration-300">
                <BrainCircuit className="h-10 w-10 text-oritech-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Intelligence</h3>
                <p className="text-gray-300 font-poppins user-select-text">Smart solutions that learn, adapt, and grow with your business.</p>
              </div>
              
              <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 shadow-lg hover:bg-oritech-gray/40 transition-colors duration-300">
                <Globe className="h-10 w-10 text-oritech-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Global Impact</h3>
                <p className="text-gray-300 font-poppins user-select-text">From Albania to the world, driving the AI revolution forward.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-oritech-red bg-opacity-10 border border-oritech-red p-8 rounded-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-oritech-red opacity-10 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-oritech-red opacity-10 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 font-poppins text-center user-select-text">The Future We See</h3>
            <p className="text-gray-300 mb-6 font-poppins user-select-text">
              Albania—we will not wait for the world to change. We will lead the change. OriTech will be the force that drives innovation, fuels economic growth, and positions us at the forefront of the AI revolution. No longer will we stand in the shadows of technological giants. We will become the giants.
            </p>
            <p className="text-gray-300 mb-8 font-poppins user-select-text">
              This is not a dream of tomorrow. This is the reality we are building today. AI is not the future—it is now. And together, by embracing this force, we will create a world that works faster, smarter, and more powerfully than ever before.
            </p>
            <p className="text-gray-300 mb-4 font-poppins user-select-text">
              The question is: Will you resist change, or will you be part of the revolution? 
            </p>
            <p className="text-white font-poppins text-center font-bold text-xl user-select-text">
              OriTech is ready. AI is ready. The future is yours to embrace.
            </p>
            
            <div className="flex justify-center mt-8">
              <motion.button 
                className="flex items-center gap-2 bg-oritech-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const consultationSection = document.getElementById('consultation');
                  if (consultationSection) {
                    window.scrollTo({
                      top: consultationSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Join the Revolution <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;