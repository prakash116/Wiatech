import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, CpuChipIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

function WhyChooseUs() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
      <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-12'>
        
        {/* Left Section - Images with Overlap */}
        <div className='w-full lg:w-1/2 flex justify-center gap2 lg:justify-start relative'>
          <div className='relative w-full flex gap-3'>
            {/* First Image - Bottom Position */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='w-1/2 mt-10 hidden md:block'
            >
              <img 
                src="/api/placeholder/300/250" 
                alt="Team collaboration" 
                className='w-full h-full object-cover rounded-lg shadow-lg'
                loading="lazy"
              />
            </motion.div>

            {/* Second Image - Top Position */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='w-1/2 mb-10 hidden md:block'
            >
              <img 
                src="/api/placeholder/300/250" 
                alt="Technology innovation" 
                className='w-full h-full object-cover rounded-lg shadow-lg'
                loading="lazy"
              />
            </motion.div>

            {/* Certified Company Box - Overlapping Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className='hidden md:block absolute bottom-25 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-600 rounded-lg p-4 sm:p-2 shadow-xl z-10 w-3/4'
            >
              <div className='flex items-start gap-3 sm:gap-2'>
                <div className='flex-shrink-0'>
                  <CheckBadgeIcon className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
                </div>
                <div>
                  <h1 className='text-white text-base sm:text-lg font-semibold mb-1'>Certified Company</h1>
                  <p className='text-blue-100 text-xs sm:text-sm leading-relaxed'>
                    Accelerate innovation with world match entire remote team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className='text-base sm:text-lg font-semibold text-blue-600 mb-2'>Why Choose Us</h1>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6'>
              Innovative Strategies for <br /> Maximum <span className='text-blue-500'>SEO Impact</span>
            </h1>
            <p className='text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed'>
              We are at the forefront of technological innovation, dedicated to providing comprehensive IT solutions that empower businesses
            </p>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
              {/* Robotics Software */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className='flex items-start gap-3 sm:gap-4'>
                  <div className='flex-shrink-0'>
                    <CpuChipIcon className='w-6 h-6 sm:w-8 sm:h-8 text-blue-600' />
                  </div>
                  <div>
                    <h1 className='text-gray-900 text-base sm:text-lg font-semibold mb-2'>Robotics software</h1>
                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                      We are a dynamic and forward dedicated revolution
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Smart AI & Chatbots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className='flex items-start gap-3 sm:gap-4'>
                  <div className='flex-shrink-0'>
                    <ChatBubbleLeftRightIcon className='w-6 h-6 sm:w-8 sm:h-8 text-blue-600' />
                  </div>
                  <div>
                    <h1 className='text-gray-900 text-base sm:text-lg font-semibold mb-2'>Smart AI & chatbots</h1>
                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                      Passion lies creating solution not only meet but exceed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(WhyChooseUs);