import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaTheaterMasks, FaGem, FaHandshake } from 'react-icons/fa';

const iconMap = {
  retail: <FaStore className="text-6xl text-accent" />,
  entertainment: <FaTheaterMasks className="text-6xl text-accent" />,
  luxury: <FaGem className="text-6xl text-accent" />,
  leasing: <FaHandshake className="text-6xl text-accent" />,
};

function HeroNexus({ mallName, heroVideo, sections, onSectionClick }) {
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleExplore = () => {
    setTimeout(() => {
      scrollContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = window.scrollY;
        const elementTop = scrollContainerRef.current.offsetTop;
        setIsScrolled(scrollTop > elementTop - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative w-full bg-primary-dark overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      <motion.div
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 blur-sm"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/90 z-10" />
        
        <motion.div
          className="absolute inset-0 z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-accent/0 via-accent/0 to-accent/10" />
        </motion.div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex items-center justify-center space-x-2"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm uppercase tracking-[0.2em] font-light">Discover</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <motion.h1
            className="font-serif text-6xl lg:text-8xl text-secondary-light leading-tight tracking-tighter mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {mallName}
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-accent via-accent to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="font-sans text-lg lg:text-2xl text-secondary-light max-w-3xl mb-12 tracking-wide leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Discover a world where luxury, entertainment, and commerce converge.
            Experience the future of destination retail.
          </motion.p>

          <motion.button
            onClick={handleExplore}
            className="relative px-10 py-4 border-2 border-accent text-accent font-sans text-xl uppercase tracking-widest hover:text-primary-dark transition-all duration-300 overflow-hidden group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore the Nexus</span>
            <motion.div
              className="absolute inset-0 bg-accent z-0"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-1 h-1/3 bg-gradient-to-b from-accent to-transparent opacity-50"
            animate={{ height: ['33%', '50%', '33%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-1 h-1/3 bg-gradient-to-t from-accent to-transparent opacity-50"
            animate={{ height: ['33%', '50%', '33%'] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      <div ref={scrollContainerRef} className="relative w-full py-20 lg:py-32 px-4 lg:px-16 bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/50 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 relative z-10"
        >
          <h2 className="font-serif text-5xl lg:text-7xl text-secondary-light text-center mb-6">The Nexus</h2>
          <p className="font-sans text-center text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Four distinct realms of experience united in one extraordinary destination
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto relative z-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12 }}
              onClick={() => onSectionClick(section.id)}
              className="group relative cursor-pointer h-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId={`card-bg-${section.id}`}
              />

              <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-primary-dark/90 border border-gray-700/50 rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden group-hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="mb-8 relative z-10 p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {iconMap[section.id]}
                </motion.div>

                <h3 className="font-serif text-2xl lg:text-3xl text-secondary-light group-hover:text-accent mb-4 transition-colors duration-300 relative z-10">
                  {section.title}
                </h3>

                <p className="font-sans text-sm lg:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300 relative z-10 flex-grow leading-relaxed">
                  {section.description}
                </p>

                <motion.div
                  className="mt-6 px-6 py-2 border border-accent/30 text-accent/70 text-xs uppercase tracking-widest rounded-full group-hover:border-accent group-hover:text-accent transition-all duration-300 relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  Explore
                </motion.div>

                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 relative z-10"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 lg:p-12 text-center">
            <p className="font-sans text-gray-300 text-lg leading-relaxed">
              Click on any section to explore unique locations, stunning venues, and exclusive experiences within our carefully curated ecosystem
            </p>
            <motion.div
              className="mt-6 flex justify-center space-x-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-2 h-2 bg-accent rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-40 bg-gradient-to-b from-primary-dark via-primary-dark/50 to-transparent"
      />
    </div>
  );
}

export default HeroNexus;
