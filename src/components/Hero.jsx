import React from 'react';
import { motion } from 'framer-motion';

function Hero({ mallName, onExplore, heroVideo }) {
  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-primary-dark bg-opacity-60 z-10 flex flex-col items-center justify-center text-center p-8">
        <motion.h1
          className="font-serif text-5xl lg:text-8xl text-secondary-light leading-tight tracking-tighter mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {mallName}
        </motion.h1>
        <motion.p
          className="font-sans text-lg lg:text-2xl text-secondary-light max-w-3xl mb-10 tracking-wide"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Discover a world where luxury, entertainment, and commerce converge.
          Experience the future of destination retail.
        </motion.p>
        <motion.button
          onClick={onExplore}
          className="px-8 py-4 border-2 border-accent text-accent font-sans text-xl uppercase tracking-widest hover:bg-accent hover:text-primary-dark transition-colors duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore the Nexus
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Hero;