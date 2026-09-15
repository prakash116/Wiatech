import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, HandThumbUpIcon, UserIcon, UserGroupIcon } from '@heroicons/react/24/outline'

function Boxs() {
  return (
    <div className='flex flex-col md:flex-row p-2 w-full'>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='group relative flex flex-col p-4 py-8 w-full gap-2 md:w-1/4 bg-gray-200 border border-gray-400 overflow-hidden'
      >
        <div className='absolute inset-0 bg-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0'></div>
        <HeartIcon className='w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10' />
        <h1 className='text-2xl font-bold text-gray-900 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Passionate</h1>
        <p className='text-gray-700 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className='group relative flex flex-col p-4 py-8 w-full gap-2 md:w-1/4 bg-gray-200 border border-gray-400 overflow-hidden'
      >
        <div className='absolute inset-0 bg-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0'></div>
        <HandThumbUpIcon className='w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10' />
        <h1 className='text-2xl font-bold text-gray-900 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Respectful</h1>
        <p className='text-gray-700 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='group relative flex flex-col p-4 py-8 w-full gap-2 md:w-1/4 bg-gray-200 border border-gray-400 overflow-hidden'
      >
        <div className='absolute inset-0 bg-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0'></div>
        <UserIcon className='w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10' />
        <h1 className='text-2xl font-bold text-gray-900 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Ownership</h1>
        <p className='text-gray-700 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className='group relative flex flex-col p-4 py-8 w-full gap-2 md:w-1/4 bg-gray-200 border border-gray-400 overflow-hidden'
      >
        <div className='absolute inset-0 bg-blue-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0'></div>
        <UserGroupIcon className='w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10' />
        <h1 className='text-2xl font-bold text-gray-900 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Clients Services</h1>
        <p className='text-gray-700 group-hover:text-white mt-2 transition-colors duration-300 relative z-10'>Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
      </motion.div>
    </div>
  )
}

export default React.memo(Boxs)