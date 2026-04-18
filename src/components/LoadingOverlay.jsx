import React from 'react';
import { motion } from 'framer-motion';

function LoadingOverlay({ progress }) {
  return (
    <motion.div
      className="fixed inset-0 bg-primary-dark flex flex-col items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h2
        className="font-serif text-4xl text-accent mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Loading Experience
      </motion.h2>
      <motion.div
        className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.p
        className="font-sans text-sm text-gray-500 mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Preparing your immersive journey...
      </motion.p>
    </motion.div>
  );
}

export default LoadingOverlay;