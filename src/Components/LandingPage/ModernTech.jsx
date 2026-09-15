import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Image data array
const images = [
  {
    id: 1,
    url: '/case.jpg',
    title: 'Modern Technology',
    description: 'We denounce with righteous indignation and like men who are beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire foresee the pain'
  },
  {
    id: 2,
    url: '/case.jpg',
    title: 'Advanced AI Systems',
    description: 'Cutting-edge artificial intelligence transforming industries and daily life through innovative solutions'
  },
  {
    id: 3,
    url: '/case.jpg',
    title: 'Future Innovation',
    description: 'Pioneering technologies shaping the future of human civilization and technological advancement'
  }
];

// Fixed TechIcon component without TypeScript
const TechIcon = memo(({ title }) => {
  const getIcon = useCallback(() => {
    switch(title) {
      case 'Modern Technology':
        return '🔬';
      case 'Advanced AI Systems':
        return '🤖';
      case 'Future Innovation':
        return '🚀';
      default:
        return '💡';
    }
  }, [title]);

  return (
    <motion.span
      className="text-5xl mb-4 mt-4 block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {getIcon()}
    </motion.span>
  );
});

TechIcon.displayName = 'TechIcon';

const ModernTech = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const currentItem = images[currentIndex];

  return (
    <div className="w-full flex flex-col lg:flex-row py-20 px-2">
      {/* Image Section */}
      <div className="w-full lg:w-[55%] md:h-[450px] relative">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentItem.id}
              src={currentItem.url}
              alt={currentItem.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              loading="lazy"
            />
          </AnimatePresence>
        </div>
        
        {/* Dot Indicators */}
        <div className="absolute mt-4 border border-dotted rounded-full border-blue-600 bg-gray-300 py-2 px-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-white/50'
              }`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:h-[450px] lg:w-[45%] bg-indigo-900 lg:mt-10 lg:pl-8 p-6 lg:p-4">
        <TechIcon title={currentItem.title} />
        
        <motion.h1 
          className="text-3xl lg:text-4xl font-bold text-gray-100 mb-4 leading-tight"
          key={currentItem.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentItem.title}
          <br />
          Advancement and Innovative
          <br />
          Incentives
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 mb-8 leading-relaxed"
          key={currentItem.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentItem.description}
        </motion.p>
        
        <motion.button
          className="bg-white hover:bg-indigo-700 text-black hover:text-white hover:border-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More
        </motion.button>
      </div>
    </div>
  );
});

// ModernTech.displayName = 'ModernTech';

export default ModernTech;