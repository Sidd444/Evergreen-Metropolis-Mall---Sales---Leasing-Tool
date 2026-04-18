import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaTheaterMasks, FaGem, FaHandshake } from 'react-icons/fa';

const iconMap = {
  retail: <FaStore className="text-5xl text-accent" />,
  entertainment: <FaTheaterMasks className="text-5xl text-accent" />,
  luxury: <FaGem className="text-5xl text-accent" />,
  leasing: <FaHandshake className="text-5xl text-accent" />,
};

function NexusMap({ sections, onSectionClick }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      <motion.h2
        className="font-serif text-4xl lg:text-6xl text-secondary-light mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The Nexus
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="group flex flex-col items-center text-center p-8 bg-primary-dark border border-gray-800 hover:border-accent transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(181, 147, 91, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSectionClick(section.id)}
          >
            <motion.div
              className="mb-6 group-hover:scale-110 transition-transform duration-300"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {iconMap[section.id]}
            </motion.div>
            <h3 className="font-serif text-2xl text-secondary-light group-hover:text-accent mb-4 transition-colors duration-300">
              {section.title}
            </h3>
            <p className="font-sans text-sm text-gray-400 group-hover:text-secondary-light transition-colors duration-300">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NexusMap;