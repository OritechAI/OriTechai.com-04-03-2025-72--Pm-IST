import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-roboto-mono">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-oritech-red mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-300">contact@oritech.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-oritech-red mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+355 69 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-oritech-red mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Office</h4>
                  <p className="text-gray-300">Tirana, Albania</p>
                  <p className="text-gray-300">San Francisco, CA, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold text-white mb-4 font-roboto-mono">Our Locations</h4>
              <p className="text-gray-300 mb-6">
                Headquartered in Albania with operations in the United States, we provide AI automation solutions globally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-oritech-gray p-4 rounded-lg">
                  <h5 className="font-medium text-white mb-2">Albania Office</h5>
                  <p className="text-gray-300 text-sm">Primary operations for European clients</p>
                </div>
                <div className="bg-oritech-gray p-4 rounded-lg">
                  <h5 className="font-medium text-white mb-2">US Office</h5>
                  <p className="text-gray-300 text-sm">Serving North American businesses</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form className="bg-oritech-gray p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="contact-input"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="contact-input"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="contact-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  className="contact-input"
                  placeholder="Your Company"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service Interested In</label>
                <select id="service" className="contact-input">
                  <option value="">Select a service</option>
                  <option value="chatbots">AI Chatbots</option>
                  <option value="voice">AI Voice Agents</option>
                  <option value="leads">B2B Lead Generation</option>
                  <option value="crm">CRM Automation</option>
                  <option value="custom">Custom AI Projects</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="contact-input"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-oritech-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;