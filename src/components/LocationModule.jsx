import React from 'react';
import { motion } from 'framer-motion';

function LocationModule({ location, delay, onLocationClick }) {
  return (
    <motion.div
      className="group relative h-full cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -8 }}
      onClick={() => onLocationClick(location)}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        layoutId={`location-bg-${location.name}`}
      />

      <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-primary-dark/90 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20">
        {/* Image Container */}
        <div className="relative w-full h-56 overflow-hidden">
          <motion.img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
          
          {/* Accent line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
          <motion.h3
            className="font-serif text-2xl text-secondary-light group-hover:text-accent mb-4 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
          >
            {location.name}
          </motion.h3>

          <div className="flex-grow space-y-3 mb-4">
            <motion.div
              className="flex items-center justify-between p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.15 }}
            >
              <span className="font-sans text-xs text-gray-400 uppercase tracking-wide">Footfall</span>
              <span className="font-serif text-sm text-accent">{location.footfall}</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-between p-3 bg-secondary-light/10 rounded-lg group-hover:bg-secondary-light/20 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              <span className="font-sans text-xs text-gray-400 uppercase tracking-wide">Area</span>
              <span className="font-serif text-sm text-secondary-light">{location.sqft}</span>
            </motion.div>
          </div>

          <motion.button
            className="w-full mt-auto px-4 py-3 text-xs border border-accent/50 text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300 uppercase tracking-widest font-semibold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.25 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default LocationModule;