import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

function Footer1() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: "Company", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "FAQs", href: "#" }
  ]

  return (
    <motion.div 
      className='w-full flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-800 text-white border-t border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Copyright Text */}
      <motion.p 
        className='text-gray-300 text-lg text-center md:text-left order-2 md:order-1'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        © 2023 WiaTech - IT Services. All rights reserved.
      </motion.p>

      {/* Back to Top Button */}
      <motion.div 
        className='order-1 md:order-2 bg-white p-0.5 rounded-full -mt-20'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          onClick={scrollToTop}
          className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200'
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUpIcon className='w-5 h-5 text-white' />
        </motion.button>
      </motion.div>

      {/* Quick Links */}
      <motion.div 
        className='flex gap-8 order-3'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {quickLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className='text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg font-medium'
            whileHover={{ 
              scale: 1.05,
              color: "#60A5FA"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default React.memo(Footer1)