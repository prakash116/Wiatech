import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return (
    <div className='w-full py-10'>
      <div className='w-full text-center mb-8'>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-lg text-blue-600 font-semibold mb-4'
        >
          Watch The Video
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-2xl md:text-4xl lg:text-4xl text-black font-bold leading-tight'
        >
          Our focus is on Delivering <br className='hidden sm:block' />
          superior value to our clients for <br className='hidden sm:block' />
          company modification
        </motion.h1>
      </div>
      
      <div className='px-4 sm:px-6 lg:px-10 w-full'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='relative w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'
        >
          {/* Video thumbnail/placeholder */}
          <img 
            src="/api/placeholder/1200/600" 
            alt="Company presentation video" 
            className='w-full h-full object-cover'
          />
          
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
            {isPlaying ? (
              <PauseIcon className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
            ) : (
              <PlayIcon className='w-8 h-8 sm:w-10 sm:h-10 text-white ml-1' />
            )}
          </motion.button>

          {/* Video progress bar (simplified) */}
          <div className='absolute bottom-0 left-0 w-full h-2 bg-gray-300'>
            <motion.div 
              className='h-full bg-blue-600'
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '70%' : '0%' }}
              transition={{ duration: 10, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(Video);