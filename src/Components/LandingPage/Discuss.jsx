import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Discuss = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row min-h-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Consultation Section */}
      <motion.div
        className="w-full md:w-1/2 bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 flex flex-col sm:flex-row justify-center items-center gap-3 px-4 py-6 sm:py-0"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
          </motion.div>
          <h1 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
            Let's Discuss & Start IT Consultations
          </h1>
        </div>
        <motion.a
          href="/contact"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </motion.div>

      {/* Clients Section */}
      <motion.div
        className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex justify-center items-center gap-3 px-4 py-6 sm:py-0"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <UserGroupIcon className="w-7 h-7 text-white" />
        </motion.div>
        <h1 className="text-lg font-semibold text-white text-center">
          1.8 million+ Trusted Clients
        </h1>
      </motion.div>
    </motion.div>
  );
});

Discuss.displayName = 'Discuss';

export default Discuss;