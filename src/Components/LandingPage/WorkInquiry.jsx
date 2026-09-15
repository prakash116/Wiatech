import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, UserIcon, AtSymbolIcon } from '@heroicons/react/24/outline'

function WorkInquiry() {
  return (
    <motion.div 
      className='w-full py-20 px-8 flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-indigo-900 to-indigo-900'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Content */}
      <motion.div 
        className='w-full lg:w-1/2 space-y-8'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className='space-y-4'>
          <motion.h1 
            className='text-blue-100 text-lg font-semibold tracking-wide'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Work Inquiry
          </motion.h1>
          <motion.h1 
            className='text-4xl lg:text-5xl font-bold text-gray-100 leading-tight'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Work For your Next <span className='text-blue-400'>Projects</span> ?
          </motion.h1>
          <motion.p 
            className='text-lg text-gray-200 leading-relaxed'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We denounce with righteous indignation and like men beguiled and demoralized by the charms
          </motion.p>
        </div>

        {/* Contact Info */}
        <div className='space-y-6'>
          {/* Phone */}
          <motion.div 
            className='flex items-center gap-4 group cursor-pointer'
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className='flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneIcon className='w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300' />
            </motion.div>
            <div>
              <h3 className='text-lg font-medium text-gray-100 group-hover:text-blue-600 transition-colors duration-300'>
                Call for Inquiry
              </h3>
              <h2 className='text-2xl font-bold text-gray-200 group-hover:text-blue-700 transition-colors duration-300'>
                +236 (456) 896 22
              </h2>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            className='flex items-center gap-4 group cursor-pointer'
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className='flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <EnvelopeIcon className='w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300' />
            </motion.div>
            <div>
              <h3 className='text-lg font-medium text-gray-100 group-hover:text-blue-600 transition-colors duration-300'>
                Send Us Email
              </h3>
              <h2 className='text-2xl font-bold text-gray-200 group-hover:text-blue-700 transition-colors duration-300'>
                infotech@gmail.com
              </h2>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div 
        className='w-full lg:w-1/2'
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.form 
          className='bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100'
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className='text-center mb-2'>
            <motion.h1 
              className='text-2xl font-bold text-gray-900 mb-2'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Need Help For Project!
            </motion.h1>
            <motion.p 
              className='text-gray-600'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We are ready to help your next projects, let's work together
            </motion.p>
          </div>

          {/* Name & Email Row */}
          <div className='flex flex-col sm:flex-row gap-4'>
            {/* Name Input with Icon */}
            <motion.div className='relative flex-1 group' whileFocus={{ scale: 1.02 }}>
              <UserIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-200' />
              <input 
                type="text" 
                placeholder='Name'
                className='w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white'
              />
            </motion.div>

            {/* Email Input with Icon */}
            <motion.div className='relative flex-1 group' whileFocus={{ scale: 1.02 }}>
              <AtSymbolIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-200' />
              <input 
                type="text" 
                placeholder='Email'
                className='w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white'
              />
            </motion.div>
          </div>

          {/* Services Select */}
          <motion.select 
            className='w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white appearance-none cursor-pointer'
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Services</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">UI/UX Design</option>
          </motion.select>

          {/* Textarea */}
          <motion.textarea 
            name="" 
            id=""
            placeholder='Your Message...'
            rows={4}
            className='w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50/50 hover:bg-white'
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className='w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2'
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message Us
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default React.memo(WorkInquiry)