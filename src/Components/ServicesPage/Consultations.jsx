import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

function Consultations() {
  return (
    <div className='w-full bg-gray-100 py-12 sm:py-16 lg:py-20'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center'>
        {/* Left Content Section */}
        <div className='w-full lg:w-[65%] mb-8 lg:mb-0 lg:pr-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className='text-base sm:text-lg text-blue-600 font-semibold mb-3'>Get Consultations</h1>
            <h1 className='text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6'>
              We believe in smart design, <br /> trust & collaboration.
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-300 shadow-lg'
            >
              Read More
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image & Stats Section */}
        <div className='w-full lg:w-[35%] relative'>
          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='w-full lg:w-[80%] ml-auto relative z-10'
          >
            <img 
              src="/api/placeholder/400/300" 
              alt="Consultation" 
              className='w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-xl'
              loading="lazy"
            />
          </motion.div>

          {/* Stats Box - Overlapping bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className='w-full lg:w-[60%] bg-blue-600 p-4 sm:p-6 shadow-xl relative -mt-6 lg:-mt-30 z-20'
          >
            <div className='flex justify-between items-start mb-2'>
              <h1 className='text-2xl sm:text-3xl text-white font-bold'>25+</h1>
              <div className='flex items-center space-x-1'>
                <span className='text-white text-sm sm:text-base font-semibold'>4.5</span>
                <StarIcon className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current' />
              </div>
            </div>
            <h1 className='text-white text-sm sm:text-base font-medium mb-2'>Year Of Experience</h1>
            <div className='flex items-center space-x-1'>
              {[...Array(5)].map((_, index) => (
                <StarIcon 
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    index < 4 ? 'text-yellow-400' : 'text-gray-300'
                  } fill-current`}
                />
              ))}
              <span className='text-white text-xs sm:text-sm ml-2'>Trustpilot</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Consultations);