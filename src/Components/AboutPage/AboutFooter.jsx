import React from "react";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// Social Icons Component (create separate file or add here)
const SocialIcons = {
  Facebook: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.201 14.816 3.71 13.665 3.71 12.368s.491-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.806.875 1.297 2.026 1.297 3.323s-.491 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
    </svg>
  )
};

function AboutFooter() {
  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4 md:mb-0"
        >
          <ComputerDesktopIcon className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold">WiaTech</h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <motion.span whileHover={{ scale: 1.2 }} className="cursor-pointer text-gray-400 hover:text-blue-500 transition-colors">
            <SocialIcons.Facebook />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} className="cursor-pointer text-gray-400 hover:text-blue-400 transition-colors">
            <SocialIcons.Twitter />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} className="cursor-pointer text-gray-400 hover:text-blue-600 transition-colors">
            <SocialIcons.Linkedin />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }} className="cursor-pointer text-gray-400 hover:text-pink-500 transition-colors">
            <SocialIcons.Instagram />
          </motion.span>
        </motion.div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 md:pr-10 p-0"
        >
          <h1 className="text-xl font-bold mb-4">Subscribe Newsletter</h1>
          <p className="text-gray-400 mb-6">
            We understand that every challenge is an opportunity we are here
            seize a team of dedicated professionals and a culture
          </p>
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Sign Up
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm">By subscribing, you're accept Privacy Policy</p>
        </motion.div>

        {/* Services & Locations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full lg:w-1/2 flex flex-col md:flex-row gap-8"
        >
          {/* Services */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-4">Services</h1>
            <div className="space-y-2">
              {["Web (UX/UI) Design", "Machine Learning & AI", "Web Development", "IT Cyber Security", "Cloud Computing", "Analytic & Engineering"].map((service, index) => (
                <motion.a 
                  key={index}
                  href=""
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-4">Locations</h1>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>55 Main Street, 2nd block<br />Malborne, Australia</span>
              </div>
              <motion.a 
                href=""
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                Contact
              </motion.a>
              <motion.a 
                href=""
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                support@gmail.com
              </motion.a>
              <motion.a 
                href=""
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                +91 8795901180
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 pt-6 text-center"
      >
        <p className="text-gray-400">© 2023 WiaTech - IT Services. All rights reserved.</p>
      </motion.div>
    </div>
  );
}

export default React.memo(AboutFooter);