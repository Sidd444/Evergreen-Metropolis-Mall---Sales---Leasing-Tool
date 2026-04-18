import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import HeroNexus from './components/HeroNexus';
import LoadingOverlay from './components/LoadingOverlay';
import LocationModule from './components/LocationModule';
import DataInsights from './components/DataInsights';
import ContactLeasing from './components/ContactLeleasing';
import mallData from './mallData.json';

const images = import.meta.glob('./images/*.{jpg,jpeg,png,gif}', { eager: true, as: 'url' });
const videos = import.meta.glob('./videos/*.{mp4,webm,ogg}', { eager: true, as: 'url' });

const resolveAssetPath = (path) => {
  if (path.startsWith('/images/')) {
    const fileName = path.replace('/images/', './images/');
    return images[fileName];
  }
  if (path.startsWith('/videos/')) {
    const fileName = path.replace('/videos/', './videos/');
    return videos[fileName];
  }
  return path;
};

const updatedMallData = JSON.parse(JSON.stringify(mallData));
updatedMallData.heroVideo = resolveAssetPath(updatedMallData.heroVideo);

updatedMallData.sections.forEach(section => {
  section.image = resolveAssetPath(section.image);
  section.video = resolveAssetPath(section.video);
  section.locations.forEach(location => {
    location.image = resolveAssetPath(location.image);
    location.video = resolveAssetPath(location.video);
  });
});

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (sectionId) => {
    const section = updatedMallData.sections.find(s => s.id === sectionId);
    setActiveSection(section);
    setActiveLocation(null);
  };

  const handleLocationClick = (location) => {
    setActiveLocation(location);
  };

  const handleBackToNexus = () => {
    setActiveSection(null);
    setActiveLocation(null);
  };

  const handleBackToSection = () => {
    setActiveLocation(null);
  };

  return (
    <div className="relative min-h-screen text-secondary-light bg-primary-dark custom-scrollbar">
      <div ref={cursorRef} className="custom-cursor lg:block"></div>

      <AnimatePresence>
        {loading && <LoadingOverlay progress={50} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && !activeSection && (
          <motion.div
            key="hero-nexus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <HeroNexus mallName={updatedMallData.mallName} heroVideo={updatedMallData.heroVideo} sections={updatedMallData.sections} onSectionClick={handleSectionClick} />
          </motion.div>
        )}

        {!loading && activeSection && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen flex flex-col bg-primary-dark"
          >
            {/* Animated background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none z-0" />
            
            {/* Premium header section */}
            <motion.div
              className="relative z-10 pt-6 lg:pt-12 px-6 lg:px-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                <div className="flex-1">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                    <span className="text-accent text-sm uppercase tracking-[0.15em] font-light">Explore</span>
                  </motion.div>
                  <h1 className="font-serif text-5xl lg:text-7xl text-secondary-light mb-2">{activeSection.title}</h1>
                  <motion.div className="h-1 w-20 bg-gradient-to-r from-accent via-accent to-transparent" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <motion.button
                    onClick={handleBackToNexus}
                    className="px-6 py-3 border border-accent text-accent font-sans text-sm tracking-wide hover:bg-accent hover:text-primary-dark transition-all duration-300 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Back to Nexus
                  </motion.button>
                  {activeLocation && (
                    <motion.button
                      onClick={handleBackToSection}
                      className="px-6 py-3 border border-secondary-light text-secondary-light font-sans text-sm tracking-wide hover:bg-secondary-light hover:text-primary-dark transition-all duration-300 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Back to {activeSection.title}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>

            {!activeLocation ? (
              <motion.div
                key={`${activeSection.id}-overview`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex-grow flex flex-col lg:flex-row gap-8 p-6 lg:p-16 pb-20"
              >
                {/* Left Column - Media & Description */}
                <motion.div
                  className="lg:w-1/2 flex flex-col"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Image Card */}
                  <motion.div
                    className="relative mb-8 group overflow-hidden rounded-2xl shadow-2xl border border-accent/20"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={activeSection.image}
                      alt={`${activeSection.title} Overview`}
                      className="w-full h-72 object-cover"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Video Card */}
                  <motion.div
                    className="relative mb-8 group overflow-hidden rounded-2xl shadow-2xl border border-accent/20"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.video
                      key={activeSection.video}
                      src={activeSection.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-72 object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  </motion.div>

                  {/* Description Card */}
                  <motion.div
                    className="bg-gradient-to-br from-gray-900/60 to-primary-dark/80 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="font-serif text-2xl text-accent mb-4">Overview</h3>
                    <motion.p
                      className="font-sans text-lg leading-relaxed text-gray-300 border-l-2 border-accent pl-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {activeSection.description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Right Column - Locations Grid */}
                <motion.div
                  className="lg:w-1/2 flex flex-col"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="font-serif text-3xl text-secondary-light mb-2">Featured Locations</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent" />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 custom-scrollbar flex-grow pr-2">
                    {activeSection.locations.map((location, index) => (
                      <LocationModule
                        key={location.name}
                        location={location}
                        delay={index * 0.1 + 0.4}
                        onLocationClick={handleLocationClick}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeSection.id}-${activeLocation.name}-detail`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 lg:p-16"
              >
                {/* Location Detail Card */}
                <motion.div
                  className="w-full max-w-6xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-primary-dark/90 rounded-3xl shadow-2xl border border-accent/20 overflow-hidden backdrop-blur-sm">
                    {/* Location Header */}
                    <div className="relative h-96 overflow-hidden group">
                      <motion.img
                        src={activeLocation.image}
                        alt={activeLocation.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
                      
                      {/* Title Overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-8 lg:p-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h2 className="font-serif text-5xl lg:text-6xl text-secondary-light mb-2">{activeLocation.name}</h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent" />
                      </motion.div>

                      {/* Accent elements */}
                      <motion.div
                        className="absolute top-0 right-0 w-1 h-1/3 bg-gradient-to-b from-accent to-transparent opacity-50"
                        animate={{ height: ['33%', '50%', '33%'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Footfall Card */}
                        <motion.div
                          className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(181, 147, 91, 0.2)" }}
                        >
                          <p className="font-sans text-sm text-gray-400 uppercase tracking-wide mb-3">Monthly Footfall</p>
                          <p className="font-serif text-4xl text-accent">{activeLocation.footfall}</p>
                        </motion.div>

                        {/* Area Card */}
                        <motion.div
                          className="bg-gradient-to-br from-secondary-light/20 to-secondary-light/5 border border-secondary-light/30 rounded-xl p-6 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
                        >
                          <p className="font-sans text-sm text-gray-400 uppercase tracking-wide mb-3">Total Area</p>
                          <p className="font-serif text-4xl text-secondary-light">{activeLocation.sqft}</p>
                        </motion.div>

                        {/* Anchors Card */}
                        <motion.div
                          className="bg-gradient-to-br from-gray-700/20 to-gray-700/5 border border-gray-700/30 rounded-xl p-6 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(200, 200, 200, 0.1)" }}
                        >
                          <p className="font-sans text-sm text-gray-400 uppercase tracking-wide mb-3">Key Anchors</p>
                          <p className="font-serif text-lg text-gray-300">{activeLocation.anchor}</p>
                        </motion.div>
                      </div>

                      {/* Decorative line */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mb-12"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />

                      {/* Additional Info */}
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <p className="font-sans text-gray-400 text-lg">
                          Discover the premium experience and exclusive offerings at <span className="text-accent font-semibold">{activeLocation.name}</span>
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Data Insights - Fixed at bottom */}
            {!activeLocation && (
              <>
                <DataInsights insights={updatedMallData.dataInsights} />
                <ContactLeasing />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;